class Clock {
  constructor(time) {
    this.time = time
  }
  parseHours(timeString){
    return parseInt(timeString.slice(0,2))
  }
  parseMinute(timestring){
    return parseInt(timestring.slice(3,5))
  }

  stringifyHour(hourInt) {

    switch(hourInt%12){
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 6: return "six";
      case 0: return "twelve"
      default: return 'eight';
    }
  }

    stringifyMinute(minuteInt) {
      if (minuteInt < 10) {
        switch(minuteInt) {
      case 1: return ' oh one';
      case 2: return ' oh two';
      case 3: return ' oh three';
      case 6: return " oh six";
      default: return " o'clock";


      }
    }
  }

  speak() {
    const hours = this.parseHours(this.time)
    const minutes = this.parseMinute(this.time)

    if(hours === 12 && minutes === 0) {
      return 'midday'
    } else if (hours === 0 && minutes ===0) {
      return 'midnight'
    } else {
      if (hours > 12 && hours < 18) {
        return `${this.stringifyHour(hours)}${this.stringifyMinute(minutes)} in the afternoon`
      } else if(hours >= 18){
        return `${this.stringifyHour(hours)}${this.stringifyMinute(minutes)} in the evening`
      }

      return `${this.stringifyHour(hours)}${this.stringifyMinute(minutes)} in the morning`
    }
  }
}


export default Clock;
