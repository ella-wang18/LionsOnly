import React from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import ScreenContainer from '../../../../components/ScreenContainer';
import HeaderContainer from '../../../../components/HeaderContainer';
import AppText from '../../../../components/AppText';
import PropTypes from 'prop-types';
import globals from '../../../../util/globalStyles';
import {styles} from './styles';

const NotificationsView = ({
  data,
  deleteNotification,
}) => {
  return (
    <ScreenContainer>
      <HeaderContainer>
        <AppText></AppText>
      </HeaderContainer>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <AppText style={styles.text}>
                {item.message}
              </AppText>
              <TouchableOpacity onPress={() => deleteNotification(index)}>
                <AppText style={[styles.text, {color: globals.COLORS.secondary}]}>
                  Delete
                </AppText>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </ScreenContainer>
  );
};

NotificationsView.propTypes = {
  data: PropTypes.array,
  deleteNotification: PropTypes.func,
}

export default NotificationsView;
