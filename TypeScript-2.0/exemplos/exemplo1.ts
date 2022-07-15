let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function somarNums(num1: number, num2: number, devePrintar: boolean, frase: string) {
    let resultado = num1 + num2
    if (devePrintar) {
        console.log(frase + resultado)
    }
    return num1 + num2;
}

let devePrintar = true;
let frase = 'O valor é:'

button?.addEventListener('click', () =>
    console.log(somarNums(Number(input1.value), Number(input2.value), devePrintar, frase))
);


//
//
/*
button?.addEventListener('click', () => {
    if (input1 && input2) {
        console.log(somarNums(Number(input1.value), Number(input2.value)));
    }
})*/