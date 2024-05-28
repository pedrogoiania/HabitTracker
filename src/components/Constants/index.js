const Constants = {};

const Size = {
  small: 8,
  medium: 14,
  large: 24,
  xLarge: 48,
  big: 56,
};

const FontNames = {};

const FontNamePrimary = {
  Bold: 'Urbanist-Bold',
  SemiBold: 'Urbanist-SemiBold',
  Medium: 'Urbanist-Medium',
  Regular: 'Urbanist-Regular',
};

FontNames.Primary = FontNamePrimary;

const FontSizes = {};

const HeadingSize = {
  xSmall: 18,
  small: 20,
  medium: 24,
  large: 32,
  xLarge: 40,
  big: 48,
};

const BodySize = {
  xSmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xLarge: 18,
};

FontSizes.HeadingSize = HeadingSize;
FontSizes.BodySize = BodySize;

const Colors = {};

const Primary = {
  info: '#8985E9',
  right: '#405FF2',
  success: '#12D18E',
  warning: '#FACC15',
  error: '#F75555',
  disabled: '#D8D8D8',
  darkDisabled: '#23252B',
  infoDisabled: '#6E6ABA',
  black: '#000',
  white: '#fff',
  gray: '#212121',
};

const Pastel = {
  conditioner: '#FFFFCC',
  peachOrange: '#FFCC99',
  persianPastel: '#AA9499',
  paleMauve: '#C6A4A4',
  americanPink: '#FF9899',
  lustyGallant: '#FFCCCC',
  himalayanBalsam: '#FF99CC',
  sugarChic: '#FFCCFF',
  lilas: '#CC99FF',
  lavenderBlue: '#CCCCFF',
  apocyan: '#99CCFF',
  pastelTurquoise: '#99C5C4',
  dawnDeparts: '#CCFFFF',
  magicMint: '#99FFCC',
  distilledMoss: '#CCFFCC',
  menthol: '#CCFF99',
};

const Secondary = {
  info: '#EB7BC4',
  gray: '#9E9E9E',
};

Colors.Primary = Primary;
Colors.Secondary = Secondary;
Colors.Pastel = Pastel;

Constants.Size = Size;
Constants.Colors = Colors;
Constants.FontSizes = FontSizes;
Constants.FontNames = FontNames;

export default Constants;
