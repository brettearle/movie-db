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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_a704d3f2 = require("../../immutable/chunks/index-a704d3f2.js");
var import_stores_e432d2ac = require("../../immutable/chunks/stores-e432d2ac.js");
var Thumb_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: '.thumb.svelte-8w8x88{position:absolute;top:50%;width:0;height:0}.thumb-content.svelte-8w8x88{position:relative;width:fit-content;height:fit-content;transform:translate(-50%, -50%)}.thumb-content.svelte-8w8x88::before{content:"";position:absolute;width:200%;height:200%;transform:translate(-25%, -25%) scale(0);border-radius:100vh;background:var(--thumb-bg, #5784fd);opacity:30%;transition:transform 100ms ease-in-out}.thumb-content.active.svelte-8w8x88::before{transform:translate(-25%, -25%) scale(1)}',
  map: null
};
const Thumb = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_a704d3f2.a)();
  let { pos } = $$props;
  if ($$props.pos === void 0 && $$bindings.pos && pos !== void 0)
    $$bindings.pos(pos);
  $$result.css.add(css$7);
  return `<div class="${"thumb svelte-8w8x88"}"${(0, import_index_a704d3f2.b)("style", `left: ${pos * 100}%;`, 0)}><div class="${["thumb-content svelte-8w8x88", ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var Slider_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "input.svelte-1q9yxz9{display:none}.track.svelte-1q9yxz9{margin:16px 8px;position:relative;height:4px;width:calc(100% - 16px);border-radius:100vh;background:var(--track-bg, #ebebeb)}.progress.svelte-1q9yxz9{position:absolute;left:0;right:0;top:0;bottom:0;border-radius:100vh;background:var(--progress-bg, #8abdff)}.thumb.svelte-1q9yxz9{width:16px;height:16px;border-radius:100vh;background:var(--thumb-bg, #5784fd)}",
  map: null
};
function checkPos(pos) {
  return [Math.min(...pos), Math.max(...pos)];
}
const Slider = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  let progress;
  const dispatch = (0, import_index_a704d3f2.a)();
  let { name = [] } = $$props;
  let { range = false } = $$props;
  let { min = 0 } = $$props;
  let { max = 100 } = $$props;
  let { step = 1 } = $$props;
  let { value = [min, max] } = $$props;
  let pos;
  let active = false;
  let { order = false } = $$props;
  function setValue(pos2) {
    const offset = min % step;
    const width = max - min;
    value = pos2.map((v) => min + v * width).map((v) => Math.round((v - offset) / step) * step + offset);
    dispatch("input", value);
  }
  function setPos(value2) {
    pos = value2.map((v) => Math.min(Math.max(v, min), max)).map((v) => (v - min) / (max - min));
  }
  function clamp() {
    setPos(value);
    setValue(pos);
  }
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.range === void 0 && $$bindings.range && range !== void 0)
    $$bindings.range(range);
  if ($$props.min === void 0 && $$bindings.min && min !== void 0)
    $$bindings.min(min);
  if ($$props.max === void 0 && $$bindings.max && max !== void 0)
    $$bindings.max(max);
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (range && order && active)
        pos = checkPos(pos);
    }
    {
      setPos(value);
    }
    {
      clamp();
    }
    progress = `
    left: ${range ? Math.min(pos[0], pos[1]) * 100 : 0}%;
    right: ${100 - Math.max(pos[0], range ? pos[1] : pos[0]) * 100}%;
  `;
    $$rendered = `<input type="${"number"}"${(0, import_index_a704d3f2.b)("value", value[0], 0)}${(0, import_index_a704d3f2.b)("name", name[0], 0)} class="${"svelte-1q9yxz9"}">
