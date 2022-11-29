class Button {
    constructor(label) {
        this.lavel = label;
    }

    click() {
        console.log(`${this.label} is clicked`);
    }
}
class FanctButton extends Button {
    constructor(label, color) {
        super(label);
        this.color = color;
    }

    glow(){
        console.log(`The button glows in the ` + this.color);
    }
}

const btn = new FanctButton('Print', 'green');

btn.click();
btn.glow();