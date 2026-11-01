"use strict";
/* utils.js: shared state and helpers (WhatsApp links, open status, image fallback) */

const S={cat:"all",q:"",sel:1,svc:""};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const wa=m=>`https://wa.me/${SHOP.wa}?text=${encodeURIComponent(m)}`;
const orderMsg=p=>`Hello Eriva Farm Supplies, I would like to order: ${p.name} (${p.size}). Quantity: ___ Delivery or pickup location: ___`;
const pic=(k,alt,ic="📷",lazy=1)=>`<img src="${IMG[k]}" alt="${esc(alt)}" width="1200" height="800" ${lazy?'loading="lazy"':""} decoding="async" onerror="fb(this,'${ic}')">`;
window.fb=(el,ic)=>{const d=document.createElement("div");d.className="fb";d.setAttribute("role","img");d.setAttribute("aria-label",el.alt);d.textContent=ic;el.replaceWith(d)};
function openNow(){const f=new Intl.DateTimeFormat("en-GB",{timeZone:"Africa/Nairobi",weekday:"short",hour:"numeric",hour12:false}).formatToParts(new Date());
 const d=f.find(x=>x.type==="weekday").value,h=+f.find(x=>x.type==="hour").value%24;return d!=="Sun"&&h>=8&&h<18}
const status=(l)=>{const o=openNow();return `<span class="stat ${o?"open":""} ${l?"lt":""}" role="status"><span class="dot"></span>${o?"Open now":"Closed now"} · Mon–Sat 8:00 AM–6:00 PM</span>`};
const OPEN='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>';
const count=c=>P.filter(p=>p.cat===c).length;
const $=s=>document.querySelector(s),dlg=$("#dlg");
