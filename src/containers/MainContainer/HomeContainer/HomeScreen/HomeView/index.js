import React from 'react';
import {View, Text, TextInput, FlatList, TouchableOpacity, ImageBackground, Image} from 'react-native';
import ScreenContainer from '../../../../../components/ScreenContainer';
import PropTypes from 'prop-types';
import globals from '../../../../../util/globalStyles';
import globalImages from '../../../../../util/globalImages';
import {styles} from './styles';
import AppText from '../../../../../components/AppText';
import {displaySportIcon} from '../../../../../util/helpers';

const HomeView = ({viewSportCardDetails, data, searchText, setSearchText}) => {
  const displaySportIcon = (sport) => {
   return (sport === 'Track & Field') ? globalImages.trackIcon :
     (sport === 'Football') ? globalImages.footballIcon :
       (sport === 'Hockey') ? globalImages.hockeyIcon :
         (sport === 'Basketball') ? globalImages.basketballIcon :
           (sport === 'Baseball') ? globalImages.baseballIcon : globalImages.soccerIcon;

  };

  return (
    <ScreenContainer>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={'#656565'}
          style={styles.searchInput}
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
      </View>
      <View style={styles.dataContainer}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => viewSportCardDetails(item)}>
                <ImageBackground
                  key={index}
                  source={item.image}
                  style={styles.imageBackground}
                >
                  <View style={styles.descriptionContainer}>
                    <View>
                      <AppText style={styles.name}>
                        {item.name}
                      </AppText>
                      <AppText style={styles.sport}>
                        {item.sport}
                      </AppText>
                    </View>
                    <Image source={displaySportIcon(item.sport)}/>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </ScreenContainer>
  );
};

HomeView.propTypes = {
  data: PropTypes.array,
  viewSportCardDetails: PropTypes.func,
};

export default HomeView;
