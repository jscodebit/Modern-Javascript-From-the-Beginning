posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post, callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function(){
        let output = '<ul>';
        posts.forEach(element => {
            output += `<li>Title: ${element.title}, Body: ${element.body}</li>`
        });
        output += '</ul>';
        document.body.innerHTML = output;
    }, 1000)
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
