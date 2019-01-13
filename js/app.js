'use strict';

const p4 = document.querySelector('#person4');
const p4Name = document.querySelector('#person4Name');
const p4HW = document.querySelector('#person4HomeWorld');

const reqP4Name = new XMLHttpRequest();

function assignP4Name() {
  const reqP4HW = new XMLHttpRequest();
  const swObject = JSON.parse(this.responseText);
  
  p4Name.innerHTML = swObject.name;

  reqP4HW.addEventListener('load', function() {
    const planet = JSON.parse(this.responseText);
    
    p4HW.innerHTML = planet.name;
  });

  reqP4HW.open('GET', 'https://swapi.co/api/planets/1');
  reqP4HW.send();

}

reqP4Name.addEventListener('load', assignP4Name);
reqP4Name.open('GET', 'https://swapi.co/api/people/4/');
reqP4Name.send();

const p14 = document.querySelector('#person14');
const p14Name = document.querySelector('#person14Name');
const p14Species = document.querySelector('#person14Species');

function assignP14Name() {
  const reqP14Species = new XMLHttpRequest();
  const swObject = JSON.parse(this.responseText);
  
  p14Name.innerHTML = swObject.name;

  console.log(swObject);

  reqP14Species.addEventListener('load', function() {
    const species = JSON.parse(this.responseText);
    console.log(species);
    console.log(p14Species);
    p14Species.innerHTML = species.name;
  });

  reqP14Species.open('GET', 'https://swapi.co/api/species/1/');
  reqP14Species.send();
}

const reqP14Name = new XMLHttpRequest();

reqP14Name.addEventListener('load', assignP14Name);
reqP14Name.open('GET', 'https://swapi.co/api/people/14/');
reqP14Name.send();
