var pattern = document.getElementById('pattern'),
    content = document.getElementById('content'),
    Persons = {};

pattern.addEventListener('change', function() {

  var currentPattern = this.value;

  content.style.display = 'block';

  if(currentPattern == 1) {
    /**
    * Pseudoclassical pattern
    **/
    var extendObj = function(childObj, parentObj) {
      var tmpObj = function () {}
      tmpObj.prototype = parentObj.prototype;
      childObj.prototype = new tmpObj();
      childObj.prototype.constructor = childObj;
    };

    // base human object
    var Human = function () {};
    // inhertiable attributes / methods
    Human.prototype = {
      name: '',
      gender: '',
      planetOfBirth: 'Earth',
      sayGender: function () {
        //document.write(this.name + ' says my gender is ' + this.gender + '<br>');
        return this.gender;
      },
      sayPlanet: function () {
        //document.write(this.name + ' was born on ' + this.planetOfBirth + '<br>');
        return this.planetOfBirth;
      }
    };

    // male
    var Male = function (name) {
      this.name = name;
      this.gender = 'Male';
    };
    // inherits human
    extendObj(Male, Human);

    // female
    var Female = function (name) {
      this.name = name;
      this.gender = 'Female';
    };
    // inherits human
    extendObj(Female, Human);

  } else if (currentPattern == 2) {
    /**
    * Functional pattern
    **/
    var human = function(name) {
      var that = {};

      that.name = name || '';
      that.gender = '';
      that.planetOfBirth = 'Earth';
      that.sayGender = function () {
        alert(that.name + ' says my gender is ' + that.gender);
      };
      that.sayPlanet = function () {
        alert(that.name + ' was born on ' + that.planetOfBirth);
      };

      return that;
    }

    var male = function (name) {
      var that = human(name);
      that.gender = 'Male';
      return that;
    }

    var female = function (name) {
      var that = human(name);
      that.gender = 'Female';
      return that;
    }
  } else if (currentPattern == 3) {

    var human = {
        name: '',
        gender: '',
        planetOfBirth: 'Earth',
        sayGender: function () {
            alert(this.name + ' says my gender is ' + this.gender);
        },
        sayPlanet: function () {
            alert(this.name + ' was born on ' + this.planetOfBirth);
        }
    };

    var male = Object.create(human, {
        gender: {value: 'Male'}
    });

    var female = Object.create(human, {
        gender: {value: 'Female'}
    });

  }

  // dynamic add persons
  var $submitButton = document.getElementById('submit'),
      $name = document.getElementById('person'),
      $gender = document.getElementById('gender'),
      $planet = document.getElementById('planet');

  // add person
  $submitButton.addEventListener('click', function(e) {

    var nameVal = $name.value,
        genderVal = $gender.value,
        planetVal = $planet.value;

    console.log('current ' + currentPattern);

    if (currentPattern == 1) {

      if (genderVal == 'male') {
        Persons[nameVal] = new Male(nameVal + ' [pattern 1]');
        if (planetVal) {
          Male.prototype.planetOfBirth = planetVal;
        }
      } else {
        Persons[nameVal] = new Female(nameVal + ' [pattern 1]');
        if (planetVal) {
          Female.prototype.planetOfBirth = planetVal;
        }
      }

    } else if (currentPattern == 2) {

      if (genderVal == 'male') {
        Persons[nameVal] =  male(nameVal + ' [pattern 2]');
        if (planetVal) {
          Persons[nameVal].planetOfBirth = planetVal;
        }
      } else {
        Persons[nameVal] = female(nameVal + ' [pattern 2]');
        if (planetVal) {
          Persons[nameVal].planetOfBirth = planetVal;
        }
      }

    } else if (currentPattern == 3) {

      if (genderVal == 'male') {
        Persons[nameVal] = Object.create(male, {
            name: {value: nameVal + ' [pattern 3]'},
            planetOfBirth: {value: planetVal}
        });
      } else {
        Persons[nameVal] = Object.create(female, {
            name: {value: nameVal + ' [pattern 3]'},
            planetOfBirth: {value: planetVal}
        });
      }

    }

    showPersons();
    e.preventDefault();
  });

  // show persons
  var table = document.getElementById('table'),
      tableBody = document.getElementsByTagName('tbody')[0];

  function showPersons() {

    console.log('Persons');
    console.log(Persons);

    tableBody.innerHTML = '';

    for (var person in Persons) {
      // skip loop if the property is from prototype
      if (!Persons.hasOwnProperty(person)) continue;

      var obj = Persons[person];
      var name, gender, planet;

      for (var prop in obj) {
        // skip loop if the property is from prototype
        //if(!obj.hasOwnProperty(prop)) continue;
        // console.log(prop);
        // console.log(obj[prop]);
        if(prop == 'name') {
          name = obj[prop];
        }
        if(prop == 'gender') {
          gender = obj[prop];
        }
        if(prop == 'planetOfBirth') {
          planet = obj[prop];
        }

      }
      // row build
      var row = tableBody.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);

      cell1.innerHTML = name;
      cell2.innerHTML = gender;
      cell3.innerHTML = planet;
    }
  }

  // default persons
  // Persons['david'] = new Male('David (default)');
  // Persons['maria'] = new Female('Maria (default)');
  //showPersons();

  // console.log(Persons['david'].sayGender());
  // console.log(Persons.david.sayGender());
  // console.log(david.sayGender());
  // console.log(Persons);

});