${range ? `<input type="${"number"}"${(0, import_index_a704d3f2.b)("value", value[1], 0)}${(0, import_index_a704d3f2.b)("name", name[1], 0)} class="${"svelte-1q9yxz9"}">` : ``}
<div class="${"track svelte-1q9yxz9"}"><div class="${"progress svelte-1q9yxz9"}"${(0, import_index_a704d3f2.b)("style", progress, 0)}></div>
  ${(0, import_index_a704d3f2.v)(Thumb, "Thumb").$$render($$result, { pos: pos[0] }, {
      pos: ($$value) => {
        pos[0] = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.left ? slots.left({}) : `
      ${slots.default ? slots.default({}) : `
        <div class="${"thumb svelte-1q9yxz9"}"></div>
      `}
    `}`;
      }
    })}
  ${range ? `${(0, import_index_a704d3f2.v)(Thumb, "Thumb").$$render($$result, { pos: pos[1] }, {
      pos: ($$value) => {
        pos[1] = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.right ? slots.right({}) : `
        ${slots.default ? slots.default({}) : `
          <div class="${"thumb svelte-1q9yxz9"}"></div>
        `}
      `}`;
      }
    })}` : ``}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var SearchSVG_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "svg.svelte-1ciuex6{filter:invert(100%) sepia(5%) saturate(122%) hue-rotate(118deg) brightness(113%) contrast(92%)}",
  map: null
};
const SearchSVG = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"40"}" width="${"40"}" class="${"svelte-1ciuex6"}"><path d="${"M33 34.958 22.208 24.167q-1.25 1.041-2.916 1.645-1.667.605-3.5.605-4.542 0-7.667-3.125T5 15.708q0-4.458 3.125-7.604t7.625-3.146q4.458 0 7.583 3.146t3.125 7.604q0 1.792-.583 3.438-.583 1.646-1.708 3.062L35 32.958ZM15.75 23.625q3.292 0 5.604-2.313 2.313-2.312 2.313-5.604 0-3.291-2.313-5.625Q19.042 7.75 15.75 7.75q-3.333 0-5.646 2.333-2.312 2.334-2.312 5.625 0 3.292 2.312 5.604 2.313 2.313 5.646 2.313Z"}"></path></svg>`;
});
var SearchBar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "header.svelte-sajmre.svelte-sajmre{display:flex;justify-content:space-between ;align-items:center;width:100%;height:75px;background-color:gray;margin:0;color:#f5f5f5}#searchBar.svelte-sajmre.svelte-sajmre{display:flex;width:40%}form.svelte-sajmre.svelte-sajmre{display:flex;justify-content:center;align-items:center}#form.svelte-sajmre input.svelte-sajmre,#form.svelte-sajmre button.svelte-sajmre{box-sizing:border-box;padding:0}#form.svelte-sajmre input.svelte-sajmre{border:none;width:85%;height:50%;margin:25px 25px 25px 0;text-indent:5%;background-color:gray;color:inherit;border-radius:5px;font-family:Inter, Arial, Helvetica, sans-serif;font-size:1.2rem}#form.svelte-sajmre button.svelte-sajmre{width:15%;margin-left:20px;margin-right:0;background:gray;color:inherit;border:none;height:100%;padding:0;font:inherit;cursor:pointer;outline:inherit}#searchBar.svelte-sajmre input.svelte-sajmre:focus{outline:none}#filterBar.svelte-sajmre.svelte-sajmre{display:flex;justify-content:space-around;align-items:center;width:60%}#searchInput.svelte-sajmre.svelte-sajmre{background-color:gray}#searchInput.svelte-sajmre.svelte-sajmre:hover,#searchInput.svelte-sajmre.svelte-sajmre:focus{background-color:lightgray;color:#050505}.dblSlider.svelte-sajmre.svelte-sajmre{display:flex;flex-direction:column;width:25%}.labels.svelte-sajmre.svelte-sajmre{display:flex;flex-direction:row;align-content:center;justify-content:space-between}a.svelte-sajmre.svelte-sajmre{font-size:1em;text-decoration:none;color:inherit;font-family:Inter, Arial, Helvetica, sans-serif }",
  map: null
};
const SearchBar = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_moviesSearch;
  let $$unsubscribe_API_URL;
  let $title, $$unsubscribe_title;
  let $yearFilter, $$unsubscribe_yearFilter;
  let $typeFilter, $$unsubscribe_typeFilter;
  $$unsubscribe_moviesSearch = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.m, (value) => value);
  $$unsubscribe_API_URL = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.A, (value) => value);
  $$unsubscribe_title = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.t, (value) => $title = value);
  $$unsubscribe_yearFilter = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.y, (value) => $yearFilter = value);
  $$unsubscribe_typeFilter = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.a, (value) => $typeFilter = value);
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"svelte-sajmre"}"><section id="${"searchBar"}" class="${"svelte-sajmre"}"><form id="${"form"}" class="${"svelte-sajmre"}"><button class="${"svelte-sajmre"}">${(0, import_index_a704d3f2.v)(SearchSVG, "SearchSvg").$$render($$result, {}, {}, {})}</button>
            <input id="${"searchInput"}" type="${"input"}" class="${"svelte-sajmre"}"${(0, import_index_a704d3f2.b)("value", $title, 0)}></form></section>
    <section id="${"filterBar"}" class="${"svelte-sajmre"}"><section class="${"dblSlider svelte-sajmre"}"><div class="${"labels svelte-sajmre"}"><span>${(0, import_index_a704d3f2.e)($yearFilter[0] + 1900)}</span>
                <span>YEAR</span>
                <span>${(0, import_index_a704d3f2.e)($yearFilter[1] + 1900)}</span></div>
            ${(0, import_index_a704d3f2.v)(Slider, "Slider").$$render($$result, {
      min: "0",
      max: "150",
      step: "1",
      range: true,
      order: true,
      value: $yearFilter
    }, {
      value: ($$value) => {
        $yearFilter = $$value;
        $$settled = false;
      }
    }, {})}</section>
        <fieldset><legend>TYPE</legend>
            <label for="${"any"}"><input type="${"radio"}" name="${"type"}" id="${"any"}" checked value="${"any"}"${$typeFilter === "any" ? (0, import_index_a704d3f2.b)("checked", true, 1) : ""}>
                any
            </label>
            <label for="${"movies"}"><input type="${"radio"}" name="${"type"}" id="${"movies"}" value="${"movie"}"${$typeFilter === "movie" ? (0, import_index_a704d3f2.b)("checked", true, 1) : ""}>
                Movies
            </label>
             <label for="${"series"}"><input type="${"radio"}" name="${"type"}" id="${"series"}" value="${"series"}"${$typeFilter === "series" ? (0, import_index_a704d3f2.b)("checked", true, 1) : ""}>
                Series
            </label>
             <label for="${"episodes"}"><input type="${"radio"}" name="${"type"}" id="${"episodes"}" value="${"episode"}"${$typeFilter === "episode" ? (0, import_index_a704d3f2.b)("checked", true, 1) : ""}>
                Episodes
            </label></fieldset></section> 
    <span><a href="${"/watchlist"}" class="${"svelte-sajmre"}">Watch List</a></span>   
