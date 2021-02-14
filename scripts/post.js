		// Get the modal
		var modal = document.getElementById('id01');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
		// Get the modal
		var modal = document.getElementById('id02');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
		function editPost(){
			const paragraph = document.getElementById("paraText");
			const title = document.getElementById("postTitle01");
			const edit_button = document.getElementById("edit-button");
			const end_button = document.getElementById("end-editing");

			edit_button.addEventListener("click", function() {
				paragraph.contentEditable = true;
				paragraph.style.backgroundColor = "#dddbdb";
			} );

			end_button.addEventListener("click", function() {
				paragraph.contentEditable = false;
				paragraph.style.backgroundColor = "#ffe44d";
			} )

			var editButton = listItem.querySelector("button.edit");

			if(containsClass) {
				label.innerText = editInput.value;
				editButton.textContent = "Edit";
			} else {
				editInput.value = label.innerText;
				editButton.textContent = "Save";
			}

		}
		function addComments(id){
			var addEventName = id.value +'<br>';
			var a = document.getElementById('userComments');
			document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';
			a.value=a.defaultValue;
		}
		var numberOfClicks=0;
		function postLiked(){
			document.getElementById("likePost").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked";
			numberOfClicks += 1;
			if(numberOfClicks!=0){
				if (numberOfClicks==1){
					document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
				}
				else {
					document.getElementById('commentCount').innerHTML = numberOfClicks + " people like this!";
				}
			}
		}
