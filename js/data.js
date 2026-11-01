"use strict";
/* data.js: shop details, categories, products, services, posts */

const SHOP={name:"Eriva Farm Supplies",phone:"0717 992 744",tel:"+254717992744",wa:"254717992744",email:"info@erivafarm.co.ke",addr:"Kimana Town, Kajiado County"};
// To replace a photo: drop your file in an img/ folder next to this page using the name shown (e.g. img/hero.jpg), or set IMG.hero to any URL or data: URI.
const IMG=new Proxy({},{get:(o,k)=>o[k]||`img/${k}.jpg`});
const CAT={feeds:"Feeds & Nutrition",vet:"Veterinary drugs & vaccines",equip:"Livestock equipment"};
const P=[
[1,"High-Yield Dairy Meal","feeds","50 kg bag","Feed 1 kg for every 2 litres of milk above the first 5 litres a cow gives daily.","Popular"],
[2,"Chick Starter Mash","feeds","50 kg bag","Give from day 1 to week 8. Keep clean water available at all times.","Popular"],
[3,"Layers Mash","feeds","70 kg bag","Start at 18 weeks, about 110–120 g per bird per day."],
[4,"Mineral Lick Block","feeds","5 kg block","Place in the shade where cattle, goats and sheep can reach it freely."],
[5,"Boma Rhodes Grass Seed","feeds","1 kg pack","Plant at the start of the rains. Suited to dry-season fodder banks."],
[6,"Newcastle Disease Vaccine","vet","500 doses","Keep cold. Mix with clean water and use within 2 hours.","Cold chain"],
[7,"Oxytetracycline Spray","vet","200 ml can","Clean the wound first, then spray from 15 cm. Wear gloves."],
[8,"Albendazole Dewormer","vet","1 L bottle","Dose by body weight and repeat every 3 months. Ask us for the right dose."],
[9,"Acaricide Pour-On","vet","1 L bottle","Apply along the back of cattle for tick control. Observe the withdrawal period.","Popular"],
[10,"Bovine Artificial Insemination","vet","Per visit","Book when you see heat signs. We carry dairy and beef genetics.","Service"],
[11,"Dosing Gun","equip","20 ml, adjustable","Rinse with clean water after each use. Spare nozzles available."],
[12,"CMT Mastitis Test Kit","equip","Paddle + reagent","Test each quarter monthly to catch mastitis early."]
].map(([id,name,cat,size,tip,badge])=>({id,name,cat,size,tip,badge}));
const SV=[
["clinical","On-farm clinical visit","Emergency and routine health checks, treatment and minor surgery at your farm.","🩺"],
["ai","Artificial insemination","Quality cattle genetics to lift milk and growth in your herd.","🐄"],
["poultry","Poultry vaccination campaign","Newcastle and Gumboro vaccination on a schedule that fits your birds.","🐔"],
["advisory","Diagnostic & feed advisory","Mastitis screening, rations and disease management for our dry climate.","🧪"]];
const POSTS=[
["ticks","Tick-borne diseases in the rainy season","Spot early signs and plan your dipping.","Ask our vet about ticks"],
["poultry","Vaccination schedule for commercial poultry","What to give, and when, from day one.","Ask our vet about a poultry vaccination schedule"],
["milk","Improving milk yield with the right feed ratios","Match meal to production, not to habit.","Ask our vet about feed ratios to improve milk yield"]];
