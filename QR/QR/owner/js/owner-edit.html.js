function updateItem() {
    let name = document.getElementById('edit-name').value;
    let description = document.getElementById('edit-description').value;

    itemId = getparam();
    let price = document.getElementById('edit-price');
    let token = sessionStorage["token"]


    console.log(name);
    console.log(description);
    console.log(itemId);


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "itemId": itemId,
        "description": description,
        "price": price,
        "token": token
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/menus/items", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

function addItem() {

    const urlParams = new URL(window.location.toLocaleString()).searchParams;
    // let menuId = urlParams.get('id');
    let menuId = getparam()

    let name = document.getElementById("new-item-name-1").value;
    let description = document.getElementById("new-description-1").value;

    let price = document.getElementById('item-price').value;

    let token = sessionStorage["token"]

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "menuId": menuId,
        "name": name,
        "price": price,
        "description": description,
        "token": token
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/menus/items", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getItems() {
    let token = sessionStorage["token"]
    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/menus/items", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)

        })
        .catch(error => console.log('error', error));
}


function getparam() {
    const urlParams = new URL(window.location.toLocaleString()).searchParams;
    return (urlParams.get('id'))
}



