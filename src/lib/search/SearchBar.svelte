<script>
    import {title, moviesSearch, API_URL, typeFilter, yearFilter} from "../../stores";
    import Slider from '@bulatdashiev/svelte-slider';
    
    const fetchMovies = async (title) => {
        const res = await fetch(`${$API_URL}&s=${title}`);
        const data = await res.json(); 
        $moviesSearch = data.Search
    } 
    

</script>
<header>
    <section id="searchBar">
        <button on:click={fetchMovies($title)}>Search</button>
        <input id="searchInput" type="text" bind:value={$title}>
    </section>
    <section id="filterBar">
        <section class="dblSlider">
             {$yearFilter[0] + 1970}
             {$yearFilter[1] + 1970}
            <Slider min="0" max="52" step="1" bind:value={$yearFilter} range order />
        </section>
        
        
        <fieldset on:click={console.log($typeFilter)}>
            <legend>TYPE</legend>
            <label for="any"> 
                <input type="radio" name="type" id="any" checked bind:group={$typeFilter} value='any'>
                any
            </label>
            <label for="movies">
                <input type="radio" name="type" id="movies" bind:group={$typeFilter} value='movie'>
                Movies
            </label>
             <label for="series">
                <input type="radio" name="type" id="series" bind:group={$typeFilter} value='series'>
                Series
            </label>
             <label for="episodes">
                <input type="radio" name="type" id="episodes" bind:group={$typeFilter} value='episode'>
                Episodes
            </label>
         </fieldset>
        
    </section>    
</header>


<style>
    header {
        display: flex;
        width: 100%;
        height: 75px;
        background-color: darkgray;
        margin: 0;
    }

    #searchBar {
        display: flex;
        width: 40%;
        
    }

    #searchBar input, #searchBar button {
        box-sizing: border-box;
        padding: 0;
    }

    #searchBar input {
        border: none;
        width: 80%;
        margin: 25px;
        text-indent: 5%;
        background-color: darkgray;
    }

    #searchBar button {
        width: 20%;
        background: lightblue;
	    color: inherit;
	    border: solid 1px black;
        height: 100%;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }

    #searchBar input:focus {
        outline: none;
    }

    #filterBar {
        display: flex;
        justify-content: space-between;
    }

    .dblSlider {
        display: flex;
        flex-direction: column;
    }

   

	
</style>