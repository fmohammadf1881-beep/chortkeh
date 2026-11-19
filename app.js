const SITE_NAME="چرتکه",PD="۰۱۲۳۴۵۶۷۸۹",AD="٠١٢٣٤٥٦٧٨٩";
const toEn=s=>String(s??"").replace(/[۰-۹]/g,d=>PD.indexOf(d)).replace(/[٠-٩]/g,d=>AD.indexOf(d)).replace(/[٫/]/g,".");
const toFa=s=>String(s??"").replace(/[0-9]/g,d=>PD[d]).replace(/[٠-٩]/g,d=>PD[AD.indexOf(d)]);
const vD=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
Object.defineProperty(HTMLInputElement.prototype,"value",{
  get(){let v=vD.get.call(this);return this.id==="srch"?v:toEn(v);},
  set(v){if(this.type==="number"){this.type="text";this.setAttribute("inputmode","decimal");}vD.set.call(this,this.id==="srch"?v:toFa(v));}
});
const TG_S=`<svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.25l-1.9 8.96c-.14.64-.52.8-1.05.5l-2.9-2.14-1.4 1.35c-.15.15-.28.28-.58.28l.2-2.95 5.38-4.86c.23-.2-.05-.32-.36-.12l-6.65 4.18-2.86-.9c-.62-.2-.63-.62.13-.92l11.18-4.3c.52-.2.97.12.81.92z"/></svg>`;
const RB_S=`<svg width="17" height="17" viewBox="0 0 24 24"><rect x="2" y="2" width="6" height="6" rx="1.5" fill="#ff3b30"/><rect x="9" y="2" width="6" height="6" rx="1.5" fill="#ff9500"/><rect x="16" y="2" width="6" height="6" rx="1.5" fill="#ffcc00"/><rect x="2" y="9" width="6" height="6" rx="1.5" fill="#34c759"/><rect x="9" y="9" width="6" height="6" rx="1.5" fill="#00c7be"/><rect x="16" y="9" width="6" height="6" rx="1.5" fill="#30b0c7"/><rect x="2" y="16" width="6" height="6" rx="1.5" fill="#007aff"/><rect x="9" y="16" width="6" height="6" rx="1.5" fill="#5856d6"/><rect x="16" y="16" width="6" height="6" rx="1.5" fill="#af52de"/></svg>`;
const EM_S=`<svg width="17" height="17" viewBox="0 0 24 24" fill="#ea4335"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;

document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("ch_dark")==="1")document.body.classList.add("dark");
  const isD=document.body.classList.contains("dark");
  document.head.insertAdjacentHTML("beforeend",`<style>@keyframes pls{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}#net-b{position:fixed;bottom:14px;left:12px;right:12px;max-width:420px;margin:auto;background:linear-gradient(135deg,#dc2626,#ea580c);color:#fff;padding:10px 14px;border-radius:14px;font-size:12px;font-weight:700;text-align:center;box-shadow:0 6px 20px #0005;z-index:999;display:none;animation:pls 1.4s infinite}.s-btn{flex:1;display:flex;align-items:center;justify-content:center;gap:6px;color:#fff;text-decoration:none;font-size:11.5px;font-weight:700;padding:10px 8px;border-radius:10px}</style>`);
  if(!document.getElementById("m-hdr")){
    document.body.insertAdjacentHTML("afterbegin",`<div id="net-b"></div><header id="m-hdr"><div class="nav-c"><a href="index.html" class="logo">🧮 ${SITE_NAME}</a><div class="h-btns"><button id="dm-btn" onclick="tgDark()" class="hm-btn">${isD?"☀️ روز":"🌙 شب"}</button><a href="index.html" class="hm-btn">🏠 همه ۲۵ ابزار</a></div></div></header>`);
    let m=document.querySelector("main");
    if(m)m.insertAdjacentHTML("beforeend",`<div class="box"><h3 style="font-size:13.5px;color:var(--pr);margin-bottom:8px">🔥 سایر ابزارهای پرکاربرد چرتکه:</h3><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;font-size:11.5px"><a href="tala.html" class="cat" style="text-decoration:none">🪙 محاسبه فاکتور طلا</a><a href="chek.html" class="cat" style="text-decoration:none">📝 مبلغ چک به حروف</a><a href="vam.html" class="cat" style="text-decoration:none">🏦 محاسبه اقساط وام</a><a href="kart.html" class="cat" style="text-decoration:none">💳 تبدیل شبا و حساب</a><a href="khodro.html" class="cat" style="text-decoration:none">🚗 افت قیمت خودرو</a><a href="index.html" class="cat on" style="text-decoration:none">🧮 مشاهده هر ۲۵ ابزار</a></div></div><div class="box" style="text-align:center;border:1.5px dashed var(--pr);padding:12px"><b style="font-size:13px;color:var(--pr)">📢 سفارش تبلیغات و ارتباط با مدیریت</b><div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap"><a href="https://t.me/Mohamadseccret" target="_blank" class="s-btn" style="background:#229ED9">${TG_S}<span>تلگرام: @Mohamadseccret</span></a><a href="https://rubika.ir/mmmdrz_f" target="_blank" class="s-btn" style="background:#1e293b">${RB_S}<span>روبیکا: @mmmdrz_f</span></a></div><a href="mailto:fmohammadf1881@gmail.com" class="s-btn" style="background:var(--bg);color:var(--tx);border:1px solid var(--bd);margin-top:8px">${EM_S}<span>ایمیل: fmohammadf1881@gmail.com</span></a></div>`);
    document.body.insertAdjacentHTML("beforeend",`<footer>تمامی حقوق برای سایت <b>${SITE_NAME}</b> محفوظ است © ۱۴۰۴</footer>`);
  }
  let nb=document.getElementById("net-b");
  const shN=(m,ok)=>{if(!nb)return;nb.innerText=m;nb.style.background=ok?"#10b981":"linear-gradient(135deg,#dc2626,#ea580c)";nb.style.display="block";if(ok)setTimeout(()=>nb.style.display="none",2500);};
  window.addEventListener("offline",()=>shN("📡 اینترنت شما قطع شد! (این ابزار بدون اینترنت هم کار می‌کند)"));
  window.addEventListener("online",()=>shN("⚡ اتصال اینترنت برقرار شد!",1));
  if(!navigator.onLine)shN("📡 اینترنت شما قطع یا بسیار ضعیف است!");
  document.querySelectorAll("a[href]").forEach(a=>a.addEventListener("click",()=>{
    setTimeout(()=>{if(document.visibilityState==="visible")shN("⏳ اینترنت شما ضعیف است؛ در حال انتقال...");},350);
  }));
  document.querySelectorAll("input").forEach(el=>{if(el.id!=="srch")el.value=vD.get.call(el);});
  document.querySelectorAll(".money").forEach(inp=>{
    let w=document.createElement("div");w.className="w-out";inp.parentNode.appendChild(w);
    const up=()=>{
      let v=inp.value.replace(/\D/g,"");
      if(!v){inp.value="";w.innerText="";return;}
      inp.value=Number(v).toLocaleString("en-US");
      w.innerText=toFa(numToFa(Number(v)))+" تومان";
    };
    inp.addEventListener("input",up);if(inp.value)up();
  });
  document.addEventListener("input",e=>{
    let el=e.target;if(el.tagName==="INPUT"&&el.id!=="srch"&&!el.classList.contains("money"))el.value=el.value;
  });
  document.querySelectorAll(".res").forEach(r=>{
    let b=document.createElement("button");b.className="cp-btn";
    b.innerText="📋 کپی نتیجه محاسبه";b.onclick=()=>copyRes(r,b);r.appendChild(b);
  });
});
function tgDark(){
  let d=document.body.classList.toggle("dark");
  localStorage.setItem("ch_dark",d?"1":"0");
  document.getElementById("dm-btn").innerText=d?"☀️ روز":"🌙 شب";
}
function copyRes(box,btn){
  let t=`📊 نتیجه در سایت ${SITE_NAME}:\n`;
  box.querySelectorAll(".r-row").forEach(r=>{
    let s=r.querySelector("span"),b=r.querySelector("b");
    if(s&&b)t+=`▪️ ${s.innerText} ${b.innerText}\n`;
  });
  t+=`🔗 ${location.href}`;navigator.clipboard.writeText(t);btn.innerText="✅ کپی شد!";
}
function val(id){let el=document.getElementById(id);return el?Number(el.value.replace(/[^0-9.-]/g,""))||0:0;}
function fmt(n){return Math.round(n).toLocaleString("fa-IR");}
function numToFa(n){
  if(!n)return"";let o=[];
  let b=Math.floor(n/1e9);if(b)o.push(b+" میلیارد");
  let m=Math.floor((n%1e9)/1e6);if(m)o.push(m+" میلیون");
  let k=Math.floor((n%1e6)/1e3);if(k)o.push(k+" هزار");
  let r=n%1e3;if(r)o.push(r);
  return o.join(" و ");
}
