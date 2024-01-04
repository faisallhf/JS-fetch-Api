var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  var data;
//   var ID = document.getElementById('id');
//   var title = document.getElementById('title');
  var table = document.getElementById('table');

  fetch("https://jsonplaceholder.typicode.com/todos", requestOptions)
    .then(response => response.json())
    .then(result => {
        data = result;
        console.log(data);
        
        data.forEach(elem => {

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");

            td1.innerText = elem.id;
            td2.innerText = elem.title;
            td3.innerText = elem.completed;
            td4.innerText = elem.userId;

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            table.appendChild(tr);

            // if(elem.id %2 == 0){
                
            // }
        });
    })
    .catch(error => console.log('error', error));