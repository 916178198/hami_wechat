console.setGlobalLogConfig({
  file: 'hami_log.txt',
});

function swipeUp() {
  let { height, width } = device;
  let x = width / 2;
  let y1 = (height / 3) * 2;
  let y2 = height / 3;
  swipe(x, y1, x + 5, y2, 500);
}

device.wakeUp();
auto.waitFor();
swipeUp();

const { chanUrl, barkUrl, stepInterval, quickChecking, checkingTime } =
  hamibot.env

while(!launchApp('WeChat')) {}
launchApp('WeChat');
sleep(500);

function clickElement(element) {
  log(element);
  log(click(element.bounds().centerX(), element.bounds().centerY()));
  log(longClick(element.bounds().centerX(), element.bounds().centerY()));
  sleep(500);
}

var contacts = text("Contacts").findOne().parent();
clickElement(contacts);

function findWithScroll(target_name) {
  var target = text(target_name).findOne();
  var count = 0
  while (!target) {
    swipeUp();
    sleep(500);
    target = text(target_name).findOne();
    count += 1;
  }
  return target;
}

var target_user = findWithScroll('单工');
clickElement(target_user);

log('finish');

launchApp('Hamibot')