import { FC } from 'react';
import { Switch as NativeSwitch, SwitchProps } from 'react-native';

export const Switch: FC<SwitchProps> = ({ ...rest }) => {
  return <NativeSwitch {...rest} />;
};
