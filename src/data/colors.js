const palettes = [
  '$color1: rgba(220, 220, 221, 1); $color2: rgb(154, 154, 154); $color3: rgba(25, 133, 161, 1); $color4: rgba(76, 92, 104, 1); $color5: rgba(70, 73, 76, 1);',
  '$color1: rgba(240, 243, 189, 1); $color2: rgba(2, 195, 154, 1); $color3: rgba(0, 168, 150, 1); $color4: rgba(2, 128, 144, 1); $color5: rgba(5, 102, 141, 1);',
  '$color1: rgba(112, 193, 179, 1); $color2: rgba(255, 224, 102, 1); $color3: rgba(242, 95, 92, 1); $color4: rgba(36, 123, 160, 1); $color5: rgba(80, 81, 79, 1);',
  '$color1: rgba(255, 255, 255, 1); $color2: rgba(0, 168, 232, 1); $color3: rgba(0, 126, 167, 1); $color4: rgba(0, 52, 89, 1); $color5: rgba(0, 23, 31, 1);',
  '$color1: rgba(231, 228, 222, 1); $color2: rgba(136, 201, 241, 1); $color3: rgba(53, 111, 186, 1); $color4: rgba(133, 54, 54, 1); $color5: rgba(222, 175, 90, 1);'
];

const colorToArray = str => {
  if (str[0] === '#') {
  let arr = str.split(' ');
  return arr.map(item => item.trim());

  } else {
  let arr = str.split(';');
  return arr.map(item => item.trim().slice(9));
  }
};

const randomPalette = ([current, previous]) => {
  let random = current;
  while (random === current || random === previous) {
    random = Math.floor(Math.random() * palettes.length);
  }
  return [[random, current], colorToArray(palettes[random])];
};

export default randomPalette;
