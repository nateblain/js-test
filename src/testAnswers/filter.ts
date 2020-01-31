const filter = <T>(array: Array<T>, cb: (ae: T) => boolean) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const moreFunctionalFilter = <T>(array: Array<T>, cb: (arg0: T) => boolean) => {
  return array.reduce((acc, start) => {
    if (cb(start)) {
      return [...acc, start];
    }
    return acc;
  }, []);
}

export {
  filter,
  moreFunctionalFilter
}
