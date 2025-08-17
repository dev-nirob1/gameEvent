import FrontLayout from "./Layout/FrontLayout.vue";
import ContactPage from "./Pages/ContactPage.vue";
import EventDetails from "./Pages/EventDetails.vue";
import EventsPage from "./Pages/EventsPage.vue";
import HomePage from "./Pages/HomePage.vue";
import MyEventPage from "./Pages/MyEventPage.vue";
import WithdrawHistory from "./Pages/WithdrawHistory.vue";

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
          path: "/contact-us",
          name: "contact-us",
          component: ContactPage
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
