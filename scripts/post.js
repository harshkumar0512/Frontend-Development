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

function editPost() {
    const paragraph = document.getElementById("paraText");
    const title = document.getElementById("postTitle01");
    const edit_button = document.getElementById("edit-btn");
    //const save_button = document.getElementById("save-btn");
    const icon = document.getElementById('icon');
    const text = document.getElementById('btn-name');
    if (icon.classList.contains('fa-edit')) {
        paragraph.contentEditable = true;
        //paragraph.style.backgroundColor = "#dddbdb";
        paragraph.style.border = "solid 1px pink";
        title.contentEditable = true;
        //title.style.backgroundColor = "#dddbdb";
        title.style.border = "solid 1px pink"
        //edit_button.style.visibility = "hidden";
        //save_button.style.display = "block";
        icon.classList.remove('fa-edit');
        icon.classList.add('fa-save');
        text.innerHTML = 'Save';
    } else {
        paragraph.contentEditable = false;
        paragraph.style.border = "1px";
        title.contentEditable = false;
        title.style.border = "1px";
        icon.classList.remove('fa-save');
        icon.classList.add('fa-edit');
        text.innerHTML = 'Edit';
    }

}

function addComments(id) {
    var addEventName = id.value + '<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p class="user_comment">' + addEventName + '</p>';
    a.value = a.defaultValue;
}

var numberOfClicks = 0;

function postLiked() {
    document.getElementById("likePost").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked";
    numberOfClicks += 1;
    if (numberOfClicks != 0) {
        if (numberOfClicks == 1) {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        } else {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people like this!";
        }
    }
}
