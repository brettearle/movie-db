var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Watchlist
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a704d3f2 = require("../../immutable/chunks/index-a704d3f2.js");
var import_stores_676ed040 = require("../../immutable/chunks/stores-676ed040.js");
var watchlist_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1h8r3ya{display:flex;justify-content:center;align-items:center;width:100%;height:75px;background-color:gray;margin:0;color:#f5f5f5}.cardDisplay.svelte-1h8r3ya{display:flex;flex-wrap:wrap;justify-content:space-around;margin:20px}.card.svelte-1h8r3ya{display:flex;align-items:center;border:solid 1px gray;box-shadow:2px 2px rgb(98, 98, 98);border-radius:10px;width:31%;margin:1%}img.svelte-1h8r3ya{width:200px;margin:10px}a.svelte-1h8r3ya{font-size:2em;text-decoration:none;border-radius:10px;padding:10px;color:inherit;font-family:Inter, Arial, Helvetica, sans-serif}a.svelte-1h8r3ya:hover{background-color:lightgray;color:black}button.svelte-1h8r3ya{background-color:crimson;border:none;border-radius:5px;font-size:1em;padding:5px}button.svelte-1h8r3ya:hover{background-color:darkred;color:#f5f5f5}",
  map: null
};
const Watchlist = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  let $watchList, $$unsubscribe_watchList;
  $$unsubscribe_watchList = (0, import_index_a704d3f2.d)(import_stores_676ed040.w, (value) => $watchList = value);
  $$result.css.add(css);
  $$unsubscribe_watchList();
  return `${$$result.head += `${$$result.title = `<title>Movie DB</title>`, ""}<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-166ldk0"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-166ldk0"><link href="${"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-166ldk0">`, ""}

<header class="${"svelte-1h8r3ya"}"><span><a href="${"/"}" class="${"svelte-1h8r3ya"}">Back to Search</a></span></header>

<section class="${"cardDisplay svelte-1h8r3ya"}">${(0, import_index_a704d3f2.f)($watchList, (movie) => {
    return `${movie.Title !== void 0 ? `<section${(0, import_index_a704d3f2.b)("id", movie.imdbID, 0)} class="${"card svelte-1h8r3ya"}"><img${(0, import_index_a704d3f2.b)("src", movie.Poster, 0)}${(0, import_index_a704d3f2.b)("alt", movie.Title, 0)} class="${"svelte-1h8r3ya"}">
            <section><h2>${(0, import_index_a704d3f2.e)(movie.Title)}</h2>
                <p><span id="${"rated"}">${(0, import_index_a704d3f2.e)(movie.Rated)}</span>
                    <span>${(0, import_index_a704d3f2.e)(movie.Year)}</span>
                    <span>${(0, import_index_a704d3f2.e)(movie.Genre)}</span>
                    <span>${(0, import_index_a704d3f2.e)(movie.Runtime)}</span></p>
                <p>${(0, import_index_a704d3f2.e)(movie.Actors)}</p>
                <button class="${"svelte-1h8r3ya"}">Remove From List</button></section>
        </section>` : ``}`;
  })}
</section>`;
});
