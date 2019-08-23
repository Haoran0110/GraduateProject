/**
 * Created by wenhaoran1 on 2019/6/2.
 */
/*$(function pv() {
	$("#pv").click(function() {
		$("#line-chart-gradient").hide();
		$("#line-chart-gradient-three").hide();
		$("#line-chart-gradient-two").show();

	});
});
$(function juxingdian () {
	$("#juxingdian").click(function() {
		$("#line-chart-gradient-two").hide();
		$("#line-chart-gradient-three").hide();
		$("#line-chart-gradient").show();
	});
});




$(function kxb() {
	$("#kxb").click(function() {
		$("#line-chart-gradient").hide();
		$("#line-chart-gradient-two").hide();
		$("#line-chart-gradient-three").show();

	});
});*/
var one = document.getElementById("line-chart-gradient");
var two = document.getElementById("line-chart-gradient-two");
var three = document.getElementById("line-chart-gradient-three");


function juxingdian(){
	one.style.display='block';
	two.style.display='none';
	three.style.display='none';

}

function pv(){
	one.style.display='none';
	two.style.display='block';
	three.style.display='none';

}
function kxb(){
	one.style.display='none';
	two.style.display='none';
	three.style.display='block';

}
