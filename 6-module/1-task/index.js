/**
 * Функция для создания DOM-элемента
 * @param htmlString - строка с HTML-кодом
 * @returns {Element} - готовый DOM-элемент
 */
function createElementFromHTML(htmlString) {
  const template = document.createElement('div');
  template.innerHTML = htmlString;

  return template.firstElementChild;
}

/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  #rows = [];

  constructor(rows) {
    this.rows = rows || this.#rows;
    this.elem = this.#renderTable();
  }

  #templateRow(row) {
    return `
        <tr>
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.salary}</td>
            <td>${row.city}</td>
            <td><button>X</button></td>
        </tr>`;
  }

  #templateTable() {
    return `
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            ${this.rows.map(row => this.#templateRow(row)).join('')}
        </tbody>
      </table>
    `;
  }

  #onDeleteButton (btn) {
    return btn.addEventListener('click', () => {
      btn.parentElement.parentElement.remove();
    });
  }

  #renderTable() {
    this.elem = createElementFromHTML(this.#templateTable());

    for (let btn of this.elem.querySelectorAll('button')) {
      this.#onDeleteButton(btn);
    }

    return this.elem;
  }
}
