function areAnagrams(str1, str2) {
  
  const clean = s => s.replace(/\s*/g, '').toLowerCase().split('').sort().join('');
  return clean(str1) === clean(str2);
}