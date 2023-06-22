"use strict";(self.webpackChunk_theresamclaird_atomic=self.webpackChunk_theresamclaird_atomic||[]).push([[358],{"./src/components/Image/Image.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AspectRatioImage:()=>AspectRatioImage,Default:()=>Default,ResponsiveImage:()=>ResponsiveImage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Image__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Image/Image.jsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Atoms/Image",component:_Image__WEBPACK_IMPORTED_MODULE_2__.Ee,argTypes:{sx:{table:{disable:!0}}}};function ImageTemplate(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_2__.Ee,_objectSpread({},args))}ImageTemplate.displayName="ImageTemplate";var Default=ImageTemplate.bind({});Default.args={alt:"Tōrō",src:"https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp"};var ResponsiveImage=ImageTemplate.bind({});ResponsiveImage.args=_objectSpread(_objectSpread({},Default.args),{},{sources:[{srcset:"https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.webp 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.webp 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.webp 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.webp 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.webp 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.webp 3600w"},{srcset:"https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-300.jpg 300w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-600.jpg 600w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-900.jpg 900w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-1200.jpg 1200w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-2400.jpg 2400w, https://mclairdfamily-images.s3.us-west-2.amazonaws.com/lantern-3600.jpg 3600w"}]});var AspectRatioImage=ImageTemplate.bind({});AspectRatioImage.args=_objectSpread(_objectSpread({},ResponsiveImage.args),{},{aspectRatio:1,sx:{objectFit:"cover",objectPosition:"20%"}});var __namedExportsOrder=["Default","ResponsiveImage","AspectRatioImage"]},"./src/components/Box/Box.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box});var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styled_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-system/dist/index.esm.js"),_styled_system_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@styled-system/css/dist/index.esm.js"),_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@styled-system/should-forward-prop/dist/index.esm.js"),Box=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.Z)("div",{shouldForwardProp:_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_2__.ZP})((function base(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_3__.ZP)(props.__css)(props.theme)}),(function variant(_ref){var theme=_ref.theme,variant=_ref.variant,_ref$tx=_ref.tx,tx=void 0===_ref$tx?"variants":_ref$tx;return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_3__.ZP)((0,_styled_system_css__WEBPACK_IMPORTED_MODULE_3__.U2)(theme,"".concat(tx,".").concat(variant),(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_3__.U2)(theme,variant)))(theme)}),(function sx(props){return(0,_styled_system_css__WEBPACK_IMPORTED_MODULE_3__.ZP)(props.sx)(props.theme)}),(function(props){return props.css}),(0,styled_system__WEBPACK_IMPORTED_MODULE_1__.qC)(styled_system__WEBPACK_IMPORTED_MODULE_1__.Dh,styled_system__WEBPACK_IMPORTED_MODULE_1__.$_));Box.displayName="Box"},"./src/components/Box/Flex.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Box.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["direction","wrap","justify","align","gap","children","sx"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Flex(_ref){var flexDirection=_ref.direction,flexWrap=_ref.wrap,justifyContent=_ref.justify,alignItems=_ref.align,gap=_ref.gap,children=_ref.children,sx=_ref.sx,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.x,_objectSpread(_objectSpread({sx:_objectSpread({display:"flex",flexDirection,flexWrap,justifyContent,alignItems,gap},sx)},props),{},{children}))}Flex.displayName="Flex",Flex.displayName="Flex",Flex.defaultProps={direction:"row",wrap:"nowrap",justify:"flex-start",align:"flex-start",gap:1,sx:{}},Flex.propTypes={direction:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,wrap:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,justify:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,align:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,gap:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().number]),sx:prop_types__WEBPACK_IMPORTED_MODULE_5___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,prop_types__WEBPACK_IMPORTED_MODULE_5___default().string]).isRequired},Flex.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{direction:{defaultValue:{value:"'row'",computed:!1},description:"",type:{name:"string"},required:!1},wrap:{defaultValue:{value:"'nowrap'",computed:!1},description:"",type:{name:"string"},required:!1},justify:{defaultValue:{value:"'flex-start'",computed:!1},description:"",type:{name:"string"},required:!1},align:{defaultValue:{value:"'flex-start'",computed:!1},description:"",type:{name:"string"},required:!1},gap:{defaultValue:{value:"1",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},sx:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"any"}},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!0}}}},"./src/components/Box/Grid.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Grid});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),prop_types__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/prop-types/index.js")),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Box.jsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["columns","rows","gap","children","sx"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Grid(_ref){var gridTemplateColumns=_ref.columns,gridTemplateRows=_ref.rows,gridGap=_ref.gap,children=_ref.children,sx=_ref.sx,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.x,_objectSpread(_objectSpread({sx:_objectSpread({display:"grid",gridTemplateColumns,gridTemplateRows,gridGap},sx)},props),{},{children}))}Grid.displayName="Grid",Grid.displayName="Grid",Grid.defaultProps={columns:"",rows:"",gap:0,sx:{}},Grid.propTypes={columns:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,rows:prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,gap:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().string,prop_types__WEBPACK_IMPORTED_MODULE_5___default().number]),sx:prop_types__WEBPACK_IMPORTED_MODULE_5___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),children:prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default().node,prop_types__WEBPACK_IMPORTED_MODULE_5___default().string]).isRequired},Grid.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{columns:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},rows:{defaultValue:{value:"''",computed:!1},description:"",type:{name:"string"},required:!1},gap:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},sx:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"any"}},required:!1},children:{description:"",type:{name:"union",value:[{name:"node"},{name:"string"}]},required:!0}}}},"./src/components/Box/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kC:()=>_Flex__WEBPACK_IMPORTED_MODULE_1__.k,rj:()=>_Grid__WEBPACK_IMPORTED_MODULE_2__.r,xu:()=>_Box__WEBPACK_IMPORTED_MODULE_0__.x});var _Box__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Box/Box.jsx"),_Flex__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Box/Flex.jsx"),_Grid__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/Grid.jsx")},"./src/components/Image/Image.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BZ:()=>ImageSourcePropType,Ee:()=>Image});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__),nanoid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/nanoid/index.browser.js"),_Box__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Box/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["alt","src","sources","aspectRatio","sx"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Image(_ref){var alt=_ref.alt,src=_ref.src,sources=_ref.sources,aspectRatio=_ref.aspectRatio,sx=_ref.sx,props=(0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded);return 0!==aspectRatio?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,{sx:{position:"relative",display:"block",overflow:"hidden",":before":{content:"''",display:"block",width:"100%",paddingBottom:"".concat(100/aspectRatio,"%")}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,{as:"picture",children:[sources.map((function(_ref2){var media=_ref2.media,srcset=_ref2.srcset;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,{as:"source",media,srcSet:srcset})},(0,nanoid__WEBPACK_IMPORTED_MODULE_5__.x0)())})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,_objectSpread({as:"img",alt,src,sx:_objectSpread({position:"absolute",top:0,left:0,width:"100%",height:"100%"},sx)},props))]})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,{as:"picture",children:[sources.map((function(_ref3){var media=_ref3.media,srcset=_ref3.srcset;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,{as:"source",media,srcSet:srcset},(0,nanoid__WEBPACK_IMPORTED_MODULE_5__.x0)())})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Box__WEBPACK_IMPORTED_MODULE_2__.xu,_objectSpread({as:"img",alt,src,sx:_objectSpread({width:"100%",height:"100%"},sx)},props))]})}Image.displayName="Image",Image.defaultProps={sources:[],aspectRatio:0,sx:{}};var ImageSourcePropType=prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({srcset:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string,media:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string});Image.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,src:prop_types__WEBPACK_IMPORTED_MODULE_6___default().string.isRequired,sources:prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf(ImageSourcePropType),aspectRatio:prop_types__WEBPACK_IMPORTED_MODULE_6___default().number,sx:prop_types__WEBPACK_IMPORTED_MODULE_6___default().objectOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default().any)},Image.__docgenInfo={description:"",methods:[],displayName:"Image",props:{sources:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"custom",raw:"ImageSourcePropType"}},required:!1},aspectRatio:{defaultValue:{value:"0",computed:!1},description:"",type:{name:"number"},required:!1},sx:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"objectOf",value:{name:"any"}},required:!1},alt:{description:"",type:{name:"string"},required:!0},src:{description:"",type:{name:"string"},required:!0}}}},"./node_modules/nanoid/index.browser.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x0:()=>nanoid});let nanoid=(size=21)=>crypto.getRandomValues(new Uint8Array(size)).reduce(((id,byte)=>id+=(byte&=63)<36?byte.toString(36):byte<62?(byte-26).toString(36).toUpperCase():byte>62?"-":"_"),"")}}]);