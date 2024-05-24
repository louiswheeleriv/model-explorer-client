

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BK415g5Y.js","_app/immutable/chunks/scheduler.DMUGxSNz.js","_app/immutable/chunks/index.Dnm7CmTr.js"];
export const stylesheets = [];
export const fonts = [];
