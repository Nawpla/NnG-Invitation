(function() {
  "use strict";
  var CONFIG = {
    "meta": {
        "version": "1.1",
        "private": false,
        "simpleMode": false,
        "showSimpleModeToggle": true,
        "countdown": true
    },
    "sections": {
        "hero": true,
        "eventDetails": true,
        "schedule-section": true,
        "quotes-section": true,
        "location-section": true,
        "design-section": true,
        "music-section": true,
        "rsvp": true,
        "footer": false
    },
    "quoteTitle": "Kalo kalian sedih,tenang ada kami yang bisa menghibur kalian",
    "quotes": [
        {
            "text": "Waktu is time",
            "author": "nawfal"
        },
        {
            "text": "percaya proses jangan protes",
            "author": "ghian"
        }
    ],
    "social": {
        "instagram": ""
    },
    "event": {
        "title": "Nawfal and Ghian Sweet Eighteen",
        "subtitle": "Ayo rayakan ultah kami",
        "description": "Dresscode basing kamu orang"
    },
    "datetime": {
        "date": "2026-11-28",
        "startTime": "18.00",
        "endTime": "sampai dengan selesai",
        "timezone": "local",
        "allDay": false
    },
    "location": {
        "name": "Rumah Nopal",
        "address": "Sinarharapan,RT 10",
        "mapsLink": "https://maps.app.goo.gl/TFni2UsbfratcFoUA"
    },
    "schedule": [
        {
            "time": "06:00 malam",
            "label": "bakar bakar"
        },
        {
            "time": "08:00 malam",
            "label": "makan makan"
        },
        {
            "time": "09:00 malam",
            "label": "board game"
        }
    ],
    "rsvp": {
        "enabled": true,
        "url": "https://wa.me/6285257263820"
    },
    "calendar": {
        "enabled": true,
        "providers": {
            "google": true
        }
    },
    "design": {
        "theme": "dark",
        "accentColor": "#13c1ec",
        "heroImages": [],
        "sectionBackgrounds": []
    },
    "music": {
        "enabled": true,
        "loop": true,
        "volume": 0.3,
        "audioUrl": ""
    },
    "footer": {
        "text": "",
        "branding": {
            "link": "#",
            "logoUrl": "https://raw.githubusercontent.com/Rainier-PS/rainier-ps.github.io/main/images/site/Rainier%20Logo-Primary.svg",
            "logoAlt": "Logo"
        },
        "credits": {
            "designByLabel": "Created & Designed by",
            "copyrightYear": "2026",
            "authorName": "",
            "templateLabel": "Template by",
            "templateAuthor": "Rainier Pearson Saputra",
            "templateLink": "https://rainier-ps.github.io/",
            "repoLabel": "Open Repository",
            "repoLink": "https://github.com/Rainier-PS/Invitation-Template"
        }
    }
};
  var ev = CONFIG.event || {};
  var dt = CONFIG.datetime || {};
  var loc = CONFIG.location || {};
  var sched = CONFIG.schedule || [];
  var rsvp = CONFIG.rsvp || {};
  var design = CONFIG.design || {};
  var music = CONFIG.music || {};
  var footer = CONFIG.footer || {};
  var meta = CONFIG.meta || {};
  var sections = CONFIG.sections || {};
  var quotes = CONFIG.quotes || [];
  var social = CONFIG.social || {};
  var sectionList = Array.prototype.slice.call(document.querySelectorAll("section, footer"));
  function st(id, val) { var el = document.getElementById(id); if (el) el.textContent = val || ""; }
  function sh(id) { var el = document.getElementById(id); if (el) el.hidden = false; }
  function hi(id) { var el = document.getElementById(id); if (el) el.hidden = true; }
  function rm(id) { var el = document.getElementById(id); if (el) el.remove(); }
  function safeUrl(value) { var raw = String(value == null ? "" : value).trim(); if (!raw) return ""; return /^(https?:|mailto:|tel:|/|./|../|#)/i.test(raw) ? raw : ""; }
  function safeEmbed(value) { var raw = String(value == null ? "" : value).trim(); return /^https?:///i.test(raw) ? raw : ""; }
  function safeImage(value) { var raw = String(value == null ? "" : value).trim(); if (!raw) return ""; if (/^(https?://|data:image/|blob:)/i.test(raw)) return raw; return /^[w./-]+$/.test(raw) ? raw : ""; }
  function showSec(id, def) { if (sections[id] === false || (sections[id] === undefined && def === false)) rm(id); }
  st("event-title", ev.title);
  st("event-subtitle", ev.subtitle);
  st("event-description", ev.description);
  st("event-date", dt.date);
  st("event-time", [dt.startTime, dt.endTime].filter(Boolean).join(" - "));
  st("venue-name", loc.name);
  st("venue-address", loc.address);
  st("quote-title", CONFIG.quoteTitle || "Words of Inspiration");
  var mapsUrl = safeUrl(loc.mapsLink); if (mapsUrl) { var ml = document.getElementById("maps-link"); if (ml) ml.href = mapsUrl; }
  showSec("schedule-section", sched.length > 0);
  showSec("quotes-section", false);
  if (sections.eventDetails === false) { var ed = document.querySelector(".event-details"); if (ed) ed.remove(); }
  if (sections["location-section"] === false) { var la = document.querySelector(".location"); if (la) la.remove(); }
  if (sections["design-section"] === false) { var si = document.getElementById("simple-mode-toggle"); if (si) si.remove(); }
  if (sections["music-section"] === false) { var ac = document.getElementById("audio-control"); if (ac) ac.remove(); }
  if (sections.footer === false) { var ft = document.querySelector("footer"); if (ft) ft.remove(); }
  if (sections.rsvp === false) { rm("rsvp"); }
  if (sched.length) { sh("schedule-section"); var sl = document.getElementById("schedule-list"); if (sl) { sched.forEach(function(it) { var row = document.createElement("li"); var timeCell = document.createElement("span"); var labelCell = document.createElement("span"); timeCell.textContent = typeof it === "string" ? "" : (it.time || ""); labelCell.textContent = typeof it === "string" ? it : (it.label || ""); row.appendChild(timeCell); row.appendChild(labelCell); sl.appendChild(row); }); } }
  var qc = document.getElementById("quotes-container");
  if (quotes.length && qc) { sh("quotes-section"); quotes.forEach(function(q) { if (!q.text) return; var d = document.createElement("div"); d.className = "quote-item"; var pt = document.createElement("p"); pt.className = "quote-text"; pt.textContent = q.text; d.appendChild(pt); if (q.author) { var pa = document.createElement("p"); pa.className = "quote-author"; pa.textContent = q.author; d.appendChild(pa); } qc.appendChild(d); }); }
  var rsvpUrl = safeEmbed(rsvp.url);
  if (rsvp.enabled && rsvpUrl) { var emb = document.querySelector(".form-embed"); if (emb) { var ifr = document.createElement("iframe"); ifr.src = rsvpUrl; ifr.title = "RSVP form"; ifr.loading = "lazy"; ifr.referrerPolicy = "no-referrer"; ifr.style.width = "100%"; ifr.style.border = "none"; ifr.style.minHeight = "400px"; emb.appendChild(ifr); } } else { if (sections.rsvp !== false) rm("rsvp"); }
  if (meta.countdown && dt.date) { sh("countdown"); var ed = new Date(dt.date + "T" + (dt.startTime || "00:00:00")); if (!isNaN(ed.getTime())) { setInterval(function() { var now = new Date(); var diff = ed - now; if (diff <= 0) { hi("countdown"); return; } st("cd-days", Math.floor(diff / 86400000)); st("cd-hours", String(Math.floor((diff % 86400000) / 3600000)).padStart(2, "0")); st("cd-minutes", String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0")); st("cd-seconds", String(Math.floor((diff % 60000) / 1000)).padStart(2, "0")); }, 1000); } }
  if (dt.date) { sh("calendar-actions"); var cl = document.getElementById("google-calendar-link"); if (cl) { var sd = dt.date.replace(/-/g, ""); var ed2 = sd; var stt = (dt.startTime || "00:00").replace(/ /g, "").replace(":", ""); var ett = (dt.endTime || dt.startTime || "00:00").replace(/ /g, "").replace(":", ""); cl.href = "https://www.google.com/calendar/render?action=TEMPLATE&text=" + encodeURIComponent(ev.title || "") + "&dates=" + sd + "T" + stt + "00/" + ed2 + "T" + ett + "00&details=" + encodeURIComponent(ev.description || "") + "&location=" + encodeURIComponent((loc.name || "") + ", " + (loc.address || "")); } }
  var audioUrl = safeImage(music.audioUrl);
  if (music.enabled && audioUrl) { sh("audio-control"); var ae = new Audio(audioUrl); ae.loop = music.loop !== false; ae.volume = music.volume || 0.3; var playing = false; document.getElementById("audio-control").addEventListener("click", function() { if (playing) { ae.pause(); } else { ae.play(); } playing = !playing; }); }
  var instagramUrl = safeUrl(social.instagram);
  if (instagramUrl) { sh("social-links"); var ig = document.getElementById("instagram-link"); if (ig) { ig.href = instagramUrl; var lbl = document.getElementById("instagram-label"); if (lbl) { lbl.textContent = instagramUrl.replace(/https?:\/\/(www\.)?instagram\.com\//, "").replace(/\/$/, "") || "Follow on Instagram"; } } }
  st("footer-text", footer.text);
  if (footer.branding) { var logo = document.getElementById("footer-logo"); var logoUrl = safeImage(footer.branding.logoUrl); if (logo && logoUrl) { logo.src = logoUrl; logo.alt = footer.branding.logoAlt || "Logo"; } var bl = document.getElementById("footer-branding-link"); if (bl) { var brandingUrl = safeUrl(footer.branding.link); if (brandingUrl) bl.href = brandingUrl; else bl.removeAttribute("href"); } }
  if (footer.credits) { st("footer-credits-label", footer.credits.designByLabel ? footer.credits.designByLabel + " " + footer.credits.authorName : ""); st("footer-copyright", "© " + (footer.credits.copyrightYear || new Date().getFullYear())); st("footer-template-label", footer.credits.templateLabel); var tl = document.getElementById("footer-template-link"); if (tl) { tl.textContent = footer.credits.templateAuthor || ""; tl.href = safeUrl(footer.credits.templateLink) || "#"; } var rl = document.getElementById("footer-repo-link"); if (rl) { rl.textContent = footer.credits.repoLabel || ""; rl.href = safeUrl(footer.credits.repoLink) || "#"; } if (footer.credits.repoLink) sh("footer-repo-container"); }
  var simpleToggle = document.getElementById("simple-mode-toggle");
  if (simpleToggle && meta.showSimpleModeToggle !== false) { simpleToggle.hidden = false; simpleToggle.addEventListener("click", function() { document.body.classList.toggle("simple"); }); }
  var images = Array.isArray(design.heroImages) ? design.heroImages.filter(Boolean) : [];
  var sectionBackgrounds = Array.isArray(design.sectionBackgrounds) ? design.sectionBackgrounds.filter(Boolean) : [];
  var quoteChar = String.fromCharCode(34);
  var slashChar = String.fromCharCode(92);
  function cssUrl(value) {
    var text = String(value == null ? "" : value).split(String.fromCharCode(13)).join("").split(String.fromCharCode(10)).join("");
    text = text.split(slashChar).join(slashChar + slashChar).split(quoteChar).join(slashChar + quoteChar);
    return "url(" + quoteChar + text + quoteChar + ")";
  }
  if (images.length) {
    var hero = document.querySelector(".hero");
    if (hero) {
      var slideshow = document.createElement("div");
      slideshow.className = "hero-slideshow";
      images.forEach(function(url, i) {
        var slide = document.createElement("div");
        slide.className = "hero-slide" + (i === 0 ? " active" : "");
        slide.setAttribute("aria-hidden", "true");
        slide.style.backgroundImage = cssUrl(url);
        slideshow.appendChild(slide);
      });
      hero.insertBefore(slideshow, hero.firstChild);
      var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (images.length > 1) {
        if (reduceMotion) slideshow.classList.add("reduce-motion");
        var activeSlide = 0;
        setInterval(function() {
          var slides = slideshow.querySelectorAll(".hero-slide");
          slides[activeSlide].classList.remove("active");
          activeSlide = (activeSlide + 1) % slides.length;
          slides[activeSlide].classList.add("active");
        }, 5000);
      }
    }
  }
  sectionBackgrounds.forEach(function(url, i) {
    var target = sectionList[i + 1];
    if (url && target) target.style.backgroundImage = cssUrl(url);
  });
})();
