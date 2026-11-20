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

const FAQS=[
  ["فرمول محاسبه قیمت طلای نو و دست دوم در چرتکه چگونه است؟","در ماشین حساب طلای چرتکه، طبق قانون جدید اتحادیه طلا و جواهر، مالیات بر ارزش افزوده (۱۰ درصد) فقط بر روی جمعِ اجرت ساخت و سود طلافروش محاسبه می‌شود و اصل طلا معاف از مالیات است."],
  ["نحوه محاسبه قسط وام بانکی و سود تسهیلات چگونه است؟","با وارد کردن مبلغ وام، درصد سود سالانه و تعداد اقساط ماهانه در ابزار محاسبه وام چرتکه، مبلغ دقیق هر قسط و کل سود بانکی طبق فرمول رسمی بانک مرکزی محاسبه می‌شود."],
  ["چطور شماره شبا را به شماره حساب تبدیل کنیم؟","در ابزار تبدیل شبا و حساب چرتکه، کافیست ۲۴ رقم شماره شبا (بدون IR) یا شماره حساب خود را وارد کنید تا به صورت آنی نام بانک و شماره معادل آن به صورت دقیق استخراج شود."],
  ["نحوه نوشتن مبلغ چک صیادی به حروف (تومان و ریال) چگونه است؟","در ابزار چک صیادی چرتکه، مبلغ عددی را وارد کنید تا معادل دقیق حروفی آن به ریال (برای درج در چک و سامانه صیاد) و به تومان نمایش داده شود."],
  ["محاسبه مهریه به نرخ روز و سن دقیق شمسی چطور انجام می‌شود؟","ابزار مهریه چرتکه بر اساس آخرین شاخص تورم بانک مرکزی مبلغ مهریه را به نرخ روز محاسبه می‌کند و ابزار محاسبه سن، اختلاف دقیق تاریخ تولد تا امروز را به سال، ماه و روز نشان می‌دهد."]
];

