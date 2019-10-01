function calcular() {
    let temp;
    nota100.value = Math.trunc(valor.value / 100);
    temp = valor.value % 100;
    nota50.value = Math.trunc(temp / 50);
    temp = temp % 50;
    nota10.value = Math.trunc(temp / 10);
    temp = temp % 10;
    nota5.value = Math.trunc(temp / 5);
    nota1.value = temp % 5;
}