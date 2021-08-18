function easyHTTP(){
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    /*Here the this is not accessible inside the onload funcion as it 
    carries it's own scope. Here instead of regulae function we need to 
    use arrow function in order to access its lexical scope of the object.*/
    this.http.onload = () => {
        if(this.http.status === 200 && this.http.readyState === 4){
            //Here in callback we will pass error first in the callback, next response
            callback(null, this.http.responseText);
        } else {
            callback('Error '+ this.http.status);
        }
    }
    this.http.send();
}

easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json')

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('POST', url, true);

    this.http.onload = () => {
        callback(null, this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

easyHTTP.prototype.delete = function(url, data, callback){
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
        if(this.http.status === 200 && this.http.readyState === 4){
            //Here in callback we will pass error first in the callback, next response
            callback(null, "Post successfullu deleted");
        } else {
            callback('Error '+ this.http.status);
        }
    }
    this.http.send(JSON.stringify(data));
}