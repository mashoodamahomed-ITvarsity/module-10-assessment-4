// Simple hover effect (optional)
const images = document.querySelectorAll('.gallery-img');
images.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.08)';
  });
  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
  });
});
