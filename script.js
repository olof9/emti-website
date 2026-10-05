const translations = {
  en: {
    'nav.about': 'About',
    'nav.catalogue': 'Machines',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.documents': 'All machines ↗',
    'hero.kicker': 'European Machine Tools Italiana',
    'hero.subtitle': 'Used machine tools and industrial solutions.',
    'hero.description': 'Experience, expertise and a broad selection of industrial machinery for companies in Italy and worldwide.',
    'hero.cta1': 'Explore machines',
    'hero.cta2': 'Contact us',
    'stats.machines': 'Machine tools',
    'stats.space': 'm² warehouse',
    'stats.founded': 'Founded',
    'hero.scroll': 'SCROLL',
    'about.kicker': 'EMTI Srl',
    'about.title': 'Professionalism and experience.',
    'about.lead': 'EMTI Srl was founded in 1972. Since then, it has grown from a small local company into a business operating internationally.',
    'about.p1': 'We have more than 3,000 used machine tools and a warehouse covering more than 13,000 square metres.',
    'about.p2': 'We support a wide range of industrial needs, from large production companies to smaller workshops.',
    'about.link': 'Explore machines',
    'documents.kicker': 'Machines',
    'documents.title': 'Machines',
    'documents.lead': 'Browse the machine library. Each item opens the original document in a new tab.',
    'documents.search': 'Search machines...',
    'services.kicker': 'For your industrial project',
    'services.title': 'A partner for your machines.',
    'services.s1.title': 'Machine library',
    'services.s1.text': 'A broad selection of used machine tools and industrial equipment.',
    'services.s2.title': 'Experience',
    'services.s2.text': 'Decades of experience in the machine tool sector.',
    'services.s3.title': 'Logistics',
    'services.s3.text': 'Dedicated facilities and space for machine handling and movement.',
    'services.s4.title': 'Direct contact',
    'services.s4.text': 'A direct relationship with customers for requests and information.',
    'contact.kicker': 'Contact',
    'contact.addressLabel': 'ADDRESS',
    'contact.phoneLabel': 'PHONE',
    'contact.mobileLabel': 'MOBILE',
    'contact.emailLabel': 'EMAIL',
    'contact.vatLabel': 'VAT NUMBER',
    'documents.button': 'Details ↗',
    'documents.open': 'Open machine ↗'
  },
  it: {
    'nav.about': 'Chi siamo',
    'nav.catalogue': 'Macchine',
    'nav.services': 'Servizi',
    'nav.contact': 'Contatti',
    'nav.documents': 'Tutte le macchine ↗',
    'hero.kicker': 'European Machine Tools Italiana',
    'hero.subtitle': 'Macchine utensili usate e soluzioni industriali.',
    'hero.description': 'Esperienza, competenza e una vasta selezione di macchine industriali per aziende in Italia e nel mondo.',
    'hero.cta1': 'Esplora le macchine',
    'hero.cta2': 'Contattaci',
    'stats.machines': 'Macchine utensili',
    'stats.space': 'm² magazzino',
    'stats.founded': 'Fondata',
    'hero.scroll': 'SCORRI',
    'about.kicker': 'EMTI Srl',
    'about.title': 'Professionalità ed esperienza.',
    'about.lead': 'EMTI Srl è stata fondata nel 1972. Da allora si è sviluppata da piccola realtà locale fino a diventare un’impresa presente a livello internazionale.',
    'about.p1': 'Dispone di oltre 3.000 macchine utensili usate e di un magazzino di oltre 13.000 metri quadrati.',
    'about.p2': 'Supportiamo una vasta gamma di esigenze industriali, da grandi aziende produttrici a piccoli laboratori.',
    'about.link': 'Esplora le macchine',
    'documents.kicker': 'Macchine',
    'documents.title': 'Macchine',
    'documents.lead': 'Sfoglia la libreria delle macchine. Ogni voce apre il documento originale in una nuova scheda.',
    'documents.search': 'Cerca macchine...',
    'services.kicker': 'Per il tuo progetto industriale',
    'services.title': 'Un partner per le tue macchine.',
    'services.s1.title': 'Libreria macchine',
    'services.s1.text': 'Ampia scelta di macchine utensili usate e attrezzature industriali.',
    'services.s2.title': 'Esperienza',
    'services.s2.text': 'Decenni di esperienza nel settore delle macchine utensili.',
    'services.s3.title': 'Logistica',
    'services.s3.text': 'Strutture dedicate e spazi per la movimentazione delle macchine.',
    'services.s4.title': 'Contatto diretto',
    'services.s4.text': 'Un rapporto diretto con i clienti per richieste e informazioni.',
    'contact.kicker': 'Contatti',
    'contact.addressLabel': 'INDIRIZZO',
    'contact.phoneLabel': 'TELEFONO',
    'contact.mobileLabel': 'CELLULARE',
    'contact.emailLabel': 'EMAIL',
    'contact.vatLabel': 'PARTITA IVA',
    'documents.button': 'Dettagli ↗',
    'documents.open': 'Apri macchina ↗'
  }
};

