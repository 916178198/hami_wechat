function swipeUp() {
  let { height, width } = device;
  let x = width / 2;
  let y1 = (height / 3) * 2;
  let y2 = height / 3;
  swipe(x, y1, x + 5, y2, 500);
}

device.wakeUp();
swipeUp();

console.setGlobalLogConfig({
  file: 'hami_log.txt',
});

const { chanUrl, barkUrl, stepInterval, quickChecking, checkingTime } =
  hamibot.env

auto.waitFor();

while(!launchApp('Wechat')) {}

var contacts = text('Contacts').findOne();
contacts.click();

function findWithScroll(target_name) {
  var target = text(target_name).findOne();
  var count = 0
  while (!target) {
    sleep(stepInterval);
    swipeUp();
    target = text(target_name).findOne();
    count += 1;
    log(count);
  }
  log('findWithScroll');
  log(target);
  return target;
}

var target_user = findWithScroll('单工');
log(target_user);

app.sendEmail({
  email: ['test@merr.33mail.com'],
  subject: '这是一个邮件标题2',
  text: '这是邮件正文',
});

log(7)