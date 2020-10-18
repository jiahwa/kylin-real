"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=kylinOptions;var _utils=require("../../utils"),_fs=require("fs"),_fs2=_interopRequireDefault(_fs),_chalk=require("chalk"),_chalk2=_interopRequireDefault(_chalk),_path=require("path"),_path2=_interopRequireDefault(_path);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function warnForPerformance(e){e.enableTypeofSymbol&&_utils.hint.warn("[Warn]","enableTypeofSymbol=true 会使用大量babel-pollify增大包体积并且降低运行性能"),e.enableForOfArray&&_utils.hint.warn("[Warn]","enableForOfArray=true 会使用大量babel-pollify增大包体积并且降低运行性能")}function kylinOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const a={customVueUrl:"",defaultLunaMockConfigPath:"./mock/mock.config.js",defaultWebpackConfigFactoryPath:"./webpack.config.kylin.js",defaultLangLib:"@ali/kylin-i18n",defaultLangConfigDir:"./src/lang/",enableTypescript:!1,enableGenerator:!1,enableForOfArray:!1,enableTypeofSymbol:!1,enableDecoratorInject:!0,enableComponentLazyRequire:!0,enableInjectComponentName:!0,enableDecorator:!0,enableRefresh:!1,enableTemplateNunjucks:!0,hoistFunctions:!0,enableES6LoosePolyfill:!0,compileComponent:!1,compileComponentStrict:!0,enableES6LooseTrue:{TemplateLiterals:!1,Classes:!0,ComputedProperties:!1,ForOf:!1,Spread:!0,Destructuring:!0,Modules:!1},enableGlobalResourceInject:!0,preferExternalPromise:!0,minChunks:void 0,enableChunkHashName:"test"!==process.env.NODE_ENV,htmlOutputName:"[entry].html",enableAsync:!0,preserveWhitespace:!0,componentImport:[{libraryName:"@alipay/antui-vue",style:!1,libraryDirectory:"lib",camel2DashComponentName:!0}]},r=Object.assign(a,e);warnForPerformance(r),r.enableTypescript&&_utils.hint.error("[Error]","[enableTypescript] is not supported now."),r.enableTemplateNunjucks=!!r.enableTemplateNunjucks,r.originalNebulaTarget=r.nebulaTarget,r.nebulaTarget=r.nebulaTarget||"common";const n=["common","u4","ios8","ios9"];return Array.isArray(r.nebulaTarget)?r.nebulaTargetArr=r.nebulaTarget:r.nebulaTargetArr=[r.nebulaTarget],r.nebulaTargetArr=r.nebulaTargetArr.filter(e=>n.indexOf(e)>-1),0===r.nebulaTargetArr.length&&(_utils.hint.error("[Error]",`any one in options.originalNebulaTarget ${JSON.stringify(r.originalNebulaTarget)} are invalid.`),(0,_utils.hint)("[Message]",`only accept ${JSON.stringify(n)}`)),"boolean"!=typeof r.enableGlobalResourceInject&&(r.enableGlobalResourceInject=r.enableGlobalResourceInject===process.env.NODE_ENV),r.enableGlobalResourceInject||_utils.hint.warn("[Warn]",`[GlobalResourceInject] is ${_chalk2.default.red("disabled")}`),r}module.exports=exports.default;