function safeStorageGet(key, fallback) {
  try {
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch (error) {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage quota/security issues and keep the page functional.
  }
}

const MACHINE_DOCUMENTS = (window.MACHINE_LIBRARY || []).slice().filter((item, index, arr) => {
  const key = (item.name || '').replace(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-/i, '').replace(/\s*-\s*Copi[ae](?=\.[^.]+$|$)/gi, '').toLowerCase();
  return arr.findIndex(entry => ((entry.name || '').replace(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-/i, '').replace(/\s*-\s*Copi[ae](?=\.[^.]+$|$)/gi, '').toLowerCase()) === key) === index;
}).sort((a, b) => {
  const nameA = ((a.name || '').replace(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-/i, '').replace(/\s*-\s*Copi[ae](?=\.[^.]+$|$)/gi, '') || '').toLowerCase();
  const nameB = ((b.name || '').replace(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-/i, '').replace(/\s*-\s*Copi[ae](?=\.[^.]+$|$)/gi, '') || '').toLowerCase();
  return nameA.localeCompare(nameB);
});

const PAGE_SIZE = 5000;
const nav = document.getElementById('mainNav');
const navToggle = document.getElementById('navToggle');
const header = document.getElementById('siteHeader');
const cookieBanner = document.getElementById('cookieBanner');
const acceptCookies = document.getElementById('acceptCookies');
const documentSearch = document.getElementById('documentSearch');
const documentGrid = document.getElementById('documentGrid');
const documentStatus = document.getElementById('documentStatus');
const documentPagination = document.getElementById('documentPagination');
const docCount = document.getElementById('docCount');
const dialog = document.getElementById('docDialog');
const dialogTitle = document.getElementById('dialogTitle');
const dialogText = document.getElementById('dialogText');
const dialogOpen = document.getElementById('dialogOpen');

let currentLang = safeStorageGet('emtiLang', 'en');
let documentPage = 1;

function formatFileLabel(item) {
  const name = (item && item.name ? item.name : '').replace(/\.[^/.]+$/, '');
  return name || `Machine ${String(item?.id ?? 0).padStart(3, '0')}`;
}

function applyLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[currentLang]?.[key];
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const value = translations[currentLang]?.[key];
    if (value) el.placeholder = value;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  renderDocuments();
}

function filteredDocuments() {
  const q = (documentSearch?.value || '').trim().toLowerCase();

  return MACHINE_DOCUMENTS.filter(item => {
    if (!q) return true;
    const haystack = `${item.id} ${item.name || ''} ${item.kind || ''}`.toLowerCase();
    return haystack.includes(q);
  });
}

