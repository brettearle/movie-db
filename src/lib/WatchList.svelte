<script>
    import {selectedMovie, watchList} from "../stores"

    
    const addWatchList = (selectedMovie) => {
        watchList.update((wl) => [...wl, selectedMovie])
        console.log($watchList)
    }

    const removeWatchList = (selectedMovie) => {
        let filteredWL = $watchList.filter((value) => value.Title !== selectedMovie.Title) 
        watchList.update(() => filteredWL)
    }
   
</script>

    {#await $watchList}
        <span>waiting</span>
    {:then $watchList} 
        {#if $watchList.find(el => el.Title === $selectedMovie.Title) !== undefined}
            <span class="watchlist remove" on:click={() => removeWatchList($selectedMovie)}>Remove from Watchlist</span>
        {:else}
            <span class="watchlist" on:click={() => addWatchList($selectedMovie)}>Add to Watchlist</span>
        {/if}
    {/await}
   
<style>
    .watchlist {
        justify-self: flex-end;
        height: fit-content;
        margin-left: auto;
        margin-top: 20px;
        margin-right: 20px;
        border: solid 1px black;
        border-radius: 4px;
        padding: 5px 5px;
    }

    .remove {
        background-color: crimson;
    }
</style>