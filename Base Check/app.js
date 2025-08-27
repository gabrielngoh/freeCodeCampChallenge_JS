const ArrayRegex = [
  /^[01]+$/i,              // base 2
  /^[0-2]+$/i,             // base 3
  /^[0-3]+$/i,             // base 4
  /^[0-4]+$/i,             // base 5
  /^[0-5]+$/i,             // base 6
  /^[0-6]+$/i,             // base 7
  /^[0-7]+$/i,             // base 8
  /^[0-8]+$/i,             // base 9
  /^[0-9]+$/i,             // base 10
  /^[0-9A]+$/i,            // base 11
  /^[0-9AB]+$/i,           // base 12
  /^[0-9A-C]+$/i,          // base 13
  /^[0-9A-D]+$/i,          // base 14
  /^[0-9A-E]+$/i,          // base 15
  /^[0-9A-F]+$/i,          // base 16
  /^[0-9A-G]+$/i,          // base 17
  /^[0-9A-H]+$/i,          // base 18
  /^[0-9A-I]+$/i,          // base 19
  /^[0-9A-J]+$/i,          // base 20
  /^[0-9A-K]+$/i,          // base 21
  /^[0-9A-L]+$/i,          // base 22
  /^[0-9A-M]+$/i,          // base 23
  /^[0-9A-N]+$/i,          // base 24
  /^[0-9A-O]+$/i,          // base 25
  /^[0-9A-P]+$/i,          // base 26
  /^[0-9A-Q]+$/i,          // base 27
  /^[0-9A-R]+$/i,          // base 28
  /^[0-9A-S]+$/i,          // base 29
  /^[0-9A-T]+$/i,          // base 30
  /^[0-9A-U]+$/i,          // base 31
  /^[0-9A-V]+$/i,           // base 32
  /^[0-9A-W]+$/i,           // base 33
  /^[0-9A-X]+$/i,           // base 34
  /^[0-9A-Y]+$/i,           // base 35
  /^[0-9A-Z]+$/i,           // base 36
];
function isValidNumber(n, base) {

  if (isValidBase(base)){
    return (ArrayRegex[base - 2]).test(n);
  }
  return false;
}

const isValidBase = (base)=> base >= 2 && base <=36;
