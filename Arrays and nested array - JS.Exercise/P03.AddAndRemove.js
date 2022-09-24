function action(commands) {

    const result = [];
    let initilaNumber = 0;
    commands.forEach(cmd => {
        initilaNumber++;
        if (cmd == 'add') {
            result.push(initilaNumber);
        }
        else { //remove
            if (result.length != 0) {

                result.pop();
            }
        }
    })
    if (result.length == 0) {
        console.log('Empty');
    }
    else {
        console.log(result.join('\n'));
    }

}


action(['add',
    'add',
    'remove',
    'add',
    'add']);

action(['remove',
    'remove',
    'remove']);