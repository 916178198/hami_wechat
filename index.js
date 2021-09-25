
device.wakeUp();

console.setGlobalLogConfig({
  file: 'hami_log.txt',
});

auto.waitFor();
log(0);
while(!launchApp('Wechat')) {}

log(1);
var contacts = text('Contacts').findOne();
log(2);
contacts.click();
log(contacts);
// click('Contacts')

app.sendEmail({
  email: ['test@merr.33mail.com'],
  subject: '这是一个邮件标题2',
  text: '这是邮件正文',
});

log(7)