const SITE_NAME="چرتکه",PD="۰۱۲۳۴۵۶۷۸۹",AD="٠١٢٣٤٥٦٧٨٩";
const toEn=s=>String(s??"").replace(/[۰-۹]/g,d=>PD.indexOf(d)).replace(/[٠-٩]/g,d=>AD.indexOf(d)).replace(/[٫/]/g,".");
const toFa=s=>String(s??"").replace(/[0-9]/g,d=>PD[d]).replace(/[٠-٩]/g,d=>PD[AD.indexOf(d)]);
const vD=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
Object.defineProperty(HTMLInputElement.prototype,"value",{
  get(){let v=vD.get.call(this);return this.id==="srch"?v:toEn(v);},
  set(v){if(this.type==="number"){this.type="text";this.setAttribute("inputmode","decimal");}vD.set.call(this,this.id==="srch"?v:toFa(v));}
});
const _ls=Number.prototype.toLocaleString;
Number.prototype.toLocaleString=function(...a){return toFa(_ls.apply(this,a));};
const TG_S=`<svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.25l-1.9 8.96c-.14.64-.52.8-1.05.5l-2.9-2.14-1.4 1.35c-.15.15-.28.28-.58.28l.2-2.95 5.38-4.86c.23-.2-.05-.32-.36-.12l-6.65 4.18-2.86-.9c-.62-.2-.63-.62.13-.92l11.18-4.3c.52-.2.97.12.81.92z"/></svg>`;
const RB_S=`<svg width="16" height="16" viewBox="0 0 24 24"><rect x="2" y="2" width="6" height="6" rx="1.5" fill="#ff3b30"/><rect x="9" y="2" width="6" height="6" rx="1.5" fill="#ff9500"/><rect x="16" y="2" width="6" height="6" rx="1.5" fill="#ffcc00"/><rect x="2" y="9" width="6" height="6" rx="1.5" fill="#34c759"/><rect x="9" y="9" width="6" height="6" rx="1.5" fill="#00c7be"/><rect x="16" y="9" width="6" height="6" rx="1.5" fill="#30b0c7"/><rect x="2" y="16" width="6" height="6" rx="1.5" fill="#007aff"/><rect x="9" y="16" width="6" height="6" rx="1.5" fill="#5856d6"/><rect x="16" y="16" width="6" height="6" rx="1.5" fill="#af52de"/></svg>`;
const EM_S=`<svg width="16" height="16" viewBox="0 0 24 24" fill="#ea4335"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
const SK=["button","submit","checkbox","radio","hidden","file","image"];
function prep(el){
  if(!el||el.tagName!=="INPUT"||el.id==="srch"||el.dataset.u||SK.includes((el.type||"").toLowerCase()))return;
  let r=vD.get.call(el)||el.getAttribute("value")||"";
  el.type="text";el.setAttribute("inputmode","decimal");
  let p=toFa((el.getAttribute("placeholder")||r).trim());
  if(p){if(!p.includes("مثلا")&&!p.includes("مثال"))p="مثلاً "+p;el.setAttribute("placeholder",p);}
  el.removeAttribute("value");vD.set.call(el,"");
}
document.addEventListener("focusin",e=>{
  let el=e.target;if(!el||el.tagName!=="INPUT"||el.id==="srch")return;
  el.type="text";el.setAttribute("inputmode","decimal");vD.set.call(el,"");
},true);
document.addEventListener("input",e=>{
  let el=e.target;if(!el||el.tagName!=="INPUT")return;
  el.dataset.u="1";let r=vD.get.call(el),f=toFa(r);
  if(r!==f){let p=el.selectionStart;vD.set.call(el,f);try{el.setSelectionRange(p,p);}catch(x){}}
},true);
function faAll(n){
  if(!n)return;
  if(n.nodeType===3){let t=n.nodeValue,f=toFa(t);if(t!==f)n.nodeValue=f;}
  else if(n.nodeType===1&&n.tagName!=="SCRIPT"&&n.tagName!=="STYLE"){if(n.tagName==="INPUT")prep(n);n.childNodes.forEach(faAll);}
}
function run(){document.querySelectorAll("input").forEach(prep);faAll(document.body);}
document.addEventListener("DOMContentLoaded",()=>{
  const st=document.createElement("style");
  st.textContent="input::placeholder{color:#94a3b8!important;opacity:1!important}input:focus::placeholder{color:transparent!important;opacity:0!important}";
  document.head.appendChild(st);
  if(!document.getElementById("m-hdr")){
    const sh=new Intl.DateTimeFormat("fa-IR",{dateStyle:"full"}).format(new Date()),h=document.createElement("header");
    h.innerHTML=`<div style="max-width:600px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 8px"><a href="index.html" style="color:#fff;text-decoration:none;font-weight:800;font-size:1.05rem">🧮 ${SITE_NAME}</a><span style="font-size:.75rem">📅 ${sh}</span><a href="index.html" style="background:rgba(255,255,255,.2);color:#fff;padding:4px 10px;border-radius:8px;text-decoration:none;font-size:.78rem">🏠 صفحه اصلی</a></div>`;
    document.body.insertBefore(h,document.body.firstChild);
  }
  const mn=document.querySelector(".container")||document.querySelector("main")||document.body;
  if(!document.getElementById("ad-box")){
    const b=document.createElement("div");b.id="ad-box";b.style.cssText="background:#fff;border-radius:14px;padding:14px;margin-top:14px;border:1px solid #e2e8f0;text-align:center";
    b.innerHTML=`<div style="font-weight:800;font-size:.9rem;margin-bottom:8px">📢 سفارش تبلیغات و ارتباط با مدیریت</div><div style="display:flex;gap:8px;justify-content:center;margin-bottom:8px"><a href="https://t.me/Mohamadseccret" target="_blank" style="background:#0088cc;color:#fff;padding:7px 12px;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:700;display:inline-flex;align-items:center;gap:5px">${TG_S} تلگرام</a><a href="https://rubika.ir/mmmdrz_f" target="_blank" style="background:#1e293b;color:#fff;padding:7px 12px;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:700;display:inline-flex;align-items:center;gap:5px">${RB_S} روبیکا</a></div><div style="font-size:.78rem;display:flex;align-items:center;justify-content:center;gap:5px">${EM_S} <a href="mailto:fmohammadf1881@gmail.com" style="color:#2563eb;text-decoration:none;font-weight:700">fmohammadf1881@gmail.com</a></div>`;
    mn.appendChild(b);
  }
  run();setTimeout(run,120);
  new MutationObserver(m=>m.forEach(x=>{if(x.type==="characterData")faAll(x.target);else x.addedNodes.forEach(faAll);})).observe(document.body,{childList:true,subtree:true,characterData:true});
});
window.addEventListener("load",run);
// پایان کد
