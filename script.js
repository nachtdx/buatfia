// Get the modal and button elements
var modal = document.getElementById("messageModal");
var btn = document.getElementById("showMessageBtn");
var closeBtn = document.getElementById("closeBtn");

// When the user clicks the button, display the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
