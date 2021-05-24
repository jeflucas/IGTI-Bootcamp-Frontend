let employeesPromise = fetch("http://localhost:3000/employees")
//

employeesPromise.then((resposta) => {
    resposta.json().then((arrayEmployees) => {

        let table = renderTable(arrayEmployees);
        document.getElementById("app").innerHTML = table
    })

})

function renderTable(arrayEmployees) {
    let rows = arrayEmployees.map(employee => {
        return `<tr><td>${employee.id}</td><td>${employee.name}</td></tr>`
    })

    return `<table> ${rows.join(" ")} </table>`
}