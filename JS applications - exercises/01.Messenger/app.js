function attachEvents() {
    document.getElementById('submit').addEventListener('click', createComment);;
    document.getElementById('refresh').addEventListener('click', displayComments);

    let url = 'http://localhost:3030/jsonstore/messenger';
    let textArea = document.getElementById('contents');
    function createComment() {
        let authorName = document.querySelector('[name="author"]');
        let content = document.querySelector('[name="content"]');

        if (authorName.value == '' || content.value == '') {
            return;
        }
        fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorName.value.trim(),
                content: content.value.trim()
            })
        })
            .then(res => {
                if (res.ok == false) {
                    throw new Error('Error creating new record');
                }
                return res.json();
            })
            .catch(err => alert(err));


        authorName.value = '';
        content.value = '';
       
    }
    async function displayComments() {

        try {
            const response = fetch(url);
            if (response.ok == false) {
                throw new Error('Error');
            }

            let data = await (await response).json();
            let comments = [];
            Object.values(data).forEach(user => comments.push(`${user.author}: ${user.content}`))

            textArea.value = comments.join('\n');

        } catch (error) {
            alert(error.message);
        }
    }


}

attachEvents();