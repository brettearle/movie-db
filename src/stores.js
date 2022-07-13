import { writable } from 'svelte/store';

export let title = writable('Search title here');
export let moviesSearch = writable([]);
export let currentSelectedLI = writable("");
export let selectedMovie = writable({});
export let watchList = writable([{}])
export let typeFilter = writable("any");
export let yearFilter = writable([0, 122]);

export const API_URL = writable("https://www.omdbapi.com?apikey=d9463cca");