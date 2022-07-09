<script>
    import {API_URL, moviesSearch, currentSelectedLI,selectedMovie} from "../stores"
    
    const fetchMovie = async (id) => {
        const res = await fetch(`${$API_URL}&i=${id}`);
        const data = await res.json(); 
        $selectedMovie = data  
    } 

</script>

<ul>
    {#await $moviesSearch}
        <p>...waiting</p>
    {:then $moviesSearch}
        {#if $moviesSearch !== undefined}
            {#each $moviesSearch as movie }
                <li id='{movie.imdbID}' 
                class:red="{$currentSelectedLI === movie.imdbID}"
                on:click="{() => {
                    $currentSelectedLI = movie.imdbID
                    fetchMovie(movie.imdbID)
                    }}"
                >
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                </li>
            {/each}
        {/if}
        {#if $moviesSearch === undefined}
            <p>No Movies Found</p>
        {/if}   
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}        
</ul>

<style>
    .red {
        background-color: red;
    }

    ul {
        margin-left: 0;
        padding-left: 0;
        width: 40%;
    }

    li {
        list-style: none;
        border: 1px solid darkgrey;
        border-radius: 5px;
        margin: 3px 0;
    }
</style>