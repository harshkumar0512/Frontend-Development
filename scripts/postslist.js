// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('delete01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function ConfirmationModal() {
    console.log('This method is executed');
    var modal = document.getElementById('delete01');
    modal.style.display = "block";
    var link = document.querySelector('.post-card');
    if (link) {
        id = link.getAttribute('id');
        console.log(id);
    }
}

//Declare post id
var id = null;

//deletePosts function will take post id and delete that post.
function deletePosts() {

    var modal = document.getElementById('delete01');
    modal.style.display = "none";
    // call the remaining post to display
    document.getElementById('post05').innerHTML = '';
}

function navigateToPost() {
    location.replace('../html/post.html');
}


