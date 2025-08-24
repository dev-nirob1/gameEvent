<template>
  <main class="profile">
    <!-- Cover + Avatar -->
    <section class="profile__hero">
      <div class="profile__cover"></div>
      <div class="profile__hero-inner">
        <div class="profile__avatar-wrap">
          <img :src="user.avatarUrl" alt="Avatar" class="profile__avatar" />
          <button class="btn btn--sm btn--ghost" @click="onChangeAvatar">Change</button>
        </div>

        <div class="profile__id">
          <h1 class="profile__name">{{ user.username }}</h1>
          <div class="profile__meta">
            <span class="chip">UID: {{ user.uid }}</span>
            <span class="chip">Joined: {{ formatDate(user.joinedAt) }}</span>
            <span class="chip" :class="user.verified ? 'chip--success' : 'chip--muted'">
              {{ user.verified ? 'Verified' : 'Unverified' }}
            </span>
          </div>
          <p class="profile__bio" v-if="user.bio">{{ user.bio }}</p>
          <div class="profile__actions">
            <button class="btn" @click="$emit('edit-profile', user.uid)">Edit Profile</button>
            <button class="btn btn--secondary" @click="$emit('challenge', user.uid)">Challenge</button>
            <button class="btn btn--ghost" @click="$emit('message', user.uid)">Message</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Stats -->
    <section class="grid stats">
      <article class="card stat">
        <div class="stat__label">Rank</div>
        <div class="stat__value">#{{ user.rank }}</div>
        <div class="stat__hint">Top {{ topPercent }}%</div>
      </article>

      <article class="card stat">
        <div class="stat__label">Rating (Elo)</div>
        <div class="stat__value">{{ user.rating }}</div>
        <div class="stat__hint">Peak: {{ user.peakRating }}</div>
      </article>

      <article class="card stat">
        <div class="stat__label">Win Rate</div>
        <div class="stat__value">{{ winRate }}%</div>
        <div class="stat__hint">{{ user.wins }}W / {{ user.losses }}L</div>
      </article>

      <article class="card stat">
        <div class="stat__label">Matches</div>
        <div class="stat__value">{{ totalMatches }}</div>
        <div class="stat__hint">Streak: {{ user.streak }} 🔥</div>
      </article>
    </section>

    <!-- Wallet -->
    <section class="card wallet">
      <div class="wallet__row">
        <div class="wallet__balance">
          <div class="wallet__label">Wallet Balance</div>
          <div class="wallet__value">৳ {{ user.wallet.balance.toLocaleString() }}</div>
        </div>
        <div class="wallet__coins">
          <div class="wallet__label">Coins</div>
          <div class="wallet__value">{{ user.wallet.coins.toLocaleString() }}</div>
        </div>
        <div class="wallet__buttons">
          <button class="btn" @click="$emit('deposit', user.uid)">Deposit</button>
          <button class="btn btn--secondary" @click="$emit('withdraw', user.uid)">Withdraw</button>
          <button class="btn btn--ghost" @click="$emit('transactions', user.uid)">History</button>
        </div>
      </div>
      <div class="wallet__methods">
        <span class="chip">bKash</span>
        <span class="chip">Nagad</span>
        <span class="chip">Rocket</span>
        <span class="chip">Card</span>
      </div>
    </section>

    <!-- Event Registrations -->
    <section class="card">
      <div class="card__header">
        <h2>Event Registrations</h2>
        <div class="tabs">
          <button class="tab" :class="{ 'tab--active': eventTab === 'upcoming' }" @click="eventTab = 'upcoming'">Upcoming</button>
          <button class="tab" :class="{ 'tab--active': eventTab === 'completed' }" @click="eventTab = 'completed'">Completed</button>
        </div>
      </div>

      <div v-if="eventTab === 'upcoming'">
        <div v-if="upcomingEvents.length" class="table">
          <div class="table__head">
            <div>Event</div><div>Start</div><div>Entry</div><div>Prize</div><div>Status</div><div></div>
          </div>
          <div class="table__body">
            <div v-for="e in upcomingEvents" :key="e.id" class="table__row">
              <div class="t-title">
                <div class="t-name">{{ e.title }}</div>
                <div class="t-sub">{{ e.category }} • {{ e.players }}/{{ e.maxPlayers }} players</div>
              </div>
              <div>{{ formatDateTime(e.startsAt) }}</div>
              <div>৳ {{ e.entryFee }}</div>
              <div>৳ {{ e.prize }}</div>
              <div>
                <span class="chip" :class="statusClass(e.status)">{{ e.status }}</span>
              </div>
              <div class="t-actions">
                <button class="btn btn--sm btn--ghost" @click="$emit('view-event', e.id)">Details</button>
                <button class="btn btn--sm" v-if="e.status === 'Registered'" @click="$emit('checkin', e.id)">Check-in</button>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="muted">No upcoming registrations.</p>
      </div>

      <div v-else>
        <div v-if="completedEvents.length" class="table">
          <div class="table__head">
            <div>Event</div><div>Ended</div><div>Placed</div><div>Winnings</div><div>K/D</div><div></div>
          </div>
          <div class="table__body">
            <div v-for="e in completedEvents" :key="e.id" class="table__row">
              <div class="t-title">
                <div class="t-name">{{ e.title }}</div>
                <div class="t-sub">{{ e.category }}</div>
              </div>
              <div>{{ formatDateTime(e.endsAt) }}</div>
              <div>#{{ e.placement || '-' }}</div>
              <div>৳ {{ e.winnings || 0 }}</div>
              <div>{{ e.kills }}/{{ e.deaths }}</div>
              <div class="t-actions">
                <button class="btn btn--sm btn--ghost" @click="$emit('share-result', e.id)">Share</button>
                <button class="btn btn--sm btn--secondary" @click="$emit('report-issue', e.id)">Report</button>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="muted">No past events yet.</p>
      </div>
    </section>

    <!-- Recent Matches -->
    <section class="card">
      <div class="card__header">
        <h2>Recent Matches</h2>
        <button class="btn btn--ghost btn--sm" @click="$emit('view-all-matches', user.uid)">View all</button>
      </div>
      <div v-if="user.recentMatches.length" class="table">
        <div class="table__head">
          <div>Date</div><div>Mode</div><div>Result</div><div>Points</div><div>Teammates</div><div></div>
        </div>
        <div class="table__body">
          <div v-for="m in user.recentMatches" :key="m.id" class="table__row">
            <div>{{ formatDateTime(m.playedAt) }}</div>
            <div>{{ m.mode }}</div>
            <div>
              <span class="chip" :class="m.result === 'Win' ? 'chip--success' : 'chip--danger'">{{ m.result }}</span>
            </div>
            <div>{{ m.points }}</div>
            <div class="avatars">
              <img v-for="(mate, idx) in m.teammates" :key="idx" :src="mate.avatar" :title="mate.name" class="avatar-sm" />
            </div>
            <div class="t-actions">
              <button class="btn btn--sm btn--ghost" @click="$emit('match-details', m.id)">Details</button>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="muted">No matches played recently.</p>
    </section>

    <!-- Achievements + Linked Accounts -->
    <section class="grid">
      <article class="card">
        <div class="card__header"><h2>Achievements</h2></div>
        <div class="badges">
          <div v-for="b in user.badges" :key="b.id" class="badge" :title="b.description">
            <img :src="b.icon" :alt="b.name" />
            <span>{{ b.name }}</span>
          </div>
        </div>
      </article>

      <article class="card">
        <div class="card__header"><h2>Linked Accounts</h2></div>
        <ul class="list">
          <li><span>Phone</span><strong>{{ user.contact.phone || '—' }}</strong></li>
          <li><span>Email</span><strong>{{ user.contact.email || '—' }}</strong></li>
          <li><span>Discord</span><strong>{{ user.social.discord || '—' }}</strong></li>
          <li><span>Facebook</span><strong>{{ user.social.facebook || '—' }}</strong></li>
          <li><span>Location</span><strong>{{ user.location || '—' }}</strong></li>
          <li><span>Preferred Category</span><strong>{{ user.preferredCategory || '—' }}</strong></li>
        </ul>
      </article>
    </section>
  </main>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

