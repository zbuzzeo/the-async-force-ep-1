'use strict';

function makeElement(type, className, parent, content = '') {
  const element = document.createElement(type);

  element.className = className;
  element.innerHTML = content;
  parent.appendChild(element);
}

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

  reqP14Species.addEventListener('load', function() {
    const species = JSON.parse(this.responseText);

    p14Species.innerHTML = species.name;
  });

  reqP14Species.open('GET', 'https://swapi.co/api/species/1/');
  reqP14Species.send();
}

const reqP14Name = new XMLHttpRequest();

reqP14Name.addEventListener('load', assignP14Name);
reqP14Name.open('GET', 'https://swapi.co/api/people/14/');
reqP14Name.send();



const reqFilms = new XMLHttpRequest();

function assignFilms() {
  const filmList = document.querySelector('#filmList');
  const object = JSON.parse(this.responseText);
  const films = object.results;

  for (let i = 0; i < films.length; i++) {
    const getFilmLists = document.querySelectorAll('#filmList > li');

    makeElement('li', 'film', filmList);

    console.log(films);

    // doesn't work with the first title
    for (let j = 0; j < getFilmLists.length; j++) {

        if (!getFilmLists[j].querySelector('h2')) {
          makeElement('h2', 'filmTitle', getFilmLists[j], films[i].title);
        }

    }
  }
}

reqFilms.addEventListener('load', assignFilms);
reqFilms.open('GET', 'https://swapi.co/api/films/');
reqFilms.send();
