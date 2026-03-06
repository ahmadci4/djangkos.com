importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDZ3CiCrMX9QpOtvxmW6tonR-KesbatefY", 
    authDomain: "djangkos-firebase.firebaseapp.com",
    projectId: "djangkos-firebase",
    storageBucket: "djangkos-firebase.firebasestorage.app",
    messagingSenderId: "730858102189",
    appId: "1:730858102189:web:79d22e6b283d6767aed524"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Notifikasi masuk di background:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/images/logo-djangkos.jpg'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
