async function solution() {
    //1.fetch all articles from server
    //2.create divs with titles // toggle buttons
    //3.on click fetch details data
    //4.update html with data 
    try {
        let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
        let response = await fetch(url);
        if (response.ok == false) {
            throw new Error('Invalid url link');
        }
        let data = await response.json();
        console.log(data);


    } catch (error) {

    }
}
