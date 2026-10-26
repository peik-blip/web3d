// Web 3D shim: old-style loaders import this and call mount(root). It loads the shared engine (../engine/version.json, no-cache) and mounts this folder.
export async function mount(root) {
  const here = new URL('./', import.meta.url), eng = new URL('../engine/', here);
  const v = await (await fetch(new URL('version.json', eng), { cache: 'no-cache' })).json();
  await (await import(new URL(v.module, eng))).mount(root, here.href);
}
