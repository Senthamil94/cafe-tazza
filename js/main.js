(function(){
"use strict";
var $=function(s,c){return (c||document).querySelector(s)};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var U='https://cafetazza.com/wp-content/uploads/';
var ORDER='https://order.boons.io/site/cafe-tazza/115/y';
var CATER='https://order.boons.io/site/catering/cafe-tazza/115/y';
var RM=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   1. DATA
   ============================================================ */
var THALI=[
 {t:'Eggless cakes',s:'Baked this morning',img:U+'2025/12/X1A6251-scaled.jpg',url:'indian-bakery-eggless-cakes-dublin'},
 {t:'Birthday cakes',s:'Custom &amp; same-day',img:U+'2026/06/birthday-custom-cakes.jpg',url:'birthday-cakes-dublin'},
 {t:'Chaat &amp; street food',s:'Made to order',img:U+'2025/12/image-19.jpg',url:'indian-chaat-dublin'},
 {t:'Dosa &amp; idli',s:'South Indian',img:U+'2025/12/X1A6135-scaled-e1766937468254.jpg',url:'south-indian-restaurant-dublin'},
 {t:'Curries &amp; naan',s:'North Indian',img:U+'2025/12/X1A6244-scaled-e1766250596483.jpg',url:'indian-restaurant-dublin-ca#north'},
 {t:'Sweets &amp; mithai',s:'Festival &amp; gifting',img:U+'2025/12/X1A6299-scaled.jpg',url:'indian-sweets-dublin'},
 {t:'Catering',s:'Parties &amp; events',img:U+'2025/12/X1A6084-scaled.jpg',url:'indian-catering-dublin'},
 {t:'Delivery',s:'To your door',img:U+'2026/06/indian-food-delivery-dublin.jpg',url:'order-indian-food-dublin'}
];

var CATS=[
 {k:'all',  t:'Everything'},
 {k:'south',t:'South Indian'},
 {k:'chaat',t:'Chaat & street food'},
 {k:'north',t:'Curries & meals'},
 {k:'bread',t:'Breads & rice'},
 {k:'bake', t:'Bakery & cakes'},
 {k:'sweet',t:'Sweets & mithai'}
];

/* n=name d=description p=price v=veg i=image */
var M=[
 /* ---- SOUTH INDIAN ---- */
 {c:'south',n:'Ghee Roast Dosa',d:'Homemade batter made into a thin paper dosa cooked in ghee',p:10.99,v:1,i:U+'2025/12/image-1-e1766937428406.png'},
 {c:'south',n:'Plain Dosa',d:'Thin crepe made from fermented lentils and rice',p:10.99,v:1,i:U+'2025/12/X1A6149-scaled.jpg'},
 {c:'south',n:'Masala Dosa',d:'Rice batter crepe layered with creamy potato stuffing',p:11.99,v:1,i:U+'2025/12/X1A6135-scaled-e1766937468254.jpg'},
 {c:'south',n:'Onion Dosa',d:'Rice batter crepe layered with onions',p:11.99,v:1,i:U+'2025/12/X1A6095-scaled-e1766937586384.jpg'},
 {c:'south',n:'Mysore Masala Dosa',d:'Rice batter crepe with spicy sauce and creamy potato stuffing',p:11.99,v:1},
 {c:'south',n:'Paneer Dosa',d:'Rice batter crepe with spiced and flavoured paneer',p:13.99,v:1},
 {c:'south',n:'Cheese Dosa',d:'A cheesy rice batter crepe stuffed with cheese',p:12.99,v:1},
 {c:'south',n:'Rava Dosa',d:'Semolina batter crepe with onions and black pepper',p:12.99,v:1},
 {c:'south',n:'Rava Masala Dosa',d:'Semolina batter crepe stuffed with potatoes',p:13.99,v:1},
 {c:'south',n:'Onion Rava Dosa',d:'Crispy semolina batter crepe with lots of onions',p:12.99,v:1},
 {c:'south',n:'Onion Rava Masala Dosa',d:'Crispy semolina crepe with onions and potato stuffing',p:13.99,v:1},
 {c:'south',n:'Vegetable Spring Dosa',d:'Rice batter crepe with mixed vegetables',p:12.99,v:1},
 {c:'south',n:'Onion Masala Dosa',d:'Rice batter crepe with onions and potato stuffing',p:13.99,v:1},
 {c:'south',n:'Kids Cone Dosa',d:'A dosa rolled into a cone — the one children ask for by name',p:9.99,v:1,i:U+'2025/12/X1A6095-scaled-e1766937586384.jpg'},
 {c:'south',n:'Egg Dosa',d:'Rice batter crepe layered with eggs',p:13.99,v:0},
 {c:'south',n:'Chicken Keema Dosa',d:'Rice batter crepe layered with minced chicken, onions and chillies',p:13.99,v:0},
 {c:'south',n:'Lamb Keema Dosa',d:'Rice batter crepe stuffed with minced lamb',p:13.99,v:0},
 {c:'south',n:'Steamed Idli',d:'Soft steamed rice cakes with sambar and chutney',p:8.99,v:1,i:U+'2025/12/X1A6183-scaled.jpg'},
 {c:'south',n:'Butter Toasted Idli',d:'Idli toasted in butter until golden at the edges',p:9.99,v:1},
 {c:'south',n:'Masala Coconut Idli',d:'Idli tossed with coconut and south Indian spices',p:9.99,v:1},
 {c:'south',n:'Medhu Vada',d:'Crisp lentil doughnuts, fluffy inside',p:8.99,v:1},
 {c:'south',n:'Onion Green Chili Uttapam',d:'Uttapam topped with green chillies, onions and cilantro',p:12.99,v:1},
 {c:'south',n:'Onion Tomato Uttapam',d:'Thick pancake topped with onion and tomato',p:12.99,v:1},
 {c:'south',n:'Vegetable Uttapam',d:'Thick pancake loaded with mixed vegetables',p:12.99,v:1},

 /* ---- CHAAT & STREET FOOD ---- */
 {c:'chaat',n:'Pani Poori',d:'8 crispy puffed wafers with spicy mint water, chutneys, potatoes and chickpeas',p:9.99,v:1,i:U+'2025/12/X1A6208-scaled-e1766928622864.jpg'},
 {c:'chaat',n:'Samosa Chaat (2 Pcs)',d:'2 samosas served with garbanzo curry, chutney, onion and yogurt',p:9.99,v:1},
 {c:'chaat',n:'Papdi Chaat',d:'Chickpeas, seasoned yogurt and chutneys over crisp chips',p:9.99,v:1,i:U+'2025/12/image-1-e1766929097426.jpg'},
 {c:'chaat',n:'Dahi Sev Poori',d:'Puffed chips with chickpeas, potatoes, sweet yogurt and chutneys',p:9.99,v:1,i:U+'2025/12/image-5.jpg'},
 {c:'chaat',n:'Dahi Bhalla Chaat',d:'Fried urad dal dumplings soaked in yogurt and chutneys',p:9.99,v:1,i:U+'2025/12/image-3.jpg'},
 {c:'chaat',n:'Bhel Poori',d:'Puffed rice, onion and potato tossed with tamarind and mint chutney',p:9.99,v:1,i:U+'2025/12/image-4.jpg'},
 {c:'chaat',n:'Aloo Tikki Chole',d:'Potato patties with chickpea curry, sweet yogurt and chutneys',p:9.99,v:1,i:U+'2025/12/image-6.jpg'},
 {c:'chaat',n:'Papdi Bhalla Chaat',d:'Urad dal dumplings with papdi, soaked in yogurt and chutney',p:9.99,v:1,i:U+'2025/12/image-7.jpg'},
 {c:'chaat',n:'Dhokla Chaat',d:'Dhokla pieces garnished with chutneys and yogurt',p:9.99,v:1,i:U+'2025/12/image-8.jpg'},
 {c:'chaat',n:'Kachori Chaat',d:'Crushed kachori topped with curry, yogurt and chutneys',p:9.99,v:1},
 {c:'chaat',n:'Dhokla',d:'Steamed, gently sweet-and-sour chickpea flour squares',p:11.99,v:1},
 {c:'chaat',n:'Chole Bhature',d:'Chickpea curry with pillowy fried flatbread',p:14.99,v:1,i:U+'2025/12/image-9.jpg'},
 {c:'chaat',n:'Poori Chole',d:'2 pieces of fried flatbread with spiced, curried chickpeas',p:13.99,v:1,i:U+'2025/12/image-10-e1766931175626.jpg'},
 {c:'chaat',n:'Aloo Poori',d:'2 pieces of fried flatbread with spiced potato curry',p:13.99,v:1,i:U+'2025/12/image-11.jpg'},
 {c:'chaat',n:'Bombay Vada Pav (2 Pcs)',d:'Seasoned potato patties sandwiched in pav bread',p:12.99,v:1,i:U+'2025/12/image-12.jpg'},
 {c:'chaat',n:'Pav Bhaaji',d:'Spicy blend of vegetables in tomato gravy with buttered pav',p:12.99,v:1,i:U+'2025/12/image-13.jpg'},
 {c:'chaat',n:'Paneer Bhurji Pav',d:'Scrambled cottage cheese with onion, tomatoes and spices',p:12.99,v:1},
 {c:'chaat',n:'Kutchi Dabeli',d:'Pav stuffed with sweet-spicy potato, onion, pomegranate, lehsun chutney and sev',p:11.99,v:1,i:U+'2025/12/image-18.jpg'},
 {c:'chaat',n:'Masala Grilled Fish',d:'Spiced marinated fish cooked on the grill',p:14.99,v:0,i:U+'2025/12/image-14.jpg'},
 {c:'chaat',n:'Lamb Keema Pav',d:'Minced spiced lamb served with 2 pav',p:13.99,v:0},
 {c:'chaat',n:'Chicken Keema Pav',d:'Minced spiced chicken served with 2 pav',p:12.99,v:0},
 {c:'chaat',n:'Fish Pakora',d:'Slices of fish marinated with spices and fried',p:13.99,v:0,i:U+'2025/12/image-17.jpg'},
 {c:'chaat',n:'Chicken Pakora',d:'Tender chicken marinated with spices and fried',p:12.99,v:0},
 {c:'chaat',n:'Momos Non Veg',d:'6 steamed dumplings with spiced filling',p:15.99,v:0},

 /* ---- NORTH INDIAN ---- */
 {c:'north',n:'Yellow Dal Fry',d:'Everyday lentils tempered with cumin and garlic',p:12.99,v:1},
 {c:'north',n:'Black Dal Makhani',d:'Black lentils simmered slow with butter and cream',p:14.99,v:1},
 {c:'north',n:'Mix Veg',d:'Seasonal vegetables in a spiced tomato gravy',p:14.99,v:1},
 {c:'north',n:'Soya Masala Chaap',d:'Soya chaap in a rich masala gravy',p:14.99,v:1},
 {c:'north',n:'Kadahi Paneer',d:'Paneer with peppers and onion in a kadahi masala',p:15.99,v:1},
 {c:'north',n:'Shahi Paneer',d:'Paneer in a mild, creamy cashew gravy',p:15.99,v:1},
 {c:'north',n:'Malai Kofta',d:'Soft paneer and potato dumplings in a creamy sauce',p:15.99,v:1},
 {c:'north',n:'Paneer Tikka Masala',d:'Grilled paneer in a smoky tomato masala',p:15.99,v:1},
 {c:'north',n:'Butter Chicken',d:'Boneless tandoori chicken in a creamy, flavourful sauce',p:15.99,v:0},
 {c:'north',n:'Chicken Tikka Masala',d:'Grilled chicken in a spiced tomato and cream gravy',p:15.99,v:0},
 {c:'north',n:'Kadahi Chicken',d:'Chicken with peppers and onion in kadahi masala',p:15.99,v:0},
 {c:'north',n:'Home Style Chicken Gravy',d:'The way it is cooked at home — onion, tomato, everyday spices',p:15.99,v:0},
 {c:'north',n:'Goat Curry',d:'Chunks of goat cooked with onion, tomato and spices',p:17.99,v:0},
 {c:'north',n:'Fish Curry',d:'Fish simmered in a tangy south-style curry',p:17.99,v:0},
 {c:'north',n:'Yellow Dal Fry (meal)',d:'With rice, bread and accompaniments',p:15.99,v:1},
 {c:'north',n:'Mix Veg (meal)',d:'With rice, bread and accompaniments',p:17.99,v:1},
 {c:'north',n:'Black Dal Makhani (meal)',d:'With rice, bread and accompaniments',p:17.99,v:1},
 {c:'north',n:'Soya Masala Chaap (meal)',d:'With rice, bread and accompaniments',p:17.99,v:1},
 {c:'north',n:'Kadahi Paneer (meal)',d:'With rice, bread and accompaniments',p:18.99,v:1},
 {c:'north',n:'Shahi Paneer (meal)',d:'With rice, bread and accompaniments',p:18.99,v:1},
 {c:'north',n:'Paneer Tikka Masala (meal)',d:'With rice, bread and accompaniments',p:18.99,v:1},
 {c:'north',n:'Butter Chicken (meal)',d:'With rice, bread and accompaniments',p:18.99,v:0},
 {c:'north',n:'Chicken Tikka Masala (meal)',d:'With rice, bread and accompaniments',p:18.99,v:0},
 {c:'north',n:'Kadahi Chicken (meal)',d:'With rice, bread and accompaniments',p:18.99,v:0},
 {c:'north',n:'Home Style Chicken Gravy (meal)',d:'With rice, bread and accompaniments',p:18.99,v:0},
 {c:'north',n:'Fish Curry (meal)',d:'With rice, bread and accompaniments',p:20.99,v:0},
 {c:'north',n:'Goat Curry (meal)',d:'With rice, bread and accompaniments',p:20.99,v:0},

 /* ---- BREADS & RICE ---- */
 {c:'bread',n:'Aloo Parantha',d:'Stuffed with spiced mashed potato',p:8.99,v:1},
 {c:'bread',n:'Mooli Parantha',d:'Stuffed with spiced radish',p:8.99,v:1},
 {c:'bread',n:'Gobi Parantha',d:'Stuffed with spiced cauliflower',p:8.99,v:1},
 {c:'bread',n:'Paneer Parantha',d:'Stuffed with seasoned paneer',p:10.99,v:1},
 {c:'bread',n:'Plain Malabar Parantha',d:'Flaky, layered bread from Kerala',p:8.99,v:1},
 {c:'bread',n:'Paneer Malabar Parantha',d:'Flaky parantha stuffed with spicy paneer',p:12.99,v:1},
 {c:'bread',n:'Veg Kothu Parantha',d:'Minced parantha tossed with vegetables and spices',p:11.99,v:1},
 {c:'bread',n:'Lamb Malabar Parantha',d:'Stuffed with spicy curried lamb',p:13.99,v:0},
 {c:'bread',n:'Chicken Malabar Parantha',d:'Flaky parantha stuffed with spiced chicken',p:12.99,v:0},
 {c:'bread',n:'Chicken Kothu Parantha',d:'Minced parantha tossed with chicken and spices',p:13.99,v:0},
 {c:'bread',n:'Egg Kothu Malabar Parantha',d:'Minced parantha tossed with egg and spices',p:12.99,v:0},
 {c:'bread',n:'Plain Naan',d:'White flour bread cooked in the tandoor',p:3.99,v:1},
 {c:'bread',n:'Butter Naan',d:'Tandoor naan brushed with butter',p:3.99,v:1},
 {c:'bread',n:'Butter Garlic Naan',d:'Tandoor naan with butter and garlic',p:3.99,v:1},
 {c:'bread',n:'Onion Naan',d:'Tandoor naan studded with onion',p:3.99,v:1},
 {c:'bread',n:'Tandoori Roti',d:'Whole wheat bread from the tandoor',p:3.99,v:1},
 {c:'bread',n:'Steamed White Rice',d:'Basmati rice steamed to perfection',p:3.99,v:1},

 /* ---- BAKERY & CAKES ---- */
 {c:'bake',n:'Black Forest Pastry',d:'Eggless. Cherry, cream and chocolate sponge',p:4.99,v:1,i:U+'2025/12/X1A6251-scaled.jpg'},
 {c:'bake',n:'Butterscotch Pastry',d:'Eggless. Caramel crunch and cream',p:4.99,v:1},
 {c:'bake',n:'Chocolate Pastry',d:'Eggless. Deep chocolate sponge and ganache',p:4.99,v:1},
 {c:'bake',n:'Choco Mousse Pastry',d:'Eggless. Light-set chocolate mousse',p:4.99,v:1},
 {c:'bake',n:'Choco Sacher Pastry',d:'Eggless. Dark chocolate with apricot',p:4.99,v:1},
 {c:'bake',n:'Mango Pastry',d:'Eggless. Mango cream and sponge',p:4.99,v:1},
 {c:'bake',n:'Mix Fruit Pastry',d:'Eggless. Fresh fruit over vanilla cream',p:4.99,v:1},
 {c:'bake',n:'Pineapple Pastry',d:'Eggless. The classic, done well',p:4.99,v:1},
 {c:'bake',n:'Pistachio Pastry',d:'Eggless. Pistachio cream and sponge',p:4.99,v:1},
 {c:'bake',n:'Strawberry Pastry',d:'Eggless. Strawberry cream and sponge',p:4.99,v:1},
 {c:'bake',n:'Cream Bun',d:'Soft bun filled with sweet cream',p:3.99,v:1},
 {c:'bake',n:'Cake 2 lb',d:'Eggless celebration cake in your choice of flavour',p:39.99,v:1,i:U+'2026/06/birthday-custom-cakes.jpg'},
 {c:'bake',n:'Special Cake 2 lb',d:'Eggless cake with a premium flavour and finish',p:49.99,v:1},

 /* ---- SWEETS & MITHAI ---- */
 {c:'sweet',n:'Jalebi Box',d:'Hot, coiled and syrup-soaked',p:11.99,v:1,i:U+'2025/12/X1A6294-scaled.jpg'},
 {c:'sweet',n:'Motichoor Laddoo (1.5 lb)',d:'Fine pearl-gram laddoo, made in house',p:14.99,v:1,i:U+'2025/12/X1A6299-scaled.jpg'},
 {c:'sweet',n:'Dry Fruits Box',d:'Assorted dry fruit sweets — good for gifting',p:21.99,v:1},
 {c:'sweet',n:'Cashew',d:'Kaju sweets by weight',p:9.99,v:1},
 {c:'sweet',n:'Mixed Namkeen',d:'Savoury mix for the tea tray',p:6.99,v:1},
 {c:'sweet',n:'Fancy Gift Box',d:'Festival packaging for your mithai',p:3.00,v:1}
];

var GAL=[
 {i:U+'2025/12/X1A6251-scaled.jpg',c:'Bakery case'},
 {i:U+'2025/12/image-19.jpg',c:'Pani poori'},
 {i:U+'2025/12/X1A6135-scaled-e1766937468254.jpg',c:'Masala dosa'},
 {i:U+'2025/12/X1A6299-scaled.jpg',c:'Mithai counter'},
 {i:U+'2025/12/X1A6046-1-scaled.jpg',c:'The dining room'},
 {i:U+'2025/12/X1A6084-scaled.jpg',c:'Catering spread'},
 {i:U+'2025/12/image-9.jpg',c:'Chole bhature'},
 {i:U+'2025/12/X1A6183-scaled.jpg',c:'Steamed idli'},
 {i:U+'2026/06/birthday-custom-cakes.jpg',c:'Custom cakes'},
 {i:U+'2025/12/X1A6294-scaled.jpg',c:'Fresh jalebi'},
 {i:U+'2025/12/image-13.jpg',c:'Pav bhaaji'},
 {i:U+'2025/12/X1A6142-scaled.jpg',c:'Front counter'},
 {i:U+'2025/12/X1A6244-scaled-e1766250596483.jpg',c:'North Indian plate'},
 {i:U+'2025/12/image-4.jpg',c:'Bhel poori'},
 {i:U+'2026/06/indian-food-delivery-dublin.jpg',c:'Boxed for delivery'},
 {i:U+'2025/12/image-18.jpg',c:'Kutchi dabeli'}
];

var SPOT=[
 {n:'Poori Chole',d:'2 pieces of fried flatbread with spiced, curried chickpeas',p:13.99},
 {n:'Pani Poori',d:'8 crispy puffed wafers with spicy mint water, chutneys, potatoes and chickpeas',p:9.99},
 {n:'Kids Cone Dosa',d:'A dosa rolled into a cone — the reason half our small guests turn up',p:9.99},
 {n:'Bombay Vada Pav (2 Pcs)',d:'Seasoned potato patties sandwiched in pav bread',p:12.99},
 {n:'Masala Dosa',d:'Rice batter crepe layered with creamy potato stuffing',p:11.99}
];

/* ============================================================
   2. HELPERS
   ============================================================ */
function money(n){return '$'+n.toFixed(2)}
var toastT;
function toast(msg){
  var t=$('#toast'); if(!t) return;
  t.textContent=msg; t.classList.add('show');
  clearTimeout(toastT); toastT=setTimeout(function(){t.classList.remove('show')},2400);
}
function copy(text,ok){
  var done=function(){toast(ok)};
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done,function(){fallback()});
  } else fallback();
  function fallback(){
    var a=document.createElement('textarea');a.value=text;a.style.position='fixed';a.style.opacity='0';
    document.body.appendChild(a);a.select();
    try{document.execCommand('copy');done()}catch(e){toast('Copy did not work — select the text manually')}
    document.body.removeChild(a);
  }
}

