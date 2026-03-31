window.QUIZ_PITANJA_BAZE_PODATAKA = [
  {
    id: 208,
    points: 2,
    type: "single",
    text: "Међу понуђеним ентитетима, одредити ентитет са атрибутима који НИСУ одговарајући. Заокружити број испред траженог одговора:",
    options: [
      "Ентитет: СТУДЕНТ – Атрибути: име, презиме, смер, број бодова, просек",
      "Ентитет: ДРЖАВА – Атрибути: назив, број становника, површина",
      "Ентитет: КЊИГА – Атрибути: наслов, аутор, година издања, издавач, адреса издавача, телефон издавача",
      "Ентитет: АВИОН – Атрибути: произвођач, марка, година производње, број седишта"
    ],
    correct: [2],
    explain: {
      correct: "Tačno: Ентитет: КЊИГА – Атрибути: наслов, аутор, година издања, издавач, адреса издавача, телефон издавача",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 209,
    points: 2,
    type: "single",
    text: "Заокружите тачан исказ:",
    options: [
      "Примарни кључ је атрибут који мора бити целобројног типа.",
      "Примарни кључ је атрибут који указује на зависност од неке друге табеле.",
      "Примарни кључ је атрибут који јединствено идетификује врсте у табели.",
      "Ако табела садржи вишевредносни атрибут, њему се додељује функција примарног кључа."
    ],
    correct: [2],
    explain: {
      correct: "Tačno: Примарни кључ је атрибут који јединствено идетификује врсте утабели.",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 210,
    points: 2,
    type: "single",
    text: "Заокружити број испред траженог одговора. Одредити оператор који би требало користити у WHERE клаузули SELECT наредбе да би били приказани само они ученици чије презиме почиње словом А:",
    options: [
      "IN",
      "LIKE",
      "BETWEEN",
      "IS LIKE",
      "BEGINS WITH"
    ],
    correct: [1],
    explain: {
      correct: "Tačno: LIKE",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 211,
    points: 2,
    type: "single",
    text: "Заокружити број испред траженог одговора. Табела UCENICI поред осталих података, садржи и вредност стипендије. Одредити оператор који треба употребити у WHERE клаузули SELECT наредбе да би били приказани сви ученици код којих није позната и није унета вредност у колону stipendija:",
    options: [
      "=NULL",
      "ISNULL",
      "==NULL 1",
      "IS NULL",
      "LIKE NULL"
    ],
    correct: [3],
    explain: {
      correct: "Tačno: IS NULL",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 212,
    points: 2,
    type: "single",
    text: "Дат је упит: SELECT * FROM ucenici WHERE odeljenje=4 OR odeljenje=7 OR odeljenje=10. Заокружити оператор који треба користити у датом упиту да би се избегло вишеструко коришћење оператора OR:",
    options: [
      "LIKE",
      "BETWEEN",
      "AND",
      "IN"
    ],
    correct: [3],
    explain: {
      correct: "Tačno: IN",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 213,
    points: 2,
    type: "single",
    text: "Заокруживањем редног броја обележити клаузулу коју је потребно користити уколико листа иза резервисане речи SELECT садржи агрегатну функцију и једну или више колона које нису део агрегатне функције:",
    options: [
      "HAVING клаузулу",
      "GROUP BY клаузулу",
      "JOIN клаузулу",
      "ORDER BY клаузулу"
    ],
    correct: [1],
    explain: {
      correct: "Tačno: GROUP BY клаузулу",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 214,
    points: 2,
    type: "single",
    text: "Заокружити тачан исказ:",
    options: [
      "Кардиналност неке везе представља однос броја објеката који се повезују.",
      "Кардиналност неке везе представља апстракцију у којој се скуп сличних типова објеката представља општим генеричким типом (надтипом).",
      "Кардиналност неке везе одређује опционалност учешћа у вези.",
      "Кардиналност показује колико кандидата за примарни кључ има неки тип ентитета."
    ],
    correct: [0],
    explain: {
      correct: "Tačno: Кардиналност неке везе представља однос броја објеката који се повезују.",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 215,
    points: 2,
    type: "single",
    text: "Дата је табела PROJEKAT над којом се извршава упит: ALTER TABLE PROJEKAT ADD RokKraj date. Одредити шта ће се десити након извршења упита. Заокружити број испред траженог одговора.",
    sql: `
ALTER TABLE PROJEKAT
ADD RokKraj date
    `,
    options: [
      "у табелу PROJEKAT додаје се ограничење RokKraj",
      "у табелу PROJEKAT додаје се колона RokKraj",
      "у табели PROJEKAT биће преименована колона",
      "у базу података додаје се табела PROJEKAT са само једном колоном",
      "у табели PROJEKAT промениће се тип података у колони RokKraj"
    ],
    correct: [1],
    explain: {
      correct: "Tačno: утабелу PROJEKAT додаје се колона RokKraj",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 216,
    points: 2,
    type: "single",
    text: "Data je tabela RADNIK i upit. Odrediti šta je rezultat upita. Zaokružiti broj ispred traženog odgovora:",
    tableTitle: "Tabela RADNIK",
    table: {
      headers: ["IDBR", "IME", "PREZIME", "PLATA", "PREMIJA", "DATZAP"],
      rows: [
        ["6234", "Marko", "Pavlović", "1300", "3000", "1990-12-17"],
        ["6789", "Janko", "Nikolić", "3900", "10", "1999-12-23"]
      ]
    },
    sql: `
SELECT Ime, Prezime, DATEDIFF(year, DatZap, GETDATE()) AS God
FROM Radnik
    `,
    options: [
      "Tabela sa podacima o imenima i prezimenima radnika",
      "Tabela sa podacima o imenima, prezimenima i broju godina koje su protekle od datuma zaposlenja radnika do kraja veka",
      "Tabela sa podacima o imenima, prezimenima i datumima zaposlenja radnika",
      "Tabela sa podacima o imenima, prezimenima i broju godina koje su protekle od datuma zaposlenja radnika do trenutnog datuma"
    ],
    correct: [3],
    explain: {
      correct: "Tačno: Tabela sa podacima o imenima, prezimenima i broju godina koje su protekle od datuma zaposlenja radnika do trenutnog datuma",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 217,
    points: 2,
    type: "single",
    text: "Date su tabele RADNIK i ODELJENJE i upit. Odrediti rezultat izvršavanja datog upita. Zaokružiti broj ispred traženog odgovora:",
    tables: [
      {
        title: "Tabela RADNIK",
        headers: ["IDBR", "IME", "PREZIME", "PLATA", "BROD"],
        rows: [
          ["5900", "Slobodan", "Golubović", "900", "10"],
          ["5932", "Mitar", "Gavrilović", "600", "10"],
          ["5953", "Persida", "Kosanović", "1100", "20"],
          ["6234", "Marko", "Pavlović", "1300", "30"],
          ["6789", "Janko", "Nikolić", "800", "10"]
        ]
      },
      {
        title: "Tabela ODELJENJE",
        headers: ["BROD", "IMEOD", "MESTO"],
        rows: [
          ["50", "Skladišta", "Zemun"],
          ["30", "Marketing", "Vračar"],
          ["10", "Plasman", "Surčin"],
          ["20", "Direkcija", "Grocka"],
          ["40", "Nabavka", "Barajevo"]
        ]
      }
    ],
    sql: `
SELECT Imeod, AVG(Plata) AS ProsekPlata
FROM Radnik, Odeljenje
WHERE Odeljenje.Brod = Radnik.Brod
GROUP BY Imeod
HAVING AVG(Plata) > 1000
    `,
    options: [
      "Upit se ne izvršava zato što grupisanje mora da se izvrši ne samo po nazivu odeljenja, nego i po šifri odeljenja (BrOd)",
      "Grupišu se po odeljenjima radnici sa platom većom od prosečne plate",
      "Prikazuju se nazivi odeljenja i visina prosečne plate u njima samo za odeljenja u kojima je prosečna plata veća od 1000",
      "Prikazuju se nazivi odeljenja i visina prosečne plate u njima, pri čemu se kod određivanja proseka uzimaju u obzir samo plate veće od 1000"
    ],
    correct: [2],
    explain: {
      correct: "Tačno: Prikazuju se nazivi odeljenja i visina prosečne plate u njima samo za odeljenja u kojima je prosečna plata veća od 1000",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 218,
    points: 2,
    type: "single",
    text: "Date su tabele RADNIK i ODELJENJE i upit. Odrediti šta se vidi kao rezultat datog upita. Zaokružiti broj ispred traženog odgovora:",
    tables: [
      {
        title: "Tabela RADNIK",
        headers: ["IDBR", "IME", "PREZIME", "PLATA", "BROD"],
        rows: [
          ["5900", "Slobodan", "Golubović", "900", "10"],
          ["5932", "Mitar", "Gavrilović", "600", "30"],
          ["6234", "Marko", "Pavlović", "1300", "30"],
          ["6789", "Janko", "Nikolić", "800", "10"]
        ]
      },
      {
        title: "Tabela ODELJENJE",
        headers: ["BROD", "IMEOD", "MESTO"],
        rows: [
          ["50", "Skladišta", "Zemun"],
          ["30", "Marketing", "Vračar"],
          ["10", "Plasman", "Surčin"],
          ["20", "Direkcija", "Grocka"]
        ]
      }
    ],
    sql: `
SELECT Odeljenje.Imeod, Radnik.Ime + ' ' + Radnik.Prezime AS PunoIme
FROM Odeljenje
LEFT JOIN Radnik ON Radnik.Brod = Odeljenje.Brod
    `,
    options: [
      "Nazivi svih odeljenja – i onih u kojima ima radnika i onih gde niko nije raspoređen – sa brojem radnika u svakom odeljenju",
      "Za svakog raspoređenog radnika prikazuje se po jedan red sa nazivom odeljenja i punim imenom radnika, dok se za radnike koji nisu raspoređeni prikazuje samo puno ime radnika",
      "Prikazuje se po jedan red za svakog raspoređenog radnika sa nazivom odeljenja i punim imenom radnika. Za radnike koji nisu raspoređeni, kao i za odeljenja u koja niko nije raspoređen, ne formiraju se redovi u rezultujućoj tabeli",
      "Za svako odeljenje se prikazuje onoliko redova koliko radnika radi u tom odeljenju, dok se za odeljenja u kojima niko ne radi prikazuje po jedan red sa nazivom odeljenja"
    ],
    correct: [3],
    explain: {
      correct: "Tačno: Za svako odeljenje se prikazuje onoliko redova koliko radnika radi u tom odeljenju, dok se za odeljenja u kojima niko ne radi prikazuje po jedan red sa nazivom odeljenja",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 219,
    points: 2,
    type: "single",
    text: "Date su tabele RADNIK i ODELJENJE i upit. Odrediti prikaz koji je rezultat datog upita. Zaokružiti broj ispred traženog odgovora:",
    tables: [
      {
        title: "Tabela RADNIK",
        headers: ["IDBR", "IME", "PREZIME", "PLATA", "BROD"],
        rows: [
          ["5900", "Slobodan", "Golubović", "900", "10"],
          ["5932", "Mitar", "Gavrilović", "600", "10"],
          ["5953", "Persida", "Kosanović", "1100", "20"],
          ["6234", "Marko", "Pavlović", "1300", "30"],
          ["6789", "Janko", "Nikolić", "800", "10"]
        ]
      },
      {
        title: "Tabela ODELJENJE",
        headers: ["BROD", "IMEOD", "MESTO"],
        rows: [
          ["50", "Skladišta", "Zemun"],
          ["30", "Marketing", "Vračar"],
          ["10", "Plasman", "Surčin"],
          ["20", "Direkcija", "Grocka"],
          ["40", "Nabavka", "Barajevo"]
        ]
      }
    ],
    sql: `
SELECT Odeljenje.Brod, Odeljenje.Imeod, COUNT(*)
FROM Radnik
INNER JOIN Odeljenje ON Radnik.Brod = Odeljenje.Brod
GROUP BY Odeljenje.Brod, Odeljenje.Imeod
    `,
    options: [
      "Brojeva i naziva svih odeljenja",
      "Brojeva i naziva svih odeljenja sa brojem radnika u njima",
      "Brojeva i naziva odeljenja u kojima ima radnika sa brojem radnika u njima",
      "Brojeva i naziva odeljenja u kojima nema radnika"
    ],
    correct: [2],
    explain: {
      correct: "Tačno: Brojeva i naziva odeljenja u kojima ima radnika sa brojem radnika u njima",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 220,
    points: 2,
    type: "single",
    text: "Извршава се следећа SELECT наредба. Заокруживањем броја испред одговарајућег исказа, одредити које ће вредности бити приказане:",
    sql: `
SELECT MIN(Datum_Zaposlenja), Odsek_Id
FROM Zaposleni
GROUP BY Odsek_Id
    `,
    options: [
      "Најранији датум запослења за сваки одсек предузећа.",
      "Најранији датум запослења у целом предузећу.",
      "Датум запослења последњег запосленог радника у целом предузећу.",
      "Датум запослења последњег запосленог радника за сваки одсек.",
      "Датум запослења најстаријег запосленог радника у сваком одсеку предузећа."
    ],
    correct: [0],
    explain: {
      correct: "Tačno: Најранији датум запослења за сваки одсек предузећа.",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 221,
    points: 2,
    type: "single",
    text: "Потребно је креирати извештај који приказује имена свих производа чија је цена већа од просечне цене свих производа. Заокружити број испред упита који одговара постављеном задатку:",
    options: [
      "SELECT naziv FROM proizvod WHERE cena > (SELECT AVG(cena) FROM proizvod)",
      "SELECT naziv FROM proizvod WHERE cena > AVG(cena)",
      "SELECT naziv FROM proizvod GROUP BY naziv HAVING cena > AVG(cena)",
      "SELECT naziv FROM (SELECT AVG(cena) FROM proizvod) WHERE cena > AVG(cena)"
    ],
    correct: [0],
    explain: {
      correct: "Tačno: SELECT naziv FROM proizvod WHERE cena > (SELECT AVG(cena) FROM proizvod)",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 222,
    points: 2,
    type: "single",
    text: "Извршава се упит испод. Наредба се неће извршити. Заокружити број испред разлога услед кога се наредба неће извршити:",
    sql: `
SELECT prezime, ime, email
FROM ucenik
ORDER BY prezime
WHERE prosek >= 4.50
    `,
    options: [
      "Наредба се неће извршити једино ако нема ни једног одличног ученика.",
      "Услов треба написати у HAVING клаузули",
      "Потребно је назначити редослед сортирања (ASC, DESC).",
      "Потребно је променити редослед клаузула."
    ],
    correct: [3],
    explain: {
      correct: "Tačno: Потребно је променити редослед клаузула.",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 223,
    points: 2,
    type: "single",
    text: "Табела ARTIKLI садржи следеће колоне: artikl_id, naziv, kategorija, cena, kolicina. Потребно је да се прикаже категорија и минимална цена артикла у свакој категорији. При томе се тражи приказ само оних категорија где је најмања цена производа већа од задате граничне вредности која се преноси упиту кроз параметар @granica. Изабрати упит који даје тражени извештај:",
    options: [
      "SELECT kategorija, MIN(cena) FROM artikli WHERE MIN(cena)>@granica GROUP BY cena",
      "SELECT kategorija, MIN(cena) FROM artikli GROUP BY kategorija HAVING MIN(cena)>@granica",
      "SELECT kategorija, MIN(cena) FROM artikli GROUP BY MIN(cena), kategorija HAVING MIN(cena)>@granica",
      "SELECT kategorija, MIN(cena) FROM artikli WHERE MIN(cena)>@granica GROUP BY kategorija"
    ],
    correct: [1],
    explain: {
      correct: "Tačno: SELECT kategorija, MIN(cena) FROM artikli GROUP BY kategorija HAVING MIN(cena)>@granica",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 224,
    points: 2,
    type: "single",
    text: "Табела RADIONICA садржи следеће колоне: radionica_id, naziv, zanat, lokacija_id. Потребно је да се прикаже колико на свакој локацији има различитих заната. Заокружити број испред упита који даје тражени извештај:",
    options: [
      "SELECT DISTINCT lokacija_id, COUNT(zanat) FROM radionica GROUP BY lokacija_id",
      "SELECT lokacija_id, COUNT(zanat) FROM radionica GROUP BY lokacija_id",
      "SELECT lokacija_id, COUNT(DISTINCT zanat) FROM radionica GROUP BY lokacija_id",
      "SELECT lokacija_id, COUNT(DISTINCT zanat) FROM radionica GROUP BY zanat"
    ],
    correct: [2],
    explain: {
      correct: "Tačno: SELECT lokacija_id, COUNT(DISTINCT zanat) FROM radionica GROUP BY lokacija_id",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 225,
    points: 2,
    type: "single",
    text: "Заокружити број испред одговора који представља наставак датог исказа: Уколико поглед (view) треба користити за измену података у табели, поглед НЕ СМЕ садржати...",
    options: [
      "WHERE клаузулу",
      "Спој више табела",
      "Алијас колоне",
      "GROUP BY клаузулу"
    ],
    correct: [3],
    explain: {
      correct: "Tačno: GROUP BY клаузулу",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 226,
    points: 2,
    type: "single",
    text: "Дат је упит за креирање погледа и наведени искази који се односе на дати упит. Заокружити број испред тачног исказа:",
    sql: `
CREATE VIEW Pregled_Proseka AS
SELECT UcenikID, Ime, Prezime, AVG(Ocena) AS Prosek
FROM Testovi
WHERE OdeljenjeID IN (1, 2, 3, 4)
GROUP BY UcenikID, Ime, Prezime
    `,
    options: [
      "Подаци у табели Testovi се могу модификовати коришћењем погледа",
      "Коришћењем датог погледа, подаци се могу само додавати у табелу Testovi, али не и мењати",
      "Овако дат упит изазива грешку при извршењу",
      "Коришћењем датог погледа, подаци из табеле Testovi се могу само прегледавати, али не и додавати или мењати"
    ],
    correct: [3],
    explain: {
      correct: "Tačno: Коришћењем датог погледа, подаци из табеле Testovi се могу само прегледавати, али не идодавати или мењати",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 227,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред тражених одговора. Међу понуђеним алатима, обележити CASE алате:",
    options: [
      "Rational Rose",
      "Oracle Designer",
      ".NET",
      "Microsoft Visio",
      "Java",
      "SQL Express"
    ],
    correct: [0, 1, 3],
    explain: {
      correct: "Tačno: Rational Rose | Oracle Designer | Microsoft Visio",
      wrong: ["", "", "", "", "", ""]
    }
  },
  {
    id: 228,
    points: 2,
    type: "multi",
    text: "Обележити команде које се сматрају командама ажурирања података у бази података. Заокружити бројеве испред тражених одговора:",
    options: [
      "Организовање података",
      "Додавање нових података",
      "Брисање старих података",
      "Враћање оштећених података у коректно стање",
      "Измена постојећих података",
      "Додела права приступа подацима",
      "Измена структуре постојећих табела у бази"
    ],
    correct: [1, 2, 4],
    explain: {
      correct: "Tačno: Додавање нових података | Брисање старих података | Измена постојећих података",
      wrong: ["", "", "", "", "", "", ""]
    }
  },
  {
    id: 229,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред тражених одговора. За упите са специфицираним редоследом приказа врста у резултујућој табели користи се клаузула ORDER BY после које се наводи назив колоне:",
    options: [
      "и службена реч ASC за растући редослед",
      "и службена реч DESC за опадајући редослед",
      "и службена реч ASC за опадајући редослед",
      "и службена реч DESC за растући редослед",
      "службена реч се може изоставити при чему се добија растући поредак",
      "службена реч се може изоставити при чему се добија опадајући поредак"
    ],
    correct: [0, 1, 4],
    explain: {
      correct: "Tačno: и службена реч ASC за растући редослед | и службена реч DESC за опадајући редослед | службена реч се може изоставити при чему се добија растући поредак",
      wrong: ["", "", "", "", "", ""]
    }
  },
  {
    id: 230,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред наредби које служе за креирање, брисање и измену структуре релационе базе и објеката који чине релациону базу:",
    options: [
      "ALTER TABLE",
      "INSERT",
      "CREATE TABLE",
      "DROP TABLE",
      "UPDATE",
      "DELETE TABLE",
      "ADD COLUMN",
      "ADD CONSTRAINT"
    ],
    correct: [0, 2, 3],
    explain: {
      correct: "Tačno: ALTER TABLE | CREATE TABLE | DROP TABLE",
      wrong: ["", "", "", "", "", "", "", ""]
    }
  },
  {
    id: 231,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред тражених одговора. Одредити ентитете који садрже одговарајуће атрибуте:",
    options: [
      "Ентитет: КЊИГА – Атрибути: наслов, аутор, издавач, година издања",
      "Ентитет: АУТОМОБИЛ – Атрибути: марка, година производње, боја, власник, година рођења власника, регистарски број",
      "Ентитет: УЧЕНИК – Атрибути: име, презиме, разред, одељење, број оправданих, број неоправданих, просек",
      "Ентитет: ДРЖАВА – Атрибути: назив, број становника, површина, главни град, број становника главног града, име градоначелника главног града"
    ],
    correct: [0, 2],
    explain: {
      correct: "Tačno: Ентитет: КЊИГА – Атрибути: наслов, аутор, издавач, година издања | Ентитет: УЧЕНИК – Атрибути: име, презиме, разред, одељење, број оправданих, број неоправданих, просек",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 232,
    points: 2,
    type: "multi",
    text: "Дати су искази који се односе на спољашњи кључ табеле (foreign key constraint). Заокружити бројеве испред тачних исказа:",
    options: [
      "Вредност у пољу спољашњег кључа не сме бити NULL",
      "Вредност спољашњег кључа мора бити јединствена (UNIQUE) у колони над којом је постављено ограничење спољашњег кључа",
      "Вредност у пољу спољашњег кључа мора бити или NULL или једнака некој од вредности из колоне на коју спољашњи кључ референцира",
      "Више редова у табели може садржати исту вредност у пољу спољашњег кључа и тиме показивати на исти ред у референцираној табели",
      "Колона спољашњег кључа не мора садржати исти тип података као колона на коју спољашњи кључ референцира"
    ],
    correct: [2, 3],
    explain: {
      correct: "Tačno: Вредност упољу спољашњег кључа мора бити или NULL или једнака некој од вредности из колоне на коју спољашњи кључ референцира | Више редова утабели може садржати исту вредност упољу спољашњег кључа итиме показивати на исти ред уреференцираној табели",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 233,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред тражених одговора. Означити операторе који се НЕ МОГУ користити за поређење са подупитом који враћа више вредности:",
    options: [
      "ALL",
      "ANY",
      "BETWEEN",
      "SOME",
      "LIKE",
      "IN"
    ],
    correct: [2, 4],
    explain: {
      correct: "Tačno: BETWEEN | LIKE",
      wrong: ["", "", "", "", "", ""]
    }
  },
  {
    id: 234,
    points: 2,
    type: "single",
    text: "Дата је табела Kupci са структуром и табела NoviKupci са структуром. Извршава се упит испод. Одредити шта је резултат извршења датог упита. Заокружити број испред траженог одговора:",
    afterTableText: "Kupci: ( Id int primary key, Prezime varchar(50), Adresa varchar(50), Mesto varchar(20), Telefon varchar(5), Status varchar(8) )\nNoviKupci: ( Id int primary key, Prezime varchar(50), Telefon varchar(20), Status varchar(8) )",
    sql: `
INSERT INTO NoviKupci
SELECT *
FROM Kupci
WHERE Status <> 'Aktivan'
    `,
    options: [
      "Како табела NoviKupci има све колоне које постоје и у табели Kupci, упит се извршава без грешке и у табелу NoviKupci се уписују записи из табеле Kupci са статусом који није Aktivan",
      "Упит се не извршава, пријављује грешку јер се број колона у табели Kupci разликује од броја колона у табели NoviKupci",
      "Упит би се извршио без грешке да су у SELECT клаузули подупита, уместо * наведене све колоне табеле Kupci које имају своју одговарајућу колону у табели NoviKupci",
      "Упит јавља грешку због покушаја уписа вредности у поље примарног кључа који је аутоматски, тј. креира га сама база"
    ],
    correct: [1],
    explain: {
      correct: "Tačno: Упит се не извршава, пријављује грешку јер се број колона утабели Kupci разликује од броја колона утабели NoviKupci",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 235,
    points: 2,
    type: "multi",
    text: "Date su tabele RADNIK i ODELJENJE i upit u uskladištenoj proceduri. Odrediti koji od ponuđenih iskaza su tačni. Zaokružiti brojeve ispred traženih odgovora:",
    tables: [
      {
        title: "Tabela RADNIK",
        headers: ["IDBR", "IME", "PREZIME", "PLATA", "SIFRAOD"],
        rows: [
          ["5900", "Slobodan", "Golubović", "900", "10"],
          ["5932", "Mitar", "Gavrilović", "600", "20"],
          ["5953", "Persida", "Kosanović", "1100", "20"]
        ]
      },
      {
        title: "Tabela ODELJENJE",
        headers: ["SIFRAOD", "IMEOD", "MESTO"],
        rows: [
          ["10", "Marketing", "Vračar"],
          ["20", "Direkcija", "Grocka"],
          ["30", "Nabavka", "Barajevo"]
        ]
      }
    ],
    afterTableText: "Kreirana je uskladištena procedura sa parametrom:\n@br int = NULL",
    sql: `
UPDATE Radnik
SET Radnik.SifraOD = 30
WHERE Radnik.SifraOD = @br OR @br IS NULL
    `,
    options: [
      "Svi radnici koji rade u odeljenju sa šifrom jednakom vrednosti koja je preneta kroz parametar @br, biće preraspoređeni u odeljenje čija je šifra 30",
      "Upit raspoređuje sve neraspoređene radnike u odeljenje sa šifrom 30",
      "Ukoliko se parametru @br ne prenese vrednost, radnici koji su do tog momenta bili neraspoređeni, biće raspoređeni u odeljenje sa šifrom 30",
      "Ukoliko se parametru @br ne prenese vrednost, svi radnici će biti preraspoređeni u odeljenje čija je šifra 30"
    ],
    correct: [0, 3],
    explain: {
      correct: "Tačno: Svi radnici koji rade u odeljenju sa šifrom jednakom vrednosti koja je preneta kroz parametar @br, biće preraspoređeni u odeljenje čija je šifra 30 | Ukoliko se parametru @br ne prenese vrednost, svi radnici će biti preraspoređeni u odeljenje čija je šifra 30",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 236,
    points: 2,
    type: "multi",
    text: "Табела Zaposleni садржи поља: Zaposleni_Id, Ime, Prezime, Plata, Odsek_Id. Дат је упит испод. Заокружити бројеве испред ТАЧНИХ исказа:",
    sql: `
SELECT Zaposleni_Id, Ime, Prezime
FROM Zaposleni
WHERE Plata = (
  SELECT MAX(Plata)
  FROM Zaposleni
  GROUP BY Odsek_Id
)
    `,
    options: [
      "Упит се не извршава зато што у подупиту није дозвољено коришћење групних функција",
      "Упит се извршава без грешке и из сваког одељења бира и приказује податке о раднику који има највећу плату у том одељењу.",
      "Упит се не извршава јер подупит враћа више од једне врсте, а коришћен је оператор за поређење са једном вредношћу.",
      "Уколико би се изоставила GROUP BY клаузула, упит би се извршавао без грешке и приказао би једног или више радника са платом једнаком највећој плати (без обзира на одељење).",
      "Како подупит садржи груписање, да би се цео упит извршио без грешке, потребно је услов са подупитом написати у HAVING уместо у WHERE клаузули"
    ],
    correct: [2, 3],
    explain: {
      correct: "Tačno: Упит се не извршава јер подупит враћа више од једне врсте, акоришћен је оператор за поређење са једном вредношћу. | Уколико би се изоставила GROUP BY клаузула, упит би се извршавао без грешке иприказао би једног или више радника са платом једнакој највећој плати (без обзира на одељење).",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 237,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве под којима су наведене клаузуле SQL наредбе у којима се могу користити аритметичке операције:",
    options: [
      "SELECT",
      "FROM",
      "WHERE",
      "ORDER BY"
    ],
    correct: [0, 2, 3],
    explain: {
      correct: "Tačno: SELECT | WHERE | ORDER BY",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 238,
    points: 2,
    type: "multi",
    text: "Извршава се следећи упит. Одредити које две вредности може вратити ова наредба. Заокружити бројеве испред тражених вредности:",
    sql: `
SELECT cena
FROM proizvod
WHERE cena IN (101,125,150,350)
  AND (cena BETWEEN 125 AND 140 OR cena > 150)
    `,
    options: [
      "101",
      "150",
      "125",
      "110",
      "350"
    ],
    correct: [2, 4],
    explain: {
      correct: "Tačno: 125 | 350",
      wrong: ["", "", "", "", ""]
    }
  },
  {
    id: 239,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред команди које се могу користити за ажурирање постојећих података у бази:",
    options: [
      "DELETE",
      "MERGE",
      "SELECT",
      "UPDATE"
    ],
    correct: [0, 1, 3],
    explain: {
      correct: "Tačno: DELETE | MERGE | UPDATE",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 240,
    points: 2,
    type: "multi",
    text: "Креиране су табеле SKOLA и OSNOVNASKOLA, а затим су у табелу SKOLA уписани подаци. У табелу OSNOVNASKOLA треба уписати податке о основним школама преписивањем потребних вредности из табеле SKOLA. Заокружити бројеве испред упита који ће јавити грешку при извршењу:",
    code: `
create table Skola(
  skolaID int primary key,
  Naziv nvarchar(50),
  gradID int,
  tip nvarchar(50)
)

create table OsnovnaSkola(
  gimID int primary key,
  Naziv nvarchar(50),
  gradID int
)

insert into Skola values (101,'Nikola Tesla',20,'srednja strucna')
insert into Skola values (102,'Dusko Radovic',20,'osnovna')
insert into Skola values (103,'Sveti Sava',30,'osnovna')
insert into Skola values (104,'Bora Stankovic',20,'gimnazija')
    `,
    options: [
      "select * into OsnovneSkole from Skola where tip='osnovna'",
      "insert into OsnovneSkole select * from Skola where tip='osnovna'",
      "insert into OsnovneSkole(skolaID, Naziv) select s.skolaID, s.Naziv from Skola as s where tip='osnovna'",
      "insert into OsnovneSkole select s.skolaID, s.Naziv, s.gradID from Skola as s where tip='osnovna'"
    ],
    correct: [1, 2],
    explain: {
      correct: "Tačno: insert into OsnovneSkole select * from Skola where tip='osnovna' | insert into OsnovneSkole(skolaID, Naziv) select s.skolaID, s.Naziv from Skola as s where tip='osnovna'",
      wrong: ["", "", "", ""]
    }
  },
  {
    id: 241,
    points: 2,
    type: "multi",
    text: "Kreirane su i popunjene podacima tabele KORISNIK i PRIJATELJI. Njihova struktura i sadržaj dati su ispod. Izvršavanjem upita dobija se tabela sa podacima. Zaokruživanjem brojeva ispred ponuđenih odgovora, obeležiti koji od navedenih podataka će biti prikazani u pojedinim redovima rezultujuće tabele:",
    tables: [
      {
        title: "Tabela KORISNIK",
        headers: ["ID", "IME", "POL"],
        rows: [
          ["1", "Ana", "NULL"],
          ["2", "Steva", "m"],
          ["3", "Marta", "z"],
          ["4", "Petra", "z"]
        ]
      },
      {
        title: "Tabela PRIJATELJI",
        headers: ["Korisnik1", "Korisnik2"],
        rows: [
          ["1", "2"],
          ["1", "3"],
          ["2", "3"]
        ]
      }
    ],
    sql: `
SELECT k.Ime, COUNT(*) AS [broj prijatelja]
FROM Korisnik AS k
LEFT JOIN Prijatelji AS p
  ON p.Korisnik1 = k.ID OR p.Korisnik2 = k.ID
WHERE k.Pol = 'z'
GROUP BY k.ID, k.Ime
    `,
    options: [
      "Ana, 1",
      "Ana, 2",
      "Steva, 1",
      "Steva, 2",
      "Marta, 1",
      "Marta, 2",
      "Petra, 0",
      "Petra, 1"
    ],
    correct: [5, 7],
    explain: {
      correct: "Tačno: Marta, 2 | Petra, 1",
      wrong: ["", "", "", "", "", "", "", ""]
    }
  },
  {
    id: 242,
    points: 2,
    type: "multi",
    text: "Заокружити бројеве испред кључних речи које се НЕ КОРИСТЕ за обележавање ограничења (constraints) у језику SQL:",
    options: [
      "Foreign key",
      "Unique",
      "Distinct",
      "Check",
      "Convert",
      "Union",
      "Not Null",
      "Except"
    ],
    correct: [2, 4, 5, 7],
    explain: {
      correct: "Tačno: Distinct | Convert | Union | Except",
      wrong: ["", "", "", "", "", "", "", ""]
    }
  },
  {
    id: 243,
    points: 2,
    type: "multi",
    text: "Одредити ентитете који садрже одговарајуће атрибуте. Заокружити бројеве испред тражених одговора:",
    options: [
      "Ентитет: СТУДЕНТ – Атрибути: име, презиме, смер, број бодова, просек",
      "Ентитет: КЊИГА – Атрибути: наслов, аутор, година издања, издавач, адреса издавача, телефон издавача",
      "Ентитет: АВИОН – Атрибути: произвођач, марка, година производње, број седишта",
      "Ентитет: ДРЖАВА – Атрибути: назив, број становника, површина",
      "Ентитет: САЈАМ – Атрибути: назив, број излагача, покровитељ, адреса покровитеља, контакт особа покровитеља",
      "Ентитет: ТУРИСТИЧКА АГЕНЦИЈА – Атрибути: назив, адреса, година оснивања, власник, стручна квалификација власника, запослени, стручна квалификација запослених"
    ],
    correct: [0, 2, 3],
    explain: {
      correct: "Tačno: Ентитет: СТУДЕНТ – Атрибути: име, презиме, смер, број бодова, просек | Ентитет: АВИОН – Атрибути: произвођач, марка, година производње, број седишта | Ентитет: ДРЖАВА – Атрибути: назив, број становника, површина",
      wrong: ["", "", "", "", "", ""]
    }
  },
  {
    id: 244,
    points: 2,
    type: "multi",
    text: "Обележити ентитете код којих је извршен адекватан избор јединственог идентификатора. Заокружити бројеве испред тражених одговора:",
    options: [
      "јединствени матични број грађанина (ЈМБГ) за ентитет ОСОБА",
      "датум рођења за ентитет ОСОБА",
      "ИСБН број за ентитет КЊИГА",
      "регистарска ознака за АУТОМОБИЛ",
      "дестинација за ентитет АРАНЖМАН",
      "режисер за ентитет ФИЛМ"
    ],
    correct: [0, 2, 3],
    explain: {
      correct: "Tačno: јединствени матични број грађанина (ЈМБГ) за ентитет ОСОБА | ИСБН број за ентитет КЊИГА | регистарска ознака за АУТОМОБИЛ",
      wrong: ["", "", "", "", "", ""]
    }
  },
  {
    id: 245,
    points: 2,
    type: "multi",
    text: "Одредити тачан исказ о оператору ANY који се примењује са подупитом који враћа више вредности:",
    afterTableText: "TRUE ако било која од вредности подупита задовољава услов.",
    options: [
      "Оператор ANY може да се користи испред кључне речи DISTINCT.",
      "Оператор ANY врши поређење са свим вредностима које враћа подупит.",
      "Оператор ANY захтева да све вредности подупита задовоље услов.",
      "Оператору ANY може да претходи оператор LIKE или оператор IN.",
      "Оператору ANY мора да претходи оператор поређења (=, <>, >, >=, <, <=)",
      "Услов =ANY(скуп вредности) је еквивалентан услову IN (скуп вредности)"
    ],
    correct: [4, 5],
    explain: {
      correct: "Tačno: Оператору ANY мора да претходи оператор поређења (=, <>, >, >=, <, <=) | Услов =ANY(скуп вредности) је еквивалентан услову IN (скуп вредности)",
      wrong: ["", "", "", "", "", ""]
    }
  },
  {
    id: 246,
    points: 2,
    type: "multi",
    text: "Креирана је табела SKOLA, а затим су у њу уписани подаци. За дати упит треба проценити сценарио који ће се десити и заокруживањем редних бројева испред исказа означити могуће исходе:",
    code: `
create table Skola(
  skolaID int primary key,
  Naziv varchar(50)
)

insert into Skola values (101,'Nikola Tesla')
insert into Skola values (102,'Mihajlo Pupin')
insert into Skola values (103,'ETS Zemun')

select * into StrucneSkole from Skola
    `,
    options: [
      "Креира се копија табеле Skola - нова табела под именом StrucneSkole исте структуре као и табела Skola и у њу се преписују сви подаци из табеле Skola",
      "Уколико табела са именом StrucneSkole постоји у бази, креира се нова са другим именом",
      "Уколико табела са именом StrucneSkole постоји у бази, не креира се нова, само се у постојећу преписују редови из табеле Skola",
      "Уколико табела са именом StrucneSkole постоји у бази, упит јавља грешку",
      "Уколико се дода услов WHERE 1=2, упит се извршава, креира се нова табела исте структуре као и табела Skola, али се у њу не уписује ни један ред",
      "Уколико се дода услов WHERE 1=2, упит јавља грешку јер је 1=2 увек нетачно",
      "Упит јавља грешку јер се кључна реч INTO користи искључиво у комбинацији са INSERT"
    ],
    correct: [0, 3, 4],
    explain: {
      correct: "Tačno: Креира се копија табеле Skola - нова табела под именом StrucneSkole исте структуре као итабела Skola и уњу се преписују сви подаци из табеле Skola | Уколико табела са именом StrucneSkole постоји убази, упит јавља грешку | Уколико се дода услов where 1=2 упит се извршава, креира се нова табела исте структуре као итабела Skola, али се уњу не уписује ни један ред",
      wrong: ["", "", "", "", "", "", ""]
    }
  },
  {
    id: 247,
    points: 2,
    type: "fill",
    text: "Допунити реченицу наводећи назив нормалне форме: Уколико ни један атрибут релације није вишевредносни, нити композитни, тј. не може се раставити, кажемо да је релација у _________________________ нормалној форми.",
    placeholder: "",
    accept: [
      "prvoj",
      "1",
      "1nf",
      "I",
      "I normalnoj formi",
      "prva normalna forma",
      "1. normalna forma",
      "prva"
    ],
    explain: {
      correct: "Tačno: PRVOJ (tj. 1NF)",
      wrong: []
    }
  },
  {
    id: 248,
    points: 2,
    type: "fill",
    text: "Допунити реченицу наводећи назив нормалне форме: Уколико сви атрибути релације који нису део кључа зависе од сваког атрибута који је део кључа кажемо да је релација у _____________ нормалној форми.",
    placeholder: "",
    accept: [
      "drugoj",
      "2",
      "2nf",
      "II",
      "II normalnoj formi",
      "druga normalna forma",
      "2. normalna forma",
      "druga"
    ],
    explain: {
      correct: "Tačno: DRUGOJ (tj. 2NF)",
      wrong: []
    }
  },
  {
    id: 249,
    points: 2,
    type: "fill",
    text: "Допунити реченицу наводећи назив нормалне форме: Уколико сви некључни (споредни) атрибути релације не зависе од неког другог некључног атрибута, тј. ако не постоји транзитивна зависност било ког споредног атрибута од било ког кључа те релације, кажемо да је релација у _______________ нормалној форми.",
    placeholder: "",
    accept: [
      "trećoj",
      "trecoj",
      "3",
      "3nf",
      "III",
      "III normalnoj formi",
      "treća normalna forma",
      "3. normalna forma",
      "treca"
    ],
    explain: {
      correct: "Tačno: TREĆOJ (tj. 3)",
      wrong: []
    }
  },
  {
    id: 250,
    points: 1.5,
    type: "match",
    text: "Napisati na crtama ispred logičkih operacija redne brojeve njihovih prioriteta.",
    match: {
      left: [
        "1. najviši prioritet",
        "2. srednji prioritet",
        "3. najniži prioritet"
      ],
      right: [
        "OR",
        "NOT",
        "AND"
      ]
    },
    correct: [3, 1, 2],
    explain: {
      correct: "Tačno: OR → 3, NOT → 1, AND → 2",
      wrong: []
    }
  },
    {
    id: 251,
    points: 2.5,
    type: "match",
    text: "Data je tabela GEOGRAFIJA koja pored ostalih podataka sadrži nazive gradova i država (Naziv nvarchar(50)). Svakoj grupi gradova pridružiti po jedan uslov unosom rednog broja kojim je uslov numerisan na liniju ispred liste gradova.",
    match: {
      left: [
        "1. WHERE Naziv LIKE 'L__ %'",
        "2. WHERE Naziv LIKE '__ %N%'",
        "3. WHERE Naziv LIKE '% L%'",
        "4. WHERE Naziv LIKE '_L%'",
        "5. WHERE Naziv LIKE '__ %A'"
      ],
      right: [
        "SIJERA LEONE, SVETA LUCIJA",
        "LA VALETA, LA KORUNJA",
        "EL RENO, LA KORUNJA",
        "EL SALVADOR, EL RENO",
        "LAS VEGAS, LOS ANGELES"
      ]
    },
    correct: [2, 5, 3, 4, 1],
    explain: {
      correct: "Tačno: SIJERA LEONE, SVETA LUCIJA → 3 | LA VALETA, LA KORUNJA → 5 | EL RENO, LA KORUNJA → 2 | EL SALVADOR, EL RENO → 4 | LAS VEGAS, LOS ANGELES → 1",
      wrong: []
    }
  },
  {
    id: 252,
    points: 2.5,
    type: "match",
    text: "Ispisati na crtama ispred relacija redni broj pod kojim je navedena odgovarajuća kardinalnost veze.",
    match: {
      left: [
        "1. 1 : 1",
        "2. 1 : M",
        "3. M : M"
      ],
      right: [
        "VLASNIK – BROJ TELEFONA (SLUŽBENI)",
        "NASTAVNIK – PREDMET",
        "OSOBA – PASOŠ",
        "KUPAC – MODEL AUTOMOBILA",
        "UTAKMICA – GRAD DOMAĆIN"
      ]
    },
    correct: [1, 3, 1, 3, 2],
    explain: {
      correct: "VLASNIK – BROJ TELEFONA (SLUŽBENI) → 1 : 1 | NASTAVNIK – PREDMET → M : M | OSOBA – PASOŠ → 1 : 1 | KUPAC – MODEL AUTOMOBILA → M : M | UTAKMICA – GRAD DOMAĆIN → 1 : M",
      wrong: []
    }
  },
  {
    id: 253,
    points: 3,
    type: "order",
    text: "Upisati redni broj počev od 1 na liniju ispred rezervisane reči tako da odgovara redosledu navođenja pri formiranju upita.",
    items: [
      "GROUP BY",
      "WHERE",
      "SELECT",
      "ORDER BY",
      "FROM"
    ],
    correct: [4, 3, 1, 5, 2],
    explain: {
      correct: "Tačno: SELECT → 1, FROM → 2, WHERE → 3, GROUP BY → 4, ORDER BY → 5",
      wrong: []
    }
  },
  {
    id: 254,
    points: 3,
    type: "match",
    text: "Date su tabele RADNIK i ODELJENJE. Povezati upite i njihova značenja upisom broja upita na odgovarajuću liniju.",
    tables: [
      {
        title: "Tabela RADNIK",
        headers: ["IDBR", "IME", "PREZIME", "PLATA", "BROD"],
        rows: [
          ["5900", "Slobodan", "Golubović", "900", "10"],
          ["5932", "Mitar", "Gavrilović", "600", ""],
          ["5953", "Persida", "Kosanović", "1100", "20"],
          ["6234", "Marko", "Pavlović", "1300", "30"],
          ["6789", "Janko", "Nikolić", "800", "10"]
        ]
      },
      {
        title: "Tabela ODELJENJE",
        headers: ["BROD", "IMEOD", "MESTO"],
        rows: [
          ["50", "Skladišta", "Zemun"],
          ["30", "Marketing", "Vračar"],
          ["10", "Plasman", "Surčin"],
          ["20", "Direkcija", "Grocka"],
          ["40", "Nabavka", "Barajevo"]
        ]
      }
    ],
    match: {
      left: [
        "1. SELECT odeljenje.imeod, radnik.prezime FROM odeljenje INNER JOIN radnik ON radnik.brod = odeljenje.brod",
        "2. SELECT odeljenje.imeod, radnik.prezime FROM odeljenje LEFT JOIN radnik ON radnik.brod = odeljenje.brod",
        "3. SELECT odeljenje.imeod, radnik.prezime FROM odeljenje RIGHT JOIN radnik ON radnik.brod = odeljenje.brod"
      ],
      right: [
        "Prikazuje sve radnike (i koji jesu i koji nisu raspoređeni u odeljenja) i samo ona odeljenja u kojima ima radnika",
        "Prikazuje samo odeljenja u kojima ima radnika i samo radnike raspoređene u odeljenjima",
        "Prikazuje sva odeljenja (i ona u kojima ima i ona u kojima nema radnika) i samo one radnike koji su raspoređeni u odeljenja"
      ]
    },
    correct: [3, 1, 2],
    explain: {
      correct: "Tačno: svi radnici + samo odeljenja sa radnicima → 3 | samo odeljenja sa radnicima i samo raspoređeni radnici → 1 | sva odeljenja + samo raspoređeni radnici → 2",
      wrong: []
    }
  },
  {
  id: 255,
  points: 3,
  type: "match",
  text: "Date su tabele RADNIK i ODELJENJE. Povezati upite i njihova značenja upisom broja datog ispred opisa značenja upita na odgovarajuću liniju.",
  tables: [
    {
      title: "Tabela RADNIK",
      headers: ["IDBR", "IME", "PREZIME", "PLATA", "BROD"],
      rows: [
        ["5900", "Slobodan", "Golubović", "900", "10"],
        ["5932", "Mitar", "Gavrilović", "600", ""],
        ["5953", "Persida", "Kosanović", "1100", "20"],
        ["6234", "Marko", "Pavlović", "1300", "30"],
        ["6789", "Janko", "Nikolić", "800", "10"]
      ]
    },
    {
      title: "Tabela ODELJENJE",
      headers: ["BROD", "IMEOD", "MESTO"],
      rows: [
        ["50", "Skladišta", "Zemun"],
        ["30", "Marketing", "Vračar"],
        ["10", "Plasman", "Surčin"],
        ["20", "Direkcija", "Grocka"],
        ["40", "Nabavka", "Barajevo"]
      ]
    }
  ],
  match: {
    left: [
      "1. SELECT odeljenje.imeod, radnik.prezime FROM odeljenje LEFT JOIN radnik ON radnik.brod = odeljenje.brod WHERE radnik.brod IS NULL",
      "2. SELECT odeljenje.imeod, radnik.prezime FROM odeljenje FULL JOIN radnik ON radnik.brod = odeljenje.brod",
      "3. SELECT odeljenje.imeod, radnik.prezime FROM odeljenje RIGHT JOIN radnik ON radnik.brod = odeljenje.brod WHERE odeljenje.brod IS NULL"
    ],
    right: [
      "1. Prikazuje samo radnike koji nisu raspoređeni u odeljenja",
      "2. Prikazuje sve radnike (i koji jesu i koji nisu raspoređeni u odeljenja) i samo ona odeljenja u kojima ima radnika",
      "3. Prikazuje sva odeljenja - i ona u kojima ima i ona u kojima nema radnika i sve radnike – i one koji su raspoređeni u odeljenja, kao i one koji nisu raspoređeni",
      "4. Prikazuje samo odeljenja u kojima nema radnika"
    ]
  },
  correct: [4, 3, 1],
  explain: {
    correct: "Tačno: samo odeljenja u kojima nema radnika → 4 | FULL JOIN → 3 | samo radnici koji nisu raspoređeni → 1",
    wrong: []
  }
},
  {
    id: 256,
    points: 3,
    type: "match",
    text: "Na levoj strani su navedene kategorije SQL komandi, a sa desne su nabrojane komande. Na liniju ispred komande upisati broj pod kojim je navedena kategorija kojoj komanda pripada.",
    match: {
      left: [
        "1. DDL – Data Definition Language",
        "2. DML – Data Manipulation Language",
        "3. DCL – Data Control Language",
        "4. TCL – Transaction Control Language"
      ],
      right: [
        "GRANT",
        "UPDATE",
        "COMMIT",
        "DROP",
        "DELETE",
        "ALTER"
      ]
    },
    correct: [3, 2, 4, 1, 2, 1],
    explain: {
      correct: "Tačno: GRANT → 3 | UPDATE → 2 | COMMIT → 4 | DROP → 1 | DELETE → 2 | ALTER → 1",
      wrong: []
    }
  },
  {
    id: 257,
    points: 3,
    type: "match",
    text: "Tabela ZAPOSLENI je kreirana i popunjena izvršavanjem sledećih naredbi. Unošenjem rednog broja odgovarajućeg opisa na predviđenu liniju ispred upita, povezati upit i opis rezultata njegovog izvršenja.",
    code: `
create TABLE zaposleni(
  id INTEGER NOT NULL PRIMARY KEY,
  rukovodilacId INTEGER,
  ime VARCHAR(30) NOT NULL,
  FOREIGN KEY (rukovodilacId) REFERENCES zaposleni(id)
)

INSERT INTO zaposleni VALUES(1, NULL, 'Petar');
INSERT INTO zaposleni VALUES(2, 1, 'Mihajlo');
INSERT INTO zaposleni VALUES(3, 2, 'Milica');
INSERT INTO zaposleni VALUES(4, 3, 'Lazar');
INSERT INTO zaposleni VALUES(5, NULL, 'Sofija');
    `,
    match: {
      left: [
        "1. Svi radnici koji su rukovodioci nekom drugom radniku",
        "2. Svi radnici koji nisu rukovodioci nikom",
        "3. Svi radnici koji nemaju nadređene rukovodioce",
        "4. Svi radnici koji imaju nadređenog rukovodioca",
        "5. Prazna tabela"
      ],
      right: [
        "select * from zaposleni where id not in (select distinct rukovodilacId from zaposleni)",
        "select * from zaposleni where id not in (select rukovodilacId from zaposleni where rukovodilacId is not null)",
        "select * from zaposleni where rukovodilacId is null"
      ]
    },
    correct: [5, 2, 3],
    explain: {
      correct: "Tačno: id not in (select distinct rukovodilacId ...) → prazna tabela | id not in (select rukovodilacId where rukovodilacId is not null) → oni koji nisu rukovodioci nikom | rukovodilacId is null → oni koji nemaju nadređene rukovodioce",
      wrong: []
    }
  }
];