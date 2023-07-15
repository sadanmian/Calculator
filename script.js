let string = ""
let buttons = document.querySelectorAll('.button')
Array.from(buttons).forEach((key) => {
    key.addEventListener('click', (event) => {
        if (event.target.innerHTML == "=") {
            string = eval(string)
            document.querySelector('.input').value = string
        }
        else if (event.target.innerHTML == "C") {
            string = ""
            document.querySelector('.input').value = string
        }
        else {
            string = string + event.target.innerHTML
            document.querySelector('.input').value = string
        }
    })
})