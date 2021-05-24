var fsList = document.querySelectorAll(".multiple-fild")
for (var i = 0; i < fsList.length; i++) {
    initMultipleFielSet(fsList[i])
}

function initMultipleFielSet (fs) {
    var addButton = document.createElement("button")
    addButton.textContent = "Adicionar"
    addButton.type = "button"

    fs.appendChild(addButton)

    var firstInput = fs.querySelector("input")

    addButton.addEventListener("click", function(){
        var div = document.createElement("div")
        var newImput = document.createElement("input")
        newImput.name = firstInput.name
        newImput.type = firstInput.type

        var deleteButton = document.createElement("button")
        deleteButton.textContent = 'Excluir'
        deleteButton.type = 'button'

        div.appendChild(newImput)
        div.appendChild(deleteButton)

        deleteButton.addEventListener("click", function() {
            div.remove()
        })

        fs.insertBefore(div, addButton)
    })
}