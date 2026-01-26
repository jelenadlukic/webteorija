const questions = [
  {
    id: 161,
    points: 1,
    type: "single",
    text: "Заокружити број испред исказа који тачно дефинише појам веб сајта:",
    options: [
      "скуп протокола за отпремање и преузимање података са интернета, као и протоколи за комуникацију на интернету",
      "скуп веб-страница које могу да садрже текст, слике, видео снимке и други мултимедијални садржај састављен у једну целину",
      "веб сајт чини интернет прегледач - програм који се користи за читање хипертекст докумената",
      "интернет сервис (www) који омогућава корисницима размену докумената која се састоје од текста, слика и мултимедијалних компоненти"
    ],
    correct: [1],
    explain: {
      correct: "Веб сајт је целина која се састоји од више веб-страница повезаних у један логички скуп.",
      wrong: [
        "Ово описује протоколе/комуникацију на интернету, не веб сајт.",
        "",
        "Ово описује браузер (клијентски програм), не сајт.",
        "Ово више описује WWW као сервис, не дефиницију „веб сајта“."
      ]
    }
  },
  {
    id: 162,
    points: 1,
    type: "single",
    text: "Основни протокол који користи веб сервер је:",
    options: ["SMTP", "HTTP", "HTML", "WWW"],
    correct: [1],
    explain: {
      correct: "HTTP је протокол за пренос веб садржаја између клијента и веб сервера.",
      wrong: [
        "SMTP је протокол за е-пошту.",
        "",
        "HTML је језик за обележавање, није протокол.",
        "WWW је сервис/концепт, није протокол."
      ]
    }
  },
  {
    id: 163,
    points: 1,
    type: "single",
    text: "Која је основна улога CSS-a (Cascading Style Sheet):",
    options: [
      "Дефинише структуру и садржај странице",
      "Дефинише конкретан изглед елемената странице",
      "Дефинише којим језиком веб сервер извршава динамичку веб страницу",
      "Дефинише протокол за приступ одређеној веб страници"
    ],
    correct: [1],
    explain: {
      correct: "CSS служи за стил (боје, распоред, фонтови, величине, размак, позиционирање).",
      wrong: [
        "Структуру и садржај дефинише HTML.",
        "",
        "Ово се односи на серверску страну (нпр. PHP/ASP.NET), не на CSS.",
        "CSS није протокол."
      ]
    }
  },
  {
    id: 164,
    points: 1,
    type: "single",
    text: "Како се дефинишу селектори HTML елемента:",
    options: [
      "Селектори се дефинишу искључиво на основу имена HTML елемента",
      "Селектори се дефинишу на основу имена елемента, назива класе или идентификатора елемента",
      "Селектори се дефинишу на основу атрибута сваког HTML елемента",
      "Селектори се дефинишу коришћењем кључне речи selector и атрибута"
    ],
    correct: [1],
    explain: {
      correct: "У пракси најчешће користиш селекторе по тагу (div), класи (.klasa) или id-у (#id).",
      wrong: [
        "Постоје и класе и id, не само име елемента.",
        "",
        "Постоје селектори по атрибуту, али није „основа“ и није једини начин.",
        "Не постоји кључна реч selector у CSS-у."
      ]
    }
  },
  {
    id: 165,
    points: 1,
    type: "single",
    text: "Коју вредност својство background-repeat треба да има уколико слика не треба да се понавља у оквиру елемента:",
    options: [
      "background-repeat: fixed;",
      "background-repeat: null;",
      "background-repeat: no-repeat;",
      "background-repeat: repeat-x;"
    ],
    correct: [2],
    explain: {
      correct: "no-repeat значи да се позадинска слика неће „тилисати“ (понављати).",
      wrong: [
        "fixed је вредност за background-attachment, не за background-repeat.",
        "null није валидна вредност у CSS-у за ово својство.",
        "",
        "repeat-x понавља слику хоризонтално."
      ]
    }
  },
  {
    id: 166,
    points: 1,
    type: "single",
    text: "Селектором a:visited омогућава се стилизовање:",
    options: [
      "активног линка",
      "посећеног линка",
      "линка када се преко њега пређе мишем",
      "елемента са називом класе: а"
    ],
    correct: [1],
    explain: {
      correct: "a:visited важи за линкове које је корисник већ посетио.",
      wrong: [
        "Активан линк је a:active.",
        "",
        "Hover је a:hover.",
        "Ово није CSS синтакса за класу."
      ]
    }
  },
  {
    id: 167,
    points: 1,
    type: "single",
    text: "Које од понуђених својстава омогућава постизање ефекта слојевитости елемената у оквиру HTML стране?",
    options: ["Својство overlap", "Својство layer", "Својство z-index", "Не постоји решење за постизање слојевитости"],
    correct: [2],
    explain: {
      correct: "z-index контролише редослед преклапања (слојеве) код позиционираних елемената.",
      wrong: [
        "overlap не постоји као CSS својство.",
        "layer не постоји као CSS својство.",
        "",
        "Постоји решење: позиционирање + z-index."
      ]
    }
  },
 {
  id: 168,
  points: 1,
  type: "single",
  text: "Aнализирати HTML код и одабрати опцију која описује резултат приказа:",
  code: `<b><i> Maturski ispit </i></b>`,
  options: [
    "Текст ће бити само подебљан",
    "Текст ће бити само искошен",
    "Текст ће бити исписан подебљано и искошено",
    "Неће се применити никакав ефекат на текст"
  ],
  correct: [2],
  explain: {
    correct: "<b> додаје подебљан (bold) стил, а <i> додаје искошен (italic) стил, па се примењују оба ефекта.",
    wrong: [
      "Није само bold јер постоји и <i>.",
      "Није само italic јер постоји и <b>.",
      "",
      "Ефекти ће се применити јер су тагови исправни."
    ]
  }
},

  {
    id: 169,
    points: 2,
    type: "single",
    text: "Којом линијом кода се у HTML страницу укључује екстерна CSS датотека style.css:",
    options: [
      "<style type=”text/css”>....</style>",
      "<link rel=”stylesheet” type=”text/css” href=”style.css”/>",
      "<body style=”background-color:red;”>...</body>",
      "<a href=\" style.css \">CSS датотека</a>"
    ],
    correct: [1],
    explain: {
      correct: "Екстерни CSS се укључује преко <link> унутар <head>.",
      wrong: [
        "Ово је интерни CSS (унутар <style>).",
        "",
        "Ово је inline стил, није увоз датотеке.",
        "Линк ка фајлу није исто што и примена CSS-а."
      ]
    }
  },
  {
    id: 170,
    points: 2,
    type: "single",
    text: "Најпогоднији начин за стилизовање и касније одржавање HTML странице је:",
    options: [
      "Увежена екстерна CSS датотека (External Style Sheet)",
      "Интерни CSS у <style> (Internal Style Sheet)",
      "Inline style",
      "Не постоји решење"
    ],
    correct: [0],
    explain: {
      correct: "Екстерни CSS је најлакши за одржавање јер је стил на једном месту и важи за више страница.",
      wrong: [
        "",
        "Интерни стил је ок, али тежи за више страница и одржавање у већим пројектима.",
        "Inline је најгоре за одржавање (меша структуру и стил).",
        "Постоји решење."
      ]
    }
  },
 {
  id: 171,
  points: 2,
  type: "single",
  text: "Заокружити број испред тачног одговора. Које CSS правило дефинише стил за дати елемент?",
  code: `<div id="container"> Maturski ispit - EIT</div>`,
  options: [
    `container {\n  font-size: 1.5em;\n}`,
    `#container {\n  font-size: 1.5em;\n}`,
    `.container {\n  font-size: 1.5em;\n}`,
    `selector container {\n  font-size: 1.5em;\n}`
  ],
  correct: [1],
  explain: {
    correct: `Елемент има id="container". У CSS-у се id селектује знаком #, зато је тачно #container { ... }.`,
    wrong: [
      "Без # или . ово би значило да постоји HTML таг <container>, што није случај.",
      "",
      "Тачка (.) је за класу. Овде није class него id.",
      "Ово није валидна CSS синтакса (не постоји оваква кључна реч selector у CSS-у)."
    ]
  }
},


  {
    id: 172,
    points: 2,
    type: "single",
    text: "DIV има три класе: blue, black и top. Која линија кода је исправна?",
    options: [
      "<div id=\"blue black top\">Maturski ispit -EIT</div>",
      "<div id=\"blue\" class=\"black\" class=\"top\">Maturski ispit -EIT</div>",
      "<div class=\"blue\" class=\"black\" class=\"top\">Maturski ispit -EIT</div>",
      "<div class=\"blue black top\">Maturski ispit -EIT</div>"
    ],
    correct: [3],
    explain: {
      correct: "Више класа се наводи у једном class атрибуту, раздвојено размаком.",
      wrong: [
        "ID није за класе и не сме бити списак више вредности.",
        "Не можеш имати више class атрибута; пише се један class са више вредности.",
        "Исто: не можеш више class атрибута.",
        ""
      ]
    }
  },
  {
    id: 173,
    points: 2,
    type: "single",
    text: "background-attachment: fixed; значи да:",
    options: [
      "Позадинска слика се помера са остатком садржаја на страни",
      "Позадинска слика се не понавља у оквиру елемента",
      "Позадинска слика је непомична (фиксирана) у односу на остатак садржаја",
      "Позадинска слика се понавља унутар елемента"
    ],
    correct: [2],
    explain: {
      correct: "fixed значи да позадина остаје фиксирана (не скролује се са садржајем).",
      wrong: [
        "То је супротно од fixed (то је scroll понашање).",
        "Непонављање је background-repeat: no-repeat.",
        "",
        "Понављање је background-repeat: repeat."
      ]
    }
  },
  {
    id: 174,
    points: 2,
    type: "single",
    text: "Проценити шта описује ефекат извршења кода (z-index):",
    code: `<div style="background-color:red; width:300px; height:100px;
    position:relative; top:10px; left:80px; z-index:2">
    </div>

    <div style="background-color:yellow; width:300px; height:100px;
    position:relative; top:-60px; left:35px; z-index:1;">
    </div>

    <div style="background-color:green; width:300px; height:100px;
    position:relative; top:-220px; left:120px; z-index:3;">
    </div>`,
    options: [
        "Слој са зеленом позадином је на врху и преклапа остале слојеве",
        "Слој са жутом позадином је на врху и преклапа остале слојеве",
        "Слој са црвеном позадином је на врху и преклапа остале слојеве",
        "Слојеви се утапају у једну боју – нијансу смеђе"
    ],
    correct: [0],
    explain: {
        correct: "Najveći z-index je 3 (zeleni), zatim 2 (crveni), pa 1 (žuti). Zato je zeleni sloj na vrhu.",
        wrong: [
        "", // 0 je tačno, ovde ne treba objašnjenje “zašto nije”
        "Žuti ima z-index 1, pa je ispod ostalih.",
        "Crveni ima z-index 2, ali je ispod zelenog (3).",
        "Ne dolazi do stapanja boja; elementi se samo preklapaju."
        ]
    }
    },

  {
    id: 175,
    points: 2,
    type: "multi",
    text: "Заокружите тачне исказе. Интернет је:",
    options: [
      "Интернет је светски систем умрежених рачунарских мрежа",
      "Софтвер за преглед и приказ www страница се сматра Интернетом",
      "Подаци који „путују“ светском мрежом и скуп корисника заједно чине Интернет мрежу",
      "Интернет чини њена хардверска компонента као и систем софтверских слојева који контролишу различите аспекте њене комуникационе инфраструктуре"
    ],
    correct: [0, 3],
    explain: {
      correct: "Интернет је глобална мрежа мрежа + инфраструктура (хардвер и протоколи/софтверски слојеви).",
      wrong: [
        "",
        "Ово описује веб прегледач, не Интернет.",
        "Ово није стандардна дефиниција Интернета (више звучи као опис саобраћаја и корисника).",
        ""
      ]
    }
  },
  {
    id: 176,
    points: 2,
    type: "multi",
    text: "Шта од наведеног представља скуп специјализованих програма са функцијом веб сервера:",
    options: [
      "Microsoft Internet Information Services",
      "Microsoft SQL Server",
      "Apache Web Server",
      "Microsoft NT Server"
    ],
    correct: [0, 2],
    explain: {
      correct: "IIS и Apache су веб сервери (софтвер који служи веб садржај).",
      wrong: [
        "",
        "SQL Server је систем за базе, није веб сервер.",
        "",
        "NT Server је OS/платформа, није „скуп програма веб сервера“ као IIS/Apache."
      ]
    }
  },
  {
    id: 177,
    points: 3,
    type: "multi",
    text: "Означити исказе које се односе на динамичке веб странице:",
    options: [
      "Могу приступити базама података",
      "Странице се састоје искључиво од HTML кода",
      "Динамичке странице се пишу у CSS језику",
      "Могу слати персонализован садржај појединачним корисницима",
      "Странице се извршавају на веб серверу, а резултат овог извршавања представља HTML код",
      "Ажурирање података на сајту је компликованије и спорије него код статичког сајта"
    ],
    correct: [0, 3, 4],
    explain: {
      correct: "Динамичке стране често раде са базом, генеришу HTML на серверу и могу персонализовати садржај.",
      wrong: [
        "",
        "Ово је типично за статичке странице (само HTML).",
        "CSS није језик за динамику.",
        "",
        "",
        "У пракси је ажурирање често лакше код динамичког са CMS-om/bazom."
      ]
    }
  },
  {
    id: 178,
    points: 3,
    type: "multi",
    text: "Заокружити могуће начине укључивања CSS стила у HTML страни:",
    options: [
      "Увежена екстерна CSS датотека преко <link> у заглављу (External Style Sheet)",
      "Дефинисан екстерни CSS стил приказивања у прегледачу – CSS plugin",
      "Дефинисан интерни CSS стил у <style> у head секцији (Internal Style Sheet)",
      "Дефинисан стил у оквиру елемента HTML стране (Inline style)",
      "Дефинисан стил на крају HTML стране изван head и body – Outline style",
      "Дефинисан CSS стил унутар body унутар тага <css></css>"
    ],
    correct: [0, 2, 3],
    explain: {
      correct: "Постоје 3 класична начина: external (<link>), internal (<style>), inline (style атрибут).",
      wrong: [
        "",
        "Не постоји „CSS plugin“ као стандардни начин.",
        "",
        "",
        "Не постоји „Outline style“ као стандард.",
        "<css> није валидан HTML таг."
      ]
    }
  },
  {
  id: 179,
  points: 3,
  type: "fill",
  text: "Допуните: Написати линију кода којом се укључује екстерна CSS датотека style.css у оквиру <head> (style.css и index.html су у истом директоријуму).",
  placeholder: 'Нпр: <link rel="stylesheet" href="style.css">',
  accept: [
    '<link rel="stylesheet" href="style.css">',
    '<link rel="stylesheet" href="./style.css">',
    '<link rel="stylesheet" type="text/css" href="style.css">',
    '<link rel="stylesheet" type="text/css" href="./style.css">',
    '<link rel="stylesheet" href="style.css" />',
    '<link rel="stylesheet" type="text/css" href="style.css" />'
  ],
  explain: {
    correct: 'Тачно је укључивање преко <link> у <head>, нпр: <link rel="stylesheet" href="style.css">. Атрибут type је опционалан у HTML5.',
    wrong: ["","","",""]
  }
},

{
  id: 180,
  points: 1.5,
  type: "match",
  text: "Повежи појмове: упиши број HTML тага (лево) испред одговарајућег индикатора (десно).",
  match: {
    left: [
      '<font color="#ff0003">',
      "<b>",
      "<h3>",
      '<font size="3">'
    ],
    right: [
      "приказ наслова трећег нивоа",
      "приказ текста дате величине",
      "приказ текста у боји",
      "приказ подебљаног текста"
    ]
  },
  correct: [3, 4, 1, 2],
  explain: {
    correct: "h3 → наслов 3. нивоа; font size → величина текста; font color → боја текста; b → подебљано.",
    wrong: ["","","",""]
  }
},

{
  id: 181,
  points: 1.5,
  type: "match",
  text: "Повежи појмове: упиши број HTML тага (лево) испред одговарајућег индикатора (десно).",
  match: {
    left: [
      "<ol>",
      "<li>",
      '<body bgcolor="#ffff00">',
      '<body background="0001.jpg">'
    ],
    right: [
      "дефинисање елемента листе",
      "постављање позадинске боје",
      "постављање позадинске слике",
      "дефинисање нумерисане листе"
    ]
  },
  correct: [2, 3, 4, 1],
  explain: {
    correct: "ol → нумерисана листа; li → елемент листе; bgcolor → боја позадине; background → слика позадине.",
    wrong: ["","","",""]
  }
},

{
  id: 182,
  points: 1.5,
  type: "match",
  text: "Повежи појмове: упиши број HTML тага (лево) испред одговарајућег индикатора (десно).",
  match: {
    left: [
      "<tr>",
      "<td>",
      '<img src="slika.jpg">',
      '<a href="index.html">'
    ],
    right: [
      "Дефинисање хиперлинка",
      "Нови ред у ћелији",
      "Нова ћелија у табели",
      "Уметање слике"
    ]
  },
  correct: [4, 1, 2, 3],
  explain: {
    correct: "a href → хиперлинк; tr → нови ред у табели; td → ћелија табеле; img → уметање слике.",
    wrong: ["","","",""]
  }
},

{
  id: 183,
  points: 2,
  type: "match",
  text: "Повежи сервис (лево) са операцијом (десно): упиши број сервиса испред операције.",
  match: {
    left: [
      "E-mail",
      "FTP",
      "WWW",
      "Telnet"
    ],
    right: [
      "успостављање везе са удаљеним рачунаром и рад на њему",
      "приказ HTML веб страница",
      "слање електронске поште",
      "пренос датотека са удаљеног сервера"
    ]
  },
  correct: [4, 3, 1, 2],
  explain: {
    correct: "Telnet → удаљени рад; WWW → приказ веб страница; E-mail → слање поште; FTP → пренос фајлова.",
    wrong: ["","","",""]
  }
},

{
  id: 184,
  points: 2,
  type: "match",
  text: "Повежи тагове/атрибуте са дефиницијама (упиши број појма испред дефиниције).",
  match: {
    left: [
      "FORM",
      "INPUT",
      "ACTION",
      "METHOD"
    ],
    right: [
      "Дефинише где проследити податке са форме после предаје (submit) форме",
      "Одређује начин на који се подаци са форме шаљу (post или get)",
      "Основни таг формулара за унос података",
      "Дефинише поље за унос податка унутар форме"
    ]
  },
  correct: [3, 4, 1, 2],
  explain: {
    correct: "action → одредиште; method → post/get; form → основни таг; input → поље уноса.",
    wrong: ["","","",""]
  }
},

{
  id: 185,
  points: 3,
  type: "order",
  text: "Направите редослед корака за приказ статичке веб странице (1–5).",
  items: [
    "Веб сервер шаље пронађену страну клијенту - веб претраживачу.",
    "Корисник захтева да види веб страну (кликом на линк, укуцавањем адресе...).",
    "Аутор је креирао страну (HTML) и ставио је на веб сервер.",
    "Веб претраживач обрађује добијени HTML код и приказује страницу кориснику.",
    "Веб сервер проналази HTML страну коју је корисник захтевао."
  ],
  correct: [4, 2, 1, 5, 3],
  explain: {
    correct: "Статичка: (1) аутор постави, (2) корисник тражи, (3) сервер нађе, (4) сервер пошаље, (5) браузер прикаже.",
    wrong: ["","","",""]
  }
},

{
  id: 186,
  points: 3,
  type: "order",
  text: "Одредите редослед корака за приказ динамичке веб странице (1–6).",
  items: [
    "Веб претраживач обрађује добијени HTML код и приказује страницу са елементима.",
    "Веб сервер извршава програмски код који је саставни део стране и креира HTML код.",
    "Корисник креира захтев за преглед динамичке веб стране и шаље га серверу.",
    "Аутор је креирао страну са серверским контролама/инструкцијама и ставио је на сервер.",
    "Веб сервер обрађује захтев корисника и проналази динамичку страну.",
    "Веб сервер шаље генерисани HTML код веб претраживачу."
  ],
  correct: [6, 4, 2, 1, 3, 5],
  explain: {
    correct: "Динамичка: аутор → захтев → сервер нађе → изврши код → пошаље HTML → браузер прикаже.",
    wrong: ["","","",""]
  }
},

{
  id: 187,
  points: 3,
  type: "order",
  text: "Поређајте HTML наредбе по основној структури HTML странице (1–6).",
  items: [
    "</body>",
    "<head>",
    "</html>",
    "<html>",
    "</head>",
    "<body>"
  ],
  correct: [5, 2, 6, 1, 3, 4],
  explain: {
    correct: "Редослед је: <html>, <head>, </head>, <body>, </body>, </html>.",
    wrong: ["","","",""]
  }
},

];


