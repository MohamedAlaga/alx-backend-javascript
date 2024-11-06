interface DirectorInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string,
};

interface TeacherInterface {
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
};

class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    };
    getCoffeeBreak() {
        return "Getting a coffee break";
    };
    workDirectorTasks() {
        return "Getting to director tasks";
    };
};

class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    };
    getCoffeeBreak() {
        return "Cannot have a break";
    };
    workTeacherTasks() {
        return "Getting to work";
    };
};

interface createEmployeeInterface {
    (salary: string | number): Director | Teacher;
};

const createEmployee: createEmployeeInterface = (salary) => {
    if (parseInt(salary.toString()) < 500)
        return new Teacher;
    return new Director;
};

const isDirector = (employee: Director | Teacher): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Director | Teacher) => {
    if (isDirector(employee)) {
        return employee.workDirectorTasks
    } else {
        return employee.workTeacherTasks
    }
};


const teachClass= (todayclass : 'Math' | 'History')=>{
    if (todayclass === 'Math')
        return 'Teaching Math';
    return 'Teaching History'
};
