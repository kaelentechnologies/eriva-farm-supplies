"use strict";
/* data.js: shop details, categories, products, services, posts */

const SHOP={name:"Eriva Farm Supplies",phone:"0717 992 744",tel:"+254717992744",wa:"254717992744",email:"info@erivafarm.co.ke",addr:"Kimana Town, Kajiado County"};
// To replace a photo: drop your file in an img/ folder next to this page using the name shown (e.g. img/hero.jpg), or set IMG.hero to any URL or data: URI.
// Replace the existing IMG Proxy in data.js with this:

const IMG = {
  // Hero & General
  hero: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80", // Grazing cattle in pasture
  shop: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=1200&q=80", // Modern agricultural supply store / warehouse

  // Categories / Featured Sections
  "cat-feeds": "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80", // Cattle feed & grains
  "cat-vet": "https://images.unsplash.com/photo-1628153213038-f860f77242d0?auto=format&fit=crop&w=1200&q=80", // Veterinary care & vaccines
  "cat-equip": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80", // Farm tools & equipment

  // Products (prod-1 to prod-12)
  "prod-1": "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80", // High-Yield Dairy Meal
  "prod-2": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80", // Chick Starter Mash
  "prod-3": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80", // Layers Mash / Poultry
  "prod-4": "https://images.unsplash.com/photo-1570042707223-28956a0c0e5a?auto=format&fit=crop&w=1200&q=80", // Mineral Lick Block
  "prod-5": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80", // Boma Rhodes Grass Seed
  "prod-6": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80", // Newcastle Disease Vaccine
  "prod-7": "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80", // Oxytetracycline Spray
  "prod-8": "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80", // Albendazole Dewormer
  "prod-9": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80", // Acaricide Pour-On
  "prod-10": "https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&w=1200&q=80", // Bovine AI Service
  "prod-11": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80", // Dosing Gun
  "prod-12": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80", // CMT Mastitis Test Kit

  // Services (svc-clinical, svc-ai, svc-poultry, svc-advisory)
  "svc-clinical": "https://images.unsplash.com/photo-1628153213038-f860f77242d0?auto=format&fit=crop&w=1200&q=80", // On-farm clinical visit
  "svc-ai": "https://images.unsplash.com/photo-1546445317-29f4545f9d52?auto=format&fit=crop&w=1200&q=80", // Artificial Insemination
  "svc-poultry": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=1200&q=80", // Poultry vaccination campaign
  "svc-advisory": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80", // Diagnostic & feed advisory

  // Blog Posts (post-ticks, post-poultry, post-milk)
  "post-ticks": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80", // Tick-borne diseases
  "post-poultry": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=80", // Commercial poultry schedule
  "post-milk": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80"  // Milk yield ratios
};