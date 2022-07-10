
## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


## Thought Log

After a busy week have finally had time to sit down and get into the flow. Built basic search functionality first which involved learning stores.

Had some trouble with scroll on the list component. This was due to over thinking. Cracked it in the end and felt a little silly since it was 1 line of css.

Once scroll was done. Moved onto looping through returned search array of objects and displaying each one conditionally.
Moved onto displaying movie details in main section of the site. This went fairly smoothly. Accessing a single movie from the returned json data and displaying the keys required.

The filtering by type was relatively easy in comparison to the year. With type just stored selected radio button value in a store and then used a conditional to match before rendering a li.

The year filter was a little more challenging. As a range input with 2 handles is not a html option. Found a component from a library to import that solved the major logic. From here moved to adding the correct number logic for the year ranges and tied it to filter search list.  

Began laying out css. Went smoothly. Concentrated on using flexbox to get elements to correct positions. Did some basic styling to highlight components to positions correctly. 

Fixed the search functionality, now it displays correctly regardless of whether the API returns all data. Was running into issues where site would break if all data was not present. This was rectified by conditionally rendering the ratings as each returned json objects does not have [0,1,2]