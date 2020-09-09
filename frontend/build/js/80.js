(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./src/example-components/FormsWizard/FormsWizardBasic/index.js":
/*!**********************************************************************!*\
  !*** ./src/example-components/FormsWizard/FormsWizardBasic/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ \"./node_modules/core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Stepper */ \"./node_modules/@material-ui/core/esm/Stepper/index.js\");\n/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Step */ \"./node_modules/@material-ui/core/esm/Step/index.js\");\n/* harmony import */ var _material_ui_core_StepButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepButton */ \"./node_modules/@material-ui/core/esm/StepButton/index.js\");\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n  root: {\n    width: '100%'\n  },\n  button: {\n    marginRight: theme.spacing(1)\n  },\n  backButton: {\n    marginRight: theme.spacing(1)\n  },\n  completed: {\n    display: 'inline-block'\n  },\n  instructions: {\n    marginTop: theme.spacing(1),\n    marginBottom: theme.spacing(4)\n  }\n}));\n\nfunction getSteps() {\n  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];\n}\n\nfunction getStepContent(step) {\n  switch (step) {\n    case 0:\n      return 'Step 1: Select campaign settings...';\n\n    case 1:\n      return 'Step 2: What is an ad group anyways?';\n\n    case 2:\n      return 'Step 3: This is the bit I really care about!';\n\n    default:\n      return 'Unknown step';\n  }\n}\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n  variant: \"caption\"\n}, \"Optional\");\n\nvar _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Divider\"], null);\n\nvar LivePreviewExample = () => {\n  var classes = useStyles();\n  var [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);\n  var [completed, setCompleted] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Set());\n  var [skipped, setSkipped] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(new Set());\n  var steps = getSteps();\n\n  var totalSteps = () => {\n    return getSteps().length;\n  };\n\n  var isStepOptional = step => {\n    return step === 1;\n  };\n\n  var handleSkip = () => {\n    if (!isStepOptional(activeStep)) {\n      // You probably want to guard against something like this\n      // it should never occur unless someone's actively trying to break something.\n      throw new Error(\"You can't skip a step that isn't optional.\");\n    }\n\n    setActiveStep(prevActiveStep => prevActiveStep + 1);\n    setSkipped(prevSkipped => {\n      var newSkipped = new Set(prevSkipped.values());\n      newSkipped.add(activeStep);\n      return newSkipped;\n    });\n  };\n\n  var skippedSteps = () => {\n    return skipped.size;\n  };\n\n  var completedSteps = () => {\n    return completed.size;\n  };\n\n  var allStepsCompleted = () => {\n    return completedSteps() === totalSteps() - skippedSteps();\n  };\n\n  var isLastStep = () => {\n    return activeStep === totalSteps() - 1;\n  };\n\n  var handleNext = () => {\n    var newActiveStep = isLastStep() && !allStepsCompleted() ? // It's the last step, but not all steps have been completed\n    // find the first step that has been completed\n    steps.findIndex((step, i) => !completed.has(i)) : activeStep + 1;\n    setActiveStep(newActiveStep);\n  };\n\n  var handleBack = () => {\n    setActiveStep(prevActiveStep => prevActiveStep - 1);\n  };\n\n  var handleStep = step => () => {\n    setActiveStep(step);\n  };\n\n  var handleComplete = () => {\n    var newCompleted = new Set(completed);\n    newCompleted.add(activeStep);\n    setCompleted(newCompleted);\n\n    if (completed.size !== totalSteps() - skippedSteps()) {\n      handleNext();\n    }\n  };\n\n  var handleReset = () => {\n    setActiveStep(0);\n    setCompleted(new Set());\n    setSkipped(new Set());\n  };\n\n  var isStepSkipped = step => {\n    return skipped.has(step);\n  };\n\n  function isStepComplete(step) {\n    return completed.has(step);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    alternativeLabel: true,\n    nonLinear: true,\n    activeStep: activeStep\n  }, steps.map((label, index) => {\n    var stepProps = {};\n    var buttonProps = {};\n\n    if (isStepOptional(index)) {\n      buttonProps.optional = _ref;\n    }\n\n    if (isStepSkipped(index)) {\n      stepProps.completed = false;\n    }\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({\n      key: label\n    }, stepProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_StepButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({\n      onClick: handleStep(index),\n      completed: isStepComplete(index)\n    }, buttonProps), label));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, allStepsCompleted() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: classes.instructions\n  }, \"All steps completed - you're finished\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    onClick: handleReset\n  }, \"Reset\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, _ref2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"py-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    className: classes.instructions\n  }, getStepContent(activeStep)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    disabled: activeStep === 0,\n    onClick: handleBack,\n    className: classes.button\n  }, \"Back\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: handleNext,\n    className: classes.button\n  }, \"Next\"), isStepOptional(activeStep) && !completed.has(activeStep) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: handleSkip,\n    className: classes.button\n  }, \"Skip\"), activeStep !== steps.length && (completed.has(activeStep) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Typography\"], {\n    variant: \"caption\",\n    className: classes.completed\n  }, \"Step \", activeStep + 1, \" already completed\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: handleComplete\n  }, completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'))))))));\n};\n\n__signature__(LivePreviewExample, \"useStyles{classes}\\nuseState{[activeStep, setActiveStep](0)}\\nuseState{[completed, setCompleted](new Set())}\\nuseState{[skipped, setSkipped](new Set())}\", () => [useStyles]);\n\n__signature__(LivePreviewExample, \"useStyles{classes}\\nuseState{[activeStep, setActiveStep](0)}\\nuseState{[completed, setCompleted](new Set())}\\nuseState{[skipped, setSkipped](new Set())}\", () => [useStyles]);\n\nvar _default = LivePreviewExample;\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(getSteps, \"getSteps\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(getStepContent, \"getStepContent\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(LivePreviewExample, \"LivePreviewExample\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(__signature__, \"__signature__\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(useStyles, \"useStyles\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(getSteps, \"getSteps\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(getStepContent, \"getStepContent\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(_ref, \"_ref\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(_ref2, \"_ref2\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(LivePreviewExample, \"LivePreviewExample\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(_default, \"_default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n  reactHotLoader.register(_default2, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/example-components/FormsWizard/FormsWizardBasic/index.js?");

