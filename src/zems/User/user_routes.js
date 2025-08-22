import DepositHistory from "./Deposit/Pages/DepositHistory.vue";
import DepositPage from "./Deposit/Pages/DepositPage.vue";

export default [
  {
    path: '/deposit',
    name: 'deposit',
    component: DepositPage,
  },
  {
    path: '/deposit-history',
    name: 'deposit-history',
    component: DepositHistory,
  },
]
