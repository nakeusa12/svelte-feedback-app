import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sit amet leo sit amet rhoncus. Donec egestas turpis risus.'
  },
  {
    id: 2,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sit amet leo sit amet rhoncus. Donec egestas turpis risus.'
  },
  {
    id: 3,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sit amet leo sit amet rhoncus. Donec egestas turpis risus.'
  },
  {
    id: 4,
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sit amet leo sit amet rhoncus. Donec egestas turpis risus.'
  },
])