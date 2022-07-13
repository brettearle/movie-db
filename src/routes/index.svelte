<script>
    import SearchBar from '$lib/search/SearchBar.svelte'
    import ResultsList from '$lib/ResultsList.svelte'
    import SelectedMovie from '$lib/SelectedMovie.svelte'
</script>


<svelte:head>
    <title>Movie DB</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>



<SearchBar />
<section class= 'container'>
    <ResultsList />
    <SelectedMovie />       
</section>

<style>

    .container {
        display: flex;
    }

</style>