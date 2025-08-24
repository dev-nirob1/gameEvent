import FrontLayout from "./Layout/FrontLayout.vue";
import EventDetails from "@zems/Front/Pages/EventDetails.vue";
import EventsPage from "@zems/Front/Pages/EventsPage.vue";
import HomePage from "@zems/Front/Pages/HomePage.vue";
import LoginPage from "../Auth/Pages/LoginPage.vue";


export default [
  {
    path: "/",
    component: FrontLayout,
    children: [
      {
          path: "/",
          name: "home",
          component: HomePage,
        },
        {
          path: "/events",
          name: "events",
          component: EventsPage
        },
        {
          path: "/events-details/:slug",
          name: "events-details",
          component: EventDetails
        },
        {
          path: "/login",
          name: "login",
          component: LoginPage
        },
        // {
        //   path: "/withdraw-history",
        //   name: "withdraw-history",
        //   component: WithdrawHistory
        // },
        // {
        //   path: "/my-event",
        //   name: "my-event",
        //   component: MyEventPage
        // },
    ]
  }
]
