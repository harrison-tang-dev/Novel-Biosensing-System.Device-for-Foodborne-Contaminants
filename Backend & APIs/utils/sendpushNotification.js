import Pushy from 'pushy';
import { deviceNotifi } from '../../models/users/deviceToken.js';
// Plug in your Secret API Key 
const pushyAPI = new Pushy(`${process.env.PUSHY_SECRET}`);

/**
 * Send a push notification via Pushy.
 * @param {Object} data - The payload data to deliver to the device(s).
 * @param {Array} to - The target device token(s).
 * @param {Object} options - Optional push notification options.
 * @returns {Promise<Object>} - A promise that resolves to the result of the push notification.
 */
export const sendPushNotification = (data, to, options = {}) => {
   let deviceTokens = to.filter(token => token !== 'null');
    deviceTokens = to[0]
    return new Promise((resolve, reject) => {
        pushyAPI.sendPushNotification(data, deviceTokens, options, (err, id) => {
            if (err) {
                return reject(err);
            }
            resolve({ success: true, id });
        });
    });
};


export const sendPushNotificationToAllUsers = async (title, description, customLinks) => {
    const subscriptions = await deviceNotifi.find();
  
    // Construct the payload including custom links
    const notificationData = {
        title,
        body: description,
        ...(customLinks ? { links: customLinks } : {})
    };

    const sendPromises = subscriptions.map(subscription => {
        const { regtoken } = subscription;
        return sendPushNotification(notificationData, [regtoken]);
    });

    // Wait for all notifications to be sent
    return Promise.all(sendPromises);
};