/* ============================================================
   3. PRELOADER
   ============================================================ */
window.addEventListener('load',function(){
  setTimeout(function(){
    var p=$('#pre'); if(p) p.classList.add('done');
    document.body.classList.remove('locked');
    var h=$('#h1'); if(h) h.classList.add('in');
  }, RM?0:1500);
});
document.body.classList.add('locked');
setTimeout(function(){
  var p=$('#pre'); if(p&&!p.classList.contains('done')){p.classList.add('done');document.body.classList.remove('locked')}
  var h=$('#h1'); if(h) h.classList.add('in');
},4200);

/* ============================================================
   4. CURSOR
   ============================================================ */
if(window.matchMedia('(hover:hover) and (pointer:fine)').matches&&!RM && $('#cur') && $('#cur-d')){
  var cur=$('#cur'),curD=$('#cur-d'),cx=0,cy=0,dx=0,dy=0;
  document.addEventListener('mousemove',function(e){
    if(!document.body.classList.contains('mouse'))document.body.classList.add('mouse');
    cx=e.clientX;cy=e.clientY;
    cur.style.transform='translate('+cx+'px,'+cy+'px) translate(-50%,-50%)';
  });
  (function loop(){
    dx+=(cx-dx)*.16; dy+=(cy-dy)*.16;
    curD.style.transform='translate('+dx+'px,'+dy+'px) translate(-50%,-50%)';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover',function(e){
    var t=e.target.closest('a,button,.katori,.gal figure,input,.tab,.opt');
    curD.classList.toggle('big',!!t);
  });
}

