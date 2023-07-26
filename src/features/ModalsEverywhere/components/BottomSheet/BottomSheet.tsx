import React, {createContext, useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

export type SheetRegister = {
  name: string;
  isVisible: boolean;
  children?: React.ReactNode;
};

type Controller = {
  show: (name: string) => void;
  hide: (name: string) => void;
};

/**
 * Renderabl
 */

type BottomSheetProps = {} & SheetRegister;

export const BottomSheet = ({
  children,
  isVisible,
}: BottomSheetProps): JSX.Element => {
  if (!isVisible) {
    return <></>;
  }

  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 18,
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
});

/**
 * Provider
 */

export const BottomSheetContext = createContext<Controller>({
  show: () => {},
  hide: () => {},
});

type BottomSheetProviderProps = {
  registers: SheetRegister[];
  updateRegisters: React.Dispatch<React.SetStateAction<SheetRegister[]>>;
};

export const BottomSheetProvider = ({
  registers,
  updateRegisters,
  children,
}: React.PropsWithChildren<BottomSheetProviderProps>): JSX.Element => {
  const updateVisibility = useCallback(
    (name: string, newVisibility: boolean) => {
      updateRegisters(prevState => {
        const newState: SheetRegister[] = prevState.map(el => {
          if (el.name !== name) {
            return el;
          }

          return {...el, isVisible: newVisibility};
        });

        return newState;
      });
    },
    [updateRegisters],
  );

  const value = useMemo(
    () => ({
      show: (name: string) => updateVisibility(name, true),
      hide: (name: string) => updateVisibility(name, false),
    }),
    [updateVisibility],
  );

  return (
    <BottomSheetContext.Provider value={value}>
      {registers.map(register => (
        <BottomSheet key={register.name} {...register} />
      ))}
      {children}
    </BottomSheetContext.Provider>
  );
};