/***/ }),

/***/ "./src/example-components/FormsWizard/FormsWizardVertical/index.js":
/*!*************************************************************************!*\
  !*** ./src/example-components/FormsWizard/FormsWizardVertical/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Stepper */ \"./node_modules/@material-ui/core/esm/Stepper/index.js\");\n/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Step */ \"./node_modules/@material-ui/core/esm/Step/index.js\");\n/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/StepLabel */ \"./node_modules/@material-ui/core/esm/StepLabel/index.js\");\n/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/StepContent */ \"./node_modules/@material-ui/core/esm/StepContent/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(theme => ({\n  root: {\n    width: '100%'\n  },\n  button: {\n    marginTop: theme.spacing(1),\n    marginRight: theme.spacing(1)\n  },\n  actionsContainer: {\n    marginBottom: theme.spacing(2)\n  },\n  resetContainer: {\n    padding: theme.spacing(3)\n  }\n}));\n\nfunction getSteps() {\n  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];\n}\n\nfunction getStepContent(step) {\n  switch (step) {\n    case 0:\n      return 'For each ad campaign that you create, you can control how much\\n' + \"              you're willing to spend on clicks and conversions, which networks\\n\" + '              and geographical locations you want your ads to show on, and more.';\n\n    case 1:\n      return 'An ad group contains one or more ads which target a shared set of keywords.';\n\n    case 2:\n      return 'Try out different ad text to see what brings in the most customers\\n' + 'and learn how to enhance your ads using features like ad extensions.\\n' + 'If you run into any problems with your ads, find out how to tell if' + \"they're running and how to resolve approval issues.\";\n\n    default:\n      return 'Unknown step';\n  }\n}\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], null, \"All steps completed - you're finished\");\n\nvar LivePreviewExample = () => {\n  var classes = useStyles();\n  var [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);\n  var steps = getSteps();\n\n  var handleNext = () => {\n    setActiveStep(prevActiveStep => prevActiveStep + 1);\n  };\n\n  var handleBack = () => {\n    setActiveStep(prevActiveStep => prevActiveStep - 1);\n  };\n\n  var handleReset = () => {\n    setActiveStep(0);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    activeStep: activeStep,\n    orientation: \"vertical\"\n  }, steps.map((label, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    key: label\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], null, getStepContent(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.actionsContainer\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    disabled: activeStep === 0,\n    onClick: handleBack,\n    className: classes.button\n  }, \"Back\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    onClick: handleNext,\n    className: classes.button\n  }, activeStep === steps.length - 1 ? 'Finish' : 'Next'))))))), activeStep === steps.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Paper\"], {\n    square: true,\n    elevation: 0,\n    className: classes.resetContainer\n  }, _ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: handleReset,\n    className: classes.button\n  }, \"Reset\"))));\n};\n\n__signature__(LivePreviewExample, \"useStyles{classes}\\nuseState{[activeStep, setActiveStep](0)}\", () => [useStyles]);\n\n__signature__(LivePreviewExample, \"useStyles{classes}\\nuseState{[activeStep, setActiveStep](0)}\", () => [useStyles]);\n\nvar _default = LivePreviewExample;\nvar _default2 = _default;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default2);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(getSteps, \"getSteps\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(getStepContent, \"getStepContent\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(LivePreviewExample, \"LivePreviewExample\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(_default, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(__signature__, \"__signature__\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(useStyles, \"useStyles\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(getSteps, \"getSteps\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(getStepContent, \"getStepContent\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(_ref, \"_ref\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(LivePreviewExample, \"LivePreviewExample\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(_default, \"_default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n  reactHotLoader.register(_default2, \"default\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/example-components/FormsWizard/FormsWizardVertical/index.js?");

