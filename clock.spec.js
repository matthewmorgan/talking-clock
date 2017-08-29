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

    test('can speak the hour of the day', () => {
        const clock = new Clock('08:00');

        expect(clock.speakHours()).toEqual('eight');
    });

    test('can speak the hour in the afternoon', () => {
        const clock = new Clock('13:00');

        expect(clock.speakHours()).toEqual('one');
    });

    test('can speak the top of the hour', () => {
        const clock = new Clock('08:00');

        expect(clock.speakMinutes()).toEqual("o'clock");
    });

    test('can speak single digit minutes', () => {
        const clock = new Clock('08:01');

        expect(clock.speakMinutes()).toEqual("oh one");
    });

    test('can speak double digit minutes', () => {
        const clock = new Clock('08:10');

        expect(clock.speakMinutes()).toEqual('ten');
    });

    test('can speak twenty past', () => {
        const clock = new Clock('08:20');

        expect(clock.speakMinutes()).toEqual('twenty');
    });

    test('can speak thirty-five past', () => {
        const clock = new Clock('08:35');

        expect(clock.speakMinutes()).toEqual('thirty five');
    });

    test('knows when it\'s morning', () => {
        const clock = new Clock('08:00');

        expect(clock.speakPartOfDay()).toEqual('in the morning');
    });

    test('knows when it\'s afternoon', () => {
        const clock = new Clock('13:00');

        expect(clock.speakPartOfDay()).toEqual('in the afternoon');
    });

    test('knows when it\'s evening', () => {
        const clock = new Clock('18:00');

        expect(clock.speakPartOfDay()).toEqual('in the evening');
    });

    test('knows how to describe 8 AM', () => {
        const clock = new Clock('08:00');

        expect(clock.speak()).toEqual("eight o'clock in the morning");
    });

    test('knows how to describe 8:10 AM', () => {
        const clock = new Clock('08:10');

        expect(clock.speak()).toEqual("eight ten in the morning");
    });

    test('knows how to describe 8:15 AM', () => {
        const clock = new Clock('08:15');

        expect(clock.speak()).toEqual("eight fifteen in the morning");
    });

    test('knows how to describe 8:20 AM', () => {
        const clock = new Clock('08:20');

        expect(clock.speak()).toEqual("eight twenty in the morning");
    });

    test('knows how to describe 8:30 AM', () => {
        const clock = new Clock('08:30');

        expect(clock.speak()).toEqual("eight thirty in the morning");
    });

    test('knows how to describe 8:55 AM', () => {
        const clock = new Clock('08:55');

        expect(clock.speak()).toEqual("eight fifty five in the morning");
    });

    test('knows how to describe 12:15 PM', () => {
        const clock = new Clock('12:15');

        expect(clock.speak()).toEqual("twelve fifteen in the afternoon");
    });

    test('knows how to describe 1:00 PM', () => {
        const clock = new Clock('13:00');

        expect(clock.speak()).toEqual("one o'clock in the afternoon");
    });

    test('knows how to describe 1:30 PM', () => {
        const clock = new Clock('13:30');

        expect(clock.speak()).toEqual("one thirty in the afternoon");
    });

    test('knows how to describe 12:01 AM', () => {
        const clock = new Clock('00:01');

        expect(clock.speak()).toEqual("twelve oh one in the morning");
    });

    test('knows how to describe 6 PM', () => {
        const clock = new Clock('18:00');

        expect(clock.speak()).toEqual("six o'clock in the evening");
    });

    test('can speak all the minutes of the day', () => {
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
