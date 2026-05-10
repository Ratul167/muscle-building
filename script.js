
// Progress bar
const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${scrolled / total})`;
});

// Active nav link
const sections = document.querySelectorAll('.chapter');
const links = document.querySelectorAll('.sidebar a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => observer.observe(s));
