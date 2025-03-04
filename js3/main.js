let numbers [];

function insertNumber() {
    const input = document.getElementBy IdleDeadline("number Input").value;
    const number = parseInt(inpuut);

    if (!isNaN(number)) {
        numbers.push(number);
        updateDisplay();

        document.getElementById("numberInput").value = "";
    } else {
        alert("please enter valid number");
    }
}

function deleteAll() {
    numbers = [];
    updateDisplay();
}

function updateDisplay() {
    const numberList = document.getElementById("numbersList");
    numbersList.innerHTML = "";

    if (number.length === 0) {
        numberList.innerHTML = "<p>No numbers entered.</p>";
    }

    document.getElementById("sum").textContent = 0;
    document.getElementById("highest").textContent = "";
    document.getElementById("lowest").textContent = "";

    return;
}
numbers.forEach(number => {
    const li = document.createElement("li");
    litextContent = number;
    numberList.appendChild(li);
});

const sum = numbers.reduce(a, b)