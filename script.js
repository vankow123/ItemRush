const products=[
{id:1,game:"MM2",name:"IceWing",price:3.00,image: "ice.png"
{id:2,game:"MM2",name:"Godly Set",price:24.99,icon:"⚔️"},
{id:3,game:"MM2",name:"Icebreaker",price:9.99,icon:"🧊"},
{id:4,game:"Steal a Brainrot",name:"Rare Brainrot",price:7.99,icon:"🧠"},
{id:5,game:"Steal a Brainrot",name:"Legendary Brainrot",price:19.99,icon:"👑"},
{id:6,game:"Steal a Brainrot",name:"Mutation Pack",price:12.99,icon:"🧬"},
{id:7,game:"Fortnite",name:"1,000 V-Bucks",price:8.99,icon:"⚡"},
{id:8,game:"Fortnite",name:"2,800 V-Bucks",price:21.99,icon:"💎"}
];
let filter="Всички",cart=[];
function renderProducts(){
 const q=document.getElementById("search").value.toLowerCase();
 const list=products.filter(p=>(filter==="Всички"||p.game===filter)&&p.name.toLowerCase().includes(q));
 document.getElementById("productGrid").innerHTML=list.map(p=>`
 <article class="product"><div class="product-img">${p.icon}</div><div class="product-body"><small>${p.game}</small><h3>${p.name}</h3>
 <div class="buy"><span class="price">€${p.price.toFixed(2)}</span><button class="add" onclick="addToCart(${p.id})">Добави +</button></div></div></article>`).join("")||'<div class="empty">Няма намерени продукти.</div>';
}
function setFilter(f,el){filter=f;document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));el.classList.add("active");renderProducts()}
function filterGame(f){filter=f;document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("active",b.textContent.includes(f==="Steal a Brainrot"?"Brainrot":f)));document.getElementById("products").scrollIntoView({behavior:"smooth"});renderProducts()}
function addToCart(id){const p=products.find(x=>x.id===id);cart.push(p);document.getElementById("cartCount").textContent=cart.length;renderCart();openCart()}
function renderCart(){const el=document.getElementById("cartItems");if(!cart.length){el.innerHTML='<div class="empty">Количката е празна.</div>';document.getElementById("total").textContent="€0.00";return}el.innerHTML=cart.map((p,i)=>`<div class="cart-item"><div>${p.icon} <b>${p.name}</b><small>${p.game}</small></div><div><b>€${p.price.toFixed(2)}</b><button class="close" style="font-size:18px;margin-left:8px" onclick="removeCart(${i})">×</button></div></div>`).join("");document.getElementById("total").textContent="€"+cart.reduce((a,p)=>a+p.price,0).toFixed(2)}
function removeCart(i){cart.splice(i,1);document.getElementById("cartCount").textContent=cart.length;renderCart()}
function openCart(){document.getElementById("cart").classList.add("open");renderCart()}
function closeCart(){document.getElementById("cart").classList.remove("open")}
function focusSearch(){document.getElementById("search").focus();document.getElementById("products").scrollIntoView({behavior:"smooth"})}
function checkout(){if(!cart.length)return alert("Добави продукт в количката.");alert("Това е демо checkout. За реални плащания трябва да се свърже платежен доставчик и backend.");}
renderProducts();
