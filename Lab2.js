function addition(number1, number2){
	
	document.write(number1 + ' + ' + number2 + ' = ')
	document.write(number1+number2);
}
	addition(10, 12);

document.write("<br>");

function subtraction(number1, number2){
	document.write(number1);
	document.write(' - ')
	document.write(number2);
	document.write(' = ');
	document.write(number1-number2);
}
	subtraction(58, 34);

document.write("<br>");

function multiplication(number1, number2){
	document.write(number1);
	document.write(' * ')
	document.write(number2);
	document.write(' = ');
	document.write(number1*number2);
}
	multiplication(6, 7);

document.write("<br>");

function division(number1, number2){
	document.write(number1);
	document.write(' : ')
	document.write(number2);
	document.write(' = ');
	document.write(number1/number2);
}
	division(144, 12);

document.write("<br><br>");

function increment(number){
	for(a=1; a<=3; a++){
		document.write(number)
		document.write(" + " + "1" + " = "); nbv
		number++;
		document.write(number);
		document.write('<br>');
	}
}
	increment(12);

document.write('<br><br>');

function decrement(number){
	for(a=1; a<=3; a++){
		document.write(number)
		document.write(' - ');
		document.write(' 1 ');
		document.write(' = ');
		number--;
		document.write(number);
		document.write('<br>');
	}
}
	decrement(34);