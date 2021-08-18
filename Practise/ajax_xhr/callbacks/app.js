posts = [{title: "Post One", body: "This is post One"},
{title: "Post Two", body: "This is post Two"}];

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000)
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(element => {
            output += `<li>Title: ${element.title}, body: ${element.body}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: "Post Three", body: "This is post Three"},getPosts)