/* ============================================================
   5. REVEAL + SPLIT HEADINGS
   ============================================================ */
$$('h2.split, h3.split').forEach(function(h){
  var html=h.innerHTML.split('<br>').map(function(line){
    return line.trim().split(/\s+/).map(function(w){return '<span class="w"><i>'+w+'</i></span>'}).join(' ');
  }).join('<br>');
  h.innerHTML=html;
});
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.12,rootMargin:'0px 0px -60px 0px'});
function watch(){ $$('.rv:not(.in), .split:not(.in)').forEach(function(el){io.observe(el)}) }
watch();

/* ============================================================
   6. HEADER / DRAWER / PROGRESS
   ============================================================ */
var header=$('#header'),burger=$('#burger'),dock=$('#dock'),topBtn=$('#toTop'),prog=$('#prog'),scrim=$('#scrim');
function onScroll(){
  var y=window.pageYOffset,h=document.documentElement.scrollHeight-window.innerHeight;
  if(header) header.classList.toggle('stuck',y>12);
  if(topBtn) topBtn.classList.toggle('show',y>620);
  if(dock) dock.classList.toggle('up',y>500);
  if(prog) prog.style.width=(h>0?(y/h*100):0)+'%';
}
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

function pinNavChrome(){
  var probe=document.createElement('div');
  probe.style.cssText='position:fixed;top:0;left:0;width:1px;height:1px;visibility:hidden;pointer-events:none';
  document.body.appendChild(probe);
  var offset=Math.max(0,Math.round(-probe.getBoundingClientRect().top));
  document.body.removeChild(probe);
  var top=offset+'px',h=window.innerHeight+'px';
  [ $('#drawer'), $('#scrim') ].forEach(function(el){
    if(!el) return;
    el.style.top=top;
    el.style.height=h;
    el.style.bottom='auto';
  });
}
function unpinNavChrome(){
  [ $('#drawer'), $('#scrim') ].forEach(function(el){
    if(!el) return;
    el.style.top='';
    el.style.height='';
    el.style.bottom='';
  });
}
function openDrawer(){
  pinNavChrome();
  document.documentElement.classList.add('nav-open');
  document.body.classList.add('nav-open');
  if(burger) burger.setAttribute('aria-expanded','true');
}
function closeDrawer(){
  document.documentElement.classList.remove('nav-open');
  document.body.classList.remove('nav-open');
  unpinNavChrome();
  if(burger) burger.setAttribute('aria-expanded','false');
}
if(burger) burger.addEventListener('click',function(e){
  e.stopPropagation();
  document.body.classList.contains('nav-open')?closeDrawer():openDrawer();
});
var drawerClose=$('#drawerClose');
if(drawerClose) drawerClose.addEventListener('click',closeDrawer);
if(scrim) scrim.addEventListener('click',closeDrawer);
$$('#drawer a').forEach(function(a){a.addEventListener('click',closeDrawer)});

