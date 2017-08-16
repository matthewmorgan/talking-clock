class Clock {

    constructor(time) {
        this.time = time;
    }

    speak() {
        if (this.time === '12:00') {
            return 'midday';
        }
        return 'midnight';
    }
}

export default Clock;
