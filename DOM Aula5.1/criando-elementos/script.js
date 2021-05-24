var fsList = document.querySelectorAll(".multiple-fild")
for (var i = 0; i < fsList.length; i++) {
    initMultipleFielSet(fsList[i])
}

function initMultipleFielSet (fs) {
    var addButton = document.createElement("button")
    addButton.textContent = "Adicionar"

    fs.appendChild(addButton)
    
    addButton.addEventListener("click", function(){
        var newImput = document.createElement("input")
        fs.appendChild(newImput)
    })
}