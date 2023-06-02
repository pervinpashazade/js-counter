const minus_btn = document.getElementById("minus")
const plus_btn = document.getElementById("plus")
const input = document.getElementById("input")

const max_value = 5;
const min_value = 1;
let current_value = 2

input.value = current_value

// decrease
minus_btn.addEventListener("click", function () {
    if (current_value == min_value) return
    current_value--
    // input.value = current_value 
    changeInputValue(current_value)
})

// increase
plus_btn.addEventListener("click", function () {
    if (current_value == max_value) return
    current_value++
    // input.value = current_value * 2
    changeInputValue(current_value)
})

input.addEventListener("input", function (event) {
    console.log(typeof event.target.value);

    if(!Number(event.target.value)){
        alert("FALSE")
        // input.value = 1
        changeInputValue(1)
        return
    }


    if (event.target.value >= max_value) {
        // input.value = max_value
        changeInputValue(max_value)
        current_value = max_value
    } else if (event.target.value <= min_value) {
        // input.value = min_value
        changeInputValue(min_value)
        current_value = min_value
    }

})

function changeInputValue(param) {
    if (!param) {
        alert("paramert daxil etməmisiniz!")
        return
    }
    input.value = param
}


if (Number("555555salam")) {
    console.log("ok");
} else {
    console.log("convert olunmadi!")
}

// console.log(typeof "5");
// console.log(typeof Number("5salam"));

// // covert data to string
// console.log(typeof true)
// console.log(typeof String(true))