var prototypalPattern = (function(){
  'use strict';
  /**
  * Prototypal pattern
  **/
  var human = {
    init: function( name ){
      this.name = name;
      return this;
    },
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

  var createMale = function (nameVal) {
    return Object.create(male, {
      name: {value: nameVal}
    });
  };

  var createFemale = function (nameVal) {
    return Object.create(female, {
      name: {value: nameVal}
    });
  };

  // public access methods
  return {
    male: createMale,
    female: createFemale
  }

})();
