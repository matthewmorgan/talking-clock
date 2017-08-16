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

        return this.speakHours() + " " +
            this.speakMinutes() + " "
            + this.speakPartOfDay();
    }

    speakHours() {
        let hourIn12HourFormat = this.hour % 12;
        if (hourIn12HourFormat === 0) {
            return 'twelve';
        } else {
            return Clock.sayNumber(hourIn12HourFormat);
        }
    }

    speakPartOfDay() {
        if (this.hour < 12) {
            return 'in the morning';
        } else if (this.hour < 18) {
            return 'in the afternoon';
        } else {
            return 'in the evening';
        }
    }

    speakMinutes() {
        if (this.minutes === 0) {
            return "o'clock";
        } else if (this.minutes < 10) {
            return 'oh ' + Clock.sayNumber(this.minutes);
        } else {
            return Clock.sayNumber(this.minutes);
        }
    }

    static sayNumber(number) {
        switch(number) {
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
            case 20: return 'twenty';
            case 30: return 'thirty';
            case 40: return 'forty';
            case 50: return 'fifty';
        }
        return Clock.sayNumber(Math.floor(number/10) * 10) + ' ' + Clock.sayNumber(number % 10);
    }
}

export default Clock;
