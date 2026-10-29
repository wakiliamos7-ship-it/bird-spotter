# Bird Spotter

A website for bird lovers to record the birds they spot. Built with HTML, CSS and JavaScript only.

## Features
- Add a sighting (species, location, date, notes)
- View all sightings in a table
- Search sightings by species
- Delete a sighting
- Summary page showing how many times each species was seen

## Pages
- `index.html`: Home
- `add.html`: Add Sighting form
- `sightings.html`: My Sightings table with search and delete
- `summary.html`: Counts per species

## How the data works
Sightings are entered through a form and saved as objects in an array in the browser's localStorage. The My Sightings and Summary pages read that array and display it in tables.

## Live site
https://wakiliamos7-ship-it.github.io/bird-spotter/

## Run locally
Open the folder in VS Code and use the Live Server extension on `index.html`.