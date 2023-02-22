function removeItem(elem){
    id = elem.getAttribute("cs")
    acceptOrder("eyJhbGciOiAic2hhMjU2IiwgInR5cGUiOiAiand0In0=.eyJ1c2VyLWlkIjogNywgIm93bmVyLWlkIjogMTMsICJtZW51LWlkIjogMiwgImlhdCI6IDE2NzY5NjE4MTksICJleHAiOiAxNjc3MDA1MDE5fQ==.465a070cb42c6114afd5c7bf59ca88220066c1fb223676e57acc853c937da205" , id)
}


function acceptOrder(token = "eyJhbGciOiAic2hhMjU2IiwgInR5cGUiOiAiand0In0=.eyJ1c2VyLWlkIjogNywgIm93bmVyLWlkIjogMTMsICJtZW51LWlkIjogMiwgImlhdCI6IDE2NzY5NjE4MTksICJleHAiOiAxNjc3MDA1MDE5fQ==.465a070cb42c6114afd5c7bf59ca88220066c1fb223676e57acc853c937da205" , order_id){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "token": token,
      "menuId": 2
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`http://127.0.0.1:8000/waiter/order/${order_id}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.success){
            rw = document.getElementById(order_id)
            rw.style.display = "none"
        }
        else{
            alert(data.message)
        }
      })
      .catch(error => console.log('error', error));
}



