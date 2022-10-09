function attachEventsListeners() {

    let days = document.getElementById('daysBtn');
    let hours = document.getElementById('hoursBtn');
    let minutes = document.getElementById('minutesBtn');
    let seconds = document.getElementById('secondsBtn');

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondInput = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    days.addEventListener('click', onConvert);
    hours.addEventListener('click', onConvert);
    minutes.addEventListener('click', onConvert);
    seconds.addEventListener('click', onConvert);


    function convert(value,unit) {
        
        let days = value/rations[unit];
        return {
            days: days,
            hours: days*rations.hours,
            minutes: days*rations.minutes,
            seconds: days * rations.seconds
        };
    }
    function onConvert(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]')
        
        let time = convert(Number(input.value), input.id)

        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value =  time.minutes;
        secondInput.value = time.seconds;

    }

}