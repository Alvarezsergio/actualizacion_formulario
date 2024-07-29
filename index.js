// @ts-check 

const url = 'https://jsonplaceholder.typicode.com/posts' 
const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button");
const form = document?.querySelector("form");
const select = document?.querySelector("select");


async function handleSubmit(event) {
    event.preventDefault();

    const data = {
        name: event.target["name"].value,
        lastname: event.target["lastname"].value,
        email: event.target["email"].value,
        date: event.target["dateOfBirth"].value,
        country: event.target["country"].value,

    };
    const errors = validate(data)
    if (errors.length) {
        return alert("error en el formulario")
    }


    const response = await fetch(url, {
        method: "POST", 
        body: JSON.stringify(data), 
    })

    const { id } = await response.json();
    if (id) alert("Formulario exitoso")
    else alert("error")
}

function validate(data) {
    let errors = []
    if (!isNaN(data.name)) {
        errors.push("Error en campo nombre")
    }
    if (!isNaN(data.lastname)) {
        errors.push("Error en campo apellid0")
    }
    return errors;
}

function darkMode() {
    document.body.classList.add("bg-dark", "text-light");
    document.body.classList.remove("bg-light", "text-dark");      
    buttons.forEach(button => button.classList.add("btn-warning"));
    buttons.forEach(button => button.classList.remove("btn-primary"));
    form.classList.add("text-dark");
}

function lightMode() {
    document.body.classList.add("bg-light", "text-dark");
    document.body.classList.remove("bg-dark", "text-light");   
    buttons.forEach(button => button.classList.add("btn-primary"));    
    buttons.forEach(button => button.classList.remove("btn-warning"));
}