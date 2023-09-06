export const scrollToSection = id => {
  let sectionTop = document.getElementById(id)?.offsetTop - 76;
  window.scrollTo({ top: sectionTop, behavior: 'smooth' });
};
