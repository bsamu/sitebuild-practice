const title = (titleOfForm) => {
    return `
        <h1>
            ${titleOfForm}
        </h1>
    `
}

const inputElement = (type, id, placeholder) => {
    return `
        <div class="${id}">
            <input type="${type}" id="${id}" name="${id}" placeholder="${placeholder}">
        </div>
    `
}

const inputElementCb = (type, id, label, span) => {
    return `
        <div class="${id}">
            <input type="${type}" id="${id}" name="${id}">
            <label for="${id}">${label}<a href="#">${span}</a></label>
        </div>
    `
}

const formSubmit = (event) => {
    event.preventDefault();
    const eventTarget = event.target;
    eventTarget.classList.add("submitted");
}

const signUpForm = `
    <form id="form">
        ${title("Jelentkezés")}
        ${inputElement("text", "name", "Név")}
        ${inputElement("email", "email", "Email cím")}
        ${inputElementCb("checkbox", "terms", "Elolvastam és elfogadom az ", "adatkezelési tájékoztatót.")}
        <button>Elküld</button>
    </form>
`

function loadEvent() {
    const root = document.querySelector("#root");
    root.insertAdjacentHTML("beforeend", signUpForm)

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);
}

window.addEventListener("load", loadEvent);