$$('.has-sub').forEach(function(li){
  var btn=$('button',li);
  function set(open){ li.dataset.open=String(open); if(btn) btn.setAttribute('aria-expanded',String(open)); }
  if(btn) btn.addEventListener('click',function(e){ e.stopPropagation(); set(li.dataset.open!=='true'); });
  li.addEventListener('mouseenter',function(){ set(true); });
  li.addEventListener('mouseleave',function(){ set(false); });
  $$('a',li).forEach(function(a){ a.addEventListener('click',function(){ set(false); }); });
});
document.addEventListener('click',function(){
  $$('.has-sub').forEach(function(li){
    li.dataset.open='false';
    var b=$('button',li); if(b) b.setAttribute('aria-expanded','false');
  });
});

if(topBtn) topBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:RM?'auto':'smooth'})});

/* scrollspy */
var navLinks=$$('.header .menu a.nv');
var spySecs=navLinks.map(function(a){return $(a.getAttribute('href'))}).filter(Boolean);
if('IntersectionObserver' in window && spySecs.length){
  var spy=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      navLinks.forEach(function(a){
        if(a.getAttribute('href')==='#'+en.target.id) a.setAttribute('aria-current','true');
        else a.removeAttribute('aria-current');
      });
    });
  },{rootMargin:'-45% 0px -50% 0px'});
  spySecs.forEach(function(s){ spy.observe(s); });
}

