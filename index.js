console.setGlobalLogConfig({
  file: 'hami_log.txt',
});

var target_username = '单工'; //'求诸于心';

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

function clickElement(element) {
  click(element.bounds().centerX(), element.bounds().centerY());
  longClick(element.bounds().centerX(), element.bounds().centerY());
}

/*
// 退回微信主页
id("et").findOne(500); // 确认load之后再用exist
var back_button = id("et").exists() && id("et").findOne(500).parent();
while (back_button) {
  clickElement(back_button);
  id("et").findOne(500);
  back_button = id("et").exists() && id("et").findOne(500).parent();
  print(back_button);
}


var contacts = text("Contacts").findOne(500).parent();
clickElement(contacts);

function findWithScroll(target_name) {
  var target = text(target_name).findOne(500);
  var count = 0
  while (!target) {
    swipeUp();
    target = text(target_name).findOne(500);
    count += 1;
  }
  return target;
}

var target_user = findWithScroll(target_username);
clickElement(target_user);

var moments = text("Moments").findOne(500).parent();
clickElement(moments);
*/

var existing = []; // TODO: need update

function findNextMoment() {
  id("ers").findOne(500); // 确定页面load
  var pivots = id("ers").find();
  for (let i = 0; i < pivots.length; i++) {
    var pivot = pivots[i];
    log(pivot);
    clickElement(pivot);
    break;
  }
}

findNextMoment();

log('launch hamibot');
launchApp('Hamibot');