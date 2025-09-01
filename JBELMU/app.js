function jbelmu(text) {
  return text
    .split(' ')
    .map(word => {
      if (word.length <= 2) return word; 

      let first = word[0];
      let middle = word.slice(1, -1).split('').sort().join('');
      let last = word[word.length - 1];

      return first + middle + last;
    })
    .join(' ');
}