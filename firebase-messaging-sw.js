importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.3.0/firebase-messaging.js");

// firebaseConfigの内容は、firebaseのコンソールから取得出来る。
var firebaseConfig = {
  apiKey: "AIzaSyBDe1kb9ph1SCW3od9DOhu-EfXJH7HsnkE",
  authDomain: "first-vigil-258614.firebaseapp.com",
  databaseURL: "https://first-vigil-258614.firebaseio.com",
  projectId: "first-vigil-258614",
  storageBucket: "first-vigil-258614.appspot.com",
  messagingSenderId: "781008243311",
  appId: "1:781008243311:web:67002023718ecddb3edb9a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// 通知を受けとると push イベントが呼び出される。
self.addEventListener('push', function (event) {

  console.log("event:push")
  let messageTitle = "MESSAGETITLE"
  let messageBody = "MESSAGEBODY"
  let messageTag = "MESSAGETAG"

  const notificationPromise = self.registration.showNotification(
    messageTitle,
    {
      body: messageBody,
      tag: messageTag
    });

  event.waitUntil(notificationPromise);

}, false)

// WEBアプリがバックグラウンドの場合にはsetBackGroundMessageHandlerが呼び出される。
messaging.setBackgroundMessageHandler(function (payload) {

  console.log("backgroundMessage")

  let messageTitle = "MESSAGETITLE"
  let messageBody = "MESSAGEBODY"

  return self.registration.showNotification(
    messageTitle,
    {
      body: messageBody,
      tag: messageTag
    });
});
