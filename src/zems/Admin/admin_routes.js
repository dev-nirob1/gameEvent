import CreateEvent from "./Event/Pages/CreateEvent.vue";
import UpdateEvent from "./Event/Pages/UpdateEvent.vue";

export default [
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

