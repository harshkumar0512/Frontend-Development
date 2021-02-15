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
		var modal = document.getElementById('id03');

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

		function signUpModel(){
			console.log("This method is called");
			var modal = document.getElementById('id02');
			modal.style.display = "none";
			// Get other model
			var modal = document.getElementById('id01');
			modal.style.display = "block";
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}

		}
		function navigateToAllPosts(){
			location.replace('./html/postslist.html');
		}