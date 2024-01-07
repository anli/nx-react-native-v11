import { FC } from 'react';
import * as SolidIcons from 'react-native-heroicons/solid';
import * as OutlineIcons from 'react-native-heroicons/outline';
import { NumberProp, SvgProps } from 'react-native-svg';

export type IconProps = SvgProps & {
  name: keyof typeof SolidIcons | keyof typeof OutlineIcons;
  type?: 'solid' | 'outline';
  size?: NumberProp;
};

export const Icon: FC<IconProps> = ({
  type = 'outline',
  name,
  size,
  ...props
}) => {
  switch (type) {
    case 'outline':
      return OutlineIcons[name]({ size, ...props });
    case 'solid':
      return SolidIcons[name]({ size, ...props });
    default:
      return null;
  }
};
