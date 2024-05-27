function sumSalary(salaries) {
  let summary = 0;

  for (let key in salaries) {
    if (typeof salaries[key] === 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
      summary += salaries[key];
    }
  }

  return summary;
}

