import SafeFrame from "./SafeFrame";

export default function () {
  let currentHour = 10;
  const frame: SafeFrame = new SafeFrame();
  
  setInterval(() => {
    currentHour += 1;
    if (currentHour > 24) currentHour = 0;
    frame.setClock(currentHour);

    const actions = [
      frame.buttonUse,
      frame.buttonAlarm,
      frame.buttonPhone,
      frame.buttonExit
    ];
    const randomAction = Math.floor(Math.random() * actions.length);
    frame.actionPerformed(actions[randomAction])
  }, 1000);
}