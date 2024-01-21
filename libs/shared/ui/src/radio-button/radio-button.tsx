import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { Pressable } from '../pressable';
import { View } from '../view';
import { RadioButtonProvider, useRadioButton } from './radio-button-context';

type RadioButtonProps = {
  disabled?: boolean;
  onValueChange?: (value?: string) => void;
  defaultValue?: string;
};

const RadioButtonComponent: FC<PropsWithChildren<RadioButtonProps>> = ({
  disabled = false,
  onValueChange,
  defaultValue,
  children,
}) => {
  return (
    <RadioButtonProvider
      defaultValue={defaultValue}
      disabled={disabled}
      onValueChange={onValueChange}
    >
      {children}
    </RadioButtonProvider>
  );
};

type RadioButtonOptionProps = {
  id: string;
};

const RadioButtonOption: FC<RadioButtonOptionProps> = ({ id }) => {
  const { value, setValue, disabled } = useRadioButton();
  const selected = value === id;

  const handlePress = () => setValue((_id) => (id === _id ? undefined : id));

  return (
    <Pressable
      className={clsx(
        ' bg-white rounded-full active:opacity-50 items-center justify-center h-7 w-7 border-solid border border-gray-300',
        disabled ? 'opacity-50' : ''
      )}
      disabled={disabled}
      onPress={handlePress}
    >
      {selected && <View className="h-3 w-3 rounded-full bg-green-500" />}
    </Pressable>
  );
};

export const RadioButton = Object.assign(RadioButtonComponent, {
  Option: RadioButtonOption,
});
