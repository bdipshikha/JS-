/*var x=5;
if(x){
	console.log("YES!");
}*/
var first= "Raz";
var last= "Goldin";
var nameChecker =function(first,last){
if (first.length>last.length){
	console.log(first);
}else{
	console.log(last);
}
if (first.length%last.length===0){
	console.log("what are the odds!");
}else{
	console.log("Never tell me the odds!");
}
if ((first.length%2===0)&&(last%2===0)){
	console.log("Even Steven!");
}else{
	console.log("How odd!");
}
}
nameChecker("Dipshikha","Biswas");
