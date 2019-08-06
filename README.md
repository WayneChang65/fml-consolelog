[![npm](https://img.shields.io/npm/v/@waynechang65/fml-consolelog.svg)](https://www.npmjs.com/package/@waynechang65/fml-consolelog)
[![npm](https://img.shields.io/npm/dm/@waynechang65/fml-consolelog.svg)](https://www.npmjs.com/package/@waynechang65/fml-consolelog)
[![Build Status](https://travis-ci.org/WayneChang65/fml-consolelog.svg?branch=master)](https://travis-ci.org/WayneChang65/fml-consolelog)
[![GitHub](https://img.shields.io/github/license/waynechang65/fml-consolelog.svg)](https://github.com/WayneChang65/fml-consolelog/)
# fml-consolelog

fml-consolelog 是一個支援ANSI顏色及格式化的多行文字輸出函式模組。  

fml-consolelog is a formatted multi-line and ANSI colors supportted text output function module.  

![image](https://raw.githubusercontent.com/WayneChang65/fml-consolelog/master/img/disp_demo.png)  

## 前言(Overview)

在大多數伺服器模式的應用程式下，無論除錯或取得簡單的立即性資訊都會使用Console.log這個函式。  
雖然已經有人寫了不少log之類的函式庫，但仍不符合自己使用，於是自己打造一個簡易的多行文字輸出函式。  

In most server mode applications, the Console.log function is wildly used regardless of debugging or simple immediate information.
Although someone has written a lot of libraries about log functions, they are still not suitable for me, so I just create a simple multi-line text output function module instead.

## 這模組能做什麼事？ (What can it do ?)

* 支援多種單行或多行的格式化文字輸出
Support single or multiple lines text output
* 支援ANSI 256色輸出
Support ANSI 256 Colors text output
* 支援半型與全型字格式化
Support both fullwidth and halfwidth characters

## 如何在您的專案使用？ (How to use it in your project ?)

* 利用 npm 套件進行下載  
Use npm to install  

```bash
npm install @waynechang65/fml-consolelog
```

* 在您的專案環境中，引用 fml-consolelog模組。  
Include @waynechang65/fml-consolelog package in your project

```javascript
const fml_consolelog = require('@waynechang65/fml-consolelog');
```

* 接下來，依照欲使用的函式格式填入適當欄位資料即可。  
Add programs below in your project  

```javascript
consolelog('basic_chat',  
    ['GN:Test Area', '0', 'This is a Test 測試', 'Talking' , 'Wayne Chang', '1234567890']);
```

## 如何跑範例程式？ (How to run the example ?)

* 從Github下載fml-consolelog專案程式碼。  
Clone fml-consolelog from GitHub

```bash
git clone https://github.com/WayneChang65/fml-consolelog.git
```

* 進入fml-consolelog專案目錄  
Get into fml-consolelog directory

```bash
cd fml-consolelog
```

* 下載跑範例程式所需要的環境組件  
Install dependencies in the cloned fml-consolelog folder

```bash
npm install
```

* 透過 npm 直接使用以下指令。(實際範例程式在 ./examples/demo.js)  
Run it with npm. (the demo example is in ./examples/demo.js)

```bash
npm run start
```

## 基本函式 (Base Methods)

* log(funType, data): 文字輸出函式, Text output function

> funType: 函式格式型態, type of function  
> data: 欲顯示的資料(字串陣列), text output data(String array data type)  

## 貢獻一己之力 (Contribution)

fml-consolelog 雖然是一個小模組，但本人還是希望這個專案能夠持續進步！若有發現臭蟲(bug)或問題，請幫忙在Issue留言告知詳細情形。  
歡迎共同開發。歡迎Pull Request，謝謝。:)  
**★歡迎送PR增加函式輸出格式。**

Even though fml-consolelog is a small project, I hope it can be improving. If there is any issue, please comment and welcome to fork and send Pull Request. Thanks. :)  
**★Welcome to send PR and add text output patterns.**
