"use strict";
/* app.js: entry point, global events, first render */
$("#hd").innerHTML=Navbar();$("#ft").innerHTML=Footer();$("#fab").href=wa("Hello Eriva Farm Supplies, I need help.");
document.addEventListener("click",e=>{const t=e.target,a=t.closest("[data-pid],[data-cat],[data-svc]");
 if(a){if(a.dataset.pid)S.sel=+a.dataset.pid;if(a.dataset.cat){S.cat=a.dataset.cat;S.q=""}if(a.dataset.svc)S.svc=a.dataset.svc;
  if(location.hash===a.getAttribute("href")){e.preventDefault();route();if(a.dataset.svc)$("#book").scrollIntoView({behavior:"smooth"})}else if(a.dataset.svc)setTimeout(()=>$("#book")&&$("#book").scrollIntoView({behavior:"smooth"}),60)}
 if(t.closest(".mega a,nav>a")){document.body.classList.add("nomega");addEventListener("mousemove",()=>document.body.classList.remove("nomega"),{once:true})}
 if(t.closest(".totop"))scrollTo({top:0,behavior:"smooth"})});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){document.body.classList.add("nomega");addEventListener("mousemove",()=>document.body.classList.remove("nomega"),{once:true})}});
addEventListener("scroll",()=>$(".totop").classList.toggle("show",scrollY>600),{passive:true});
addEventListener("hashchange",route);route();
