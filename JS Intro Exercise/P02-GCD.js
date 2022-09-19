function greatesrDevisor(a,b) {
    if (b) {
        return greatesrDevisor(b,a % b);
    }
    else
    {
        console.log(a);
    }

}

greatesrDevisor(15,5);