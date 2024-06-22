function initCarousel() {
  const carouselItem = document.querySelector('.carousel__inner');
  const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  const carouselArrowRight = document.querySelector('.carousel__arrow_right');

  let carouselItemWidth = carouselItem.offsetWidth;
  let currentPosition = 0;

  carouselArrowLeft.style.display = 'none';

  carouselArrowRight.addEventListener('click', () => {
    carouselArrowLeft.style.display = '';

    if (currentPosition < carouselItemWidth * 3) {
      carouselItem.style.transform = `translateX(-${currentPosition + carouselItemWidth}px)`;
      currentPosition += carouselItemWidth;
    }

    if (currentPosition > carouselItemWidth * 2) {
      carouselArrowRight.style.display = 'none';
    }
  });

  carouselArrowLeft.addEventListener('click', () => {
    carouselArrowRight.style.display = '';

    if (currentPosition > 0) {
      carouselItem.style.transform = `translateX(-${currentPosition - carouselItemWidth}px)`;
      currentPosition -= carouselItemWidth;
    }

    if (currentPosition < carouselItemWidth) {
      carouselArrowLeft.style.display = 'none';
    }
  });
}

// работающий второй вариант, но он не прошел тесты из-за фиксированного требования насчет 4 слайдов, но это универстальное решение и более чистое

// function initCarousel() {
//   const carouselItem = document.querySelector('.carousel__inner');
//   const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
//   const carouselArrowRight = document.querySelector('.carousel__arrow_right');

//   let carouselItemWidth = 0;
//
//   carouselArrowLeft.style.display = 'none';
//
//   carouselArrowRight.addEventListener('click', () => {
//     carouselItemWidth += carouselItem.offsetWidth;
//     carouselItem.style.transform = `translateX(-${carouselItemWidth}px)`;
//     carouselArrowLeft.style.display = '';
//
//     if (carouselItemWidth === carouselItem.scrollWidth - carouselItem.clientWidth) {
//       carouselArrowRight.style.display = 'none';
//     }
//   });
//
//   carouselArrowLeft.addEventListener('click', () => {
//     carouselItemWidth -= carouselItem.offsetWidth;
//     carouselItem.style.transform = `translateX(-${carouselItemWidth}px)`;
//     carouselArrowRight.style.display = '';
//
//     if (carouselItemWidth === 0) {
//       carouselArrowLeft.style.display = 'none';
//     }
//   });
// }
