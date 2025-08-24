import DepositHistory from './Deposit/Pages/DepositHistory.vue'
import CreateDeposit from './Deposit/Pages/CreateDeposit.vue'
import UserLayout from './UserLayout/UserLayout.vue'
import MyEvents from './Events/Pages/MyEvents.vue'

export default [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/user/deposit',
        name: 'create-deposit',
        component: CreateDeposit,
      },
      {
        path: '/user/deposit-history',
        name: 'deposit-history',
        component: DepositHistory,
      },
      {
        path: '/user/my-events',
        name: 'my-events',
        component: MyEvents,
      },
    ],
  },
]
