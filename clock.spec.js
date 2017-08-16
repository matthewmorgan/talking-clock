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

     test('can correctly say 13:00', () => {
       const clock = new Clock('13:00');

       expect(clock.speak()).toEqual("one o'clock in the afternoon")
    });

     test('can correctly say 14:00', () => {
       const clock = new Clock('14:00');

       expect(clock.speak()).toEqual("two o'clock in the afternoon")
    });

    xtest('can speak the hour of the day', () => {
        const clock = new Clock('08:00');

        expect(clock.speakHours()).toEqual('eight');
    });

    xtest('can speak the hour in the afternoon', () => {
        const clock = new Clock('13:00');

        expect(clock.speakHours()).toEqual('one');
    });

    xtest('can speak the top of the hour', () => {
        const clock = new Clock('08:00');

        expect(clock.speakMinutes()).toEqual("o'clock");
    });

    xtest('can speak single digit minutes', () => {
        const clock = new Clock('08:01');

        expect(clock.speakMinutes()).toEqual("oh one");
    });

    xtest('can speak double digit minutes', () => {
        const clock = new Clock('08:10');

        expect(clock.speakMinutes()).toEqual('ten');
    });

    xtest('can speak twenty past', () => {
        const clock = new Clock('08:20');

        expect(clock.speakMinutes()).toEqual('twenty');
    });

    xtest('can speak thirty-five past', () => {
        const clock = new Clock('08:35');

        expect(clock.speakMinutes()).toEqual('thirty five');
    });

    xtest('knows when it\'s morning', () => {
        const clock = new Clock('08:00');

        expect(clock.speakPartOfDay()).toEqual('in the morning');
    });

    xtest('knows when it\'s afternoon', () => {
        const clock = new Clock('13:00');

        expect(clock.speakPartOfDay()).toEqual('in the afternoon');
    });

    xtest('knows when it\'s evening', () => {
        const clock = new Clock('18:00');

        expect(clock.speakPartOfDay()).toEqual('in the evening');
    });

    xtest('knows how to describe 8 AM', () => {
        const clock = new Clock('08:00');

        expect(clock.speak()).toEqual("eight o'clock in the morning");
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

    xtest('knows how to describe 12:15 PM', () => {
        const clock = new Clock('12:15');

        expect(clock.speak()).toEqual("twelve fifteen in the afternoon");
    });

    xtest('knows how to describe 1:00 PM', () => {
        const clock = new Clock('13:00');

        expect(clock.speak()).toEqual("one o'clock in the afternoon");
    });

    xtest('knows how to describe 1:30 PM', () => {
        const clock = new Clock('13:30');

        expect(clock.speak()).toEqual("one thirty in the afternoon");
    });

    xtest('knows how to describe 12:01 AM', () => {
        const clock = new Clock('00:01');

        expect(clock.speak()).toEqual("twelve oh one in the morning");
    });

    xtest('knows how to describe 6 PM', () => {
        const clock = new Clock('18:00');

        expect(clock.speak()).toEqual("six o'clock in the evening");
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