/* ============================================================
   7. THE TAZZA THALI
   ============================================================ */
(function(){
  var stage=$('#thali'),platter=$('#platter'),hub=$('#hub'); if(!stage||!platter||!hub) return;
  var step=360/THALI.length,idx=0;
  var coarse=window.matchMedia('(hover:none),(pointer:coarse)').matches;
  var down=false,moved=false,startA=0,startIdx=0,lastTouch=0,hoverLock=false,timer=null;
  THALI.forEach(function(c,i){
    var a=document.createElement('a');
    a.className='katori'; a.href=c.url; a.setAttribute('aria-label',c.t.replace(/&amp;/g,'&'));
    a.innerHTML='<img src="'+c.img+'" alt="'+c.t.replace(/&amp;/g,'and')+'" loading="lazy">';
    var ang=i*step, rad=(ang-90)*Math.PI/180, R=154;
    a.style.transform='translate('+(Math.cos(rad)*R)+'%,'+(Math.sin(rad)*R)+'%)';
    a.dataset.i=i;
    if(!coarse){
      a.addEventListener('mouseenter',function(){
        if(down||hoverLock) return;
        go(i,true);
      });
    }
    a.addEventListener('focus',function(){go(i,true)});
    platter.appendChild(a);
  });
  var pods=$$('.katori',platter);

  function render(){
    var c=THALI[idx];
    hub.innerHTML='<em>Now showing</em><b>'+c.t+'</b><span class="go">'+c.s+' &rarr;</span>';
    hub.classList.remove('hub-swap'); void hub.offsetWidth; hub.classList.add('hub-swap');
    hub.parentNode.onclick=function(){window.location.href=c.url};
    hub.parentNode.style.cursor='pointer';
    pods.forEach(function(p,i){p.classList.toggle('act',i===idx)});
  }
  function go(i,manual){
    idx=(i%THALI.length+THALI.length)%THALI.length;
    hoverLock=true;
    platter.style.transform='rotate('+(-idx*step)+'deg)';
    pods.forEach(function(p,k){
      var ang=k*step,rad=(ang-90)*Math.PI/180,R=154;
      p.style.transform='translate('+(Math.cos(rad)*R)+'%,'+(Math.sin(rad)*R)+'%) rotate('+(idx*step)+'deg)';
    });
    render();
    clearTimeout(window.__tzHover);
    window.__tzHover=setTimeout(function(){hoverLock=false}, RM?0:1100);
    if(manual) rest();
  }
  function auto(){ if(RM) return; clearInterval(timer); timer=setInterval(function(){go(idx+1)},5000) }
  function rest(){ clearInterval(timer); clearTimeout(window.__tz); window.__tz=setTimeout(auto,8000) }
  stage.addEventListener('mouseenter',function(){clearInterval(timer)});
  stage.addEventListener('mouseleave',rest);

  /* drag to rotate — taps must not skip extra bowls */
  function pt(e){
    if(e.changedTouches&&e.changedTouches[0]) return {x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};
    if(e.touches&&e.touches[0]) return {x:e.touches[0].clientX,y:e.touches[0].clientY};
    if(typeof e.clientX==='number') return {x:e.clientX,y:e.clientY};
    return null;
  }
  function angleOf(p){
    var r=stage.getBoundingClientRect();
    return Math.atan2(p.y-(r.top+r.height/2), p.x-(r.left+r.width/2))*180/Math.PI;
  }
  function dstart(e){
    if(e.type==='mousedown' && Date.now()-lastTouch<800) return;
    if(e.type==='touchstart') lastTouch=Date.now();
    var p=pt(e); if(!p) return;
    down=true; moved=false; startA=angleOf(p); startIdx=idx;
    platter.classList.add('drag'); clearInterval(timer);
  }
  function dmove(e){
    if(!down) return;
    var p=pt(e); if(!p) return;
    var d=angleOf(p)-startA;
    if(Math.abs(d)>10) moved=true;
    if(moved) platter.style.transform='rotate('+(-startIdx*step+d)+'deg)';
  }
  function dend(e){
    if(!down) return;
    down=false; platter.classList.remove('drag');
    var p=pt(e);
    var d=p?angleOf(p)-startA:0;
    if(moved && Math.abs(d)>=step*0.28){
      go(Math.round(startIdx-d/step),true);
    } else if(moved){
      go(startIdx,true);
    } else {
      rest();
    }
  }
  platter.addEventListener('click',function(e){ if(moved){e.preventDefault();e.stopPropagation();moved=false} },true);
  stage.addEventListener('mousedown',dstart); window.addEventListener('mousemove',dmove); window.addEventListener('mouseup',dend);
  stage.addEventListener('touchstart',dstart,{passive:true}); stage.addEventListener('touchmove',dmove,{passive:true});
  stage.addEventListener('touchend',dend); stage.addEventListener('touchcancel',dend);

  stage.setAttribute('tabindex','0');
  stage.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'){go(idx+1,true);e.preventDefault()}
    if(e.key==='ArrowLeft'){go(idx-1,true);e.preventDefault()}
    if(e.key==='Enter'){window.location.href=THALI[idx].url}
  });
  go(0); auto();
})();

/* ============================================================
   8. MARQUEE + HERO WORD FLIP
   ============================================================ */
(function(){
  var marq=$('#marq'); if(!marq) return;
  var words=['Eggless cakes','Pani poori','Masala dosa','Motichoor laddoo','Pav bhaaji','Butter chicken','Fresh jalebi','Kids cone dosa','Chole bhature','Malabar parantha'];
  var run=words.map(function(w){return '<span>'+w+' <i></i></span>'}).join('');
  marq.innerHTML=run+run;
})();
(function(){
  var f=$$('#h1 .flip>span'); if(f.length<2||RM) return; var i=0;
  setInterval(function(){ f[i].classList.remove('on'); i=(i+1)%f.length; f[i].classList.add('on') },2600);
})();

