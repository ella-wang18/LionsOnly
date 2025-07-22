import React, {useState} from 'react';
import {Alert} from 'react-native';
import NotificationsView from './NotificationsView';
import {notifications} from '../../../util/data';
import cloneDeep from 'lodash/cloneDeep';

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
            removeNotification(index);
          }
        }
      ],
      {cancelable: false}
    );
  };

  const removeNotification = (index) => {
    console.log('Index: ', index);
    if (index > -1) {
      myNotifications.splice(index, 1);
    }
    let newNotifications = cloneDeep(myNotifications);

    console.log('New notifications: ', newNotifications);

    setMyNotifications(newNotifications);
  };

  return (
    <NotificationsView
      data={myNotifications}
      deleteNotification={deleteNotification}
    />
  )
};

export default NotificationScreen;
