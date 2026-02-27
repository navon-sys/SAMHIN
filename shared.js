/*
 * Project: SAMHIN First Draft
 * Author: Vishavdeep Sharma
 * Company: Navonsys Inc
 * Date: 2026-02-26
// shared.js — injects nav and footer into every page

const LOGO_SVG = `
<svg width="130" height="52" viewBox="0 0 130 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SAMHIN Logo">
  <circle cx="26" cy="26" r="26" fill="#1A6B6E"/>
  <text x="26" y="34" text-anchor="middle" font-family="Georgia,serif" font-size="28" font-weight="700" fill="white">S</text>
  <text x="60" y="22" font-family="'DM Sans',Arial,sans-serif" font-size="15" font-weight="700" fill="#2C2C2C">SAMHIN</text>
  <text x="60" y="36" font-family="'DM Sans',Arial,sans-serif" font-size="7.5" fill="#6B7280">South Asian Mental Health</text>
  <text x="60" y="46" font-family="'DM Sans',Arial,sans-serif" font-size="7.5" fill="#6B7280">Initiative &amp; Network</text>
</svg>`;

const LOGO_SVG_FOOTER = `
<svg width="110" height="44" viewBox="0 0 110 44" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="22" cy="22" r="22" fill="#1A6B6E"/>
  <text x="22" y="29" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="white">S</text>
  <text x="50" y="18" font-family="'DM Sans',Arial,sans-serif" font-size="13" font-weight="700" fill="white">SAMHIN</text>
  <text x="50" y="30" font-family="'DM Sans',Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.6)">South Asian Mental Health</text>
  <text x="50" y="39" font-family="'DM Sans',Arial,sans-serif" font-size="6.5" fill="rgba(255,255,255,0.6)">Initiative &amp; Network</text>
</svg>`;

const NAV_ITEMS = [
  { label: 'Home', href: 'index.html' },
  { label: 'About Us', href: 'about.html' },
  { label: 'Get Help', href: 'get-help.html' },
  { label: 'Find a Provider', href: 'provider-directory.html' },
  { label: 'Events', href: 'events.html' },
  { label: 'Blogs', href: 'blogs.html' },
  { label: 'Get Involved', href: 'get-involved.html' },
];

function injectTopBar() {
  const el = document.getElementById('top-bar');
  if (!el) return;
  el.innerHTML = `
    <span>📞 <a href="tel:7329022561" style="color:#A8D8D9;text-decoration:none">732-902-2561</a> &nbsp;|&nbsp; 10AM–7PM EST &nbsp;|&nbsp; <a href="mailto:info@samhin.org" style="color:#A8D8D9;text-decoration:none">info@samhin.org</a></span>
    <span>
      <a href="get-help.html" class="crisis">🚨 Crisis: 988</a>
      <a href="https://facebook.com/SAMHINorg" target="_blank">f</a>
      <a href="https://twitter.com/SAMHINorg" target="_blank">𝕏</a>
      <a href="https://linkedin.com/company/south-asian-mental-health-initiative-and-network" target="_blank">in</a>
      <select class="lang-select" onchange="alert('Language switching coming soon!')">
        <option>🌐 English</option><option>हिन्दी Hindi</option><option>ਪੰਜਾਬੀ Punjabi</option>
        <option>বাংলা Bengali</option><option>اردو Urdu</option><option>தமிழ் Tamil</option>
      </select>
    </span>`;
}

function injectNav(activePage) {
  const el = document.getElementById('main-nav');
  if (!el) return;
  const links = NAV_ITEMS.map(item => `
    <li><a href="${item.href}" ${item.href === activePage ? 'class="active"' : ''}>${item.label}</a></li>
  `).join('');
  el.innerHTML = `
    <a href="index.html" class="logo-wrap">${LOGO_SVG}</a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-ctas">
      <a href="donate.html" class="btn-donate">❤ Donate</a>
    </div>`;
}

function injectCrisisBanner() {
  const el = document.getElementById('crisis-banner');
  if (!el) return;
  el.innerHTML = `If you or someone you know is in crisis — call or text <strong><a href="tel:988">988</a></strong> (Suicide & Crisis Lifeline) or SAMHIN Helpline: <a href="tel:7329022561">732-902-2561</a>`;
}

function injectFooter() {
  const el = document.getElementById('main-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        ${LOGO_SVG_FOOTER}
        <p style="margin-top:12px">South Asian Mental Health Initiative & Network. Providing culturally sensitive mental health resources and community for South Asians since 2013.</p>
        <div class="social-links">
          <a href="https://facebook.com/SAMHINorg" target="_blank">f</a>
          <a href="https://twitter.com/SAMHINorg" target="_blank">𝕏</a>
          <a href="https://linkedin.com/company/south-asian-mental-health-initiative-and-network" target="_blank">in</a>
          <a href="https://youtube.com/channel/UCJhWCc_txVgQxXwfXseZGZw" target="_blank">▶</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Get Help</h4>
        <ul>
          <li><a href="provider-directory.html">Find a Provider</a></li>
          <li><a href="get-help.html">Free Support Groups</a></li>
          <li><a href="get-help.html#aa">South Asian AA</a></li>
          <li><a href="get-help.html#crisis">Crisis: Call 988</a></li>
          <li><a href="get-help.html#helpline">SAMHIN Helpline</a></li>
          <li><a href="resources.html">Resources & FAQs</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>About SAMHIN</h4>
        <ul>
          <li><a href="about.html">Mission & History</a></li>
          <li><a href="about.html#team">Our Team & Board</a></li>
          <li><a href="about.html#impact">Impact Data</a></li>
          <li><a href="about.html#sponsors">Sponsors & Donors</a></li>
          <li><a href="about.html#contact">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Community</h4>
        <ul>
          <li><a href="events.html">Events & Workshops</a></li>
          <li><a href="blogs.html">Blogs & Stories</a></li>
          <li><a href="get-involved.html">Volunteer</a></li>
          <li><a href="donate.html">Donate</a></li>
          <li><a href="get-involved.html#newsletter">Newsletter</a></li>
          <li><a href="presentations.html">Presentations</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 SAMHIN – South Asian Mental Health Initiative & Network. All rights reserved.</span>
      <span>
        <a href="privacy.html" style="color:rgba(255,255,255,0.45);text-decoration:none">Privacy</a> · 
        <a href="#" style="color:rgba(255,255,255,0.45);text-decoration:none">Terms</a> · 
        <a href="#" style="color:rgba(255,255,255,0.45);text-decoration:none">Accessibility</a>
      </span>
    </div>`;
}

function injectDonateBanner() {
  const el = document.getElementById('donate-banner');
  if (!el) return;
  el.innerHTML = `
    <div>
      <h2>Together We Can Make a Difference</h2>
      <p>Your gift helps SAMHIN provide free mental health resources, support groups, and provider listings to South Asians across the country.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;align-items:flex-start">
      <a href="donate.html" class="btn-white">Donate Now</a>
      <span style="color:rgba(255,255,255,0.75);font-size:0.78rem">Also accepted: Zelle · Venmo · Employer Match</span>
    </div>`;
}

// Phone number auto-format
function formatPhone(input) {
  let v = input.value.replace(/\D/g,'');
  if (v.length >= 10) v = v.slice(0,10);
  if (v.length > 6) v = '(' + v.slice(0,3) + ') ' + v.slice(3,6) + '-' + v.slice(6);
  else if (v.length > 3) v = '(' + v.slice(0,3) + ') ' + v.slice(3);
  input.value = v;
}

// ZIP validation
function validateZip(input) {
  return /^\d{5}(-\d{4})?$/.test(input.value.trim());
}

// Email validation
function validateEmail(input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
}

// Generic form validation
function validateField(input, errorId, message) {
  const errEl = document.getElementById(errorId);
  if (!input.value.trim()) {
    input.classList.add('error');
    if (errEl) { errEl.textContent = message || 'This field is required.'; errEl.style.display = 'block'; }
    return false;
  }
  input.classList.remove('error');
  if (errEl) errEl.style.display = 'none';
  return true;
}
