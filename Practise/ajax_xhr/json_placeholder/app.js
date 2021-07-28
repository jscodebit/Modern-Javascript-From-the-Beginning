const http = new easyHTTP;

// //Get Posts
// http.get('https://jsonplaceholder.typicode.com/post1s', function(error, posts){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(posts);
//     }
// });

const data = {
    title: 'Custom Post',
    body: 'This is custom post' 
}

//Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if(error) {
        console.log(error);
    } else {
        console.log(post);
    }
})