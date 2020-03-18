<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let song = {
    artist: "",
    title: ""
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch("addplayer", song);
    song = {
      artist: "",
      title: ""
    };
  };
</script>

<form on:submit={onSubmit} class="grid-3">
  <input type="text" placeholder="Artist Name" bind:value={song.artist} />
  <input type="text" placeholder="Song title" bind:value={song.title} />
  <input type="submit" class="btn btn-primary" value="Enter" />
</form>
