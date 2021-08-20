document.getElementById("dataText").addEventListener('click', getText);

function getText(){
    fetch('./test.txt')
    .then(function(res){
        console.log(res);
    })
}

