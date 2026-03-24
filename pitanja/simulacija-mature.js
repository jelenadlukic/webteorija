function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const pitanjaWebDizajn = Array.isArray(window.QUIZ_PITANJA_WEB_DIZAJN)
  ? window.QUIZ_PITANJA_WEB_DIZAJN
  : [];

const pitanjaWebProgramiranje = Array.isArray(window.QUIZ_PITANJA_WEB_PROGRAMIRANJE)
  ? window.QUIZ_PITANJA_WEB_PROGRAMIRANJE
  : [];

const pitanjaBaze = Array.isArray(window.QUIZ_PITANJA_BAZE_PODATAKA)
  ? window.QUIZ_PITANJA_BAZE_PODATAKA
  : [];

console.log("Web dizajn:", pitanjaWebDizajn.length);
console.log("Web programiranje:", pitanjaWebProgramiranje.length);
console.log("Baze:", pitanjaBaze.length);

window.QUIZ_PITANJA_SIMULACIJA_MATURE = shuffleArray([
  ...shuffleArray(pitanjaWebDizajn).slice(0, 10),
  ...shuffleArray(pitanjaWebProgramiranje).slice(0, 10),
  ...shuffleArray(pitanjaBaze).slice(0, 10)
]);

console.log("Simulacija mature:", window.QUIZ_PITANJA_SIMULACIJA_MATURE.length);
console.log(window.QUIZ_PITANJA_SIMULACIJA_MATURE);