function renderDocuments() {
  const all = filteredDocuments();
  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));

  if (documentPage > totalPages) {
    documentPage = totalPages;
  }

  const start = (documentPage - 1) * PAGE_SIZE;
  const pageItems = all.slice(start, start + PAGE_SIZE);

  const totalText = currentLang === 'en' ? 'machines' : 'macchine';
  docCount.textContent = `(${MACHINE_DOCUMENTS.length} ${totalText})`;
  documentStatus.textContent = currentLang === 'en'
    ? `${all.length} machines · page ${documentPage} of ${totalPages}`
    : `${all.length} macchine · pagina ${documentPage} di ${totalPages}`;

  documentGrid.innerHTML = pageItems.map(item => {
    const machineName = formatFileLabel(item);
    const docNumber = String(item.id).padStart(3, '0');
    const kindLabel = item.kind || (currentLang === 'en' ? 'PDF' : 'PDF');
    const description = currentLang === 'en'
      ? 'Original file from the EMTI machine library.'
      : 'File originale dalla libreria macchine EMTI.';

    return `
      <article class="doc-card">
        <div class="doc-number">${docNumber}</div>

        <div class="doc-content">
          <small>${kindLabel}</small>
          <h3>${machineName}</h3>
          <p>${description}</p>
        </div>

        <div class="doc-actions">
          <button class="card-btn primary" type="button" data-doc="${item.id}">
            ${currentLang === 'en' ? 'Details ↗' : 'Dettagli ↗'}
          </button>

          <a class="card-btn" href="${item.url || '#'}" target="_blank" rel="noopener noreferrer">
            ${currentLang === 'en' ? 'Open machine ↗' : 'Apri macchina ↗'}
          </a>
        </div>
      </article>
    `;
  }).join('');

  if (!pageItems.length) {
    documentGrid.innerHTML = `<div class="no-results">${currentLang === 'en' ? 'No machines found.' : 'Nessuna macchina trovata.'}</div>`;
  }

  renderPagination(totalPages);

  document.querySelectorAll('[data-doc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = MACHINE_DOCUMENTS.find(x => x.id === Number(btn.dataset.doc));
      openDialog(item);
    });
  });
}

function renderPagination(totalPages) {
  const maxButtons = 7;
  const pages = [];

  if (totalPages <= maxButtons) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    const start = Math.max(2, documentPage - 2);
    const end = Math.min(totalPages - 1, documentPage + 2);

    if (start > 2) pages.push('…');
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push('…');
    pages.push(totalPages);
  }

  documentPagination.innerHTML = pages.map(p => {
    if (p === '…') return '<span class="page-gap">…</span>';
    return `<button class="${p === documentPage ? 'active' : ''}" data-page="${p}">${p}</button>`;
  }).join('');

  documentPagination.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      documentPage = Number(btn.dataset.page);
      renderDocuments();
      document.getElementById('documents').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function openDialog(item) {
  if (!item) return;

  const title = formatFileLabel(item);
  dialogTitle.textContent = title;
  dialogText.textContent = currentLang === 'en'
    ? 'This button opens the original machine file from the EMTI library.'
    : 'Questo pulsante apre il file originale della macchina presente nella libreria EMTI.';

  dialogOpen.href = item.url || '#';
  dialog.classList.add('open');
  dialog.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeDialog() {
  dialog.classList.remove('open');
  dialog.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentLang = btn.dataset.lang;
    safeStorageSet('emtiLang', currentLang);
    applyLanguage();
  });
});

document.querySelectorAll('[data-dialog-close]').forEach(el => {
  el.addEventListener('click', closeDialog);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDialog();
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

documentSearch.addEventListener('input', () => {
  documentPage = 1;
  renderDocuments();
});

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

if (safeStorageGet('emtiCookiesAccepted', '0') === '1') {
  cookieBanner.classList.add('hidden');
}

acceptCookies.addEventListener('click', () => {
  safeStorageSet('emtiCookiesAccepted', '1');
  cookieBanner.classList.add('hidden');
});

applyLanguage();
