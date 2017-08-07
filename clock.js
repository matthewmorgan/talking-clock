const SMALL_TIME_NAMES = {
  '00': 'twelve',
  '01': 'one',
  '02': 'two',
  '03': 'three',
  '04': 'four',
  '05': 'five',
  '06': 'six',
  '07': 'seven',
  '08': 'eight',
  '09': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen'
};

const BIG_TIME_NAMES = {
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty'
};


class Clock {
  constructor(digits) {
    this.digits = digits;
    this.hours = this.digits.split(':')[0];
    this.mins = this.digits.split(':')[1];
  }

  speak() {
    return {
          '00:00': 'midnight',
          '12:00': 'midday'
        }[this.digits]
        || [
          this.speakHours(),
          this.speakMinutes(),
          this.speakPartOfDay()
        ].join(' ');
  }

  speakHours() {
    if (Number(this.hours) > 11) {
      let adjHour = String(Number(this.hours) - 12);
      if (adjHour.length === 1) {
        adjHour = `0${adjHour}`;
      }
      return SMALL_TIME_NAMES[adjHour];
    }
    return SMALL_TIME_NAMES[this.hours];
  }

  speakMinutes() {
    let minuteNumber = Number(this.mins);

    if (minuteNumber >= 20) {
      return this.twentyMinutesOrMore(minuteNumber);
    }

    if (minuteNumber >= 10) {
      return SMALL_TIME_NAMES[this.mins];
    }

    if (minuteNumber === 0) {
      return "o'clock";
    }

    return `oh ${SMALL_TIME_NAMES[this.mins]}`;
  }

  speakPartOfDay() {
    let partOfDay = 'morning';
    if (Number(this.hours) >= 12) {
      partOfDay = 'afternoon';
    }
    if (Number(this.hours) >= 18) {
      partOfDay = 'evening';
    }
    return `in the ${partOfDay}`;
  }

  twentyMinutesOrMore(minuteNumber) {
    let remainder = minuteNumber % 10;
    let remainderMinutes = remainder ? String(minuteNumber - remainder) : '';
    let remainderText = remainder ? ' ' + SMALL_TIME_NAMES[`0${remainder}`] : '';

    return `${BIG_TIME_NAMES[remainderMinutes || this.mins]}${remainderText}`;
  }
}


export default Clock;
