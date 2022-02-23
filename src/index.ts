class Human {
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    } // 메서드인데 클래스가 실행될 때마다 호출된다.
}
interface Human {
    name: string;
    age: number;
    gender: string;
}

const lynn = new Human("Lynn", 18, "female");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {};