let idx = 0;
let answers = new Map();   
let checked = new Set();   
let earned = new Map();     


const elStart = document.getElementById("screenStart");
const elQuiz = document.getElementById("screenQuiz");
const elResult = document.getElementById("screenResult");

const elLiveScore = document.getElementById("liveScore");
const elLiveTotal = document.getElementById("liveTotal");
const elLiveIndex = document.getElementById("liveIndex");
const elLiveCount = document.getElementById("liveCount");

const elQMeta = document.getElementById("qMeta");
const elQText = document.getElementById("qText");
const elQPoints = document.getElementById("qPoints");
const elForm = document.getElementById("qForm");
const elFeedback = document.getElementById("feedback");

const btnStart = document.getElementById("btnStart");
const btnResetAll = document.getElementById("btnResetAll");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnCheck = document.getElementById("btnCheck");
const btnFinish = document.getElementById("btnFinish");

const elFinalScore = document.getElementById("finalScore");
const elFinalTotal = document.getElementById("finalTotal");
const elSummary = document.getElementById("summary");
const btnReview = document.getElementById("btnReview");
const btnRestart = document.getElementById("btnRestart");

const elQCode = document.getElementById("qCode");

function dedent(str) {
  const lines = String(str).replace(/\r/g, "").split("\n");

  while (lines.length && lines[0].trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();


  let min = Infinity;
  for (const line of lines) {
    if (line.trim() === "") continue;
    const m = line.match(/^\s*/);
    min = Math.min(min, m ? m[0].length : 0);
  }

  if (!isFinite(min) || min === 0) return lines.join("\n");


  return lines.map(l => l.slice(min)).join("\n");
}


function totalPoints() {
  return questions.reduce((s, q) => s + q.points, 0);
}

function currentEarnedTotal() {
  let s = 0;
  for (const q of questions) s += (earned.get(q.id) || 0);
  return s;
}

function setScreen(which) {
  elStart.classList.toggle("hidden", which !== "start");
  elQuiz.classList.toggle("hidden", which !== "quiz");
  elResult.classList.toggle("hidden", which !== "result");
}

function sameSet(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort((x,y)=>x-y).join(",");
  const sb = [...b].sort((x,y)=>x-y).join(",");
  return sa === sb;
}

function arraysEqual(a, b){
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function normalizeQuotes(s){
  return String(s)
    .replace(/[“”]/g, '"')
    .replace(/[’‘]/g, "'")
    .trim();
}

function normalizeNoSpaceLower(s){
  return normalizeQuotes(s).replace(/\s+/g, "").toLowerCase();
}

function dedent(str) {
  const lines = String(str).replace(/\r/g, "").split("\n");
  while (lines.length && lines[0].trim() === "") lines.shift();
  while (lines.length && lines[lines.length - 1].trim() === "") lines.pop();

  let min = Infinity;
  for (const line of lines) {
    if (line.trim() === "") continue;
    const m = line.match(/^\s*/);
    min = Math.min(min, m ? m[0].length : 0);
  }
  if (!isFinite(min) || min === 0) return lines.join("\n");
  return lines.map(l => l.slice(min)).join("\n");
}


function render() {
  const question = questions[idx];
  const prev = answers.get(question.id);

  elQMeta.textContent = `Задатак ${question.id}`;
  elQText.textContent = question.text;

  if (question.code) {
    elQCode.textContent = dedent(question.code);
    elQCode.classList.remove("hidden");
  } else {
    elQCode.textContent = "";
    elQCode.classList.add("hidden");
  }

  elQPoints.textContent = question.points;

  elLiveTotal.textContent = totalPoints();
  elLiveCount.textContent = questions.length;
  elLiveIndex.textContent = idx + 1;
  elLiveScore.textContent = currentEarnedTotal();

  elFeedback.classList.add("hidden");
  elFeedback.classList.remove("ok", "bad");
  elFeedback.textContent = "";

  elForm.innerHTML = "";


  if (question.type === "single" || question.type === "multi") {
    const inputType = question.type === "multi" ? "checkbox" : "radio";
    const name = `q_${question.id}`;
    const prevSel = Array.isArray(prev) ? prev : [];

    question.options.forEach((opt, i) => {
      const wrap = document.createElement("div");
      wrap.className = "answer";

      const input = document.createElement("input");
      input.type = inputType;
      input.name = name;
      input.id = `${name}_${i}`;
      input.value = String(i);
      input.checked = prevSel.includes(i);

      input.addEventListener("change", () => {
        collectAnswer();
        checked.delete(question.id);
        earned.delete(question.id);
        updateLive();
      });

      const label = document.createElement("label");
      label.setAttribute("for", input.id);
      label.textContent = opt;

      wrap.appendChild(input);
      wrap.appendChild(label);
      elForm.appendChild(wrap);
    });
  }


  else if (question.type === "fill") {
    const wrap = document.createElement("div");
    wrap.className = "answer";

    const input = document.createElement("input");
    input.type = "text";
    input.id = "fillInput";
    input.placeholder = question.placeholder || "Унеси одговор…";
    input.value = typeof prev === "string" ? prev : "";

    input.style.width = "100%";
    input.style.padding = "10px 12px";
    input.style.borderRadius = "12px";
    input.style.border = "1px solid var(--line)";
    input.style.background = "rgba(0,0,0,.20)";
    input.style.color = "var(--text)";

    input.addEventListener("input", () => {
      collectAnswer();
      checked.delete(question.id);
      earned.delete(question.id);
      updateLive();
    });

    wrap.appendChild(input);
    elForm.appendChild(wrap);
  }


  else if (question.type === "match") {
    const box = document.createElement("div");
    box.className = "matchBox";

    const leftCol = document.createElement("div");
    leftCol.className = "matchCol";
    leftCol.innerHTML = "<h3>Лево</h3>";

    question.match.left.forEach((t, i) => {
      const div = document.createElement("div");
      div.className = "matchItem";
      div.innerHTML = `<strong>${i + 1}.</strong> <span>${escapeHtml(t)}</span>`;
      leftCol.appendChild(div);
    });

    const rightCol = document.createElement("div");
    rightCol.className = "matchCol";
    rightCol.innerHTML = "<h3>Десно → упиши број</h3>";

    const prevMap = Array.isArray(prev) ? prev : Array(question.match.right.length).fill("");

    question.match.right.forEach((label, rIdx) => {
      const row = document.createElement("div");
      row.className = "matchItem";

      const sel = document.createElement("select");
      sel.className = "miniSelect";
      sel.dataset.ridx = String(rIdx);

      const opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "—";
      sel.appendChild(opt0);

      for (let n = 1; n <= question.match.left.length; n++) {
        const o = document.createElement("option");
        o.value = String(n);
        o.textContent = String(n);
        sel.appendChild(o);
      }

      sel.value = prevMap[rIdx] ? String(prevMap[rIdx]) : "";

      sel.addEventListener("change", () => {
        collectAnswer();
        checked.delete(question.id);
        earned.delete(question.id);
        updateLive();
      });

      const text = document.createElement("div");
      text.className = "orderText";
      text.textContent = label;

      row.appendChild(sel);
      row.appendChild(text);
      rightCol.appendChild(row);
    });

    box.appendChild(leftCol);
    box.appendChild(rightCol);
    elForm.appendChild(box);
  }


  else if (question.type === "order") {
    const prevOrd = Array.isArray(prev) ? prev : Array(question.items.length).fill("");

    question.items.forEach((s, i) => {
      const row = document.createElement("div");
      row.className = "orderRow";

      const sel = document.createElement("select");
      sel.className = "miniSelect";
      sel.dataset.oidx = String(i);

      const opt0 = document.createElement("option");
      opt0.value = "";
      opt0.textContent = "—";
      sel.appendChild(opt0);

      for (let n = 1; n <= question.items.length; n++) {
        const o = document.createElement("option");
        o.value = String(n);
        o.textContent = String(n);
        sel.appendChild(o);
      }

      sel.value = prevOrd[i] ? String(prevOrd[i]) : "";

      sel.addEventListener("change", () => {
        collectAnswer();
        checked.delete(question.id);
        earned.delete(question.id);
        updateLive();
      });

      const txt = document.createElement("div");
      txt.className = "orderText";
      txt.textContent = s;

      row.appendChild(sel);
      row.appendChild(txt);
      elForm.appendChild(row);
    });
  }

  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === questions.length - 1;
}


function collectAnswer() {
  const q = questions[idx];

  if (q.type === "single" || q.type === "multi") {
    const inputs = [...elForm.querySelectorAll("input")];
    const selected = inputs.filter(i => i.checked).map(i => Number(i.value));
    answers.set(q.id, q.type === "single" ? selected.slice(0,1) : selected);
    return;
  }

  if (q.type === "fill") {
    const v = document.getElementById("fillInput")?.value ?? "";
    answers.set(q.id, v);
    return;
  }

  if (q.type === "match") {
    const sels = [...elForm.querySelectorAll("select[data-ridx]")];
    const arr = sels.map(s => s.value ? Number(s.value) : "");
    answers.set(q.id, arr);
    return;
  }

  if (q.type === "order") {
    const sels = [...elForm.querySelectorAll("select[data-oidx]")];
    const arr = sels.map(s => s.value ? Number(s.value) : "");
    answers.set(q.id, arr);
    return;
  }
}


function showFeedback(isCorrect, details) {
  elFeedback.classList.remove("hidden");
  elFeedback.classList.toggle("ok", isCorrect);
  elFeedback.classList.toggle("bad", !isCorrect);
  elFeedback.textContent = details;
}

function checkCurrent() {
  const q = questions[idx];
  collectAnswer();

  const selected = answers.get(q.id);


  let isCorrect = false;

  if (q.type === "single" || q.type === "multi") {
    isCorrect = sameSet(Array.isArray(selected) ? selected : [], q.correct);
  } 
  else if (q.type === "fill") {
    const user = normalizeNoSpaceLower(selected || "");
    const accepted = Array.isArray(q.accept) ? q.accept : [];
    isCorrect = accepted.some(a => normalizeNoSpaceLower(a) === user);
  } 
  else if (q.type === "match" || q.type === "order") {
    isCorrect = arraysEqual(Array.isArray(selected) ? selected : [], q.correct);
  }


  checked.add(q.id);
  earned.set(q.id, isCorrect ? q.points : 0);
  updateLive();


  let msg = "";

  if (isCorrect) {
    msg += `ТАЧНО (+${q.points}p). \n`;
    msg += (q.explain && q.explain.correct) ? q.explain.correct : "Tačan odgovor.";
  } else {
    msg += `НЕТАЧНО (+0p).  \n` ;

    
    if (q.explain && q.explain.correct) {
      msg += q.explain.correct;
    } else {
      msg += "ПОГРЕШАН ОДГОВОР.";
    }


    if (q.type === "single" || q.type === "multi") {
      const selArr = Array.isArray(selected) ? selected : [];
      const wrongNotes = [];

  
      for (const i of selArr) {
        if (!q.correct.includes(i) && q.explain && q.explain.wrong && q.explain.wrong[i]) {
          wrongNotes.push(`${q.explain.wrong[i]}`);
        }
      }
    
      for (const i of q.correct) {
        if (!selArr.includes(i)) {
          wrongNotes.push(`\nТАЧАН ОДГОВОР: \n"${q.options[i]}". `);
        }
      }

      if (wrongNotes.length) msg += "\n" + wrongNotes.join("\n");
    }
    else if (q.type === "fill") {
      const accepted = Array.isArray(q.accept) ? q.accept : [];
      if (accepted.length) {
        msg += "\n Aдекватано решење: " + accepted[0];
      }
    }
    else if (q.type === "match" || q.type === "order") {
      msg += "\n Тачно решење: " + JSON.stringify(q.correct);
    }
  }

  showFeedback(isCorrect, msg);
}


function updateLive() {
  elLiveScore.textContent = currentEarnedTotal();
}

function finish() {
  elFinalScore.textContent = currentEarnedTotal();
  elFinalTotal.textContent = totalPoints();

  elSummary.innerHTML = "";

  for (const q of questions) {
    const got = earned.get(q.id) || 0;
    const user = answers.get(q.id);
    const corr = q.correct;

    let userText = "—";
    let corrText = "—";

    if (q.type === "single" || q.type === "multi") {
      const ua = Array.isArray(user) ? user : [];
      userText = ua.length ? ua.map(i => `(${i + 1}) ${q.options[i]}`).join(" | ") : "—";
      corrText = Array.isArray(corr) ? corr.map(i => `(${i + 1}) ${q.options[i]}`).join(" | ") : "—";
    }

    else if (q.type === "fill") {
      userText = (typeof user === "string" && user.trim()) ? user.trim() : "—";
     
      corrText = (q.explain && q.explain.correct) ? q.explain.correct : (Array.isArray(q.accept) && q.accept[0]) ? q.accept[0] : "—";
    }

    else if (q.type === "match") {
      
      const ua = Array.isArray(user) ? user : [];
      const ca = Array.isArray(corr) ? corr : [];

      userText = q.match?.right?.map((rLabel, rIdx) => {
        const pick = ua[rIdx];
        const leftTxt = (pick && q.match?.left?.[pick - 1]) ? q.match.left[pick - 1] : "—";
        return `${rLabel} → ${pick || "—"} (${leftTxt})`;
      }).join(" | ") || "—";

      corrText = q.match?.right?.map((rLabel, rIdx) => {
        const pick = ca[rIdx];
        const leftTxt = (pick && q.match?.left?.[pick - 1]) ? q.match.left[pick - 1] : "—";
        return `${rLabel} → ${pick || "—"} (${leftTxt})`;
      }).join(" | ") || "—";
    }

    else if (q.type === "order") {
      
      const ua = Array.isArray(user) ? user : [];
      const ca = Array.isArray(corr) ? corr : [];

     
      const buildOrderView = (arr) => {
        if (!Array.isArray(arr) || !arr.length) return "—";
        const pairs = q.items.map((txt, i) => ({ txt, pos: arr[i] }));
        pairs.sort((a, b) => (Number(a.pos) || 999) - (Number(b.pos) || 999));
        return pairs.map(p => `${p.pos || "—"}) ${p.txt}`).join(" | ");
      };

      userText = buildOrderView(ua);
      corrText = buildOrderView(ca);
    }

    const item = document.createElement("div");
    item.className = "summaryItem";
    item.innerHTML = `
      <strong>Zadatak ${q.id} — ${got}/${q.points}p</strong>
      <div class="muted small">Tvoj odgovor: ${escapeHtml(userText)}</div>
      <div class="muted small">Tačno: ${escapeHtml(corrText)}</div>
    `;
    elSummary.appendChild(item);
  }

  setScreen("result");
}


function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
}

function resetAll() {
  idx = 0;
  answers = new Map();
  checked = new Set();
  earned = new Map();
  elLiveScore.textContent = "0";
  render();
}

// ------- Events -------
btnStart.addEventListener("click", () => {
  setScreen("quiz");
  render();
});

btnResetAll.addEventListener("click", () => {
  resetAll();
});

btnPrev.addEventListener("click", () => {
  collectAnswer();
  if (idx > 0) idx--;
  render();
});

btnNext.addEventListener("click", () => {
  collectAnswer();
  if (idx < questions.length - 1) idx++;
  render();
});

btnCheck.addEventListener("click", () => {
  checkCurrent();
});

btnFinish.addEventListener("click", () => {
  collectAnswer();
  finish();
});

btnReview.addEventListener("click", () => {
  
  setScreen("quiz");
  idx = 0;
  render();
});

btnRestart.addEventListener("click", () => {
  resetAll();
  setScreen("start");
});

// Init
elLiveTotal.textContent = totalPoints();
elLiveCount.textContent = questions.length;
elLiveIndex.textContent = "0";
