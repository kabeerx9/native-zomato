import Delivery from '@assets/tabicons/delivery.png';
import DeliveryFocuses from '@assets/tabicons/delivery_focused.png';
import Dining from '@assets/tabicons/dining.png';
import DiningFocuses from '@assets/tabicons/dining_focused.png';
import Live from '@assets/tabicons/live.png';
import LiveFocused from '@assets/tabicons/live_focused.png';
import Reorder from '@assets/tabicons/reorder.png';
import ReorderFocused from '@assets/tabicons/reorder_focused.png';

import CustomText from '@components/global/CustomText';
import {Colors} from '@unistyles/Constants';
import React, {memo} from 'react';
import {Image, TextStyle, View, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface TabProps {
  name: string;
}

interface IconProps {
  focused: boolean;
}

const styles = {
  width: RFValue(18),
  height: RFValue(18),
};

const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

const textStyleInActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.lightText,
  fontSize: RFValue(9.5),
};

const textStyleActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.active,
  fontSize: RFValue(9.5),
};

const TabIcon = memo(({name}: TabProps) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Delivery'
            ? Delivery
            : name === 'Dining'
            ? Dining
            : name === 'Live'
            ? Live
            : Reorder
        }
      />
      <CustomText style={textStyleInActive}>{name}</CustomText>
    </View>
  );
});

const TabIconFocused = memo(({name}: TabProps) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Delivery'
            ? DeliveryFocuses
            : name === 'Dining'
            ? DiningFocuses
            : name === 'Live'
            ? LiveFocused
            : ReorderFocused
        }
        style={[styles]}
      />
      <CustomText style={textStyleActive}>{name}</CustomText>
    </View>
  );
});

export const DeliveryTabIcon = ({focused}: IconProps) => {
  return focused ? (
    <TabIconFocused name="Delivery" />
  ) : (
    <TabIcon name="Delivery" />
  );
};

export const DiningTabIcon = ({focused}: IconProps) => {
  return focused ? <TabIconFocused name="Dining" /> : <TabIcon name="Dining" />;
};

export const LiveTabIcon = ({focused}: IconProps) => {
  return focused ? <TabIconFocused name="Live" /> : <TabIcon name="Live" />;
};

export const ReorderTabIcon = ({focused}: IconProps) => {
  return focused ? (
    <TabIconFocused name="Reorder" />
  ) : (
    <TabIcon name="Reorder" />
  );
};


