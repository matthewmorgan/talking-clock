class Clock {

    constructor(time) {
        this.time = time;
    }

    speak() {
        if (this.time === '00:00') {
            return 'midnight';
        } else if (this.time === '12:00') {
            return 'midday';
        }

        const hour = this.sayHour();
        if (this.time === '13:00') {
            return hour + " o'clock in the afternoon"
        } else {
            return hour + " o'clock in the morning";
        }
    }

    sayHour() {
        if (this.time === '01:00' || this.time === '13:00') {
            return "one";
        } else if (this.time === '02:00') {
            return "two";
        } else if (this.time === '03:00') {
            return "three";
        }
    }
}

export default Clock;
