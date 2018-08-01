const getDataOrAriaProps = require('./getDataOrAriaProps');

describe('Test utils function', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  describe('getDataOrAriaProps', () => {
    it('returns all data-* properties from an object', () => {
      const props = {
        onClick: () => {},
        isOpen: true,
        'data-test': 'test-id',
        'data-id': 1234,
      };
      const results = getDataOrAriaProps(props);
      expect(results).toEqual({
        'data-test': 'test-id',
        'data-id': 1234,
      });
    });

    it('does not return data-__ properties from an object', () => {
      const props = {
        onClick: () => {},
        isOpen: true,
        'data-__test': 'test-id',
        'data-__id': 1234,
      };
      const results = getDataOrAriaProps(props);
      expect(results).toEqual({});
    });

    it('returns all aria-* properties from an object', () => {
      const props = {
        onClick: () => {},
        isOpen: true,
        'aria-labelledby': 'label-id',
        'aria-label': 'some-label',
      };
      const results = getDataOrAriaProps(props);
      expect(results).toEqual({
        'aria-labelledby': 'label-id',
        'aria-label': 'some-label',
      });
    });

    it('returns role property from an object', () => {
      const props = {
        onClick: () => {},
        isOpen: true,
        role: 'search',
      };
      const results = getDataOrAriaProps(props);
      expect(results).toEqual({ role: 'search' });
    });
  });
});
