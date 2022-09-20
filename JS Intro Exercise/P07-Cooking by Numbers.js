function cookingNumber(number, command1, command2, command3, command4, command5) {
    number = +number;
    let commandList = [command1, command2, command3, command4, command5];
    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.2;

    commandList.forEach(command => {
        switch (command) {
            case 'chop':
                number = chop(number);
                
                break;
            case 'dice':
                number = dice(number);
                
                break;
            case 'spice':
                number = spice(number);
                
                break;
            case 'bake':
                number = bake(number);
                
                break;
            case 'fillet':
                number = fillet(number);
                
                break;
            default:
                break;
        }
        console.log(number);
    });

}


cookingNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');