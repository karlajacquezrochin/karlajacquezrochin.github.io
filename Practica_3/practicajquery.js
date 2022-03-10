$(document).ready(function(){

	$("#titulo").click(function(){
		$(this).hide();
	})

	$("#boton").click(function(){
		$("#e1").fadeToggle("slow");//Aparece y desaparece cuando se manda la accion, en este caso cuando se presiona el boton
		$("#e2").fadeToggle(2000);//Aparece y desaparece cuando se manda la accion, en este caso cuando se presiona el boton
		$("#e3").fadeToggle();

		$("#e1").fadeTo("slow", 0.20);

		// $("#e1").fadeOut(3000);
		// $("#e2").fadeOut(8000);
		// $("#e3").fadeOut(12000);

	})

	$("#lista").click(function(){
		$("#contenido").slideToggle("slow");
	})

})