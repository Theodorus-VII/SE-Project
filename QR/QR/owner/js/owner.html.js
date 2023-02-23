async function CreateMenu() {

    const name = document.getElementById('menu-title').value;
    const description = document.getElementById('menu-description').value;

    const token = sessionStorage["token"];

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "name": name,
        "description": description,
        "token": token
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    await fetch("http://127.0.0.1:8000/menus", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

async function getMenu() {
    let token = sessionStorage["token"]

    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    await fetch("http://127.0.0.1:8000/menus", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result["menuId"])
            document.getElementById("menu-title-1").innerHTML += ":   " + result["name"];
            document.getElementById("menu-description-1").innerHTML += ":   " + result["description"];
            sessionStorage.setItem("menuId", result["menuId"]);
        }
        )
        .catch(error => console.log('error', error));

}


async function DeleteMenu() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let token = sessionStorage["token"]
    let menuId = sessionStorage["menuId"]

    var raw = JSON.stringify({
        "token": token,
        "menuId": menuId
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/menus", requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error));
}

function getQR() {

    tableId = document.getElementById('table-number').value

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let token = sessionStorage["token"]
    let menuId = sessionStorage['menuId']
    console.log(menuId)

    var raw = JSON.stringify({
        "token": token,
        "string": `http://127.0.0.1:8000/menu/${menuId}/tableId=${tableId}`
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let res;

    fetch("http://127.0.0.1:8000/menus/qrcode", requestOptions)
        .then(response => response.text())
        .then(result => { document.getElementById('QR-image').innerHTML = result })
        .catch(error => console.log('error', error));
}


function printQR() {
    if (document.getElementById('QR-image').innerHTML != '') {
        let originalContent = document.body.innerHTML;
        document.body.innerHTML = document.getElementById('QR-image').innerHTML;
        window.print();
        document.body.innerHTML = originalContent
    }
}


function addWaiter() {
    let username = document.getElementById('waiter-name').value;
    let password = document.getElementById('waiter-password').value;
    let token = sessionStorage["token"];



    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "userName": username,
        "password": password,
        "token": token
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/owner/waiter", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function deleteWaiter() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let token = sessionStorage["token"]

    var raw = JSON.stringify({
        "token": token,
        "userName": "cooconWaiter"
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/owner/waiter", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


function toggleQR() {
    document.getElementById("qr-window").classList.toggle("d-none");
}
function toMenuEdit() {
    window.location.replace("owner-edit.html?id=" + sessionStorage["menuId"]);
}






