import React, {useState} from 'react';
import AddView from './AddView';
import {onPressUploadImage} from '../../../util/helpers';

const AddScreen = ({navigation}) => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('')
  console.log('Image: ', image);

  return (
    <AddView
      description={description}
      setDescription={setDescription}
      image={image}
      onPressUploadImage={() => onPressUploadImage(setImage)}
    />
  );
};

export default AddScreen;
