function solve() {
    let inputFields = {
        recipientName: document.getElementById('recipientName'),
        title: document.getElementById('title'),
        message: document.getElementById('message')
    };
    let divElements = {
        listOfMails: document.getElementById('list'),
        sentMails: document.querySelector('.sent-list'),
        deletedMails: document.querySelector('.delete-list')
    };

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    addBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);

    function add(event) {
        event.preventDefault();

        let recipientName = inputFields.recipientName.value;
        let title = inputFields.title.value;
        let message = inputFields.message.value;

        let li = document.createElement('li');
        li.innerHTML = `<h4>Title: ${title}</h4>
        <h4>Recipient Name: ${recipientName}</h4>
        <span>${message}</span>
        <div id="list-action">
            <button type="submit" id="send">Send</button>
            <button type="submit" id="delete">Delete</button>
        </div>`;

        let sendBtn = li.querySelector('#send');
        let deleteBtn = li.querySelector('#delete');
        sendBtn.addEventListener('click', send);
        deleteBtn.addEventListener('click', remov);


        divElements.listOfMails.appendChild(li);


        function send(event) {
            event.preventDefault();
            li.remove();
            let sendInfo = document.createElement('li');
            sendInfo.innerHTML = `<span>To: ${recipientName}</span>
          <span>Title: ${title}</span>
          <div class="btn">
              <button type="submit" class="delete">Delete</button>
          </div>`;
            let deleteBtn = sendInfo.querySelector('button');
            deleteBtn.addEventListener('click', remov);
            divElements.sentMails.appendChild(sendInfo);
        }

        function remov(event) {
            event.preventDefault();
            event.currentTarget.parentElement.parentElement.remove();

            let removedInfo = document.createElement('li');
            removedInfo.innerHTML = `<span>To: ${recipientName}</span>
            <span>Title: ${title}</span>`;

            divElements.deletedMails.appendChild(removedInfo);
        }
    }
    function reset(event) {
        event.preventDefault();
        inputFields.recipientName.value = '';
        inputFields.title.value = '';
        inputFields.message.value = '';
    }
}
solve()