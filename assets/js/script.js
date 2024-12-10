const nameInput = document.getElementById("nameInput");
const savedNameDisplay = document.getElementById("savedName");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton"); // Funzione per aggiornare la visualizzazione del nome salvato function updateSavedNameDisplay() { const savedName = localStorage.getItem('userName'); savedNameDisplay.textContent = savedName ? savedName : 'Nessun nome salvato.'; } // Carica il nome salvato quando la pagina viene caricata
window.onload = function () {
  updateSavedNameDisplay();
}; // Salva il nome nel localStorage
saveButton.onclick = function () {
  const userName = nameInput.value;
  if (userName) {
    localStorage.setItem("userName", userName);
    updateSavedNameDisplay();
    nameInput.value = "";
  } else {
    alert("Per favore, inserisci un nome.");
  }
}; // Rimuovi il nome dal localStorage
removeButton.onclick = function () {
  localStorage.removeItem("userName");
  updateSavedNameDisplay();
};
