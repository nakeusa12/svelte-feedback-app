<script>
  import { FeedbackStore } from '../stores'
  // import { createEventDispatcher } from "svelte"; 
  import CardFeedback from "./CardFeedback.svelte"
  
  export let item;
  // const dispatch = createEventDispatcher();

  const handleDelete = (itemId) => {
    // dispatch('delete-feedback', itemId);
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }
</script>


<CardFeedback>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</CardFeedback>


<style>
  .num-display{
    position: absolute;
    top: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    border: none;
    background: none;
  }
</style>