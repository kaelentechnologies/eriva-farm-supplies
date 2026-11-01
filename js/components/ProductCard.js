"use strict";
/* ProductCard.js: reusable product card */
const pcard=p=>`<article class="card"><a class="ph" href="#product" data-pid="${p.id}" tabindex="-1" aria-hidden="true">${pic("prod-"+p.id,p.name+", "+p.size+" pack","📦")}${p.badge?`<span class="pill">${p.badge}</span>`:""}</a>
<div class="cb"><span class="tag">${CAT[p.cat]}</span><h3><a href="#product" data-pid="${p.id}">${p.name}</a></h3><p class="size">${p.size}</p><p class="tip">${p.tip}</p>
<a class="btn b-wa" target="_blank" rel="noopener" href="${wa(orderMsg(p))}">Order via WhatsApp</a></div></article>`;
