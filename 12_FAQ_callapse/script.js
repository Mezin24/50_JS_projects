const faqs = document.querySelectorAll('.faq');
const btns = document.querySelectorAll('.faq-toggle');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const parentContainer = e.target.closest('.faq');
    parentContainer.classList.toggle('active');
  });
});
