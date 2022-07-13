<script>
    import {API_URL, moviesSearch, currentSelectedLI,selectedMovie,typeFilter, yearFilter} from "../stores"
    
    const fetchMovie = async (id) => {
        const res = await fetch(`${$API_URL}&i=${id}&plot=full`);
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
                    {#if movie.Type === $typeFilter || $typeFilter === 'any'}
                    {#if Number(movie.Year) > ($yearFilter[0] + 1900) && Number(movie.Year) < ($yearFilter[1] +1900)}
                        <li id='{movie.imdbID}' 
                            class:red="{$currentSelectedLI === movie.imdbID}"
                            on:click="{() => {
                                $currentSelectedLI = movie.imdbID
                                fetchMovie(movie.imdbID)
                            }}"
                            >
                            <img class="itemImage" src={movie.Poster} alt={movie.Title}>
                            <div class="itemDetails">
                                <h2>{movie.Title}</h2>
                                <p>{movie.Year}</p> 
                            </div>
                        </li>
                        {/if}
                    {/if}
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
        background-color: rgba(204, 200, 200, 0.2);
    }

    ul {
        margin-left: 0;
        padding-left: 0;
        padding-right: 5px;
        width: 30%;
        overflow-y: scroll;
        max-height: 88vh;
    }

    li {
        list-style: none;
        border-bottom: 1px solid #aaa;
		padding: 1em;
		margin: none;
        display: flex;
        justify-content: space-around;
        align-content: center;
        align-items: center;
    }

    .itemImage {
        height: 100px;
    }

    .itemDetails {
        width: 60%;
        margin-left: 5px;
    }

    .itemDetails p {
        font-weight: 300;
        font-size: .8em;
        margin-top: 2px;
    }

    .itemDetails h2 {
        margin-bottom: 2px;
    }

    ul::-webkit-scrollbar {
        width: .5em;
    }       
 
    ul::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
 
    ul::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        
    }
</style>