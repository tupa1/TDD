import isGirlFriendEligible from '../../src/helpers';

describe('isGirlFriendEligible', () => {
  describe('should return false', () => {
    it('people is undefined', () => {
      expect(isGirlFriendEligible()).toEqual(false);
    });
    it('people is null', () => {
      expect(isGirlFriendEligible(null)).toEqual(false);
    });
    it('people is not female', () => {
      const people = {
        gender: 'male'
      }
      expect(isGirlFriendEligible(people)).toEqual(false);
    });
    it('people is not beautiful', () => {
      const people = {
        gender: 'female',
        isBeautiful: false
      }
      expect(isGirlFriendEligible(people)).toEqual(false);
    });
  });
  describe('should return true', () => {
    it('CheckboxWithLabel changes the text after the first click', () => {
      const people = {
        gender: 'female',
        isBeautiful: true
      }
      expect(isGirlFriendEligible(people)).toEqual(true);
    });
  });
});
