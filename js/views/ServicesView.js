"use strict";
/* ServicesView.js: vet services and booking form */
const Services={title:"Services",html:()=>`<section class="sec"><div class="wrap"><h1>Field vet services</h1><p class="lead">Our vets come to your farm in Kimana, Loitokitok and Rombo.</p>
<div class="grid" style="margin:2rem 0 3rem">${SV.map(s=>`<div class="card"><div class="ph">${pic("svc-"+s[0],s[1],s[3])}</div><div class="cb"><h3>${s[1]}</h3><p class="tip">${s[2]}</p><a class="btn b-brown" href="#services" data-svc="${s[0]}">Book this service</a></div></div>`).join("")}</div>
<h2 id="book">Book a visit</h2><form id="bf" novalidate>
<div><label for="n">Farmer name</label><input id="n" required autocomplete="name"><p class="err" data-e="n"></p></div>
<div><label for="ph">Phone number</label><input id="ph" type="tel" required autocomplete="tel" placeholder="0712 345 678"><p class="err" data-e="ph"></p></div>
<div><label for="lc">Farm location</label><select id="lc">${["Kimana","Loitokitok","Rombo","Other"].map(l=>`<option>${l}</option>`).join("")}</select></div>
<div><label for="sv">Service</label><select id="sv">${SV.map(s=>`<option value="${s[0]}">${s[1]}</option>`).join("")}</select></div>
<div><label for="dt">Preferred date</label><input id="dt" type="date" required><p class="err" data-e="dt"></p></div>
<div class="full"><label for="ds">Describe the livestock issue</label><textarea id="ds" rows="4"></textarea></div>
<div class="full"><button class="btn b-brown" type="submit">Review booking</button></div></form></div></section>`,
mount(){$("#dt").min=new Date().toISOString().slice(0,10);if(S.svc)$("#sv").value=S.svc;
 $("#bf").onsubmit=e=>{e.preventDefault();const v=id=>$("#"+id).value.trim(),ph=v("ph").replace(/[\s-]/g,""),E={};
  if(!v("n"))E.n="Enter your name.";if(!/^(?:\+?254|0)[17]\d{8}$/.test(ph))E.ph="Enter a Kenyan number such as 0712 345 678.";if(!v("dt"))E.dt="Choose a date.";
  document.querySelectorAll("[data-e]").forEach(p=>p.textContent=E[p.dataset.e]||"");if(Object.keys(E).length){$("#"+Object.keys(E)[0]).focus();return}
  const sv=$("#sv").selectedOptions[0].text,rows=[["Name",v("n")],["Phone",v("ph")],["Location",v("lc")],["Service",sv],["Date",v("dt")],["Issue",v("ds")||"Not given"]];
  const msg="Hello Eriva Farm Supplies, I would like to book a vet service.\n"+rows.map(r=>`${r[0]}: ${r[1]}`).join("\n");
  $("#dbody").innerHTML=`<h2 style="font-size:1.7rem">Check your booking</h2><dl>${rows.map(r=>`<dt>${r[0]}</dt><dd>${esc(r[1])}</dd>`).join("")}</dl><a class="btn b-wa" target="_blank" rel="noopener" href="${wa(msg)}">Send on WhatsApp</a> <button class="btn b-out" onclick="dlg.close()">Edit details</button>`;dlg.showModal()}}};
