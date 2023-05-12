export function startTracker(element) {
  const trackerContainer = document
    .createElement("div")
    .setAttribute("id", "tracker-container");
  element.appendChild(trackerContainer);

  const tracker = document.createElement("p").setAttribute("id", "tracker");

  trackerContainer.appendChild(tracker);
}
