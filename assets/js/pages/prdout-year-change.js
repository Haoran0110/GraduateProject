/**
 * Created by wenhaoran1 on 2019/6/2.
 */
/*function show(){

	document.getElementById("datalabels-column").style.display="block";
	document.getElementById("datalabels-column-two").style.display="none";
	document.getElementById("datalabels-column-three").style.display="none";
}

function showt(){
	document.getElementById("datalabels-column").style.display="none";
	document.getElementById("datalabels-column-two").style.display="block";
	document.getElementById("datalabels-column-three").style.display="none";

}
function showtt(){
	document.getElementById("datalabels-column").style.display="none";
	document.getElementById("datalabels-column-two").style.display="none";
	document.getElementById("datalabels-column-three").style.display="block";

}*/

$(function () {
	$("#showa").click(function() {
		$("#datalabels-column-two").hide();
		$("#datalabels-column-three").hide();
		$("#datalabels-column").show();
	});
});
$("#showb").click(function() {
	$("#datalabels-column").hide();
	$("#datalabels-columnthree").hide();
	$("#datalabels-column-two").show();

});
$("#showc").click(function() {
	$("#datalabels-column").hide();
	$("#datalabels-column-two").hide();
	$("#datalabels-column-three").show();

});