const nameInput = document.getElementById("nameInput");
const savedNameDisplay = document.getElementById("savedName");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton"); 


function updateSavedNameDisplay() { const savedName = localStorage.getItem('userName'); 
    savedNameDisplay.textContent = savedName ? savedName : 'Nessun nome salvato.'; 
} 

window.onload = function () {
  updateSavedNameDisplay();
}; 
saveButton.onclick = function () {
  const userName = nameInput.value;
  if (userName) {
    localStorage.setItem("userName", userName);
    updateSavedNameDisplay();
    nameInput.value = "";
  } else {
    alert("Devi inserire un nome.");
  }
}; 

removeButton.onclick = function () {
  localStorage.removeItem("userName");
  updateSavedNameDisplay();
};

//secondo esercizio

let seconds = sessionStorage.getItem("seconds")
  ? parseInt(sessionStorage.getItem("seconds"))
  : 0;
const timeCounter = document.getElementById("timeCounter");
timeCounter.textContent = seconds;
setInterval(() => {
  seconds++;
  timeCounter.textContent = seconds;
  sessionStorage.setItem("seconds", seconds);
}, 1000);
