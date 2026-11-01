"use strict";
/* Footer.js: Kimana contacts, hours, feature strip */
const Footer=()=>`<div class="wrap"><div class="feat"><span>🚚 Farm delivery</span><span>✔ Genuine products</span><span>🩺 Vet support</span><span>📱 M-Pesa</span></div>
<div class="row"><div><h3>${SHOP.name}</h3><p>Livestock feeds, animal medicines, equipment and field vet services for Kimana, Loitokitok and Rombo.</p></div>
<div><h3>Contact</h3><p>${SHOP.addr}<br><a href="tel:${SHOP.tel}">${SHOP.phone}</a><br><a href="mailto:${SHOP.email}">${SHOP.email}</a></p></div>
<div><h3>Hours</h3><p>Mon–Sat 8:00 AM–6:00 PM<br>Sunday: emergencies only</p></div></div>
<p class="muted" style="margin-top:2rem">© ${new Date().getFullYear()} ${SHOP.name}. Pay by M-Pesa. Delivery to farms around Kimana, confirmed when you order.</p></div>`;
