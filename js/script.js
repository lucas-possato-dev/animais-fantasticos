import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-animação.js';
import TabNav from './modules/tabNav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import ScrollAnima from './modules/scroll-animação.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
const accordion = new Accordion('[data-anime="accordion"] dt');
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
const tooltip = new Tooltip('[data-tooltip]');
const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
const dropdownMenu = new DropdownMenu('[data-dropdown]');
const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu=list]');
const funcionamento = new Funcionamento('[data-semana]', 'aberto');

scrollSuave.init();
accordion.init();
tabNav.init();
modal.init();
tooltip.init();
scrollAnima.init();
dropdownMenu.init();
menuMobile.init();
funcionamento.init();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