/**
 * You can replace this with real API data.
 * All fields are here so you can map easily from your backend.
 */
const user = reactive({
  uid: 'LD-10923',
  username: 'KnightRider',
  avatarUrl: 'https://i.pravatar.cc/160?img=12',
  coverUrl: '',
  joinedAt: '2024-02-12T10:00:00Z',
  verified: true,
  bio: 'Ludu grinder. Strategy > luck. Always down for 1v1 tournaments.',
  location: 'Dhaka, BD',
  preferredCategory: '1v1 Classic',

  // Competitive
  rank: 128,
  rating: 1742,
  peakRating: 1825,
  wins: 246,
  losses: 154,
  streak: 4,

  // Wallet
  wallet: {
    balance: 1520,
    coins: 4200,
  },

  // Events
  registrations: [
    { id: 'ev-1', title: 'Friday Night Ludu Clash', category: '2v2 Draft', players: 36, maxPlayers: 64, entryFee: 50, prize: 1000, status: 'Registered', startsAt: '2025-08-29T16:00:00+06:00' },
    { id: 'ev-2', title: 'BD Weekend Cup', category: '1v1 Classic', players: 64, maxPlayers: 64, entryFee: 100, prize: 2500, status: 'Waitlisted', startsAt: '2025-09-05T20:00:00+06:00' },
    { id: 'ev-3', title: 'Monsoon Masters', category: '1v1 Classic', players: 128, maxPlayers: 128, entryFee: 100, prize: 3000, status: 'Finished', endsAt: '2025-08-10T21:30:00+06:00', placement: 3, winnings: 300, kills: 12, deaths: 6 },
  ],

  // Matches
  recentMatches: [
    { id: 'm-1', playedAt: '2025-08-20T19:20:00+06:00', mode: '1v1 Classic', result: 'Win', points: '+22', teammates: [] },
    { id: 'm-2', playedAt: '2025-08-19T22:10:00+06:00', mode: '2v2 Draft', result: 'Loss', points: '-12', teammates: [
      { name: 'Sadia', avatar: 'https://i.pravatar.cc/100?img=5' },
      { name: 'Rafi',  avatar: 'https://i.pravatar.cc/100?img=2' },
    ]},
  ],

  // Achievements
  badges: [
    { id: 'b-1', name: 'Top 500', icon: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/hexagon.svg', description: 'Reached top 500 global rank.' },
    { id: 'b-2', name: 'Clutch King', icon: 'https://cdn.jsdelivr.net/gh/tabler/tabler-icons/icons/bolt.svg', description: 'Won 5 clutch games in a row.' },
  ],

  // Contacts + Social
  contact: { phone: '+8801XXXXXXXXX', email: 'knight@example.com' },
  social:  { discord: 'knight#9911', facebook: 'fb.com/knightrider' },
})

const eventTab = ref('upcoming')

const totalMatches = computed(() => user.wins + user.losses)
const winRate = computed(() => (totalMatches.value ? Math.round((user.wins / totalMatches.value) * 100) : 0))
const topPercent = computed(() =>  Math.max(1, Math.round((user.rank / 50000) * 100))) // naive; adjust with your leaderboard size

const upcomingEvents = computed(() => user.registrations
  .filter(e => ['Registered', 'Waitlisted', 'Checked-in'].includes(e.status))
  .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt)))

