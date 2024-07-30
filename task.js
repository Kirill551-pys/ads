const rotatorCases = document.querySelectorAll('.rotator__case');

// Запускаем функцию для смены текста
rotateText(rotatorCases);

function rotateText(elements) {
  let currentIndex = 0;

  // Запускаем бесконечный цикл
  setInterval(() => {
    // Убираем класс "rotator__case_active" у предыдущего элемента
    elements[currentIndex].classList.remove('rotator__case_active');

    // Увеличиваем индекс, чтобы перейти к следующему элементу
    currentIndex = (currentIndex + 1) % elements.length;

    // Добавляем класс "rotator__case_active" новому элементу
    elements[currentIndex].classList.add('rotator__case_active');
  }, 1000); // Меняем текст каждую секунду
}