export default function createReportObject(employeesList) {
  // Create the allEmployees object based on employeesList
  const allEmployees = {};

  for (const department in employeesList) {
    if (Object.hasOwnProperty.call(employeesList, department)) {
      allEmployees[department] = [...employeesList[department]];
    }
  }

  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}
