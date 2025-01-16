const img3 = document.querySelector('.img3');

document.addEventListener('mousemove', (e) => {
  const ringCristal = document.querySelector('.ringCristal');
  const rect = ringCristal.getBoundingClientRect();

  // Получение центра контейнера
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Расстояние от центра до курсора
  const offsetX = Math.min(Math.max(e.clientX - centerX, -20), 20); // Ограничение по X (±20px)
  const offsetY = Math.min(Math.max(e.clientY - centerY, -20), 20); // Ограничение по Y (±20px)

  // Обновление положения img3
  img3.style.transform = `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`;
});

// Возвращение в исходное положение, если курсор покидает контейнер
document.addEventListener('mouseout', () => {
  img3.style.transform = 'translate(-50%, -50%)';
});
