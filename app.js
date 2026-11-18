const SITE_NAME = "چرتکه";

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("ch_dark") === "1") document.body.classList.add("dark");

  document.body.insertAdjacentHTML("afterbegin", `
    <header><div class="nav-c">
      <a href="index.html" class="logo">🧮 ${SITE_NAME}</a>
      <div class="h-btns">
        <button class="hm-btn" id="dm-btn" onclick="tgDark()">🌙 حالت شب</button>
        <a href="index.html" class="hm-btn">🏠 همه ابزارها</a>
      </div>
    </div></header>
  `);
  upDarkBtn();

  document.body.insertAdjacentHTML("beforeend", `
    <footer>تمامی حقوق برای <b>${SITE_NAME}</b> محفوظ است © ۱۴۰۴ | دقیق‌ترین مرجع محاسبات آنلاین ایران</footer>
  `);

  document.querySelectorAll(".money").forEach(el => {
    const fn = () => {
      let raw = el.value.replace(/\D/g, "");
      el.value = raw ? Number(raw).toLocaleString("en-US") : "";
      let h = el.nextElementSibling;
      if (h && h.classList.contains("w-out")) h.innerText = raw ? numToFa(Number(raw)) + " تومان" : "";
    };
    el.addEventListener("input", fn);
    if (el.value) fn();
  });

  document.querySelectorAll(".res").forEach(box => {
    let b = document.createElement("button");
    b.className = "cp-btn";
    b.innerText = "📋 کپی نتیجه محاسبه (برای ارسال)";
    b.onclick = () => copyRes(box, b);
    box.appendChild(b);
  });
});

function tgDark() {
  let d = document.body.classList.toggle("dark");
  localStorage.setItem("ch_dark", d ? "1" : "0");
  upDarkBtn();
}
function upDarkBtn() {
  let b = document.getElementById("dm-btn");
  if (b) b.innerText = document.body.classList.contains("dark") ? "☀️ حالت روز" : "🌙 حالت شب";
}

function copyRes(box, btn) {
  let title = document.querySelector("h1") ? document.querySelector("h1").innerText : SITE_NAME;
  let txt = `📊 ${title}\n━━━━━━━━━━━━\n`;
  box.querySelectorAll(".r-row").forEach(r => {
    txt += `🔹 ${r.children[0].innerText} ${r.children[1].innerText}\n`;
  });
  txt += `━━━━━━━━━━━━\n🧮 محاسبه شده در سامانه «${SITE_NAME}»`;
  navigator.clipboard.writeText(txt);
  btn.innerText = "✅ نتیجه با موفقیت کپی شد!";
  setTimeout(() => btn.innerText = "📋 کپی نتیجه محاسبه (برای ارسال)", 2000);
}

function val(id) {
  let v = document.getElementById(id).value.replace(/\D/g, "");
  return Number(v) || 0;
}
function fmt(n) { return Math.round(n).toLocaleString("fa-IR"); }
function numToFa(n) {
  if (!n) return "";
  let out = [];
  let b = Math.floor(n / 1e9), m = Math.floor((n % 1e9) / 1e6), k = Math.floor((n % 1e6) / 1e3), r = n % 1e3;
  if (b) out.push(b + " میلیارد");
  if (m) out.push(m + " میلیون");
  if (k) out.push(k + " هزار");
  if (r) out.push(r);
  return out.join(" و ");
}