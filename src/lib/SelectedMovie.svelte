<script>
    import {selectedMovie} from "../stores"
</script>

{#await $selectedMovie}
    <p>....waiting</p>  
{:then selectedMovie}
    {#if selectedMovie.Title !== undefined}
    <section class='container'>
        <h2>{selectedMovie.Title}</h2>
        <img src={selectedMovie.Poster} alt={selectedMovie.Title}>
        <p>Rated: {selectedMovie.Rated}</p>
        <p>Genre: {selectedMovie.Genre}</p>
        <p>Plot: {selectedMovie.Plot}</p>
    </section>
    {/if}
{/await}

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 60%;
    }

    img {
        height: 400px;
        width: 300px;
    }

    p {
        padding-left: 10px;
    }

</style>
