"use strict";exports.__esModule=!0,exports.Component=Component,exports.ObjectFunc=ObjectFunc;var _component=require("./component.js"),_object=require("./object.js");function Component(o){return"function"==typeof o?(0,_component.ComponentDecoratorGenerator)()(o):(0,_component.ComponentDecoratorGenerator)(o)}function ObjectFunc(o){return"function"==typeof o?(0,_object.ComponentObjectModifier)()(o):(0,_object.ComponentObjectModifier)(o)}