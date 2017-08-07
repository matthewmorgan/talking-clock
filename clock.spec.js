import Clock from './clock';


describe('the talking clock', () => {

  test('recognizes midnight', () => {
    const clock = new Clock('00:00');

    expect(clock.speak()).toEqual('midnight');
  });

  test('knows midday is not midnight', () => {
    const clock = new Clock('12:00');

    expect(clock.speak()).toEqual('midday');
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
});