/* ============================================================
   9. COUNTERS
   ============================================================ */
var cio=new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(!e.isIntersecting)return; cio.unobserve(e.target);
    var el=e.target,end=+el.dataset.count,t0=null;
    if(RM){el.textContent=end+(end===100?'+':'');return}
    requestAnimationFrame(function step(t){
      if(!t0)t0=t; var p=Math.min((t-t0)/1300,1);
      el.textContent=Math.round(end*(1-Math.pow(1-p,3)))+(p===1&&end===100?'+':'');
      if(p<1)requestAnimationFrame(step);
    });
  });
},{threshold:.5});
$$('[data-count]').forEach(function(el){cio.observe(el)});

/* ============================================================
   9b. SOUTH INDIAN TASTING SWITCHER
   ============================================================ */
(function(){
  var box=$('#siTaste'); if(!box) return;
  var imgs=$$('.si-taste-stage img',box),tabs=$$('.si-tab',box);
  var name=$('#siTasteName'),price=$('#siTastePrice');
  function pick(i){
    tabs.forEach(function(t,k){
      t.classList.toggle('on',k===i);
      t.setAttribute('aria-selected',k===i?'true':'false');
    });
    imgs.forEach(function(m,k){m.classList.toggle('on',k===i)});
    if(name) name.textContent=tabs[i].dataset.name;
    if(price) price.textContent=tabs[i].dataset.p;
  }
  tabs.forEach(function(t,i){t.addEventListener('click',function(){pick(i)})});
})();

/* ============================================================
   10. SIGNATURE SPOTLIGHT
   ============================================================ */
(function(){
  var list=$('#spotList'),imgs=$$('#spotImg img'),price=$('#spotPrice'),cur=0;
  if(!list) return;
  SPOT.forEach(function(d,i){
    var b=document.createElement('button');
    b.className='spot-row'+(i===0?' on':'');
    b.innerHTML='<span class="idx">0'+(i+1)+'</span><span><h3>'+d.n+'</h3><p>'+d.d+'</p></span><span class="pr">'+money(d.p)+'</span>';
    b.addEventListener('click',function(){pick(i)});
    b.addEventListener('mouseenter',function(){pick(i)});
    list.appendChild(b);
  });
  var rows=$$('.spot-row',list);
  function pick(i){
    cur=i;
    rows.forEach(function(r,k){r.classList.toggle('on',k===i)});
    imgs.forEach(function(m,k){m.classList.toggle('on',k===i)});
    price.textContent=money(SPOT[i].p);
  }
})();

/* ============================================================
   11. MENU EXPLORER
   ============================================================ */
var state={cat:'all',q:'',diet:null,sort:null};
(function(){
  var tabs=$('#tabs'),grid=$('#grid');
  if(!tabs||!grid) return;
  CATS.forEach(function(c){
    var n=c.k==='all'?M.length:M.filter(function(m){return m.c===c.k}).length;
    var b=document.createElement('button');
    b.className='tab'+(c.k==='all'?' on':''); b.dataset.k=c.k;
    b.innerHTML=c.t+'<span class="c">'+n+'</span>';
    b.addEventListener('click',function(){
      state.cat=c.k; $$('.tab',tabs).forEach(function(t){t.classList.toggle('on',t===b)}); draw();
    });
    tabs.appendChild(b);
  });

  window.draw=function(){
    var out=M.filter(function(m){
      if(state.cat!=='all'&&m.c!==state.cat)return false;
      if(state.diet==='veg'&&!m.v)return false;
      if(state.diet==='non'&&m.v)return false;
      if(state.q){
        var s=(m.n+' '+(m.d||'')).toLowerCase();
        return state.q.toLowerCase().split(/\s+/).every(function(w){return s.indexOf(w)>-1});
      }
      return true;
    });
    if(state.sort==='price') out=out.slice().sort(function(a,b){return a.p-b.p});

    if(!out.length){
      grid.innerHTML='<div class="empty"><b>Nothing matched that</b><p>Try a shorter word — or clear the filters and browse a category.</p></div>';
      return;
    }
    grid.innerHTML=out.map(function(m,i){
      var th=m.i
        ? '<img src="'+m.i+'" alt="'+m.n+'" loading="lazy">'
        : '<span class="ini">'+m.n.charAt(0)+'</span>';
      return '<a class="mi" href="'+ORDER+'" target="_blank" rel="noopener" style="animation-delay:'+Math.min(i*22,420)+'ms">'+
        '<div class="mi-th">'+th+'<span class="mi-tags"><span class="veg-mark'+(m.v?'':' non')+'" title="'+(m.v?'Vegetarian':'Non-vegetarian')+'"></span></span></div>'+
        '<div class="mi-b"><h4>'+m.n+'</h4>'+(m.d?'<p class="d">'+m.d+'</p>':'')+
        '<div class="mi-f"><span class="pr">'+money(m.p)+'</span></div></div></a>';
    }).join('');
  };

  var q=$('#q'),wrap=$('#searchWrap'),tt;
  q.addEventListener('input',function(){
    wrap.classList.toggle('has',!!q.value);
    clearTimeout(tt); tt=setTimeout(function(){ state.q=q.value.trim(); draw() },140);
  });
  $('#clr').addEventListener('click',function(){q.value='';state.q='';wrap.classList.remove('has');draw();q.focus()});

  $$('[data-diet]').forEach(function(b){
    b.addEventListener('click',function(){
      var v=b.dataset.diet;
      state.diet=state.diet===v?null:v;
      $$('[data-diet]').forEach(function(x){x.classList.toggle('on',x.dataset.diet===state.diet)});
      draw();
    });
  });
  $('[data-sort]').addEventListener('click',function(){
    state.sort=state.sort?null:'price';
    this.classList.toggle('on',!!state.sort);
    this.textContent=state.sort?'Price: low first':'Price: low first';
    draw();
  });
  draw();
})();

$$('[data-jump]').forEach(function(a){
  a.addEventListener('click',function(){
    var tab=$('.tab[data-k="'+a.getAttribute('data-jump')+'"]');
    if(tab) tab.click();
  });
});

/* ============================================================
   12. CAKE STUDIO
   ============================================================ */
