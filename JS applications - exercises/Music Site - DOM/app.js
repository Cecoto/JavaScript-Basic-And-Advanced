window.addEventListener('load', solve);

function solve() {
    let inputFields = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date')
    };
    let outputContainers = {
        songCollection: document.querySelector('#all-hits div'),
        savedSongs: document.querySelector('#saved-hits div'),
        likes: document.querySelector('#total-likes .likes p')
    };
    let addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', addSong);

    let totalLIkes = 0;
    function addSong(event) {
        event.preventDefault();
        let genre = inputFields.genre.value;
        let name = inputFields.name.value;
        let author = inputFields.author.value;
        let date = inputFields.date.value;

        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }
        let div = document.createElement('div');
        div.className = 'hits-info';
        div.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="save-btn">Save song</button>
            <button class="like-btn">Like song</button>
            <button class="delete-btn">Delete</button>`;

        let saveButton = div.querySelector('.save-btn');
        let likeButton = div.querySelector('.like-btn');
        let deleteButton = div.querySelector('.delete-btn');
        deleteButton.addEventListener('click', deletee);

        saveButton.addEventListener('click', saveSong);
        likeButton.addEventListener('click', likeSong);


        outputContainers.songCollection.appendChild(div);

        inputFields.genre.value = '';
        inputFields.name.value = '';
        inputFields.author.value = '';
        inputFields.date.value = '';

        function saveSong(e) {
            e.currentTarget.parentElement.remove();
            div.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="delete-btn">Delete</button>`;

            outputContainers.savedSongs.appendChild(div);

            let deleteBtn = div.querySelector('button');
            deleteBtn.addEventListener('click', deletee);

        }

    }
    function deletee(e) {
        e.currentTarget.parentElement.remove();
    }
    function likeSong(e) {
        e.currentTarget.disabled = true;
        totalLIkes++;
        outputContainers.likes.textContent = `Total Likes: ${totalLIkes}`;
    }
}