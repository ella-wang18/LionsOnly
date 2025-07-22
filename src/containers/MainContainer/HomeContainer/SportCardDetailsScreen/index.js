import React from 'react';
import {View, Text} from 'react-native';
import SportsCardDetailsView from './SportCardDetailsView';

const SportsCardDetails = ({route, navigation}) => {
  console.log('Route: ', route.params);
  return (
    <SportsCardDetailsView
      data={route.params}
      goBack={() => navigation.goBack()}
    />
  );
};

export default SportsCardDetails;
