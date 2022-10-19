function validate() {
    let emailInput = document.getElementById('email');
    let pattern = new RegExp('^[a-z]+@[a-z]+\\.[a-z]+');

    emailInput.addEventListener('change',()=>{
        if (pattern.test(emailInput.value)) {
            emailInput.classList.remove('error');
        }
        else{
            emailInput.classList.add('error');

        }
    });
}