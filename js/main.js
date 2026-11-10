/* Republic of Gerald Wu — page interactions */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Hero four-zone hover tooltip */
  const tooltip = document.querySelector('[data-tooltip]');
  const tooltipTitle = document.querySelector('[data-tooltip-title]');
  const tooltipDesc = document.querySelector('[data-tooltip-desc]');
  const zones = document.querySelectorAll('.hero__zone');

  if (tooltip && tooltipTitle && tooltipDesc && zones.length) {
    let activeZone = null;

    function showTooltip(zone, x, y) {
      activeZone = zone;
      tooltipTitle.textContent = zone.dataset.title || '';
      tooltipDesc.textContent = zone.dataset.desc || '';

      const rect = zone.getBoundingClientRect();
      const tooltipWidth = Math.min(320, window.innerWidth * 0.86);
      const tooltipHeight = 140;

      // 默认放在鼠标右下方，超出屏幕则翻转
      let left = x + 20;
      let top = y + 20;

      if (left + tooltipWidth > window.innerWidth - 16) {
        left = x - tooltipWidth - 20;
      }
      if (top + tooltipHeight > window.innerHeight - 16) {
        top = y - tooltipHeight - 20;
      }

      // 不要超出象限边界太多
      left = Math.max(16, Math.min(left, window.innerWidth - tooltipWidth - 16));
      top = Math.max(16, Math.min(top, window.innerHeight - tooltipHeight - 16));

      tooltip.style.left = left + 'px';
      tooltip.style.top = top + 'px';
      tooltip.classList.add('is-visible');
      tooltip.setAttribute('aria-hidden', 'false');
    }

    function hideTooltip() {
      activeZone = null;
      tooltip.classList.remove('is-visible');
      tooltip.setAttribute('aria-hidden', 'true');
    }

    zones.forEach((zone) => {
      zone.addEventListener('mouseenter', (e) => {
        showTooltip(zone, e.clientX, e.clientY);
      });
      zone.addEventListener('mousemove', (e) => {
        if (activeZone === zone) {
          showTooltip(zone, e.clientX, e.clientY);
        }
      });
      zone.addEventListener('mouseleave', hideTooltip);
      zone.addEventListener('focus', (e) => {
        const rect = zone.getBoundingClientRect();
        showTooltip(zone, rect.left + rect.width / 2, rect.top + rect.height / 2);
      });
      zone.addEventListener('blur', hideTooltip);
    });

    // 滚动时隐藏
    window.addEventListener('scroll', hideTooltip, { passive: true });
  }

  /* 2. Donate dialog */
  const donateButtons = document.querySelectorAll('[data-donate]');
  const donateDialog = document.querySelector('[data-donate-dialog]');
  if (donateButtons.length && donateDialog) {
    donateButtons.forEach((btn) => {
      btn.addEventListener('click', () => donateDialog.showModal());
    });
  }

  /* 3. Ask Me dialogs */
  const askTriggers = document.querySelectorAll('[data-ask]');
  askTriggers.forEach((trigger) => {
    const dialog = document.querySelector(`[data-ask-dialog="${trigger.dataset.ask}"]`);
    if (dialog) trigger.addEventListener('click', () => dialog.showModal());
  });

  document.querySelectorAll('[data-ask-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const field = (name) => (form.elements[name]?.value || '').trim();
      const topic = field(form.dataset.subjectField || '');
      const subject = `${form.dataset.subject || 'Message'} — ${topic || 'a new message'}`;
      const body = Array.from(form.querySelectorAll('[data-label]'))
        .map((input) => `${input.dataset.label}: ${input.value.trim() || '—'}`)
        .join('\n\n');

      const mailto =
        'mailto:geraldwu@moonshotacademy.cn' +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(`${body}\n\n— Sent from the Republic of Gerald Wu`)}`;

      // 关闭窗口，交给系统邮件 App 打开写好的邮件
      form.closest('dialog')?.close();

      const link = document.createElement('a');
      link.href = mailto;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  });

  /* 4. Map lightbox */
  const lightbox = document.querySelector('[data-lightbox-dialog]');
  const lightboxImage = document.querySelector('[data-lightbox-image]');
  const lightboxCaption = document.querySelector('[data-lightbox-caption]');
  const lightboxMore = document.querySelector('[data-lightbox-more]');

  if (lightbox && lightboxImage && lightboxCaption) {
    document.querySelectorAll('[data-lightbox]').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const caption = link.dataset.caption || '';
        lightboxImage.src = link.getAttribute('href');
        lightboxImage.alt = caption;
        lightboxCaption.textContent = caption;
        if (lightboxMore) {
          // 只有带 data-more 的地图才有详情页
          if (link.dataset.more) {
            lightboxMore.href = link.dataset.more;
            lightboxMore.hidden = false;
          } else {
            lightboxMore.hidden = true;
          }
        }
        lightbox.showModal();
      });
    });

    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });
  }

  /* 5. Shared close buttons */
  document.querySelectorAll('[data-close]').forEach((button) => {
    button.addEventListener('click', () => button.closest('dialog')?.close());
  });
})();
