document.getElementById("get-jokes").addEventListener('click', getJokes);

function getJokes(e){
    //console.log("get jokes");
    const number = document.querySelector('input[type="number"]').value;
    //console.log(number);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200 && this.readyState === 4){
            const response = JSON.parse(this.responseText);
            let data;
            if(response.type === 'success'){
                data = '<ul>';
                response.value.forEach(obj => {
                    data += `<li>${obj.joke}</li>`
                });
                data += '</ul>';   
            }
            document.querySelector('.jokes').innerHTML = data;
        }
    }
    xhr.send();
    e.preventDefault();
}