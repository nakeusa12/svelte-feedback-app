<script>
  import { v4 as uuidv4} from "uuid"
  import { FeedbackStore } from '../stores'
  // import { createEventDispatcher } from "svelte"; 
  import CardFeedback from "./CardFeedback.svelte"
  import RatingSelect from "./RatingSelect.svelte"
  import Button from "./Button.svelte"

  let text = '';
  let rating = 10;
  let btnDisabled = true;
  let min = 10;
  let message;
  // const dispatch = createEventDispatcher();

  const handleSelect = e => {
    rating = e.detail;
  };

  const handleInput = () => {
    if(text.trim().length <= min ){
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  }

  const handleSubmit = () => {
    if(text.trim().length > min){
      const newFeedback = {
        id: uuidv4(),
        text,
        rating: +rating
      }

      // dispatch('add-feedback', newFeedback)
      FeedbackStore.update((currentFeedback) =>{
        return [newFeedback, ...currentFeedback]
      })

      text='';
    }
  }
</script>

<CardFeedback>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
      <Button type="submit" disabled={btnDisabled}>Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</CardFeedback>

<style>
  header{
    max-width: 400px;
    margin: auto;
  }

  header h2{
    font-size: 22px;
    text-align: center;
  }

  .input-group{
    display: flex;
    width: 100%;
    border: 1px #ccc solid;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
  }

  .input-group input{
    border: none;
    width: 100%;
    margin-right: 10px;
    outline: none;
    font-size: 14px; 
    flex: 1;
  }
</style>