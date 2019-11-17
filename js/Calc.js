/*String.prototype.trimAll=function()
{
    var r=/\s+/g;
    return this.replace(r ,'');
};*/

function Calculator() {

    var start = 0, end = 0;
    var num = document.
                forms["form"].
                elements["number"].
                value;
    var arr = [];

    //Цикл записи в массив
    for (var i = 0; i < num.length; i++) {
        arr[i] = num.charAt(i);
    }
    //цикл для получения позиций круглых скобок
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === "(") {
            start = i;
        }
        if (arr[i] === ")") {
            end = i;
            Hooks(start, end);
            /*Обнуление итерационной
            переменной для повторного
            прохождения всего массива
            * Задаем отрицательное значение,
            * по причине увелечения ее в
            * параметрах цикла*/
            i = -1;
        }
    }

    //Цикл умножения и деления
    for (i = 0; i < num.length; i++) {
        if (arr[i] === "*" || arr[i] === "/") {
            if (arr[i] === "*") {
                Multi(i);
            }
            if (arr[i] === "/") {
                Divide(i);
            }
        }
    }
    //Цикл суммирования и разности
    for (i = 0; i < num.length; ++i) {
         if (arr[i] === "+" || arr[i] === "-") {
             if (arr[i] === "+") { Plus(i); }
             if (arr[i] === "-") { Minus(i); }
         }
     }

    //Функция вычисления выражений в круглых скобках
    function Hooks(start, end) {
        for (var i = start; i < end; i++) {
            if (arr[i] === "*") {
                Multi(i);
                end -= 2;
            }
            if (arr[i] === "/") {
                Divide(i);
                end -= 2;
            }
        }
        for (i = start; i < end; i++) {
            if (arr[i] === "+") {
                Plus(i);
                end -= 2;
            }
            if (arr[i] === "-") {
                Minus(i);
                end -= 2;
            }
        }
        arr.splice(start, 1);
        arr.splice(--end, 1);
    }

    function Multi(index) {
        arr[index - 1] =
            +arr[index - 1] *
            +arr[index + 1];
        arr.splice((index), 2);
    }

    function Divide(index) {
        arr[index - 1] =
            +arr[index - 1] /
            +arr[index + 1];
        arr.splice((index), 2);
    }

    function Plus(index) {
        arr[index - 1] =
            +arr[index - 1] +
            +arr[index + 1];
        arr.splice((index), 2);
    }

    function Minus(index) {
        arr[--index] =
            +arr[--index] -
            +arr[++index];
        arr.splice((index), 2);
    }

    alert(arr.toString());
}






























