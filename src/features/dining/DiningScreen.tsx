import {emptyStyles} from '@unistyles/emptyStyles';
import React from 'react';
import {Image, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';

const DiningScreen = () => {
  const {styles} = useStyles(emptyStyles);

  return (
    <View style={styles.container()}>
      <Image
        source={require('@assets/images/coming_soon.jpg')}
        style={styles.emptyImage}
      />
    </View>
  );
};
export default DiningScreen;
