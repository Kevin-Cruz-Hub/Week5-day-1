class Cat{
    constructor(name, color, age, weight){
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
    }
    isHungry(){
        this.isHungry = true;
        console.log(`Please feed ${this.name}.`)
    }
    isFull(){
        this.isFull = true;
        console.log(`${this.name} ate, Come back later.`)
    }
    toString(){
        console.log(`${this.name} is a ${this.color} cat`)
    }

}
const Frisky = new Cat('Frisky','Black and grey', 13, 20);
const Garfield = new Cat('Garfield','orange',30,50 ) 
Garfield.isHungry()
Garfield.toString()

Frisky.isFull()
Frisky.toString()

console.log('===================================================')
class Pirate {

    constructor(crewmate, height, clean, ability){
        this.crewmate = crewmate;
        this.height = height;
        this.clean = clean  
        this.ability = ability
    }
    statement(){
        this.statement = statement;
        console.log(`My name is ${this.Captain}, and I will be the Pirate King`)
    }
    vow(){
        this.statement = statement;
        console.log(`${this.Captain} is the strongest man alive`);
    }
    declare(){
        this.statement = statement;
        console.log(`${this.captain} is the freest man on the sea`)
    }
  }
const luffy = new Pirate('Luffy',5.7,false, 'rubber-man')
const zoro = new Pirate('Zoro', 5.11,false, 'swords')
const sanji = new Pirate('Sanji',5.10,true, 'kicks')
const Whitebeard = new Pirate('Whitebeard',10.5,false,'rumbleman')
const Marco = new Pirate('Marco',6.4,true,'Pheonix tranformation')
const Ace = new Pirate('Ace',6.8,false,'fire')

const thousandSunny=[]
thousandSunny.push(luffy, zoro, sanji)
const MobyDick = []
MobyDick.push(Whitebeard, Marco, Ace)



for(let pirates of thousandSunny){
    console.log(`${pirates.crewmate}: ${pirates.height}, ${pirates.clean}, ${pirates.ability}`)
}
for(let pirates of MobyDick){
    console.log(`${pirates.crewmate}: ${pirates.height}, ${pirates.clean}, ${pirates.ability}`)
}
