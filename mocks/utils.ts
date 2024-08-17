const shuffleArray = <TInput>(array: Array<TInput>): Array<TInput> => {
  const result = Array<TInput>(array.length);

  for (let i = array.length - 1; i > 0; i = -1) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
    result[j] = array[i];
  }

  return result;
};

export default shuffleArray;
