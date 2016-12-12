# The Async Force Episode 1

Async Exercise using Client side XHR accessing the swapi

## Setup

-- todo, live-server etc

## Goals

_commit after each step_

create client side javascript source file(s) and save to the `js/` directory

_the instructions below will mention ids and classes from index.html, study that document_

1. Get a Person object from the SWAPI, http://swapi.co/api/people/4/
    - fill in `person4Name` with the value of Person's `name`
    - fill in `person4HomeWorld` with the value of Person's `homeworld` (name)
1. Get a Person object from the SWAPI, http://swapi.co/api/people/14/
    - fill in `person14Name` with the value of Person's `name`
    - fill in `person14Species` with the value of Person's (first) `species` (name)
1. Get a list of all the films from the SWAPI, http://swapi.co/api/films/
    - fill in `filmList` with a new `<li>` element for each `film`
        - fill in each film's `filmTitle` with the title of the `film`
        - create a new `<li>` in this film's `filmPlanets` for each `planet` that appeared in this `film`
            - fill in each `planetTitle` with the name of the `planet`
