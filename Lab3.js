function name(idk){
	var FirstName = prompt("What is your first name?");
	if(FirstName == "stop") {
		return FirstName
	}else{
		var LastName = prompt("What is your last name?");
		document.write("Your first name is= " + FirstName + '<br>');
	}
	if(LastName == "stop") {
		return LastName
	}else{
		document.write("Your last name is= " + LastName + '<br><br>');
	}
		name();
}
	name();