/***/ }),

/***/ "./src/example-pages/FormsWizard/index.js":
/*!************************************************!*\
  !*** ./src/example-pages/FormsWizard/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormsWizard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout-components */ \"./src/layout-components/index.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _example_components_FormsWizard_FormsWizardBasic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../example-components/FormsWizard/FormsWizardBasic */ \"./src/example-components/FormsWizard/FormsWizardBasic/index.js\");\n/* harmony import */ var _example_components_FormsWizard_FormsWizardVertical__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../example-components/FormsWizard/FormsWizardVertical */ \"./src/example-components/FormsWizard/FormsWizardVertical/index.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nvar _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_components__WEBPACK_IMPORTED_MODULE_1__[\"PageTitle\"], {\n  titleHeading: \"Wizard\",\n  titleDescription: \"Easily create beautiful form multi step wizards or presentation steps.\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n  container: true,\n  spacing: 4\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n  item: true,\n  xs: 12,\n  lg: 6\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_components__WEBPACK_IMPORTED_MODULE_1__[\"ExampleWrapperSimple\"], {\n  sectionHeading: \"Horizontal Stepper\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_example_components_FormsWizard_FormsWizardBasic__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n  item: true,\n  xs: 12,\n  lg: 6\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_components__WEBPACK_IMPORTED_MODULE_1__[\"ExampleWrapperSimple\"], {\n  sectionHeading: \"Vertical Stepper\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_example_components_FormsWizard_FormsWizardVertical__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))));\n\nfunction FormsWizard() {\n  return _ref;\n}\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(FormsWizard, \"FormsWizard\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-pages/FormsWizard/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(__signature__, \"__signature__\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-pages/FormsWizard/index.js\");\n  reactHotLoader.register(_ref, \"_ref\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-pages/FormsWizard/index.js\");\n  reactHotLoader.register(FormsWizard, \"FormsWizard\", \"/Volumes/Work/kjc/johnshub/johnshub/frontend/src/example-pages/FormsWizard/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/example-pages/FormsWizard/index.js?");

/***/ })

}]);