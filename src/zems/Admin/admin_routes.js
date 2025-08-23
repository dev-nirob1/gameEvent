import AllEvents from './Event/Pages/AllEvents.vue'
import CreateEvent from './Event/Pages/CreateEvent.vue'
import UpdateEvent from './Event/Pages/UpdateEvent.vue'
import WithdrawalHistory from './History/Pages/WithdrawalHistory.vue'
import AdminLayout from './Layout/AdminLayout.vue'

export default [
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'events/all',
        name: 'all_events',
        component: AllEvents,
      },
      {
        path: 'event/create',
        name: 'event_create',
        component: CreateEvent,
      },
      {
        path: 'event/update/:id',
        name: 'event_update',
        component: UpdateEvent,
      },
      {
        path: 'withdrawal',
        name: 'withdrawal',
        component: WithdrawalHistory,
      },
    ],
  },
]
