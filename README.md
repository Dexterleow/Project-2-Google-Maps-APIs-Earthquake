# Project-2-Captain Planet

Technologies used:

HTML, CSS & Javascript, Express, Node, Postgres and Heroku.

APIs used:

Twitter, Google Maps & USGS.

## Preview

Screenshot:

![alt text](/public/img/Preview1.png?raw=true "Preview 1")

![alt text](/public/img/Preview2.png?raw=true "Preview 2")

![alt text](/public/img/Preview3.png?raw=true "Preview 3")


### The approach taken:

The aim of Project 2 is to build a full-stack Node application with user login authentication, complete RESTful routes and utilizing ORM to create a database structure.

Inspired by Kickstarter, my project serves as an Online Mapping Site for Earthquake Investigation and Projects to Aid in the Earthquake Recover Globally.

There are two core modules in this app.

Firstly, there's a live interactive Google map that showcase all Earthquakes (M2.5+) that happened in the Past 7 Days (Data from USGS). All visitors are able to click on any markers on the map to learn the earthquakes that have happened in the past 7 days, the time they occurred, places and the magnitude.

Next, there's an 'all projects page' to help bring all humanitarian projects to life.

Registered users are able to start their own projects to do their part and make the the world a better place!
This page is exclusive for registered users and non-registered users will be prompted to register when they want to visit the all project page.

#### Unsolved problems, etc:

Local Version:

Implement Image size restriction in image upload. The website would look much better when all projects' images are consistent in size.

Deployed Version:

https://captainplanet.herokuapp.com/

App has been deployed with Heroku and it's publicly accessibly now.
However, this live version has some bugs:

1.Google Map is unable to rendered unless a user has signed in.

2.An internal server error will occurred when users try to create their own humanitarian projects.
