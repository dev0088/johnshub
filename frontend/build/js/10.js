(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./src/example-components/Calendars/CalendarsFullWidthBasic/events.js":
/*!****************************************************************************!*\
  !*** ./src/example-components/Calendars/CalendarsFullWidthBasic/events.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar now = new Date();\nvar _default = [{\n  id: 0,\n  title: 'All Day Event very long title',\n  allDay: true,\n  start: new Date(2015, 3, 0),\n  end: new Date(2015, 3, 1)\n}, {\n  id: 1,\n  title: 'Long Event',\n  start: new Date(2015, 3, 7),\n  end: new Date(2015, 3, 10)\n}, {\n  id: 2,\n  title: 'DTS STARTS',\n  start: new Date(2016, 2, 13, 0, 0, 0),\n  end: new Date(2016, 2, 20, 0, 0, 0)\n}, {\n  id: 3,\n  title: 'DTS ENDS',\n  start: new Date(2016, 10, 6, 0, 0, 0),\n  end: new Date(2016, 10, 13, 0, 0, 0)\n}, {\n  id: 4,\n  title: 'Some Event',\n  start: new Date(2015, 3, 9, 0, 0, 0),\n  end: new Date(2015, 3, 10, 0, 0, 0)\n}, {\n  id: 5,\n  title: 'Conference',\n  start: new Date(2015, 3, 11),\n  end: new Date(2015, 3, 13),\n  desc: 'Big conference for important people'\n}, {\n  id: 6,\n  title: 'Meeting',\n  start: new Date(2015, 3, 12, 10, 30, 0, 0),\n  end: new Date(2015, 3, 12, 12, 30, 0, 0),\n  desc: 'Pre-meeting meeting, to prepare for the meeting'\n}, {\n  id: 7,\n  title: 'Lunch',\n  start: new Date(2015, 3, 12, 12, 0, 0, 0),\n  end: new Date(2015, 3, 12, 13, 0, 0, 0),\n  desc: 'Power lunch'\n}, {\n  id: 8,\n  title: 'Meeting',\n  start: new Date(2015, 3, 12, 14, 0, 0, 0),\n  end: new Date(2015, 3, 12, 15, 0, 0, 0)\n}, {\n  id: 9,\n  title: 'Happy Hour',\n  start: new Date(2015, 3, 12, 17, 0, 0, 0),\n  end: new Date(2015, 3, 12, 17, 30, 0, 0),\n  desc: 'Most important meal of the day'\n}, {\n  id: 10,\n  title: 'Dinner',\n  start: new Date(2015, 3, 12, 20, 0, 0, 0),\n  end: new Date(2015, 3, 12, 21, 0, 0, 0)\n}, {\n  id: 11,\n  title: 'Birthday Party',\n  start: new Date(2015, 3, 13, 7, 0, 0),\n  end: new Date(2015, 3, 13, 10, 30, 0)\n}, {\n  id: 12,\n  title: 'Late Night Event',\n  start: new Date(2015, 3, 17, 19, 30, 0),\n  end: new Date(2015, 3, 18, 2, 0, 0)\n}, {\n  id: 12.5,\n  title: 'Late Same Night Event',\n  start: new Date(2015, 3, 17, 19, 30, 0),\n  end: new Date(2015, 3, 17, 23, 30, 0)\n}, {\n  id: 13,\n  title: 'Multi-day Event',\n  start: new Date(2015, 3, 20, 19, 30, 0),\n  end: new Date(2015, 3, 22, 2, 0, 0)\n}, {\n  id: 14,\n  title: 'Today',\n  start: new Date(new Date().setHours(new Date().getHours() - 3)),\n  end: new Date(new Date().setHours(new Date().getHours() + 3))\n}, {\n  id: 15,\n  title: 'Point in Time Event',\n  start: now,\n  end: now\n}, {\n  id: 16,\n  title: 'Video Record',\n  start: new Date(2015, 3, 14, 15, 30, 0),\n  end: new Date(2015, 3, 14, 19, 0, 0)\n}, {\n  id: 17,\n  title: 'Dutch Song Producing',\n  start: new Date(2015, 3, 14, 16, 30, 0),\n  end: new Date(2015, 3, 14, 20, 0, 0)\n}, {\n  id: 18,\n  title: 'Itaewon Halloween Meeting',\n  start: new Date(2015, 3, 14, 16, 30, 0),\n  end: new Date(2015, 3, 14, 17, 30, 0)\n}, {\n  id: 19,\n  title: 'Online Coding Test',\n  start: new Date(2015, 3, 14, 17, 30, 0),\n  end: new Date(2015, 3, 14, 20, 30, 0)\n}, {\n  id: 20,\n  title: 'An overlapped Event',\n  start: new Date(2015, 3, 14, 17, 0, 0),\n  end: new Date(2015, 3, 14, 18, 30, 0)\n}, {\n  id: 21,\n  title: 'Phone Interview',\n  start: new Date(2015, 3, 14, 17, 0, 0),\n  end: new Date(2015, 3, 14, 18, 30, 0)\n}, {\n  id: 22,\n  title: 'Cooking Class',\n  start: new Date(2015, 3, 14, 17, 30, 0),\n  end: new Date(2015, 3, 14, 19, 0, 0)\n}, {\n  id: 23,\n  title: 'Go to the gym',\n  start: new Date(2015, 3, 14, 18, 30, 0),\n  end: new Date(2015, 3, 14, 20, 0, 0)\n}];\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(now, \"now\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n  reactHotLoader.register(_default, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(__signature__, \"__signature__\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n  reactHotLoader.register(now, \"now\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n  reactHotLoader.register(_default, \"_default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n  reactHotLoader.register(_default2, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/example-components/Calendars/CalendarsFullWidthBasic/events.js?");

/***/ }),

