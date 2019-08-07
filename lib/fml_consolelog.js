'use strict';
const ck = require('chalk');
const stringWidth = require('string-width');
const align = require('ascii-string-align');

const COLOR_BLACK = '#000000';
const COLOR_RED_ERROR = '#ff0000';
const COLOR_PINK = '#d75f87';

function _log(_tname, _aryData) {    
	let outMsg;
	switch (_tname) {
	case 'basic_chat':  // 2 Lines
		outMsg = basic_chat(_aryData);
		break;
	case 'sys_msg':     // 1 Line
		outMsg = sys_msg(_aryData);
		break;
	case 'command_msg': // 2 Lines
		outMsg = command_msg(_aryData);
		break;
	case 'error_msg':   // 1 Line
		outMsg = error_msg(_aryData);
		break;
	case 'crawler_msg': // 1 Line
		outMsg = crawler_msg(_aryData);
		break;
	case 'basic_msg':	// 1 Line
		outMsg = basic_msg(_aryData);
		break;
	case 'event_msg':	// 1 Line
		outMsg = event_msg(_aryData);
		break;
	default:
		break;
	}
	console.log(outMsg);
}

//////////////  Format Functions ////////////////

function basic_chat(_aryData) {
	let _a = _aryData;
	let numDataArg = 6;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');
	

	for (let i = 0; i < _a.length; i++) _a[i] = String(_a[i]);
	let ttyWidth = process.stdout.columns;
	let space_line1 = ttyWidth - stringWidth(_a[0]) - stringWidth('-[]');
	space_line1 = (space_line1 > 0) ? space_line1 : 0;

	_a[1] = align(_a[1], 4, 'left');
	_a[2] = align(_a[2] + '- ' + _a[3], 59, 'left');
	return `${' '.repeat(space_line1)}-[${_a[0]}]` + '\n' +
		`${ck.whiteBright.bold(_a[1])}---${_a[2]}- 【${_a[4]}】 ${ck.gray('---' + _a[5])}`;
}

function sys_msg(_aryData) {
	let _a = _aryData;
	let numDataArg = 2;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');
	
	return `${ck.hex(COLOR_BLACK).bold.bgCyanBright(' ' + _a[0] + ' ')} ` + 
		`${ck.cyan(_a[1])}`;
}

function command_msg(_aryData) {
	let _a = _aryData;
	let numDataArg = 6;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');

	for (let i = 0; i < _a.length; i++) _a[i] = String(_a[i]);
	let ttyWidth = process.stdout.columns;
	let space_line1 = ttyWidth - stringWidth(_a[0]) - stringWidth('-[]');
	space_line1 = (space_line1 > 0) ? space_line1 : 0;

	_a[1] = align(_a[1], 4, 'left');
	_a[2] = align(_a[2], 14, 'center');
	_a[3] = align(_a[3], 41, 'left');
	return ck.blueBright(`${' '.repeat(space_line1)}-[${_a[0]}]`) + '\n' +
	ck.blueBright(`${ck.bold(_a[1])}---${ck.hex(COLOR_BLACK).bgBlueBright.bold(_a[2])} `) + 
		ck.blueBright(`- ${_a[3]} - 【${_a[4]}】 ${ck.gray('---' + _a[5])}`);

}

function error_msg(_aryData) {
	let _a = _aryData;
	let numDataArg = 3;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');

	return ck.hex(COLOR_RED_ERROR).bold(`${ck.hex(COLOR_BLACK).bgRed(' ' + _a[0] + ' ')} ` + 
	`${_a[1]} - ${_a[2]}`);
}

function crawler_msg(_aryData) {
	let _a = _aryData;
	let numDataArg = 5;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');    
	
	_a[0] = align(_a[0], 10, 'center');
	_a[1] = align(_a[1], 15, 'center');
	return ck.magenta(`${ck.bold('<' + _a[0] + '>')}【${_a[1]}】${_a[2]} - ${_a[3]} - ${_a[4]}`);
}

function basic_msg(_aryData) {
	let _a = _aryData;
	let numDataArg = 4;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');    
	
	_a[0] = align(_a[0], 6, 'center');
	_a[1] = align(_a[1], 6, 'center');
	_a[2] = align(_a[2], 70, 'left');
	
	return ck.green(`< ${_a[0]} > < ${_a[1]} > ${_a[2]}-[${_a[3]}]`);
}

function event_msg(_aryData) {
	let _a = _aryData;
	let numDataArg = 3;

	if (!Array.isArray(_a)) throw new Error('The argment should be an Array.');
	if (_a.length != numDataArg) throw new Error('Lack of elements. They should be ' + numDataArg +'.');

	return ck.hex(COLOR_PINK).bold(`${ck.hex(COLOR_BLACK).bgHex(COLOR_PINK).bold(' ' + _a[0] + ' ')} ` + 
	`${_a[1]} - ${_a[2]}`);
}
//////////////  Module Exports //////////////////
module.exports = {
	log : _log
};