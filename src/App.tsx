import './App.css'


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
  return (
    <>
      <h4>Test notification</h4>
      <button onClick={notify}>Test</button>
    </>
  );
}

export default App
