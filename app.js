const SITE_NAME="چرتکه",P_D="۰۱۲۳۴۵۶۷۸۹",A_D="٠١٢٣٤٥٦٧٨٩";
function toEn(s){
  return String(s??"").replace(/[۰-۹]/g,d=>P_D.indexOf(d)).replace(/[٠-٩]/g,d=>A_D.indexOf(d)).replace(/[٫/]/g,".");
}
function toFa(s){
  return String(s??"").replace(/[0-9]/g,d=>P_D[d]).replace(/[٠-٩]/g,d=>P_D[A_D.indexOf(d)]);
}
const vDesc=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
Object.defineProperty(HTMLInputElement.prototype,"value",{
  get(){let v=vDesc.get.call(this);return this.id==="srch"?v:toEn(v);},
  set(v){
    if(this.type==="number"){this.type="text";this.setAttribute("inputmode","decimal");}
    vDesc.set.call(this,this.id==="srch"?v:toFa(v));
  }
});
function fixInps(){
  document.querySelectorAll("input").forEach(inp=>{
    if(inp.id==="srch")return;
    if(inp.type==="number"){inp.type="text";inp.setAttribute("inputmode","decimal");}
    vDesc.set.call(inp,toFa(vDesc.get.call(inp)));
  });
}
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("ch_dark")==="1")document.body.classList.add("dark");
  const isHome=location.pathname.endsWith("index.html")||location.pathname.endsWith("/")||location.pathname.endsWith("/chortkeh");
  const isDark=document.body.classList.contains("dark");
  let ico=document.createElement("link");ico.rel="icon";
  ico.href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧮</text></svg>";
  document.head.appendChild(ico);
  document.body.insertAdjacentHTML("afterbegin",`<header><div class="nav-c"><a href="index.html" class="logo">🧮 ${SITE_NAME}</a><div class="h-btns"><button onclick="shSite()" class="hm-btn">📤 اشتراک</button><button id="dm-btn" onclick="tgDark()" class="hm-btn">${isDark?"☀️ روز":"🌙 شب"}</button>${!isHome?'<a href="index.html" class="hm-btn">🏠 همه ابزارها</a>':""}</div></div></header>`);
  if(!isHome){
    const main=document.querySelector("main");
    if(main)main.insertAdjacentHTML("beforeend",`<div class="box"><h3 style="font-size:14px;color:var(--pr);margin-bottom:10px">🔥 سایر ابزارهای پرکاربرد چرتکه:</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px"><a href="tala.html" class="cat" style="text-decoration:none">🪙 محاسبه فاکتور طلا</a><a href="vam.html" class="cat" style="text-decoration:none">🏦 محاسبه اقساط وام</a><a href="tarikh.html" class="cat" style="text-decoration:none">🔄 تبدیل تاریخ تقویم</a><a href="khodro.html" class="cat" style="text-decoration:none">🚗 افت قیمت خودرو</a><a href="mehrieh.html" class="cat" style="text-decoration:none">💍 محاسبه مهریه</a><a href="index.html" class="cat on" style="text-decoration:none">🧮 مشاهده هر ۲۰ ابزار</a></div></div>`);
  }
  document.body.insertAdjacentHTML("beforeend",`<footer>تمامی حقوق برای سایت <b>${SITE_NAME}</b> محفوظ است © ۱۴۰۴</footer>`);
  fixInps();
  document.querySelectorAll(".money").forEach(inp=>{
    let w=document.createElement("div");w.className="w-out";inp.parentNode.appendChild(w);
    const up=()=>{
      let v=toEn(vDesc.get.call(inp)).replace(/[^0-9]/g,"");
      if(!v){vDesc.set.call(inp,"");w.innerText="";return;}
      vDesc.set.call(inp,toFa(Number(v).toLocaleString("en-US")));
      w.innerText=toFa(numToFa(Number(v)))+" تومان";
    };
    inp.addEventListener("input",up);if(vDesc.get.call(inp))up();
  });
  document.addEventListener("input",e=>{
    let inp=e.target;
    if(inp.tagName==="INPUT"&&inp.id!=="srch"&&!inp.classList.contains("money")){
      if(inp.type==="number"){inp.type="text";inp.setAttribute("inputmode","decimal");}
      let cur=vDesc.get.call(inp),fa=toFa(cur.replace(/[٫/]/g,"."));
      if(cur!==fa)vDesc.set.call(inp,fa);
    }
  });
  document.addEventListener("click",e=>{if(e.target.tagName==="BUTTON")setTimeout(fixInps,20);});
  document.querySelectorAll(".res").forEach(r=>{
    let b=document.createElement("button");b.className="cp-btn";
    b.innerText="📋 کپی نتیجه محاسبه (برای ارسال)";
    b.onclick=()=>copyRes(r,b);r.appendChild(b);
  });
});
function tgDark(){
  let d=document.body.classList.toggle("dark");
  localStorage.setItem("ch_dark",d?"1":"0");
  document.getElementById("dm-btn").innerText=d?"☀️ روز":"🌙 شب";
}
function shSite(){
  if(navigator.share)navigator.share({title:document.title,url:location.href});
  else{navigator.clipboard.writeText(location.href);alert("لینک کپی شد!");}
}
function copyRes(box,btn){
  let t=`📊 نتیجه در سایت ${SITE_NAME}:\n`;
  box.querySelectorAll(".r-row").forEach(r=>{
    let s=r.querySelector("span"),b=r.querySelector("b");
    if(s&&b)t+=`▪️ ${s.innerText} ${b.innerText}\n`;
  });
  t+=`🔗 ${location.href}`;navigator.clipboard.writeText(t);
  let old=btn.innerText;btn.innerText="✅ با لینک سایت کپی شد!";
  setTimeout(()=>btn.innerText=old,2000);
}
function val(id){let el=document.getElementById(id);return el?Number(toEn(el.value).replace(/[^0-9.-]/g,""))||0:0;}
function fmt(n){return Math.round(n).toLocaleString("fa-IR");}
function numToFa(n){
  if(!n)return"";let o=[];
  let b=Math.floor(n/1e9);if(b)o.push(b+" میلیارد");
  let m=Math.floor((n%1e9)/1e6);if(m)o.push(m+" میلیون");
  let k=Math.floor((n%1e6)/1e3);if(k)o.push(k+" هزار");
  let r=n%1e3;if(r)o.push(r);
  return o.join(" و ");
}
