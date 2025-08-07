import React from 'react';
import {TextInput, View, Image, ScrollView} from 'react-native';
import ScreenContainer from '../../../../components/ScreenContainer';
import HeaderContainer from '../../../../components/HeaderContainer';
import AppText from '../../../../components/AppText';
import Button from '../../../../components/Button';
import globals from '../../../../util/globalStyles';
import {styles} from './styles';

const AddView = ({
  description,
  setDescription,
  image,
  onPressUploadImage,
}) => {
  return (
    <ScreenContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <HeaderContainer style={styles.header}>
          <AppText></AppText>
        </HeaderContainer>
        {image?.uri && (
          <Image
            source={image}
            style={styles.postImage}
          />
        )}
        <Button
          label={'Upload Image'}
          style={styles.uploadImageButton}
          onPress={onPressUploadImage}
        />
        <TextInput
          placeholder={'Write your description...'}
          style={[styles.description, !globals.DEVICE_TYPE && {textAlignVertical: 'top'}]}
          multiline={true}
          value={description}
          onChangeText={text => {
            setDescription(text);
          }}
        />
      </ScrollView>
      <View style={styles.addPostButtonContainer}>
        <Button
          style={{marginBottom: 0}}
          label={'Add post'}
          onPress={() => alert('Successfully Created Post')}
        />
      </View>
    </ScreenContainer>
  );
};

export default AddView;
