
function cambiaColor() {
    document.getElementById("div1").style.color = "chartreuse";
}
function regresar() {
    document.getElementById("div1").style.color = "rgb(255, 50, 50)";
}
function actualizaTotal(precio) {
    var total  =  document.getElementById("total").value;

    var num = parseInt(total);
    num += parseInt(precio);

    document.getElementById("total").value = num.toString();

}