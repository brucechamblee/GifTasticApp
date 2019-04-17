# GifTasticApp

[GifTasticApp](https://brucechamblee.github.io/GifTasticApp/)

This was my first Project where I had to use API's. 

### Getting Started
This project is designed to be ran in the browser without having to install any programs. I did not add media queries to this so playing this on a mobile device is not recommended but is doable. 

### Design
The programing that was used to design this project was:
Javascript/JQuery/API's - Funcationality with API Callbacks 
HTML - Content and layout
CSS/Bootstrap - Color, layout plus a funny looking dog to go with the them!

### Versioning
I have only made one version of this. 

### HTML

In the HTML, I have a button area for the buttons which are static and new ones that are appended. I made a search field that will add the newly appended button to the window. Lastly, I made an area for when the user clicks the button, it will list the giphy's to the page below the rest of the content. 

### CSS
The CSS was very basic. I have a background image with a cool dog that I couldnt get scaled perfectly but I kept it anyway. I styled the buttons, the search field, and set where the images will load. 

### Javascript
This was my first use of an API in this project.

#### Variables
*I created one global variable for the search items to be added to that had some static items already listed. 

I also created some nested variabled that are used when adding the images to the screen.

#### Fuctions
Populate Button - This function populates the buttons from the topics array which will also hold any new searches the user make. 

Search Function - This function runs the API and runs a for loop that does the following:

Search Button (Populated Buttons) - It fires off the script to pull the API information back with a limit of 10 (still) and (animated) images only along with their attached rating. It them prepends those to the screen for the user to see. I have it set to load the still images first. 

State Function - This function fires when the user clicks an image on the page and alternates between a still and animated image. It has a nested if else statement that alternates based on the click by the user. 

Add Search - This function fires off the populate button function when the user clicks the submit button and adds the input date to the topics array.


This was my third README.md. 