(function(){
  var cake=$('#cakeArt'),msgEl=$('#cakeMsg'),priceEl=$('#cakePrice'),input=$('#msgIn');
  if(!cake||!priceEl||!input) return;
  var st={lb:2,flav:'Black forest',col:'#6B3B2A',fx:0,occ:'Birthday',addons:[],addx:0};

  function build(){
    var tiers=st.lb<=1?1:st.lb<=2?2:st.lb<=3?2:3;
    var w=[112,132,150,168][st.lb-1]||140;
    var html='<span class="cake-msg" id="cakeMsg">'+(input.value||'&nbsp;')+'</span>';
    if(st.occ==='Birthday'){
      var c=Math.min(st.lb+1,5),off=(c-1)*11/2;
      for(var k=0;k<c;k++) html+='<span class="candle" style="left:calc(50% + '+(k*11-off)+'px)"></span>';
    }
    for(var i=0;i<tiers;i++){
      var ww=w*(1-(tiers-1-i)*0.18), hh=24+st.lb*4;
      html+='<div class="tier" style="width:'+ww+'px;height:'+hh+'px;background:linear-gradient(180deg,'+shade(st.col,26)+','+st.col+');order:'+i+'"></div>';
    }
    cake.innerHTML=html;
    cake.style.transform='scale('+(0.86+st.lb*0.05)+')';
    msgEl=$('#cakeMsg');
    var base=st.lb*20+st.fx*st.lb+st.addx;
    priceEl.textContent='$'+Math.round(base);
  }
  function shade(hex,amt){
    var n=parseInt(hex.slice(1),16),r=Math.min(255,(n>>16)+amt),g=Math.min(255,(n>>8&255)+amt),b=Math.min(255,(n&255)+amt);
    return 'rgb('+r+','+g+','+b+')';
  }
  $$('[data-group="size"] .opt').forEach(function(b){b.addEventListener('click',function(){
    $$('[data-group="size"] .opt').forEach(function(x){x.classList.remove('on')}); b.classList.add('on');
    st.lb=+b.dataset.lb; build();
  })});
  $$('[data-group="flav"] .opt').forEach(function(b){b.addEventListener('click',function(){
    $$('[data-group="flav"] .opt').forEach(function(x){x.classList.remove('on')}); b.classList.add('on');
    st.flav=b.dataset.v; st.col=b.dataset.c; st.fx=+b.dataset.x; build();
  })});
  $$('[data-group="occ"] .opt').forEach(function(b){b.addEventListener('click',function(){
    $$('[data-group="occ"] .opt').forEach(function(x){x.classList.remove('on')}); b.classList.add('on');
    st.occ=b.dataset.v; input.value=b.dataset.msg; build();
  })});
  $$('[data-group="add"] .opt').forEach(function(b){b.addEventListener('click',function(){
    b.classList.toggle('on');
    st.addons=$$('[data-group="add"] .opt.on').map(function(x){return x.dataset.v});
    st.addx=$$('[data-group="add"] .opt.on').reduce(function(a,x){return a+ +x.dataset.x},0);
    build();
  })});
  input.addEventListener('input',build);
  var copyBtn=$('#copyCake');
  if(copyBtn) copyBtn.addEventListener('click',function(){
    var txt='Cafe Tazza — cake request\nSize: '+st.lb+' lb\nFlavour: '+st.flav+' (eggless)\nOccasion: '+st.occ+
      '\nMessage on top: "'+(input.value||'—')+'"\nAdd-ons: '+(st.addons.length?st.addons.join(', '):'none')+
      '\nEstimated: '+priceEl.textContent+' (to be confirmed)\nCall 925-560-9830';
    copy(txt,'Cake spec copied — send it to us');
  });
  build();
})();

/* ============================================================
   14. CATERING ESTIMATE
   ============================================================ */
(function(){
  var slider=$('#guests'),count=$('#gCount'),out=$('#catOut'),pkg={v:'Classic buffet',x:23};
  if(!slider||!count||!out) return;
  function calc(){
    var g=+slider.value; count.textContent=g;
    var per=pkg.x, food=g*per;
    var staff=g>=80?Math.ceil(g/50)*140:0;
    var rows=[
      ['Package',pkg.v],
      ['Per guest','$'+per],
      ['Food estimate',money(food)],
      ['Service staff',staff?money(staff)+' ('+Math.ceil(g/50)+')':'not needed'],
      ['Ballpark total','<strong>'+money(food+staff)+'</strong>']
    ];
    out.innerHTML=rows.map(function(r){return '<div><span>'+r[0]+'</span><span>'+r[1]+'</span></div>'}).join('');
    out.dataset.txt='Cafe Tazza catering estimate\nGuests: '+g+'\nPackage: '+pkg.v+' ($'+per+'/guest)\nFood: '+money(food)+
      (staff?'\nService staff: '+money(staff):'')+'\nBallpark total: '+money(food+staff)+'\nIndicative only — call 925-560-9830';
  }
  slider.addEventListener('input',calc);
  $$('[data-group="pkg"] .opt').forEach(function(b){b.addEventListener('click',function(){
    $$('[data-group="pkg"] .opt').forEach(function(x){x.classList.remove('on')}); b.classList.add('on');
    pkg={v:b.dataset.v,x:+b.dataset.x}; calc();
  })});
  var copyCat=$('#copyCat');
  if(copyCat) copyCat.addEventListener('click',function(){copy(out.dataset.txt,'Estimate copied')});
  calc();
})();

/* ============================================================
   15. GALLERY + LIGHTBOX
   ============================================================ */
(function(){
  var gal=$('#gal'); if(!gal) return;
  gal.innerHTML=GAL.map(function(g,i){
    return '<figure data-i="'+i+'"><img src="'+g.i+'" alt="'+g.c+' at Cafe Tazza Dublin CA" loading="lazy"><figcaption>'+g.c+'</figcaption></figure>';
  }).join('');
  var lb=$('#lb'),img=$('#lbI'),cap=$('#lbC'),cur=0;
  if(!lb||!img) return;
  function show(i){
    cur=(i%GAL.length+GAL.length)%GAL.length;
    img.src=GAL[cur].i; img.alt=GAL[cur].c; cap.textContent=GAL[cur].c;
  }
  function open(i){show(i);lb.classList.add('open');document.body.classList.add('locked')}
  function close(){lb.classList.remove('open');document.body.classList.remove('locked')}
  gal.addEventListener('click',function(e){
    var f=e.target.closest('figure'); if(f)open(+f.dataset.i);
  });
  $('#lbX').addEventListener('click',close);
  $('#lbP').addEventListener('click',function(){show(cur-1)});
  $('#lbN').addEventListener('click',function(){show(cur+1)});
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close(); if(e.key==='ArrowRight')show(cur+1); if(e.key==='ArrowLeft')show(cur-1);
  });
})();

/* ============================================================
   16. REVIEWS
   ============================================================ */
