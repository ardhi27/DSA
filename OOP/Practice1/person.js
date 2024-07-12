class Person{
    name;
    age;
    address;
  constructor(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address
  }

  setName(name){
    this.name = name
  }
  setAge(age){
    this.age = age;
  }
  setAddress(address){
    this.address = address;
  }

  getName(){
    return this.name
  }
  getAge(){
    return this.age
  }
  getAddress(){
    return this.address
  }

}