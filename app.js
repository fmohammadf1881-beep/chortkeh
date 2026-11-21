const SITE_NAME="چرتکه",PD="۰۱۲۳۴۵۶۷۸۹",AD="٠١٢٣٤٥٦٧٨٩";
const isApp=/; wv\)|Android.*Version\//i.test(navigator.userAgent);
const toEn=s=>String(s??"").replace(/[۰-۹]/g,d=>PD.indexOf(d)).replace(/[٠-٩]/g,d=>AD.indexOf(d)).replace(/[,٬]/g,"").replace(/[٫/]/g,".");
const toFa=s=>String(s??"").replace(/[0-9]/g,d=>PD[d]).replace(/[٠-٩]/g,d=>PD[AD.indexOf(d)]);
const noSep=()=>/(kart|sen|tarikh|faseleh|bardari)/.test(location.pathname);
function fmt(s,el){
  if(el&&el.id==="srch")return String(s??"");
  if(noSep())return toFa(s);
  let e=toEn(s).trim();if(!/^\d+(\.\d*)?$/.test(e))return toFa(s);
  let [i,d]=e.split(".");
  if(i.length===4&&+i>=1250&&+i<=1450)return toFa(e);
  i=i.replace(/^0+(?=\d)/,"").replace(/\B(?=(\d{3})+(?!\d))/g,",");
  return toFa(d!==undefined?i+"."+d:i);
}
const _pf=window.parseFloat,_pi=window.parseInt;
window.parseFloat=s=>{let n=_pf(toEn(s));return isNaN(n)?0:n;};
window.parseInt=(s,r)=>{let n=_pi(toEn(s),r||10);return isNaN(n)?0:n;};
const vD=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
Object.defineProperty(HTMLInputElement.prototype,"value",{
  get(){
    let v=vD.get.call(this);if(this.id==="srch")return v;
    let c=toEn(v).trim();return(c===""&&this.dataset.def)?this.dataset.def:c;
  },
  set(v){
    if(this.type==="number"){this.type="text";this.setAttribute("inputmode","decimal");}
    vD.set.call(this,this.id==="srch"?v:fmt(v,this));
  }
});
const _ls=Number.prototype.toLocaleString;Number.prototype.toLocaleString=function(...a){return toFa(_ls.apply(this,a)).replace(/٬/g,",");};
const SK=["button","submit","checkbox","radio","hidden","file","image"];
function prep(el){
  if(!el||el.tagName!=="INPUT"||el.id==="srch"||el.dataset.p||SK.includes((el.type||"").toLowerCase()))return;
  el.dataset.p="1";
  let r=vD.get.call(el)||el.getAttribute("value")||"",ph=(el.getAttribute("placeholder")||r).trim();
  let dm=toEn(r||ph).match(/\d+(\.\d+)?/);
  if(dm&&!/kart/.test(location.pathname))el.dataset.def=dm[0];
  el.type="text";el.setAttribute("inputmode","decimal");
  if(ph){
    let p=toFa(toEn(ph).replace(/\d+/g,m=>fmt(m,el)));
    if(!p.includes("مثلا")&&!p.includes("مثال"))p="مثلاً "+p;
    el.setAttribute("placeholder",p);
  }
  el.removeAttribute("value");vD.set.call(el,"");
}
document.addEventListener("focusin",e=>{
  let el=e.target;if(el&&el.tagName==="INPUT"&&el.type==="number"){el.type="text";el.setAttribute("inputmode","decimal");}
},true);
document.addEventListener("input",e=>{
  let el=e.target;if(!el||el.tagName!=="INPUT"||el.id==="srch")return;
  if(el.type==="number"){el.type="text";el.setAttribute("inputmode","decimal");}
  let r=vD.get.call(el),f=fmt(r,el);
  if(r!==f){vD.set.call(el,f);try{el.setSelectionRange(f.length,f.length);}catch(x){}}
},true);
function faAll(n){if(!n)return;if(n.nodeType===3){let t=n.nodeValue,f=toFa(t);if(t!==f)n.nodeValue=f;}else if(n.nodeType===1&&n.tagName!=="SCRIPT"&&n.tagName!=="STYLE"){if(n.tagName==="INPUT")prep(n);n.childNodes.forEach(faAll);}}
function run(){document.querySelectorAll("input").forEach(prep);faAll(document.body);}
function init(){
  if(window._chI)return;window._chI=1;
  const st=document.createElement("style");
  st.textContent="input::placeholder{color:#94a3b8!important;opacity:1!important}input:focus::placeholder{color:transparent!important;opacity:0!important}.faq-b{background:#fff;border-radius:14px;padding:14px;margin-top:16px;border:1px solid #e2e8f0}.faq-b details{border-bottom:1px solid #f1f5f9;padding:8px 0}.faq-b summary{font-weight:700;font-size:.84rem;color:#1e293b;cursor:pointer;list-style:none;display:flex;justify-content:space-between}.faq-b p{font-size:.8rem;color:#475569;line-height:1.7;margin:6px 0 0;background:#f8fafc;padding:8px;border-radius:8px}"+(isApp?"#v-box,#pwa-btn{display:none!important}":"");
  document.head.appendChild(st);
  if(!document.getElementById("m-hdr")){
    const sh=new Intl.DateTimeFormat("fa-IR",{dateStyle:"full"}).format(new Date()),h=document.createElement("header");
    h.innerHTML=`<div style="max-width:600px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 8px"><a href="index.html" style="color:#fff;text-decoration:none;font-weight:800;font-size:1.05rem"><img src="logo.png" style="width:24px;height:24px;vertical-align:middle;border-radius:6px"> ${SITE_NAME}</a><span style="font-size:.75rem">📅 ${sh}</span><a href="index.html" style="background:rgba(255,255,255,.2);color:#fff;padding:4px 10px;border-radius:8px;text-decoration:none;font-size:.78rem">🏠 صفحه اصلی</a></div>`;
    document.body.insertBefore(h,document.body.firstChild);
  }
  const mn=document.querySelector(".container")||document.querySelector("main")||document.body;
  if(!document.getElementById("faq-sec")){
    const fq=document.createElement("div");fq.id="faq-sec";fq.className="faq-b";
    fq.innerHTML=`<div style="font-weight:800;font-size:.9rem;color:#1e40af;margin-bottom:6px">❓ سوالات پرتکرار کاربران</div><details><summary>فرمول محاسبه قیمت طلا و مالیات چگونه است؟</summary><p>مالیات ۱۰ درصد فقط بر روی جمع اجرت ساخت و سود طلافروش محاسبه می‌شود و اصل طلا معاف از مالیات است.</p></details><details><summary>نحوه محاسبه قسط وام و تبدیل شبا چگونه است؟</summary><p>با وارد کردن مبلغ وام و درصد سود، قسط ماهانه محاسبه شده و تبدیل شبا و حساب نیز به صورت آنی انجام می‌شود.</p></details>`;
    mn.appendChild(fq);
  }
  if(!document.getElementById("ad-box")){
    const b=document.createElement("div");b.id="ad-box";b.style.cssText="background:#fff;border-radius:14px;padding:14px;margin-top:14px;border:1px solid #e2e8f0;text-align:center";
    b.innerHTML=`<div style="font-weight:800;font-size:.9rem;margin-bottom:8px">📢 سفارش تبلیغات و ارتباط با مدیریت</div><div style="display:flex;gap:8px;justify-content:center;margin-bottom:8px"><a href="https://t.me/Mohamadseccret" target="_blank" style="background:#0088cc;color:#fff;padding:7px 14px;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:700">✈️ تلگرام</a><a href="https://rubika.ir/mmmdrz_f" target="_blank" style="background:#1e293b;color:#fff;padding:7px 14px;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:700">💠 روبیکا</a></div><a href="mailto:fmohammadf1881@gmail.com" style="color:#2563eb;text-decoration:none;font-size:.8rem;font-weight:700">✉️ fmohammadf1881@gmail.com</a>`;
    mn.appendChild(b);
  }
  run();setTimeout(run,150);
  if(!isApp){
    const vt=document.getElementById("v-today"),vl=document.getElementById("v-total"),dk="d"+new Date().toISOString().slice(0,10).replace(/-/g,""),B="https://api.counterapi.dev/v1/chortkeh_ir_real";
    if(vt)vt.textContent=toFa(localStorage.getItem("ch_rd")||"۱");
    if(vl)vl.textContent=toFa(localStorage.getItem("ch_rt")||"۱");
    fetch(`${B}/${dk}/up`).then(r=>r.json()).then(d=>{if(d&&d.count){localStorage.setItem("ch_rd",d.count);if(vt)vt.textContent=d.count.toLocaleString();}}).catch(()=>{});
    fetch(`${B}/total/up`).then(r=>r.json()).then(d=>{if(d&&d.count){localStorage.setItem("ch_rt",d.count);if(vl)vl.textContent=d.count.toLocaleString();}}).catch(()=>{});
  }
  new MutationObserver(m=>m.forEach(x=>{if(x.type==="characterData")faAll(x.target);else x.addedNodes.forEach(faAll);})).observe(document.body,{childList:true,subtree:true,characterData:true});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
window.addEventListener("load",run);
// پایان کد
