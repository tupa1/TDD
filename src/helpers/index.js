const isGirlFriendEligible = (people) => {
  if (!people) {
    return false;
  }
  if (people.gender !== 'female') {
    return false;
  }
  if (!people.isBeautiful) {
    return false;
  }
  return true;
}
export default isGirlFriendEligible;
