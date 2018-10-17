var number = prompt("How many tables?");
function tables(){
	for(n=1; n<=10; n++){
		document.write(n * number + "<br>");
	}
}
tables();