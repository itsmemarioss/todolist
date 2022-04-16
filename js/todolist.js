function subimitForm(event) {
    let titulo = document.getElementById("titulo").value;
    console.log(titulo);
    event.preventDefault();
}

let form = document.getElementById("form");
form.addEventListener("submit", subimitForm);