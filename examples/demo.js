'use strict';
const fmlog = require('../lib/fml_consolelog.js').log;

console.log('Terminal size: ' + process.stdout.columns + 'x' + process.stdout.rows);

fmlog('basic_chat',  
	['GN:Test Area', '0', 'This is a Test 測試', 'Talking' , 'Wayne Chang', '1234567890']);
fmlog('basic_chat', 
	['GN:小妹測試空間', '0', '這是一個測試對話內容', 'Talking' , 'Wayne Chang', 'U12345678901234567890']);
fmlog('basic_chat', 
	['MEETING:201會議室', '甲', '會議時間下午2點...', '保留' , 'Wayne Chang', '0921-123-123']);
fmlog('basic_chat', ['ORDER:ABC有限公司', '急', '飲料10杯..', '訂貨單' , 'Wayne', 'U12345678901234567890']);
//fmlog('basic_chat', ['0', '1', '2', '3', '4', '5']);

fmlog('sys_msg', ['TOSMM', 'Wayne\'s Bot is running on port 1234']);
fmlog('sys_msg', ['JSON', 'Write tos_group_db.json SUCCESS.']);
//fmlog('sys_msg', ['1', '2']);

fmlog('command_msg',
	['GN:小妹測試空間', '12', '抽好抽滿', '抽卡數：23', 'Wayne Chang', 'U12345678901234567890']);
fmlog('command_msg',
	['GN:測試空間A', '100', '運勢', '51/100', 'Wayne Chang', 'U12345678901234567890']);
//fmlog('command_msg', ['0', '1', '2', '3', '4', '5']);

fmlog('error_msg', ['BITLY', 'bitly.shorten ERROR', '1000 LIMITED or others.']);
//fmlog('error_msg', ['0', '1', '2']);

fmlog('crawler_msg', ['Refresh', 'TOS-Crawler', '修羅場『支配者的逼近』詳情', '15', '2019/07/30 (二) 12:02:19']);
fmlog('crawler_msg', ['NO CMD', 'Ptt-Crawler', '-'.repeat(26), '99', '2019/07/30 (二) 12:05:32']);
//fmlog('crawler_msg', ['0', '1', '2', '3', '4']);

fmlog('basic_msg', ['P2R', 'POP', 'Reply msg to group', '小妹空間']);
fmlog('basic_msg', ['A車位', '月租', '車號：ABC-1234', '張小彥']);
//fmlog('basic_msg', ['0', '1', '2', '3']);