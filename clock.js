class Clock {

    constructor(time) {
        this.time = time;
        this.hours = parseInt(this.time.split(":") [0]);
        this.min = parseInt(this.time.split(":")[1]);
        this.minOnes = this.min % 10;
        this.minTens = Math.floor(this.min/10);
    }

    speak() {
        if (this.time === '12:00') {
            return 'midday';
        } else if (this.time === '00:00') {
            return 'midnight';
        }
        return this.speakHours() + " " + this.speakMinutes() + " " + this.speakPartOfDay();
    }

    speakHours() {
        let hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven'];
        return hours[this.hours];
    }

    speakMinutes() {
        let minOnes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let minTens = ['oh', 'tenty', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];
        if (this.minTens == 1) {
            return minOnes[this.min];
        } else if (this.minOnes === 0) {
            if (this.minTens === 0) {
                return "o'clock";
            }
            return minTens[this.minTens];
        }
        return minTens[this.minTens] + " " + minOnes[this.minOnes];
    }

    speakPartOfDay () {
        if (this.hours >= 18) {
            return 'in the evening';
        } else if (this.hours >= 12) {
            return 'in the afternoon'
        }
        return 'in the morning';
    }
}

export default Clock;
