import { writable } from 'svelte/store';

export let title = writable('Search title here');
export let moviesSearch = writable([]);
export let currentSelectedLI = writable("");
export let selectedMovie = writable({});
export const API_URL = writable("http://www.omdbapi.com?apikey=d9463cca");