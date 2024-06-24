import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  elem = null;

  constructor(product) {
    this.product = product;
    this.elem = this.#renderCard();
  }

  #onProductAdd = () => {
    const addProduct = new CustomEvent("product-add", {
      detail: this.product.id,
      bubbles: true
    });

    this.elem.dispatchEvent(addProduct);
  }

  #templateCard({image, name, price}) {
    return `
    <div class="card">
      <div class="card__top">
        <img src="/assets/images/products/${image}" class="card__image" alt="product">
        <span class="card__price">€${price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>
    `;
  }

  #renderCard() {
    this.elem = createElement(this.#templateCard(this.product));
    this.elem.querySelector('button').addEventListener('click', this.#onProductAdd);

    return this.elem;
  }
}
