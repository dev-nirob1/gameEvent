import FrontLayout from "./Layout/FrontLayout.vue";
import EventDetails from "@zems/Front/Pages/EventDetails.vue";
import EventsPage from "@zems/Front/Pages/EventsPage.vue";
import HomePage from "@zems/Front/Pages/HomePage.vue";
import MyEventPage from "@zems/Front/Pages/MyEventPage.vue";
import WithdrawHistory from "@zems/Front/Pages/WithdrawHistory.vue";

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
          path: "/withdraw-history",
          name: "withdraw-history",
          component: WithdrawHistory
        },
        {
          path: "/my-event",
          name: "my-event",
          component: MyEventPage
        },
    ]
  }
]
