function list(names) {
    
    const result = names.sort((a,b)=>a.localeCompare(b));

    for (let i = 0; i < names.length; i++) {
        
        const currentName = names[i];
        console.log(`${i+1}.${currentName}`);
    }
}

list(["John", "Bob", "Christina", "Ema"]);