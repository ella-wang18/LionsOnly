import React, {useState} from 'react';
import {Alert} from 'react-native';
import NotificationsView from './NotificationsView';
import {notifications} from '../../../util/data';
import {deleteItem} from '../../../util/helpers';

const NotificationScreen = () => {
  const [myNotifications, setMyNotifications] = useState(notifications);

  const deleteNotification = (index) => {
    Alert.alert(
      'Delete Notification',
      'Are you sure you want to proceed?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            deleteItem(index, myNotifications, setMyNotifications);
          }
        }
      ],
      {cancelable: false}
    );
  };

  return (
    <NotificationsView
      data={myNotifications}
      deleteNotification={deleteNotification}
    />
  )
};

export default NotificationScreen;
