
$(document).ready(function(){
	odswiez();

	$(".button_usun").on('click',function(){
		localStorage.removeItem(this.id);
		location.reload();
	});

$("#button_dodaj").click(function(){
	var numer = localStorage.getItem("numer");
	if(localStorage.getItem("numer") == null){
		localStorage.setItem("numer",1);
		numer = 1;
		localStorage.setItem(numer,$("#input_cel").val())
		location.reload();
	}else{
		numer = Number(numer) +1;
		localStorage.setItem("numer",numer);
		localStorage.setItem(numer,$("#input_cel").val())
		location.reload();
	}
})
function odswiez(){
	var dlugosc = Number(localStorage.getItem("numer"))+1;
	$("#div_list").text("");
	$("#input_cel").val("");
	for(var i = 0; i<dlugosc; i++){
		if (localStorage.getItem(i)==null){
			}
			else{
				var str = localStorage.getItem(i)
				str = str.charAt(0).toUpperCase() + str.slice(1);
		$("#div_list").append("<p><span id='span_cel'>"+str+"</span>"+"<button class='button_usun btn btn-danger' id='"+i+"'>Usun</button></p>");

	}}
}
})