import React, {ReactNode, useCallback, useMemo, useRef} from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

interface Props {
  sheetRef: any;
  snaPoints: any;
  index: any;
  children: ReactNode;
  onPandown: any;

}
const BottomSheetDrawer = ({
  sheetRef,
  snaPoints,
  index,
  children,
  onPandown,

}: Props) => {
  return (
      <BottomSheet
        ref={sheetRef}
        index={index}
        snapPoints={snaPoints}
        enablePanDownToClose={onPandown}
        >
        <View style={styles.contentContainer}>{children}</View>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    // flex: 1,
    paddingHorizontal: 18,
    alignItems: 'center',
  },
});

export default BottomSheetDrawer;
