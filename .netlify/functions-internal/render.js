const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["css/global.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		entry: {"file":"immutable/start-d8de73d9.js","imports":["immutable/start-d8de73d9.js","immutable/chunks/index-3a2fa571.js","immutable/chunks/index-6d6efbf9.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "watchlist",
				pattern: /^\/watchlist\/?$/,
				names: [],
				types: [],
				path: "/watchlist",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
