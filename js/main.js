document.addEventListener('DOMContentLoaded', function () {
  const options = {
    rootMargin: '0px 0px -100px 0px' // 画面下から100px入ったら発火
  };
  const observer = new IntersectionObserver((entries, options) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show');
      }
    });
  });
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el) => observer.observe(el));
});
