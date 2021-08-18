const http = new easyHTTP();

http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
    if(err){
        console.log(err);
    } else {
        console.log(posts);
    }
});
//Create Data
const data = {
    title: "Custom post",
    body: "This is a custom post"
};
//Create posts
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});
//Update posts
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

//Delete posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', data, function(err, response){
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});