(function(){
  var t=$('#revT'),nav=$('#revNav'); if(!t||!nav) return;
  var n=$$('.rev',t).length,i=0,timer;
  for(var k=0;k<n;k++){
    var d=document.createElement('button');
    d.className='rev-dot'+(k===0?' on':''); d.setAttribute('aria-label','Review '+(k+1));
    (function(k){d.addEventListener('click',function(){go(k);reset()})})(k);
    nav.appendChild(d);
  }
  var dots=$$('.rev-dot',nav);
  function go(k){i=(k%n+n)%n;t.style.transform='translateX(-'+(i*100)+'%)';dots.forEach(function(d,j){d.classList.toggle('on',j===i)})}
  function start(){if(!RM)timer=setInterval(function(){go(i+1)},5600)}
  function reset(){clearInterval(timer);start()}
  var revs=$('#revs');
  if(revs){
    revs.addEventListener('mouseenter',function(){clearInterval(timer)});
    revs.addEventListener('mouseleave',start);
  }
  start();
})();

/* ============================================================
   17. FAQ
   ============================================================ */
$$('.qa').forEach(function(qa){
  var btn=qa.querySelector('button'),a=qa.querySelector('.a');
  btn.addEventListener('click',function(){
    var open=qa.classList.contains('open');
    var box=qa.closest('.faq');
    $$('.qa.open',box).forEach(function(o){o.classList.remove('open');o.querySelector('.a').style.maxHeight=null});
    if(!open){qa.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
  });
});

/* ============================================================
   18. HOURS, LIVE STATUS, NOW SERVING
   ============================================================ */
var HOURS=[
  {d:'Sunday',o:10,c:21},{d:'Monday',o:10,c:21},{d:'Tuesday',o:10,c:21},{d:'Wednesday',o:10,c:21},
  {d:'Thursday',o:10,c:21},{d:'Friday',o:10,c:21.5},{d:'Saturday',o:10,c:21.5}
];
function fmt(h){var hh=Math.floor(h),mm=Math.round((h-hh)*60),ap=hh>=12?'pm':'am',h12=hh%12||12;return h12+(mm?':'+('0'+mm).slice(-2):'')+ap}
function pt(){
  var p=new Intl.DateTimeFormat('en-US',{timeZone:'America/Los_Angeles',hour12:false,weekday:'short',hour:'2-digit',minute:'2-digit'}).formatToParts(new Date());
  var o={}; p.forEach(function(x){o[x.type]=x.value});
  var map={Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6};
  return {day:map[o.weekday],h:(+o.hour)+(+o.minute)/60,label:o.hour+':'+o.minute};
}
(function(){
  var t=pt(),today=HOURS[t.day],open=t.h>=today.o&&t.h<today.c;
  var openNow=$('#openNow'),openDot=$('#openDot');
  if(openDot) openDot.classList.toggle('shut',!open);
  if(openNow){
    if(open){
      var left=today.c-t.h;
      openNow.textContent=left<1?'Closing soon · until '+fmt(today.c):'Open today until '+fmt(today.c);
    } else {
      openNow.textContent=t.h<today.o?'Opens '+fmt(today.o):'Closed · opens 10am';
    }
  }
  var hoursNow=$('#hoursNow');
  if(hoursNow) hoursNow.textContent=open?'Open now — until '+fmt(today.c)+' today':(t.h<today.o?'Opens today at '+fmt(today.o):'Closed now — back at 10am tomorrow');
  var hoursEl=$('#hours');
  if(hoursEl) hoursEl.innerHTML=HOURS.map(function(h,i){
    return '<div class="hr'+(i===t.day?' today':'')+'"><span class="d">'+h.d+'</span><span class="t">'+fmt(h.o)+' &ndash; '+fmt(h.c)+'</span></div>';
  }).join('');

  var clockLine=$('#clockLine');
  if(clockLine) clockLine.innerHTML='Dublin, CA &middot; '+t.label+' local';
  var slots=[
    {to:10, t:'The griddle is warming up', p:'We open at 10am. Perfect time to plan a breakfast of steamed idli, medhu vada and a ghee roast dosa.', c:'south'},
    {to:11.5,t:'Breakfast is on', p:'Idli, medhu vada and ghee roast dosa are coming off the griddle right now. Chai to go with it.', c:'south'},
    {to:15, t:'Lunch is running', p:'Full meals with rice, bread and curry — butter chicken, kadahi paneer, dal makhani. Masala dosa if you want it lighter.', c:'north'},
    {to:18, t:'Chaat hour', p:'This is when the chaat counter gets busy. Pani poori, samosa chaat, vada pav — assembled the moment you order.', c:'chaat'},
    {to:21.6,t:'Dinner service', p:'Curries, hot naan and dosa until close. The bakery case is still open for whatever survived the day.', c:'north'},
    {to:99, t:'Kitchen is closed', p:'We are done for tonight — back at 10am. Put an order in now and pick it up tomorrow.', c:'all'}
  ];
  var slot=slots.filter(function(s){return t.h<s.to})[0];
  if(!open&&t.h>=today.c) slot=slots[slots.length-1];
  var nowTitle=$('#nowTitle'),nowText=$('#nowText'),nowCta=$('#nowCta');
  if(nowTitle) nowTitle.textContent=slot.t;
  if(nowText) nowText.textContent=slot.p;
  if(nowCta) nowCta.addEventListener('click',function(e){
    e.preventDefault();
    var tab=$('.tab[data-k="'+slot.c+'"]'); if(tab)tab.click();
    var menu=$('#menuSec'); if(menu) menu.scrollIntoView({behavior:RM?'auto':'smooth'});
  });
})();

/* ============================================================
   19. NEWSLETTER (no backend — connect your own)
   ============================================================ */
var subBtn=$('#sub');
if(subBtn) subBtn.addEventListener('click',function(){
  var mail=$('#mail'),m=$('#subMsg'); if(!mail) return;
  var v=mail.value.trim();
  if(!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(v)){ if(m) m.textContent='That email does not look right — check it and try again.'; return }
  if(m) m.textContent='Thanks. Connect this form to your mailing list to start collecting.';
  mail.value='';
});

/* ============================================================
   20. TILT + SMOOTH ANCHORS + YEAR
   ============================================================ */
if(!RM&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  $$('.tilt').forEach(function(el){
    el.addEventListener('mousemove',function(e){
      var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      el.style.transform='perspective(900px) rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg) translateY(-6px)';
    });
    el.addEventListener('mouseleave',function(){el.style.transform=''});
  });
}
$$('a[href^="#"]').forEach(function(a){
  a.addEventListener('click',function(e){
    var id=a.getAttribute('href'); if(id==='#'||id.length<2)return;
    var t=$(id); if(!t)return; e.preventDefault();
    var y=t.getBoundingClientRect().top+window.pageYOffset-(id==='#menuSec'?108:86);
    window.scrollTo({top:y,behavior:RM?'auto':'smooth'});
  });
});
var yr=$('#yr'); if(yr) yr.textContent=new Date().getFullYear();
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){
    if(e.defaultPrevented) return;
    closeDrawer();
  }
});
setTimeout(watch,600);
})();
