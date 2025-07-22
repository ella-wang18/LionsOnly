import React, {useState} from 'react';
import HomeView from './HomeView';
import {homeData} from '../../../../util/data';

const HomeScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const viewSportCardDetails = (data) => {
    console.log('Navigation: ', navigation);
    navigation.navigate('SportCardDetailsScreen', data)
  };

  let sportsData = homeData;

  if (searchText?.trim() !== '') {
    let dataAfterSearch = [];

    sportsData.forEach(athlete => {
      let name = athlete.name ? athlete.name.toLowerCase() : '';
      let sport = athlete.sport ? athlete.sport.toLowerCase() : '';

      let matchName = name.indexOf(searchText.trim().toLowerCase());
      let matchSport = sport.indexOf(searchText.trim().toLowerCase());

      if (matchName !== -1 || matchSport !== -1) {
        dataAfterSearch.push(athlete);
      }
    })

    sportsData = dataAfterSearch;
  }

  return (
    <HomeView
      viewSportCardDetails={viewSportCardDetails}
      data={sportsData}
      searchText={searchText}
      setSearchText={setSearchText}
    />
  );
};

export default HomeScreen;
