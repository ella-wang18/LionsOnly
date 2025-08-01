import React, {useState} from 'react';
import {View, Image, TouchableOpacity, FlatList, Modal} from 'react-native';
import ScreenContainer from '../../../../components/ScreenContainer';
import HeaderContainer from '../../../../components/HeaderContainer';
import AppText from '../../../../components/AppText';
import globals from '../../../../util/globalStyles';
import {styles} from './styles';
import Button from '../../../../components/Button';
import AppTextInput from '../../../../components/AppTextInput';

const ProfileView = ({
  data,
  height,
  setHeight,
  weight,
  setWeight,
  sport,
  setSport,
}) => {
  const [post, setPost] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  console.log({
    height,
    weight,
    sport,
  })

  return (
    <ScreenContainer isScrollable>
      <HeaderContainer>
        <AppText>
          {data?.name?.length > 0 ? data.name.toUpperCase() : ''}
        </AppText>
      </HeaderContainer>
      <View style={styles.userInfoContainer}>
        <Image
          style={styles.profileImage}
          source={data?.profileImage ? data.profileImage : ''}
        />
        <View style={styles.userDataContainer}>
          <View style={styles.userData}>
            <AppText style={styles.userDataLabel}>
              HEIGHT:
            </AppText>
            <AppText style={styles.userDataInfo}>
              {height?.length > 0 ? height : ''}
            </AppText>
          </View>
          <View style={styles.userData}>
            <AppText style={styles.userDataLabel}>WEIGHT:</AppText>
            <AppText style={styles.userDataInfo}>
              {weight?.length > 0 ? weight : ''}
            </AppText>
          </View>
          <View style={styles.userData}>
            <AppText style={styles.userDataLabel}>SPORT:</AppText>
            <AppText style={styles.userDataInfo}>
              {sport?.length > 0 ? sport : ''}
            </AppText>
          </View>
        </View>
        <View style={styles.editContainer}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <AppText>Edit</AppText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={[styles.button, {backgroundColor: globals.COLORS.accent}]}
          label={'POST'}
          onPress={() => setPost(true)}
        />
        <Button
          style={styles.button}
          label={'SHARED'}
          onPress={() => setPost(false)}
        />
      </View>
      {
        post && (
          <FlatList
            data={data.post}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            renderItem={({item,index}) => {
              return (
                <Image
                  source={item}
                  key={index}
                  style={styles.image}
                />
              )
            }}
          />
        )
      }

      {
        !post && (
          <FlatList
            data={data.shared}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            renderItem={({item,index}) => {
              return (
                <Image
                  source={item}
                  key={index}
                  style={styles.image}
                />
              )
            }}
          />
        )
      }
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed");
        }}
      >
      <View style={styles.modalContainer}>
        <View style={styles.modalForm}>
          <View style={styles.saveContainer}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <AppText style={{fontWeight: 'bold', color: globals.COLORS.secondary}}>Save</AppText>
            </TouchableOpacity>
          </View>
          <AppTextInput
            label={'Height'}
            value={height}
            setTextValue={setHeight}
          />
          <AppTextInput
            label={'Weight'}
            value={weight}
            setTxtVAlue={setWeight}
          />
          <AppTextInput
            label={'Sport'}
            value={sport}
            setTextValue={setSport}
          />
        </View>
      </View>
      </Modal>
    </ScreenContainer>
  );
};

export default ProfileView;
