import AuthLayout from "./AuthLayout/AuthLayout.vue";
import LoginPage from "./Pages/LoginPage.vue";
import RegisterPage from "./Pages/RegisterPage.vue";

export default [
  {
    path:'/login',
    name:'AuthLogin',
    component: AuthLayout,
    meta: {auth: false},
    redirect:'/',
    children:[
      {
        path: '/login',
        name: 'login',
        component: LoginPage
      },
      {
        path: '/register',
        name: 'register',
        component: RegisterPage
      }
    ]
  }
]
