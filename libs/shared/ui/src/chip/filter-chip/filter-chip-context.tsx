import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

type FilterChipContextValue = {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  fixed: boolean | undefined;
};

const FilterChipContext = createContext<FilterChipContextValue | undefined>(
  undefined
);

type FilterChipProviderProps = {
  defaultValue?: string;
  fixed: boolean;
  onValueChange?: (value?: string) => void;
};

export const FilterChipProvider: FC<
  PropsWithChildren<FilterChipProviderProps>
> = ({ children, defaultValue, fixed, onValueChange }) => {
  const [_value, _setValue] = useState<string | undefined>(defaultValue);
  const value = useMemo(() => {
    return {
      value: _value,
      setValue: (props: React.SetStateAction<string | undefined>) => {
        onValueChange?.(_value);
        return _setValue(props);
      },
      fixed,
    };
  }, [_value, fixed, onValueChange]);

  return (
    <FilterChipContext.Provider value={value}>
      {children}
    </FilterChipContext.Provider>
  );
};

export const useFilterChip = () => {
  const context = useContext(FilterChipContext);

  if (context === undefined) {
    throw new Error('useFilterChip must be used within a FilterChipProvider');
  }

  return context;
};
