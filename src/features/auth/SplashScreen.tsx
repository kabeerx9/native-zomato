import {splashStyles} from '@unistyles/authStyles';
import React, {useEffect} from 'react';
import {Image, Platform, StatusBar, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

import CustomText from '@components/global/CustomText';
import {resetAndNavigate} from '@utils/NavigationUtils';
import Animated, {FadeInDown} from 'react-native-reanimated';

const SplashScreen = () => {
  const {styles} = useStyles(splashStyles);

  useEffect(() => {
    const timeout = setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/logo_t.png')}
        style={styles.logoImage}
      />

      <Animated.View
        style={styles.animatedContainer}
        entering={FadeInDown.delay(400).duration(800)}>
        <Image
          source={require('@assets/images/tree.png')}
          style={styles.treeImage}
        />
        <CustomText
          style={styles.msgText}
          fontFamily="Okra-Medium"
          color="white"
          variant="h5">
          Carbon and Plastic Neutral Deliveries in India
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
