import { FC, useState } from 'react';
import { View } from '../view';
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
} from 'react-native';
import { Text } from '../text';
import { StyledComponent } from 'nativewind';
import colors from 'tailwindcss/colors';
import clsx from 'clsx';

type TextInputProps = NativeTextInputProps & {
  textCounter?: boolean;
  required?: boolean;
  error?: boolean;
  message?: string;
};

export const TextInput: FC<TextInputProps> = ({
  textCounter,
  value: _value,
  maxLength,
  required = false,
  error = false,
  message,
  onChangeText,
  ...rest
}) => {
  const [value, setValue] = useState(_value);

  const handleChangeText = (text: string) => {
    setValue(text);
    onChangeText?.(text);
  };

  return (
    <View className="bg-white">
      <View className="flex-row justify-between  items-center">
        <View className="flex-row  items-center" style={{ gap: 4 }}>
          <Text type="body2" className="text-gray-500">
            Label
          </Text>
          {required && (
            <Text type="body2" className="text-red-500">
              *
            </Text>
          )}
        </View>
        {textCounter && (
          <Text type="body2" className="text-gray-500">
            {value?.length ?? 0}/ {maxLength ?? 0}
          </Text>
        )}
      </View>
      <StyledComponent
        component={NativeTextInput}
        className={clsx(
          'px-0 text-2xl border-b-2 py-2',
          error ? 'border-red-500 ' : 'border-green-500 '
        )}
        value={_value}
        onChangeText={handleChangeText}
        maxLength={maxLength}
        selectionColor={error ? colors.red[500] : colors.green[500]}
        {...rest}
      />
      {message && (
        <Text
          className={clsx('pt-1', error ? 'text-red-500 ' : 'text-green-500 ')}
          type="body2"
        >
          {message}
        </Text>
      )}
    </View>
  );
};
