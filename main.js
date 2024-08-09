let output = document.getElementById("output")


const clicked = (event) => {

    output.value += event.target.value
}


const calculate = () => {
    result = eval(output.value)
    output.value = result

}

const reset = (event) => {
    if (event.target.value === "AC") { output.value = "" }
    else if (event.target.value === "DEL") {
        output.value = output.value.slice(0, output.value.length - 1)
    }
}

