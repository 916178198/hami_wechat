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

var contacts = id("e7i").className("android.widget.TextView").text("Contacts").findOne()
log('a1');
log(click(contacts));
log(contacts.click());

log('a2');

function findWithScroll(target_name) {
  var target = text(target_name).findOne();
  var count = 0
  while (!target) {
    sleep(200);
    swipeUp();
    target = text(target_name).findOne();
    count += 1;
    log(count);
  }
  return target;
}

log('a3');
var target_user = findWithScroll('单工');
log(target_user);

log('a4');

launchApp('Hamibot')