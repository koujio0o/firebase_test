
// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBDe1kb9ph1SCW3od9DOhu-EfXJH7HsnkE",
  authDomain: "first-vigil-258614.firebaseapp.com",
  databaseURL: "https://first-vigil-258614.firebaseio.com",
  projectId: "first-vigil-258614",
  storageBucket: "first-vigil-258614.appspot.com",
  messagingSenderId: "781008243311",
  appId: "1:781008243311:web:67002023718ecddb3edb9a"
};
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();
messaging.usePublicVapidKey('BDJ4HyfEDWkKOWlmIBE_xEBAdf3l9o6mFWLJA-q7EWMeo2AvQi8EBBxjVSIzznhKLS2I0w2Zhyzn4dgPanH9WfI');


messaging.onMessage(payload => {
  // WEBアプリがフォアグラウンドの状態で通知を受信するとonMessageが呼び出される。
  console.log("onMessage")


})

messaging.onTokenRefresh(() => {
  //トークンが更新されるとonTokenRefreshが呼び出される。
  messaging.getToken().then((refreshedToken) => {
    console.log(refreshedToken)
  }).catch((err) => {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});