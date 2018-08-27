let mark = {
  firstName: 'Mark',
  lastName: 'Johnson',
  weight: 80,
  height: 1.8,
  calcBmi: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
};


let john = {
  firstName: 'John',
  lastName: 'Markson',
  weight: 90,
  height: 1.8,
  calcBmi: function() {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
	}
};

mark.calcBmi();
john.calcBmi();

if (mark.bmi === john.bmi) {
  console.log(mark.firstName + ' ' + mark.lastName + ' and ' + john.firstName + ' ' + john.lastName + ' have the same BMI on: ' + mark.bmi);
}
else if (mark.bmi > john.bmi) {
  console.log(mark.firstName + ' ' + mark.lastName + ' have the highest BMI on: ' + mark.bmi);
}
else {
  console.log(john.firstName + ' ' + john.lastName + ' have the highest BMI on: ' + john.bmi);
};