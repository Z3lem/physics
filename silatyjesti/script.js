function Massa(){
    var input = document.createElement("input");
    var button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Решить";
    button.onclick = function(){
        if(input.value == ""){
            document.getElementById("vivod").innerHTML = "Введите значение Ft в поле ввода";
        } 
        input.value = Number(input.value);
        if (isNaN(input.value)){
            document.getElementById("vivod").innerHTML = "Введите именно число";
        } else{
            document.getElementById("vivod").innerHTML = `Примерно: ${input.value/10} Ньютонов`;
        }
    }
    input.type = "text";
    input.placeholder = "Введите силу тяжести в Ньтонах";
    var container = document.getElementById("input-container"); // получите элемент по идентификатору
    container.innerHTML = ""; // очистите содержимое элемента
    container.appendChild(input); // добавьте элемент input в элемент container
    container.appendChild(button);
}

function SilaTyajesti(){
    var input = document.createElement("input");
    var button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Решить";
    button.onclick = function(){
        if(input.value == ""){
            document.getElementById("vivod").innerHTML = "Введите значение M в поле ввода";
        } 
        input.value = Number(input.value);
        if (isNaN(input.value)){
            document.getElementById("vivod").innerHTML = "Введите именно число";
        } else{
            document.getElementById("vivod").innerHTML = `Примерно: ${input.value*10} Ньютонов`;
        }
    }
    input.type = "text";
    input.placeholder = "Введите массу в кг";
    var container = document.getElementById("input-container"); // получите элемент по идентификатору
    container.innerHTML = ""; // очистите содержимое элемента
    container.appendChild(input); // добавьте элемент input в элемент container
    container.appendChild(button);
}