const completedEvents = computed(() => user.registrations
  .filter(e => e.status === 'Finished')
  .sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt)))

function statusClass(status) {
  switch (status) {
    case 'Registered': return 'chip--info'
    case 'Checked-in': return 'chip--success'
    case 'Waitlisted': return 'chip--warning'
    case 'Finished':   return 'chip--muted'
    default:           return ''
  }
}

// Helpers (swap to your i18n/date utils)
function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString()
}
function formatDateTime(iso) {
  const d = new Date(iso)
  return d.toLocaleString()
}

// UI actions (wire to real flows)
function onChangeAvatar() {
  // Open file dialog / trigger uploader
  alert('Open avatar uploader…')
}
</script>

<style scoped>
:root {
  --bg: #0b0f17;
  --card: #121826;
  --muted: #8b95a7;
  --text: #e8eefc;
  --primary: #4f7cff;
  --secondary: #7a8ba6;
  --success: #22c55e;
  --warning: #f59e0b;
  --danger: #ef4444;
  --stroke: #1f2a44;
  --chip: #1a2336;
  --radius: 14px;
}

.profile {
  display: grid;
  gap: 16px;
  color: var(--text);
  background: var(--bg);
  padding: 16px;
}

/* Hero */
.profile__hero { position: relative; }
.profile__cover {
  height: 160px;
  border-radius: var(--radius);
  background: linear-gradient(135deg, #152238, #1e2a44 60%, #263b6f);
}
.profile__hero-inner {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 16px;
  margin-top: -48px;
  padding: 0 16px;
}
.profile__avatar-wrap { display: grid; justify-items: center; gap: 8px; }
.profile__avatar {
  width: 120px; height: 120px; border-radius: 50%;
  border: 4px solid var(--bg); object-fit: cover; background: #0f172a;
}
.profile__id { display: grid; gap: 8px; align-content: start; }
.profile__name { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: .3px; }
.profile__meta { display: flex; flex-wrap: wrap; gap: 8px; }
.profile__bio { margin: 4px 0 0; color: var(--muted); }
.profile__actions { display: flex; gap: 8px; margin-top: 8px; }

/* Grid + Cards */
.grid {
  display: grid;
  gap: 16px;
}
@media (min-width: 900px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
  .grid > .card:nth-child(1n+1) { grid-column: span 1; }
  .grid > .card:has(.badges), .grid > .card:has(.list) { grid-column: span 2; }
}
.card {
  background: var(--card);
  border: 1px solid var(--stroke);
  border-radius: var(--radius);
  padding: 16px;
}
.card__header {
  display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;
}
h2 { margin: 0; font-size: 18px; }

/* Stats */
.stat { display: grid; gap: 6px; align-content: center; text-align: left; }
.stat__label { color: var(--muted); font-size: 12px; text-transform: uppercase; letter-spacing: .08em; }
.stat__value { font-size: 24px; font-weight: 700; }
.stat__hint { color: var(--secondary); font-size: 12px; }

/* Wallet */
.wallet__row {
  display: grid; gap: 12px; align-items: center;
}
@media (min-width: 700px) {
  .wallet__row { grid-template-columns: 1fr 1fr auto; }
}
.wallet__label { color: var(--muted); font-size: 12px; }
.wallet__value { font-size: 20px; font-weight: 700; }
.wallet__buttons { display: flex; gap: 8px; justify-content: flex-end; }
.wallet__methods { margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap; }

/* Table */
.table { width: 100%; }
.table__head, .table__row {
  display: grid; gap: 12px; align-items: center;
  grid-template-columns: 2fr 1.2fr 0.8fr 0.8fr 0.8fr auto;
  padding: 8px 0;
}
.table__head { color: var(--muted); font-size: 12px; border-bottom: 1px solid var(--stroke); }
.table__row { border-bottom: 1px dashed var(--stroke); }
.table__row:last-child { border-bottom: 0; }
.t-title { display: grid; gap: 2px; }
.t-name { font-weight: 600; }
.t-sub { color: var(--muted); font-size: 12px; }
.t-actions { display: flex; gap: 6px; justify-content: flex-end; }
.muted { color: var(--muted); }

/* Avatars in match table */
.avatars { display: flex; gap: 6px; }
.avatar-sm { width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--stroke); }

