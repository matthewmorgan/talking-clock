import Clock from './clock';
import {allTheTimes} from './times';


describe('the talking clock', () => {

  test('recognizes midnight', () => {
    const clock = new Clock('00:00');

    expect(clock.speak()).toEqual('midnight');
  });

  test('knows midday is not midnight', () => {
    const clock = new Clock('12:00');

    expect(clock.speak()).toEqual('midday');
  });

  test('can correctly say 01:00', () => {
    const clock = new Clock('01:00');

    expect(clock.speak()).toEqual("one o'clock in the morning")
  });

  test('can correctly say 02:00', () => {
    const clock = new Clock('02:00');

    expect(clock.speak()).toEqual("two o'clock in the morning")
  });

  test('can correctly say 03:00', () => {
    const clock = new Clock('03:00');

    expect(clock.speak()).toEqual("three o'clock in the morning")
  });

  test('knows how to describe 8 AM', () => {
    const clock = new Clock('08:00');

    expect(clock.speak()).toEqual("eight o'clock in the morning");
  });


  test('can correctly say 13:00', () => {
    const clock = new Clock('13:00');

    expect(clock.speak()).toEqual("one o'clock in the afternoon")
  });

   test('can correctly say 14:00', () => {
    const clock = new Clock('14:00');

    expect(clock.speak()).toEqual("two o'clock in the afternoon")
  });

  test('can correctly say 15:00', () => {
    const clock = new Clock('15:00');

    expect(clock.speak()).toEqual("three o'clock in the afternoon")
  });

  test('can correctly say 18:00', () => {
    const clock = new Clock('18:00');

    expect(clock.speak()).toEqual("six o'clock in the evening")
  });

  test('can correctly say 01:01', () => {
    const clock = new Clock('01:01');

    expect(clock.speak()).toEqual("one oh one in the morning")
  });

  test('can correctly say 02:01', () => {
    const clock = new Clock('02:01');

    expect(clock.speak()).toEqual("two oh one in the morning")
  });

  test('can correctly say 03:01', () => {
    const clock = new Clock('03:01');

    expect(clock.speak()).toEqual("three oh one in the morning")
  });

  test('can correctly say 01:02', () => {
    const clock = new Clock('01:02');

    expect(clock.speak()).toEqual("one oh two in the morning")
  });

  test('can correctly say 00:01', () => {
    const clock = new Clock('00:01');

    expect(clock.speak()).toEqual("twelve oh one in the morning")
  });

  xtest('can correctly say 00:10', () => {
    const clock = new Clock('00:10');

    expect(clock.speak()).toEqual("twelve ten in the morning")
  });

  xtest('knows how to describe 8:10 AM', () => {
    const clock = new Clock('08:10');

    expect(clock.speak()).toEqual("eight ten in the morning");
  });
  xtest('knows how to describe 8:15 AM', () => {
    const clock = new Clock('08:15');

    expect(clock.speak()).toEqual("eight fifteen in the morning");
  });

  xtest('knows how to describe 8:20 AM', () => {
    const clock = new Clock('08:20');

    expect(clock.speak()).toEqual("eight twenty in the morning");
  });

  xtest('knows how to describe 8:30 AM', () => {
    const clock = new Clock('08:30');

    expect(clock.speak()).toEqual("eight thirty in the morning");
  });

  xtest('knows how to describe 8:55 AM', () => {
    const clock = new Clock('08:55');

    expect(clock.speak()).toEqual("eight fifty five in the morning");
  });

  xtest('can correctly say 12:01', () => {
    const clock = new Clock('12:01');

    expect(clock.speak()).toEqual("twelve oh one in the afternoon")
  });

  xtest('knows how to describe 12:15 PM', () => {
    const clock = new Clock('12:15');

    expect(clock.speak()).toEqual("twelve fifteen in the afternoon");
  });

  xtest('knows how to describe 12:01 AM', () => {
    const clock = new Clock('00:01');

    expect(clock.speak()).toEqual("twelve oh one in the morning");
  });

  xtest('knows how to describe 5:59 PM', () => {
    const clock = new Clock('17:59');

    expect(clock.speak()).toEqual("five fifty nine in the afternoon");
  });

  xtest('knows how to describe 7:30 PM', () => {
    const clock = new Clock('19:30');

    expect(clock.speak()).toEqual("seven thirty in the evening");
  });

  xtest('knows how to describe 9:01 PM', () => {
    const clock = new Clock('21:01');

    expect(clock.speak()).toEqual("nine oh one in the evening");
  });

  xtest('knows how to describe 10:15 PM', () => {
    const clock = new Clock('22:15');

    expect(clock.speak()).toEqual("ten fifteen in the evening");
  });


  xtest('knows how to describe 11 PM', () => {
    const clock = new Clock('23:00');

    expect(clock.speak()).toEqual("eleven o'clock in the evening");
  });

  xtest('knows how to describe 11:59 PM', () => {
    const clock = new Clock('23:59');

    expect(clock.speak()).toEqual("eleven fifty nine in the evening");
  });

  xtest('can speak all the minutes of the day', () => {
    const runner = () => {
      let times = [];
      let hour = 0;
      let minute = 0;

      while (hour < 24) {
        minute = 0;
        while (minute < 60) {
          let time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
          const clock = new Clock(time);
          times.push(`${clock.speak()}`);
          minute++;
        }
        hour++;
      }
      return times;
    };
    let times = runner();
    expect(times.length).toEqual(24 * 60);
    expect(times).toEqual(allTheTimes);
  });
});
