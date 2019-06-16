import React from 'react';
import { Image } from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../src/res/seacretlogo.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}