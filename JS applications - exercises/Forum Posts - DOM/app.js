window.addEventListener("load", solve);

function solve() {

  const inputFields = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  };
  const lists = {
    reviewList: document.getElementById('review-list'),
    publishedList: document.getElementById('published-list')
  };
  document.getElementById('publish-btn').addEventListener('click', publish);
  document.getElementById('clear-btn').addEventListener('click', clear);


  function publish(event) {
    event.preventDefault();

    //read input fields
    const title = inputFields.title.value;
    const category = inputFields.category.value;
    const content = inputFields.content.value;
    // validate input
    if (title == '' || category == '' || content == '') {
      return
    }
    //create list item 
    const li = document.createElement('li');
    li.className = 'rpost';
    li.innerHTML = `<article>
    <h4>${title}</h4>
    <p>Category: ${category}</p>
    <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;
    //add func to buttons
    const editBtn = li.querySelector('.edit');
    const approveBtn = li.querySelector('.approve');

    editBtn.addEventListener('click', edit);
    approveBtn.addEventListener('click', approve);

    //appnd to first list
    lists.reviewList.appendChild(li);
    //clear input fields
    inputFields.title.value = '';
    inputFields.category.value = '';
    inputFields.content.value = '';

    function edit(event) {

      //read list item content = the content come from imputFields now!!!
      //populate input fields with values
      inputFields.title.value = title;
      inputFields.category.value = category;
      inputFields.content.value = content;
      //remove list item from list
      li.remove();
    }

    function approve(event) {
      //move list items from first list to second list
      lists.publishedList.appendChild(li);
      //remove buttons
      editBtn.remove();
      approveBtn.remove();
    }
  }

  function clear(event) {
    event.preventDefault();

    lists.publishedList.innerHTML = '';
    //set seond list html to empty string
  }
}
