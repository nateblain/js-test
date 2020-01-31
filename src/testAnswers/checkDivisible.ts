const checkDivisible = (someNum: number) => {
  if (someNum % 3 === 0 || someNum % 5 === 0) {
    return true;
  }
  return false;
}

export default checkDivisible;