document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll('input[type="number"],input:not([type])').forEach(el=>{
    if(el.id==="srch")return;
    el.type="text";el.setAttribute("inputmode","decimal");
    if(el.value)el.value=toFa(el.value);
    el.addEventListener("input",function(){
      let p=this.selectionStart,v=toFa(this.value);
      if(this.value!==v){this.value=v;try{this.setSelectionRange(p,p);}catch(e){}}
    });
  });

  const st=document.createElement("style");
  st.textContent=`#ld-bar{position:fixed;top:0;right:0;height:3px;width:0;background:#10b981;z-index:9999;transition:width .3s}#net-b{display:none;position:fixed;bottom:14px;left:14px;right:14px;background:#ef4444;color:#fff;padding:10px 14px;border-radius:10px;font-size:.82rem;font-weight:700;text-align:center;z-index:9998;box-shadow:0 4px 15px rgba(239,68,68,.4);animation:pl 1.5s infinite}@keyframes pl{0%,100%{transform:scale(1)}50%{transform:scale(1.02)}}.faq-b{background:#fff;border-radius:14px;padding:14px;margin-top:16px;border:1px solid #e2e8f0;box-shadow:0 2px 8px rgba(0,0,0,.03)}.faq-b details{border-bottom:1px solid #f1f5f9;padding:9px 0}.faq-b details:last-child{border:none}.faq-b summary{font-weight:700;font-size:.84rem;color:#1e293b;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}.faq-b summary::after{content:"➕";font-size:.75rem;color:#2563eb}.faq-b details[open] summary::after{content:"➖"}.faq-b p{font-size:.8rem;color:#475569;line-height:1.7;margin:7px 0 2px;background:#f8fafc;padding:8px 10px;border-radius:8px}`;
  document.head.appendChild(st);

  const sc=document.createElement("script");
  sc.type="application/ld+json";
  sc.text=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQS.map(x=>({"@type":"Question","name":x[0],"acceptedAnswer":{"@type":"Answer","text":x[1]}}))});
  document.head.appendChild(sc);

  const lb=document.createElement("div");lb.id="ld-bar";document.body.appendChild(lb);
  const nb=document.createElement("div");nb.id="net-b";document.body.appendChild(nb);
  function chkNet(){
    const c=navigator.connection||navigator.mozConnection||navigator.webkitConnection;
    if(!navigator.onLine){nb.style.display="block";nb.innerHTML="⚠️ اینترنت شما قطع است! برخی امکانات نیازمند اتصال هستند.";}
    else if(c&&(c.effectiveType==="slow-2g"||c.effectiveType==="2g"||c.rtt>1000)){nb.style.display="block";nb.innerHTML="🐢 سرعت اینترنت شما ضعیف است؛ شکیبا باشید...";}
    else{nb.style.display="none";}
  }
  window.addEventListener("online",chkNet);window.addEventListener("offline",chkNet);chkNet();
  document.addEventListener("click",e=>{
    const a=e.target.closest("a");
    if(a&&a.href&&a.href.startsWith(location.origin)&&!a.href.includes("#")){
      chkNet();lb.style.width="75%";setTimeout(()=>lb.style.width="100%",600);
    }
  });

  if(!document.getElementById("m-hdr")){
    const now=new Date(),sh=new Intl.DateTimeFormat("fa-IR",{dateStyle:"full"}).format(now);
    const hdr=document.createElement("header");
    hdr.innerHTML=`<div style="max-width:600px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 8px"><a href="index.html" style="color:#fff;text-decoration:none;font-weight:800;font-size:1.05rem">🧮 ${SITE_NAME}</a><span style="font-size:.75rem;opacity:.9">📅 ${sh}</span><a href="index.html" style="background:rgba(255,255,255,.2);color:#fff;padding:4px 10px;border-radius:8px;text-decoration:none;font-size:.78rem">🏠 صفحه اصلی</a></div>`;
    document.body.insertBefore(hdr,document.body.firstChild);
  }

  const mn=document.querySelector(".container")||document.querySelector("main")||document.body;
  if(!document.getElementById("faq-sec")){
    const fq=document.createElement("div");fq.id="faq-sec";fq.className="faq-b";
    fq.innerHTML=`<div style="font-weight:800;font-size:.92rem;color:#1e40af;margin-bottom:6px">❓ سوالات پرتکرار کاربران درباره محاسبات</div>`+FAQS.map(x=>`<details><summary>${x[0]}</summary><p>${x[1]}</p></details>`).join("");
    const ad=document.getElementById("ad-box");
    if(ad&&ad.parentNode===mn)mn.insertBefore(fq,ad);else mn.appendChild(fq);
  }

  if(!document.getElementById("ad-box")){
    const bx=document.createElement("div");
    bx.style.cssText="background:#fff;border-radius:14px;padding:14px;margin-top:14px;border:1px solid #e2e8f0;text-align:center";
    bx.innerHTML=`<div style="font-weight:800;font-size:.9rem;margin-bottom:8px;color:#1e293b">📢 سفارش تبلیغات و ارتباط با مدیریت</div><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:8px"><a href="https://t.me/Mohamadseccret" target="_blank" style="background:#0088cc;color:#fff;padding:7px 12px;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:700;display:inline-flex;align-items:center;gap:5px">${TG_S} تلگرام</a><a href="https://rubika.ir/mmmdrz_f" target="_blank" style="background:#1e293b;color:#fff;padding:7px 12px;border-radius:8px;text-decoration:none;font-size:.8rem;font-weight:700;display:inline-flex;align-items:center;gap:5px">${RB_S} روبیکا</a></div><div style="font-size:.78rem;color:#475569;display:flex;align-items:center;justify-content:center;gap:5px">${EM_S} ایمیل: <a href="mailto:fmohammadf1881@gmail.com" style="color:#2563eb;text-decoration:none;font-weight:700">fmohammadf1881@gmail.com</a></div>`;
    mn.appendChild(bx);
  }
});
// END CHORTKEH
