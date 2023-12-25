import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type RadioButtonContextValue = {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  disabled: boolean | undefined;
};

const RadioButtonContext = createContext<RadioButtonContextValue | undefined>(
  undefined
);

type RadioButtonProviderProps = {
  defaultValue?: string;
  disabled: boolean;
  onValueChange?: (value?: string) => void;
};

export const RadioButtonProvider: FC<
  PropsWithChildren<RadioButtonProviderProps>
> = ({ children, defaultValue, disabled = false, onValueChange }) => {
  const [_value, _setValue] = useState<string | undefined>(defaultValue);
  const value = useMemo(() => {
    return {
      value: _value,
      setValue: (props: React.SetStateAction<string | undefined>) => {
        onValueChange?.(_value);
        return _setValue(props);
      },
      disabled,
    };
  }, [_value, disabled, onValueChange]);

  return (
    <RadioButtonContext.Provider value={value}>
      {children}
    </RadioButtonContext.Provider>
  );
};

export const useRadioButton = () => {
  const context = useContext(RadioButtonContext);

  if (context === undefined) {
    throw new Error('useRadioButton must be used within a RadioButtonProvider');
  }

  return context;
};
