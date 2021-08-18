const posts = [{title: 'Post 1', body: 'Post 1 body'},
                {title: 'Post 2', body: 'Post 2 body'}]

function createPost(post){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = false;
            posts.push(post);
            if(!error){
                resolve();
            } else {
                reject('Error: Somethign went wrong');
            }
        }, 2000)
    })
}
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(element){
            output += `<li>Title : ${element.title}, Body: ${element.body}</li>`
        });
        document.body.innerHTML = output;
    })
}
createPost({title: 'Post 3', body: 'Post 3 body'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});