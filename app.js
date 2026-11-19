const SITE_NAME="چرتکه",PD="۰۱۲۳۴۵۶۷۸۹",AD="٠١٢٣٤٥٦٧٨٩";
const toEn=s=>String(s??"").replace(/[۰-۹]/g,d=>PD.indexOf(d)).replace(/[٠-٩]/g,d=>AD.indexOf(d)).replace(/[٫/]/g,".");
const toFa=s=>String(s??"").replace(/[0-9]/g,d=>PD[d]).replace(/[٠-٩]/g,d=>PD[AD.indexOf(d)]);
const vD=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");
Object.defineProperty(HTMLInputElement.prototype,"value",{
  get(){let v=vD.get.call(this);return this.id==="srch"?v:toEn(v);},
  set(v){if(this.type==="number"){this.type="text";this.setAttribute("inputmode","decimal");}vD.set.call(this,this.id==="srch"?v:toFa(v));}
});
let dP;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();dP=e;});
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("ch_dark")==="1")document.body.classList.add("dark");
  const isH=location.pathname.endsWith("index.html")||location.pathname.endsWith("/")||location.pathname.endsWith("/chortkeh");
  const isD=document.body.classList.contains("dark");
  let d=new Date(),faD=new Intl.DateTimeFormat("fa-IR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(d);
  let enD=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"short",year:"numeric"}).format(d);
  document.body.insertAdjacentHTML("afterbegin",`<header><div class="nav-c"><a href="index.html" class="logo">🧮 ${SITE_NAME}</a><div class="h-btns"><button onclick="instApp()" class="hm-btn" style="background:#10b981;font-weight:700">📲 نصب اپ</button><button id="dm-btn" onclick="tgDark()" class="hm-btn">${isD?"☀️":"🌙"}</button>${!isH?'<a href="index.html" class="hm-btn">🏠 خانه</a>':""}</div></div></header><div style="background:#1e293b;color:#fff;font-size:11px;padding:6px;text-align:center">📅 امروز: <b style="color:#38bdf8">${faD}</b> | میلادی: <span dir="ltr">${enD}</span></div>`);
  document.body.insertAdjacentHTML("beforeend",`<footer>تمامی حقوق برای سایت <b>${SITE_NAME}</b> محفوظ است © ۱۴۰۴</footer>`);
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
function instApp(){
  if(dP)dP.prompt();
  else alert("📲 برای نصب اپلیکیشن چرتکه روی صفحه گوشی:\n۱. بالای مرورگر کروم روی سه نقطه (⋮) بزنید.\n۲. گزینه Add to Home screen (افزودن به صفحه اصلی) را بزنید.");
}
function tgDark(){
  let d=document.body.classList.toggle("dark");
  localStorage.setItem("ch_dark",d?"1":"0");
  document.getElementById("dm-btn").innerText=d?"☀️":"🌙";
}
function copyRes(box,btn){
  let t=`📊 نتیجه در ${SITE_NAME}:\n`;
  box.querySelectorAll(".r-row").forEach(r=>{
    let s=r.querySelector("span"),b=r.querySelector("b");
    if(s&&b)t+=`▪️ ${s.innerText} ${b.innerText}\n`;
  });
  t+=`🔗 ${location.href}`;navigator.clipboard.writeText(t);
  btn.innerText="✅ کپی شد!";
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
