<script>
    import {title, moviesSearch, API_URL, typeFilter, yearFilter} from "../../stores";
    import Slider from '@bulatdashiev/svelte-slider';
    import SearchSvg from "../svg/SearchSVG.svelte";
    
    const fetchMovies = async (title) => {
        const res = await fetch(`${$API_URL}&s=${title}&plot=full`);
        const data = await res.json(); 
        $moviesSearch = data.Search
    } 
    

</script>
<header>
    <section id="searchBar">
        <form id="form">
            <button on:click|preventDefault={fetchMovies($title)}> <SearchSvg /> </button>
            <input id="searchInput" type="input" bind:value={$title}> 
        </form>
    </section>
    <section id="filterBar">
        <section class="dblSlider">
            <div class="labels">
                <span>{$yearFilter[0] + 1900}</span>
                <span>YEAR</span>
                <span>{$yearFilter[1] + 1900}</span> 
            </div>
            <Slider min="0" max="150" step="1" bind:value={$yearFilter} range order />
        </section>
        <fieldset>
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
    <span><a href="/watchlist">Watch List</a></span>   
</header>


<style>
    header {
        display: flex;
        justify-content: space-between ;
        align-items: center;
        width: 100%;
        height: 75px;
        background-color: gray;
        margin: 0;
        color: #f5f5f5;
    }

    #searchBar {
        display: flex;
        width: 40%;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #form input, #form button {
        box-sizing: border-box;
        padding: 0;
    }

    #form input {
        border: none;
        width: 85%;
        height: 50%;
        margin: 25px 25px 25px 0;
        text-indent: 5%;
        background-color: gray;
        color: inherit;
        border-radius: 5px;
        font-family: Inter, Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
    }

    #form button {
        width: 15%;
        margin-left: 20px;
        margin-right: 0;
        background: gray;
	    color: inherit;
	    border: none;
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
        justify-content: space-around;
        align-items: center;
        width: 60%;
    }

    #searchInput {
        background-color: gray;
    }

    #searchInput:hover, #searchInput:focus{
        background-color: lightgray;
        color: #050505;
    }


    .dblSlider {
        display: flex;
        flex-direction: column;
        width: 25%;
    }

    .labels {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-between;
    }

    a {
        font-size: 1em;
        text-decoration: none;
        color: inherit;
        font-family: Inter, Arial, Helvetica, sans-serif ;
    }
</style>