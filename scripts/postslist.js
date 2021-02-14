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
		// Get the modal
		var modal = document.getElementById('delete01');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}

		//Declare post id
		var id = null;

		//deletePosts function will take post id and delete that post.
		function deletePosts(id){
			console.log("This method is called");
			var modal = document.getElementById('delete01');
			modal.style.display = "none";
			// call the remaining post to display

		}

		function navigateToPost(){
			location.replace('../html/post.html');
		}
