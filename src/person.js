export default function Person(name, height, weight) {
  this.Name = name;
  this.Height = height;
  this.Weight = weight;
}

Person.prototype.checkBMI = function() {
  return this.Name + " You have a BMI of:" + ((703 * (this.Weight)) / Math.pow(this.Height, 2)).toFixed(2);
};


// Person.prototype.calculateBMI = function() {
//   return (703 * (this.weight)) / Math.pow(this.height, 2);
// };