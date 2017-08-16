class Clock {

    constructor(time) {
        this.time = time;
    }

    speak() {
        if (this.time === '12:00') {
            return 'midday';
        } else if (this.time === '01:00') {
            return "one o'clock in the morning";
        } else if (this.time === '02:00') {
            return "two o'clock in the morning";
        }
        return 'midnight';
    }
}

export default Clock;
