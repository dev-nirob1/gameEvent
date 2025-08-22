import AllEvents from "./Event/Pages/AllEvents.vue";
import CreateEvent from "./Event/Pages/CreateEvent.vue";
import UpdateEvent from "./Event/Pages/UpdateEvent.vue";

export default [
  {
    path: '/events/all',
    name: 'all_events',
    component: AllEvents
  },
  {
    path: '/event/create',
    name: 'event_create',
    component: CreateEvent,
  },
    {
    path: '/event/update/:id',
    name: 'event_update',
    component: UpdateEvent,
  },
]

