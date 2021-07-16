function greet(name){
    //console.log('Hello');
    return `Hello ${name}`;
}
console.log(greet("Soujanya"));

let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

val = window.location;
val = window.location.hostname; //http://127.0.0.1
val = window.location.port; //5500
val = window.location.href; //http://127.0.0.1:5500/Practise/index.html
val = window.location.search;  //http://127.0.0.1:5500/Practise/index.html?id=1

// Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();

//History Object

//window.history.go(-2);
val = window.history.length;

//Navigator Object

val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.language;

console.log(val);