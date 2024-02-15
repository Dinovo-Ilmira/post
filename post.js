function createPost(title, body) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            body: body,
            userId: 1 
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(post => {
        addPostToDOM(post);
    })
    .catch(error => console.error('Error creating post:', error));
}

function addPostToDOM(post) {
    const postsContainer = document.getElementById('posts-container');
    const postHTML = getPostHTML(post);
    appendPost(postsContainer, postHTML);
}


createPost('Новый пост', 'Это текст нового поста.');
