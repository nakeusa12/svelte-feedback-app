<script>
  import { FeedbackStore } from '../stores'
  import { fade, scale } from "svelte/transition"
  import FeedbackItem from "./FeedbackItem.svelte"
  // import { onMount } from 'svelte';
  // let feedback = [];

  // FeedbackStore.subscribe((data) => feedback = data)

  // onMount

</script>

{#each $FeedbackStore as fb (fb.id) }
  <div in:scale out:fade="{{ duration: 500 }}">
    <FeedbackItem item={fb} />
  </div>
{/each}