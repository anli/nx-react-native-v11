import { ActionChip, ActionChipProps } from '@nx-react-native/shared-ui';
import { format, startOfDay } from 'date-fns';
import { FC, useState } from 'react';
import DatePicker from 'react-native-date-picker';

type DateSelectChipProps = Partial<ActionChipProps> & {
  value: string;
  onChange?: (value: string) => void;
};

export const DateSelectChip: FC<DateSelectChipProps> = ({
  value,
  onChange,
  ...rest
}) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const handleDatePickerChangeValue = (date: Date) => {
    setIsDatePickerVisible(false);
    onChange?.(startOfDay(date).toISOString());
  };

  const handleDatePickerToggle = () =>
    setIsDatePickerVisible((_visible) => !_visible);

  return (
    <>
      {value ? (
        <ActionChip
          title={format(
            new Date(startOfDay(value).toISOString()),
            'E, d MMM yyyy'
          )}
          small
          outlined
          onPress={handleDatePickerToggle}
          {...rest}
        />
      ) : (
        <ActionChip title="Played on?" small outlined {...rest} />
      )}
      <DatePicker
        modal
        open={isDatePickerVisible}
        date={value ? new Date(value) : new Date()}
        onConfirm={handleDatePickerChangeValue}
        onCancel={handleDatePickerToggle}
        mode="date"
      />
    </>
  );
};
