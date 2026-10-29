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
// Show sightings in the table (only exists on sightings.html)
const tableBody = document.getElementById("sightings-body");

function showSightings() {
  const sightings = getSightings();
  tableBody.innerHTML = "";

  if (sightings.length === 0) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 5;
    cell.textContent = "No sightings yet. Add one on the Add Sighting page.";
    row.appendChild(cell);
    tableBody.appendChild(row);
    return;
  }

  sightings.forEach(function (sighting) {
    const row = document.createElement("tr");
    [sighting.species, sighting.location, sighting.date, sighting.notes].forEach(function (value) {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteSighting(sighting.id);
    });
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    tableBody.appendChild(row);
  });
}

function deleteSighting(id) {
  const remaining = getSightings().filter(function (sighting) {
    return sighting.id !== id;
  });
  saveSightings(remaining);
  showSightings();
}
if (tableBody) {
  showSightings();
}