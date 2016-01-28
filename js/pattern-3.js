var functionalPattern = (function(){
  /**
  * Prototypal pattern
  **/
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

  var Male = Object.create(human, {
      gender: {value: 'Male'}
  });

  var Female = Object.create(human, {
      gender: {value: 'Female'}
  });

  // public access methods
  return {
    male: Male,
    female: Female
  }

})();
