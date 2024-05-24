

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C7HPtuwX.js","_app/immutable/chunks/scheduler.DMUGxSNz.js","_app/immutable/chunks/index.Dnm7CmTr.js","_app/immutable/chunks/entry.B-sq6GAr.js"];
export const stylesheets = [];
export const fonts = [];
