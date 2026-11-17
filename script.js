function openLinkedQuestion() {
  const question = document.getElementById(window.location.hash.slice(1));
  const answer = question?.querySelector('.accordion-collapse');
  if (!answer) return;
  const scrollToQuestion = () => question.scrollIntoView({ block: 'start' });
  if (answer.classList.contains('show')) {
    scrollToQuestion();
  } else {
    answer.addEventListener('shown.bs.collapse', scrollToQuestion, { once: true });
    bootstrap.Collapse.getOrCreateInstance(answer, { toggle: false }).show();
  }
}
openLinkedQuestion();
window.addEventListener('hashchange', openLinkedQuestion);

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('primary-navigation');
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('show')) {
    bootstrap.Collapse.getOrCreateInstance(navigation, { toggle: false }).hide();
    menuButton.focus();
  }
});
