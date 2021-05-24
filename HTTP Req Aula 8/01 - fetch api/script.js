function solution1() {
    let employeesPromise = fetch("http://localhost:3000/employees")
    //
    employeesPromise.then((r1) => {
        r1.json().then((employees) => {
            let rolesPromise = fetch("http://localhost:3000/roles")
            rolesPromise.then(r2 => {
                r2.json().then(roles => {
                    let table = renderTable(employees, roles);
                    document.getElementById("app").innerHTML = table
                })
            })
        })
    })
}
//solution1()

function solution2() {
    fetch("http://localhost:3000/employees").then((r1) => {
        return r1.json()
    })
        .then((employees) => {
            fetch("http://localhost:3000/roles").then(r2 => {
                return r2.json()
            })
                .then(roles => {
                    let table = renderTable(employees, roles);
                    document.getElementById("app").innerHTML = table
                })
        })
}

solution2()

function renderTable(employees, roles) {
    let rows = employees.map((employee) => {
        let role = roles.find((role) => role.id == employee.role_id)
        return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`
    })
    return `<table> ${rows.join("")} </table>`
}