/* Badges */
.badges { display: flex; gap: 12px; flex-wrap: wrap; }
.badge {
  display: flex; align-items: center; gap: 8px;
  background: #0f172a; border: 1px solid var(--stroke); padding: 8px 10px;
  border-radius: 999px;
}
.badge img { width: 18px; height: 18px; }

/* Linked accounts list */
.list { list-style: none; padding: 0; margin: 0; display: grid; gap: 8px; }
.list li { display: flex; justify-content: space-between; border: 1px solid var(--stroke); border-radius: 10px; padding: 10px 12px; }
.list span { color: var(--muted); }

/* Chips & Tabs */
.chip {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--chip); border: 1px solid var(--stroke);
  color: var(--text); font-size: 12px; padding: 4px 8px; border-radius: 999px;
}
.chip--success { background: rgba(34,197,94,.12); border-color: #1d8a49; color: #8ff0b3; }
.chip--warning { background: rgba(245,158,11,.12); border-color: #9b6b08; color: #ffd28c; }
.chip--danger  { background: rgba(239,68,68,.12); border-color: #9b1c1c; color: #ff9b9b; }
.chip--info    { background: rgba(79,124,255,.14); border-color: #3557c7; color: #aecdff; }
.chip--muted   { color: var(--secondary); }

.tabs { display: inline-flex; gap: 6px; }
.tab {
  background: transparent; border: 1px solid var(--stroke);
  color: var(--text); padding: 6px 10px; border-radius: 999px; cursor: pointer;
}
.tab--active { background: #1a2644; border-color: #2b3f73; }

/* Buttons */
.btn {
  background: var(--primary);
  color: white; border: none; padding: 10px 14px; border-radius: 10px;
  cursor: pointer; font-weight: 600; letter-spacing: .2px;
}
.btn--secondary { background: #334155; }
.btn--ghost { background: transparent; border: 1px solid var(--stroke); color: var(--text); }
.btn--sm { padding: 6px 10px; font-size: 12px; }

/* Responsive tweaks */
@media (max-width: 799px) {
  .table__head, .table__row {
    grid-template-columns: 1.8fr 1fr .8fr .8fr .8fr auto;
  }
}
@media (max-width: 600px) {
  .profile__hero-inner { grid-template-columns: 1fr; }
  .profile__avatar { width: 96px; height: 96px; }
  .table__head, .table__row {
    grid-template-columns: 1.6fr 1fr .8fr .8fr auto;
  }
  .table__head > :nth-child(5), .table__row > :nth-child(5) { display: none; } /* hide one column on small */
}
</style>
