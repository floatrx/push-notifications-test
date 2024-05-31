import { useEffect } from 'react';

/**
 * Testing OneSignal push notifications
 * (mobile and desktop -> only Chrome)
 */
import OneSignal from 'react-onesignal';

/**
 * Show a notification - works only for desktop browsers
 */
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
    audio.volume = 0.2;
    audio.play();

    setTimeout(function () {
      notification.close();
    }, 2000);
  }).then(console.log);
};

function App() {
  useEffect(() => {
    try {
      // Skip OneSignal initialization on localhost
      if (window.location.hostname === 'localhost') return;

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

        OneSignal.Notifications.requestPermission().then((status) => {
          console.log('Notification permission status:', status);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <main className="main">
      <h5>🔔 Test web notifications
        <br/>
        <a href="https://github.com/floatrx/push-notifications-test">Source code here...</a>
      </h5>
      <p>
        <button onClick={notify}>Show Notification!</button>
      </p>
      <p>
        Request <strong>permission</strong> popup:
      </p>
      <div>
        <img src="/request.png" alt="request permission"/>
      </div>
      <p>
        Also check global system notifications (e.g. in OSX):
      </p>
      <img src="/notifications.png" alt="osx notifications"/>
      <p>
        {'>>'} Check console.logs for debug info. {'<< '}
      </p>
      <strong>
        OneSignal push notifications final test.
      </strong>
      <img src="/onesignal.png" alt="onesignal"/>
      <br/>
      <a href="https://onesignal.com/">https://onesignal.com/</a>
    </main>
  );
}

export default App
