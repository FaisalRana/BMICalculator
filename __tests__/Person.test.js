import Person from './../src/person.js';

describe('Person', () => {

  test('Test should take 2 numbers and ouput a number as a result', () => {
    const person = new Person("Faisal",67,160);
    expect(person.checkBMI()).toEqual("Faisal You have a BMI of:25.06");

  });

 
});