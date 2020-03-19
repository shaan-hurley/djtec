<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let player = {
    artist: "",
    title: "",
    points: 0
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch("addplayer", player);
    player = {
      artist: "",
      title: "",
      points: 0
    };
  };
</script>

<form on:submit={onSubmit} class="grid-3">
  <input type="text" placeholder="Artist" bind:value={player.artist} />
  <input type="text" placeholder="Title" bind:value={player.title} />
  <input type="submit" class="btn btn-primary" value="Add Song" />
</form>
