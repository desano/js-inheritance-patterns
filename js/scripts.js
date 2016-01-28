var patternSelect = document.getElementById('pattern'),
    content = document.getElementById('content'),
    Persons = {};

  //content.style.display = 'block';

  // dynamic add persons
  var $submitButton = document.getElementById('submit'),
      $name = document.getElementById('person'),
      $gender = document.getElementById('gender'),
      $planet = document.getElementById('planet');

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

patternSelect.addEventListener('change', function() {

  var currentPattern = this.value;
  // add person
  $submitButton.addEventListener('click', function(e) {

    var nameVal = $name.value,
        genderVal = $gender.value,
        planetVal = $planet.value;

    console.log('current ' + currentPattern);

    if (currentPattern == 1) {

      if (genderVal == 'male') {
        Persons[nameVal] = new pseudoclassicalPattern.male(nameVal + ' [pattern 1]');
      } else {
        Persons[nameVal] = new pseudoclassicalPattern.female(nameVal + ' [pattern 1]');
      }

    } else if (currentPattern == 2) {

      if (genderVal == 'male') {
        Persons[nameVal] = new functionalPattern.male(nameVal + ' [pattern 2]');
      } else {
        Persons[nameVal] = new functionalPattern.female(nameVal + ' [pattern 2]');
      }

    } else if (currentPattern == 3) {

      // Persons[nameVal] = Object.create(male, {
      //      name: {value: nameVal + ' [pattern 3]'}
      //  });

    }

    // old functions
    // if (currentPattern == 1) {
    //
    //   if (genderVal == 'male') {
    //     // Persons[nameVal] = new Male(nameVal + ' [pattern 1]');
    //     // if (planetVal) {
    //     //   Male.prototype.planetOfBirth = planetVal;
    //     // }
    //
    //   } else {
    //     // Persons[nameVal] = new Female(nameVal + ' [pattern 1]');
    //     // if (planetVal) {
    //     //   Female.prototype.planetOfBirth = planetVal;
    //     // }
    //
    //     new pseudoclassicalPattern.female(nameVal + ' [pattern 1]');
    //   }
    //
    // } else if (currentPattern == 2) {
    //
    //   if (genderVal == 'male') {
    //     Persons[nameVal] =  male(nameVal + ' [pattern 2]');
    //     if (planetVal) {
    //       Persons[nameVal].planetOfBirth = planetVal;
    //     }
    //   } else {
    //     Persons[nameVal] = female(nameVal + ' [pattern 2]');
    //     if (planetVal) {
    //       Persons[nameVal].planetOfBirth = planetVal;
    //     }
    //   }
    //
    // } else if (currentPattern == 3) {
    //
    //   if (genderVal == 'male') {
    //     Persons[nameVal] = Object.create(male, {
    //         name: {value: nameVal + ' [pattern 3]'},
    //         planetOfBirth: {value: planetVal}
    //     });
    //   } else {
    //     Persons[nameVal] = Object.create(female, {
    //         name: {value: nameVal + ' [pattern 3]'},
    //         planetOfBirth: {value: planetVal}
    //     });
    //   }
    //
    // }

    showPersons();
    e.preventDefault();
  });
});
