class Clock {

    constructor(time) {
        const timeRegex = /(\d{2}):(\d{2})/;
        this.time = time;
        this.hour = parseInt(timeRegex.exec(time)[1]);
        this.minutes = parseInt(timeRegex.exec(time)[2])
    }

    speak() {
        if (this.time === '00:00') {
            return 'midnight';
        } else if (this.time === '12:00') {
            return 'midday';
        }

        return this.sayHour() + " " +
            this.sayMinutes() + " in the "
            + this.sayTimeOfDay();
    }

    sayHour() {
        let hourIn12HourFormat = this.hour % 12;
        if (hourIn12HourFormat === 0) {
            return 'twelve';
        } else {
            return Clock.sayNumber(hourIn12HourFormat);
        }
    }

    sayTimeOfDay() {
        if (this.hour < 12) {
            return 'morning';
        } else if (this.hour < 18) {
            return 'afternoon';
        } else {
            return 'evening';
        }
    }

    sayMinutes() {
        if (this.minutes === 0) {
            return "o'clock";
        } else if (this.minutes < 10) {
            return 'oh ' + Clock.sayNumber(this.minutes);
        } else {
            return Clock.sayNumber(this.minutes);
        }
    }

    static sayNumber(number) {
        if (number === 1) {
            return "one";
        } else if (number === 2) {
            return "two";
        } else if (number === 3) {
            return "three";
        } else if (number === 6) {
            return "six";
        } else if (number === 10) {
            return 'ten';
        }
    }
}

export default Clock;
