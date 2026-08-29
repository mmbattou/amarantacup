(function () {
  const WHATSAPP_NUMBER = '573128997149';
  const DEFAULT_MESSAGE = 'Hola Amaranta Cup, quiero hacer un pedido.';

  function buildWhatsAppUrl(message) {
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  }

  function isWhatsAppTrigger(link) {
    if (!link) {
      return false;
    }

    const text = (link.textContent || '').trim().toLowerCase();
    const aria = (link.getAttribute('aria-label') || '').toLowerCase();
    const classes = link.className || '';

    if (link.dataset.whatsappMessage) {
      return true;
    }

    if (typeof classes === 'string' && (
      classes.includes('order-button') ||
      classes.includes('product-order') ||
      classes.includes('final-cta-button') ||
      classes.includes('whatsapp-card-button')
    )) {
      return true;
    }

    if (aria.includes('whatsapp') || text.includes('whatsapp') || text.includes('pedir')) {
      return true;
    }

    return false;
  }

  function bindWhatsAppLink(link) {
    if (!link || link.dataset.whatsappBound === 'true') {
      return;
    }

    const message = link.dataset.whatsappMessage || link.getAttribute('data-message') || DEFAULT_MESSAGE;
    const url = buildWhatsAppUrl(message);

    if (!link.getAttribute('href') || link.getAttribute('href') === 'contacto.html' || link.getAttribute('href') === '#') {
      link.setAttribute('href', url);
    }

    if (!link.hasAttribute('target')) {
      link.setAttribute('target', '_blank');
    }

    if (!link.hasAttribute('rel')) {
      link.setAttribute('rel', 'noreferrer');
    }

    link.dataset.whatsappBound = 'true';

    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const selectors = [
      '.order-button',
      '.product-order',
      '.final-cta-button',
      '.whatsapp-card-button',
      '.pastry-final-cta a',
      '.footer-contact a',
      '.footer-socials a',
      'a[href="contacto.html"]',
      'a[href="#"]'
    ];

    const links = [...document.querySelectorAll(selectors.join(','))].filter(isWhatsAppTrigger);
    links.forEach(bindWhatsAppLink);
  });
})();
