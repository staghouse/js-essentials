"use strict";function convertToDate(e){if(e instanceof Date)return e;if("string"==typeof e||"number"==typeof e)return new Date(e);throw TypeError("You must pass in a primary comparison type of Date, String, or Int")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.convertToDate=convertToDate;