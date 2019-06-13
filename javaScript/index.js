function changeText() {
    const textbox = document.getElementById("output");
    textbox.value = "Hello, world!";
    }


    function swapText() {
        const span = document.getElementById("output2");
        const textBox = document.getElementById("textbox2");
        const temp = span.innerHTML;
        span.innerHTML = textBox.value;
        textBox.value = temp;
        }