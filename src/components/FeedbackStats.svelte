<script>
  import { FeedbackStore } from '../stores'
  // export let count, average;

  $: count = $FeedbackStore.length
	$: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length
</script>

{#if count}
  <div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Rating Average: {average}</h4>
  </div>
  {:else}
  <p>No Feedback</p>
{/if}

<style>
  .feedback-stats{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
</style>