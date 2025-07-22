import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ScreenContainer from '../../../../../components/ScreenContainer';
import globals from '../../../../../util/globalStyles';
import PropTypes from 'prop-types';
import {displaySportIcon} from '../../../../../util/helpers';
import AppText from '../../../../../components/AppText';
import {styles, images} from './styles';

const SportsCardDetailsView = ({data, goBack}) => {
  return (
    <ScreenContainer isScrollable>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={goBack}>
          <Image source={images.arrowDown} style={styles.closeButton}/>
        </TouchableOpacity>
      </View>

      <View style={styles.sportContainer}>
        <Image
          source={data.profileImage}
          style={styles.profileImage}
        />
        <Image source={displaySportIcon(data.sport)} />
      </View>

      <Image source={data.image} style={styles.image} />
      <AppText style={styles.name}>
        {data.name}
      </AppText>
      <AppText style={styles.sport}>
        {data.sport}
      </AppText>

      <View style={styles.measurements}>
        <AppText style={styles.label}>
          HEIGHT:
        </AppText>
        <AppText style={{fontSize: globals.SCREEN_SIZE.width * 0.04, fontWeight: 'bold', marginBottom: 10}}>
          {data.height}
        </AppText>
      </View>

      <View style={[styles.measurements, {marginBottom: 40}]}>
        <AppText style={styles.label}>
          WEIGHT:
        </AppText>
        <AppText style={{fontSize: globals.SCREEN_SIZE.width * 0.04, fontWeight: 'bold', marginBottom: 10}}>
          {data.weight}
        </AppText>
      </View>
      <AppText style={styles.label}>
        SHARED EXPERIENCE:
      </AppText>
      <AppText style={styles.sharedExperience}>
        Shared experience text or paragraph here
      </AppText>

    </ScreenContainer>
  );
};

SportsCardDetailsView.propTypes = {
  data: PropTypes.object,
  goBack: PropTypes.func,
};

export default SportsCardDetailsView;
