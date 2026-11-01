"use strict";
/* ProductView.js: product detail page */
const Product={title:"Product",html:()=>{const p=P.find(x=>x.id===S.sel)||P[0],more=P.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
 return `<section class="sec"><div class="wrap"><a class="lnk" href="#catalog">← Back to catalog</a><div class="pd"><div class="ph">${pic("prod-"+p.id,p.name+", "+p.size+" pack","📦",0)}${p.badge?`<span class="pill">${p.badge}</span>`:""}</div>
<div><span class="tag">${CAT[p.cat]}</span><h1 style="font-size:clamp(2rem,5vw,3rem);margin-top:.6rem">${p.name}</h1><p class="lead">${p.tip}</p>
<dl><dt>Category</dt><dd>${CAT[p.cat]}</dd><dt>Pack size</dt><dd>${p.size}</dd><dt>Usage tip</dt><dd>${p.tip}</dd><dt>Ordering</dt><dd>WhatsApp, pay by M-Pesa</dd><dt>Delivery</dt><dd>Farms around Kimana, confirmed when you order</dd></dl>
<a class="btn b-wa" target="_blank" rel="noopener" href="${wa(orderMsg(p))}">Order via WhatsApp</a> <a class="btn b-out" href="tel:${SHOP.tel}">📞 Call ${SHOP.phone}</a></div></div></div></section>
<section class="sec alt"><div class="wrap"><h2>More in this category</h2><div class="grid">${more.map(pcard).join("")}</div></div></section>`}};
