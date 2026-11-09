(() => {
  const config = window.SITE_CONFIG || {};
  const bot = config.bot || {};
  const dictionaries = {
    ja: {
      navAbout:"Botについて",navFeatures:"機能",navCommands:"使い方",navFaq:"よくある質問",navSupport:"サポート",language:"言語",settings:"設定",heroKicker:"Discordで使えるBot",paperLabel:"Botの紹介",paperStatus:"ご案内",paperCaptionKicker:"いつものサーバーに",artSticker:"Discord向け",heroBottomline:"機能や使い方を、順番にご紹介します。",stripKicker:"コミュニティのために",stripSide:"使いやすさを大切に",aboutKicker:"まずは、このBotについて",featuresKicker:"主な機能",commandsKicker:"使い方のご案内",faqKicker:"よくある質問",supportKicker:"サポート窓口",botKicker:"紹介しているBot",backTop:"ページ上部へ",disclaimer:"このサイトはDiscord Inc.とは関係ありません。",settingsKicker:"サイトの表示設定",
      heroTitle:"あなたのサーバーに、<br><em>新しい便利さ</em>を。",heroLead:"Botの特徴や機能を紹介するページです。ここに、このBotならではの魅力を掲載できます。",seeFeatures:"機能を見る",contact:"お問い合わせ",heroNote:"導入方法や利用条件も、このページで確認できます。",artCaption:"毎日に、<br>ちょうどいい相棒。",stripText:"サーバーでの時間を、もっと快適に。",aboutTitle:"このBotについて",aboutLead:"Botの概要や制作の目的を紹介します。設定ファイルに入力した内容がここに表示されます。",botDescriptionPlaceholder:"Botの説明を設定ファイルに入力してください。",featuresTitle:"できることを、<br><em>シンプルに。</em>",featuresLead:"主な機能や特徴を紹介するセクションです。Botの実際の機能に合わせて内容を設定してください。",featurePlaceholder:"機能を設定してください",featurePlaceholderText:"assets/config.js から機能を追加できます。",commandsTitle:"使い方",commandsLead:"コマンドや操作方法を、初めて使う方にもわかりやすく紹介します。",commandPlaceholder:"使い方は設定ファイルから追加できます。",faqTitle:"よくある質問",faqLead:"利用前に気になることをまとめています。",faqPlaceholder:"質問と回答を設定してください。",faqPlaceholderText:"assets/config.js からFAQを追加できます。",supportTitle:"わからないことは、<br>気軽にご相談ください。",supportLead:"導入方法や使い方についての質問はこちらから。",supportButton:"サポートDiscordへ",footerLine:"あなたのDiscordに、ちょうどいい便利さを。",backToSite:"サイトに戻る",settingsTitle:"設定",settingsIntro:"サイトの表示に関する設定を変更できます。",languageSetting:"表示言語",languageDescription:"サイト全体で使用する言語を選択します。",settingsNote:"選択した言語はこのブラウザに保存され、次回アクセス時にも適用されます。",invite:"Botを導入する",guide:"ガイドを見る",supportLink:"サポートへ",featuresEmpty:"機能情報はまだ登録されていません。",commandsEmpty:"使い方はまだ登録されていません。",faqsEmpty:"FAQはまだ登録されていません。"
    },
    en: {
      navAbout:"About",navFeatures:"Features",navCommands:"How to use",navFaq:"FAQ",navSupport:"Support",language:"Language",settings:"Settings",heroKicker:"A Discord bot for your server",paperLabel:"About this bot",paperStatus:"Introduction",paperCaptionKicker:"A little something for",artSticker:"For Discord",heroBottomline:"Take a look at its features and how to use it.",stripKicker:"Made for communities",stripSide:"Easy to use, by design",aboutKicker:"Get to know the bot",featuresKicker:"What it can do",commandsKicker:"Getting started",faqKicker:"Common questions",supportKicker:"Get help",botKicker:"The bot featured here",backTop:"Back to top",disclaimer:"This site is not affiliated with Discord Inc.",settingsKicker:"Display preferences",
      heroTitle:"A little more <br><em>possibility</em> for your server.",heroLead:"Meet the Discord bot built to make your community experience a little smoother. Add your bot's own introduction here.",seeFeatures:"Explore features",contact:"Contact",heroNote:"Find the setup guide and usage information right here.",artCaption:"A helpful companion<br>for your everyday server.",stripText:"Make your time on Discord a little better.",aboutTitle:"About this bot",aboutLead:"A short overview and the purpose of this bot. The content you enter in the configuration file will appear here.",botDescriptionPlaceholder:"Add your bot description in assets/config.js.",featuresTitle:"What it does,<br><em>made clear.</em>",featuresLead:"Introduce the main features of your bot. Keep the descriptions accurate to its actual functionality.",featurePlaceholder:"Add a feature",featurePlaceholderText:"You can add features in assets/config.js.",commandsTitle:"How to use",commandsLead:"A straightforward guide to commands and basic usage.",commandPlaceholder:"Add usage instructions in assets/config.js.",faqTitle:"Frequently asked questions",faqLead:"A few things you may want to know before getting started.",faqPlaceholder:"Add a question and answer.",faqPlaceholderText:"You can add FAQs in assets/config.js.",supportTitle:"Need a hand?<br>We're happy to help.",supportLead:"Questions about setup or usage? Get in touch here.",supportButton:"Visit support Discord",footerLine:"A little more convenience for your Discord.",backToSite:"Back to site",settingsTitle:"Settings",settingsIntro:"Adjust how this website is displayed.",languageSetting:"Display language",languageDescription:"Choose the language used throughout the website.",settingsNote:"Your language choice is saved in this browser and will be used on your next visit.",invite:"Add to Discord",guide:"View guide",supportLink:"Get support",featuresEmpty:"No features have been added yet.",commandsEmpty:"No usage instructions have been added yet.",faqsEmpty:"No FAQs have been added yet."
    }
  };
  const getText = value => typeof value === "string" ? value : (value?.[currentLang] || value?.ja || "");
  let currentLang = localStorage.getItem("botSiteLanguage") || "ja";
  if (!dictionaries[currentLang]) currentLang = "ja";
  const $ = (selector, parent=document) => parent.querySelector(selector);
  const $$ = (selector, parent=document) => [...parent.querySelectorAll(selector)];

  function applyLanguage(lang) {
    currentLang = dictionaries[lang] ? lang : "ja";
    localStorage.setItem("botSiteLanguage", currentLang);
    document.documentElement.lang = currentLang;
    document.title = document.querySelector(".settings-page") ? `${dictionaries[currentLang].settingsTitle} — ${getText(bot.name) || "Bot"}` : `${getText(bot.name) || "Bot"} — ${currentLang === "ja" ? "紹介サイト" : "Discord Bot"}`;
    $$('[data-i18n]').forEach(el => { const value = dictionaries[currentLang][el.dataset.i18n]; if (value !== undefined) el.textContent = value; });
    $$('[data-i18n-html]').forEach(el => { const value = dictionaries[currentLang][el.dataset.i18nHtml]; if (value !== undefined) el.innerHTML = value; });
    $$('#language-select, #settings-language').forEach(select => { select.value = currentLang; });
    renderBot();
  }

  function renderBot() {
    const name = getText(bot.name) || (currentLang === "ja" ? "Bot名" : "Bot Name");
    $$('[data-bot-name]').forEach(el => el.textContent = name);
    const icon = $("#bot-icon");
    if (icon) {
      icon.innerHTML = bot.iconUrl
        ? `<img src="${escapeHtml(bot.iconUrl)}" alt="${escapeHtml(name)}">`
        : '<svg class="bot-fallback-icon" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 5 38 25 58 32 38 39 32 59 26 39 6 32 26 25Z"/></svg>';
    }
    const botName = $("#bot-name"); if (botName) botName.textContent = name;
    const description = $("#bot-description"); if (description) description.textContent = getText(bot.description) || dictionaries[currentLang].botDescriptionPlaceholder;
    const tags = $("#bot-tags"); if (tags) tags.innerHTML = (bot.tags?.[currentLang] || bot.tags?.ja || []).map(tag => `<span>${escapeHtml(tag)}</span>`).join("");
    const links = $("#bot-links");
    if (links) links.innerHTML = `${makeLink(bot.inviteUrl, dictionaries[currentLang].invite)}${makeLink(bot.guideUrl, dictionaries[currentLang].guide, true)}${makeLink(bot.supportUrl, dictionaries[currentLang].supportLink, true)}`;
    const features = $("#feature-list");
    if (features) features.innerHTML = (bot.features || []).length ? bot.features.map(item => `<article class="principle"><div><h3>${escapeHtml(getText(item.title))}</h3><p>${escapeHtml(getText(item.description))}</p></div><svg class="principle-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8 14.2 9.8 21.2 12 14.2 14.2 12 21.2 9.8 14.2 2.8 12 9.8 9.8Z"/></svg></article>`).join("") : `<p class="empty-state">${dictionaries[currentLang].featuresEmpty}</p>`;
    const commands = $("#command-list");
    if (commands) commands.innerHTML = (bot.commands || []).length ? bot.commands.map(item => `<article class="command-item"><code>${escapeHtml(item.name || "")}</code><p>${escapeHtml(getText(item.description))}</p></article>`).join("") : `<p class="empty-state">${dictionaries[currentLang].commandsEmpty}</p>`;
    const faqs = $("#faq-list");
    if (faqs) faqs.innerHTML = (bot.faqs || []).length ? bot.faqs.map(item => `<details><summary>${escapeHtml(getText(item.question))}<svg class="faq-toggle-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></summary><p>${escapeHtml(getText(item.answer))}</p></details>`).join("") : `<p class="empty-state">${dictionaries[currentLang].faqsEmpty}</p>`;
    $$('[data-support-link]').forEach(link => {
      const url = bot.supportUrl || "";
      if (url) { link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer"; }
      else { link.href = "#support"; link.onclick = event => event.preventDefault(); }
    });
  }
  function makeLink(url, label, secondary=false) { return url ? `<a ${secondary ? 'class="secondary"' : ""} href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)} <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></a>` : ""; }
  function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }

  document.addEventListener("DOMContentLoaded", () => {
    const year = $("#year"); if (year) year.textContent = new Date().getFullYear();
    [$("#language-select"), $("#settings-language")].filter(Boolean).forEach(select => select.addEventListener("change", () => applyLanguage(select.value)));
    const menuButton = $(".menu-toggle"); const nav = $(".main-nav");
    if (menuButton && nav) {
      menuButton.addEventListener("click", () => { const open = nav.classList.toggle("open"); menuButton.setAttribute("aria-expanded", String(open)); });
      $$('a', nav).forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));
    }
    applyLanguage(currentLang);
  });
})();