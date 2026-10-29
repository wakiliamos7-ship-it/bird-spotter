// Get all saved sightings (or an empty list if none yet)
function getSightings() {
  const data = localStorage.getItem("sightings");
  return data ? JSON.parse(data) : [];
}

// Save the list back to localStorage
function saveSightings(sightings) {
  localStorage.setItem("sightings", JSON.stringify(sightings));
}

// Handle the Add Sighting form (only exists on add.html)
const form = document.getElementById("sighting-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const sighting = {
      id: Date.now(),
      species: document.getElementById("species").value.trim(),
      location: document.getElementById("location").value.trim(),
      date: document.getElementById("date").value,
      notes: document.getElementById("notes").value.trim()
    };

    const sightings = getSightings();
    sightings.push(sighting);
    saveSightings(sightings);

    form.reset();
    document.getElementById("message").textContent = "Sighting saved!";
  });
}