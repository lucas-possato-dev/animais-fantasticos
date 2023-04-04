export default function initAnimaScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  const windowPercent = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowPercent) < 0;
      if (isSectionVisible) section.classList.add('ativo');
      else if (section.classList.contains('ativo')) section.classList.remove('ativo');
    });
  }

  if (sections.length) {
    // sections[0].classList.add("ativo");
    // Não precisa disso porque é só ativar a função animaScroll ao iniciar o site.
    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
