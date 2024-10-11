interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const stude1: Student = {
  firstName: "Brenda",
  lastName: "Jeptum",
  age: 28,
  location: "Nairobi"
};

const stude2: Student = {
  firstName: "Harvey",
  lastName: "Harris",
  age: 25,
  location: "Addis Ababa"
};

const studentsList: Student[] = [stude1, stude2];

// Render table using Vanilla JavaScript

const renderTable = () => {
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  const headerFirstName = document.createElement("th");
  const headerLocation = document.createElement("th");

  headerFirstName.textContent = "First Name";
  headerLocation.textContent = "Location";


  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  table.appendChild(headerRow)

  studentsList.forEach(student => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");
  

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  document.body.appendChild(table);
};

// Call function to render table
renderTable();
