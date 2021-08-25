document.getElementById("dataText").addEventListener('click', getText);
document.getElementById("dataJson").addEventListener('click', getJSON);

function getText(){
    fetch('./test.txt')
        .then(response => response.text())
        .then(data => document.getElementById("output").innerHTML = data)
        .catch(error => console.log(error));
}

function getJSON(){
    fetch('./sample.json')
    .then(res => res.json())
    .then(data => {
        let output = "";
        data.forEach(element => {
        output += `<li>Title: ${element.title} Body: ${element.body}</li>`;            
        });
        document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
}

for(var i = 0; i < 3; i++){
    setTimeout(function(){
        alert(i);
    }, 1000 + i)
}

(function(){
    var a = b = 5;
})()
console.log("Coderbyte");
console.log(b);