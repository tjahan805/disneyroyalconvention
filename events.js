// Toggle event info visibility with event click listener and classes
const eventToggles = document.querySelectorAll('.event-toggle');
const eventInfo = document.querySelectorAll('.event-info');

for (let i = 0; i < eventToggles.length; i++) {
  eventToggles[i].addEventListener('click', function () {
    eventInfo[i].classList.toggle('visible');
  });
}

//reference for these functions below, a previous project of Tasmins: https://replit.com/@TasminJahan1/BTHSStudyTogether 

// Event listeners for registering and unregistering events
const registerButtons = document.querySelectorAll('.register-button');
const unregisterButtons = document.querySelectorAll('.unregister-button');
const unregisterAll = document.getElementById('unregister-all-button')
let registeredEvents = [];

unregisterAll.addEventListener('click', unregisterFromAllEvents);


for (let i = 0; i < registerButtons.length; i++) {
  registerButtons[i].addEventListener('click', function () {
    const eventName = eventToggles[i].textContent;
    registerForEvent(eventName);
    registerButtons[i].style.display = 'none';
    unregisterButtons[i].style.display = 'inline';
  });
}
for (let i = 0; i < unregisterButtons.length; i++) {
  unregisterButtons[i].addEventListener('click', function () {
    const eventName = eventToggles[i].textContent;
    unregisterFromEvent(eventName);
    unregisterButtons[i].style.display = 'none';
    registerButtons[i].style.display = 'inline';
  });
}

// Function to register for an event
function registerForEvent(eventName) {
  if (!registeredEvents.includes(eventName)) {
    registeredEvents.push(eventName);
    updateRegisteredEventsDisplay();
  }
}

// Function to unregister from an event
function unregisterFromEvent(eventName) {
  const index = registeredEvents.indexOf(eventName);
  if (index !== -1) {
    registeredEvents.splice(index, 1);
    updateRegisteredEventsDisplay();
  }
}

// Function to update the registered events display
function updateRegisteredEventsDisplay() {
  const registeredEventsContainer = document.getElementById('registered-events');
  if (registeredEvents.length == 0) {
    registeredEventsContainer.innerHTML = "You have not registered for any events.";
  } else {
    registeredEventsContainer.innerHTML = registeredEvents.join(', ');
  }
}

// Function to unregister from all events
function unregisterFromAllEvents() {
  registeredEvents = [];
  updateRegisteredEventsDisplay();

  for (let i = 0; i < unregisterButtons.length; i++) {
    unregisterButtons[i].style.display = 'none';
    registerButtons[i].style.display = 'inline';
  }
}