</header>`;
  } while (!$$settled);
  $$unsubscribe_moviesSearch();
  $$unsubscribe_API_URL();
  $$unsubscribe_title();
  $$unsubscribe_yearFilter();
  $$unsubscribe_typeFilter();
  return $$rendered;
});
var ResultsList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".red.svelte-tx71fv.svelte-tx71fv{background-color:rgba(204, 200, 200, 0.2)}ul.svelte-tx71fv.svelte-tx71fv{margin-left:0;padding-left:0;padding-right:5px;width:30%;overflow-y:scroll;max-height:88vh}li.svelte-tx71fv.svelte-tx71fv{list-style:none;border-bottom:1px solid #aaa;padding:1em;margin:none;display:flex;justify-content:space-around;align-content:center;align-items:center}.itemImage.svelte-tx71fv.svelte-tx71fv{height:100px}.itemDetails.svelte-tx71fv.svelte-tx71fv{width:60%;margin-left:5px}.itemDetails.svelte-tx71fv p.svelte-tx71fv{font-weight:300;font-size:.8em;margin-top:2px}.itemDetails.svelte-tx71fv h2.svelte-tx71fv{margin-bottom:2px}ul.svelte-tx71fv.svelte-tx71fv::-webkit-scrollbar{width:.5em}ul.svelte-tx71fv.svelte-tx71fv::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.3)}ul.svelte-tx71fv.svelte-tx71fv::-webkit-scrollbar-thumb{background-color:darkgrey}",
  map: null
};
const ResultsList = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedMovie;
  let $$unsubscribe_API_URL;
  let $moviesSearch, $$unsubscribe_moviesSearch;
  let $typeFilter, $$unsubscribe_typeFilter;
  let $yearFilter, $$unsubscribe_yearFilter;
  let $currentSelectedLI, $$unsubscribe_currentSelectedLI;
  $$unsubscribe_selectedMovie = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.s, (value) => value);
  $$unsubscribe_API_URL = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.A, (value) => value);
  $$unsubscribe_moviesSearch = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.m, (value) => $moviesSearch = value);
  $$unsubscribe_typeFilter = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.a, (value) => $typeFilter = value);
  $$unsubscribe_yearFilter = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.y, (value) => $yearFilter = value);
  $$unsubscribe_currentSelectedLI = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.c, (value) => $currentSelectedLI = value);
  $$result.css.add(css$3);
  $$unsubscribe_selectedMovie();
  $$unsubscribe_API_URL();
  $$unsubscribe_moviesSearch();
  $$unsubscribe_typeFilter();
  $$unsubscribe_yearFilter();
  $$unsubscribe_currentSelectedLI();
  return `<ul class="${"svelte-tx71fv"}">${function(__value) {
    if ((0, import_index_a704d3f2.i)(__value)) {
      __value.then(null, import_index_a704d3f2.n);
      return `
            <p>...waiting</p>
        `;
    }
    return function($moviesSearch2) {
      return `
            ${$moviesSearch2 !== void 0 ? `${(0, import_index_a704d3f2.f)($moviesSearch2, (movie) => {
        return `${movie.Type === $typeFilter || $typeFilter === "any" ? `${Number(movie.Year) > $yearFilter[0] + 1900 && Number(movie.Year) < $yearFilter[1] + 1900 ? `<li${(0, import_index_a704d3f2.b)("id", movie.imdbID, 0)} class="${["svelte-tx71fv", $currentSelectedLI === movie.imdbID ? "red" : ""].join(" ").trim()}"><img class="${"itemImage svelte-tx71fv"}"${(0, import_index_a704d3f2.b)("src", movie.Poster, 0)}${(0, import_index_a704d3f2.b)("alt", movie.Title, 0)}>
                            <div class="${"itemDetails svelte-tx71fv"}"><h2 class="${"svelte-tx71fv"}">${(0, import_index_a704d3f2.e)(movie.Title)}</h2>
                                <p class="${"svelte-tx71fv"}">${(0, import_index_a704d3f2.e)(movie.Year)}</p></div>
                        </li>` : ``}` : ``}`;
      })}` : ``}
            ${$moviesSearch2 === void 0 ? `<p>No Movies Found</p>` : ``}   
        `;
    }(__value);
  }($moviesSearch)}        
    </ul>`;
});
var WatchList_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".watchlist.svelte-bxpa4d{justify-self:flex-end;height:fit-content;margin-left:auto;margin-top:20px;margin-right:20px;border:solid 1px black;border-radius:4px;padding:5px 5px}.remove.svelte-bxpa4d{background-color:crimson}",
  map: null
};
const WatchList = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  let $watchList, $$unsubscribe_watchList;
  let $selectedMovie, $$unsubscribe_selectedMovie;
  $$unsubscribe_watchList = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.w, (value) => $watchList = value);
  $$unsubscribe_selectedMovie = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.s, (value) => $selectedMovie = value);
  $$result.css.add(css$2);
  $$unsubscribe_watchList();
  $$unsubscribe_selectedMovie();
  return `${function(__value) {
    if ((0, import_index_a704d3f2.i)(__value)) {
      __value.then(null, import_index_a704d3f2.n);
      return `
        <span>waiting</span>
    `;
    }
    return function($watchList2) {
      return ` 
        ${$watchList2.find((el) => el.Title === $selectedMovie.Title) !== void 0 ? `<span class="${"watchlist remove svelte-bxpa4d"}">Remove from Watchlist</span>` : `<span class="${"watchlist svelte-bxpa4d"}">Add to Watchlist</span>`}
    `;
    }(__value);
  }($watchList)}`;
});
var SelectedMovie_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".container.svelte-1nz6iy1{display:flex;flex-direction:column;align-items:center;justify-content:space-between;width:70%;margin:20px 20px}.mainDetails.svelte-1nz6iy1{display:flex;width:100%}.mainDetailsText.svelte-1nz6iy1{display:flex;flex-direction:column;justify-content:flex-end}.plot.svelte-1nz6iy1{border-top:1px solid black;border-bottom:1px solid black;margin:20px 0;padding:40px 0}.ratings.svelte-1nz6iy1{display:flex;justify-content:space-around;width:100%;margin-bottom:20px}.rating.svelte-1nz6iy1{width:33%;text-align:center}.middleRating.svelte-1nz6iy1{border-left:solid 1px black;border-right:solid 1px black}#rated.svelte-1nz6iy1{border:solid 1px black;border-radius:4px;padding:1px 4px}img.svelte-1nz6iy1{height:400px;width:300px;margin-right:20px}p.svelte-1nz6iy1{padding-left:10px}span.svelte-1nz6iy1{display:inline-block;margin-right:1em}",
  map: null
};
const SelectedMovie = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  let $selectedMovie, $$unsubscribe_selectedMovie;
  $$unsubscribe_selectedMovie = (0, import_index_a704d3f2.d)(import_stores_e432d2ac.s, (value) => $selectedMovie = value);
  $$result.css.add(css$1);
  $$unsubscribe_selectedMovie();
  return `${function(__value) {
    if ((0, import_index_a704d3f2.i)(__value)) {
      __value.then(null, import_index_a704d3f2.n);
      return `
    <p class="${"svelte-1nz6iy1"}">....waiting</p>  
`;
    }
    return function(selectedMovie2) {
      return `
    ${selectedMovie2.Title !== void 0 ? `<section class="${"container svelte-1nz6iy1"}"><section class="${"mainDetails svelte-1nz6iy1"}"><img${(0, import_index_a704d3f2.b)("src", selectedMovie2.Poster, 0)}${(0, import_index_a704d3f2.b)("alt", selectedMovie2.Title, 0)} class="${"svelte-1nz6iy1"}">
            <div class="${"mainDetailsText svelte-1nz6iy1"}"><h2>${(0, import_index_a704d3f2.e)(selectedMovie2.Title)}</h2>
                <p class="${"svelte-1nz6iy1"}"><span id="${"rated"}" class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Rated)}</span>
                    <span class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Year)}</span>
                    <span class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Genre)}</span>
                    <span class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Runtime)}</span></p>
                <p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Actors)}</p></div>
            ${(0, import_index_a704d3f2.v)(WatchList, "WatchList").$$render($$result, {}, {}, {})}</section>
        <section class="${"plot svelte-1nz6iy1"}"><p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Plot)}</p></section>
        <section class="${"ratings svelte-1nz6iy1"}"><div class="${"rating svelte-1nz6iy1"}"><p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Ratings[0].Value)}</p>
                <p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Ratings[0].Source)}</p></div>
            <div class="${"middleRating rating svelte-1nz6iy1"}">${selectedMovie2.Ratings[1] !== void 0 ? `<p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Ratings[1].Value)}</p>
                <p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Ratings[1].Source)}</p>` : ``}</div>
            <div class="${"rating svelte-1nz6iy1"}">${selectedMovie2.Ratings[2] !== void 0 ? `<p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Ratings[2].Value)}</p>
                <p class="${"svelte-1nz6iy1"}">${(0, import_index_a704d3f2.e)(selectedMovie2.Ratings[2].Source)}</p>` : ``}</div></section></section>` : ``}
`;
    }(__value);
  }($selectedMovie)}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-jp2jsm{display:flex}",
  map: null
};
const Routes = (0, import_index_a704d3f2.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Movie DB</title>`, ""}<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-166ldk0"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-166ldk0"><link href="${"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-166ldk0">`, ""}



${(0, import_index_a704d3f2.v)(SearchBar, "SearchBar").$$render($$result, {}, {}, {})}
<section class="${"container svelte-jp2jsm"}">${(0, import_index_a704d3f2.v)(ResultsList, "ResultsList").$$render($$result, {}, {}, {})}
    ${(0, import_index_a704d3f2.v)(SelectedMovie, "SelectedMovie").$$render($$result, {}, {}, {})}       
</section>`;
});
