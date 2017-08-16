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

        if (this.time === '01:00') {
            return "one o'clock in the morning";
        } else if (this.time === '02:00') {
            return "two o'clock in the morning";
        } else if (this.time === '03:00') {
            return "three o'clock in the morning";
        }
        return 'unknown';
    }
}

export default Clock;
