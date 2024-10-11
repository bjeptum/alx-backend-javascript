//// <reference path="./Teacher.ts" />
/// <reference path="./Subject.ts" />

namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number; // Declaration merging to add optional attribute
    }

    export class React extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingReact
                ? `Available Teacher: ${this.teacher.firstName}`
                : 'No available teacher';
        }
    }
}
