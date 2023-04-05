interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: 'Giovanni',
  lastName: 'Perez',
  age: 38,
  location: 'Sabaneta'
}
const student2: Student = {
  firstName: 'Jager',
  lastName: 'Monsalve',
  age: 15,
  location: 'Sabaneta',
};
const studentsList: Array<Student> = [student1, student2];
const labels: string[] = ['firstName', 'location'];

const table: HTMLTableElement = document.createElement('table');
document.body.appendChild(table);

const tbody: HTMLTableSectionElement = document.createElement('tbody');
table.appendChild(tbody);
  
const thead: HTMLTableSectionElement = document.createElement('thead');
table.appendChild(thead);
  
  
for (let i: number = 0; i < labels.length; i++) {
  const th: HTMLTableCellElement = document.createElement('th');
  thead.appendChild(th);
  th.appendChild(document.createTextNode(`${labels[i]}`));
}
  
for (let i :number = 0; i < studentsList.length; i++) {
  const tr: HTMLTableRowElement = document.createElement('tr');
  tbody.appendChild(tr);
  const values: string[] = [studentsList[i].firstName, studentsList[i].location]
  
  for (let j :number = 0; j < values.length; j++) {
    const td: HTMLTableCellElement = document.createElement('td');
    td.appendChild(document.createTextNode(`${values[j]}`));
    tr.appendChild(td);
  }
}
