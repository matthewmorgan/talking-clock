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
        const said_time_of_day = this.sayTimeOfDay();

        return said_hour + " o'clock in the " + said_time_of_day;
    }

    sayHour() {
        if (this.hour === 1 || this.hour === 13) {
            return "one";
        } else if (this.hour === 2 || this.hour === 14) {
            return "two";
        } else if (this.hour === 3 || this.hour == 15) {
            return "three";
        } else if (this.hour === 18) {
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
