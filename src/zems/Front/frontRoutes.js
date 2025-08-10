import FrontLayout from "./Layout/FrontLayout.vue";
import ContactPage from "./Pages/ContactPage.vue";
import EventsPage from "./Pages/EventsPage.vue";
import HomePage from "./Pages/HomePage.vue";

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
          path: "/contact-us",
          name: "/contact-us",
          component: ContactPage
        },
    ]
  }
]
