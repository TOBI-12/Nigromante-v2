import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"


global.botnumber = ""

global.owner = [ 
  ['5213331199136', '♡ ᭄ 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 ♡᭄ ', true],
['5213331199136', '𝐸𝑑𝑖𝑡𝑜𝑟 𝑂𝑓𝑖𝑐𝑖𝑎𝑙', true],
['5213339577315', '𝐴𝑠𝑖𝑠𝑡𝑒𝑛𝑠𝑖𝑎', true],
['5213339577315', '𝑆𝑜𝑝𝑜𝑟𝑡𝑒 𝑂𝑓𝑖𝑐𝑖𝑎𝑙', true]]

global.suittag = ['5213339577315'];
global.prems = ['5213331199136'];

global.lenguajeSK = es //idioma del bot

global.packname = '⸽⃕𝕹𝖎𝖌𝖗𝖔𝖒𝖆𝖓𝖙𝖊𝕭𝖔𝖙-𝕸𝕯⃨፝⃕✰';
global.author = 'nigromante';
global.wm = '⸽⃕𝕹𝖎𝖌𝖗𝖔𝖒𝖆𝖓𝖙𝖊𝕭𝖔𝖙-𝕸𝕯⃨፝⃕✰';
global.titulowm = '⸽⃕𝕹𝖎𝖌𝖗𝖔𝖒𝖆𝖓𝖙𝖊𝕭𝖔𝖙-𝕸𝕯⃨፝⃕✰';
global.titulowm2 = `nigromante`
global.igfg = 'nigromante';
global.wait = '*🪁 𝑼𝒏 𝑴𝒐𝒎𝒆𝒏𝒕𝒐 ʕ •́؈•̀ ₎...*';
global.vs = '2.9';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nnigromante`;
global.gt = 'nigromante';
global.mysticbot = 'nigromante';
global.md = 'https://github.com/sinombre913/sinombre913';
global.mysticbot = 'https://github.com/sinombre913/NigromanteBot-MD';
global.waitt = '*🪁  𝑼𝒏 𝑴𝒐𝒎𝒆𝒏𝒕𝒐 ʕ •́؈•̀ ₎...*';
global.waittt = '*🪁 𝑼𝒏 𝑴𝒐𝒎𝒆𝒏𝒕𝒐 ʕ •́؈•̀ ₎...*';
global.waitttt = '*🪁 𝑼𝒏 𝑴𝒐𝒎𝒆𝒏𝒕𝒐 ʕ •́؈•̀ ₎...*';
global.nomorown = '5213331199136';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
