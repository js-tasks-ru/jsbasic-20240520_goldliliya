import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  constructor(slides) {
    this.slides = slides;
    this.elem = this.#renderCarousel();
  }

  #templateSlide({price, name, image}) {
    return `
      <div class="carousel__slide" data-id="penang-shrimp">
        <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
            <span class="carousel__price">€${price.toFixed(2)}</span>
            <div class="carousel__title">${name}</div>
            <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
        </div>
      </div>`;
  }

  #templateCarousel() {
    return `
    <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
            ${this.slides.map(slide => this.#templateSlide(slide)).join('')}
        </div>
    </div>`;
  }

  #initSlider = () => {
    const carouselItem = this.elem.querySelector('.carousel__inner');
    const carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');

    let currentPosition = 0;
    carouselArrowLeft.style.display = 'none';

    carouselArrowRight.addEventListener('click', () => {
      let step = carouselItem.offsetWidth;
      carouselArrowLeft.style.display = '';

      if (currentPosition < this.slides.length * step) {
        carouselItem.style.transform = `translateX(-${currentPosition + step}px)`;
        currentPosition += step;
      }

      if (currentPosition > (this.slides.length - 2) * step) {
        carouselArrowRight.style.display = 'none';
      }
    });

    carouselArrowLeft.addEventListener('click', () => {
      let step = carouselItem.offsetWidth;
      carouselArrowRight.style.display = '';

      if (currentPosition > 0) {
        carouselItem.style.transform = `translateX(-${currentPosition - step}px)`;
        currentPosition -= step;
      }

      if (currentPosition < step) {
        carouselArrowLeft.style.display = 'none';
      }
    });
  }

  #onProductAdd = (index) => {
    let id = this.slides[index].id;
    let addProduct = new CustomEvent("product-add", {
      detail: id,
      bubbles: true
    });
    this.elem.dispatchEvent(addProduct);
  };

  #renderCarousel() {
    this.elem = createElement(this.#templateCarousel());
    this.#initSlider();

    const buttons = this.elem.querySelectorAll('.carousel__button');

    for (let index = 0; index < buttons.length; index++) {
      buttons[index].addEventListener('click', () => this.#onProductAdd(index));
    }

    return this.elem;
  }
}
