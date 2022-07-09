<script>
    import {title, moviesSearch, API_URL} from "../../stores"
    
    const fetchMovies = async (title) => {
        const res = await fetch(`${$API_URL}&s=${title}`);
        const data = await res.json(); 
        $moviesSearch = data.Search
    } 
</script>

<section id="searchBar">
    <input id="searchInput" type="text" bind:value={$title}>
    <button on:click={fetchMovies($title)}>Search</button>
</section>

<style>
    #searchBar {
        display: flex;
        width: 40%;
        border: solid 1px black;
        border-radius: 3px;
    }

    #searchBar input, #searchBar button {
        box-sizing: border-box;
        margin: 0 0;
        padding: 0;
    }

    #searchBar input {
        border: none;
        width: 80%;
    }

    #searchBar button {
        width: 20%;
        background: none;
	    color: inherit;
	    border: none;
	    padding: 0;
	    font: inherit;
	    cursor: pointer;
	    outline: inherit;
    }

    #searchBar input:focus {
        outline: none;
    }
</style>