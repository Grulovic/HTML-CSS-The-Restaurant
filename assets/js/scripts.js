/*------------------------------------------------------------------------------------
Stefan Grulović (20150280) - CS206 Project
------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------
Function for feedback form validation
------------------------------------------------------------------------------------*/
function feedback_form_validation(){

    	var name = document.FeedbackForm.Name.value;
		var email = document.FeedbackForm.Email.value;
		var feedback = document.FeedbackForm.Feedback.value;
		var rating = document.FeedbackForm.rad;
		
		if(name == ""){
			window.alert("Please provide a name.");
			Name.focus();
			return false;
		}
		else if(email == "" || email.indexOf("@")<1 || email.lastIndexOf(".")<email.indexOf("@")+2 || email.lastIndexOf(".")+2>=email.length){
			window.alert("Please provide a valid email address.");
			Email.focus();
			return false;
		}
		else if( !rating[0].checked && !rating[1].checked && !rating[2].checked && !rating[3].checked && !rating[4].checked){
			window.alert("Please provide a rating.");
			rad.focus();
			return false;
		}
		else if(feedback == ""){
			window.alert("Please provide feedback.");
			Feedback.focus();
			return false;
		}
		else{
			document.getElementById("js_user_feedback").innerHTML = '<h2>'+ name + '<span> Feedback</span><span class="rating">Rating: ' + rating.value + '</span></h2><p>' + feedback + '</p>';
			return false;
		}
}
/*------------------------------------------------------------------------------------
Function for contact form validation
------------------------------------------------------------------------------------*/
function contact_form_validation(){

    	var name = document.ContactForm.Name.value;
		var email = document.ContactForm.Email.value;
		var message = document.ContactForm.Message.value;
		
		if(name == ""){
			window.alert("Please provide a name.");
			Name.focus();
			return false;
		}
		else if(email == "" || email.indexOf("@")<1 || email.lastIndexOf(".")<email.indexOf("@")+2 || email.lastIndexOf(".")+2>=email.length){
			window.alert("Please provide a valid email address.");
			Email.focus();
			return false;
		}
		else if(message == ""){
			window.alert("Please provide a message.");
			Feedback.focus();
			return false;
		}
		else{
			document.getElementById("js_user_message").innerHTML = '<h2>'+ name + '<span> Message</span></h2><p>' + message + '</p>';
			return false;
		}
}
/*------------------------------------------------------------------------------------
Function for displaying and confirming the user reservation
------------------------------------------------------------------------------------*/
function reservation(){
	
	var name = document.ReservationForm.Name.value;
	var email = document.ReservationForm.Email.value;
	var phone = document.ReservationForm.Phone.value;
	var rdate = document.ReservationForm.Rdate.value;
	var party = document.ReservationForm.Party.value;
	var request = document.ReservationForm.Request.value;
	
	var confirmation = confirm("Please confirm your reservation: \n\n"
							+ "\tName:  " + name + "\n"
							+ "\tEmail:  " + email + "\n"
							+ "\tPhone:  " + phone + "\n"
							+ "\tDate:  " + rdate + "\n"
							+ "\tParty of:  " + party + "\n"
							+ "\tSpecial request:  " + request + "\n"
							);
		
	if (confirmation==true){
		alert("Your reservation has been sent!");
	}
	else{
		alert("Your reservation has been cancled!");
	}
}