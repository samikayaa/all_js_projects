
function karanlikTemayiAcKapa(event) {
    const bodyItem = document.querySelector("body");

    if (bodyItem.classList.contains("dark")) {
        bodyItem.classList.remove("dark");
        event.target.textContent="Karanlık temayı aç";
    } else {
        bodyItem.classList.add("dark");
        event.target.textContent="Karanlık temayı kapat";
    }
}

const buttonItem = document.createElement("button");
buttonItem.setAttribute("id","acKapa");
buttonItem.textContent = "Karanlık temayı aç";
buttonItem.addEventListener("click",karanlikTemayiAcKapa);

document.querySelector(".description").appendChild(buttonItem);
