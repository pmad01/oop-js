// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
//
// 	calcAge() {
// 		console.log(2023 - this.birthYear)
// 	}
//
// 	static hey() {
// 		console.log('hey');
// 		//this points to the entire class, because there is no instance
// 		console.log(this);
// 	}
// }
//
// Person.prototype.greet = function () {
// 	console.log('Hey ' + this.firstName);
//
// }
// Person.hey();

//Object.create
// const PersonProto = {
// 	calcAge() {
// 		console.log(2023 - this.birthYear);
// 	},
//
// 	init(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
// }
//
// const steven = Object.create(PersonProto);
// steven.init('Steven', 2001);
// steven.calcAge();


//Classes Inheritance

//Constructor functions inheritance
// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// }
//
// Person.prototype.calcAge = function () {
// 	console.log(2023 - this.birthYear);
// }
//
// const Student = function (firstName, birthYear, course) {
// 	Person.call(this, firstName, birthYear);
// 	this.course = course;
// }
//
// Student.prototype = Object.create(Person.prototype);
//
// Student.prototype.introduce = function () {
// 	console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
//
// Student.prototype.constructor = Student;
//
// const mike = new Student('Mike', 2001, 'Software Engineering');
// mike.introduce();
// mike.calcAge();
// console.log(mike);


//ES6 Classes inheritance
// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
//
// 	calcAge() {
// 		console.log(2023 - this.birthYear)
// 	}
//
// 	static hey() {
// 		console.log('hey');
// 		//this points to the entire class, because there is no instance
// 		console.log(this);
// 	}
// }

// class Student extends Person {
// 	constructor(firstName, birthYear, course) {
// 		super(firstName, birthYear);
// 		this.course = course;
// 	}

//same function name in the child class -> overwrites the parent class function
// calcAge () {
// 	//some other thing
// }
// }
// const martha = new Student('Martha', 2002, 'Economics');
// console.log(martha);
// martha.calcAge();


//Encapsulation, protected properties and methods (more like a convention)
// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
//
// 	calcAge() {
// 		console.log(2023 - this.birthYear)
// 	}
//
// 	static hey() {
// 		console.log('hey');
// 		//this points to the entire class, because there is no instance
// 		console.log(this);
// 	}
// }
//
// class Student extends Person {
// 	constructor(firstName, birthYear, course, pass) {
// 		super(firstName, birthYear);
// 		this.course = course;
// 		this._pass = pass;
// 	}
//
// 	_getPassword() {
// 		console.log(this._pass);
// 	}
// }
//
// const martha = new Student('Martha', 2002, 'Economics', 1234);
// martha._getPassword();


//Private class fields and methods
// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
//
// 	calcAge() {
// 		console.log(2023 - this.birthYear)
// 	}
//
// 	static hey() {
// 		console.log('hey');
// 		//this points to the entire class, because there is no instance
// 		console.log(this);
// 	}
// }
//
// class Student extends Person {
// 	#pass;
// 	#studentId
// 	constructor(firstName, birthYear, course, studentId) {
// 		super(firstName, birthYear);
// 		this.course = course;
// 		this.#studentId = studentId;
// 	}
//
// 	setPassword(pass) {
// 		this.#pass = pass;
// 	}
//
// 	getPassword() {
// 		console.log(this.#pass);
// 	}
//
// 	#approveLoan(value) {
// 		return true;
// 	}
//
//
// }
//
// const martha = new Student('Martha', 2002, 'Economics', 'DKE6446ES5');
// martha.setPassword('1234')
// console.log(martha);
// // gives error, private data fields and methods can only be accessed inside the class
// // console.log(martha.#studentId)
// // console.log(martha.#approveLoan(5000));



//chaining methods
// class Person {
// 	constructor(firstName, birthYear) {
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	}
//
// 	calcAge() {
// 		console.log(2023 - this.birthYear)
// 	}
//
// 	static hey() {
// 		console.log('hey');
// 		//this points to the entire class, because there is no instance
// 		console.log(this);
// 	}
// }
//
// class bankCustomer extends Person {
// 	balance = 0;
// 	constructor(firstName, birthYear, balance) {
// 		super(firstName, birthYear);
// 		this.balance = balance;
// 	}
//
// 	deposit(val) {
// 		this.balance += val;
// 		return this;
// 	}
//
// 	withdraw(val) {
// 		this.balance -= val;
// 		return this;
// 	}
// }
//
// const era = new bankCustomer('Era', 2002, 1000000);
//
// era.withdraw(10000).withdraw(10000).deposit(30000);
// console.log(era.balance);





