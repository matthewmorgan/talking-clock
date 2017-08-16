class Clock {

    constructor(time) {
        const timeRegex = /(\d{2}):.*/;
        this.time = time;
        this.hour = parseInt(timeRegex.exec(time)[0]);
    }

    speak() {
        if (this.time === '00:00') {
            return 'midnight';
        } else if (this.time === '12:00') {
            return 'midday';
        }

        const said_hour = this.sayHour();
        if (this.hour > 11 && this.hour < 18) {
            return said_hour + " o'clock in the afternoon";
        } else if (this.hour >= 18) {
            return said_hour + " o'clock in the evening";
        } else {
            return said_hour + " o'clock in the morning";
        }
    }

    sayHour() {
        if (this.time === '01:00' || this.time === '13:00') {
            return "one";
        } else if (this.time === '02:00' || this.time === '14:00') {
            return "two";
        } else if (this.time === '03:00' || this.time === '15:00') {
            return "three";
        } else if (this.hour === 18) {
            return "six";
        }
    }
}

export default Clock;
