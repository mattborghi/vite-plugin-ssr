import{g as i,k as u,o,r as c,c as p,v as f,l as h,b as x,z as y,A as v}from"./chunk-c5b84c12.js";const s=i({withoutHash:!0});async function C(){const e=u();return o(e,{isHydration:!0}),o(e,await w(e._pageId)),R(),c(e)}function R(){const e=i({withoutHash:!0});p(s===e,`URL manipulated before hydration finished (\`${s}\` to \`${e}\`). Ensure the hydration finishes with \`onHydrationEnd()\` before manipulating the URL.`)}async function w(e){const r={},{pageFilesAll:t}=f();o(r,{_pageFilesAll:t});{const a=await h(t,e);if("errorFetchingStaticAssets"in a)throw a.err;const{exports:n,exportsAll:d,pageExports:l,pageFilesLoaded:g}=a.pageContextAddendum;o(r,{exports:n,exportsAll:d,pageExports:l,_pageFilesLoaded:g})}return t.filter(a=>a.fileType!==".page.server").forEach(a=>{var n;x(!(!((n=a.fileExports)===null||n===void 0)&&n.onBeforeRender),`\`export { onBeforeRender }\` of ${a.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define \`onBeforeRender()\` in \`.page.server.js\` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),r}F();async function F(){var e,r;const t=await C();y(t),await t.exports.render(t),v(t,"onHydrationEnd"),await((r=(e=t.exports).onHydrationEnd)===null||r===void 0?void 0:r.call(e,t))}