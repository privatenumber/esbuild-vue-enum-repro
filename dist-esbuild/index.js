var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true})), module2);
};

// node_modules/@vue/shared/dist/shared.cjs.prod.js
var require_shared_cjs_prod = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
  var range = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  var attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  var propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
  var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    let ret = "";
    if (!styles) {
      return ret;
    }
    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  var escapeRE = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var toDisplayString = (val) => {
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var babelParserDefaultPlugins = [
    "bigInt",
    "optionalChaining",
    "nullishCoalescingOperator"
  ];
  var EMPTY_OBJ = {};
  var EMPTY_ARR = [];
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => val instanceof Date;
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  exports2.EMPTY_ARR = EMPTY_ARR;
  exports2.EMPTY_OBJ = EMPTY_OBJ;
  exports2.NO = NO;
  exports2.NOOP = NOOP;
  exports2.PatchFlagNames = PatchFlagNames;
  exports2.babelParserDefaultPlugins = babelParserDefaultPlugins;
  exports2.camelize = camelize;
  exports2.capitalize = capitalize;
  exports2.def = def;
  exports2.escapeHtml = escapeHtml;
  exports2.escapeHtmlComment = escapeHtmlComment;
  exports2.extend = extend;
  exports2.generateCodeFrame = generateCodeFrame;
  exports2.getGlobalThis = getGlobalThis;
  exports2.hasChanged = hasChanged;
  exports2.hasOwn = hasOwn;
  exports2.hyphenate = hyphenate;
  exports2.invokeArrayFns = invokeArrayFns;
  exports2.isArray = isArray;
  exports2.isBooleanAttr = isBooleanAttr;
  exports2.isDate = isDate;
  exports2.isFunction = isFunction;
  exports2.isGloballyWhitelisted = isGloballyWhitelisted;
  exports2.isHTMLTag = isHTMLTag;
  exports2.isIntegerKey = isIntegerKey;
  exports2.isKnownAttr = isKnownAttr;
  exports2.isMap = isMap;
  exports2.isModelListener = isModelListener;
  exports2.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
  exports2.isObject = isObject;
  exports2.isOn = isOn;
  exports2.isPlainObject = isPlainObject;
  exports2.isPromise = isPromise;
  exports2.isReservedProp = isReservedProp;
  exports2.isSSRSafeAttrName = isSSRSafeAttrName;
  exports2.isSVGTag = isSVGTag;
  exports2.isSet = isSet;
  exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
  exports2.isString = isString;
  exports2.isSymbol = isSymbol;
  exports2.isVoidTag = isVoidTag;
  exports2.looseEqual = looseEqual;
  exports2.looseIndexOf = looseIndexOf;
  exports2.makeMap = makeMap;
  exports2.normalizeClass = normalizeClass;
  exports2.normalizeStyle = normalizeStyle;
  exports2.objectToString = objectToString;
  exports2.parseStringStyle = parseStringStyle;
  exports2.propsToAttrMap = propsToAttrMap;
  exports2.remove = remove;
  exports2.slotFlagsText = slotFlagsText;
  exports2.stringifyStyle = stringifyStyle;
  exports2.toDisplayString = toDisplayString;
  exports2.toHandlerKey = toHandlerKey;
  exports2.toNumber = toNumber;
  exports2.toRawType = toRawType;
  exports2.toTypeString = toTypeString;
});

// node_modules/@vue/shared/dist/shared.cjs.js
var require_shared_cjs = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
  var range = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  var attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  var propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
  var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    let ret = "";
    if (!styles) {
      return ret;
    }
    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  var escapeRE = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var toDisplayString = (val) => {
    return val == null ? "" : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var babelParserDefaultPlugins = [
    "bigInt",
    "optionalChaining",
    "nullishCoalescingOperator"
  ];
  var EMPTY_OBJ = Object.freeze({});
  var EMPTY_ARR = Object.freeze([]);
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => val instanceof Date;
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  exports2.EMPTY_ARR = EMPTY_ARR;
  exports2.EMPTY_OBJ = EMPTY_OBJ;
  exports2.NO = NO;
  exports2.NOOP = NOOP;
  exports2.PatchFlagNames = PatchFlagNames;
  exports2.babelParserDefaultPlugins = babelParserDefaultPlugins;
  exports2.camelize = camelize;
  exports2.capitalize = capitalize;
  exports2.def = def;
  exports2.escapeHtml = escapeHtml;
  exports2.escapeHtmlComment = escapeHtmlComment;
  exports2.extend = extend;
  exports2.generateCodeFrame = generateCodeFrame;
  exports2.getGlobalThis = getGlobalThis;
  exports2.hasChanged = hasChanged;
  exports2.hasOwn = hasOwn;
  exports2.hyphenate = hyphenate;
  exports2.invokeArrayFns = invokeArrayFns;
  exports2.isArray = isArray;
  exports2.isBooleanAttr = isBooleanAttr;
  exports2.isDate = isDate;
  exports2.isFunction = isFunction;
  exports2.isGloballyWhitelisted = isGloballyWhitelisted;
  exports2.isHTMLTag = isHTMLTag;
  exports2.isIntegerKey = isIntegerKey;
  exports2.isKnownAttr = isKnownAttr;
  exports2.isMap = isMap;
  exports2.isModelListener = isModelListener;
  exports2.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
  exports2.isObject = isObject;
  exports2.isOn = isOn;
  exports2.isPlainObject = isPlainObject;
  exports2.isPromise = isPromise;
  exports2.isReservedProp = isReservedProp;
  exports2.isSSRSafeAttrName = isSSRSafeAttrName;
  exports2.isSVGTag = isSVGTag;
  exports2.isSet = isSet;
  exports2.isSpecialBooleanAttr = isSpecialBooleanAttr;
  exports2.isString = isString;
  exports2.isSymbol = isSymbol;
  exports2.isVoidTag = isVoidTag;
  exports2.looseEqual = looseEqual;
  exports2.looseIndexOf = looseIndexOf;
  exports2.makeMap = makeMap;
  exports2.normalizeClass = normalizeClass;
  exports2.normalizeStyle = normalizeStyle;
  exports2.objectToString = objectToString;
  exports2.parseStringStyle = parseStringStyle;
  exports2.propsToAttrMap = propsToAttrMap;
  exports2.remove = remove;
  exports2.slotFlagsText = slotFlagsText;
  exports2.stringifyStyle = stringifyStyle;
  exports2.toDisplayString = toDisplayString;
  exports2.toHandlerKey = toHandlerKey;
  exports2.toNumber = toNumber;
  exports2.toRawType = toRawType;
  exports2.toTypeString = toTypeString;
});

// node_modules/@vue/shared/index.js
var require_shared = __commonJS((exports2, module2) => {
  "use strict";
  if (process.env.NODE_ENV === "production") {
    module2.exports = require_shared_cjs_prod();
  } else {
    module2.exports = require_shared_cjs();
  }
});

// node_modules/source-map/lib/base64.js
var require_base64 = __commonJS((exports2) => {
  var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  exports2.encode = function(number) {
    if (0 <= number && number < intToCharMap.length) {
      return intToCharMap[number];
    }
    throw new TypeError("Must be between 0 and 63: " + number);
  };
  exports2.decode = function(charCode) {
    var bigA = 65;
    var bigZ = 90;
    var littleA = 97;
    var littleZ = 122;
    var zero = 48;
    var nine = 57;
    var plus = 43;
    var slash = 47;
    var littleOffset = 26;
    var numberOffset = 52;
    if (bigA <= charCode && charCode <= bigZ) {
      return charCode - bigA;
    }
    if (littleA <= charCode && charCode <= littleZ) {
      return charCode - littleA + littleOffset;
    }
    if (zero <= charCode && charCode <= nine) {
      return charCode - zero + numberOffset;
    }
    if (charCode == plus) {
      return 62;
    }
    if (charCode == slash) {
      return 63;
    }
    return -1;
  };
});

// node_modules/source-map/lib/base64-vlq.js
var require_base64_vlq = __commonJS((exports2) => {
  var base64 = require_base64();
  var VLQ_BASE_SHIFT = 5;
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
  var VLQ_BASE_MASK = VLQ_BASE - 1;
  var VLQ_CONTINUATION_BIT = VLQ_BASE;
  function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
  }
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
  }
  exports2.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base64.encode(digit);
    } while (vlq > 0);
    return encoded;
  };
  exports2.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
      if (aIndex >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }
      digit = base64.decode(aStr.charCodeAt(aIndex++));
      if (digit === -1) {
        throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
      }
      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
  };
});

// node_modules/source-map/lib/util.js
var require_util = __commonJS((exports2) => {
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports2.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;
  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports2.urlParse = urlParse;
  function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ":";
    }
    url += "//";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@";
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports2.urlGenerate = urlGenerate;
  function normalize(aPath) {
    var path = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path = url.path;
    }
    var isAbsolute = exports2.isAbsolute(path);
    var parts = path.split(/\/+/);
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === ".") {
        parts.splice(i, 1);
      } else if (part === "..") {
        up++;
      } else if (up > 0) {
        if (part === "") {
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path = parts.join("/");
    if (path === "") {
      path = isAbsolute ? "/" : ".";
    }
    if (url) {
      url.path = path;
      return urlGenerate(url);
    }
    return path;
  }
  exports2.normalize = normalize;
  function join(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || "/";
    }
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports2.join = join;
  exports2.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
  };
  function relative(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, "");
    var level = 0;
    while (aPath.indexOf(aRoot + "/") !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }
      ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports2.relative = relative;
  var supportsNullProto = function() {
    var obj = Object.create(null);
    return !("__proto__" in obj);
  }();
  function identity(s) {
    return s;
  }
  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return "$" + aStr;
    }
    return aStr;
  }
  exports2.toSetString = supportsNullProto ? identity : toSetString;
  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }
    return aStr;
  }
  exports2.fromSetString = supportsNullProto ? identity : fromSetString;
  function isProtoString(s) {
    if (!s) {
      return false;
    }
    var length = s.length;
    if (length < 9) {
      return false;
    }
    if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
      return false;
    }
    for (var i = length - 10; i >= 0; i--) {
      if (s.charCodeAt(i) !== 36) {
        return false;
      }
    }
    return true;
  }
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports2.compareByOriginalPositions = compareByOriginalPositions;
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports2.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }
    if (aStr1 === null) {
      return 1;
    }
    if (aStr2 === null) {
      return -1;
    }
    if (aStr1 > aStr2) {
      return 1;
    }
    return -1;
  }
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports2.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
  function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
  }
  exports2.parseSourceMapInput = parseSourceMapInput;
  function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
      if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
        sourceRoot += "/";
      }
      sourceURL = sourceRoot + sourceURL;
    }
    if (sourceMapURL) {
      var parsed = urlParse(sourceMapURL);
      if (!parsed) {
        throw new Error("sourceMapURL could not be parsed");
      }
      if (parsed.path) {
        var index = parsed.path.lastIndexOf("/");
        if (index >= 0) {
          parsed.path = parsed.path.substring(0, index + 1);
        }
      }
      sourceURL = join(urlGenerate(parsed), sourceURL);
    }
    return normalize(sourceURL);
  }
  exports2.computeSourceURL = computeSourceURL;
});

// node_modules/source-map/lib/array-set.js
var require_array_set = __commonJS((exports2) => {
  var util = require_util();
  var has = Object.prototype.hasOwnProperty;
  var hasNativeMap = typeof Map !== "undefined";
  function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? new Map() : Object.create(null);
  }
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };
  ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      if (hasNativeMap) {
        this._set.set(aStr, idx);
      } else {
        this._set[sStr] = idx;
      }
    }
  };
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) {
      return this._set.has(aStr);
    } else {
      var sStr = util.toSetString(aStr);
      return has.call(this._set, sStr);
    }
  };
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
      var idx = this._set.get(aStr);
      if (idx >= 0) {
        return idx;
      }
    } else {
      var sStr = util.toSetString(aStr);
      if (has.call(this._set, sStr)) {
        return this._set[sStr];
      }
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error("No element indexed by " + aIdx);
  };
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };
  exports2.ArraySet = ArraySet;
});

// node_modules/source-map/lib/mapping-list.js
var require_mapping_list = __commonJS((exports2) => {
  var util = require_util();
  function generatedPositionAfter(mappingA, mappingB) {
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
  }
  function MappingList() {
    this._array = [];
    this._sorted = true;
    this._last = {generatedLine: -1, generatedColumn: 0};
  }
  MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };
  MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
      this._last = aMapping;
      this._array.push(aMapping);
    } else {
      this._sorted = false;
      this._array.push(aMapping);
    }
  };
  MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
      this._array.sort(util.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };
  exports2.MappingList = MappingList;
});

// node_modules/source-map/lib/source-map-generator.js
var require_source_map_generator = __commonJS((exports2) => {
  var base64VLQ = require_base64_vlq();
  var util = require_util();
  var ArraySet = require_array_set().ArraySet;
  var MappingList = require_mapping_list().MappingList;
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util.getArg(aArgs, "file", null);
    this._sourceRoot = util.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
  }
  SourceMapGenerator.prototype._version = 3;
  SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };
      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }
        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };
        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }
      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }
      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };
  SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, "generated");
    var original = util.getArg(aArgs, "original", null);
    var source = util.getArg(aArgs, "source", null);
    var name = util.getArg(aArgs, "name", null);
    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }
    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }
    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }
    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source,
      name
    });
  };
  SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }
    if (aSourceContent != null) {
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };
  SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    this._mappings.unsortedForEach(function(mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source);
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }
      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }
      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }
    }, this);
    this._sources = newSources;
    this._names = newNames;
    aSourceMapConsumer.sources.forEach(function(sourceFile2) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile2 = util.join(aSourceMapPath, sourceFile2);
        }
        if (sourceRoot != null) {
          sourceFile2 = util.relative(sourceRoot, sourceFile2);
        }
        this.setSourceContent(sourceFile2, content);
      }
    }, this);
  };
  SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
      throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    }
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
      return;
    } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
      return;
    } else {
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };
  SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = "";
      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ";";
          previousGeneratedLine++;
        }
      } else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ",";
        }
      }
      next += base64VLQ.encode(mapping.generatedColumn - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;
      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;
        next += base64VLQ.encode(mapping.originalLine - 1 - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;
        next += base64VLQ.encode(mapping.originalColumn - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;
        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }
      result += next;
    }
    return result;
  };
  SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
  };
  SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }
    return map;
  };
  SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };
  exports2.SourceMapGenerator = SourceMapGenerator;
});

// node_modules/source-map/lib/binary-search.js
var require_binary_search = __commonJS((exports2) => {
  exports2.GREATEST_LOWER_BOUND = 1;
  exports2.LEAST_UPPER_BOUND = 2;
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      return mid;
    } else if (cmp > 0) {
      if (aHigh - mid > 1) {
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports2.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      if (mid - aLow > 1) {
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports2.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  exports2.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }
    var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack, aCompare, aBias || exports2.GREATEST_LOWER_BOUND);
    if (index < 0) {
      return -1;
    }
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }
    return index;
  };
});

// node_modules/source-map/lib/quick-sort.js
var require_quick_sort = __commonJS((exports2) => {
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }
  function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
  }
  function doQuickSort(ary, comparator, p, r) {
    if (p < r) {
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;
      swap(ary, pivotIndex, r);
      var pivot = ary[r];
      for (var j = p; j < r; j++) {
        if (comparator(ary[j], pivot) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }
      swap(ary, i + 1, j);
      var q = i + 1;
      doQuickSort(ary, comparator, p, q - 1);
      doQuickSort(ary, comparator, q + 1, r);
    }
  }
  exports2.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
  };
});

// node_modules/source-map/lib/source-map-consumer.js
var require_source_map_consumer = __commonJS((exports2) => {
  var util = require_util();
  var binarySearch = require_binary_search();
  var ArraySet = require_array_set().ArraySet;
  var base64VLQ = require_base64_vlq();
  var quickSort = require_quick_sort().quickSort;
  function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
  }
  SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
  };
  SourceMapConsumer.prototype._version = 3;
  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__generatedMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__generatedMappings;
    }
  });
  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__originalMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__originalMappings;
    }
  });
  SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };
  SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;
  SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
  SourceMapConsumer.LEAST_UPPER_BOUND = 2;
  SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };
  SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, "line");
    var needle = {
      source: util.getArg(aArgs, "source"),
      originalLine: line,
      originalColumn: util.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }
    var mappings = [];
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];
      if (aArgs.column === void 0) {
        var originalLine = mapping.originalLine;
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          });
          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;
        while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, "generatedLine", null),
            column: util.getArg(mapping, "generatedColumn", null),
            lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
          });
          mapping = this._originalMappings[++index];
        }
      }
    }
    return mappings;
  };
  exports2.SourceMapConsumer = SourceMapConsumer;
  function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    var version = util.getArg(sourceMap, "version");
    var sources = util.getArg(sourceMap, "sources");
    var names = util.getArg(sourceMap, "names", []);
    var sourceRoot = util.getArg(sourceMap, "sourceRoot", null);
    var sourcesContent = util.getArg(sourceMap, "sourcesContent", null);
    var mappings = util.getArg(sourceMap, "mappings");
    var file = util.getArg(sourceMap, "file", null);
    if (version != this._version) {
      throw new Error("Unsupported version: " + version);
    }
    if (sourceRoot) {
      sourceRoot = util.normalize(sourceRoot);
    }
    sources = sources.map(String).map(util.normalize).map(function(source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source) ? util.relative(sourceRoot, source) : source;
    });
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
      return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
  }
  BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
  BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }
    if (this._sources.has(relativeSource)) {
      return this._sources.indexOf(relativeSource);
    }
    var i;
    for (i = 0; i < this._absoluteSources.length; ++i) {
      if (this._absoluteSources[i] == aSource) {
        return i;
      }
    }
    return -1;
  };
  BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(), smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping();
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;
      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;
        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }
        destOriginalMappings.push(destMapping);
      }
      destGeneratedMappings.push(destMapping);
    }
    quickSort(smc.__originalMappings, util.compareByOriginalPositions);
    return smc;
  };
  BasicSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
  }
  BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;
    while (index < length) {
      if (aStr.charAt(index) === ";") {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      } else if (aStr.charAt(index) === ",") {
        index++;
      } else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);
        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }
          if (segment.length === 2) {
            throw new Error("Found a source, but no line and column");
          }
          if (segment.length === 3) {
            throw new Error("Found a source and line, but no column");
          }
          cachedSegments[str] = segment;
        }
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;
        if (segment.length > 1) {
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          mapping.originalLine += 1;
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;
          if (segment.length > 4) {
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }
        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === "number") {
          originalMappings.push(mapping);
        }
      }
    }
    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };
  BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    if (aNeedle[aLineName] <= 0) {
      throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    }
    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };
  BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];
        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }
      mapping.lastGeneratedColumn = Infinity;
    }
  };
  BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, "line"),
      generatedColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._generatedMappings, "generatedLine", "generatedColumn", util.compareByGeneratedPositionsDeflated, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
      var mapping = this._generatedMappings[index];
      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, "source", null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, "name", null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source,
          line: util.getArg(mapping, "originalLine", null),
          column: util.getArg(mapping, "originalColumn", null),
          name
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };
  BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
      return sc == null;
    });
  };
  BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }
    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }
    var url;
    if (this.sourceRoot != null && (url = util.urlParse(this.sourceRoot))) {
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
      }
      if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };
  BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    var needle = {
      source,
      originalLine: util.getArg(aArgs, "line"),
      originalColumn: util.getArg(aArgs, "column")
    };
    var index = this._findMapping(needle, this._originalMappings, "originalLine", "originalColumn", util.compareByOriginalPositions, util.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND));
    if (index >= 0) {
      var mapping = this._originalMappings[index];
      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, "generatedLine", null),
          column: util.getArg(mapping, "generatedColumn", null),
          lastColumn: util.getArg(mapping, "lastGeneratedColumn", null)
        };
      }
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };
  exports2.BasicSourceMapConsumer = BasicSourceMapConsumer;
  function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap = util.parseSourceMapInput(aSourceMap);
    }
    var version = util.getArg(sourceMap, "version");
    var sections = util.getArg(sourceMap, "sections");
    if (version != this._version) {
      throw new Error("Unsupported version: " + version);
    }
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
      line: -1,
      column: 0
    };
    this._sections = sections.map(function(s) {
      if (s.url) {
        throw new Error("Support for url field in sections not implemented.");
      }
      var offset = util.getArg(s, "offset");
      var offsetLine = util.getArg(offset, "line");
      var offsetColumn = util.getArg(offset, "column");
      if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
        throw new Error("Section offsets must be ordered and non-overlapping.");
      }
      lastOffset = offset;
      return {
        generatedOffset: {
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: new SourceMapConsumer(util.getArg(s, "map"), aSourceMapURL)
      };
    });
  }
  IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
  IndexedSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
      var sources = [];
      for (var i = 0; i < this._sections.length; i++) {
        for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
          sources.push(this._sections[i].consumer.sources[j]);
        }
      }
      return sources;
    }
  });
  IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, "line"),
      generatedColumn: util.getArg(aArgs, "column")
    };
    var sectionIndex = binarySearch.search(needle, this._sections, function(needle2, section2) {
      var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
      if (cmp) {
        return cmp;
      }
      return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
    });
    var section = this._sections[sectionIndex];
    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }
    return section.consumer.originalPositionFor({
      line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
      bias: aArgs.bias
    });
  };
  IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };
  IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };
  IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      if (section.consumer._findSourceIndex(util.getArg(aArgs, "source")) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
        };
        return ret;
      }
    }
    return {
      line: null,
      column: null
    };
  };
  IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];
        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);
        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }
        var adjustedMapping = {
          source,
          generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name
        };
        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === "number") {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }
    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };
  exports2.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
});

// node_modules/source-map/lib/source-node.js
var require_source_node = __commonJS((exports2) => {
  var SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
  var util = require_util();
  var REGEX_NEWLINE = /(\r?\n)/;
  var NEWLINE_CODE = 10;
  var isSourceNode = "$$$isSourceNode$$$";
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null)
      this.add(aChunks);
  }
  SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    var node = new SourceNode();
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      var newLine = getNextLine() || "";
      return lineContents + newLine;
      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
      }
    };
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping) {
      if (lastMapping !== null) {
        if (lastGeneratedLine < mapping.generatedLine) {
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
        } else {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          lastMapping = mapping;
          return;
        }
      }
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });
    return node;
    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === void 0) {
        node.add(code);
      } else {
        var source = aRelativePath ? util.join(aRelativePath, mapping.source) : mapping.source;
        node.add(new SourceNode(mapping.originalLine, mapping.originalColumn, source, code, mapping.name));
      }
    }
  };
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function(chunk) {
        this.add(chunk);
      }, this);
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    } else {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    }
    return this;
  };
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length - 1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    } else {
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk);
    }
    return this;
  };
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk[isSourceNode]) {
        chunk.walk(aFn);
      } else {
        if (chunk !== "") {
          aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
          });
        }
      }
    }
  };
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len - 1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
      lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === "string") {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
      this.children.push("".replace(aPattern, aReplacement));
    }
    return this;
  };
  SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };
  SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }
    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
      str += chunk;
    });
    return str;
  };
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
      generated.code += chunk;
      if (original.source !== null && original.line !== null && original.column !== null) {
        if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      for (var idx = 0, length = chunk.length; idx < length; idx++) {
        if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
          generated.line++;
          generated.column = 0;
          if (idx + 1 === length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      }
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });
    return {code: generated.code, map};
  };
  exports2.SourceNode = SourceNode;
});

// node_modules/source-map/source-map.js
var require_source_map = __commonJS((exports2) => {
  exports2.SourceMapGenerator = require_source_map_generator().SourceMapGenerator;
  exports2.SourceMapConsumer = require_source_map_consumer().SourceMapConsumer;
  exports2.SourceNode = require_source_node().SourceNode;
});

// node_modules/@babel/parser/lib/index.js
var require_lib = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var beforeExpr = true;
  var startsExpr = true;
  var isLoop = true;
  var isAssign = true;
  var prefix = true;
  var postfix = true;
  var TokenType = class {
    constructor(label, conf = {}) {
      this.label = void 0;
      this.keyword = void 0;
      this.beforeExpr = void 0;
      this.startsExpr = void 0;
      this.rightAssociative = void 0;
      this.isLoop = void 0;
      this.isAssign = void 0;
      this.prefix = void 0;
      this.postfix = void 0;
      this.binop = void 0;
      this.updateContext = void 0;
      this.label = label;
      this.keyword = conf.keyword;
      this.beforeExpr = !!conf.beforeExpr;
      this.startsExpr = !!conf.startsExpr;
      this.rightAssociative = !!conf.rightAssociative;
      this.isLoop = !!conf.isLoop;
      this.isAssign = !!conf.isAssign;
      this.prefix = !!conf.prefix;
      this.postfix = !!conf.postfix;
      this.binop = conf.binop != null ? conf.binop : null;
      this.updateContext = null;
    }
  };
  var keywords = new Map();
  function createKeyword(name, options = {}) {
    options.keyword = name;
    const token = new TokenType(name, options);
    keywords.set(name, token);
    return token;
  }
  function createBinop(name, binop) {
    return new TokenType(name, {
      beforeExpr,
      binop
    });
  }
  var types = {
    num: new TokenType("num", {
      startsExpr
    }),
    bigint: new TokenType("bigint", {
      startsExpr
    }),
    decimal: new TokenType("decimal", {
      startsExpr
    }),
    regexp: new TokenType("regexp", {
      startsExpr
    }),
    string: new TokenType("string", {
      startsExpr
    }),
    name: new TokenType("name", {
      startsExpr
    }),
    eof: new TokenType("eof"),
    bracketL: new TokenType("[", {
      beforeExpr,
      startsExpr
    }),
    bracketHashL: new TokenType("#[", {
      beforeExpr,
      startsExpr
    }),
    bracketBarL: new TokenType("[|", {
      beforeExpr,
      startsExpr
    }),
    bracketR: new TokenType("]"),
    bracketBarR: new TokenType("|]"),
    braceL: new TokenType("{", {
      beforeExpr,
      startsExpr
    }),
    braceBarL: new TokenType("{|", {
      beforeExpr,
      startsExpr
    }),
    braceHashL: new TokenType("#{", {
      beforeExpr,
      startsExpr
    }),
    braceR: new TokenType("}"),
    braceBarR: new TokenType("|}"),
    parenL: new TokenType("(", {
      beforeExpr,
      startsExpr
    }),
    parenR: new TokenType(")"),
    comma: new TokenType(",", {
      beforeExpr
    }),
    semi: new TokenType(";", {
      beforeExpr
    }),
    colon: new TokenType(":", {
      beforeExpr
    }),
    doubleColon: new TokenType("::", {
      beforeExpr
    }),
    dot: new TokenType("."),
    question: new TokenType("?", {
      beforeExpr
    }),
    questionDot: new TokenType("?."),
    arrow: new TokenType("=>", {
      beforeExpr
    }),
    template: new TokenType("template"),
    ellipsis: new TokenType("...", {
      beforeExpr
    }),
    backQuote: new TokenType("`", {
      startsExpr
    }),
    dollarBraceL: new TokenType("${", {
      beforeExpr,
      startsExpr
    }),
    at: new TokenType("@"),
    hash: new TokenType("#", {
      startsExpr
    }),
    interpreterDirective: new TokenType("#!..."),
    eq: new TokenType("=", {
      beforeExpr,
      isAssign
    }),
    assign: new TokenType("_=", {
      beforeExpr,
      isAssign
    }),
    incDec: new TokenType("++/--", {
      prefix,
      postfix,
      startsExpr
    }),
    bang: new TokenType("!", {
      beforeExpr,
      prefix,
      startsExpr
    }),
    tilde: new TokenType("~", {
      beforeExpr,
      prefix,
      startsExpr
    }),
    pipeline: createBinop("|>", 0),
    nullishCoalescing: createBinop("??", 1),
    logicalOR: createBinop("||", 1),
    logicalAND: createBinop("&&", 2),
    bitwiseOR: createBinop("|", 3),
    bitwiseXOR: createBinop("^", 4),
    bitwiseAND: createBinop("&", 5),
    equality: createBinop("==/!=/===/!==", 6),
    relational: createBinop("</>/<=/>=", 7),
    bitShift: createBinop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", {
      beforeExpr,
      binop: 9,
      prefix,
      startsExpr
    }),
    modulo: new TokenType("%", {
      beforeExpr,
      binop: 10,
      startsExpr
    }),
    star: new TokenType("*", {
      binop: 10
    }),
    slash: createBinop("/", 10),
    exponent: new TokenType("**", {
      beforeExpr,
      binop: 11,
      rightAssociative: true
    }),
    _break: createKeyword("break"),
    _case: createKeyword("case", {
      beforeExpr
    }),
    _catch: createKeyword("catch"),
    _continue: createKeyword("continue"),
    _debugger: createKeyword("debugger"),
    _default: createKeyword("default", {
      beforeExpr
    }),
    _do: createKeyword("do", {
      isLoop,
      beforeExpr
    }),
    _else: createKeyword("else", {
      beforeExpr
    }),
    _finally: createKeyword("finally"),
    _for: createKeyword("for", {
      isLoop
    }),
    _function: createKeyword("function", {
      startsExpr
    }),
    _if: createKeyword("if"),
    _return: createKeyword("return", {
      beforeExpr
    }),
    _switch: createKeyword("switch"),
    _throw: createKeyword("throw", {
      beforeExpr,
      prefix,
      startsExpr
    }),
    _try: createKeyword("try"),
    _var: createKeyword("var"),
    _const: createKeyword("const"),
    _while: createKeyword("while", {
      isLoop
    }),
    _with: createKeyword("with"),
    _new: createKeyword("new", {
      beforeExpr,
      startsExpr
    }),
    _this: createKeyword("this", {
      startsExpr
    }),
    _super: createKeyword("super", {
      startsExpr
    }),
    _class: createKeyword("class", {
      startsExpr
    }),
    _extends: createKeyword("extends", {
      beforeExpr
    }),
    _export: createKeyword("export"),
    _import: createKeyword("import", {
      startsExpr
    }),
    _null: createKeyword("null", {
      startsExpr
    }),
    _true: createKeyword("true", {
      startsExpr
    }),
    _false: createKeyword("false", {
      startsExpr
    }),
    _in: createKeyword("in", {
      beforeExpr,
      binop: 7
    }),
    _instanceof: createKeyword("instanceof", {
      beforeExpr,
      binop: 7
    }),
    _typeof: createKeyword("typeof", {
      beforeExpr,
      prefix,
      startsExpr
    }),
    _void: createKeyword("void", {
      beforeExpr,
      prefix,
      startsExpr
    }),
    _delete: createKeyword("delete", {
      beforeExpr,
      prefix,
      startsExpr
    })
  };
  var lineBreak = /\r\n?|[\n\u2028\u2029]/;
  var lineBreakG = new RegExp(lineBreak.source, "g");
  function isNewLine(code) {
    switch (code) {
      case 10:
      case 13:
      case 8232:
      case 8233:
        return true;
      default:
        return false;
    }
  }
  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
  function isWhitespace(code) {
    switch (code) {
      case 9:
      case 11:
      case 12:
      case 32:
      case 160:
      case 5760:
      case 8192:
      case 8193:
      case 8194:
      case 8195:
      case 8196:
      case 8197:
      case 8198:
      case 8199:
      case 8200:
      case 8201:
      case 8202:
      case 8239:
      case 8287:
      case 12288:
      case 65279:
        return true;
      default:
        return false;
    }
  }
  var Position = class {
    constructor(line, col) {
      this.line = void 0;
      this.column = void 0;
      this.line = line;
      this.column = col;
    }
  };
  var SourceLocation = class {
    constructor(start, end) {
      this.start = void 0;
      this.end = void 0;
      this.filename = void 0;
      this.identifierName = void 0;
      this.start = start;
      this.end = end;
    }
  };
  function getLineInfo(input, offset) {
    let line = 1;
    let lineStart = 0;
    let match;
    lineBreakG.lastIndex = 0;
    while ((match = lineBreakG.exec(input)) && match.index < offset) {
      line++;
      lineStart = lineBreakG.lastIndex;
    }
    return new Position(line, offset - lineStart);
  }
  var BaseParser = class {
    constructor() {
      this.sawUnambiguousESM = false;
      this.ambiguousScriptDifferentAst = false;
    }
    hasPlugin(name) {
      return this.plugins.has(name);
    }
    getPluginOption(plugin, name) {
      if (this.hasPlugin(plugin))
        return this.plugins.get(plugin)[name];
    }
  };
  function last(stack) {
    return stack[stack.length - 1];
  }
  var CommentsParser = class extends BaseParser {
    addComment(comment) {
      if (this.filename)
        comment.loc.filename = this.filename;
      this.state.trailingComments.push(comment);
      this.state.leadingComments.push(comment);
    }
    adjustCommentsAfterTrailingComma(node, elements, takeAllComments) {
      if (this.state.leadingComments.length === 0) {
        return;
      }
      let lastElement = null;
      let i = elements.length;
      while (lastElement === null && i > 0) {
        lastElement = elements[--i];
      }
      if (lastElement === null) {
        return;
      }
      for (let j = 0; j < this.state.leadingComments.length; j++) {
        if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
          this.state.leadingComments.splice(j, 1);
          j--;
        }
      }
      const newTrailingComments = [];
      for (let i2 = 0; i2 < this.state.leadingComments.length; i2++) {
        const leadingComment = this.state.leadingComments[i2];
        if (leadingComment.end < node.end) {
          newTrailingComments.push(leadingComment);
          if (!takeAllComments) {
            this.state.leadingComments.splice(i2, 1);
            i2--;
          }
        } else {
          if (node.trailingComments === void 0) {
            node.trailingComments = [];
          }
          node.trailingComments.push(leadingComment);
        }
      }
      if (takeAllComments)
        this.state.leadingComments = [];
      if (newTrailingComments.length > 0) {
        lastElement.trailingComments = newTrailingComments;
      } else if (lastElement.trailingComments !== void 0) {
        lastElement.trailingComments = [];
      }
    }
    processComment(node) {
      if (node.type === "Program" && node.body.length > 0)
        return;
      const stack = this.state.commentStack;
      let firstChild, lastChild, trailingComments, i, j;
      if (this.state.trailingComments.length > 0) {
        if (this.state.trailingComments[0].start >= node.end) {
          trailingComments = this.state.trailingComments;
          this.state.trailingComments = [];
        } else {
          this.state.trailingComments.length = 0;
        }
      } else if (stack.length > 0) {
        const lastInStack = last(stack);
        if (lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
          trailingComments = lastInStack.trailingComments;
          delete lastInStack.trailingComments;
        }
      }
      if (stack.length > 0 && last(stack).start >= node.start) {
        firstChild = stack.pop();
      }
      while (stack.length > 0 && last(stack).start >= node.start) {
        lastChild = stack.pop();
      }
      if (!lastChild && firstChild)
        lastChild = firstChild;
      if (firstChild) {
        switch (node.type) {
          case "ObjectExpression":
            this.adjustCommentsAfterTrailingComma(node, node.properties);
            break;
          case "ObjectPattern":
            this.adjustCommentsAfterTrailingComma(node, node.properties, true);
            break;
          case "CallExpression":
            this.adjustCommentsAfterTrailingComma(node, node.arguments);
            break;
          case "ArrayExpression":
            this.adjustCommentsAfterTrailingComma(node, node.elements);
            break;
          case "ArrayPattern":
            this.adjustCommentsAfterTrailingComma(node, node.elements, true);
            break;
        }
      } else if (this.state.commentPreviousNode && (this.state.commentPreviousNode.type === "ImportSpecifier" && node.type !== "ImportSpecifier" || this.state.commentPreviousNode.type === "ExportSpecifier" && node.type !== "ExportSpecifier")) {
        this.adjustCommentsAfterTrailingComma(node, [this.state.commentPreviousNode]);
      }
      if (lastChild) {
        if (lastChild.leadingComments) {
          if (lastChild !== node && lastChild.leadingComments.length > 0 && last(lastChild.leadingComments).end <= node.start) {
            node.leadingComments = lastChild.leadingComments;
            delete lastChild.leadingComments;
          } else {
            for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
              if (lastChild.leadingComments[i].end <= node.start) {
                node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
                break;
              }
            }
          }
        }
      } else if (this.state.leadingComments.length > 0) {
        if (last(this.state.leadingComments).end <= node.start) {
          if (this.state.commentPreviousNode) {
            for (j = 0; j < this.state.leadingComments.length; j++) {
              if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
                this.state.leadingComments.splice(j, 1);
                j--;
              }
            }
          }
          if (this.state.leadingComments.length > 0) {
            node.leadingComments = this.state.leadingComments;
            this.state.leadingComments = [];
          }
        } else {
          for (i = 0; i < this.state.leadingComments.length; i++) {
            if (this.state.leadingComments[i].end > node.start) {
              break;
            }
          }
          const leadingComments = this.state.leadingComments.slice(0, i);
          if (leadingComments.length) {
            node.leadingComments = leadingComments;
          }
          trailingComments = this.state.leadingComments.slice(i);
          if (trailingComments.length === 0) {
            trailingComments = null;
          }
        }
      }
      this.state.commentPreviousNode = node;
      if (trailingComments) {
        if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
          node.innerComments = trailingComments;
        } else {
          const firstTrailingCommentIndex = trailingComments.findIndex((comment) => comment.end >= node.end);
          if (firstTrailingCommentIndex > 0) {
            node.innerComments = trailingComments.slice(0, firstTrailingCommentIndex);
            node.trailingComments = trailingComments.slice(firstTrailingCommentIndex);
          } else {
            node.trailingComments = trailingComments;
          }
        }
      }
      stack.push(node);
    }
  };
  var ErrorMessages = Object.freeze({
    AccessorIsGenerator: "A %0ter cannot be a generator",
    ArgumentsInClass: "'arguments' is only allowed in functions and class methods",
    AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block",
    AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function",
    AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block",
    AwaitExpressionFormalParameter: "await is not allowed in async function parameters",
    AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules",
    AwaitNotInAsyncFunction: "'await' is only allowed within async functions",
    BadGetterArity: "getter must not have any formal parameters",
    BadSetterArity: "setter must have exactly one formal parameter",
    BadSetterRestParameter: "setter function argument must not be a rest parameter",
    ConstructorClassField: "Classes may not have a field named 'constructor'",
    ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'",
    ConstructorIsAccessor: "Class constructor may not be an accessor",
    ConstructorIsAsync: "Constructor can't be an async function",
    ConstructorIsGenerator: "Constructor can't be a generator",
    DeclarationMissingInitializer: "%0 require an initialization value",
    DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. You can set the 'decoratorsBeforeExport' option to false to use the 'export @decorator class {}' syntax",
    DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
    DecoratorExportClass: "Using the export keyword between a decorator and a class is not allowed. Please use `export @dec class` instead.",
    DecoratorSemicolon: "Decorators must not be followed by a semicolon",
    DecoratorStaticBlock: "Decorators can't be used with a static block",
    DeletePrivateField: "Deleting a private field is not allowed",
    DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
    DuplicateConstructor: "Duplicate constructor in the same class",
    DuplicateDefaultExport: "Only one default export allowed per module.",
    DuplicateExport: "`%0` has already been exported. Exported identifiers must be unique.",
    DuplicateProto: "Redefinition of __proto__ property",
    DuplicateRegExpFlags: "Duplicate regular expression flag",
    DuplicateStaticBlock: "Duplicate static block in the same class",
    ElementAfterRest: "Rest element must be last element",
    EscapedCharNotAnIdentifier: "Invalid Unicode escape",
    ExportBindingIsString: "A string literal cannot be used as an exported binding without `from`.\n- Did you mean `export { '%0' as '%1' } from 'some-module'`?",
    ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'",
    ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
    GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block",
    IllegalBreakContinue: "Unsyntactic %0",
    IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
    IllegalReturn: "'return' outside of function",
    ImportBindingIsString: 'A string literal cannot be used as an imported binding.\n- Did you mean `import { "%0" as foo }`?',
    ImportCallArgumentTrailingComma: "Trailing comma is disallowed inside import(...) arguments",
    ImportCallArity: "import() requires exactly %0",
    ImportCallNotNewExpression: "Cannot use new with import(...)",
    ImportCallSpreadArgument: "... is not allowed in import()",
    ImportMetaOutsideModule: `import.meta may appear only with 'sourceType: "module"'`,
    ImportOutsideModule: `'import' and 'export' may appear only with 'sourceType: "module"'`,
    InvalidBigIntLiteral: "Invalid BigIntLiteral",
    InvalidCodePoint: "Code point out of bounds",
    InvalidDecimal: "Invalid decimal",
    InvalidDigit: "Expected number in radix %0",
    InvalidEscapeSequence: "Bad character escape sequence",
    InvalidEscapeSequenceTemplate: "Invalid escape sequence in template",
    InvalidEscapedReservedWord: "Escape sequence in keyword %0",
    InvalidIdentifier: "Invalid identifier %0",
    InvalidLhs: "Invalid left-hand side in %0",
    InvalidLhsBinding: "Binding invalid left-hand side in %0",
    InvalidNumber: "Invalid number",
    InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'",
    InvalidOrUnexpectedToken: "Unexpected character '%0'",
    InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern",
    InvalidPrivateFieldResolution: "Private name #%0 is not defined",
    InvalidPropertyBindingPattern: "Binding member expression",
    InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions",
    InvalidRestAssignmentPattern: "Invalid rest operator's argument",
    LabelRedeclaration: "Label '%0' is already declared",
    LetInLexicalBinding: "'let' is not allowed to be used as a name in 'let' or 'const' declarations.",
    LineTerminatorBeforeArrow: "No line break is allowed before '=>'",
    MalformedRegExpFlags: "Invalid regular expression flag",
    MissingClassName: "A class name is required",
    MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
    MissingSemicolon: "Missing semicolon",
    MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX",
    MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators",
    ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`",
    ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values",
    ModuleAttributesWithDuplicateKeys: 'Duplicate key "%0" is not allowed in module attributes',
    ModuleExportNameHasLoneSurrogate: "An export name cannot include a lone surrogate, found '\\u%0'",
    ModuleExportUndefined: "Export '%0' is not defined",
    MultipleDefaultsInSwitch: "Multiple default clauses",
    NewlineAfterThrow: "Illegal newline after throw",
    NoCatchOrFinally: "Missing catch or finally clause",
    NumberIdentifier: "Identifier directly after number",
    NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences",
    ObsoleteAwaitStar: "await* has been removed from the async functions proposal. Use Promise.all() instead.",
    OptionalChainingNoNew: "constructors in/after an Optional Chain are not allowed",
    OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain",
    ParamDupe: "Argument name clash",
    PatternHasAccessor: "Object pattern can't contain getter or setter",
    PatternHasMethod: "Object pattern can't contain methods",
    PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized',
    PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression",
    PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression",
    PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference",
    PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding",
    PrimaryTopicRequiresSmartPipeline: "Primary Topic Reference found but pipelineOperator not passed 'smart' for 'proposal' option.",
    PrivateInExpectedIn: "Private names are only allowed in property accesses (`obj.#%0`) or in `in` expressions (`#%0 in obj`)",
    PrivateNameRedeclaration: "Duplicate private name #%0",
    RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
    RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
    RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
    RecordNoProto: "'__proto__' is not allowed in Record expressions",
    RestTrailingComma: "Unexpected trailing comma after rest element",
    SloppyFunction: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
    StaticPrototype: "Classes may not have static property named prototype",
    StrictDelete: "Deleting local variable in strict mode",
    StrictEvalArguments: "Assigning to '%0' in strict mode",
    StrictEvalArgumentsBinding: "Binding '%0' in strict mode",
    StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
    StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'",
    StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode",
    StrictWith: "'with' in strict mode",
    SuperNotAllowed: "super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
    SuperPrivateField: "Private fields can't be accessed on super",
    TrailingDecorator: "Decorators must be attached to a class element",
    TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
    TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'",
    TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'",
    UnexpectedArgumentPlaceholder: "Unexpected argument placeholder",
    UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal',
    UnexpectedDigitAfterHash: "Unexpected digit after hash token",
    UnexpectedImportExport: "'import' and 'export' may only appear at the top level",
    UnexpectedKeyword: "Unexpected keyword '%0'",
    UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration",
    UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context",
    UnexpectedNewTarget: "new.target can only be used in functions",
    UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits",
    UnexpectedPrivateField: "Private names can only be used as the name of a class element (i.e. class C { #p = 42; #m() {} } )\n or a property of member expression (i.e. this.#p).",
    UnexpectedReservedWord: "Unexpected reserved word '%0'",
    UnexpectedSuper: "super is only allowed in object methods and classes",
    UnexpectedToken: "Unexpected token '%0'",
    UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
    UnsupportedBind: "Binding should be performed on object property.",
    UnsupportedDecoratorExport: "A decorated export must export a class declaration",
    UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
    UnsupportedImport: "import can only be used in import() or import.meta",
    UnsupportedMetaProperty: "The only valid meta property for %0 is %0.%1",
    UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters",
    UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties",
    UnsupportedSuper: "super can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop])",
    UnterminatedComment: "Unterminated comment",
    UnterminatedRegExp: "Unterminated regular expression",
    UnterminatedString: "Unterminated string constant",
    UnterminatedTemplate: "Unterminated template",
    VarRedeclaration: "Identifier '%0' has already been declared",
    YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator",
    YieldInParameter: "Yield expression is not allowed in formal parameters",
    ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0"
  });
  var ParserError = class extends CommentsParser {
    getLocationForPosition(pos) {
      let loc;
      if (pos === this.state.start)
        loc = this.state.startLoc;
      else if (pos === this.state.lastTokStart)
        loc = this.state.lastTokStartLoc;
      else if (pos === this.state.end)
        loc = this.state.endLoc;
      else if (pos === this.state.lastTokEnd)
        loc = this.state.lastTokEndLoc;
      else
        loc = getLineInfo(this.input, pos);
      return loc;
    }
    raise(pos, errorTemplate, ...params) {
      return this.raiseWithData(pos, void 0, errorTemplate, ...params);
    }
    raiseOverwrite(pos, errorTemplate, ...params) {
      const loc = this.getLocationForPosition(pos);
      const message = errorTemplate.replace(/%(\d+)/g, (_, i) => params[i]) + ` (${loc.line}:${loc.column})`;
      if (this.options.errorRecovery) {
        const errors = this.state.errors;
        for (let i = errors.length - 1; i >= 0; i--) {
          const error = errors[i];
          if (error.pos === pos) {
            return Object.assign(error, {
              message
            });
          } else if (error.pos < pos) {
            break;
          }
        }
      }
      return this._raise({
        loc,
        pos
      }, message);
    }
    raiseWithData(pos, data, errorTemplate, ...params) {
      const loc = this.getLocationForPosition(pos);
      const message = errorTemplate.replace(/%(\d+)/g, (_, i) => params[i]) + ` (${loc.line}:${loc.column})`;
      return this._raise(Object.assign({
        loc,
        pos
      }, data), message);
    }
    _raise(errorContext, message) {
      const err = new SyntaxError(message);
      Object.assign(err, errorContext);
      if (this.options.errorRecovery) {
        if (!this.isLookahead)
          this.state.errors.push(err);
        return err;
      } else {
        throw err;
      }
    }
  };
  var estree = (superClass) => class extends superClass {
    estreeParseRegExpLiteral({
      pattern,
      flags
    }) {
      let regex = null;
      try {
        regex = new RegExp(pattern, flags);
      } catch (e) {
      }
      const node = this.estreeParseLiteral(regex);
      node.regex = {
        pattern,
        flags
      };
      return node;
    }
    estreeParseBigIntLiteral(value) {
      let bigInt;
      try {
        bigInt = BigInt(value);
      } catch (_unused) {
        bigInt = null;
      }
      const node = this.estreeParseLiteral(bigInt);
      node.bigint = String(node.value || value);
      return node;
    }
    estreeParseDecimalLiteral(value) {
      const decimal = null;
      const node = this.estreeParseLiteral(decimal);
      node.decimal = String(node.value || value);
      return node;
    }
    estreeParseLiteral(value) {
      return this.parseLiteral(value, "Literal");
    }
    directiveToStmt(directive) {
      const directiveLiteral = directive.value;
      const stmt = this.startNodeAt(directive.start, directive.loc.start);
      const expression = this.startNodeAt(directiveLiteral.start, directiveLiteral.loc.start);
      expression.value = directiveLiteral.extra.expressionValue;
      expression.raw = directiveLiteral.extra.raw;
      stmt.expression = this.finishNodeAt(expression, "Literal", directiveLiteral.end, directiveLiteral.loc.end);
      stmt.directive = directiveLiteral.extra.raw.slice(1, -1);
      return this.finishNodeAt(stmt, "ExpressionStatement", directive.end, directive.loc.end);
    }
    initFunction(node, isAsync) {
      super.initFunction(node, isAsync);
      node.expression = false;
    }
    checkDeclaration(node) {
      if (node != null && this.isObjectProperty(node)) {
        this.checkDeclaration(node.value);
      } else {
        super.checkDeclaration(node);
      }
    }
    getObjectOrClassMethodParams(method) {
      return method.value.params;
    }
    isValidDirective(stmt) {
      var _stmt$expression$extr;
      return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) == null ? void 0 : _stmt$expression$extr.parenthesized);
    }
    stmtToDirective(stmt) {
      const directive = super.stmtToDirective(stmt);
      const value = stmt.expression.value;
      this.addExtra(directive.value, "expressionValue", value);
      return directive;
    }
    parseBlockBody(node, ...args) {
      super.parseBlockBody(node, ...args);
      const directiveStatements = node.directives.map((d) => this.directiveToStmt(d));
      node.body = directiveStatements.concat(node.body);
      delete node.directives;
    }
    pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
      this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true);
      if (method.typeParameters) {
        method.value.typeParameters = method.typeParameters;
        delete method.typeParameters;
      }
      classBody.body.push(method);
    }
    parseExprAtom(refExpressionErrors) {
      switch (this.state.type) {
        case types.num:
        case types.string:
          return this.estreeParseLiteral(this.state.value);
        case types.regexp:
          return this.estreeParseRegExpLiteral(this.state.value);
        case types.bigint:
          return this.estreeParseBigIntLiteral(this.state.value);
        case types.decimal:
          return this.estreeParseDecimalLiteral(this.state.value);
        case types._null:
          return this.estreeParseLiteral(null);
        case types._true:
          return this.estreeParseLiteral(true);
        case types._false:
          return this.estreeParseLiteral(false);
        default:
          return super.parseExprAtom(refExpressionErrors);
      }
    }
    parseMaybePrivateName(...args) {
      const node = super.parseMaybePrivateName(...args);
      if (node.type === "PrivateName" && this.getPluginOption("estree", "classFeatures")) {
        return this.convertPrivateNameToPrivateIdentifier(node);
      }
      return node;
    }
    convertPrivateNameToPrivateIdentifier(node) {
      const name = super.getPrivateNameSV(node);
      node = node;
      delete node.id;
      node.name = name;
      node.type = "PrivateIdentifier";
      return node;
    }
    isPrivateName(node) {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return super.isPrivateName(node);
      }
      return node.type === "PrivateIdentifier";
    }
    getPrivateNameSV(node) {
      if (!this.getPluginOption("estree", "classFeatures")) {
        return super.getPrivateNameSV(node);
      }
      return node.name;
    }
    parseLiteral(value, type, startPos, startLoc) {
      const node = super.parseLiteral(value, type, startPos, startLoc);
      node.raw = node.extra.raw;
      delete node.extra;
      return node;
    }
    parseFunctionBody(node, allowExpression, isMethod = false) {
      super.parseFunctionBody(node, allowExpression, isMethod);
      node.expression = node.body.type !== "BlockStatement";
    }
    parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
      let funcNode = this.startNode();
      funcNode.kind = node.kind;
      funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
      funcNode.type = "FunctionExpression";
      delete funcNode.kind;
      node.value = funcNode;
      if (type === "ClassPrivateMethod") {
        node.computed = false;
      }
      type = "MethodDefinition";
      return this.finishNode(node, type);
    }
    parseClassProperty(...args) {
      const propertyNode = super.parseClassProperty(...args);
      if (this.getPluginOption("estree", "classFeatures")) {
        propertyNode.type = "PropertyDefinition";
      }
      return propertyNode;
    }
    parseClassPrivateProperty(...args) {
      const propertyNode = super.parseClassPrivateProperty(...args);
      if (this.getPluginOption("estree", "classFeatures")) {
        propertyNode.type = "PropertyDefinition";
        propertyNode.computed = false;
      }
      return propertyNode;
    }
    parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
      const node = super.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor);
      if (node) {
        node.type = "Property";
        if (node.kind === "method")
          node.kind = "init";
        node.shorthand = false;
      }
      return node;
    }
    parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
      const node = super.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);
      if (node) {
        node.kind = "init";
        node.type = "Property";
      }
      return node;
    }
    toAssignable(node, isLHS = false) {
      if (node != null && this.isObjectProperty(node)) {
        this.toAssignable(node.value, isLHS);
        return node;
      }
      return super.toAssignable(node, isLHS);
    }
    toAssignableObjectExpressionProp(prop, ...args) {
      if (prop.kind === "get" || prop.kind === "set") {
        this.raise(prop.key.start, ErrorMessages.PatternHasAccessor);
      } else if (prop.method) {
        this.raise(prop.key.start, ErrorMessages.PatternHasMethod);
      } else {
        super.toAssignableObjectExpressionProp(prop, ...args);
      }
    }
    finishCallExpression(node, optional) {
      super.finishCallExpression(node, optional);
      if (node.callee.type === "Import") {
        node.type = "ImportExpression";
        node.source = node.arguments[0];
        delete node.arguments;
        delete node.callee;
      }
      return node;
    }
    toReferencedArguments(node) {
      if (node.type === "ImportExpression") {
        return;
      }
      super.toReferencedArguments(node);
    }
    parseExport(node) {
      super.parseExport(node);
      switch (node.type) {
        case "ExportAllDeclaration":
          node.exported = null;
          break;
        case "ExportNamedDeclaration":
          if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
            node.type = "ExportAllDeclaration";
            node.exported = node.specifiers[0].exported;
            delete node.specifiers;
          }
          break;
      }
      return node;
    }
    parseSubscript(base, startPos, startLoc, noCalls, state) {
      const node = super.parseSubscript(base, startPos, startLoc, noCalls, state);
      if (state.optionalChainMember) {
        if (node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression") {
          node.type = node.type.substring(8);
        }
        if (state.stop) {
          const chain = this.startNodeAtNode(node);
          chain.expression = node;
          return this.finishNode(chain, "ChainExpression");
        }
      } else if (node.type === "MemberExpression" || node.type === "CallExpression") {
        node.optional = false;
      }
      return node;
    }
    hasPropertyAsPrivateName(node) {
      if (node.type === "ChainExpression") {
        node = node.expression;
      }
      return super.hasPropertyAsPrivateName(node);
    }
    isOptionalChain(node) {
      return node.type === "ChainExpression";
    }
    isObjectProperty(node) {
      return node.type === "Property" && node.kind === "init" && !node.method;
    }
    isObjectMethod(node) {
      return node.method || node.kind === "get" || node.kind === "set";
    }
  };
  var TokContext = class {
    constructor(token, isExpr, preserveSpace, override) {
      this.token = void 0;
      this.isExpr = void 0;
      this.preserveSpace = void 0;
      this.override = void 0;
      this.token = token;
      this.isExpr = !!isExpr;
      this.preserveSpace = !!preserveSpace;
      this.override = override;
    }
  };
  var types$1 = {
    braceStatement: new TokContext("{", false),
    braceExpression: new TokContext("{", true),
    recordExpression: new TokContext("#{", true),
    templateQuasi: new TokContext("${", false),
    parenStatement: new TokContext("(", false),
    parenExpression: new TokContext("(", true),
    template: new TokContext("`", true, true, (p) => p.readTmplToken()),
    functionExpression: new TokContext("function", true),
    functionStatement: new TokContext("function", false)
  };
  types.parenR.updateContext = types.braceR.updateContext = function() {
    if (this.state.context.length === 1) {
      this.state.exprAllowed = true;
      return;
    }
    let out = this.state.context.pop();
    if (out === types$1.braceStatement && this.curContext().token === "function") {
      out = this.state.context.pop();
    }
    this.state.exprAllowed = !out.isExpr;
  };
  types.name.updateContext = function(prevType) {
    let allowed = false;
    if (prevType !== types.dot) {
      if (this.state.value === "of" && !this.state.exprAllowed && prevType !== types._function && prevType !== types._class) {
        allowed = true;
      }
    }
    this.state.exprAllowed = allowed;
    if (this.state.isIterator) {
      this.state.isIterator = false;
    }
  };
  types.braceL.updateContext = function(prevType) {
    this.state.context.push(this.braceIsBlock(prevType) ? types$1.braceStatement : types$1.braceExpression);
    this.state.exprAllowed = true;
  };
  types.dollarBraceL.updateContext = function() {
    this.state.context.push(types$1.templateQuasi);
    this.state.exprAllowed = true;
  };
  types.parenL.updateContext = function(prevType) {
    const statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
    this.state.context.push(statementParens ? types$1.parenStatement : types$1.parenExpression);
    this.state.exprAllowed = true;
  };
  types.incDec.updateContext = function() {
  };
  types._function.updateContext = types._class.updateContext = function(prevType) {
    if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else && !(prevType === types._return && this.hasPrecedingLineBreak()) && !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat)) {
      this.state.context.push(types$1.functionExpression);
    } else {
      this.state.context.push(types$1.functionStatement);
    }
    this.state.exprAllowed = false;
  };
  types.backQuote.updateContext = function() {
    if (this.curContext() === types$1.template) {
      this.state.context.pop();
    } else {
      this.state.context.push(types$1.template);
    }
    this.state.exprAllowed = false;
  };
  types.braceHashL.updateContext = function() {
    this.state.context.push(types$1.recordExpression);
    this.state.exprAllowed = true;
  };
  var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
  var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
  nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938];
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  function isInAstralSet(code, set) {
    let pos = 65536;
    for (let i = 0, length = set.length; i < length; i += 2) {
      pos += set[i];
      if (pos > code)
        return false;
      pos += set[i + 1];
      if (pos >= code)
        return true;
    }
    return false;
  }
  function isIdentifierStart(code) {
    if (code < 65)
      return code === 36;
    if (code <= 90)
      return true;
    if (code < 97)
      return code === 95;
    if (code <= 122)
      return true;
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
    }
    return isInAstralSet(code, astralIdentifierStartCodes);
  }
  function isIdentifierChar(code) {
    if (code < 48)
      return code === 36;
    if (code < 58)
      return true;
    if (code < 65)
      return false;
    if (code <= 90)
      return true;
    if (code < 97)
      return code === 95;
    if (code <= 122)
      return true;
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
    }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
  }
  var reservedWords = {
    keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
    strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
    strictBind: ["eval", "arguments"]
  };
  var keywords$1 = new Set(reservedWords.keyword);
  var reservedWordsStrictSet = new Set(reservedWords.strict);
  var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
  function isReservedWord(word, inModule) {
    return inModule && word === "await" || word === "enum";
  }
  function isStrictReservedWord(word, inModule) {
    return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
  }
  function isStrictBindOnlyReservedWord(word) {
    return reservedWordsStrictBindSet.has(word);
  }
  function isStrictBindReservedWord(word, inModule) {
    return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
  }
  function isKeyword(word) {
    return keywords$1.has(word);
  }
  var keywordRelationalOperator = /^in(stanceof)?$/;
  function isIteratorStart(current, next) {
    return current === 64 && next === 64;
  }
  var SCOPE_OTHER = 0;
  var SCOPE_PROGRAM = 1;
  var SCOPE_FUNCTION = 2;
  var SCOPE_ARROW = 4;
  var SCOPE_SIMPLE_CATCH = 8;
  var SCOPE_SUPER = 16;
  var SCOPE_DIRECT_SUPER = 32;
  var SCOPE_CLASS = 64;
  var SCOPE_STATIC_BLOCK = 128;
  var SCOPE_TS_MODULE = 256;
  var SCOPE_VAR = SCOPE_PROGRAM | SCOPE_FUNCTION | SCOPE_TS_MODULE;
  var BIND_KIND_VALUE = 1;
  var BIND_KIND_TYPE = 2;
  var BIND_SCOPE_VAR = 4;
  var BIND_SCOPE_LEXICAL = 8;
  var BIND_SCOPE_FUNCTION = 16;
  var BIND_FLAGS_NONE = 64;
  var BIND_FLAGS_CLASS = 128;
  var BIND_FLAGS_TS_ENUM = 256;
  var BIND_FLAGS_TS_CONST_ENUM = 512;
  var BIND_FLAGS_TS_EXPORT_ONLY = 1024;
  var BIND_FLAGS_FLOW_DECLARE_FN = 2048;
  var BIND_CLASS = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_CLASS;
  var BIND_LEXICAL = BIND_KIND_VALUE | 0 | BIND_SCOPE_LEXICAL | 0;
  var BIND_VAR = BIND_KIND_VALUE | 0 | BIND_SCOPE_VAR | 0;
  var BIND_FUNCTION = BIND_KIND_VALUE | 0 | BIND_SCOPE_FUNCTION | 0;
  var BIND_TS_INTERFACE = 0 | BIND_KIND_TYPE | 0 | BIND_FLAGS_CLASS;
  var BIND_TS_TYPE = 0 | BIND_KIND_TYPE | 0 | 0;
  var BIND_TS_ENUM = BIND_KIND_VALUE | BIND_KIND_TYPE | BIND_SCOPE_LEXICAL | BIND_FLAGS_TS_ENUM;
  var BIND_TS_AMBIENT = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY;
  var BIND_NONE = 0 | 0 | 0 | BIND_FLAGS_NONE;
  var BIND_OUTSIDE = BIND_KIND_VALUE | 0 | 0 | BIND_FLAGS_NONE;
  var BIND_TS_CONST_ENUM = BIND_TS_ENUM | BIND_FLAGS_TS_CONST_ENUM;
  var BIND_TS_NAMESPACE = 0 | 0 | 0 | BIND_FLAGS_TS_EXPORT_ONLY;
  var BIND_FLOW_DECLARE_FN = BIND_FLAGS_FLOW_DECLARE_FN;
  var CLASS_ELEMENT_FLAG_STATIC = 4;
  var CLASS_ELEMENT_KIND_GETTER = 2;
  var CLASS_ELEMENT_KIND_SETTER = 1;
  var CLASS_ELEMENT_KIND_ACCESSOR = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_KIND_SETTER;
  var CLASS_ELEMENT_STATIC_GETTER = CLASS_ELEMENT_KIND_GETTER | CLASS_ELEMENT_FLAG_STATIC;
  var CLASS_ELEMENT_STATIC_SETTER = CLASS_ELEMENT_KIND_SETTER | CLASS_ELEMENT_FLAG_STATIC;
  var CLASS_ELEMENT_INSTANCE_GETTER = CLASS_ELEMENT_KIND_GETTER;
  var CLASS_ELEMENT_INSTANCE_SETTER = CLASS_ELEMENT_KIND_SETTER;
  var CLASS_ELEMENT_OTHER = 0;
  var Scope = class {
    constructor(flags) {
      this.flags = void 0;
      this.var = [];
      this.lexical = [];
      this.functions = [];
      this.flags = flags;
    }
  };
  var ScopeHandler = class {
    constructor(raise, inModule) {
      this.scopeStack = [];
      this.undefinedExports = new Map();
      this.undefinedPrivateNames = new Map();
      this.raise = raise;
      this.inModule = inModule;
    }
    get inFunction() {
      return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
    }
    get allowSuper() {
      return (this.currentThisScope().flags & SCOPE_SUPER) > 0;
    }
    get allowDirectSuper() {
      return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
    }
    get inClass() {
      return (this.currentThisScope().flags & SCOPE_CLASS) > 0;
    }
    get inStaticBlock() {
      return (this.currentThisScope().flags & SCOPE_STATIC_BLOCK) > 0;
    }
    get inNonArrowFunction() {
      return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0;
    }
    get treatFunctionsAsVar() {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }
    createScope(flags) {
      return new Scope(flags);
    }
    enter(flags) {
      this.scopeStack.push(this.createScope(flags));
    }
    exit() {
      this.scopeStack.pop();
    }
    treatFunctionsAsVarInScope(scope) {
      return !!(scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_PROGRAM);
    }
    declareName(name, bindingType, pos) {
      let scope = this.currentScope();
      if (bindingType & BIND_SCOPE_LEXICAL || bindingType & BIND_SCOPE_FUNCTION) {
        this.checkRedeclarationInScope(scope, name, bindingType, pos);
        if (bindingType & BIND_SCOPE_FUNCTION) {
          scope.functions.push(name);
        } else {
          scope.lexical.push(name);
        }
        if (bindingType & BIND_SCOPE_LEXICAL) {
          this.maybeExportDefined(scope, name);
        }
      } else if (bindingType & BIND_SCOPE_VAR) {
        for (let i = this.scopeStack.length - 1; i >= 0; --i) {
          scope = this.scopeStack[i];
          this.checkRedeclarationInScope(scope, name, bindingType, pos);
          scope.var.push(name);
          this.maybeExportDefined(scope, name);
          if (scope.flags & SCOPE_VAR)
            break;
        }
      }
      if (this.inModule && scope.flags & SCOPE_PROGRAM) {
        this.undefinedExports.delete(name);
      }
    }
    maybeExportDefined(scope, name) {
      if (this.inModule && scope.flags & SCOPE_PROGRAM) {
        this.undefinedExports.delete(name);
      }
    }
    checkRedeclarationInScope(scope, name, bindingType, pos) {
      if (this.isRedeclaredInScope(scope, name, bindingType)) {
        this.raise(pos, ErrorMessages.VarRedeclaration, name);
      }
    }
    isRedeclaredInScope(scope, name, bindingType) {
      if (!(bindingType & BIND_KIND_VALUE))
        return false;
      if (bindingType & BIND_SCOPE_LEXICAL) {
        return scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
      }
      if (bindingType & BIND_SCOPE_FUNCTION) {
        return scope.lexical.indexOf(name) > -1 || !this.treatFunctionsAsVarInScope(scope) && scope.var.indexOf(name) > -1;
      }
      return scope.lexical.indexOf(name) > -1 && !(scope.flags & SCOPE_SIMPLE_CATCH && scope.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope) && scope.functions.indexOf(name) > -1;
    }
    checkLocalExport(id) {
      if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1 && this.scopeStack[0].functions.indexOf(id.name) === -1) {
        this.undefinedExports.set(id.name, id.start);
      }
    }
    currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }
    currentVarScope() {
      for (let i = this.scopeStack.length - 1; ; i--) {
        const scope = this.scopeStack[i];
        if (scope.flags & SCOPE_VAR) {
          return scope;
        }
      }
    }
    currentThisScope() {
      for (let i = this.scopeStack.length - 1; ; i--) {
        const scope = this.scopeStack[i];
        if ((scope.flags & SCOPE_VAR || scope.flags & SCOPE_CLASS) && !(scope.flags & SCOPE_ARROW)) {
          return scope;
        }
      }
    }
  };
  var FlowScope = class extends Scope {
    constructor(...args) {
      super(...args);
      this.declareFunctions = [];
    }
  };
  var FlowScopeHandler = class extends ScopeHandler {
    createScope(flags) {
      return new FlowScope(flags);
    }
    declareName(name, bindingType, pos) {
      const scope = this.currentScope();
      if (bindingType & BIND_FLAGS_FLOW_DECLARE_FN) {
        this.checkRedeclarationInScope(scope, name, bindingType, pos);
        this.maybeExportDefined(scope, name);
        scope.declareFunctions.push(name);
        return;
      }
      super.declareName(...arguments);
    }
    isRedeclaredInScope(scope, name, bindingType) {
      if (super.isRedeclaredInScope(...arguments))
        return true;
      if (bindingType & BIND_FLAGS_FLOW_DECLARE_FN) {
        return !scope.declareFunctions.includes(name) && (scope.lexical.includes(name) || scope.functions.includes(name));
      }
      return false;
    }
    checkLocalExport(id) {
      if (this.scopeStack[0].declareFunctions.indexOf(id.name) === -1) {
        super.checkLocalExport(id);
      }
    }
  };
  var reservedTypes = new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
  var FlowErrors = Object.freeze({
    AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
    AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module",
    AssignReservedType: "Cannot overwrite reserved type %0",
    DeclareClassElement: "The `declare` modifier can only appear on class fields.",
    DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
    DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement",
    EnumBooleanMemberNotInitialized: "Boolean enum members need to be initialized. Use either `%0 = true,` or `%0 = false,` in enum `%1`.",
    EnumDuplicateMemberName: "Enum member names need to be unique, but the name `%0` has already been used before in enum `%1`.",
    EnumInconsistentMemberValues: "Enum `%0` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.",
    EnumInvalidExplicitType: "Enum type `%1` is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
    EnumInvalidExplicitTypeUnknownSupplied: "Supplied enum type is not valid. Use one of `boolean`, `number`, `string`, or `symbol` in enum `%0`.",
    EnumInvalidMemberInitializerPrimaryType: "Enum `%0` has type `%2`, so the initializer of `%1` needs to be a %2 literal.",
    EnumInvalidMemberInitializerSymbolType: "Symbol enum members cannot be initialized. Use `%1,` in enum `%0`.",
    EnumInvalidMemberInitializerUnknownType: "The enum member initializer for `%1` needs to be a literal (either a boolean, number, or string) in enum `%0`.",
    EnumInvalidMemberName: "Enum member names cannot start with lowercase 'a' through 'z'. Instead of using `%0`, consider using `%1`, in enum `%2`.",
    EnumNumberMemberNotInitialized: "Number enum members need to be initialized, e.g. `%1 = 1` in enum `%0`.",
    EnumStringMemberInconsistentlyInitailized: "String enum members need to consistently either all use initializers, or use no initializers, in enum `%0`.",
    GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
    ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements",
    InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type",
    InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions",
    InexactVariance: "Explicit inexact syntax cannot have variance",
    InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`",
    MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
    NestedDeclareModule: "`declare module` cannot be used inside another `declare module`",
    NestedFlowComment: "Cannot have a flow comment inside another flow comment",
    OptionalBindingPattern: "A binding pattern parameter cannot be optional in an implementation signature.",
    SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
    SpreadVariance: "Spread properties cannot have variance",
    ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
    ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
    ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
    ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
    ThisParamNoDefault: "The `this` parameter may not have a default value.",
    TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
    TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis",
    UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object",
    UnexpectedReservedType: "Unexpected reserved type %0",
    UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new",
    UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
    UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions",
    UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint"',
    UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration",
    UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`",
    UnsupportedDeclareExportKind: "`declare export %0` is not supported. Use `%1` instead",
    UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module",
    UnterminatedFlowComment: "Unterminated flow-comment"
  });
  function isEsModuleType(bodyElement) {
    return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
  }
  function hasTypeImportKind(node) {
    return node.importKind === "type" || node.importKind === "typeof";
  }
  function isMaybeDefaultImport(state) {
    return (state.type === types.name || !!state.type.keyword) && state.value !== "from";
  }
  var exportSuggestions = {
    const: "declare export var",
    let: "declare export var",
    type: "export type",
    interface: "export interface"
  };
  function partition(list, test) {
    const list1 = [];
    const list2 = [];
    for (let i = 0; i < list.length; i++) {
      (test(list[i], i, list) ? list1 : list2).push(list[i]);
    }
    return [list1, list2];
  }
  var FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
  var flow = (superClass) => {
    var _temp;
    return _temp = class extends superClass {
      constructor(...args) {
        super(...args);
        this.flowPragma = void 0;
      }
      getScopeHandler() {
        return FlowScopeHandler;
      }
      shouldParseTypes() {
        return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
      }
      shouldParseEnums() {
        return !!this.getPluginOption("flow", "enums");
      }
      finishToken(type, val) {
        if (type !== types.string && type !== types.semi && type !== types.interpreterDirective) {
          if (this.flowPragma === void 0) {
            this.flowPragma = null;
          }
        }
        return super.finishToken(type, val);
      }
      addComment(comment) {
        if (this.flowPragma === void 0) {
          const matches = FLOW_PRAGMA_REGEX.exec(comment.value);
          if (!matches)
            ;
          else if (matches[1] === "flow") {
            this.flowPragma = "flow";
          } else if (matches[1] === "noflow") {
            this.flowPragma = "noflow";
          } else {
            throw new Error("Unexpected flow pragma");
          }
        }
        return super.addComment(comment);
      }
      flowParseTypeInitialiser(tok) {
        const oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(tok || types.colon);
        const type = this.flowParseType();
        this.state.inType = oldInType;
        return type;
      }
      flowParsePredicate() {
        const node = this.startNode();
        const moduloLoc = this.state.startLoc;
        const moduloPos = this.state.start;
        this.expect(types.modulo);
        const checksLoc = this.state.startLoc;
        this.expectContextual("checks");
        if (moduloLoc.line !== checksLoc.line || moduloLoc.column !== checksLoc.column - 1) {
          this.raise(moduloPos, FlowErrors.UnexpectedSpaceBetweenModuloChecks);
        }
        if (this.eat(types.parenL)) {
          node.value = this.parseExpression();
          this.expect(types.parenR);
          return this.finishNode(node, "DeclaredPredicate");
        } else {
          return this.finishNode(node, "InferredPredicate");
        }
      }
      flowParseTypeAndPredicateInitialiser() {
        const oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(types.colon);
        let type = null;
        let predicate = null;
        if (this.match(types.modulo)) {
          this.state.inType = oldInType;
          predicate = this.flowParsePredicate();
        } else {
          type = this.flowParseType();
          this.state.inType = oldInType;
          if (this.match(types.modulo)) {
            predicate = this.flowParsePredicate();
          }
        }
        return [type, predicate];
      }
      flowParseDeclareClass(node) {
        this.next();
        this.flowParseInterfaceish(node, true);
        return this.finishNode(node, "DeclareClass");
      }
      flowParseDeclareFunction(node) {
        this.next();
        const id = node.id = this.parseIdentifier();
        const typeNode = this.startNode();
        const typeContainer = this.startNode();
        if (this.isRelational("<")) {
          typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          typeNode.typeParameters = null;
        }
        this.expect(types.parenL);
        const tmp = this.flowParseFunctionTypeParams();
        typeNode.params = tmp.params;
        typeNode.rest = tmp.rest;
        typeNode.this = tmp._this;
        this.expect(types.parenR);
        [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
        id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
        this.resetEndLocation(id);
        this.semicolon();
        this.scope.declareName(node.id.name, BIND_FLOW_DECLARE_FN, node.id.start);
        return this.finishNode(node, "DeclareFunction");
      }
      flowParseDeclare(node, insideModule) {
        if (this.match(types._class)) {
          return this.flowParseDeclareClass(node);
        } else if (this.match(types._function)) {
          return this.flowParseDeclareFunction(node);
        } else if (this.match(types._var)) {
          return this.flowParseDeclareVariable(node);
        } else if (this.eatContextual("module")) {
          if (this.match(types.dot)) {
            return this.flowParseDeclareModuleExports(node);
          } else {
            if (insideModule) {
              this.raise(this.state.lastTokStart, FlowErrors.NestedDeclareModule);
            }
            return this.flowParseDeclareModule(node);
          }
        } else if (this.isContextual("type")) {
          return this.flowParseDeclareTypeAlias(node);
        } else if (this.isContextual("opaque")) {
          return this.flowParseDeclareOpaqueType(node);
        } else if (this.isContextual("interface")) {
          return this.flowParseDeclareInterface(node);
        } else if (this.match(types._export)) {
          return this.flowParseDeclareExportDeclaration(node, insideModule);
        } else {
          throw this.unexpected();
        }
      }
      flowParseDeclareVariable(node) {
        this.next();
        node.id = this.flowParseTypeAnnotatableIdentifier(true);
        this.scope.declareName(node.id.name, BIND_VAR, node.id.start);
        this.semicolon();
        return this.finishNode(node, "DeclareVariable");
      }
      flowParseDeclareModule(node) {
        this.scope.enter(SCOPE_OTHER);
        if (this.match(types.string)) {
          node.id = this.parseExprAtom();
        } else {
          node.id = this.parseIdentifier();
        }
        const bodyNode = node.body = this.startNode();
        const body = bodyNode.body = [];
        this.expect(types.braceL);
        while (!this.match(types.braceR)) {
          let bodyNode2 = this.startNode();
          if (this.match(types._import)) {
            this.next();
            if (!this.isContextual("type") && !this.match(types._typeof)) {
              this.raise(this.state.lastTokStart, FlowErrors.InvalidNonTypeImportInDeclareModule);
            }
            this.parseImport(bodyNode2);
          } else {
            this.expectContextual("declare", FlowErrors.UnsupportedStatementInDeclareModule);
            bodyNode2 = this.flowParseDeclare(bodyNode2, true);
          }
          body.push(bodyNode2);
        }
        this.scope.exit();
        this.expect(types.braceR);
        this.finishNode(bodyNode, "BlockStatement");
        let kind = null;
        let hasModuleExport = false;
        body.forEach((bodyElement) => {
          if (isEsModuleType(bodyElement)) {
            if (kind === "CommonJS") {
              this.raise(bodyElement.start, FlowErrors.AmbiguousDeclareModuleKind);
            }
            kind = "ES";
          } else if (bodyElement.type === "DeclareModuleExports") {
            if (hasModuleExport) {
              this.raise(bodyElement.start, FlowErrors.DuplicateDeclareModuleExports);
            }
            if (kind === "ES") {
              this.raise(bodyElement.start, FlowErrors.AmbiguousDeclareModuleKind);
            }
            kind = "CommonJS";
            hasModuleExport = true;
          }
        });
        node.kind = kind || "CommonJS";
        return this.finishNode(node, "DeclareModule");
      }
      flowParseDeclareExportDeclaration(node, insideModule) {
        this.expect(types._export);
        if (this.eat(types._default)) {
          if (this.match(types._function) || this.match(types._class)) {
            node.declaration = this.flowParseDeclare(this.startNode());
          } else {
            node.declaration = this.flowParseType();
            this.semicolon();
          }
          node.default = true;
          return this.finishNode(node, "DeclareExportDeclaration");
        } else {
          if (this.match(types._const) || this.isLet() || (this.isContextual("type") || this.isContextual("interface")) && !insideModule) {
            const label = this.state.value;
            const suggestion = exportSuggestions[label];
            throw this.raise(this.state.start, FlowErrors.UnsupportedDeclareExportKind, label, suggestion);
          }
          if (this.match(types._var) || this.match(types._function) || this.match(types._class) || this.isContextual("opaque")) {
            node.declaration = this.flowParseDeclare(this.startNode());
            node.default = false;
            return this.finishNode(node, "DeclareExportDeclaration");
          } else if (this.match(types.star) || this.match(types.braceL) || this.isContextual("interface") || this.isContextual("type") || this.isContextual("opaque")) {
            node = this.parseExport(node);
            if (node.type === "ExportNamedDeclaration") {
              node.type = "ExportDeclaration";
              node.default = false;
              delete node.exportKind;
            }
            node.type = "Declare" + node.type;
            return node;
          }
        }
        throw this.unexpected();
      }
      flowParseDeclareModuleExports(node) {
        this.next();
        this.expectContextual("exports");
        node.typeAnnotation = this.flowParseTypeAnnotation();
        this.semicolon();
        return this.finishNode(node, "DeclareModuleExports");
      }
      flowParseDeclareTypeAlias(node) {
        this.next();
        this.flowParseTypeAlias(node);
        node.type = "DeclareTypeAlias";
        return node;
      }
      flowParseDeclareOpaqueType(node) {
        this.next();
        this.flowParseOpaqueType(node, true);
        node.type = "DeclareOpaqueType";
        return node;
      }
      flowParseDeclareInterface(node) {
        this.next();
        this.flowParseInterfaceish(node);
        return this.finishNode(node, "DeclareInterface");
      }
      flowParseInterfaceish(node, isClass = false) {
        node.id = this.flowParseRestrictedIdentifier(!isClass, true);
        this.scope.declareName(node.id.name, isClass ? BIND_FUNCTION : BIND_LEXICAL, node.id.start);
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.extends = [];
        node.implements = [];
        node.mixins = [];
        if (this.eat(types._extends)) {
          do {
            node.extends.push(this.flowParseInterfaceExtends());
          } while (!isClass && this.eat(types.comma));
        }
        if (this.isContextual("mixins")) {
          this.next();
          do {
            node.mixins.push(this.flowParseInterfaceExtends());
          } while (this.eat(types.comma));
        }
        if (this.isContextual("implements")) {
          this.next();
          do {
            node.implements.push(this.flowParseInterfaceExtends());
          } while (this.eat(types.comma));
        }
        node.body = this.flowParseObjectType({
          allowStatic: isClass,
          allowExact: false,
          allowSpread: false,
          allowProto: isClass,
          allowInexact: false
        });
      }
      flowParseInterfaceExtends() {
        const node = this.startNode();
        node.id = this.flowParseQualifiedTypeIdentifier();
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }
        return this.finishNode(node, "InterfaceExtends");
      }
      flowParseInterface(node) {
        this.flowParseInterfaceish(node);
        return this.finishNode(node, "InterfaceDeclaration");
      }
      checkNotUnderscore(word) {
        if (word === "_") {
          this.raise(this.state.start, FlowErrors.UnexpectedReservedUnderscore);
        }
      }
      checkReservedType(word, startLoc, declaration) {
        if (!reservedTypes.has(word))
          return;
        this.raise(startLoc, declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, word);
      }
      flowParseRestrictedIdentifier(liberal, declaration) {
        this.checkReservedType(this.state.value, this.state.start, declaration);
        return this.parseIdentifier(liberal);
      }
      flowParseTypeAlias(node) {
        node.id = this.flowParseRestrictedIdentifier(false, true);
        this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.right = this.flowParseTypeInitialiser(types.eq);
        this.semicolon();
        return this.finishNode(node, "TypeAlias");
      }
      flowParseOpaqueType(node, declare) {
        this.expectContextual("type");
        node.id = this.flowParseRestrictedIdentifier(true, true);
        this.scope.declareName(node.id.name, BIND_LEXICAL, node.id.start);
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.supertype = null;
        if (this.match(types.colon)) {
          node.supertype = this.flowParseTypeInitialiser(types.colon);
        }
        node.impltype = null;
        if (!declare) {
          node.impltype = this.flowParseTypeInitialiser(types.eq);
        }
        this.semicolon();
        return this.finishNode(node, "OpaqueType");
      }
      flowParseTypeParameter(requireDefault = false) {
        const nodeStart = this.state.start;
        const node = this.startNode();
        const variance = this.flowParseVariance();
        const ident = this.flowParseTypeAnnotatableIdentifier();
        node.name = ident.name;
        node.variance = variance;
        node.bound = ident.typeAnnotation;
        if (this.match(types.eq)) {
          this.eat(types.eq);
          node.default = this.flowParseType();
        } else {
          if (requireDefault) {
            this.raise(nodeStart, FlowErrors.MissingTypeParamDefault);
          }
        }
        return this.finishNode(node, "TypeParameter");
      }
      flowParseTypeParameterDeclaration() {
        const oldInType = this.state.inType;
        const node = this.startNode();
        node.params = [];
        this.state.inType = true;
        if (this.isRelational("<") || this.match(types.jsxTagStart)) {
          this.next();
        } else {
          this.unexpected();
        }
        let defaultRequired = false;
        do {
          const typeParameter = this.flowParseTypeParameter(defaultRequired);
          node.params.push(typeParameter);
          if (typeParameter.default) {
            defaultRequired = true;
          }
          if (!this.isRelational(">")) {
            this.expect(types.comma);
          }
        } while (!this.isRelational(">"));
        this.expectRelational(">");
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterDeclaration");
      }
      flowParseTypeParameterInstantiation() {
        const node = this.startNode();
        const oldInType = this.state.inType;
        node.params = [];
        this.state.inType = true;
        this.expectRelational("<");
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        this.state.noAnonFunctionType = false;
        while (!this.isRelational(">")) {
          node.params.push(this.flowParseType());
          if (!this.isRelational(">")) {
            this.expect(types.comma);
          }
        }
        this.state.noAnonFunctionType = oldNoAnonFunctionType;
        this.expectRelational(">");
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterInstantiation");
      }
      flowParseTypeParameterInstantiationCallOrNew() {
        const node = this.startNode();
        const oldInType = this.state.inType;
        node.params = [];
        this.state.inType = true;
        this.expectRelational("<");
        while (!this.isRelational(">")) {
          node.params.push(this.flowParseTypeOrImplicitInstantiation());
          if (!this.isRelational(">")) {
            this.expect(types.comma);
          }
        }
        this.expectRelational(">");
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterInstantiation");
      }
      flowParseInterfaceType() {
        const node = this.startNode();
        this.expectContextual("interface");
        node.extends = [];
        if (this.eat(types._extends)) {
          do {
            node.extends.push(this.flowParseInterfaceExtends());
          } while (this.eat(types.comma));
        }
        node.body = this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: false,
          allowProto: false,
          allowInexact: false
        });
        return this.finishNode(node, "InterfaceTypeAnnotation");
      }
      flowParseObjectPropertyKey() {
        return this.match(types.num) || this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
      }
      flowParseObjectTypeIndexer(node, isStatic, variance) {
        node.static = isStatic;
        if (this.lookahead().type === types.colon) {
          node.id = this.flowParseObjectPropertyKey();
          node.key = this.flowParseTypeInitialiser();
        } else {
          node.id = null;
          node.key = this.flowParseType();
        }
        this.expect(types.bracketR);
        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
        return this.finishNode(node, "ObjectTypeIndexer");
      }
      flowParseObjectTypeInternalSlot(node, isStatic) {
        node.static = isStatic;
        node.id = this.flowParseObjectPropertyKey();
        this.expect(types.bracketR);
        this.expect(types.bracketR);
        if (this.isRelational("<") || this.match(types.parenL)) {
          node.method = true;
          node.optional = false;
          node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
        } else {
          node.method = false;
          if (this.eat(types.question)) {
            node.optional = true;
          }
          node.value = this.flowParseTypeInitialiser();
        }
        return this.finishNode(node, "ObjectTypeInternalSlot");
      }
      flowParseObjectTypeMethodish(node) {
        node.params = [];
        node.rest = null;
        node.typeParameters = null;
        node.this = null;
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        this.expect(types.parenL);
        if (this.match(types._this)) {
          node.this = this.flowParseFunctionTypeParam(true);
          node.this.name = null;
          if (!this.match(types.parenR)) {
            this.expect(types.comma);
          }
        }
        while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
          node.params.push(this.flowParseFunctionTypeParam(false));
          if (!this.match(types.parenR)) {
            this.expect(types.comma);
          }
        }
        if (this.eat(types.ellipsis)) {
          node.rest = this.flowParseFunctionTypeParam(false);
        }
        this.expect(types.parenR);
        node.returnType = this.flowParseTypeInitialiser();
        return this.finishNode(node, "FunctionTypeAnnotation");
      }
      flowParseObjectTypeCallProperty(node, isStatic) {
        const valueNode = this.startNode();
        node.static = isStatic;
        node.value = this.flowParseObjectTypeMethodish(valueNode);
        return this.finishNode(node, "ObjectTypeCallProperty");
      }
      flowParseObjectType({
        allowStatic,
        allowExact,
        allowSpread,
        allowProto,
        allowInexact
      }) {
        const oldInType = this.state.inType;
        this.state.inType = true;
        const nodeStart = this.startNode();
        nodeStart.callProperties = [];
        nodeStart.properties = [];
        nodeStart.indexers = [];
        nodeStart.internalSlots = [];
        let endDelim;
        let exact;
        let inexact = false;
        if (allowExact && this.match(types.braceBarL)) {
          this.expect(types.braceBarL);
          endDelim = types.braceBarR;
          exact = true;
        } else {
          this.expect(types.braceL);
          endDelim = types.braceR;
          exact = false;
        }
        nodeStart.exact = exact;
        while (!this.match(endDelim)) {
          let isStatic = false;
          let protoStart = null;
          let inexactStart = null;
          const node = this.startNode();
          if (allowProto && this.isContextual("proto")) {
            const lookahead = this.lookahead();
            if (lookahead.type !== types.colon && lookahead.type !== types.question) {
              this.next();
              protoStart = this.state.start;
              allowStatic = false;
            }
          }
          if (allowStatic && this.isContextual("static")) {
            const lookahead = this.lookahead();
            if (lookahead.type !== types.colon && lookahead.type !== types.question) {
              this.next();
              isStatic = true;
            }
          }
          const variance = this.flowParseVariance();
          if (this.eat(types.bracketL)) {
            if (protoStart != null) {
              this.unexpected(protoStart);
            }
            if (this.eat(types.bracketL)) {
              if (variance) {
                this.unexpected(variance.start);
              }
              nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
            } else {
              nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
            }
          } else if (this.match(types.parenL) || this.isRelational("<")) {
            if (protoStart != null) {
              this.unexpected(protoStart);
            }
            if (variance) {
              this.unexpected(variance.start);
            }
            nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
          } else {
            let kind = "init";
            if (this.isContextual("get") || this.isContextual("set")) {
              const lookahead = this.lookahead();
              if (lookahead.type === types.name || lookahead.type === types.string || lookahead.type === types.num) {
                kind = this.state.value;
                this.next();
              }
            }
            const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);
            if (propOrInexact === null) {
              inexact = true;
              inexactStart = this.state.lastTokStart;
            } else {
              nodeStart.properties.push(propOrInexact);
            }
          }
          this.flowObjectTypeSemicolon();
          if (inexactStart && !this.match(types.braceR) && !this.match(types.braceBarR)) {
            this.raise(inexactStart, FlowErrors.UnexpectedExplicitInexactInObject);
          }
        }
        this.expect(endDelim);
        if (allowSpread) {
          nodeStart.inexact = inexact;
        }
        const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
        this.state.inType = oldInType;
        return out;
      }
      flowParseObjectTypeProperty(node, isStatic, protoStart, variance, kind, allowSpread, allowInexact) {
        if (this.eat(types.ellipsis)) {
          const isInexactToken = this.match(types.comma) || this.match(types.semi) || this.match(types.braceR) || this.match(types.braceBarR);
          if (isInexactToken) {
            if (!allowSpread) {
              this.raise(this.state.lastTokStart, FlowErrors.InexactInsideNonObject);
            } else if (!allowInexact) {
              this.raise(this.state.lastTokStart, FlowErrors.InexactInsideExact);
            }
            if (variance) {
              this.raise(variance.start, FlowErrors.InexactVariance);
            }
            return null;
          }
          if (!allowSpread) {
            this.raise(this.state.lastTokStart, FlowErrors.UnexpectedSpreadType);
          }
          if (protoStart != null) {
            this.unexpected(protoStart);
          }
          if (variance) {
            this.raise(variance.start, FlowErrors.SpreadVariance);
          }
          node.argument = this.flowParseType();
          return this.finishNode(node, "ObjectTypeSpreadProperty");
        } else {
          node.key = this.flowParseObjectPropertyKey();
          node.static = isStatic;
          node.proto = protoStart != null;
          node.kind = kind;
          let optional = false;
          if (this.isRelational("<") || this.match(types.parenL)) {
            node.method = true;
            if (protoStart != null) {
              this.unexpected(protoStart);
            }
            if (variance) {
              this.unexpected(variance.start);
            }
            node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.start, node.loc.start));
            if (kind === "get" || kind === "set") {
              this.flowCheckGetterSetterParams(node);
            }
            if (!allowSpread && node.key.name === "constructor" && node.value.this) {
              this.raise(node.value.this.start, FlowErrors.ThisParamBannedInConstructor);
            }
          } else {
            if (kind !== "init")
              this.unexpected();
            node.method = false;
            if (this.eat(types.question)) {
              optional = true;
            }
            node.value = this.flowParseTypeInitialiser();
            node.variance = variance;
          }
          node.optional = optional;
          return this.finishNode(node, "ObjectTypeProperty");
        }
      }
      flowCheckGetterSetterParams(property) {
        const paramCount = property.kind === "get" ? 0 : 1;
        const start = property.start;
        const length = property.value.params.length + (property.value.rest ? 1 : 0);
        if (property.value.this) {
          this.raise(property.value.this.start, property.kind === "get" ? FlowErrors.GetterMayNotHaveThisParam : FlowErrors.SetterMayNotHaveThisParam);
        }
        if (length !== paramCount) {
          if (property.kind === "get") {
            this.raise(start, ErrorMessages.BadGetterArity);
          } else {
            this.raise(start, ErrorMessages.BadSetterArity);
          }
        }
        if (property.kind === "set" && property.value.rest) {
          this.raise(start, ErrorMessages.BadSetterRestParameter);
        }
      }
      flowObjectTypeSemicolon() {
        if (!this.eat(types.semi) && !this.eat(types.comma) && !this.match(types.braceR) && !this.match(types.braceBarR)) {
          this.unexpected();
        }
      }
      flowParseQualifiedTypeIdentifier(startPos, startLoc, id) {
        startPos = startPos || this.state.start;
        startLoc = startLoc || this.state.startLoc;
        let node = id || this.flowParseRestrictedIdentifier(true);
        while (this.eat(types.dot)) {
          const node2 = this.startNodeAt(startPos, startLoc);
          node2.qualification = node;
          node2.id = this.flowParseRestrictedIdentifier(true);
          node = this.finishNode(node2, "QualifiedTypeIdentifier");
        }
        return node;
      }
      flowParseGenericType(startPos, startLoc, id) {
        const node = this.startNodeAt(startPos, startLoc);
        node.typeParameters = null;
        node.id = this.flowParseQualifiedTypeIdentifier(startPos, startLoc, id);
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        }
        return this.finishNode(node, "GenericTypeAnnotation");
      }
      flowParseTypeofType() {
        const node = this.startNode();
        this.expect(types._typeof);
        node.argument = this.flowParsePrimaryType();
        return this.finishNode(node, "TypeofTypeAnnotation");
      }
      flowParseTupleType() {
        const node = this.startNode();
        node.types = [];
        this.expect(types.bracketL);
        while (this.state.pos < this.length && !this.match(types.bracketR)) {
          node.types.push(this.flowParseType());
          if (this.match(types.bracketR))
            break;
          this.expect(types.comma);
        }
        this.expect(types.bracketR);
        return this.finishNode(node, "TupleTypeAnnotation");
      }
      flowParseFunctionTypeParam(first) {
        let name = null;
        let optional = false;
        let typeAnnotation = null;
        const node = this.startNode();
        const lh = this.lookahead();
        const isThis = this.state.type === types._this;
        if (lh.type === types.colon || lh.type === types.question) {
          if (isThis && !first) {
            this.raise(node.start, FlowErrors.ThisParamMustBeFirst);
          }
          name = this.parseIdentifier(isThis);
          if (this.eat(types.question)) {
            optional = true;
            if (isThis) {
              this.raise(node.start, FlowErrors.ThisParamMayNotBeOptional);
            }
          }
          typeAnnotation = this.flowParseTypeInitialiser();
        } else {
          typeAnnotation = this.flowParseType();
        }
        node.name = name;
        node.optional = optional;
        node.typeAnnotation = typeAnnotation;
        return this.finishNode(node, "FunctionTypeParam");
      }
      reinterpretTypeAsFunctionTypeParam(type) {
        const node = this.startNodeAt(type.start, type.loc.start);
        node.name = null;
        node.optional = false;
        node.typeAnnotation = type;
        return this.finishNode(node, "FunctionTypeParam");
      }
      flowParseFunctionTypeParams(params = []) {
        let rest = null;
        let _this = null;
        if (this.match(types._this)) {
          _this = this.flowParseFunctionTypeParam(true);
          _this.name = null;
          if (!this.match(types.parenR)) {
            this.expect(types.comma);
          }
        }
        while (!this.match(types.parenR) && !this.match(types.ellipsis)) {
          params.push(this.flowParseFunctionTypeParam(false));
          if (!this.match(types.parenR)) {
            this.expect(types.comma);
          }
        }
        if (this.eat(types.ellipsis)) {
          rest = this.flowParseFunctionTypeParam(false);
        }
        return {
          params,
          rest,
          _this
        };
      }
      flowIdentToTypeAnnotation(startPos, startLoc, node, id) {
        switch (id.name) {
          case "any":
            return this.finishNode(node, "AnyTypeAnnotation");
          case "bool":
          case "boolean":
            return this.finishNode(node, "BooleanTypeAnnotation");
          case "mixed":
            return this.finishNode(node, "MixedTypeAnnotation");
          case "empty":
            return this.finishNode(node, "EmptyTypeAnnotation");
          case "number":
            return this.finishNode(node, "NumberTypeAnnotation");
          case "string":
            return this.finishNode(node, "StringTypeAnnotation");
          case "symbol":
            return this.finishNode(node, "SymbolTypeAnnotation");
          default:
            this.checkNotUnderscore(id.name);
            return this.flowParseGenericType(startPos, startLoc, id);
        }
      }
      flowParsePrimaryType() {
        const startPos = this.state.start;
        const startLoc = this.state.startLoc;
        const node = this.startNode();
        let tmp;
        let type;
        let isGroupedType = false;
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        switch (this.state.type) {
          case types.name:
            if (this.isContextual("interface")) {
              return this.flowParseInterfaceType();
            }
            return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());
          case types.braceL:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: false,
              allowSpread: true,
              allowProto: false,
              allowInexact: true
            });
          case types.braceBarL:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: true,
              allowSpread: true,
              allowProto: false,
              allowInexact: false
            });
          case types.bracketL:
            this.state.noAnonFunctionType = false;
            type = this.flowParseTupleType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            return type;
          case types.relational:
            if (this.state.value === "<") {
              node.typeParameters = this.flowParseTypeParameterDeclaration();
              this.expect(types.parenL);
              tmp = this.flowParseFunctionTypeParams();
              node.params = tmp.params;
              node.rest = tmp.rest;
              node.this = tmp._this;
              this.expect(types.parenR);
              this.expect(types.arrow);
              node.returnType = this.flowParseType();
              return this.finishNode(node, "FunctionTypeAnnotation");
            }
            break;
          case types.parenL:
            this.next();
            if (!this.match(types.parenR) && !this.match(types.ellipsis)) {
              if (this.match(types.name) || this.match(types._this)) {
                const token = this.lookahead().type;
                isGroupedType = token !== types.question && token !== types.colon;
              } else {
                isGroupedType = true;
              }
            }
            if (isGroupedType) {
              this.state.noAnonFunctionType = false;
              type = this.flowParseType();
              this.state.noAnonFunctionType = oldNoAnonFunctionType;
              if (this.state.noAnonFunctionType || !(this.match(types.comma) || this.match(types.parenR) && this.lookahead().type === types.arrow)) {
                this.expect(types.parenR);
                return type;
              } else {
                this.eat(types.comma);
              }
            }
            if (type) {
              tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
            } else {
              tmp = this.flowParseFunctionTypeParams();
            }
            node.params = tmp.params;
            node.rest = tmp.rest;
            node.this = tmp._this;
            this.expect(types.parenR);
            this.expect(types.arrow);
            node.returnType = this.flowParseType();
            node.typeParameters = null;
            return this.finishNode(node, "FunctionTypeAnnotation");
          case types.string:
            return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
          case types._true:
          case types._false:
            node.value = this.match(types._true);
            this.next();
            return this.finishNode(node, "BooleanLiteralTypeAnnotation");
          case types.plusMin:
            if (this.state.value === "-") {
              this.next();
              if (this.match(types.num)) {
                return this.parseLiteral(-this.state.value, "NumberLiteralTypeAnnotation", node.start, node.loc.start);
              }
              if (this.match(types.bigint)) {
                return this.parseLiteral(-this.state.value, "BigIntLiteralTypeAnnotation", node.start, node.loc.start);
              }
              throw this.raise(this.state.start, FlowErrors.UnexpectedSubtractionOperand);
            }
            throw this.unexpected();
          case types.num:
            return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
          case types.bigint:
            return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
          case types._void:
            this.next();
            return this.finishNode(node, "VoidTypeAnnotation");
          case types._null:
            this.next();
            return this.finishNode(node, "NullLiteralTypeAnnotation");
          case types._this:
            this.next();
            return this.finishNode(node, "ThisTypeAnnotation");
          case types.star:
            this.next();
            return this.finishNode(node, "ExistsTypeAnnotation");
          default:
            if (this.state.type.keyword === "typeof") {
              return this.flowParseTypeofType();
            } else if (this.state.type.keyword) {
              const label = this.state.type.label;
              this.next();
              return super.createIdentifier(node, label);
            }
        }
        throw this.unexpected();
      }
      flowParsePostfixType() {
        const startPos = this.state.start, startLoc = this.state.startLoc;
        let type = this.flowParsePrimaryType();
        while (this.match(types.bracketL) && !this.canInsertSemicolon()) {
          const node = this.startNodeAt(startPos, startLoc);
          node.elementType = type;
          this.expect(types.bracketL);
          this.expect(types.bracketR);
          type = this.finishNode(node, "ArrayTypeAnnotation");
        }
        return type;
      }
      flowParsePrefixType() {
        const node = this.startNode();
        if (this.eat(types.question)) {
          node.typeAnnotation = this.flowParsePrefixType();
          return this.finishNode(node, "NullableTypeAnnotation");
        } else {
          return this.flowParsePostfixType();
        }
      }
      flowParseAnonFunctionWithoutParens() {
        const param = this.flowParsePrefixType();
        if (!this.state.noAnonFunctionType && this.eat(types.arrow)) {
          const node = this.startNodeAt(param.start, param.loc.start);
          node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
          node.rest = null;
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
        return param;
      }
      flowParseIntersectionType() {
        const node = this.startNode();
        this.eat(types.bitwiseAND);
        const type = this.flowParseAnonFunctionWithoutParens();
        node.types = [type];
        while (this.eat(types.bitwiseAND)) {
          node.types.push(this.flowParseAnonFunctionWithoutParens());
        }
        return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
      }
      flowParseUnionType() {
        const node = this.startNode();
        this.eat(types.bitwiseOR);
        const type = this.flowParseIntersectionType();
        node.types = [type];
        while (this.eat(types.bitwiseOR)) {
          node.types.push(this.flowParseIntersectionType());
        }
        return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
      }
      flowParseType() {
        const oldInType = this.state.inType;
        this.state.inType = true;
        const type = this.flowParseUnionType();
        this.state.inType = oldInType;
        this.state.exprAllowed = this.state.exprAllowed || this.state.noAnonFunctionType;
        return type;
      }
      flowParseTypeOrImplicitInstantiation() {
        if (this.state.type === types.name && this.state.value === "_") {
          const startPos = this.state.start;
          const startLoc = this.state.startLoc;
          const node = this.parseIdentifier();
          return this.flowParseGenericType(startPos, startLoc, node);
        } else {
          return this.flowParseType();
        }
      }
      flowParseTypeAnnotation() {
        const node = this.startNode();
        node.typeAnnotation = this.flowParseTypeInitialiser();
        return this.finishNode(node, "TypeAnnotation");
      }
      flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
        const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
        if (this.match(types.colon)) {
          ident.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(ident);
        }
        return ident;
      }
      typeCastToParameter(node) {
        node.expression.typeAnnotation = node.typeAnnotation;
        this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
        return node.expression;
      }
      flowParseVariance() {
        let variance = null;
        if (this.match(types.plusMin)) {
          variance = this.startNode();
          if (this.state.value === "+") {
            variance.kind = "plus";
          } else {
            variance.kind = "minus";
          }
          this.next();
          this.finishNode(variance, "Variance");
        }
        return variance;
      }
      parseFunctionBody(node, allowExpressionBody, isMethod = false) {
        if (allowExpressionBody) {
          return this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
        }
        return super.parseFunctionBody(node, false, isMethod);
      }
      parseFunctionBodyAndFinish(node, type, isMethod = false) {
        if (this.match(types.colon)) {
          const typeNode = this.startNode();
          [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
          node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
        }
        super.parseFunctionBodyAndFinish(node, type, isMethod);
      }
      parseStatement(context, topLevel) {
        if (this.state.strict && this.match(types.name) && this.state.value === "interface") {
          const lookahead = this.lookahead();
          if (lookahead.type === types.name || isKeyword(lookahead.value)) {
            const node = this.startNode();
            this.next();
            return this.flowParseInterface(node);
          }
        } else if (this.shouldParseEnums() && this.isContextual("enum")) {
          const node = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(node);
        }
        const stmt = super.parseStatement(context, topLevel);
        if (this.flowPragma === void 0 && !this.isValidDirective(stmt)) {
          this.flowPragma = null;
        }
        return stmt;
      }
      parseExpressionStatement(node, expr) {
        if (expr.type === "Identifier") {
          if (expr.name === "declare") {
            if (this.match(types._class) || this.match(types.name) || this.match(types._function) || this.match(types._var) || this.match(types._export)) {
              return this.flowParseDeclare(node);
            }
          } else if (this.match(types.name)) {
            if (expr.name === "interface") {
              return this.flowParseInterface(node);
            } else if (expr.name === "type") {
              return this.flowParseTypeAlias(node);
            } else if (expr.name === "opaque") {
              return this.flowParseOpaqueType(node, false);
            }
          }
        }
        return super.parseExpressionStatement(node, expr);
      }
      shouldParseExportDeclaration() {
        return this.isContextual("type") || this.isContextual("interface") || this.isContextual("opaque") || this.shouldParseEnums() && this.isContextual("enum") || super.shouldParseExportDeclaration();
      }
      isExportDefaultSpecifier() {
        if (this.match(types.name) && (this.state.value === "type" || this.state.value === "interface" || this.state.value === "opaque" || this.shouldParseEnums() && this.state.value === "enum")) {
          return false;
        }
        return super.isExportDefaultSpecifier();
      }
      parseExportDefaultExpression() {
        if (this.shouldParseEnums() && this.isContextual("enum")) {
          const node = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(node);
        }
        return super.parseExportDefaultExpression();
      }
      parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
        if (!this.match(types.question))
          return expr;
        if (refNeedsArrowPos) {
          const result = this.tryParse(() => super.parseConditional(expr, startPos, startLoc));
          if (!result.node) {
            refNeedsArrowPos.start = result.error.pos || this.state.start;
            return expr;
          }
          if (result.error)
            this.state = result.failState;
          return result.node;
        }
        this.expect(types.question);
        const state = this.state.clone();
        const originalNoArrowAt = this.state.noArrowAt;
        const node = this.startNodeAt(startPos, startLoc);
        let {
          consequent,
          failed
        } = this.tryParseConditionalConsequent();
        let [valid, invalid] = this.getArrowLikeExpressions(consequent);
        if (failed || invalid.length > 0) {
          const noArrowAt = [...originalNoArrowAt];
          if (invalid.length > 0) {
            this.state = state;
            this.state.noArrowAt = noArrowAt;
            for (let i = 0; i < invalid.length; i++) {
              noArrowAt.push(invalid[i].start);
            }
            ({
              consequent,
              failed
            } = this.tryParseConditionalConsequent());
            [valid, invalid] = this.getArrowLikeExpressions(consequent);
          }
          if (failed && valid.length > 1) {
            this.raise(state.start, FlowErrors.AmbiguousConditionalArrow);
          }
          if (failed && valid.length === 1) {
            this.state = state;
            this.state.noArrowAt = noArrowAt.concat(valid[0].start);
            ({
              consequent,
              failed
            } = this.tryParseConditionalConsequent());
          }
        }
        this.getArrowLikeExpressions(consequent, true);
        this.state.noArrowAt = originalNoArrowAt;
        this.expect(types.colon);
        node.test = expr;
        node.consequent = consequent;
        node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(void 0, void 0, void 0));
        return this.finishNode(node, "ConditionalExpression");
      }
      tryParseConditionalConsequent() {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        const consequent = this.parseMaybeAssignAllowIn();
        const failed = !this.match(types.colon);
        this.state.noArrowParamsConversionAt.pop();
        return {
          consequent,
          failed
        };
      }
      getArrowLikeExpressions(node, disallowInvalid) {
        const stack = [node];
        const arrows = [];
        while (stack.length !== 0) {
          const node2 = stack.pop();
          if (node2.type === "ArrowFunctionExpression") {
            if (node2.typeParameters || !node2.returnType) {
              this.finishArrowValidation(node2);
            } else {
              arrows.push(node2);
            }
            stack.push(node2.body);
          } else if (node2.type === "ConditionalExpression") {
            stack.push(node2.consequent);
            stack.push(node2.alternate);
          }
        }
        if (disallowInvalid) {
          arrows.forEach((node2) => this.finishArrowValidation(node2));
          return [arrows, []];
        }
        return partition(arrows, (node2) => node2.params.every((param) => this.isAssignable(param, true)));
      }
      finishArrowValidation(node) {
        var _node$extra;
        this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingComma, false);
        this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
        super.checkParams(node, false, true);
        this.scope.exit();
      }
      forwardNoArrowParamsConversionAt(node, parse2) {
        let result;
        if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
          this.state.noArrowParamsConversionAt.push(this.state.start);
          result = parse2();
          this.state.noArrowParamsConversionAt.pop();
        } else {
          result = parse2();
        }
        return result;
      }
      parseParenItem(node, startPos, startLoc) {
        node = super.parseParenItem(node, startPos, startLoc);
        if (this.eat(types.question)) {
          node.optional = true;
          this.resetEndLocation(node);
        }
        if (this.match(types.colon)) {
          const typeCastNode = this.startNodeAt(startPos, startLoc);
          typeCastNode.expression = node;
          typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
          return this.finishNode(typeCastNode, "TypeCastExpression");
        }
        return node;
      }
      assertModuleNodeAllowed(node) {
        if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
          return;
        }
        super.assertModuleNodeAllowed(node);
      }
      parseExport(node) {
        const decl = super.parseExport(node);
        if (decl.type === "ExportNamedDeclaration" || decl.type === "ExportAllDeclaration") {
          decl.exportKind = decl.exportKind || "value";
        }
        return decl;
      }
      parseExportDeclaration(node) {
        if (this.isContextual("type")) {
          node.exportKind = "type";
          const declarationNode = this.startNode();
          this.next();
          if (this.match(types.braceL)) {
            node.specifiers = this.parseExportSpecifiers();
            this.parseExportFrom(node);
            return null;
          } else {
            return this.flowParseTypeAlias(declarationNode);
          }
        } else if (this.isContextual("opaque")) {
          node.exportKind = "type";
          const declarationNode = this.startNode();
          this.next();
          return this.flowParseOpaqueType(declarationNode, false);
        } else if (this.isContextual("interface")) {
          node.exportKind = "type";
          const declarationNode = this.startNode();
          this.next();
          return this.flowParseInterface(declarationNode);
        } else if (this.shouldParseEnums() && this.isContextual("enum")) {
          node.exportKind = "value";
          const declarationNode = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(declarationNode);
        } else {
          return super.parseExportDeclaration(node);
        }
      }
      eatExportStar(node) {
        if (super.eatExportStar(...arguments))
          return true;
        if (this.isContextual("type") && this.lookahead().type === types.star) {
          node.exportKind = "type";
          this.next();
          this.next();
          return true;
        }
        return false;
      }
      maybeParseExportNamespaceSpecifier(node) {
        const pos = this.state.start;
        const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);
        if (hasNamespace && node.exportKind === "type") {
          this.unexpected(pos);
        }
        return hasNamespace;
      }
      parseClassId(node, isStatement, optionalId) {
        super.parseClassId(node, isStatement, optionalId);
        if (this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
      }
      parseClassMember(classBody, member, state) {
        const pos = this.state.start;
        if (this.isContextual("declare")) {
          if (this.parseClassMemberFromModifier(classBody, member)) {
            return;
          }
          member.declare = true;
        }
        super.parseClassMember(classBody, member, state);
        if (member.declare) {
          if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty" && member.type !== "PropertyDefinition") {
            this.raise(pos, FlowErrors.DeclareClassElement);
          } else if (member.value) {
            this.raise(member.value.start, FlowErrors.DeclareClassFieldInitializer);
          }
        }
      }
      getTokenFromCode(code) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (code === 123 && next === 124) {
          return this.finishOp(types.braceBarL, 2);
        } else if (this.state.inType && (code === 62 || code === 60)) {
          return this.finishOp(types.relational, 1);
        } else if (this.state.inType && code === 63) {
          return this.finishOp(types.question, 1);
        } else if (isIteratorStart(code, next)) {
          this.state.isIterator = true;
          return super.readWord();
        } else {
          return super.getTokenFromCode(code);
        }
      }
      isAssignable(node, isBinding) {
        switch (node.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
            return true;
          case "ObjectExpression": {
            const last2 = node.properties.length - 1;
            return node.properties.every((prop, i) => {
              return prop.type !== "ObjectMethod" && (i === last2 || prop.type === "SpreadElement") && this.isAssignable(prop);
            });
          }
          case "ObjectProperty":
            return this.isAssignable(node.value);
          case "SpreadElement":
            return this.isAssignable(node.argument);
          case "ArrayExpression":
            return node.elements.every((element) => this.isAssignable(element));
          case "AssignmentExpression":
            return node.operator === "=";
          case "ParenthesizedExpression":
          case "TypeCastExpression":
            return this.isAssignable(node.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !isBinding;
          default:
            return false;
        }
      }
      toAssignable(node, isLHS = false) {
        if (node.type === "TypeCastExpression") {
          return super.toAssignable(this.typeCastToParameter(node), isLHS);
        } else {
          return super.toAssignable(node, isLHS);
        }
      }
      toAssignableList(exprList, trailingCommaPos, isLHS) {
        for (let i = 0; i < exprList.length; i++) {
          const expr = exprList[i];
          if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
            exprList[i] = this.typeCastToParameter(expr);
          }
        }
        return super.toAssignableList(exprList, trailingCommaPos, isLHS);
      }
      toReferencedList(exprList, isParenthesizedExpr) {
        for (let i = 0; i < exprList.length; i++) {
          var _expr$extra;
          const expr = exprList[i];
          if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) == null ? void 0 : _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
            this.raise(expr.typeAnnotation.start, FlowErrors.TypeCastInPattern);
          }
        }
        return exprList;
      }
      parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
        const node = super.parseArrayLike(close, canBePattern, isTuple, refExpressionErrors);
        if (canBePattern && !this.state.maybeInArrowParameters) {
          this.toReferencedList(node.elements);
        }
        return node;
      }
      checkLVal(expr, ...args) {
        if (expr.type !== "TypeCastExpression") {
          return super.checkLVal(expr, ...args);
        }
      }
      parseClassProperty(node) {
        if (this.match(types.colon)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }
        return super.parseClassProperty(node);
      }
      parseClassPrivateProperty(node) {
        if (this.match(types.colon)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }
        return super.parseClassPrivateProperty(node);
      }
      isClassMethod() {
        return this.isRelational("<") || super.isClassMethod();
      }
      isClassProperty() {
        return this.match(types.colon) || super.isClassProperty();
      }
      isNonstaticConstructor(method) {
        return !this.match(types.colon) && super.isNonstaticConstructor(method);
      }
      isThisParam(param) {
        return param.type === "Identifier" && param.name === "this";
      }
      pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        if (method.variance) {
          this.unexpected(method.variance.start);
        }
        delete method.variance;
        if (this.isRelational("<")) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
        if (method.params && isConstructor) {
          const params = method.params;
          if (params.length > 0 && this.isThisParam(params[0])) {
            this.raise(method.start, FlowErrors.ThisParamBannedInConstructor);
          }
        } else if (method.type === "MethodDefinition" && isConstructor && method.value.params) {
          const params = method.value.params;
          if (params.length > 0 && this.isThisParam(params[0])) {
            this.raise(method.start, FlowErrors.ThisParamBannedInConstructor);
          }
        }
      }
      pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        if (method.variance) {
          this.unexpected(method.variance.start);
        }
        delete method.variance;
        if (this.isRelational("<")) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
      }
      parseClassSuper(node) {
        super.parseClassSuper(node);
        if (node.superClass && this.isRelational("<")) {
          node.superTypeParameters = this.flowParseTypeParameterInstantiation();
        }
        if (this.isContextual("implements")) {
          this.next();
          const implemented = node.implements = [];
          do {
            const node2 = this.startNode();
            node2.id = this.flowParseRestrictedIdentifier(true);
            if (this.isRelational("<")) {
              node2.typeParameters = this.flowParseTypeParameterInstantiation();
            } else {
              node2.typeParameters = null;
            }
            implemented.push(this.finishNode(node2, "ClassImplements"));
          } while (this.eat(types.comma));
        }
      }
      checkGetterSetterParams(method) {
        super.checkGetterSetterParams(method);
        const params = this.getObjectOrClassMethodParams(method);
        if (params.length > 0) {
          const param = params[0];
          if (this.isThisParam(param) && method.kind === "get") {
            this.raise(param.start, FlowErrors.GetterMayNotHaveThisParam);
          } else if (this.isThisParam(param)) {
            this.raise(param.start, FlowErrors.SetterMayNotHaveThisParam);
          }
        }
      }
      parsePropertyName(node, isPrivateNameAllowed) {
        const variance = this.flowParseVariance();
        const key = super.parsePropertyName(node, isPrivateNameAllowed);
        node.variance = variance;
        return key;
      }
      parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
        if (prop.variance) {
          this.unexpected(prop.variance.start);
        }
        delete prop.variance;
        let typeParameters;
        if (this.isRelational("<") && !isAccessor) {
          typeParameters = this.flowParseTypeParameterDeclaration();
          if (!this.match(types.parenL))
            this.unexpected();
        }
        super.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
        if (typeParameters) {
          (prop.value || prop).typeParameters = typeParameters;
        }
      }
      parseAssignableListItemTypes(param) {
        if (this.eat(types.question)) {
          if (param.type !== "Identifier") {
            this.raise(param.start, FlowErrors.OptionalBindingPattern);
          }
          if (this.isThisParam(param)) {
            this.raise(param.start, FlowErrors.ThisParamMayNotBeOptional);
          }
          param.optional = true;
        }
        if (this.match(types.colon)) {
          param.typeAnnotation = this.flowParseTypeAnnotation();
        } else if (this.isThisParam(param)) {
          this.raise(param.start, FlowErrors.ThisParamAnnotationRequired);
        }
        if (this.match(types.eq) && this.isThisParam(param)) {
          this.raise(param.start, FlowErrors.ThisParamNoDefault);
        }
        this.resetEndLocation(param);
        return param;
      }
      parseMaybeDefault(startPos, startLoc, left) {
        const node = super.parseMaybeDefault(startPos, startLoc, left);
        if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
          this.raise(node.typeAnnotation.start, FlowErrors.TypeBeforeInitializer);
        }
        return node;
      }
      shouldParseDefaultImport(node) {
        if (!hasTypeImportKind(node)) {
          return super.shouldParseDefaultImport(node);
        }
        return isMaybeDefaultImport(this.state);
      }
      parseImportSpecifierLocal(node, specifier, type, contextDescription) {
        specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
        this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
        node.specifiers.push(this.finishNode(specifier, type));
      }
      maybeParseDefaultImportSpecifier(node) {
        node.importKind = "value";
        let kind = null;
        if (this.match(types._typeof)) {
          kind = "typeof";
        } else if (this.isContextual("type")) {
          kind = "type";
        }
        if (kind) {
          const lh = this.lookahead();
          if (kind === "type" && lh.type === types.star) {
            this.unexpected(lh.start);
          }
          if (isMaybeDefaultImport(lh) || lh.type === types.braceL || lh.type === types.star) {
            this.next();
            node.importKind = kind;
          }
        }
        return super.maybeParseDefaultImportSpecifier(node);
      }
      parseImportSpecifier(node) {
        const specifier = this.startNode();
        const firstIdentLoc = this.state.start;
        const firstIdent = this.parseModuleExportName();
        let specifierTypeKind = null;
        if (firstIdent.type === "Identifier") {
          if (firstIdent.name === "type") {
            specifierTypeKind = "type";
          } else if (firstIdent.name === "typeof") {
            specifierTypeKind = "typeof";
          }
        }
        let isBinding = false;
        if (this.isContextual("as") && !this.isLookaheadContextual("as")) {
          const as_ident = this.parseIdentifier(true);
          if (specifierTypeKind !== null && !this.match(types.name) && !this.state.type.keyword) {
            specifier.imported = as_ident;
            specifier.importKind = specifierTypeKind;
            specifier.local = as_ident.__clone();
          } else {
            specifier.imported = firstIdent;
            specifier.importKind = null;
            specifier.local = this.parseIdentifier();
          }
        } else if (specifierTypeKind !== null && (this.match(types.name) || this.state.type.keyword)) {
          specifier.imported = this.parseIdentifier(true);
          specifier.importKind = specifierTypeKind;
          if (this.eatContextual("as")) {
            specifier.local = this.parseIdentifier();
          } else {
            isBinding = true;
            specifier.local = specifier.imported.__clone();
          }
        } else {
          if (firstIdent.type === "StringLiteral") {
            throw this.raise(specifier.start, ErrorMessages.ImportBindingIsString, firstIdent.value);
          }
          isBinding = true;
          specifier.imported = firstIdent;
          specifier.importKind = null;
          specifier.local = specifier.imported.__clone();
        }
        const nodeIsTypeImport = hasTypeImportKind(node);
        const specifierIsTypeImport = hasTypeImportKind(specifier);
        if (nodeIsTypeImport && specifierIsTypeImport) {
          this.raise(firstIdentLoc, FlowErrors.ImportTypeShorthandOnlyInPureImport);
        }
        if (nodeIsTypeImport || specifierIsTypeImport) {
          this.checkReservedType(specifier.local.name, specifier.local.start, true);
        }
        if (isBinding && !nodeIsTypeImport && !specifierIsTypeImport) {
          this.checkReservedWord(specifier.local.name, specifier.start, true, true);
        }
        this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
        node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
      }
      parseBindingAtom() {
        switch (this.state.type) {
          case types._this:
            return this.parseIdentifier(true);
          default:
            return super.parseBindingAtom();
        }
      }
      parseFunctionParams(node, allowModifiers) {
        const kind = node.kind;
        if (kind !== "get" && kind !== "set" && this.isRelational("<")) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        super.parseFunctionParams(node, allowModifiers);
      }
      parseVarId(decl, kind) {
        super.parseVarId(decl, kind);
        if (this.match(types.colon)) {
          decl.id.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(decl.id);
        }
      }
      parseAsyncArrowFromCallExpression(node, call) {
        if (this.match(types.colon)) {
          const oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          node.returnType = this.flowParseTypeAnnotation();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
        }
        return super.parseAsyncArrowFromCallExpression(node, call);
      }
      shouldParseAsyncArrow() {
        return this.match(types.colon) || super.shouldParseAsyncArrow();
      }
      parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
        var _jsx;
        let state = null;
        let jsx2;
        if (this.hasPlugin("jsx") && (this.match(types.jsxTagStart) || this.isRelational("<"))) {
          state = this.state.clone();
          jsx2 = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos), state);
          if (!jsx2.error)
            return jsx2.node;
          const {
            context
          } = this.state;
          if (context[context.length - 1] === types$1.j_oTag) {
            context.length -= 2;
          } else if (context[context.length - 1] === types$1.j_expr) {
            context.length -= 1;
          }
        }
        if (((_jsx = jsx2) == null ? void 0 : _jsx.error) || this.isRelational("<")) {
          var _jsx2, _jsx3;
          state = state || this.state.clone();
          let typeParameters;
          const arrow = this.tryParse((abort) => {
            var _arrowExpression$extr;
            typeParameters = this.flowParseTypeParameterDeclaration();
            const arrowExpression2 = this.forwardNoArrowParamsConversionAt(typeParameters, () => {
              const result = super.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos);
              this.resetStartLocationFromNode(result, typeParameters);
              return result;
            });
            if (arrowExpression2.type !== "ArrowFunctionExpression" && ((_arrowExpression$extr = arrowExpression2.extra) == null ? void 0 : _arrowExpression$extr.parenthesized)) {
              abort();
            }
            const expr = this.maybeUnwrapTypeCastExpression(arrowExpression2);
            expr.typeParameters = typeParameters;
            this.resetStartLocationFromNode(expr, typeParameters);
            return arrowExpression2;
          }, state);
          let arrowExpression = null;
          if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
            if (!arrow.error && !arrow.aborted) {
              if (arrow.node.async) {
                this.raise(typeParameters.start, FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction);
              }
              return arrow.node;
            }
            arrowExpression = arrow.node;
          }
          if ((_jsx2 = jsx2) == null ? void 0 : _jsx2.node) {
            this.state = jsx2.failState;
            return jsx2.node;
          }
          if (arrowExpression) {
            this.state = arrow.failState;
            return arrowExpression;
          }
          if ((_jsx3 = jsx2) == null ? void 0 : _jsx3.thrown)
            throw jsx2.error;
          if (arrow.thrown)
            throw arrow.error;
          throw this.raise(typeParameters.start, FlowErrors.UnexpectedTokenAfterTypeParameter);
        }
        return super.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos);
      }
      parseArrow(node) {
        if (this.match(types.colon)) {
          const result = this.tryParse(() => {
            const oldNoAnonFunctionType = this.state.noAnonFunctionType;
            this.state.noAnonFunctionType = true;
            const typeNode = this.startNode();
            [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (this.canInsertSemicolon())
              this.unexpected();
            if (!this.match(types.arrow))
              this.unexpected();
            return typeNode;
          });
          if (result.thrown)
            return null;
          if (result.error)
            this.state = result.failState;
          node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
        }
        return super.parseArrow(node);
      }
      shouldParseArrow() {
        return this.match(types.colon) || super.shouldParseArrow();
      }
      setArrowFunctionParameters(node, params) {
        if (this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
          node.params = params;
        } else {
          super.setArrowFunctionParameters(node, params);
        }
      }
      checkParams(node, allowDuplicates, isArrowFunction) {
        if (isArrowFunction && this.state.noArrowParamsConversionAt.indexOf(node.start) !== -1) {
          return;
        }
        for (let i = 0; i < node.params.length; i++) {
          if (this.isThisParam(node.params[i]) && i > 0) {
            this.raise(node.params[i].start, FlowErrors.ThisParamMustBeFirst);
          }
        }
        return super.checkParams(...arguments);
      }
      parseParenAndDistinguishExpression(canBeArrow) {
        return super.parseParenAndDistinguishExpression(canBeArrow && this.state.noArrowAt.indexOf(this.state.start) === -1);
      }
      parseSubscripts(base, startPos, startLoc, noCalls) {
        if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.indexOf(startPos) !== -1) {
          this.next();
          const node = this.startNodeAt(startPos, startLoc);
          node.callee = base;
          node.arguments = this.parseCallExpressionArguments(types.parenR, false);
          base = this.finishNode(node, "CallExpression");
        } else if (base.type === "Identifier" && base.name === "async" && this.isRelational("<")) {
          const state = this.state.clone();
          const arrow = this.tryParse((abort) => this.parseAsyncArrowWithTypeParameters(startPos, startLoc) || abort(), state);
          if (!arrow.error && !arrow.aborted)
            return arrow.node;
          const result = this.tryParse(() => super.parseSubscripts(base, startPos, startLoc, noCalls), state);
          if (result.node && !result.error)
            return result.node;
          if (arrow.node) {
            this.state = arrow.failState;
            return arrow.node;
          }
          if (result.node) {
            this.state = result.failState;
            return result.node;
          }
          throw arrow.error || result.error;
        }
        return super.parseSubscripts(base, startPos, startLoc, noCalls);
      }
      parseSubscript(base, startPos, startLoc, noCalls, subscriptState) {
        if (this.match(types.questionDot) && this.isLookaheadToken_lt()) {
          subscriptState.optionalChainMember = true;
          if (noCalls) {
            subscriptState.stop = true;
            return base;
          }
          this.next();
          const node = this.startNodeAt(startPos, startLoc);
          node.callee = base;
          node.typeArguments = this.flowParseTypeParameterInstantiation();
          this.expect(types.parenL);
          node.arguments = this.parseCallExpressionArguments(types.parenR, false);
          node.optional = true;
          return this.finishCallExpression(node, true);
        } else if (!noCalls && this.shouldParseTypes() && this.isRelational("<")) {
          const node = this.startNodeAt(startPos, startLoc);
          node.callee = base;
          const result = this.tryParse(() => {
            node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
            this.expect(types.parenL);
            node.arguments = this.parseCallExpressionArguments(types.parenR, false);
            if (subscriptState.optionalChainMember)
              node.optional = false;
            return this.finishCallExpression(node, subscriptState.optionalChainMember);
          });
          if (result.node) {
            if (result.error)
              this.state = result.failState;
            return result.node;
          }
        }
        return super.parseSubscript(base, startPos, startLoc, noCalls, subscriptState);
      }
      parseNewArguments(node) {
        let targs = null;
        if (this.shouldParseTypes() && this.isRelational("<")) {
          targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
        }
        node.typeArguments = targs;
        super.parseNewArguments(node);
      }
      parseAsyncArrowWithTypeParameters(startPos, startLoc) {
        const node = this.startNodeAt(startPos, startLoc);
        this.parseFunctionParams(node);
        if (!this.parseArrow(node))
          return;
        return this.parseArrowExpression(node, void 0, true);
      }
      readToken_mult_modulo(code) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (code === 42 && next === 47 && this.state.hasFlowComment) {
          this.state.hasFlowComment = false;
          this.state.pos += 2;
          this.nextToken();
          return;
        }
        super.readToken_mult_modulo(code);
      }
      readToken_pipe_amp(code) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (code === 124 && next === 125) {
          this.finishOp(types.braceBarR, 2);
          return;
        }
        super.readToken_pipe_amp(code);
      }
      parseTopLevel(file, program) {
        const fileNode = super.parseTopLevel(file, program);
        if (this.state.hasFlowComment) {
          this.raise(this.state.pos, FlowErrors.UnterminatedFlowComment);
        }
        return fileNode;
      }
      skipBlockComment() {
        if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
          if (this.state.hasFlowComment) {
            this.unexpected(null, FlowErrors.NestedFlowComment);
          }
          this.hasFlowCommentCompletion();
          this.state.pos += this.skipFlowComment();
          this.state.hasFlowComment = true;
          return;
        }
        if (this.state.hasFlowComment) {
          const end = this.input.indexOf("*-/", this.state.pos += 2);
          if (end === -1) {
            throw this.raise(this.state.pos - 2, ErrorMessages.UnterminatedComment);
          }
          this.state.pos = end + 3;
          return;
        }
        super.skipBlockComment();
      }
      skipFlowComment() {
        const {
          pos
        } = this.state;
        let shiftToFirstNonWhiteSpace = 2;
        while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
          shiftToFirstNonWhiteSpace++;
        }
        const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
        const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);
        if (ch2 === 58 && ch3 === 58) {
          return shiftToFirstNonWhiteSpace + 2;
        }
        if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
          return shiftToFirstNonWhiteSpace + 12;
        }
        if (ch2 === 58 && ch3 !== 58) {
          return shiftToFirstNonWhiteSpace;
        }
        return false;
      }
      hasFlowCommentCompletion() {
        const end = this.input.indexOf("*/", this.state.pos);
        if (end === -1) {
          throw this.raise(this.state.pos, ErrorMessages.UnterminatedComment);
        }
      }
      flowEnumErrorBooleanMemberNotInitialized(pos, {
        enumName,
        memberName
      }) {
        this.raise(pos, FlowErrors.EnumBooleanMemberNotInitialized, memberName, enumName);
      }
      flowEnumErrorInvalidMemberName(pos, {
        enumName,
        memberName
      }) {
        const suggestion = memberName[0].toUpperCase() + memberName.slice(1);
        this.raise(pos, FlowErrors.EnumInvalidMemberName, memberName, suggestion, enumName);
      }
      flowEnumErrorDuplicateMemberName(pos, {
        enumName,
        memberName
      }) {
        this.raise(pos, FlowErrors.EnumDuplicateMemberName, memberName, enumName);
      }
      flowEnumErrorInconsistentMemberValues(pos, {
        enumName
      }) {
        this.raise(pos, FlowErrors.EnumInconsistentMemberValues, enumName);
      }
      flowEnumErrorInvalidExplicitType(pos, {
        enumName,
        suppliedType
      }) {
        return this.raise(pos, suppliedType === null ? FlowErrors.EnumInvalidExplicitTypeUnknownSupplied : FlowErrors.EnumInvalidExplicitType, enumName, suppliedType);
      }
      flowEnumErrorInvalidMemberInitializer(pos, {
        enumName,
        explicitType,
        memberName
      }) {
        let message = null;
        switch (explicitType) {
          case "boolean":
          case "number":
          case "string":
            message = FlowErrors.EnumInvalidMemberInitializerPrimaryType;
            break;
          case "symbol":
            message = FlowErrors.EnumInvalidMemberInitializerSymbolType;
            break;
          default:
            message = FlowErrors.EnumInvalidMemberInitializerUnknownType;
        }
        return this.raise(pos, message, enumName, memberName, explicitType);
      }
      flowEnumErrorNumberMemberNotInitialized(pos, {
        enumName,
        memberName
      }) {
        this.raise(pos, FlowErrors.EnumNumberMemberNotInitialized, enumName, memberName);
      }
      flowEnumErrorStringMemberInconsistentlyInitailized(pos, {
        enumName
      }) {
        this.raise(pos, FlowErrors.EnumStringMemberInconsistentlyInitailized, enumName);
      }
      flowEnumMemberInit() {
        const startPos = this.state.start;
        const endOfInit = () => this.match(types.comma) || this.match(types.braceR);
        switch (this.state.type) {
          case types.num: {
            const literal = this.parseLiteral(this.state.value, "NumericLiteral");
            if (endOfInit()) {
              return {
                type: "number",
                pos: literal.start,
                value: literal
              };
            }
            return {
              type: "invalid",
              pos: startPos
            };
          }
          case types.string: {
            const literal = this.parseLiteral(this.state.value, "StringLiteral");
            if (endOfInit()) {
              return {
                type: "string",
                pos: literal.start,
                value: literal
              };
            }
            return {
              type: "invalid",
              pos: startPos
            };
          }
          case types._true:
          case types._false: {
            const literal = this.parseBooleanLiteral();
            if (endOfInit()) {
              return {
                type: "boolean",
                pos: literal.start,
                value: literal
              };
            }
            return {
              type: "invalid",
              pos: startPos
            };
          }
          default:
            return {
              type: "invalid",
              pos: startPos
            };
        }
      }
      flowEnumMemberRaw() {
        const pos = this.state.start;
        const id = this.parseIdentifier(true);
        const init = this.eat(types.eq) ? this.flowEnumMemberInit() : {
          type: "none",
          pos
        };
        return {
          id,
          init
        };
      }
      flowEnumCheckExplicitTypeMismatch(pos, context, expectedType) {
        const {
          explicitType
        } = context;
        if (explicitType === null) {
          return;
        }
        if (explicitType !== expectedType) {
          this.flowEnumErrorInvalidMemberInitializer(pos, context);
        }
      }
      flowEnumMembers({
        enumName,
        explicitType
      }) {
        const seenNames = new Set();
        const members = {
          booleanMembers: [],
          numberMembers: [],
          stringMembers: [],
          defaultedMembers: []
        };
        let hasUnknownMembers = false;
        while (!this.match(types.braceR)) {
          if (this.eat(types.ellipsis)) {
            hasUnknownMembers = true;
            break;
          }
          const memberNode = this.startNode();
          const {
            id,
            init
          } = this.flowEnumMemberRaw();
          const memberName = id.name;
          if (memberName === "") {
            continue;
          }
          if (/^[a-z]/.test(memberName)) {
            this.flowEnumErrorInvalidMemberName(id.start, {
              enumName,
              memberName
            });
          }
          if (seenNames.has(memberName)) {
            this.flowEnumErrorDuplicateMemberName(id.start, {
              enumName,
              memberName
            });
          }
          seenNames.add(memberName);
          const context = {
            enumName,
            explicitType,
            memberName
          };
          memberNode.id = id;
          switch (init.type) {
            case "boolean": {
              this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "boolean");
              memberNode.init = init.value;
              members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
              break;
            }
            case "number": {
              this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "number");
              memberNode.init = init.value;
              members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
              break;
            }
            case "string": {
              this.flowEnumCheckExplicitTypeMismatch(init.pos, context, "string");
              memberNode.init = init.value;
              members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
              break;
            }
            case "invalid": {
              throw this.flowEnumErrorInvalidMemberInitializer(init.pos, context);
            }
            case "none": {
              switch (explicitType) {
                case "boolean":
                  this.flowEnumErrorBooleanMemberNotInitialized(init.pos, context);
                  break;
                case "number":
                  this.flowEnumErrorNumberMemberNotInitialized(init.pos, context);
                  break;
                default:
                  members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
              }
            }
          }
          if (!this.match(types.braceR)) {
            this.expect(types.comma);
          }
        }
        return {
          members,
          hasUnknownMembers
        };
      }
      flowEnumStringMembers(initializedMembers, defaultedMembers, {
        enumName
      }) {
        if (initializedMembers.length === 0) {
          return defaultedMembers;
        } else if (defaultedMembers.length === 0) {
          return initializedMembers;
        } else if (defaultedMembers.length > initializedMembers.length) {
          for (let _i = 0; _i < initializedMembers.length; _i++) {
            const member = initializedMembers[_i];
            this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
              enumName
            });
          }
          return defaultedMembers;
        } else {
          for (let _i2 = 0; _i2 < defaultedMembers.length; _i2++) {
            const member = defaultedMembers[_i2];
            this.flowEnumErrorStringMemberInconsistentlyInitailized(member.start, {
              enumName
            });
          }
          return initializedMembers;
        }
      }
      flowEnumParseExplicitType({
        enumName
      }) {
        if (this.eatContextual("of")) {
          if (!this.match(types.name)) {
            throw this.flowEnumErrorInvalidExplicitType(this.state.start, {
              enumName,
              suppliedType: null
            });
          }
          const {
            value
          } = this.state;
          this.next();
          if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
            this.flowEnumErrorInvalidExplicitType(this.state.start, {
              enumName,
              suppliedType: value
            });
          }
          return value;
        }
        return null;
      }
      flowEnumBody(node, {
        enumName,
        nameLoc
      }) {
        const explicitType = this.flowEnumParseExplicitType({
          enumName
        });
        this.expect(types.braceL);
        const {
          members,
          hasUnknownMembers
        } = this.flowEnumMembers({
          enumName,
          explicitType
        });
        node.hasUnknownMembers = hasUnknownMembers;
        switch (explicitType) {
          case "boolean":
            node.explicitType = true;
            node.members = members.booleanMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumBooleanBody");
          case "number":
            node.explicitType = true;
            node.members = members.numberMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumNumberBody");
          case "string":
            node.explicitType = true;
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName
            });
            this.expect(types.braceR);
            return this.finishNode(node, "EnumStringBody");
          case "symbol":
            node.members = members.defaultedMembers;
            this.expect(types.braceR);
            return this.finishNode(node, "EnumSymbolBody");
          default: {
            const empty = () => {
              node.members = [];
              this.expect(types.braceR);
              return this.finishNode(node, "EnumStringBody");
            };
            node.explicitType = false;
            const boolsLen = members.booleanMembers.length;
            const numsLen = members.numberMembers.length;
            const strsLen = members.stringMembers.length;
            const defaultedLen = members.defaultedMembers.length;
            if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
              return empty();
            } else if (!boolsLen && !numsLen) {
              node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
                enumName
              });
              this.expect(types.braceR);
              return this.finishNode(node, "EnumStringBody");
            } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
              for (let _i3 = 0, _members$defaultedMem = members.defaultedMembers; _i3 < _members$defaultedMem.length; _i3++) {
                const member = _members$defaultedMem[_i3];
                this.flowEnumErrorBooleanMemberNotInitialized(member.start, {
                  enumName,
                  memberName: member.id.name
                });
              }
              node.members = members.booleanMembers;
              this.expect(types.braceR);
              return this.finishNode(node, "EnumBooleanBody");
            } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
              for (let _i4 = 0, _members$defaultedMem2 = members.defaultedMembers; _i4 < _members$defaultedMem2.length; _i4++) {
                const member = _members$defaultedMem2[_i4];
                this.flowEnumErrorNumberMemberNotInitialized(member.start, {
                  enumName,
                  memberName: member.id.name
                });
              }
              node.members = members.numberMembers;
              this.expect(types.braceR);
              return this.finishNode(node, "EnumNumberBody");
            } else {
              this.flowEnumErrorInconsistentMemberValues(nameLoc, {
                enumName
              });
              return empty();
            }
          }
        }
      }
      flowParseEnumDeclaration(node) {
        const id = this.parseIdentifier();
        node.id = id;
        node.body = this.flowEnumBody(this.startNode(), {
          enumName: id.name,
          nameLoc: id.start
        });
        return this.finishNode(node, "EnumDeclaration");
      }
      updateContext(prevType) {
        if (this.match(types.name) && this.state.value === "of" && prevType === types.name && this.input.slice(this.state.lastTokStart, this.state.lastTokEnd) === "interface") {
          this.state.exprAllowed = false;
        } else {
          super.updateContext(prevType);
        }
      }
      isLookaheadToken_lt() {
        const next = this.nextTokenStart();
        if (this.input.charCodeAt(next) === 60) {
          const afterNext = this.input.charCodeAt(next + 1);
          return afterNext !== 60 && afterNext !== 61;
        }
        return false;
      }
      maybeUnwrapTypeCastExpression(node) {
        return node.type === "TypeCastExpression" ? node.expression : node;
      }
    }, _temp;
  };
  var entities = {
    quot: '"',
    amp: "&",
    apos: "'",
    lt: "<",
    gt: ">",
    nbsp: "\xA0",
    iexcl: "\xA1",
    cent: "\xA2",
    pound: "\xA3",
    curren: "\xA4",
    yen: "\xA5",
    brvbar: "\xA6",
    sect: "\xA7",
    uml: "\xA8",
    copy: "\xA9",
    ordf: "\xAA",
    laquo: "\xAB",
    not: "\xAC",
    shy: "\xAD",
    reg: "\xAE",
    macr: "\xAF",
    deg: "\xB0",
    plusmn: "\xB1",
    sup2: "\xB2",
    sup3: "\xB3",
    acute: "\xB4",
    micro: "\xB5",
    para: "\xB6",
    middot: "\xB7",
    cedil: "\xB8",
    sup1: "\xB9",
    ordm: "\xBA",
    raquo: "\xBB",
    frac14: "\xBC",
    frac12: "\xBD",
    frac34: "\xBE",
    iquest: "\xBF",
    Agrave: "\xC0",
    Aacute: "\xC1",
    Acirc: "\xC2",
    Atilde: "\xC3",
    Auml: "\xC4",
    Aring: "\xC5",
    AElig: "\xC6",
    Ccedil: "\xC7",
    Egrave: "\xC8",
    Eacute: "\xC9",
    Ecirc: "\xCA",
    Euml: "\xCB",
    Igrave: "\xCC",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Iuml: "\xCF",
    ETH: "\xD0",
    Ntilde: "\xD1",
    Ograve: "\xD2",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Otilde: "\xD5",
    Ouml: "\xD6",
    times: "\xD7",
    Oslash: "\xD8",
    Ugrave: "\xD9",
    Uacute: "\xDA",
    Ucirc: "\xDB",
    Uuml: "\xDC",
    Yacute: "\xDD",
    THORN: "\xDE",
    szlig: "\xDF",
    agrave: "\xE0",
    aacute: "\xE1",
    acirc: "\xE2",
    atilde: "\xE3",
    auml: "\xE4",
    aring: "\xE5",
    aelig: "\xE6",
    ccedil: "\xE7",
    egrave: "\xE8",
    eacute: "\xE9",
    ecirc: "\xEA",
    euml: "\xEB",
    igrave: "\xEC",
    iacute: "\xED",
    icirc: "\xEE",
    iuml: "\xEF",
    eth: "\xF0",
    ntilde: "\xF1",
    ograve: "\xF2",
    oacute: "\xF3",
    ocirc: "\xF4",
    otilde: "\xF5",
    ouml: "\xF6",
    divide: "\xF7",
    oslash: "\xF8",
    ugrave: "\xF9",
    uacute: "\xFA",
    ucirc: "\xFB",
    uuml: "\xFC",
    yacute: "\xFD",
    thorn: "\xFE",
    yuml: "\xFF",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    fnof: "\u0192",
    circ: "\u02C6",
    tilde: "\u02DC",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    bull: "\u2022",
    hellip: "\u2026",
    permil: "\u2030",
    prime: "\u2032",
    Prime: "\u2033",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    oline: "\u203E",
    frasl: "\u2044",
    euro: "\u20AC",
    image: "\u2111",
    weierp: "\u2118",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    int: "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666"
  };
  var HEX_NUMBER = /^[\da-fA-F]+$/;
  var DECIMAL_NUMBER = /^\d+$/;
  var JsxErrors = Object.freeze({
    AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression",
    MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>",
    MissingClosingTagElement: "Expected corresponding JSX closing tag for <%0>",
    UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
    UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text",
    UnterminatedJsxContent: "Unterminated JSX contents",
    UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
  });
  types$1.j_oTag = new TokContext("<tag", false);
  types$1.j_cTag = new TokContext("</tag", false);
  types$1.j_expr = new TokContext("<tag>...</tag>", true, true);
  types.jsxName = new TokenType("jsxName");
  types.jsxText = new TokenType("jsxText", {
    beforeExpr: true
  });
  types.jsxTagStart = new TokenType("jsxTagStart", {
    startsExpr: true
  });
  types.jsxTagEnd = new TokenType("jsxTagEnd");
  types.jsxTagStart.updateContext = function() {
    this.state.context.push(types$1.j_expr);
    this.state.context.push(types$1.j_oTag);
    this.state.exprAllowed = false;
  };
  types.jsxTagEnd.updateContext = function(prevType) {
    const out = this.state.context.pop();
    if (out === types$1.j_oTag && prevType === types.slash || out === types$1.j_cTag) {
      this.state.context.pop();
      this.state.exprAllowed = this.curContext() === types$1.j_expr;
    } else {
      this.state.exprAllowed = true;
    }
  };
  function isFragment(object) {
    return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
  }
  function getQualifiedJSXName(object) {
    if (object.type === "JSXIdentifier") {
      return object.name;
    }
    if (object.type === "JSXNamespacedName") {
      return object.namespace.name + ":" + object.name.name;
    }
    if (object.type === "JSXMemberExpression") {
      return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
    }
    throw new Error("Node had unexpected type: " + object.type);
  }
  var jsx = (superClass) => class extends superClass {
    jsxReadToken() {
      let out = "";
      let chunkStart = this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, JsxErrors.UnterminatedJsxContent);
        }
        const ch = this.input.charCodeAt(this.state.pos);
        switch (ch) {
          case 60:
          case 123:
            if (this.state.pos === this.state.start) {
              if (ch === 60 && this.state.exprAllowed) {
                ++this.state.pos;
                return this.finishToken(types.jsxTagStart);
              }
              return super.getTokenFromCode(ch);
            }
            out += this.input.slice(chunkStart, this.state.pos);
            return this.finishToken(types.jsxText, out);
          case 38:
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadEntity();
            chunkStart = this.state.pos;
            break;
          case 62:
          case 125:
          default:
            if (isNewLine(ch)) {
              out += this.input.slice(chunkStart, this.state.pos);
              out += this.jsxReadNewLine(true);
              chunkStart = this.state.pos;
            } else {
              ++this.state.pos;
            }
        }
      }
    }
    jsxReadNewLine(normalizeCRLF) {
      const ch = this.input.charCodeAt(this.state.pos);
      let out;
      ++this.state.pos;
      if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
        ++this.state.pos;
        out = normalizeCRLF ? "\n" : "\r\n";
      } else {
        out = String.fromCharCode(ch);
      }
      ++this.state.curLine;
      this.state.lineStart = this.state.pos;
      return out;
    }
    jsxReadString(quote) {
      let out = "";
      let chunkStart = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
        }
        const ch = this.input.charCodeAt(this.state.pos);
        if (ch === quote)
          break;
        if (ch === 38) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadEntity();
          chunkStart = this.state.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.jsxReadNewLine(false);
          chunkStart = this.state.pos;
        } else {
          ++this.state.pos;
        }
      }
      out += this.input.slice(chunkStart, this.state.pos++);
      return this.finishToken(types.string, out);
    }
    jsxReadEntity() {
      let str = "";
      let count = 0;
      let entity;
      let ch = this.input[this.state.pos];
      const startPos = ++this.state.pos;
      while (this.state.pos < this.length && count++ < 10) {
        ch = this.input[this.state.pos++];
        if (ch === ";") {
          if (str[0] === "#") {
            if (str[1] === "x") {
              str = str.substr(2);
              if (HEX_NUMBER.test(str)) {
                entity = String.fromCodePoint(parseInt(str, 16));
              }
            } else {
              str = str.substr(1);
              if (DECIMAL_NUMBER.test(str)) {
                entity = String.fromCodePoint(parseInt(str, 10));
              }
            }
          } else {
            entity = entities[str];
          }
          break;
        }
        str += ch;
      }
      if (!entity) {
        this.state.pos = startPos;
        return "&";
      }
      return entity;
    }
    jsxReadWord() {
      let ch;
      const start = this.state.pos;
      do {
        ch = this.input.charCodeAt(++this.state.pos);
      } while (isIdentifierChar(ch) || ch === 45);
      return this.finishToken(types.jsxName, this.input.slice(start, this.state.pos));
    }
    jsxParseIdentifier() {
      const node = this.startNode();
      if (this.match(types.jsxName)) {
        node.name = this.state.value;
      } else if (this.state.type.keyword) {
        node.name = this.state.type.keyword;
      } else {
        this.unexpected();
      }
      this.next();
      return this.finishNode(node, "JSXIdentifier");
    }
    jsxParseNamespacedName() {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const name = this.jsxParseIdentifier();
      if (!this.eat(types.colon))
        return name;
      const node = this.startNodeAt(startPos, startLoc);
      node.namespace = name;
      node.name = this.jsxParseIdentifier();
      return this.finishNode(node, "JSXNamespacedName");
    }
    jsxParseElementName() {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let node = this.jsxParseNamespacedName();
      if (node.type === "JSXNamespacedName") {
        return node;
      }
      while (this.eat(types.dot)) {
        const newNode = this.startNodeAt(startPos, startLoc);
        newNode.object = node;
        newNode.property = this.jsxParseIdentifier();
        node = this.finishNode(newNode, "JSXMemberExpression");
      }
      return node;
    }
    jsxParseAttributeValue() {
      let node;
      switch (this.state.type) {
        case types.braceL:
          node = this.startNode();
          this.next();
          node = this.jsxParseExpressionContainer(node);
          if (node.expression.type === "JSXEmptyExpression") {
            this.raise(node.start, JsxErrors.AttributeIsEmpty);
          }
          return node;
        case types.jsxTagStart:
        case types.string:
          return this.parseExprAtom();
        default:
          throw this.raise(this.state.start, JsxErrors.UnsupportedJsxValue);
      }
    }
    jsxParseEmptyExpression() {
      const node = this.startNodeAt(this.state.lastTokEnd, this.state.lastTokEndLoc);
      return this.finishNodeAt(node, "JSXEmptyExpression", this.state.start, this.state.startLoc);
    }
    jsxParseSpreadChild(node) {
      this.next();
      node.expression = this.parseExpression();
      this.expect(types.braceR);
      return this.finishNode(node, "JSXSpreadChild");
    }
    jsxParseExpressionContainer(node) {
      if (this.match(types.braceR)) {
        node.expression = this.jsxParseEmptyExpression();
      } else {
        const expression = this.parseExpression();
        node.expression = expression;
      }
      this.expect(types.braceR);
      return this.finishNode(node, "JSXExpressionContainer");
    }
    jsxParseAttribute() {
      const node = this.startNode();
      if (this.eat(types.braceL)) {
        this.expect(types.ellipsis);
        node.argument = this.parseMaybeAssignAllowIn();
        this.expect(types.braceR);
        return this.finishNode(node, "JSXSpreadAttribute");
      }
      node.name = this.jsxParseNamespacedName();
      node.value = this.eat(types.eq) ? this.jsxParseAttributeValue() : null;
      return this.finishNode(node, "JSXAttribute");
    }
    jsxParseOpeningElementAt(startPos, startLoc) {
      const node = this.startNodeAt(startPos, startLoc);
      if (this.match(types.jsxTagEnd)) {
        this.expect(types.jsxTagEnd);
        return this.finishNode(node, "JSXOpeningFragment");
      }
      node.name = this.jsxParseElementName();
      return this.jsxParseOpeningElementAfterName(node);
    }
    jsxParseOpeningElementAfterName(node) {
      const attributes = [];
      while (!this.match(types.slash) && !this.match(types.jsxTagEnd)) {
        attributes.push(this.jsxParseAttribute());
      }
      node.attributes = attributes;
      node.selfClosing = this.eat(types.slash);
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXOpeningElement");
    }
    jsxParseClosingElementAt(startPos, startLoc) {
      const node = this.startNodeAt(startPos, startLoc);
      if (this.match(types.jsxTagEnd)) {
        this.expect(types.jsxTagEnd);
        return this.finishNode(node, "JSXClosingFragment");
      }
      node.name = this.jsxParseElementName();
      this.expect(types.jsxTagEnd);
      return this.finishNode(node, "JSXClosingElement");
    }
    jsxParseElementAt(startPos, startLoc) {
      const node = this.startNodeAt(startPos, startLoc);
      const children = [];
      const openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
      let closingElement = null;
      if (!openingElement.selfClosing) {
        contents:
          for (; ; ) {
            switch (this.state.type) {
              case types.jsxTagStart:
                startPos = this.state.start;
                startLoc = this.state.startLoc;
                this.next();
                if (this.eat(types.slash)) {
                  closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
                  break contents;
                }
                children.push(this.jsxParseElementAt(startPos, startLoc));
                break;
              case types.jsxText:
                children.push(this.parseExprAtom());
                break;
              case types.braceL: {
                const node2 = this.startNode();
                this.next();
                if (this.match(types.ellipsis)) {
                  children.push(this.jsxParseSpreadChild(node2));
                } else {
                  children.push(this.jsxParseExpressionContainer(node2));
                }
                break;
              }
              default:
                throw this.unexpected();
            }
          }
        if (isFragment(openingElement) && !isFragment(closingElement)) {
          this.raise(closingElement.start, JsxErrors.MissingClosingTagFragment);
        } else if (!isFragment(openingElement) && isFragment(closingElement)) {
          this.raise(closingElement.start, JsxErrors.MissingClosingTagElement, getQualifiedJSXName(openingElement.name));
        } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
          if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
            this.raise(closingElement.start, JsxErrors.MissingClosingTagElement, getQualifiedJSXName(openingElement.name));
          }
        }
      }
      if (isFragment(openingElement)) {
        node.openingFragment = openingElement;
        node.closingFragment = closingElement;
      } else {
        node.openingElement = openingElement;
        node.closingElement = closingElement;
      }
      node.children = children;
      if (this.isRelational("<")) {
        throw this.raise(this.state.start, JsxErrors.UnwrappedAdjacentJSXElements);
      }
      return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
    }
    jsxParseElement() {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      this.next();
      return this.jsxParseElementAt(startPos, startLoc);
    }
    parseExprAtom(refExpressionErrors) {
      if (this.match(types.jsxText)) {
        return this.parseLiteral(this.state.value, "JSXText");
      } else if (this.match(types.jsxTagStart)) {
        return this.jsxParseElement();
      } else if (this.isRelational("<") && this.input.charCodeAt(this.state.pos) !== 33) {
        this.finishToken(types.jsxTagStart);
        return this.jsxParseElement();
      } else {
        return super.parseExprAtom(refExpressionErrors);
      }
    }
    getTokenFromCode(code) {
      if (this.state.inPropertyName)
        return super.getTokenFromCode(code);
      const context = this.curContext();
      if (context === types$1.j_expr) {
        return this.jsxReadToken();
      }
      if (context === types$1.j_oTag || context === types$1.j_cTag) {
        if (isIdentifierStart(code)) {
          return this.jsxReadWord();
        }
        if (code === 62) {
          ++this.state.pos;
          return this.finishToken(types.jsxTagEnd);
        }
        if ((code === 34 || code === 39) && context === types$1.j_oTag) {
          return this.jsxReadString(code);
        }
      }
      if (code === 60 && this.state.exprAllowed && this.input.charCodeAt(this.state.pos + 1) !== 33) {
        ++this.state.pos;
        return this.finishToken(types.jsxTagStart);
      }
      return super.getTokenFromCode(code);
    }
    updateContext(prevType) {
      if (this.match(types.braceL)) {
        const curContext = this.curContext();
        if (curContext === types$1.j_oTag) {
          this.state.context.push(types$1.braceExpression);
        } else if (curContext === types$1.j_expr) {
          this.state.context.push(types$1.templateQuasi);
        } else {
          super.updateContext(prevType);
        }
        this.state.exprAllowed = true;
      } else if (this.match(types.slash) && prevType === types.jsxTagStart) {
        this.state.context.length -= 2;
        this.state.context.push(types$1.j_cTag);
        this.state.exprAllowed = false;
      } else {
        return super.updateContext(prevType);
      }
    }
  };
  var TypeScriptScope = class extends Scope {
    constructor(...args) {
      super(...args);
      this.types = [];
      this.enums = [];
      this.constEnums = [];
      this.classes = [];
      this.exportOnlyBindings = [];
    }
  };
  var TypeScriptScopeHandler = class extends ScopeHandler {
    createScope(flags) {
      return new TypeScriptScope(flags);
    }
    declareName(name, bindingType, pos) {
      const scope = this.currentScope();
      if (bindingType & BIND_FLAGS_TS_EXPORT_ONLY) {
        this.maybeExportDefined(scope, name);
        scope.exportOnlyBindings.push(name);
        return;
      }
      super.declareName(...arguments);
      if (bindingType & BIND_KIND_TYPE) {
        if (!(bindingType & BIND_KIND_VALUE)) {
          this.checkRedeclarationInScope(scope, name, bindingType, pos);
          this.maybeExportDefined(scope, name);
        }
        scope.types.push(name);
      }
      if (bindingType & BIND_FLAGS_TS_ENUM)
        scope.enums.push(name);
      if (bindingType & BIND_FLAGS_TS_CONST_ENUM)
        scope.constEnums.push(name);
      if (bindingType & BIND_FLAGS_CLASS)
        scope.classes.push(name);
    }
    isRedeclaredInScope(scope, name, bindingType) {
      if (scope.enums.indexOf(name) > -1) {
        if (bindingType & BIND_FLAGS_TS_ENUM) {
          const isConst = !!(bindingType & BIND_FLAGS_TS_CONST_ENUM);
          const wasConst = scope.constEnums.indexOf(name) > -1;
          return isConst !== wasConst;
        }
        return true;
      }
      if (bindingType & BIND_FLAGS_CLASS && scope.classes.indexOf(name) > -1) {
        if (scope.lexical.indexOf(name) > -1) {
          return !!(bindingType & BIND_KIND_VALUE);
        } else {
          return false;
        }
      }
      if (bindingType & BIND_KIND_TYPE && scope.types.indexOf(name) > -1) {
        return true;
      }
      return super.isRedeclaredInScope(...arguments);
    }
    checkLocalExport(id) {
      if (this.scopeStack[0].types.indexOf(id.name) === -1 && this.scopeStack[0].exportOnlyBindings.indexOf(id.name) === -1) {
        super.checkLocalExport(id);
      }
    }
  };
  var PARAM = 0;
  var PARAM_YIELD = 1;
  var PARAM_AWAIT = 2;
  var PARAM_RETURN = 4;
  var PARAM_IN = 8;
  var ProductionParameterHandler = class {
    constructor() {
      this.stacks = [];
    }
    enter(flags) {
      this.stacks.push(flags);
    }
    exit() {
      this.stacks.pop();
    }
    currentFlags() {
      return this.stacks[this.stacks.length - 1];
    }
    get hasAwait() {
      return (this.currentFlags() & PARAM_AWAIT) > 0;
    }
    get hasYield() {
      return (this.currentFlags() & PARAM_YIELD) > 0;
    }
    get hasReturn() {
      return (this.currentFlags() & PARAM_RETURN) > 0;
    }
    get hasIn() {
      return (this.currentFlags() & PARAM_IN) > 0;
    }
  };
  function functionFlags(isAsync, isGenerator) {
    return (isAsync ? PARAM_AWAIT : 0) | (isGenerator ? PARAM_YIELD : 0);
  }
  function nonNull(x) {
    if (x == null) {
      throw new Error(`Unexpected ${x} value.`);
    }
    return x;
  }
  function assert(x) {
    if (!x) {
      throw new Error("Assert fail");
    }
  }
  var TSErrors = Object.freeze({
    ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier",
    ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier",
    ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
    DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
    DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
    DuplicateModifier: "Duplicate modifier: '%0'",
    DuplicateAccessibilityModifier: "Accessibility modifier already seen.",
    EmptyHeritageClauseType: "'%0' list cannot be empty.",
    EmptyTypeArguments: "Type argument list cannot be empty.",
    EmptyTypeParameters: "Type parameter list cannot be empty.",
    ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
    IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier",
    IndexSignatureHasAccessibility: "Index signatures cannot have an accessibility modifier ('%0')",
    IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier",
    IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier",
    InvalidModifierOnTypeMember: "'%0' modifier cannot appear on a type member.",
    InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
    MixedLabeledAndUnlabeledElements: "Tuple members must all have names or all not have names.",
    NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
    NonClassMethodPropertyHasAbstractModifer: "'abstract' modifier can only appear on a class, method, or property declaration.",
    OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
    PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
    PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
    PrivateElementHasAccessibility: "Private elements cannot have an accessibility modifier ('%0')",
    ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
    TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`",
    UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
    UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
    UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
    UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
    UnsupportedImportTypeArgument: "Argument in a type import must be a string literal",
    UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
    UnsupportedSignatureParameterKind: "Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got %0"
  });
  function keywordTypeFromName(value) {
    switch (value) {
      case "any":
        return "TSAnyKeyword";
      case "boolean":
        return "TSBooleanKeyword";
      case "bigint":
        return "TSBigIntKeyword";
      case "never":
        return "TSNeverKeyword";
      case "number":
        return "TSNumberKeyword";
      case "object":
        return "TSObjectKeyword";
      case "string":
        return "TSStringKeyword";
      case "symbol":
        return "TSSymbolKeyword";
      case "undefined":
        return "TSUndefinedKeyword";
      case "unknown":
        return "TSUnknownKeyword";
      default:
        return void 0;
    }
  }
  function tsIsAccessModifier(modifier) {
    return modifier === "private" || modifier === "public" || modifier === "protected";
  }
  var typescript = (superClass) => class extends superClass {
    getScopeHandler() {
      return TypeScriptScopeHandler;
    }
    tsIsIdentifier() {
      return this.match(types.name);
    }
    tsNextTokenCanFollowModifier() {
      this.next();
      return (this.match(types.bracketL) || this.match(types.braceL) || this.match(types.star) || this.match(types.ellipsis) || this.match(types.hash) || this.isLiteralPropertyName()) && !this.hasPrecedingLineBreak();
    }
    tsParseModifier(allowedModifiers) {
      if (!this.match(types.name)) {
        return void 0;
      }
      const modifier = this.state.value;
      if (allowedModifiers.indexOf(modifier) !== -1 && this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
        return modifier;
      }
      return void 0;
    }
    tsParseModifiers(modified, allowedModifiers, disallowedModifiers, errorTemplate) {
      for (; ; ) {
        const startPos = this.state.start;
        const modifier = this.tsParseModifier(allowedModifiers.concat(disallowedModifiers != null ? disallowedModifiers : []));
        if (!modifier)
          break;
        if (tsIsAccessModifier(modifier)) {
          if (modified.accessibility) {
            this.raise(startPos, TSErrors.DuplicateAccessibilityModifier);
          } else {
            modified.accessibility = modifier;
          }
        } else {
          if (Object.hasOwnProperty.call(modified, modifier)) {
            this.raise(startPos, TSErrors.DuplicateModifier, modifier);
          }
          modified[modifier] = true;
        }
        if (disallowedModifiers == null ? void 0 : disallowedModifiers.includes(modifier)) {
          this.raise(startPos, errorTemplate, modifier);
        }
      }
    }
    tsIsListTerminator(kind) {
      switch (kind) {
        case "EnumMembers":
        case "TypeMembers":
          return this.match(types.braceR);
        case "HeritageClauseElement":
          return this.match(types.braceL);
        case "TupleElementTypes":
          return this.match(types.bracketR);
        case "TypeParametersOrArguments":
          return this.isRelational(">");
      }
      throw new Error("Unreachable");
    }
    tsParseList(kind, parseElement) {
      const result = [];
      while (!this.tsIsListTerminator(kind)) {
        result.push(parseElement());
      }
      return result;
    }
    tsParseDelimitedList(kind, parseElement) {
      return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true));
    }
    tsParseDelimitedListWorker(kind, parseElement, expectSuccess) {
      const result = [];
      for (; ; ) {
        if (this.tsIsListTerminator(kind)) {
          break;
        }
        const element = parseElement();
        if (element == null) {
          return void 0;
        }
        result.push(element);
        if (this.eat(types.comma)) {
          continue;
        }
        if (this.tsIsListTerminator(kind)) {
          break;
        }
        if (expectSuccess) {
          this.expect(types.comma);
        }
        return void 0;
      }
      return result;
    }
    tsParseBracketedList(kind, parseElement, bracket, skipFirstToken) {
      if (!skipFirstToken) {
        if (bracket) {
          this.expect(types.bracketL);
        } else {
          this.expectRelational("<");
        }
      }
      const result = this.tsParseDelimitedList(kind, parseElement);
      if (bracket) {
        this.expect(types.bracketR);
      } else {
        this.expectRelational(">");
      }
      return result;
    }
    tsParseImportType() {
      const node = this.startNode();
      this.expect(types._import);
      this.expect(types.parenL);
      if (!this.match(types.string)) {
        this.raise(this.state.start, TSErrors.UnsupportedImportTypeArgument);
      }
      node.argument = this.parseExprAtom();
      this.expect(types.parenR);
      if (this.eat(types.dot)) {
        node.qualifier = this.tsParseEntityName(true);
      }
      if (this.isRelational("<")) {
        node.typeParameters = this.tsParseTypeArguments();
      }
      return this.finishNode(node, "TSImportType");
    }
    tsParseEntityName(allowReservedWords) {
      let entity = this.parseIdentifier();
      while (this.eat(types.dot)) {
        const node = this.startNodeAtNode(entity);
        node.left = entity;
        node.right = this.parseIdentifier(allowReservedWords);
        entity = this.finishNode(node, "TSQualifiedName");
      }
      return entity;
    }
    tsParseTypeReference() {
      const node = this.startNode();
      node.typeName = this.tsParseEntityName(false);
      if (!this.hasPrecedingLineBreak() && this.isRelational("<")) {
        node.typeParameters = this.tsParseTypeArguments();
      }
      return this.finishNode(node, "TSTypeReference");
    }
    tsParseThisTypePredicate(lhs) {
      this.next();
      const node = this.startNodeAtNode(lhs);
      node.parameterName = lhs;
      node.typeAnnotation = this.tsParseTypeAnnotation(false);
      node.asserts = false;
      return this.finishNode(node, "TSTypePredicate");
    }
    tsParseThisTypeNode() {
      const node = this.startNode();
      this.next();
      return this.finishNode(node, "TSThisType");
    }
    tsParseTypeQuery() {
      const node = this.startNode();
      this.expect(types._typeof);
      if (this.match(types._import)) {
        node.exprName = this.tsParseImportType();
      } else {
        node.exprName = this.tsParseEntityName(true);
      }
      return this.finishNode(node, "TSTypeQuery");
    }
    tsParseTypeParameter() {
      const node = this.startNode();
      node.name = this.parseIdentifierName(node.start);
      node.constraint = this.tsEatThenParseType(types._extends);
      node.default = this.tsEatThenParseType(types.eq);
      return this.finishNode(node, "TSTypeParameter");
    }
    tsTryParseTypeParameters() {
      if (this.isRelational("<")) {
        return this.tsParseTypeParameters();
      }
    }
    tsParseTypeParameters() {
      const node = this.startNode();
      if (this.isRelational("<") || this.match(types.jsxTagStart)) {
        this.next();
      } else {
        this.unexpected();
      }
      node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this), false, true);
      if (node.params.length === 0) {
        this.raise(node.start, TSErrors.EmptyTypeParameters);
      }
      return this.finishNode(node, "TSTypeParameterDeclaration");
    }
    tsTryNextParseConstantContext() {
      if (this.lookahead().type === types._const) {
        this.next();
        return this.tsParseTypeReference();
      }
      return null;
    }
    tsFillSignature(returnToken, signature) {
      const returnTokenRequired = returnToken === types.arrow;
      signature.typeParameters = this.tsTryParseTypeParameters();
      this.expect(types.parenL);
      signature.parameters = this.tsParseBindingListForSignature();
      if (returnTokenRequired) {
        signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
      } else if (this.match(returnToken)) {
        signature.typeAnnotation = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
      }
    }
    tsParseBindingListForSignature() {
      return this.parseBindingList(types.parenR, 41).map((pattern) => {
        if (pattern.type !== "Identifier" && pattern.type !== "RestElement" && pattern.type !== "ObjectPattern" && pattern.type !== "ArrayPattern") {
          this.raise(pattern.start, TSErrors.UnsupportedSignatureParameterKind, pattern.type);
        }
        return pattern;
      });
    }
    tsParseTypeMemberSemicolon() {
      if (!this.eat(types.comma)) {
        this.semicolon();
      }
    }
    tsParseSignatureMember(kind, node) {
      this.tsFillSignature(types.colon, node);
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(node, kind);
    }
    tsIsUnambiguouslyIndexSignature() {
      this.next();
      return this.eat(types.name) && this.match(types.colon);
    }
    tsTryParseIndexSignature(node) {
      if (!(this.match(types.bracketL) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
        return void 0;
      }
      this.expect(types.bracketL);
      const id = this.parseIdentifier();
      id.typeAnnotation = this.tsParseTypeAnnotation();
      this.resetEndLocation(id);
      this.expect(types.bracketR);
      node.parameters = [id];
      const type = this.tsTryParseTypeAnnotation();
      if (type)
        node.typeAnnotation = type;
      this.tsParseTypeMemberSemicolon();
      return this.finishNode(node, "TSIndexSignature");
    }
    tsParsePropertyOrMethodSignature(node, readonly) {
      if (this.eat(types.question))
        node.optional = true;
      const nodeAny = node;
      if (this.match(types.parenL) || this.isRelational("<")) {
        if (readonly) {
          this.raise(node.start, TSErrors.ReadonlyForMethodSignature);
        }
        const method = nodeAny;
        this.tsFillSignature(types.colon, method);
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(method, "TSMethodSignature");
      } else {
        const property = nodeAny;
        if (readonly)
          property.readonly = true;
        const type = this.tsTryParseTypeAnnotation();
        if (type)
          property.typeAnnotation = type;
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(property, "TSPropertySignature");
      }
    }
    tsParseTypeMember() {
      const node = this.startNode();
      if (this.match(types.parenL) || this.isRelational("<")) {
        return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
      }
      if (this.match(types._new)) {
        const id = this.startNode();
        this.next();
        if (this.match(types.parenL) || this.isRelational("<")) {
          return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
        } else {
          node.key = this.createIdentifier(id, "new");
          return this.tsParsePropertyOrMethodSignature(node, false);
        }
      }
      this.tsParseModifiers(node, ["readonly"], ["declare", "abstract", "private", "protected", "public", "static"], TSErrors.InvalidModifierOnTypeMember);
      const idx = this.tsTryParseIndexSignature(node);
      if (idx) {
        return idx;
      }
      this.parsePropertyName(node, false);
      return this.tsParsePropertyOrMethodSignature(node, !!node.readonly);
    }
    tsParseTypeLiteral() {
      const node = this.startNode();
      node.members = this.tsParseObjectTypeMembers();
      return this.finishNode(node, "TSTypeLiteral");
    }
    tsParseObjectTypeMembers() {
      this.expect(types.braceL);
      const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
      this.expect(types.braceR);
      return members;
    }
    tsIsStartOfMappedType() {
      this.next();
      if (this.eat(types.plusMin)) {
        return this.isContextual("readonly");
      }
      if (this.isContextual("readonly")) {
        this.next();
      }
      if (!this.match(types.bracketL)) {
        return false;
      }
      this.next();
      if (!this.tsIsIdentifier()) {
        return false;
      }
      this.next();
      return this.match(types._in);
    }
    tsParseMappedTypeParameter() {
      const node = this.startNode();
      node.name = this.parseIdentifierName(node.start);
      node.constraint = this.tsExpectThenParseType(types._in);
      return this.finishNode(node, "TSTypeParameter");
    }
    tsParseMappedType() {
      const node = this.startNode();
      this.expect(types.braceL);
      if (this.match(types.plusMin)) {
        node.readonly = this.state.value;
        this.next();
        this.expectContextual("readonly");
      } else if (this.eatContextual("readonly")) {
        node.readonly = true;
      }
      this.expect(types.bracketL);
      node.typeParameter = this.tsParseMappedTypeParameter();
      node.nameType = this.eatContextual("as") ? this.tsParseType() : null;
      this.expect(types.bracketR);
      if (this.match(types.plusMin)) {
        node.optional = this.state.value;
        this.next();
        this.expect(types.question);
      } else if (this.eat(types.question)) {
        node.optional = true;
      }
      node.typeAnnotation = this.tsTryParseType();
      this.semicolon();
      this.expect(types.braceR);
      return this.finishNode(node, "TSMappedType");
    }
    tsParseTupleType() {
      const node = this.startNode();
      node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
      let seenOptionalElement = false;
      let labeledElements = null;
      node.elementTypes.forEach((elementNode) => {
        var _labeledElements;
        let {
          type
        } = elementNode;
        if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
          this.raise(elementNode.start, TSErrors.OptionalTypeBeforeRequired);
        }
        seenOptionalElement = seenOptionalElement || type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType";
        if (type === "TSRestType") {
          elementNode = elementNode.typeAnnotation;
          type = elementNode.type;
        }
        const isLabeled = type === "TSNamedTupleMember";
        labeledElements = (_labeledElements = labeledElements) != null ? _labeledElements : isLabeled;
        if (labeledElements !== isLabeled) {
          this.raise(elementNode.start, TSErrors.MixedLabeledAndUnlabeledElements);
        }
      });
      return this.finishNode(node, "TSTupleType");
    }
    tsParseTupleElementType() {
      const {
        start: startPos,
        startLoc
      } = this.state;
      const rest = this.eat(types.ellipsis);
      let type = this.tsParseType();
      const optional = this.eat(types.question);
      const labeled = this.eat(types.colon);
      if (labeled) {
        const labeledNode = this.startNodeAtNode(type);
        labeledNode.optional = optional;
        if (type.type === "TSTypeReference" && !type.typeParameters && type.typeName.type === "Identifier") {
          labeledNode.label = type.typeName;
        } else {
          this.raise(type.start, TSErrors.InvalidTupleMemberLabel);
          labeledNode.label = type;
        }
        labeledNode.elementType = this.tsParseType();
        type = this.finishNode(labeledNode, "TSNamedTupleMember");
      } else if (optional) {
        const optionalTypeNode = this.startNodeAtNode(type);
        optionalTypeNode.typeAnnotation = type;
        type = this.finishNode(optionalTypeNode, "TSOptionalType");
      }
      if (rest) {
        const restNode = this.startNodeAt(startPos, startLoc);
        restNode.typeAnnotation = type;
        type = this.finishNode(restNode, "TSRestType");
      }
      return type;
    }
    tsParseParenthesizedType() {
      const node = this.startNode();
      this.expect(types.parenL);
      node.typeAnnotation = this.tsParseType();
      this.expect(types.parenR);
      return this.finishNode(node, "TSParenthesizedType");
    }
    tsParseFunctionOrConstructorType(type, abstract) {
      const node = this.startNode();
      if (type === "TSConstructorType") {
        node.abstract = !!abstract;
        if (abstract)
          this.next();
        this.next();
      }
      this.tsFillSignature(types.arrow, node);
      return this.finishNode(node, type);
    }
    tsParseLiteralTypeNode() {
      const node = this.startNode();
      node.literal = (() => {
        switch (this.state.type) {
          case types.num:
          case types.bigint:
          case types.string:
          case types._true:
          case types._false:
            return this.parseExprAtom();
          default:
            throw this.unexpected();
        }
      })();
      return this.finishNode(node, "TSLiteralType");
    }
    tsParseTemplateLiteralType() {
      const node = this.startNode();
      node.literal = this.parseTemplate(false);
      return this.finishNode(node, "TSLiteralType");
    }
    parseTemplateSubstitution() {
      if (this.state.inType)
        return this.tsParseType();
      return super.parseTemplateSubstitution();
    }
    tsParseThisTypeOrThisTypePredicate() {
      const thisKeyword = this.tsParseThisTypeNode();
      if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
        return this.tsParseThisTypePredicate(thisKeyword);
      } else {
        return thisKeyword;
      }
    }
    tsParseNonArrayType() {
      switch (this.state.type) {
        case types.name:
        case types._void:
        case types._null: {
          const type = this.match(types._void) ? "TSVoidKeyword" : this.match(types._null) ? "TSNullKeyword" : keywordTypeFromName(this.state.value);
          if (type !== void 0 && this.lookaheadCharCode() !== 46) {
            const node = this.startNode();
            this.next();
            return this.finishNode(node, type);
          }
          return this.tsParseTypeReference();
        }
        case types.string:
        case types.num:
        case types.bigint:
        case types._true:
        case types._false:
          return this.tsParseLiteralTypeNode();
        case types.plusMin:
          if (this.state.value === "-") {
            const node = this.startNode();
            const nextToken = this.lookahead();
            if (nextToken.type !== types.num && nextToken.type !== types.bigint) {
              throw this.unexpected();
            }
            node.literal = this.parseMaybeUnary();
            return this.finishNode(node, "TSLiteralType");
          }
          break;
        case types._this:
          return this.tsParseThisTypeOrThisTypePredicate();
        case types._typeof:
          return this.tsParseTypeQuery();
        case types._import:
          return this.tsParseImportType();
        case types.braceL:
          return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
        case types.bracketL:
          return this.tsParseTupleType();
        case types.parenL:
          return this.tsParseParenthesizedType();
        case types.backQuote:
          return this.tsParseTemplateLiteralType();
      }
      throw this.unexpected();
    }
    tsParseArrayTypeOrHigher() {
      let type = this.tsParseNonArrayType();
      while (!this.hasPrecedingLineBreak() && this.eat(types.bracketL)) {
        if (this.match(types.bracketR)) {
          const node = this.startNodeAtNode(type);
          node.elementType = type;
          this.expect(types.bracketR);
          type = this.finishNode(node, "TSArrayType");
        } else {
          const node = this.startNodeAtNode(type);
          node.objectType = type;
          node.indexType = this.tsParseType();
          this.expect(types.bracketR);
          type = this.finishNode(node, "TSIndexedAccessType");
        }
      }
      return type;
    }
    tsParseTypeOperator(operator) {
      const node = this.startNode();
      this.expectContextual(operator);
      node.operator = operator;
      node.typeAnnotation = this.tsParseTypeOperatorOrHigher();
      if (operator === "readonly") {
        this.tsCheckTypeAnnotationForReadOnly(node);
      }
      return this.finishNode(node, "TSTypeOperator");
    }
    tsCheckTypeAnnotationForReadOnly(node) {
      switch (node.typeAnnotation.type) {
        case "TSTupleType":
        case "TSArrayType":
          return;
        default:
          this.raise(node.start, TSErrors.UnexpectedReadonly);
      }
    }
    tsParseInferType() {
      const node = this.startNode();
      this.expectContextual("infer");
      const typeParameter = this.startNode();
      typeParameter.name = this.parseIdentifierName(typeParameter.start);
      node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
      return this.finishNode(node, "TSInferType");
    }
    tsParseTypeOperatorOrHigher() {
      const operator = ["keyof", "unique", "readonly"].find((kw) => this.isContextual(kw));
      return operator ? this.tsParseTypeOperator(operator) : this.isContextual("infer") ? this.tsParseInferType() : this.tsParseArrayTypeOrHigher();
    }
    tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
      const node = this.startNode();
      const hasLeadingOperator = this.eat(operator);
      const types2 = [];
      do {
        types2.push(parseConstituentType());
      } while (this.eat(operator));
      if (types2.length === 1 && !hasLeadingOperator) {
        return types2[0];
      }
      node.types = types2;
      return this.finishNode(node, kind);
    }
    tsParseIntersectionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), types.bitwiseAND);
    }
    tsParseUnionTypeOrHigher() {
      return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), types.bitwiseOR);
    }
    tsIsStartOfFunctionType() {
      if (this.isRelational("<")) {
        return true;
      }
      return this.match(types.parenL) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
    }
    tsSkipParameterStart() {
      if (this.match(types.name) || this.match(types._this)) {
        this.next();
        return true;
      }
      if (this.match(types.braceL)) {
        let braceStackCounter = 1;
        this.next();
        while (braceStackCounter > 0) {
          if (this.match(types.braceL)) {
            ++braceStackCounter;
          } else if (this.match(types.braceR)) {
            --braceStackCounter;
          }
          this.next();
        }
        return true;
      }
      if (this.match(types.bracketL)) {
        let braceStackCounter = 1;
        this.next();
        while (braceStackCounter > 0) {
          if (this.match(types.bracketL)) {
            ++braceStackCounter;
          } else if (this.match(types.bracketR)) {
            --braceStackCounter;
          }
          this.next();
        }
        return true;
      }
      return false;
    }
    tsIsUnambiguouslyStartOfFunctionType() {
      this.next();
      if (this.match(types.parenR) || this.match(types.ellipsis)) {
        return true;
      }
      if (this.tsSkipParameterStart()) {
        if (this.match(types.colon) || this.match(types.comma) || this.match(types.question) || this.match(types.eq)) {
          return true;
        }
        if (this.match(types.parenR)) {
          this.next();
          if (this.match(types.arrow)) {
            return true;
          }
        }
      }
      return false;
    }
    tsParseTypeOrTypePredicateAnnotation(returnToken) {
      return this.tsInType(() => {
        const t = this.startNode();
        this.expect(returnToken);
        const node = this.startNode();
        const asserts = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
        if (asserts && this.match(types._this)) {
          let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();
          if (thisTypePredicate.type === "TSThisType") {
            node.parameterName = thisTypePredicate;
            node.asserts = true;
            thisTypePredicate = this.finishNode(node, "TSTypePredicate");
          } else {
            this.resetStartLocationFromNode(thisTypePredicate, node);
            thisTypePredicate.asserts = true;
          }
          t.typeAnnotation = thisTypePredicate;
          return this.finishNode(t, "TSTypeAnnotation");
        }
        const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
        if (!typePredicateVariable) {
          if (!asserts) {
            return this.tsParseTypeAnnotation(false, t);
          }
          node.parameterName = this.parseIdentifier();
          node.asserts = asserts;
          t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
          return this.finishNode(t, "TSTypeAnnotation");
        }
        const type = this.tsParseTypeAnnotation(false);
        node.parameterName = typePredicateVariable;
        node.typeAnnotation = type;
        node.asserts = asserts;
        t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
        return this.finishNode(t, "TSTypeAnnotation");
      });
    }
    tsTryParseTypeOrTypePredicateAnnotation() {
      return this.match(types.colon) ? this.tsParseTypeOrTypePredicateAnnotation(types.colon) : void 0;
    }
    tsTryParseTypeAnnotation() {
      return this.match(types.colon) ? this.tsParseTypeAnnotation() : void 0;
    }
    tsTryParseType() {
      return this.tsEatThenParseType(types.colon);
    }
    tsParseTypePredicatePrefix() {
      const id = this.parseIdentifier();
      if (this.isContextual("is") && !this.hasPrecedingLineBreak()) {
        this.next();
        return id;
      }
    }
    tsParseTypePredicateAsserts() {
      if (!this.match(types.name) || this.state.value !== "asserts" || this.hasPrecedingLineBreak()) {
        return false;
      }
      const containsEsc = this.state.containsEsc;
      this.next();
      if (!this.match(types.name) && !this.match(types._this)) {
        return false;
      }
      if (containsEsc) {
        this.raise(this.state.lastTokStart, ErrorMessages.InvalidEscapedReservedWord, "asserts");
      }
      return true;
    }
    tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
      this.tsInType(() => {
        if (eatColon)
          this.expect(types.colon);
        t.typeAnnotation = this.tsParseType();
      });
      return this.finishNode(t, "TSTypeAnnotation");
    }
    tsParseType() {
      assert(this.state.inType);
      const type = this.tsParseNonConditionalType();
      if (this.hasPrecedingLineBreak() || !this.eat(types._extends)) {
        return type;
      }
      const node = this.startNodeAtNode(type);
      node.checkType = type;
      node.extendsType = this.tsParseNonConditionalType();
      this.expect(types.question);
      node.trueType = this.tsParseType();
      this.expect(types.colon);
      node.falseType = this.tsParseType();
      return this.finishNode(node, "TSConditionalType");
    }
    isAbstractConstructorSignature() {
      return this.isContextual("abstract") && this.lookahead().type === types._new;
    }
    tsParseNonConditionalType() {
      if (this.tsIsStartOfFunctionType()) {
        return this.tsParseFunctionOrConstructorType("TSFunctionType");
      }
      if (this.match(types._new)) {
        return this.tsParseFunctionOrConstructorType("TSConstructorType");
      } else if (this.isAbstractConstructorSignature()) {
        return this.tsParseFunctionOrConstructorType("TSConstructorType", true);
      }
      return this.tsParseUnionTypeOrHigher();
    }
    tsParseTypeAssertion() {
      const node = this.startNode();
      const _const = this.tsTryNextParseConstantContext();
      node.typeAnnotation = _const || this.tsNextThenParseType();
      this.expectRelational(">");
      node.expression = this.parseMaybeUnary();
      return this.finishNode(node, "TSTypeAssertion");
    }
    tsParseHeritageClause(descriptor) {
      const originalStart = this.state.start;
      const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", this.tsParseExpressionWithTypeArguments.bind(this));
      if (!delimitedList.length) {
        this.raise(originalStart, TSErrors.EmptyHeritageClauseType, descriptor);
      }
      return delimitedList;
    }
    tsParseExpressionWithTypeArguments() {
      const node = this.startNode();
      node.expression = this.tsParseEntityName(false);
      if (this.isRelational("<")) {
        node.typeParameters = this.tsParseTypeArguments();
      }
      return this.finishNode(node, "TSExpressionWithTypeArguments");
    }
    tsParseInterfaceDeclaration(node) {
      node.id = this.parseIdentifier();
      this.checkLVal(node.id, "typescript interface declaration", BIND_TS_INTERFACE);
      node.typeParameters = this.tsTryParseTypeParameters();
      if (this.eat(types._extends)) {
        node.extends = this.tsParseHeritageClause("extends");
      }
      const body = this.startNode();
      body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
      node.body = this.finishNode(body, "TSInterfaceBody");
      return this.finishNode(node, "TSInterfaceDeclaration");
    }
    tsParseTypeAliasDeclaration(node) {
      node.id = this.parseIdentifier();
      this.checkLVal(node.id, "typescript type alias", BIND_TS_TYPE);
      node.typeParameters = this.tsTryParseTypeParameters();
      node.typeAnnotation = this.tsInType(() => {
        this.expect(types.eq);
        if (this.isContextual("intrinsic") && this.lookahead().type !== types.dot) {
          const node2 = this.startNode();
          this.next();
          return this.finishNode(node2, "TSIntrinsicKeyword");
        }
        return this.tsParseType();
      });
      this.semicolon();
      return this.finishNode(node, "TSTypeAliasDeclaration");
    }
    tsInNoContext(cb) {
      const oldContext = this.state.context;
      this.state.context = [oldContext[0]];
      try {
        return cb();
      } finally {
        this.state.context = oldContext;
      }
    }
    tsInType(cb) {
      const oldInType = this.state.inType;
      this.state.inType = true;
      try {
        return cb();
      } finally {
        this.state.inType = oldInType;
      }
    }
    tsEatThenParseType(token) {
      return !this.match(token) ? void 0 : this.tsNextThenParseType();
    }
    tsExpectThenParseType(token) {
      return this.tsDoThenParseType(() => this.expect(token));
    }
    tsNextThenParseType() {
      return this.tsDoThenParseType(() => this.next());
    }
    tsDoThenParseType(cb) {
      return this.tsInType(() => {
        cb();
        return this.tsParseType();
      });
    }
    tsParseEnumMember() {
      const node = this.startNode();
      node.id = this.match(types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
      if (this.eat(types.eq)) {
        node.initializer = this.parseMaybeAssignAllowIn();
      }
      return this.finishNode(node, "TSEnumMember");
    }
    tsParseEnumDeclaration(node, isConst) {
      if (isConst)
        node.const = true;
      node.id = this.parseIdentifier();
      this.checkLVal(node.id, "typescript enum declaration", isConst ? BIND_TS_CONST_ENUM : BIND_TS_ENUM);
      this.expect(types.braceL);
      node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
      this.expect(types.braceR);
      return this.finishNode(node, "TSEnumDeclaration");
    }
    tsParseModuleBlock() {
      const node = this.startNode();
      this.scope.enter(SCOPE_OTHER);
      this.expect(types.braceL);
      this.parseBlockOrModuleBlockBody(node.body = [], void 0, true, types.braceR);
      this.scope.exit();
      return this.finishNode(node, "TSModuleBlock");
    }
    tsParseModuleOrNamespaceDeclaration(node, nested = false) {
      node.id = this.parseIdentifier();
      if (!nested) {
        this.checkLVal(node.id, "module or namespace declaration", BIND_TS_NAMESPACE);
      }
      if (this.eat(types.dot)) {
        const inner = this.startNode();
        this.tsParseModuleOrNamespaceDeclaration(inner, true);
        node.body = inner;
      } else {
        this.scope.enter(SCOPE_TS_MODULE);
        this.prodParam.enter(PARAM);
        node.body = this.tsParseModuleBlock();
        this.prodParam.exit();
        this.scope.exit();
      }
      return this.finishNode(node, "TSModuleDeclaration");
    }
    tsParseAmbientExternalModuleDeclaration(node) {
      if (this.isContextual("global")) {
        node.global = true;
        node.id = this.parseIdentifier();
      } else if (this.match(types.string)) {
        node.id = this.parseExprAtom();
      } else {
        this.unexpected();
      }
      if (this.match(types.braceL)) {
        this.scope.enter(SCOPE_TS_MODULE);
        this.prodParam.enter(PARAM);
        node.body = this.tsParseModuleBlock();
        this.prodParam.exit();
        this.scope.exit();
      } else {
        this.semicolon();
      }
      return this.finishNode(node, "TSModuleDeclaration");
    }
    tsParseImportEqualsDeclaration(node, isExport) {
      node.isExport = isExport || false;
      node.id = this.parseIdentifier();
      this.checkLVal(node.id, "import equals declaration", BIND_LEXICAL);
      this.expect(types.eq);
      node.moduleReference = this.tsParseModuleReference();
      this.semicolon();
      return this.finishNode(node, "TSImportEqualsDeclaration");
    }
    tsIsExternalModuleReference() {
      return this.isContextual("require") && this.lookaheadCharCode() === 40;
    }
    tsParseModuleReference() {
      return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(false);
    }
    tsParseExternalModuleReference() {
      const node = this.startNode();
      this.expectContextual("require");
      this.expect(types.parenL);
      if (!this.match(types.string)) {
        throw this.unexpected();
      }
      node.expression = this.parseExprAtom();
      this.expect(types.parenR);
      return this.finishNode(node, "TSExternalModuleReference");
    }
    tsLookAhead(f) {
      const state = this.state.clone();
      const res = f();
      this.state = state;
      return res;
    }
    tsTryParseAndCatch(f) {
      const result = this.tryParse((abort) => f() || abort());
      if (result.aborted || !result.node)
        return void 0;
      if (result.error)
        this.state = result.failState;
      return result.node;
    }
    tsTryParse(f) {
      const state = this.state.clone();
      const result = f();
      if (result !== void 0 && result !== false) {
        return result;
      } else {
        this.state = state;
        return void 0;
      }
    }
    tsTryParseDeclare(nany) {
      if (this.isLineTerminator()) {
        return;
      }
      let starttype = this.state.type;
      let kind;
      if (this.isContextual("let")) {
        starttype = types._var;
        kind = "let";
      }
      return this.tsInDeclareContext(() => {
        switch (starttype) {
          case types._function:
            nany.declare = true;
            return this.parseFunctionStatement(nany, false, true);
          case types._class:
            nany.declare = true;
            return this.parseClass(nany, true, false);
          case types._const:
            if (this.match(types._const) && this.isLookaheadContextual("enum")) {
              this.expect(types._const);
              this.expectContextual("enum");
              return this.tsParseEnumDeclaration(nany, true);
            }
          case types._var:
            kind = kind || this.state.value;
            return this.parseVarStatement(nany, kind);
          case types.name: {
            const value = this.state.value;
            if (value === "global") {
              return this.tsParseAmbientExternalModuleDeclaration(nany);
            } else {
              return this.tsParseDeclaration(nany, value, true);
            }
          }
        }
      });
    }
    tsTryParseExportDeclaration() {
      return this.tsParseDeclaration(this.startNode(), this.state.value, true);
    }
    tsParseExpressionStatement(node, expr) {
      switch (expr.name) {
        case "declare": {
          const declaration = this.tsTryParseDeclare(node);
          if (declaration) {
            declaration.declare = true;
            return declaration;
          }
          break;
        }
        case "global":
          if (this.match(types.braceL)) {
            this.scope.enter(SCOPE_TS_MODULE);
            this.prodParam.enter(PARAM);
            const mod = node;
            mod.global = true;
            mod.id = expr;
            mod.body = this.tsParseModuleBlock();
            this.scope.exit();
            this.prodParam.exit();
            return this.finishNode(mod, "TSModuleDeclaration");
          }
          break;
        default:
          return this.tsParseDeclaration(node, expr.name, false);
      }
    }
    tsParseDeclaration(node, value, next) {
      switch (value) {
        case "abstract":
          if (this.tsCheckLineTerminator(next) && (this.match(types._class) || this.match(types.name))) {
            return this.tsParseAbstractDeclaration(node);
          }
          break;
        case "enum":
          if (next || this.match(types.name)) {
            if (next)
              this.next();
            return this.tsParseEnumDeclaration(node, false);
          }
          break;
        case "interface":
          if (this.tsCheckLineTerminator(next) && this.match(types.name)) {
            return this.tsParseInterfaceDeclaration(node);
          }
          break;
        case "module":
          if (this.tsCheckLineTerminator(next)) {
            if (this.match(types.string)) {
              return this.tsParseAmbientExternalModuleDeclaration(node);
            } else if (this.match(types.name)) {
              return this.tsParseModuleOrNamespaceDeclaration(node);
            }
          }
          break;
        case "namespace":
          if (this.tsCheckLineTerminator(next) && this.match(types.name)) {
            return this.tsParseModuleOrNamespaceDeclaration(node);
          }
          break;
        case "type":
          if (this.tsCheckLineTerminator(next) && this.match(types.name)) {
            return this.tsParseTypeAliasDeclaration(node);
          }
          break;
      }
    }
    tsCheckLineTerminator(next) {
      if (next) {
        if (this.hasFollowingLineBreak())
          return false;
        this.next();
        return true;
      }
      return !this.isLineTerminator();
    }
    tsTryParseGenericAsyncArrowFunction(startPos, startLoc) {
      if (!this.isRelational("<")) {
        return void 0;
      }
      const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = true;
      const res = this.tsTryParseAndCatch(() => {
        const node = this.startNodeAt(startPos, startLoc);
        node.typeParameters = this.tsParseTypeParameters();
        super.parseFunctionParams(node);
        node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
        this.expect(types.arrow);
        return node;
      });
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      if (!res) {
        return void 0;
      }
      return this.parseArrowExpression(res, null, true);
    }
    tsParseTypeArguments() {
      const node = this.startNode();
      node.params = this.tsInType(() => this.tsInNoContext(() => {
        this.expectRelational("<");
        return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
      }));
      if (node.params.length === 0) {
        this.raise(node.start, TSErrors.EmptyTypeArguments);
      }
      this.state.exprAllowed = false;
      this.expectRelational(">");
      return this.finishNode(node, "TSTypeParameterInstantiation");
    }
    tsIsDeclarationStart() {
      if (this.match(types.name)) {
        switch (this.state.value) {
          case "abstract":
          case "declare":
          case "enum":
          case "interface":
          case "module":
          case "namespace":
          case "type":
            return true;
        }
      }
      return false;
    }
    isExportDefaultSpecifier() {
      if (this.tsIsDeclarationStart())
        return false;
      return super.isExportDefaultSpecifier();
    }
    parseAssignableListItem(allowModifiers, decorators) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let accessibility;
      let readonly = false;
      if (allowModifiers !== void 0) {
        accessibility = this.parseAccessModifier();
        readonly = !!this.tsParseModifier(["readonly"]);
        if (allowModifiers === false && (accessibility || readonly)) {
          this.raise(startPos, TSErrors.UnexpectedParameterModifier);
        }
      }
      const left = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(left);
      const elt = this.parseMaybeDefault(left.start, left.loc.start, left);
      if (accessibility || readonly) {
        const pp = this.startNodeAt(startPos, startLoc);
        if (decorators.length) {
          pp.decorators = decorators;
        }
        if (accessibility)
          pp.accessibility = accessibility;
        if (readonly)
          pp.readonly = readonly;
        if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
          this.raise(pp.start, TSErrors.UnsupportedParameterPropertyKind);
        }
        pp.parameter = elt;
        return this.finishNode(pp, "TSParameterProperty");
      }
      if (decorators.length) {
        left.decorators = decorators;
      }
      return elt;
    }
    parseFunctionBodyAndFinish(node, type, isMethod = false) {
      if (this.match(types.colon)) {
        node.returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
      }
      const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" ? "TSDeclareMethod" : void 0;
      if (bodilessType && !this.match(types.braceL) && this.isLineTerminator()) {
        this.finishNode(node, bodilessType);
        return;
      }
      if (bodilessType === "TSDeclareFunction" && this.state.isDeclareContext) {
        this.raise(node.start, TSErrors.DeclareFunctionHasImplementation);
        if (node.declare) {
          super.parseFunctionBodyAndFinish(node, bodilessType, isMethod);
          return;
        }
      }
      super.parseFunctionBodyAndFinish(node, type, isMethod);
    }
    registerFunctionStatementId(node) {
      if (!node.body && node.id) {
        this.checkLVal(node.id, "function name", BIND_TS_AMBIENT);
      } else {
        super.registerFunctionStatementId(...arguments);
      }
    }
    tsCheckForInvalidTypeCasts(items) {
      items.forEach((node) => {
        if ((node == null ? void 0 : node.type) === "TSTypeCastExpression") {
          this.raise(node.typeAnnotation.start, TSErrors.UnexpectedTypeAnnotation);
        }
      });
    }
    toReferencedList(exprList, isInParens) {
      this.tsCheckForInvalidTypeCasts(exprList);
      return exprList;
    }
    parseArrayLike(...args) {
      const node = super.parseArrayLike(...args);
      if (node.type === "ArrayExpression") {
        this.tsCheckForInvalidTypeCasts(node.elements);
      }
      return node;
    }
    parseSubscript(base, startPos, startLoc, noCalls, state) {
      if (!this.hasPrecedingLineBreak() && this.match(types.bang)) {
        this.state.exprAllowed = false;
        this.next();
        const nonNullExpression = this.startNodeAt(startPos, startLoc);
        nonNullExpression.expression = base;
        return this.finishNode(nonNullExpression, "TSNonNullExpression");
      }
      if (this.isRelational("<")) {
        const result = this.tsTryParseAndCatch(() => {
          if (!noCalls && this.atPossibleAsyncArrow(base)) {
            const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startPos, startLoc);
            if (asyncArrowFn) {
              return asyncArrowFn;
            }
          }
          const node = this.startNodeAt(startPos, startLoc);
          node.callee = base;
          const typeArguments = this.tsParseTypeArguments();
          if (typeArguments) {
            if (!noCalls && this.eat(types.parenL)) {
              node.arguments = this.parseCallExpressionArguments(types.parenR, false);
              this.tsCheckForInvalidTypeCasts(node.arguments);
              node.typeParameters = typeArguments;
              if (state.optionalChainMember) {
                node.optional = false;
              }
              return this.finishCallExpression(node, state.optionalChainMember);
            } else if (this.match(types.backQuote)) {
              const result2 = this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
              result2.typeParameters = typeArguments;
              return result2;
            }
          }
          this.unexpected();
        });
        if (result)
          return result;
      }
      return super.parseSubscript(base, startPos, startLoc, noCalls, state);
    }
    parseNewArguments(node) {
      if (this.isRelational("<")) {
        const typeParameters = this.tsTryParseAndCatch(() => {
          const args = this.tsParseTypeArguments();
          if (!this.match(types.parenL))
            this.unexpected();
          return args;
        });
        if (typeParameters) {
          node.typeParameters = typeParameters;
        }
      }
      super.parseNewArguments(node);
    }
    parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
      if (nonNull(types._in.binop) > minPrec && !this.hasPrecedingLineBreak() && this.isContextual("as")) {
        const node = this.startNodeAt(leftStartPos, leftStartLoc);
        node.expression = left;
        const _const = this.tsTryNextParseConstantContext();
        if (_const) {
          node.typeAnnotation = _const;
        } else {
          node.typeAnnotation = this.tsNextThenParseType();
        }
        this.finishNode(node, "TSAsExpression");
        this.reScan_lt_gt();
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
      }
      return super.parseExprOp(left, leftStartPos, leftStartLoc, minPrec);
    }
    checkReservedWord(word, startLoc, checkKeywords, isBinding) {
    }
    checkDuplicateExports() {
    }
    parseImport(node) {
      if (this.match(types.name) || this.match(types.star) || this.match(types.braceL)) {
        const ahead = this.lookahead();
        if (this.match(types.name) && ahead.type === types.eq) {
          return this.tsParseImportEqualsDeclaration(node);
        }
        if (this.isContextual("type") && ahead.type !== types.comma && !(ahead.type === types.name && ahead.value === "from")) {
          node.importKind = "type";
          this.next();
        }
      }
      if (!node.importKind) {
        node.importKind = "value";
      }
      const importNode = super.parseImport(node);
      if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
        this.raise(importNode.start, "A type-only import can specify a default import or named bindings, but not both.");
      }
      return importNode;
    }
    parseExport(node) {
      if (this.match(types._import)) {
        this.expect(types._import);
        return this.tsParseImportEqualsDeclaration(node, true);
      } else if (this.eat(types.eq)) {
        const assign = node;
        assign.expression = this.parseExpression();
        this.semicolon();
        return this.finishNode(assign, "TSExportAssignment");
      } else if (this.eatContextual("as")) {
        const decl = node;
        this.expectContextual("namespace");
        decl.id = this.parseIdentifier();
        this.semicolon();
        return this.finishNode(decl, "TSNamespaceExportDeclaration");
      } else {
        if (this.isContextual("type") && this.lookahead().type === types.braceL) {
          this.next();
          node.exportKind = "type";
        } else {
          node.exportKind = "value";
        }
        return super.parseExport(node);
      }
    }
    isAbstractClass() {
      return this.isContextual("abstract") && this.lookahead().type === types._class;
    }
    parseExportDefaultExpression() {
      if (this.isAbstractClass()) {
        const cls = this.startNode();
        this.next();
        cls.abstract = true;
        this.parseClass(cls, true, true);
        return cls;
      }
      if (this.state.value === "interface") {
        const result = this.tsParseDeclaration(this.startNode(), this.state.value, true);
        if (result)
          return result;
      }
      return super.parseExportDefaultExpression();
    }
    parseStatementContent(context, topLevel) {
      if (this.state.type === types._const) {
        const ahead = this.lookahead();
        if (ahead.type === types.name && ahead.value === "enum") {
          const node = this.startNode();
          this.expect(types._const);
          this.expectContextual("enum");
          return this.tsParseEnumDeclaration(node, true);
        }
      }
      return super.parseStatementContent(context, topLevel);
    }
    parseAccessModifier() {
      return this.tsParseModifier(["public", "protected", "private"]);
    }
    parseClassMember(classBody, member, state) {
      this.tsParseModifiers(member, ["declare", "private", "public", "protected"]);
      const callParseClassMember = () => {
        super.parseClassMember(classBody, member, state);
      };
      if (member.declare) {
        this.tsInDeclareContext(callParseClassMember);
      } else {
        callParseClassMember();
      }
    }
    parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
      this.tsParseModifiers(member, ["abstract", "readonly", "declare"]);
      const idx = this.tsTryParseIndexSignature(member);
      if (idx) {
        classBody.body.push(idx);
        if (member.abstract) {
          this.raise(member.start, TSErrors.IndexSignatureHasAbstract);
        }
        if (isStatic) {
          this.raise(member.start, TSErrors.IndexSignatureHasStatic);
        }
        if (member.accessibility) {
          this.raise(member.start, TSErrors.IndexSignatureHasAccessibility, member.accessibility);
        }
        if (member.declare) {
          this.raise(member.start, TSErrors.IndexSignatureHasDeclare);
        }
        return;
      }
      if (!this.state.inAbstractClass && member.abstract) {
        this.raise(member.start, TSErrors.NonAbstractClassHasAbstractMethod);
      }
      super.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
    }
    parsePostMemberNameModifiers(methodOrProp) {
      const optional = this.eat(types.question);
      if (optional)
        methodOrProp.optional = true;
      if (methodOrProp.readonly && this.match(types.parenL)) {
        this.raise(methodOrProp.start, TSErrors.ClassMethodHasReadonly);
      }
      if (methodOrProp.declare && this.match(types.parenL)) {
        this.raise(methodOrProp.start, TSErrors.ClassMethodHasDeclare);
      }
    }
    parseExpressionStatement(node, expr) {
      const decl = expr.type === "Identifier" ? this.tsParseExpressionStatement(node, expr) : void 0;
      return decl || super.parseExpressionStatement(node, expr);
    }
    shouldParseExportDeclaration() {
      if (this.tsIsDeclarationStart())
        return true;
      return super.shouldParseExportDeclaration();
    }
    parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
      if (!refNeedsArrowPos || !this.match(types.question)) {
        return super.parseConditional(expr, startPos, startLoc, refNeedsArrowPos);
      }
      const result = this.tryParse(() => super.parseConditional(expr, startPos, startLoc));
      if (!result.node) {
        refNeedsArrowPos.start = result.error.pos || this.state.start;
        return expr;
      }
      if (result.error)
        this.state = result.failState;
      return result.node;
    }
    parseParenItem(node, startPos, startLoc) {
      node = super.parseParenItem(node, startPos, startLoc);
      if (this.eat(types.question)) {
        node.optional = true;
        this.resetEndLocation(node);
      }
      if (this.match(types.colon)) {
        const typeCastNode = this.startNodeAt(startPos, startLoc);
        typeCastNode.expression = node;
        typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
        return this.finishNode(typeCastNode, "TSTypeCastExpression");
      }
      return node;
    }
    parseExportDeclaration(node) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const isDeclare = this.eatContextual("declare");
      if (isDeclare && (this.isContextual("declare") || !this.shouldParseExportDeclaration())) {
        throw this.raise(this.state.start, TSErrors.ExpectedAmbientAfterExportDeclare);
      }
      let declaration;
      if (this.match(types.name)) {
        declaration = this.tsTryParseExportDeclaration();
      }
      if (!declaration) {
        declaration = super.parseExportDeclaration(node);
      }
      if (declaration && (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare)) {
        node.exportKind = "type";
      }
      if (declaration && isDeclare) {
        this.resetStartLocation(declaration, startPos, startLoc);
        declaration.declare = true;
      }
      return declaration;
    }
    parseClassId(node, isStatement, optionalId) {
      if ((!isStatement || optionalId) && this.isContextual("implements")) {
        return;
      }
      super.parseClassId(node, isStatement, optionalId, node.declare ? BIND_TS_AMBIENT : BIND_CLASS);
      const typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters)
        node.typeParameters = typeParameters;
    }
    parseClassPropertyAnnotation(node) {
      if (!node.optional && this.eat(types.bang)) {
        node.definite = true;
      }
      const type = this.tsTryParseTypeAnnotation();
      if (type)
        node.typeAnnotation = type;
    }
    parseClassProperty(node) {
      this.parseClassPropertyAnnotation(node);
      if (this.state.isDeclareContext && this.match(types.eq)) {
        this.raise(this.state.start, TSErrors.DeclareClassFieldHasInitializer);
      }
      return super.parseClassProperty(node);
    }
    parseClassPrivateProperty(node) {
      if (node.abstract) {
        this.raise(node.start, TSErrors.PrivateElementHasAbstract);
      }
      if (node.accessibility) {
        this.raise(node.start, TSErrors.PrivateElementHasAccessibility, node.accessibility);
      }
      this.parseClassPropertyAnnotation(node);
      return super.parseClassPrivateProperty(node);
    }
    pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
      const typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters && isConstructor) {
        this.raise(typeParameters.start, TSErrors.ConstructorHasTypeParameters);
      }
      if (typeParameters)
        method.typeParameters = typeParameters;
      super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
    }
    pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
      const typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters)
        method.typeParameters = typeParameters;
      super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
    }
    parseClassSuper(node) {
      super.parseClassSuper(node);
      if (node.superClass && this.isRelational("<")) {
        node.superTypeParameters = this.tsParseTypeArguments();
      }
      if (this.eatContextual("implements")) {
        node.implements = this.tsParseHeritageClause("implements");
      }
    }
    parseObjPropValue(prop, ...args) {
      const typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters)
        prop.typeParameters = typeParameters;
      super.parseObjPropValue(prop, ...args);
    }
    parseFunctionParams(node, allowModifiers) {
      const typeParameters = this.tsTryParseTypeParameters();
      if (typeParameters)
        node.typeParameters = typeParameters;
      super.parseFunctionParams(node, allowModifiers);
    }
    parseVarId(decl, kind) {
      super.parseVarId(decl, kind);
      if (decl.id.type === "Identifier" && this.eat(types.bang)) {
        decl.definite = true;
      }
      const type = this.tsTryParseTypeAnnotation();
      if (type) {
        decl.id.typeAnnotation = type;
        this.resetEndLocation(decl.id);
      }
    }
    parseAsyncArrowFromCallExpression(node, call) {
      if (this.match(types.colon)) {
        node.returnType = this.tsParseTypeAnnotation();
      }
      return super.parseAsyncArrowFromCallExpression(node, call);
    }
    parseMaybeAssign(...args) {
      var _jsx, _jsx2, _typeCast, _jsx3, _typeCast2, _jsx4, _typeCast3;
      let state;
      let jsx2;
      let typeCast;
      if (this.hasPlugin("jsx") && (this.match(types.jsxTagStart) || this.isRelational("<"))) {
        state = this.state.clone();
        jsx2 = this.tryParse(() => super.parseMaybeAssign(...args), state);
        if (!jsx2.error)
          return jsx2.node;
        const {
          context
        } = this.state;
        if (context[context.length - 1] === types$1.j_oTag) {
          context.length -= 2;
        } else if (context[context.length - 1] === types$1.j_expr) {
          context.length -= 1;
        }
      }
      if (!((_jsx = jsx2) == null ? void 0 : _jsx.error) && !this.isRelational("<")) {
        return super.parseMaybeAssign(...args);
      }
      let typeParameters;
      state = state || this.state.clone();
      const arrow = this.tryParse((abort) => {
        var _typeParameters;
        typeParameters = this.tsParseTypeParameters();
        const expr = super.parseMaybeAssign(...args);
        if (expr.type !== "ArrowFunctionExpression" || expr.extra && expr.extra.parenthesized) {
          abort();
        }
        if (((_typeParameters = typeParameters) == null ? void 0 : _typeParameters.params.length) !== 0) {
          this.resetStartLocationFromNode(expr, typeParameters);
        }
        expr.typeParameters = typeParameters;
        return expr;
      }, state);
      if (!arrow.error && !arrow.aborted)
        return arrow.node;
      if (!jsx2) {
        assert(!this.hasPlugin("jsx"));
        typeCast = this.tryParse(() => super.parseMaybeAssign(...args), state);
        if (!typeCast.error)
          return typeCast.node;
      }
      if ((_jsx2 = jsx2) == null ? void 0 : _jsx2.node) {
        this.state = jsx2.failState;
        return jsx2.node;
      }
      if (arrow.node) {
        this.state = arrow.failState;
        return arrow.node;
      }
      if ((_typeCast = typeCast) == null ? void 0 : _typeCast.node) {
        this.state = typeCast.failState;
        return typeCast.node;
      }
      if ((_jsx3 = jsx2) == null ? void 0 : _jsx3.thrown)
        throw jsx2.error;
      if (arrow.thrown)
        throw arrow.error;
      if ((_typeCast2 = typeCast) == null ? void 0 : _typeCast2.thrown)
        throw typeCast.error;
      throw ((_jsx4 = jsx2) == null ? void 0 : _jsx4.error) || arrow.error || ((_typeCast3 = typeCast) == null ? void 0 : _typeCast3.error);
    }
    parseMaybeUnary(refExpressionErrors) {
      if (!this.hasPlugin("jsx") && this.isRelational("<")) {
        return this.tsParseTypeAssertion();
      } else {
        return super.parseMaybeUnary(refExpressionErrors);
      }
    }
    parseArrow(node) {
      if (this.match(types.colon)) {
        const result = this.tryParse((abort) => {
          const returnType = this.tsParseTypeOrTypePredicateAnnotation(types.colon);
          if (this.canInsertSemicolon() || !this.match(types.arrow))
            abort();
          return returnType;
        });
        if (result.aborted)
          return;
        if (!result.thrown) {
          if (result.error)
            this.state = result.failState;
          node.returnType = result.node;
        }
      }
      return super.parseArrow(node);
    }
    parseAssignableListItemTypes(param) {
      if (this.eat(types.question)) {
        if (param.type !== "Identifier" && !this.state.isDeclareContext && !this.state.inType) {
          this.raise(param.start, TSErrors.PatternIsOptional);
        }
        param.optional = true;
      }
      const type = this.tsTryParseTypeAnnotation();
      if (type)
        param.typeAnnotation = type;
      this.resetEndLocation(param);
      return param;
    }
    toAssignable(node, isLHS = false) {
      switch (node.type) {
        case "TSTypeCastExpression":
          return super.toAssignable(this.typeCastToParameter(node), isLHS);
        case "TSParameterProperty":
          return super.toAssignable(node, isLHS);
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          node.expression = this.toAssignable(node.expression, isLHS);
          return node;
        default:
          return super.toAssignable(node, isLHS);
      }
    }
    checkLVal(expr, contextDescription, ...args) {
      switch (expr.type) {
        case "TSTypeCastExpression":
          return;
        case "TSParameterProperty":
          this.checkLVal(expr.parameter, "parameter property", ...args);
          return;
        case "TSAsExpression":
        case "TSNonNullExpression":
        case "TSTypeAssertion":
          this.checkLVal(expr.expression, contextDescription, ...args);
          return;
        default:
          super.checkLVal(expr, contextDescription, ...args);
          return;
      }
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case types._this:
          return this.parseIdentifier(true);
        default:
          return super.parseBindingAtom();
      }
    }
    parseMaybeDecoratorArguments(expr) {
      if (this.isRelational("<")) {
        const typeArguments = this.tsParseTypeArguments();
        if (this.match(types.parenL)) {
          const call = super.parseMaybeDecoratorArguments(expr);
          call.typeParameters = typeArguments;
          return call;
        }
        this.unexpected(this.state.start, types.parenL);
      }
      return super.parseMaybeDecoratorArguments(expr);
    }
    isClassMethod() {
      return this.isRelational("<") || super.isClassMethod();
    }
    isClassProperty() {
      return this.match(types.bang) || this.match(types.colon) || super.isClassProperty();
    }
    parseMaybeDefault(...args) {
      const node = super.parseMaybeDefault(...args);
      if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
        this.raise(node.typeAnnotation.start, TSErrors.TypeAnnotationAfterAssign);
      }
      return node;
    }
    getTokenFromCode(code) {
      if (this.state.inType && (code === 62 || code === 60)) {
        return this.finishOp(types.relational, 1);
      } else {
        return super.getTokenFromCode(code);
      }
    }
    reScan_lt_gt() {
      if (this.match(types.relational)) {
        const code = this.input.charCodeAt(this.state.start);
        if (code === 60 || code === 62) {
          this.state.pos -= 1;
          this.readToken_lt_gt(code);
        }
      }
    }
    toAssignableList(exprList) {
      for (let i = 0; i < exprList.length; i++) {
        const expr = exprList[i];
        if (!expr)
          continue;
        switch (expr.type) {
          case "TSTypeCastExpression":
            exprList[i] = this.typeCastToParameter(expr);
            break;
          case "TSAsExpression":
          case "TSTypeAssertion":
            if (!this.state.maybeInArrowParameters) {
              exprList[i] = this.typeCastToParameter(expr);
            } else {
              this.raise(expr.start, TSErrors.UnexpectedTypeCastInParameter);
            }
            break;
        }
      }
      return super.toAssignableList(...arguments);
    }
    typeCastToParameter(node) {
      node.expression.typeAnnotation = node.typeAnnotation;
      this.resetEndLocation(node.expression, node.typeAnnotation.end, node.typeAnnotation.loc.end);
      return node.expression;
    }
    shouldParseArrow() {
      return this.match(types.colon) || super.shouldParseArrow();
    }
    shouldParseAsyncArrow() {
      return this.match(types.colon) || super.shouldParseAsyncArrow();
    }
    canHaveLeadingDecorator() {
      return super.canHaveLeadingDecorator() || this.isAbstractClass();
    }
    jsxParseOpeningElementAfterName(node) {
      if (this.isRelational("<")) {
        const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArguments());
        if (typeArguments)
          node.typeParameters = typeArguments;
      }
      return super.jsxParseOpeningElementAfterName(node);
    }
    getGetterSetterExpectedParamCount(method) {
      const baseCount = super.getGetterSetterExpectedParamCount(method);
      const params = this.getObjectOrClassMethodParams(method);
      const firstParam = params[0];
      const hasContextParam = firstParam && firstParam.type === "Identifier" && firstParam.name === "this";
      return hasContextParam ? baseCount + 1 : baseCount;
    }
    parseCatchClauseParam() {
      const param = super.parseCatchClauseParam();
      const type = this.tsTryParseTypeAnnotation();
      if (type) {
        param.typeAnnotation = type;
        this.resetEndLocation(param);
      }
      return param;
    }
    tsInDeclareContext(cb) {
      const oldIsDeclareContext = this.state.isDeclareContext;
      this.state.isDeclareContext = true;
      try {
        return cb();
      } finally {
        this.state.isDeclareContext = oldIsDeclareContext;
      }
    }
    parseClass(node, ...args) {
      const oldInAbstractClass = this.state.inAbstractClass;
      this.state.inAbstractClass = !!node.abstract;
      try {
        return super.parseClass(node, ...args);
      } finally {
        this.state.inAbstractClass = oldInAbstractClass;
      }
    }
    tsParseAbstractDeclaration(node) {
      if (this.match(types._class)) {
        node.abstract = true;
        return this.parseClass(node, true, false);
      } else if (this.isContextual("interface")) {
        if (!this.hasFollowingLineBreak()) {
          node.abstract = true;
          this.raise(node.start, TSErrors.NonClassMethodPropertyHasAbstractModifer);
          this.next();
          return this.tsParseInterfaceDeclaration(node);
        }
      } else {
        this.unexpected(null, types._class);
      }
    }
  };
  types.placeholder = new TokenType("%%", {
    startsExpr: true
  });
  var placeholders = (superClass) => class extends superClass {
    parsePlaceholder(expectedNode) {
      if (this.match(types.placeholder)) {
        const node = this.startNode();
        this.next();
        this.assertNoSpace("Unexpected space in placeholder.");
        node.name = super.parseIdentifier(true);
        this.assertNoSpace("Unexpected space in placeholder.");
        this.expect(types.placeholder);
        return this.finishPlaceholder(node, expectedNode);
      }
    }
    finishPlaceholder(node, expectedNode) {
      const isFinished = !!(node.expectedNode && node.type === "Placeholder");
      node.expectedNode = expectedNode;
      return isFinished ? node : this.finishNode(node, "Placeholder");
    }
    getTokenFromCode(code) {
      if (code === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
        return this.finishOp(types.placeholder, 2);
      }
      return super.getTokenFromCode(...arguments);
    }
    parseExprAtom() {
      return this.parsePlaceholder("Expression") || super.parseExprAtom(...arguments);
    }
    parseIdentifier() {
      return this.parsePlaceholder("Identifier") || super.parseIdentifier(...arguments);
    }
    checkReservedWord(word) {
      if (word !== void 0)
        super.checkReservedWord(...arguments);
    }
    parseBindingAtom() {
      return this.parsePlaceholder("Pattern") || super.parseBindingAtom(...arguments);
    }
    checkLVal(expr) {
      if (expr.type !== "Placeholder")
        super.checkLVal(...arguments);
    }
    toAssignable(node) {
      if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
        node.expectedNode = "Pattern";
        return node;
      }
      return super.toAssignable(...arguments);
    }
    isLet(context) {
      if (super.isLet(context)) {
        return true;
      }
      if (!this.isContextual("let")) {
        return false;
      }
      if (context)
        return false;
      const nextToken = this.lookahead();
      if (nextToken.type === types.placeholder) {
        return true;
      }
      return false;
    }
    verifyBreakContinue(node) {
      if (node.label && node.label.type === "Placeholder")
        return;
      super.verifyBreakContinue(...arguments);
    }
    parseExpressionStatement(node, expr) {
      if (expr.type !== "Placeholder" || expr.extra && expr.extra.parenthesized) {
        return super.parseExpressionStatement(...arguments);
      }
      if (this.match(types.colon)) {
        const stmt = node;
        stmt.label = this.finishPlaceholder(expr, "Identifier");
        this.next();
        stmt.body = this.parseStatement("label");
        return this.finishNode(stmt, "LabeledStatement");
      }
      this.semicolon();
      node.name = expr.name;
      return this.finishPlaceholder(node, "Statement");
    }
    parseBlock() {
      return this.parsePlaceholder("BlockStatement") || super.parseBlock(...arguments);
    }
    parseFunctionId() {
      return this.parsePlaceholder("Identifier") || super.parseFunctionId(...arguments);
    }
    parseClass(node, isStatement, optionalId) {
      const type = isStatement ? "ClassDeclaration" : "ClassExpression";
      this.next();
      this.takeDecorators(node);
      const oldStrict = this.state.strict;
      const placeholder = this.parsePlaceholder("Identifier");
      if (placeholder) {
        if (this.match(types._extends) || this.match(types.placeholder) || this.match(types.braceL)) {
          node.id = placeholder;
        } else if (optionalId || !isStatement) {
          node.id = null;
          node.body = this.finishPlaceholder(placeholder, "ClassBody");
          return this.finishNode(node, type);
        } else {
          this.unexpected(null, "A class name is required");
        }
      } else {
        this.parseClassId(node, isStatement, optionalId);
      }
      this.parseClassSuper(node);
      node.body = this.parsePlaceholder("ClassBody") || this.parseClassBody(!!node.superClass, oldStrict);
      return this.finishNode(node, type);
    }
    parseExport(node) {
      const placeholder = this.parsePlaceholder("Identifier");
      if (!placeholder)
        return super.parseExport(...arguments);
      if (!this.isContextual("from") && !this.match(types.comma)) {
        node.specifiers = [];
        node.source = null;
        node.declaration = this.finishPlaceholder(placeholder, "Declaration");
        return this.finishNode(node, "ExportNamedDeclaration");
      }
      this.expectPlugin("exportDefaultFrom");
      const specifier = this.startNode();
      specifier.exported = placeholder;
      node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
      return super.parseExport(node);
    }
    isExportDefaultSpecifier() {
      if (this.match(types._default)) {
        const next = this.nextTokenStart();
        if (this.isUnparsedContextual(next, "from")) {
          if (this.input.startsWith(types.placeholder.label, this.nextTokenStartSince(next + 4))) {
            return true;
          }
        }
      }
      return super.isExportDefaultSpecifier();
    }
    maybeParseExportDefaultSpecifier(node) {
      if (node.specifiers && node.specifiers.length > 0) {
        return true;
      }
      return super.maybeParseExportDefaultSpecifier(...arguments);
    }
    checkExport(node) {
      const {
        specifiers
      } = node;
      if (specifiers == null ? void 0 : specifiers.length) {
        node.specifiers = specifiers.filter((node2) => node2.exported.type === "Placeholder");
      }
      super.checkExport(node);
      node.specifiers = specifiers;
    }
    parseImport(node) {
      const placeholder = this.parsePlaceholder("Identifier");
      if (!placeholder)
        return super.parseImport(...arguments);
      node.specifiers = [];
      if (!this.isContextual("from") && !this.match(types.comma)) {
        node.source = this.finishPlaceholder(placeholder, "StringLiteral");
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration");
      }
      const specifier = this.startNodeAtNode(placeholder);
      specifier.local = placeholder;
      this.finishNode(specifier, "ImportDefaultSpecifier");
      node.specifiers.push(specifier);
      if (this.eat(types.comma)) {
        const hasStarImport = this.maybeParseStarImportSpecifier(node);
        if (!hasStarImport)
          this.parseNamedImportSpecifiers(node);
      }
      this.expectContextual("from");
      node.source = this.parseImportSource();
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }
    parseImportSource() {
      return this.parsePlaceholder("StringLiteral") || super.parseImportSource(...arguments);
    }
  };
  var v8intrinsic = (superClass) => class extends superClass {
    parseV8Intrinsic() {
      if (this.match(types.modulo)) {
        const v8IntrinsicStart = this.state.start;
        const node = this.startNode();
        this.eat(types.modulo);
        if (this.match(types.name)) {
          const name = this.parseIdentifierName(this.state.start);
          const identifier = this.createIdentifier(node, name);
          identifier.type = "V8IntrinsicIdentifier";
          if (this.match(types.parenL)) {
            return identifier;
          }
        }
        this.unexpected(v8IntrinsicStart);
      }
    }
    parseExprAtom() {
      return this.parseV8Intrinsic() || super.parseExprAtom(...arguments);
    }
  };
  function hasPlugin(plugins, name) {
    return plugins.some((plugin) => {
      if (Array.isArray(plugin)) {
        return plugin[0] === name;
      } else {
        return plugin === name;
      }
    });
  }
  function getPluginOption(plugins, name, option) {
    const plugin = plugins.find((plugin2) => {
      if (Array.isArray(plugin2)) {
        return plugin2[0] === name;
      } else {
        return plugin2 === name;
      }
    });
    if (plugin && Array.isArray(plugin)) {
      return plugin[1][option];
    }
    return null;
  }
  var PIPELINE_PROPOSALS = ["minimal", "smart", "fsharp"];
  var RECORD_AND_TUPLE_SYNTAX_TYPES = ["hash", "bar"];
  function validatePlugins(plugins) {
    if (hasPlugin(plugins, "decorators")) {
      if (hasPlugin(plugins, "decorators-legacy")) {
        throw new Error("Cannot use the decorators and decorators-legacy plugin together");
      }
      const decoratorsBeforeExport = getPluginOption(plugins, "decorators", "decoratorsBeforeExport");
      if (decoratorsBeforeExport == null) {
        throw new Error("The 'decorators' plugin requires a 'decoratorsBeforeExport' option, whose value must be a boolean. If you are migrating from Babylon/Babel 6 or want to use the old decorators proposal, you should use the 'decorators-legacy' plugin instead of 'decorators'.");
      } else if (typeof decoratorsBeforeExport !== "boolean") {
        throw new Error("'decoratorsBeforeExport' must be a boolean.");
      }
    }
    if (hasPlugin(plugins, "flow") && hasPlugin(plugins, "typescript")) {
      throw new Error("Cannot combine flow and typescript plugins.");
    }
    if (hasPlugin(plugins, "placeholders") && hasPlugin(plugins, "v8intrinsic")) {
      throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
    }
    if (hasPlugin(plugins, "pipelineOperator") && !PIPELINE_PROPOSALS.includes(getPluginOption(plugins, "pipelineOperator", "proposal"))) {
      throw new Error("'pipelineOperator' requires 'proposal' option whose value should be one of: " + PIPELINE_PROPOSALS.map((p) => `'${p}'`).join(", "));
    }
    if (hasPlugin(plugins, "moduleAttributes")) {
      if (hasPlugin(plugins, "importAssertions")) {
        throw new Error("Cannot combine importAssertions and moduleAttributes plugins.");
      }
      const moduleAttributesVerionPluginOption = getPluginOption(plugins, "moduleAttributes", "version");
      if (moduleAttributesVerionPluginOption !== "may-2020") {
        throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
      }
    }
    if (hasPlugin(plugins, "recordAndTuple") && !RECORD_AND_TUPLE_SYNTAX_TYPES.includes(getPluginOption(plugins, "recordAndTuple", "syntaxType"))) {
      throw new Error("'recordAndTuple' requires 'syntaxType' option whose value should be one of: " + RECORD_AND_TUPLE_SYNTAX_TYPES.map((p) => `'${p}'`).join(", "));
    }
  }
  var mixinPlugins = {
    estree,
    jsx,
    flow,
    typescript,
    v8intrinsic,
    placeholders
  };
  var mixinPluginNames = Object.keys(mixinPlugins);
  var defaultOptions = {
    sourceType: "script",
    sourceFilename: void 0,
    startLine: 1,
    allowAwaitOutsideFunction: false,
    allowReturnOutsideFunction: false,
    allowImportExportEverywhere: false,
    allowSuperOutsideMethod: false,
    allowUndeclaredExports: false,
    plugins: [],
    strictMode: null,
    ranges: false,
    tokens: false,
    createParenthesizedExpressions: false,
    errorRecovery: false
  };
  function getOptions(opts) {
    const options = {};
    for (let _i = 0, _Object$keys = Object.keys(defaultOptions); _i < _Object$keys.length; _i++) {
      const key = _Object$keys[_i];
      options[key] = opts && opts[key] != null ? opts[key] : defaultOptions[key];
    }
    return options;
  }
  var State = class {
    constructor() {
      this.strict = void 0;
      this.curLine = void 0;
      this.startLoc = void 0;
      this.endLoc = void 0;
      this.errors = [];
      this.potentialArrowAt = -1;
      this.noArrowAt = [];
      this.noArrowParamsConversionAt = [];
      this.maybeInArrowParameters = false;
      this.inPipeline = false;
      this.inType = false;
      this.noAnonFunctionType = false;
      this.inPropertyName = false;
      this.hasFlowComment = false;
      this.isIterator = false;
      this.isDeclareContext = false;
      this.inAbstractClass = false;
      this.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };
      this.soloAwait = false;
      this.inFSharpPipelineDirectBody = false;
      this.labels = [];
      this.decoratorStack = [[]];
      this.comments = [];
      this.trailingComments = [];
      this.leadingComments = [];
      this.commentStack = [];
      this.commentPreviousNode = null;
      this.pos = 0;
      this.lineStart = 0;
      this.type = types.eof;
      this.value = null;
      this.start = 0;
      this.end = 0;
      this.lastTokEndLoc = null;
      this.lastTokStartLoc = null;
      this.lastTokStart = 0;
      this.lastTokEnd = 0;
      this.context = [types$1.braceStatement];
      this.exprAllowed = true;
      this.containsEsc = false;
      this.strictErrors = new Map();
      this.exportedIdentifiers = [];
      this.tokensLength = 0;
    }
    init(options) {
      this.strict = options.strictMode === false ? false : options.sourceType === "module";
      this.curLine = options.startLine;
      this.startLoc = this.endLoc = this.curPosition();
    }
    curPosition() {
      return new Position(this.curLine, this.pos - this.lineStart);
    }
    clone(skipArrays) {
      const state = new State();
      const keys = Object.keys(this);
      for (let i = 0, length = keys.length; i < length; i++) {
        const key = keys[i];
        let val = this[key];
        if (!skipArrays && Array.isArray(val)) {
          val = val.slice();
        }
        state[key] = val;
      }
      return state;
    }
  };
  var _isDigit = function isDigit(code) {
    return code >= 48 && code <= 57;
  };
  var VALID_REGEX_FLAGS = new Set(["g", "m", "s", "i", "y", "u"]);
  var forbiddenNumericSeparatorSiblings = {
    decBinOct: [46, 66, 69, 79, 95, 98, 101, 111],
    hex: [46, 88, 95, 120]
  };
  var allowedNumericSeparatorSiblings = {};
  allowedNumericSeparatorSiblings.bin = [48, 49];
  allowedNumericSeparatorSiblings.oct = [...allowedNumericSeparatorSiblings.bin, 50, 51, 52, 53, 54, 55];
  allowedNumericSeparatorSiblings.dec = [...allowedNumericSeparatorSiblings.oct, 56, 57];
  allowedNumericSeparatorSiblings.hex = [...allowedNumericSeparatorSiblings.dec, 65, 66, 67, 68, 69, 70, 97, 98, 99, 100, 101, 102];
  var Token = class {
    constructor(state) {
      this.type = state.type;
      this.value = state.value;
      this.start = state.start;
      this.end = state.end;
      this.loc = new SourceLocation(state.startLoc, state.endLoc);
    }
  };
  var Tokenizer = class extends ParserError {
    constructor(options, input) {
      super();
      this.isLookahead = void 0;
      this.tokens = [];
      this.state = new State();
      this.state.init(options);
      this.input = input;
      this.length = input.length;
      this.isLookahead = false;
    }
    pushToken(token) {
      this.tokens.length = this.state.tokensLength;
      this.tokens.push(token);
      ++this.state.tokensLength;
    }
    next() {
      if (!this.isLookahead) {
        this.checkKeywordEscapes();
        if (this.options.tokens) {
          this.pushToken(new Token(this.state));
        }
      }
      this.state.lastTokEnd = this.state.end;
      this.state.lastTokStart = this.state.start;
      this.state.lastTokEndLoc = this.state.endLoc;
      this.state.lastTokStartLoc = this.state.startLoc;
      this.nextToken();
    }
    eat(type) {
      if (this.match(type)) {
        this.next();
        return true;
      } else {
        return false;
      }
    }
    match(type) {
      return this.state.type === type;
    }
    lookahead() {
      const old = this.state;
      this.state = old.clone(true);
      this.isLookahead = true;
      this.next();
      this.isLookahead = false;
      const curr = this.state;
      this.state = old;
      return curr;
    }
    nextTokenStart() {
      return this.nextTokenStartSince(this.state.pos);
    }
    nextTokenStartSince(pos) {
      skipWhiteSpace.lastIndex = pos;
      const skip = skipWhiteSpace.exec(this.input);
      return pos + skip[0].length;
    }
    lookaheadCharCode() {
      return this.input.charCodeAt(this.nextTokenStart());
    }
    setStrict(strict) {
      this.state.strict = strict;
      if (strict) {
        this.state.strictErrors.forEach((message, pos) => this.raise(pos, message));
        this.state.strictErrors.clear();
      }
    }
    curContext() {
      return this.state.context[this.state.context.length - 1];
    }
    nextToken() {
      const curContext = this.curContext();
      if (!(curContext == null ? void 0 : curContext.preserveSpace))
        this.skipSpace();
      this.state.start = this.state.pos;
      this.state.startLoc = this.state.curPosition();
      if (this.state.pos >= this.length) {
        this.finishToken(types.eof);
        return;
      }
      const override = curContext == null ? void 0 : curContext.override;
      if (override) {
        override(this);
      } else {
        this.getTokenFromCode(this.input.codePointAt(this.state.pos));
      }
    }
    pushComment(block, text, start, end, startLoc, endLoc) {
      const comment = {
        type: block ? "CommentBlock" : "CommentLine",
        value: text,
        start,
        end,
        loc: new SourceLocation(startLoc, endLoc)
      };
      if (this.options.tokens)
        this.pushToken(comment);
      this.state.comments.push(comment);
      this.addComment(comment);
    }
    skipBlockComment() {
      const startLoc = this.state.curPosition();
      const start = this.state.pos;
      const end = this.input.indexOf("*/", this.state.pos + 2);
      if (end === -1)
        throw this.raise(start, ErrorMessages.UnterminatedComment);
      this.state.pos = end + 2;
      lineBreakG.lastIndex = start;
      let match;
      while ((match = lineBreakG.exec(this.input)) && match.index < this.state.pos) {
        ++this.state.curLine;
        this.state.lineStart = match.index + match[0].length;
      }
      if (this.isLookahead)
        return;
      this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
    }
    skipLineComment(startSkip) {
      const start = this.state.pos;
      const startLoc = this.state.curPosition();
      let ch = this.input.charCodeAt(this.state.pos += startSkip);
      if (this.state.pos < this.length) {
        while (!isNewLine(ch) && ++this.state.pos < this.length) {
          ch = this.input.charCodeAt(this.state.pos);
        }
      }
      if (this.isLookahead)
        return;
      this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
    }
    skipSpace() {
      loop:
        while (this.state.pos < this.length) {
          const ch = this.input.charCodeAt(this.state.pos);
          switch (ch) {
            case 32:
            case 160:
            case 9:
              ++this.state.pos;
              break;
            case 13:
              if (this.input.charCodeAt(this.state.pos + 1) === 10) {
                ++this.state.pos;
              }
            case 10:
            case 8232:
            case 8233:
              ++this.state.pos;
              ++this.state.curLine;
              this.state.lineStart = this.state.pos;
              break;
            case 47:
              switch (this.input.charCodeAt(this.state.pos + 1)) {
                case 42:
                  this.skipBlockComment();
                  break;
                case 47:
                  this.skipLineComment(2);
                  break;
                default:
                  break loop;
              }
              break;
            default:
              if (isWhitespace(ch)) {
                ++this.state.pos;
              } else {
                break loop;
              }
          }
        }
    }
    finishToken(type, val) {
      this.state.end = this.state.pos;
      this.state.endLoc = this.state.curPosition();
      const prevType = this.state.type;
      this.state.type = type;
      this.state.value = val;
      if (!this.isLookahead)
        this.updateContext(prevType);
    }
    readToken_numberSign() {
      if (this.state.pos === 0 && this.readToken_interpreter()) {
        return;
      }
      const nextPos = this.state.pos + 1;
      const next = this.input.charCodeAt(nextPos);
      if (next >= 48 && next <= 57) {
        throw this.raise(this.state.pos, ErrorMessages.UnexpectedDigitAfterHash);
      }
      if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
        this.expectPlugin("recordAndTuple");
        if (this.getPluginOption("recordAndTuple", "syntaxType") !== "hash") {
          throw this.raise(this.state.pos, next === 123 ? ErrorMessages.RecordExpressionHashIncorrectStartSyntaxType : ErrorMessages.TupleExpressionHashIncorrectStartSyntaxType);
        }
        if (next === 123) {
          this.finishToken(types.braceHashL);
        } else {
          this.finishToken(types.bracketHashL);
        }
        this.state.pos += 2;
      } else {
        this.finishOp(types.hash, 1);
      }
    }
    readToken_dot() {
      const next = this.input.charCodeAt(this.state.pos + 1);
      if (next >= 48 && next <= 57) {
        this.readNumber(true);
        return;
      }
      if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
        this.state.pos += 3;
        this.finishToken(types.ellipsis);
      } else {
        ++this.state.pos;
        this.finishToken(types.dot);
      }
    }
    readToken_slash() {
      if (this.state.exprAllowed && !this.state.inType) {
        ++this.state.pos;
        this.readRegexp();
        return;
      }
      const next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 61) {
        this.finishOp(types.assign, 2);
      } else {
        this.finishOp(types.slash, 1);
      }
    }
    readToken_interpreter() {
      if (this.state.pos !== 0 || this.length < 2)
        return false;
      let ch = this.input.charCodeAt(this.state.pos + 1);
      if (ch !== 33)
        return false;
      const start = this.state.pos;
      this.state.pos += 1;
      while (!isNewLine(ch) && ++this.state.pos < this.length) {
        ch = this.input.charCodeAt(this.state.pos);
      }
      const value = this.input.slice(start + 2, this.state.pos);
      this.finishToken(types.interpreterDirective, value);
      return true;
    }
    readToken_mult_modulo(code) {
      let type = code === 42 ? types.star : types.modulo;
      let width = 1;
      let next = this.input.charCodeAt(this.state.pos + 1);
      const exprAllowed = this.state.exprAllowed;
      if (code === 42 && next === 42) {
        width++;
        next = this.input.charCodeAt(this.state.pos + 2);
        type = types.exponent;
      }
      if (next === 61 && !exprAllowed) {
        width++;
        type = types.assign;
      }
      this.finishOp(type, width);
    }
    readToken_pipe_amp(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);
      if (next === code) {
        if (this.input.charCodeAt(this.state.pos + 2) === 61) {
          this.finishOp(types.assign, 3);
        } else {
          this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2);
        }
        return;
      }
      if (code === 124) {
        if (next === 62) {
          this.finishOp(types.pipeline, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && next === 125) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(this.state.pos, ErrorMessages.RecordExpressionBarIncorrectEndSyntaxType);
          }
          this.finishOp(types.braceBarR, 2);
          return;
        }
        if (this.hasPlugin("recordAndTuple") && next === 93) {
          if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
            throw this.raise(this.state.pos, ErrorMessages.TupleExpressionBarIncorrectEndSyntaxType);
          }
          this.finishOp(types.bracketBarR, 2);
          return;
        }
      }
      if (next === 61) {
        this.finishOp(types.assign, 2);
        return;
      }
      this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1);
    }
    readToken_caret() {
      const next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 61) {
        this.finishOp(types.assign, 2);
      } else {
        this.finishOp(types.bitwiseXOR, 1);
      }
    }
    readToken_plus_min(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);
      if (next === code) {
        if (next === 45 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 62 && (this.state.lastTokEnd === 0 || this.hasPrecedingLineBreak())) {
          this.skipLineComment(3);
          this.skipSpace();
          this.nextToken();
          return;
        }
        this.finishOp(types.incDec, 2);
        return;
      }
      if (next === 61) {
        this.finishOp(types.assign, 2);
      } else {
        this.finishOp(types.plusMin, 1);
      }
    }
    readToken_lt_gt(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);
      let size = 1;
      if (next === code) {
        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;
        if (this.input.charCodeAt(this.state.pos + size) === 61) {
          this.finishOp(types.assign, size + 1);
          return;
        }
        this.finishOp(types.bitShift, size);
        return;
      }
      if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
        this.skipLineComment(4);
        this.skipSpace();
        this.nextToken();
        return;
      }
      if (next === 61) {
        size = 2;
      }
      this.finishOp(types.relational, size);
    }
    readToken_eq_excl(code) {
      const next = this.input.charCodeAt(this.state.pos + 1);
      if (next === 61) {
        this.finishOp(types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
        return;
      }
      if (code === 61 && next === 62) {
        this.state.pos += 2;
        this.finishToken(types.arrow);
        return;
      }
      this.finishOp(code === 61 ? types.eq : types.bang, 1);
    }
    readToken_question() {
      const next = this.input.charCodeAt(this.state.pos + 1);
      const next2 = this.input.charCodeAt(this.state.pos + 2);
      if (next === 63) {
        if (next2 === 61) {
          this.finishOp(types.assign, 3);
        } else {
          this.finishOp(types.nullishCoalescing, 2);
        }
      } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
        this.state.pos += 2;
        this.finishToken(types.questionDot);
      } else {
        ++this.state.pos;
        this.finishToken(types.question);
      }
    }
    getTokenFromCode(code) {
      switch (code) {
        case 46:
          this.readToken_dot();
          return;
        case 40:
          ++this.state.pos;
          this.finishToken(types.parenL);
          return;
        case 41:
          ++this.state.pos;
          this.finishToken(types.parenR);
          return;
        case 59:
          ++this.state.pos;
          this.finishToken(types.semi);
          return;
        case 44:
          ++this.state.pos;
          this.finishToken(types.comma);
          return;
        case 91:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(this.state.pos, ErrorMessages.TupleExpressionBarIncorrectStartSyntaxType);
            }
            this.finishToken(types.bracketBarL);
            this.state.pos += 2;
          } else {
            ++this.state.pos;
            this.finishToken(types.bracketL);
          }
          return;
        case 93:
          ++this.state.pos;
          this.finishToken(types.bracketR);
          return;
        case 123:
          if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(this.state.pos, ErrorMessages.RecordExpressionBarIncorrectStartSyntaxType);
            }
            this.finishToken(types.braceBarL);
            this.state.pos += 2;
          } else {
            ++this.state.pos;
            this.finishToken(types.braceL);
          }
          return;
        case 125:
          ++this.state.pos;
          this.finishToken(types.braceR);
          return;
        case 58:
          if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
            this.finishOp(types.doubleColon, 2);
          } else {
            ++this.state.pos;
            this.finishToken(types.colon);
          }
          return;
        case 63:
          this.readToken_question();
          return;
        case 96:
          ++this.state.pos;
          this.finishToken(types.backQuote);
          return;
        case 48: {
          const next = this.input.charCodeAt(this.state.pos + 1);
          if (next === 120 || next === 88) {
            this.readRadixNumber(16);
            return;
          }
          if (next === 111 || next === 79) {
            this.readRadixNumber(8);
            return;
          }
          if (next === 98 || next === 66) {
            this.readRadixNumber(2);
            return;
          }
        }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          this.readNumber(false);
          return;
        case 34:
        case 39:
          this.readString(code);
          return;
        case 47:
          this.readToken_slash();
          return;
        case 37:
        case 42:
          this.readToken_mult_modulo(code);
          return;
        case 124:
        case 38:
          this.readToken_pipe_amp(code);
          return;
        case 94:
          this.readToken_caret();
          return;
        case 43:
        case 45:
          this.readToken_plus_min(code);
          return;
        case 60:
        case 62:
          this.readToken_lt_gt(code);
          return;
        case 61:
        case 33:
          this.readToken_eq_excl(code);
          return;
        case 126:
          this.finishOp(types.tilde, 1);
          return;
        case 64:
          ++this.state.pos;
          this.finishToken(types.at);
          return;
        case 35:
          this.readToken_numberSign();
          return;
        case 92:
          this.readWord();
          return;
        default:
          if (isIdentifierStart(code)) {
            this.readWord();
            return;
          }
      }
      throw this.raise(this.state.pos, ErrorMessages.InvalidOrUnexpectedToken, String.fromCodePoint(code));
    }
    finishOp(type, size) {
      const str = this.input.slice(this.state.pos, this.state.pos + size);
      this.state.pos += size;
      this.finishToken(type, str);
    }
    readRegexp() {
      const start = this.state.pos;
      let escaped, inClass;
      for (; ; ) {
        if (this.state.pos >= this.length) {
          throw this.raise(start, ErrorMessages.UnterminatedRegExp);
        }
        const ch = this.input.charAt(this.state.pos);
        if (lineBreak.test(ch)) {
          throw this.raise(start, ErrorMessages.UnterminatedRegExp);
        }
        if (escaped) {
          escaped = false;
        } else {
          if (ch === "[") {
            inClass = true;
          } else if (ch === "]" && inClass) {
            inClass = false;
          } else if (ch === "/" && !inClass) {
            break;
          }
          escaped = ch === "\\";
        }
        ++this.state.pos;
      }
      const content = this.input.slice(start, this.state.pos);
      ++this.state.pos;
      let mods = "";
      while (this.state.pos < this.length) {
        const char = this.input[this.state.pos];
        const charCode = this.input.codePointAt(this.state.pos);
        if (VALID_REGEX_FLAGS.has(char)) {
          if (mods.indexOf(char) > -1) {
            this.raise(this.state.pos + 1, ErrorMessages.DuplicateRegExpFlags);
          }
        } else if (isIdentifierChar(charCode) || charCode === 92) {
          this.raise(this.state.pos + 1, ErrorMessages.MalformedRegExpFlags);
        } else {
          break;
        }
        ++this.state.pos;
        mods += char;
      }
      this.finishToken(types.regexp, {
        pattern: content,
        flags: mods
      });
    }
    readInt(radix, len, forceLen, allowNumSeparator = true) {
      const start = this.state.pos;
      const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
      const allowedSiblings = radix === 16 ? allowedNumericSeparatorSiblings.hex : radix === 10 ? allowedNumericSeparatorSiblings.dec : radix === 8 ? allowedNumericSeparatorSiblings.oct : allowedNumericSeparatorSiblings.bin;
      let invalid = false;
      let total = 0;
      for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
        const code = this.input.charCodeAt(this.state.pos);
        let val;
        if (code === 95) {
          const prev = this.input.charCodeAt(this.state.pos - 1);
          const next = this.input.charCodeAt(this.state.pos + 1);
          if (allowedSiblings.indexOf(next) === -1) {
            this.raise(this.state.pos, ErrorMessages.UnexpectedNumericSeparator);
          } else if (forbiddenSiblings.indexOf(prev) > -1 || forbiddenSiblings.indexOf(next) > -1 || Number.isNaN(next)) {
            this.raise(this.state.pos, ErrorMessages.UnexpectedNumericSeparator);
          }
          if (!allowNumSeparator) {
            this.raise(this.state.pos, ErrorMessages.NumericSeparatorInEscapeSequence);
          }
          ++this.state.pos;
          continue;
        }
        if (code >= 97) {
          val = code - 97 + 10;
        } else if (code >= 65) {
          val = code - 65 + 10;
        } else if (_isDigit(code)) {
          val = code - 48;
        } else {
          val = Infinity;
        }
        if (val >= radix) {
          if (this.options.errorRecovery && val <= 9) {
            val = 0;
            this.raise(this.state.start + i + 2, ErrorMessages.InvalidDigit, radix);
          } else if (forceLen) {
            val = 0;
            invalid = true;
          } else {
            break;
          }
        }
        ++this.state.pos;
        total = total * radix + val;
      }
      if (this.state.pos === start || len != null && this.state.pos - start !== len || invalid) {
        return null;
      }
      return total;
    }
    readRadixNumber(radix) {
      const start = this.state.pos;
      let isBigInt = false;
      this.state.pos += 2;
      const val = this.readInt(radix);
      if (val == null) {
        this.raise(this.state.start + 2, ErrorMessages.InvalidDigit, radix);
      }
      const next = this.input.charCodeAt(this.state.pos);
      if (next === 110) {
        ++this.state.pos;
        isBigInt = true;
      } else if (next === 109) {
        throw this.raise(start, ErrorMessages.InvalidDecimal);
      }
      if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
        throw this.raise(this.state.pos, ErrorMessages.NumberIdentifier);
      }
      if (isBigInt) {
        const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
        this.finishToken(types.bigint, str);
        return;
      }
      this.finishToken(types.num, val);
    }
    readNumber(startsWithDot) {
      const start = this.state.pos;
      let isFloat = false;
      let isBigInt = false;
      let isDecimal = false;
      let hasExponent = false;
      let isOctal = false;
      if (!startsWithDot && this.readInt(10) === null) {
        this.raise(start, ErrorMessages.InvalidNumber);
      }
      const hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;
      if (hasLeadingZero) {
        const integer = this.input.slice(start, this.state.pos);
        this.recordStrictModeErrors(start, ErrorMessages.StrictOctalLiteral);
        if (!this.state.strict) {
          const underscorePos = integer.indexOf("_");
          if (underscorePos > 0) {
            this.raise(underscorePos + start, ErrorMessages.ZeroDigitNumericSeparator);
          }
        }
        isOctal = hasLeadingZero && !/[89]/.test(integer);
      }
      let next = this.input.charCodeAt(this.state.pos);
      if (next === 46 && !isOctal) {
        ++this.state.pos;
        this.readInt(10);
        isFloat = true;
        next = this.input.charCodeAt(this.state.pos);
      }
      if ((next === 69 || next === 101) && !isOctal) {
        next = this.input.charCodeAt(++this.state.pos);
        if (next === 43 || next === 45) {
          ++this.state.pos;
        }
        if (this.readInt(10) === null) {
          this.raise(start, ErrorMessages.InvalidOrMissingExponent);
        }
        isFloat = true;
        hasExponent = true;
        next = this.input.charCodeAt(this.state.pos);
      }
      if (next === 110) {
        if (isFloat || hasLeadingZero) {
          this.raise(start, ErrorMessages.InvalidBigIntLiteral);
        }
        ++this.state.pos;
        isBigInt = true;
      }
      if (next === 109) {
        this.expectPlugin("decimal", this.state.pos);
        if (hasExponent || hasLeadingZero) {
          this.raise(start, ErrorMessages.InvalidDecimal);
        }
        ++this.state.pos;
        isDecimal = true;
      }
      if (isIdentifierStart(this.input.codePointAt(this.state.pos))) {
        throw this.raise(this.state.pos, ErrorMessages.NumberIdentifier);
      }
      const str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");
      if (isBigInt) {
        this.finishToken(types.bigint, str);
        return;
      }
      if (isDecimal) {
        this.finishToken(types.decimal, str);
        return;
      }
      const val = isOctal ? parseInt(str, 8) : parseFloat(str);
      this.finishToken(types.num, val);
    }
    readCodePoint(throwOnInvalid) {
      const ch = this.input.charCodeAt(this.state.pos);
      let code;
      if (ch === 123) {
        const codePos = ++this.state.pos;
        code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos, true, throwOnInvalid);
        ++this.state.pos;
        if (code !== null && code > 1114111) {
          if (throwOnInvalid) {
            this.raise(codePos, ErrorMessages.InvalidCodePoint);
          } else {
            return null;
          }
        }
      } else {
        code = this.readHexChar(4, false, throwOnInvalid);
      }
      return code;
    }
    readString(quote) {
      let out = "", chunkStart = ++this.state.pos;
      for (; ; ) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
        }
        const ch = this.input.charCodeAt(this.state.pos);
        if (ch === quote)
          break;
        if (ch === 92) {
          out += this.input.slice(chunkStart, this.state.pos);
          out += this.readEscapedChar(false);
          chunkStart = this.state.pos;
        } else if (ch === 8232 || ch === 8233) {
          ++this.state.pos;
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
        } else if (isNewLine(ch)) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedString);
        } else {
          ++this.state.pos;
        }
      }
      out += this.input.slice(chunkStart, this.state.pos++);
      this.finishToken(types.string, out);
    }
    readTmplToken() {
      let out = "", chunkStart = this.state.pos, containsInvalid = false;
      for (; ; ) {
        if (this.state.pos >= this.length) {
          throw this.raise(this.state.start, ErrorMessages.UnterminatedTemplate);
        }
        const ch = this.input.charCodeAt(this.state.pos);
        if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
          if (this.state.pos === this.state.start && this.match(types.template)) {
            if (ch === 36) {
              this.state.pos += 2;
              this.finishToken(types.dollarBraceL);
              return;
            } else {
              ++this.state.pos;
              this.finishToken(types.backQuote);
              return;
            }
          }
          out += this.input.slice(chunkStart, this.state.pos);
          this.finishToken(types.template, containsInvalid ? null : out);
          return;
        }
        if (ch === 92) {
          out += this.input.slice(chunkStart, this.state.pos);
          const escaped = this.readEscapedChar(true);
          if (escaped === null) {
            containsInvalid = true;
          } else {
            out += escaped;
          }
          chunkStart = this.state.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.state.pos);
          ++this.state.pos;
          switch (ch) {
            case 13:
              if (this.input.charCodeAt(this.state.pos) === 10) {
                ++this.state.pos;
              }
            case 10:
              out += "\n";
              break;
            default:
              out += String.fromCharCode(ch);
              break;
          }
          ++this.state.curLine;
          this.state.lineStart = this.state.pos;
          chunkStart = this.state.pos;
        } else {
          ++this.state.pos;
        }
      }
    }
    recordStrictModeErrors(pos, message) {
      if (this.state.strict && !this.state.strictErrors.has(pos)) {
        this.raise(pos, message);
      } else {
        this.state.strictErrors.set(pos, message);
      }
    }
    readEscapedChar(inTemplate) {
      const throwOnInvalid = !inTemplate;
      const ch = this.input.charCodeAt(++this.state.pos);
      ++this.state.pos;
      switch (ch) {
        case 110:
          return "\n";
        case 114:
          return "\r";
        case 120: {
          const code = this.readHexChar(2, false, throwOnInvalid);
          return code === null ? null : String.fromCharCode(code);
        }
        case 117: {
          const code = this.readCodePoint(throwOnInvalid);
          return code === null ? null : String.fromCodePoint(code);
        }
        case 116:
          return "	";
        case 98:
          return "\b";
        case 118:
          return "\v";
        case 102:
          return "\f";
        case 13:
          if (this.input.charCodeAt(this.state.pos) === 10) {
            ++this.state.pos;
          }
        case 10:
          this.state.lineStart = this.state.pos;
          ++this.state.curLine;
        case 8232:
        case 8233:
          return "";
        case 56:
        case 57:
          if (inTemplate) {
            return null;
          } else {
            this.recordStrictModeErrors(this.state.pos - 1, ErrorMessages.StrictNumericEscape);
          }
        default:
          if (ch >= 48 && ch <= 55) {
            const codePos = this.state.pos - 1;
            const match = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/);
            let octalStr = match[0];
            let octal = parseInt(octalStr, 8);
            if (octal > 255) {
              octalStr = octalStr.slice(0, -1);
              octal = parseInt(octalStr, 8);
            }
            this.state.pos += octalStr.length - 1;
            const next = this.input.charCodeAt(this.state.pos);
            if (octalStr !== "0" || next === 56 || next === 57) {
              if (inTemplate) {
                return null;
              } else {
                this.recordStrictModeErrors(codePos, ErrorMessages.StrictNumericEscape);
              }
            }
            return String.fromCharCode(octal);
          }
          return String.fromCharCode(ch);
      }
    }
    readHexChar(len, forceLen, throwOnInvalid) {
      const codePos = this.state.pos;
      const n = this.readInt(16, len, forceLen, false);
      if (n === null) {
        if (throwOnInvalid) {
          this.raise(codePos, ErrorMessages.InvalidEscapeSequence);
        } else {
          this.state.pos = codePos - 1;
        }
      }
      return n;
    }
    readWord1() {
      let word = "";
      this.state.containsEsc = false;
      const start = this.state.pos;
      let chunkStart = this.state.pos;
      while (this.state.pos < this.length) {
        const ch = this.input.codePointAt(this.state.pos);
        if (isIdentifierChar(ch)) {
          this.state.pos += ch <= 65535 ? 1 : 2;
        } else if (this.state.isIterator && ch === 64) {
          ++this.state.pos;
        } else if (ch === 92) {
          this.state.containsEsc = true;
          word += this.input.slice(chunkStart, this.state.pos);
          const escStart = this.state.pos;
          const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;
          if (this.input.charCodeAt(++this.state.pos) !== 117) {
            this.raise(this.state.pos, ErrorMessages.MissingUnicodeEscape);
            continue;
          }
          ++this.state.pos;
          const esc = this.readCodePoint(true);
          if (esc !== null) {
            if (!identifierCheck(esc)) {
              this.raise(escStart, ErrorMessages.EscapedCharNotAnIdentifier);
            }
            word += String.fromCodePoint(esc);
          }
          chunkStart = this.state.pos;
        } else {
          break;
        }
      }
      return word + this.input.slice(chunkStart, this.state.pos);
    }
    isIterator(word) {
      return word === "@@iterator" || word === "@@asyncIterator";
    }
    readWord() {
      const word = this.readWord1();
      const type = keywords.get(word) || types.name;
      if (this.state.isIterator && (!this.isIterator(word) || !this.state.inType)) {
        this.raise(this.state.pos, ErrorMessages.InvalidIdentifier, word);
      }
      this.finishToken(type, word);
    }
    checkKeywordEscapes() {
      const kw = this.state.type.keyword;
      if (kw && this.state.containsEsc) {
        this.raise(this.state.start, ErrorMessages.InvalidEscapedReservedWord, kw);
      }
    }
    braceIsBlock(prevType) {
      const parent = this.curContext();
      if (parent === types$1.functionExpression || parent === types$1.functionStatement) {
        return true;
      }
      if (prevType === types.colon && (parent === types$1.braceStatement || parent === types$1.braceExpression)) {
        return !parent.isExpr;
      }
      if (prevType === types._return || prevType === types.name && this.state.exprAllowed) {
        return this.hasPrecedingLineBreak();
      }
      if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow) {
        return true;
      }
      if (prevType === types.braceL) {
        return parent === types$1.braceStatement;
      }
      if (prevType === types._var || prevType === types._const || prevType === types.name) {
        return false;
      }
      if (prevType === types.relational) {
        return true;
      }
      return !this.state.exprAllowed;
    }
    updateContext(prevType) {
      const type = this.state.type;
      let update;
      if (type.keyword && (prevType === types.dot || prevType === types.questionDot)) {
        this.state.exprAllowed = false;
      } else if (update = type.updateContext) {
        update.call(this, prevType);
      } else {
        this.state.exprAllowed = type.beforeExpr;
      }
    }
  };
  var ClassScope = class {
    constructor() {
      this.privateNames = new Set();
      this.loneAccessors = new Map();
      this.undefinedPrivateNames = new Map();
    }
  };
  var ClassScopeHandler = class {
    constructor(raise) {
      this.stack = [];
      this.undefinedPrivateNames = new Map();
      this.raise = raise;
    }
    current() {
      return this.stack[this.stack.length - 1];
    }
    enter() {
      this.stack.push(new ClassScope());
    }
    exit() {
      const oldClassScope = this.stack.pop();
      const current = this.current();
      for (let _i = 0, _Array$from = Array.from(oldClassScope.undefinedPrivateNames); _i < _Array$from.length; _i++) {
        const [name, pos] = _Array$from[_i];
        if (current) {
          if (!current.undefinedPrivateNames.has(name)) {
            current.undefinedPrivateNames.set(name, pos);
          }
        } else {
          this.raise(pos, ErrorMessages.InvalidPrivateFieldResolution, name);
        }
      }
    }
    declarePrivateName(name, elementType, pos) {
      const classScope = this.current();
      let redefined = classScope.privateNames.has(name);
      if (elementType & CLASS_ELEMENT_KIND_ACCESSOR) {
        const accessor = redefined && classScope.loneAccessors.get(name);
        if (accessor) {
          const oldStatic = accessor & CLASS_ELEMENT_FLAG_STATIC;
          const newStatic = elementType & CLASS_ELEMENT_FLAG_STATIC;
          const oldKind = accessor & CLASS_ELEMENT_KIND_ACCESSOR;
          const newKind = elementType & CLASS_ELEMENT_KIND_ACCESSOR;
          redefined = oldKind === newKind || oldStatic !== newStatic;
          if (!redefined)
            classScope.loneAccessors.delete(name);
        } else if (!redefined) {
          classScope.loneAccessors.set(name, elementType);
        }
      }
      if (redefined) {
        this.raise(pos, ErrorMessages.PrivateNameRedeclaration, name);
      }
      classScope.privateNames.add(name);
      classScope.undefinedPrivateNames.delete(name);
    }
    usePrivateName(name, pos) {
      let classScope;
      for (let _i2 = 0, _this$stack = this.stack; _i2 < _this$stack.length; _i2++) {
        classScope = _this$stack[_i2];
        if (classScope.privateNames.has(name))
          return;
      }
      if (classScope) {
        classScope.undefinedPrivateNames.set(name, pos);
      } else {
        this.raise(pos, ErrorMessages.InvalidPrivateFieldResolution, name);
      }
    }
  };
  var kExpression = 0;
  var kMaybeArrowParameterDeclaration = 1;
  var kMaybeAsyncArrowParameterDeclaration = 2;
  var kParameterDeclaration = 3;
  var ExpressionScope = class {
    constructor(type = kExpression) {
      this.type = void 0;
      this.type = type;
    }
    canBeArrowParameterDeclaration() {
      return this.type === kMaybeAsyncArrowParameterDeclaration || this.type === kMaybeArrowParameterDeclaration;
    }
    isCertainlyParameterDeclaration() {
      return this.type === kParameterDeclaration;
    }
  };
  var ArrowHeadParsingScope = class extends ExpressionScope {
    constructor(type) {
      super(type);
      this.errors = new Map();
    }
    recordDeclarationError(pos, message) {
      this.errors.set(pos, message);
    }
    clearDeclarationError(pos) {
      this.errors.delete(pos);
    }
    iterateErrors(iterator) {
      this.errors.forEach(iterator);
    }
  };
  var ExpressionScopeHandler = class {
    constructor(raise) {
      this.stack = [new ExpressionScope()];
      this.raise = raise;
    }
    enter(scope) {
      this.stack.push(scope);
    }
    exit() {
      this.stack.pop();
    }
    recordParameterInitializerError(pos, message) {
      const {
        stack
      } = this;
      let i = stack.length - 1;
      let scope = stack[i];
      while (!scope.isCertainlyParameterDeclaration()) {
        if (scope.canBeArrowParameterDeclaration()) {
          scope.recordDeclarationError(pos, message);
        } else {
          return;
        }
        scope = stack[--i];
      }
      this.raise(pos, message);
    }
    recordParenthesizedIdentifierError(pos, message) {
      const {
        stack
      } = this;
      const scope = stack[stack.length - 1];
      if (scope.isCertainlyParameterDeclaration()) {
        this.raise(pos, message);
      } else if (scope.canBeArrowParameterDeclaration()) {
        scope.recordDeclarationError(pos, message);
      } else {
        return;
      }
    }
    recordAsyncArrowParametersError(pos, message) {
      const {
        stack
      } = this;
      let i = stack.length - 1;
      let scope = stack[i];
      while (scope.canBeArrowParameterDeclaration()) {
        if (scope.type === kMaybeAsyncArrowParameterDeclaration) {
          scope.recordDeclarationError(pos, message);
        }
        scope = stack[--i];
      }
    }
    validateAsPattern() {
      const {
        stack
      } = this;
      const currentScope = stack[stack.length - 1];
      if (!currentScope.canBeArrowParameterDeclaration())
        return;
      currentScope.iterateErrors((message, pos) => {
        this.raise(pos, message);
        let i = stack.length - 2;
        let scope = stack[i];
        while (scope.canBeArrowParameterDeclaration()) {
          scope.clearDeclarationError(pos);
          scope = stack[--i];
        }
      });
    }
  };
  function newParameterDeclarationScope() {
    return new ExpressionScope(kParameterDeclaration);
  }
  function newArrowHeadScope() {
    return new ArrowHeadParsingScope(kMaybeArrowParameterDeclaration);
  }
  function newAsyncArrowScope() {
    return new ArrowHeadParsingScope(kMaybeAsyncArrowParameterDeclaration);
  }
  function newExpressionScope() {
    return new ExpressionScope();
  }
  var UtilParser = class extends Tokenizer {
    addExtra(node, key, val) {
      if (!node)
        return;
      const extra = node.extra = node.extra || {};
      extra[key] = val;
    }
    isRelational(op) {
      return this.match(types.relational) && this.state.value === op;
    }
    expectRelational(op) {
      if (this.isRelational(op)) {
        this.next();
      } else {
        this.unexpected(null, types.relational);
      }
    }
    isContextual(name) {
      return this.match(types.name) && this.state.value === name && !this.state.containsEsc;
    }
    isUnparsedContextual(nameStart, name) {
      const nameEnd = nameStart + name.length;
      return this.input.slice(nameStart, nameEnd) === name && (nameEnd === this.input.length || !isIdentifierChar(this.input.charCodeAt(nameEnd)));
    }
    isLookaheadContextual(name) {
      const next = this.nextTokenStart();
      return this.isUnparsedContextual(next, name);
    }
    eatContextual(name) {
      return this.isContextual(name) && this.eat(types.name);
    }
    expectContextual(name, message) {
      if (!this.eatContextual(name))
        this.unexpected(null, message);
    }
    canInsertSemicolon() {
      return this.match(types.eof) || this.match(types.braceR) || this.hasPrecedingLineBreak();
    }
    hasPrecedingLineBreak() {
      return lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
    }
    hasFollowingLineBreak() {
      return lineBreak.test(this.input.slice(this.state.end, this.nextTokenStart()));
    }
    isLineTerminator() {
      return this.eat(types.semi) || this.canInsertSemicolon();
    }
    semicolon(allowAsi = true) {
      if (allowAsi ? this.isLineTerminator() : this.eat(types.semi))
        return;
      this.raise(this.state.lastTokEnd, ErrorMessages.MissingSemicolon);
    }
    expect(type, pos) {
      this.eat(type) || this.unexpected(pos, type);
    }
    assertNoSpace(message = "Unexpected space.") {
      if (this.state.start > this.state.lastTokEnd) {
        this.raise(this.state.lastTokEnd, message);
      }
    }
    unexpected(pos, messageOrType = "Unexpected token") {
      if (typeof messageOrType !== "string") {
        messageOrType = `Unexpected token, expected "${messageOrType.label}"`;
      }
      throw this.raise(pos != null ? pos : this.state.start, messageOrType);
    }
    expectPlugin(name, pos) {
      if (!this.hasPlugin(name)) {
        throw this.raiseWithData(pos != null ? pos : this.state.start, {
          missingPlugin: [name]
        }, `This experimental syntax requires enabling the parser plugin: '${name}'`);
      }
      return true;
    }
    expectOnePlugin(names, pos) {
      if (!names.some((n) => this.hasPlugin(n))) {
        throw this.raiseWithData(pos != null ? pos : this.state.start, {
          missingPlugin: names
        }, `This experimental syntax requires enabling one of the following parser plugin(s): '${names.join(", ")}'`);
      }
    }
    tryParse(fn, oldState = this.state.clone()) {
      const abortSignal = {
        node: null
      };
      try {
        const node = fn((node2 = null) => {
          abortSignal.node = node2;
          throw abortSignal;
        });
        if (this.state.errors.length > oldState.errors.length) {
          const failState = this.state;
          this.state = oldState;
          return {
            node,
            error: failState.errors[oldState.errors.length],
            thrown: false,
            aborted: false,
            failState
          };
        }
        return {
          node,
          error: null,
          thrown: false,
          aborted: false,
          failState: null
        };
      } catch (error) {
        const failState = this.state;
        this.state = oldState;
        if (error instanceof SyntaxError) {
          return {
            node: null,
            error,
            thrown: true,
            aborted: false,
            failState
          };
        }
        if (error === abortSignal) {
          return {
            node: abortSignal.node,
            error: null,
            thrown: false,
            aborted: true,
            failState
          };
        }
        throw error;
      }
    }
    checkExpressionErrors(refExpressionErrors, andThrow) {
      if (!refExpressionErrors)
        return false;
      const {
        shorthandAssign,
        doubleProto
      } = refExpressionErrors;
      if (!andThrow)
        return shorthandAssign >= 0 || doubleProto >= 0;
      if (shorthandAssign >= 0) {
        this.unexpected(shorthandAssign);
      }
      if (doubleProto >= 0) {
        this.raise(doubleProto, ErrorMessages.DuplicateProto);
      }
    }
    isLiteralPropertyName() {
      return this.match(types.name) || !!this.state.type.keyword || this.match(types.string) || this.match(types.num) || this.match(types.bigint) || this.match(types.decimal);
    }
    isPrivateName(node) {
      return node.type === "PrivateName";
    }
    getPrivateNameSV(node) {
      return node.id.name;
    }
    hasPropertyAsPrivateName(node) {
      return (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") && this.isPrivateName(node.property);
    }
    isOptionalChain(node) {
      return node.type === "OptionalMemberExpression" || node.type === "OptionalCallExpression";
    }
    isObjectProperty(node) {
      return node.type === "ObjectProperty";
    }
    isObjectMethod(node) {
      return node.type === "ObjectMethod";
    }
    initializeScopes(inModule = this.options.sourceType === "module") {
      const oldLabels = this.state.labels;
      this.state.labels = [];
      const oldExportedIdentifiers = this.state.exportedIdentifiers;
      this.state.exportedIdentifiers = [];
      const oldInModule = this.inModule;
      this.inModule = inModule;
      const oldScope = this.scope;
      const ScopeHandler2 = this.getScopeHandler();
      this.scope = new ScopeHandler2(this.raise.bind(this), this.inModule);
      const oldProdParam = this.prodParam;
      this.prodParam = new ProductionParameterHandler();
      const oldClassScope = this.classScope;
      this.classScope = new ClassScopeHandler(this.raise.bind(this));
      const oldExpressionScope = this.expressionScope;
      this.expressionScope = new ExpressionScopeHandler(this.raise.bind(this));
      return () => {
        this.state.labels = oldLabels;
        this.state.exportedIdentifiers = oldExportedIdentifiers;
        this.inModule = oldInModule;
        this.scope = oldScope;
        this.prodParam = oldProdParam;
        this.classScope = oldClassScope;
        this.expressionScope = oldExpressionScope;
      };
    }
    enterInitialScopes() {
      let paramFlags = PARAM;
      if (this.hasPlugin("topLevelAwait") && this.inModule) {
        paramFlags |= PARAM_AWAIT;
      }
      this.scope.enter(SCOPE_PROGRAM);
      this.prodParam.enter(paramFlags);
    }
  };
  var ExpressionErrors = class {
    constructor() {
      this.shorthandAssign = -1;
      this.doubleProto = -1;
    }
  };
  var Node = class {
    constructor(parser, pos, loc) {
      this.type = void 0;
      this.start = void 0;
      this.end = void 0;
      this.loc = void 0;
      this.range = void 0;
      this.leadingComments = void 0;
      this.trailingComments = void 0;
      this.innerComments = void 0;
      this.extra = void 0;
      this.type = "";
      this.start = pos;
      this.end = 0;
      this.loc = new SourceLocation(loc);
      if (parser == null ? void 0 : parser.options.ranges)
        this.range = [pos, 0];
      if (parser == null ? void 0 : parser.filename)
        this.loc.filename = parser.filename;
    }
    __clone() {
      const newNode = new Node();
      const keys = Object.keys(this);
      for (let i = 0, length = keys.length; i < length; i++) {
        const key = keys[i];
        if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
          newNode[key] = this[key];
        }
      }
      return newNode;
    }
  };
  var NodeUtils = class extends UtilParser {
    startNode() {
      return new Node(this, this.state.start, this.state.startLoc);
    }
    startNodeAt(pos, loc) {
      return new Node(this, pos, loc);
    }
    startNodeAtNode(type) {
      return this.startNodeAt(type.start, type.loc.start);
    }
    finishNode(node, type) {
      return this.finishNodeAt(node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
    }
    finishNodeAt(node, type, pos, loc) {
      node.type = type;
      node.end = pos;
      node.loc.end = loc;
      if (this.options.ranges)
        node.range[1] = pos;
      this.processComment(node);
      return node;
    }
    resetStartLocation(node, start, startLoc) {
      node.start = start;
      node.loc.start = startLoc;
      if (this.options.ranges)
        node.range[0] = start;
    }
    resetEndLocation(node, end = this.state.lastTokEnd, endLoc = this.state.lastTokEndLoc) {
      node.end = end;
      node.loc.end = endLoc;
      if (this.options.ranges)
        node.range[1] = end;
    }
    resetStartLocationFromNode(node, locationNode) {
      this.resetStartLocation(node, locationNode.start, locationNode.loc.start);
    }
  };
  var unwrapParenthesizedExpression = (node) => {
    return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
  };
  var LValParser = class extends NodeUtils {
    toAssignable(node, isLHS = false) {
      var _node$extra, _node$extra3;
      let parenthesized = void 0;
      if (node.type === "ParenthesizedExpression" || ((_node$extra = node.extra) == null ? void 0 : _node$extra.parenthesized)) {
        parenthesized = unwrapParenthesizedExpression(node);
        if (isLHS) {
          if (parenthesized.type === "Identifier") {
            this.expressionScope.recordParenthesizedIdentifierError(node.start, ErrorMessages.InvalidParenthesizedAssignment);
          } else if (parenthesized.type !== "MemberExpression") {
            this.raise(node.start, ErrorMessages.InvalidParenthesizedAssignment);
          }
        } else {
          this.raise(node.start, ErrorMessages.InvalidParenthesizedAssignment);
        }
      }
      switch (node.type) {
        case "Identifier":
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
          break;
        case "ObjectExpression":
          node.type = "ObjectPattern";
          for (let i = 0, length = node.properties.length, last2 = length - 1; i < length; i++) {
            var _node$extra2;
            const prop = node.properties[i];
            const isLast = i === last2;
            this.toAssignableObjectExpressionProp(prop, isLast, isLHS);
            if (isLast && prop.type === "RestElement" && ((_node$extra2 = node.extra) == null ? void 0 : _node$extra2.trailingComma)) {
              this.raiseRestNotLast(node.extra.trailingComma);
            }
          }
          break;
        case "ObjectProperty":
          this.toAssignable(node.value, isLHS);
          break;
        case "SpreadElement": {
          this.checkToRestConversion(node);
          node.type = "RestElement";
          const arg = node.argument;
          this.toAssignable(arg, isLHS);
          break;
        }
        case "ArrayExpression":
          node.type = "ArrayPattern";
          this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingComma, isLHS);
          break;
        case "AssignmentExpression":
          if (node.operator !== "=") {
            this.raise(node.left.end, ErrorMessages.MissingEqInAssignment);
          }
          node.type = "AssignmentPattern";
          delete node.operator;
          this.toAssignable(node.left, isLHS);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(parenthesized, isLHS);
          break;
      }
      return node;
    }
    toAssignableObjectExpressionProp(prop, isLast, isLHS) {
      if (prop.type === "ObjectMethod") {
        const error = prop.kind === "get" || prop.kind === "set" ? ErrorMessages.PatternHasAccessor : ErrorMessages.PatternHasMethod;
        this.raise(prop.key.start, error);
      } else if (prop.type === "SpreadElement" && !isLast) {
        this.raiseRestNotLast(prop.start);
      } else {
        this.toAssignable(prop, isLHS);
      }
    }
    toAssignableList(exprList, trailingCommaPos, isLHS) {
      let end = exprList.length;
      if (end) {
        const last2 = exprList[end - 1];
        if ((last2 == null ? void 0 : last2.type) === "RestElement") {
          --end;
        } else if ((last2 == null ? void 0 : last2.type) === "SpreadElement") {
          last2.type = "RestElement";
          let arg = last2.argument;
          this.toAssignable(arg, isLHS);
          arg = unwrapParenthesizedExpression(arg);
          if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern" && arg.type !== "ObjectPattern") {
            this.unexpected(arg.start);
          }
          if (trailingCommaPos) {
            this.raiseTrailingCommaAfterRest(trailingCommaPos);
          }
          --end;
        }
      }
      for (let i = 0; i < end; i++) {
        const elt = exprList[i];
        if (elt) {
          this.toAssignable(elt, isLHS);
          if (elt.type === "RestElement") {
            this.raiseRestNotLast(elt.start);
          }
        }
      }
      return exprList;
    }
    toReferencedList(exprList, isParenthesizedExpr) {
      return exprList;
    }
    toReferencedListDeep(exprList, isParenthesizedExpr) {
      this.toReferencedList(exprList, isParenthesizedExpr);
      for (let _i = 0; _i < exprList.length; _i++) {
        const expr = exprList[_i];
        if ((expr == null ? void 0 : expr.type) === "ArrayExpression") {
          this.toReferencedListDeep(expr.elements);
        }
      }
    }
    parseSpread(refExpressionErrors, refNeedsArrowPos) {
      const node = this.startNode();
      this.next();
      node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, void 0, refNeedsArrowPos);
      return this.finishNode(node, "SpreadElement");
    }
    parseRestBinding() {
      const node = this.startNode();
      this.next();
      node.argument = this.parseBindingAtom();
      return this.finishNode(node, "RestElement");
    }
    parseBindingAtom() {
      switch (this.state.type) {
        case types.bracketL: {
          const node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types.bracketR, 93, true);
          return this.finishNode(node, "ArrayPattern");
        }
        case types.braceL:
          return this.parseObjectLike(types.braceR, true);
      }
      return this.parseIdentifier();
    }
    parseBindingList(close, closeCharCode, allowEmpty, allowModifiers) {
      const elts = [];
      let first = true;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
        }
        if (allowEmpty && this.match(types.comma)) {
          elts.push(null);
        } else if (this.eat(close)) {
          break;
        } else if (this.match(types.ellipsis)) {
          elts.push(this.parseAssignableListItemTypes(this.parseRestBinding()));
          this.checkCommaAfterRest(closeCharCode);
          this.expect(close);
          break;
        } else {
          const decorators = [];
          if (this.match(types.at) && this.hasPlugin("decorators")) {
            this.raise(this.state.start, ErrorMessages.UnsupportedParameterDecorator);
          }
          while (this.match(types.at)) {
            decorators.push(this.parseDecorator());
          }
          elts.push(this.parseAssignableListItem(allowModifiers, decorators));
        }
      }
      return elts;
    }
    parseAssignableListItem(allowModifiers, decorators) {
      const left = this.parseMaybeDefault();
      this.parseAssignableListItemTypes(left);
      const elt = this.parseMaybeDefault(left.start, left.loc.start, left);
      if (decorators.length) {
        left.decorators = decorators;
      }
      return elt;
    }
    parseAssignableListItemTypes(param) {
      return param;
    }
    parseMaybeDefault(startPos, startLoc, left) {
      var _startLoc, _startPos, _left;
      startLoc = (_startLoc = startLoc) != null ? _startLoc : this.state.startLoc;
      startPos = (_startPos = startPos) != null ? _startPos : this.state.start;
      left = (_left = left) != null ? _left : this.parseBindingAtom();
      if (!this.eat(types.eq))
        return left;
      const node = this.startNodeAt(startPos, startLoc);
      node.left = left;
      node.right = this.parseMaybeAssignAllowIn();
      return this.finishNode(node, "AssignmentPattern");
    }
    checkLVal(expr, contextDescription, bindingType = BIND_NONE, checkClashes, disallowLetBinding, strictModeChanged = false) {
      switch (expr.type) {
        case "Identifier": {
          const {
            name
          } = expr;
          if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(name, this.inModule) : isStrictBindOnlyReservedWord(name))) {
            this.raise(expr.start, bindingType === BIND_NONE ? ErrorMessages.StrictEvalArguments : ErrorMessages.StrictEvalArgumentsBinding, name);
          }
          if (checkClashes) {
            if (checkClashes.has(name)) {
              this.raise(expr.start, ErrorMessages.ParamDupe);
            } else {
              checkClashes.add(name);
            }
          }
          if (disallowLetBinding && name === "let") {
            this.raise(expr.start, ErrorMessages.LetInLexicalBinding);
          }
          if (!(bindingType & BIND_NONE)) {
            this.scope.declareName(name, bindingType, expr.start);
          }
          break;
        }
        case "MemberExpression":
          if (bindingType !== BIND_NONE) {
            this.raise(expr.start, ErrorMessages.InvalidPropertyBindingPattern);
          }
          break;
        case "ObjectPattern":
          for (let _i2 = 0, _expr$properties = expr.properties; _i2 < _expr$properties.length; _i2++) {
            let prop = _expr$properties[_i2];
            if (this.isObjectProperty(prop))
              prop = prop.value;
            else if (this.isObjectMethod(prop))
              continue;
            this.checkLVal(prop, "object destructuring pattern", bindingType, checkClashes, disallowLetBinding);
          }
          break;
        case "ArrayPattern":
          for (let _i3 = 0, _expr$elements = expr.elements; _i3 < _expr$elements.length; _i3++) {
            const elem = _expr$elements[_i3];
            if (elem) {
              this.checkLVal(elem, "array destructuring pattern", bindingType, checkClashes, disallowLetBinding);
            }
          }
          break;
        case "AssignmentPattern":
          this.checkLVal(expr.left, "assignment pattern", bindingType, checkClashes);
          break;
        case "RestElement":
          this.checkLVal(expr.argument, "rest element", bindingType, checkClashes);
          break;
        case "ParenthesizedExpression":
          this.checkLVal(expr.expression, "parenthesized expression", bindingType, checkClashes);
          break;
        default: {
          this.raise(expr.start, bindingType === BIND_NONE ? ErrorMessages.InvalidLhs : ErrorMessages.InvalidLhsBinding, contextDescription);
        }
      }
    }
    checkToRestConversion(node) {
      if (node.argument.type !== "Identifier" && node.argument.type !== "MemberExpression") {
        this.raise(node.argument.start, ErrorMessages.InvalidRestAssignmentPattern);
      }
    }
    checkCommaAfterRest(close) {
      if (this.match(types.comma)) {
        if (this.lookaheadCharCode() === close) {
          this.raiseTrailingCommaAfterRest(this.state.start);
        } else {
          this.raiseRestNotLast(this.state.start);
        }
      }
    }
    raiseRestNotLast(pos) {
      throw this.raise(pos, ErrorMessages.ElementAfterRest);
    }
    raiseTrailingCommaAfterRest(pos) {
      this.raise(pos, ErrorMessages.RestTrailingComma);
    }
  };
  var ExpressionParser = class extends LValParser {
    checkProto(prop, isRecord, protoRef, refExpressionErrors) {
      if (prop.type === "SpreadElement" || this.isObjectMethod(prop) || prop.computed || prop.shorthand) {
        return;
      }
      const key = prop.key;
      const name = key.type === "Identifier" ? key.name : key.value;
      if (name === "__proto__") {
        if (isRecord) {
          this.raise(key.start, ErrorMessages.RecordNoProto);
          return;
        }
        if (protoRef.used) {
          if (refExpressionErrors) {
            if (refExpressionErrors.doubleProto === -1) {
              refExpressionErrors.doubleProto = key.start;
            }
          } else {
            this.raise(key.start, ErrorMessages.DuplicateProto);
          }
        }
        protoRef.used = true;
      }
    }
    shouldExitDescending(expr, potentialArrowAt) {
      return expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt;
    }
    getExpression() {
      let paramFlags = PARAM;
      if (this.hasPlugin("topLevelAwait") && this.inModule) {
        paramFlags |= PARAM_AWAIT;
      }
      this.scope.enter(SCOPE_PROGRAM);
      this.prodParam.enter(paramFlags);
      this.nextToken();
      const expr = this.parseExpression();
      if (!this.match(types.eof)) {
        this.unexpected();
      }
      expr.comments = this.state.comments;
      expr.errors = this.state.errors;
      return expr;
    }
    parseExpression(disallowIn, refExpressionErrors) {
      if (disallowIn) {
        return this.disallowInAnd(() => this.parseExpressionBase(refExpressionErrors));
      }
      return this.allowInAnd(() => this.parseExpressionBase(refExpressionErrors));
    }
    parseExpressionBase(refExpressionErrors) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const expr = this.parseMaybeAssign(refExpressionErrors);
      if (this.match(types.comma)) {
        const node = this.startNodeAt(startPos, startLoc);
        node.expressions = [expr];
        while (this.eat(types.comma)) {
          node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
        }
        this.toReferencedList(node.expressions);
        return this.finishNode(node, "SequenceExpression");
      }
      return expr;
    }
    parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      return this.disallowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos));
    }
    parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      return this.allowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos));
    }
    parseMaybeAssign(refExpressionErrors, afterLeftParse, refNeedsArrowPos) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      if (this.isContextual("yield")) {
        if (this.prodParam.hasYield) {
          this.state.exprAllowed = true;
          let left2 = this.parseYield();
          if (afterLeftParse) {
            left2 = afterLeftParse.call(this, left2, startPos, startLoc);
          }
          return left2;
        }
      }
      let ownExpressionErrors;
      if (refExpressionErrors) {
        ownExpressionErrors = false;
      } else {
        refExpressionErrors = new ExpressionErrors();
        ownExpressionErrors = true;
      }
      if (this.match(types.parenL) || this.match(types.name)) {
        this.state.potentialArrowAt = this.state.start;
      }
      let left = this.parseMaybeConditional(refExpressionErrors, refNeedsArrowPos);
      if (afterLeftParse) {
        left = afterLeftParse.call(this, left, startPos, startLoc);
      }
      if (this.state.type.isAssign) {
        const node = this.startNodeAt(startPos, startLoc);
        const operator = this.state.value;
        node.operator = operator;
        if (this.match(types.eq)) {
          node.left = this.toAssignable(left, true);
          refExpressionErrors.doubleProto = -1;
        } else {
          node.left = left;
        }
        if (refExpressionErrors.shorthandAssign >= node.left.start) {
          refExpressionErrors.shorthandAssign = -1;
        }
        this.checkLVal(left, "assignment expression");
        this.next();
        node.right = this.parseMaybeAssign();
        return this.finishNode(node, "AssignmentExpression");
      } else if (ownExpressionErrors) {
        this.checkExpressionErrors(refExpressionErrors, true);
      }
      return left;
    }
    parseMaybeConditional(refExpressionErrors, refNeedsArrowPos) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const potentialArrowAt = this.state.potentialArrowAt;
      const expr = this.parseExprOps(refExpressionErrors);
      if (this.shouldExitDescending(expr, potentialArrowAt)) {
        return expr;
      }
      return this.parseConditional(expr, startPos, startLoc, refNeedsArrowPos);
    }
    parseConditional(expr, startPos, startLoc, refNeedsArrowPos) {
      if (this.eat(types.question)) {
        const node = this.startNodeAt(startPos, startLoc);
        node.test = expr;
        node.consequent = this.parseMaybeAssignAllowIn();
        this.expect(types.colon);
        node.alternate = this.parseMaybeAssign();
        return this.finishNode(node, "ConditionalExpression");
      }
      return expr;
    }
    parseExprOps(refExpressionErrors) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const potentialArrowAt = this.state.potentialArrowAt;
      const expr = this.parseMaybeUnary(refExpressionErrors);
      if (this.shouldExitDescending(expr, potentialArrowAt)) {
        return expr;
      }
      return this.parseExprOp(expr, startPos, startLoc, -1);
    }
    parseExprOp(left, leftStartPos, leftStartLoc, minPrec) {
      let prec = this.state.type.binop;
      if (prec != null && (this.prodParam.hasIn || !this.match(types._in))) {
        if (prec > minPrec) {
          const op = this.state.type;
          if (op === types.pipeline) {
            this.expectPlugin("pipelineOperator");
            if (this.state.inFSharpPipelineDirectBody) {
              return left;
            }
            this.state.inPipeline = true;
            this.checkPipelineAtInfixOperator(left, leftStartPos);
          }
          const node = this.startNodeAt(leftStartPos, leftStartLoc);
          node.left = left;
          node.operator = this.state.value;
          if (op === types.exponent && left.type === "UnaryExpression" && (this.options.createParenthesizedExpressions || !(left.extra && left.extra.parenthesized))) {
            this.raise(left.argument.start, ErrorMessages.UnexpectedTokenUnaryExponentiation);
          }
          const logical = op === types.logicalOR || op === types.logicalAND;
          const coalesce = op === types.nullishCoalescing;
          if (coalesce) {
            prec = types.logicalAND.binop;
          }
          this.next();
          if (op === types.pipeline && this.getPluginOption("pipelineOperator", "proposal") === "minimal") {
            if (this.match(types.name) && this.state.value === "await" && this.prodParam.hasAwait) {
              throw this.raise(this.state.start, ErrorMessages.UnexpectedAwaitAfterPipelineBody);
            }
          }
          node.right = this.parseExprOpRightExpr(op, prec);
          this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
          const nextOp = this.state.type;
          if (coalesce && (nextOp === types.logicalOR || nextOp === types.logicalAND) || logical && nextOp === types.nullishCoalescing) {
            throw this.raise(this.state.start, ErrorMessages.MixingCoalesceWithLogical);
          }
          return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec);
        }
      }
      return left;
    }
    parseExprOpRightExpr(op, prec) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      switch (op) {
        case types.pipeline:
          switch (this.getPluginOption("pipelineOperator", "proposal")) {
            case "smart":
              return this.withTopicPermittingContext(() => {
                return this.parseSmartPipelineBody(this.parseExprOpBaseRightExpr(op, prec), startPos, startLoc);
              });
            case "fsharp":
              return this.withSoloAwaitPermittingContext(() => {
                return this.parseFSharpPipelineBody(prec);
              });
          }
        default:
          return this.parseExprOpBaseRightExpr(op, prec);
      }
    }
    parseExprOpBaseRightExpr(op, prec) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      return this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec);
    }
    parseMaybeUnary(refExpressionErrors) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const isAwait = this.isContextual("await");
      if (isAwait && this.isAwaitAllowed()) {
        this.next();
        return this.parseAwait(startPos, startLoc);
      }
      if (this.isContextual("module") && this.lookaheadCharCode() === 123 && !this.hasFollowingLineBreak()) {
        return this.parseModuleExpression();
      }
      const update = this.match(types.incDec);
      const node = this.startNode();
      if (this.state.type.prefix) {
        node.operator = this.state.value;
        node.prefix = true;
        if (this.match(types._throw)) {
          this.expectPlugin("throwExpressions");
        }
        const isDelete = this.match(types._delete);
        this.next();
        node.argument = this.parseMaybeUnary();
        this.checkExpressionErrors(refExpressionErrors, true);
        if (this.state.strict && isDelete) {
          const arg = node.argument;
          if (arg.type === "Identifier") {
            this.raise(node.start, ErrorMessages.StrictDelete);
          } else if (this.hasPropertyAsPrivateName(arg)) {
            this.raise(node.start, ErrorMessages.DeletePrivateField);
          }
        }
        if (!update) {
          return this.finishNode(node, "UnaryExpression");
        }
      }
      const expr = this.parseUpdate(node, update, refExpressionErrors);
      if (isAwait) {
        const startsExpr2 = this.hasPlugin("v8intrinsic") ? this.state.type.startsExpr : this.state.type.startsExpr && !this.match(types.modulo);
        if (startsExpr2 && !this.isAmbiguousAwait()) {
          this.raiseOverwrite(startPos, this.hasPlugin("topLevelAwait") ? ErrorMessages.AwaitNotInAsyncContext : ErrorMessages.AwaitNotInAsyncFunction);
          return this.parseAwait(startPos, startLoc);
        }
      }
      return expr;
    }
    parseUpdate(node, update, refExpressionErrors) {
      if (update) {
        this.checkLVal(node.argument, "prefix operation");
        return this.finishNode(node, "UpdateExpression");
      }
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let expr = this.parseExprSubscripts(refExpressionErrors);
      if (this.checkExpressionErrors(refExpressionErrors, false))
        return expr;
      while (this.state.type.postfix && !this.canInsertSemicolon()) {
        const node2 = this.startNodeAt(startPos, startLoc);
        node2.operator = this.state.value;
        node2.prefix = false;
        node2.argument = expr;
        this.checkLVal(expr, "postfix operation");
        this.next();
        expr = this.finishNode(node2, "UpdateExpression");
      }
      return expr;
    }
    parseExprSubscripts(refExpressionErrors) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      const potentialArrowAt = this.state.potentialArrowAt;
      const expr = this.parseExprAtom(refExpressionErrors);
      if (this.shouldExitDescending(expr, potentialArrowAt)) {
        return expr;
      }
      return this.parseSubscripts(expr, startPos, startLoc);
    }
    parseSubscripts(base, startPos, startLoc, noCalls) {
      const state = {
        optionalChainMember: false,
        maybeAsyncArrow: this.atPossibleAsyncArrow(base),
        stop: false
      };
      do {
        base = this.parseSubscript(base, startPos, startLoc, noCalls, state);
        state.maybeAsyncArrow = false;
      } while (!state.stop);
      return base;
    }
    parseSubscript(base, startPos, startLoc, noCalls, state) {
      if (!noCalls && this.eat(types.doubleColon)) {
        return this.parseBind(base, startPos, startLoc, noCalls, state);
      } else if (this.match(types.backQuote)) {
        return this.parseTaggedTemplateExpression(base, startPos, startLoc, state);
      }
      let optional = false;
      if (this.match(types.questionDot)) {
        if (noCalls && this.lookaheadCharCode() === 40) {
          state.stop = true;
          return base;
        }
        state.optionalChainMember = optional = true;
        this.next();
      }
      if (!noCalls && this.match(types.parenL)) {
        return this.parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional);
      } else if (optional || this.match(types.bracketL) || this.eat(types.dot)) {
        return this.parseMember(base, startPos, startLoc, state, optional);
      } else {
        state.stop = true;
        return base;
      }
    }
    parseMember(base, startPos, startLoc, state, optional) {
      const node = this.startNodeAt(startPos, startLoc);
      const computed = this.eat(types.bracketL);
      node.object = base;
      node.computed = computed;
      const property = computed ? this.parseExpression() : this.parseMaybePrivateName(true);
      if (this.isPrivateName(property)) {
        if (node.object.type === "Super") {
          this.raise(startPos, ErrorMessages.SuperPrivateField);
        }
        this.classScope.usePrivateName(this.getPrivateNameSV(property), property.start);
      }
      node.property = property;
      if (computed) {
        this.expect(types.bracketR);
      }
      if (state.optionalChainMember) {
        node.optional = optional;
        return this.finishNode(node, "OptionalMemberExpression");
      } else {
        return this.finishNode(node, "MemberExpression");
      }
    }
    parseBind(base, startPos, startLoc, noCalls, state) {
      const node = this.startNodeAt(startPos, startLoc);
      node.object = base;
      node.callee = this.parseNoCallExpr();
      state.stop = true;
      return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
    }
    parseCoverCallAndAsyncArrowHead(base, startPos, startLoc, state, optional) {
      const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = true;
      this.next();
      let node = this.startNodeAt(startPos, startLoc);
      node.callee = base;
      if (state.maybeAsyncArrow) {
        this.expressionScope.enter(newAsyncArrowScope());
      }
      if (state.optionalChainMember) {
        node.optional = optional;
      }
      if (optional) {
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
      } else {
        node.arguments = this.parseCallExpressionArguments(types.parenR, state.maybeAsyncArrow, base.type === "Import", base.type !== "Super", node);
      }
      this.finishCallExpression(node, state.optionalChainMember);
      if (state.maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
        state.stop = true;
        this.expressionScope.validateAsPattern();
        this.expressionScope.exit();
        node = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), node);
      } else {
        if (state.maybeAsyncArrow) {
          this.expressionScope.exit();
        }
        this.toReferencedArguments(node);
      }
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return node;
    }
    toReferencedArguments(node, isParenthesizedExpr) {
      this.toReferencedListDeep(node.arguments, isParenthesizedExpr);
    }
    parseTaggedTemplateExpression(base, startPos, startLoc, state) {
      const node = this.startNodeAt(startPos, startLoc);
      node.tag = base;
      node.quasi = this.parseTemplate(true);
      if (state.optionalChainMember) {
        this.raise(startPos, ErrorMessages.OptionalChainingNoTemplate);
      }
      return this.finishNode(node, "TaggedTemplateExpression");
    }
    atPossibleAsyncArrow(base) {
      return base.type === "Identifier" && base.name === "async" && this.state.lastTokEnd === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && base.start === this.state.potentialArrowAt;
    }
    finishCallExpression(node, optional) {
      if (node.callee.type === "Import") {
        if (node.arguments.length === 2) {
          if (!this.hasPlugin("moduleAttributes")) {
            this.expectPlugin("importAssertions");
          }
        }
        if (node.arguments.length === 0 || node.arguments.length > 2) {
          this.raise(node.start, ErrorMessages.ImportCallArity, this.hasPlugin("importAssertions") || this.hasPlugin("moduleAttributes") ? "one or two arguments" : "one argument");
        } else {
          for (let _i = 0, _node$arguments = node.arguments; _i < _node$arguments.length; _i++) {
            const arg = _node$arguments[_i];
            if (arg.type === "SpreadElement") {
              this.raise(arg.start, ErrorMessages.ImportCallSpreadArgument);
            }
          }
        }
      }
      return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
    }
    parseCallExpressionArguments(close, possibleAsyncArrow, dynamicImport, allowPlaceholder, nodeForExtra) {
      const elts = [];
      let first = true;
      const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.match(close)) {
            if (dynamicImport && !this.hasPlugin("importAssertions") && !this.hasPlugin("moduleAttributes")) {
              this.raise(this.state.lastTokStart, ErrorMessages.ImportCallArgumentTrailingComma);
            }
            if (nodeForExtra) {
              this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
            }
            this.next();
            break;
          }
        }
        elts.push(this.parseExprListItem(false, possibleAsyncArrow ? new ExpressionErrors() : void 0, possibleAsyncArrow ? {
          start: 0
        } : void 0, allowPlaceholder));
      }
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      return elts;
    }
    shouldParseAsyncArrow() {
      return this.match(types.arrow) && !this.canInsertSemicolon();
    }
    parseAsyncArrowFromCallExpression(node, call) {
      var _call$extra;
      this.expect(types.arrow);
      this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingComma);
      return node;
    }
    parseNoCallExpr() {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
    }
    parseExprAtom(refExpressionErrors) {
      if (this.state.type === types.slash)
        this.readRegexp();
      const canBeArrow = this.state.potentialArrowAt === this.state.start;
      let node;
      switch (this.state.type) {
        case types._super:
          return this.parseSuper();
        case types._import:
          node = this.startNode();
          this.next();
          if (this.match(types.dot)) {
            return this.parseImportMetaProperty(node);
          }
          if (!this.match(types.parenL)) {
            this.raise(this.state.lastTokStart, ErrorMessages.UnsupportedImport);
          }
          return this.finishNode(node, "Import");
        case types._this:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "ThisExpression");
        case types.name: {
          const containsEsc = this.state.containsEsc;
          const id = this.parseIdentifier();
          if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
            if (this.match(types._function)) {
              const last2 = this.state.context.length - 1;
              if (this.state.context[last2] !== types$1.functionStatement) {
                throw new Error("Internal error");
              }
              this.state.context[last2] = types$1.functionExpression;
              this.next();
              return this.parseFunction(this.startNodeAtNode(id), void 0, true);
            } else if (this.match(types.name)) {
              return this.parseAsyncArrowUnaryFunction(id);
            }
          }
          if (canBeArrow && this.match(types.arrow) && !this.canInsertSemicolon()) {
            this.next();
            return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
          }
          return id;
        }
        case types._do: {
          return this.parseDo();
        }
        case types.regexp: {
          const value = this.state.value;
          node = this.parseLiteral(value.value, "RegExpLiteral");
          node.pattern = value.pattern;
          node.flags = value.flags;
          return node;
        }
        case types.num:
          return this.parseLiteral(this.state.value, "NumericLiteral");
        case types.bigint:
          return this.parseLiteral(this.state.value, "BigIntLiteral");
        case types.decimal:
          return this.parseLiteral(this.state.value, "DecimalLiteral");
        case types.string:
          return this.parseLiteral(this.state.value, "StringLiteral");
        case types._null:
          node = this.startNode();
          this.next();
          return this.finishNode(node, "NullLiteral");
        case types._true:
        case types._false:
          return this.parseBooleanLiteral();
        case types.parenL:
          return this.parseParenAndDistinguishExpression(canBeArrow);
        case types.bracketBarL:
        case types.bracketHashL: {
          return this.parseArrayLike(this.state.type === types.bracketBarL ? types.bracketBarR : types.bracketR, false, true, refExpressionErrors);
        }
        case types.bracketL: {
          return this.parseArrayLike(types.bracketR, true, false, refExpressionErrors);
        }
        case types.braceBarL:
        case types.braceHashL: {
          return this.parseObjectLike(this.state.type === types.braceBarL ? types.braceBarR : types.braceR, false, true, refExpressionErrors);
        }
        case types.braceL: {
          return this.parseObjectLike(types.braceR, false, false, refExpressionErrors);
        }
        case types._function:
          return this.parseFunctionOrFunctionSent();
        case types.at:
          this.parseDecorators();
        case types._class:
          node = this.startNode();
          this.takeDecorators(node);
          return this.parseClass(node, false);
        case types._new:
          return this.parseNewOrNewTarget();
        case types.backQuote:
          return this.parseTemplate(false);
        case types.doubleColon: {
          node = this.startNode();
          this.next();
          node.object = null;
          const callee = node.callee = this.parseNoCallExpr();
          if (callee.type === "MemberExpression") {
            return this.finishNode(node, "BindExpression");
          } else {
            throw this.raise(callee.start, ErrorMessages.UnsupportedBind);
          }
        }
        case types.hash: {
          if (this.state.inPipeline) {
            node = this.startNode();
            if (this.getPluginOption("pipelineOperator", "proposal") !== "smart") {
              this.raise(node.start, ErrorMessages.PrimaryTopicRequiresSmartPipeline);
            }
            this.next();
            if (!this.primaryTopicReferenceIsAllowedInCurrentTopicContext()) {
              this.raise(node.start, ErrorMessages.PrimaryTopicNotAllowed);
            }
            this.registerTopicReference();
            return this.finishNode(node, "PipelinePrimaryTopicReference");
          }
          const nextCh = this.input.codePointAt(this.state.end);
          if (isIdentifierStart(nextCh) || nextCh === 92) {
            const start = this.state.start;
            node = this.parseMaybePrivateName(true);
            if (this.match(types._in)) {
              this.expectPlugin("privateIn");
              this.classScope.usePrivateName(this.getPrivateNameSV(node), node.start);
            } else if (this.hasPlugin("privateIn")) {
              this.raise(this.state.start, ErrorMessages.PrivateInExpectedIn, this.getPrivateNameSV(node));
            } else {
              throw this.unexpected(start);
            }
            return node;
          }
        }
        case types.relational: {
          if (this.state.value === "<") {
            const lookaheadCh = this.input.codePointAt(this.nextTokenStart());
            if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
              this.expectOnePlugin(["jsx", "flow", "typescript"]);
            }
          }
        }
        default:
          throw this.unexpected();
      }
    }
    parseAsyncArrowUnaryFunction(id) {
      const node = this.startNodeAtNode(id);
      this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
      const params = [this.parseIdentifier()];
      this.prodParam.exit();
      if (this.hasPrecedingLineBreak()) {
        this.raise(this.state.pos, ErrorMessages.LineTerminatorBeforeArrow);
      }
      this.expect(types.arrow);
      this.parseArrowExpression(node, params, true);
      return node;
    }
    parseDo() {
      this.expectPlugin("doExpressions");
      const node = this.startNode();
      this.next();
      const oldLabels = this.state.labels;
      this.state.labels = [];
      node.body = this.parseBlock();
      this.state.labels = oldLabels;
      return this.finishNode(node, "DoExpression");
    }
    parseSuper() {
      const node = this.startNode();
      this.next();
      if (this.match(types.parenL) && !this.scope.allowDirectSuper && !this.options.allowSuperOutsideMethod) {
        this.raise(node.start, ErrorMessages.SuperNotAllowed);
      } else if (!this.scope.allowSuper && !this.options.allowSuperOutsideMethod) {
        this.raise(node.start, ErrorMessages.UnexpectedSuper);
      }
      if (!this.match(types.parenL) && !this.match(types.bracketL) && !this.match(types.dot)) {
        this.raise(node.start, ErrorMessages.UnsupportedSuper);
      }
      return this.finishNode(node, "Super");
    }
    parseBooleanLiteral() {
      const node = this.startNode();
      node.value = this.match(types._true);
      this.next();
      return this.finishNode(node, "BooleanLiteral");
    }
    parseMaybePrivateName(isPrivateNameAllowed) {
      const isPrivate = this.match(types.hash);
      if (isPrivate) {
        this.expectOnePlugin(["classPrivateProperties", "classPrivateMethods"]);
        if (!isPrivateNameAllowed) {
          this.raise(this.state.pos, ErrorMessages.UnexpectedPrivateField);
        }
        const node = this.startNode();
        this.next();
        this.assertNoSpace("Unexpected space between # and identifier");
        node.id = this.parseIdentifier(true);
        return this.finishNode(node, "PrivateName");
      } else {
        return this.parseIdentifier(true);
      }
    }
    parseFunctionOrFunctionSent() {
      const node = this.startNode();
      this.next();
      if (this.prodParam.hasYield && this.match(types.dot)) {
        const meta = this.createIdentifier(this.startNodeAtNode(node), "function");
        this.next();
        return this.parseMetaProperty(node, meta, "sent");
      }
      return this.parseFunction(node);
    }
    parseMetaProperty(node, meta, propertyName) {
      node.meta = meta;
      if (meta.name === "function" && propertyName === "sent") {
        if (this.isContextual(propertyName)) {
          this.expectPlugin("functionSent");
        } else if (!this.hasPlugin("functionSent")) {
          this.unexpected();
        }
      }
      const containsEsc = this.state.containsEsc;
      node.property = this.parseIdentifier(true);
      if (node.property.name !== propertyName || containsEsc) {
        this.raise(node.property.start, ErrorMessages.UnsupportedMetaProperty, meta.name, propertyName);
      }
      return this.finishNode(node, "MetaProperty");
    }
    parseImportMetaProperty(node) {
      const id = this.createIdentifier(this.startNodeAtNode(node), "import");
      this.next();
      if (this.isContextual("meta")) {
        if (!this.inModule) {
          this.raiseWithData(id.start, {
            code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
          }, ErrorMessages.ImportMetaOutsideModule);
        }
        this.sawUnambiguousESM = true;
      }
      return this.parseMetaProperty(node, id, "meta");
    }
    parseLiteral(value, type, startPos, startLoc) {
      startPos = startPos || this.state.start;
      startLoc = startLoc || this.state.startLoc;
      const node = this.startNodeAt(startPos, startLoc);
      this.addExtra(node, "rawValue", value);
      this.addExtra(node, "raw", this.input.slice(startPos, this.state.end));
      node.value = value;
      this.next();
      return this.finishNode(node, type);
    }
    parseParenAndDistinguishExpression(canBeArrow) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      let val;
      this.next();
      this.expressionScope.enter(newArrowHeadScope());
      const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.maybeInArrowParameters = true;
      this.state.inFSharpPipelineDirectBody = false;
      const innerStartPos = this.state.start;
      const innerStartLoc = this.state.startLoc;
      const exprList = [];
      const refExpressionErrors = new ExpressionErrors();
      const refNeedsArrowPos = {
        start: 0
      };
      let first = true;
      let spreadStart;
      let optionalCommaStart;
      while (!this.match(types.parenR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma, refNeedsArrowPos.start || null);
          if (this.match(types.parenR)) {
            optionalCommaStart = this.state.start;
            break;
          }
        }
        if (this.match(types.ellipsis)) {
          const spreadNodeStartPos = this.state.start;
          const spreadNodeStartLoc = this.state.startLoc;
          spreadStart = this.state.start;
          exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartPos, spreadNodeStartLoc));
          this.checkCommaAfterRest(41);
          break;
        } else {
          exprList.push(this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem, refNeedsArrowPos));
        }
      }
      const innerEndPos = this.state.lastTokEnd;
      const innerEndLoc = this.state.lastTokEndLoc;
      this.expect(types.parenR);
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      let arrowNode = this.startNodeAt(startPos, startLoc);
      if (canBeArrow && this.shouldParseArrow() && (arrowNode = this.parseArrow(arrowNode))) {
        this.expressionScope.validateAsPattern();
        this.expressionScope.exit();
        this.parseArrowExpression(arrowNode, exprList, false);
        return arrowNode;
      }
      this.expressionScope.exit();
      if (!exprList.length) {
        this.unexpected(this.state.lastTokStart);
      }
      if (optionalCommaStart)
        this.unexpected(optionalCommaStart);
      if (spreadStart)
        this.unexpected(spreadStart);
      this.checkExpressionErrors(refExpressionErrors, true);
      if (refNeedsArrowPos.start)
        this.unexpected(refNeedsArrowPos.start);
      this.toReferencedListDeep(exprList, true);
      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
      if (!this.options.createParenthesizedExpressions) {
        this.addExtra(val, "parenthesized", true);
        this.addExtra(val, "parenStart", startPos);
        return val;
      }
      const parenExpression = this.startNodeAt(startPos, startLoc);
      parenExpression.expression = val;
      this.finishNode(parenExpression, "ParenthesizedExpression");
      return parenExpression;
    }
    shouldParseArrow() {
      return !this.canInsertSemicolon();
    }
    parseArrow(node) {
      if (this.eat(types.arrow)) {
        return node;
      }
    }
    parseParenItem(node, startPos, startLoc) {
      return node;
    }
    parseNewOrNewTarget() {
      const node = this.startNode();
      this.next();
      if (this.match(types.dot)) {
        const meta = this.createIdentifier(this.startNodeAtNode(node), "new");
        this.next();
        const metaProp = this.parseMetaProperty(node, meta, "target");
        if (!this.scope.inNonArrowFunction && !this.scope.inClass) {
          let error = ErrorMessages.UnexpectedNewTarget;
          if (this.hasPlugin("classProperties")) {
            error += " or class properties";
          }
          this.raise(metaProp.start, error);
        }
        return metaProp;
      }
      return this.parseNew(node);
    }
    parseNew(node) {
      node.callee = this.parseNoCallExpr();
      if (node.callee.type === "Import") {
        this.raise(node.callee.start, ErrorMessages.ImportCallNotNewExpression);
      } else if (this.isOptionalChain(node.callee)) {
        this.raise(this.state.lastTokEnd, ErrorMessages.OptionalChainingNoNew);
      } else if (this.eat(types.questionDot)) {
        this.raise(this.state.start, ErrorMessages.OptionalChainingNoNew);
      }
      this.parseNewArguments(node);
      return this.finishNode(node, "NewExpression");
    }
    parseNewArguments(node) {
      if (this.eat(types.parenL)) {
        const args = this.parseExprList(types.parenR);
        this.toReferencedList(args);
        node.arguments = args;
      } else {
        node.arguments = [];
      }
    }
    parseTemplateElement(isTagged) {
      const elem = this.startNode();
      if (this.state.value === null) {
        if (!isTagged) {
          this.raise(this.state.start + 1, ErrorMessages.InvalidEscapeSequenceTemplate);
        }
      }
      elem.value = {
        raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
        cooked: this.state.value
      };
      this.next();
      elem.tail = this.match(types.backQuote);
      return this.finishNode(elem, "TemplateElement");
    }
    parseTemplate(isTagged) {
      const node = this.startNode();
      this.next();
      node.expressions = [];
      let curElt = this.parseTemplateElement(isTagged);
      node.quasis = [curElt];
      while (!curElt.tail) {
        this.expect(types.dollarBraceL);
        node.expressions.push(this.parseTemplateSubstitution());
        this.expect(types.braceR);
        node.quasis.push(curElt = this.parseTemplateElement(isTagged));
      }
      this.next();
      return this.finishNode(node, "TemplateLiteral");
    }
    parseTemplateSubstitution() {
      return this.parseExpression();
    }
    parseObjectLike(close, isPattern, isRecord, refExpressionErrors) {
      if (isRecord) {
        this.expectPlugin("recordAndTuple");
      }
      const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      const propHash = Object.create(null);
      let first = true;
      const node = this.startNode();
      node.properties = [];
      this.next();
      while (!this.match(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.match(close)) {
            this.addExtra(node, "trailingComma", this.state.lastTokStart);
            break;
          }
        }
        const prop = this.parsePropertyDefinition(isPattern, refExpressionErrors);
        if (!isPattern) {
          this.checkProto(prop, isRecord, propHash, refExpressionErrors);
        }
        if (isRecord && !this.isObjectProperty(prop) && prop.type !== "SpreadElement") {
          this.raise(prop.start, ErrorMessages.InvalidRecordProperty);
        }
        if (prop.shorthand) {
          this.addExtra(prop, "shorthand", true);
        }
        node.properties.push(prop);
      }
      this.state.exprAllowed = false;
      this.next();
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      let type = "ObjectExpression";
      if (isPattern) {
        type = "ObjectPattern";
      } else if (isRecord) {
        type = "RecordExpression";
      }
      return this.finishNode(node, type);
    }
    maybeAsyncOrAccessorProp(prop) {
      return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(types.bracketL) || this.match(types.star));
    }
    parsePropertyDefinition(isPattern, refExpressionErrors) {
      let decorators = [];
      if (this.match(types.at)) {
        if (this.hasPlugin("decorators")) {
          this.raise(this.state.start, ErrorMessages.UnsupportedPropertyDecorator);
        }
        while (this.match(types.at)) {
          decorators.push(this.parseDecorator());
        }
      }
      const prop = this.startNode();
      let isGenerator = false;
      let isAsync = false;
      let isAccessor = false;
      let startPos;
      let startLoc;
      if (this.match(types.ellipsis)) {
        if (decorators.length)
          this.unexpected();
        if (isPattern) {
          this.next();
          prop.argument = this.parseIdentifier();
          this.checkCommaAfterRest(125);
          return this.finishNode(prop, "RestElement");
        }
        return this.parseSpread();
      }
      if (decorators.length) {
        prop.decorators = decorators;
        decorators = [];
      }
      prop.method = false;
      if (isPattern || refExpressionErrors) {
        startPos = this.state.start;
        startLoc = this.state.startLoc;
      }
      if (!isPattern) {
        isGenerator = this.eat(types.star);
      }
      const containsEsc = this.state.containsEsc;
      const key = this.parsePropertyName(prop, false);
      if (!isPattern && !isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
        const keyName = key.name;
        if (keyName === "async" && !this.hasPrecedingLineBreak()) {
          isAsync = true;
          isGenerator = this.eat(types.star);
          this.parsePropertyName(prop, false);
        }
        if (keyName === "get" || keyName === "set") {
          isAccessor = true;
          prop.kind = keyName;
          if (this.match(types.star)) {
            isGenerator = true;
            this.raise(this.state.pos, ErrorMessages.AccessorIsGenerator, keyName);
            this.next();
          }
          this.parsePropertyName(prop, false);
        }
      }
      this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
      return prop;
    }
    getGetterSetterExpectedParamCount(method) {
      return method.kind === "get" ? 0 : 1;
    }
    getObjectOrClassMethodParams(method) {
      return method.params;
    }
    checkGetterSetterParams(method) {
      var _params;
      const paramCount = this.getGetterSetterExpectedParamCount(method);
      const params = this.getObjectOrClassMethodParams(method);
      const start = method.start;
      if (params.length !== paramCount) {
        if (method.kind === "get") {
          this.raise(start, ErrorMessages.BadGetterArity);
        } else {
          this.raise(start, ErrorMessages.BadSetterArity);
        }
      }
      if (method.kind === "set" && ((_params = params[params.length - 1]) == null ? void 0 : _params.type) === "RestElement") {
        this.raise(start, ErrorMessages.BadSetterRestParameter);
      }
    }
    parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
      if (isAccessor) {
        this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
        this.checkGetterSetterParams(prop);
        return prop;
      }
      if (isAsync || isGenerator || this.match(types.parenL)) {
        if (isPattern)
          this.unexpected();
        prop.kind = "method";
        prop.method = true;
        return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
      }
    }
    parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors) {
      prop.shorthand = false;
      if (this.eat(types.colon)) {
        prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssignAllowIn(refExpressionErrors);
        return this.finishNode(prop, "ObjectProperty");
      }
      if (!prop.computed && prop.key.type === "Identifier") {
        this.checkReservedWord(prop.key.name, prop.key.start, true, false);
        if (isPattern) {
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
        } else if (this.match(types.eq) && refExpressionErrors) {
          if (refExpressionErrors.shorthandAssign === -1) {
            refExpressionErrors.shorthandAssign = this.state.start;
          }
          prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
        } else {
          prop.value = prop.key.__clone();
        }
        prop.shorthand = true;
        return this.finishNode(prop, "ObjectProperty");
      }
    }
    parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
      const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startPos, startLoc, isPattern, refExpressionErrors);
      if (!node)
        this.unexpected();
      return node;
    }
    parsePropertyName(prop, isPrivateNameAllowed) {
      if (this.eat(types.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssignAllowIn();
        this.expect(types.bracketR);
      } else {
        const oldInPropertyName = this.state.inPropertyName;
        this.state.inPropertyName = true;
        prop.key = this.match(types.num) || this.match(types.string) || this.match(types.bigint) || this.match(types.decimal) ? this.parseExprAtom() : this.parseMaybePrivateName(isPrivateNameAllowed);
        if (!this.isPrivateName(prop.key)) {
          prop.computed = false;
        }
        this.state.inPropertyName = oldInPropertyName;
      }
      return prop.key;
    }
    initFunction(node, isAsync) {
      node.id = null;
      node.generator = false;
      node.async = !!isAsync;
    }
    parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
      this.initFunction(node, isAsync);
      node.generator = !!isGenerator;
      const allowModifiers = isConstructor;
      this.scope.enter(SCOPE_FUNCTION | SCOPE_SUPER | (inClassScope ? SCOPE_CLASS : 0) | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
      this.prodParam.enter(functionFlags(isAsync, node.generator));
      this.parseFunctionParams(node, allowModifiers);
      this.parseFunctionBodyAndFinish(node, type, true);
      this.prodParam.exit();
      this.scope.exit();
      return node;
    }
    parseArrayLike(close, canBePattern, isTuple, refExpressionErrors) {
      if (isTuple) {
        this.expectPlugin("recordAndTuple");
      }
      const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = false;
      const node = this.startNode();
      this.next();
      node.elements = this.parseExprList(close, !isTuple, refExpressionErrors, node);
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      return this.finishNode(node, isTuple ? "TupleExpression" : "ArrayExpression");
    }
    parseArrowExpression(node, params, isAsync, trailingCommaPos) {
      this.scope.enter(SCOPE_FUNCTION | SCOPE_ARROW);
      let flags = functionFlags(isAsync, false);
      if (!this.match(types.bracketL) && this.prodParam.hasIn) {
        flags |= PARAM_IN;
      }
      this.prodParam.enter(flags);
      this.initFunction(node, isAsync);
      const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      if (params) {
        this.state.maybeInArrowParameters = true;
        this.setArrowFunctionParameters(node, params, trailingCommaPos);
      }
      this.state.maybeInArrowParameters = false;
      this.parseFunctionBody(node, true);
      this.prodParam.exit();
      this.scope.exit();
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return this.finishNode(node, "ArrowFunctionExpression");
    }
    setArrowFunctionParameters(node, params, trailingCommaPos) {
      node.params = this.toAssignableList(params, trailingCommaPos, false);
    }
    parseFunctionBodyAndFinish(node, type, isMethod = false) {
      this.parseFunctionBody(node, false, isMethod);
      this.finishNode(node, type);
    }
    parseFunctionBody(node, allowExpression, isMethod = false) {
      const isExpression = allowExpression && !this.match(types.braceL);
      this.expressionScope.enter(newExpressionScope());
      if (isExpression) {
        node.body = this.parseMaybeAssign();
        this.checkParams(node, false, allowExpression, false);
      } else {
        const oldStrict = this.state.strict;
        const oldLabels = this.state.labels;
        this.state.labels = [];
        this.prodParam.enter(this.prodParam.currentFlags() | PARAM_RETURN);
        node.body = this.parseBlock(true, false, (hasStrictModeDirective) => {
          const nonSimple = !this.isSimpleParamList(node.params);
          if (hasStrictModeDirective && nonSimple) {
            const errorPos = (node.kind === "method" || node.kind === "constructor") && !!node.key ? node.key.end : node.start;
            this.raise(errorPos, ErrorMessages.IllegalLanguageModeDirective);
          }
          const strictModeChanged = !oldStrict && this.state.strict;
          this.checkParams(node, !this.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);
          if (this.state.strict && node.id) {
            this.checkLVal(node.id, "function name", BIND_OUTSIDE, void 0, void 0, strictModeChanged);
          }
        });
        this.prodParam.exit();
        this.expressionScope.exit();
        this.state.labels = oldLabels;
      }
    }
    isSimpleParamList(params) {
      for (let i = 0, len = params.length; i < len; i++) {
        if (params[i].type !== "Identifier")
          return false;
      }
      return true;
    }
    checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
      const checkClashes = new Set();
      for (let _i2 = 0, _node$params = node.params; _i2 < _node$params.length; _i2++) {
        const param = _node$params[_i2];
        this.checkLVal(param, "function parameter list", BIND_VAR, allowDuplicates ? null : checkClashes, void 0, strictModeChanged);
      }
    }
    parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
      const elts = [];
      let first = true;
      while (!this.eat(close)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.match(close)) {
            if (nodeForExtra) {
              this.addExtra(nodeForExtra, "trailingComma", this.state.lastTokStart);
            }
            this.next();
            break;
          }
        }
        elts.push(this.parseExprListItem(allowEmpty, refExpressionErrors));
      }
      return elts;
    }
    parseExprListItem(allowEmpty, refExpressionErrors, refNeedsArrowPos, allowPlaceholder) {
      let elt;
      if (this.match(types.comma)) {
        if (!allowEmpty) {
          this.raise(this.state.pos, ErrorMessages.UnexpectedToken, ",");
        }
        elt = null;
      } else if (this.match(types.ellipsis)) {
        const spreadNodeStartPos = this.state.start;
        const spreadNodeStartLoc = this.state.startLoc;
        elt = this.parseParenItem(this.parseSpread(refExpressionErrors, refNeedsArrowPos), spreadNodeStartPos, spreadNodeStartLoc);
      } else if (this.match(types.question)) {
        this.expectPlugin("partialApplication");
        if (!allowPlaceholder) {
          this.raise(this.state.start, ErrorMessages.UnexpectedArgumentPlaceholder);
        }
        const node = this.startNode();
        this.next();
        elt = this.finishNode(node, "ArgumentPlaceholder");
      } else {
        elt = this.parseMaybeAssignAllowIn(refExpressionErrors, this.parseParenItem, refNeedsArrowPos);
      }
      return elt;
    }
    parseIdentifier(liberal) {
      const node = this.startNode();
      const name = this.parseIdentifierName(node.start, liberal);
      return this.createIdentifier(node, name);
    }
    createIdentifier(node, name) {
      node.name = name;
      node.loc.identifierName = name;
      return this.finishNode(node, "Identifier");
    }
    parseIdentifierName(pos, liberal) {
      let name;
      const {
        start,
        type
      } = this.state;
      if (type === types.name) {
        name = this.state.value;
      } else if (type.keyword) {
        name = type.keyword;
        const curContext = this.curContext();
        if ((type === types._class || type === types._function) && (curContext === types$1.functionStatement || curContext === types$1.functionExpression)) {
          this.state.context.pop();
        }
      } else {
        throw this.unexpected();
      }
      if (liberal) {
        this.state.type = types.name;
      } else {
        this.checkReservedWord(name, start, !!type.keyword, false);
      }
      this.next();
      return name;
    }
    checkReservedWord(word, startLoc, checkKeywords, isBinding) {
      if (this.prodParam.hasYield && word === "yield") {
        this.raise(startLoc, ErrorMessages.YieldBindingIdentifier);
        return;
      }
      if (word === "await") {
        if (this.prodParam.hasAwait) {
          this.raise(startLoc, ErrorMessages.AwaitBindingIdentifier);
          return;
        } else if (this.scope.inStaticBlock && !this.scope.inNonArrowFunction) {
          this.raise(startLoc, ErrorMessages.AwaitBindingIdentifierInStaticBlock);
          return;
        } else {
          this.expressionScope.recordAsyncArrowParametersError(startLoc, ErrorMessages.AwaitBindingIdentifier);
        }
      }
      if (this.scope.inClass && !this.scope.inNonArrowFunction && word === "arguments") {
        this.raise(startLoc, ErrorMessages.ArgumentsInClass);
        return;
      }
      if (checkKeywords && isKeyword(word)) {
        this.raise(startLoc, ErrorMessages.UnexpectedKeyword, word);
        return;
      }
      const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;
      if (reservedTest(word, this.inModule)) {
        this.raise(startLoc, ErrorMessages.UnexpectedReservedWord, word);
      }
    }
    isAwaitAllowed() {
      if (this.prodParam.hasAwait)
        return true;
      if (this.options.allowAwaitOutsideFunction && !this.scope.inFunction) {
        return true;
      }
      return false;
    }
    parseAwait(startPos, startLoc) {
      const node = this.startNodeAt(startPos, startLoc);
      this.expressionScope.recordParameterInitializerError(node.start, ErrorMessages.AwaitExpressionFormalParameter);
      if (this.eat(types.star)) {
        this.raise(node.start, ErrorMessages.ObsoleteAwaitStar);
      }
      if (!this.scope.inFunction && !this.options.allowAwaitOutsideFunction) {
        if (this.isAmbiguousAwait()) {
          this.ambiguousScriptDifferentAst = true;
        } else {
          this.sawUnambiguousESM = true;
        }
      }
      if (!this.state.soloAwait) {
        node.argument = this.parseMaybeUnary();
      }
      return this.finishNode(node, "AwaitExpression");
    }
    isAmbiguousAwait() {
      return this.hasPrecedingLineBreak() || this.match(types.plusMin) || this.match(types.parenL) || this.match(types.bracketL) || this.match(types.backQuote) || this.match(types.regexp) || this.match(types.slash) || this.hasPlugin("v8intrinsic") && this.match(types.modulo);
    }
    parseYield() {
      const node = this.startNode();
      this.expressionScope.recordParameterInitializerError(node.start, ErrorMessages.YieldInParameter);
      this.next();
      if (this.match(types.semi) || !this.match(types.star) && !this.state.type.startsExpr || this.hasPrecedingLineBreak()) {
        node.delegate = false;
        node.argument = null;
      } else {
        node.delegate = this.eat(types.star);
        node.argument = this.parseMaybeAssign();
      }
      return this.finishNode(node, "YieldExpression");
    }
    checkPipelineAtInfixOperator(left, leftStartPos) {
      if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
        if (left.type === "SequenceExpression") {
          this.raise(leftStartPos, ErrorMessages.PipelineHeadSequenceExpression);
        }
      }
    }
    parseSmartPipelineBody(childExpression, startPos, startLoc) {
      this.checkSmartPipelineBodyEarlyErrors(childExpression, startPos);
      return this.parseSmartPipelineBodyInStyle(childExpression, startPos, startLoc);
    }
    checkSmartPipelineBodyEarlyErrors(childExpression, startPos) {
      if (this.match(types.arrow)) {
        throw this.raise(this.state.start, ErrorMessages.PipelineBodyNoArrow);
      } else if (childExpression.type === "SequenceExpression") {
        this.raise(startPos, ErrorMessages.PipelineBodySequenceExpression);
      }
    }
    parseSmartPipelineBodyInStyle(childExpression, startPos, startLoc) {
      const bodyNode = this.startNodeAt(startPos, startLoc);
      const isSimpleReference = this.isSimpleReference(childExpression);
      if (isSimpleReference) {
        bodyNode.callee = childExpression;
      } else {
        if (!this.topicReferenceWasUsedInCurrentTopicContext()) {
          this.raise(startPos, ErrorMessages.PipelineTopicUnused);
        }
        bodyNode.expression = childExpression;
      }
      return this.finishNode(bodyNode, isSimpleReference ? "PipelineBareFunction" : "PipelineTopicExpression");
    }
    isSimpleReference(expression) {
      switch (expression.type) {
        case "MemberExpression":
          return !expression.computed && this.isSimpleReference(expression.object);
        case "Identifier":
          return true;
        default:
          return false;
      }
    }
    withTopicPermittingContext(callback) {
      const outerContextTopicState = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 1,
        maxTopicIndex: null
      };
      try {
        return callback();
      } finally {
        this.state.topicContext = outerContextTopicState;
      }
    }
    withTopicForbiddingContext(callback) {
      const outerContextTopicState = this.state.topicContext;
      this.state.topicContext = {
        maxNumOfResolvableTopics: 0,
        maxTopicIndex: null
      };
      try {
        return callback();
      } finally {
        this.state.topicContext = outerContextTopicState;
      }
    }
    withSoloAwaitPermittingContext(callback) {
      const outerContextSoloAwaitState = this.state.soloAwait;
      this.state.soloAwait = true;
      try {
        return callback();
      } finally {
        this.state.soloAwait = outerContextSoloAwaitState;
      }
    }
    allowInAnd(callback) {
      const flags = this.prodParam.currentFlags();
      const prodParamToSet = PARAM_IN & ~flags;
      if (prodParamToSet) {
        this.prodParam.enter(flags | PARAM_IN);
        try {
          return callback();
        } finally {
          this.prodParam.exit();
        }
      }
      return callback();
    }
    disallowInAnd(callback) {
      const flags = this.prodParam.currentFlags();
      const prodParamToClear = PARAM_IN & flags;
      if (prodParamToClear) {
        this.prodParam.enter(flags & ~PARAM_IN);
        try {
          return callback();
        } finally {
          this.prodParam.exit();
        }
      }
      return callback();
    }
    registerTopicReference() {
      this.state.topicContext.maxTopicIndex = 0;
    }
    primaryTopicReferenceIsAllowedInCurrentTopicContext() {
      return this.state.topicContext.maxNumOfResolvableTopics >= 1;
    }
    topicReferenceWasUsedInCurrentTopicContext() {
      return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
    }
    parseFSharpPipelineBody(prec) {
      const startPos = this.state.start;
      const startLoc = this.state.startLoc;
      this.state.potentialArrowAt = this.state.start;
      const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
      this.state.inFSharpPipelineDirectBody = true;
      const ret = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, prec);
      this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
      return ret;
    }
    parseModuleExpression() {
      this.expectPlugin("moduleBlocks");
      const node = this.startNode();
      this.next();
      this.eat(types.braceL);
      const revertScopes = this.initializeScopes(true);
      this.enterInitialScopes();
      const program = this.startNode();
      try {
        node.body = this.parseProgram(program, types.braceR, "module");
      } finally {
        revertScopes();
      }
      this.eat(types.braceR);
      return this.finishNode(node, "ModuleExpression");
    }
  };
  var loopLabel = {
    kind: "loop"
  };
  var switchLabel = {
    kind: "switch"
  };
  var FUNC_NO_FLAGS = 0;
  var FUNC_STATEMENT = 1;
  var FUNC_HANGING_STATEMENT = 2;
  var FUNC_NULLABLE_ID = 4;
  var loneSurrogate = /[\uD800-\uDFFF]/u;
  var StatementParser = class extends ExpressionParser {
    parseTopLevel(file, program) {
      file.program = this.parseProgram(program);
      file.comments = this.state.comments;
      if (this.options.tokens)
        file.tokens = this.tokens;
      return this.finishNode(file, "File");
    }
    parseProgram(program, end = types.eof, sourceType = this.options.sourceType) {
      program.sourceType = sourceType;
      program.interpreter = this.parseInterpreterDirective();
      this.parseBlockBody(program, true, true, end);
      if (this.inModule && !this.options.allowUndeclaredExports && this.scope.undefinedExports.size > 0) {
        for (let _i = 0, _Array$from = Array.from(this.scope.undefinedExports); _i < _Array$from.length; _i++) {
          const [name] = _Array$from[_i];
          const pos = this.scope.undefinedExports.get(name);
          this.raise(pos, ErrorMessages.ModuleExportUndefined, name);
        }
      }
      return this.finishNode(program, "Program");
    }
    stmtToDirective(stmt) {
      const expr = stmt.expression;
      const directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
      const directive = this.startNodeAt(stmt.start, stmt.loc.start);
      const raw = this.input.slice(expr.start, expr.end);
      const val = directiveLiteral.value = raw.slice(1, -1);
      this.addExtra(directiveLiteral, "raw", raw);
      this.addExtra(directiveLiteral, "rawValue", val);
      directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);
      return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
    }
    parseInterpreterDirective() {
      if (!this.match(types.interpreterDirective)) {
        return null;
      }
      const node = this.startNode();
      node.value = this.state.value;
      this.next();
      return this.finishNode(node, "InterpreterDirective");
    }
    isLet(context) {
      if (!this.isContextual("let")) {
        return false;
      }
      const next = this.nextTokenStart();
      const nextCh = this.input.charCodeAt(next);
      if (nextCh === 91)
        return true;
      if (context)
        return false;
      if (nextCh === 123)
        return true;
      if (isIdentifierStart(nextCh)) {
        let pos = next + 1;
        while (isIdentifierChar(this.input.charCodeAt(pos))) {
          ++pos;
        }
        const ident = this.input.slice(next, pos);
        if (!keywordRelationalOperator.test(ident))
          return true;
      }
      return false;
    }
    parseStatement(context, topLevel) {
      if (this.match(types.at)) {
        this.parseDecorators(true);
      }
      return this.parseStatementContent(context, topLevel);
    }
    parseStatementContent(context, topLevel) {
      let starttype = this.state.type;
      const node = this.startNode();
      let kind;
      if (this.isLet(context)) {
        starttype = types._var;
        kind = "let";
      }
      switch (starttype) {
        case types._break:
        case types._continue:
          return this.parseBreakContinueStatement(node, starttype.keyword);
        case types._debugger:
          return this.parseDebuggerStatement(node);
        case types._do:
          return this.parseDoStatement(node);
        case types._for:
          return this.parseForStatement(node);
        case types._function:
          if (this.lookaheadCharCode() === 46)
            break;
          if (context) {
            if (this.state.strict) {
              this.raise(this.state.start, ErrorMessages.StrictFunction);
            } else if (context !== "if" && context !== "label") {
              this.raise(this.state.start, ErrorMessages.SloppyFunction);
            }
          }
          return this.parseFunctionStatement(node, false, !context);
        case types._class:
          if (context)
            this.unexpected();
          return this.parseClass(node, true);
        case types._if:
          return this.parseIfStatement(node);
        case types._return:
          return this.parseReturnStatement(node);
        case types._switch:
          return this.parseSwitchStatement(node);
        case types._throw:
          return this.parseThrowStatement(node);
        case types._try:
          return this.parseTryStatement(node);
        case types._const:
        case types._var:
          kind = kind || this.state.value;
          if (context && kind !== "var") {
            this.raise(this.state.start, ErrorMessages.UnexpectedLexicalDeclaration);
          }
          return this.parseVarStatement(node, kind);
        case types._while:
          return this.parseWhileStatement(node);
        case types._with:
          return this.parseWithStatement(node);
        case types.braceL:
          return this.parseBlock();
        case types.semi:
          return this.parseEmptyStatement(node);
        case types._import: {
          const nextTokenCharCode = this.lookaheadCharCode();
          if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
            break;
          }
        }
        case types._export: {
          if (!this.options.allowImportExportEverywhere && !topLevel) {
            this.raise(this.state.start, ErrorMessages.UnexpectedImportExport);
          }
          this.next();
          let result;
          if (starttype === types._import) {
            result = this.parseImport(node);
            if (result.type === "ImportDeclaration" && (!result.importKind || result.importKind === "value")) {
              this.sawUnambiguousESM = true;
            }
          } else {
            result = this.parseExport(node);
            if (result.type === "ExportNamedDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportAllDeclaration" && (!result.exportKind || result.exportKind === "value") || result.type === "ExportDefaultDeclaration") {
              this.sawUnambiguousESM = true;
            }
          }
          this.assertModuleNodeAllowed(node);
          return result;
        }
        default: {
          if (this.isAsyncFunction()) {
            if (context) {
              this.raise(this.state.start, ErrorMessages.AsyncFunctionInSingleStatementContext);
            }
            this.next();
            return this.parseFunctionStatement(node, true, !context);
          }
        }
      }
      const maybeName = this.state.value;
      const expr = this.parseExpression();
      if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon)) {
        return this.parseLabeledStatement(node, maybeName, expr, context);
      } else {
        return this.parseExpressionStatement(node, expr);
      }
    }
    assertModuleNodeAllowed(node) {
      if (!this.options.allowImportExportEverywhere && !this.inModule) {
        this.raiseWithData(node.start, {
          code: "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED"
        }, ErrorMessages.ImportOutsideModule);
      }
    }
    takeDecorators(node) {
      const decorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];
      if (decorators.length) {
        node.decorators = decorators;
        this.resetStartLocationFromNode(node, decorators[0]);
        this.state.decoratorStack[this.state.decoratorStack.length - 1] = [];
      }
    }
    canHaveLeadingDecorator() {
      return this.match(types._class);
    }
    parseDecorators(allowExport) {
      const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];
      while (this.match(types.at)) {
        const decorator = this.parseDecorator();
        currentContextDecorators.push(decorator);
      }
      if (this.match(types._export)) {
        if (!allowExport) {
          this.unexpected();
        }
        if (this.hasPlugin("decorators") && !this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.raise(this.state.start, ErrorMessages.DecoratorExportClass);
        }
      } else if (!this.canHaveLeadingDecorator()) {
        throw this.raise(this.state.start, ErrorMessages.UnexpectedLeadingDecorator);
      }
    }
    parseDecorator() {
      this.expectOnePlugin(["decorators-legacy", "decorators"]);
      const node = this.startNode();
      this.next();
      if (this.hasPlugin("decorators")) {
        this.state.decoratorStack.push([]);
        const startPos = this.state.start;
        const startLoc = this.state.startLoc;
        let expr;
        if (this.eat(types.parenL)) {
          expr = this.parseExpression();
          this.expect(types.parenR);
        } else {
          expr = this.parseIdentifier(false);
          while (this.eat(types.dot)) {
            const node2 = this.startNodeAt(startPos, startLoc);
            node2.object = expr;
            node2.property = this.parseIdentifier(true);
            node2.computed = false;
            expr = this.finishNode(node2, "MemberExpression");
          }
        }
        node.expression = this.parseMaybeDecoratorArguments(expr);
        this.state.decoratorStack.pop();
      } else {
        node.expression = this.parseExprSubscripts();
      }
      return this.finishNode(node, "Decorator");
    }
    parseMaybeDecoratorArguments(expr) {
      if (this.eat(types.parenL)) {
        const node = this.startNodeAtNode(expr);
        node.callee = expr;
        node.arguments = this.parseCallExpressionArguments(types.parenR, false);
        this.toReferencedList(node.arguments);
        return this.finishNode(node, "CallExpression");
      }
      return expr;
    }
    parseBreakContinueStatement(node, keyword) {
      const isBreak = keyword === "break";
      this.next();
      if (this.isLineTerminator()) {
        node.label = null;
      } else {
        node.label = this.parseIdentifier();
        this.semicolon();
      }
      this.verifyBreakContinue(node, keyword);
      return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
    }
    verifyBreakContinue(node, keyword) {
      const isBreak = keyword === "break";
      let i;
      for (i = 0; i < this.state.labels.length; ++i) {
        const lab = this.state.labels[i];
        if (node.label == null || lab.name === node.label.name) {
          if (lab.kind != null && (isBreak || lab.kind === "loop"))
            break;
          if (node.label && isBreak)
            break;
        }
      }
      if (i === this.state.labels.length) {
        this.raise(node.start, ErrorMessages.IllegalBreakContinue, keyword);
      }
    }
    parseDebuggerStatement(node) {
      this.next();
      this.semicolon();
      return this.finishNode(node, "DebuggerStatement");
    }
    parseHeaderExpression() {
      this.expect(types.parenL);
      const val = this.parseExpression();
      this.expect(types.parenR);
      return val;
    }
    parseDoStatement(node) {
      this.next();
      this.state.labels.push(loopLabel);
      node.body = this.withTopicForbiddingContext(() => this.parseStatement("do"));
      this.state.labels.pop();
      this.expect(types._while);
      node.test = this.parseHeaderExpression();
      this.eat(types.semi);
      return this.finishNode(node, "DoWhileStatement");
    }
    parseForStatement(node) {
      this.next();
      this.state.labels.push(loopLabel);
      let awaitAt = -1;
      if (this.isAwaitAllowed() && this.eatContextual("await")) {
        awaitAt = this.state.lastTokStart;
      }
      this.scope.enter(SCOPE_OTHER);
      this.expect(types.parenL);
      if (this.match(types.semi)) {
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, null);
      }
      const isLet = this.isLet();
      if (this.match(types._var) || this.match(types._const) || isLet) {
        const init2 = this.startNode();
        const kind = isLet ? "let" : this.state.value;
        this.next();
        this.parseVar(init2, true, kind);
        this.finishNode(init2, "VariableDeclaration");
        if ((this.match(types._in) || this.isContextual("of")) && init2.declarations.length === 1) {
          return this.parseForIn(node, init2, awaitAt);
        }
        if (awaitAt > -1) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init2);
      }
      const refExpressionErrors = new ExpressionErrors();
      const init = this.parseExpression(true, refExpressionErrors);
      if (this.match(types._in) || this.isContextual("of")) {
        this.toAssignable(init, true);
        const description = this.isContextual("of") ? "for-of statement" : "for-in statement";
        this.checkLVal(init, description);
        return this.parseForIn(node, init, awaitAt);
      } else {
        this.checkExpressionErrors(refExpressionErrors, true);
      }
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node, init);
    }
    parseFunctionStatement(node, isAsync, declarationPosition) {
      this.next();
      return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), isAsync);
    }
    parseIfStatement(node) {
      this.next();
      node.test = this.parseHeaderExpression();
      node.consequent = this.parseStatement("if");
      node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
      return this.finishNode(node, "IfStatement");
    }
    parseReturnStatement(node) {
      if (!this.prodParam.hasReturn && !this.options.allowReturnOutsideFunction) {
        this.raise(this.state.start, ErrorMessages.IllegalReturn);
      }
      this.next();
      if (this.isLineTerminator()) {
        node.argument = null;
      } else {
        node.argument = this.parseExpression();
        this.semicolon();
      }
      return this.finishNode(node, "ReturnStatement");
    }
    parseSwitchStatement(node) {
      this.next();
      node.discriminant = this.parseHeaderExpression();
      const cases = node.cases = [];
      this.expect(types.braceL);
      this.state.labels.push(switchLabel);
      this.scope.enter(SCOPE_OTHER);
      let cur;
      for (let sawDefault; !this.match(types.braceR); ) {
        if (this.match(types._case) || this.match(types._default)) {
          const isCase = this.match(types._case);
          if (cur)
            this.finishNode(cur, "SwitchCase");
          cases.push(cur = this.startNode());
          cur.consequent = [];
          this.next();
          if (isCase) {
            cur.test = this.parseExpression();
          } else {
            if (sawDefault) {
              this.raise(this.state.lastTokStart, ErrorMessages.MultipleDefaultsInSwitch);
            }
            sawDefault = true;
            cur.test = null;
          }
          this.expect(types.colon);
        } else {
          if (cur) {
            cur.consequent.push(this.parseStatement(null));
          } else {
            this.unexpected();
          }
        }
      }
      this.scope.exit();
      if (cur)
        this.finishNode(cur, "SwitchCase");
      this.next();
      this.state.labels.pop();
      return this.finishNode(node, "SwitchStatement");
    }
    parseThrowStatement(node) {
      this.next();
      if (this.hasPrecedingLineBreak()) {
        this.raise(this.state.lastTokEnd, ErrorMessages.NewlineAfterThrow);
      }
      node.argument = this.parseExpression();
      this.semicolon();
      return this.finishNode(node, "ThrowStatement");
    }
    parseCatchClauseParam() {
      const param = this.parseBindingAtom();
      const simple = param.type === "Identifier";
      this.scope.enter(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(param, "catch clause", BIND_LEXICAL);
      return param;
    }
    parseTryStatement(node) {
      this.next();
      node.block = this.parseBlock();
      node.handler = null;
      if (this.match(types._catch)) {
        const clause = this.startNode();
        this.next();
        if (this.match(types.parenL)) {
          this.expect(types.parenL);
          clause.param = this.parseCatchClauseParam();
          this.expect(types.parenR);
        } else {
          clause.param = null;
          this.scope.enter(SCOPE_OTHER);
        }
        clause.body = this.withTopicForbiddingContext(() => this.parseBlock(false, false));
        this.scope.exit();
        node.handler = this.finishNode(clause, "CatchClause");
      }
      node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
      if (!node.handler && !node.finalizer) {
        this.raise(node.start, ErrorMessages.NoCatchOrFinally);
      }
      return this.finishNode(node, "TryStatement");
    }
    parseVarStatement(node, kind) {
      this.next();
      this.parseVar(node, false, kind);
      this.semicolon();
      return this.finishNode(node, "VariableDeclaration");
    }
    parseWhileStatement(node) {
      this.next();
      node.test = this.parseHeaderExpression();
      this.state.labels.push(loopLabel);
      node.body = this.withTopicForbiddingContext(() => this.parseStatement("while"));
      this.state.labels.pop();
      return this.finishNode(node, "WhileStatement");
    }
    parseWithStatement(node) {
      if (this.state.strict) {
        this.raise(this.state.start, ErrorMessages.StrictWith);
      }
      this.next();
      node.object = this.parseHeaderExpression();
      node.body = this.withTopicForbiddingContext(() => this.parseStatement("with"));
      return this.finishNode(node, "WithStatement");
    }
    parseEmptyStatement(node) {
      this.next();
      return this.finishNode(node, "EmptyStatement");
    }
    parseLabeledStatement(node, maybeName, expr, context) {
      for (let _i2 = 0, _this$state$labels = this.state.labels; _i2 < _this$state$labels.length; _i2++) {
        const label = _this$state$labels[_i2];
        if (label.name === maybeName) {
          this.raise(expr.start, ErrorMessages.LabelRedeclaration, maybeName);
        }
      }
      const kind = this.state.type.isLoop ? "loop" : this.match(types._switch) ? "switch" : null;
      for (let i = this.state.labels.length - 1; i >= 0; i--) {
        const label = this.state.labels[i];
        if (label.statementStart === node.start) {
          label.statementStart = this.state.start;
          label.kind = kind;
        } else {
          break;
        }
      }
      this.state.labels.push({
        name: maybeName,
        kind,
        statementStart: this.state.start
      });
      node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
      this.state.labels.pop();
      node.label = expr;
      return this.finishNode(node, "LabeledStatement");
    }
    parseExpressionStatement(node, expr) {
      node.expression = expr;
      this.semicolon();
      return this.finishNode(node, "ExpressionStatement");
    }
    parseBlock(allowDirectives = false, createNewLexicalScope = true, afterBlockParse) {
      const node = this.startNode();
      if (allowDirectives) {
        this.state.strictErrors.clear();
      }
      this.expect(types.braceL);
      if (createNewLexicalScope) {
        this.scope.enter(SCOPE_OTHER);
      }
      this.parseBlockBody(node, allowDirectives, false, types.braceR, afterBlockParse);
      if (createNewLexicalScope) {
        this.scope.exit();
      }
      return this.finishNode(node, "BlockStatement");
    }
    isValidDirective(stmt) {
      return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
    }
    parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
      const body = node.body = [];
      const directives = node.directives = [];
      this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : void 0, topLevel, end, afterBlockParse);
    }
    parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
      const oldStrict = this.state.strict;
      let hasStrictModeDirective = false;
      let parsedNonDirective = false;
      while (!this.match(end)) {
        const stmt = this.parseStatement(null, topLevel);
        if (directives && !parsedNonDirective) {
          if (this.isValidDirective(stmt)) {
            const directive = this.stmtToDirective(stmt);
            directives.push(directive);
            if (!hasStrictModeDirective && directive.value.value === "use strict") {
              hasStrictModeDirective = true;
              this.setStrict(true);
            }
            continue;
          }
          parsedNonDirective = true;
          this.state.strictErrors.clear();
        }
        body.push(stmt);
      }
      if (afterBlockParse) {
        afterBlockParse.call(this, hasStrictModeDirective);
      }
      if (!oldStrict) {
        this.setStrict(false);
      }
      this.next();
    }
    parseFor(node, init) {
      node.init = init;
      this.semicolon(false);
      node.test = this.match(types.semi) ? null : this.parseExpression();
      this.semicolon(false);
      node.update = this.match(types.parenR) ? null : this.parseExpression();
      this.expect(types.parenR);
      node.body = this.withTopicForbiddingContext(() => this.parseStatement("for"));
      this.scope.exit();
      this.state.labels.pop();
      return this.finishNode(node, "ForStatement");
    }
    parseForIn(node, init, awaitAt) {
      const isForIn = this.match(types._in);
      this.next();
      if (isForIn) {
        if (awaitAt > -1)
          this.unexpected(awaitAt);
      } else {
        node.await = awaitAt > -1;
      }
      if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
        this.raise(init.start, ErrorMessages.ForInOfLoopInitializer, isForIn ? "for-in" : "for-of");
      } else if (init.type === "AssignmentPattern") {
        this.raise(init.start, ErrorMessages.InvalidLhs, "for-loop");
      }
      node.left = init;
      node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
      this.expect(types.parenR);
      node.body = this.withTopicForbiddingContext(() => this.parseStatement("for"));
      this.scope.exit();
      this.state.labels.pop();
      return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
    }
    parseVar(node, isFor, kind) {
      const declarations = node.declarations = [];
      const isTypescript = this.hasPlugin("typescript");
      node.kind = kind;
      for (; ; ) {
        const decl = this.startNode();
        this.parseVarId(decl, kind);
        if (this.eat(types.eq)) {
          decl.init = isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
        } else {
          if (kind === "const" && !(this.match(types._in) || this.isContextual("of"))) {
            if (!isTypescript) {
              this.raise(this.state.lastTokEnd, ErrorMessages.DeclarationMissingInitializer, "Const declarations");
            }
          } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(types._in) || this.isContextual("of")))) {
            this.raise(this.state.lastTokEnd, ErrorMessages.DeclarationMissingInitializer, "Complex binding patterns");
          }
          decl.init = null;
        }
        declarations.push(this.finishNode(decl, "VariableDeclarator"));
        if (!this.eat(types.comma))
          break;
      }
      return node;
    }
    parseVarId(decl, kind) {
      decl.id = this.parseBindingAtom();
      this.checkLVal(decl.id, "variable declaration", kind === "var" ? BIND_VAR : BIND_LEXICAL, void 0, kind !== "var");
    }
    parseFunction(node, statement = FUNC_NO_FLAGS, isAsync = false) {
      const isStatement = statement & FUNC_STATEMENT;
      const isHangingStatement = statement & FUNC_HANGING_STATEMENT;
      const requireId = !!isStatement && !(statement & FUNC_NULLABLE_ID);
      this.initFunction(node, isAsync);
      if (this.match(types.star) && isHangingStatement) {
        this.raise(this.state.start, ErrorMessages.GeneratorInSingleStatementContext);
      }
      node.generator = this.eat(types.star);
      if (isStatement) {
        node.id = this.parseFunctionId(requireId);
      }
      const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
      this.state.maybeInArrowParameters = false;
      this.scope.enter(SCOPE_FUNCTION);
      this.prodParam.enter(functionFlags(isAsync, node.generator));
      if (!isStatement) {
        node.id = this.parseFunctionId();
      }
      this.parseFunctionParams(node, false);
      this.withTopicForbiddingContext(() => {
        this.parseFunctionBodyAndFinish(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
      });
      this.prodParam.exit();
      this.scope.exit();
      if (isStatement && !isHangingStatement) {
        this.registerFunctionStatementId(node);
      }
      this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
      return node;
    }
    parseFunctionId(requireId) {
      return requireId || this.match(types.name) ? this.parseIdentifier() : null;
    }
    parseFunctionParams(node, allowModifiers) {
      this.expect(types.parenL);
      this.expressionScope.enter(newParameterDeclarationScope());
      node.params = this.parseBindingList(types.parenR, 41, false, allowModifiers);
      this.expressionScope.exit();
    }
    registerFunctionStatementId(node) {
      if (!node.id)
        return;
      this.scope.declareName(node.id.name, this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION, node.id.start);
    }
    parseClass(node, isStatement, optionalId) {
      this.next();
      this.takeDecorators(node);
      const oldStrict = this.state.strict;
      this.state.strict = true;
      this.parseClassId(node, isStatement, optionalId);
      this.parseClassSuper(node);
      node.body = this.parseClassBody(!!node.superClass, oldStrict);
      return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
    }
    isClassProperty() {
      return this.match(types.eq) || this.match(types.semi) || this.match(types.braceR);
    }
    isClassMethod() {
      return this.match(types.parenL);
    }
    isNonstaticConstructor(method) {
      return !method.computed && !method.static && (method.key.name === "constructor" || method.key.value === "constructor");
    }
    parseClassBody(constructorAllowsSuper, oldStrict) {
      this.classScope.enter();
      const state = {
        constructorAllowsSuper,
        hadConstructor: false,
        hadStaticBlock: false
      };
      let decorators = [];
      const classBody = this.startNode();
      classBody.body = [];
      this.expect(types.braceL);
      this.withTopicForbiddingContext(() => {
        while (!this.match(types.braceR)) {
          if (this.eat(types.semi)) {
            if (decorators.length > 0) {
              throw this.raise(this.state.lastTokEnd, ErrorMessages.DecoratorSemicolon);
            }
            continue;
          }
          if (this.match(types.at)) {
            decorators.push(this.parseDecorator());
            continue;
          }
          const member = this.startNode();
          if (decorators.length) {
            member.decorators = decorators;
            this.resetStartLocationFromNode(member, decorators[0]);
            decorators = [];
          }
          this.parseClassMember(classBody, member, state);
          if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
            this.raise(member.start, ErrorMessages.DecoratorConstructor);
          }
        }
      });
      this.state.strict = oldStrict;
      this.next();
      if (decorators.length) {
        throw this.raise(this.state.start, ErrorMessages.TrailingDecorator);
      }
      this.classScope.exit();
      return this.finishNode(classBody, "ClassBody");
    }
    parseClassMemberFromModifier(classBody, member) {
      const key = this.parseIdentifier(true);
      if (this.isClassMethod()) {
        const method = member;
        method.kind = "method";
        method.computed = false;
        method.key = key;
        method.static = false;
        this.pushClassMethod(classBody, method, false, false, false, false);
        return true;
      } else if (this.isClassProperty()) {
        const prop = member;
        prop.computed = false;
        prop.key = key;
        prop.static = false;
        classBody.body.push(this.parseClassProperty(prop));
        return true;
      }
      return false;
    }
    parseClassMember(classBody, member, state) {
      const isStatic = this.isContextual("static");
      if (isStatic) {
        if (this.parseClassMemberFromModifier(classBody, member)) {
          return;
        }
        if (this.eat(types.braceL)) {
          this.parseClassStaticBlock(classBody, member, state);
          return;
        }
      }
      this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
    }
    parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
      const publicMethod = member;
      const privateMethod = member;
      const publicProp = member;
      const privateProp = member;
      const method = publicMethod;
      const publicMember = publicMethod;
      member.static = isStatic;
      if (this.eat(types.star)) {
        method.kind = "method";
        this.parseClassElementName(method);
        if (this.isPrivateName(method.key)) {
          this.pushClassPrivateMethod(classBody, privateMethod, true, false);
          return;
        }
        if (this.isNonstaticConstructor(publicMethod)) {
          this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsGenerator);
        }
        this.pushClassMethod(classBody, publicMethod, true, false, false, false);
        return;
      }
      const containsEsc = this.state.containsEsc;
      const key = this.parseClassElementName(member);
      const isPrivate = this.isPrivateName(key);
      const isSimple = key.type === "Identifier";
      const maybeQuestionTokenStart = this.state.start;
      this.parsePostMemberNameModifiers(publicMember);
      if (this.isClassMethod()) {
        method.kind = "method";
        if (isPrivate) {
          this.pushClassPrivateMethod(classBody, privateMethod, false, false);
          return;
        }
        const isConstructor = this.isNonstaticConstructor(publicMethod);
        let allowsDirectSuper = false;
        if (isConstructor) {
          publicMethod.kind = "constructor";
          if (state.hadConstructor && !this.hasPlugin("typescript")) {
            this.raise(key.start, ErrorMessages.DuplicateConstructor);
          }
          state.hadConstructor = true;
          allowsDirectSuper = state.constructorAllowsSuper;
        }
        this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
      } else if (this.isClassProperty()) {
        if (isPrivate) {
          this.pushClassPrivateProperty(classBody, privateProp);
        } else {
          this.pushClassProperty(classBody, publicProp);
        }
      } else if (isSimple && key.name === "async" && !containsEsc && !this.isLineTerminator()) {
        const isGenerator = this.eat(types.star);
        if (publicMember.optional) {
          this.unexpected(maybeQuestionTokenStart);
        }
        method.kind = "method";
        this.parseClassElementName(method);
        this.parsePostMemberNameModifiers(publicMember);
        if (this.isPrivateName(method.key)) {
          this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
        } else {
          if (this.isNonstaticConstructor(publicMethod)) {
            this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsAsync);
          }
          this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
        }
      } else if (isSimple && (key.name === "get" || key.name === "set") && !containsEsc && !(this.match(types.star) && this.isLineTerminator())) {
        method.kind = key.name;
        this.parseClassElementName(publicMethod);
        if (this.isPrivateName(method.key)) {
          this.pushClassPrivateMethod(classBody, privateMethod, false, false);
        } else {
          if (this.isNonstaticConstructor(publicMethod)) {
            this.raise(publicMethod.key.start, ErrorMessages.ConstructorIsAccessor);
          }
          this.pushClassMethod(classBody, publicMethod, false, false, false, false);
        }
        this.checkGetterSetterParams(publicMethod);
      } else if (this.isLineTerminator()) {
        if (isPrivate) {
          this.pushClassPrivateProperty(classBody, privateProp);
        } else {
          this.pushClassProperty(classBody, publicProp);
        }
      } else {
        this.unexpected();
      }
    }
    parseClassElementName(member) {
      const key = this.parsePropertyName(member, true);
      if (!member.computed && member.static && (key.name === "prototype" || key.value === "prototype")) {
        this.raise(key.start, ErrorMessages.StaticPrototype);
      }
      if (this.isPrivateName(key) && this.getPrivateNameSV(key) === "constructor") {
        this.raise(key.start, ErrorMessages.ConstructorClassPrivateField);
      }
      return key;
    }
    parseClassStaticBlock(classBody, member, state) {
      var _member$decorators;
      this.expectPlugin("classStaticBlock", member.start);
      this.scope.enter(SCOPE_CLASS | SCOPE_STATIC_BLOCK | SCOPE_SUPER);
      const oldLabels = this.state.labels;
      this.state.labels = [];
      this.prodParam.enter(PARAM);
      const body = member.body = [];
      this.parseBlockOrModuleBlockBody(body, void 0, false, types.braceR);
      this.prodParam.exit();
      this.scope.exit();
      this.state.labels = oldLabels;
      classBody.body.push(this.finishNode(member, "StaticBlock"));
      if (state.hadStaticBlock) {
        this.raise(member.start, ErrorMessages.DuplicateStaticBlock);
      }
      if ((_member$decorators = member.decorators) == null ? void 0 : _member$decorators.length) {
        this.raise(member.start, ErrorMessages.DecoratorStaticBlock);
      }
      state.hadStaticBlock = true;
    }
    pushClassProperty(classBody, prop) {
      if (!prop.computed && (prop.key.name === "constructor" || prop.key.value === "constructor")) {
        this.raise(prop.key.start, ErrorMessages.ConstructorClassField);
      }
      classBody.body.push(this.parseClassProperty(prop));
    }
    pushClassPrivateProperty(classBody, prop) {
      this.expectPlugin("classPrivateProperties", prop.key.start);
      const node = this.parseClassPrivateProperty(prop);
      classBody.body.push(node);
      this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), CLASS_ELEMENT_OTHER, node.key.start);
    }
    pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
      classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
    }
    pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
      this.expectPlugin("classPrivateMethods", method.key.start);
      const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
      classBody.body.push(node);
      const kind = node.kind === "get" ? node.static ? CLASS_ELEMENT_STATIC_GETTER : CLASS_ELEMENT_INSTANCE_GETTER : node.kind === "set" ? node.static ? CLASS_ELEMENT_STATIC_SETTER : CLASS_ELEMENT_INSTANCE_SETTER : CLASS_ELEMENT_OTHER;
      this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), kind, node.key.start);
    }
    parsePostMemberNameModifiers(methodOrProp) {
    }
    parseClassPrivateProperty(node) {
      this.parseInitializer(node);
      this.semicolon();
      return this.finishNode(node, "ClassPrivateProperty");
    }
    parseClassProperty(node) {
      if (!node.typeAnnotation || this.match(types.eq)) {
        this.expectPlugin("classProperties");
      }
      this.parseInitializer(node);
      this.semicolon();
      return this.finishNode(node, "ClassProperty");
    }
    parseInitializer(node) {
      this.scope.enter(SCOPE_CLASS | SCOPE_SUPER);
      this.expressionScope.enter(newExpressionScope());
      this.prodParam.enter(PARAM);
      node.value = this.eat(types.eq) ? this.parseMaybeAssignAllowIn() : null;
      this.expressionScope.exit();
      this.prodParam.exit();
      this.scope.exit();
    }
    parseClassId(node, isStatement, optionalId, bindingType = BIND_CLASS) {
      if (this.match(types.name)) {
        node.id = this.parseIdentifier();
        if (isStatement) {
          this.checkLVal(node.id, "class name", bindingType);
        }
      } else {
        if (optionalId || !isStatement) {
          node.id = null;
        } else {
          this.unexpected(null, ErrorMessages.MissingClassName);
        }
      }
    }
    parseClassSuper(node) {
      node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
    }
    parseExport(node) {
      const hasDefault = this.maybeParseExportDefaultSpecifier(node);
      const parseAfterDefault = !hasDefault || this.eat(types.comma);
      const hasStar = parseAfterDefault && this.eatExportStar(node);
      const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
      const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(types.comma));
      const isFromRequired = hasDefault || hasStar;
      if (hasStar && !hasNamespace) {
        if (hasDefault)
          this.unexpected();
        this.parseExportFrom(node, true);
        return this.finishNode(node, "ExportAllDeclaration");
      }
      const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);
      if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers || hasNamespace && parseAfterNamespace && !hasSpecifiers) {
        throw this.unexpected(null, types.braceL);
      }
      let hasDeclaration;
      if (isFromRequired || hasSpecifiers) {
        hasDeclaration = false;
        this.parseExportFrom(node, isFromRequired);
      } else {
        hasDeclaration = this.maybeParseExportDeclaration(node);
      }
      if (isFromRequired || hasSpecifiers || hasDeclaration) {
        this.checkExport(node, true, false, !!node.source);
        return this.finishNode(node, "ExportNamedDeclaration");
      }
      if (this.eat(types._default)) {
        node.declaration = this.parseExportDefaultExpression();
        this.checkExport(node, true, true);
        return this.finishNode(node, "ExportDefaultDeclaration");
      }
      throw this.unexpected(null, types.braceL);
    }
    eatExportStar(node) {
      return this.eat(types.star);
    }
    maybeParseExportDefaultSpecifier(node) {
      if (this.isExportDefaultSpecifier()) {
        this.expectPlugin("exportDefaultFrom");
        const specifier = this.startNode();
        specifier.exported = this.parseIdentifier(true);
        node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
        return true;
      }
      return false;
    }
    maybeParseExportNamespaceSpecifier(node) {
      if (this.isContextual("as")) {
        if (!node.specifiers)
          node.specifiers = [];
        const specifier = this.startNodeAt(this.state.lastTokStart, this.state.lastTokStartLoc);
        this.next();
        specifier.exported = this.parseModuleExportName();
        node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
        return true;
      }
      return false;
    }
    maybeParseExportNamedSpecifiers(node) {
      if (this.match(types.braceL)) {
        if (!node.specifiers)
          node.specifiers = [];
        node.specifiers.push(...this.parseExportSpecifiers());
        node.source = null;
        node.declaration = null;
        return true;
      }
      return false;
    }
    maybeParseExportDeclaration(node) {
      if (this.shouldParseExportDeclaration()) {
        node.specifiers = [];
        node.source = null;
        node.declaration = this.parseExportDeclaration(node);
        return true;
      }
      return false;
    }
    isAsyncFunction() {
      if (!this.isContextual("async"))
        return false;
      const next = this.nextTokenStart();
      return !lineBreak.test(this.input.slice(this.state.pos, next)) && this.isUnparsedContextual(next, "function");
    }
    parseExportDefaultExpression() {
      const expr = this.startNode();
      const isAsync = this.isAsyncFunction();
      if (this.match(types._function) || isAsync) {
        this.next();
        if (isAsync) {
          this.next();
        }
        return this.parseFunction(expr, FUNC_STATEMENT | FUNC_NULLABLE_ID, isAsync);
      } else if (this.match(types._class)) {
        return this.parseClass(expr, true, true);
      } else if (this.match(types.at)) {
        if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport")) {
          this.raise(this.state.start, ErrorMessages.DecoratorBeforeExport);
        }
        this.parseDecorators(false);
        return this.parseClass(expr, true, true);
      } else if (this.match(types._const) || this.match(types._var) || this.isLet()) {
        throw this.raise(this.state.start, ErrorMessages.UnsupportedDefaultExport);
      } else {
        const res = this.parseMaybeAssignAllowIn();
        this.semicolon();
        return res;
      }
    }
    parseExportDeclaration(node) {
      return this.parseStatement(null);
    }
    isExportDefaultSpecifier() {
      if (this.match(types.name)) {
        const value = this.state.value;
        if (value === "async" && !this.state.containsEsc || value === "let") {
          return false;
        }
        if ((value === "type" || value === "interface") && !this.state.containsEsc) {
          const l = this.lookahead();
          if (l.type === types.name && l.value !== "from" || l.type === types.braceL) {
            this.expectOnePlugin(["flow", "typescript"]);
            return false;
          }
        }
      } else if (!this.match(types._default)) {
        return false;
      }
      const next = this.nextTokenStart();
      const hasFrom = this.isUnparsedContextual(next, "from");
      if (this.input.charCodeAt(next) === 44 || this.match(types.name) && hasFrom) {
        return true;
      }
      if (this.match(types._default) && hasFrom) {
        const nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
        return nextAfterFrom === 34 || nextAfterFrom === 39;
      }
      return false;
    }
    parseExportFrom(node, expect) {
      if (this.eatContextual("from")) {
        node.source = this.parseImportSource();
        this.checkExport(node);
        const assertions = this.maybeParseImportAssertions();
        if (assertions) {
          node.assertions = assertions;
        }
      } else {
        if (expect) {
          this.unexpected();
        } else {
          node.source = null;
        }
      }
      this.semicolon();
    }
    shouldParseExportDeclaration() {
      if (this.match(types.at)) {
        this.expectOnePlugin(["decorators", "decorators-legacy"]);
        if (this.hasPlugin("decorators")) {
          if (this.getPluginOption("decorators", "decoratorsBeforeExport")) {
            this.unexpected(this.state.start, ErrorMessages.DecoratorBeforeExport);
          } else {
            return true;
          }
        }
      }
      return this.state.type.keyword === "var" || this.state.type.keyword === "const" || this.state.type.keyword === "function" || this.state.type.keyword === "class" || this.isLet() || this.isAsyncFunction();
    }
    checkExport(node, checkNames, isDefault, isFrom) {
      if (checkNames) {
        if (isDefault) {
          this.checkDuplicateExports(node, "default");
          if (this.hasPlugin("exportDefaultFrom")) {
            var _declaration$extra;
            const declaration = node.declaration;
            if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !((_declaration$extra = declaration.extra) == null ? void 0 : _declaration$extra.parenthesized)) {
              this.raise(declaration.start, ErrorMessages.ExportDefaultFromAsIdentifier);
            }
          }
        } else if (node.specifiers && node.specifiers.length) {
          for (let _i3 = 0, _node$specifiers = node.specifiers; _i3 < _node$specifiers.length; _i3++) {
            const specifier = _node$specifiers[_i3];
            const {
              exported
            } = specifier;
            const exportedName = exported.type === "Identifier" ? exported.name : exported.value;
            this.checkDuplicateExports(specifier, exportedName);
            if (!isFrom && specifier.local) {
              const {
                local
              } = specifier;
              if (local.type === "StringLiteral") {
                this.raise(specifier.start, ErrorMessages.ExportBindingIsString, local.value, exportedName);
              } else {
                this.checkReservedWord(local.name, local.start, true, false);
                this.scope.checkLocalExport(local);
              }
            }
          }
        } else if (node.declaration) {
          if (node.declaration.type === "FunctionDeclaration" || node.declaration.type === "ClassDeclaration") {
            const id = node.declaration.id;
            if (!id)
              throw new Error("Assertion failure");
            this.checkDuplicateExports(node, id.name);
          } else if (node.declaration.type === "VariableDeclaration") {
            for (let _i4 = 0, _node$declaration$dec = node.declaration.declarations; _i4 < _node$declaration$dec.length; _i4++) {
              const declaration = _node$declaration$dec[_i4];
              this.checkDeclaration(declaration.id);
            }
          }
        }
      }
      const currentContextDecorators = this.state.decoratorStack[this.state.decoratorStack.length - 1];
      if (currentContextDecorators.length) {
        throw this.raise(node.start, ErrorMessages.UnsupportedDecoratorExport);
      }
    }
    checkDeclaration(node) {
      if (node.type === "Identifier") {
        this.checkDuplicateExports(node, node.name);
      } else if (node.type === "ObjectPattern") {
        for (let _i5 = 0, _node$properties = node.properties; _i5 < _node$properties.length; _i5++) {
          const prop = _node$properties[_i5];
          this.checkDeclaration(prop);
        }
      } else if (node.type === "ArrayPattern") {
        for (let _i6 = 0, _node$elements = node.elements; _i6 < _node$elements.length; _i6++) {
          const elem = _node$elements[_i6];
          if (elem) {
            this.checkDeclaration(elem);
          }
        }
      } else if (node.type === "ObjectProperty") {
        this.checkDeclaration(node.value);
      } else if (node.type === "RestElement") {
        this.checkDeclaration(node.argument);
      } else if (node.type === "AssignmentPattern") {
        this.checkDeclaration(node.left);
      }
    }
    checkDuplicateExports(node, name) {
      if (this.state.exportedIdentifiers.indexOf(name) > -1) {
        this.raise(node.start, name === "default" ? ErrorMessages.DuplicateDefaultExport : ErrorMessages.DuplicateExport, name);
      }
      this.state.exportedIdentifiers.push(name);
    }
    parseExportSpecifiers() {
      const nodes = [];
      let first = true;
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          this.expect(types.comma);
          if (this.eat(types.braceR))
            break;
        }
        const node = this.startNode();
        node.local = this.parseModuleExportName();
        node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local.__clone();
        nodes.push(this.finishNode(node, "ExportSpecifier"));
      }
      return nodes;
    }
    parseModuleExportName() {
      if (this.match(types.string)) {
        this.expectPlugin("moduleStringNames");
        const result = this.parseLiteral(this.state.value, "StringLiteral");
        const surrogate = result.value.match(loneSurrogate);
        if (surrogate) {
          this.raise(result.start, ErrorMessages.ModuleExportNameHasLoneSurrogate, surrogate[0].charCodeAt(0).toString(16));
        }
        return result;
      }
      return this.parseIdentifier(true);
    }
    parseImport(node) {
      node.specifiers = [];
      if (!this.match(types.string)) {
        const hasDefault = this.maybeParseDefaultImportSpecifier(node);
        const parseNext = !hasDefault || this.eat(types.comma);
        const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
        if (parseNext && !hasStar)
          this.parseNamedImportSpecifiers(node);
        this.expectContextual("from");
      }
      node.source = this.parseImportSource();
      const assertions = this.maybeParseImportAssertions();
      if (assertions) {
        node.assertions = assertions;
      } else {
        const attributes = this.maybeParseModuleAttributes();
        if (attributes) {
          node.attributes = attributes;
        }
      }
      this.semicolon();
      return this.finishNode(node, "ImportDeclaration");
    }
    parseImportSource() {
      if (!this.match(types.string))
        this.unexpected();
      return this.parseExprAtom();
    }
    shouldParseDefaultImport(node) {
      return this.match(types.name);
    }
    parseImportSpecifierLocal(node, specifier, type, contextDescription) {
      specifier.local = this.parseIdentifier();
      this.checkLVal(specifier.local, contextDescription, BIND_LEXICAL);
      node.specifiers.push(this.finishNode(specifier, type));
    }
    parseAssertEntries() {
      const attrs = [];
      const attrNames = new Set();
      do {
        if (this.match(types.braceR)) {
          break;
        }
        const node = this.startNode();
        const keyName = this.state.value;
        if (this.match(types.string)) {
          node.key = this.parseLiteral(keyName, "StringLiteral");
        } else {
          node.key = this.parseIdentifier(true);
        }
        this.expect(types.colon);
        if (keyName !== "type") {
          this.raise(node.key.start, ErrorMessages.ModuleAttributeDifferentFromType, keyName);
        }
        if (attrNames.has(keyName)) {
          this.raise(node.key.start, ErrorMessages.ModuleAttributesWithDuplicateKeys, keyName);
        }
        attrNames.add(keyName);
        if (!this.match(types.string)) {
          throw this.unexpected(this.state.start, ErrorMessages.ModuleAttributeInvalidValue);
        }
        node.value = this.parseLiteral(this.state.value, "StringLiteral");
        this.finishNode(node, "ImportAttribute");
        attrs.push(node);
      } while (this.eat(types.comma));
      return attrs;
    }
    maybeParseModuleAttributes() {
      if (this.match(types._with) && !this.hasPrecedingLineBreak()) {
        this.expectPlugin("moduleAttributes");
        this.next();
      } else {
        if (this.hasPlugin("moduleAttributes"))
          return [];
        return null;
      }
      const attrs = [];
      const attributes = new Set();
      do {
        const node = this.startNode();
        node.key = this.parseIdentifier(true);
        if (node.key.name !== "type") {
          this.raise(node.key.start, ErrorMessages.ModuleAttributeDifferentFromType, node.key.name);
        }
        if (attributes.has(node.key.name)) {
          this.raise(node.key.start, ErrorMessages.ModuleAttributesWithDuplicateKeys, node.key.name);
        }
        attributes.add(node.key.name);
        this.expect(types.colon);
        if (!this.match(types.string)) {
          throw this.unexpected(this.state.start, ErrorMessages.ModuleAttributeInvalidValue);
        }
        node.value = this.parseLiteral(this.state.value, "StringLiteral");
        this.finishNode(node, "ImportAttribute");
        attrs.push(node);
      } while (this.eat(types.comma));
      return attrs;
    }
    maybeParseImportAssertions() {
      if (this.isContextual("assert") && !this.hasPrecedingLineBreak()) {
        this.expectPlugin("importAssertions");
        this.next();
      } else {
        if (this.hasPlugin("importAssertions"))
          return [];
        return null;
      }
      this.eat(types.braceL);
      const attrs = this.parseAssertEntries();
      this.eat(types.braceR);
      return attrs;
    }
    maybeParseDefaultImportSpecifier(node) {
      if (this.shouldParseDefaultImport(node)) {
        this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier", "default import specifier");
        return true;
      }
      return false;
    }
    maybeParseStarImportSpecifier(node) {
      if (this.match(types.star)) {
        const specifier = this.startNode();
        this.next();
        this.expectContextual("as");
        this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier", "import namespace specifier");
        return true;
      }
      return false;
    }
    parseNamedImportSpecifiers(node) {
      let first = true;
      this.expect(types.braceL);
      while (!this.eat(types.braceR)) {
        if (first) {
          first = false;
        } else {
          if (this.eat(types.colon)) {
            throw this.raise(this.state.start, ErrorMessages.DestructureNamedImport);
          }
          this.expect(types.comma);
          if (this.eat(types.braceR))
            break;
        }
        this.parseImportSpecifier(node);
      }
    }
    parseImportSpecifier(node) {
      const specifier = this.startNode();
      specifier.imported = this.parseModuleExportName();
      if (this.eatContextual("as")) {
        specifier.local = this.parseIdentifier();
      } else {
        const {
          imported
        } = specifier;
        if (imported.type === "StringLiteral") {
          throw this.raise(specifier.start, ErrorMessages.ImportBindingIsString, imported.value);
        }
        this.checkReservedWord(imported.name, specifier.start, true, true);
        specifier.local = imported.__clone();
      }
      this.checkLVal(specifier.local, "import specifier", BIND_LEXICAL);
      node.specifiers.push(this.finishNode(specifier, "ImportSpecifier"));
    }
  };
  var Parser = class extends StatementParser {
    constructor(options, input) {
      options = getOptions(options);
      super(options, input);
      this.options = options;
      this.initializeScopes();
      this.plugins = pluginsMap(this.options.plugins);
      this.filename = options.sourceFilename;
    }
    getScopeHandler() {
      return ScopeHandler;
    }
    parse() {
      this.enterInitialScopes();
      const file = this.startNode();
      const program = this.startNode();
      this.nextToken();
      file.errors = null;
      this.parseTopLevel(file, program);
      file.errors = this.state.errors;
      return file;
    }
  };
  function pluginsMap(plugins) {
    const pluginMap = new Map();
    for (let _i = 0; _i < plugins.length; _i++) {
      const plugin = plugins[_i];
      const [name, options] = Array.isArray(plugin) ? plugin : [plugin, {}];
      if (!pluginMap.has(name))
        pluginMap.set(name, options || {});
    }
    return pluginMap;
  }
  function parse(input, options) {
    var _options;
    if (((_options = options) == null ? void 0 : _options.sourceType) === "unambiguous") {
      options = Object.assign({}, options);
      try {
        options.sourceType = "module";
        const parser = getParser(options, input);
        const ast = parser.parse();
        if (parser.sawUnambiguousESM) {
          return ast;
        }
        if (parser.ambiguousScriptDifferentAst) {
          try {
            options.sourceType = "script";
            return getParser(options, input).parse();
          } catch (_unused) {
          }
        } else {
          ast.program.sourceType = "script";
        }
        return ast;
      } catch (moduleError) {
        try {
          options.sourceType = "script";
          return getParser(options, input).parse();
        } catch (_unused2) {
        }
        throw moduleError;
      }
    } else {
      return getParser(options, input).parse();
    }
  }
  function parseExpression(input, options) {
    const parser = getParser(options, input);
    if (parser.options.strictMode) {
      parser.state.strict = true;
    }
    return parser.getExpression();
  }
  function getParser(options, input) {
    let cls = Parser;
    if (options == null ? void 0 : options.plugins) {
      validatePlugins(options.plugins);
      cls = getParserClass(options.plugins);
    }
    return new cls(options, input);
  }
  var parserClassCache = {};
  function getParserClass(pluginsFromOptions) {
    const pluginList = mixinPluginNames.filter((name) => hasPlugin(pluginsFromOptions, name));
    const key = pluginList.join("/");
    let cls = parserClassCache[key];
    if (!cls) {
      cls = Parser;
      for (let _i = 0; _i < pluginList.length; _i++) {
        const plugin = pluginList[_i];
        cls = mixinPlugins[plugin](cls);
      }
      parserClassCache[key] = cls;
    }
    return cls;
  }
  exports2.parse = parse;
  exports2.parseExpression = parseExpression;
  exports2.tokTypes = types;
});

// node_modules/estree-walker/dist/umd/estree-walker.js
var require_estree_walker = __commonJS((exports2, module2) => {
  (function(global2, factory) {
    typeof exports2 === "object" && typeof module2 !== "undefined" ? factory(exports2) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = global2 || self, factory(global2.estreeWalker = {}));
  })(exports2, function(exports3) {
    "use strict";
    class WalkerBase {
      constructor() {
        this.should_skip = false;
        this.should_remove = false;
        this.replacement = null;
        this.context = {
          skip: () => this.should_skip = true,
          remove: () => this.should_remove = true,
          replace: (node) => this.replacement = node
        };
      }
      replace(parent, prop, index, node) {
        if (parent) {
          if (index !== null) {
            parent[prop][index] = node;
          } else {
            parent[prop] = node;
          }
        }
      }
      remove(parent, prop, index) {
        if (parent) {
          if (index !== null) {
            parent[prop].splice(index, 1);
          } else {
            delete parent[prop];
          }
        }
      }
    }
    class SyncWalker extends WalkerBase {
      constructor(enter, leave) {
        super();
        this.enter = enter;
        this.leave = leave;
      }
      visit(node, parent, prop, index) {
        if (node) {
          if (this.enter) {
            const _should_skip = this.should_skip;
            const _should_remove = this.should_remove;
            const _replacement = this.replacement;
            this.should_skip = false;
            this.should_remove = false;
            this.replacement = null;
            this.enter.call(this.context, node, parent, prop, index);
            if (this.replacement) {
              node = this.replacement;
              this.replace(parent, prop, index, node);
            }
            if (this.should_remove) {
              this.remove(parent, prop, index);
            }
            const skipped = this.should_skip;
            const removed = this.should_remove;
            this.should_skip = _should_skip;
            this.should_remove = _should_remove;
            this.replacement = _replacement;
            if (skipped)
              return node;
            if (removed)
              return null;
          }
          for (const key in node) {
            const value = node[key];
            if (typeof value !== "object") {
              continue;
            } else if (Array.isArray(value)) {
              for (let i = 0; i < value.length; i += 1) {
                if (value[i] !== null && typeof value[i].type === "string") {
                  if (!this.visit(value[i], node, key, i)) {
                    i--;
                  }
                }
              }
            } else if (value !== null && typeof value.type === "string") {
              this.visit(value, node, key, null);
            }
          }
          if (this.leave) {
            const _replacement = this.replacement;
            const _should_remove = this.should_remove;
            this.replacement = null;
            this.should_remove = false;
            this.leave.call(this.context, node, parent, prop, index);
            if (this.replacement) {
              node = this.replacement;
              this.replace(parent, prop, index, node);
            }
            if (this.should_remove) {
              this.remove(parent, prop, index);
            }
            const removed = this.should_remove;
            this.replacement = _replacement;
            this.should_remove = _should_remove;
            if (removed)
              return null;
          }
        }
        return node;
      }
    }
    class AsyncWalker extends WalkerBase {
      constructor(enter, leave) {
        super();
        this.enter = enter;
        this.leave = leave;
      }
      async visit(node, parent, prop, index) {
        if (node) {
          if (this.enter) {
            const _should_skip = this.should_skip;
            const _should_remove = this.should_remove;
            const _replacement = this.replacement;
            this.should_skip = false;
            this.should_remove = false;
            this.replacement = null;
            await this.enter.call(this.context, node, parent, prop, index);
            if (this.replacement) {
              node = this.replacement;
              this.replace(parent, prop, index, node);
            }
            if (this.should_remove) {
              this.remove(parent, prop, index);
            }
            const skipped = this.should_skip;
            const removed = this.should_remove;
            this.should_skip = _should_skip;
            this.should_remove = _should_remove;
            this.replacement = _replacement;
            if (skipped)
              return node;
            if (removed)
              return null;
          }
          for (const key in node) {
            const value = node[key];
            if (typeof value !== "object") {
              continue;
            } else if (Array.isArray(value)) {
              for (let i = 0; i < value.length; i += 1) {
                if (value[i] !== null && typeof value[i].type === "string") {
                  if (!await this.visit(value[i], node, key, i)) {
                    i--;
                  }
                }
              }
            } else if (value !== null && typeof value.type === "string") {
              await this.visit(value, node, key, null);
            }
          }
          if (this.leave) {
            const _replacement = this.replacement;
            const _should_remove = this.should_remove;
            this.replacement = null;
            this.should_remove = false;
            await this.leave.call(this.context, node, parent, prop, index);
            if (this.replacement) {
              node = this.replacement;
              this.replace(parent, prop, index, node);
            }
            if (this.should_remove) {
              this.remove(parent, prop, index);
            }
            const removed = this.should_remove;
            this.replacement = _replacement;
            this.should_remove = _should_remove;
            if (removed)
              return null;
          }
        }
        return node;
      }
    }
    function walk(ast, {enter, leave}) {
      const instance = new SyncWalker(enter, leave);
      return instance.visit(ast, null);
    }
    async function asyncWalk(ast, {enter, leave}) {
      const instance = new AsyncWalker(enter, leave);
      return await instance.visit(ast, null);
    }
    exports3.asyncWalk = asyncWalk;
    exports3.walk = walk;
    Object.defineProperty(exports3, "__esModule", {value: true});
  });
});

// node_modules/@vue/compiler-core/dist/compiler-core.cjs.prod.js
var require_compiler_core_cjs_prod = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var shared = require_shared();
  var sourceMap = require_source_map();
  var parser = require_lib();
  var estreeWalker = require_estree_walker();
  function defaultOnError(error) {
    throw error;
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = (messages || errorMessages)[code] + (additionalMessage || ``);
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
  }
  var errorMessages = {
    [0]: "Illegal comment.",
    [1]: "CDATA section is allowed only in XML context.",
    [2]: "Duplicate attribute.",
    [3]: "End tag cannot have attributes.",
    [4]: "Illegal '/' in tags.",
    [5]: "Unexpected EOF in tag.",
    [6]: "Unexpected EOF in CDATA section.",
    [7]: "Unexpected EOF in comment.",
    [8]: "Unexpected EOF in script.",
    [9]: "Unexpected EOF in tag.",
    [10]: "Incorrectly closed comment.",
    [11]: "Incorrectly opened comment.",
    [12]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13]: "Attribute value was expected.",
    [14]: "End tag name was expected.",
    [15]: "Whitespace was expected.",
    [16]: "Unexpected '<!--' in comment.",
    [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
    [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    [19]: "Attribute name cannot start with '='.",
    [21]: "'<?' is allowed only in XML context.",
    [22]: "Illegal '/' in tags.",
    [23]: "Invalid end tag.",
    [24]: "Element is missing end tag.",
    [25]: "Interpolation end sign was not found.",
    [26]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
    [27]: `v-if/v-else-if is missing expression.`,
    [28]: `v-if/else branches must use unique keys.`,
    [29]: `v-else/v-else-if has no adjacent v-if.`,
    [30]: `v-for is missing expression.`,
    [31]: `v-for has invalid expression.`,
    [32]: `<template v-for> key should be placed on the <template> tag.`,
    [33]: `v-bind is missing expression.`,
    [34]: `v-on is missing expression.`,
    [35]: `Unexpected custom directive on <slot> outlet.`,
    [36]: `Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
    [37]: `Duplicate slot names found. `,
    [38]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
    [39]: `v-slot can only be used on components or <template> tags.`,
    [40]: `v-model is missing expression.`,
    [41]: `v-model value must be a valid JavaScript member expression.`,
    [42]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [43]: `Error parsing JavaScript expression: `,
    [44]: `<KeepAlive> expects exactly one child component.`,
    [45]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [46]: `ES module mode is not supported in this build of compiler.`,
    [47]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [48]: `"scopeId" option is only supported in module mode.`
  };
  var FRAGMENT = Symbol(``);
  var TELEPORT = Symbol(``);
  var SUSPENSE = Symbol(``);
  var KEEP_ALIVE = Symbol(``);
  var BASE_TRANSITION = Symbol(``);
  var OPEN_BLOCK = Symbol(``);
  var CREATE_BLOCK = Symbol(``);
  var CREATE_VNODE = Symbol(``);
  var CREATE_COMMENT = Symbol(``);
  var CREATE_TEXT = Symbol(``);
  var CREATE_STATIC = Symbol(``);
  var RESOLVE_COMPONENT = Symbol(``);
  var RESOLVE_DYNAMIC_COMPONENT = Symbol(``);
  var RESOLVE_DIRECTIVE = Symbol(``);
  var WITH_DIRECTIVES = Symbol(``);
  var RENDER_LIST = Symbol(``);
  var RENDER_SLOT = Symbol(``);
  var CREATE_SLOTS = Symbol(``);
  var TO_DISPLAY_STRING = Symbol(``);
  var MERGE_PROPS = Symbol(``);
  var TO_HANDLERS = Symbol(``);
  var CAMELIZE = Symbol(``);
  var CAPITALIZE = Symbol(``);
  var TO_HANDLER_KEY = Symbol(``);
  var SET_BLOCK_TRACKING = Symbol(``);
  var PUSH_SCOPE_ID = Symbol(``);
  var POP_SCOPE_ID = Symbol(``);
  var WITH_SCOPE_ID = Symbol(``);
  var WITH_CTX = Symbol(``);
  var UNREF = Symbol(``);
  var IS_REF = Symbol(``);
  var helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_SCOPE_ID]: `withScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`
  };
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s) => {
      helperNameMap[s] = helpers[s];
    });
  }
  var locStub = {
    source: "",
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 1, offset: 0}
  };
  function createRoot(children, loc = locStub) {
    return {
      type: 0,
      children,
      helpers: [],
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: 0,
      temps: 0,
      codegenNode: void 0,
      loc
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, loc = locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(CREATE_BLOCK);
      } else {
        context.helper(CREATE_VNODE);
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      loc
    };
  }
  function createArrayExpression(elements, loc = locStub) {
    return {
      type: 17,
      loc,
      elements
    };
  }
  function createObjectExpression(properties, loc = locStub) {
    return {
      type: 15,
      loc,
      properties
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16,
      loc: locStub,
      key: shared.isString(key) ? createSimpleExpression(key, true) : key,
      value
    };
  }
  function createSimpleExpression(content, isStatic, loc = locStub, constType = 0) {
    return {
      type: 4,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3 : constType
    };
  }
  function createInterpolation(content, loc) {
    return {
      type: 5,
      loc,
      content: shared.isString(content) ? createSimpleExpression(content, false, loc) : content
    };
  }
  function createCompoundExpression(children, loc = locStub) {
    return {
      type: 8,
      loc,
      children
    };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
    return {
      type: 14,
      loc,
      callee,
      arguments: args
    };
  }
  function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
    return {
      type: 18,
      params,
      returns,
      newline,
      isSlot,
      loc
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
      type: 19,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub
    };
  }
  function createCacheExpression(index, value, isVNode = false) {
    return {
      type: 20,
      index,
      value,
      isVNode,
      loc: locStub
    };
  }
  function createBlockStatement(body) {
    return {
      type: 21,
      body,
      loc: locStub
    };
  }
  function createTemplateLiteral(elements) {
    return {
      type: 22,
      elements,
      loc: locStub
    };
  }
  function createIfStatement(test, consequent, alternate) {
    return {
      type: 23,
      test,
      consequent,
      alternate,
      loc: locStub
    };
  }
  function createAssignmentExpression(left, right) {
    return {
      type: 24,
      left,
      right,
      loc: locStub
    };
  }
  function createSequenceExpression(expressions) {
    return {
      type: 25,
      expressions,
      loc: locStub
    };
  }
  function createReturnStatement(returns) {
    return {
      type: 26,
      returns,
      loc: locStub
    };
  }
  var isStaticExp = (p) => p.type === 4 && p.isStatic;
  var isBuiltInType = (tag, expected) => tag === expected || tag === shared.hyphenate(expected);
  function isCoreComponent(tag) {
    if (isBuiltInType(tag, "Teleport")) {
      return TELEPORT;
    } else if (isBuiltInType(tag, "Suspense")) {
      return SUSPENSE;
    } else if (isBuiltInType(tag, "KeepAlive")) {
      return KEEP_ALIVE;
    } else if (isBuiltInType(tag, "BaseTransition")) {
      return BASE_TRANSITION;
    }
  }
  var nonIdentifierRE = /^\d|[^\$\w]/;
  var isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
  var memberExpRE = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/;
  var isMemberExpression = (path) => {
    if (!path)
      return false;
    return memberExpRE.test(path.trim());
  };
  function getInnerRange(loc, offset, length) {
    const source = loc.source.substr(offset, length);
    const newLoc = {
      source,
      start: advancePositionWithClone(loc.start, loc.source, offset),
      end: loc.end
    };
    if (length != null) {
      newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
  }
  function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation(shared.extend({}, pos), source, numberOfCharacters);
  }
  function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
      if (source.charCodeAt(i) === 10) {
        linesCount++;
        lastNewLinePos = i;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 7 && (allowEmpty || p.exp) && (shared.isString(name) ? p.name === name : name.test(p.name))) {
        return p;
      }
    }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 6) {
        if (dynamicOnly)
          continue;
        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === "bind" && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
        return p;
      }
    }
  }
  function isBindKey(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some((p) => p.type === 7 && p.name === "bind" && (!p.arg || p.arg.type !== 4 || !p.arg.isStatic));
  }
  function isText(node) {
    return node.type === 5 || node.type === 2;
  }
  function isVSlot(p) {
    return p.type === 7 && p.name === "slot";
  }
  function isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
  }
  function isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    const props = node.type === 13 ? node.props : node.arguments[2];
    if (props == null || shared.isString(props)) {
      propsWithInjection = createObjectExpression([prop]);
    } else if (props.type === 14) {
      const first = props.arguments[0];
      if (!shared.isString(first) && first.type === 15) {
        first.properties.unshift(prop);
      } else {
        if (props.callee === TO_HANDLERS) {
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
          ]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
      let alreadyExists = false;
      if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        alreadyExists = props.properties.some((p) => p.key.type === 4 && p.key.content === propKeyName);
      }
      if (!alreadyExists) {
        props.properties.unshift(prop);
      }
      propsWithInjection = props;
    } else {
      propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
        createObjectExpression([prop]),
        props
      ]);
    }
    if (node.type === 13) {
      node.props = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, "_")}`;
  }
  function hasScopeRef(node, ids) {
    if (!node || Object.keys(ids).length === 0) {
      return false;
    }
    switch (node.type) {
      case 1:
        for (let i = 0; i < node.props.length; i++) {
          const p = node.props[i];
          if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
            return true;
          }
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 11:
        if (hasScopeRef(node.source, ids)) {
          return true;
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 9:
        return node.branches.some((b) => hasScopeRef(b, ids));
      case 10:
        if (hasScopeRef(node.condition, ids)) {
          return true;
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 4:
        return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
      case 8:
        return node.children.some((c) => shared.isObject(c) && hasScopeRef(c, ids));
      case 5:
      case 12:
        return hasScopeRef(node.content, ids);
      case 2:
      case 3:
        return false;
      default:
        return false;
    }
  }
  var decodeRE = /&(gt|lt|amp|apos|quot);/g;
  var decodeMap = {
    gt: ">",
    lt: "<",
    amp: "&",
    apos: "'",
    quot: '"'
  };
  var defaultParserOptions = {
    delimiters: [`{{`, `}}`],
    getNamespace: () => 0,
    getTextMode: () => 0,
    isVoidTag: shared.NO,
    isPreTag: shared.NO,
    isCustomElement: shared.NO,
    decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
    onError: defaultOnError,
    comments: false
  };
  function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0, []), getSelection(context, start));
  }
  function createParserContext(content, rawOptions) {
    const options = shared.extend({}, defaultParserOptions);
    for (const key in rawOptions) {
      options[key] = rawOptions[key] || defaultParserOptions[key];
    }
    return {
      options,
      column: 1,
      line: 1,
      offset: 0,
      originalSource: content,
      source: content,
      inPre: false,
      inVPre: false
    };
  }
  function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns = parent ? parent.ns : 0;
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
      const s = context.source;
      let node = void 0;
      if (mode === 0 || mode === 1) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          node = parseInterpolation(context, mode);
        } else if (mode === 0 && s[0] === "<") {
          if (s.length === 1) {
            emitError(context, 5, 1);
          } else if (s[1] === "!") {
            if (startsWith(s, "<!--")) {
              node = parseComment(context);
            } else if (startsWith(s, "<!DOCTYPE")) {
              node = parseBogusComment(context);
            } else if (startsWith(s, "<![CDATA[")) {
              if (ns !== 0) {
                node = parseCDATA(context, ancestors);
              } else {
                emitError(context, 1);
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11);
              node = parseBogusComment(context);
            }
          } else if (s[1] === "/") {
            if (s.length === 2) {
              emitError(context, 5, 2);
            } else if (s[2] === ">") {
              emitError(context, 14, 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23);
              parseTag(context, 1, parent);
              continue;
            } else {
              emitError(context, 12, 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors);
          } else if (s[1] === "?") {
            emitError(context, 21, 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12, 1);
          }
        }
      }
      if (!node) {
        node = parseText(context, mode);
      }
      if (shared.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
          pushNode(nodes, node[i]);
        }
      } else {
        pushNode(nodes, node);
      }
    }
    let removedWhitespace = false;
    if (mode !== 2) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!context.inPre && node.type === 2) {
          if (!/[^\t\r\n\f ]/.test(node.content)) {
            const prev = nodes[i - 1];
            const next = nodes[i + 1];
            if (!prev || !next || prev.type === 3 || next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content)) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              node.content = " ";
            }
          } else {
            node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
          }
        }
        if (node.type === 3 && !context.options.comments) {
          removedWhitespace = true;
          nodes[i] = null;
        }
      }
      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        const first = nodes[0];
        if (first && first.type === 2) {
          first.content = first.content.replace(/^\r?\n/, "");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function pushNode(nodes, node) {
    if (node.type === 2) {
      const prev = last(nodes);
      if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }
    nodes.push(node);
  }
  function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3, ancestors);
    if (context.source.length === 0) {
      emitError(context, 6);
    } else {
      advanceBy(context, 3);
    }
    return nodes;
  }
  function parseComment(context) {
    const start = getCursor(context);
    let content;
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
      content = context.source.slice(4);
      advanceBy(context, context.source.length);
      emitError(context, 7);
    } else {
      if (match.index <= 3) {
        emitError(context, 0);
      }
      if (match[1]) {
        emitError(context, 10);
      }
      content = context.source.slice(4, match.index);
      const s = context.source.slice(0, match.index);
      let prevIndex = 1, nestedIndex = 0;
      while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
        advanceBy(context, nestedIndex - prevIndex + 1);
        if (nestedIndex + 4 < s.length) {
          emitError(context, 16);
        }
        prevIndex = nestedIndex + 1;
      }
      advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === "?" ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf(">");
    if (closeIndex === -1) {
      content = context.source.slice(contentStart);
      advanceBy(context, context.source.length);
    } else {
      content = context.source.slice(contentStart, closeIndex);
      advanceBy(context, closeIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseElement(context, ancestors) {
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0, parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
      return element;
    }
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    element.children = children;
    if (startsWithEndTagOpen(context.source, element.tag)) {
      parseTag(context, 1, parent);
    } else {
      emitError(context, 24, 0, element.loc.start);
      if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
        const first = children[0];
        if (first && startsWith(first.loc.source, "<!--")) {
          emitError(context, 8);
        }
      }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  var isSpecialTemplateDirective = /* @__PURE__ */ shared.makeMap(`if,else,else-if,for,slot`);
  function parseTag(context, type, parent) {
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    const cursor = getCursor(context);
    const currentSource = context.source;
    let props = parseAttributes(context, type);
    if (context.options.isPreTag(tag)) {
      context.inPre = true;
    }
    if (!context.inVPre && props.some((p) => p.type === 7 && p.name === "pre")) {
      context.inVPre = true;
      shared.extend(context, cursor);
      context.source = currentSource;
      props = parseAttributes(context, type).filter((p) => p.name !== "v-pre");
    }
    let isSelfClosing = false;
    if (context.source.length === 0) {
      emitError(context, 9);
    } else {
      isSelfClosing = startsWith(context.source, "/>");
      if (type === 1 && isSelfClosing) {
        emitError(context, 4);
      }
      advanceBy(context, isSelfClosing ? 2 : 1);
    }
    let tagType = 0;
    const options = context.options;
    if (!context.inVPre && !options.isCustomElement(tag)) {
      const hasVIs = props.some((p) => p.type === 7 && p.name === "is");
      if (options.isNativeTag && !hasVIs) {
        if (!options.isNativeTag(tag))
          tagType = 1;
      } else if (hasVIs || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || /^[A-Z]/.test(tag) || tag === "component") {
        tagType = 1;
      }
      if (tag === "slot") {
        tagType = 2;
      } else if (tag === "template" && props.some((p) => {
        return p.type === 7 && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3;
      }
    }
    return {
      type: 1,
      ns,
      tag,
      tagType,
      props,
      isSelfClosing,
      children: [],
      loc: getSelection(context, start),
      codegenNode: void 0
    };
  }
  function parseAttributes(context, type) {
    const props = [];
    const attributeNames = new Set();
    while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
      if (startsWith(context.source, "/")) {
        emitError(context, 22);
        advanceBy(context, 1);
        advanceSpaces(context);
        continue;
      }
      if (type === 1) {
        emitError(context, 3);
      }
      const attr = parseAttribute(context, attributeNames);
      if (type === 0) {
        props.push(attr);
      }
      if (/^[^\t\r\n\f />]/.test(context.source)) {
        emitError(context, 15);
      }
      advanceSpaces(context);
    }
    return props;
  }
  function parseAttribute(context, nameSet) {
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
      emitError(context, 2);
    }
    nameSet.add(name);
    if (name[0] === "=") {
      emitError(context, 19);
    }
    {
      const pattern = /["'<]/g;
      let m;
      while (m = pattern.exec(name)) {
        emitError(context, 17, m.index);
      }
    }
    advanceBy(context, name.length);
    let value = void 0;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
      advanceSpaces(context);
      advanceBy(context, 1);
      advanceSpaces(context);
      value = parseAttributeValue(context);
      if (!value) {
        emitError(context, 13);
      }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
      const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
      const dirName = match2[1] || (startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
      let arg;
      if (match2[2]) {
        const isSlot = dirName === "slot";
        const startOffset = name.indexOf(match2[2]);
        const loc2 = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match2[2].length + (isSlot && match2[3] || "").length));
        let content = match2[2];
        let isStatic = true;
        if (content.startsWith("[")) {
          isStatic = false;
          if (!content.endsWith("]")) {
            emitError(context, 26);
          }
          content = content.substr(1, content.length - 2);
        } else if (isSlot) {
          content += match2[3] || "";
        }
        arg = {
          type: 4,
          content,
          isStatic,
          constType: isStatic ? 3 : 0,
          loc: loc2
        };
      }
      if (value && value.isQuoted) {
        const valueLoc = value.loc;
        valueLoc.start.offset++;
        valueLoc.start.column++;
        valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
        valueLoc.source = valueLoc.source.slice(1, -1);
      }
      return {
        type: 7,
        name: dirName,
        exp: value && {
          type: 4,
          content: value.content,
          isStatic: false,
          constType: 0,
          loc: value.loc
        },
        arg,
        modifiers: match2[3] ? match2[3].substr(1).split(".") : [],
        loc
      };
    }
    return {
      type: 6,
      name,
      value: value && {
        type: 2,
        content: value.content,
        loc: value.loc
      },
      loc
    };
  }
  function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
      advanceBy(context, 1);
      const endIndex = context.source.indexOf(quote);
      if (endIndex === -1) {
        content = parseTextData(context, context.source.length, 4);
      } else {
        content = parseTextData(context, endIndex, 4);
        advanceBy(context, 1);
      }
    } else {
      const match = /^[^\t\r\n\f >]+/.exec(context.source);
      if (!match) {
        return void 0;
      }
      const unexpectedChars = /["'<=`]/g;
      let m;
      while (m = unexpectedChars.exec(match[0])) {
        emitError(context, 18, m.index);
      }
      content = parseTextData(context, match[0].length, 4);
    }
    return {content, isQuoted, loc: getSelection(context, start)};
  }
  function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
      emitError(context, 25);
      return void 0;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
      advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
      type: 5,
      content: {
        type: 4,
        isStatic: false,
        constType: 0,
        content,
        loc: getSelection(context, innerStart, innerEnd)
      },
      loc: getSelection(context, start)
    };
  }
  function parseText(context, mode) {
    const endTokens = ["<", context.options.delimiters[0]];
    if (mode === 3) {
      endTokens.push("]]>");
    }
    let endIndex = context.source.length;
    for (let i = 0; i < endTokens.length; i++) {
      const index = context.source.indexOf(endTokens[i], 1);
      if (index !== -1 && endIndex > index) {
        endIndex = index;
      }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
      type: 2,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2 || mode === 3 || rawText.indexOf("&") === -1) {
      return rawText;
    } else {
      return context.options.decodeEntities(rawText, mode === 4);
    }
  }
  function getCursor(context) {
    const {column, line, offset} = context;
    return {column, line, offset};
  }
  function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
      start,
      end,
      source: context.originalSource.slice(start.offset, end.offset)
    };
  }
  function last(xs) {
    return xs[xs.length - 1];
  }
  function startsWith(source, searchString) {
    return source.startsWith(searchString);
  }
  function advanceBy(context, numberOfCharacters) {
    const {source} = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
  }
  function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
      advanceBy(context, match[0].length);
    }
  }
  function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
  }
  function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
      loc.offset += offset;
      loc.column += offset;
    }
    context.options.onError(createCompilerError(code, {
      start: loc,
      end: loc,
      source: ""
    }));
  }
  function isEnd(context, mode, ancestors) {
    const s = context.source;
    switch (mode) {
      case 0:
        if (startsWith(s, "</")) {
          for (let i = ancestors.length - 1; i >= 0; --i) {
            if (startsWithEndTagOpen(s, ancestors[i].tag)) {
              return true;
            }
          }
        }
        break;
      case 1:
      case 2: {
        const parent = last(ancestors);
        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }
        break;
      }
      case 3:
        if (startsWith(s, "]]>")) {
          return true;
        }
        break;
    }
    return !s;
  }
  function startsWithEndTagOpen(source, tag) {
    return startsWith(source, "</") && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
  }
  function hoistStatic(root, context) {
    walk(root, context, isSingleElementRoot(root, root.children[0]));
  }
  function isSingleElementRoot(root, child) {
    const {children} = root;
    return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
  }
  function walk(node, context, doNotHoistNode = false) {
    let hasHoistedNode = false;
    let canStringify = true;
    const {children} = node;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 1 && child.tagType === 0) {
        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
        if (constantType > 0) {
          if (constantType < 3) {
            canStringify = false;
          }
          if (constantType >= 2) {
            child.codegenNode.patchFlag = -1 + ``;
            child.codegenNode = context.hoist(child.codegenNode);
            hasHoistedNode = true;
            continue;
          }
        } else {
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13) {
            const flag = getPatchFlag(codegenNode);
            if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
              const props = getNodeProps(child);
              if (props) {
                codegenNode.props = context.hoist(props);
              }
            }
          }
        }
      } else if (child.type === 12) {
        const contentType = getConstantType(child.content, context);
        if (contentType > 0) {
          if (contentType < 3) {
            canStringify = false;
          }
          if (contentType >= 2) {
            child.codegenNode = context.hoist(child.codegenNode);
            hasHoistedNode = true;
          }
        }
      }
      if (child.type === 1) {
        walk(child, context);
      } else if (child.type === 11) {
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9) {
        for (let i2 = 0; i2 < child.branches.length; i2++) {
          walk(child.branches[i2], context, child.branches[i2].children.length === 1);
        }
      }
    }
    if (canStringify && hasHoistedNode && context.transformHoist) {
      context.transformHoist(children, context, node);
    }
  }
  function getConstantType(node, context) {
    const {constantCache} = context;
    switch (node.type) {
      case 1:
        if (node.tagType !== 0) {
          return 0;
        }
        const cached = constantCache.get(node);
        if (cached !== void 0) {
          return cached;
        }
        const codegenNode = node.codegenNode;
        if (codegenNode.type !== 13) {
          return 0;
        }
        const flag = getPatchFlag(codegenNode);
        if (!flag) {
          let returnType2 = 3;
          const generatedPropsType = getGeneratedPropsConstantType(node, context);
          if (generatedPropsType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (generatedPropsType < returnType2) {
            returnType2 = generatedPropsType;
          }
          for (let i = 0; i < node.children.length; i++) {
            const childType = getConstantType(node.children[i], context);
            if (childType === 0) {
              constantCache.set(node, 0);
              return 0;
            }
            if (childType < returnType2) {
              returnType2 = childType;
            }
          }
          if (returnType2 > 1) {
            for (let i = 0; i < node.props.length; i++) {
              const p = node.props[i];
              if (p.type === 7 && p.name === "bind" && p.exp) {
                const expType = getConstantType(p.exp, context);
                if (expType === 0) {
                  constantCache.set(node, 0);
                  return 0;
                }
                if (expType < returnType2) {
                  returnType2 = expType;
                }
              }
            }
          }
          if (codegenNode.isBlock) {
            codegenNode.isBlock = false;
            context.helper(CREATE_VNODE);
          }
          constantCache.set(node, returnType2);
          return returnType2;
        } else {
          constantCache.set(node, 0);
          return 0;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
        return 0;
      case 5:
      case 12:
        return getConstantType(node.content, context);
      case 4:
        return node.constType;
      case 8:
        let returnType = 3;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (shared.isString(child) || shared.isSymbol(child)) {
            continue;
          }
          const childType = getConstantType(child, context);
          if (childType === 0) {
            return 0;
          } else if (childType < returnType) {
            returnType = childType;
          }
        }
        return returnType;
      default:
        return 0;
    }
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = getNodeProps(node);
    if (props && props.type === 15) {
      const {properties} = props;
      for (let i = 0; i < properties.length; i++) {
        const {key, value} = properties[i];
        const keyType = getConstantType(key, context);
        if (keyType === 0) {
          return keyType;
        }
        if (keyType < returnType) {
          returnType = keyType;
        }
        if (value.type !== 4) {
          return 0;
        }
        const valueType = getConstantType(value, context);
        if (valueType === 0) {
          return valueType;
        }
        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) {
      return codegenNode.props;
    }
  }
  function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : void 0;
  }
  function createTransformContext(root, {filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = shared.NOOP, isCustomElement = shared.NOOP, expressionPlugins = [], scopeId = null, ssr = false, ssrCssVars = ``, bindingMetadata = shared.EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError}) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
      selfName: nameMatch && shared.capitalize(shared.camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic: hoistStatic2,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      ssr,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      root,
      helpers: new Set(),
      components: new Set(),
      directives: new Set(),
      hoists: [],
      imports: [],
      constantCache: new Map(),
      temps: 0,
      cached: 0,
      identifiers: Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0
      },
      parent: null,
      currentNode: root,
      childIndex: 0,
      helper(name) {
        context.helpers.add(name);
        return name;
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        context.parent.children[context.childIndex] = context.currentNode = node;
      },
      removeNode(node) {
        const list = context.parent.children;
        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
        if (!node || node === context.currentNode) {
          context.currentNode = null;
          context.onNodeRemoved();
        } else {
          if (context.childIndex > removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: () => {
      },
      addIdentifiers(exp) {
        {
          if (shared.isString(exp)) {
            addId(exp);
          } else if (exp.identifiers) {
            exp.identifiers.forEach(addId);
          } else if (exp.type === 4) {
            addId(exp.content);
          }
        }
      },
      removeIdentifiers(exp) {
        {
          if (shared.isString(exp)) {
            removeId(exp);
          } else if (exp.identifiers) {
            exp.identifiers.forEach(removeId);
          } else if (exp.type === 4) {
            removeId(exp.content);
          }
        }
      },
      hoist(exp) {
        context.hoists.push(exp);
        const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
        identifier.hoisted = exp;
        return identifier;
      },
      cache(exp, isVNode = false) {
        return createCacheExpression(++context.cached, exp, isVNode);
      }
    };
    function addId(id) {
      const {identifiers} = context;
      if (identifiers[id] === void 0) {
        identifiers[id] = 0;
      }
      identifiers[id]++;
    }
    function removeId(id) {
      context.identifiers[id]--;
    }
    return context;
  }
  function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      hoistStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    root.helpers = [...context.helpers];
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
  }
  function createRootCodegen(root, context) {
    const {helper} = context;
    const {children} = root;
    if (children.length === 1) {
      const child = children[0];
      if (isSingleElementRoot(root, child) && child.codegenNode) {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          codegenNode.isBlock = true;
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        }
        root.codegenNode = codegenNode;
      } else {
        root.codegenNode = child;
      }
    } else if (children.length > 1) {
      let patchFlag = 64;
      shared.PatchFlagNames[64];
      root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, patchFlag + ``, void 0, void 0, true);
    } else
      ;
  }
  function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
      i--;
    };
    for (; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (shared.isString(child))
        continue;
      context.parent = parent;
      context.childIndex = i;
      context.onNodeRemoved = nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode = node;
    const {nodeTransforms} = context;
    const exitFns = [];
    for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
      const onExit = nodeTransforms[i2](node, context);
      if (onExit) {
        if (shared.isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        return;
      } else {
        node = context.currentNode;
      }
    }
    switch (node.type) {
      case 3:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      case 9:
        for (let i2 = 0; i2 < node.branches.length; i2++) {
          traverseNode(node.branches[i2], context);
        }
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        traverseChildren(node, context);
        break;
    }
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
      exitFns[i]();
    }
  }
  function createStructuralDirectiveTransform(name, fn) {
    const matches = shared.isString(name) ? (n) => n === name : (n) => name.test(n);
    return (node, context) => {
      if (node.type === 1) {
        const {props} = node;
        if (node.tagType === 3 && props.some(isVSlot)) {
          return;
        }
        const exitFns = [];
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (prop.type === 7 && matches(prop.name)) {
            props.splice(i, 1);
            i--;
            const onExit = fn(node, prop, context);
            if (onExit)
              exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }
  var PURE_ANNOTATION = `/*#__PURE__*/`;
  function createCodegenContext(ast, {mode = "function", prefixIdentifiers = mode === "module", sourceMap: sourceMap$1 = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssr = false}) {
    const context = {
      mode,
      prefixIdentifiers,
      sourceMap: sourceMap$1,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssr,
      source: ast.loc.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: void 0,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, node) {
        context.code += code;
        if (context.map) {
          if (node) {
            let name;
            if (node.type === 4 && !node.isStatic) {
              const content = node.content.replace(/^_ctx\./, "");
              if (content !== node.content && isSimpleIdentifier(content)) {
                name = content;
              }
            }
            addMapping(node.loc.start, name);
          }
          advancePositionWithMutation(context, code);
          if (node && node.loc !== locStub) {
            addMapping(node.loc.end);
          }
        }
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine = false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      }
    };
    function newline(n) {
      context.push("\n" + `  `.repeat(n));
    }
    function addMapping(loc, name) {
      context.map.addMapping({
        name,
        source: context.filename,
        original: {
          line: loc.line,
          column: loc.column - 1
        },
        generated: {
          line: context.line,
          column: context.column - 1
        }
      });
    }
    if (sourceMap$1) {
      context.map = new sourceMap.SourceMapGenerator();
      context.map.setSourceContent(filename, context.source);
    }
    return context;
  }
  function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated)
      options.onContextCreated(context);
    const {mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr} = context;
    const hasHelpers = ast.helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const genScopeId = scopeId != null && mode === "module";
    const isSetupInlined = !!options.inline;
    const preambleContext = isSetupInlined ? createCodegenContext(ast, options) : context;
    if (mode === "module") {
      genModulePreamble(ast, preambleContext, genScopeId, isSetupInlined);
    } else {
      genFunctionPreamble(ast, preambleContext);
    }
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
    if (options.bindingMetadata && !options.inline) {
      args.push("$props", "$setup", "$data", "$options");
    }
    const signature = options.isTS ? args.map((arg) => `${arg}: any`).join(",") : args.join(", ");
    if (genScopeId) {
      if (isSetupInlined) {
        push(`${PURE_ANNOTATION}_withId(`);
      } else {
        push(`const ${functionName} = ${PURE_ANNOTATION}_withId(`);
      }
    }
    if (isSetupInlined || genScopeId) {
      push(`(${signature}) => {`);
    } else {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      if (hasHelpers) {
        push(`const { ${ast.helpers.map((s) => `${helperNameMap[s]}: _${helperNameMap[s]}`).join(", ")} } = _Vue`);
        push(`
`);
        newline();
      }
    }
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps > 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps > 0) {
        newline();
      }
    }
    if (ast.temps > 0) {
      push(`let `);
      for (let i = 0; i < ast.temps; i++) {
        push(`${i > 0 ? `, ` : ``}_temp${i}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`
`);
      newline();
    }
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    if (genScopeId) {
      push(`)`);
    }
    return {
      ast,
      code: context.code,
      preamble: isSetupInlined ? preambleContext.code : ``,
      map: context.map ? context.map.toJSON() : void 0
    };
  }
  function genFunctionPreamble(ast, context) {
    const {ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName} = context;
    const VueBinding = ssr ? `require(${JSON.stringify(runtimeModuleName)})` : runtimeGlobalName;
    const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
    if (ast.helpers.length > 0) {
      if (prefixIdentifiers) {
        push(`const { ${ast.helpers.map(aliasHelper).join(", ")} } = ${VueBinding}
`);
      } else {
        push(`const _Vue = ${VueBinding}
`);
        if (ast.hoists.length) {
          const staticHelpers = [
            CREATE_VNODE,
            CREATE_COMMENT,
            CREATE_TEXT,
            CREATE_STATIC
          ].filter((helper) => ast.helpers.includes(helper)).map(aliasHelper).join(", ");
          push(`const { ${staticHelpers} } = _Vue
`);
        }
      }
    }
    if (ast.ssrHelpers && ast.ssrHelpers.length) {
      push(`const { ${ast.ssrHelpers.map(aliasHelper).join(", ")} } = require("@vue/server-renderer")
`);
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genModulePreamble(ast, context, genScopeId, inline) {
    const {push, helper, newline, scopeId, optimizeImports, runtimeModuleName} = context;
    if (genScopeId) {
      ast.helpers.push(WITH_SCOPE_ID);
      if (ast.hoists.length) {
        ast.helpers.push(PUSH_SCOPE_ID, POP_SCOPE_ID);
      }
    }
    if (ast.helpers.length) {
      if (optimizeImports) {
        push(`import { ${ast.helpers.map((s) => helperNameMap[s]).join(", ")} } from ${JSON.stringify(runtimeModuleName)}
`);
        push(`
// Binding optimization for webpack code-split
const ${ast.helpers.map((s) => `_${helperNameMap[s]} = ${helperNameMap[s]}`).join(", ")}
`);
      } else {
        push(`import { ${ast.helpers.map((s) => `${helperNameMap[s]} as _${helperNameMap[s]}`).join(", ")} } from ${JSON.stringify(runtimeModuleName)}
`);
      }
    }
    if (ast.ssrHelpers && ast.ssrHelpers.length) {
      push(`import { ${ast.ssrHelpers.map((s) => `${helperNameMap[s]} as _${helperNameMap[s]}`).join(", ")} } from "@vue/server-renderer"
`);
    }
    if (ast.imports.length) {
      genImports(ast.imports, context);
      newline();
    }
    if (genScopeId) {
      push(`const _withId = ${PURE_ANNOTATION}${helper(WITH_SCOPE_ID)}("${scopeId}")`);
      newline();
    }
    genHoists(ast.hoists, context);
    newline();
    if (!inline) {
      push(`export `);
    }
  }
  function genAssets(assets, type, {helper, push, newline}) {
    const resolver = helper(type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for (let i = 0; i < assets.length; i++) {
      const id = assets[i];
      push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)})`);
      if (i < assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure = true;
    const {push, newline, helper, scopeId, mode} = context;
    const genScopeId = scopeId != null && mode !== "function";
    newline();
    if (genScopeId) {
      push(`${helper(PUSH_SCOPE_ID)}("${scopeId}")`);
      newline();
    }
    hoists.forEach((exp, i) => {
      if (exp) {
        push(`const _hoisted_${i + 1} = `);
        genNode(exp, context);
        newline();
      }
    });
    if (genScopeId) {
      push(`${helper(POP_SCOPE_ID)}()`);
      newline();
    }
    context.pure = false;
  }
  function genImports(importsOptions, context) {
    if (!importsOptions.length) {
      return;
    }
    importsOptions.forEach((imports) => {
      context.push(`import `);
      genNode(imports.exp, context);
      context.push(` from '${imports.path}'`);
      context.newline();
    });
  }
  function isText$1(n) {
    return shared.isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n) => shared.isArray(n) || !isText$1(n));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
    const {push, newline} = context;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (shared.isString(node)) {
        push(node);
      } else if (shared.isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i < nodes.length - 1) {
        if (multilines) {
          comma && push(",");
          newline();
        } else {
          comma && push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (shared.isString(node)) {
      context.push(node);
      return;
    }
    if (shared.isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1:
      case 9:
      case 11:
        genNode(node.codegenNode, context);
        break;
      case 2:
        genText(node, context);
        break;
      case 4:
        genExpression(node, context);
        break;
      case 5:
        genInterpolation(node, context);
        break;
      case 12:
        genNode(node.codegenNode, context);
        break;
      case 8:
        genCompoundExpression(node, context);
        break;
      case 3:
        break;
      case 13:
        genVNodeCall(node, context);
        break;
      case 14:
        genCallExpression(node, context);
        break;
      case 15:
        genObjectExpression(node, context);
        break;
      case 17:
        genArrayExpression(node, context);
        break;
      case 18:
        genFunctionExpression(node, context);
        break;
      case 19:
        genConditionalExpression(node, context);
        break;
      case 20:
        genCacheExpression(node, context);
        break;
      case 21:
        genNodeList(node.body, context, true, false);
        break;
      case 22:
        genTemplateLiteral(node, context);
        break;
      case 23:
        genIfStatement(node, context);
        break;
      case 24:
        genAssignmentExpression(node, context);
        break;
      case 25:
        genSequenceExpression(node, context);
        break;
      case 26:
        genReturnStatement(node, context);
        break;
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
  }
  function genExpression(node, context) {
    const {content, isStatic} = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
  }
  function genInterpolation(node, context) {
    const {push, helper, pure} = context;
    if (pure)
      push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (shared.isString(child)) {
        context.push(child);
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const {push} = context;
    if (node.type === 8) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
      push(text, node);
    } else {
      push(`[${node.content}]`, node);
    }
  }
  function genVNodeCall(node, context) {
    const {push, helper, pure} = context;
    const {tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking} = node;
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
      if (args[i] != null)
        break;
    }
    return args.slice(0, i + 1).map((arg) => arg || `null`);
  }
  function genCallExpression(node, context) {
    const {push, helper, pure} = context;
    const callee = shared.isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const {push, indent, deindent, newline} = context;
    const {properties} = node;
    if (!properties.length) {
      push(`{}`, node);
      return;
    }
    const multilines = properties.length > 1 || properties.some((p) => p.value.type !== 4);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
      const {key, value} = properties[i];
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      genNode(value, context);
      if (i < properties.length - 1) {
        push(`,`);
        newline();
      }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const {push, indent, deindent, scopeId, mode} = context;
    const {params, returns, body, newline, isSlot} = node;
    const genScopeId = isSlot && scopeId != null && mode !== "function";
    if (genScopeId) {
      push(`_withId(`);
    } else if (isSlot) {
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if (shared.isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (shared.isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (genScopeId || isSlot) {
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const {test, consequent, alternate, newline: needNewline} = node;
    const {push, indent, deindent, newline} = context;
    if (test.type === 4) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline && deindent(true);
  }
  function genCacheExpression(node, context) {
    const {push, helper, indent, deindent, newline} = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
      newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
      push(`,`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
  }
  function genTemplateLiteral(node, context) {
    const {push, indent, deindent} = context;
    push("`");
    const l = node.elements.length;
    const multilines = l > 3;
    for (let i = 0; i < l; i++) {
      const e = node.elements[i];
      if (shared.isString(e)) {
        push(e.replace(/(`|\$|\\)/g, "\\$1"));
      } else {
        push("${");
        if (multilines)
          indent();
        genNode(e, context);
        if (multilines)
          deindent();
        push("}");
      }
    }
    push("`");
  }
  function genIfStatement(node, context) {
    const {push, indent, deindent} = context;
    const {test, consequent, alternate} = node;
    push(`if (`);
    genNode(test, context);
    push(`) {`);
    indent();
    genNode(consequent, context);
    deindent();
    push(`}`);
    if (alternate) {
      push(` else `);
      if (alternate.type === 23) {
        genIfStatement(alternate, context);
      } else {
        push(`{`);
        indent();
        genNode(alternate, context);
        deindent();
        push(`}`);
      }
    }
  }
  function genAssignmentExpression(node, context) {
    genNode(node.left, context);
    context.push(` = `);
    genNode(node.right, context);
  }
  function genSequenceExpression(node, context) {
    context.push(`(`);
    genNodeList(node.expressions, context);
    context.push(`)`);
  }
  function genReturnStatement({returns}, context) {
    context.push(`return `);
    if (shared.isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  }
  var isLiteralWhitelisted = /* @__PURE__ */ shared.makeMap("true,false,null,this");
  var transformExpression = (node, context) => {
    if (node.type === 5) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1) {
      for (let i = 0; i < node.props.length; i++) {
        const dir = node.props[i];
        if (dir.type === 7 && dir.name !== "for") {
          const exp = dir.exp;
          const arg = dir.arg;
          if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
            dir.exp = processExpression(exp, context, dir.name === "slot");
          }
          if (arg && arg.type === 4 && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
  };
  function processExpression(node, context, asParams = false, asRawStatements = false) {
    if (!context.prefixIdentifiers || !node.content.trim()) {
      return node;
    }
    const {inline, bindingMetadata} = context;
    const rewriteIdentifier = (raw, parent, id) => {
      const type = shared.hasOwn(bindingMetadata, raw) && bindingMetadata[raw];
      if (inline) {
        const isAssignmentLVal = parent && parent.type === "AssignmentExpression" && parent.left === id;
        const isUpdateArg = parent && parent.type === "UpdateExpression" && parent.argument === id;
        const isDestructureAssignment = parent && isInDestructureAssignment(parent, parentStack);
        if (type === "setup-const") {
          return raw;
        } else if (type === "setup-ref") {
          return `${raw}.value`;
        } else if (type === "setup-maybe-ref") {
          return isAssignmentLVal || isUpdateArg || isDestructureAssignment ? `${raw}.value` : `${context.helperString(UNREF)}(${raw})`;
        } else if (type === "setup-let") {
          if (isAssignmentLVal) {
            const rVal = parent.right;
            const rExp = rawExp.slice(rVal.start - 1, rVal.end - 1);
            const rExpString = stringifyExpression(processExpression(createSimpleExpression(rExp, false), context));
            return `${context.helperString(IS_REF)}(${raw})${context.isTS ? ` //@ts-ignore
` : ``} ? ${raw}.value = ${rExpString} : ${raw}`;
          } else if (isUpdateArg) {
            id.start = parent.start;
            id.end = parent.end;
            const {prefix: isPrefix, operator} = parent;
            const prefix = isPrefix ? operator : ``;
            const postfix = isPrefix ? `` : operator;
            return `${context.helperString(IS_REF)}(${raw})${context.isTS ? ` //@ts-ignore
` : ``} ? ${prefix}${raw}.value${postfix} : ${prefix}${raw}${postfix}`;
          } else if (isDestructureAssignment) {
            return raw;
          } else {
            return `${context.helperString(UNREF)}(${raw})`;
          }
        } else if (type === "props") {
          return `__props.${raw}`;
        }
      } else {
        if (type && type.startsWith("setup")) {
          return `$setup.${raw}`;
        } else if (type) {
          return `$${type}.${raw}`;
        }
      }
      return `_ctx.${raw}`;
    };
    const rawExp = node.content;
    const bailConstant = rawExp.indexOf(`(`) > -1 || rawExp.indexOf(".") > 0;
    if (isSimpleIdentifier(rawExp)) {
      const isScopeVarReference = context.identifiers[rawExp];
      const isAllowedGlobal = shared.isGloballyWhitelisted(rawExp);
      const isLiteral = isLiteralWhitelisted(rawExp);
      if (!asParams && !isScopeVarReference && !isAllowedGlobal && !isLiteral) {
        if (bindingMetadata[node.content] === "setup-const") {
          node.constType = 1;
        }
        node.content = rewriteIdentifier(rawExp);
      } else if (!isScopeVarReference) {
        if (isLiteral) {
          node.constType = 3;
        } else {
          node.constType = 2;
        }
      }
      return node;
    }
    let ast;
    const source = asRawStatements ? ` ${rawExp} ` : `(${rawExp})${asParams ? `=>{}` : ``}`;
    try {
      ast = parser.parse(source, {
        plugins: [...context.expressionPlugins, ...shared.babelParserDefaultPlugins]
      }).program;
    } catch (e) {
      context.onError(createCompilerError(43, node.loc, void 0, e.message));
      return node;
    }
    const ids = [];
    const knownIds = Object.create(context.identifiers);
    const isDuplicate = (node2) => ids.some((id) => id.start === node2.start);
    const parentStack = [];
    estreeWalker.walk(ast, {
      enter(node2, parent) {
        parent && parentStack.push(parent);
        if (node2.type === "Identifier") {
          if (!isDuplicate(node2)) {
            const needPrefix = shouldPrefix(node2, parent, parentStack);
            if (!knownIds[node2.name] && needPrefix) {
              if (isStaticProperty(parent) && parent.shorthand) {
                node2.prefix = `${node2.name}: `;
              }
              node2.name = rewriteIdentifier(node2.name, parent, node2);
              ids.push(node2);
            } else if (!isStaticPropertyKey(node2, parent)) {
              if (!(needPrefix && knownIds[node2.name]) && !bailConstant) {
                node2.isConstant = true;
              }
              ids.push(node2);
            }
          }
        } else if (isFunction(node2)) {
          node2.params.forEach((p) => estreeWalker.walk(p, {
            enter(child, parent2) {
              if (child.type === "Identifier" && !isStaticPropertyKey(child, parent2) && !(parent2 && parent2.type === "AssignmentPattern" && parent2.right === child)) {
                const {name} = child;
                if (node2.scopeIds && node2.scopeIds.has(name)) {
                  return;
                }
                if (name in knownIds) {
                  knownIds[name]++;
                } else {
                  knownIds[name] = 1;
                }
                (node2.scopeIds || (node2.scopeIds = new Set())).add(name);
              }
            }
          }));
        }
      },
      leave(node2, parent) {
        parent && parentStack.pop();
        if (node2 !== ast.body[0].expression && node2.scopeIds) {
          node2.scopeIds.forEach((id) => {
            knownIds[id]--;
            if (knownIds[id] === 0) {
              delete knownIds[id];
            }
          });
        }
      }
    });
    const children = [];
    ids.sort((a, b) => a.start - b.start);
    ids.forEach((id, i) => {
      const start = id.start - 1;
      const end = id.end - 1;
      const last2 = ids[i - 1];
      const leadingText = rawExp.slice(last2 ? last2.end - 1 : 0, start);
      if (leadingText.length || id.prefix) {
        children.push(leadingText + (id.prefix || ``));
      }
      const source2 = rawExp.slice(start, end);
      children.push(createSimpleExpression(id.name, false, {
        source: source2,
        start: advancePositionWithClone(node.loc.start, source2, start),
        end: advancePositionWithClone(node.loc.start, source2, end)
      }, id.isConstant ? 3 : 0));
      if (i === ids.length - 1 && end < rawExp.length) {
        children.push(rawExp.slice(end));
      }
    });
    let ret;
    if (children.length) {
      ret = createCompoundExpression(children, node.loc);
    } else {
      ret = node;
      ret.constType = bailConstant ? 0 : 3;
    }
    ret.identifiers = Object.keys(knownIds);
    return ret;
  }
  var isFunction = (node) => {
    return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
  };
  var isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
  var isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
  function shouldPrefix(id, parent, parentStack) {
    if ((parent.type === "VariableDeclarator" || parent.type === "ClassDeclaration") && parent.id === id) {
      return false;
    }
    if (isFunction(parent)) {
      if (parent.id === id) {
        return false;
      }
      if (parent.params.includes(id)) {
        return false;
      }
    }
    if (isStaticPropertyKey(id, parent)) {
      return false;
    }
    if (parent.type === "ArrayPattern" && !isInDestructureAssignment(parent, parentStack)) {
      return false;
    }
    if ((parent.type === "MemberExpression" || parent.type === "OptionalMemberExpression") && parent.property === id && !parent.computed) {
      return false;
    }
    if (id.name === "arguments") {
      return false;
    }
    if (shared.isGloballyWhitelisted(id.name)) {
      return false;
    }
    if (id.name === "require") {
      return false;
    }
    return true;
  }
  function isInDestructureAssignment(parent, parentStack) {
    if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
      let i = parentStack.length;
      while (i--) {
        const p = parentStack[i];
        if (p.type === "AssignmentExpression") {
          return true;
        } else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) {
          break;
        }
      }
    }
    return false;
  }
  function stringifyExpression(exp) {
    if (shared.isString(exp)) {
      return exp;
    } else if (exp.type === 4) {
      return exp.content;
    } else {
      return exp.children.map(stringifyExpression).join("");
    }
  }
  var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
        }
      };
    });
  });
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
      const loc = dir.exp ? dir.exp.loc : node.loc;
      context.onError(createCompilerError(27, dir.loc));
      dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (context.prefixIdentifiers && dir.exp) {
      dir.exp = processExpression(dir.exp, context);
    }
    if (dir.name === "if") {
      const branch = createIfBranch(node, dir);
      const ifNode = {
        type: 9,
        loc: node.loc,
        branches: [branch]
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      const siblings = context.parent.children;
      let i = siblings.indexOf(node);
      while (i-- >= -1) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling && sibling.type === 9) {
          context.removeNode();
          const branch = createIfBranch(node, dir);
          {
            const key = branch.userKey;
            if (key) {
              sibling.branches.forEach(({userKey}) => {
                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(28, branch.userKey.loc));
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false);
          traverseNode(branch, context);
          if (onExit)
            onExit();
          context.currentNode = null;
        } else {
          context.onError(createCompilerError(29, node.loc));
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    return {
      type: 10,
      loc: node.loc,
      condition: dir.name === "else" ? void 0 : dir.exp,
      children: node.tagType === 3 && !findDir(node, "for") ? node.children : [node],
      userKey: findProp(node, `key`)
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), createCallExpression(context.helper(CREATE_COMMENT), [
        '""',
        "true"
      ]));
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const {helper} = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
    const {children} = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
      if (children.length === 1 && firstChild.type === 11) {
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, 64 + ``, void 0, void 0, true, false, branch.loc);
      }
    } else {
      const vnodeCall = firstChild.codegenNode;
      if (vnodeCall.type === 13) {
        vnodeCall.isBlock = true;
        helper(OPEN_BLOCK);
        helper(CREATE_BLOCK);
      }
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    }
  }
  function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
      return false;
    }
    if (a.type === 6) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
      const exp = a.exp;
      const branchExp = b.exp;
      if (exp.type !== branchExp.type) {
        return false;
      }
      if (exp.type !== 4 || (exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content)) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type === 19) {
        if (node.alternate.type === 19) {
          node = node.alternate;
        } else {
          return node;
        }
      } else if (node.type === 20) {
        node = node.value;
      }
    }
  }
  var transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
    const {helper} = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const keyProp = findProp(node, `key`);
      const keyProperty = keyProp ? createObjectProperty(`key`, keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
      if (context.prefixIdentifiers && keyProperty) {
        keyProperty.value = processExpression(keyProperty.value, context);
      }
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + ``, void 0, void 0, true, !isStableFragment, node.loc);
      return () => {
        let childBlock;
        const isTemplate = isTemplateNode(node);
        const {children} = forNode;
        if (isTemplate) {
          node.children.some((c) => {
            if (c.type === 1) {
              const key = findProp(c, "key");
              if (key) {
                context.onError(createCompilerError(32, key.loc));
                return true;
              }
            }
          });
        }
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : void 0, node.children, 64 + ``, void 0, void 0, true);
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
          } else {
            helper(CREATE_VNODE);
          }
        }
        renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
      };
    });
  });
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(createCompilerError(30, dir.loc));
      return;
    }
    const parseResult = parseForExpression(dir.exp, context);
    if (!parseResult) {
      context.onError(createCompilerError(31, dir.loc));
      return;
    }
    const {addIdentifiers, removeIdentifiers, scopes} = context;
    const {source, value, key, index} = parseResult;
    const forNode = {
      type: 11,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    if (context.prefixIdentifiers) {
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
    }
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
      scopes.vFor--;
      if (context.prefixIdentifiers) {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      }
      if (onExit)
        onExit();
    };
  }
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch)
      return;
    const [, LHS, RHS] = inMatch;
    const result = {
      source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
      value: void 0,
      key: void 0,
      index: void 0
    };
    if (context.prefixIdentifiers) {
      result.source = processExpression(result.source, context);
    }
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent = valueContent.replace(forIteratorRE, "").trim();
      const keyContent = iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
        result.key = createAliasExpression(loc, keyContent, keyOffset);
        if (context.prefixIdentifiers) {
          result.key = processExpression(result.key, context, true);
        }
      }
      if (iteratorMatch[2]) {
        const indexContent = iteratorMatch[2].trim();
        if (indexContent) {
          result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
          if (context.prefixIdentifiers) {
            result.index = processExpression(result.index, context, true);
          }
        }
      }
    }
    if (valueContent) {
      result.value = createAliasExpression(loc, valueContent, trimmedOffset);
      if (context.prefixIdentifiers) {
        result.value = processExpression(result.value, context, true);
      }
    }
    return result;
  }
  function createAliasExpression(range, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
  }
  function createForLoopParams({value, key, index}) {
    const params = [];
    if (value) {
      params.push(value);
    }
    if (key) {
      if (!value) {
        params.push(createSimpleExpression(`_`, false));
      }
      params.push(key);
    }
    if (index) {
      if (!key) {
        if (!value) {
          params.push(createSimpleExpression(`_`, false));
        }
        params.push(createSimpleExpression(`__`, false));
      }
      params.push(index);
    }
    return params;
  }
  var defaultFallback = createSimpleExpression(`undefined`, false);
  var trackSlotScopes = (node, context) => {
    if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
      const vSlot = findDir(node, "slot");
      if (vSlot) {
        const slotProps = vSlot.exp;
        if (context.prefixIdentifiers) {
          slotProps && context.addIdentifiers(slotProps);
        }
        context.scopes.vSlot++;
        return () => {
          if (context.prefixIdentifiers) {
            slotProps && context.removeIdentifiers(slotProps);
          }
          context.scopes.vSlot--;
        };
      }
    }
  };
  var trackVForSlotScopes = (node, context) => {
    let vFor;
    if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
      const result = vFor.parseResult = parseForExpression(vFor.exp, context);
      if (result) {
        const {value, key, index} = result;
        const {addIdentifiers, removeIdentifiers} = context;
        value && addIdentifiers(value);
        key && addIdentifiers(key);
        index && addIdentifiers(index);
        return () => {
          value && removeIdentifiers(value);
          key && removeIdentifiers(key);
          index && removeIdentifiers(index);
        };
      }
    }
  };
  var buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const {children, loc} = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    const buildDefaultSlotProperty = (props, children2) => createObjectProperty(`default`, buildSlotFn(props, children2, loc));
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    if (!context.ssr && context.prefixIdentifiers) {
      hasDynamicSlots = hasScopeRef(node, context.identifiers);
    }
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
      const {arg, exp} = onComponentSlot;
      if (arg && !isStaticExp(arg)) {
        hasDynamicSlots = true;
      }
      slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = new Set();
    for (let i = 0; i < children.length; i++) {
      const slotElement = children[i];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
        if (slotElement.type !== 3) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        context.onError(createCompilerError(36, slotDir.loc));
        break;
      }
      hasTemplateSlots = true;
      const {children: slotChildren, loc: slotLoc} = slotElement;
      const {arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc} = slotDir;
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName = slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots = true;
      }
      const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
      let vIf;
      let vElse;
      let vFor;
      if (vIf = findDir(slotElement, "if")) {
        hasDynamicSlots = true;
        dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
      } else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
        let j = i;
        let prev;
        while (j--) {
          prev = children[j];
          if (prev.type !== 3) {
            break;
          }
        }
        if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
          children.splice(i, 1);
          i--;
          let conditional = dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type === 19) {
            conditional = conditional.alternate;
          }
          conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
        } else {
          context.onError(createCompilerError(29, vElse.loc));
        }
      } else if (vFor = findDir(slotElement, "for")) {
        hasDynamicSlots = true;
        const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
        if (parseResult) {
          dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true)
          ]));
        } else {
          context.onError(createCompilerError(31, vFor.loc));
        }
      } else {
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(createCompilerError(37, dirLoc));
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName === "default") {
            hasNamedDefaultSlot = true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      if (!hasTemplateSlots) {
        slotsProperties.push(buildDefaultSlotProperty(void 0, children));
      } else if (implicitDefaultChildren.length) {
        if (hasNamedDefaultSlot) {
          context.onError(createCompilerError(38, implicitDefaultChildren[0].loc));
        } else {
          slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
        }
      }
    }
    const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, createSimpleExpression(slotFlag + ``, false))), loc);
    if (dynamicSlots.length) {
      slots = createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
      ]);
    }
    return {
      slots,
      hasDynamicSlots
    };
  }
  function buildDynamicSlot(name, fn) {
    return createObjectExpression([
      createObjectProperty(`name`, name),
      createObjectProperty(`fn`, fn)
    ]);
  }
  function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 1) {
        if (child.tagType === 2 || child.tagType === 0 && hasForwardedSlots(child.children)) {
          return true;
        }
      }
    }
    return false;
  }
  var directiveImportMap = new WeakMap();
  var transformElement = (node, context) => {
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    return function postTransformElement() {
      const {tag, props} = node;
      const isComponent = node.tagType === 1;
      const vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
      const isDynamicComponent = shared.isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
      let vnodeProps;
      let vnodeChildren;
      let vnodePatchFlag;
      let patchFlag = 0;
      let vnodeDynamicProps;
      let dynamicPropNames;
      let vnodeDirectives;
      let shouldUseBlock = isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && (tag === "svg" || tag === "foreignObject" || findProp(node, "key", true));
      if (props.length > 0) {
        const propsBuildResult = buildProps(node, context);
        vnodeProps = propsBuildResult.props;
        patchFlag = propsBuildResult.patchFlag;
        dynamicPropNames = propsBuildResult.dynamicPropNames;
        const directives = propsBuildResult.directives;
        vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : void 0;
      }
      if (node.children.length > 0) {
        if (vnodeTag === KEEP_ALIVE) {
          shouldUseBlock = true;
          patchFlag |= 1024;
        }
        const shouldBuildAsSlots = isComponent && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE;
        if (shouldBuildAsSlots) {
          const {slots, hasDynamicSlots} = buildSlots(node, context);
          vnodeChildren = slots;
          if (hasDynamicSlots) {
            patchFlag |= 1024;
          }
        } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
          const child = node.children[0];
          const type = child.type;
          const hasDynamicTextChild = type === 5 || type === 8;
          if (hasDynamicTextChild && getConstantType(child, context) === 0) {
            patchFlag |= 1;
          }
          if (hasDynamicTextChild || type === 2) {
            vnodeChildren = child;
          } else {
            vnodeChildren = node.children;
          }
        } else {
          vnodeChildren = node.children;
        }
      }
      if (patchFlag !== 0) {
        {
          vnodePatchFlag = String(patchFlag);
        }
        if (dynamicPropNames && dynamicPropNames.length) {
          vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
        }
      }
      node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, node.loc);
    };
  };
  function resolveComponentType(node, context, ssr = false) {
    const {tag} = node;
    const isProp = node.tag === "component" ? findProp(node, "is") : findDir(node, "is");
    if (isProp) {
      const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    }
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
      if (!ssr)
        context.helper(builtIn);
      return builtIn;
    }
    {
      const fromSetup = resolveSetupReference(tag, context);
      if (fromSetup) {
        return fromSetup;
      }
    }
    if (context.selfName) {
      if (shared.capitalize(shared.camelize(tag)) === context.selfName) {
        context.helper(RESOLVE_COMPONENT);
        context.components.add(`_self`);
        return toValidAssetId(`_self`, `component`);
      }
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function resolveSetupReference(name, context) {
    const bindings = context.bindingMetadata;
    if (!bindings) {
      return;
    }
    const camelName = shared.camelize(name);
    const PascalName = shared.capitalize(camelName);
    const checkType = (type) => {
      if (bindings[name] === type) {
        return name;
      }
      if (bindings[camelName] === type) {
        return camelName;
      }
      if (bindings[PascalName] === type) {
        return PascalName;
      }
    };
    const fromConst = checkType("setup-const");
    if (fromConst) {
      return context.inline ? fromConst : `$setup[${JSON.stringify(fromConst)}]`;
    }
    const fromMaybeRef = checkType("setup-let") || checkType("setup-ref") || checkType("setup-maybe-ref");
    if (fromMaybeRef) {
      return context.inline ? `${context.helperString(UNREF)}(${fromMaybeRef})` : `$setup[${JSON.stringify(fromMaybeRef)}]`;
    }
  }
  function buildProps(node, context, props = node.props, ssr = false) {
    const {tag, loc: elementLoc} = node;
    const isComponent = node.tagType === 1;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const analyzePatchFlag = ({key, value}) => {
      if (isStaticExp(key)) {
        const name = key.content;
        const isEventHandler = shared.isOn(name);
        if (!isComponent && isEventHandler && name.toLowerCase() !== "onclick" && name !== "onUpdate:modelValue" && !shared.isReservedProp(name)) {
          hasHydrationEventBinding = true;
        }
        if (isEventHandler && shared.isReservedProp(name)) {
          hasVnodeHook = true;
        }
        if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
          return;
        }
        if (name === "ref") {
          hasRef = true;
        } else if (name === "class" && !isComponent) {
          hasClassBinding = true;
        } else if (name === "style" && !isComponent) {
          hasStyleBinding = true;
        } else if (name !== "key" && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys = true;
      }
    };
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      if (prop.type === 6) {
        const {loc, name, value} = prop;
        let isStatic = true;
        if (name === "ref") {
          hasRef = true;
          if (context.inline) {
            isStatic = false;
          }
        }
        if (name === "is" && tag === "component") {
          continue;
        }
        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
      } else {
        const {name, arg, exp, loc} = prop;
        const isBind = name === "bind";
        const isOn = name === "on";
        if (name === "slot") {
          if (!isComponent) {
            context.onError(createCompilerError(39, loc));
          }
          continue;
        }
        if (name === "once") {
          continue;
        }
        if (name === "is" || isBind && tag === "component" && isBindKey(arg, "is")) {
          continue;
        }
        if (isOn && ssr) {
          continue;
        }
        if (!arg && (isBind || isOn)) {
          hasDynamicKeys = true;
          if (exp) {
            if (properties.length) {
              mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
              properties = [];
            }
            if (isBind) {
              mergeArgs.push(exp);
            } else {
              mergeArgs.push({
                type: 14,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: [exp]
              });
            }
          } else {
            context.onError(createCompilerError(isBind ? 33 : 34, loc));
          }
          continue;
        }
        const directiveTransform = context.directiveTransforms[name];
        if (directiveTransform) {
          const {props: props2, needRuntime} = directiveTransform(prop, node, context);
          !ssr && props2.forEach(analyzePatchFlag);
          properties.push(...props2);
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (shared.isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else {
          runtimeDirectives.push(prop);
        }
      }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
      if (properties.length) {
        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
      }
      if (mergeArgs.length > 1) {
        propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
      } else {
        propsExpression = mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    if (hasDynamicKeys) {
      patchFlag |= 16;
    } else {
      if (hasClassBinding) {
        patchFlag |= 2;
      }
      if (hasStyleBinding) {
        patchFlag |= 4;
      }
      if (dynamicPropNames.length) {
        patchFlag |= 8;
      }
      if (hasHydrationEventBinding) {
        patchFlag |= 32;
      }
    }
    if ((patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
      patchFlag |= 512;
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames
    };
  }
  function dedupeProperties(properties) {
    const knownProps = new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i];
      if (prop.key.type === 8 || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name = prop.key.content;
      const existing = knownProps.get(name);
      if (existing) {
        if (name === "style" || name === "class" || name.startsWith("on")) {
          mergeAsArray(existing, prop);
        }
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
      dirArgs.push(context.helperString(runtime));
    } else {
      const fromSetup = resolveSetupReference(dir.name, context);
      if (fromSetup) {
        dirArgs.push(fromSetup);
      } else {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const {loc} = dir;
    if (dir.exp)
      dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression = createSimpleExpression(`true`, false, loc);
      dirArgs.push(createObjectExpression(dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
      propsNamesString += JSON.stringify(props[i]);
      if (i < l - 1)
        propsNamesString += ", ";
    }
    return propsNamesString + `]`;
  }
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var transformSlotOutlet = (node, context) => {
    if (isSlotOutlet(node)) {
      const {children, loc} = node;
      const {slotName, slotProps} = processSlotOutlet(node, context);
      const slotArgs = [
        context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
        slotName
      ];
      if (slotProps) {
        slotArgs.push(slotProps);
      }
      if (children.length) {
        if (!slotProps) {
          slotArgs.push(`{}`);
        }
        slotArgs.push(createFunctionExpression([], children, false, false, loc));
      }
      node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
    }
  };
  function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 6) {
        if (p.value) {
          if (p.name === "name") {
            slotName = JSON.stringify(p.value.content);
          } else {
            p.name = camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
        if (p.name === "bind" && isBindKey(p.arg, "name")) {
          if (p.exp)
            slotName = p.exp;
        } else {
          if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
            p.arg.content = camelize(p.arg.content);
          }
          nonNameProps.push(p);
        }
      }
    }
    if (nonNameProps.length > 0) {
      const {props, directives} = buildProps(node, context, nonNameProps);
      slotProps = props;
      if (directives.length) {
        context.onError(createCompilerError(35, directives[0].loc));
      }
    }
    return {
      slotName,
      slotProps
    };
  }
  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;
  var transformOn = (dir, node, context, augmentor) => {
    const {loc, modifiers, arg} = dir;
    if (!dir.exp && !modifiers.length) {
      context.onError(createCompilerError(34, loc));
    }
    let eventName;
    if (arg.type === 4) {
      if (arg.isStatic) {
        const rawName = arg.content;
        eventName = createSimpleExpression(shared.toHandlerKey(shared.camelize(rawName)), true, arg.loc);
      } else {
        eventName = createCompoundExpression([
          `${context.helperString(TO_HANDLER_KEY)}(`,
          arg,
          `)`
        ]);
      }
    } else {
      eventName = arg;
      eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
      eventName.children.push(`)`);
    }
    let exp = dir.exp;
    if (exp && !exp.content.trim()) {
      exp = void 0;
    }
    let shouldCache = context.cacheHandlers && !exp;
    if (exp) {
      const isMemberExp = isMemberExpression(exp.content);
      const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
      const hasMultipleStatements = exp.content.includes(`;`);
      if (context.prefixIdentifiers) {
        isInlineStatement && context.addIdentifiers(`$event`);
        exp = dir.exp = processExpression(exp, context, false, hasMultipleStatements);
        isInlineStatement && context.removeIdentifiers(`$event`);
        shouldCache = context.cacheHandlers && !(exp.type === 4 && exp.constType > 0) && !(isMemberExp && node.tagType === 1) && !hasScopeRef(exp, context.identifiers);
        if (shouldCache && isMemberExp) {
          if (exp.type === 4) {
            exp.content = `${exp.content} && ${exp.content}(...args)`;
          } else {
            exp.children = [...exp.children, ` && `, ...exp.children, `(...args)`];
          }
        }
      }
      if (isInlineStatement || shouldCache && isMemberExp) {
        exp = createCompoundExpression([
          `${isInlineStatement ? context.isTS ? `($event: any)` : `$event` : `${context.isTS ? `
//@ts-ignore
` : ``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
          exp,
          hasMultipleStatements ? `}` : `)`
        ]);
      }
    }
    let ret = {
      props: [
        createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
      ]
    };
    if (augmentor) {
      ret = augmentor(ret);
    }
    if (shouldCache) {
      ret.props[0].value = context.cache(ret.props[0].value);
    }
    return ret;
  };
  var transformBind = (dir, node, context) => {
    const {exp, modifiers, loc} = dir;
    const arg = dir.arg;
    if (arg.type !== 4) {
      arg.children.unshift(`(`);
      arg.children.push(`) || ""`);
    } else if (!arg.isStatic) {
      arg.content = `${arg.content} || ""`;
    }
    if (modifiers.includes("camel")) {
      if (arg.type === 4) {
        if (arg.isStatic) {
          arg.content = shared.camelize(arg.content);
        } else {
          arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
        }
      } else {
        arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
        arg.children.push(`)`);
      }
    }
    if (!exp || exp.type === 4 && !exp.content.trim()) {
      context.onError(createCompilerError(33, loc));
      return {
        props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
      };
    }
    return {
      props: [createObjectProperty(arg, exp)]
    };
  };
  var transformText = (node, context) => {
    if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
      return () => {
        const children = node.children;
        let currentContainer = void 0;
        let hasText = false;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText(child)) {
            hasText = true;
            for (let j = i + 1; j < children.length; j++) {
              const next = children[j];
              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8,
                    loc: child.loc,
                    children: [child]
                  };
                }
                currentContainer.children.push(` + `, next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = void 0;
                break;
              }
            }
          }
        }
        if (!hasText || children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0)) {
          return;
        }
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText(child) || child.type === 8) {
            const callArgs = [];
            if (child.type !== 2 || child.content !== " ") {
              callArgs.push(child);
            }
            if (!context.ssr && getConstantType(child, context) === 0) {
              callArgs.push(1 + ``);
            }
            children[i] = {
              type: 12,
              content: child,
              loc: child.loc,
              codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
            };
          }
        }
      };
    }
  };
  var seen = new WeakSet();
  var transformOnce = (node, context) => {
    if (node.type === 1 && findDir(node, "once", true)) {
      if (seen.has(node)) {
        return;
      }
      seen.add(node);
      context.helper(SET_BLOCK_TRACKING);
      return () => {
        const cur = context.currentNode;
        if (cur.codegenNode) {
          cur.codegenNode = context.cache(cur.codegenNode, true);
        }
      };
    }
  };
  var transformModel = (dir, node, context) => {
    const {exp, arg} = dir;
    if (!exp) {
      context.onError(createCompilerError(40, dir.loc));
      return createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4 ? exp.content : rawExp;
    const bindingType = context.bindingMetadata[rawExp];
    const maybeRef = context.inline && bindingType && bindingType !== "setup-const";
    if (!isMemberExpression(expString) && !maybeRef) {
      context.onError(createCompilerError(41, exp.loc));
      return createTransformProps();
    }
    if (context.prefixIdentifiers && isSimpleIdentifier(expString) && context.identifiers[expString]) {
      context.onError(createCompilerError(42, exp.loc));
      return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression("modelValue", true);
    const eventName = arg ? isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    if (maybeRef) {
      if (bindingType === "setup-ref") {
        assignmentExp = createCompoundExpression([
          `${eventArg} => (`,
          createSimpleExpression(rawExp, false, exp.loc),
          `.value = $event)`
        ]);
      } else {
        const altAssignment = bindingType === "setup-let" ? `${rawExp} = $event` : `null`;
        assignmentExp = createCompoundExpression([
          `${eventArg} => (${context.helperString(IS_REF)}(${rawExp}) ? `,
          createSimpleExpression(rawExp, false, exp.loc),
          `.value = $event : ${altAssignment})`
        ]);
      }
    } else {
      assignmentExp = createCompoundExpression([
        `${eventArg} => (`,
        exp,
        ` = $event)`
      ]);
    }
    const props = [
      createObjectProperty(propName, dir.exp),
      createObjectProperty(eventName, assignmentExp)
    ];
    if (context.prefixIdentifiers && context.cacheHandlers && !hasScopeRef(exp, context.identifiers)) {
      props[1].value = context.cache(props[1].value);
    }
    if (dir.modifiers.length && node.tagType === 1) {
      const modifiers = dir.modifiers.map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
      const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
      props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
    }
    return createTransformProps(props);
  };
  function createTransformProps(props = []) {
    return {props};
  }
  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [
        transformOnce,
        transformIf,
        transformFor,
        ...prefixIdentifiers ? [
          trackVForSlotScopes,
          transformExpression
        ] : [],
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel
      }
    ];
  }
  function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    const prefixIdentifiers = options.prefixIdentifiers === true || isModuleMode;
    if (!prefixIdentifiers && options.cacheHandlers) {
      onError(createCompilerError(47));
    }
    if (options.scopeId && !isModuleMode) {
      onError(createCompilerError(48));
    }
    const ast = shared.isString(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset(prefixIdentifiers);
    transform(ast, shared.extend({}, options, {
      prefixIdentifiers,
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: shared.extend({}, directiveTransforms, options.directiveTransforms || {})
    }));
    return generate(ast, shared.extend({}, options, {
      prefixIdentifiers
    }));
  }
  var noopDirectiveTransform = () => ({props: []});
  exports2.generateCodeFrame = shared.generateCodeFrame;
  exports2.BASE_TRANSITION = BASE_TRANSITION;
  exports2.CAMELIZE = CAMELIZE;
  exports2.CAPITALIZE = CAPITALIZE;
  exports2.CREATE_BLOCK = CREATE_BLOCK;
  exports2.CREATE_COMMENT = CREATE_COMMENT;
  exports2.CREATE_SLOTS = CREATE_SLOTS;
  exports2.CREATE_STATIC = CREATE_STATIC;
  exports2.CREATE_TEXT = CREATE_TEXT;
  exports2.CREATE_VNODE = CREATE_VNODE;
  exports2.FRAGMENT = FRAGMENT;
  exports2.IS_REF = IS_REF;
  exports2.KEEP_ALIVE = KEEP_ALIVE;
  exports2.MERGE_PROPS = MERGE_PROPS;
  exports2.OPEN_BLOCK = OPEN_BLOCK;
  exports2.POP_SCOPE_ID = POP_SCOPE_ID;
  exports2.PUSH_SCOPE_ID = PUSH_SCOPE_ID;
  exports2.RENDER_LIST = RENDER_LIST;
  exports2.RENDER_SLOT = RENDER_SLOT;
  exports2.RESOLVE_COMPONENT = RESOLVE_COMPONENT;
  exports2.RESOLVE_DIRECTIVE = RESOLVE_DIRECTIVE;
  exports2.RESOLVE_DYNAMIC_COMPONENT = RESOLVE_DYNAMIC_COMPONENT;
  exports2.SET_BLOCK_TRACKING = SET_BLOCK_TRACKING;
  exports2.SUSPENSE = SUSPENSE;
  exports2.TELEPORT = TELEPORT;
  exports2.TO_DISPLAY_STRING = TO_DISPLAY_STRING;
  exports2.TO_HANDLERS = TO_HANDLERS;
  exports2.TO_HANDLER_KEY = TO_HANDLER_KEY;
  exports2.UNREF = UNREF;
  exports2.WITH_CTX = WITH_CTX;
  exports2.WITH_DIRECTIVES = WITH_DIRECTIVES;
  exports2.WITH_SCOPE_ID = WITH_SCOPE_ID;
  exports2.advancePositionWithClone = advancePositionWithClone;
  exports2.advancePositionWithMutation = advancePositionWithMutation;
  exports2.assert = assert;
  exports2.baseCompile = baseCompile;
  exports2.baseParse = baseParse;
  exports2.buildProps = buildProps;
  exports2.buildSlots = buildSlots;
  exports2.createArrayExpression = createArrayExpression;
  exports2.createAssignmentExpression = createAssignmentExpression;
  exports2.createBlockStatement = createBlockStatement;
  exports2.createCacheExpression = createCacheExpression;
  exports2.createCallExpression = createCallExpression;
  exports2.createCompilerError = createCompilerError;
  exports2.createCompoundExpression = createCompoundExpression;
  exports2.createConditionalExpression = createConditionalExpression;
  exports2.createForLoopParams = createForLoopParams;
  exports2.createFunctionExpression = createFunctionExpression;
  exports2.createIfStatement = createIfStatement;
  exports2.createInterpolation = createInterpolation;
  exports2.createObjectExpression = createObjectExpression;
  exports2.createObjectProperty = createObjectProperty;
  exports2.createReturnStatement = createReturnStatement;
  exports2.createRoot = createRoot;
  exports2.createSequenceExpression = createSequenceExpression;
  exports2.createSimpleExpression = createSimpleExpression;
  exports2.createStructuralDirectiveTransform = createStructuralDirectiveTransform;
  exports2.createTemplateLiteral = createTemplateLiteral;
  exports2.createTransformContext = createTransformContext;
  exports2.createVNodeCall = createVNodeCall;
  exports2.findDir = findDir;
  exports2.findProp = findProp;
  exports2.generate = generate;
  exports2.getBaseTransformPreset = getBaseTransformPreset;
  exports2.getInnerRange = getInnerRange;
  exports2.hasDynamicKeyVBind = hasDynamicKeyVBind;
  exports2.hasScopeRef = hasScopeRef;
  exports2.helperNameMap = helperNameMap;
  exports2.injectProp = injectProp;
  exports2.isBindKey = isBindKey;
  exports2.isBuiltInType = isBuiltInType;
  exports2.isCoreComponent = isCoreComponent;
  exports2.isMemberExpression = isMemberExpression;
  exports2.isSimpleIdentifier = isSimpleIdentifier;
  exports2.isSlotOutlet = isSlotOutlet;
  exports2.isStaticExp = isStaticExp;
  exports2.isTemplateNode = isTemplateNode;
  exports2.isText = isText;
  exports2.isVSlot = isVSlot;
  exports2.locStub = locStub;
  exports2.noopDirectiveTransform = noopDirectiveTransform;
  exports2.processExpression = processExpression;
  exports2.processFor = processFor;
  exports2.processIf = processIf;
  exports2.processSlotOutlet = processSlotOutlet;
  exports2.registerRuntimeHelpers = registerRuntimeHelpers;
  exports2.resolveComponentType = resolveComponentType;
  exports2.toValidAssetId = toValidAssetId;
  exports2.trackSlotScopes = trackSlotScopes;
  exports2.trackVForSlotScopes = trackVForSlotScopes;
  exports2.transform = transform;
  exports2.transformBind = transformBind;
  exports2.transformElement = transformElement;
  exports2.transformExpression = transformExpression;
  exports2.transformModel = transformModel;
  exports2.transformOn = transformOn;
  exports2.traverseNode = traverseNode;
});

// node_modules/@vue/compiler-core/dist/compiler-core.cjs.js
var require_compiler_core_cjs = __commonJS((exports2) => {
  "use strict";
  Object.defineProperty(exports2, "__esModule", {value: true});
  var shared = require_shared();
  var sourceMap = require_source_map();
  var parser = require_lib();
  var estreeWalker = require_estree_walker();
  function defaultOnError(error) {
    throw error;
  }
  function createCompilerError(code, loc, messages, additionalMessage) {
    const msg = (messages || errorMessages)[code] + (additionalMessage || ``);
    const error = new SyntaxError(String(msg));
    error.code = code;
    error.loc = loc;
    return error;
  }
  var errorMessages = {
    [0]: "Illegal comment.",
    [1]: "CDATA section is allowed only in XML context.",
    [2]: "Duplicate attribute.",
    [3]: "End tag cannot have attributes.",
    [4]: "Illegal '/' in tags.",
    [5]: "Unexpected EOF in tag.",
    [6]: "Unexpected EOF in CDATA section.",
    [7]: "Unexpected EOF in comment.",
    [8]: "Unexpected EOF in script.",
    [9]: "Unexpected EOF in tag.",
    [10]: "Incorrectly closed comment.",
    [11]: "Incorrectly opened comment.",
    [12]: "Illegal tag name. Use '&lt;' to print '<'.",
    [13]: "Attribute value was expected.",
    [14]: "End tag name was expected.",
    [15]: "Whitespace was expected.",
    [16]: "Unexpected '<!--' in comment.",
    [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
    [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
    [19]: "Attribute name cannot start with '='.",
    [21]: "'<?' is allowed only in XML context.",
    [22]: "Illegal '/' in tags.",
    [23]: "Invalid end tag.",
    [24]: "Element is missing end tag.",
    [25]: "Interpolation end sign was not found.",
    [26]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
    [27]: `v-if/v-else-if is missing expression.`,
    [28]: `v-if/else branches must use unique keys.`,
    [29]: `v-else/v-else-if has no adjacent v-if.`,
    [30]: `v-for is missing expression.`,
    [31]: `v-for has invalid expression.`,
    [32]: `<template v-for> key should be placed on the <template> tag.`,
    [33]: `v-bind is missing expression.`,
    [34]: `v-on is missing expression.`,
    [35]: `Unexpected custom directive on <slot> outlet.`,
    [36]: `Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
    [37]: `Duplicate slot names found. `,
    [38]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
    [39]: `v-slot can only be used on components or <template> tags.`,
    [40]: `v-model is missing expression.`,
    [41]: `v-model value must be a valid JavaScript member expression.`,
    [42]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
    [43]: `Error parsing JavaScript expression: `,
    [44]: `<KeepAlive> expects exactly one child component.`,
    [45]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
    [46]: `ES module mode is not supported in this build of compiler.`,
    [47]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
    [48]: `"scopeId" option is only supported in module mode.`
  };
  var FRAGMENT = Symbol(`Fragment`);
  var TELEPORT = Symbol(`Teleport`);
  var SUSPENSE = Symbol(`Suspense`);
  var KEEP_ALIVE = Symbol(`KeepAlive`);
  var BASE_TRANSITION = Symbol(`BaseTransition`);
  var OPEN_BLOCK = Symbol(`openBlock`);
  var CREATE_BLOCK = Symbol(`createBlock`);
  var CREATE_VNODE = Symbol(`createVNode`);
  var CREATE_COMMENT = Symbol(`createCommentVNode`);
  var CREATE_TEXT = Symbol(`createTextVNode`);
  var CREATE_STATIC = Symbol(`createStaticVNode`);
  var RESOLVE_COMPONENT = Symbol(`resolveComponent`);
  var RESOLVE_DYNAMIC_COMPONENT = Symbol(`resolveDynamicComponent`);
  var RESOLVE_DIRECTIVE = Symbol(`resolveDirective`);
  var WITH_DIRECTIVES = Symbol(`withDirectives`);
  var RENDER_LIST = Symbol(`renderList`);
  var RENDER_SLOT = Symbol(`renderSlot`);
  var CREATE_SLOTS = Symbol(`createSlots`);
  var TO_DISPLAY_STRING = Symbol(`toDisplayString`);
  var MERGE_PROPS = Symbol(`mergeProps`);
  var TO_HANDLERS = Symbol(`toHandlers`);
  var CAMELIZE = Symbol(`camelize`);
  var CAPITALIZE = Symbol(`capitalize`);
  var TO_HANDLER_KEY = Symbol(`toHandlerKey`);
  var SET_BLOCK_TRACKING = Symbol(`setBlockTracking`);
  var PUSH_SCOPE_ID = Symbol(`pushScopeId`);
  var POP_SCOPE_ID = Symbol(`popScopeId`);
  var WITH_SCOPE_ID = Symbol(`withScopeId`);
  var WITH_CTX = Symbol(`withCtx`);
  var UNREF = Symbol(`unref`);
  var IS_REF = Symbol(`isRef`);
  var helperNameMap = {
    [FRAGMENT]: `Fragment`,
    [TELEPORT]: `Teleport`,
    [SUSPENSE]: `Suspense`,
    [KEEP_ALIVE]: `KeepAlive`,
    [BASE_TRANSITION]: `BaseTransition`,
    [OPEN_BLOCK]: `openBlock`,
    [CREATE_BLOCK]: `createBlock`,
    [CREATE_VNODE]: `createVNode`,
    [CREATE_COMMENT]: `createCommentVNode`,
    [CREATE_TEXT]: `createTextVNode`,
    [CREATE_STATIC]: `createStaticVNode`,
    [RESOLVE_COMPONENT]: `resolveComponent`,
    [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
    [RESOLVE_DIRECTIVE]: `resolveDirective`,
    [WITH_DIRECTIVES]: `withDirectives`,
    [RENDER_LIST]: `renderList`,
    [RENDER_SLOT]: `renderSlot`,
    [CREATE_SLOTS]: `createSlots`,
    [TO_DISPLAY_STRING]: `toDisplayString`,
    [MERGE_PROPS]: `mergeProps`,
    [TO_HANDLERS]: `toHandlers`,
    [CAMELIZE]: `camelize`,
    [CAPITALIZE]: `capitalize`,
    [TO_HANDLER_KEY]: `toHandlerKey`,
    [SET_BLOCK_TRACKING]: `setBlockTracking`,
    [PUSH_SCOPE_ID]: `pushScopeId`,
    [POP_SCOPE_ID]: `popScopeId`,
    [WITH_SCOPE_ID]: `withScopeId`,
    [WITH_CTX]: `withCtx`,
    [UNREF]: `unref`,
    [IS_REF]: `isRef`
  };
  function registerRuntimeHelpers(helpers) {
    Object.getOwnPropertySymbols(helpers).forEach((s) => {
      helperNameMap[s] = helpers[s];
    });
  }
  var locStub = {
    source: "",
    start: {line: 1, column: 1, offset: 0},
    end: {line: 1, column: 1, offset: 0}
  };
  function createRoot(children, loc = locStub) {
    return {
      type: 0,
      children,
      helpers: [],
      components: [],
      directives: [],
      hoists: [],
      imports: [],
      cached: 0,
      temps: 0,
      codegenNode: void 0,
      loc
    };
  }
  function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, loc = locStub) {
    if (context) {
      if (isBlock) {
        context.helper(OPEN_BLOCK);
        context.helper(CREATE_BLOCK);
      } else {
        context.helper(CREATE_VNODE);
      }
      if (directives) {
        context.helper(WITH_DIRECTIVES);
      }
    }
    return {
      type: 13,
      tag,
      props,
      children,
      patchFlag,
      dynamicProps,
      directives,
      isBlock,
      disableTracking,
      loc
    };
  }
  function createArrayExpression(elements, loc = locStub) {
    return {
      type: 17,
      loc,
      elements
    };
  }
  function createObjectExpression(properties, loc = locStub) {
    return {
      type: 15,
      loc,
      properties
    };
  }
  function createObjectProperty(key, value) {
    return {
      type: 16,
      loc: locStub,
      key: shared.isString(key) ? createSimpleExpression(key, true) : key,
      value
    };
  }
  function createSimpleExpression(content, isStatic, loc = locStub, constType = 0) {
    return {
      type: 4,
      loc,
      content,
      isStatic,
      constType: isStatic ? 3 : constType
    };
  }
  function createInterpolation(content, loc) {
    return {
      type: 5,
      loc,
      content: shared.isString(content) ? createSimpleExpression(content, false, loc) : content
    };
  }
  function createCompoundExpression(children, loc = locStub) {
    return {
      type: 8,
      loc,
      children
    };
  }
  function createCallExpression(callee, args = [], loc = locStub) {
    return {
      type: 14,
      loc,
      callee,
      arguments: args
    };
  }
  function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
    return {
      type: 18,
      params,
      returns,
      newline,
      isSlot,
      loc
    };
  }
  function createConditionalExpression(test, consequent, alternate, newline = true) {
    return {
      type: 19,
      test,
      consequent,
      alternate,
      newline,
      loc: locStub
    };
  }
  function createCacheExpression(index, value, isVNode = false) {
    return {
      type: 20,
      index,
      value,
      isVNode,
      loc: locStub
    };
  }
  function createBlockStatement(body) {
    return {
      type: 21,
      body,
      loc: locStub
    };
  }
  function createTemplateLiteral(elements) {
    return {
      type: 22,
      elements,
      loc: locStub
    };
  }
  function createIfStatement(test, consequent, alternate) {
    return {
      type: 23,
      test,
      consequent,
      alternate,
      loc: locStub
    };
  }
  function createAssignmentExpression(left, right) {
    return {
      type: 24,
      left,
      right,
      loc: locStub
    };
  }
  function createSequenceExpression(expressions) {
    return {
      type: 25,
      expressions,
      loc: locStub
    };
  }
  function createReturnStatement(returns) {
    return {
      type: 26,
      returns,
      loc: locStub
    };
  }
  var isStaticExp = (p) => p.type === 4 && p.isStatic;
  var isBuiltInType = (tag, expected) => tag === expected || tag === shared.hyphenate(expected);
  function isCoreComponent(tag) {
    if (isBuiltInType(tag, "Teleport")) {
      return TELEPORT;
    } else if (isBuiltInType(tag, "Suspense")) {
      return SUSPENSE;
    } else if (isBuiltInType(tag, "KeepAlive")) {
      return KEEP_ALIVE;
    } else if (isBuiltInType(tag, "BaseTransition")) {
      return BASE_TRANSITION;
    }
  }
  var nonIdentifierRE = /^\d|[^\$\w]/;
  var isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
  var memberExpRE = /^[A-Za-z_$][\w$]*(?:\s*\.\s*[A-Za-z_$][\w$]*|\[[^\]]+\])*$/;
  var isMemberExpression = (path) => {
    if (!path)
      return false;
    return memberExpRE.test(path.trim());
  };
  function getInnerRange(loc, offset, length) {
    const source = loc.source.substr(offset, length);
    const newLoc = {
      source,
      start: advancePositionWithClone(loc.start, loc.source, offset),
      end: loc.end
    };
    if (length != null) {
      newLoc.end = advancePositionWithClone(loc.start, loc.source, offset + length);
    }
    return newLoc;
  }
  function advancePositionWithClone(pos, source, numberOfCharacters = source.length) {
    return advancePositionWithMutation(shared.extend({}, pos), source, numberOfCharacters);
  }
  function advancePositionWithMutation(pos, source, numberOfCharacters = source.length) {
    let linesCount = 0;
    let lastNewLinePos = -1;
    for (let i = 0; i < numberOfCharacters; i++) {
      if (source.charCodeAt(i) === 10) {
        linesCount++;
        lastNewLinePos = i;
      }
    }
    pos.offset += numberOfCharacters;
    pos.line += linesCount;
    pos.column = lastNewLinePos === -1 ? pos.column + numberOfCharacters : numberOfCharacters - lastNewLinePos;
    return pos;
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error(msg || `unexpected compiler condition`);
    }
  }
  function findDir(node, name, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 7 && (allowEmpty || p.exp) && (shared.isString(name) ? p.name === name : name.test(p.name))) {
        return p;
      }
    }
  }
  function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 6) {
        if (dynamicOnly)
          continue;
        if (p.name === name && (p.value || allowEmpty)) {
          return p;
        }
      } else if (p.name === "bind" && (p.exp || allowEmpty) && isBindKey(p.arg, name)) {
        return p;
      }
    }
  }
  function isBindKey(arg, name) {
    return !!(arg && isStaticExp(arg) && arg.content === name);
  }
  function hasDynamicKeyVBind(node) {
    return node.props.some((p) => p.type === 7 && p.name === "bind" && (!p.arg || p.arg.type !== 4 || !p.arg.isStatic));
  }
  function isText(node) {
    return node.type === 5 || node.type === 2;
  }
  function isVSlot(p) {
    return p.type === 7 && p.name === "slot";
  }
  function isTemplateNode(node) {
    return node.type === 1 && node.tagType === 3;
  }
  function isSlotOutlet(node) {
    return node.type === 1 && node.tagType === 2;
  }
  function injectProp(node, prop, context) {
    let propsWithInjection;
    const props = node.type === 13 ? node.props : node.arguments[2];
    if (props == null || shared.isString(props)) {
      propsWithInjection = createObjectExpression([prop]);
    } else if (props.type === 14) {
      const first = props.arguments[0];
      if (!shared.isString(first) && first.type === 15) {
        first.properties.unshift(prop);
      } else {
        if (props.callee === TO_HANDLERS) {
          propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
            createObjectExpression([prop]),
            props
          ]);
        } else {
          props.arguments.unshift(createObjectExpression([prop]));
        }
      }
      !propsWithInjection && (propsWithInjection = props);
    } else if (props.type === 15) {
      let alreadyExists = false;
      if (prop.key.type === 4) {
        const propKeyName = prop.key.content;
        alreadyExists = props.properties.some((p) => p.key.type === 4 && p.key.content === propKeyName);
      }
      if (!alreadyExists) {
        props.properties.unshift(prop);
      }
      propsWithInjection = props;
    } else {
      propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
        createObjectExpression([prop]),
        props
      ]);
    }
    if (node.type === 13) {
      node.props = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
  function toValidAssetId(name, type) {
    return `_${type}_${name.replace(/[^\w]/g, "_")}`;
  }
  function hasScopeRef(node, ids) {
    if (!node || Object.keys(ids).length === 0) {
      return false;
    }
    switch (node.type) {
      case 1:
        for (let i = 0; i < node.props.length; i++) {
          const p = node.props[i];
          if (p.type === 7 && (hasScopeRef(p.arg, ids) || hasScopeRef(p.exp, ids))) {
            return true;
          }
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 11:
        if (hasScopeRef(node.source, ids)) {
          return true;
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 9:
        return node.branches.some((b) => hasScopeRef(b, ids));
      case 10:
        if (hasScopeRef(node.condition, ids)) {
          return true;
        }
        return node.children.some((c) => hasScopeRef(c, ids));
      case 4:
        return !node.isStatic && isSimpleIdentifier(node.content) && !!ids[node.content];
      case 8:
        return node.children.some((c) => shared.isObject(c) && hasScopeRef(c, ids));
      case 5:
      case 12:
        return hasScopeRef(node.content, ids);
      case 2:
      case 3:
        return false;
      default:
        return false;
    }
  }
  var decodeRE = /&(gt|lt|amp|apos|quot);/g;
  var decodeMap = {
    gt: ">",
    lt: "<",
    amp: "&",
    apos: "'",
    quot: '"'
  };
  var defaultParserOptions = {
    delimiters: [`{{`, `}}`],
    getNamespace: () => 0,
    getTextMode: () => 0,
    isVoidTag: shared.NO,
    isPreTag: shared.NO,
    isCustomElement: shared.NO,
    decodeEntities: (rawText) => rawText.replace(decodeRE, (_, p1) => decodeMap[p1]),
    onError: defaultOnError,
    comments: false
  };
  function baseParse(content, options = {}) {
    const context = createParserContext(content, options);
    const start = getCursor(context);
    return createRoot(parseChildren(context, 0, []), getSelection(context, start));
  }
  function createParserContext(content, rawOptions) {
    const options = shared.extend({}, defaultParserOptions);
    for (const key in rawOptions) {
      options[key] = rawOptions[key] || defaultParserOptions[key];
    }
    return {
      options,
      column: 1,
      line: 1,
      offset: 0,
      originalSource: content,
      source: content,
      inPre: false,
      inVPre: false
    };
  }
  function parseChildren(context, mode, ancestors) {
    const parent = last(ancestors);
    const ns = parent ? parent.ns : 0;
    const nodes = [];
    while (!isEnd(context, mode, ancestors)) {
      const s = context.source;
      let node = void 0;
      if (mode === 0 || mode === 1) {
        if (!context.inVPre && startsWith(s, context.options.delimiters[0])) {
          node = parseInterpolation(context, mode);
        } else if (mode === 0 && s[0] === "<") {
          if (s.length === 1) {
            emitError(context, 5, 1);
          } else if (s[1] === "!") {
            if (startsWith(s, "<!--")) {
              node = parseComment(context);
            } else if (startsWith(s, "<!DOCTYPE")) {
              node = parseBogusComment(context);
            } else if (startsWith(s, "<![CDATA[")) {
              if (ns !== 0) {
                node = parseCDATA(context, ancestors);
              } else {
                emitError(context, 1);
                node = parseBogusComment(context);
              }
            } else {
              emitError(context, 11);
              node = parseBogusComment(context);
            }
          } else if (s[1] === "/") {
            if (s.length === 2) {
              emitError(context, 5, 2);
            } else if (s[2] === ">") {
              emitError(context, 14, 2);
              advanceBy(context, 3);
              continue;
            } else if (/[a-z]/i.test(s[2])) {
              emitError(context, 23);
              parseTag(context, 1, parent);
              continue;
            } else {
              emitError(context, 12, 2);
              node = parseBogusComment(context);
            }
          } else if (/[a-z]/i.test(s[1])) {
            node = parseElement(context, ancestors);
          } else if (s[1] === "?") {
            emitError(context, 21, 1);
            node = parseBogusComment(context);
          } else {
            emitError(context, 12, 1);
          }
        }
      }
      if (!node) {
        node = parseText(context, mode);
      }
      if (shared.isArray(node)) {
        for (let i = 0; i < node.length; i++) {
          pushNode(nodes, node[i]);
        }
      } else {
        pushNode(nodes, node);
      }
    }
    let removedWhitespace = false;
    if (mode !== 2) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        if (!context.inPre && node.type === 2) {
          if (!/[^\t\r\n\f ]/.test(node.content)) {
            const prev = nodes[i - 1];
            const next = nodes[i + 1];
            if (!prev || !next || prev.type === 3 || next.type === 3 || prev.type === 1 && next.type === 1 && /[\r\n]/.test(node.content)) {
              removedWhitespace = true;
              nodes[i] = null;
            } else {
              node.content = " ";
            }
          } else {
            node.content = node.content.replace(/[\t\r\n\f ]+/g, " ");
          }
        }
      }
      if (context.inPre && parent && context.options.isPreTag(parent.tag)) {
        const first = nodes[0];
        if (first && first.type === 2) {
          first.content = first.content.replace(/^\r?\n/, "");
        }
      }
    }
    return removedWhitespace ? nodes.filter(Boolean) : nodes;
  }
  function pushNode(nodes, node) {
    if (node.type === 2) {
      const prev = last(nodes);
      if (prev && prev.type === 2 && prev.loc.end.offset === node.loc.start.offset) {
        prev.content += node.content;
        prev.loc.end = node.loc.end;
        prev.loc.source += node.loc.source;
        return;
      }
    }
    nodes.push(node);
  }
  function parseCDATA(context, ancestors) {
    advanceBy(context, 9);
    const nodes = parseChildren(context, 3, ancestors);
    if (context.source.length === 0) {
      emitError(context, 6);
    } else {
      advanceBy(context, 3);
    }
    return nodes;
  }
  function parseComment(context) {
    const start = getCursor(context);
    let content;
    const match = /--(\!)?>/.exec(context.source);
    if (!match) {
      content = context.source.slice(4);
      advanceBy(context, context.source.length);
      emitError(context, 7);
    } else {
      if (match.index <= 3) {
        emitError(context, 0);
      }
      if (match[1]) {
        emitError(context, 10);
      }
      content = context.source.slice(4, match.index);
      const s = context.source.slice(0, match.index);
      let prevIndex = 1, nestedIndex = 0;
      while ((nestedIndex = s.indexOf("<!--", prevIndex)) !== -1) {
        advanceBy(context, nestedIndex - prevIndex + 1);
        if (nestedIndex + 4 < s.length) {
          emitError(context, 16);
        }
        prevIndex = nestedIndex + 1;
      }
      advanceBy(context, match.index + match[0].length - prevIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseBogusComment(context) {
    const start = getCursor(context);
    const contentStart = context.source[1] === "?" ? 1 : 2;
    let content;
    const closeIndex = context.source.indexOf(">");
    if (closeIndex === -1) {
      content = context.source.slice(contentStart);
      advanceBy(context, context.source.length);
    } else {
      content = context.source.slice(contentStart, closeIndex);
      advanceBy(context, closeIndex + 1);
    }
    return {
      type: 3,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseElement(context, ancestors) {
    const wasInPre = context.inPre;
    const wasInVPre = context.inVPre;
    const parent = last(ancestors);
    const element = parseTag(context, 0, parent);
    const isPreBoundary = context.inPre && !wasInPre;
    const isVPreBoundary = context.inVPre && !wasInVPre;
    if (element.isSelfClosing || context.options.isVoidTag(element.tag)) {
      return element;
    }
    ancestors.push(element);
    const mode = context.options.getTextMode(element, parent);
    const children = parseChildren(context, mode, ancestors);
    ancestors.pop();
    element.children = children;
    if (startsWithEndTagOpen(context.source, element.tag)) {
      parseTag(context, 1, parent);
    } else {
      emitError(context, 24, 0, element.loc.start);
      if (context.source.length === 0 && element.tag.toLowerCase() === "script") {
        const first = children[0];
        if (first && startsWith(first.loc.source, "<!--")) {
          emitError(context, 8);
        }
      }
    }
    element.loc = getSelection(context, element.loc.start);
    if (isPreBoundary) {
      context.inPre = false;
    }
    if (isVPreBoundary) {
      context.inVPre = false;
    }
    return element;
  }
  var isSpecialTemplateDirective = /* @__PURE__ */ shared.makeMap(`if,else,else-if,for,slot`);
  function parseTag(context, type, parent) {
    const start = getCursor(context);
    const match = /^<\/?([a-z][^\t\r\n\f />]*)/i.exec(context.source);
    const tag = match[1];
    const ns = context.options.getNamespace(tag, parent);
    advanceBy(context, match[0].length);
    advanceSpaces(context);
    const cursor = getCursor(context);
    const currentSource = context.source;
    let props = parseAttributes(context, type);
    if (context.options.isPreTag(tag)) {
      context.inPre = true;
    }
    if (!context.inVPre && props.some((p) => p.type === 7 && p.name === "pre")) {
      context.inVPre = true;
      shared.extend(context, cursor);
      context.source = currentSource;
      props = parseAttributes(context, type).filter((p) => p.name !== "v-pre");
    }
    let isSelfClosing = false;
    if (context.source.length === 0) {
      emitError(context, 9);
    } else {
      isSelfClosing = startsWith(context.source, "/>");
      if (type === 1 && isSelfClosing) {
        emitError(context, 4);
      }
      advanceBy(context, isSelfClosing ? 2 : 1);
    }
    let tagType = 0;
    const options = context.options;
    if (!context.inVPre && !options.isCustomElement(tag)) {
      const hasVIs = props.some((p) => p.type === 7 && p.name === "is");
      if (options.isNativeTag && !hasVIs) {
        if (!options.isNativeTag(tag))
          tagType = 1;
      } else if (hasVIs || isCoreComponent(tag) || options.isBuiltInComponent && options.isBuiltInComponent(tag) || /^[A-Z]/.test(tag) || tag === "component") {
        tagType = 1;
      }
      if (tag === "slot") {
        tagType = 2;
      } else if (tag === "template" && props.some((p) => {
        return p.type === 7 && isSpecialTemplateDirective(p.name);
      })) {
        tagType = 3;
      }
    }
    return {
      type: 1,
      ns,
      tag,
      tagType,
      props,
      isSelfClosing,
      children: [],
      loc: getSelection(context, start),
      codegenNode: void 0
    };
  }
  function parseAttributes(context, type) {
    const props = [];
    const attributeNames = new Set();
    while (context.source.length > 0 && !startsWith(context.source, ">") && !startsWith(context.source, "/>")) {
      if (startsWith(context.source, "/")) {
        emitError(context, 22);
        advanceBy(context, 1);
        advanceSpaces(context);
        continue;
      }
      if (type === 1) {
        emitError(context, 3);
      }
      const attr = parseAttribute(context, attributeNames);
      if (type === 0) {
        props.push(attr);
      }
      if (/^[^\t\r\n\f />]/.test(context.source)) {
        emitError(context, 15);
      }
      advanceSpaces(context);
    }
    return props;
  }
  function parseAttribute(context, nameSet) {
    const start = getCursor(context);
    const match = /^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(context.source);
    const name = match[0];
    if (nameSet.has(name)) {
      emitError(context, 2);
    }
    nameSet.add(name);
    if (name[0] === "=") {
      emitError(context, 19);
    }
    {
      const pattern = /["'<]/g;
      let m;
      while (m = pattern.exec(name)) {
        emitError(context, 17, m.index);
      }
    }
    advanceBy(context, name.length);
    let value = void 0;
    if (/^[\t\r\n\f ]*=/.test(context.source)) {
      advanceSpaces(context);
      advanceBy(context, 1);
      advanceSpaces(context);
      value = parseAttributeValue(context);
      if (!value) {
        emitError(context, 13);
      }
    }
    const loc = getSelection(context, start);
    if (!context.inVPre && /^(v-|:|@|#)/.test(name)) {
      const match2 = /(?:^v-([a-z0-9-]+))?(?:(?::|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(name);
      const dirName = match2[1] || (startsWith(name, ":") ? "bind" : startsWith(name, "@") ? "on" : "slot");
      let arg;
      if (match2[2]) {
        const isSlot = dirName === "slot";
        const startOffset = name.indexOf(match2[2]);
        const loc2 = getSelection(context, getNewPosition(context, start, startOffset), getNewPosition(context, start, startOffset + match2[2].length + (isSlot && match2[3] || "").length));
        let content = match2[2];
        let isStatic = true;
        if (content.startsWith("[")) {
          isStatic = false;
          if (!content.endsWith("]")) {
            emitError(context, 26);
          }
          content = content.substr(1, content.length - 2);
        } else if (isSlot) {
          content += match2[3] || "";
        }
        arg = {
          type: 4,
          content,
          isStatic,
          constType: isStatic ? 3 : 0,
          loc: loc2
        };
      }
      if (value && value.isQuoted) {
        const valueLoc = value.loc;
        valueLoc.start.offset++;
        valueLoc.start.column++;
        valueLoc.end = advancePositionWithClone(valueLoc.start, value.content);
        valueLoc.source = valueLoc.source.slice(1, -1);
      }
      return {
        type: 7,
        name: dirName,
        exp: value && {
          type: 4,
          content: value.content,
          isStatic: false,
          constType: 0,
          loc: value.loc
        },
        arg,
        modifiers: match2[3] ? match2[3].substr(1).split(".") : [],
        loc
      };
    }
    return {
      type: 6,
      name,
      value: value && {
        type: 2,
        content: value.content,
        loc: value.loc
      },
      loc
    };
  }
  function parseAttributeValue(context) {
    const start = getCursor(context);
    let content;
    const quote = context.source[0];
    const isQuoted = quote === `"` || quote === `'`;
    if (isQuoted) {
      advanceBy(context, 1);
      const endIndex = context.source.indexOf(quote);
      if (endIndex === -1) {
        content = parseTextData(context, context.source.length, 4);
      } else {
        content = parseTextData(context, endIndex, 4);
        advanceBy(context, 1);
      }
    } else {
      const match = /^[^\t\r\n\f >]+/.exec(context.source);
      if (!match) {
        return void 0;
      }
      const unexpectedChars = /["'<=`]/g;
      let m;
      while (m = unexpectedChars.exec(match[0])) {
        emitError(context, 18, m.index);
      }
      content = parseTextData(context, match[0].length, 4);
    }
    return {content, isQuoted, loc: getSelection(context, start)};
  }
  function parseInterpolation(context, mode) {
    const [open, close] = context.options.delimiters;
    const closeIndex = context.source.indexOf(close, open.length);
    if (closeIndex === -1) {
      emitError(context, 25);
      return void 0;
    }
    const start = getCursor(context);
    advanceBy(context, open.length);
    const innerStart = getCursor(context);
    const innerEnd = getCursor(context);
    const rawContentLength = closeIndex - open.length;
    const rawContent = context.source.slice(0, rawContentLength);
    const preTrimContent = parseTextData(context, rawContentLength, mode);
    const content = preTrimContent.trim();
    const startOffset = preTrimContent.indexOf(content);
    if (startOffset > 0) {
      advancePositionWithMutation(innerStart, rawContent, startOffset);
    }
    const endOffset = rawContentLength - (preTrimContent.length - content.length - startOffset);
    advancePositionWithMutation(innerEnd, rawContent, endOffset);
    advanceBy(context, close.length);
    return {
      type: 5,
      content: {
        type: 4,
        isStatic: false,
        constType: 0,
        content,
        loc: getSelection(context, innerStart, innerEnd)
      },
      loc: getSelection(context, start)
    };
  }
  function parseText(context, mode) {
    const endTokens = ["<", context.options.delimiters[0]];
    if (mode === 3) {
      endTokens.push("]]>");
    }
    let endIndex = context.source.length;
    for (let i = 0; i < endTokens.length; i++) {
      const index = context.source.indexOf(endTokens[i], 1);
      if (index !== -1 && endIndex > index) {
        endIndex = index;
      }
    }
    const start = getCursor(context);
    const content = parseTextData(context, endIndex, mode);
    return {
      type: 2,
      content,
      loc: getSelection(context, start)
    };
  }
  function parseTextData(context, length, mode) {
    const rawText = context.source.slice(0, length);
    advanceBy(context, length);
    if (mode === 2 || mode === 3 || rawText.indexOf("&") === -1) {
      return rawText;
    } else {
      return context.options.decodeEntities(rawText, mode === 4);
    }
  }
  function getCursor(context) {
    const {column, line, offset} = context;
    return {column, line, offset};
  }
  function getSelection(context, start, end) {
    end = end || getCursor(context);
    return {
      start,
      end,
      source: context.originalSource.slice(start.offset, end.offset)
    };
  }
  function last(xs) {
    return xs[xs.length - 1];
  }
  function startsWith(source, searchString) {
    return source.startsWith(searchString);
  }
  function advanceBy(context, numberOfCharacters) {
    const {source} = context;
    advancePositionWithMutation(context, source, numberOfCharacters);
    context.source = source.slice(numberOfCharacters);
  }
  function advanceSpaces(context) {
    const match = /^[\t\r\n\f ]+/.exec(context.source);
    if (match) {
      advanceBy(context, match[0].length);
    }
  }
  function getNewPosition(context, start, numberOfCharacters) {
    return advancePositionWithClone(start, context.originalSource.slice(start.offset, numberOfCharacters), numberOfCharacters);
  }
  function emitError(context, code, offset, loc = getCursor(context)) {
    if (offset) {
      loc.offset += offset;
      loc.column += offset;
    }
    context.options.onError(createCompilerError(code, {
      start: loc,
      end: loc,
      source: ""
    }));
  }
  function isEnd(context, mode, ancestors) {
    const s = context.source;
    switch (mode) {
      case 0:
        if (startsWith(s, "</")) {
          for (let i = ancestors.length - 1; i >= 0; --i) {
            if (startsWithEndTagOpen(s, ancestors[i].tag)) {
              return true;
            }
          }
        }
        break;
      case 1:
      case 2: {
        const parent = last(ancestors);
        if (parent && startsWithEndTagOpen(s, parent.tag)) {
          return true;
        }
        break;
      }
      case 3:
        if (startsWith(s, "]]>")) {
          return true;
        }
        break;
    }
    return !s;
  }
  function startsWithEndTagOpen(source, tag) {
    return startsWith(source, "</") && source.substr(2, tag.length).toLowerCase() === tag.toLowerCase() && /[\t\r\n\f />]/.test(source[2 + tag.length] || ">");
  }
  function hoistStatic(root, context) {
    walk(root, context, isSingleElementRoot(root, root.children[0]));
  }
  function isSingleElementRoot(root, child) {
    const {children} = root;
    return children.length === 1 && child.type === 1 && !isSlotOutlet(child);
  }
  function walk(node, context, doNotHoistNode = false) {
    let hasHoistedNode = false;
    let canStringify = true;
    const {children} = node;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 1 && child.tagType === 0) {
        const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
        if (constantType > 0) {
          if (constantType < 3) {
            canStringify = false;
          }
          if (constantType >= 2) {
            child.codegenNode.patchFlag = -1 + ` /* HOISTED */`;
            child.codegenNode = context.hoist(child.codegenNode);
            hasHoistedNode = true;
            continue;
          }
        } else {
          const codegenNode = child.codegenNode;
          if (codegenNode.type === 13) {
            const flag = getPatchFlag(codegenNode);
            if ((!flag || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
              const props = getNodeProps(child);
              if (props) {
                codegenNode.props = context.hoist(props);
              }
            }
          }
        }
      } else if (child.type === 12) {
        const contentType = getConstantType(child.content, context);
        if (contentType > 0) {
          if (contentType < 3) {
            canStringify = false;
          }
          if (contentType >= 2) {
            child.codegenNode = context.hoist(child.codegenNode);
            hasHoistedNode = true;
          }
        }
      }
      if (child.type === 1) {
        walk(child, context);
      } else if (child.type === 11) {
        walk(child, context, child.children.length === 1);
      } else if (child.type === 9) {
        for (let i2 = 0; i2 < child.branches.length; i2++) {
          walk(child.branches[i2], context, child.branches[i2].children.length === 1);
        }
      }
    }
    if (canStringify && hasHoistedNode && context.transformHoist) {
      context.transformHoist(children, context, node);
    }
  }
  function getConstantType(node, context) {
    const {constantCache} = context;
    switch (node.type) {
      case 1:
        if (node.tagType !== 0) {
          return 0;
        }
        const cached = constantCache.get(node);
        if (cached !== void 0) {
          return cached;
        }
        const codegenNode = node.codegenNode;
        if (codegenNode.type !== 13) {
          return 0;
        }
        const flag = getPatchFlag(codegenNode);
        if (!flag) {
          let returnType2 = 3;
          const generatedPropsType = getGeneratedPropsConstantType(node, context);
          if (generatedPropsType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (generatedPropsType < returnType2) {
            returnType2 = generatedPropsType;
          }
          for (let i = 0; i < node.children.length; i++) {
            const childType = getConstantType(node.children[i], context);
            if (childType === 0) {
              constantCache.set(node, 0);
              return 0;
            }
            if (childType < returnType2) {
              returnType2 = childType;
            }
          }
          if (returnType2 > 1) {
            for (let i = 0; i < node.props.length; i++) {
              const p = node.props[i];
              if (p.type === 7 && p.name === "bind" && p.exp) {
                const expType = getConstantType(p.exp, context);
                if (expType === 0) {
                  constantCache.set(node, 0);
                  return 0;
                }
                if (expType < returnType2) {
                  returnType2 = expType;
                }
              }
            }
          }
          if (codegenNode.isBlock) {
            codegenNode.isBlock = false;
            context.helper(CREATE_VNODE);
          }
          constantCache.set(node, returnType2);
          return returnType2;
        } else {
          constantCache.set(node, 0);
          return 0;
        }
      case 2:
      case 3:
        return 3;
      case 9:
      case 11:
      case 10:
        return 0;
      case 5:
      case 12:
        return getConstantType(node.content, context);
      case 4:
        return node.constType;
      case 8:
        let returnType = 3;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (shared.isString(child) || shared.isSymbol(child)) {
            continue;
          }
          const childType = getConstantType(child, context);
          if (childType === 0) {
            return 0;
          } else if (childType < returnType) {
            returnType = childType;
          }
        }
        return returnType;
      default:
        return 0;
    }
  }
  function getGeneratedPropsConstantType(node, context) {
    let returnType = 3;
    const props = getNodeProps(node);
    if (props && props.type === 15) {
      const {properties} = props;
      for (let i = 0; i < properties.length; i++) {
        const {key, value} = properties[i];
        const keyType = getConstantType(key, context);
        if (keyType === 0) {
          return keyType;
        }
        if (keyType < returnType) {
          returnType = keyType;
        }
        if (value.type !== 4) {
          return 0;
        }
        const valueType = getConstantType(value, context);
        if (valueType === 0) {
          return valueType;
        }
        if (valueType < returnType) {
          returnType = valueType;
        }
      }
    }
    return returnType;
  }
  function getNodeProps(node) {
    const codegenNode = node.codegenNode;
    if (codegenNode.type === 13) {
      return codegenNode.props;
    }
  }
  function getPatchFlag(node) {
    const flag = node.patchFlag;
    return flag ? parseInt(flag, 10) : void 0;
  }
  function createTransformContext(root, {filename = "", prefixIdentifiers = false, hoistStatic: hoistStatic2 = false, cacheHandlers = false, nodeTransforms = [], directiveTransforms = {}, transformHoist = null, isBuiltInComponent = shared.NOOP, isCustomElement = shared.NOOP, expressionPlugins = [], scopeId = null, ssr = false, ssrCssVars = ``, bindingMetadata = shared.EMPTY_OBJ, inline = false, isTS = false, onError = defaultOnError}) {
    const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
    const context = {
      selfName: nameMatch && shared.capitalize(shared.camelize(nameMatch[1])),
      prefixIdentifiers,
      hoistStatic: hoistStatic2,
      cacheHandlers,
      nodeTransforms,
      directiveTransforms,
      transformHoist,
      isBuiltInComponent,
      isCustomElement,
      expressionPlugins,
      scopeId,
      ssr,
      ssrCssVars,
      bindingMetadata,
      inline,
      isTS,
      onError,
      root,
      helpers: new Set(),
      components: new Set(),
      directives: new Set(),
      hoists: [],
      imports: [],
      constantCache: new Map(),
      temps: 0,
      cached: 0,
      identifiers: Object.create(null),
      scopes: {
        vFor: 0,
        vSlot: 0,
        vPre: 0,
        vOnce: 0
      },
      parent: null,
      currentNode: root,
      childIndex: 0,
      helper(name) {
        context.helpers.add(name);
        return name;
      },
      helperString(name) {
        return `_${helperNameMap[context.helper(name)]}`;
      },
      replaceNode(node) {
        {
          if (!context.currentNode) {
            throw new Error(`Node being replaced is already removed.`);
          }
          if (!context.parent) {
            throw new Error(`Cannot replace root node.`);
          }
        }
        context.parent.children[context.childIndex] = context.currentNode = node;
      },
      removeNode(node) {
        if (!context.parent) {
          throw new Error(`Cannot remove root node.`);
        }
        const list = context.parent.children;
        const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
        if (removalIndex < 0) {
          throw new Error(`node being removed is not a child of current parent`);
        }
        if (!node || node === context.currentNode) {
          context.currentNode = null;
          context.onNodeRemoved();
        } else {
          if (context.childIndex > removalIndex) {
            context.childIndex--;
            context.onNodeRemoved();
          }
        }
        context.parent.children.splice(removalIndex, 1);
      },
      onNodeRemoved: () => {
      },
      addIdentifiers(exp) {
        {
          if (shared.isString(exp)) {
            addId(exp);
          } else if (exp.identifiers) {
            exp.identifiers.forEach(addId);
          } else if (exp.type === 4) {
            addId(exp.content);
          }
        }
      },
      removeIdentifiers(exp) {
        {
          if (shared.isString(exp)) {
            removeId(exp);
          } else if (exp.identifiers) {
            exp.identifiers.forEach(removeId);
          } else if (exp.type === 4) {
            removeId(exp.content);
          }
        }
      },
      hoist(exp) {
        context.hoists.push(exp);
        const identifier = createSimpleExpression(`_hoisted_${context.hoists.length}`, false, exp.loc, 2);
        identifier.hoisted = exp;
        return identifier;
      },
      cache(exp, isVNode = false) {
        return createCacheExpression(++context.cached, exp, isVNode);
      }
    };
    function addId(id) {
      const {identifiers} = context;
      if (identifiers[id] === void 0) {
        identifiers[id] = 0;
      }
      identifiers[id]++;
    }
    function removeId(id) {
      context.identifiers[id]--;
    }
    return context;
  }
  function transform(root, options) {
    const context = createTransformContext(root, options);
    traverseNode(root, context);
    if (options.hoistStatic) {
      hoistStatic(root, context);
    }
    if (!options.ssr) {
      createRootCodegen(root, context);
    }
    root.helpers = [...context.helpers];
    root.components = [...context.components];
    root.directives = [...context.directives];
    root.imports = context.imports;
    root.hoists = context.hoists;
    root.temps = context.temps;
    root.cached = context.cached;
  }
  function createRootCodegen(root, context) {
    const {helper} = context;
    const {children} = root;
    if (children.length === 1) {
      const child = children[0];
      if (isSingleElementRoot(root, child) && child.codegenNode) {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          codegenNode.isBlock = true;
          helper(OPEN_BLOCK);
          helper(CREATE_BLOCK);
        }
        root.codegenNode = codegenNode;
      } else {
        root.codegenNode = child;
      }
    } else if (children.length > 1) {
      let patchFlag = 64;
      let patchFlagText = shared.PatchFlagNames[64];
      if (children.filter((c) => c.type !== 3).length === 1) {
        patchFlag |= 2048;
        patchFlagText += `, ${shared.PatchFlagNames[2048]}`;
      }
      root.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, root.children, patchFlag + ` /* ${patchFlagText} */`, void 0, void 0, true);
    } else
      ;
  }
  function traverseChildren(parent, context) {
    let i = 0;
    const nodeRemoved = () => {
      i--;
    };
    for (; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (shared.isString(child))
        continue;
      context.parent = parent;
      context.childIndex = i;
      context.onNodeRemoved = nodeRemoved;
      traverseNode(child, context);
    }
  }
  function traverseNode(node, context) {
    context.currentNode = node;
    const {nodeTransforms} = context;
    const exitFns = [];
    for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
      const onExit = nodeTransforms[i2](node, context);
      if (onExit) {
        if (shared.isArray(onExit)) {
          exitFns.push(...onExit);
        } else {
          exitFns.push(onExit);
        }
      }
      if (!context.currentNode) {
        return;
      } else {
        node = context.currentNode;
      }
    }
    switch (node.type) {
      case 3:
        if (!context.ssr) {
          context.helper(CREATE_COMMENT);
        }
        break;
      case 5:
        if (!context.ssr) {
          context.helper(TO_DISPLAY_STRING);
        }
        break;
      case 9:
        for (let i2 = 0; i2 < node.branches.length; i2++) {
          traverseNode(node.branches[i2], context);
        }
        break;
      case 10:
      case 11:
      case 1:
      case 0:
        traverseChildren(node, context);
        break;
    }
    context.currentNode = node;
    let i = exitFns.length;
    while (i--) {
      exitFns[i]();
    }
  }
  function createStructuralDirectiveTransform(name, fn) {
    const matches = shared.isString(name) ? (n) => n === name : (n) => name.test(n);
    return (node, context) => {
      if (node.type === 1) {
        const {props} = node;
        if (node.tagType === 3 && props.some(isVSlot)) {
          return;
        }
        const exitFns = [];
        for (let i = 0; i < props.length; i++) {
          const prop = props[i];
          if (prop.type === 7 && matches(prop.name)) {
            props.splice(i, 1);
            i--;
            const onExit = fn(node, prop, context);
            if (onExit)
              exitFns.push(onExit);
          }
        }
        return exitFns;
      }
    };
  }
  var PURE_ANNOTATION = `/*#__PURE__*/`;
  function createCodegenContext(ast, {mode = "function", prefixIdentifiers = mode === "module", sourceMap: sourceMap$1 = false, filename = `template.vue.html`, scopeId = null, optimizeImports = false, runtimeGlobalName = `Vue`, runtimeModuleName = `vue`, ssr = false}) {
    const context = {
      mode,
      prefixIdentifiers,
      sourceMap: sourceMap$1,
      filename,
      scopeId,
      optimizeImports,
      runtimeGlobalName,
      runtimeModuleName,
      ssr,
      source: ast.loc.source,
      code: ``,
      column: 1,
      line: 1,
      offset: 0,
      indentLevel: 0,
      pure: false,
      map: void 0,
      helper(key) {
        return `_${helperNameMap[key]}`;
      },
      push(code, node) {
        context.code += code;
        if (context.map) {
          if (node) {
            let name;
            if (node.type === 4 && !node.isStatic) {
              const content = node.content.replace(/^_ctx\./, "");
              if (content !== node.content && isSimpleIdentifier(content)) {
                name = content;
              }
            }
            addMapping(node.loc.start, name);
          }
          advancePositionWithMutation(context, code);
          if (node && node.loc !== locStub) {
            addMapping(node.loc.end);
          }
        }
      },
      indent() {
        newline(++context.indentLevel);
      },
      deindent(withoutNewLine = false) {
        if (withoutNewLine) {
          --context.indentLevel;
        } else {
          newline(--context.indentLevel);
        }
      },
      newline() {
        newline(context.indentLevel);
      }
    };
    function newline(n) {
      context.push("\n" + `  `.repeat(n));
    }
    function addMapping(loc, name) {
      context.map.addMapping({
        name,
        source: context.filename,
        original: {
          line: loc.line,
          column: loc.column - 1
        },
        generated: {
          line: context.line,
          column: context.column - 1
        }
      });
    }
    if (sourceMap$1) {
      context.map = new sourceMap.SourceMapGenerator();
      context.map.setSourceContent(filename, context.source);
    }
    return context;
  }
  function generate(ast, options = {}) {
    const context = createCodegenContext(ast, options);
    if (options.onContextCreated)
      options.onContextCreated(context);
    const {mode, push, prefixIdentifiers, indent, deindent, newline, scopeId, ssr} = context;
    const hasHelpers = ast.helpers.length > 0;
    const useWithBlock = !prefixIdentifiers && mode !== "module";
    const genScopeId = scopeId != null && mode === "module";
    const isSetupInlined = !!options.inline;
    const preambleContext = isSetupInlined ? createCodegenContext(ast, options) : context;
    if (mode === "module") {
      genModulePreamble(ast, preambleContext, genScopeId, isSetupInlined);
    } else {
      genFunctionPreamble(ast, preambleContext);
    }
    const functionName = ssr ? `ssrRender` : `render`;
    const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
    if (options.bindingMetadata && !options.inline) {
      args.push("$props", "$setup", "$data", "$options");
    }
    const signature = options.isTS ? args.map((arg) => `${arg}: any`).join(",") : args.join(", ");
    if (genScopeId) {
      if (isSetupInlined) {
        push(`${PURE_ANNOTATION}_withId(`);
      } else {
        push(`const ${functionName} = ${PURE_ANNOTATION}_withId(`);
      }
    }
    if (isSetupInlined || genScopeId) {
      push(`(${signature}) => {`);
    } else {
      push(`function ${functionName}(${signature}) {`);
    }
    indent();
    if (useWithBlock) {
      push(`with (_ctx) {`);
      indent();
      if (hasHelpers) {
        push(`const { ${ast.helpers.map((s) => `${helperNameMap[s]}: _${helperNameMap[s]}`).join(", ")} } = _Vue`);
        push(`
`);
        newline();
      }
    }
    if (ast.components.length) {
      genAssets(ast.components, "component", context);
      if (ast.directives.length || ast.temps > 0) {
        newline();
      }
    }
    if (ast.directives.length) {
      genAssets(ast.directives, "directive", context);
      if (ast.temps > 0) {
        newline();
      }
    }
    if (ast.temps > 0) {
      push(`let `);
      for (let i = 0; i < ast.temps; i++) {
        push(`${i > 0 ? `, ` : ``}_temp${i}`);
      }
    }
    if (ast.components.length || ast.directives.length || ast.temps) {
      push(`
`);
      newline();
    }
    if (!ssr) {
      push(`return `);
    }
    if (ast.codegenNode) {
      genNode(ast.codegenNode, context);
    } else {
      push(`null`);
    }
    if (useWithBlock) {
      deindent();
      push(`}`);
    }
    deindent();
    push(`}`);
    if (genScopeId) {
      push(`)`);
    }
    return {
      ast,
      code: context.code,
      preamble: isSetupInlined ? preambleContext.code : ``,
      map: context.map ? context.map.toJSON() : void 0
    };
  }
  function genFunctionPreamble(ast, context) {
    const {ssr, prefixIdentifiers, push, newline, runtimeModuleName, runtimeGlobalName} = context;
    const VueBinding = ssr ? `require(${JSON.stringify(runtimeModuleName)})` : runtimeGlobalName;
    const aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
    if (ast.helpers.length > 0) {
      if (prefixIdentifiers) {
        push(`const { ${ast.helpers.map(aliasHelper).join(", ")} } = ${VueBinding}
`);
      } else {
        push(`const _Vue = ${VueBinding}
`);
        if (ast.hoists.length) {
          const staticHelpers = [
            CREATE_VNODE,
            CREATE_COMMENT,
            CREATE_TEXT,
            CREATE_STATIC
          ].filter((helper) => ast.helpers.includes(helper)).map(aliasHelper).join(", ");
          push(`const { ${staticHelpers} } = _Vue
`);
        }
      }
    }
    if (ast.ssrHelpers && ast.ssrHelpers.length) {
      push(`const { ${ast.ssrHelpers.map(aliasHelper).join(", ")} } = require("@vue/server-renderer")
`);
    }
    genHoists(ast.hoists, context);
    newline();
    push(`return `);
  }
  function genModulePreamble(ast, context, genScopeId, inline) {
    const {push, helper, newline, scopeId, optimizeImports, runtimeModuleName} = context;
    if (genScopeId) {
      ast.helpers.push(WITH_SCOPE_ID);
      if (ast.hoists.length) {
        ast.helpers.push(PUSH_SCOPE_ID, POP_SCOPE_ID);
      }
    }
    if (ast.helpers.length) {
      if (optimizeImports) {
        push(`import { ${ast.helpers.map((s) => helperNameMap[s]).join(", ")} } from ${JSON.stringify(runtimeModuleName)}
`);
        push(`
// Binding optimization for webpack code-split
const ${ast.helpers.map((s) => `_${helperNameMap[s]} = ${helperNameMap[s]}`).join(", ")}
`);
      } else {
        push(`import { ${ast.helpers.map((s) => `${helperNameMap[s]} as _${helperNameMap[s]}`).join(", ")} } from ${JSON.stringify(runtimeModuleName)}
`);
      }
    }
    if (ast.ssrHelpers && ast.ssrHelpers.length) {
      push(`import { ${ast.ssrHelpers.map((s) => `${helperNameMap[s]} as _${helperNameMap[s]}`).join(", ")} } from "@vue/server-renderer"
`);
    }
    if (ast.imports.length) {
      genImports(ast.imports, context);
      newline();
    }
    if (genScopeId) {
      push(`const _withId = ${PURE_ANNOTATION}${helper(WITH_SCOPE_ID)}("${scopeId}")`);
      newline();
    }
    genHoists(ast.hoists, context);
    newline();
    if (!inline) {
      push(`export `);
    }
  }
  function genAssets(assets, type, {helper, push, newline}) {
    const resolver = helper(type === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE);
    for (let i = 0; i < assets.length; i++) {
      const id = assets[i];
      push(`const ${toValidAssetId(id, type)} = ${resolver}(${JSON.stringify(id)})`);
      if (i < assets.length - 1) {
        newline();
      }
    }
  }
  function genHoists(hoists, context) {
    if (!hoists.length) {
      return;
    }
    context.pure = true;
    const {push, newline, helper, scopeId, mode} = context;
    const genScopeId = scopeId != null && mode !== "function";
    newline();
    if (genScopeId) {
      push(`${helper(PUSH_SCOPE_ID)}("${scopeId}")`);
      newline();
    }
    hoists.forEach((exp, i) => {
      if (exp) {
        push(`const _hoisted_${i + 1} = `);
        genNode(exp, context);
        newline();
      }
    });
    if (genScopeId) {
      push(`${helper(POP_SCOPE_ID)}()`);
      newline();
    }
    context.pure = false;
  }
  function genImports(importsOptions, context) {
    if (!importsOptions.length) {
      return;
    }
    importsOptions.forEach((imports) => {
      context.push(`import `);
      genNode(imports.exp, context);
      context.push(` from '${imports.path}'`);
      context.newline();
    });
  }
  function isText$1(n) {
    return shared.isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
  }
  function genNodeListAsArray(nodes, context) {
    const multilines = nodes.length > 3 || nodes.some((n) => shared.isArray(n) || !isText$1(n));
    context.push(`[`);
    multilines && context.indent();
    genNodeList(nodes, context, multilines);
    multilines && context.deindent();
    context.push(`]`);
  }
  function genNodeList(nodes, context, multilines = false, comma = true) {
    const {push, newline} = context;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (shared.isString(node)) {
        push(node);
      } else if (shared.isArray(node)) {
        genNodeListAsArray(node, context);
      } else {
        genNode(node, context);
      }
      if (i < nodes.length - 1) {
        if (multilines) {
          comma && push(",");
          newline();
        } else {
          comma && push(", ");
        }
      }
    }
  }
  function genNode(node, context) {
    if (shared.isString(node)) {
      context.push(node);
      return;
    }
    if (shared.isSymbol(node)) {
      context.push(context.helper(node));
      return;
    }
    switch (node.type) {
      case 1:
      case 9:
      case 11:
        assert(node.codegenNode != null, `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`);
        genNode(node.codegenNode, context);
        break;
      case 2:
        genText(node, context);
        break;
      case 4:
        genExpression(node, context);
        break;
      case 5:
        genInterpolation(node, context);
        break;
      case 12:
        genNode(node.codegenNode, context);
        break;
      case 8:
        genCompoundExpression(node, context);
        break;
      case 3:
        genComment(node, context);
        break;
      case 13:
        genVNodeCall(node, context);
        break;
      case 14:
        genCallExpression(node, context);
        break;
      case 15:
        genObjectExpression(node, context);
        break;
      case 17:
        genArrayExpression(node, context);
        break;
      case 18:
        genFunctionExpression(node, context);
        break;
      case 19:
        genConditionalExpression(node, context);
        break;
      case 20:
        genCacheExpression(node, context);
        break;
      case 21:
        genNodeList(node.body, context, true, false);
        break;
      case 22:
        genTemplateLiteral(node, context);
        break;
      case 23:
        genIfStatement(node, context);
        break;
      case 24:
        genAssignmentExpression(node, context);
        break;
      case 25:
        genSequenceExpression(node, context);
        break;
      case 26:
        genReturnStatement(node, context);
        break;
      case 10:
        break;
      default: {
        assert(false, `unhandled codegen node type: ${node.type}`);
        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }
    }
  }
  function genText(node, context) {
    context.push(JSON.stringify(node.content), node);
  }
  function genExpression(node, context) {
    const {content, isStatic} = node;
    context.push(isStatic ? JSON.stringify(content) : content, node);
  }
  function genInterpolation(node, context) {
    const {push, helper, pure} = context;
    if (pure)
      push(PURE_ANNOTATION);
    push(`${helper(TO_DISPLAY_STRING)}(`);
    genNode(node.content, context);
    push(`)`);
  }
  function genCompoundExpression(node, context) {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (shared.isString(child)) {
        context.push(child);
      } else {
        genNode(child, context);
      }
    }
  }
  function genExpressionAsPropertyKey(node, context) {
    const {push} = context;
    if (node.type === 8) {
      push(`[`);
      genCompoundExpression(node, context);
      push(`]`);
    } else if (node.isStatic) {
      const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
      push(text, node);
    } else {
      push(`[${node.content}]`, node);
    }
  }
  function genComment(node, context) {
    {
      const {push, helper, pure} = context;
      if (pure) {
        push(PURE_ANNOTATION);
      }
      push(`${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`, node);
    }
  }
  function genVNodeCall(node, context) {
    const {push, helper, pure} = context;
    const {tag, props, children, patchFlag, dynamicProps, directives, isBlock, disableTracking} = node;
    if (directives) {
      push(helper(WITH_DIRECTIVES) + `(`);
    }
    if (isBlock) {
      push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
    }
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(helper(isBlock ? CREATE_BLOCK : CREATE_VNODE) + `(`, node);
    genNodeList(genNullableArgs([tag, props, children, patchFlag, dynamicProps]), context);
    push(`)`);
    if (isBlock) {
      push(`)`);
    }
    if (directives) {
      push(`, `);
      genNode(directives, context);
      push(`)`);
    }
  }
  function genNullableArgs(args) {
    let i = args.length;
    while (i--) {
      if (args[i] != null)
        break;
    }
    return args.slice(0, i + 1).map((arg) => arg || `null`);
  }
  function genCallExpression(node, context) {
    const {push, helper, pure} = context;
    const callee = shared.isString(node.callee) ? node.callee : helper(node.callee);
    if (pure) {
      push(PURE_ANNOTATION);
    }
    push(callee + `(`, node);
    genNodeList(node.arguments, context);
    push(`)`);
  }
  function genObjectExpression(node, context) {
    const {push, indent, deindent, newline} = context;
    const {properties} = node;
    if (!properties.length) {
      push(`{}`, node);
      return;
    }
    const multilines = properties.length > 1 || properties.some((p) => p.value.type !== 4);
    push(multilines ? `{` : `{ `);
    multilines && indent();
    for (let i = 0; i < properties.length; i++) {
      const {key, value} = properties[i];
      genExpressionAsPropertyKey(key, context);
      push(`: `);
      genNode(value, context);
      if (i < properties.length - 1) {
        push(`,`);
        newline();
      }
    }
    multilines && deindent();
    push(multilines ? `}` : ` }`);
  }
  function genArrayExpression(node, context) {
    genNodeListAsArray(node.elements, context);
  }
  function genFunctionExpression(node, context) {
    const {push, indent, deindent, scopeId, mode} = context;
    const {params, returns, body, newline, isSlot} = node;
    const genScopeId = isSlot && scopeId != null && mode !== "function";
    if (genScopeId) {
      push(`_withId(`);
    } else if (isSlot) {
      push(`_${helperNameMap[WITH_CTX]}(`);
    }
    push(`(`, node);
    if (shared.isArray(params)) {
      genNodeList(params, context);
    } else if (params) {
      genNode(params, context);
    }
    push(`) => `);
    if (newline || body) {
      push(`{`);
      indent();
    }
    if (returns) {
      if (newline) {
        push(`return `);
      }
      if (shared.isArray(returns)) {
        genNodeListAsArray(returns, context);
      } else {
        genNode(returns, context);
      }
    } else if (body) {
      genNode(body, context);
    }
    if (newline || body) {
      deindent();
      push(`}`);
    }
    if (genScopeId || isSlot) {
      push(`)`);
    }
  }
  function genConditionalExpression(node, context) {
    const {test, consequent, alternate, newline: needNewline} = node;
    const {push, indent, deindent, newline} = context;
    if (test.type === 4) {
      const needsParens = !isSimpleIdentifier(test.content);
      needsParens && push(`(`);
      genExpression(test, context);
      needsParens && push(`)`);
    } else {
      push(`(`);
      genNode(test, context);
      push(`)`);
    }
    needNewline && indent();
    context.indentLevel++;
    needNewline || push(` `);
    push(`? `);
    genNode(consequent, context);
    context.indentLevel--;
    needNewline && newline();
    needNewline || push(` `);
    push(`: `);
    const isNested = alternate.type === 19;
    if (!isNested) {
      context.indentLevel++;
    }
    genNode(alternate, context);
    if (!isNested) {
      context.indentLevel--;
    }
    needNewline && deindent(true);
  }
  function genCacheExpression(node, context) {
    const {push, helper, indent, deindent, newline} = context;
    push(`_cache[${node.index}] || (`);
    if (node.isVNode) {
      indent();
      push(`${helper(SET_BLOCK_TRACKING)}(-1),`);
      newline();
    }
    push(`_cache[${node.index}] = `);
    genNode(node.value, context);
    if (node.isVNode) {
      push(`,`);
      newline();
      push(`${helper(SET_BLOCK_TRACKING)}(1),`);
      newline();
      push(`_cache[${node.index}]`);
      deindent();
    }
    push(`)`);
  }
  function genTemplateLiteral(node, context) {
    const {push, indent, deindent} = context;
    push("`");
    const l = node.elements.length;
    const multilines = l > 3;
    for (let i = 0; i < l; i++) {
      const e = node.elements[i];
      if (shared.isString(e)) {
        push(e.replace(/(`|\$|\\)/g, "\\$1"));
      } else {
        push("${");
        if (multilines)
          indent();
        genNode(e, context);
        if (multilines)
          deindent();
        push("}");
      }
    }
    push("`");
  }
  function genIfStatement(node, context) {
    const {push, indent, deindent} = context;
    const {test, consequent, alternate} = node;
    push(`if (`);
    genNode(test, context);
    push(`) {`);
    indent();
    genNode(consequent, context);
    deindent();
    push(`}`);
    if (alternate) {
      push(` else `);
      if (alternate.type === 23) {
        genIfStatement(alternate, context);
      } else {
        push(`{`);
        indent();
        genNode(alternate, context);
        deindent();
        push(`}`);
      }
    }
  }
  function genAssignmentExpression(node, context) {
    genNode(node.left, context);
    context.push(` = `);
    genNode(node.right, context);
  }
  function genSequenceExpression(node, context) {
    context.push(`(`);
    genNodeList(node.expressions, context);
    context.push(`)`);
  }
  function genReturnStatement({returns}, context) {
    context.push(`return `);
    if (shared.isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  }
  var isLiteralWhitelisted = /* @__PURE__ */ shared.makeMap("true,false,null,this");
  var transformExpression = (node, context) => {
    if (node.type === 5) {
      node.content = processExpression(node.content, context);
    } else if (node.type === 1) {
      for (let i = 0; i < node.props.length; i++) {
        const dir = node.props[i];
        if (dir.type === 7 && dir.name !== "for") {
          const exp = dir.exp;
          const arg = dir.arg;
          if (exp && exp.type === 4 && !(dir.name === "on" && arg)) {
            dir.exp = processExpression(exp, context, dir.name === "slot");
          }
          if (arg && arg.type === 4 && !arg.isStatic) {
            dir.arg = processExpression(arg, context);
          }
        }
      }
    }
  };
  function processExpression(node, context, asParams = false, asRawStatements = false) {
    if (!context.prefixIdentifiers || !node.content.trim()) {
      return node;
    }
    const {inline, bindingMetadata} = context;
    const rewriteIdentifier = (raw, parent, id) => {
      const type = shared.hasOwn(bindingMetadata, raw) && bindingMetadata[raw];
      if (inline) {
        const isAssignmentLVal = parent && parent.type === "AssignmentExpression" && parent.left === id;
        const isUpdateArg = parent && parent.type === "UpdateExpression" && parent.argument === id;
        const isDestructureAssignment = parent && isInDestructureAssignment(parent, parentStack);
        if (type === "setup-const") {
          return raw;
        } else if (type === "setup-ref") {
          return `${raw}.value`;
        } else if (type === "setup-maybe-ref") {
          return isAssignmentLVal || isUpdateArg || isDestructureAssignment ? `${raw}.value` : `${context.helperString(UNREF)}(${raw})`;
        } else if (type === "setup-let") {
          if (isAssignmentLVal) {
            const rVal = parent.right;
            const rExp = rawExp.slice(rVal.start - 1, rVal.end - 1);
            const rExpString = stringifyExpression(processExpression(createSimpleExpression(rExp, false), context));
            return `${context.helperString(IS_REF)}(${raw})${context.isTS ? ` //@ts-ignore
` : ``} ? ${raw}.value = ${rExpString} : ${raw}`;
          } else if (isUpdateArg) {
            id.start = parent.start;
            id.end = parent.end;
            const {prefix: isPrefix, operator} = parent;
            const prefix = isPrefix ? operator : ``;
            const postfix = isPrefix ? `` : operator;
            return `${context.helperString(IS_REF)}(${raw})${context.isTS ? ` //@ts-ignore
` : ``} ? ${prefix}${raw}.value${postfix} : ${prefix}${raw}${postfix}`;
          } else if (isDestructureAssignment) {
            return raw;
          } else {
            return `${context.helperString(UNREF)}(${raw})`;
          }
        } else if (type === "props") {
          return `__props.${raw}`;
        }
      } else {
        if (type && type.startsWith("setup")) {
          return `$setup.${raw}`;
        } else if (type) {
          return `$${type}.${raw}`;
        }
      }
      return `_ctx.${raw}`;
    };
    const rawExp = node.content;
    const bailConstant = rawExp.indexOf(`(`) > -1 || rawExp.indexOf(".") > 0;
    if (isSimpleIdentifier(rawExp)) {
      const isScopeVarReference = context.identifiers[rawExp];
      const isAllowedGlobal = shared.isGloballyWhitelisted(rawExp);
      const isLiteral = isLiteralWhitelisted(rawExp);
      if (!asParams && !isScopeVarReference && !isAllowedGlobal && !isLiteral) {
        if (bindingMetadata[node.content] === "setup-const") {
          node.constType = 1;
        }
        node.content = rewriteIdentifier(rawExp);
      } else if (!isScopeVarReference) {
        if (isLiteral) {
          node.constType = 3;
        } else {
          node.constType = 2;
        }
      }
      return node;
    }
    let ast;
    const source = asRawStatements ? ` ${rawExp} ` : `(${rawExp})${asParams ? `=>{}` : ``}`;
    try {
      ast = parser.parse(source, {
        plugins: [...context.expressionPlugins, ...shared.babelParserDefaultPlugins]
      }).program;
    } catch (e) {
      context.onError(createCompilerError(43, node.loc, void 0, e.message));
      return node;
    }
    const ids = [];
    const knownIds = Object.create(context.identifiers);
    const isDuplicate = (node2) => ids.some((id) => id.start === node2.start);
    const parentStack = [];
    estreeWalker.walk(ast, {
      enter(node2, parent) {
        parent && parentStack.push(parent);
        if (node2.type === "Identifier") {
          if (!isDuplicate(node2)) {
            const needPrefix = shouldPrefix(node2, parent, parentStack);
            if (!knownIds[node2.name] && needPrefix) {
              if (isStaticProperty(parent) && parent.shorthand) {
                node2.prefix = `${node2.name}: `;
              }
              node2.name = rewriteIdentifier(node2.name, parent, node2);
              ids.push(node2);
            } else if (!isStaticPropertyKey(node2, parent)) {
              if (!(needPrefix && knownIds[node2.name]) && !bailConstant) {
                node2.isConstant = true;
              }
              ids.push(node2);
            }
          }
        } else if (isFunction(node2)) {
          node2.params.forEach((p) => estreeWalker.walk(p, {
            enter(child, parent2) {
              if (child.type === "Identifier" && !isStaticPropertyKey(child, parent2) && !(parent2 && parent2.type === "AssignmentPattern" && parent2.right === child)) {
                const {name} = child;
                if (node2.scopeIds && node2.scopeIds.has(name)) {
                  return;
                }
                if (name in knownIds) {
                  knownIds[name]++;
                } else {
                  knownIds[name] = 1;
                }
                (node2.scopeIds || (node2.scopeIds = new Set())).add(name);
              }
            }
          }));
        }
      },
      leave(node2, parent) {
        parent && parentStack.pop();
        if (node2 !== ast.body[0].expression && node2.scopeIds) {
          node2.scopeIds.forEach((id) => {
            knownIds[id]--;
            if (knownIds[id] === 0) {
              delete knownIds[id];
            }
          });
        }
      }
    });
    const children = [];
    ids.sort((a, b) => a.start - b.start);
    ids.forEach((id, i) => {
      const start = id.start - 1;
      const end = id.end - 1;
      const last2 = ids[i - 1];
      const leadingText = rawExp.slice(last2 ? last2.end - 1 : 0, start);
      if (leadingText.length || id.prefix) {
        children.push(leadingText + (id.prefix || ``));
      }
      const source2 = rawExp.slice(start, end);
      children.push(createSimpleExpression(id.name, false, {
        source: source2,
        start: advancePositionWithClone(node.loc.start, source2, start),
        end: advancePositionWithClone(node.loc.start, source2, end)
      }, id.isConstant ? 3 : 0));
      if (i === ids.length - 1 && end < rawExp.length) {
        children.push(rawExp.slice(end));
      }
    });
    let ret;
    if (children.length) {
      ret = createCompoundExpression(children, node.loc);
    } else {
      ret = node;
      ret.constType = bailConstant ? 0 : 3;
    }
    ret.identifiers = Object.keys(knownIds);
    return ret;
  }
  var isFunction = (node) => {
    return /Function(?:Expression|Declaration)$|Method$/.test(node.type);
  };
  var isStaticProperty = (node) => node && (node.type === "ObjectProperty" || node.type === "ObjectMethod") && !node.computed;
  var isStaticPropertyKey = (node, parent) => isStaticProperty(parent) && parent.key === node;
  function shouldPrefix(id, parent, parentStack) {
    if ((parent.type === "VariableDeclarator" || parent.type === "ClassDeclaration") && parent.id === id) {
      return false;
    }
    if (isFunction(parent)) {
      if (parent.id === id) {
        return false;
      }
      if (parent.params.includes(id)) {
        return false;
      }
    }
    if (isStaticPropertyKey(id, parent)) {
      return false;
    }
    if (parent.type === "ArrayPattern" && !isInDestructureAssignment(parent, parentStack)) {
      return false;
    }
    if ((parent.type === "MemberExpression" || parent.type === "OptionalMemberExpression") && parent.property === id && !parent.computed) {
      return false;
    }
    if (id.name === "arguments") {
      return false;
    }
    if (shared.isGloballyWhitelisted(id.name)) {
      return false;
    }
    if (id.name === "require") {
      return false;
    }
    return true;
  }
  function isInDestructureAssignment(parent, parentStack) {
    if (parent && (parent.type === "ObjectProperty" || parent.type === "ArrayPattern")) {
      let i = parentStack.length;
      while (i--) {
        const p = parentStack[i];
        if (p.type === "AssignmentExpression") {
          return true;
        } else if (p.type !== "ObjectProperty" && !p.type.endsWith("Pattern")) {
          break;
        }
      }
    }
    return false;
  }
  function stringifyExpression(exp) {
    if (shared.isString(exp)) {
      return exp;
    } else if (exp.type === 4) {
      return exp.content;
    } else {
      return exp.children.map(stringifyExpression).join("");
    }
  }
  var transformIf = createStructuralDirectiveTransform(/^(if|else|else-if)$/, (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(branch, key, context);
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(branch, key + ifNode.branches.length - 1, context);
        }
      };
    });
  });
  function processIf(node, dir, context, processCodegen) {
    if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
      const loc = dir.exp ? dir.exp.loc : node.loc;
      context.onError(createCompilerError(27, dir.loc));
      dir.exp = createSimpleExpression(`true`, false, loc);
    }
    if (context.prefixIdentifiers && dir.exp) {
      dir.exp = processExpression(dir.exp, context);
    }
    if (dir.name === "if") {
      const branch = createIfBranch(node, dir);
      const ifNode = {
        type: 9,
        loc: node.loc,
        branches: [branch]
      };
      context.replaceNode(ifNode);
      if (processCodegen) {
        return processCodegen(ifNode, branch, true);
      }
    } else {
      const siblings = context.parent.children;
      const comments = [];
      let i = siblings.indexOf(node);
      while (i-- >= -1) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 3) {
          context.removeNode(sibling);
          comments.unshift(sibling);
          continue;
        }
        if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
          context.removeNode(sibling);
          continue;
        }
        if (sibling && sibling.type === 9) {
          context.removeNode();
          const branch = createIfBranch(node, dir);
          if (comments.length) {
            branch.children = [...comments, ...branch.children];
          }
          {
            const key = branch.userKey;
            if (key) {
              sibling.branches.forEach(({userKey}) => {
                if (isSameKey(userKey, key)) {
                  context.onError(createCompilerError(28, branch.userKey.loc));
                }
              });
            }
          }
          sibling.branches.push(branch);
          const onExit = processCodegen && processCodegen(sibling, branch, false);
          traverseNode(branch, context);
          if (onExit)
            onExit();
          context.currentNode = null;
        } else {
          context.onError(createCompilerError(29, node.loc));
        }
        break;
      }
    }
  }
  function createIfBranch(node, dir) {
    return {
      type: 10,
      loc: node.loc,
      condition: dir.name === "else" ? void 0 : dir.exp,
      children: node.tagType === 3 && !findDir(node, "for") ? node.children : [node],
      userKey: findProp(node, `key`)
    };
  }
  function createCodegenNodeForBranch(branch, keyIndex, context) {
    if (branch.condition) {
      return createConditionalExpression(branch.condition, createChildrenCodegenNode(branch, keyIndex, context), createCallExpression(context.helper(CREATE_COMMENT), [
        '"v-if"',
        "true"
      ]));
    } else {
      return createChildrenCodegenNode(branch, keyIndex, context);
    }
  }
  function createChildrenCodegenNode(branch, keyIndex, context) {
    const {helper} = context;
    const keyProperty = createObjectProperty(`key`, createSimpleExpression(`${keyIndex}`, false, locStub, 2));
    const {children} = branch;
    const firstChild = children[0];
    const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
    if (needFragmentWrapper) {
      if (children.length === 1 && firstChild.type === 11) {
        const vnodeCall = firstChild.codegenNode;
        injectProp(vnodeCall, keyProperty, context);
        return vnodeCall;
      } else {
        return createVNodeCall(context, helper(FRAGMENT), createObjectExpression([keyProperty]), children, 64 + ` /* ${shared.PatchFlagNames[64]} */`, void 0, void 0, true, false, branch.loc);
      }
    } else {
      const vnodeCall = firstChild.codegenNode;
      if (vnodeCall.type === 13) {
        vnodeCall.isBlock = true;
        helper(OPEN_BLOCK);
        helper(CREATE_BLOCK);
      }
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    }
  }
  function isSameKey(a, b) {
    if (!a || a.type !== b.type) {
      return false;
    }
    if (a.type === 6) {
      if (a.value.content !== b.value.content) {
        return false;
      }
    } else {
      const exp = a.exp;
      const branchExp = b.exp;
      if (exp.type !== branchExp.type) {
        return false;
      }
      if (exp.type !== 4 || (exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content)) {
        return false;
      }
    }
    return true;
  }
  function getParentCondition(node) {
    while (true) {
      if (node.type === 19) {
        if (node.alternate.type === 19) {
          node = node.alternate;
        } else {
          return node;
        }
      } else if (node.type === 20) {
        node = node.value;
      }
    }
  }
  var transformFor = createStructuralDirectiveTransform("for", (node, dir, context) => {
    const {helper} = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const keyProp = findProp(node, `key`);
      const keyProperty = keyProp ? createObjectProperty(`key`, keyProp.type === 6 ? createSimpleExpression(keyProp.value.content, true) : keyProp.exp) : null;
      if (context.prefixIdentifiers && keyProperty) {
        keyProperty.value = processExpression(keyProperty.value, context);
      }
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(context, helper(FRAGMENT), void 0, renderExp, fragmentFlag + ` /* ${shared.PatchFlagNames[fragmentFlag]} */`, void 0, void 0, true, !isStableFragment, node.loc);
      return () => {
        let childBlock;
        const isTemplate = isTemplateNode(node);
        const {children} = forNode;
        if (isTemplate) {
          node.children.some((c) => {
            if (c.type === 1) {
              const key = findProp(c, "key");
              if (key) {
                context.onError(createCompilerError(32, key.loc));
                return true;
              }
            }
          });
        }
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(context, helper(FRAGMENT), keyProperty ? createObjectExpression([keyProperty]) : void 0, node.children, 64 + ` /* ${shared.PatchFlagNames[64]} */`, void 0, void 0, true);
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(CREATE_BLOCK);
          } else {
            helper(CREATE_VNODE);
          }
        }
        renderExp.arguments.push(createFunctionExpression(createForLoopParams(forNode.parseResult), childBlock, true));
      };
    });
  });
  function processFor(node, dir, context, processCodegen) {
    if (!dir.exp) {
      context.onError(createCompilerError(30, dir.loc));
      return;
    }
    const parseResult = parseForExpression(dir.exp, context);
    if (!parseResult) {
      context.onError(createCompilerError(31, dir.loc));
      return;
    }
    const {addIdentifiers, removeIdentifiers, scopes} = context;
    const {source, value, key, index} = parseResult;
    const forNode = {
      type: 11,
      loc: dir.loc,
      source,
      valueAlias: value,
      keyAlias: key,
      objectIndexAlias: index,
      parseResult,
      children: isTemplateNode(node) ? node.children : [node]
    };
    context.replaceNode(forNode);
    scopes.vFor++;
    if (context.prefixIdentifiers) {
      value && addIdentifiers(value);
      key && addIdentifiers(key);
      index && addIdentifiers(index);
    }
    const onExit = processCodegen && processCodegen(forNode);
    return () => {
      scopes.vFor--;
      if (context.prefixIdentifiers) {
        value && removeIdentifiers(value);
        key && removeIdentifiers(key);
        index && removeIdentifiers(index);
      }
      if (onExit)
        onExit();
    };
  }
  var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  var stripParensRE = /^\(|\)$/g;
  function parseForExpression(input, context) {
    const loc = input.loc;
    const exp = input.content;
    const inMatch = exp.match(forAliasRE);
    if (!inMatch)
      return;
    const [, LHS, RHS] = inMatch;
    const result = {
      source: createAliasExpression(loc, RHS.trim(), exp.indexOf(RHS, LHS.length)),
      value: void 0,
      key: void 0,
      index: void 0
    };
    if (context.prefixIdentifiers) {
      result.source = processExpression(result.source, context);
    }
    let valueContent = LHS.trim().replace(stripParensRE, "").trim();
    const trimmedOffset = LHS.indexOf(valueContent);
    const iteratorMatch = valueContent.match(forIteratorRE);
    if (iteratorMatch) {
      valueContent = valueContent.replace(forIteratorRE, "").trim();
      const keyContent = iteratorMatch[1].trim();
      let keyOffset;
      if (keyContent) {
        keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
        result.key = createAliasExpression(loc, keyContent, keyOffset);
        if (context.prefixIdentifiers) {
          result.key = processExpression(result.key, context, true);
        }
      }
      if (iteratorMatch[2]) {
        const indexContent = iteratorMatch[2].trim();
        if (indexContent) {
          result.index = createAliasExpression(loc, indexContent, exp.indexOf(indexContent, result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length));
          if (context.prefixIdentifiers) {
            result.index = processExpression(result.index, context, true);
          }
        }
      }
    }
    if (valueContent) {
      result.value = createAliasExpression(loc, valueContent, trimmedOffset);
      if (context.prefixIdentifiers) {
        result.value = processExpression(result.value, context, true);
      }
    }
    return result;
  }
  function createAliasExpression(range, content, offset) {
    return createSimpleExpression(content, false, getInnerRange(range, offset, content.length));
  }
  function createForLoopParams({value, key, index}) {
    const params = [];
    if (value) {
      params.push(value);
    }
    if (key) {
      if (!value) {
        params.push(createSimpleExpression(`_`, false));
      }
      params.push(key);
    }
    if (index) {
      if (!key) {
        if (!value) {
          params.push(createSimpleExpression(`_`, false));
        }
        params.push(createSimpleExpression(`__`, false));
      }
      params.push(index);
    }
    return params;
  }
  var defaultFallback = createSimpleExpression(`undefined`, false);
  var trackSlotScopes = (node, context) => {
    if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
      const vSlot = findDir(node, "slot");
      if (vSlot) {
        const slotProps = vSlot.exp;
        if (context.prefixIdentifiers) {
          slotProps && context.addIdentifiers(slotProps);
        }
        context.scopes.vSlot++;
        return () => {
          if (context.prefixIdentifiers) {
            slotProps && context.removeIdentifiers(slotProps);
          }
          context.scopes.vSlot--;
        };
      }
    }
  };
  var trackVForSlotScopes = (node, context) => {
    let vFor;
    if (isTemplateNode(node) && node.props.some(isVSlot) && (vFor = findDir(node, "for"))) {
      const result = vFor.parseResult = parseForExpression(vFor.exp, context);
      if (result) {
        const {value, key, index} = result;
        const {addIdentifiers, removeIdentifiers} = context;
        value && addIdentifiers(value);
        key && addIdentifiers(key);
        index && addIdentifiers(index);
        return () => {
          value && removeIdentifiers(value);
          key && removeIdentifiers(key);
          index && removeIdentifiers(index);
        };
      }
    }
  };
  var buildClientSlotFn = (props, children, loc) => createFunctionExpression(props, children, false, true, children.length ? children[0].loc : loc);
  function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
    context.helper(WITH_CTX);
    const {children, loc} = node;
    const slotsProperties = [];
    const dynamicSlots = [];
    const buildDefaultSlotProperty = (props, children2) => createObjectProperty(`default`, buildSlotFn(props, children2, loc));
    let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
    if (!context.ssr && context.prefixIdentifiers) {
      hasDynamicSlots = hasScopeRef(node, context.identifiers);
    }
    const onComponentSlot = findDir(node, "slot", true);
    if (onComponentSlot) {
      const {arg, exp} = onComponentSlot;
      if (arg && !isStaticExp(arg)) {
        hasDynamicSlots = true;
      }
      slotsProperties.push(createObjectProperty(arg || createSimpleExpression("default", true), buildSlotFn(exp, children, loc)));
    }
    let hasTemplateSlots = false;
    let hasNamedDefaultSlot = false;
    const implicitDefaultChildren = [];
    const seenSlotNames = new Set();
    for (let i = 0; i < children.length; i++) {
      const slotElement = children[i];
      let slotDir;
      if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
        if (slotElement.type !== 3) {
          implicitDefaultChildren.push(slotElement);
        }
        continue;
      }
      if (onComponentSlot) {
        context.onError(createCompilerError(36, slotDir.loc));
        break;
      }
      hasTemplateSlots = true;
      const {children: slotChildren, loc: slotLoc} = slotElement;
      const {arg: slotName = createSimpleExpression(`default`, true), exp: slotProps, loc: dirLoc} = slotDir;
      let staticSlotName;
      if (isStaticExp(slotName)) {
        staticSlotName = slotName ? slotName.content : `default`;
      } else {
        hasDynamicSlots = true;
      }
      const slotFunction = buildSlotFn(slotProps, slotChildren, slotLoc);
      let vIf;
      let vElse;
      let vFor;
      if (vIf = findDir(slotElement, "if")) {
        hasDynamicSlots = true;
        dynamicSlots.push(createConditionalExpression(vIf.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback));
      } else if (vElse = findDir(slotElement, /^else(-if)?$/, true)) {
        let j = i;
        let prev;
        while (j--) {
          prev = children[j];
          if (prev.type !== 3) {
            break;
          }
        }
        if (prev && isTemplateNode(prev) && findDir(prev, "if")) {
          children.splice(i, 1);
          i--;
          let conditional = dynamicSlots[dynamicSlots.length - 1];
          while (conditional.alternate.type === 19) {
            conditional = conditional.alternate;
          }
          conditional.alternate = vElse.exp ? createConditionalExpression(vElse.exp, buildDynamicSlot(slotName, slotFunction), defaultFallback) : buildDynamicSlot(slotName, slotFunction);
        } else {
          context.onError(createCompilerError(29, vElse.loc));
        }
      } else if (vFor = findDir(slotElement, "for")) {
        hasDynamicSlots = true;
        const parseResult = vFor.parseResult || parseForExpression(vFor.exp, context);
        if (parseResult) {
          dynamicSlots.push(createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(createForLoopParams(parseResult), buildDynamicSlot(slotName, slotFunction), true)
          ]));
        } else {
          context.onError(createCompilerError(31, vFor.loc));
        }
      } else {
        if (staticSlotName) {
          if (seenSlotNames.has(staticSlotName)) {
            context.onError(createCompilerError(37, dirLoc));
            continue;
          }
          seenSlotNames.add(staticSlotName);
          if (staticSlotName === "default") {
            hasNamedDefaultSlot = true;
          }
        }
        slotsProperties.push(createObjectProperty(slotName, slotFunction));
      }
    }
    if (!onComponentSlot) {
      if (!hasTemplateSlots) {
        slotsProperties.push(buildDefaultSlotProperty(void 0, children));
      } else if (implicitDefaultChildren.length) {
        if (hasNamedDefaultSlot) {
          context.onError(createCompilerError(38, implicitDefaultChildren[0].loc));
        } else {
          slotsProperties.push(buildDefaultSlotProperty(void 0, implicitDefaultChildren));
        }
      }
    }
    const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
    let slots = createObjectExpression(slotsProperties.concat(createObjectProperty(`_`, createSimpleExpression(slotFlag + ` /* ${shared.slotFlagsText[slotFlag]} */`, false))), loc);
    if (dynamicSlots.length) {
      slots = createCallExpression(context.helper(CREATE_SLOTS), [
        slots,
        createArrayExpression(dynamicSlots)
      ]);
    }
    return {
      slots,
      hasDynamicSlots
    };
  }
  function buildDynamicSlot(name, fn) {
    return createObjectExpression([
      createObjectProperty(`name`, name),
      createObjectProperty(`fn`, fn)
    ]);
  }
  function hasForwardedSlots(children) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 1) {
        if (child.tagType === 2 || child.tagType === 0 && hasForwardedSlots(child.children)) {
          return true;
        }
      }
    }
    return false;
  }
  var directiveImportMap = new WeakMap();
  var transformElement = (node, context) => {
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    return function postTransformElement() {
      const {tag, props} = node;
      const isComponent = node.tagType === 1;
      const vnodeTag = isComponent ? resolveComponentType(node, context) : `"${tag}"`;
      const isDynamicComponent = shared.isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
      let vnodeProps;
      let vnodeChildren;
      let vnodePatchFlag;
      let patchFlag = 0;
      let vnodeDynamicProps;
      let dynamicPropNames;
      let vnodeDirectives;
      let shouldUseBlock = isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent && (tag === "svg" || tag === "foreignObject" || findProp(node, "key", true));
      if (props.length > 0) {
        const propsBuildResult = buildProps(node, context);
        vnodeProps = propsBuildResult.props;
        patchFlag = propsBuildResult.patchFlag;
        dynamicPropNames = propsBuildResult.dynamicPropNames;
        const directives = propsBuildResult.directives;
        vnodeDirectives = directives && directives.length ? createArrayExpression(directives.map((dir) => buildDirectiveArgs(dir, context))) : void 0;
      }
      if (node.children.length > 0) {
        if (vnodeTag === KEEP_ALIVE) {
          shouldUseBlock = true;
          patchFlag |= 1024;
          if (node.children.length > 1) {
            context.onError(createCompilerError(44, {
              start: node.children[0].loc.start,
              end: node.children[node.children.length - 1].loc.end,
              source: ""
            }));
          }
        }
        const shouldBuildAsSlots = isComponent && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE;
        if (shouldBuildAsSlots) {
          const {slots, hasDynamicSlots} = buildSlots(node, context);
          vnodeChildren = slots;
          if (hasDynamicSlots) {
            patchFlag |= 1024;
          }
        } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
          const child = node.children[0];
          const type = child.type;
          const hasDynamicTextChild = type === 5 || type === 8;
          if (hasDynamicTextChild && getConstantType(child, context) === 0) {
            patchFlag |= 1;
          }
          if (hasDynamicTextChild || type === 2) {
            vnodeChildren = child;
          } else {
            vnodeChildren = node.children;
          }
        } else {
          vnodeChildren = node.children;
        }
      }
      if (patchFlag !== 0) {
        {
          if (patchFlag < 0) {
            vnodePatchFlag = patchFlag + ` /* ${shared.PatchFlagNames[patchFlag]} */`;
          } else {
            const flagNames = Object.keys(shared.PatchFlagNames).map(Number).filter((n) => n > 0 && patchFlag & n).map((n) => shared.PatchFlagNames[n]).join(`, `);
            vnodePatchFlag = patchFlag + ` /* ${flagNames} */`;
          }
        }
        if (dynamicPropNames && dynamicPropNames.length) {
          vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
        }
      }
      node.codegenNode = createVNodeCall(context, vnodeTag, vnodeProps, vnodeChildren, vnodePatchFlag, vnodeDynamicProps, vnodeDirectives, !!shouldUseBlock, false, node.loc);
    };
  };
  function resolveComponentType(node, context, ssr = false) {
    const {tag} = node;
    const isProp = node.tag === "component" ? findProp(node, "is") : findDir(node, "is");
    if (isProp) {
      const exp = isProp.type === 6 ? isProp.value && createSimpleExpression(isProp.value.content, true) : isProp.exp;
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    }
    const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
    if (builtIn) {
      if (!ssr)
        context.helper(builtIn);
      return builtIn;
    }
    {
      const fromSetup = resolveSetupReference(tag, context);
      if (fromSetup) {
        return fromSetup;
      }
    }
    if (context.selfName) {
      if (shared.capitalize(shared.camelize(tag)) === context.selfName) {
        context.helper(RESOLVE_COMPONENT);
        context.components.add(`_self`);
        return toValidAssetId(`_self`, `component`);
      }
    }
    context.helper(RESOLVE_COMPONENT);
    context.components.add(tag);
    return toValidAssetId(tag, `component`);
  }
  function resolveSetupReference(name, context) {
    const bindings = context.bindingMetadata;
    if (!bindings) {
      return;
    }
    const camelName = shared.camelize(name);
    const PascalName = shared.capitalize(camelName);
    const checkType = (type) => {
      if (bindings[name] === type) {
        return name;
      }
      if (bindings[camelName] === type) {
        return camelName;
      }
      if (bindings[PascalName] === type) {
        return PascalName;
      }
    };
    const fromConst = checkType("setup-const");
    if (fromConst) {
      return context.inline ? fromConst : `$setup[${JSON.stringify(fromConst)}]`;
    }
    const fromMaybeRef = checkType("setup-let") || checkType("setup-ref") || checkType("setup-maybe-ref");
    if (fromMaybeRef) {
      return context.inline ? `${context.helperString(UNREF)}(${fromMaybeRef})` : `$setup[${JSON.stringify(fromMaybeRef)}]`;
    }
  }
  function buildProps(node, context, props = node.props, ssr = false) {
    const {tag, loc: elementLoc} = node;
    const isComponent = node.tagType === 1;
    let properties = [];
    const mergeArgs = [];
    const runtimeDirectives = [];
    let patchFlag = 0;
    let hasRef = false;
    let hasClassBinding = false;
    let hasStyleBinding = false;
    let hasHydrationEventBinding = false;
    let hasDynamicKeys = false;
    let hasVnodeHook = false;
    const dynamicPropNames = [];
    const analyzePatchFlag = ({key, value}) => {
      if (isStaticExp(key)) {
        const name = key.content;
        const isEventHandler = shared.isOn(name);
        if (!isComponent && isEventHandler && name.toLowerCase() !== "onclick" && name !== "onUpdate:modelValue" && !shared.isReservedProp(name)) {
          hasHydrationEventBinding = true;
        }
        if (isEventHandler && shared.isReservedProp(name)) {
          hasVnodeHook = true;
        }
        if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
          return;
        }
        if (name === "ref") {
          hasRef = true;
        } else if (name === "class" && !isComponent) {
          hasClassBinding = true;
        } else if (name === "style" && !isComponent) {
          hasStyleBinding = true;
        } else if (name !== "key" && !dynamicPropNames.includes(name)) {
          dynamicPropNames.push(name);
        }
      } else {
        hasDynamicKeys = true;
      }
    };
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      if (prop.type === 6) {
        const {loc, name, value} = prop;
        let isStatic = true;
        if (name === "ref") {
          hasRef = true;
          if (context.inline) {
            isStatic = false;
          }
        }
        if (name === "is" && tag === "component") {
          continue;
        }
        properties.push(createObjectProperty(createSimpleExpression(name, true, getInnerRange(loc, 0, name.length)), createSimpleExpression(value ? value.content : "", isStatic, value ? value.loc : loc)));
      } else {
        const {name, arg, exp, loc} = prop;
        const isBind = name === "bind";
        const isOn = name === "on";
        if (name === "slot") {
          if (!isComponent) {
            context.onError(createCompilerError(39, loc));
          }
          continue;
        }
        if (name === "once") {
          continue;
        }
        if (name === "is" || isBind && tag === "component" && isBindKey(arg, "is")) {
          continue;
        }
        if (isOn && ssr) {
          continue;
        }
        if (!arg && (isBind || isOn)) {
          hasDynamicKeys = true;
          if (exp) {
            if (properties.length) {
              mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
              properties = [];
            }
            if (isBind) {
              mergeArgs.push(exp);
            } else {
              mergeArgs.push({
                type: 14,
                loc,
                callee: context.helper(TO_HANDLERS),
                arguments: [exp]
              });
            }
          } else {
            context.onError(createCompilerError(isBind ? 33 : 34, loc));
          }
          continue;
        }
        const directiveTransform = context.directiveTransforms[name];
        if (directiveTransform) {
          const {props: props2, needRuntime} = directiveTransform(prop, node, context);
          !ssr && props2.forEach(analyzePatchFlag);
          properties.push(...props2);
          if (needRuntime) {
            runtimeDirectives.push(prop);
            if (shared.isSymbol(needRuntime)) {
              directiveImportMap.set(prop, needRuntime);
            }
          }
        } else {
          runtimeDirectives.push(prop);
        }
      }
    }
    let propsExpression = void 0;
    if (mergeArgs.length) {
      if (properties.length) {
        mergeArgs.push(createObjectExpression(dedupeProperties(properties), elementLoc));
      }
      if (mergeArgs.length > 1) {
        propsExpression = createCallExpression(context.helper(MERGE_PROPS), mergeArgs, elementLoc);
      } else {
        propsExpression = mergeArgs[0];
      }
    } else if (properties.length) {
      propsExpression = createObjectExpression(dedupeProperties(properties), elementLoc);
    }
    if (hasDynamicKeys) {
      patchFlag |= 16;
    } else {
      if (hasClassBinding) {
        patchFlag |= 2;
      }
      if (hasStyleBinding) {
        patchFlag |= 4;
      }
      if (dynamicPropNames.length) {
        patchFlag |= 8;
      }
      if (hasHydrationEventBinding) {
        patchFlag |= 32;
      }
    }
    if ((patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
      patchFlag |= 512;
    }
    return {
      props: propsExpression,
      directives: runtimeDirectives,
      patchFlag,
      dynamicPropNames
    };
  }
  function dedupeProperties(properties) {
    const knownProps = new Map();
    const deduped = [];
    for (let i = 0; i < properties.length; i++) {
      const prop = properties[i];
      if (prop.key.type === 8 || !prop.key.isStatic) {
        deduped.push(prop);
        continue;
      }
      const name = prop.key.content;
      const existing = knownProps.get(name);
      if (existing) {
        if (name === "style" || name === "class" || name.startsWith("on")) {
          mergeAsArray(existing, prop);
        }
      } else {
        knownProps.set(name, prop);
        deduped.push(prop);
      }
    }
    return deduped;
  }
  function mergeAsArray(existing, incoming) {
    if (existing.value.type === 17) {
      existing.value.elements.push(incoming.value);
    } else {
      existing.value = createArrayExpression([existing.value, incoming.value], existing.loc);
    }
  }
  function buildDirectiveArgs(dir, context) {
    const dirArgs = [];
    const runtime = directiveImportMap.get(dir);
    if (runtime) {
      dirArgs.push(context.helperString(runtime));
    } else {
      const fromSetup = resolveSetupReference(dir.name, context);
      if (fromSetup) {
        dirArgs.push(fromSetup);
      } else {
        context.helper(RESOLVE_DIRECTIVE);
        context.directives.add(dir.name);
        dirArgs.push(toValidAssetId(dir.name, `directive`));
      }
    }
    const {loc} = dir;
    if (dir.exp)
      dirArgs.push(dir.exp);
    if (dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(dir.arg);
    }
    if (Object.keys(dir.modifiers).length) {
      if (!dir.arg) {
        if (!dir.exp) {
          dirArgs.push(`void 0`);
        }
        dirArgs.push(`void 0`);
      }
      const trueExpression = createSimpleExpression(`true`, false, loc);
      dirArgs.push(createObjectExpression(dir.modifiers.map((modifier) => createObjectProperty(modifier, trueExpression)), loc));
    }
    return createArrayExpression(dirArgs, dir.loc);
  }
  function stringifyDynamicPropNames(props) {
    let propsNamesString = `[`;
    for (let i = 0, l = props.length; i < l; i++) {
      propsNamesString += JSON.stringify(props[i]);
      if (i < l - 1)
        propsNamesString += ", ";
    }
    return propsNamesString + `]`;
  }
  Object.freeze({});
  Object.freeze([]);
  var cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var transformSlotOutlet = (node, context) => {
    if (isSlotOutlet(node)) {
      const {children, loc} = node;
      const {slotName, slotProps} = processSlotOutlet(node, context);
      const slotArgs = [
        context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
        slotName
      ];
      if (slotProps) {
        slotArgs.push(slotProps);
      }
      if (children.length) {
        if (!slotProps) {
          slotArgs.push(`{}`);
        }
        slotArgs.push(createFunctionExpression([], children, false, false, loc));
      }
      node.codegenNode = createCallExpression(context.helper(RENDER_SLOT), slotArgs, loc);
    }
  };
  function processSlotOutlet(node, context) {
    let slotName = `"default"`;
    let slotProps = void 0;
    const nonNameProps = [];
    for (let i = 0; i < node.props.length; i++) {
      const p = node.props[i];
      if (p.type === 6) {
        if (p.value) {
          if (p.name === "name") {
            slotName = JSON.stringify(p.value.content);
          } else {
            p.name = camelize(p.name);
            nonNameProps.push(p);
          }
        }
      } else {
        if (p.name === "bind" && isBindKey(p.arg, "name")) {
          if (p.exp)
            slotName = p.exp;
        } else {
          if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
            p.arg.content = camelize(p.arg.content);
          }
          nonNameProps.push(p);
        }
      }
    }
    if (nonNameProps.length > 0) {
      const {props, directives} = buildProps(node, context, nonNameProps);
      slotProps = props;
      if (directives.length) {
        context.onError(createCompilerError(35, directives[0].loc));
      }
    }
    return {
      slotName,
      slotProps
    };
  }
  var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^\s*function(?:\s+[\w$]+)?\s*\(/;
  var transformOn = (dir, node, context, augmentor) => {
    const {loc, modifiers, arg} = dir;
    if (!dir.exp && !modifiers.length) {
      context.onError(createCompilerError(34, loc));
    }
    let eventName;
    if (arg.type === 4) {
      if (arg.isStatic) {
        const rawName = arg.content;
        eventName = createSimpleExpression(shared.toHandlerKey(shared.camelize(rawName)), true, arg.loc);
      } else {
        eventName = createCompoundExpression([
          `${context.helperString(TO_HANDLER_KEY)}(`,
          arg,
          `)`
        ]);
      }
    } else {
      eventName = arg;
      eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
      eventName.children.push(`)`);
    }
    let exp = dir.exp;
    if (exp && !exp.content.trim()) {
      exp = void 0;
    }
    let shouldCache = context.cacheHandlers && !exp;
    if (exp) {
      const isMemberExp = isMemberExpression(exp.content);
      const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
      const hasMultipleStatements = exp.content.includes(`;`);
      if (context.prefixIdentifiers) {
        isInlineStatement && context.addIdentifiers(`$event`);
        exp = dir.exp = processExpression(exp, context, false, hasMultipleStatements);
        isInlineStatement && context.removeIdentifiers(`$event`);
        shouldCache = context.cacheHandlers && !(exp.type === 4 && exp.constType > 0) && !(isMemberExp && node.tagType === 1) && !hasScopeRef(exp, context.identifiers);
        if (shouldCache && isMemberExp) {
          if (exp.type === 4) {
            exp.content = `${exp.content} && ${exp.content}(...args)`;
          } else {
            exp.children = [...exp.children, ` && `, ...exp.children, `(...args)`];
          }
        }
      }
      if (isInlineStatement || shouldCache && isMemberExp) {
        exp = createCompoundExpression([
          `${isInlineStatement ? context.isTS ? `($event: any)` : `$event` : `${context.isTS ? `
//@ts-ignore
` : ``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
          exp,
          hasMultipleStatements ? `}` : `)`
        ]);
      }
    }
    let ret = {
      props: [
        createObjectProperty(eventName, exp || createSimpleExpression(`() => {}`, false, loc))
      ]
    };
    if (augmentor) {
      ret = augmentor(ret);
    }
    if (shouldCache) {
      ret.props[0].value = context.cache(ret.props[0].value);
    }
    return ret;
  };
  var transformBind = (dir, node, context) => {
    const {exp, modifiers, loc} = dir;
    const arg = dir.arg;
    if (arg.type !== 4) {
      arg.children.unshift(`(`);
      arg.children.push(`) || ""`);
    } else if (!arg.isStatic) {
      arg.content = `${arg.content} || ""`;
    }
    if (modifiers.includes("camel")) {
      if (arg.type === 4) {
        if (arg.isStatic) {
          arg.content = shared.camelize(arg.content);
        } else {
          arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
        }
      } else {
        arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
        arg.children.push(`)`);
      }
    }
    if (!exp || exp.type === 4 && !exp.content.trim()) {
      context.onError(createCompilerError(33, loc));
      return {
        props: [createObjectProperty(arg, createSimpleExpression("", true, loc))]
      };
    }
    return {
      props: [createObjectProperty(arg, exp)]
    };
  };
  var transformText = (node, context) => {
    if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
      return () => {
        const children = node.children;
        let currentContainer = void 0;
        let hasText = false;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText(child)) {
            hasText = true;
            for (let j = i + 1; j < children.length; j++) {
              const next = children[j];
              if (isText(next)) {
                if (!currentContainer) {
                  currentContainer = children[i] = {
                    type: 8,
                    loc: child.loc,
                    children: [child]
                  };
                }
                currentContainer.children.push(` + `, next);
                children.splice(j, 1);
                j--;
              } else {
                currentContainer = void 0;
                break;
              }
            }
          }
        }
        if (!hasText || children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0)) {
          return;
        }
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (isText(child) || child.type === 8) {
            const callArgs = [];
            if (child.type !== 2 || child.content !== " ") {
              callArgs.push(child);
            }
            if (!context.ssr && getConstantType(child, context) === 0) {
              callArgs.push(1 + ` /* ${shared.PatchFlagNames[1]} */`);
            }
            children[i] = {
              type: 12,
              content: child,
              loc: child.loc,
              codegenNode: createCallExpression(context.helper(CREATE_TEXT), callArgs)
            };
          }
        }
      };
    }
  };
  var seen = new WeakSet();
  var transformOnce = (node, context) => {
    if (node.type === 1 && findDir(node, "once", true)) {
      if (seen.has(node)) {
        return;
      }
      seen.add(node);
      context.helper(SET_BLOCK_TRACKING);
      return () => {
        const cur = context.currentNode;
        if (cur.codegenNode) {
          cur.codegenNode = context.cache(cur.codegenNode, true);
        }
      };
    }
  };
  var transformModel = (dir, node, context) => {
    const {exp, arg} = dir;
    if (!exp) {
      context.onError(createCompilerError(40, dir.loc));
      return createTransformProps();
    }
    const rawExp = exp.loc.source;
    const expString = exp.type === 4 ? exp.content : rawExp;
    const bindingType = context.bindingMetadata[rawExp];
    const maybeRef = context.inline && bindingType && bindingType !== "setup-const";
    if (!isMemberExpression(expString) && !maybeRef) {
      context.onError(createCompilerError(41, exp.loc));
      return createTransformProps();
    }
    if (context.prefixIdentifiers && isSimpleIdentifier(expString) && context.identifiers[expString]) {
      context.onError(createCompilerError(42, exp.loc));
      return createTransformProps();
    }
    const propName = arg ? arg : createSimpleExpression("modelValue", true);
    const eventName = arg ? isStaticExp(arg) ? `onUpdate:${arg.content}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
    let assignmentExp;
    const eventArg = context.isTS ? `($event: any)` : `$event`;
    if (maybeRef) {
      if (bindingType === "setup-ref") {
        assignmentExp = createCompoundExpression([
          `${eventArg} => (`,
          createSimpleExpression(rawExp, false, exp.loc),
          `.value = $event)`
        ]);
      } else {
        const altAssignment = bindingType === "setup-let" ? `${rawExp} = $event` : `null`;
        assignmentExp = createCompoundExpression([
          `${eventArg} => (${context.helperString(IS_REF)}(${rawExp}) ? `,
          createSimpleExpression(rawExp, false, exp.loc),
          `.value = $event : ${altAssignment})`
        ]);
      }
    } else {
      assignmentExp = createCompoundExpression([
        `${eventArg} => (`,
        exp,
        ` = $event)`
      ]);
    }
    const props = [
      createObjectProperty(propName, dir.exp),
      createObjectProperty(eventName, assignmentExp)
    ];
    if (context.prefixIdentifiers && context.cacheHandlers && !hasScopeRef(exp, context.identifiers)) {
      props[1].value = context.cache(props[1].value);
    }
    if (dir.modifiers.length && node.tagType === 1) {
      const modifiers = dir.modifiers.map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
      const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
      props.push(createObjectProperty(modifiersKey, createSimpleExpression(`{ ${modifiers} }`, false, dir.loc, 2)));
    }
    return createTransformProps(props);
  };
  function createTransformProps(props = []) {
    return {props};
  }
  function getBaseTransformPreset(prefixIdentifiers) {
    return [
      [
        transformOnce,
        transformIf,
        transformFor,
        ...prefixIdentifiers ? [
          trackVForSlotScopes,
          transformExpression
        ] : [],
        transformSlotOutlet,
        transformElement,
        trackSlotScopes,
        transformText
      ],
      {
        on: transformOn,
        bind: transformBind,
        model: transformModel
      }
    ];
  }
  function baseCompile(template, options = {}) {
    const onError = options.onError || defaultOnError;
    const isModuleMode = options.mode === "module";
    const prefixIdentifiers = options.prefixIdentifiers === true || isModuleMode;
    if (!prefixIdentifiers && options.cacheHandlers) {
      onError(createCompilerError(47));
    }
    if (options.scopeId && !isModuleMode) {
      onError(createCompilerError(48));
    }
    const ast = shared.isString(template) ? baseParse(template, options) : template;
    const [nodeTransforms, directiveTransforms] = getBaseTransformPreset(prefixIdentifiers);
    transform(ast, shared.extend({}, options, {
      prefixIdentifiers,
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: shared.extend({}, directiveTransforms, options.directiveTransforms || {})
    }));
    return generate(ast, shared.extend({}, options, {
      prefixIdentifiers
    }));
  }
  var noopDirectiveTransform = () => ({props: []});
  exports2.generateCodeFrame = shared.generateCodeFrame;
  exports2.BASE_TRANSITION = BASE_TRANSITION;
  exports2.CAMELIZE = CAMELIZE;
  exports2.CAPITALIZE = CAPITALIZE;
  exports2.CREATE_BLOCK = CREATE_BLOCK;
  exports2.CREATE_COMMENT = CREATE_COMMENT;
  exports2.CREATE_SLOTS = CREATE_SLOTS;
  exports2.CREATE_STATIC = CREATE_STATIC;
  exports2.CREATE_TEXT = CREATE_TEXT;
  exports2.CREATE_VNODE = CREATE_VNODE;
  exports2.FRAGMENT = FRAGMENT;
  exports2.IS_REF = IS_REF;
  exports2.KEEP_ALIVE = KEEP_ALIVE;
  exports2.MERGE_PROPS = MERGE_PROPS;
  exports2.OPEN_BLOCK = OPEN_BLOCK;
  exports2.POP_SCOPE_ID = POP_SCOPE_ID;
  exports2.PUSH_SCOPE_ID = PUSH_SCOPE_ID;
  exports2.RENDER_LIST = RENDER_LIST;
  exports2.RENDER_SLOT = RENDER_SLOT;
  exports2.RESOLVE_COMPONENT = RESOLVE_COMPONENT;
  exports2.RESOLVE_DIRECTIVE = RESOLVE_DIRECTIVE;
  exports2.RESOLVE_DYNAMIC_COMPONENT = RESOLVE_DYNAMIC_COMPONENT;
  exports2.SET_BLOCK_TRACKING = SET_BLOCK_TRACKING;
  exports2.SUSPENSE = SUSPENSE;
  exports2.TELEPORT = TELEPORT;
  exports2.TO_DISPLAY_STRING = TO_DISPLAY_STRING;
  exports2.TO_HANDLERS = TO_HANDLERS;
  exports2.TO_HANDLER_KEY = TO_HANDLER_KEY;
  exports2.UNREF = UNREF;
  exports2.WITH_CTX = WITH_CTX;
  exports2.WITH_DIRECTIVES = WITH_DIRECTIVES;
  exports2.WITH_SCOPE_ID = WITH_SCOPE_ID;
  exports2.advancePositionWithClone = advancePositionWithClone;
  exports2.advancePositionWithMutation = advancePositionWithMutation;
  exports2.assert = assert;
  exports2.baseCompile = baseCompile;
  exports2.baseParse = baseParse;
  exports2.buildProps = buildProps;
  exports2.buildSlots = buildSlots;
  exports2.createArrayExpression = createArrayExpression;
  exports2.createAssignmentExpression = createAssignmentExpression;
  exports2.createBlockStatement = createBlockStatement;
  exports2.createCacheExpression = createCacheExpression;
  exports2.createCallExpression = createCallExpression;
  exports2.createCompilerError = createCompilerError;
  exports2.createCompoundExpression = createCompoundExpression;
  exports2.createConditionalExpression = createConditionalExpression;
  exports2.createForLoopParams = createForLoopParams;
  exports2.createFunctionExpression = createFunctionExpression;
  exports2.createIfStatement = createIfStatement;
  exports2.createInterpolation = createInterpolation;
  exports2.createObjectExpression = createObjectExpression;
  exports2.createObjectProperty = createObjectProperty;
  exports2.createReturnStatement = createReturnStatement;
  exports2.createRoot = createRoot;
  exports2.createSequenceExpression = createSequenceExpression;
  exports2.createSimpleExpression = createSimpleExpression;
  exports2.createStructuralDirectiveTransform = createStructuralDirectiveTransform;
  exports2.createTemplateLiteral = createTemplateLiteral;
  exports2.createTransformContext = createTransformContext;
  exports2.createVNodeCall = createVNodeCall;
  exports2.findDir = findDir;
  exports2.findProp = findProp;
  exports2.generate = generate;
  exports2.getBaseTransformPreset = getBaseTransformPreset;
  exports2.getInnerRange = getInnerRange;
  exports2.hasDynamicKeyVBind = hasDynamicKeyVBind;
  exports2.hasScopeRef = hasScopeRef;
  exports2.helperNameMap = helperNameMap;
  exports2.injectProp = injectProp;
  exports2.isBindKey = isBindKey;
  exports2.isBuiltInType = isBuiltInType;
  exports2.isCoreComponent = isCoreComponent;
  exports2.isMemberExpression = isMemberExpression;
  exports2.isSimpleIdentifier = isSimpleIdentifier;
  exports2.isSlotOutlet = isSlotOutlet;
  exports2.isStaticExp = isStaticExp;
  exports2.isTemplateNode = isTemplateNode;
  exports2.isText = isText;
  exports2.isVSlot = isVSlot;
  exports2.locStub = locStub;
  exports2.noopDirectiveTransform = noopDirectiveTransform;
  exports2.processExpression = processExpression;
  exports2.processFor = processFor;
  exports2.processIf = processIf;
  exports2.processSlotOutlet = processSlotOutlet;
  exports2.registerRuntimeHelpers = registerRuntimeHelpers;
  exports2.resolveComponentType = resolveComponentType;
  exports2.toValidAssetId = toValidAssetId;
  exports2.trackSlotScopes = trackSlotScopes;
  exports2.trackVForSlotScopes = trackVForSlotScopes;
  exports2.transform = transform;
  exports2.transformBind = transformBind;
  exports2.transformElement = transformElement;
  exports2.transformExpression = transformExpression;
  exports2.transformModel = transformModel;
  exports2.transformOn = transformOn;
  exports2.traverseNode = traverseNode;
});

// node_modules/@vue/compiler-core/index.js
var require_compiler_core = __commonJS((exports2, module2) => {
  "use strict";
  if (process.env.NODE_ENV === "production") {
    module2.exports = require_compiler_core_cjs_prod();
  } else {
    module2.exports = require_compiler_core_cjs();
  }
});

// src/index.ts
var import_compiler_core = __toModule(require_compiler_core());
console.log(import_compiler_core.NodeTypes.ELEMENT);
