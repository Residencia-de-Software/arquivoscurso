var original = document.getElementById("texto").innerHTML;
function atualiza() {
    document.getElementById("texto").innerHTML = "Segue o Lider";
    document.getElementById("texto").style.color = "#000000";
}
function trocacor() {
    document.getElementById("texto").style.color = "#15247A";
    document.getElementById("texto").innerHTML = original;
}
function calcular() {
    var n1 = Number(document.getElementById("n1").value);
    var n2 = Number(document.getElementById("n2").value);
    document.getElementById("texto").innerHTML = "A soma dos dos numeros é: " + (n1 + n2);
    console.log(n1 + n2);
}
function google() {
    window.location = "http://www.flamengo.com.br";
    window.open("http://www.google.com.br");
}
function add() {
    document.getElementById("itens").innerHTML = document.getElementById("itens").innerHTML + 
    "<p>" + 
    document.getElementById("texto1").value;
}