const shuffleArray = <TInput>(array: Array<TInput>): Array<TInput> => {
  const result = [...array];

  const cryptoArray = new Uint32Array(1);

  for (let i = result.length - 1; i > 0; i--) {
    crypto.getRandomValues(cryptoArray);
    const j = cryptoArray[0] % (i + 1);

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

export default shuffleArray;
