var modal = document.getElementById("hireMeModal");
var btn = document.querySelector(".btn-container button:nth-child(1)");
var span = document.querySelector(".close-btn");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
