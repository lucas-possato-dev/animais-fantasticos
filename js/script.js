import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-animação.js';
import TabNav from './modules/tabNav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimaScroll from './modules/scroll-animação.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');

scrollSuave.init();
accordion.init();
tabNav.init();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimaScroll();
