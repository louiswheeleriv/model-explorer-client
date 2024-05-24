const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.259LVMHo.js","app":"_app/immutable/entry/app.BmjDlHA4.js","imports":["_app/immutable/entry/start.259LVMHo.js","_app/immutable/chunks/entry.B-sq6GAr.js","_app/immutable/chunks/scheduler.DMUGxSNz.js","_app/immutable/entry/app.BmjDlHA4.js","_app/immutable/chunks/scheduler.DMUGxSNz.js","_app/immutable/chunks/index.Dnm7CmTr.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CPXua0kR.js')),
			__memo(() => import('./chunks/1-CRuqfxzE.js')),
			__memo(() => import('./chunks/2-BLMt1Rny.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map