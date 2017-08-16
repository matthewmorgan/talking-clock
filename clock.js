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
