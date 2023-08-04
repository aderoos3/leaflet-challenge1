# leaflet-challenge1
## Module 15

For this project, I tried to make a map. I didn't get it all to work, so all the code is there, but bits are commented out. I got the map to show colorful circles based on their depth and their size based on magnitude. Binding the pop-up and adding the legend didn't get work. 

The way I got this map was I started with a base map centered on the world and then I used open street maps to as a tile layer. I got the data from the geoJSON url and the earthquake website. Then I set up the colors for the circles. I used a function and defined the colors based on different depths from the data. I will use this function more later. 

Next, I set up my circles using d3 select and getting the data from the geoJSON file. I only wanted the property and geometry parts from the features array, so I tried to get to that. Then I let some of my variables match the data and created circles for the data points. I made the radius of the circle double the magnitude. I used the color function to do the fill color of my circles. This was about as far as I got with everything working. 

Binding the pop-up didn't work. I think I need to bind the featues to parts of the html file, but it never quite worked. For the legend I think that code is correct, but I got an error that something wasn't initialized properly, so the legend wouldn't show up. 
