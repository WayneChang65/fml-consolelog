import { test, expect } from 'vitest';
import { log as fmlog } from '../fml_consolelog';

test('1. basic_chat() ', () => {
    expect(() => {
        fmlog('basic_chat', ['1', '2', '3', '4', '5']);
    }).toThrow();

    expect(() => {
        fmlog('basic_chat', ['GroupABC', '120', 'This is ...']);
    }).toThrow();

    expect(() => {
        fmlog('basic_chat', []);
    }).toThrow();

    expect(() => {
        fmlog('basic_chat', [
            'GroupABC',
            '120',
            'This is ...',
            'Talking',
            'Wayne Chang',
            'U12345678901234567890',
        ]);
    }).not.toThrow();
});

test('2. sys_msg() ', () => {
    expect(() => {
        fmlog('sys_msg', ['1', '2', '3']);
    }).toThrow();

    expect(() => {
        fmlog('sys_msg', ['abc']);
    }).toThrow();

    expect(() => {
        fmlog('sys_msg', []);
    }).toThrow();

    expect(() => {
        fmlog('sys_msg', ['JSON', 'Write tos_group_db.json SUCCESS.']);
    }).not.toThrow();
});

test('3. command_msg() ', () => {
    expect(() => {
        fmlog('command_msg', ['1', '2', '3', '4', '5', '6', '7']);
    }).toThrow();

    expect(() => {
        fmlog('command_msg', ['GroupABC', '120', 'This is ...']);
    }).toThrow();

    expect(() => {
        fmlog('command_msg', []);
    }).toThrow();

    expect(() => {
        fmlog('command_msg', [
            'GroupABC',
            '120',
            'TORO',
            'Got 10 Cards.',
            'Wayne Chang',
            'U12345678901234567890',
        ]);
    }).not.toThrow();
});

test('4. error_msg() ', () => {
    expect(() => {
        fmlog('error_msg', ['1', '2', '3', '4']);
    }).toThrow();

    expect(() => {
        fmlog('error_msg', ['abc']);
    }).toThrow();

    expect(() => {
        fmlog('error_msg', []);
    }).toThrow();

    expect(() => {
        fmlog('error_msg', [
            'BITLY',
            'bitly.shorten ERROR',
            '1000 LIMITED or others.',
        ]);
    }).not.toThrow();
});
