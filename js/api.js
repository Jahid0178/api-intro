// load data
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
};

// load users
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data));
};

// load posts
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data));
};

// display user
function displayUser(users) {
    const ul = document.getElementById('users');
    for(const user of users) {
        const li = document.createElement('li');
        li.innerText = `Username: ${user.name}`;
        ul.appendChild(li);
    };
};

// load todo
function loadTodo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todo => console.log(todo));
};

// load album
function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => console.log(data));
};

// load photos
function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhoto(data));
};

// display photo
function displayPhoto(photos) {
    console.log(photos);
    const section = document.getElementById('display-photo');
    for (const photo of photos) {
        console.log(photo)
        const div = document.createElement('div');
        div.innerHTML = `
            <h2>${photo.title}</h2>
            <p>${photo.url}</p>
        `;
        section.appendChild(div);
    };
};