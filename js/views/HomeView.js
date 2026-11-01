"use strict";
/* HomeView.js: hero, categories, featured products, banner, advice, shop visit */
const catCards=[["feeds","cat-feeds","Dairy & poultry feeds","🌾"],["vet","cat-vet","Veterinary pharmaceuticals","💉"],["equip","cat-equipment","Livestock equipment","🧰"],["feeds","cat-fodder","Fodder seeds","🌱"]];
const Home={title:"Home",html:()=>`
<section class="hero"><img src="${IMG.hero}" alt="A farmer with cattle near Kimana" width="1920" height="1080" onerror="fb(this,'🐄')">
<div class="wrap"><div class="rise">${status()}</div><h1 class="rise" style="--d:.15s">Your partner in livestock health & feeds in Kimana & Kajiado region</h1>
<div class="rise" style="--d:.3s"><a class="lnk" href="#catalog" data-cat="all">Browse catalog →</a><a class="lnk" href="#services">Book vet service →</a></div></div></section>
<div class="strip"><div class="wrap"><span>✔ Genuine biologicals & vaccines</span><span>🩺 On-farm AI & vet support</span><span>📱 M-Pesa payment support</span></div></div>
<section class="sec"><div class="wrap"><div class="head"><h2>Shop farm essentials</h2><a class="lnk" href="#catalog" data-cat="all">View the full catalog →</a></div>
<div class="grid">${catCards.map(([c,k,t,ic])=>`<a class="pc" href="#catalog" data-cat="${c}"><div class="ph">${pic(k,t+" at Eriva Farm Supplies",ic)}</div><h3>${t}</h3><p class="meta">${count(c)} products ${OPEN}</p></a>`).join("")}</div></div></section>
<section class="sec alt"><div class="wrap"><div class="head"><h2>Popular with farmers</h2></div><div class="grid">${P.filter(p=>p.badge==="Popular").concat(P[3]).slice(0,4).map(pcard).join("")}</div></div></section>
<section class="banner"><img src="${IMG.cta}" alt="A vet attending to an animal on a farm" width="1920" height="900" loading="lazy" onerror="fb(this,'🩺')"><div class="wrap"><h2>Our vets and dealers are one call away</h2><a class="btn b-gold" href="tel:${SHOP.tel}">📞 Call ${SHOP.phone}</a> <a class="btn b-out" target="_blank" rel="noopener" href="${wa("Hello Eriva Farm Supplies, I need help with my livestock.")}">💬 WhatsApp us</a></div></section>
<section class="sec"><div class="wrap"><div class="head"><h2>Stay ahead with Eriva</h2></div><div class="grid g3">${POSTS.map(([k,t,d,m])=>`<a class="pc" target="_blank" rel="noopener" href="${wa("Hello Eriva Farm Supplies, "+m.charAt(0).toLowerCase()+m.slice(1)+".")}"><div class="ph">${pic("post-"+k,t,"📰")}</div><h3>${t}</h3><p>${d}</p><p class="meta">Ask our vet on WhatsApp ${OPEN}</p></a>`).join("")}</div></div></section>
<section class="sec alt"><div class="wrap"><h2>Own a farm in Kimana, live in Nairobi?</h2><p class="lead">Keep your animals supplied without the long drive.</p>
<div class="steps"><div><h3>Pick your products</h3><p>Browse the catalog and choose what your farm needs.</p></div><div><h3>Confirm and pay by M-Pesa</h3><p>Message us on WhatsApp to confirm quantities and pay.</p></div><div><h3>We deliver to your farm</h3><p>Delivery around Kimana is confirmed when you order.</p></div></div></div></section>
<section class="sec"><div class="wrap visit"><div><h2>Visit the Kimana shop</h2>${status(1)}
<table><tr><td>Monday to Saturday</td><td>8:00 AM–6:00 PM</td></tr><tr><td>Sunday</td><td>Emergencies only</td></tr></table><p style="margin-top:1rem"><a class="lnk" href="tel:${SHOP.tel}">Call the emergency vet line ${SHOP.phone} →</a></p></div>
<div class="ph">${pic("shop","The Eriva Farm Supplies shop front in Kimana","🏪")}</div></div></section>`};
