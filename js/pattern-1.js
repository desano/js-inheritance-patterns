var pseudoclassicalPattern = (function(){

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

  // public access methods
  return {
    male: Male,
    female: Female
  }

})();
