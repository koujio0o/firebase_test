if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {

    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then(registration => {

        //通知の許可をユーザに確認
        Notification.requestPermission()
          .then(permission => {

            messaging.getToken().then(
              token => {
                console.log(token)
              })


            if (permission === 'granted') {
              //通知が許可されている場合
              console.log('granted!!!!!')
              navigator.serviceWorker.ready.then(p => {

                p.pushManager.getSubscription().then(subscription => {

                  if (subscription === null) {

                    //通知の購読が存在しない場合は登録する。
                    let re = p.pushManager.subscribe({
                      userVisibleOnly: true
                    })

                  }
                })

              })

            } else {
              //通知が許可されなかった場合  
              console.log(permission)
            }
          })
      })
  })
}