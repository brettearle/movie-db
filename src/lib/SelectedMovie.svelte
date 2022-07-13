<script>
    import {selectedMovie} from "../stores"
    import WatchList from '$lib/WatchList.svelte'
</script>

{#await $selectedMovie}
    <p>....waiting</p>  
{:then selectedMovie}
    {#if selectedMovie.Title !== undefined}
    <section class='container'>
        <section class="mainDetails">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title}>
            <div class="mainDetailsText">
                <h2>{selectedMovie.Title}</h2>
                <p>
                    <span id="rated">{selectedMovie.Rated}</span>
                    <span>{selectedMovie.Year}</span>
                    <span>{selectedMovie.Genre}</span>
                    <span>{selectedMovie.Runtime}</span>
                </p>
                <p>{selectedMovie.Actors}</p>
            </div>
            <WatchList />
        </section>
        <section class="plot">
            <p>{selectedMovie.Plot}</p>
        </section>
        <section class="ratings">
            <div class="rating">
                <p>{selectedMovie.Ratings[0].Value}</p>
                <p>{selectedMovie.Ratings[0].Source}</p>
            </div>
            <div class="middleRating rating" >
                {#if selectedMovie.Ratings[1] !== undefined}
                <p>{selectedMovie.Ratings[1].Value}</p>
                <p>{selectedMovie.Ratings[1].Source}</p>
                {/if}
            </div>
            <div class="rating">
                {#if selectedMovie.Ratings[2] !== undefined}
                <p>{selectedMovie.Ratings[2].Value}</p>
                <p>{selectedMovie.Ratings[2].Source}</p>
                {/if}
            </div>     
        </section>
    </section>
    {/if}
{/await}

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 70%;
        margin: 20px 20px;
    }

    .mainDetails {
        display: flex;
        width: 100%;
    }

    .mainDetailsText {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .plot {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        margin: 20px 0;
        padding: 40px 0;
    }

    .ratings {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 20px;
        
    }

    .rating {
        width: 33%;
        text-align: center;
    }

    .middleRating {
        border-left: solid 1px black;
        border-right: solid 1px black;
        
    }

    #rated {
        border: solid 1px black;
        border-radius: 4px;
        padding: 1px 4px;
    }

    img {
        height: 400px;
        width: 300px;
        margin-right: 20px;
    }

    p {
        padding-left: 10px;
    }

    span {
        display: inline-block;
        margin-right: 1em;
    }
</style>
