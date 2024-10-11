export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]:any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

// printTeacher function
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementation of printTeacherfunction
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

/*
// Example of creating Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  console.log(teacher3);

// Example of creating a Director Object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);

  // Example of use of printTeacher function
const result = printTeacher("John", "Doe");
console.log(result); // Outputs: J. Doe
  */