function Zadanie1() {
    var chislo = prompt('Сколько овец вы хотите посчитать?');
    var fin = chislo;
    var str = ' ';
    chislo = 0;
    while (fin != 0) {
        fin = fin - 1;
        chislo = chislo + 1;
        str += chislo + ' овечка... ';
    }
    console.log(str);
    alert('Загляните в консоль!');
}

function Zadanie2() {
    var score = 16;
    var fin = score;
    score = 0;
    while (fin != 0) {
        fin = fin - 1;
        if (score % 2 == 0) {
            console.log(score + ' четное');
        } else {
            console.log(score + ' нечетное');
        }
        score = score + 1;
    }
    alert('Загляните в консоль!');
}

function Zadanie3() {
    var score = 9;
    while (score != 0) {
        score = score - 1;
        if (score % 2 == 0) {
            console.log(' # # # #');
        } else {
            console.log('# # # # ');
        }
    }
    alert('Загляните в консоль!');
}

function Zadanie4() {
    var chislo = prompt('Сколько чисел вы хотите отсортировать?');
    let arr = [chislo];
    var str = ' ';
    for (let i = 0; i < chislo; i++) {
        arr[i] = prompt('Введите число: ');
    }
    arr.sort();
    for (let i = 0; i < chislo; i++) {
        str += arr[i] + ' ';
    }
    console.log(str);
    alert('Загляните в консоль!');
}

function Zadanie5() {
    var chislo = prompt('Сколько чисел вы хотите сравнить?');
    let arr = [chislo];
    var str = ' ';
    for (let i = 0; i < chislo; i++) {
        arr[i] = prompt('Введите число: ');
    }
     var max = arr[0];
    for (let i = 1; i < chislo; i++) {
        if (max < arr[i]) {
            max = arr[i];
        } 
    }
    console.log(max);
    alert('Загляните в консоль!');
}
