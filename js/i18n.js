/* Republic of Gerald Wu — English / 简体中文 UI switch */
(() => {
  const STORAGE_KEY = 'gw-lang';

  // Chinese strings only. English is captured from the markup on first run.
  const ZH = {
    /* Shared chrome ------------------------------------------------ */
    'nav.back': '返回',
    'nav.contact': '联系',
    'footer.republic': 'Gerald Wu 的共和国 — 中国北京',
    'footer.artifacts': '作品 →',
    'footer.mapgallery': '地图画廊 →',
    'footer.backtomap': '回到地图 →',

    /* Document titles --------------------------------------------- */
    'doc.title.home': 'Gerald Wu 的共和国 — 探索他的世界',
    'doc.title.about': '关于我 — Gerald Wu 的共和国',
    'doc.title.artifacts': '作品 — 作品共和国',
    'doc.title.maps': '架空历史地图 — 地图画廊州',
    'doc.title.ask': '问我：我能做什么 — 问我共和国',

    /* Home -------------------------------------------------------- */
    'home.zone.about': '关于我',
    'home.zone.artifacts': '作品',
    'home.zone.maps': '地图画廊',
    'home.zone.contact': '联系',
    'home.zone.about.title': '关于我共和国',
    'home.zone.about.desc': '地图背后的人。一名 Moonshot Academy 的学生，兴趣广泛——历史、写作、戏剧，以及我接下来会发现的任何东西。',
    'home.zone.artifacts.title': '作品共和国',
    'home.zone.artifacts.desc': '一份不断生长的作品集——地图、舞台剧，以及来自从未存在过的世界的文件。',
    'home.zone.maps.title': '地图画廊州',
    'home.zone.maps.desc': '架空历史地图。跨越不同世界的想象边界、国家与时间线——自 2024 年起创作。',
    'home.zone.contact.title': '联系与提问',
    'home.zone.contact.desc': '有问题、地图构想，或者想让我推荐书？来告诉我，我会回答。',
    'home.tooltip.hint': '点击进入 →',
    'home.title': '用鼠标探索他的世界',
    'home.donate': '捐赠',
    'home.dialog.title': '无需捐赠。',
    'home.dialog.body': '这是一个学生档案库——它唯一接受的货币是你的好奇心。点击地图，四处漫游，然后告诉我，接下来我们该建造哪个世界。',
    'home.dialog.back': '回到地图',
    'home.dialog.qr.hint': '微信扫一扫，支持一下',

    /* About ------------------------------------------------------- */
    'about.stamp': '关于我',
    'about.brand': '关于我共和国',
    'about.eyebrow': '你好，很高兴认识你',
    'about.intro': '一个好奇的人，正在搭建一个小小的世界——由想法、项目、历史、音乐、戏剧，以及我接下来会发现的任何东西组成。',
    'about.bio': '我叫 Gerald Wu，住在北京。我目前在 Moonshot Academy 读十年级。我在这个校区待了十年，经历过好几所学校。我兴趣广泛。',
    'about.quote': '“我喜欢收集想法，把它们变成东西，然后看看它们会引向哪里。”',
    'about.works': '看看我的作品',
    'about.caption': '这就是地图背后的人。',
    'about.info.currently': '目前',
    'about.info.currently.value': 'Moonshot Academy 学生<br>十年级<br>INFP-T',
    'about.info.fold': '[已折叠]',
    'about.info.basedin': '所在地',
    'about.info.basedin.value': '中国北京',
    'about.info.interests': '兴趣',
    'about.info.interests.value': '历史<br>写作<br>戏剧<br>架空历史',

    /* Artifacts --------------------------------------------------- */
    'artifacts.stamp': '作品',
    'artifacts.brand': '作品共和国',
    'artifacts.title': '项目与收藏',
    'artifacts.sub': '一份不断生长的作品收藏。',
    'artifacts.card1.num': '01 / 制图',
    'artifacts.card1.title': '架空历史地图',
    'artifacts.card1.desc': '跨越不同世界的想象边界、国家与时间线。',
    'artifacts.card2.num': '02 / 戏剧',
    'artifacts.card2.title': '戏剧 —《梦工厂》',
    'artifacts.card2.desc': '一部舞台剧，以及一批戏剧写作。',
    'artifacts.card3.num': '03 / 文件',
    'artifacts.card3.title': '架空历史剧本与文件',
    'artifacts.card3.desc': '来自从未存在过的世界的条约、剧本与纸面痕迹。',

    /* Map gallery ------------------------------------------------ */
    'maps.brand': '作品共和国 · 地图画廊州',
    'maps.title': '架空历史地图',
    'maps.label': '项目详情',
    'maps.copy1': '这是我的主要爱好，也是最耗时的一项。我做过许多地图，涉及不同的视角、国家与架空历史故事线。我从 2024 年开始做地图，此后一直在创作。我常用的工具是 Adobe Photoshop，不过我也愿意在随身设备上手绘。',
    'maps.copy2': '架空历史地图的主题各不相同：不同的国家、不同的时代、不同的世界，最后还有不同的星球。',
    'maps.note': '点击不同的地图，即可查看原尺寸大图。',
    'maps.caption.levant': '黎凡特联盟内战地图<br>创作于 2026 年',
    'maps.caption.soviet': '苏联地图<br>创作于 2026 年',
    'maps.caption.usa': '美洲行政地图<br>创作于 2026 年',
    'maps.caption.canton': '广东租借地图<br>创作于 2025 年',
    'maps.caption.germany': '红德地图<br>创作于 2025 年',
    'maps.caption.ming': '大明和哈布斯堡世界地图<br>创作于 2025 年',
    'maps.caption.israel': '巴勒斯坦内战地图<br>创作于 2025 年',
    'maps.caption.puducherry': '本地治里共治市地图<br>创作于 2025 年',
    'maps.caption.ukraine': '乌克兰民族国地图<br>创作于 2025 年',
    'maps.lightbox.levant': '黎凡特联盟内战地图 — 创作于 2026 年',
    'maps.lightbox.soviet': '苏联地图 — 创作于 2026 年',
    'maps.lightbox.usa': '美洲行政地图 — 创作于 2026 年',
    'maps.lightbox.canton': '广东租借地图 — 创作于 2025 年',
    'maps.lightbox.germany': '红德地图 — 创作于 2025 年',
    'maps.lightbox.ming': '大明和哈布斯堡世界地图 — 创作于 2025 年',
    'maps.lightbox.israel': '巴勒斯坦内战地图 — 创作于 2025 年',
    'maps.lightbox.puducherry': '本地治里共治市地图 — 创作于 2025 年',
    'maps.lightbox.ukraine': '乌克兰民族国地图 — 创作于 2025 年',
    'maps.cta.title': '也想为自己的世界画一张地图？',
    'maps.cta.desc': '把想法告诉我——我会把它画成一张架空历史地图。来问我吧。',
    'maps.cta.link': '问我 →',
    'maps.collection.title': '大画廊',
    'maps.download': '[下载]',
    'maps.lightbox.close': '关闭 ✕',
    'maps.lightbox.more': '进一步了解这张地图……',

    /* Map story: Soviet Union -------------------------------------- */
    'doc.title.soviet': '苏联 — 地图画廊州',
    'soviet.stamp': '地图',
    'soviet.title': '背景故事',
    'soviet.eyebrow': '漆黑的夜 · 互动故事',
    'soviet.back': '回到地图画廊',
    'soviet.caption': '这条时间线里的联盟。',
    'soviet.info.year': '故事年份',
    'soviet.info.year.value': '1978',
    'soviet.info.country': '故事国家',
    'soviet.info.country.value': '苏维埃社会主义共和国联盟（USSR）',
    'soviet.info.character': '角色名称',
    'soviet.info.character.value': '阿列克谢·拉迪米尔·塞苗洛夫',
    'soviet.info.birthplace': '出生地',
    'soviet.info.birthplace.value': '鄂木茨克，鄂木茨克州',

    /* Map story: Levant Union ------------------------------------- */
    'doc.title.levant': '黎凡特 — 地图画廊州',
    'levant.stamp': '地图',
    'levant.title': '背景故事',
    'levant.eyebrow': '橄榄与灰烬 · 互动故事',
    'levant.back': '回到地图画廊',
    'levant.caption': '这条时间线里的黎凡特。',
    'levant.info.year': '故事年份',
    'levant.info.year.value': '1979',
    'levant.info.country': '故事国家',
    'levant.info.country.value': '黎凡特联盟',
    'levant.info.character': '角色名称',
    'levant.info.character.value': '萨米尔·哈达德',
    'levant.info.job': '职业',
    'levant.info.job.value': '大马士革中央医院外科住院医师',
    'levant.info.birthplace': '出生地',
    'levant.info.birthplace.value': '大马士革，中央省，叙利亚大区',

    /* Ask me ------------------------------------------------------ */
    'ask.stamp': '问我',
    'ask.brand': '问我共和国',
    'ask.title': '问我：我能做什么',
    'ask.sub': '三件我能帮上忙的事——挑一件，写给我。',
    'ask.card1.num': '01 / 制图',
    'ask.card1.title': '地图构想',
    'ask.card1.desc': '给我一个世界、一个分歧点，以及你想改变的东西。如果这个想法成立，我会把它画成一张架空历史地图。',
    'ask.card1.cta': '提交地图构想',
    'ask.card2.num': '02 / 对话',
    'ask.card2.title': '历史与政治',
    'ask.card2.desc': '带一条边界、一场选举，或一条让你停不下来的时间线来。我很乐意和你聊透——或者争论一番。',
    'ask.card2.cta': '开始一段对话',
    'ask.card3.num': '03 / 阅读',
    'ask.card3.title': '书单推荐',
    'ask.card3.desc': '告诉我你最近读的东西。我会回赠一些值得你花时间的内容——历史、架空历史，或小说。',
    'ask.card3.cta': '索要书单',
    'ask.collection.title': '别的事情？',
    'ask.form.send': '通过邮件发送',
    'ask.form.cancel': '取消',
    'ask.subject.map': '地图构想',
    'ask.subject.talk': '历史与政治',
    'ask.map.title': '提交地图构想',
    'ask.map.body': '填好这张表，它会打开你的邮件应用，把构想准备好发送。如果是我能画的东西，我会回复。',
    'ask.map.label.name': '你的名字',
    'ask.map.label.world': '世界 / 时期',
    'ask.map.label.change': '改变了什么？',
    'ask.map.ph.world': '例如：1930 年代的欧洲，或一个没有海洋的世界',
    'ask.map.ph.change': '分歧点、你想象的边界，或任何你已有想法。',
    'ask.talk.title': '聊聊历史与政治',
    'ask.talk.body': '告诉我话题和你的看法。发送时，你的邮件应用会打开，消息已准备好。',
    'ask.talk.label.name': '你的名字',
    'ask.talk.label.topic': '话题',
    'ask.talk.label.take': '你想说的话',
    'ask.talk.ph.topic': '例如：战后欧洲的边界',
    'ask.talk.ph.take': '一个问题、一条时间线，或一个你想被检验的观点。',
    'ask.books.title': '一份书单',
    'ask.books.body': '先给三本。告诉我你读过什么，我会为你调整下一批。',
    'ask.books.book1.title': '《繁花盛开的森林》',
    'ask.books.book1.desc': '三岛由纪夫——他出版的第一部作品，一部关于美与死亡的沉思，写于十六岁。',
    'ask.books.book2.title': '《人生的智慧》',
    'ask.books.book2.desc': '亚瑟·叔本华——关于如何在一个很少配合你的世界里好好生活的随笔。',
    'ask.books.book3.title': '《地狱卡特尔》',
    'ask.books.book3.desc': '迪尔米德·杰弗里斯——IG 法本与希特勒战争机器的制造。',
    'ask.books.cta': '索要定制书单',
    'ask.books.cancel': '取消',

    /* Form field labels used inside the generated e-mail ---------- */
    'form.label.name': '姓名',
    'form.label.world': '世界 / 时期',
    'form.label.change': '改变之处',
    'form.label.topic': '主题',
    'form.label.message': '留言'
  };

  const FIELDS = [
    { attr: 'data-i18n', store: 'text' },
    { attr: 'data-i18n-html', store: 'html' },
    { attr: 'data-i18n-title', store: 'title' },
    { attr: 'data-i18n-desc', store: 'desc' },
    { attr: 'data-i18n-caption', store: 'caption' },
    { attr: 'data-i18n-subject', store: 'subject' },
    { attr: 'data-i18n-datalabel', store: 'datalabel' },
    { attr: 'data-i18n-placeholder', store: 'placeholder' }
  ];

  const read = {
    text: (el) => el.textContent,
    html: (el) => el.innerHTML,
    title: (el) => el.dataset.title || '',
    desc: (el) => el.dataset.desc || '',
    caption: (el) => el.dataset.caption || '',
    subject: (el) => el.dataset.subject || '',
    datalabel: (el) => el.dataset.label || '',
    placeholder: (el) => el.getAttribute('placeholder') || ''
  };

  const write = {
    text: (el, value) => { el.textContent = value; },
    html: (el, value) => { el.innerHTML = value; },
    title: (el, value) => { el.dataset.title = value; },
    desc: (el, value) => { el.dataset.desc = value; },
    caption: (el, value) => { el.dataset.caption = value; },
    subject: (el, value) => { el.dataset.subject = value; },
    datalabel: (el, value) => { el.dataset.label = value; },
    placeholder: (el, value) => { el.setAttribute('placeholder', value); }
  };

  const selector = FIELDS.map((field) => `[${field.attr}]`).join(',');
  const records = Array.from(document.querySelectorAll(selector)).map((el) => {
    const keys = {};
    const originals = {};
    FIELDS.forEach((field) => {
      const key = el.getAttribute(field.attr);
      if (!key) return;
      keys[field.store] = key;
      originals[field.store] = read[field.store](el);
    });
    return { el, keys, originals };
  });

  const toggles = document.querySelectorAll('[data-lang-toggle]');

  function apply(lang) {
    const isZh = lang === 'zh';

    document.documentElement.lang = isZh ? 'zh-CN' : 'en';
    document.documentElement.setAttribute('data-lang', lang);

    records.forEach(({ el, keys, originals }) => {
      FIELDS.forEach((field) => {
        if (keys[field.store] === undefined) return;
        const fallback = originals[field.store];
        const value = isZh && ZH[keys[field.store]] ? ZH[keys[field.store]] : fallback;
        write[field.store](el, value);
      });
    });

    toggles.forEach((button) => {
      button.textContent = isZh ? 'EN' : '中文';
      button.setAttribute('aria-label', isZh ? 'Switch to English' : '切换到中文');
    });
  }

  let lang = 'en';
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === 'zh') lang = 'zh';
  } catch (error) {
    // Storage can be unavailable; the page still works in English.
  }

  apply(lang);

  toggles.forEach((button) => {
    button.addEventListener('click', () => {
      lang = lang === 'zh' ? 'en' : 'zh';
      try {
        window.localStorage.setItem(STORAGE_KEY, lang);
      } catch (error) {
        // Ignore storage failures.
      }
      apply(lang);
    });
  });
})();
