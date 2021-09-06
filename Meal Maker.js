const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers
    },
    set appetizers(appetizer) {
      this._corses.appetizers = appetizer;
    },
    get mains() {
      return this._courses.mains
    },
    set mains(main) {
      this._courses.mains = main;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessert) {
      this._courses.desserts = dessert;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    
    },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers'); 
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return  `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name} ... The price is $${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Fries', 2.75);
  menu.addDishToCourse('appetizers', 'Crisps', 1.40);
  
  menu.addDishToCourse('mains', 'Steak', 7.20);
  menu.addDishToCourse('mains', 'Fish', 8.50);
  menu.addDishToCourse('mains', 'Burger', 5.50);
  
  menu.addDishToCourse('desserts', 'Cake', 2.25);
  menu.addDishToCourse('desserts', 'Tea', 2.25);
  menu.addDishToCourse('desserts', 'Pie', 2.25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  