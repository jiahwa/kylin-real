"use strict";exports.__esModule=!0,exports.processProperty=processProperty;var _babelTypes=require("babel-types"),t=_interopRequireWildcard(_babelTypes),_babelTemplate=require("babel-template"),_babelTemplate2=_interopRequireDefault(_babelTemplate),_utils=require("../utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t]);return r.default=e,r}function processProperty(e,r){var t=void 0,l=(0,_utils.validPropertyDecoratorLength)(e.decorators,r);return l===e.decorators.length&&l>=1&&(t=(0,_utils.getObjectProperty)(e.key.name,e.value)),t}