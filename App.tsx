import React, {useState} from 'react';
import {
  BottomSheetProvider,
  BottomTabBar,
  HappyBottomSheetContent,
  ModalsEverywhereNavigation,
  SadBottomSheetContent,
  SheetRegister,
} from './src/features/ModalsEverywhere';

const App = (): JSX.Element => {
  const [registers, setRegisters] = useState<SheetRegister[]>([
    {isVisible: false, name: 'Happy', children: <HappyBottomSheetContent />},
    {isVisible: false, name: 'Sad', children: <SadBottomSheetContent />},
  ]);

  return (
    <BottomSheetProvider registers={registers} updateRegisters={setRegisters}>
      <ModalsEverywhereNavigation>
        <BottomTabBar />
      </ModalsEverywhereNavigation>
    </BottomSheetProvider>
  );
};

export default App;
