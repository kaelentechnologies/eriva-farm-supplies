"use strict";
/* CatalogView.js: tabs, search, product grid */
const Catalog={title:"Catalog",html:()=>`<section class="sec"><div class="wrap"><h1>Catalog</h1><p class="lead">Feeds, medicines and equipment. Order on WhatsApp and pay by M-Pesa.</p>
<div class="tabs" role="group" aria-label="Category">${[["all","All"],...Object.entries(CAT)].map(([k,v])=>`<button data-t="${k}" aria-pressed="${S.cat===k}">${v}</button>`).join("")}</div>
<label for="q" class="muted">Search products</label><input id="q" type="search" value="${esc(S.q)}" placeholder="Search by name or use, for example tick" style="max-width:420px">
<p class="muted" id="cnt" aria-live="polite" style="margin:1rem 0"></p><div class="grid" id="pg"></div></div></section>`,
mount(){const g=()=>{const q=S.q.toLowerCase(),r=P.filter(p=>(S.cat==="all"||p.cat===S.cat)&&(p.name+p.tip+p.size).toLowerCase().includes(q));
 $("#cnt").textContent=`${r.length} product${r.length===1?"":"s"}`;
 $("#pg").innerHTML=r.map(pcard).join("")||`<div class="empty full" style="grid-column:1/-1"><h3>No products match that search</h3><p style="margin-inline:auto">Try another word, or ask us. We may have it in the shop.</p><a class="btn b-wa" target="_blank" rel="noopener" href="${wa("Hello Eriva Farm Supplies, do you have: "+S.q+"?")}">Ask on WhatsApp</a></div>`};
 g();$("#q").oninput=e=>{S.q=e.target.value;g()};
 document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{S.cat=b.dataset.t;document.querySelectorAll("[data-t]").forEach(x=>x.setAttribute("aria-pressed",x===b));g()})}};
