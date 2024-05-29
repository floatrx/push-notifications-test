import './App.css'
import OneSignal from 'react-onesignal';
import { useEffect } from 'react';



const notify = () => {
  if (!('Notification' in window)) {
    console.error('Web Notification is not supported');
    return;
  }

  Notification.requestPermission(function (permission) {
    if (permission === 'denied') {
      alert('Permission for Notification was denied');
      return;
    }

    const notification = new Notification('Hi there!', {
      body: 'I am here to talk about HTML5 Web Notification API',
      icon: 'favicon.png',
      dir: 'auto',
    });

    // Play a sound when the notification is displayed
    const audio = new Audio('notification.mp3');
    audio.play();

    setTimeout(function () {
      notification.close();
    }, 2000);
  });
};

function App() {
 useEffect(() => {
   try {
     OneSignal.init({
       appId: "36ff437d-eebb-4975-86fb-5ac1d63a6851",
       safari_web_id: "web.onesignal.auto.170dfd78-50f3-4c48-aaba-810262274b60",
       notifyButton: {
         enable: true,
       },
     }).then(() => {
       OneSignal.Debug.setLogLevel('trace');
       OneSignal.login("rodrigo");
       OneSignal.User.addAlias("myAlias", "1");
     });
   } catch (e) {
     console.log(e);
   }
 }, []);

  return (
    <>
      <h4>Test notification</h4>
      <button onClick={notify}>Test</button>
    </>
  );
}

export default App
