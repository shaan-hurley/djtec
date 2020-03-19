<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let artist;
  export let title;
  export let points = 0;
  let showControls = false;

  const addPoint = () => (points += 1);
  const removePoint = () => (points -= 1);
  const toggleControls = () => (showControls = !showControls);
  const onDelete = () => dispatch("removeplayer", artist);
</script>

<style>
  h1 {
    color: #204f6e;
  }

  h3 { 
    margin-bottom: 10px;
  }
</style>

<div class="card">
  <h1>
     {artist} - {title}
    <button class="btn btn-sm" on:click={toggleControls}>
      {#if showControls}-{:else}+{/if}
    </button>
    <button class="btn btn-danger btn-sm" on:click={onDelete}>x</button>
  </h1>
  <h3>Votes: {points}</h3>
  {#if showControls}
    <button class="btn" on:click={addPoint}>+</button>
    <button class="btn btn-dark" on:click={removePoint}>-</button>
    <input type="text" bind:value={points} />
  {/if}
</div>
