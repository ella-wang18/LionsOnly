import React, {useState} from 'react';
import ProfileView from './ProfileView';
import {userData} from '../../../util/data';

const ProfileScreen = () => {
  const [height, setHeight] = useState(userData.height);
  const [weight, setWeight] = useState(userData.weight);
  const [sport, setSport] = useState(userData.sport);

  return (
    <ProfileView
      data={userData}
      height={height}
      setHeight={setHeight}
      weight={weight}
      setWeight={setWeight}
      sport={sport}
      setSport={setSport}
    />
  )
};

export default ProfileScreen;
