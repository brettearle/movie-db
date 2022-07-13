<script>
    import { each } from "svelte/internal"
    import {watchList} from "../stores"

    const removeWatchList = (movie) => {
        let filteredWL = $watchList.filter((value) => value.Title !== movie.Title) 
        watchList.update(() => filteredWL)
    }
</script>


<svelte:head>
    <title>Movie DB</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<header>
    <span><a href="/">Back to Search</a></span>
</header>

<section class="cardDisplay">
{#each $watchList as movie}
    {#if movie.Title !== undefined }
        <section id={movie.imdbID} class="card">
            <img src={movie.Poster} alt={movie.Title}>
            <section>
                <h2>{movie.Title}</h2>
                <p>
                    <span id="rated">{movie.Rated}</span>
                    <span>{movie.Year}</span>
                    <span>{movie.Genre}</span>
                    <span>{movie.Runtime}</span>
                </p>
                <p>{movie.Actors}</p>
                <button on:click|preventDefault={() => removeWatchList(movie)}>Remove From List</button>
            </section>
        </section>
    {/if}
{/each}
</section>
<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 75px;
        background-color: gray;
        margin: 0;
        color: #f5f5f5;
    }

    .cardDisplay {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 20px;
    }

    .card {
        display: flex;
        align-items: center;
        border: solid 1px gray;
        box-shadow: 2px 2px rgb(98, 98, 98);
        border-radius: 10px;
        width: 31%;
        margin: 1%;
    }

    img {
        width: 200px;
        margin: 10px;
    }

    a {
        font-size: 2em;
        text-decoration: none;
        border-radius: 10px;
        padding: 10px;
        color: inherit;
        font-family: Inter, Arial, Helvetica, sans-serif;
    }

    a:hover {
        background-color: lightgray;
        color: black;
    }

    button {
        background-color: crimson;
        border: none;
        border-radius: 5px;
        font-size: 1em;
        padding: 5px;
    }

    button:hover {
        background-color: darkred;
        color: #f5f5f5;
    }

</style>