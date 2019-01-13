'use strict';

const person4 = document.querySelector('#person4');
const person4Name = document.querySelector('#person4Name');
const person4Homeworld = document.querySelector('#person4Homeworld');

const reqPerson4 = new XMLHttpRequest();

reqPerson4.addEventListener('load', function () {
  const responseText = JSON.parse(this.responseText);
  console.log(responseText);
});

reqPerson4.open('GET', 'https://swapi.co/api/people/4/');
reqPerson4.send();

const person14 = document.querySelector('#person14');
const person14Name = document.querySelector('#person14Name');
const person14Species = document.querySelector('#person14Species');

const reqPerson14 = new XMLHttpRequest();

reqPerson14.addEventListener('load', function () {
  const responseText = JSON.parse(this.responseText);
  console.log(responseText);
});

reqPerson14.open('GET', 'https://swapi.co/api/people/14/');
reqPerson14.send();
