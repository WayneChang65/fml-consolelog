const consolelog = require('../index.js').log;

test('1. basic_chat() ', () => {
	expect(() => {
		consolelog('basic_chat', 1, 2, 3, 4, 5, 6); }).toThrow();
	
	expect(() => {
		consolelog('basic_chat', ['GroupABC', 120, 'This is ...']); }).toThrow();
	
	expect(() => {
		consolelog('basic_chat'); }).toThrow();

	expect(() => {
		consolelog('basic_chat', 
			['GroupABC', 120, 'This is ...', 'Talking' , 'Wayne Chang', 'U12345678901234567890']);
	}).not.toThrow();
});

test('2. sys_msg() ', () => {
	expect(() => {
		consolelog('sys_msg', 1, 2); }).toThrow();

	expect(() => {
		consolelog('sys_msg', ['abc']); }).toThrow();
	
	expect(() => {
		consolelog('sys_msg'); }).toThrow();

	expect(() => {
		consolelog('sys_msg', 
			['JSON', 'Write tos_group_db.json SUCCESS.']); }).not.toThrow();
});

test('3. command_msg() ', () => {
	expect(() => {
		consolelog('command_msg', 1, 2, 3, 4, 5, 6); }).toThrow();

	expect(() => {
		consolelog('command_msg', ['GroupABC', 120, 'This is ...']); }).toThrow();
	
	expect(() => {
		consolelog('command_msg'); }).toThrow();

	expect(() => {
		consolelog('command_msg', 
			['GroupABC', 120, 'TORO', 'Got 10 Cards.' , 'Wayne Chang', 'U12345678901234567890']);
	}).not.toThrow();
});

test('4. error_msg() ', () => {
	expect(() => {
		consolelog('error_msg', 1, 2, 3); }).toThrow();

	expect(() => {
		consolelog('error_msg', ['abc']); }).toThrow();
	
	expect(() => {
		consolelog('error_msg'); }).toThrow();

	expect(() => {
		consolelog('error_msg', 
			['BITLY', 'bitly.shorten ERROR', '1000 LIMITED or others.']); }).not.toThrow();
});