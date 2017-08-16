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

        const said_hour = this.sayHour();
        const said_time_of_day = this.sayTimeOfDay();
        if (this.minutes == 1) {
            return said_hour + " oh one in the " + said_time_of_day;
        }

        return said_hour + " o'clock in the " + said_time_of_day;
    }

    sayHour() {
        let hourIn12HourFormat = this.hour % 12;
        if (hourIn12HourFormat === 1) {
            return "one";
        } else if (hourIn12HourFormat === 2) {
            return "two";
        } else if (hourIn12HourFormat === 3) {
            return "three";
        } else if (hourIn12HourFormat === 6) {
            return "six";
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
}

export default Clock;
