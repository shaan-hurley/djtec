<script>
  import Player from "./Player.svelte";
  import AddPlayer from "./AddPlayer.svelte";

  let players = [

  ];

  const addPlayer = e => {
    const newPlayer = e.detail;
    players = [...players, newPlayer];
  };
 
  const removePlayer = e => {
    players = players.filter(player => player.artist !== e.detail);
  };
</script>

<main> 
	<div class="container">
	<AddPlayer on:addplayer={addPlayer} />
	{#if players.length === 0}
		<p>No Songs</p>
	{:else}
		{#each players as player}
		<Player
			artist={player.artist}
			title={player.title}
			on:removeplayer={removePlayer} />
		{/each}
	{/if}
	</div>
</main>
