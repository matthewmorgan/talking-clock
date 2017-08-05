import Clock from './clock';


describe('the talking clock', () => {

  test('recognizes midnight', () => {
    const clock = new Clock('00:00');

    expect(clock.speak()).toEqual('midnight');
  });

});
