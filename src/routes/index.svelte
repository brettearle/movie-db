<script>
    import SearchBar from '$lib/search/SearchBar.svelte'
    import ResultsList from '$lib/ResultsList.svelte'
    import SelectedMovie from '$lib/SelectedMovie.svelte'
</script>

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