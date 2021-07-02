// OLD METHOD
class Gender {
    constructor(gender){
        this.gender = gender;
    }

    printGender(){
        console.log(this.gender);
    }
}

// NEW METHOD
class Gender {
    gender = "male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Human extends Gender{
    constructor(height){
        super();
        this.height = height;
    }

    printHeight(){
        console.log(this.height);
    }
}

const person = new Gender("male");
// person.printGender();

const human = new Human(170);
human.printHeight();

