window.onload = function() {

	var email = document.getElementById("txt_email");
	var name = document.getElementById("txt_name");
	var pass = document.getElementById("txt_pass");
	var confirm = document.getElementById("txt_confPassword");
	var male = document.getElementById("radio_male");
	var female = document.getElementById("radio_female");
	var age = document.getElementById("age");
	var address = document.getElementById("address");
	var number = document.getElementById("number");

	var error = document.getElementById("error_text");
	var form = document.getElementById("form_login");
	
	var huruf = false;
	var angka = false;

	error.innerHTML = "";

	form.onsubmit = function() {

		// Looping AlphaNumeric
		// for (var i = 0; i < name.value.length; i++) {

		// 	if (isNaN(name.value.charAt(i))) {
		// 		huruf = true;
		// 	}

		// 	else if (!(isNaN(name.value.charAt(i)))) {
		// 		angka = true;
		// 	}
		// }

		if (email.value == "") {
			error.innerHTML = "Email must be filled";
			email.focus();	
			return false;
		}

		else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
			error.innerHTML = "Email must contain \"@\" sign  and \".com\" sign";
			email.focus();
			return false;
		}

		else if (email.value.indexOf("@") != email.value.lastIndexOf("@")) {
			error.innerHTML = "@ sign cannot be more than one";
			email.focus();
			return false;		
		}

		// else if (email.value.endsWith(".")) {
		// 	error.innerHTML = "Dot sign (.) must not be the last character";
		// 	email.focus();
		// 	return false;
		// }

		else if (!email.value.endsWith(".com")) {
			error.innerHTML = "Email must ends with \".com\"";
			email.focus();
			return false;
		}

		// else if (name.value.length < 5 || name.value.length > 20) {
		// 	error.innerHTML = "Name must between 5 - 20 characters";
		// 	name.focus();
		// 	return false;
		// }

		// else if (huruf == false && angka == false) {
		// 	error.innerHTML = "Username must be alphanumeric"; 	
		// 	name.focus();
		// 	return false;
		// }

		else if (pass.value == "") {
			error.innerHTML = "Password must be filled";
			pass.focus();
			return false;
		}

		else if (pass.value != confirm.value) {
			error.innerHTML = "Confirm password must be match with Password";
			pass.focus();
			return false;	
		}

		else if (name.value == "") {
			error.innerHTML = "Name must be filled";
			name.focus();
			return false;
		}

		else if (male.checked == false && female.checked == false) {
			error.innerHTML = "Gender must be selected"; 
			return false;	
		}

		else if (age.value == "") {
			error.innerHTML = "Age must be filled";
			age.focus();
			return false;
		}

		else if (age.value < 11) {
			error.innerHTML = "Age must be greater than 11";
			age.focus();
			return false;
		}

		else if (address.value == "") {
			error.innerHTML = "Address must be filled";
			address.focus();
			return false;
		}

		// else if (!address.value.endsWith("Street")) {
		// 	error.innerHTML = "Address must ends With 'Street'";
		// 	address.focus();
		// 	return false;
		// }

		else if (number.value == "") {
			error.innerHTML = "Number must be filled";
			number.focus();
			return false;
		}

		// else if (!number.value.startsWith("08")) {
		// 	error.innerHTML = "Number must starts With '08'";
		// 	number.focus();
		// 	return false;
		// }
	}
}