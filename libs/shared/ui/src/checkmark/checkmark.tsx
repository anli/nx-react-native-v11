import { styled } from 'nativewind';
import { FC, useEffect, useState } from 'react';
import { CheckIcon as CheckIconNative } from 'react-native-heroicons/solid';
import { Pressable } from '../pressable';

const CheckIcon = styled(CheckIconNative, { classProps: ['fill', 'stroke'] });

type CheckmarkProps = {
  value?: boolean;
  onChange?: (value: boolean) => void;
};

export const Checkmark: FC<CheckmarkProps> = ({ value = false, onChange }) => {
  const [componentValue, setComponentValue] = useState(value);

  useEffect(() => {
    value !== componentValue && setComponentValue(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handlePress = () => {
    setComponentValue((_value) => {
      onChange?.(!_value);
      return !_value;
    });
  };

  return (
    <Pressable
      className="w-7 h-7 rounded-full active:opacity-50 items-center justify-center"
      onPress={handlePress}
    >
      {componentValue && (
        <CheckIcon fill="fill-green-500" stroke="stroke-green-500" size={20} />
      )}
    </Pressable>
  );
};
