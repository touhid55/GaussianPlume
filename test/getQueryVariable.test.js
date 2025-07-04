const getQueryVariable = require('../getQueryVariable');

describe('getQueryVariable', () => {
  beforeEach(() => {
    global.window = { location: { search: '?wd=10/ws=5/Q=300/mw=18' } };
  });

  test('retrieves wd parameter', () => {
    expect(getQueryVariable('wd')).toBe('10');
  });

  test('retrieves ws parameter', () => {
    expect(getQueryVariable('ws')).toBe('5');
  });

  test('retrieves Q parameter', () => {
    expect(getQueryVariable('Q')).toBe('300');
  });

  test('returns false for missing parameter', () => {
    expect(getQueryVariable('missing')).toBe(false);
  });
});
