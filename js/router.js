"use strict";
/* router.js: hash router */
const V={home:Home,catalog:Catalog,product:Product,services:Services,contact:Contact};
function route(){const k=V[location.hash.slice(1)]?location.hash.slice(1):"home",v=V[k];$("#view").innerHTML=v.html();v.mount&&v.mount();document.title=`${v.title} | ${SHOP.name}`;
 document.querySelectorAll("nav [data-r]").forEach(a=>a.dataset.r===k?a.setAttribute("aria-current","page"):a.removeAttribute("aria-current"));scrollTo(0,0)}
