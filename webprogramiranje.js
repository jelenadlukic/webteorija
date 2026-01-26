const questions = window.QUIZ_PITANJA_WEB_PROGRAMIRANJE || [];


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
const elQCode = document.getElementById("qCode");
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


function fmtPts(n){
  const s = Number.isInteger(n) ? String(n) : String(n);
  return s.replace(".", ",");
}

function totalPoints() {
  return questions.reduce((s, q) => s + Number(q.points || 0), 0);
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
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
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

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#39;");
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

  elQPoints.textContent = fmtPts(question.points);

  elLiveTotal.textContent = fmtPts(totalPoints());
  elLiveCount.textContent = questions.length;
  elLiveIndex.textContent = idx + 1;
  elLiveScore.textContent = fmtPts(currentEarnedTotal());

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
  const question = questions[idx];

  if (question.type === "single" || question.type === "multi") {
    const inputs = [...elForm.querySelectorAll("input")];
    const selected = inputs.filter(i => i.checked).map(i => Number(i.value));
    answers.set(question.id, question.type === "single" ? selected.slice(0,1) : selected);
    return;
  }

  if (question.type === "fill") {
    const v = document.getElementById("fillInput")?.value ?? "";
    answers.set(question.id, v);
    return;
  }

  if (question.type === "match") {
    const sels = [...elForm.querySelectorAll("select[data-ridx]")];
    const arr = sels.map(s => s.value ? Number(s.value) : "");
    answers.set(question.id, arr);
    return;
  }

  if (question.type === "order") {
    const sels = [...elForm.querySelectorAll("select[data-oidx]")];
    const arr = sels.map(s => s.value ? Number(s.value) : "");
    answers.set(question.id, arr);
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
  const question = questions[idx];
  collectAnswer();

  const selected = answers.get(question.id);

  let isCorrect = false;

  if (question.type === "single" || question.type === "multi") {
    isCorrect = sameSet(Array.isArray(selected) ? selected : [], question.correct);
  } else if (question.type === "fill") {
    const user = normalizeNoSpaceLower(selected || "");
    const accepted = Array.isArray(question.accept) ? question.accept : [];
    isCorrect = accepted.some(a => normalizeNoSpaceLower(a) === user);
  } else if (question.type === "match" || question.type === "order") {
    isCorrect = arraysEqual(Array.isArray(selected) ? selected : [], question.correct);
  }

  checked.add(question.id);
  earned.set(question.id, isCorrect ? question.points : 0);
  updateLive();

  let msg = "";

  if (isCorrect) {
    msg += `ТАЧНО (+${fmtPts(question.points)}p). \n`;
    msg += question.explain?.correct || "Тачан одговор.";
  } else {
    msg += `НЕТАЧНО (+0p). \n`;
    msg += question.explain?.correct || "Погрешан одговор.";

    if (question.type === "single" || question.type === "multi") {
      const selArr = Array.isArray(selected) ? selected : [];
      const notes = [];

      for (const i of selArr) {
        const w = question.explain?.wrong?.[i];
        if (!question.correct.includes(i) && w) notes.push(w);
      }
      for (const i of question.correct) {
        if (!selArr.includes(i)) notes.push(`ТАЧАН ОДГОВОР: \n${question.options[i]} `);
      }
      if (notes.length) msg += "\n" + notes.join("\n");
    }

    if (question.type === "fill") {
      const accepted = Array.isArray(question.accept) ? question.accept : [];
      if (accepted.length) msg += `\nПРИМЕР ФОРМАТА: ${accepted[0]}`;
    }

    if (question.type === "match" || question.type === "order") {
      msg += `\nТАЧНО РЕШЕЊЕ: ${question.correct.join(", ")}`;
    }
  }

  showFeedback(isCorrect, msg);
}

function updateLive() {
  elLiveScore.textContent = fmtPts(currentEarnedTotal());
}


function finish() {
  elFinalScore.textContent = fmtPts(currentEarnedTotal());
  elFinalTotal.textContent = fmtPts(totalPoints());

  elSummary.innerHTML = "";

  for (const q of questions) {
    const got = earned.get(q.id) || 0;
    const user = answers.get(q.id);
    const corr = q.correct;

    let userText = "—";
    let corrText = "—";

    if (q.type === "single" || q.type === "multi") {
      const ua = Array.isArray(user) ? user : [];
      userText = ua.length ? ua.map(i => `(${i+1}) ${q.options[i]}`).join(" | ") : "—";
      corrText = corr.map(i => `(${i+1}) ${q.options[i]}`).join(" | ");
    } else if (q.type === "fill") {
      userText = (typeof user === "string" && user.trim()) ? user.trim() : "—";
      corrText = q.explain?.correct || (Array.isArray(q.accept) && q.accept[0]) || "—";
    } else if (q.type === "match" || q.type === "order") {
      const ua = Array.isArray(user) ? user : [];
      userText = ua.length ? ua.join(", ") : "—";
      corrText = corr.join(", ");
    }

    const item = document.createElement("div");
    item.className = "summaryItem";
    item.innerHTML = `
      <strong>Задатак ${q.id} — ${fmtPts(got)}/${fmtPts(q.points)}p</strong>
      <div class="muted small">Твој одговор: ${escapeHtml(userText)}</div>
      <div class="muted small">Тачно: ${escapeHtml(corrText)}</div>
    `;
    elSummary.appendChild(item);
  }

  setScreen("result");
}

function resetAll() {
  idx = 0;
  answers = new Map();
  checked = new Set();
  earned = new Map();
  elLiveScore.textContent = "0";
  render();
}


btnStart.addEventListener("click", () => {
  setScreen("quiz");
  render();
});

btnResetAll.addEventListener("click", () => resetAll());

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

btnCheck.addEventListener("click", () => checkCurrent());

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


elLiveTotal.textContent = fmtPts(totalPoints());
elLiveCount.textContent = questions.length;
elLiveIndex.textContent = "0";