/***/ "./src/example-components/Calendars/CalendarsFullWidthBasic/index.js":
/*!***************************************************************************!*\
  !*** ./src/example-components/Calendars/CalendarsFullWidthBasic/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-big-calendar */ \"./node_modules/react-big-calendar/dist/react-big-calendar.esm.js\");\n/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ \"./src/example-components/Calendars/CalendarsFullWidthBasic/events.js\");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/format */ \"./node_modules/date-fns/esm/format/index.js\");\n/* harmony import */ var date_fns_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/parse */ \"./node_modules/date-fns/esm/parse/index.js\");\n/* harmony import */ var date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/startOfWeek */ \"./node_modules/date-fns/esm/startOfWeek/index.js\");\n/* harmony import */ var date_fns_getDay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/getDay */ \"./node_modules/date-fns/esm/getDay/index.js\");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar allViews = Object.keys(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__[\"Views\"]).map(k => react_big_calendar__WEBPACK_IMPORTED_MODULE_2__[\"Views\"][k]);\n\nvar ColoredDateCellWrapper = _ref => {\n  var {\n    children\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(children), {\n    style: {\n      backgroundColor: '#eaf6ff'\n    }\n  });\n};\n\nvar locales = {\n  'en-US': __webpack_require__(/*! date-fns/locale/en-US */ \"./node_modules/date-fns/esm/locale/en-US/index.js\")\n};\nvar localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__[\"dateFnsLocalizer\"])({\n  format: date_fns_format__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  parse: date_fns_parse__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  startOfWeek: date_fns_startOfWeek__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  getDay: date_fns_getDay__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  locales\n});\n\nvar MyCalendar = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_2__[\"Calendar\"], {\n  localizer: localizer,\n  views: allViews,\n  step: 60,\n  showMultiDayTimes: true,\n  defaultDate: new Date(2020, 3, 1),\n  components: {\n    timeSlotWrapper: ColoredDateCellWrapper\n  },\n  events: _events__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  startAccessor: \"start\",\n  endAccessor: \"end\",\n  style: {\n    minHeight: 650\n  }\n}));\n\nvar _default = MyCalendar;\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(allViews, \"allViews\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(ColoredDateCellWrapper, \"ColoredDateCellWrapper\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(locales, \"locales\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(localizer, \"localizer\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(MyCalendar, \"MyCalendar\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(__signature__, \"__signature__\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(allViews, \"allViews\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(ColoredDateCellWrapper, \"ColoredDateCellWrapper\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(locales, \"locales\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(localizer, \"localizer\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(MyCalendar, \"MyCalendar\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(_default, \"_default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n  reactHotLoader.register(_default2, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/Calendars/CalendarsFullWidthBasic/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/example-components/Calendars/CalendarsFullWidthBasic/index.js?");

/***/ })

}]);