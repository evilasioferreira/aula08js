var botao = document.querySelector('.btn')

function getValue() {
    var inputElement = document.getElementById('myInput');
    var inputValue = inputElement.value;
    console.log(inputValue);
    return inputValue;
}

botao.addEventListener('click', getValue)