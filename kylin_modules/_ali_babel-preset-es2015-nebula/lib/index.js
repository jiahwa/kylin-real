"use strict";exports.__esModule=!0;var _babelPluginTransformEs2015TemplateLiterals=require("babel-plugin-transform-es2015-template-literals"),_babelPluginTransformEs2015TemplateLiterals2=_interopRequireDefault(_babelPluginTransformEs2015TemplateLiterals),_babelPluginTransformEs2015Literals=require("babel-plugin-transform-es2015-literals"),_babelPluginTransformEs2015Literals2=_interopRequireDefault(_babelPluginTransformEs2015Literals),_babelPluginTransformEs2015FunctionName=require("babel-plugin-transform-es2015-function-name"),_babelPluginTransformEs2015FunctionName2=_interopRequireDefault(_babelPluginTransformEs2015FunctionName),_babelPluginTransformEs2015ArrowFunctions=require("babel-plugin-transform-es2015-arrow-functions"),_babelPluginTransformEs2015ArrowFunctions2=_interopRequireDefault(_babelPluginTransformEs2015ArrowFunctions),_babelPluginTransformEs2015BlockScopedFunctions=require("babel-plugin-transform-es2015-block-scoped-functions"),_babelPluginTransformEs2015BlockScopedFunctions2=_interopRequireDefault(_babelPluginTransformEs2015BlockScopedFunctions),_babelPluginTransformEs2015Classes=require("babel-plugin-transform-es2015-classes"),_babelPluginTransformEs2015Classes2=_interopRequireDefault(_babelPluginTransformEs2015Classes),_babelPluginTransformEs2015ObjectSuper=require("babel-plugin-transform-es2015-object-super"),_babelPluginTransformEs2015ObjectSuper2=_interopRequireDefault(_babelPluginTransformEs2015ObjectSuper),_babelPluginTransformEs2015ShorthandProperties=require("babel-plugin-transform-es2015-shorthand-properties"),_babelPluginTransformEs2015ShorthandProperties2=_interopRequireDefault(_babelPluginTransformEs2015ShorthandProperties),_babelPluginTransformEs2015DuplicateKeys=require("babel-plugin-transform-es2015-duplicate-keys"),_babelPluginTransformEs2015DuplicateKeys2=_interopRequireDefault(_babelPluginTransformEs2015DuplicateKeys),_babelPluginTransformEs2015ComputedProperties=require("babel-plugin-transform-es2015-computed-properties"),_babelPluginTransformEs2015ComputedProperties2=_interopRequireDefault(_babelPluginTransformEs2015ComputedProperties),_babelPluginTransformEs2015ForOf=require("babel-plugin-transform-es2015-for-of"),_babelPluginTransformEs2015ForOf2=_interopRequireDefault(_babelPluginTransformEs2015ForOf),_babelPluginTransformEs2015StickyRegex=require("babel-plugin-transform-es2015-sticky-regex"),_babelPluginTransformEs2015StickyRegex2=_interopRequireDefault(_babelPluginTransformEs2015StickyRegex),_babelPluginTransformEs2015UnicodeRegex=require("babel-plugin-transform-es2015-unicode-regex"),_babelPluginTransformEs2015UnicodeRegex2=_interopRequireDefault(_babelPluginTransformEs2015UnicodeRegex),_babelPluginCheckEs2015Constants=require("babel-plugin-check-es2015-constants"),_babelPluginCheckEs2015Constants2=_interopRequireDefault(_babelPluginCheckEs2015Constants),_babelPluginTransformEs2015Spread=require("babel-plugin-transform-es2015-spread"),_babelPluginTransformEs2015Spread2=_interopRequireDefault(_babelPluginTransformEs2015Spread),_babelPluginTransformEs2015Parameters=require("babel-plugin-transform-es2015-parameters"),_babelPluginTransformEs2015Parameters2=_interopRequireDefault(_babelPluginTransformEs2015Parameters),_babelPluginTransformEs2015Destructuring=require("babel-plugin-transform-es2015-destructuring"),_babelPluginTransformEs2015Destructuring2=_interopRequireDefault(_babelPluginTransformEs2015Destructuring),_babelPluginTransformEs2015BlockScoping=require("babel-plugin-transform-es2015-block-scoping"),_babelPluginTransformEs2015BlockScoping2=_interopRequireDefault(_babelPluginTransformEs2015BlockScoping),_babelPluginTransformEs2015TypeofSymbol=require("babel-plugin-transform-es2015-typeof-symbol"),_babelPluginTransformEs2015TypeofSymbol2=_interopRequireDefault(_babelPluginTransformEs2015TypeofSymbol),_babelPluginTransformEs2015ModulesCommonjs=require("babel-plugin-transform-es2015-modules-commonjs"),_babelPluginTransformEs2015ModulesCommonjs2=_interopRequireDefault(_babelPluginTransformEs2015ModulesCommonjs),_babelPluginTransformEs2015ModulesSystemjs=require("babel-plugin-transform-es2015-modules-systemjs"),_babelPluginTransformEs2015ModulesSystemjs2=_interopRequireDefault(_babelPluginTransformEs2015ModulesSystemjs),_babelPluginTransformEs2015ModulesAmd=require("babel-plugin-transform-es2015-modules-amd"),_babelPluginTransformEs2015ModulesAmd2=_interopRequireDefault(_babelPluginTransformEs2015ModulesAmd),_babelPluginTransformEs2015ModulesUmd=require("babel-plugin-transform-es2015-modules-umd"),_babelPluginTransformEs2015ModulesUmd2=_interopRequireDefault(_babelPluginTransformEs2015ModulesUmd),_babelPluginTransformRegenerator=require("babel-plugin-transform-regenerator"),_babelPluginTransformRegenerator2=_interopRequireDefault(_babelPluginTransformRegenerator),_babelPluginTransformRuntimeNebula=require("@ali/babel-plugin-transform-runtime-nebula"),_babelPluginTransformRuntimeNebula2=_interopRequireDefault(_babelPluginTransformRuntimeNebula),_loose=require("./loose");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function preset(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=["common","ios8","u4"],s=void 0,a="commonjs",o=!1,n=!1,u=!1,i=!1,b="common",t=!1,m=!0,f=!1,g=!1;if(void 0!==r&&(void 0!==r.loose&&(s=r.loose),void 0!==r.modules&&(a=r.modules),void 0!==r.spec&&(o=r.spec),void 0!==r.enableForOfArray&&(n=r.enableForOfArray),void 0!==r.enableGenerator&&(u=r.enableGenerator),void 0!==r.enableTypeofSymbol&&(i=r.enableTypeofSymbol),void 0!==r.nebulaTarget&&(b=r.nebulaTarget),void 0!==r.preferExternalPromise&&(t=r.preferExternalPromise),void 0!==r.requeue&&(m=r.requeue),void 0!==r.ensureExitPromise&&(f=r.ensureExitPromise),void 0!==r.loosePolyfill&&(g=r.loosePolyfill)),s=(0,_loose.looseFormat)(s),"boolean"!=typeof o)throw new Error("Preset es2015 'spec' option must be a boolean.");if(!1!==a&&-1===["commonjs","amd","umd","systemjs"].indexOf(a))throw new Error("Preset es2015 'modules' option must be 'false' to indicate no modules\nor a module type which be be one of: 'commonjs' (default), 'amd', 'umd', 'systemjs'");if(-1===l.indexOf(b))throw new Error("Preset es2015-nebula 'nebulaTarget' option must be one of "+l.join(", ")+", but got '"+b+"' ");return{plugins:[[_babelPluginTransformEs2015TemplateLiterals2.default,{loose:s.TemplateLiterals,spec:o}],_babelPluginTransformEs2015Literals2.default,_babelPluginTransformEs2015FunctionName2.default,[_babelPluginTransformEs2015ArrowFunctions2.default,{spec:o}],_babelPluginTransformEs2015BlockScopedFunctions2.default,[_babelPluginTransformEs2015Classes2.default,{loose:s.Classes}],_babelPluginTransformEs2015ObjectSuper2.default,_babelPluginTransformEs2015ShorthandProperties2.default,_babelPluginTransformEs2015DuplicateKeys2.default,[_babelPluginTransformEs2015ComputedProperties2.default,{loose:s.ComputedProperties}],n&&[_babelPluginTransformEs2015ForOf2.default,{loose:s.ForOf}],_babelPluginTransformEs2015StickyRegex2.default,_babelPluginTransformEs2015UnicodeRegex2.default,_babelPluginCheckEs2015Constants2.default,[_babelPluginTransformEs2015Spread2.default,{loose:s.Spread}],_babelPluginTransformEs2015Parameters2.default,[_babelPluginTransformEs2015Destructuring2.default,{loose:s.Destructuring}],_babelPluginTransformEs2015BlockScoping2.default,i&&_babelPluginTransformEs2015TypeofSymbol2.default,[_babelPluginTransformRuntimeNebula2.default,{helpers:!1,polyfill:!0,regenerator:u,requeue:m,forOfArray:n,nebulaTarget:b,preferExternalPromise:t,ensureExitPromise:f,loosePolyfill:g}],"commonjs"===a&&[_babelPluginTransformEs2015ModulesCommonjs2.default,{loose:s.Modules}],"systemjs"===a&&[_babelPluginTransformEs2015ModulesSystemjs2.default,{loose:s.Modules}],"amd"===a&&[_babelPluginTransformEs2015ModulesAmd2.default,{loose:s.Modules}],"umd"===a&&[_babelPluginTransformEs2015ModulesUmd2.default,{loose:s.Modules}],u&&[_babelPluginTransformRegenerator2.default,{async:!1,asyncGenerators:!1}]].filter(Boolean)}}var oldConfig=preset({});exports.default=oldConfig,Object.defineProperty(oldConfig,"buildPreset",{configurable:!0,writable:!0,enumerable:!1,value:preset}),module.exports=exports.default;