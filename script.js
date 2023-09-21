// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    constructor(title, author, pages) {
        if(typeof author !== 'number') {
            this.author = author
        } else {
            throw new Error('вторым аргументом принимается имя. Число не может быть именем');
        }    
        if (typeof pages === 'number' && Number.isFinite(pages) && pages > 0) {
            this.pages = pages;
        } else {
            throw new Error('для создания экземпляра класса третьим аргументом принимается конкретное положительное число');
        }      
        this.title = title;
        this.author = author;
    }

    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
}

const book = new Book("BookName1", "Author1", 123);
book.displayInfo(); // "Title: BookName1, Author: Author1, Pages: 123"



// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.

class Student {
    constructor(name, age, grade) {
        if(typeof name !== 'number') {
            this.name = name
        } else {
            throw new Error('первым аргументом принимается имя. Число не может быть именем');
        }    
        if (typeof age === 'number' && Number.isFinite(pages) && pages > 0) {
            this.age = age;
        } else {
            throw new Error('для создания экземпляра класса вторым аргументом принимается конкретное положительное число');
        }
        this.author = author;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const student = new Student("John Smith", 16, "10th grade");
student.displayInfo(); // "Name: John Smith, Age: 16, Grade: 10th grade"
