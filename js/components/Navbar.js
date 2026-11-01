"use strict";
/* Navbar.js: header with Products mega-menu */
const Navbar=()=>{const col=c=>`<div><h4>${CAT[c]}</h4>${P.filter(p=>p.cat===c).slice(0,4).map(p=>`<a href="#product" data-pid="${p.id}">${p.name}</a>`).join("")}<a class="all" href="#catalog" data-cat="${c}">View all ${count(c)} →</a></div>`;
 return `<div class="wrap bar"><a class="logo" href="#home"><i aria-hidden="true">E</i>${SHOP.name}</a>
<nav aria-label="Main"><a href="#home" data-r="home">Home</a>
<div><a href="#catalog" data-r="catalog" data-cat="all" aria-haspopup="true">Products <span aria-hidden="true">⌄</span></a>
<div class="mega">${col("feeds")}${col("vet")}${col("equip")}<div><h4>Services</h4>${SV.map(s=>`<a href="#services" data-svc="${s[0]}">${s[1]}</a>`).join("")}<a class="all" href="#services">View all ${SV.length} →</a></div></div></div>
<a href="#services" data-r="services">Services</a><a href="#contact" data-r="contact">Contact</a></nav>
<a class="btn b-out ph-btn" href="tel:${SHOP.tel}">📞 ${SHOP.phone}</a></div>`};
