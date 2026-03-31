(function () {
  function getRandomInt(maxExclusive) {
    if (!Number.isInteger(maxExclusive) || maxExclusive <= 0) return 0;

    if (window.crypto && typeof window.crypto.getRandomValues === "function") {
      const arr = new Uint32Array(1);
      window.crypto.getRandomValues(arr);
      return arr[0] % maxExclusive;
    }

    return Math.floor(Math.random() * maxExclusive);
  }

  function shuffleArray(arr) {
    const copy = Array.isArray(arr) ? [...arr] : [];

    for (let i = copy.length - 1; i > 0; i--) {
      const j = getRandomInt(i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
  }

  function pickRandomQuestions(source, count) {
    if (!Array.isArray(source)) return [];
    return shuffleArray(source).slice(0, Math.max(0, count));
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

  const simulacijaMature = shuffleArray([
    ...pickRandomQuestions(pitanjaWebDizajn, 10),
    ...pickRandomQuestions(pitanjaWebProgramiranje, 10),
    ...pickRandomQuestions(pitanjaBaze, 10)
  ]);

  window.QUIZ_PITANJA_SIMULACIJA_MATURE = simulacijaMature;

  console.log("Simulacija mature:", simulacijaMature.length);
  console.log(simulacijaMature);

  window.QUIZ_SETTINGS = {
    ...(window.QUIZ_SETTINGS || {}),
    questionFactory: function () {
      return shuffleArray(window.QUIZ_PITANJA_SIMULACIJA_MATURE || []);
    }
  };
})();