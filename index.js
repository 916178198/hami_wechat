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

var image_paths = [];

events.observeToast();
events.onToast(function(toast) {
  image_path = toast.getText().split('"')[1];
  image_paths.push(image_path);
});

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

// 退回微信主页
var back_button = id("et").exists() && id("et").findOne().parent();
while (back_button) {
  clickElement(back_button);
  back_button = id("et").exists() && id("et").findOne().parent();
  print(back_button);
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

var moments = text("Moments").findOne().parent();
clickElement(moments);

log('finish');

// sleep(50000);

log('launch hamibot');

launchApp('Hamibot');