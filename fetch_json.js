// fetch API でJSONを取得してページに表示させるコード

    let myList = document.getElementById('myList');
    const url = "http://localhost:3000/samples/posts";
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (url) {
            for (let i = 0; i < url.length; i++) {
                let listItem = document.createElement('li');
                listItem.innerHTML = url[i].content;
                myList.appendChild(listItem);
            }
            // .then(function (myJson) {
            // document.body.innerHTML = myJson;
            // console.log(json);
        });
