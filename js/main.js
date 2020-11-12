
let numIn = document.querySelector('.windowIn');
let btnPlus = document.querySelector('.plus');
let btnOut = document.querySelector('#resultAll');
let windowMem = document.querySelector('.windowMemory');
let memoryOut = '';
//вывод результата
btnOut.onclick = () => {
    let result = '';
    result += numIn.value;
    memoryOut += `${numIn.value} = ${eval(result)} <br>`
    numIn.value = eval(result);
    result = '';
    numIn.value = '';
    windowMem.innerHTML = memoryOut;
}
//нажатие клавиш
let btnNumAll = document.querySelectorAll('.numCalc');
for (let i = 0; i < btnNumAll.length; i++) {
    btnNumAll[i].onclick = function () {
        numIn.value += this.getAttribute('data');
    }
}
//деление на ноль
document.querySelector('#divByZero').onclick = () => {
    return numIn.value = 1 / numIn.value;
}
//квадрат
document.querySelector('#x2').onclick = () => {
    return numIn.value = numIn.value ** 2;
}
//очищение поля ввода
document.querySelector('#clearWindow').onclick = () => {
    numIn.value = '';
    memoryOut = '';
    windowMem.innerHTML = '';
}
















