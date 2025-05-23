<?php declare(strict_types=1); ?>

<div class="app-content">
</div>
<script type="module" nonce="<?= $_['cspNonce']; ?>">
  import { h, render } from "https://esm.sh/preact";
  import htm from "https://esm.sh/htm";
  const html = htm.bind(h);

  const pageProps = <?= json_encode($pageProps) ?>;

  import Page from "<?= $appPath ?>/js/pages/index.mjs"
  render(html`<${Page} ...${pageProps} />`, document.querySelector('.app-content'));
</script>

<!-- <script type=" text/javascript" nonce="<?= $_['cspNonce']; ?>">
  [...document.querySelectorAll('button[data-copy-link]')].forEach((button) => {
    button.addEventListener('click', async () => {
      const prevContent = button.innerHTML
      button.disabled = true
      button.innerHTML = "Copied"

      try {
        await navigator.clipboard.writeText(button.getAttribute('data-copy-link'))
      }
      finally {
        setTimeout(() => {
          button.disabled = false
          button.innerHTML = prevContent
        }, 1000)
      }
    })
  });

  [...document.querySelectorAll('form[data-confirm]')].forEach((form) => {
    form.addEventListener('submit', async (event) => {
      if (!confirm(form.getAttribute('data-confirm'))) {
        event.preventDefault();
        return;
      }

      if (form.hasAttribute('data-delete')) {
        event.preventDefault();
        const response = await fetch(form.action, { method: 'DELETE' })
        if (response.ok) form.closest('.frame').remove();
      }
    })
  });

  [...document.querySelectorAll('button[data-qr-link]')].forEach((button) => {
    button.addEventListener('click', async (event) => {
      const link = button.getAttribute('data-qr-link')
      const modalContent = document.querySelector('.modal-content')
      modalContent.innerHTML = ''

      const div = document.createElement('div')
      div.style.border = "10px solid white";
      modalContent.append(div)

      document.querySelector('.modal-backdrop').classList.add('modal-backdrop--visible')

      new QRCode(div, link);
    })
  });

  document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('.modal-backdrop').classList.remove('modal-backdrop--visible')
  })
  document.querySelector('.modal-backdrop').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.classList.remove('modal-backdrop--visible')
    }
  })
</script> -->