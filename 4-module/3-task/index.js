function addClassList (element, className) {
  element.classList.add(className);
}

function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    let rows = table.rows[i];
    let statusCell = rows.cells[3];
    let genderCell = rows.cells[2].textContent;
    let ageCell = parseInt(rows.cells[1].textContent, 10);

    if (statusCell.hasAttribute('data-available')) {
      if (statusCell.getAttribute('data-available') === 'true'){
        addClassList(rows, 'available');
      } else {
        addClassList(rows, 'unavailable');
      }
    } else {
      rows.setAttribute('hidden', 'true');
    }

    if (genderCell === 'm') {
      addClassList(rows, 'male');
    } else {
      addClassList(rows, 'female');
    }

    if (ageCell < 18){
      rows.style.textDecoration = 'line-through';
    }
  }
}
