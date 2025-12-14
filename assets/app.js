
/* Reveal init */
Reveal.initialize({
  hash: true,
  slideNumber: true,
  progress: true,
  transition: 'slide',
  transitionSpeed: 'fast',
  backgroundTransition: 'fade',
  plugins: [ RevealNotes, RevealHighlight ],
});

/* Mermaid init (render after Reveal so sizes are stable) */
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  themeVariables: {
    fontFamily: 'Inter',
    primaryColor: '#0b1b33',
    primaryBorderColor: '#3ea6ff',
    primaryTextColor: '#eaf2ff',
    lineColor: '#94a3b8',
    tertiaryColor: '#071427',
  }
});

/* Help modal */
const help = document.getElementById('help');
document.getElementById('btn-help')?.addEventListener('click', () => help.showModal());
document.getElementById('btn-close')?.addEventListener('click', () => help.close());

/* Outline: open Reveal overview and keep it toggled */
let outlineOn = false;
document.getElementById('btn-outline')?.addEventListener('click', () => {
  outlineOn = !outlineOn;
  Reveal.toggleOverview(outlineOn);
});

/* Quiz */
const answers = [...document.querySelectorAll('.quiz-a')];
const statusEl = document.getElementById('quiz-status');
const resetBtn = document.getElementById('btn-quiz-reset');

function resetQuiz(){
  answers.forEach(a => a.classList.remove('correct','wrong'));
  if(statusEl) statusEl.textContent = 'Tip: haz click en una respuesta.';
}
answers.forEach(a => a.addEventListener('click', () => {
  if (a.classList.contains('correct') || a.classList.contains('wrong')) return;
  const correct = a.dataset.correct === 'true';
  a.classList.add(correct ? 'correct' : 'wrong');
  if(statusEl){
    statusEl.textContent = correct ? '✅ Correcto' : '❌ Incorrecto (intenta otra)';
  }
}));
resetBtn?.addEventListener('click', resetQuiz);
