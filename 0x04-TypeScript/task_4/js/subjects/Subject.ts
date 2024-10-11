namespace Subjects {
    export class Subject {
        teacher!: Teacher; // Using definite assignment assertion

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}