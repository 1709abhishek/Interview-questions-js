

// Q6. Explain the concept of prototypes in JS. How is it related to Classes in ES6

// Basically prototypes are objects further made inside js object under __proto__ to give more features to them, some are defined already

// example
function Animal (name, fierce) {
    Object.defineProperty(this, 'name', {
      get: function() { return name; }
    });
  
    Object.defineProperty(this, 'fierce', {
      get: function() { return fierce; }
    });
  }
  
  Animal.prototype.toString = function() {
    return 'A' + ' ' + ( this.fierce ? 'fierce' : 'tame' ) + ' ' + this.name;
  }




// At its most basic level, the class keyword in ES6 is equivalent to a constructor function definition that conforms to prototype-based inheritance.