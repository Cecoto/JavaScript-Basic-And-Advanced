function getArticleGenerator(articles) {
    const div = document.getElementById('content');

    return function () {
        //remove first element from list
        const article = articles.shift();
        if (article != undefined) {

            //costruct HTML elements
            const element = document.createElement('article');
            element.textContent = article;
            //display article on page
            div.appendChild(element);
        }
    };
}
