// Source hash: 33b5220d26be2ad53ce68484968fb534f4b30e903214d53708f3403cf579cf1d
import { createRequire as createRequire2 } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = /* @__PURE__ */ createRequire2(import.meta.url);

// node_modules/zx/build/esblib.cjs
var require_esblib = __commonJS((exports, module) => {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod));
  var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
  var __typeError = (msg) => {
    throw TypeError(msg);
  };
  var __defNormalProp = (obj, key, value) => (key in obj) ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp2.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __await = function(promise, isYieldStar) {
    this[0] = promise;
    this[1] = isYieldStar;
  };
  var __asyncGenerator = (__this, __arguments, generator) => {
    var resume = (k2, v2, yes, no) => {
      try {
        var x2 = generator[k2](v2), isAwait = (v2 = x2.value) instanceof __await, done = x2.done;
        Promise.resolve(isAwait ? v2[0] : v2).then((y) => isAwait ? resume(k2 === "return" ? k2 : "next", v2[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
      } catch (e) {
        no(e);
      }
    }, method = (k2) => it[k2] = (x2) => new Promise((yes, no) => resume(k2, x2, yes, no)), it = {};
    return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
  };
  var __yieldStar = (value) => {
    var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
    if (obj == null) {
      obj = value[__knownSymbol("iterator")]();
      method = (k2) => it[k2] = (x2) => obj[k2](x2);
    } else {
      obj = obj.call(value);
      method = (k2) => it[k2] = (v2) => {
        if (isAwait) {
          isAwait = false;
          if (k2 === "throw")
            throw v2;
          return v2;
        }
        isAwait = true;
        return {
          done: false,
          value: new __await(new Promise((resolve) => {
            var x2 = obj[k2](v2);
            if (!(x2 instanceof Object))
              __typeError("Object expected");
            resolve(x2);
          }), 1)
        };
      };
    }
    return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x2) => {
      throw x2;
    }, "return" in obj && method("return"), it;
  };
  var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
  var __pow = Math.pow;
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  var __commonJS2 = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
  };
  var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
  var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
  var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
  var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
  module.exports = {
    __create: __create2,
    __defProp: __defProp2,
    __getOwnPropDesc,
    __getOwnPropNames: __getOwnPropNames2,
    __getProtoOf: __getProtoOf2,
    __hasOwnProp: __hasOwnProp2,
    __export,
    __copyProps,
    __toESM: __toESM2,
    __toCommonJS,
    __async,
    __getOwnPropSymbols,
    __propIsEnum,
    __knownSymbol,
    __typeError,
    __defNormalProp,
    __spreadValues,
    __await,
    __asyncGenerator,
    __yieldStar,
    __forAwait,
    __pow,
    __reExport,
    __defProps,
    __getOwnPropDescs,
    __spreadProps,
    __commonJS: __commonJS2,
    __esm,
    __accessCheck,
    __privateGet,
    __privateAdd,
    __privateSet
  };
});

// node_modules/zx/build/vendor-core.cjs
var require_vendor_core = __commonJS((exports, module) => {
  var {
    __create: __create2,
    __spreadValues,
    __spreadProps,
    __commonJS: __commonJS2,
    __export,
    __toESM: __toESM2,
    __toCommonJS,
    __async
  } = require_esblib();
  var require_posix = __commonJS2({
    "node_modules/isexe/dist/cjs/posix.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.sync = exports2.isexe = undefined;
      var fs_1 = __require("fs");
      var promises_1 = __require("fs").promises;
      var isexe = (_0, ..._1) => __async(exports2, [_0, ..._1], function* (path2, options = {}) {
        const { ignoreErrors = false } = options;
        try {
          return checkStat(yield (0, promises_1.stat)(path2), options);
        } catch (e) {
          const er = e;
          if (ignoreErrors || er.code === "EACCES")
            return false;
          throw er;
        }
      });
      exports2.isexe = isexe;
      var sync = (path2, options = {}) => {
        const { ignoreErrors = false } = options;
        try {
          return checkStat((0, fs_1.statSync)(path2), options);
        } catch (e) {
          const er = e;
          if (ignoreErrors || er.code === "EACCES")
            return false;
          throw er;
        }
      };
      exports2.sync = sync;
      var checkStat = (stat, options) => stat.isFile() && checkMode(stat, options);
      var checkMode = (stat, options) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const myUid = (_b = options.uid) != null ? _b : (_a = process.getuid) == null ? undefined : _a.call(process);
        const myGroups = (_e = (_d = options.groups) != null ? _d : (_c = process.getgroups) == null ? undefined : _c.call(process)) != null ? _e : [];
        const myGid = (_h = (_g = options.gid) != null ? _g : (_f = process.getgid) == null ? undefined : _f.call(process)) != null ? _h : myGroups[0];
        if (myUid === undefined || myGid === undefined) {
          throw new Error("cannot get uid or gid");
        }
        const groups = /* @__PURE__ */ new Set([myGid, ...myGroups]);
        const mod = stat.mode;
        const uid = stat.uid;
        const gid = stat.gid;
        const u = parseInt("100", 8);
        const g2 = parseInt("010", 8);
        const o = parseInt("001", 8);
        const ug = u | g2;
        return !!(mod & o || mod & g2 && groups.has(gid) || mod & u && uid === myUid || mod & ug && myUid === 0);
      };
    }
  });
  var require_win32 = __commonJS2({
    "node_modules/isexe/dist/cjs/win32.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.sync = exports2.isexe = undefined;
      var fs_1 = __require("fs");
      var promises_1 = __require("fs").promises;
      var isexe = (_0, ..._1) => __async(exports2, [_0, ..._1], function* (path2, options = {}) {
        const { ignoreErrors = false } = options;
        try {
          return checkStat(yield (0, promises_1.stat)(path2), path2, options);
        } catch (e) {
          const er = e;
          if (ignoreErrors || er.code === "EACCES")
            return false;
          throw er;
        }
      });
      exports2.isexe = isexe;
      var sync = (path2, options = {}) => {
        const { ignoreErrors = false } = options;
        try {
          return checkStat((0, fs_1.statSync)(path2), path2, options);
        } catch (e) {
          const er = e;
          if (ignoreErrors || er.code === "EACCES")
            return false;
          throw er;
        }
      };
      exports2.sync = sync;
      var checkPathExt = (path2, options) => {
        const { pathExt = process.env.PATHEXT || "" } = options;
        const peSplit = pathExt.split(";");
        if (peSplit.indexOf("") !== -1) {
          return true;
        }
        for (let i = 0;i < peSplit.length; i++) {
          const p = peSplit[i].toLowerCase();
          const ext = path2.substring(path2.length - p.length).toLowerCase();
          if (p && ext === p) {
            return true;
          }
        }
        return false;
      };
      var checkStat = (stat, path2, options) => stat.isFile() && checkPathExt(path2, options);
    }
  });
  var require_options = __commonJS2({
    "node_modules/isexe/dist/cjs/options.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
    }
  });
  var require_cjs = __commonJS2({
    "node_modules/isexe/dist/cjs/index.js"(exports2) {
      var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === undefined)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === undefined)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports2 && exports2.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.sync = exports2.isexe = exports2.posix = exports2.win32 = undefined;
      var posix = __importStar(require_posix());
      exports2.posix = posix;
      var win32 = __importStar(require_win32());
      exports2.win32 = win32;
      __exportStar(require_options(), exports2);
      var platform = process.env._ISEXE_TEST_PLATFORM_ || process.platform;
      var impl = platform === "win32" ? win32 : posix;
      exports2.isexe = impl.isexe;
      exports2.sync = impl.sync;
    }
  });
  var require_lib = __commonJS2({
    "node_modules/which/lib/index.js"(exports2, module2) {
      var { isexe, sync: isexeSync } = require_cjs();
      var { join, delimiter, sep, posix } = __require("path");
      var isWindows = process.platform === "win32";
      var rSlash = new RegExp(`[${posix.sep}${sep === posix.sep ? "" : sep}]`.replace(/(\\)/g, "\\$1"));
      var rRel = new RegExp(`^\\.${rSlash.source}`);
      var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
      var getPathInfo = (cmd, {
        path: optPath = process.env.PATH,
        pathExt: optPathExt = process.env.PATHEXT,
        delimiter: optDelimiter = delimiter
      }) => {
        const pathEnv = cmd.match(rSlash) ? [""] : [
          ...isWindows ? [process.cwd()] : [],
          ...(optPath || "").split(optDelimiter)
        ];
        if (isWindows) {
          const pathExtExe = optPathExt || [".EXE", ".CMD", ".BAT", ".COM"].join(optDelimiter);
          const pathExt = pathExtExe.split(optDelimiter).flatMap((item) => [item, item.toLowerCase()]);
          if (cmd.includes(".") && pathExt[0] !== "") {
            pathExt.unshift("");
          }
          return { pathEnv, pathExt, pathExtExe };
        }
        return { pathEnv, pathExt: [""] };
      };
      var getPathPart = (raw, cmd) => {
        const pathPart = /^".*"$/.test(raw) ? raw.slice(1, -1) : raw;
        const prefix = !pathPart && rRel.test(cmd) ? cmd.slice(0, 2) : "";
        return prefix + join(pathPart, cmd);
      };
      var which22 = (_0, ..._1) => __async(exports2, [_0, ..._1], function* (cmd, opt = {}) {
        const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
        const found = [];
        for (const envPart of pathEnv) {
          const p = getPathPart(envPart, cmd);
          for (const ext of pathExt) {
            const withExt = p + ext;
            const is = yield isexe(withExt, { pathExt: pathExtExe, ignoreErrors: true });
            if (is) {
              if (!opt.all) {
                return withExt;
              }
              found.push(withExt);
            }
          }
        }
        if (opt.all && found.length) {
          return found;
        }
        if (opt.nothrow) {
          return null;
        }
        throw getNotFoundError(cmd);
      });
      var whichSync = (cmd, opt = {}) => {
        const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
        const found = [];
        for (const pathEnvPart of pathEnv) {
          const p = getPathPart(pathEnvPart, cmd);
          for (const ext of pathExt) {
            const withExt = p + ext;
            const is = isexeSync(withExt, { pathExt: pathExtExe, ignoreErrors: true });
            if (is) {
              if (!opt.all) {
                return withExt;
              }
              found.push(withExt);
            }
          }
        }
        if (opt.all && found.length) {
          return found;
        }
        if (opt.nothrow) {
          return null;
        }
        throw getNotFoundError(cmd);
      };
      module2.exports = which22;
      which22.sync = whichSync;
    }
  });
  var vendor_core_exports = {};
  __export(vendor_core_exports, {
    VoidStream: () => VoidStream,
    buildCmd: () => buildCmd,
    bus: () => bus,
    chalk: () => chalk22,
    exec: () => exec,
    isStringLiteral: () => isStringLiteral2,
    ps: () => ps2,
    which: () => which2
  });
  module.exports = __toCommonJS(vendor_core_exports);
  var ANSI_BACKGROUND_OFFSET = 10;
  var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
  var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
  var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
  var styles = {
    modifier: {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      gray: [90, 39],
      grey: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgGray: [100, 49],
      bgGrey: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  var modifierNames = Object.keys(styles.modifier);
  var foregroundColorNames = Object.keys(styles.color);
  var backgroundColorNames = Object.keys(styles.bgColor);
  var colorNames = [...foregroundColorNames, ...backgroundColorNames];
  function assembleStyles() {
    const codes = /* @__PURE__ */ new Map;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi = wrapAnsi16();
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value(red, green, blue) {
          if (red === green && green === blue) {
            if (red < 8) {
              return 16;
            }
            if (red > 248) {
              return 231;
            }
            return Math.round((red - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value(hex) {
          const matches = /[a-f\d]{6}|[a-f\d]{3}/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let [colorString] = matches;
          if (colorString.length === 3) {
            colorString = [...colorString].map((character) => character + character).join("");
          }
          const integer = Number.parseInt(colorString, 16);
          return [
            integer >> 16 & 255,
            integer >> 8 & 255,
            integer & 255
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      },
      ansi256ToAnsi: {
        value(code) {
          if (code < 8) {
            return 30 + code;
          }
          if (code < 16) {
            return 90 + (code - 8);
          }
          let red;
          let green;
          let blue;
          if (code >= 232) {
            red = ((code - 232) * 10 + 8) / 255;
            green = red;
            blue = red;
          } else {
            code -= 16;
            const remainder = code % 36;
            red = Math.floor(code / 36) / 5;
            green = Math.floor(remainder / 6) / 5;
            blue = remainder % 6 / 5;
          }
          const value = Math.max(red, green, blue) * 2;
          if (value === 0) {
            return 30;
          }
          let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
          if (value === 2) {
            result += 60;
          }
          return result;
        },
        enumerable: false
      },
      rgbToAnsi: {
        value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
        enumerable: false
      },
      hexToAnsi: {
        value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  var ansiStyles = assembleStyles();
  var ansi_styles_default = ansiStyles;
  var import_node_process = __toESM2(__require("process"), 1);
  var import_node_os = __toESM2(__require("os"), 1);
  var import_node_tty = __toESM2(__require("tty"), 1);
  function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : import_node_process.default.argv) {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
  }
  var { env } = import_node_process.default;
  var flagForceColor;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
    flagForceColor = 0;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    flagForceColor = 1;
  }
  function envForceColor() {
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        return 1;
      }
      if (env.FORCE_COLOR === "false") {
        return 0;
      }
      return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
    const noFlagForceColor = envForceColor();
    if (noFlagForceColor !== undefined) {
      flagForceColor = noFlagForceColor;
    }
    const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
    if (forceColor === 0) {
      return 0;
    }
    if (sniffFlags) {
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
    }
    if ("TF_BUILD" in env && "AGENT_NAME" in env) {
      return 1;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (import_node_process.default.platform === "win32") {
      const osRelease = import_node_os.default.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["GITHUB_ACTIONS", "GITEA_ACTIONS", "CIRCLECI"].some((key) => (key in env))) {
        return 3;
      }
      if (["TRAVIS", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => (sign in env)) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if (env.TERM === "xterm-kitty") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app": {
          return version >= 3 ? 3 : 2;
        }
        case "Apple_Terminal": {
          return 2;
        }
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function createSupportsColor(stream, options = {}) {
    const level = _supportsColor(stream, __spreadValues({
      streamIsTTY: stream && stream.isTTY
    }, options));
    return translateLevel(level);
  }
  var supportsColor = {
    stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
    stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
  };
  var supports_color_default = supportsColor;
  function stringReplaceAll(string, substring, replacer) {
    let index = string.indexOf(substring);
    if (index === -1) {
      return string;
    }
    const substringLength = substring.length;
    let endIndex = 0;
    let returnValue = "";
    do {
      returnValue += string.slice(endIndex, index) + substring + replacer;
      endIndex = index + substringLength;
      index = string.indexOf(substring, endIndex);
    } while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
  }
  function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index) {
    let endIndex = 0;
    let returnValue = "";
    do {
      const gotCR = string[index - 1] === "\r";
      returnValue += string.slice(endIndex, gotCR ? index - 1 : index) + prefix + (gotCR ? `\r
` : `
`) + postfix;
      endIndex = index + 1;
      index = string.indexOf(`
`, endIndex);
    } while (index !== -1);
    returnValue += string.slice(endIndex);
    return returnValue;
  }
  var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
  var GENERATOR = Symbol("GENERATOR");
  var STYLER = Symbol("STYLER");
  var IS_EMPTY = Symbol("IS_EMPTY");
  var levelMapping = [
    "ansi",
    "ansi",
    "ansi256",
    "ansi16m"
  ];
  var styles2 = /* @__PURE__ */ Object.create(null);
  var applyOptions = (object, options = {}) => {
    if (options.level && !(Number.isInteger(options.level) && options.level >= 0 && options.level <= 3)) {
      throw new Error("The `level` option should be an integer from 0 to 3");
    }
    const colorLevel = stdoutColor ? stdoutColor.level : 0;
    object.level = options.level === undefined ? colorLevel : options.level;
  };
  var chalkFactory = (options) => {
    const chalk3 = (...strings) => strings.join(" ");
    applyOptions(chalk3, options);
    Object.setPrototypeOf(chalk3, createChalk.prototype);
    return chalk3;
  };
  function createChalk(options) {
    return chalkFactory(options);
  }
  Object.setPrototypeOf(createChalk.prototype, Function.prototype);
  for (const [styleName, style] of Object.entries(ansi_styles_default)) {
    styles2[styleName] = {
      get() {
        const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
        Object.defineProperty(this, styleName, { value: builder });
        return builder;
      }
    };
  }
  styles2.visible = {
    get() {
      const builder = createBuilder(this, this[STYLER], true);
      Object.defineProperty(this, "visible", { value: builder });
      return builder;
    }
  };
  var getModelAnsi = (model, level, type, ...arguments_) => {
    if (model === "rgb") {
      if (level === "ansi16m") {
        return ansi_styles_default[type].ansi16m(...arguments_);
      }
      if (level === "ansi256") {
        return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
      }
      return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
    }
    if (model === "hex") {
      return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
    }
    return ansi_styles_default[type][model](...arguments_);
  };
  var usedModels = ["rgb", "hex", "ansi256"];
  for (const model of usedModels) {
    styles2[model] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
    const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
    styles2[bgModel] = {
      get() {
        const { level } = this;
        return function(...arguments_) {
          const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
          return createBuilder(this, styler, this[IS_EMPTY]);
        };
      }
    };
  }
  var proto = Object.defineProperties(() => {}, __spreadProps(__spreadValues({}, styles2), {
    level: {
      enumerable: true,
      get() {
        return this[GENERATOR].level;
      },
      set(level) {
        this[GENERATOR].level = level;
      }
    }
  }));
  var createStyler = (open, close, parent) => {
    let openAll;
    let closeAll;
    if (parent === undefined) {
      openAll = open;
      closeAll = close;
    } else {
      openAll = parent.openAll + open;
      closeAll = close + parent.closeAll;
    }
    return {
      open,
      close,
      openAll,
      closeAll,
      parent
    };
  };
  var createBuilder = (self2, _styler, _isEmpty) => {
    const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
    Object.setPrototypeOf(builder, proto);
    builder[GENERATOR] = self2;
    builder[STYLER] = _styler;
    builder[IS_EMPTY] = _isEmpty;
    return builder;
  };
  var applyStyle = (self2, string) => {
    if (self2.level <= 0 || !string) {
      return self2[IS_EMPTY] ? "" : string;
    }
    let styler = self2[STYLER];
    if (styler === undefined) {
      return string;
    }
    const { openAll, closeAll } = styler;
    if (string.includes("\x1B")) {
      while (styler !== undefined) {
        string = stringReplaceAll(string, styler.close, styler.open);
        styler = styler.parent;
      }
    }
    const lfIndex = string.indexOf(`
`);
    if (lfIndex !== -1) {
      string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
    }
    return openAll + string + closeAll;
  };
  Object.defineProperties(createChalk.prototype, styles2);
  var chalk2 = createChalk();
  var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
  var source_default = chalk2;
  var import_which = __toESM2(require_lib(), 1);
  var import_node_process4 = __toESM2(__require("process"), 1);
  var import_node_fs = __toESM2(__require("fs"), 1);
  var import_node_os2 = __require("os");
  var EOL = /\r?\n|\r|\n/;
  var parseLine = (line, sep = " ") => {
    const result = {
      spaces: [],
      words: []
    };
    const capture = () => {
      if (word) {
        result.words.push({
          s,
          e: s + word.length - 1,
          w: word
        });
        word = "";
        s = -1;
      }
    };
    let bb;
    let word = "";
    let s = -1;
    for (const i in [...line]) {
      const prev = line[+i - 1];
      const char = line[i];
      if (bb) {
        word += char;
        if (char === bb && prev !== "\\") {
          bb = undefined;
        }
        continue;
      }
      if (char === sep) {
        result.spaces.push(+i);
        capture();
        continue;
      }
      if (s === -1)
        s = +i;
      if (char === '"' || char === "'")
        bb = char;
      word += char;
    }
    capture();
    return result;
  };
  var parseLines = (input, sep) => input.split(EOL).map((l) => parseLine(l, sep));
  var countWordsByIndex = ({ words }, index) => words.filter(({ e }) => e < index).length;
  var getBorders = (lines) => lines[0].spaces.reduce((m, i) => {
    const c = countWordsByIndex(lines[0], i);
    if (lines.every((l) => l.spaces.includes(i) && c === countWordsByIndex(l, i))) {
      m.push(i);
    }
    return m;
  }, []);
  var parseUnixGrid = (input) => {
    const lines = parseLines(input);
    const borders = getBorders(lines);
    const _borders = [Number.NEGATIVE_INFINITY, ...borders, Number.POSITIVE_INFINITY];
    const grid = [];
    for (const { words } of lines) {
      const row = [];
      grid.push(row);
      for (const n in words) {
        const { w, s, e } = words[n];
        for (const _b in _borders) {
          const a = _borders[+_b];
          const b = _borders[+_b + 1];
          if (b === undefined)
            break;
          const block = row[_b] || (row[_b] = []);
          if (s > a && e < b)
            block.push(w);
        }
      }
    }
    return gridToData(grid);
  };
  var gridToData = (grid) => {
    const data = [];
    const [headers, ...body] = grid;
    for (const row of body) {
      const entry = {};
      data.push(entry);
      for (const i in headers) {
        const keys = headers[i];
        if (keys.length === 0)
          continue;
        if (keys.length > row[i].length) {
          throw new Error("Malformed grid: row has more columns than headers");
        }
        for (const k in keys) {
          const key = keys[k];
          const to = +k + 1 === keys.length ? Number.POSITIVE_INFINITY : +k + 1;
          entry[key] = row[i].slice(+k, to);
        }
      }
    }
    return data;
  };
  var cut = (line, points, pad = 2) => {
    const chunks = [];
    let s = 0;
    for (const i in [...points, Number.POSITIVE_INFINITY]) {
      const chunk = line.slice(s, points[i]);
      chunks.push(chunk);
      s = points[i] + pad;
    }
    return chunks;
  };
  var parseWinGrid = (input) => {
    var _a;
    const lines = input.split(EOL);
    const headers = lines[0].trim().split(/\s+/);
    const data = [];
    let memo = null;
    for (const line of lines.slice(1)) {
      if (!line)
        continue;
      const { spaces } = parseLine(line);
      const borders = spaces.filter((s, i) => spaces[i + 1] === s + 1 && spaces[i + 2] !== s + 2);
      let chunks = (borders.length > 0 ? cut(line, borders, 2) : [line]).map((l) => l.trim());
      if (chunks.length < headers.length) {
        memo = chunks;
        continue;
      } else if ((_a = chunks[0]) == null ? undefined : _a.trim()) {
        memo = null;
      } else {
        chunks = [...memo || ["<unknown>"], ...chunks].filter(Boolean);
      }
      const entry = Object.fromEntries(headers.map((header, i) => [header, parseLine(chunks[i]).words.map(({ w }) => w)]));
      data.push(entry);
    }
    return data;
  };
  var parsers = {
    unix: parseUnixGrid,
    win: parseWinGrid
  };
  var parse = (input, { format = "unix" } = {}) => {
    const parser = parsers[format];
    if (!parser)
      throw new Error(`unsupported format: ${format}`);
    return parser(input);
  };
  var cp = __toESM2(__require("child_process"), 1);
  var import_node_process3 = __toESM2(__require("process"), 1);
  var import_node_events = __toESM2(__require("events"), 1);
  var import_node_stream2 = __require("stream");
  var import_node_stream = __require("stream");
  var import_node_process2 = __toESM2(__require("process"), 1);
  var import_node_buffer = __require("buffer");
  var g = !import_node_process2.default.versions.deno && global || globalThis;
  var immediate = g.setImmediate || ((f) => g.setTimeout(f, 0));
  var noop = () => {};
  var randomId = () => Math.random().toString(36).slice(2);
  var isPromiseLike = (value) => typeof (value == null ? undefined : value.then) === "function";
  var isStringLiteral2 = (pieces, ...rest) => {
    var _a;
    return (pieces == null ? undefined : pieces.length) > 0 && ((_a = pieces.raw) == null ? undefined : _a.length) === pieces.length && rest.length + 1 === pieces.length;
  };
  var assign = (target, ...extras) => Object.defineProperties(target, extras.reduce((m, extra) => __spreadValues(__spreadValues({}, m), Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(extra)).filter(([, v]) => !Object.prototype.hasOwnProperty.call(v, "value") || v.value !== undefined))), {}));
  var buildCmd = (quote2, pieces, args, subs = substitute) => {
    if (args.some(isPromiseLike))
      return Promise.all(args).then((args2) => buildCmd(quote2, pieces, args2));
    let cmd = pieces[0], i = 0;
    while (i < args.length) {
      const s = Array.isArray(args[i]) ? args[i].map((x) => quote2(subs(x))).join(" ") : quote2(subs(args[i]));
      cmd += s + pieces[++i];
    }
    return cmd;
  };
  var substitute = (arg) => typeof (arg == null ? undefined : arg.stdout) === "string" ? arg.stdout.replace(/\n$/, "") : `${arg}`;
  var defaults = {
    get id() {
      return randomId();
    },
    cmd: "",
    get cwd() {
      return import_node_process3.default.cwd();
    },
    sync: false,
    args: [],
    input: null,
    env: import_node_process3.default.env,
    get ee() {
      return new import_node_events.default;
    },
    get ac() {
      return g.AbortController && new AbortController;
    },
    get signal() {
      var _a;
      return (_a = this.ac) == null ? undefined : _a.signal;
    },
    on: {},
    detached: import_node_process3.default.platform !== "win32",
    shell: true,
    spawn: cp.spawn,
    spawnSync: cp.spawnSync,
    spawnOpts: {},
    get store() {
      return createStore();
    },
    callback: noop,
    get stdin() {
      return new VoidStream;
    },
    get stdout() {
      return new VoidStream;
    },
    get stderr() {
      return new VoidStream;
    },
    stdio: ["pipe", "pipe", "pipe"],
    run: immediate,
    stack: ""
  };
  var normalizeCtx = (...ctxs) => assign(__spreadProps(__spreadValues({}, defaults), {
    get signal() {
      var _a;
      return (_a = this.ac) == null ? undefined : _a.signal;
    }
  }), ...ctxs);
  var processInput = (child, input) => {
    if (input && child.stdin && !child.stdin.destroyed) {
      if (input instanceof import_node_stream2.Stream) {
        input.pipe(child.stdin);
      } else {
        child.stdin.write(input);
        child.stdin.end();
      }
    }
  };
  var VoidStream = class extends import_node_stream2.Transform {
    _transform(chunk, _, cb) {
      this.emit("data", chunk);
      cb();
    }
  };
  var buildSpawnOpts = ({ spawnOpts, stdio, cwd, shell, input, env: env2, detached, signal }) => __spreadProps(__spreadValues({}, spawnOpts), {
    env: env2,
    cwd,
    stdio,
    shell,
    input,
    windowsHide: true,
    detached,
    signal
  });
  var toggleListeners = (pos, ee, on = {}) => {
    for (const [name, listener] of Object.entries(on)) {
      ee[pos](name, listener);
    }
    if (pos === "on")
      ee.once("end", () => toggleListeners("off", ee, on));
  };
  var createStore = () => ({
    stdout: [],
    stderr: [],
    stdall: []
  });
  var invoke = (c) => {
    var _a, _b;
    const now = Date.now();
    const stdio = [c.stdin, c.stdout, c.stderr];
    const push = (kind, data) => {
      c.store[kind].push(data);
      c.store.stdall.push(data);
      c.ee.emit(kind, data, c);
      c.ee.emit("stdall", data, c);
    };
    try {
      if (c.sync) {
        toggleListeners("on", c.ee, c.on);
        const opts = buildSpawnOpts(c);
        const r = c.spawnSync(c.cmd, c.args, opts);
        c.ee.emit("start", r, c);
        if (((_a = r.stdout) == null ? undefined : _a.length) > 0) {
          c.stdout.write(r.stdout);
          push("stdout", r.stdout);
        }
        if (((_b = r.stderr) == null ? undefined : _b.length) > 0) {
          c.stderr.write(r.stderr);
          push("stderr", r.stderr);
        }
        c.callback(null, c.fulfilled = __spreadProps(__spreadValues({}, r), {
          get stdout() {
            return c.store.stdout.join("");
          },
          get stderr() {
            return c.store.stderr.join("");
          },
          get stdall() {
            return c.store.stdall.join("");
          },
          stdio,
          duration: Date.now() - now,
          ctx: c
        }));
        c.ee.emit("end", c.fulfilled, c);
      } else {
        c.run(() => {
          var _a2, _b2, _c;
          toggleListeners("on", c.ee, c.on);
          let error = null;
          let aborted = false;
          const opts = buildSpawnOpts(c);
          const child = c.spawn(c.cmd, c.args, opts);
          const onAbort = (event) => {
            if (opts.detached && child.pid) {
              try {
                import_node_process3.default.kill(-child.pid);
              } catch (e) {
                child.kill();
              }
            }
            aborted = true;
            c.ee.emit("abort", event, c);
          };
          c.child = child;
          c.ee.emit("start", child, c);
          (_a2 = opts.signal) == null || _a2.addEventListener("abort", onAbort);
          processInput(child, c.input || c.stdin);
          (_b2 = child.stdout) == null || _b2.on("data", (d) => {
            push("stdout", d);
          }).pipe(c.stdout);
          (_c = child.stderr) == null || _c.on("data", (d) => {
            push("stderr", d);
          }).pipe(c.stderr);
          child.once("error", (e) => {
            error = e;
            c.ee.emit("err", error, c);
          }).once("exit", () => {
            var _a3, _b3;
            if (aborted) {
              (_a3 = child.stdout) == null || _a3.destroy();
              (_b3 = child.stderr) == null || _b3.destroy();
            }
          }).once("close", (status, signal) => {
            var _a3;
            c.fulfilled = {
              error,
              status,
              signal,
              get stdout() {
                return c.store.stdout.join("");
              },
              get stderr() {
                return c.store.stderr.join("");
              },
              get stdall() {
                return c.store.stdall.join("");
              },
              stdio,
              duration: Date.now() - now,
              ctx: c
            };
            (_a3 = opts.signal) == null || _a3.removeEventListener("abort", onAbort);
            c.callback(error, c.fulfilled);
            c.ee.emit("end", c.fulfilled, c);
          });
        }, c);
      }
    } catch (error) {
      c.callback(error, c.fulfilled = {
        error,
        status: null,
        signal: null,
        stdout: "",
        stderr: "",
        stdall: "",
        stdio,
        duration: Date.now() - now,
        ctx: c
      });
      c.ee.emit("err", error, c);
      c.ee.emit("end", c.fulfilled, c);
    }
    return c;
  };
  var exec = (ctx) => invoke(normalizeCtx(ctx));
  var EOL2 = /\n\r?|\r\n?/;
  var IS_WIN = import_node_process4.default.platform === "win32";
  var isBin = (f) => {
    if (f === "")
      return false;
    if (!f.includes("/"))
      return true;
    if (!import_node_fs.default.existsSync(f))
      return false;
    const stat = import_node_fs.default.lstatSync(f);
    return stat.isFile() || stat.isSymbolicLink();
  };
  var lookup = (query = {}, cb = noop2) => _lookup({ query, cb, sync: false });
  var lookupSync = (query = {}, cb = noop2) => _lookup({ query, cb, sync: true });
  lookup.sync = lookupSync;
  var _lookup = ({
    query = {},
    cb = noop2,
    sync = false
  }) => {
    const pFactory = sync ? makePseudoDeferred.bind(null, []) : makeDeferred;
    const { promise, resolve, reject } = pFactory();
    const { psargs = ["-lx"] } = query;
    const args = Array.isArray(psargs) ? psargs : psargs.split(/\s+/);
    const extract = IS_WIN ? extractWmic : identity;
    let result = [];
    const callback = (err, { stdout }) => {
      if (err) {
        reject(err);
        cb(err);
        return;
      }
      result = parseProcessList(extract(stdout), query);
      resolve(result);
      cb(null, result);
    };
    const ctx = IS_WIN ? {
      cmd: "cmd",
      input: `wmic process get ProcessId,ParentProcessId,CommandLine 
`,
      callback,
      sync,
      run(cb2) {
        cb2();
      }
    } : {
      cmd: "ps",
      args,
      callback,
      sync,
      run(cb2) {
        cb2();
      }
    };
    exec(ctx);
    return Object.assign(promise, result);
  };
  var parseProcessList = (output, query = {}) => {
    const processList = parseGrid(output.trim());
    const pidList = (query.pid === undefined ? [] : [query.pid].flat(1)).map((v) => v + "");
    const filters = [
      (p) => query.command ? new RegExp(query.command, "i").test(p.command) : true,
      (p) => query.arguments ? new RegExp(query.arguments, "i").test(p.arguments.join(" ")) : true,
      (p) => query.ppid ? query.ppid + "" === p.ppid : true
    ];
    return processList.filter((p) => (pidList.length === 0 || pidList.includes(p.pid)) && filters.every((f) => f(p)));
  };
  var extractWmic = (stdout) => {
    const _stdout = stdout.split(EOL2);
    const beginRow = _stdout.findIndex((out) => out.startsWith("CommandLine"));
    return _stdout.slice(beginRow + 1, -1).join(import_node_os2.EOL);
  };
  var pickTree = (list, pid, recursive = false) => {
    const children = list.filter((p) => p.ppid === pid + "");
    return [
      ...children,
      ...children.flatMap((p) => recursive ? pickTree(list, p.pid, true) : [])
    ];
  };
  var _tree = ({
    cb = noop2,
    opts,
    sync = false
  }) => {
    if (typeof opts === "string" || typeof opts === "number") {
      return _tree({ opts: { pid: opts }, cb, sync });
    }
    const onError = (err) => cb(err);
    const onData = (all) => {
      if (opts === undefined)
        return all;
      const { pid, recursive = false } = opts;
      const list = pickTree(all, pid, recursive);
      cb(null, list);
      return list;
    };
    try {
      const all = _lookup({ sync });
      return sync ? onData(all) : all.then(onData, (err) => {
        onError(err);
        throw err;
      });
    } catch (err) {
      onError(err);
      return Promise.reject(err);
    }
  };
  var tree = (opts, cb) => __async(undefined, null, function* () {
    return _tree({ opts, cb });
  });
  var treeSync = (opts, cb) => _tree({ opts, cb, sync: true });
  tree.sync = treeSync;
  var kill = (pid, opts, next) => {
    if (typeof opts == "function") {
      return kill(pid, undefined, opts);
    }
    if (typeof opts == "string" || typeof opts == "number") {
      return kill(pid, { signal: opts }, next);
    }
    const { promise, resolve, reject } = makeDeferred();
    const {
      timeout = 30,
      signal = "SIGTERM"
    } = opts || {};
    try {
      import_node_process4.default.kill(+pid, signal);
    } catch (e) {
      reject(e);
      next == null || next(e);
      return promise;
    }
    let checkConfident = 0;
    let checkTimeoutTimer;
    let checkIsTimeout = false;
    const checkKilled = (finishCallback) => lookup({ pid }, (err, list = []) => {
      if (checkIsTimeout)
        return;
      if (err) {
        clearTimeout(checkTimeoutTimer);
        reject(err);
        finishCallback == null || finishCallback(err, pid);
      } else if (list.length > 0) {
        checkConfident = checkConfident - 1 || 0;
        checkKilled(finishCallback);
      } else {
        checkConfident++;
        if (checkConfident === 5) {
          clearTimeout(checkTimeoutTimer);
          resolve(pid);
          finishCallback == null || finishCallback(null, pid);
        } else {
          checkKilled(finishCallback);
        }
      }
    });
    if (next) {
      checkKilled(next);
      checkTimeoutTimer = setTimeout(() => {
        checkIsTimeout = true;
        next(new Error("Kill process timeout"));
      }, timeout * 1000);
    } else {
      resolve(pid);
    }
    return promise;
  };
  var parseGrid = (output) => output ? formatOutput(parse(output, { format: IS_WIN ? "win" : "unix" })) : [];
  var formatOutput = (data) => data.reduce((m, d) => {
    var _a, _b, _c, _d;
    const pid = ((_a = d.PID) == null ? undefined : _a[0]) || ((_b = d.ProcessId) == null ? undefined : _b[0]);
    const ppid = ((_c = d.PPID) == null ? undefined : _c[0]) || ((_d = d.ParentProcessId) == null ? undefined : _d[0]);
    const cmd = d.CMD || d.CommandLine || d.COMMAND || [];
    if (pid && cmd.length > 0) {
      const c = cmd.findIndex((_v, i) => isBin(cmd.slice(0, i).join(" ")));
      const command = cmd.slice(0, c).join(" ");
      const args = cmd.length > 1 ? cmd.slice(c) : [];
      m.push({
        pid,
        ppid,
        command,
        arguments: args
      });
    }
    return m;
  }, []);
  var makeDeferred = () => {
    let resolve;
    let reject;
    const promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { resolve, reject, promise };
  };
  var makePseudoDeferred = (r = {}) => ({
    promise: r,
    resolve: identity,
    reject(e) {
      throw e;
    }
  });
  var noop2 = () => {};
  var identity = (v) => v;
  var index_default = { kill, lookup, lookupSync, tree, treeSync };
  var store = /* @__PURE__ */ new Map;
  var override = store.set.bind(store);
  var wrap = (name, api) => {
    override(name, api);
    return new Proxy(api, {
      get(_, key) {
        return store.get(name)[key];
      },
      apply(_, self2, args) {
        return store.get(name).apply(self2, args);
      }
    });
  };
  var bus = {
    override,
    store,
    wrap
  };
  var chalk22 = wrap("chalk", source_default);
  var which2 = wrap("which", import_which.default);
  var ps2 = wrap("ps", index_default);
});

// node_modules/zx/build/vendor-extra.cjs
var require_vendor_extra = __commonJS((exports, module) => {
  var {
    __spreadValues,
    __spreadProps,
    __esm,
    __commonJS: __commonJS2,
    __export,
    __toESM: __toESM2,
    __toCommonJS,
    __privateGet,
    __privateAdd,
    __privateSet,
    __async,
    __await,
    __asyncGenerator,
    __yieldStar,
    __forAwait
  } = require_esblib();
  var require_array = __commonJS2({
    "node_modules/fast-glob/out/utils/array.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.splitWhen = exports2.flatten = undefined;
      function flatten(items) {
        return items.reduce((collection, item) => [].concat(collection, item), []);
      }
      exports2.flatten = flatten;
      function splitWhen(items, predicate) {
        const result = [[]];
        let groupIndex = 0;
        for (const item of items) {
          if (predicate(item)) {
            groupIndex++;
            result[groupIndex] = [];
          } else {
            result[groupIndex].push(item);
          }
        }
        return result;
      }
      exports2.splitWhen = splitWhen;
    }
  });
  var require_errno = __commonJS2({
    "node_modules/fast-glob/out/utils/errno.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isEnoentCodeError = undefined;
      function isEnoentCodeError(error) {
        return error.code === "ENOENT";
      }
      exports2.isEnoentCodeError = isEnoentCodeError;
    }
  });
  var require_fs = __commonJS2({
    "node_modules/fast-glob/out/utils/fs.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.createDirentFromStats = undefined;
      var DirentFromStats = class {
        constructor(name, stats) {
          this.name = name;
          this.isBlockDevice = stats.isBlockDevice.bind(stats);
          this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
          this.isDirectory = stats.isDirectory.bind(stats);
          this.isFIFO = stats.isFIFO.bind(stats);
          this.isFile = stats.isFile.bind(stats);
          this.isSocket = stats.isSocket.bind(stats);
          this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
        }
      };
      function createDirentFromStats(name, stats) {
        return new DirentFromStats(name, stats);
      }
      exports2.createDirentFromStats = createDirentFromStats;
    }
  });
  var require_path = __commonJS2({
    "node_modules/fast-glob/out/utils/path.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.convertPosixPathToPattern = exports2.convertWindowsPathToPattern = exports2.convertPathToPattern = exports2.escapePosixPath = exports2.escapeWindowsPath = exports2.escape = exports2.removeLeadingDotSegment = exports2.makeAbsolute = exports2.unixify = undefined;
      var os = __require("os");
      var path3 = __require("path");
      var IS_WINDOWS_PLATFORM = os.platform() === "win32";
      var LEADING_DOT_SEGMENT_CHARACTERS_COUNT = 2;
      var POSIX_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()*?[\]{|}]|^!|[!+@](?=\()|\\(?![!()*+?@[\]{|}]))/g;
      var WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE = /(\\?)([()[\]{}]|^!|[!+@](?=\())/g;
      var DOS_DEVICE_PATH_RE = /^\\\\([.?])/;
      var WINDOWS_BACKSLASHES_RE = /\\(?![!()+@[\]{}])/g;
      function unixify(filepath) {
        return filepath.replace(/\\/g, "/");
      }
      exports2.unixify = unixify;
      function makeAbsolute(cwd, filepath) {
        return path3.resolve(cwd, filepath);
      }
      exports2.makeAbsolute = makeAbsolute;
      function removeLeadingDotSegment(entry) {
        if (entry.charAt(0) === ".") {
          const secondCharactery = entry.charAt(1);
          if (secondCharactery === "/" || secondCharactery === "\\") {
            return entry.slice(LEADING_DOT_SEGMENT_CHARACTERS_COUNT);
          }
        }
        return entry;
      }
      exports2.removeLeadingDotSegment = removeLeadingDotSegment;
      exports2.escape = IS_WINDOWS_PLATFORM ? escapeWindowsPath : escapePosixPath;
      function escapeWindowsPath(pattern) {
        return pattern.replace(WINDOWS_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
      }
      exports2.escapeWindowsPath = escapeWindowsPath;
      function escapePosixPath(pattern) {
        return pattern.replace(POSIX_UNESCAPED_GLOB_SYMBOLS_RE, "\\$2");
      }
      exports2.escapePosixPath = escapePosixPath;
      exports2.convertPathToPattern = IS_WINDOWS_PLATFORM ? convertWindowsPathToPattern : convertPosixPathToPattern;
      function convertWindowsPathToPattern(filepath) {
        return escapeWindowsPath(filepath).replace(DOS_DEVICE_PATH_RE, "//$1").replace(WINDOWS_BACKSLASHES_RE, "/");
      }
      exports2.convertWindowsPathToPattern = convertWindowsPathToPattern;
      function convertPosixPathToPattern(filepath) {
        return escapePosixPath(filepath);
      }
      exports2.convertPosixPathToPattern = convertPosixPathToPattern;
    }
  });
  var require_is_extglob = __commonJS2({
    "node_modules/is-extglob/index.js"(exports2, module2) {
      module2.exports = function isExtglob(str) {
        if (typeof str !== "string" || str === "") {
          return false;
        }
        var match;
        while (match = /(\\).|([@?!+*]\(.*\))/g.exec(str)) {
          if (match[2])
            return true;
          str = str.slice(match.index + match[0].length);
        }
        return false;
      };
    }
  });
  var require_is_glob = __commonJS2({
    "node_modules/is-glob/index.js"(exports2, module2) {
      var isExtglob = require_is_extglob();
      var chars = { "{": "}", "(": ")", "[": "]" };
      var strictCheck = function(str) {
        if (str[0] === "!") {
          return true;
        }
        var index = 0;
        var pipeIndex = -2;
        var closeSquareIndex = -2;
        var closeCurlyIndex = -2;
        var closeParenIndex = -2;
        var backSlashIndex = -2;
        while (index < str.length) {
          if (str[index] === "*") {
            return true;
          }
          if (str[index + 1] === "?" && /[\].+)]/.test(str[index])) {
            return true;
          }
          if (closeSquareIndex !== -1 && str[index] === "[" && str[index + 1] !== "]") {
            if (closeSquareIndex < index) {
              closeSquareIndex = str.indexOf("]", index);
            }
            if (closeSquareIndex > index) {
              if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                return true;
              }
              backSlashIndex = str.indexOf("\\", index);
              if (backSlashIndex === -1 || backSlashIndex > closeSquareIndex) {
                return true;
              }
            }
          }
          if (closeCurlyIndex !== -1 && str[index] === "{" && str[index + 1] !== "}") {
            closeCurlyIndex = str.indexOf("}", index);
            if (closeCurlyIndex > index) {
              backSlashIndex = str.indexOf("\\", index);
              if (backSlashIndex === -1 || backSlashIndex > closeCurlyIndex) {
                return true;
              }
            }
          }
          if (closeParenIndex !== -1 && str[index] === "(" && str[index + 1] === "?" && /[:!=]/.test(str[index + 2]) && str[index + 3] !== ")") {
            closeParenIndex = str.indexOf(")", index);
            if (closeParenIndex > index) {
              backSlashIndex = str.indexOf("\\", index);
              if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                return true;
              }
            }
          }
          if (pipeIndex !== -1 && str[index] === "(" && str[index + 1] !== "|") {
            if (pipeIndex < index) {
              pipeIndex = str.indexOf("|", index);
            }
            if (pipeIndex !== -1 && str[pipeIndex + 1] !== ")") {
              closeParenIndex = str.indexOf(")", pipeIndex);
              if (closeParenIndex > pipeIndex) {
                backSlashIndex = str.indexOf("\\", pipeIndex);
                if (backSlashIndex === -1 || backSlashIndex > closeParenIndex) {
                  return true;
                }
              }
            }
          }
          if (str[index] === "\\") {
            var open = str[index + 1];
            index += 2;
            var close = chars[open];
            if (close) {
              var n3 = str.indexOf(close, index);
              if (n3 !== -1) {
                index = n3 + 1;
              }
            }
            if (str[index] === "!") {
              return true;
            }
          } else {
            index++;
          }
        }
        return false;
      };
      var relaxedCheck = function(str) {
        if (str[0] === "!") {
          return true;
        }
        var index = 0;
        while (index < str.length) {
          if (/[*?{}()[\]]/.test(str[index])) {
            return true;
          }
          if (str[index] === "\\") {
            var open = str[index + 1];
            index += 2;
            var close = chars[open];
            if (close) {
              var n3 = str.indexOf(close, index);
              if (n3 !== -1) {
                index = n3 + 1;
              }
            }
            if (str[index] === "!") {
              return true;
            }
          } else {
            index++;
          }
        }
        return false;
      };
      module2.exports = function isGlob(str, options) {
        if (typeof str !== "string" || str === "") {
          return false;
        }
        if (isExtglob(str)) {
          return true;
        }
        var check = strictCheck;
        if (options && options.strict === false) {
          check = relaxedCheck;
        }
        return check(str);
      };
    }
  });
  var require_glob_parent = __commonJS2({
    "node_modules/glob-parent/index.js"(exports2, module2) {
      var isGlob = require_is_glob();
      var pathPosixDirname = __require("path").posix.dirname;
      var isWin32 = __require("os").platform() === "win32";
      var slash2 = "/";
      var backslash = /\\/g;
      var enclosure = /[\{\[].*[\}\]]$/;
      var globby3 = /(^|[^\\])([\{\[]|\([^\)]+$)/;
      var escaped = /\\([\!\*\?\|\[\]\(\)\{\}])/g;
      module2.exports = function globParent(str, opts) {
        var options = Object.assign({ flipBackslashes: true }, opts);
        if (options.flipBackslashes && isWin32 && str.indexOf(slash2) < 0) {
          str = str.replace(backslash, slash2);
        }
        if (enclosure.test(str)) {
          str += slash2;
        }
        str += "a";
        do {
          str = pathPosixDirname(str);
        } while (isGlob(str) || globby3.test(str));
        return str.replace(escaped, "$1");
      };
    }
  });
  var require_utils = __commonJS2({
    "node_modules/braces/lib/utils.js"(exports2) {
      exports2.isInteger = (num) => {
        if (typeof num === "number") {
          return Number.isInteger(num);
        }
        if (typeof num === "string" && num.trim() !== "") {
          return Number.isInteger(Number(num));
        }
        return false;
      };
      exports2.find = (node, type) => node.nodes.find((node2) => node2.type === type);
      exports2.exceedsLimit = (min, max, step = 1, limit) => {
        if (limit === false)
          return false;
        if (!exports2.isInteger(min) || !exports2.isInteger(max))
          return false;
        return (Number(max) - Number(min)) / Number(step) >= limit;
      };
      exports2.escapeNode = (block, n3 = 0, type) => {
        const node = block.nodes[n3];
        if (!node)
          return;
        if (type && node.type === type || node.type === "open" || node.type === "close") {
          if (node.escaped !== true) {
            node.value = "\\" + node.value;
            node.escaped = true;
          }
        }
      };
      exports2.encloseBrace = (node) => {
        if (node.type !== "brace")
          return false;
        if (node.commas >> 0 + node.ranges >> 0 === 0) {
          node.invalid = true;
          return true;
        }
        return false;
      };
      exports2.isInvalidBrace = (block) => {
        if (block.type !== "brace")
          return false;
        if (block.invalid === true || block.dollar)
          return true;
        if (block.commas >> 0 + block.ranges >> 0 === 0) {
          block.invalid = true;
          return true;
        }
        if (block.open !== true || block.close !== true) {
          block.invalid = true;
          return true;
        }
        return false;
      };
      exports2.isOpenOrClose = (node) => {
        if (node.type === "open" || node.type === "close") {
          return true;
        }
        return node.open === true || node.close === true;
      };
      exports2.reduce = (nodes) => nodes.reduce((acc, node) => {
        if (node.type === "text")
          acc.push(node.value);
        if (node.type === "range")
          node.type = "text";
        return acc;
      }, []);
      exports2.flatten = (...args) => {
        const result = [];
        const flat = (arr) => {
          for (let i = 0;i < arr.length; i++) {
            const ele = arr[i];
            if (Array.isArray(ele)) {
              flat(ele);
              continue;
            }
            if (ele !== undefined) {
              result.push(ele);
            }
          }
          return result;
        };
        flat(args);
        return result;
      };
    }
  });
  var require_stringify = __commonJS2({
    "node_modules/braces/lib/stringify.js"(exports2, module2) {
      var utils = require_utils();
      module2.exports = (ast, options = {}) => {
        const stringify5 = (node, parent = {}) => {
          const invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
          const invalidNode = node.invalid === true && options.escapeInvalid === true;
          let output = "";
          if (node.value) {
            if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
              return "\\" + node.value;
            }
            return node.value;
          }
          if (node.value) {
            return node.value;
          }
          if (node.nodes) {
            for (const child of node.nodes) {
              output += stringify5(child);
            }
          }
          return output;
        };
        return stringify5(ast);
      };
    }
  });
  var require_is_number = __commonJS2({
    "node_modules/is-number/index.js"(exports2, module2) {
      module2.exports = function(num) {
        if (typeof num === "number") {
          return num - num === 0;
        }
        if (typeof num === "string" && num.trim() !== "") {
          return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
        }
        return false;
      };
    }
  });
  var require_to_regex_range = __commonJS2({
    "node_modules/to-regex-range/index.js"(exports2, module2) {
      var isNumber = require_is_number();
      var toRegexRange = (min, max, options) => {
        if (isNumber(min) === false) {
          throw new TypeError("toRegexRange: expected the first argument to be a number");
        }
        if (max === undefined || min === max) {
          return String(min);
        }
        if (isNumber(max) === false) {
          throw new TypeError("toRegexRange: expected the second argument to be a number.");
        }
        let opts = __spreadValues({ relaxZeros: true }, options);
        if (typeof opts.strictZeros === "boolean") {
          opts.relaxZeros = opts.strictZeros === false;
        }
        let relax = String(opts.relaxZeros);
        let shorthand = String(opts.shorthand);
        let capture = String(opts.capture);
        let wrap = String(opts.wrap);
        let cacheKey = min + ":" + max + "=" + relax + shorthand + capture + wrap;
        if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
          return toRegexRange.cache[cacheKey].result;
        }
        let a2 = Math.min(min, max);
        let b = Math.max(min, max);
        if (Math.abs(a2 - b) === 1) {
          let result = min + "|" + max;
          if (opts.capture) {
            return `(${result})`;
          }
          if (opts.wrap === false) {
            return result;
          }
          return `(?:${result})`;
        }
        let isPadded = hasPadding(min) || hasPadding(max);
        let state = { min, max, a: a2, b };
        let positives = [];
        let negatives = [];
        if (isPadded) {
          state.isPadded = isPadded;
          state.maxLen = String(state.max).length;
        }
        if (a2 < 0) {
          let newMin = b < 0 ? Math.abs(b) : 1;
          negatives = splitToPatterns(newMin, Math.abs(a2), state, opts);
          a2 = state.a = 0;
        }
        if (b >= 0) {
          positives = splitToPatterns(a2, b, state, opts);
        }
        state.negatives = negatives;
        state.positives = positives;
        state.result = collatePatterns(negatives, positives, opts);
        if (opts.capture === true) {
          state.result = `(${state.result})`;
        } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
          state.result = `(?:${state.result})`;
        }
        toRegexRange.cache[cacheKey] = state;
        return state.result;
      };
      function collatePatterns(neg, pos, options) {
        let onlyNegative = filterPatterns(neg, pos, "-", false, options) || [];
        let onlyPositive = filterPatterns(pos, neg, "", false, options) || [];
        let intersected = filterPatterns(neg, pos, "-?", true, options) || [];
        let subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
        return subpatterns.join("|");
      }
      function splitToRanges(min, max) {
        let nines = 1;
        let zeros = 1;
        let stop = countNines(min, nines);
        let stops = /* @__PURE__ */ new Set([max]);
        while (min <= stop && stop <= max) {
          stops.add(stop);
          nines += 1;
          stop = countNines(min, nines);
        }
        stop = countZeros(max + 1, zeros) - 1;
        while (min < stop && stop <= max) {
          stops.add(stop);
          zeros += 1;
          stop = countZeros(max + 1, zeros) - 1;
        }
        stops = [...stops];
        stops.sort(compare);
        return stops;
      }
      function rangeToPattern(start, stop, options) {
        if (start === stop) {
          return { pattern: start, count: [], digits: 0 };
        }
        let zipped = zip(start, stop);
        let digits = zipped.length;
        let pattern = "";
        let count = 0;
        for (let i = 0;i < digits; i++) {
          let [startDigit, stopDigit] = zipped[i];
          if (startDigit === stopDigit) {
            pattern += startDigit;
          } else if (startDigit !== "0" || stopDigit !== "9") {
            pattern += toCharacterClass(startDigit, stopDigit, options);
          } else {
            count++;
          }
        }
        if (count) {
          pattern += options.shorthand === true ? "\\d" : "[0-9]";
        }
        return { pattern, count: [count], digits };
      }
      function splitToPatterns(min, max, tok, options) {
        let ranges = splitToRanges(min, max);
        let tokens = [];
        let start = min;
        let prev;
        for (let i = 0;i < ranges.length; i++) {
          let max2 = ranges[i];
          let obj = rangeToPattern(String(start), String(max2), options);
          let zeros = "";
          if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
            if (prev.count.length > 1) {
              prev.count.pop();
            }
            prev.count.push(obj.count[0]);
            prev.string = prev.pattern + toQuantifier(prev.count);
            start = max2 + 1;
            continue;
          }
          if (tok.isPadded) {
            zeros = padZeros(max2, tok, options);
          }
          obj.string = zeros + obj.pattern + toQuantifier(obj.count);
          tokens.push(obj);
          start = max2 + 1;
          prev = obj;
        }
        return tokens;
      }
      function filterPatterns(arr, comparison, prefix, intersection, options) {
        let result = [];
        for (let ele of arr) {
          let { string: string2 } = ele;
          if (!intersection && !contains(comparison, "string", string2)) {
            result.push(prefix + string2);
          }
          if (intersection && contains(comparison, "string", string2)) {
            result.push(prefix + string2);
          }
        }
        return result;
      }
      function zip(a2, b) {
        let arr = [];
        for (let i = 0;i < a2.length; i++)
          arr.push([a2[i], b[i]]);
        return arr;
      }
      function compare(a2, b) {
        return a2 > b ? 1 : b > a2 ? -1 : 0;
      }
      function contains(arr, key, val) {
        return arr.some((ele) => ele[key] === val);
      }
      function countNines(min, len) {
        return Number(String(min).slice(0, -len) + "9".repeat(len));
      }
      function countZeros(integer, zeros) {
        return integer - integer % Math.pow(10, zeros);
      }
      function toQuantifier(digits) {
        let [start = 0, stop = ""] = digits;
        if (stop || start > 1) {
          return `{${start + (stop ? "," + stop : "")}}`;
        }
        return "";
      }
      function toCharacterClass(a2, b, options) {
        return `[${a2}${b - a2 === 1 ? "" : "-"}${b}]`;
      }
      function hasPadding(str) {
        return /^-?(0+)\d/.test(str);
      }
      function padZeros(value, tok, options) {
        if (!tok.isPadded) {
          return value;
        }
        let diff = Math.abs(tok.maxLen - String(value).length);
        let relax = options.relaxZeros !== false;
        switch (diff) {
          case 0:
            return "";
          case 1:
            return relax ? "0?" : "0";
          case 2:
            return relax ? "0{0,2}" : "00";
          default: {
            return relax ? `0{0,${diff}}` : `0{${diff}}`;
          }
        }
      }
      toRegexRange.cache = {};
      toRegexRange.clearCache = () => toRegexRange.cache = {};
      module2.exports = toRegexRange;
    }
  });
  var require_fill_range = __commonJS2({
    "node_modules/fill-range/index.js"(exports2, module2) {
      var util = __require("util");
      var toRegexRange = require_to_regex_range();
      var isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
      var transform = (toNumber) => {
        return (value) => toNumber === true ? Number(value) : String(value);
      };
      var isValidValue = (value) => {
        return typeof value === "number" || typeof value === "string" && value !== "";
      };
      var isNumber = (num) => Number.isInteger(+num);
      var zeros = (input) => {
        let value = `${input}`;
        let index = -1;
        if (value[0] === "-")
          value = value.slice(1);
        if (value === "0")
          return false;
        while (value[++index] === "0")
          ;
        return index > 0;
      };
      var stringify5 = (start, end, options) => {
        if (typeof start === "string" || typeof end === "string") {
          return true;
        }
        return options.stringify === true;
      };
      var pad = (input, maxLength, toNumber) => {
        if (maxLength > 0) {
          let dash = input[0] === "-" ? "-" : "";
          if (dash)
            input = input.slice(1);
          input = dash + input.padStart(dash ? maxLength - 1 : maxLength, "0");
        }
        if (toNumber === false) {
          return String(input);
        }
        return input;
      };
      var toMaxLen = (input, maxLength) => {
        let negative = input[0] === "-" ? "-" : "";
        if (negative) {
          input = input.slice(1);
          maxLength--;
        }
        while (input.length < maxLength)
          input = "0" + input;
        return negative ? "-" + input : input;
      };
      var toSequence = (parts, options, maxLen) => {
        parts.negatives.sort((a2, b) => a2 < b ? -1 : a2 > b ? 1 : 0);
        parts.positives.sort((a2, b) => a2 < b ? -1 : a2 > b ? 1 : 0);
        let prefix = options.capture ? "" : "?:";
        let positives = "";
        let negatives = "";
        let result;
        if (parts.positives.length) {
          positives = parts.positives.map((v2) => toMaxLen(String(v2), maxLen)).join("|");
        }
        if (parts.negatives.length) {
          negatives = `-(${prefix}${parts.negatives.map((v2) => toMaxLen(String(v2), maxLen)).join("|")})`;
        }
        if (positives && negatives) {
          result = `${positives}|${negatives}`;
        } else {
          result = positives || negatives;
        }
        if (options.wrap) {
          return `(${prefix}${result})`;
        }
        return result;
      };
      var toRange = (a2, b, isNumbers, options) => {
        if (isNumbers) {
          return toRegexRange(a2, b, __spreadValues({ wrap: false }, options));
        }
        let start = String.fromCharCode(a2);
        if (a2 === b)
          return start;
        let stop = String.fromCharCode(b);
        return `[${start}-${stop}]`;
      };
      var toRegex = (start, end, options) => {
        if (Array.isArray(start)) {
          let wrap = options.wrap === true;
          let prefix = options.capture ? "" : "?:";
          return wrap ? `(${prefix}${start.join("|")})` : start.join("|");
        }
        return toRegexRange(start, end, options);
      };
      var rangeError = (...args) => {
        return new RangeError("Invalid range arguments: " + util.inspect(...args));
      };
      var invalidRange = (start, end, options) => {
        if (options.strictRanges === true)
          throw rangeError([start, end]);
        return [];
      };
      var invalidStep = (step, options) => {
        if (options.strictRanges === true) {
          throw new TypeError(`Expected step "${step}" to be a number`);
        }
        return [];
      };
      var fillNumbers = (start, end, step = 1, options = {}) => {
        let a2 = Number(start);
        let b = Number(end);
        if (!Number.isInteger(a2) || !Number.isInteger(b)) {
          if (options.strictRanges === true)
            throw rangeError([start, end]);
          return [];
        }
        if (a2 === 0)
          a2 = 0;
        if (b === 0)
          b = 0;
        let descending = a2 > b;
        let startString = String(start);
        let endString = String(end);
        let stepString = String(step);
        step = Math.max(Math.abs(step), 1);
        let padded = zeros(startString) || zeros(endString) || zeros(stepString);
        let maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
        let toNumber = padded === false && stringify5(start, end, options) === false;
        let format = options.transform || transform(toNumber);
        if (options.toRegex && step === 1) {
          return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
        }
        let parts = { negatives: [], positives: [] };
        let push = (num) => parts[num < 0 ? "negatives" : "positives"].push(Math.abs(num));
        let range = [];
        let index = 0;
        while (descending ? a2 >= b : a2 <= b) {
          if (options.toRegex === true && step > 1) {
            push(a2);
          } else {
            range.push(pad(format(a2, index), maxLen, toNumber));
          }
          a2 = descending ? a2 - step : a2 + step;
          index++;
        }
        if (options.toRegex === true) {
          return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, __spreadValues({ wrap: false }, options));
        }
        return range;
      };
      var fillLetters = (start, end, step = 1, options = {}) => {
        if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
          return invalidRange(start, end, options);
        }
        let format = options.transform || ((val) => String.fromCharCode(val));
        let a2 = `${start}`.charCodeAt(0);
        let b = `${end}`.charCodeAt(0);
        let descending = a2 > b;
        let min = Math.min(a2, b);
        let max = Math.max(a2, b);
        if (options.toRegex && step === 1) {
          return toRange(min, max, false, options);
        }
        let range = [];
        let index = 0;
        while (descending ? a2 >= b : a2 <= b) {
          range.push(format(a2, index));
          a2 = descending ? a2 - step : a2 + step;
          index++;
        }
        if (options.toRegex === true) {
          return toRegex(range, null, { wrap: false, options });
        }
        return range;
      };
      var fill = (start, end, step, options = {}) => {
        if (end == null && isValidValue(start)) {
          return [start];
        }
        if (!isValidValue(start) || !isValidValue(end)) {
          return invalidRange(start, end, options);
        }
        if (typeof step === "function") {
          return fill(start, end, 1, { transform: step });
        }
        if (isObject(step)) {
          return fill(start, end, 0, step);
        }
        let opts = __spreadValues({}, options);
        if (opts.capture === true)
          opts.wrap = true;
        step = step || opts.step || 1;
        if (!isNumber(step)) {
          if (step != null && !isObject(step))
            return invalidStep(step, opts);
          return fill(start, end, 1, step);
        }
        if (isNumber(start) && isNumber(end)) {
          return fillNumbers(start, end, step, opts);
        }
        return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
      };
      module2.exports = fill;
    }
  });
  var require_compile = __commonJS2({
    "node_modules/braces/lib/compile.js"(exports2, module2) {
      var fill = require_fill_range();
      var utils = require_utils();
      var compile = (ast, options = {}) => {
        const walk = (node, parent = {}) => {
          const invalidBlock = utils.isInvalidBrace(parent);
          const invalidNode = node.invalid === true && options.escapeInvalid === true;
          const invalid = invalidBlock === true || invalidNode === true;
          const prefix = options.escapeInvalid === true ? "\\" : "";
          let output = "";
          if (node.isOpen === true) {
            return prefix + node.value;
          }
          if (node.isClose === true) {
            console.log("node.isClose", prefix, node.value);
            return prefix + node.value;
          }
          if (node.type === "open") {
            return invalid ? prefix + node.value : "(";
          }
          if (node.type === "close") {
            return invalid ? prefix + node.value : ")";
          }
          if (node.type === "comma") {
            return node.prev.type === "comma" ? "" : invalid ? node.value : "|";
          }
          if (node.value) {
            return node.value;
          }
          if (node.nodes && node.ranges > 0) {
            const args = utils.reduce(node.nodes);
            const range = fill(...args, __spreadProps(__spreadValues({}, options), { wrap: false, toRegex: true, strictZeros: true }));
            if (range.length !== 0) {
              return args.length > 1 && range.length > 1 ? `(${range})` : range;
            }
          }
          if (node.nodes) {
            for (const child of node.nodes) {
              output += walk(child, node);
            }
          }
          return output;
        };
        return walk(ast);
      };
      module2.exports = compile;
    }
  });
  var require_expand = __commonJS2({
    "node_modules/braces/lib/expand.js"(exports2, module2) {
      var fill = require_fill_range();
      var stringify5 = require_stringify();
      var utils = require_utils();
      var append = (queue = "", stash = "", enclose = false) => {
        const result = [];
        queue = [].concat(queue);
        stash = [].concat(stash);
        if (!stash.length)
          return queue;
        if (!queue.length) {
          return enclose ? utils.flatten(stash).map((ele) => `{${ele}}`) : stash;
        }
        for (const item of queue) {
          if (Array.isArray(item)) {
            for (const value of item) {
              result.push(append(value, stash, enclose));
            }
          } else {
            for (let ele of stash) {
              if (enclose === true && typeof ele === "string")
                ele = `{${ele}}`;
              result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
            }
          }
        }
        return utils.flatten(result);
      };
      var expand = (ast, options = {}) => {
        const rangeLimit = options.rangeLimit === undefined ? 1000 : options.rangeLimit;
        const walk = (node, parent = {}) => {
          node.queue = [];
          let p = parent;
          let q = parent.queue;
          while (p.type !== "brace" && p.type !== "root" && p.parent) {
            p = p.parent;
            q = p.queue;
          }
          if (node.invalid || node.dollar) {
            q.push(append(q.pop(), stringify5(node, options)));
            return;
          }
          if (node.type === "brace" && node.invalid !== true && node.nodes.length === 2) {
            q.push(append(q.pop(), ["{}"]));
            return;
          }
          if (node.nodes && node.ranges > 0) {
            const args = utils.reduce(node.nodes);
            if (utils.exceedsLimit(...args, options.step, rangeLimit)) {
              throw new RangeError("expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.");
            }
            let range = fill(...args, options);
            if (range.length === 0) {
              range = stringify5(node, options);
            }
            q.push(append(q.pop(), range));
            node.nodes = [];
            return;
          }
          const enclose = utils.encloseBrace(node);
          let queue = node.queue;
          let block = node;
          while (block.type !== "brace" && block.type !== "root" && block.parent) {
            block = block.parent;
            queue = block.queue;
          }
          for (let i = 0;i < node.nodes.length; i++) {
            const child = node.nodes[i];
            if (child.type === "comma" && node.type === "brace") {
              if (i === 1)
                queue.push("");
              queue.push("");
              continue;
            }
            if (child.type === "close") {
              q.push(append(q.pop(), queue, enclose));
              continue;
            }
            if (child.value && child.type !== "open") {
              queue.push(append(queue.pop(), child.value));
              continue;
            }
            if (child.nodes) {
              walk(child, node);
            }
          }
          return queue;
        };
        return utils.flatten(walk(ast));
      };
      module2.exports = expand;
    }
  });
  var require_constants = __commonJS2({
    "node_modules/braces/lib/constants.js"(exports2, module2) {
      module2.exports = {
        MAX_LENGTH: 1e4,
        CHAR_0: "0",
        CHAR_9: "9",
        CHAR_UPPERCASE_A: "A",
        CHAR_LOWERCASE_A: "a",
        CHAR_UPPERCASE_Z: "Z",
        CHAR_LOWERCASE_Z: "z",
        CHAR_LEFT_PARENTHESES: "(",
        CHAR_RIGHT_PARENTHESES: ")",
        CHAR_ASTERISK: "*",
        CHAR_AMPERSAND: "&",
        CHAR_AT: "@",
        CHAR_BACKSLASH: "\\",
        CHAR_BACKTICK: "`",
        CHAR_CARRIAGE_RETURN: "\r",
        CHAR_CIRCUMFLEX_ACCENT: "^",
        CHAR_COLON: ":",
        CHAR_COMMA: ",",
        CHAR_DOLLAR: "$",
        CHAR_DOT: ".",
        CHAR_DOUBLE_QUOTE: '"',
        CHAR_EQUAL: "=",
        CHAR_EXCLAMATION_MARK: "!",
        CHAR_FORM_FEED: "\f",
        CHAR_FORWARD_SLASH: "/",
        CHAR_HASH: "#",
        CHAR_HYPHEN_MINUS: "-",
        CHAR_LEFT_ANGLE_BRACKET: "<",
        CHAR_LEFT_CURLY_BRACE: "{",
        CHAR_LEFT_SQUARE_BRACKET: "[",
        CHAR_LINE_FEED: `
`,
        CHAR_NO_BREAK_SPACE: " ",
        CHAR_PERCENT: "%",
        CHAR_PLUS: "+",
        CHAR_QUESTION_MARK: "?",
        CHAR_RIGHT_ANGLE_BRACKET: ">",
        CHAR_RIGHT_CURLY_BRACE: "}",
        CHAR_RIGHT_SQUARE_BRACKET: "]",
        CHAR_SEMICOLON: ";",
        CHAR_SINGLE_QUOTE: "'",
        CHAR_SPACE: " ",
        CHAR_TAB: "\t",
        CHAR_UNDERSCORE: "_",
        CHAR_VERTICAL_LINE: "|",
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF"
      };
    }
  });
  var require_parse = __commonJS2({
    "node_modules/braces/lib/parse.js"(exports2, module2) {
      var stringify5 = require_stringify();
      var {
        MAX_LENGTH,
        CHAR_BACKSLASH,
        CHAR_BACKTICK,
        CHAR_COMMA,
        CHAR_DOT,
        CHAR_LEFT_PARENTHESES,
        CHAR_RIGHT_PARENTHESES,
        CHAR_LEFT_CURLY_BRACE,
        CHAR_RIGHT_CURLY_BRACE,
        CHAR_LEFT_SQUARE_BRACKET,
        CHAR_RIGHT_SQUARE_BRACKET,
        CHAR_DOUBLE_QUOTE,
        CHAR_SINGLE_QUOTE,
        CHAR_NO_BREAK_SPACE,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE
      } = require_constants();
      var parse3 = (input, options = {}) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected a string");
        }
        const opts = options || {};
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        if (input.length > max) {
          throw new SyntaxError(`Input length (${input.length}), exceeds max characters (${max})`);
        }
        const ast = { type: "root", input, nodes: [] };
        const stack = [ast];
        let block = ast;
        let prev = ast;
        let brackets = 0;
        const length = input.length;
        let index = 0;
        let depth = 0;
        let value;
        const advance = () => input[index++];
        const push = (node) => {
          if (node.type === "text" && prev.type === "dot") {
            prev.type = "text";
          }
          if (prev && prev.type === "text" && node.type === "text") {
            prev.value += node.value;
            return;
          }
          block.nodes.push(node);
          node.parent = block;
          node.prev = prev;
          prev = node;
          return node;
        };
        push({ type: "bos" });
        while (index < length) {
          block = stack[stack.length - 1];
          value = advance();
          if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
            continue;
          }
          if (value === CHAR_BACKSLASH) {
            push({ type: "text", value: (options.keepEscaping ? value : "") + advance() });
            continue;
          }
          if (value === CHAR_RIGHT_SQUARE_BRACKET) {
            push({ type: "text", value: "\\" + value });
            continue;
          }
          if (value === CHAR_LEFT_SQUARE_BRACKET) {
            brackets++;
            let next;
            while (index < length && (next = advance())) {
              value += next;
              if (next === CHAR_LEFT_SQUARE_BRACKET) {
                brackets++;
                continue;
              }
              if (next === CHAR_BACKSLASH) {
                value += advance();
                continue;
              }
              if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                brackets--;
                if (brackets === 0) {
                  break;
                }
              }
            }
            push({ type: "text", value });
            continue;
          }
          if (value === CHAR_LEFT_PARENTHESES) {
            block = push({ type: "paren", nodes: [] });
            stack.push(block);
            push({ type: "text", value });
            continue;
          }
          if (value === CHAR_RIGHT_PARENTHESES) {
            if (block.type !== "paren") {
              push({ type: "text", value });
              continue;
            }
            block = stack.pop();
            push({ type: "text", value });
            block = stack[stack.length - 1];
            continue;
          }
          if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
            const open = value;
            let next;
            if (options.keepQuotes !== true) {
              value = "";
            }
            while (index < length && (next = advance())) {
              if (next === CHAR_BACKSLASH) {
                value += next + advance();
                continue;
              }
              if (next === open) {
                if (options.keepQuotes === true)
                  value += next;
                break;
              }
              value += next;
            }
            push({ type: "text", value });
            continue;
          }
          if (value === CHAR_LEFT_CURLY_BRACE) {
            depth++;
            const dollar = prev.value && prev.value.slice(-1) === "$" || block.dollar === true;
            const brace = {
              type: "brace",
              open: true,
              close: false,
              dollar,
              depth,
              commas: 0,
              ranges: 0,
              nodes: []
            };
            block = push(brace);
            stack.push(block);
            push({ type: "open", value });
            continue;
          }
          if (value === CHAR_RIGHT_CURLY_BRACE) {
            if (block.type !== "brace") {
              push({ type: "text", value });
              continue;
            }
            const type = "close";
            block = stack.pop();
            block.close = true;
            push({ type, value });
            depth--;
            block = stack[stack.length - 1];
            continue;
          }
          if (value === CHAR_COMMA && depth > 0) {
            if (block.ranges > 0) {
              block.ranges = 0;
              const open = block.nodes.shift();
              block.nodes = [open, { type: "text", value: stringify5(block) }];
            }
            push({ type: "comma", value });
            block.commas++;
            continue;
          }
          if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
            const siblings = block.nodes;
            if (depth === 0 || siblings.length === 0) {
              push({ type: "text", value });
              continue;
            }
            if (prev.type === "dot") {
              block.range = [];
              prev.value += value;
              prev.type = "range";
              if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                block.invalid = true;
                block.ranges = 0;
                prev.type = "text";
                continue;
              }
              block.ranges++;
              block.args = [];
              continue;
            }
            if (prev.type === "range") {
              siblings.pop();
              const before = siblings[siblings.length - 1];
              before.value += prev.value + value;
              prev = before;
              block.ranges--;
              continue;
            }
            push({ type: "dot", value });
            continue;
          }
          push({ type: "text", value });
        }
        do {
          block = stack.pop();
          if (block.type !== "root") {
            block.nodes.forEach((node) => {
              if (!node.nodes) {
                if (node.type === "open")
                  node.isOpen = true;
                if (node.type === "close")
                  node.isClose = true;
                if (!node.nodes)
                  node.type = "text";
                node.invalid = true;
              }
            });
            const parent = stack[stack.length - 1];
            const index2 = parent.nodes.indexOf(block);
            parent.nodes.splice(index2, 1, ...block.nodes);
          }
        } while (stack.length > 0);
        push({ type: "eos" });
        return ast;
      };
      module2.exports = parse3;
    }
  });
  var require_braces = __commonJS2({
    "node_modules/braces/index.js"(exports2, module2) {
      var stringify5 = require_stringify();
      var compile = require_compile();
      var expand = require_expand();
      var parse3 = require_parse();
      var braces = (input, options = {}) => {
        let output = [];
        if (Array.isArray(input)) {
          for (const pattern of input) {
            const result = braces.create(pattern, options);
            if (Array.isArray(result)) {
              output.push(...result);
            } else {
              output.push(result);
            }
          }
        } else {
          output = [].concat(braces.create(input, options));
        }
        if (options && options.expand === true && options.nodupes === true) {
          output = [...new Set(output)];
        }
        return output;
      };
      braces.parse = (input, options = {}) => parse3(input, options);
      braces.stringify = (input, options = {}) => {
        if (typeof input === "string") {
          return stringify5(braces.parse(input, options), options);
        }
        return stringify5(input, options);
      };
      braces.compile = (input, options = {}) => {
        if (typeof input === "string") {
          input = braces.parse(input, options);
        }
        return compile(input, options);
      };
      braces.expand = (input, options = {}) => {
        if (typeof input === "string") {
          input = braces.parse(input, options);
        }
        let result = expand(input, options);
        if (options.noempty === true) {
          result = result.filter(Boolean);
        }
        if (options.nodupes === true) {
          result = [...new Set(result)];
        }
        return result;
      };
      braces.create = (input, options = {}) => {
        if (input === "" || input.length < 3) {
          return [input];
        }
        return options.expand !== true ? braces.compile(input, options) : braces.expand(input, options);
      };
      module2.exports = braces;
    }
  });
  var require_constants2 = __commonJS2({
    "node_modules/picomatch/lib/constants.js"(exports2, module2) {
      var path3 = __require("path");
      var WIN_SLASH = "\\\\/";
      var WIN_NO_SLASH = `[^${WIN_SLASH}]`;
      var DOT_LITERAL = "\\.";
      var PLUS_LITERAL = "\\+";
      var QMARK_LITERAL = "\\?";
      var SLASH_LITERAL = "\\/";
      var ONE_CHAR = "(?=.)";
      var QMARK = "[^/]";
      var END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
      var START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
      var DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
      var NO_DOT = `(?!${DOT_LITERAL})`;
      var NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
      var NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
      var NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
      var QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
      var STAR = `${QMARK}*?`;
      var POSIX_CHARS = {
        DOT_LITERAL,
        PLUS_LITERAL,
        QMARK_LITERAL,
        SLASH_LITERAL,
        ONE_CHAR,
        QMARK,
        END_ANCHOR,
        DOTS_SLASH,
        NO_DOT,
        NO_DOTS,
        NO_DOT_SLASH,
        NO_DOTS_SLASH,
        QMARK_NO_DOT,
        STAR,
        START_ANCHOR
      };
      var WINDOWS_CHARS = __spreadProps(__spreadValues({}, POSIX_CHARS), {
        SLASH_LITERAL: `[${WIN_SLASH}]`,
        QMARK: WIN_NO_SLASH,
        STAR: `${WIN_NO_SLASH}*?`,
        DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
        NO_DOT: `(?!${DOT_LITERAL})`,
        NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
        NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
        NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
        QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
        START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
        END_ANCHOR: `(?:[${WIN_SLASH}]|$)`
      });
      var POSIX_REGEX_SOURCE = {
        alnum: "a-zA-Z0-9",
        alpha: "a-zA-Z",
        ascii: "\\x00-\\x7F",
        blank: " \\t",
        cntrl: "\\x00-\\x1F\\x7F",
        digit: "0-9",
        graph: "\\x21-\\x7E",
        lower: "a-z",
        print: "\\x20-\\x7E ",
        punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
        space: " \\t\\r\\n\\v\\f",
        upper: "A-Z",
        word: "A-Za-z0-9_",
        xdigit: "A-Fa-f0-9"
      };
      module2.exports = {
        MAX_LENGTH: 1024 * 64,
        POSIX_REGEX_SOURCE,
        REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
        REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
        REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
        REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
        REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
        REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
        REPLACEMENTS: {
          "***": "*",
          "**/**": "**",
          "**/**/**": "**"
        },
        CHAR_0: 48,
        CHAR_9: 57,
        CHAR_UPPERCASE_A: 65,
        CHAR_LOWERCASE_A: 97,
        CHAR_UPPERCASE_Z: 90,
        CHAR_LOWERCASE_Z: 122,
        CHAR_LEFT_PARENTHESES: 40,
        CHAR_RIGHT_PARENTHESES: 41,
        CHAR_ASTERISK: 42,
        CHAR_AMPERSAND: 38,
        CHAR_AT: 64,
        CHAR_BACKWARD_SLASH: 92,
        CHAR_CARRIAGE_RETURN: 13,
        CHAR_CIRCUMFLEX_ACCENT: 94,
        CHAR_COLON: 58,
        CHAR_COMMA: 44,
        CHAR_DOT: 46,
        CHAR_DOUBLE_QUOTE: 34,
        CHAR_EQUAL: 61,
        CHAR_EXCLAMATION_MARK: 33,
        CHAR_FORM_FEED: 12,
        CHAR_FORWARD_SLASH: 47,
        CHAR_GRAVE_ACCENT: 96,
        CHAR_HASH: 35,
        CHAR_HYPHEN_MINUS: 45,
        CHAR_LEFT_ANGLE_BRACKET: 60,
        CHAR_LEFT_CURLY_BRACE: 123,
        CHAR_LEFT_SQUARE_BRACKET: 91,
        CHAR_LINE_FEED: 10,
        CHAR_NO_BREAK_SPACE: 160,
        CHAR_PERCENT: 37,
        CHAR_PLUS: 43,
        CHAR_QUESTION_MARK: 63,
        CHAR_RIGHT_ANGLE_BRACKET: 62,
        CHAR_RIGHT_CURLY_BRACE: 125,
        CHAR_RIGHT_SQUARE_BRACKET: 93,
        CHAR_SEMICOLON: 59,
        CHAR_SINGLE_QUOTE: 39,
        CHAR_SPACE: 32,
        CHAR_TAB: 9,
        CHAR_UNDERSCORE: 95,
        CHAR_VERTICAL_LINE: 124,
        CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
        SEP: path3.sep,
        extglobChars(chars) {
          return {
            "!": { type: "negate", open: "(?:(?!(?:", close: `))${chars.STAR})` },
            "?": { type: "qmark", open: "(?:", close: ")?" },
            "+": { type: "plus", open: "(?:", close: ")+" },
            "*": { type: "star", open: "(?:", close: ")*" },
            "@": { type: "at", open: "(?:", close: ")" }
          };
        },
        globChars(win32) {
          return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
        }
      };
    }
  });
  var require_utils2 = __commonJS2({
    "node_modules/picomatch/lib/utils.js"(exports2) {
      var path3 = __require("path");
      var win32 = process.platform === "win32";
      var {
        REGEX_BACKSLASH,
        REGEX_REMOVE_BACKSLASH,
        REGEX_SPECIAL_CHARS,
        REGEX_SPECIAL_CHARS_GLOBAL
      } = require_constants2();
      exports2.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
      exports2.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
      exports2.isRegexChar = (str) => str.length === 1 && exports2.hasRegexChars(str);
      exports2.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
      exports2.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
      exports2.removeBackslashes = (str) => {
        return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
          return match === "\\" ? "" : match;
        });
      };
      exports2.supportsLookbehinds = () => {
        const segs = process.version.slice(1).split(".").map(Number);
        if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
          return true;
        }
        return false;
      };
      exports2.isWindows = (options) => {
        if (options && typeof options.windows === "boolean") {
          return options.windows;
        }
        return win32 === true || path3.sep === "\\";
      };
      exports2.escapeLast = (input, char, lastIdx) => {
        const idx = input.lastIndexOf(char, lastIdx);
        if (idx === -1)
          return input;
        if (input[idx - 1] === "\\")
          return exports2.escapeLast(input, char, idx - 1);
        return `${input.slice(0, idx)}\\${input.slice(idx)}`;
      };
      exports2.removePrefix = (input, state = {}) => {
        let output = input;
        if (output.startsWith("./")) {
          output = output.slice(2);
          state.prefix = "./";
        }
        return output;
      };
      exports2.wrapOutput = (input, state = {}, options = {}) => {
        const prepend = options.contains ? "" : "^";
        const append = options.contains ? "" : "$";
        let output = `${prepend}(?:${input})${append}`;
        if (state.negated === true) {
          output = `(?:^(?!${output}).*$)`;
        }
        return output;
      };
    }
  });
  var require_scan = __commonJS2({
    "node_modules/picomatch/lib/scan.js"(exports2, module2) {
      var utils = require_utils2();
      var {
        CHAR_ASTERISK,
        CHAR_AT,
        CHAR_BACKWARD_SLASH,
        CHAR_COMMA,
        CHAR_DOT,
        CHAR_EXCLAMATION_MARK,
        CHAR_FORWARD_SLASH,
        CHAR_LEFT_CURLY_BRACE,
        CHAR_LEFT_PARENTHESES,
        CHAR_LEFT_SQUARE_BRACKET,
        CHAR_PLUS,
        CHAR_QUESTION_MARK,
        CHAR_RIGHT_CURLY_BRACE,
        CHAR_RIGHT_PARENTHESES,
        CHAR_RIGHT_SQUARE_BRACKET
      } = require_constants2();
      var isPathSeparator = (code) => {
        return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
      };
      var depth = (token) => {
        if (token.isPrefix !== true) {
          token.depth = token.isGlobstar ? Infinity : 1;
        }
      };
      var scan = (input, options) => {
        const opts = options || {};
        const length = input.length - 1;
        const scanToEnd = opts.parts === true || opts.scanToEnd === true;
        const slashes = [];
        const tokens = [];
        const parts = [];
        let str = input;
        let index = -1;
        let start = 0;
        let lastIndex = 0;
        let isBrace = false;
        let isBracket = false;
        let isGlob = false;
        let isExtglob = false;
        let isGlobstar = false;
        let braceEscaped = false;
        let backslashes = false;
        let negated = false;
        let negatedExtglob = false;
        let finished2 = false;
        let braces = 0;
        let prev;
        let code;
        let token = { value: "", depth: 0, isGlob: false };
        const eos = () => index >= length;
        const peek = () => str.charCodeAt(index + 1);
        const advance = () => {
          prev = code;
          return str.charCodeAt(++index);
        };
        while (index < length) {
          code = advance();
          let next;
          if (code === CHAR_BACKWARD_SLASH) {
            backslashes = token.backslashes = true;
            code = advance();
            if (code === CHAR_LEFT_CURLY_BRACE) {
              braceEscaped = true;
            }
            continue;
          }
          if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
            braces++;
            while (eos() !== true && (code = advance())) {
              if (code === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (code === CHAR_LEFT_CURLY_BRACE) {
                braces++;
                continue;
              }
              if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                isBrace = token.isBrace = true;
                isGlob = token.isGlob = true;
                finished2 = true;
                if (scanToEnd === true) {
                  continue;
                }
                break;
              }
              if (braceEscaped !== true && code === CHAR_COMMA) {
                isBrace = token.isBrace = true;
                isGlob = token.isGlob = true;
                finished2 = true;
                if (scanToEnd === true) {
                  continue;
                }
                break;
              }
              if (code === CHAR_RIGHT_CURLY_BRACE) {
                braces--;
                if (braces === 0) {
                  braceEscaped = false;
                  isBrace = token.isBrace = true;
                  finished2 = true;
                  break;
                }
              }
            }
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_FORWARD_SLASH) {
            slashes.push(index);
            tokens.push(token);
            token = { value: "", depth: 0, isGlob: false };
            if (finished2 === true)
              continue;
            if (prev === CHAR_DOT && index === start + 1) {
              start += 2;
              continue;
            }
            lastIndex = index + 1;
            continue;
          }
          if (opts.noext !== true) {
            const isExtglobChar = code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK;
            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
              isGlob = token.isGlob = true;
              isExtglob = token.isExtglob = true;
              finished2 = true;
              if (code === CHAR_EXCLAMATION_MARK && index === start) {
                negatedExtglob = true;
              }
              if (scanToEnd === true) {
                while (eos() !== true && (code = advance())) {
                  if (code === CHAR_BACKWARD_SLASH) {
                    backslashes = token.backslashes = true;
                    code = advance();
                    continue;
                  }
                  if (code === CHAR_RIGHT_PARENTHESES) {
                    isGlob = token.isGlob = true;
                    finished2 = true;
                    break;
                  }
                }
                continue;
              }
              break;
            }
          }
          if (code === CHAR_ASTERISK) {
            if (prev === CHAR_ASTERISK)
              isGlobstar = token.isGlobstar = true;
            isGlob = token.isGlob = true;
            finished2 = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_QUESTION_MARK) {
            isGlob = token.isGlob = true;
            finished2 = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (code === CHAR_LEFT_SQUARE_BRACKET) {
            while (eos() !== true && (next = advance())) {
              if (next === CHAR_BACKWARD_SLASH) {
                backslashes = token.backslashes = true;
                advance();
                continue;
              }
              if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                isBracket = token.isBracket = true;
                isGlob = token.isGlob = true;
                finished2 = true;
                break;
              }
            }
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
          if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
            negated = token.negated = true;
            start++;
            continue;
          }
          if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
            isGlob = token.isGlob = true;
            if (scanToEnd === true) {
              while (eos() !== true && (code = advance())) {
                if (code === CHAR_LEFT_PARENTHESES) {
                  backslashes = token.backslashes = true;
                  code = advance();
                  continue;
                }
                if (code === CHAR_RIGHT_PARENTHESES) {
                  finished2 = true;
                  break;
                }
              }
              continue;
            }
            break;
          }
          if (isGlob === true) {
            finished2 = true;
            if (scanToEnd === true) {
              continue;
            }
            break;
          }
        }
        if (opts.noext === true) {
          isExtglob = false;
          isGlob = false;
        }
        let base = str;
        let prefix = "";
        let glob22 = "";
        if (start > 0) {
          prefix = str.slice(0, start);
          str = str.slice(start);
          lastIndex -= start;
        }
        if (base && isGlob === true && lastIndex > 0) {
          base = str.slice(0, lastIndex);
          glob22 = str.slice(lastIndex);
        } else if (isGlob === true) {
          base = "";
          glob22 = str;
        } else {
          base = str;
        }
        if (base && base !== "" && base !== "/" && base !== str) {
          if (isPathSeparator(base.charCodeAt(base.length - 1))) {
            base = base.slice(0, -1);
          }
        }
        if (opts.unescape === true) {
          if (glob22)
            glob22 = utils.removeBackslashes(glob22);
          if (base && backslashes === true) {
            base = utils.removeBackslashes(base);
          }
        }
        const state = {
          prefix,
          input,
          start,
          base,
          glob: glob22,
          isBrace,
          isBracket,
          isGlob,
          isExtglob,
          isGlobstar,
          negated,
          negatedExtglob
        };
        if (opts.tokens === true) {
          state.maxDepth = 0;
          if (!isPathSeparator(code)) {
            tokens.push(token);
          }
          state.tokens = tokens;
        }
        if (opts.parts === true || opts.tokens === true) {
          let prevIndex;
          for (let idx = 0;idx < slashes.length; idx++) {
            const n3 = prevIndex ? prevIndex + 1 : start;
            const i = slashes[idx];
            const value = input.slice(n3, i);
            if (opts.tokens) {
              if (idx === 0 && start !== 0) {
                tokens[idx].isPrefix = true;
                tokens[idx].value = prefix;
              } else {
                tokens[idx].value = value;
              }
              depth(tokens[idx]);
              state.maxDepth += tokens[idx].depth;
            }
            if (idx !== 0 || value !== "") {
              parts.push(value);
            }
            prevIndex = i;
          }
          if (prevIndex && prevIndex + 1 < input.length) {
            const value = input.slice(prevIndex + 1);
            parts.push(value);
            if (opts.tokens) {
              tokens[tokens.length - 1].value = value;
              depth(tokens[tokens.length - 1]);
              state.maxDepth += tokens[tokens.length - 1].depth;
            }
          }
          state.slashes = slashes;
          state.parts = parts;
        }
        return state;
      };
      module2.exports = scan;
    }
  });
  var require_parse2 = __commonJS2({
    "node_modules/picomatch/lib/parse.js"(exports2, module2) {
      var constants = require_constants2();
      var utils = require_utils2();
      var {
        MAX_LENGTH,
        POSIX_REGEX_SOURCE,
        REGEX_NON_SPECIAL_CHARS,
        REGEX_SPECIAL_CHARS_BACKREF,
        REPLACEMENTS
      } = constants;
      var expandRange = (args, options) => {
        if (typeof options.expandRange === "function") {
          return options.expandRange(...args, options);
        }
        args.sort();
        const value = `[${args.join("-")}]`;
        try {
          new RegExp(value);
        } catch (ex) {
          return args.map((v2) => utils.escapeRegex(v2)).join("..");
        }
        return value;
      };
      var syntaxError = (type, char) => {
        return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
      };
      var parse3 = (input, options) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected a string");
        }
        input = REPLACEMENTS[input] || input;
        const opts = __spreadValues({}, options);
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        let len = input.length;
        if (len > max) {
          throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
        }
        const bos = { type: "bos", value: "", output: opts.prepend || "" };
        const tokens = [bos];
        const capture = opts.capture ? "" : "?:";
        const win32 = utils.isWindows(options);
        const PLATFORM_CHARS = constants.globChars(win32);
        const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
        const {
          DOT_LITERAL,
          PLUS_LITERAL,
          SLASH_LITERAL,
          ONE_CHAR,
          DOTS_SLASH,
          NO_DOT,
          NO_DOT_SLASH,
          NO_DOTS_SLASH,
          QMARK,
          QMARK_NO_DOT,
          STAR,
          START_ANCHOR
        } = PLATFORM_CHARS;
        const globstar = (opts2) => {
          return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
        };
        const nodot = opts.dot ? "" : NO_DOT;
        const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
        let star = opts.bash === true ? globstar(opts) : STAR;
        if (opts.capture) {
          star = `(${star})`;
        }
        if (typeof opts.noext === "boolean") {
          opts.noextglob = opts.noext;
        }
        const state = {
          input,
          index: -1,
          start: 0,
          dot: opts.dot === true,
          consumed: "",
          output: "",
          prefix: "",
          backtrack: false,
          negated: false,
          brackets: 0,
          braces: 0,
          parens: 0,
          quotes: 0,
          globstar: false,
          tokens
        };
        input = utils.removePrefix(input, state);
        len = input.length;
        const extglobs = [];
        const braces = [];
        const stack = [];
        let prev = bos;
        let value;
        const eos = () => state.index === len - 1;
        const peek = state.peek = (n3 = 1) => input[state.index + n3];
        const advance = state.advance = () => input[++state.index] || "";
        const remaining = () => input.slice(state.index + 1);
        const consume = (value2 = "", num = 0) => {
          state.consumed += value2;
          state.index += num;
        };
        const append = (token) => {
          state.output += token.output != null ? token.output : token.value;
          consume(token.value);
        };
        const negate = () => {
          let count = 1;
          while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
            advance();
            state.start++;
            count++;
          }
          if (count % 2 === 0) {
            return false;
          }
          state.negated = true;
          state.start++;
          return true;
        };
        const increment = (type) => {
          state[type]++;
          stack.push(type);
        };
        const decrement = (type) => {
          state[type]--;
          stack.pop();
        };
        const push = (tok) => {
          if (prev.type === "globstar") {
            const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
            const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
            if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
              state.output = state.output.slice(0, -prev.output.length);
              prev.type = "star";
              prev.value = "*";
              prev.output = star;
              state.output += prev.output;
            }
          }
          if (extglobs.length && tok.type !== "paren") {
            extglobs[extglobs.length - 1].inner += tok.value;
          }
          if (tok.value || tok.output)
            append(tok);
          if (prev && prev.type === "text" && tok.type === "text") {
            prev.value += tok.value;
            prev.output = (prev.output || "") + tok.value;
            return;
          }
          tok.prev = prev;
          tokens.push(tok);
          prev = tok;
        };
        const extglobOpen = (type, value2) => {
          const token = __spreadProps(__spreadValues({}, EXTGLOB_CHARS[value2]), { conditions: 1, inner: "" });
          token.prev = prev;
          token.parens = state.parens;
          token.output = state.output;
          const output = (opts.capture ? "(" : "") + token.open;
          increment("parens");
          push({ type, value: value2, output: state.output ? "" : ONE_CHAR });
          push({ type: "paren", extglob: true, value: advance(), output });
          extglobs.push(token);
        };
        const extglobClose = (token) => {
          let output = token.close + (opts.capture ? ")" : "");
          let rest;
          if (token.type === "negate") {
            let extglobStar = star;
            if (token.inner && token.inner.length > 1 && token.inner.includes("/")) {
              extglobStar = globstar(opts);
            }
            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
              output = token.close = `)$))${extglobStar}`;
            }
            if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
              const expression = parse3(rest, __spreadProps(__spreadValues({}, options), { fastpaths: false })).output;
              output = token.close = `)${expression})${extglobStar})`;
            }
            if (token.prev.type === "bos") {
              state.negatedExtglob = true;
            }
          }
          push({ type: "paren", extglob: true, value, output });
          decrement("parens");
        };
        if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
          let backslashes = false;
          let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m2, esc, chars, first, rest, index) => {
            if (first === "\\") {
              backslashes = true;
              return m2;
            }
            if (first === "?") {
              if (esc) {
                return esc + first + (rest ? QMARK.repeat(rest.length) : "");
              }
              if (index === 0) {
                return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : "");
              }
              return QMARK.repeat(chars.length);
            }
            if (first === ".") {
              return DOT_LITERAL.repeat(chars.length);
            }
            if (first === "*") {
              if (esc) {
                return esc + first + (rest ? star : "");
              }
              return star;
            }
            return esc ? m2 : `\\${m2}`;
          });
          if (backslashes === true) {
            if (opts.unescape === true) {
              output = output.replace(/\\/g, "");
            } else {
              output = output.replace(/\\+/g, (m2) => {
                return m2.length % 2 === 0 ? "\\\\" : m2 ? "\\" : "";
              });
            }
          }
          if (output === input && opts.contains === true) {
            state.output = input;
            return state;
          }
          state.output = utils.wrapOutput(output, state, options);
          return state;
        }
        while (!eos()) {
          value = advance();
          if (value === "\x00") {
            continue;
          }
          if (value === "\\") {
            const next = peek();
            if (next === "/" && opts.bash !== true) {
              continue;
            }
            if (next === "." || next === ";") {
              continue;
            }
            if (!next) {
              value += "\\";
              push({ type: "text", value });
              continue;
            }
            const match = /^\\+/.exec(remaining());
            let slashes = 0;
            if (match && match[0].length > 2) {
              slashes = match[0].length;
              state.index += slashes;
              if (slashes % 2 !== 0) {
                value += "\\";
              }
            }
            if (opts.unescape === true) {
              value = advance();
            } else {
              value += advance();
            }
            if (state.brackets === 0) {
              push({ type: "text", value });
              continue;
            }
          }
          if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
            if (opts.posix !== false && value === ":") {
              const inner = prev.value.slice(1);
              if (inner.includes("[")) {
                prev.posix = true;
                if (inner.includes(":")) {
                  const idx = prev.value.lastIndexOf("[");
                  const pre = prev.value.slice(0, idx);
                  const rest2 = prev.value.slice(idx + 2);
                  const posix = POSIX_REGEX_SOURCE[rest2];
                  if (posix) {
                    prev.value = pre + posix;
                    state.backtrack = true;
                    advance();
                    if (!bos.output && tokens.indexOf(prev) === 1) {
                      bos.output = ONE_CHAR;
                    }
                    continue;
                  }
                }
              }
            }
            if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") {
              value = `\\${value}`;
            }
            if (value === "]" && (prev.value === "[" || prev.value === "[^")) {
              value = `\\${value}`;
            }
            if (opts.posix === true && value === "!" && prev.value === "[") {
              value = "^";
            }
            prev.value += value;
            append({ value });
            continue;
          }
          if (state.quotes === 1 && value !== '"') {
            value = utils.escapeRegex(value);
            prev.value += value;
            append({ value });
            continue;
          }
          if (value === '"') {
            state.quotes = state.quotes === 1 ? 0 : 1;
            if (opts.keepQuotes === true) {
              push({ type: "text", value });
            }
            continue;
          }
          if (value === "(") {
            increment("parens");
            push({ type: "paren", value });
            continue;
          }
          if (value === ")") {
            if (state.parens === 0 && opts.strictBrackets === true) {
              throw new SyntaxError(syntaxError("opening", "("));
            }
            const extglob = extglobs[extglobs.length - 1];
            if (extglob && state.parens === extglob.parens + 1) {
              extglobClose(extglobs.pop());
              continue;
            }
            push({ type: "paren", value, output: state.parens ? ")" : "\\)" });
            decrement("parens");
            continue;
          }
          if (value === "[") {
            if (opts.nobracket === true || !remaining().includes("]")) {
              if (opts.nobracket !== true && opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("closing", "]"));
              }
              value = `\\${value}`;
            } else {
              increment("brackets");
            }
            push({ type: "bracket", value });
            continue;
          }
          if (value === "]") {
            if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
              push({ type: "text", value, output: `\\${value}` });
              continue;
            }
            if (state.brackets === 0) {
              if (opts.strictBrackets === true) {
                throw new SyntaxError(syntaxError("opening", "["));
              }
              push({ type: "text", value, output: `\\${value}` });
              continue;
            }
            decrement("brackets");
            const prevValue = prev.value.slice(1);
            if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) {
              value = `/${value}`;
            }
            prev.value += value;
            append({ value });
            if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
              continue;
            }
            const escaped = utils.escapeRegex(prev.value);
            state.output = state.output.slice(0, -prev.value.length);
            if (opts.literalBrackets === true) {
              state.output += escaped;
              prev.value = escaped;
              continue;
            }
            prev.value = `(${capture}${escaped}|${prev.value})`;
            state.output += prev.value;
            continue;
          }
          if (value === "{" && opts.nobrace !== true) {
            increment("braces");
            const open = {
              type: "brace",
              value,
              output: "(",
              outputIndex: state.output.length,
              tokensIndex: state.tokens.length
            };
            braces.push(open);
            push(open);
            continue;
          }
          if (value === "}") {
            const brace = braces[braces.length - 1];
            if (opts.nobrace === true || !brace) {
              push({ type: "text", value, output: value });
              continue;
            }
            let output = ")";
            if (brace.dots === true) {
              const arr = tokens.slice();
              const range = [];
              for (let i = arr.length - 1;i >= 0; i--) {
                tokens.pop();
                if (arr[i].type === "brace") {
                  break;
                }
                if (arr[i].type !== "dots") {
                  range.unshift(arr[i].value);
                }
              }
              output = expandRange(range, opts);
              state.backtrack = true;
            }
            if (brace.comma !== true && brace.dots !== true) {
              const out = state.output.slice(0, brace.outputIndex);
              const toks = state.tokens.slice(brace.tokensIndex);
              brace.value = brace.output = "\\{";
              value = output = "\\}";
              state.output = out;
              for (const t4 of toks) {
                state.output += t4.output || t4.value;
              }
            }
            push({ type: "brace", value, output });
            decrement("braces");
            braces.pop();
            continue;
          }
          if (value === "|") {
            if (extglobs.length > 0) {
              extglobs[extglobs.length - 1].conditions++;
            }
            push({ type: "text", value });
            continue;
          }
          if (value === ",") {
            let output = value;
            const brace = braces[braces.length - 1];
            if (brace && stack[stack.length - 1] === "braces") {
              brace.comma = true;
              output = "|";
            }
            push({ type: "comma", value, output });
            continue;
          }
          if (value === "/") {
            if (prev.type === "dot" && state.index === state.start + 1) {
              state.start = state.index + 1;
              state.consumed = "";
              state.output = "";
              tokens.pop();
              prev = bos;
              continue;
            }
            push({ type: "slash", value, output: SLASH_LITERAL });
            continue;
          }
          if (value === ".") {
            if (state.braces > 0 && prev.type === "dot") {
              if (prev.value === ".")
                prev.output = DOT_LITERAL;
              const brace = braces[braces.length - 1];
              prev.type = "dots";
              prev.output += value;
              prev.value += value;
              brace.dots = true;
              continue;
            }
            if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
              push({ type: "text", value, output: DOT_LITERAL });
              continue;
            }
            push({ type: "dot", value, output: DOT_LITERAL });
            continue;
          }
          if (value === "?") {
            const isGroup = prev && prev.value === "(";
            if (!isGroup && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              extglobOpen("qmark", value);
              continue;
            }
            if (prev && prev.type === "paren") {
              const next = peek();
              let output = value;
              if (next === "<" && !utils.supportsLookbehinds()) {
                throw new Error("Node.js v10 or higher is required for regex lookbehinds");
              }
              if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                output = `\\${value}`;
              }
              push({ type: "text", value, output });
              continue;
            }
            if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
              push({ type: "qmark", value, output: QMARK_NO_DOT });
              continue;
            }
            push({ type: "qmark", value, output: QMARK });
            continue;
          }
          if (value === "!") {
            if (opts.noextglob !== true && peek() === "(") {
              if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
                extglobOpen("negate", value);
                continue;
              }
            }
            if (opts.nonegate !== true && state.index === 0) {
              negate();
              continue;
            }
          }
          if (value === "+") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              extglobOpen("plus", value);
              continue;
            }
            if (prev && prev.value === "(" || opts.regex === false) {
              push({ type: "plus", value, output: PLUS_LITERAL });
              continue;
            }
            if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
              push({ type: "plus", value });
              continue;
            }
            push({ type: "plus", value: PLUS_LITERAL });
            continue;
          }
          if (value === "@") {
            if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
              push({ type: "at", extglob: true, value, output: "" });
              continue;
            }
            push({ type: "text", value });
            continue;
          }
          if (value !== "*") {
            if (value === "$" || value === "^") {
              value = `\\${value}`;
            }
            const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
            if (match) {
              value += match[0];
              state.index += match[0].length;
            }
            push({ type: "text", value });
            continue;
          }
          if (prev && (prev.type === "globstar" || prev.star === true)) {
            prev.type = "star";
            prev.star = true;
            prev.value += value;
            prev.output = star;
            state.backtrack = true;
            state.globstar = true;
            consume(value);
            continue;
          }
          let rest = remaining();
          if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
            extglobOpen("star", value);
            continue;
          }
          if (prev.type === "star") {
            if (opts.noglobstar === true) {
              consume(value);
              continue;
            }
            const prior = prev.prev;
            const before = prior.prev;
            const isStart = prior.type === "slash" || prior.type === "bos";
            const afterStar = before && (before.type === "star" || before.type === "globstar");
            if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
              push({ type: "star", value, output: "" });
              continue;
            }
            const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
            const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
            if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
              push({ type: "star", value, output: "" });
              continue;
            }
            while (rest.slice(0, 3) === "/**") {
              const after = input[state.index + 4];
              if (after && after !== "/") {
                break;
              }
              rest = rest.slice(3);
              consume("/**", 3);
            }
            if (prior.type === "bos" && eos()) {
              prev.type = "globstar";
              prev.value += value;
              prev.output = globstar(opts);
              state.output = prev.output;
              state.globstar = true;
              consume(value);
              continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
              state.output = state.output.slice(0, -(prior.output + prev.output).length);
              prior.output = `(?:${prior.output}`;
              prev.type = "globstar";
              prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
              prev.value += value;
              state.globstar = true;
              state.output += prior.output + prev.output;
              consume(value);
              continue;
            }
            if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
              const end = rest[1] !== undefined ? "|$" : "";
              state.output = state.output.slice(0, -(prior.output + prev.output).length);
              prior.output = `(?:${prior.output}`;
              prev.type = "globstar";
              prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
              prev.value += value;
              state.output += prior.output + prev.output;
              state.globstar = true;
              consume(value + advance());
              push({ type: "slash", value: "/", output: "" });
              continue;
            }
            if (prior.type === "bos" && rest[0] === "/") {
              prev.type = "globstar";
              prev.value += value;
              prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
              state.output = prev.output;
              state.globstar = true;
              consume(value + advance());
              push({ type: "slash", value: "/", output: "" });
              continue;
            }
            state.output = state.output.slice(0, -prev.output.length);
            prev.type = "globstar";
            prev.output = globstar(opts);
            prev.value += value;
            state.output += prev.output;
            state.globstar = true;
            consume(value);
            continue;
          }
          const token = { type: "star", value, output: star };
          if (opts.bash === true) {
            token.output = ".*?";
            if (prev.type === "bos" || prev.type === "slash") {
              token.output = nodot + token.output;
            }
            push(token);
            continue;
          }
          if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
            token.output = value;
            push(token);
            continue;
          }
          if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
            if (prev.type === "dot") {
              state.output += NO_DOT_SLASH;
              prev.output += NO_DOT_SLASH;
            } else if (opts.dot === true) {
              state.output += NO_DOTS_SLASH;
              prev.output += NO_DOTS_SLASH;
            } else {
              state.output += nodot;
              prev.output += nodot;
            }
            if (peek() !== "*") {
              state.output += ONE_CHAR;
              prev.output += ONE_CHAR;
            }
          }
          push(token);
        }
        while (state.brackets > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", "]"));
          state.output = utils.escapeLast(state.output, "[");
          decrement("brackets");
        }
        while (state.parens > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", ")"));
          state.output = utils.escapeLast(state.output, "(");
          decrement("parens");
        }
        while (state.braces > 0) {
          if (opts.strictBrackets === true)
            throw new SyntaxError(syntaxError("closing", "}"));
          state.output = utils.escapeLast(state.output, "{");
          decrement("braces");
        }
        if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) {
          push({ type: "maybe_slash", value: "", output: `${SLASH_LITERAL}?` });
        }
        if (state.backtrack === true) {
          state.output = "";
          for (const token of state.tokens) {
            state.output += token.output != null ? token.output : token.value;
            if (token.suffix) {
              state.output += token.suffix;
            }
          }
        }
        return state;
      };
      parse3.fastpaths = (input, options) => {
        const opts = __spreadValues({}, options);
        const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
        const len = input.length;
        if (len > max) {
          throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
        }
        input = REPLACEMENTS[input] || input;
        const win32 = utils.isWindows(options);
        const {
          DOT_LITERAL,
          SLASH_LITERAL,
          ONE_CHAR,
          DOTS_SLASH,
          NO_DOT,
          NO_DOTS,
          NO_DOTS_SLASH,
          STAR,
          START_ANCHOR
        } = constants.globChars(win32);
        const nodot = opts.dot ? NO_DOTS : NO_DOT;
        const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
        const capture = opts.capture ? "" : "?:";
        const state = { negated: false, prefix: "" };
        let star = opts.bash === true ? ".*?" : STAR;
        if (opts.capture) {
          star = `(${star})`;
        }
        const globstar = (opts2) => {
          if (opts2.noglobstar === true)
            return star;
          return `(${capture}(?:(?!${START_ANCHOR}${opts2.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
        };
        const create = (str) => {
          switch (str) {
            case "*":
              return `${nodot}${ONE_CHAR}${star}`;
            case ".*":
              return `${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "*.*":
              return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "*/*":
              return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;
            case "**":
              return nodot + globstar(opts);
            case "**/*":
              return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;
            case "**/*.*":
              return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;
            case "**/.*":
              return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;
            default: {
              const match = /^(.*?)\.(\w+)$/.exec(str);
              if (!match)
                return;
              const source2 = create(match[1]);
              if (!source2)
                return;
              return source2 + DOT_LITERAL + match[2];
            }
          }
        };
        const output = utils.removePrefix(input, state);
        let source = create(output);
        if (source && opts.strictSlashes !== true) {
          source += `${SLASH_LITERAL}?`;
        }
        return source;
      };
      module2.exports = parse3;
    }
  });
  var require_picomatch = __commonJS2({
    "node_modules/picomatch/lib/picomatch.js"(exports2, module2) {
      var path3 = __require("path");
      var scan = require_scan();
      var parse3 = require_parse2();
      var utils = require_utils2();
      var constants = require_constants2();
      var isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
      var picomatch = (glob22, options, returnState = false) => {
        if (Array.isArray(glob22)) {
          const fns = glob22.map((input) => picomatch(input, options, returnState));
          const arrayMatcher = (str) => {
            for (const isMatch of fns) {
              const state2 = isMatch(str);
              if (state2)
                return state2;
            }
            return false;
          };
          return arrayMatcher;
        }
        const isState = isObject(glob22) && glob22.tokens && glob22.input;
        if (glob22 === "" || typeof glob22 !== "string" && !isState) {
          throw new TypeError("Expected pattern to be a non-empty string");
        }
        const opts = options || {};
        const posix = utils.isWindows(options);
        const regex = isState ? picomatch.compileRe(glob22, options) : picomatch.makeRe(glob22, options, false, true);
        const state = regex.state;
        delete regex.state;
        let isIgnored = () => false;
        if (opts.ignore) {
          const ignoreOpts = __spreadProps(__spreadValues({}, options), { ignore: null, onMatch: null, onResult: null });
          isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
        }
        const matcher = (input, returnObject = false) => {
          const { isMatch, match, output } = picomatch.test(input, regex, options, { glob: glob22, posix });
          const result = { glob: glob22, state, regex, posix, input, output, match, isMatch };
          if (typeof opts.onResult === "function") {
            opts.onResult(result);
          }
          if (isMatch === false) {
            result.isMatch = false;
            return returnObject ? result : false;
          }
          if (isIgnored(input)) {
            if (typeof opts.onIgnore === "function") {
              opts.onIgnore(result);
            }
            result.isMatch = false;
            return returnObject ? result : false;
          }
          if (typeof opts.onMatch === "function") {
            opts.onMatch(result);
          }
          return returnObject ? result : true;
        };
        if (returnState) {
          matcher.state = state;
        }
        return matcher;
      };
      picomatch.test = (input, regex, options, { glob: glob22, posix } = {}) => {
        if (typeof input !== "string") {
          throw new TypeError("Expected input to be a string");
        }
        if (input === "") {
          return { isMatch: false, output: "" };
        }
        const opts = options || {};
        const format = opts.format || (posix ? utils.toPosixSlashes : null);
        let match = input === glob22;
        let output = match && format ? format(input) : input;
        if (match === false) {
          output = format ? format(input) : input;
          match = output === glob22;
        }
        if (match === false || opts.capture === true) {
          if (opts.matchBase === true || opts.basename === true) {
            match = picomatch.matchBase(input, regex, options, posix);
          } else {
            match = regex.exec(output);
          }
        }
        return { isMatch: Boolean(match), match, output };
      };
      picomatch.matchBase = (input, glob22, options, posix = utils.isWindows(options)) => {
        const regex = glob22 instanceof RegExp ? glob22 : picomatch.makeRe(glob22, options);
        return regex.test(path3.basename(input));
      };
      picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
      picomatch.parse = (pattern, options) => {
        if (Array.isArray(pattern))
          return pattern.map((p) => picomatch.parse(p, options));
        return parse3(pattern, __spreadProps(__spreadValues({}, options), { fastpaths: false }));
      };
      picomatch.scan = (input, options) => scan(input, options);
      picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
        if (returnOutput === true) {
          return state.output;
        }
        const opts = options || {};
        const prepend = opts.contains ? "" : "^";
        const append = opts.contains ? "" : "$";
        let source = `${prepend}(?:${state.output})${append}`;
        if (state && state.negated === true) {
          source = `^(?!${source}).*$`;
        }
        const regex = picomatch.toRegex(source, options);
        if (returnState === true) {
          regex.state = state;
        }
        return regex;
      };
      picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
        if (!input || typeof input !== "string") {
          throw new TypeError("Expected a non-empty string");
        }
        let parsed = { negated: false, fastpaths: true };
        if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) {
          parsed.output = parse3.fastpaths(input, options);
        }
        if (!parsed.output) {
          parsed = parse3(input, options);
        }
        return picomatch.compileRe(parsed, options, returnOutput, returnState);
      };
      picomatch.toRegex = (source, options) => {
        try {
          const opts = options || {};
          return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
        } catch (err) {
          if (options && options.debug === true)
            throw err;
          return /$^/;
        }
      };
      picomatch.constants = constants;
      module2.exports = picomatch;
    }
  });
  var require_picomatch2 = __commonJS2({
    "node_modules/picomatch/index.js"(exports2, module2) {
      module2.exports = require_picomatch();
    }
  });
  var require_micromatch = __commonJS2({
    "node_modules/micromatch/index.js"(exports2, module2) {
      var util = __require("util");
      var braces = require_braces();
      var picomatch = require_picomatch2();
      var utils = require_utils2();
      var isEmptyString = (v2) => v2 === "" || v2 === "./";
      var hasBraces = (v2) => {
        const index = v2.indexOf("{");
        return index > -1 && v2.indexOf("}", index) > -1;
      };
      var micromatch = (list, patterns, options) => {
        patterns = [].concat(patterns);
        list = [].concat(list);
        let omit = /* @__PURE__ */ new Set;
        let keep = /* @__PURE__ */ new Set;
        let items = /* @__PURE__ */ new Set;
        let negatives = 0;
        let onResult = (state) => {
          items.add(state.output);
          if (options && options.onResult) {
            options.onResult(state);
          }
        };
        for (let i = 0;i < patterns.length; i++) {
          let isMatch = picomatch(String(patterns[i]), __spreadProps(__spreadValues({}, options), { onResult }), true);
          let negated = isMatch.state.negated || isMatch.state.negatedExtglob;
          if (negated)
            negatives++;
          for (let item of list) {
            let matched = isMatch(item, true);
            let match = negated ? !matched.isMatch : matched.isMatch;
            if (!match)
              continue;
            if (negated) {
              omit.add(matched.output);
            } else {
              omit.delete(matched.output);
              keep.add(matched.output);
            }
          }
        }
        let result = negatives === patterns.length ? [...items] : [...keep];
        let matches = result.filter((item) => !omit.has(item));
        if (options && matches.length === 0) {
          if (options.failglob === true) {
            throw new Error(`No matches found for "${patterns.join(", ")}"`);
          }
          if (options.nonull === true || options.nullglob === true) {
            return options.unescape ? patterns.map((p) => p.replace(/\\/g, "")) : patterns;
          }
        }
        return matches;
      };
      micromatch.match = micromatch;
      micromatch.matcher = (pattern, options) => picomatch(pattern, options);
      micromatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);
      micromatch.any = micromatch.isMatch;
      micromatch.not = (list, patterns, options = {}) => {
        patterns = [].concat(patterns).map(String);
        let result = /* @__PURE__ */ new Set;
        let items = [];
        let onResult = (state) => {
          if (options.onResult)
            options.onResult(state);
          items.push(state.output);
        };
        let matches = new Set(micromatch(list, patterns, __spreadProps(__spreadValues({}, options), { onResult })));
        for (let item of items) {
          if (!matches.has(item)) {
            result.add(item);
          }
        }
        return [...result];
      };
      micromatch.contains = (str, pattern, options) => {
        if (typeof str !== "string") {
          throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
        }
        if (Array.isArray(pattern)) {
          return pattern.some((p) => micromatch.contains(str, p, options));
        }
        if (typeof pattern === "string") {
          if (isEmptyString(str) || isEmptyString(pattern)) {
            return false;
          }
          if (str.includes(pattern) || str.startsWith("./") && str.slice(2).includes(pattern)) {
            return true;
          }
        }
        return micromatch.isMatch(str, pattern, __spreadProps(__spreadValues({}, options), { contains: true }));
      };
      micromatch.matchKeys = (obj, patterns, options) => {
        if (!utils.isObject(obj)) {
          throw new TypeError("Expected the first argument to be an object");
        }
        let keys = micromatch(Object.keys(obj), patterns, options);
        let res = {};
        for (let key of keys)
          res[key] = obj[key];
        return res;
      };
      micromatch.some = (list, patterns, options) => {
        let items = [].concat(list);
        for (let pattern of [].concat(patterns)) {
          let isMatch = picomatch(String(pattern), options);
          if (items.some((item) => isMatch(item))) {
            return true;
          }
        }
        return false;
      };
      micromatch.every = (list, patterns, options) => {
        let items = [].concat(list);
        for (let pattern of [].concat(patterns)) {
          let isMatch = picomatch(String(pattern), options);
          if (!items.every((item) => isMatch(item))) {
            return false;
          }
        }
        return true;
      };
      micromatch.all = (str, patterns, options) => {
        if (typeof str !== "string") {
          throw new TypeError(`Expected a string: "${util.inspect(str)}"`);
        }
        return [].concat(patterns).every((p) => picomatch(p, options)(str));
      };
      micromatch.capture = (glob22, input, options) => {
        let posix = utils.isWindows(options);
        let regex = picomatch.makeRe(String(glob22), __spreadProps(__spreadValues({}, options), { capture: true }));
        let match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
        if (match) {
          return match.slice(1).map((v2) => v2 === undefined ? "" : v2);
        }
      };
      micromatch.makeRe = (...args) => picomatch.makeRe(...args);
      micromatch.scan = (...args) => picomatch.scan(...args);
      micromatch.parse = (patterns, options) => {
        let res = [];
        for (let pattern of [].concat(patterns || [])) {
          for (let str of braces(String(pattern), options)) {
            res.push(picomatch.parse(str, options));
          }
        }
        return res;
      };
      micromatch.braces = (pattern, options) => {
        if (typeof pattern !== "string")
          throw new TypeError("Expected a string");
        if (options && options.nobrace === true || !hasBraces(pattern)) {
          return [pattern];
        }
        return braces(pattern, options);
      };
      micromatch.braceExpand = (pattern, options) => {
        if (typeof pattern !== "string")
          throw new TypeError("Expected a string");
        return micromatch.braces(pattern, __spreadProps(__spreadValues({}, options), { expand: true }));
      };
      micromatch.hasBraces = hasBraces;
      module2.exports = micromatch;
    }
  });
  var require_pattern = __commonJS2({
    "node_modules/fast-glob/out/utils/pattern.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isAbsolute = exports2.partitionAbsoluteAndRelative = exports2.removeDuplicateSlashes = exports2.matchAny = exports2.convertPatternsToRe = exports2.makeRe = exports2.getPatternParts = exports2.expandBraceExpansion = exports2.expandPatternsWithBraceExpansion = exports2.isAffectDepthOfReadingPattern = exports2.endsWithSlashGlobStar = exports2.hasGlobStar = exports2.getBaseDirectory = exports2.isPatternRelatedToParentDirectory = exports2.getPatternsOutsideCurrentDirectory = exports2.getPatternsInsideCurrentDirectory = exports2.getPositivePatterns = exports2.getNegativePatterns = exports2.isPositivePattern = exports2.isNegativePattern = exports2.convertToNegativePattern = exports2.convertToPositivePattern = exports2.isDynamicPattern = exports2.isStaticPattern = undefined;
      var path3 = __require("path");
      var globParent = require_glob_parent();
      var micromatch = require_micromatch();
      var GLOBSTAR = "**";
      var ESCAPE_SYMBOL = "\\";
      var COMMON_GLOB_SYMBOLS_RE = /[*?]|^!/;
      var REGEX_CHARACTER_CLASS_SYMBOLS_RE = /\[[^[]*]/;
      var REGEX_GROUP_SYMBOLS_RE = /(?:^|[^!*+?@])\([^(]*\|[^|]*\)/;
      var GLOB_EXTENSION_SYMBOLS_RE = /[!*+?@]\([^(]*\)/;
      var BRACE_EXPANSION_SEPARATORS_RE = /,|\.\./;
      var DOUBLE_SLASH_RE = /(?!^)\/{2,}/g;
      function isStaticPattern(pattern, options = {}) {
        return !isDynamicPattern2(pattern, options);
      }
      exports2.isStaticPattern = isStaticPattern;
      function isDynamicPattern2(pattern, options = {}) {
        if (pattern === "") {
          return false;
        }
        if (options.caseSensitiveMatch === false || pattern.includes(ESCAPE_SYMBOL)) {
          return true;
        }
        if (COMMON_GLOB_SYMBOLS_RE.test(pattern) || REGEX_CHARACTER_CLASS_SYMBOLS_RE.test(pattern) || REGEX_GROUP_SYMBOLS_RE.test(pattern)) {
          return true;
        }
        if (options.extglob !== false && GLOB_EXTENSION_SYMBOLS_RE.test(pattern)) {
          return true;
        }
        if (options.braceExpansion !== false && hasBraceExpansion(pattern)) {
          return true;
        }
        return false;
      }
      exports2.isDynamicPattern = isDynamicPattern2;
      function hasBraceExpansion(pattern) {
        const openingBraceIndex = pattern.indexOf("{");
        if (openingBraceIndex === -1) {
          return false;
        }
        const closingBraceIndex = pattern.indexOf("}", openingBraceIndex + 1);
        if (closingBraceIndex === -1) {
          return false;
        }
        const braceContent = pattern.slice(openingBraceIndex, closingBraceIndex);
        return BRACE_EXPANSION_SEPARATORS_RE.test(braceContent);
      }
      function convertToPositivePattern(pattern) {
        return isNegativePattern2(pattern) ? pattern.slice(1) : pattern;
      }
      exports2.convertToPositivePattern = convertToPositivePattern;
      function convertToNegativePattern(pattern) {
        return "!" + pattern;
      }
      exports2.convertToNegativePattern = convertToNegativePattern;
      function isNegativePattern2(pattern) {
        return pattern.startsWith("!") && pattern[1] !== "(";
      }
      exports2.isNegativePattern = isNegativePattern2;
      function isPositivePattern(pattern) {
        return !isNegativePattern2(pattern);
      }
      exports2.isPositivePattern = isPositivePattern;
      function getNegativePatterns(patterns) {
        return patterns.filter(isNegativePattern2);
      }
      exports2.getNegativePatterns = getNegativePatterns;
      function getPositivePatterns(patterns) {
        return patterns.filter(isPositivePattern);
      }
      exports2.getPositivePatterns = getPositivePatterns;
      function getPatternsInsideCurrentDirectory(patterns) {
        return patterns.filter((pattern) => !isPatternRelatedToParentDirectory(pattern));
      }
      exports2.getPatternsInsideCurrentDirectory = getPatternsInsideCurrentDirectory;
      function getPatternsOutsideCurrentDirectory(patterns) {
        return patterns.filter(isPatternRelatedToParentDirectory);
      }
      exports2.getPatternsOutsideCurrentDirectory = getPatternsOutsideCurrentDirectory;
      function isPatternRelatedToParentDirectory(pattern) {
        return pattern.startsWith("..") || pattern.startsWith("./..");
      }
      exports2.isPatternRelatedToParentDirectory = isPatternRelatedToParentDirectory;
      function getBaseDirectory(pattern) {
        return globParent(pattern, { flipBackslashes: false });
      }
      exports2.getBaseDirectory = getBaseDirectory;
      function hasGlobStar(pattern) {
        return pattern.includes(GLOBSTAR);
      }
      exports2.hasGlobStar = hasGlobStar;
      function endsWithSlashGlobStar(pattern) {
        return pattern.endsWith("/" + GLOBSTAR);
      }
      exports2.endsWithSlashGlobStar = endsWithSlashGlobStar;
      function isAffectDepthOfReadingPattern(pattern) {
        const basename = path3.basename(pattern);
        return endsWithSlashGlobStar(pattern) || isStaticPattern(basename);
      }
      exports2.isAffectDepthOfReadingPattern = isAffectDepthOfReadingPattern;
      function expandPatternsWithBraceExpansion(patterns) {
        return patterns.reduce((collection, pattern) => {
          return collection.concat(expandBraceExpansion(pattern));
        }, []);
      }
      exports2.expandPatternsWithBraceExpansion = expandPatternsWithBraceExpansion;
      function expandBraceExpansion(pattern) {
        const patterns = micromatch.braces(pattern, { expand: true, nodupes: true, keepEscaping: true });
        patterns.sort((a2, b) => a2.length - b.length);
        return patterns.filter((pattern2) => pattern2 !== "");
      }
      exports2.expandBraceExpansion = expandBraceExpansion;
      function getPatternParts(pattern, options) {
        let { parts } = micromatch.scan(pattern, Object.assign(Object.assign({}, options), { parts: true }));
        if (parts.length === 0) {
          parts = [pattern];
        }
        if (parts[0].startsWith("/")) {
          parts[0] = parts[0].slice(1);
          parts.unshift("");
        }
        return parts;
      }
      exports2.getPatternParts = getPatternParts;
      function makeRe(pattern, options) {
        return micromatch.makeRe(pattern, options);
      }
      exports2.makeRe = makeRe;
      function convertPatternsToRe(patterns, options) {
        return patterns.map((pattern) => makeRe(pattern, options));
      }
      exports2.convertPatternsToRe = convertPatternsToRe;
      function matchAny(entry, patternsRe) {
        return patternsRe.some((patternRe) => patternRe.test(entry));
      }
      exports2.matchAny = matchAny;
      function removeDuplicateSlashes(pattern) {
        return pattern.replace(DOUBLE_SLASH_RE, "/");
      }
      exports2.removeDuplicateSlashes = removeDuplicateSlashes;
      function partitionAbsoluteAndRelative(patterns) {
        const absolute = [];
        const relative = [];
        for (const pattern of patterns) {
          if (isAbsolute(pattern)) {
            absolute.push(pattern);
          } else {
            relative.push(pattern);
          }
        }
        return [absolute, relative];
      }
      exports2.partitionAbsoluteAndRelative = partitionAbsoluteAndRelative;
      function isAbsolute(pattern) {
        return path3.isAbsolute(pattern);
      }
      exports2.isAbsolute = isAbsolute;
    }
  });
  var require_merge2 = __commonJS2({
    "node_modules/merge2/index.js"(exports2, module2) {
      var Stream = __require("stream");
      var PassThrough = Stream.PassThrough;
      var slice = Array.prototype.slice;
      module2.exports = merge2;
      function merge2() {
        const streamsQueue = [];
        const args = slice.call(arguments);
        let merging = false;
        let options = args[args.length - 1];
        if (options && !Array.isArray(options) && options.pipe == null) {
          args.pop();
        } else {
          options = {};
        }
        const doEnd = options.end !== false;
        const doPipeError = options.pipeError === true;
        if (options.objectMode == null) {
          options.objectMode = true;
        }
        if (options.highWaterMark == null) {
          options.highWaterMark = 64 * 1024;
        }
        const mergedStream = PassThrough(options);
        function addStream() {
          for (let i = 0, len = arguments.length;i < len; i++) {
            streamsQueue.push(pauseStreams(arguments[i], options));
          }
          mergeStream();
          return this;
        }
        function mergeStream() {
          if (merging) {
            return;
          }
          merging = true;
          let streams = streamsQueue.shift();
          if (!streams) {
            process.nextTick(endStream2);
            return;
          }
          if (!Array.isArray(streams)) {
            streams = [streams];
          }
          let pipesCount = streams.length + 1;
          function next() {
            if (--pipesCount > 0) {
              return;
            }
            merging = false;
            mergeStream();
          }
          function pipe(stream) {
            function onend() {
              stream.removeListener("merge2UnpipeEnd", onend);
              stream.removeListener("end", onend);
              if (doPipeError) {
                stream.removeListener("error", onerror);
              }
              next();
            }
            function onerror(err) {
              mergedStream.emit("error", err);
            }
            if (stream._readableState.endEmitted) {
              return next();
            }
            stream.on("merge2UnpipeEnd", onend);
            stream.on("end", onend);
            if (doPipeError) {
              stream.on("error", onerror);
            }
            stream.pipe(mergedStream, { end: false });
            stream.resume();
          }
          for (let i = 0;i < streams.length; i++) {
            pipe(streams[i]);
          }
          next();
        }
        function endStream2() {
          merging = false;
          mergedStream.emit("queueDrain");
          if (doEnd) {
            mergedStream.end();
          }
        }
        mergedStream.setMaxListeners(0);
        mergedStream.add = addStream;
        mergedStream.on("unpipe", function(stream) {
          stream.emit("merge2UnpipeEnd");
        });
        if (args.length) {
          addStream.apply(null, args);
        }
        return mergedStream;
      }
      function pauseStreams(streams, options) {
        if (!Array.isArray(streams)) {
          if (!streams._readableState && streams.pipe) {
            streams = streams.pipe(PassThrough(options));
          }
          if (!streams._readableState || !streams.pause || !streams.pipe) {
            throw new Error("Only readable stream can be merged.");
          }
          streams.pause();
        } else {
          for (let i = 0, len = streams.length;i < len; i++) {
            streams[i] = pauseStreams(streams[i], options);
          }
        }
        return streams;
      }
    }
  });
  var require_stream = __commonJS2({
    "node_modules/fast-glob/out/utils/stream.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.merge = undefined;
      var merge2 = require_merge2();
      function merge3(streams) {
        const mergedStream = merge2(streams);
        streams.forEach((stream) => {
          stream.once("error", (error) => mergedStream.emit("error", error));
        });
        mergedStream.once("close", () => propagateCloseEventToSources(streams));
        mergedStream.once("end", () => propagateCloseEventToSources(streams));
        return mergedStream;
      }
      exports2.merge = merge3;
      function propagateCloseEventToSources(streams) {
        streams.forEach((stream) => stream.emit("close"));
      }
    }
  });
  var require_string = __commonJS2({
    "node_modules/fast-glob/out/utils/string.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isEmpty = exports2.isString = undefined;
      function isString(input) {
        return typeof input === "string";
      }
      exports2.isString = isString;
      function isEmpty2(input) {
        return input === "";
      }
      exports2.isEmpty = isEmpty2;
    }
  });
  var require_utils3 = __commonJS2({
    "node_modules/fast-glob/out/utils/index.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.string = exports2.stream = exports2.pattern = exports2.path = exports2.fs = exports2.errno = exports2.array = undefined;
      var array = require_array();
      exports2.array = array;
      var errno = require_errno();
      exports2.errno = errno;
      var fs6 = require_fs();
      exports2.fs = fs6;
      var path3 = require_path();
      exports2.path = path3;
      var pattern = require_pattern();
      exports2.pattern = pattern;
      var stream = require_stream();
      exports2.stream = stream;
      var string2 = require_string();
      exports2.string = string2;
    }
  });
  var require_tasks = __commonJS2({
    "node_modules/fast-glob/out/managers/tasks.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.convertPatternGroupToTask = exports2.convertPatternGroupsToTasks = exports2.groupPatternsByBaseDirectory = exports2.getNegativePatternsAsPositive = exports2.getPositivePatterns = exports2.convertPatternsToTasks = exports2.generate = undefined;
      var utils = require_utils3();
      function generate(input, settings) {
        const patterns = processPatterns(input, settings);
        const ignore = processPatterns(settings.ignore, settings);
        const positivePatterns = getPositivePatterns(patterns);
        const negativePatterns = getNegativePatternsAsPositive(patterns, ignore);
        const staticPatterns = positivePatterns.filter((pattern) => utils.pattern.isStaticPattern(pattern, settings));
        const dynamicPatterns = positivePatterns.filter((pattern) => utils.pattern.isDynamicPattern(pattern, settings));
        const staticTasks = convertPatternsToTasks(staticPatterns, negativePatterns, false);
        const dynamicTasks = convertPatternsToTasks(dynamicPatterns, negativePatterns, true);
        return staticTasks.concat(dynamicTasks);
      }
      exports2.generate = generate;
      function processPatterns(input, settings) {
        let patterns = input;
        if (settings.braceExpansion) {
          patterns = utils.pattern.expandPatternsWithBraceExpansion(patterns);
        }
        if (settings.baseNameMatch) {
          patterns = patterns.map((pattern) => pattern.includes("/") ? pattern : `**/${pattern}`);
        }
        return patterns.map((pattern) => utils.pattern.removeDuplicateSlashes(pattern));
      }
      function convertPatternsToTasks(positive, negative, dynamic) {
        const tasks = [];
        const patternsOutsideCurrentDirectory = utils.pattern.getPatternsOutsideCurrentDirectory(positive);
        const patternsInsideCurrentDirectory = utils.pattern.getPatternsInsideCurrentDirectory(positive);
        const outsideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsOutsideCurrentDirectory);
        const insideCurrentDirectoryGroup = groupPatternsByBaseDirectory(patternsInsideCurrentDirectory);
        tasks.push(...convertPatternGroupsToTasks(outsideCurrentDirectoryGroup, negative, dynamic));
        if ("." in insideCurrentDirectoryGroup) {
          tasks.push(convertPatternGroupToTask(".", patternsInsideCurrentDirectory, negative, dynamic));
        } else {
          tasks.push(...convertPatternGroupsToTasks(insideCurrentDirectoryGroup, negative, dynamic));
        }
        return tasks;
      }
      exports2.convertPatternsToTasks = convertPatternsToTasks;
      function getPositivePatterns(patterns) {
        return utils.pattern.getPositivePatterns(patterns);
      }
      exports2.getPositivePatterns = getPositivePatterns;
      function getNegativePatternsAsPositive(patterns, ignore) {
        const negative = utils.pattern.getNegativePatterns(patterns).concat(ignore);
        const positive = negative.map(utils.pattern.convertToPositivePattern);
        return positive;
      }
      exports2.getNegativePatternsAsPositive = getNegativePatternsAsPositive;
      function groupPatternsByBaseDirectory(patterns) {
        const group = {};
        return patterns.reduce((collection, pattern) => {
          const base = utils.pattern.getBaseDirectory(pattern);
          if (base in collection) {
            collection[base].push(pattern);
          } else {
            collection[base] = [pattern];
          }
          return collection;
        }, group);
      }
      exports2.groupPatternsByBaseDirectory = groupPatternsByBaseDirectory;
      function convertPatternGroupsToTasks(positive, negative, dynamic) {
        return Object.keys(positive).map((base) => {
          return convertPatternGroupToTask(base, positive[base], negative, dynamic);
        });
      }
      exports2.convertPatternGroupsToTasks = convertPatternGroupsToTasks;
      function convertPatternGroupToTask(base, positive, negative, dynamic) {
        return {
          dynamic,
          positive,
          negative,
          base,
          patterns: [].concat(positive, negative.map(utils.pattern.convertToNegativePattern))
        };
      }
      exports2.convertPatternGroupToTask = convertPatternGroupToTask;
    }
  });
  var require_async = __commonJS2({
    "node_modules/@nodelib/fs.stat/out/providers/async.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.read = undefined;
      function read(path3, settings, callback) {
        settings.fs.lstat(path3, (lstatError, lstat) => {
          if (lstatError !== null) {
            callFailureCallback(callback, lstatError);
            return;
          }
          if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
            callSuccessCallback(callback, lstat);
            return;
          }
          settings.fs.stat(path3, (statError, stat) => {
            if (statError !== null) {
              if (settings.throwErrorOnBrokenSymbolicLink) {
                callFailureCallback(callback, statError);
                return;
              }
              callSuccessCallback(callback, lstat);
              return;
            }
            if (settings.markSymbolicLink) {
              stat.isSymbolicLink = () => true;
            }
            callSuccessCallback(callback, stat);
          });
        });
      }
      exports2.read = read;
      function callFailureCallback(callback, error) {
        callback(error);
      }
      function callSuccessCallback(callback, result) {
        callback(null, result);
      }
    }
  });
  var require_sync = __commonJS2({
    "node_modules/@nodelib/fs.stat/out/providers/sync.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.read = undefined;
      function read(path3, settings) {
        const lstat = settings.fs.lstatSync(path3);
        if (!lstat.isSymbolicLink() || !settings.followSymbolicLink) {
          return lstat;
        }
        try {
          const stat = settings.fs.statSync(path3);
          if (settings.markSymbolicLink) {
            stat.isSymbolicLink = () => true;
          }
          return stat;
        } catch (error) {
          if (!settings.throwErrorOnBrokenSymbolicLink) {
            return lstat;
          }
          throw error;
        }
      }
      exports2.read = read;
    }
  });
  var require_fs2 = __commonJS2({
    "node_modules/@nodelib/fs.stat/out/adapters/fs.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.createFileSystemAdapter = exports2.FILE_SYSTEM_ADAPTER = undefined;
      var fs6 = __require("fs");
      exports2.FILE_SYSTEM_ADAPTER = {
        lstat: fs6.lstat,
        stat: fs6.stat,
        lstatSync: fs6.lstatSync,
        statSync: fs6.statSync
      };
      function createFileSystemAdapter(fsMethods) {
        if (fsMethods === undefined) {
          return exports2.FILE_SYSTEM_ADAPTER;
        }
        return Object.assign(Object.assign({}, exports2.FILE_SYSTEM_ADAPTER), fsMethods);
      }
      exports2.createFileSystemAdapter = createFileSystemAdapter;
    }
  });
  var require_settings = __commonJS2({
    "node_modules/@nodelib/fs.stat/out/settings.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var fs6 = require_fs2();
      var Settings = class {
        constructor(_options = {}) {
          this._options = _options;
          this.followSymbolicLink = this._getValue(this._options.followSymbolicLink, true);
          this.fs = fs6.createFileSystemAdapter(this._options.fs);
          this.markSymbolicLink = this._getValue(this._options.markSymbolicLink, false);
          this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
        }
        _getValue(option, value) {
          return option !== null && option !== undefined ? option : value;
        }
      };
      exports2.default = Settings;
    }
  });
  var require_out = __commonJS2({
    "node_modules/@nodelib/fs.stat/out/index.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.statSync = exports2.stat = exports2.Settings = undefined;
      var async = require_async();
      var sync = require_sync();
      var settings_1 = require_settings();
      exports2.Settings = settings_1.default;
      function stat(path3, optionsOrSettingsOrCallback, callback) {
        if (typeof optionsOrSettingsOrCallback === "function") {
          async.read(path3, getSettings(), optionsOrSettingsOrCallback);
          return;
        }
        async.read(path3, getSettings(optionsOrSettingsOrCallback), callback);
      }
      exports2.stat = stat;
      function statSync(path3, optionsOrSettings) {
        const settings = getSettings(optionsOrSettings);
        return sync.read(path3, settings);
      }
      exports2.statSync = statSync;
      function getSettings(settingsOrOptions = {}) {
        if (settingsOrOptions instanceof settings_1.default) {
          return settingsOrOptions;
        }
        return new settings_1.default(settingsOrOptions);
      }
    }
  });
  var require_queue_microtask = __commonJS2({
    "node_modules/queue-microtask/index.js"(exports2, module2) {
      var promise;
      module2.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : (cb) => (promise || (promise = Promise.resolve())).then(cb).catch((err) => setTimeout(() => {
        throw err;
      }, 0));
    }
  });
  var require_run_parallel = __commonJS2({
    "node_modules/run-parallel/index.js"(exports2, module2) {
      module2.exports = runParallel;
      var queueMicrotask2 = require_queue_microtask();
      function runParallel(tasks, cb) {
        let results, pending, keys;
        let isSync = true;
        if (Array.isArray(tasks)) {
          results = [];
          pending = tasks.length;
        } else {
          keys = Object.keys(tasks);
          results = {};
          pending = keys.length;
        }
        function done(err) {
          function end() {
            if (cb)
              cb(err, results);
            cb = null;
          }
          if (isSync)
            queueMicrotask2(end);
          else
            end();
        }
        function each(i, err, result) {
          results[i] = result;
          if (--pending === 0 || err) {
            done(err);
          }
        }
        if (!pending) {
          done(null);
        } else if (keys) {
          keys.forEach(function(key) {
            tasks[key](function(err, result) {
              each(key, err, result);
            });
          });
        } else {
          tasks.forEach(function(task, i) {
            task(function(err, result) {
              each(i, err, result);
            });
          });
        }
        isSync = false;
      }
    }
  });
  var require_constants3 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/constants.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.IS_SUPPORT_READDIR_WITH_FILE_TYPES = undefined;
      var NODE_PROCESS_VERSION_PARTS = process.versions.node.split(".");
      if (NODE_PROCESS_VERSION_PARTS[0] === undefined || NODE_PROCESS_VERSION_PARTS[1] === undefined) {
        throw new Error(`Unexpected behavior. The 'process.versions.node' variable has invalid value: ${process.versions.node}`);
      }
      var MAJOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[0], 10);
      var MINOR_VERSION = Number.parseInt(NODE_PROCESS_VERSION_PARTS[1], 10);
      var SUPPORTED_MAJOR_VERSION = 10;
      var SUPPORTED_MINOR_VERSION = 10;
      var IS_MATCHED_BY_MAJOR = MAJOR_VERSION > SUPPORTED_MAJOR_VERSION;
      var IS_MATCHED_BY_MAJOR_AND_MINOR = MAJOR_VERSION === SUPPORTED_MAJOR_VERSION && MINOR_VERSION >= SUPPORTED_MINOR_VERSION;
      exports2.IS_SUPPORT_READDIR_WITH_FILE_TYPES = IS_MATCHED_BY_MAJOR || IS_MATCHED_BY_MAJOR_AND_MINOR;
    }
  });
  var require_fs3 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/utils/fs.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.createDirentFromStats = undefined;
      var DirentFromStats = class {
        constructor(name, stats) {
          this.name = name;
          this.isBlockDevice = stats.isBlockDevice.bind(stats);
          this.isCharacterDevice = stats.isCharacterDevice.bind(stats);
          this.isDirectory = stats.isDirectory.bind(stats);
          this.isFIFO = stats.isFIFO.bind(stats);
          this.isFile = stats.isFile.bind(stats);
          this.isSocket = stats.isSocket.bind(stats);
          this.isSymbolicLink = stats.isSymbolicLink.bind(stats);
        }
      };
      function createDirentFromStats(name, stats) {
        return new DirentFromStats(name, stats);
      }
      exports2.createDirentFromStats = createDirentFromStats;
    }
  });
  var require_utils4 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/utils/index.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.fs = undefined;
      var fs6 = require_fs3();
      exports2.fs = fs6;
    }
  });
  var require_common = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/providers/common.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.joinPathSegments = undefined;
      function joinPathSegments(a2, b, separator) {
        if (a2.endsWith(separator)) {
          return a2 + b;
        }
        return a2 + separator + b;
      }
      exports2.joinPathSegments = joinPathSegments;
    }
  });
  var require_async2 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/providers/async.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.readdir = exports2.readdirWithFileTypes = exports2.read = undefined;
      var fsStat = require_out();
      var rpl = require_run_parallel();
      var constants_1 = require_constants3();
      var utils = require_utils4();
      var common = require_common();
      function read(directory, settings, callback) {
        if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
          readdirWithFileTypes(directory, settings, callback);
          return;
        }
        readdir(directory, settings, callback);
      }
      exports2.read = read;
      function readdirWithFileTypes(directory, settings, callback) {
        settings.fs.readdir(directory, { withFileTypes: true }, (readdirError, dirents) => {
          if (readdirError !== null) {
            callFailureCallback(callback, readdirError);
            return;
          }
          const entries = dirents.map((dirent) => ({
            dirent,
            name: dirent.name,
            path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
          }));
          if (!settings.followSymbolicLinks) {
            callSuccessCallback(callback, entries);
            return;
          }
          const tasks = entries.map((entry) => makeRplTaskEntry(entry, settings));
          rpl(tasks, (rplError, rplEntries) => {
            if (rplError !== null) {
              callFailureCallback(callback, rplError);
              return;
            }
            callSuccessCallback(callback, rplEntries);
          });
        });
      }
      exports2.readdirWithFileTypes = readdirWithFileTypes;
      function makeRplTaskEntry(entry, settings) {
        return (done) => {
          if (!entry.dirent.isSymbolicLink()) {
            done(null, entry);
            return;
          }
          settings.fs.stat(entry.path, (statError, stats) => {
            if (statError !== null) {
              if (settings.throwErrorOnBrokenSymbolicLink) {
                done(statError);
                return;
              }
              done(null, entry);
              return;
            }
            entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
            done(null, entry);
          });
        };
      }
      function readdir(directory, settings, callback) {
        settings.fs.readdir(directory, (readdirError, names) => {
          if (readdirError !== null) {
            callFailureCallback(callback, readdirError);
            return;
          }
          const tasks = names.map((name) => {
            const path3 = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
            return (done) => {
              fsStat.stat(path3, settings.fsStatSettings, (error, stats) => {
                if (error !== null) {
                  done(error);
                  return;
                }
                const entry = {
                  name,
                  path: path3,
                  dirent: utils.fs.createDirentFromStats(name, stats)
                };
                if (settings.stats) {
                  entry.stats = stats;
                }
                done(null, entry);
              });
            };
          });
          rpl(tasks, (rplError, entries) => {
            if (rplError !== null) {
              callFailureCallback(callback, rplError);
              return;
            }
            callSuccessCallback(callback, entries);
          });
        });
      }
      exports2.readdir = readdir;
      function callFailureCallback(callback, error) {
        callback(error);
      }
      function callSuccessCallback(callback, result) {
        callback(null, result);
      }
    }
  });
  var require_sync2 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/providers/sync.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.readdir = exports2.readdirWithFileTypes = exports2.read = undefined;
      var fsStat = require_out();
      var constants_1 = require_constants3();
      var utils = require_utils4();
      var common = require_common();
      function read(directory, settings) {
        if (!settings.stats && constants_1.IS_SUPPORT_READDIR_WITH_FILE_TYPES) {
          return readdirWithFileTypes(directory, settings);
        }
        return readdir(directory, settings);
      }
      exports2.read = read;
      function readdirWithFileTypes(directory, settings) {
        const dirents = settings.fs.readdirSync(directory, { withFileTypes: true });
        return dirents.map((dirent) => {
          const entry = {
            dirent,
            name: dirent.name,
            path: common.joinPathSegments(directory, dirent.name, settings.pathSegmentSeparator)
          };
          if (entry.dirent.isSymbolicLink() && settings.followSymbolicLinks) {
            try {
              const stats = settings.fs.statSync(entry.path);
              entry.dirent = utils.fs.createDirentFromStats(entry.name, stats);
            } catch (error) {
              if (settings.throwErrorOnBrokenSymbolicLink) {
                throw error;
              }
            }
          }
          return entry;
        });
      }
      exports2.readdirWithFileTypes = readdirWithFileTypes;
      function readdir(directory, settings) {
        const names = settings.fs.readdirSync(directory);
        return names.map((name) => {
          const entryPath = common.joinPathSegments(directory, name, settings.pathSegmentSeparator);
          const stats = fsStat.statSync(entryPath, settings.fsStatSettings);
          const entry = {
            name,
            path: entryPath,
            dirent: utils.fs.createDirentFromStats(name, stats)
          };
          if (settings.stats) {
            entry.stats = stats;
          }
          return entry;
        });
      }
      exports2.readdir = readdir;
    }
  });
  var require_fs4 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/adapters/fs.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.createFileSystemAdapter = exports2.FILE_SYSTEM_ADAPTER = undefined;
      var fs6 = __require("fs");
      exports2.FILE_SYSTEM_ADAPTER = {
        lstat: fs6.lstat,
        stat: fs6.stat,
        lstatSync: fs6.lstatSync,
        statSync: fs6.statSync,
        readdir: fs6.readdir,
        readdirSync: fs6.readdirSync
      };
      function createFileSystemAdapter(fsMethods) {
        if (fsMethods === undefined) {
          return exports2.FILE_SYSTEM_ADAPTER;
        }
        return Object.assign(Object.assign({}, exports2.FILE_SYSTEM_ADAPTER), fsMethods);
      }
      exports2.createFileSystemAdapter = createFileSystemAdapter;
    }
  });
  var require_settings2 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/settings.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var path3 = __require("path");
      var fsStat = require_out();
      var fs6 = require_fs4();
      var Settings = class {
        constructor(_options = {}) {
          this._options = _options;
          this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, false);
          this.fs = fs6.createFileSystemAdapter(this._options.fs);
          this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path3.sep);
          this.stats = this._getValue(this._options.stats, false);
          this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, true);
          this.fsStatSettings = new fsStat.Settings({
            followSymbolicLink: this.followSymbolicLinks,
            fs: this.fs,
            throwErrorOnBrokenSymbolicLink: this.throwErrorOnBrokenSymbolicLink
          });
        }
        _getValue(option, value) {
          return option !== null && option !== undefined ? option : value;
        }
      };
      exports2.default = Settings;
    }
  });
  var require_out2 = __commonJS2({
    "node_modules/@nodelib/fs.scandir/out/index.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Settings = exports2.scandirSync = exports2.scandir = undefined;
      var async = require_async2();
      var sync = require_sync2();
      var settings_1 = require_settings2();
      exports2.Settings = settings_1.default;
      function scandir(path3, optionsOrSettingsOrCallback, callback) {
        if (typeof optionsOrSettingsOrCallback === "function") {
          async.read(path3, getSettings(), optionsOrSettingsOrCallback);
          return;
        }
        async.read(path3, getSettings(optionsOrSettingsOrCallback), callback);
      }
      exports2.scandir = scandir;
      function scandirSync(path3, optionsOrSettings) {
        const settings = getSettings(optionsOrSettings);
        return sync.read(path3, settings);
      }
      exports2.scandirSync = scandirSync;
      function getSettings(settingsOrOptions = {}) {
        if (settingsOrOptions instanceof settings_1.default) {
          return settingsOrOptions;
        }
        return new settings_1.default(settingsOrOptions);
      }
    }
  });
  var require_reusify = __commonJS2({
    "node_modules/reusify/reusify.js"(exports2, module2) {
      function reusify(Constructor) {
        var head = new Constructor;
        var tail = head;
        function get() {
          var current = head;
          if (current.next) {
            head = current.next;
          } else {
            head = new Constructor;
            tail = head;
          }
          current.next = null;
          return current;
        }
        function release(obj) {
          tail.next = obj;
          tail = obj;
        }
        return {
          get,
          release
        };
      }
      module2.exports = reusify;
    }
  });
  var require_queue = __commonJS2({
    "node_modules/fastq/queue.js"(exports2, module2) {
      var reusify = require_reusify();
      function fastqueue(context, worker, _concurrency) {
        if (typeof context === "function") {
          _concurrency = worker;
          worker = context;
          context = null;
        }
        if (!(_concurrency >= 1)) {
          throw new Error("fastqueue concurrency must be equal to or greater than 1");
        }
        var cache = reusify(Task);
        var queueHead = null;
        var queueTail = null;
        var _running = 0;
        var errorHandler = null;
        var self2 = {
          push,
          drain: noop2,
          saturated: noop2,
          pause,
          paused: false,
          get concurrency() {
            return _concurrency;
          },
          set concurrency(value) {
            if (!(value >= 1)) {
              throw new Error("fastqueue concurrency must be equal to or greater than 1");
            }
            _concurrency = value;
            if (self2.paused)
              return;
            for (;queueHead && _running < _concurrency; ) {
              _running++;
              release();
            }
          },
          running,
          resume,
          idle,
          length,
          getQueue,
          unshift,
          empty: noop2,
          kill,
          killAndDrain,
          error
        };
        return self2;
        function running() {
          return _running;
        }
        function pause() {
          self2.paused = true;
        }
        function length() {
          var current = queueHead;
          var counter = 0;
          while (current) {
            current = current.next;
            counter++;
          }
          return counter;
        }
        function getQueue() {
          var current = queueHead;
          var tasks = [];
          while (current) {
            tasks.push(current.value);
            current = current.next;
          }
          return tasks;
        }
        function resume() {
          if (!self2.paused)
            return;
          self2.paused = false;
          if (queueHead === null) {
            _running++;
            release();
            return;
          }
          for (;queueHead && _running < _concurrency; ) {
            _running++;
            release();
          }
        }
        function idle() {
          return _running === 0 && self2.length() === 0;
        }
        function push(value, done) {
          var current = cache.get();
          current.context = context;
          current.release = release;
          current.value = value;
          current.callback = done || noop2;
          current.errorHandler = errorHandler;
          if (_running >= _concurrency || self2.paused) {
            if (queueTail) {
              queueTail.next = current;
              queueTail = current;
            } else {
              queueHead = current;
              queueTail = current;
              self2.saturated();
            }
          } else {
            _running++;
            worker.call(context, current.value, current.worked);
          }
        }
        function unshift(value, done) {
          var current = cache.get();
          current.context = context;
          current.release = release;
          current.value = value;
          current.callback = done || noop2;
          current.errorHandler = errorHandler;
          if (_running >= _concurrency || self2.paused) {
            if (queueHead) {
              current.next = queueHead;
              queueHead = current;
            } else {
              queueHead = current;
              queueTail = current;
              self2.saturated();
            }
          } else {
            _running++;
            worker.call(context, current.value, current.worked);
          }
        }
        function release(holder) {
          if (holder) {
            cache.release(holder);
          }
          var next = queueHead;
          if (next && _running <= _concurrency) {
            if (!self2.paused) {
              if (queueTail === queueHead) {
                queueTail = null;
              }
              queueHead = next.next;
              next.next = null;
              worker.call(context, next.value, next.worked);
              if (queueTail === null) {
                self2.empty();
              }
            } else {
              _running--;
            }
          } else if (--_running === 0) {
            self2.drain();
          }
        }
        function kill() {
          queueHead = null;
          queueTail = null;
          self2.drain = noop2;
        }
        function killAndDrain() {
          queueHead = null;
          queueTail = null;
          self2.drain();
          self2.drain = noop2;
        }
        function error(handler) {
          errorHandler = handler;
        }
      }
      function noop2() {}
      function Task() {
        this.value = null;
        this.callback = noop2;
        this.next = null;
        this.release = noop2;
        this.context = null;
        this.errorHandler = null;
        var self2 = this;
        this.worked = function worked(err, result) {
          var callback = self2.callback;
          var errorHandler = self2.errorHandler;
          var val = self2.value;
          self2.value = null;
          self2.callback = noop2;
          if (self2.errorHandler) {
            errorHandler(err, val);
          }
          callback.call(self2.context, err, result);
          self2.release(self2);
        };
      }
      function queueAsPromised(context, worker, _concurrency) {
        if (typeof context === "function") {
          _concurrency = worker;
          worker = context;
          context = null;
        }
        function asyncWrapper(arg, cb) {
          worker.call(this, arg).then(function(res) {
            cb(null, res);
          }, cb);
        }
        var queue = fastqueue(context, asyncWrapper, _concurrency);
        var pushCb = queue.push;
        var unshiftCb = queue.unshift;
        queue.push = push;
        queue.unshift = unshift;
        queue.drained = drained;
        return queue;
        function push(value) {
          var p = new Promise(function(resolve, reject) {
            pushCb(value, function(err, result) {
              if (err) {
                reject(err);
                return;
              }
              resolve(result);
            });
          });
          p.catch(noop2);
          return p;
        }
        function unshift(value) {
          var p = new Promise(function(resolve, reject) {
            unshiftCb(value, function(err, result) {
              if (err) {
                reject(err);
                return;
              }
              resolve(result);
            });
          });
          p.catch(noop2);
          return p;
        }
        function drained() {
          var p = new Promise(function(resolve) {
            process.nextTick(function() {
              if (queue.idle()) {
                resolve();
              } else {
                var previousDrain = queue.drain;
                queue.drain = function() {
                  if (typeof previousDrain === "function")
                    previousDrain();
                  resolve();
                  queue.drain = previousDrain;
                };
              }
            });
          });
          return p;
        }
      }
      module2.exports = fastqueue;
      module2.exports.promise = queueAsPromised;
    }
  });
  var require_common2 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/readers/common.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.joinPathSegments = exports2.replacePathSegmentSeparator = exports2.isAppliedFilter = exports2.isFatalError = undefined;
      function isFatalError(settings, error) {
        if (settings.errorFilter === null) {
          return true;
        }
        return !settings.errorFilter(error);
      }
      exports2.isFatalError = isFatalError;
      function isAppliedFilter(filter, value) {
        return filter === null || filter(value);
      }
      exports2.isAppliedFilter = isAppliedFilter;
      function replacePathSegmentSeparator(filepath, separator) {
        return filepath.split(/[/\\]/).join(separator);
      }
      exports2.replacePathSegmentSeparator = replacePathSegmentSeparator;
      function joinPathSegments(a2, b, separator) {
        if (a2 === "") {
          return b;
        }
        if (a2.endsWith(separator)) {
          return a2 + b;
        }
        return a2 + separator + b;
      }
      exports2.joinPathSegments = joinPathSegments;
    }
  });
  var require_reader = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/readers/reader.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var common = require_common2();
      var Reader = class {
        constructor(_root, _settings) {
          this._root = _root;
          this._settings = _settings;
          this._root = common.replacePathSegmentSeparator(_root, _settings.pathSegmentSeparator);
        }
      };
      exports2.default = Reader;
    }
  });
  var require_async3 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/readers/async.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var events_1 = __require("events");
      var fsScandir = require_out2();
      var fastq = require_queue();
      var common = require_common2();
      var reader_1 = require_reader();
      var AsyncReader = class extends reader_1.default {
        constructor(_root, _settings) {
          super(_root, _settings);
          this._settings = _settings;
          this._scandir = fsScandir.scandir;
          this._emitter = new events_1.EventEmitter;
          this._queue = fastq(this._worker.bind(this), this._settings.concurrency);
          this._isFatalError = false;
          this._isDestroyed = false;
          this._queue.drain = () => {
            if (!this._isFatalError) {
              this._emitter.emit("end");
            }
          };
        }
        read() {
          this._isFatalError = false;
          this._isDestroyed = false;
          setImmediate(() => {
            this._pushToQueue(this._root, this._settings.basePath);
          });
          return this._emitter;
        }
        get isDestroyed() {
          return this._isDestroyed;
        }
        destroy() {
          if (this._isDestroyed) {
            throw new Error("The reader is already destroyed");
          }
          this._isDestroyed = true;
          this._queue.killAndDrain();
        }
        onEntry(callback) {
          this._emitter.on("entry", callback);
        }
        onError(callback) {
          this._emitter.once("error", callback);
        }
        onEnd(callback) {
          this._emitter.once("end", callback);
        }
        _pushToQueue(directory, base) {
          const queueItem = { directory, base };
          this._queue.push(queueItem, (error) => {
            if (error !== null) {
              this._handleError(error);
            }
          });
        }
        _worker(item, done) {
          this._scandir(item.directory, this._settings.fsScandirSettings, (error, entries) => {
            if (error !== null) {
              done(error, undefined);
              return;
            }
            for (const entry of entries) {
              this._handleEntry(entry, item.base);
            }
            done(null, undefined);
          });
        }
        _handleError(error) {
          if (this._isDestroyed || !common.isFatalError(this._settings, error)) {
            return;
          }
          this._isFatalError = true;
          this._isDestroyed = true;
          this._emitter.emit("error", error);
        }
        _handleEntry(entry, base) {
          if (this._isDestroyed || this._isFatalError) {
            return;
          }
          const fullpath = entry.path;
          if (base !== undefined) {
            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
          }
          if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
            this._emitEntry(entry);
          }
          if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
            this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
          }
        }
        _emitEntry(entry) {
          this._emitter.emit("entry", entry);
        }
      };
      exports2.default = AsyncReader;
    }
  });
  var require_async4 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/providers/async.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var async_1 = require_async3();
      var AsyncProvider = class {
        constructor(_root, _settings) {
          this._root = _root;
          this._settings = _settings;
          this._reader = new async_1.default(this._root, this._settings);
          this._storage = [];
        }
        read(callback) {
          this._reader.onError((error) => {
            callFailureCallback(callback, error);
          });
          this._reader.onEntry((entry) => {
            this._storage.push(entry);
          });
          this._reader.onEnd(() => {
            callSuccessCallback(callback, this._storage);
          });
          this._reader.read();
        }
      };
      exports2.default = AsyncProvider;
      function callFailureCallback(callback, error) {
        callback(error);
      }
      function callSuccessCallback(callback, entries) {
        callback(null, entries);
      }
    }
  });
  var require_stream2 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/providers/stream.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var stream_1 = __require("stream");
      var async_1 = require_async3();
      var StreamProvider = class {
        constructor(_root, _settings) {
          this._root = _root;
          this._settings = _settings;
          this._reader = new async_1.default(this._root, this._settings);
          this._stream = new stream_1.Readable({
            objectMode: true,
            read: () => {},
            destroy: () => {
              if (!this._reader.isDestroyed) {
                this._reader.destroy();
              }
            }
          });
        }
        read() {
          this._reader.onError((error) => {
            this._stream.emit("error", error);
          });
          this._reader.onEntry((entry) => {
            this._stream.push(entry);
          });
          this._reader.onEnd(() => {
            this._stream.push(null);
          });
          this._reader.read();
          return this._stream;
        }
      };
      exports2.default = StreamProvider;
    }
  });
  var require_sync3 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/readers/sync.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var fsScandir = require_out2();
      var common = require_common2();
      var reader_1 = require_reader();
      var SyncReader = class extends reader_1.default {
        constructor() {
          super(...arguments);
          this._scandir = fsScandir.scandirSync;
          this._storage = [];
          this._queue = /* @__PURE__ */ new Set;
        }
        read() {
          this._pushToQueue(this._root, this._settings.basePath);
          this._handleQueue();
          return this._storage;
        }
        _pushToQueue(directory, base) {
          this._queue.add({ directory, base });
        }
        _handleQueue() {
          for (const item of this._queue.values()) {
            this._handleDirectory(item.directory, item.base);
          }
        }
        _handleDirectory(directory, base) {
          try {
            const entries = this._scandir(directory, this._settings.fsScandirSettings);
            for (const entry of entries) {
              this._handleEntry(entry, base);
            }
          } catch (error) {
            this._handleError(error);
          }
        }
        _handleError(error) {
          if (!common.isFatalError(this._settings, error)) {
            return;
          }
          throw error;
        }
        _handleEntry(entry, base) {
          const fullpath = entry.path;
          if (base !== undefined) {
            entry.path = common.joinPathSegments(base, entry.name, this._settings.pathSegmentSeparator);
          }
          if (common.isAppliedFilter(this._settings.entryFilter, entry)) {
            this._pushToStorage(entry);
          }
          if (entry.dirent.isDirectory() && common.isAppliedFilter(this._settings.deepFilter, entry)) {
            this._pushToQueue(fullpath, base === undefined ? undefined : entry.path);
          }
        }
        _pushToStorage(entry) {
          this._storage.push(entry);
        }
      };
      exports2.default = SyncReader;
    }
  });
  var require_sync4 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/providers/sync.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var sync_1 = require_sync3();
      var SyncProvider = class {
        constructor(_root, _settings) {
          this._root = _root;
          this._settings = _settings;
          this._reader = new sync_1.default(this._root, this._settings);
        }
        read() {
          return this._reader.read();
        }
      };
      exports2.default = SyncProvider;
    }
  });
  var require_settings3 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/settings.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var path3 = __require("path");
      var fsScandir = require_out2();
      var Settings = class {
        constructor(_options = {}) {
          this._options = _options;
          this.basePath = this._getValue(this._options.basePath, undefined);
          this.concurrency = this._getValue(this._options.concurrency, Number.POSITIVE_INFINITY);
          this.deepFilter = this._getValue(this._options.deepFilter, null);
          this.entryFilter = this._getValue(this._options.entryFilter, null);
          this.errorFilter = this._getValue(this._options.errorFilter, null);
          this.pathSegmentSeparator = this._getValue(this._options.pathSegmentSeparator, path3.sep);
          this.fsScandirSettings = new fsScandir.Settings({
            followSymbolicLinks: this._options.followSymbolicLinks,
            fs: this._options.fs,
            pathSegmentSeparator: this._options.pathSegmentSeparator,
            stats: this._options.stats,
            throwErrorOnBrokenSymbolicLink: this._options.throwErrorOnBrokenSymbolicLink
          });
        }
        _getValue(option, value) {
          return option !== null && option !== undefined ? option : value;
        }
      };
      exports2.default = Settings;
    }
  });
  var require_out3 = __commonJS2({
    "node_modules/@nodelib/fs.walk/out/index.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.Settings = exports2.walkStream = exports2.walkSync = exports2.walk = undefined;
      var async_1 = require_async4();
      var stream_1 = require_stream2();
      var sync_1 = require_sync4();
      var settings_1 = require_settings3();
      exports2.Settings = settings_1.default;
      function walk(directory, optionsOrSettingsOrCallback, callback) {
        if (typeof optionsOrSettingsOrCallback === "function") {
          new async_1.default(directory, getSettings()).read(optionsOrSettingsOrCallback);
          return;
        }
        new async_1.default(directory, getSettings(optionsOrSettingsOrCallback)).read(callback);
      }
      exports2.walk = walk;
      function walkSync(directory, optionsOrSettings) {
        const settings = getSettings(optionsOrSettings);
        const provider = new sync_1.default(directory, settings);
        return provider.read();
      }
      exports2.walkSync = walkSync;
      function walkStream(directory, optionsOrSettings) {
        const settings = getSettings(optionsOrSettings);
        const provider = new stream_1.default(directory, settings);
        return provider.read();
      }
      exports2.walkStream = walkStream;
      function getSettings(settingsOrOptions = {}) {
        if (settingsOrOptions instanceof settings_1.default) {
          return settingsOrOptions;
        }
        return new settings_1.default(settingsOrOptions);
      }
    }
  });
  var require_reader2 = __commonJS2({
    "node_modules/fast-glob/out/readers/reader.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var path3 = __require("path");
      var fsStat = require_out();
      var utils = require_utils3();
      var Reader = class {
        constructor(_settings) {
          this._settings = _settings;
          this._fsStatSettings = new fsStat.Settings({
            followSymbolicLink: this._settings.followSymbolicLinks,
            fs: this._settings.fs,
            throwErrorOnBrokenSymbolicLink: this._settings.followSymbolicLinks
          });
        }
        _getFullEntryPath(filepath) {
          return path3.resolve(this._settings.cwd, filepath);
        }
        _makeEntry(stats, pattern) {
          const entry = {
            name: pattern,
            path: pattern,
            dirent: utils.fs.createDirentFromStats(pattern, stats)
          };
          if (this._settings.stats) {
            entry.stats = stats;
          }
          return entry;
        }
        _isFatalError(error) {
          return !utils.errno.isEnoentCodeError(error) && !this._settings.suppressErrors;
        }
      };
      exports2.default = Reader;
    }
  });
  var require_stream3 = __commonJS2({
    "node_modules/fast-glob/out/readers/stream.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var stream_1 = __require("stream");
      var fsStat = require_out();
      var fsWalk = require_out3();
      var reader_1 = require_reader2();
      var ReaderStream = class extends reader_1.default {
        constructor() {
          super(...arguments);
          this._walkStream = fsWalk.walkStream;
          this._stat = fsStat.stat;
        }
        dynamic(root, options) {
          return this._walkStream(root, options);
        }
        static(patterns, options) {
          const filepaths = patterns.map(this._getFullEntryPath, this);
          const stream = new stream_1.PassThrough({ objectMode: true });
          stream._write = (index, _enc, done) => {
            return this._getEntry(filepaths[index], patterns[index], options).then((entry) => {
              if (entry !== null && options.entryFilter(entry)) {
                stream.push(entry);
              }
              if (index === filepaths.length - 1) {
                stream.end();
              }
              done();
            }).catch(done);
          };
          for (let i = 0;i < filepaths.length; i++) {
            stream.write(i);
          }
          return stream;
        }
        _getEntry(filepath, pattern, options) {
          return this._getStat(filepath).then((stats) => this._makeEntry(stats, pattern)).catch((error) => {
            if (options.errorFilter(error)) {
              return null;
            }
            throw error;
          });
        }
        _getStat(filepath) {
          return new Promise((resolve, reject) => {
            this._stat(filepath, this._fsStatSettings, (error, stats) => {
              return error === null ? resolve(stats) : reject(error);
            });
          });
        }
      };
      exports2.default = ReaderStream;
    }
  });
  var require_async5 = __commonJS2({
    "node_modules/fast-glob/out/readers/async.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var fsWalk = require_out3();
      var reader_1 = require_reader2();
      var stream_1 = require_stream3();
      var ReaderAsync = class extends reader_1.default {
        constructor() {
          super(...arguments);
          this._walkAsync = fsWalk.walk;
          this._readerStream = new stream_1.default(this._settings);
        }
        dynamic(root, options) {
          return new Promise((resolve, reject) => {
            this._walkAsync(root, options, (error, entries) => {
              if (error === null) {
                resolve(entries);
              } else {
                reject(error);
              }
            });
          });
        }
        static(patterns, options) {
          return __async(this, null, function* () {
            const entries = [];
            const stream = this._readerStream.static(patterns, options);
            return new Promise((resolve, reject) => {
              stream.once("error", reject);
              stream.on("data", (entry) => entries.push(entry));
              stream.once("end", () => resolve(entries));
            });
          });
        }
      };
      exports2.default = ReaderAsync;
    }
  });
  var require_matcher = __commonJS2({
    "node_modules/fast-glob/out/providers/matchers/matcher.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var utils = require_utils3();
      var Matcher = class {
        constructor(_patterns, _settings, _micromatchOptions) {
          this._patterns = _patterns;
          this._settings = _settings;
          this._micromatchOptions = _micromatchOptions;
          this._storage = [];
          this._fillStorage();
        }
        _fillStorage() {
          for (const pattern of this._patterns) {
            const segments = this._getPatternSegments(pattern);
            const sections = this._splitSegmentsIntoSections(segments);
            this._storage.push({
              complete: sections.length <= 1,
              pattern,
              segments,
              sections
            });
          }
        }
        _getPatternSegments(pattern) {
          const parts = utils.pattern.getPatternParts(pattern, this._micromatchOptions);
          return parts.map((part) => {
            const dynamic = utils.pattern.isDynamicPattern(part, this._settings);
            if (!dynamic) {
              return {
                dynamic: false,
                pattern: part
              };
            }
            return {
              dynamic: true,
              pattern: part,
              patternRe: utils.pattern.makeRe(part, this._micromatchOptions)
            };
          });
        }
        _splitSegmentsIntoSections(segments) {
          return utils.array.splitWhen(segments, (segment) => segment.dynamic && utils.pattern.hasGlobStar(segment.pattern));
        }
      };
      exports2.default = Matcher;
    }
  });
  var require_partial = __commonJS2({
    "node_modules/fast-glob/out/providers/matchers/partial.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var matcher_1 = require_matcher();
      var PartialMatcher = class extends matcher_1.default {
        match(filepath) {
          const parts = filepath.split("/");
          const levels = parts.length;
          const patterns = this._storage.filter((info) => !info.complete || info.segments.length > levels);
          for (const pattern of patterns) {
            const section = pattern.sections[0];
            if (!pattern.complete && levels > section.length) {
              return true;
            }
            const match = parts.every((part, index) => {
              const segment = pattern.segments[index];
              if (segment.dynamic && segment.patternRe.test(part)) {
                return true;
              }
              if (!segment.dynamic && segment.pattern === part) {
                return true;
              }
              return false;
            });
            if (match) {
              return true;
            }
          }
          return false;
        }
      };
      exports2.default = PartialMatcher;
    }
  });
  var require_deep = __commonJS2({
    "node_modules/fast-glob/out/providers/filters/deep.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var utils = require_utils3();
      var partial_1 = require_partial();
      var DeepFilter = class {
        constructor(_settings, _micromatchOptions) {
          this._settings = _settings;
          this._micromatchOptions = _micromatchOptions;
        }
        getFilter(basePath, positive, negative) {
          const matcher = this._getMatcher(positive);
          const negativeRe = this._getNegativePatternsRe(negative);
          return (entry) => this._filter(basePath, entry, matcher, negativeRe);
        }
        _getMatcher(patterns) {
          return new partial_1.default(patterns, this._settings, this._micromatchOptions);
        }
        _getNegativePatternsRe(patterns) {
          const affectDepthOfReadingPatterns = patterns.filter(utils.pattern.isAffectDepthOfReadingPattern);
          return utils.pattern.convertPatternsToRe(affectDepthOfReadingPatterns, this._micromatchOptions);
        }
        _filter(basePath, entry, matcher, negativeRe) {
          if (this._isSkippedByDeep(basePath, entry.path)) {
            return false;
          }
          if (this._isSkippedSymbolicLink(entry)) {
            return false;
          }
          const filepath = utils.path.removeLeadingDotSegment(entry.path);
          if (this._isSkippedByPositivePatterns(filepath, matcher)) {
            return false;
          }
          return this._isSkippedByNegativePatterns(filepath, negativeRe);
        }
        _isSkippedByDeep(basePath, entryPath) {
          if (this._settings.deep === Infinity) {
            return false;
          }
          return this._getEntryLevel(basePath, entryPath) >= this._settings.deep;
        }
        _getEntryLevel(basePath, entryPath) {
          const entryPathDepth = entryPath.split("/").length;
          if (basePath === "") {
            return entryPathDepth;
          }
          const basePathDepth = basePath.split("/").length;
          return entryPathDepth - basePathDepth;
        }
        _isSkippedSymbolicLink(entry) {
          return !this._settings.followSymbolicLinks && entry.dirent.isSymbolicLink();
        }
        _isSkippedByPositivePatterns(entryPath, matcher) {
          return !this._settings.baseNameMatch && !matcher.match(entryPath);
        }
        _isSkippedByNegativePatterns(entryPath, patternsRe) {
          return !utils.pattern.matchAny(entryPath, patternsRe);
        }
      };
      exports2.default = DeepFilter;
    }
  });
  var require_entry = __commonJS2({
    "node_modules/fast-glob/out/providers/filters/entry.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var utils = require_utils3();
      var EntryFilter = class {
        constructor(_settings, _micromatchOptions) {
          this._settings = _settings;
          this._micromatchOptions = _micromatchOptions;
          this.index = /* @__PURE__ */ new Map;
        }
        getFilter(positive, negative) {
          const [absoluteNegative, relativeNegative] = utils.pattern.partitionAbsoluteAndRelative(negative);
          const patterns = {
            positive: {
              all: utils.pattern.convertPatternsToRe(positive, this._micromatchOptions)
            },
            negative: {
              absolute: utils.pattern.convertPatternsToRe(absoluteNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true })),
              relative: utils.pattern.convertPatternsToRe(relativeNegative, Object.assign(Object.assign({}, this._micromatchOptions), { dot: true }))
            }
          };
          return (entry) => this._filter(entry, patterns);
        }
        _filter(entry, patterns) {
          const filepath = utils.path.removeLeadingDotSegment(entry.path);
          if (this._settings.unique && this._isDuplicateEntry(filepath)) {
            return false;
          }
          if (this._onlyFileFilter(entry) || this._onlyDirectoryFilter(entry)) {
            return false;
          }
          const isMatched = this._isMatchToPatternsSet(filepath, patterns, entry.dirent.isDirectory());
          if (this._settings.unique && isMatched) {
            this._createIndexRecord(filepath);
          }
          return isMatched;
        }
        _isDuplicateEntry(filepath) {
          return this.index.has(filepath);
        }
        _createIndexRecord(filepath) {
          this.index.set(filepath, undefined);
        }
        _onlyFileFilter(entry) {
          return this._settings.onlyFiles && !entry.dirent.isFile();
        }
        _onlyDirectoryFilter(entry) {
          return this._settings.onlyDirectories && !entry.dirent.isDirectory();
        }
        _isMatchToPatternsSet(filepath, patterns, isDirectory2) {
          const isMatched = this._isMatchToPatterns(filepath, patterns.positive.all, isDirectory2);
          if (!isMatched) {
            return false;
          }
          const isMatchedByRelativeNegative = this._isMatchToPatterns(filepath, patterns.negative.relative, isDirectory2);
          if (isMatchedByRelativeNegative) {
            return false;
          }
          const isMatchedByAbsoluteNegative = this._isMatchToAbsoluteNegative(filepath, patterns.negative.absolute, isDirectory2);
          if (isMatchedByAbsoluteNegative) {
            return false;
          }
          return true;
        }
        _isMatchToAbsoluteNegative(filepath, patternsRe, isDirectory2) {
          if (patternsRe.length === 0) {
            return false;
          }
          const fullpath = utils.path.makeAbsolute(this._settings.cwd, filepath);
          return this._isMatchToPatterns(fullpath, patternsRe, isDirectory2);
        }
        _isMatchToPatterns(filepath, patternsRe, isDirectory2) {
          if (patternsRe.length === 0) {
            return false;
          }
          const isMatched = utils.pattern.matchAny(filepath, patternsRe);
          if (!isMatched && isDirectory2) {
            return utils.pattern.matchAny(filepath + "/", patternsRe);
          }
          return isMatched;
        }
      };
      exports2.default = EntryFilter;
    }
  });
  var require_error = __commonJS2({
    "node_modules/fast-glob/out/providers/filters/error.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var utils = require_utils3();
      var ErrorFilter = class {
        constructor(_settings) {
          this._settings = _settings;
        }
        getFilter() {
          return (error) => this._isNonFatalError(error);
        }
        _isNonFatalError(error) {
          return utils.errno.isEnoentCodeError(error) || this._settings.suppressErrors;
        }
      };
      exports2.default = ErrorFilter;
    }
  });
  var require_entry2 = __commonJS2({
    "node_modules/fast-glob/out/providers/transformers/entry.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var utils = require_utils3();
      var EntryTransformer = class {
        constructor(_settings) {
          this._settings = _settings;
        }
        getTransformer() {
          return (entry) => this._transform(entry);
        }
        _transform(entry) {
          let filepath = entry.path;
          if (this._settings.absolute) {
            filepath = utils.path.makeAbsolute(this._settings.cwd, filepath);
            filepath = utils.path.unixify(filepath);
          }
          if (this._settings.markDirectories && entry.dirent.isDirectory()) {
            filepath += "/";
          }
          if (!this._settings.objectMode) {
            return filepath;
          }
          return Object.assign(Object.assign({}, entry), { path: filepath });
        }
      };
      exports2.default = EntryTransformer;
    }
  });
  var require_provider = __commonJS2({
    "node_modules/fast-glob/out/providers/provider.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var path3 = __require("path");
      var deep_1 = require_deep();
      var entry_1 = require_entry();
      var error_1 = require_error();
      var entry_2 = require_entry2();
      var Provider = class {
        constructor(_settings) {
          this._settings = _settings;
          this.errorFilter = new error_1.default(this._settings);
          this.entryFilter = new entry_1.default(this._settings, this._getMicromatchOptions());
          this.deepFilter = new deep_1.default(this._settings, this._getMicromatchOptions());
          this.entryTransformer = new entry_2.default(this._settings);
        }
        _getRootDirectory(task) {
          return path3.resolve(this._settings.cwd, task.base);
        }
        _getReaderOptions(task) {
          const basePath = task.base === "." ? "" : task.base;
          return {
            basePath,
            pathSegmentSeparator: "/",
            concurrency: this._settings.concurrency,
            deepFilter: this.deepFilter.getFilter(basePath, task.positive, task.negative),
            entryFilter: this.entryFilter.getFilter(task.positive, task.negative),
            errorFilter: this.errorFilter.getFilter(),
            followSymbolicLinks: this._settings.followSymbolicLinks,
            fs: this._settings.fs,
            stats: this._settings.stats,
            throwErrorOnBrokenSymbolicLink: this._settings.throwErrorOnBrokenSymbolicLink,
            transform: this.entryTransformer.getTransformer()
          };
        }
        _getMicromatchOptions() {
          return {
            dot: this._settings.dot,
            matchBase: this._settings.baseNameMatch,
            nobrace: !this._settings.braceExpansion,
            nocase: !this._settings.caseSensitiveMatch,
            noext: !this._settings.extglob,
            noglobstar: !this._settings.globstar,
            posix: true,
            strictSlashes: false
          };
        }
      };
      exports2.default = Provider;
    }
  });
  var require_async6 = __commonJS2({
    "node_modules/fast-glob/out/providers/async.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var async_1 = require_async5();
      var provider_1 = require_provider();
      var ProviderAsync = class extends provider_1.default {
        constructor() {
          super(...arguments);
          this._reader = new async_1.default(this._settings);
        }
        read(task) {
          return __async(this, null, function* () {
            const root = this._getRootDirectory(task);
            const options = this._getReaderOptions(task);
            const entries = yield this.api(root, task, options);
            return entries.map((entry) => options.transform(entry));
          });
        }
        api(root, task, options) {
          if (task.dynamic) {
            return this._reader.dynamic(root, options);
          }
          return this._reader.static(task.patterns, options);
        }
      };
      exports2.default = ProviderAsync;
    }
  });
  var require_stream4 = __commonJS2({
    "node_modules/fast-glob/out/providers/stream.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var stream_1 = __require("stream");
      var stream_2 = require_stream3();
      var provider_1 = require_provider();
      var ProviderStream = class extends provider_1.default {
        constructor() {
          super(...arguments);
          this._reader = new stream_2.default(this._settings);
        }
        read(task) {
          const root = this._getRootDirectory(task);
          const options = this._getReaderOptions(task);
          const source = this.api(root, task, options);
          const destination = new stream_1.Readable({ objectMode: true, read: () => {} });
          source.once("error", (error) => destination.emit("error", error)).on("data", (entry) => destination.emit("data", options.transform(entry))).once("end", () => destination.emit("end"));
          destination.once("close", () => source.destroy());
          return destination;
        }
        api(root, task, options) {
          if (task.dynamic) {
            return this._reader.dynamic(root, options);
          }
          return this._reader.static(task.patterns, options);
        }
      };
      exports2.default = ProviderStream;
    }
  });
  var require_sync5 = __commonJS2({
    "node_modules/fast-glob/out/readers/sync.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var fsStat = require_out();
      var fsWalk = require_out3();
      var reader_1 = require_reader2();
      var ReaderSync = class extends reader_1.default {
        constructor() {
          super(...arguments);
          this._walkSync = fsWalk.walkSync;
          this._statSync = fsStat.statSync;
        }
        dynamic(root, options) {
          return this._walkSync(root, options);
        }
        static(patterns, options) {
          const entries = [];
          for (const pattern of patterns) {
            const filepath = this._getFullEntryPath(pattern);
            const entry = this._getEntry(filepath, pattern, options);
            if (entry === null || !options.entryFilter(entry)) {
              continue;
            }
            entries.push(entry);
          }
          return entries;
        }
        _getEntry(filepath, pattern, options) {
          try {
            const stats = this._getStat(filepath);
            return this._makeEntry(stats, pattern);
          } catch (error) {
            if (options.errorFilter(error)) {
              return null;
            }
            throw error;
          }
        }
        _getStat(filepath) {
          return this._statSync(filepath, this._fsStatSettings);
        }
      };
      exports2.default = ReaderSync;
    }
  });
  var require_sync6 = __commonJS2({
    "node_modules/fast-glob/out/providers/sync.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var sync_1 = require_sync5();
      var provider_1 = require_provider();
      var ProviderSync = class extends provider_1.default {
        constructor() {
          super(...arguments);
          this._reader = new sync_1.default(this._settings);
        }
        read(task) {
          const root = this._getRootDirectory(task);
          const options = this._getReaderOptions(task);
          const entries = this.api(root, task, options);
          return entries.map(options.transform);
        }
        api(root, task, options) {
          if (task.dynamic) {
            return this._reader.dynamic(root, options);
          }
          return this._reader.static(task.patterns, options);
        }
      };
      exports2.default = ProviderSync;
    }
  });
  var require_settings4 = __commonJS2({
    "node_modules/fast-glob/out/settings.js"(exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.DEFAULT_FILE_SYSTEM_ADAPTER = undefined;
      var fs6 = __require("fs");
      var os = __require("os");
      var CPU_COUNT = Math.max(os.cpus().length, 1);
      exports2.DEFAULT_FILE_SYSTEM_ADAPTER = {
        lstat: fs6.lstat,
        lstatSync: fs6.lstatSync,
        stat: fs6.stat,
        statSync: fs6.statSync,
        readdir: fs6.readdir,
        readdirSync: fs6.readdirSync
      };
      var Settings = class {
        constructor(_options = {}) {
          this._options = _options;
          this.absolute = this._getValue(this._options.absolute, false);
          this.baseNameMatch = this._getValue(this._options.baseNameMatch, false);
          this.braceExpansion = this._getValue(this._options.braceExpansion, true);
          this.caseSensitiveMatch = this._getValue(this._options.caseSensitiveMatch, true);
          this.concurrency = this._getValue(this._options.concurrency, CPU_COUNT);
          this.cwd = this._getValue(this._options.cwd, process.cwd());
          this.deep = this._getValue(this._options.deep, Infinity);
          this.dot = this._getValue(this._options.dot, false);
          this.extglob = this._getValue(this._options.extglob, true);
          this.followSymbolicLinks = this._getValue(this._options.followSymbolicLinks, true);
          this.fs = this._getFileSystemMethods(this._options.fs);
          this.globstar = this._getValue(this._options.globstar, true);
          this.ignore = this._getValue(this._options.ignore, []);
          this.markDirectories = this._getValue(this._options.markDirectories, false);
          this.objectMode = this._getValue(this._options.objectMode, false);
          this.onlyDirectories = this._getValue(this._options.onlyDirectories, false);
          this.onlyFiles = this._getValue(this._options.onlyFiles, true);
          this.stats = this._getValue(this._options.stats, false);
          this.suppressErrors = this._getValue(this._options.suppressErrors, false);
          this.throwErrorOnBrokenSymbolicLink = this._getValue(this._options.throwErrorOnBrokenSymbolicLink, false);
          this.unique = this._getValue(this._options.unique, true);
          if (this.onlyDirectories) {
            this.onlyFiles = false;
          }
          if (this.stats) {
            this.objectMode = true;
          }
          this.ignore = [].concat(this.ignore);
        }
        _getValue(option, value) {
          return option === undefined ? value : option;
        }
        _getFileSystemMethods(methods = {}) {
          return Object.assign(Object.assign({}, exports2.DEFAULT_FILE_SYSTEM_ADAPTER), methods);
        }
      };
      exports2.default = Settings;
    }
  });
  var require_out4 = __commonJS2({
    "node_modules/fast-glob/out/index.js"(exports2, module2) {
      var taskManager = require_tasks();
      var async_1 = require_async6();
      var stream_1 = require_stream4();
      var sync_1 = require_sync6();
      var settings_1 = require_settings4();
      var utils = require_utils3();
      function FastGlob(source, options) {
        return __async(this, null, function* () {
          assertPatternsInput2(source);
          const works = getWorks(source, async_1.default, options);
          const result = yield Promise.all(works);
          return utils.array.flatten(result);
        });
      }
      (function(FastGlob2) {
        FastGlob2.glob = FastGlob2;
        FastGlob2.globSync = sync;
        FastGlob2.globStream = stream;
        FastGlob2.async = FastGlob2;
        function sync(source, options) {
          assertPatternsInput2(source);
          const works = getWorks(source, sync_1.default, options);
          return utils.array.flatten(works);
        }
        FastGlob2.sync = sync;
        function stream(source, options) {
          assertPatternsInput2(source);
          const works = getWorks(source, stream_1.default, options);
          return utils.stream.merge(works);
        }
        FastGlob2.stream = stream;
        function generateTasks2(source, options) {
          assertPatternsInput2(source);
          const patterns = [].concat(source);
          const settings = new settings_1.default(options);
          return taskManager.generate(patterns, settings);
        }
        FastGlob2.generateTasks = generateTasks2;
        function isDynamicPattern2(source, options) {
          assertPatternsInput2(source);
          const settings = new settings_1.default(options);
          return utils.pattern.isDynamicPattern(source, settings);
        }
        FastGlob2.isDynamicPattern = isDynamicPattern2;
        function escapePath(source) {
          assertPatternsInput2(source);
          return utils.path.escape(source);
        }
        FastGlob2.escapePath = escapePath;
        function convertPathToPattern2(source) {
          assertPatternsInput2(source);
          return utils.path.convertPathToPattern(source);
        }
        FastGlob2.convertPathToPattern = convertPathToPattern2;
        let posix;
        (function(posix2) {
          function escapePath2(source) {
            assertPatternsInput2(source);
            return utils.path.escapePosixPath(source);
          }
          posix2.escapePath = escapePath2;
          function convertPathToPattern3(source) {
            assertPatternsInput2(source);
            return utils.path.convertPosixPathToPattern(source);
          }
          posix2.convertPathToPattern = convertPathToPattern3;
        })(posix = FastGlob2.posix || (FastGlob2.posix = {}));
        let win32;
        (function(win322) {
          function escapePath2(source) {
            assertPatternsInput2(source);
            return utils.path.escapeWindowsPath(source);
          }
          win322.escapePath = escapePath2;
          function convertPathToPattern3(source) {
            assertPatternsInput2(source);
            return utils.path.convertWindowsPathToPattern(source);
          }
          win322.convertPathToPattern = convertPathToPattern3;
        })(win32 = FastGlob2.win32 || (FastGlob2.win32 = {}));
      })(FastGlob || (FastGlob = {}));
      function getWorks(source, _Provider, options) {
        const patterns = [].concat(source);
        const settings = new settings_1.default(options);
        const tasks = taskManager.generate(patterns, settings);
        const provider = new _Provider(settings);
        return tasks.map(provider.read, provider);
      }
      function assertPatternsInput2(input) {
        const source = [].concat(input);
        const isValidSource = source.every((item) => utils.string.isString(item) && !utils.string.isEmpty(item));
        if (!isValidSource) {
          throw new TypeError("Patterns must be a string (non empty) or an array of strings");
        }
      }
      module2.exports = FastGlob;
    }
  });
  var require_ignore = __commonJS2({
    "node_modules/ignore/index.js"(exports2, module2) {
      function makeArray(subject) {
        return Array.isArray(subject) ? subject : [subject];
      }
      var EMPTY = "";
      var SPACE = " ";
      var ESCAPE = "\\";
      var REGEX_TEST_BLANK_LINE = /^\s+$/;
      var REGEX_INVALID_TRAILING_BACKSLASH = /(?:[^\\]|^)\\$/;
      var REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION = /^\\!/;
      var REGEX_REPLACE_LEADING_EXCAPED_HASH = /^\\#/;
      var REGEX_SPLITALL_CRLF = /\r?\n/g;
      var REGEX_TEST_INVALID_PATH = /^\.*\/|^\.+$/;
      var SLASH = "/";
      var TMP_KEY_IGNORE = "node-ignore";
      if (typeof Symbol !== "undefined") {
        TMP_KEY_IGNORE = Symbol.for("node-ignore");
      }
      var KEY_IGNORE = TMP_KEY_IGNORE;
      var define = (object, key, value) => Object.defineProperty(object, key, { value });
      var REGEX_REGEXP_RANGE = /([0-z])-([0-z])/g;
      var RETURN_FALSE = () => false;
      var sanitizeRange = (range) => range.replace(REGEX_REGEXP_RANGE, (match, from, to) => from.charCodeAt(0) <= to.charCodeAt(0) ? match : EMPTY);
      var cleanRangeBackSlash = (slashes) => {
        const { length } = slashes;
        return slashes.slice(0, length - length % 2);
      };
      var REPLACERS = [
        [
          /^\uFEFF/,
          () => EMPTY
        ],
        [
          /((?:\\\\)*?)(\\?\s+)$/,
          (_, m1, m2) => m1 + (m2.indexOf("\\") === 0 ? SPACE : EMPTY)
        ],
        [
          /(\\+?)\s/g,
          (_, m1) => {
            const { length } = m1;
            return m1.slice(0, length - length % 2) + SPACE;
          }
        ],
        [
          /[\\$.|*+(){^]/g,
          (match) => `\\${match}`
        ],
        [
          /(?!\\)\?/g,
          () => "[^/]"
        ],
        [
          /^\//,
          () => "^"
        ],
        [
          /\//g,
          () => "\\/"
        ],
        [
          /^\^*\\\*\\\*\\\//,
          () => "^(?:.*\\/)?"
        ],
        [
          /^(?=[^^])/,
          function startingReplacer() {
            return !/\/(?!$)/.test(this) ? "(?:^|\\/)" : "^";
          }
        ],
        [
          /\\\/\\\*\\\*(?=\\\/|$)/g,
          (_, index, str) => index + 6 < str.length ? "(?:\\/[^\\/]+)*" : "\\/.+"
        ],
        [
          /(^|[^\\]+)(\\\*)+(?=.+)/g,
          (_, p1, p2) => {
            const unescaped = p2.replace(/\\\*/g, "[^\\/]*");
            return p1 + unescaped;
          }
        ],
        [
          /\\\\\\(?=[$.|*+(){^])/g,
          () => ESCAPE
        ],
        [
          /\\\\/g,
          () => ESCAPE
        ],
        [
          /(\\)?\[([^\]/]*?)(\\*)($|\])/g,
          (match, leadEscape, range, endEscape, close) => leadEscape === ESCAPE ? `\\[${range}${cleanRangeBackSlash(endEscape)}${close}` : close === "]" ? endEscape.length % 2 === 0 ? `[${sanitizeRange(range)}${endEscape}]` : "[]" : "[]"
        ],
        [
          /(?:[^*])$/,
          (match) => /\/$/.test(match) ? `${match}$` : `${match}(?=$|\\/$)`
        ],
        [
          /(\^|\\\/)?\\\*$/,
          (_, p1) => {
            const prefix = p1 ? `${p1}[^/]+` : "[^/]*";
            return `${prefix}(?=$|\\/$)`;
          }
        ]
      ];
      var regexCache = /* @__PURE__ */ Object.create(null);
      var makeRegex = (pattern, ignoreCase) => {
        let source = regexCache[pattern];
        if (!source) {
          source = REPLACERS.reduce((prev, [matcher, replacer]) => prev.replace(matcher, replacer.bind(pattern)), pattern);
          regexCache[pattern] = source;
        }
        return ignoreCase ? new RegExp(source, "i") : new RegExp(source);
      };
      var isString = (subject) => typeof subject === "string";
      var checkPattern = (pattern) => pattern && isString(pattern) && !REGEX_TEST_BLANK_LINE.test(pattern) && !REGEX_INVALID_TRAILING_BACKSLASH.test(pattern) && pattern.indexOf("#") !== 0;
      var splitPattern = (pattern) => pattern.split(REGEX_SPLITALL_CRLF);
      var IgnoreRule = class {
        constructor(origin, pattern, negative, regex) {
          this.origin = origin;
          this.pattern = pattern;
          this.negative = negative;
          this.regex = regex;
        }
      };
      var createRule = (pattern, ignoreCase) => {
        const origin = pattern;
        let negative = false;
        if (pattern.indexOf("!") === 0) {
          negative = true;
          pattern = pattern.substr(1);
        }
        pattern = pattern.replace(REGEX_REPLACE_LEADING_EXCAPED_EXCLAMATION, "!").replace(REGEX_REPLACE_LEADING_EXCAPED_HASH, "#");
        const regex = makeRegex(pattern, ignoreCase);
        return new IgnoreRule(origin, pattern, negative, regex);
      };
      var throwError = (message, Ctor) => {
        throw new Ctor(message);
      };
      var checkPath = (path3, originalPath, doThrow) => {
        if (!isString(path3)) {
          return doThrow(`path must be a string, but got \`${originalPath}\``, TypeError);
        }
        if (!path3) {
          return doThrow(`path must not be empty`, TypeError);
        }
        if (checkPath.isNotRelative(path3)) {
          const r = "`path.relative()`d";
          return doThrow(`path should be a ${r} string, but got "${originalPath}"`, RangeError);
        }
        return true;
      };
      var isNotRelative = (path3) => REGEX_TEST_INVALID_PATH.test(path3);
      checkPath.isNotRelative = isNotRelative;
      checkPath.convert = (p) => p;
      var Ignore = class {
        constructor({
          ignorecase = true,
          ignoreCase = ignorecase,
          allowRelativePaths = false
        } = {}) {
          define(this, KEY_IGNORE, true);
          this._rules = [];
          this._ignoreCase = ignoreCase;
          this._allowRelativePaths = allowRelativePaths;
          this._initCache();
        }
        _initCache() {
          this._ignoreCache = /* @__PURE__ */ Object.create(null);
          this._testCache = /* @__PURE__ */ Object.create(null);
        }
        _addPattern(pattern) {
          if (pattern && pattern[KEY_IGNORE]) {
            this._rules = this._rules.concat(pattern._rules);
            this._added = true;
            return;
          }
          if (checkPattern(pattern)) {
            const rule = createRule(pattern, this._ignoreCase);
            this._added = true;
            this._rules.push(rule);
          }
        }
        add(pattern) {
          this._added = false;
          makeArray(isString(pattern) ? splitPattern(pattern) : pattern).forEach(this._addPattern, this);
          if (this._added) {
            this._initCache();
          }
          return this;
        }
        addPattern(pattern) {
          return this.add(pattern);
        }
        _testOne(path3, checkUnignored) {
          let ignored = false;
          let unignored = false;
          this._rules.forEach((rule) => {
            const { negative } = rule;
            if (unignored === negative && ignored !== unignored || negative && !ignored && !unignored && !checkUnignored) {
              return;
            }
            const matched = rule.regex.test(path3);
            if (matched) {
              ignored = !negative;
              unignored = negative;
            }
          });
          return {
            ignored,
            unignored
          };
        }
        _test(originalPath, cache, checkUnignored, slices) {
          const path3 = originalPath && checkPath.convert(originalPath);
          checkPath(path3, originalPath, this._allowRelativePaths ? RETURN_FALSE : throwError);
          return this._t(path3, cache, checkUnignored, slices);
        }
        _t(path3, cache, checkUnignored, slices) {
          if (path3 in cache) {
            return cache[path3];
          }
          if (!slices) {
            slices = path3.split(SLASH);
          }
          slices.pop();
          if (!slices.length) {
            return cache[path3] = this._testOne(path3, checkUnignored);
          }
          const parent = this._t(slices.join(SLASH) + SLASH, cache, checkUnignored, slices);
          return cache[path3] = parent.ignored ? parent : this._testOne(path3, checkUnignored);
        }
        ignores(path3) {
          return this._test(path3, this._ignoreCache, false).ignored;
        }
        createFilter() {
          return (path3) => !this.ignores(path3);
        }
        filter(paths) {
          return makeArray(paths).filter(this.createFilter());
        }
        test(path3) {
          return this._test(path3, this._testCache, true);
        }
      };
      var factory = (options) => new Ignore(options);
      var isPathValid = (path3) => checkPath(path3 && checkPath.convert(path3), path3, RETURN_FALSE);
      factory.isPathValid = isPathValid;
      factory.default = factory;
      module2.exports = factory;
      if (typeof process !== "undefined" && (process.env && process.env.IGNORE_TEST_WIN32 || process.platform === "win32")) {
        const makePosix = (str) => /^\\\\\?\\/.test(str) || /["<>|\u0000-\u001F]+/u.test(str) ? str : str.replace(/\\/g, "/");
        checkPath.convert = makePosix;
        const REGIX_IS_WINDOWS_PATH_ABSOLUTE = /^[a-z]:\//i;
        checkPath.isNotRelative = (path3) => REGIX_IS_WINDOWS_PATH_ABSOLUTE.test(path3) || isNotRelative(path3);
      }
    }
  });
  var require_universalify = __commonJS2({
    "node_modules/universalify/index.js"(exports2) {
      exports2.fromCallback = function(fn) {
        return Object.defineProperty(function(...args) {
          if (typeof args[args.length - 1] === "function")
            fn.apply(this, args);
          else {
            return new Promise((resolve, reject) => {
              args.push((err, res) => err != null ? reject(err) : resolve(res));
              fn.apply(this, args);
            });
          }
        }, "name", { value: fn.name });
      };
      exports2.fromPromise = function(fn) {
        return Object.defineProperty(function(...args) {
          const cb = args[args.length - 1];
          if (typeof cb !== "function")
            return fn.apply(this, args);
          else {
            args.pop();
            fn.apply(this, args).then((r) => cb(null, r), cb);
          }
        }, "name", { value: fn.name });
      };
    }
  });
  var require_polyfills = __commonJS2({
    "node_modules/graceful-fs/polyfills.js"(exports2, module2) {
      var constants = __require("constants");
      var origCwd = process.cwd;
      var cwd = null;
      var platform = process.env.GRACEFUL_FS_PLATFORM || process.platform;
      process.cwd = function() {
        if (!cwd)
          cwd = origCwd.call(process);
        return cwd;
      };
      try {
        process.cwd();
      } catch (er) {}
      if (typeof process.chdir === "function") {
        chdir = process.chdir;
        process.chdir = function(d2) {
          cwd = null;
          chdir.call(process, d2);
        };
        if (Object.setPrototypeOf)
          Object.setPrototypeOf(process.chdir, chdir);
      }
      var chdir;
      module2.exports = patch;
      function patch(fs6) {
        if (constants.hasOwnProperty("O_SYMLINK") && process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)) {
          patchLchmod(fs6);
        }
        if (!fs6.lutimes) {
          patchLutimes(fs6);
        }
        fs6.chown = chownFix(fs6.chown);
        fs6.fchown = chownFix(fs6.fchown);
        fs6.lchown = chownFix(fs6.lchown);
        fs6.chmod = chmodFix(fs6.chmod);
        fs6.fchmod = chmodFix(fs6.fchmod);
        fs6.lchmod = chmodFix(fs6.lchmod);
        fs6.chownSync = chownFixSync(fs6.chownSync);
        fs6.fchownSync = chownFixSync(fs6.fchownSync);
        fs6.lchownSync = chownFixSync(fs6.lchownSync);
        fs6.chmodSync = chmodFixSync(fs6.chmodSync);
        fs6.fchmodSync = chmodFixSync(fs6.fchmodSync);
        fs6.lchmodSync = chmodFixSync(fs6.lchmodSync);
        fs6.stat = statFix(fs6.stat);
        fs6.fstat = statFix(fs6.fstat);
        fs6.lstat = statFix(fs6.lstat);
        fs6.statSync = statFixSync(fs6.statSync);
        fs6.fstatSync = statFixSync(fs6.fstatSync);
        fs6.lstatSync = statFixSync(fs6.lstatSync);
        if (fs6.chmod && !fs6.lchmod) {
          fs6.lchmod = function(path3, mode, cb) {
            if (cb)
              process.nextTick(cb);
          };
          fs6.lchmodSync = function() {};
        }
        if (fs6.chown && !fs6.lchown) {
          fs6.lchown = function(path3, uid, gid, cb) {
            if (cb)
              process.nextTick(cb);
          };
          fs6.lchownSync = function() {};
        }
        if (platform === "win32") {
          fs6.rename = typeof fs6.rename !== "function" ? fs6.rename : function(fs$rename) {
            function rename(from, to, cb) {
              var start = Date.now();
              var backoff = 0;
              fs$rename(from, to, function CB(er) {
                if (er && (er.code === "EACCES" || er.code === "EPERM" || er.code === "EBUSY") && Date.now() - start < 60000) {
                  setTimeout(function() {
                    fs6.stat(to, function(stater, st2) {
                      if (stater && stater.code === "ENOENT")
                        fs$rename(from, to, CB);
                      else
                        cb(er);
                    });
                  }, backoff);
                  if (backoff < 100)
                    backoff += 10;
                  return;
                }
                if (cb)
                  cb(er);
              });
            }
            if (Object.setPrototypeOf)
              Object.setPrototypeOf(rename, fs$rename);
            return rename;
          }(fs6.rename);
        }
        fs6.read = typeof fs6.read !== "function" ? fs6.read : function(fs$read) {
          function read(fd, buffer, offset, length, position, callback_) {
            var callback;
            if (callback_ && typeof callback_ === "function") {
              var eagCounter = 0;
              callback = function(er, _, __) {
                if (er && er.code === "EAGAIN" && eagCounter < 10) {
                  eagCounter++;
                  return fs$read.call(fs6, fd, buffer, offset, length, position, callback);
                }
                callback_.apply(this, arguments);
              };
            }
            return fs$read.call(fs6, fd, buffer, offset, length, position, callback);
          }
          if (Object.setPrototypeOf)
            Object.setPrototypeOf(read, fs$read);
          return read;
        }(fs6.read);
        fs6.readSync = typeof fs6.readSync !== "function" ? fs6.readSync : /* @__PURE__ */ function(fs$readSync) {
          return function(fd, buffer, offset, length, position) {
            var eagCounter = 0;
            while (true) {
              try {
                return fs$readSync.call(fs6, fd, buffer, offset, length, position);
              } catch (er) {
                if (er.code === "EAGAIN" && eagCounter < 10) {
                  eagCounter++;
                  continue;
                }
                throw er;
              }
            }
          };
        }(fs6.readSync);
        function patchLchmod(fs7) {
          fs7.lchmod = function(path3, mode, callback) {
            fs7.open(path3, constants.O_WRONLY | constants.O_SYMLINK, mode, function(err, fd) {
              if (err) {
                if (callback)
                  callback(err);
                return;
              }
              fs7.fchmod(fd, mode, function(err2) {
                fs7.close(fd, function(err22) {
                  if (callback)
                    callback(err2 || err22);
                });
              });
            });
          };
          fs7.lchmodSync = function(path3, mode) {
            var fd = fs7.openSync(path3, constants.O_WRONLY | constants.O_SYMLINK, mode);
            var threw = true;
            var ret;
            try {
              ret = fs7.fchmodSync(fd, mode);
              threw = false;
            } finally {
              if (threw) {
                try {
                  fs7.closeSync(fd);
                } catch (er) {}
              } else {
                fs7.closeSync(fd);
              }
            }
            return ret;
          };
        }
        function patchLutimes(fs7) {
          if (constants.hasOwnProperty("O_SYMLINK") && fs7.futimes) {
            fs7.lutimes = function(path3, at, mt, cb) {
              fs7.open(path3, constants.O_SYMLINK, function(er, fd) {
                if (er) {
                  if (cb)
                    cb(er);
                  return;
                }
                fs7.futimes(fd, at, mt, function(er2) {
                  fs7.close(fd, function(er22) {
                    if (cb)
                      cb(er2 || er22);
                  });
                });
              });
            };
            fs7.lutimesSync = function(path3, at, mt) {
              var fd = fs7.openSync(path3, constants.O_SYMLINK);
              var ret;
              var threw = true;
              try {
                ret = fs7.futimesSync(fd, at, mt);
                threw = false;
              } finally {
                if (threw) {
                  try {
                    fs7.closeSync(fd);
                  } catch (er) {}
                } else {
                  fs7.closeSync(fd);
                }
              }
              return ret;
            };
          } else if (fs7.futimes) {
            fs7.lutimes = function(_a2, _b2, _c, cb) {
              if (cb)
                process.nextTick(cb);
            };
            fs7.lutimesSync = function() {};
          }
        }
        function chmodFix(orig) {
          if (!orig)
            return orig;
          return function(target, mode, cb) {
            return orig.call(fs6, target, mode, function(er) {
              if (chownErOk(er))
                er = null;
              if (cb)
                cb.apply(this, arguments);
            });
          };
        }
        function chmodFixSync(orig) {
          if (!orig)
            return orig;
          return function(target, mode) {
            try {
              return orig.call(fs6, target, mode);
            } catch (er) {
              if (!chownErOk(er))
                throw er;
            }
          };
        }
        function chownFix(orig) {
          if (!orig)
            return orig;
          return function(target, uid, gid, cb) {
            return orig.call(fs6, target, uid, gid, function(er) {
              if (chownErOk(er))
                er = null;
              if (cb)
                cb.apply(this, arguments);
            });
          };
        }
        function chownFixSync(orig) {
          if (!orig)
            return orig;
          return function(target, uid, gid) {
            try {
              return orig.call(fs6, target, uid, gid);
            } catch (er) {
              if (!chownErOk(er))
                throw er;
            }
          };
        }
        function statFix(orig) {
          if (!orig)
            return orig;
          return function(target, options, cb) {
            if (typeof options === "function") {
              cb = options;
              options = null;
            }
            function callback(er, stats) {
              if (stats) {
                if (stats.uid < 0)
                  stats.uid += 4294967296;
                if (stats.gid < 0)
                  stats.gid += 4294967296;
              }
              if (cb)
                cb.apply(this, arguments);
            }
            return options ? orig.call(fs6, target, options, callback) : orig.call(fs6, target, callback);
          };
        }
        function statFixSync(orig) {
          if (!orig)
            return orig;
          return function(target, options) {
            var stats = options ? orig.call(fs6, target, options) : orig.call(fs6, target);
            if (stats) {
              if (stats.uid < 0)
                stats.uid += 4294967296;
              if (stats.gid < 0)
                stats.gid += 4294967296;
            }
            return stats;
          };
        }
        function chownErOk(er) {
          if (!er)
            return true;
          if (er.code === "ENOSYS")
            return true;
          var nonroot = !process.getuid || process.getuid() !== 0;
          if (nonroot) {
            if (er.code === "EINVAL" || er.code === "EPERM")
              return true;
          }
          return false;
        }
      }
    }
  });
  var require_legacy_streams = __commonJS2({
    "node_modules/graceful-fs/legacy-streams.js"(exports2, module2) {
      var Stream = __require("stream").Stream;
      module2.exports = legacy;
      function legacy(fs6) {
        return {
          ReadStream,
          WriteStream
        };
        function ReadStream(path3, options) {
          if (!(this instanceof ReadStream))
            return new ReadStream(path3, options);
          Stream.call(this);
          var self2 = this;
          this.path = path3;
          this.fd = null;
          this.readable = true;
          this.paused = false;
          this.flags = "r";
          this.mode = 438;
          this.bufferSize = 64 * 1024;
          options = options || {};
          var keys = Object.keys(options);
          for (var index = 0, length = keys.length;index < length; index++) {
            var key = keys[index];
            this[key] = options[key];
          }
          if (this.encoding)
            this.setEncoding(this.encoding);
          if (this.start !== undefined) {
            if (typeof this.start !== "number") {
              throw TypeError("start must be a Number");
            }
            if (this.end === undefined) {
              this.end = Infinity;
            } else if (typeof this.end !== "number") {
              throw TypeError("end must be a Number");
            }
            if (this.start > this.end) {
              throw new Error("start must be <= end");
            }
            this.pos = this.start;
          }
          if (this.fd !== null) {
            process.nextTick(function() {
              self2._read();
            });
            return;
          }
          fs6.open(this.path, this.flags, this.mode, function(err, fd) {
            if (err) {
              self2.emit("error", err);
              self2.readable = false;
              return;
            }
            self2.fd = fd;
            self2.emit("open", fd);
            self2._read();
          });
        }
        function WriteStream(path3, options) {
          if (!(this instanceof WriteStream))
            return new WriteStream(path3, options);
          Stream.call(this);
          this.path = path3;
          this.fd = null;
          this.writable = true;
          this.flags = "w";
          this.encoding = "binary";
          this.mode = 438;
          this.bytesWritten = 0;
          options = options || {};
          var keys = Object.keys(options);
          for (var index = 0, length = keys.length;index < length; index++) {
            var key = keys[index];
            this[key] = options[key];
          }
          if (this.start !== undefined) {
            if (typeof this.start !== "number") {
              throw TypeError("start must be a Number");
            }
            if (this.start < 0) {
              throw new Error("start must be >= zero");
            }
            this.pos = this.start;
          }
          this.busy = false;
          this._queue = [];
          if (this.fd === null) {
            this._open = fs6.open;
            this._queue.push([this._open, this.path, this.flags, this.mode, undefined]);
            this.flush();
          }
        }
      }
    }
  });
  var require_clone = __commonJS2({
    "node_modules/graceful-fs/clone.js"(exports2, module2) {
      module2.exports = clone;
      var getPrototypeOf = Object.getPrototypeOf || function(obj) {
        return obj.__proto__;
      };
      function clone(obj) {
        if (obj === null || typeof obj !== "object")
          return obj;
        if (obj instanceof Object)
          var copy = { __proto__: getPrototypeOf(obj) };
        else
          var copy = /* @__PURE__ */ Object.create(null);
        Object.getOwnPropertyNames(obj).forEach(function(key) {
          Object.defineProperty(copy, key, Object.getOwnPropertyDescriptor(obj, key));
        });
        return copy;
      }
    }
  });
  var require_graceful_fs = __commonJS2({
    "node_modules/graceful-fs/graceful-fs.js"(exports2, module2) {
      var fs6 = __require("fs");
      var polyfills = require_polyfills();
      var legacy = require_legacy_streams();
      var clone = require_clone();
      var util = __require("util");
      var gracefulQueue;
      var previousSymbol;
      if (typeof Symbol === "function" && typeof Symbol.for === "function") {
        gracefulQueue = Symbol.for("graceful-fs.queue");
        previousSymbol = Symbol.for("graceful-fs.previous");
      } else {
        gracefulQueue = "___graceful-fs.queue";
        previousSymbol = "___graceful-fs.previous";
      }
      function noop2() {}
      function publishQueue(context, queue2) {
        Object.defineProperty(context, gracefulQueue, {
          get: function() {
            return queue2;
          }
        });
      }
      var debug = noop2;
      if (util.debuglog)
        debug = util.debuglog("gfs4");
      else if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || ""))
        debug = function() {
          var m2 = util.format.apply(util, arguments);
          m2 = "GFS4: " + m2.split(/\n/).join(`
GFS4: `);
          console.error(m2);
        };
      if (!fs6[gracefulQueue]) {
        queue = global[gracefulQueue] || [];
        publishQueue(fs6, queue);
        fs6.close = function(fs$close) {
          function close(fd, cb) {
            return fs$close.call(fs6, fd, function(err) {
              if (!err) {
                resetQueue();
              }
              if (typeof cb === "function")
                cb.apply(this, arguments);
            });
          }
          Object.defineProperty(close, previousSymbol, {
            value: fs$close
          });
          return close;
        }(fs6.close);
        fs6.closeSync = function(fs$closeSync) {
          function closeSync(fd) {
            fs$closeSync.apply(fs6, arguments);
            resetQueue();
          }
          Object.defineProperty(closeSync, previousSymbol, {
            value: fs$closeSync
          });
          return closeSync;
        }(fs6.closeSync);
        if (/\bgfs4\b/i.test(process.env.NODE_DEBUG || "")) {
          process.on("exit", function() {
            debug(fs6[gracefulQueue]);
            __require("assert").equal(fs6[gracefulQueue].length, 0);
          });
        }
      }
      var queue;
      if (!global[gracefulQueue]) {
        publishQueue(global, fs6[gracefulQueue]);
      }
      module2.exports = patch(clone(fs6));
      if (process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH && !fs6.__patched) {
        module2.exports = patch(fs6);
        fs6.__patched = true;
      }
      function patch(fs7) {
        polyfills(fs7);
        fs7.gracefulify = patch;
        fs7.createReadStream = createReadStream;
        fs7.createWriteStream = createWriteStream;
        var fs$readFile = fs7.readFile;
        fs7.readFile = readFile;
        function readFile(path3, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$readFile(path3, options, cb);
          function go$readFile(path4, options2, cb2, startTime) {
            return fs$readFile(path4, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$readFile, [path4, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$writeFile = fs7.writeFile;
        fs7.writeFile = writeFile;
        function writeFile(path3, data, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$writeFile(path3, data, options, cb);
          function go$writeFile(path4, data2, options2, cb2, startTime) {
            return fs$writeFile(path4, data2, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$writeFile, [path4, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$appendFile = fs7.appendFile;
        if (fs$appendFile)
          fs7.appendFile = appendFile;
        function appendFile(path3, data, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          return go$appendFile(path3, data, options, cb);
          function go$appendFile(path4, data2, options2, cb2, startTime) {
            return fs$appendFile(path4, data2, options2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$appendFile, [path4, data2, options2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$copyFile = fs7.copyFile;
        if (fs$copyFile)
          fs7.copyFile = copyFile;
        function copyFile(src, dest, flags, cb) {
          if (typeof flags === "function") {
            cb = flags;
            flags = 0;
          }
          return go$copyFile(src, dest, flags, cb);
          function go$copyFile(src2, dest2, flags2, cb2, startTime) {
            return fs$copyFile(src2, dest2, flags2, function(err) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$copyFile, [src2, dest2, flags2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        var fs$readdir = fs7.readdir;
        fs7.readdir = readdir;
        var noReaddirOptionVersions = /^v[0-5]\./;
        function readdir(path3, options, cb) {
          if (typeof options === "function")
            cb = options, options = null;
          var go$readdir = noReaddirOptionVersions.test(process.version) ? function go$readdir2(path4, options2, cb2, startTime) {
            return fs$readdir(path4, fs$readdirCallback(path4, options2, cb2, startTime));
          } : function go$readdir2(path4, options2, cb2, startTime) {
            return fs$readdir(path4, options2, fs$readdirCallback(path4, options2, cb2, startTime));
          };
          return go$readdir(path3, options, cb);
          function fs$readdirCallback(path4, options2, cb2, startTime) {
            return function(err, files) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([
                  go$readdir,
                  [path4, options2, cb2],
                  err,
                  startTime || Date.now(),
                  Date.now()
                ]);
              else {
                if (files && files.sort)
                  files.sort();
                if (typeof cb2 === "function")
                  cb2.call(this, err, files);
              }
            };
          }
        }
        if (process.version.substr(0, 4) === "v0.8") {
          var legStreams = legacy(fs7);
          ReadStream = legStreams.ReadStream;
          WriteStream = legStreams.WriteStream;
        }
        var fs$ReadStream = fs7.ReadStream;
        if (fs$ReadStream) {
          ReadStream.prototype = Object.create(fs$ReadStream.prototype);
          ReadStream.prototype.open = ReadStream$open;
        }
        var fs$WriteStream = fs7.WriteStream;
        if (fs$WriteStream) {
          WriteStream.prototype = Object.create(fs$WriteStream.prototype);
          WriteStream.prototype.open = WriteStream$open;
        }
        Object.defineProperty(fs7, "ReadStream", {
          get: function() {
            return ReadStream;
          },
          set: function(val) {
            ReadStream = val;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(fs7, "WriteStream", {
          get: function() {
            return WriteStream;
          },
          set: function(val) {
            WriteStream = val;
          },
          enumerable: true,
          configurable: true
        });
        var FileReadStream = ReadStream;
        Object.defineProperty(fs7, "FileReadStream", {
          get: function() {
            return FileReadStream;
          },
          set: function(val) {
            FileReadStream = val;
          },
          enumerable: true,
          configurable: true
        });
        var FileWriteStream = WriteStream;
        Object.defineProperty(fs7, "FileWriteStream", {
          get: function() {
            return FileWriteStream;
          },
          set: function(val) {
            FileWriteStream = val;
          },
          enumerable: true,
          configurable: true
        });
        function ReadStream(path3, options) {
          if (this instanceof ReadStream)
            return fs$ReadStream.apply(this, arguments), this;
          else
            return ReadStream.apply(Object.create(ReadStream.prototype), arguments);
        }
        function ReadStream$open() {
          var that = this;
          open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
              if (that.autoClose)
                that.destroy();
              that.emit("error", err);
            } else {
              that.fd = fd;
              that.emit("open", fd);
              that.read();
            }
          });
        }
        function WriteStream(path3, options) {
          if (this instanceof WriteStream)
            return fs$WriteStream.apply(this, arguments), this;
          else
            return WriteStream.apply(Object.create(WriteStream.prototype), arguments);
        }
        function WriteStream$open() {
          var that = this;
          open(that.path, that.flags, that.mode, function(err, fd) {
            if (err) {
              that.destroy();
              that.emit("error", err);
            } else {
              that.fd = fd;
              that.emit("open", fd);
            }
          });
        }
        function createReadStream(path3, options) {
          return new fs7.ReadStream(path3, options);
        }
        function createWriteStream(path3, options) {
          return new fs7.WriteStream(path3, options);
        }
        var fs$open = fs7.open;
        fs7.open = open;
        function open(path3, flags, mode, cb) {
          if (typeof mode === "function")
            cb = mode, mode = null;
          return go$open(path3, flags, mode, cb);
          function go$open(path4, flags2, mode2, cb2, startTime) {
            return fs$open(path4, flags2, mode2, function(err, fd) {
              if (err && (err.code === "EMFILE" || err.code === "ENFILE"))
                enqueue([go$open, [path4, flags2, mode2, cb2], err, startTime || Date.now(), Date.now()]);
              else {
                if (typeof cb2 === "function")
                  cb2.apply(this, arguments);
              }
            });
          }
        }
        return fs7;
      }
      function enqueue(elem) {
        debug("ENQUEUE", elem[0].name, elem[1]);
        fs6[gracefulQueue].push(elem);
        retry();
      }
      var retryTimer;
      function resetQueue() {
        var now = Date.now();
        for (var i = 0;i < fs6[gracefulQueue].length; ++i) {
          if (fs6[gracefulQueue][i].length > 2) {
            fs6[gracefulQueue][i][3] = now;
            fs6[gracefulQueue][i][4] = now;
          }
        }
        retry();
      }
      function retry() {
        clearTimeout(retryTimer);
        retryTimer = undefined;
        if (fs6[gracefulQueue].length === 0)
          return;
        var elem = fs6[gracefulQueue].shift();
        var fn = elem[0];
        var args = elem[1];
        var err = elem[2];
        var startTime = elem[3];
        var lastTime = elem[4];
        if (startTime === undefined) {
          debug("RETRY", fn.name, args);
          fn.apply(null, args);
        } else if (Date.now() - startTime >= 60000) {
          debug("TIMEOUT", fn.name, args);
          var cb = args.pop();
          if (typeof cb === "function")
            cb.call(null, err);
        } else {
          var sinceAttempt = Date.now() - lastTime;
          var sinceStart = Math.max(lastTime - startTime, 1);
          var desiredDelay = Math.min(sinceStart * 1.2, 100);
          if (sinceAttempt >= desiredDelay) {
            debug("RETRY", fn.name, args);
            fn.apply(null, args.concat([startTime]));
          } else {
            fs6[gracefulQueue].push(elem);
          }
        }
        if (retryTimer === undefined) {
          retryTimer = setTimeout(retry, 0);
        }
      }
    }
  });
  var require_fs5 = __commonJS2({
    "node_modules/fs-extra/lib/fs/index.js"(exports2) {
      var u2 = require_universalify().fromCallback;
      var fs6 = require_graceful_fs();
      var api = [
        "access",
        "appendFile",
        "chmod",
        "chown",
        "close",
        "copyFile",
        "fchmod",
        "fchown",
        "fdatasync",
        "fstat",
        "fsync",
        "ftruncate",
        "futimes",
        "lchmod",
        "lchown",
        "link",
        "lstat",
        "mkdir",
        "mkdtemp",
        "open",
        "opendir",
        "readdir",
        "readFile",
        "readlink",
        "realpath",
        "rename",
        "rm",
        "rmdir",
        "stat",
        "symlink",
        "truncate",
        "unlink",
        "utimes",
        "writeFile"
      ].filter((key) => {
        return typeof fs6[key] === "function";
      });
      Object.assign(exports2, fs6);
      api.forEach((method) => {
        exports2[method] = u2(fs6[method]);
      });
      exports2.exists = function(filename, callback) {
        if (typeof callback === "function") {
          return fs6.exists(filename, callback);
        }
        return new Promise((resolve) => {
          return fs6.exists(filename, resolve);
        });
      };
      exports2.read = function(fd, buffer, offset, length, position, callback) {
        if (typeof callback === "function") {
          return fs6.read(fd, buffer, offset, length, position, callback);
        }
        return new Promise((resolve, reject) => {
          fs6.read(fd, buffer, offset, length, position, (err, bytesRead, buffer2) => {
            if (err)
              return reject(err);
            resolve({ bytesRead, buffer: buffer2 });
          });
        });
      };
      exports2.write = function(fd, buffer, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs6.write(fd, buffer, ...args);
        }
        return new Promise((resolve, reject) => {
          fs6.write(fd, buffer, ...args, (err, bytesWritten, buffer2) => {
            if (err)
              return reject(err);
            resolve({ bytesWritten, buffer: buffer2 });
          });
        });
      };
      exports2.readv = function(fd, buffers, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs6.readv(fd, buffers, ...args);
        }
        return new Promise((resolve, reject) => {
          fs6.readv(fd, buffers, ...args, (err, bytesRead, buffers2) => {
            if (err)
              return reject(err);
            resolve({ bytesRead, buffers: buffers2 });
          });
        });
      };
      exports2.writev = function(fd, buffers, ...args) {
        if (typeof args[args.length - 1] === "function") {
          return fs6.writev(fd, buffers, ...args);
        }
        return new Promise((resolve, reject) => {
          fs6.writev(fd, buffers, ...args, (err, bytesWritten, buffers2) => {
            if (err)
              return reject(err);
            resolve({ bytesWritten, buffers: buffers2 });
          });
        });
      };
      if (typeof fs6.realpath.native === "function") {
        exports2.realpath.native = u2(fs6.realpath.native);
      } else {
        process.emitWarning("fs.realpath.native is not a function. Is fs being monkey-patched?", "Warning", "fs-extra-WARN0003");
      }
    }
  });
  var require_utils5 = __commonJS2({
    "node_modules/fs-extra/lib/mkdirs/utils.js"(exports2, module2) {
      var path3 = __require("path");
      module2.exports.checkPath = function checkPath(pth) {
        if (process.platform === "win32") {
          const pathHasInvalidWinCharacters = /[<>:"|?*]/.test(pth.replace(path3.parse(pth).root, ""));
          if (pathHasInvalidWinCharacters) {
            const error = new Error(`Path contains invalid characters: ${pth}`);
            error.code = "EINVAL";
            throw error;
          }
        }
      };
    }
  });
  var require_make_dir = __commonJS2({
    "node_modules/fs-extra/lib/mkdirs/make-dir.js"(exports2, module2) {
      var fs6 = require_fs5();
      var { checkPath } = require_utils5();
      var getMode = (options) => {
        const defaults = { mode: 511 };
        if (typeof options === "number")
          return options;
        return __spreadValues(__spreadValues({}, defaults), options).mode;
      };
      module2.exports.makeDir = (dir, options) => __async(exports2, null, function* () {
        checkPath(dir);
        return fs6.mkdir(dir, {
          mode: getMode(options),
          recursive: true
        });
      });
      module2.exports.makeDirSync = (dir, options) => {
        checkPath(dir);
        return fs6.mkdirSync(dir, {
          mode: getMode(options),
          recursive: true
        });
      };
    }
  });
  var require_mkdirs = __commonJS2({
    "node_modules/fs-extra/lib/mkdirs/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var { makeDir: _makeDir, makeDirSync } = require_make_dir();
      var makeDir = u2(_makeDir);
      module2.exports = {
        mkdirs: makeDir,
        mkdirsSync: makeDirSync,
        mkdirp: makeDir,
        mkdirpSync: makeDirSync,
        ensureDir: makeDir,
        ensureDirSync: makeDirSync
      };
    }
  });
  var require_path_exists = __commonJS2({
    "node_modules/fs-extra/lib/path-exists/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var fs6 = require_fs5();
      function pathExists(path3) {
        return fs6.access(path3).then(() => true).catch(() => false);
      }
      module2.exports = {
        pathExists: u2(pathExists),
        pathExistsSync: fs6.existsSync
      };
    }
  });
  var require_utimes = __commonJS2({
    "node_modules/fs-extra/lib/util/utimes.js"(exports2, module2) {
      var fs6 = require_fs5();
      var u2 = require_universalify().fromPromise;
      function utimesMillis(path3, atime, mtime) {
        return __async(this, null, function* () {
          const fd = yield fs6.open(path3, "r+");
          let closeErr = null;
          try {
            yield fs6.futimes(fd, atime, mtime);
          } finally {
            try {
              yield fs6.close(fd);
            } catch (e) {
              closeErr = e;
            }
          }
          if (closeErr) {
            throw closeErr;
          }
        });
      }
      function utimesMillisSync(path3, atime, mtime) {
        const fd = fs6.openSync(path3, "r+");
        fs6.futimesSync(fd, atime, mtime);
        return fs6.closeSync(fd);
      }
      module2.exports = {
        utimesMillis: u2(utimesMillis),
        utimesMillisSync
      };
    }
  });
  var require_stat = __commonJS2({
    "node_modules/fs-extra/lib/util/stat.js"(exports2, module2) {
      var fs6 = require_fs5();
      var path3 = __require("path");
      var u2 = require_universalify().fromPromise;
      function getStats(src, dest, opts) {
        const statFunc = opts.dereference ? (file) => fs6.stat(file, { bigint: true }) : (file) => fs6.lstat(file, { bigint: true });
        return Promise.all([
          statFunc(src),
          statFunc(dest).catch((err) => {
            if (err.code === "ENOENT")
              return null;
            throw err;
          })
        ]).then(([srcStat, destStat]) => ({ srcStat, destStat }));
      }
      function getStatsSync(src, dest, opts) {
        let destStat;
        const statFunc = opts.dereference ? (file) => fs6.statSync(file, { bigint: true }) : (file) => fs6.lstatSync(file, { bigint: true });
        const srcStat = statFunc(src);
        try {
          destStat = statFunc(dest);
        } catch (err) {
          if (err.code === "ENOENT")
            return { srcStat, destStat: null };
          throw err;
        }
        return { srcStat, destStat };
      }
      function checkPaths(src, dest, funcName, opts) {
        return __async(this, null, function* () {
          const { srcStat, destStat } = yield getStats(src, dest, opts);
          if (destStat) {
            if (areIdentical(srcStat, destStat)) {
              const srcBaseName = path3.basename(src);
              const destBaseName = path3.basename(dest);
              if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
                return { srcStat, destStat, isChangingCase: true };
              }
              throw new Error("Source and destination must not be the same.");
            }
            if (srcStat.isDirectory() && !destStat.isDirectory()) {
              throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
            }
            if (!srcStat.isDirectory() && destStat.isDirectory()) {
              throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
            }
          }
          if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
            throw new Error(errMsg(src, dest, funcName));
          }
          return { srcStat, destStat };
        });
      }
      function checkPathsSync(src, dest, funcName, opts) {
        const { srcStat, destStat } = getStatsSync(src, dest, opts);
        if (destStat) {
          if (areIdentical(srcStat, destStat)) {
            const srcBaseName = path3.basename(src);
            const destBaseName = path3.basename(dest);
            if (funcName === "move" && srcBaseName !== destBaseName && srcBaseName.toLowerCase() === destBaseName.toLowerCase()) {
              return { srcStat, destStat, isChangingCase: true };
            }
            throw new Error("Source and destination must not be the same.");
          }
          if (srcStat.isDirectory() && !destStat.isDirectory()) {
            throw new Error(`Cannot overwrite non-directory '${dest}' with directory '${src}'.`);
          }
          if (!srcStat.isDirectory() && destStat.isDirectory()) {
            throw new Error(`Cannot overwrite directory '${dest}' with non-directory '${src}'.`);
          }
        }
        if (srcStat.isDirectory() && isSrcSubdir(src, dest)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return { srcStat, destStat };
      }
      function checkParentPaths(src, srcStat, dest, funcName) {
        return __async(this, null, function* () {
          const srcParent = path3.resolve(path3.dirname(src));
          const destParent = path3.resolve(path3.dirname(dest));
          if (destParent === srcParent || destParent === path3.parse(destParent).root)
            return;
          let destStat;
          try {
            destStat = yield fs6.stat(destParent, { bigint: true });
          } catch (err) {
            if (err.code === "ENOENT")
              return;
            throw err;
          }
          if (areIdentical(srcStat, destStat)) {
            throw new Error(errMsg(src, dest, funcName));
          }
          return checkParentPaths(src, srcStat, destParent, funcName);
        });
      }
      function checkParentPathsSync(src, srcStat, dest, funcName) {
        const srcParent = path3.resolve(path3.dirname(src));
        const destParent = path3.resolve(path3.dirname(dest));
        if (destParent === srcParent || destParent === path3.parse(destParent).root)
          return;
        let destStat;
        try {
          destStat = fs6.statSync(destParent, { bigint: true });
        } catch (err) {
          if (err.code === "ENOENT")
            return;
          throw err;
        }
        if (areIdentical(srcStat, destStat)) {
          throw new Error(errMsg(src, dest, funcName));
        }
        return checkParentPathsSync(src, srcStat, destParent, funcName);
      }
      function areIdentical(srcStat, destStat) {
        return destStat.ino && destStat.dev && destStat.ino === srcStat.ino && destStat.dev === srcStat.dev;
      }
      function isSrcSubdir(src, dest) {
        const srcArr = path3.resolve(src).split(path3.sep).filter((i) => i);
        const destArr = path3.resolve(dest).split(path3.sep).filter((i) => i);
        return srcArr.every((cur, i) => destArr[i] === cur);
      }
      function errMsg(src, dest, funcName) {
        return `Cannot ${funcName} '${src}' to a subdirectory of itself, '${dest}'.`;
      }
      module2.exports = {
        checkPaths: u2(checkPaths),
        checkPathsSync,
        checkParentPaths: u2(checkParentPaths),
        checkParentPathsSync,
        isSrcSubdir,
        areIdentical
      };
    }
  });
  var require_copy = __commonJS2({
    "node_modules/fs-extra/lib/copy/copy.js"(exports2, module2) {
      var fs6 = require_fs5();
      var path3 = __require("path");
      var { mkdirs } = require_mkdirs();
      var { pathExists } = require_path_exists();
      var { utimesMillis } = require_utimes();
      var stat = require_stat();
      function copy(_0, _1) {
        return __async(this, arguments, function* (src, dest, opts = {}) {
          if (typeof opts === "function") {
            opts = { filter: opts };
          }
          opts.clobber = "clobber" in opts ? !!opts.clobber : true;
          opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
          if (opts.preserveTimestamps && process.arch === "ia32") {
            process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0001");
          }
          const { srcStat, destStat } = yield stat.checkPaths(src, dest, "copy", opts);
          yield stat.checkParentPaths(src, srcStat, dest, "copy");
          const include = yield runFilter(src, dest, opts);
          if (!include)
            return;
          const destParent = path3.dirname(dest);
          const dirExists = yield pathExists(destParent);
          if (!dirExists) {
            yield mkdirs(destParent);
          }
          yield getStatsAndPerformCopy(destStat, src, dest, opts);
        });
      }
      function runFilter(src, dest, opts) {
        return __async(this, null, function* () {
          if (!opts.filter)
            return true;
          return opts.filter(src, dest);
        });
      }
      function getStatsAndPerformCopy(destStat, src, dest, opts) {
        return __async(this, null, function* () {
          const statFn = opts.dereference ? fs6.stat : fs6.lstat;
          const srcStat = yield statFn(src);
          if (srcStat.isDirectory())
            return onDir(srcStat, destStat, src, dest, opts);
          if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
            return onFile(srcStat, destStat, src, dest, opts);
          if (srcStat.isSymbolicLink())
            return onLink(destStat, src, dest, opts);
          if (srcStat.isSocket())
            throw new Error(`Cannot copy a socket file: ${src}`);
          if (srcStat.isFIFO())
            throw new Error(`Cannot copy a FIFO pipe: ${src}`);
          throw new Error(`Unknown file: ${src}`);
        });
      }
      function onFile(srcStat, destStat, src, dest, opts) {
        return __async(this, null, function* () {
          if (!destStat)
            return copyFile(srcStat, src, dest, opts);
          if (opts.overwrite) {
            yield fs6.unlink(dest);
            return copyFile(srcStat, src, dest, opts);
          }
          if (opts.errorOnExist) {
            throw new Error(`'${dest}' already exists`);
          }
        });
      }
      function copyFile(srcStat, src, dest, opts) {
        return __async(this, null, function* () {
          yield fs6.copyFile(src, dest);
          if (opts.preserveTimestamps) {
            if (fileIsNotWritable(srcStat.mode)) {
              yield makeFileWritable(dest, srcStat.mode);
            }
            const updatedSrcStat = yield fs6.stat(src);
            yield utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
          }
          return fs6.chmod(dest, srcStat.mode);
        });
      }
      function fileIsNotWritable(srcMode) {
        return (srcMode & 128) === 0;
      }
      function makeFileWritable(dest, srcMode) {
        return fs6.chmod(dest, srcMode | 128);
      }
      function onDir(srcStat, destStat, src, dest, opts) {
        return __async(this, null, function* () {
          if (!destStat) {
            yield fs6.mkdir(dest);
          }
          const items = yield fs6.readdir(src);
          yield Promise.all(items.map((item) => __async(this, null, function* () {
            const srcItem = path3.join(src, item);
            const destItem = path3.join(dest, item);
            const include = yield runFilter(srcItem, destItem, opts);
            if (!include)
              return;
            const { destStat: destStat2 } = yield stat.checkPaths(srcItem, destItem, "copy", opts);
            return getStatsAndPerformCopy(destStat2, srcItem, destItem, opts);
          })));
          if (!destStat) {
            yield fs6.chmod(dest, srcStat.mode);
          }
        });
      }
      function onLink(destStat, src, dest, opts) {
        return __async(this, null, function* () {
          let resolvedSrc = yield fs6.readlink(src);
          if (opts.dereference) {
            resolvedSrc = path3.resolve(process.cwd(), resolvedSrc);
          }
          if (!destStat) {
            return fs6.symlink(resolvedSrc, dest);
          }
          let resolvedDest = null;
          try {
            resolvedDest = yield fs6.readlink(dest);
          } catch (e) {
            if (e.code === "EINVAL" || e.code === "UNKNOWN")
              return fs6.symlink(resolvedSrc, dest);
            throw e;
          }
          if (opts.dereference) {
            resolvedDest = path3.resolve(process.cwd(), resolvedDest);
          }
          if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
            throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
          }
          if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
            throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
          }
          yield fs6.unlink(dest);
          return fs6.symlink(resolvedSrc, dest);
        });
      }
      module2.exports = copy;
    }
  });
  var require_copy_sync = __commonJS2({
    "node_modules/fs-extra/lib/copy/copy-sync.js"(exports2, module2) {
      var fs6 = require_graceful_fs();
      var path3 = __require("path");
      var mkdirsSync = require_mkdirs().mkdirsSync;
      var utimesMillisSync = require_utimes().utimesMillisSync;
      var stat = require_stat();
      function copySync(src, dest, opts) {
        if (typeof opts === "function") {
          opts = { filter: opts };
        }
        opts = opts || {};
        opts.clobber = "clobber" in opts ? !!opts.clobber : true;
        opts.overwrite = "overwrite" in opts ? !!opts.overwrite : opts.clobber;
        if (opts.preserveTimestamps && process.arch === "ia32") {
          process.emitWarning(`Using the preserveTimestamps option in 32-bit node is not recommended;

	see https://github.com/jprichardson/node-fs-extra/issues/269`, "Warning", "fs-extra-WARN0002");
        }
        const { srcStat, destStat } = stat.checkPathsSync(src, dest, "copy", opts);
        stat.checkParentPathsSync(src, srcStat, dest, "copy");
        if (opts.filter && !opts.filter(src, dest))
          return;
        const destParent = path3.dirname(dest);
        if (!fs6.existsSync(destParent))
          mkdirsSync(destParent);
        return getStats(destStat, src, dest, opts);
      }
      function getStats(destStat, src, dest, opts) {
        const statSync = opts.dereference ? fs6.statSync : fs6.lstatSync;
        const srcStat = statSync(src);
        if (srcStat.isDirectory())
          return onDir(srcStat, destStat, src, dest, opts);
        else if (srcStat.isFile() || srcStat.isCharacterDevice() || srcStat.isBlockDevice())
          return onFile(srcStat, destStat, src, dest, opts);
        else if (srcStat.isSymbolicLink())
          return onLink(destStat, src, dest, opts);
        else if (srcStat.isSocket())
          throw new Error(`Cannot copy a socket file: ${src}`);
        else if (srcStat.isFIFO())
          throw new Error(`Cannot copy a FIFO pipe: ${src}`);
        throw new Error(`Unknown file: ${src}`);
      }
      function onFile(srcStat, destStat, src, dest, opts) {
        if (!destStat)
          return copyFile(srcStat, src, dest, opts);
        return mayCopyFile(srcStat, src, dest, opts);
      }
      function mayCopyFile(srcStat, src, dest, opts) {
        if (opts.overwrite) {
          fs6.unlinkSync(dest);
          return copyFile(srcStat, src, dest, opts);
        } else if (opts.errorOnExist) {
          throw new Error(`'${dest}' already exists`);
        }
      }
      function copyFile(srcStat, src, dest, opts) {
        fs6.copyFileSync(src, dest);
        if (opts.preserveTimestamps)
          handleTimestamps(srcStat.mode, src, dest);
        return setDestMode(dest, srcStat.mode);
      }
      function handleTimestamps(srcMode, src, dest) {
        if (fileIsNotWritable(srcMode))
          makeFileWritable(dest, srcMode);
        return setDestTimestamps(src, dest);
      }
      function fileIsNotWritable(srcMode) {
        return (srcMode & 128) === 0;
      }
      function makeFileWritable(dest, srcMode) {
        return setDestMode(dest, srcMode | 128);
      }
      function setDestMode(dest, srcMode) {
        return fs6.chmodSync(dest, srcMode);
      }
      function setDestTimestamps(src, dest) {
        const updatedSrcStat = fs6.statSync(src);
        return utimesMillisSync(dest, updatedSrcStat.atime, updatedSrcStat.mtime);
      }
      function onDir(srcStat, destStat, src, dest, opts) {
        if (!destStat)
          return mkDirAndCopy(srcStat.mode, src, dest, opts);
        return copyDir(src, dest, opts);
      }
      function mkDirAndCopy(srcMode, src, dest, opts) {
        fs6.mkdirSync(dest);
        copyDir(src, dest, opts);
        return setDestMode(dest, srcMode);
      }
      function copyDir(src, dest, opts) {
        fs6.readdirSync(src).forEach((item) => copyDirItem(item, src, dest, opts));
      }
      function copyDirItem(item, src, dest, opts) {
        const srcItem = path3.join(src, item);
        const destItem = path3.join(dest, item);
        if (opts.filter && !opts.filter(srcItem, destItem))
          return;
        const { destStat } = stat.checkPathsSync(srcItem, destItem, "copy", opts);
        return getStats(destStat, srcItem, destItem, opts);
      }
      function onLink(destStat, src, dest, opts) {
        let resolvedSrc = fs6.readlinkSync(src);
        if (opts.dereference) {
          resolvedSrc = path3.resolve(process.cwd(), resolvedSrc);
        }
        if (!destStat) {
          return fs6.symlinkSync(resolvedSrc, dest);
        } else {
          let resolvedDest;
          try {
            resolvedDest = fs6.readlinkSync(dest);
          } catch (err) {
            if (err.code === "EINVAL" || err.code === "UNKNOWN")
              return fs6.symlinkSync(resolvedSrc, dest);
            throw err;
          }
          if (opts.dereference) {
            resolvedDest = path3.resolve(process.cwd(), resolvedDest);
          }
          if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
            throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`);
          }
          if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
            throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`);
          }
          return copyLink(resolvedSrc, dest);
        }
      }
      function copyLink(resolvedSrc, dest) {
        fs6.unlinkSync(dest);
        return fs6.symlinkSync(resolvedSrc, dest);
      }
      module2.exports = copySync;
    }
  });
  var require_copy2 = __commonJS2({
    "node_modules/fs-extra/lib/copy/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      module2.exports = {
        copy: u2(require_copy()),
        copySync: require_copy_sync()
      };
    }
  });
  var require_remove = __commonJS2({
    "node_modules/fs-extra/lib/remove/index.js"(exports2, module2) {
      var fs6 = require_graceful_fs();
      var u2 = require_universalify().fromCallback;
      function remove(path3, callback) {
        fs6.rm(path3, { recursive: true, force: true }, callback);
      }
      function removeSync(path3) {
        fs6.rmSync(path3, { recursive: true, force: true });
      }
      module2.exports = {
        remove: u2(remove),
        removeSync
      };
    }
  });
  var require_empty = __commonJS2({
    "node_modules/fs-extra/lib/empty/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var fs6 = require_fs5();
      var path3 = __require("path");
      var mkdir = require_mkdirs();
      var remove = require_remove();
      var emptyDir = u2(function emptyDir2(dir) {
        return __async(this, null, function* () {
          let items;
          try {
            items = yield fs6.readdir(dir);
          } catch (e) {
            return mkdir.mkdirs(dir);
          }
          return Promise.all(items.map((item) => remove.remove(path3.join(dir, item))));
        });
      });
      function emptyDirSync(dir) {
        let items;
        try {
          items = fs6.readdirSync(dir);
        } catch (e) {
          return mkdir.mkdirsSync(dir);
        }
        items.forEach((item) => {
          item = path3.join(dir, item);
          remove.removeSync(item);
        });
      }
      module2.exports = {
        emptyDirSync,
        emptydirSync: emptyDirSync,
        emptyDir,
        emptydir: emptyDir
      };
    }
  });
  var require_file = __commonJS2({
    "node_modules/fs-extra/lib/ensure/file.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var path3 = __require("path");
      var fs6 = require_fs5();
      var mkdir = require_mkdirs();
      function createFile(file) {
        return __async(this, null, function* () {
          let stats;
          try {
            stats = yield fs6.stat(file);
          } catch (e) {}
          if (stats && stats.isFile())
            return;
          const dir = path3.dirname(file);
          let dirStats = null;
          try {
            dirStats = yield fs6.stat(dir);
          } catch (err) {
            if (err.code === "ENOENT") {
              yield mkdir.mkdirs(dir);
              yield fs6.writeFile(file, "");
              return;
            } else {
              throw err;
            }
          }
          if (dirStats.isDirectory()) {
            yield fs6.writeFile(file, "");
          } else {
            yield fs6.readdir(dir);
          }
        });
      }
      function createFileSync(file) {
        let stats;
        try {
          stats = fs6.statSync(file);
        } catch (e) {}
        if (stats && stats.isFile())
          return;
        const dir = path3.dirname(file);
        try {
          if (!fs6.statSync(dir).isDirectory()) {
            fs6.readdirSync(dir);
          }
        } catch (err) {
          if (err && err.code === "ENOENT")
            mkdir.mkdirsSync(dir);
          else
            throw err;
        }
        fs6.writeFileSync(file, "");
      }
      module2.exports = {
        createFile: u2(createFile),
        createFileSync
      };
    }
  });
  var require_link = __commonJS2({
    "node_modules/fs-extra/lib/ensure/link.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var path3 = __require("path");
      var fs6 = require_fs5();
      var mkdir = require_mkdirs();
      var { pathExists } = require_path_exists();
      var { areIdentical } = require_stat();
      function createLink(srcpath, dstpath) {
        return __async(this, null, function* () {
          let dstStat;
          try {
            dstStat = yield fs6.lstat(dstpath);
          } catch (e) {}
          let srcStat;
          try {
            srcStat = yield fs6.lstat(srcpath);
          } catch (err) {
            err.message = err.message.replace("lstat", "ensureLink");
            throw err;
          }
          if (dstStat && areIdentical(srcStat, dstStat))
            return;
          const dir = path3.dirname(dstpath);
          const dirExists = yield pathExists(dir);
          if (!dirExists) {
            yield mkdir.mkdirs(dir);
          }
          yield fs6.link(srcpath, dstpath);
        });
      }
      function createLinkSync(srcpath, dstpath) {
        let dstStat;
        try {
          dstStat = fs6.lstatSync(dstpath);
        } catch (e) {}
        try {
          const srcStat = fs6.lstatSync(srcpath);
          if (dstStat && areIdentical(srcStat, dstStat))
            return;
        } catch (err) {
          err.message = err.message.replace("lstat", "ensureLink");
          throw err;
        }
        const dir = path3.dirname(dstpath);
        const dirExists = fs6.existsSync(dir);
        if (dirExists)
          return fs6.linkSync(srcpath, dstpath);
        mkdir.mkdirsSync(dir);
        return fs6.linkSync(srcpath, dstpath);
      }
      module2.exports = {
        createLink: u2(createLink),
        createLinkSync
      };
    }
  });
  var require_symlink_paths = __commonJS2({
    "node_modules/fs-extra/lib/ensure/symlink-paths.js"(exports2, module2) {
      var path3 = __require("path");
      var fs6 = require_fs5();
      var { pathExists } = require_path_exists();
      var u2 = require_universalify().fromPromise;
      function symlinkPaths(srcpath, dstpath) {
        return __async(this, null, function* () {
          if (path3.isAbsolute(srcpath)) {
            try {
              yield fs6.lstat(srcpath);
            } catch (err) {
              err.message = err.message.replace("lstat", "ensureSymlink");
              throw err;
            }
            return {
              toCwd: srcpath,
              toDst: srcpath
            };
          }
          const dstdir = path3.dirname(dstpath);
          const relativeToDst = path3.join(dstdir, srcpath);
          const exists = yield pathExists(relativeToDst);
          if (exists) {
            return {
              toCwd: relativeToDst,
              toDst: srcpath
            };
          }
          try {
            yield fs6.lstat(srcpath);
          } catch (err) {
            err.message = err.message.replace("lstat", "ensureSymlink");
            throw err;
          }
          return {
            toCwd: srcpath,
            toDst: path3.relative(dstdir, srcpath)
          };
        });
      }
      function symlinkPathsSync(srcpath, dstpath) {
        if (path3.isAbsolute(srcpath)) {
          const exists2 = fs6.existsSync(srcpath);
          if (!exists2)
            throw new Error("absolute srcpath does not exist");
          return {
            toCwd: srcpath,
            toDst: srcpath
          };
        }
        const dstdir = path3.dirname(dstpath);
        const relativeToDst = path3.join(dstdir, srcpath);
        const exists = fs6.existsSync(relativeToDst);
        if (exists) {
          return {
            toCwd: relativeToDst,
            toDst: srcpath
          };
        }
        const srcExists = fs6.existsSync(srcpath);
        if (!srcExists)
          throw new Error("relative srcpath does not exist");
        return {
          toCwd: srcpath,
          toDst: path3.relative(dstdir, srcpath)
        };
      }
      module2.exports = {
        symlinkPaths: u2(symlinkPaths),
        symlinkPathsSync
      };
    }
  });
  var require_symlink_type = __commonJS2({
    "node_modules/fs-extra/lib/ensure/symlink-type.js"(exports2, module2) {
      var fs6 = require_fs5();
      var u2 = require_universalify().fromPromise;
      function symlinkType(srcpath, type) {
        return __async(this, null, function* () {
          if (type)
            return type;
          let stats;
          try {
            stats = yield fs6.lstat(srcpath);
          } catch (e) {
            return "file";
          }
          return stats && stats.isDirectory() ? "dir" : "file";
        });
      }
      function symlinkTypeSync(srcpath, type) {
        if (type)
          return type;
        let stats;
        try {
          stats = fs6.lstatSync(srcpath);
        } catch (e) {
          return "file";
        }
        return stats && stats.isDirectory() ? "dir" : "file";
      }
      module2.exports = {
        symlinkType: u2(symlinkType),
        symlinkTypeSync
      };
    }
  });
  var require_symlink = __commonJS2({
    "node_modules/fs-extra/lib/ensure/symlink.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var path3 = __require("path");
      var fs6 = require_fs5();
      var { mkdirs, mkdirsSync } = require_mkdirs();
      var { symlinkPaths, symlinkPathsSync } = require_symlink_paths();
      var { symlinkType, symlinkTypeSync } = require_symlink_type();
      var { pathExists } = require_path_exists();
      var { areIdentical } = require_stat();
      function createSymlink(srcpath, dstpath, type) {
        return __async(this, null, function* () {
          let stats;
          try {
            stats = yield fs6.lstat(dstpath);
          } catch (e) {}
          if (stats && stats.isSymbolicLink()) {
            const [srcStat, dstStat] = yield Promise.all([
              fs6.stat(srcpath),
              fs6.stat(dstpath)
            ]);
            if (areIdentical(srcStat, dstStat))
              return;
          }
          const relative = yield symlinkPaths(srcpath, dstpath);
          srcpath = relative.toDst;
          const toType = yield symlinkType(relative.toCwd, type);
          const dir = path3.dirname(dstpath);
          if (!(yield pathExists(dir))) {
            yield mkdirs(dir);
          }
          return fs6.symlink(srcpath, dstpath, toType);
        });
      }
      function createSymlinkSync(srcpath, dstpath, type) {
        let stats;
        try {
          stats = fs6.lstatSync(dstpath);
        } catch (e) {}
        if (stats && stats.isSymbolicLink()) {
          const srcStat = fs6.statSync(srcpath);
          const dstStat = fs6.statSync(dstpath);
          if (areIdentical(srcStat, dstStat))
            return;
        }
        const relative = symlinkPathsSync(srcpath, dstpath);
        srcpath = relative.toDst;
        type = symlinkTypeSync(relative.toCwd, type);
        const dir = path3.dirname(dstpath);
        const exists = fs6.existsSync(dir);
        if (exists)
          return fs6.symlinkSync(srcpath, dstpath, type);
        mkdirsSync(dir);
        return fs6.symlinkSync(srcpath, dstpath, type);
      }
      module2.exports = {
        createSymlink: u2(createSymlink),
        createSymlinkSync
      };
    }
  });
  var require_ensure = __commonJS2({
    "node_modules/fs-extra/lib/ensure/index.js"(exports2, module2) {
      var { createFile, createFileSync } = require_file();
      var { createLink, createLinkSync } = require_link();
      var { createSymlink, createSymlinkSync } = require_symlink();
      module2.exports = {
        createFile,
        createFileSync,
        ensureFile: createFile,
        ensureFileSync: createFileSync,
        createLink,
        createLinkSync,
        ensureLink: createLink,
        ensureLinkSync: createLinkSync,
        createSymlink,
        createSymlinkSync,
        ensureSymlink: createSymlink,
        ensureSymlinkSync: createSymlinkSync
      };
    }
  });
  var require_utils6 = __commonJS2({
    "node_modules/jsonfile/utils.js"(exports2, module2) {
      function stringify5(obj, { EOL = `
`, finalEOL = true, replacer = null, spaces } = {}) {
        const EOF = finalEOL ? EOL : "";
        const str = JSON.stringify(obj, replacer, spaces);
        return str.replace(/\n/g, EOL) + EOF;
      }
      function stripBom(content) {
        if (Buffer.isBuffer(content))
          content = content.toString("utf8");
        return content.replace(/^\uFEFF/, "");
      }
      module2.exports = { stringify: stringify5, stripBom };
    }
  });
  var require_jsonfile = __commonJS2({
    "node_modules/jsonfile/index.js"(exports2, module2) {
      var _fs2;
      try {
        _fs2 = require_graceful_fs();
      } catch (_) {
        _fs2 = __require("fs");
      }
      var universalify = require_universalify();
      var { stringify: stringify5, stripBom } = require_utils6();
      function _readFile(_0) {
        return __async(this, arguments, function* (file, options = {}) {
          if (typeof options === "string") {
            options = { encoding: options };
          }
          const fs6 = options.fs || _fs2;
          const shouldThrow = "throws" in options ? options.throws : true;
          let data = yield universalify.fromCallback(fs6.readFile)(file, options);
          data = stripBom(data);
          let obj;
          try {
            obj = JSON.parse(data, options ? options.reviver : null);
          } catch (err) {
            if (shouldThrow) {
              err.message = `${file}: ${err.message}`;
              throw err;
            } else {
              return null;
            }
          }
          return obj;
        });
      }
      var readFile = universalify.fromPromise(_readFile);
      function readFileSync(file, options = {}) {
        if (typeof options === "string") {
          options = { encoding: options };
        }
        const fs6 = options.fs || _fs2;
        const shouldThrow = "throws" in options ? options.throws : true;
        try {
          let content = fs6.readFileSync(file, options);
          content = stripBom(content);
          return JSON.parse(content, options.reviver);
        } catch (err) {
          if (shouldThrow) {
            err.message = `${file}: ${err.message}`;
            throw err;
          } else {
            return null;
          }
        }
      }
      function _writeFile(_0, _1) {
        return __async(this, arguments, function* (file, obj, options = {}) {
          const fs6 = options.fs || _fs2;
          const str = stringify5(obj, options);
          yield universalify.fromCallback(fs6.writeFile)(file, str, options);
        });
      }
      var writeFile = universalify.fromPromise(_writeFile);
      function writeFileSync(file, obj, options = {}) {
        const fs6 = options.fs || _fs2;
        const str = stringify5(obj, options);
        return fs6.writeFileSync(file, str, options);
      }
      var jsonfile = {
        readFile,
        readFileSync,
        writeFile,
        writeFileSync
      };
      module2.exports = jsonfile;
    }
  });
  var require_jsonfile2 = __commonJS2({
    "node_modules/fs-extra/lib/json/jsonfile.js"(exports2, module2) {
      var jsonFile = require_jsonfile();
      module2.exports = {
        readJson: jsonFile.readFile,
        readJsonSync: jsonFile.readFileSync,
        writeJson: jsonFile.writeFile,
        writeJsonSync: jsonFile.writeFileSync
      };
    }
  });
  var require_output_file = __commonJS2({
    "node_modules/fs-extra/lib/output-file/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var fs6 = require_fs5();
      var path3 = __require("path");
      var mkdir = require_mkdirs();
      var pathExists = require_path_exists().pathExists;
      function outputFile(file, data, encoding = "utf-8") {
        return __async(this, null, function* () {
          const dir = path3.dirname(file);
          if (!(yield pathExists(dir))) {
            yield mkdir.mkdirs(dir);
          }
          return fs6.writeFile(file, data, encoding);
        });
      }
      function outputFileSync(file, ...args) {
        const dir = path3.dirname(file);
        if (!fs6.existsSync(dir)) {
          mkdir.mkdirsSync(dir);
        }
        fs6.writeFileSync(file, ...args);
      }
      module2.exports = {
        outputFile: u2(outputFile),
        outputFileSync
      };
    }
  });
  var require_output_json = __commonJS2({
    "node_modules/fs-extra/lib/json/output-json.js"(exports2, module2) {
      var { stringify: stringify5 } = require_utils6();
      var { outputFile } = require_output_file();
      function outputJson(_0, _1) {
        return __async(this, arguments, function* (file, data, options = {}) {
          const str = stringify5(data, options);
          yield outputFile(file, str, options);
        });
      }
      module2.exports = outputJson;
    }
  });
  var require_output_json_sync = __commonJS2({
    "node_modules/fs-extra/lib/json/output-json-sync.js"(exports2, module2) {
      var { stringify: stringify5 } = require_utils6();
      var { outputFileSync } = require_output_file();
      function outputJsonSync(file, data, options) {
        const str = stringify5(data, options);
        outputFileSync(file, str, options);
      }
      module2.exports = outputJsonSync;
    }
  });
  var require_json = __commonJS2({
    "node_modules/fs-extra/lib/json/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      var jsonFile = require_jsonfile2();
      jsonFile.outputJson = u2(require_output_json());
      jsonFile.outputJsonSync = require_output_json_sync();
      jsonFile.outputJSON = jsonFile.outputJson;
      jsonFile.outputJSONSync = jsonFile.outputJsonSync;
      jsonFile.writeJSON = jsonFile.writeJson;
      jsonFile.writeJSONSync = jsonFile.writeJsonSync;
      jsonFile.readJSON = jsonFile.readJson;
      jsonFile.readJSONSync = jsonFile.readJsonSync;
      module2.exports = jsonFile;
    }
  });
  var require_move = __commonJS2({
    "node_modules/fs-extra/lib/move/move.js"(exports2, module2) {
      var fs6 = require_fs5();
      var path3 = __require("path");
      var { copy } = require_copy2();
      var { remove } = require_remove();
      var { mkdirp } = require_mkdirs();
      var { pathExists } = require_path_exists();
      var stat = require_stat();
      function move(_0, _1) {
        return __async(this, arguments, function* (src, dest, opts = {}) {
          const overwrite = opts.overwrite || opts.clobber || false;
          const { srcStat, isChangingCase = false } = yield stat.checkPaths(src, dest, "move", opts);
          yield stat.checkParentPaths(src, srcStat, dest, "move");
          const destParent = path3.dirname(dest);
          const parsedParentPath = path3.parse(destParent);
          if (parsedParentPath.root !== destParent) {
            yield mkdirp(destParent);
          }
          return doRename(src, dest, overwrite, isChangingCase);
        });
      }
      function doRename(src, dest, overwrite, isChangingCase) {
        return __async(this, null, function* () {
          if (!isChangingCase) {
            if (overwrite) {
              yield remove(dest);
            } else if (yield pathExists(dest)) {
              throw new Error("dest already exists.");
            }
          }
          try {
            yield fs6.rename(src, dest);
          } catch (err) {
            if (err.code !== "EXDEV") {
              throw err;
            }
            yield moveAcrossDevice(src, dest, overwrite);
          }
        });
      }
      function moveAcrossDevice(src, dest, overwrite) {
        return __async(this, null, function* () {
          const opts = {
            overwrite,
            errorOnExist: true,
            preserveTimestamps: true
          };
          yield copy(src, dest, opts);
          return remove(src);
        });
      }
      module2.exports = move;
    }
  });
  var require_move_sync = __commonJS2({
    "node_modules/fs-extra/lib/move/move-sync.js"(exports2, module2) {
      var fs6 = require_graceful_fs();
      var path3 = __require("path");
      var copySync = require_copy2().copySync;
      var removeSync = require_remove().removeSync;
      var mkdirpSync = require_mkdirs().mkdirpSync;
      var stat = require_stat();
      function moveSync(src, dest, opts) {
        opts = opts || {};
        const overwrite = opts.overwrite || opts.clobber || false;
        const { srcStat, isChangingCase = false } = stat.checkPathsSync(src, dest, "move", opts);
        stat.checkParentPathsSync(src, srcStat, dest, "move");
        if (!isParentRoot(dest))
          mkdirpSync(path3.dirname(dest));
        return doRename(src, dest, overwrite, isChangingCase);
      }
      function isParentRoot(dest) {
        const parent = path3.dirname(dest);
        const parsedPath = path3.parse(parent);
        return parsedPath.root === parent;
      }
      function doRename(src, dest, overwrite, isChangingCase) {
        if (isChangingCase)
          return rename(src, dest, overwrite);
        if (overwrite) {
          removeSync(dest);
          return rename(src, dest, overwrite);
        }
        if (fs6.existsSync(dest))
          throw new Error("dest already exists.");
        return rename(src, dest, overwrite);
      }
      function rename(src, dest, overwrite) {
        try {
          fs6.renameSync(src, dest);
        } catch (err) {
          if (err.code !== "EXDEV")
            throw err;
          return moveAcrossDevice(src, dest, overwrite);
        }
      }
      function moveAcrossDevice(src, dest, overwrite) {
        const opts = {
          overwrite,
          errorOnExist: true,
          preserveTimestamps: true
        };
        copySync(src, dest, opts);
        return removeSync(src);
      }
      module2.exports = moveSync;
    }
  });
  var require_move2 = __commonJS2({
    "node_modules/fs-extra/lib/move/index.js"(exports2, module2) {
      var u2 = require_universalify().fromPromise;
      module2.exports = {
        move: u2(require_move()),
        moveSync: require_move_sync()
      };
    }
  });
  var require_lib = __commonJS2({
    "node_modules/fs-extra/lib/index.js"(exports2, module2) {
      module2.exports = __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, require_fs5()), require_copy2()), require_empty()), require_ensure()), require_json()), require_mkdirs()), require_move2()), require_output_file()), require_path_exists()), require_remove());
    }
  });
  var require_create_require = __commonJS2({
    "node_modules/create-require/create-require.js"(exports2, module2) {
      var nativeModule = __require("module");
      var path3 = __require("path");
      var fs6 = __require("fs");
      function createRequire22(filename) {
        if (!filename) {
          filename = process.cwd();
        }
        if (isDir(filename)) {
          filename = path3.join(filename, "index.js");
        }
        if (nativeModule.createRequire) {
          return nativeModule.createRequire(filename);
        }
        if (nativeModule.createRequireFromPath) {
          return nativeModule.createRequireFromPath(filename);
        }
        return _createRequire2(filename);
      }
      function _createRequire2(filename) {
        const mod = new nativeModule.Module(filename, null);
        mod.filename = filename;
        mod.paths = nativeModule.Module._nodeModulePaths(path3.dirname(filename));
        mod._compile("module.exports = require;", filename);
        return mod.exports;
      }
      function isDir(path4) {
        try {
          const stat = fs6.lstatSync(path4);
          return stat.isDirectory();
        } catch (e) {
          return false;
        }
      }
      module2.exports = createRequire22;
    }
  });
  function f(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  var t;
  var o;
  var n;
  var init_node_fetch_native_1a4a356d = __esm({
    "node_modules/node-fetch-native/dist/shared/node-fetch-native.1a4a356d.mjs"() {
      t = Object.defineProperty;
      o = (e, l2) => t(e, "name", { value: l2, configurable: true });
      n = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
      o(f, "getDefaultExportFromCjs");
    }
  });
  var multipart_parser_exports = {};
  __export(multipart_parser_exports, {
    toFormData: () => Z
  });
  function v(u2) {
    const a2 = u2.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
    if (!a2)
      return;
    const n3 = a2[2] || a2[3] || "";
    let r = n3.slice(n3.lastIndexOf("\\") + 1);
    return r = r.replace(/%22/g, '"'), r = r.replace(/&#(\d{4});/g, (d2, l2) => String.fromCharCode(l2)), r;
  }
  function Z(u2, a2) {
    return __async(this, null, function* () {
      if (!/multipart/i.test(a2))
        throw new TypeError("Failed to fetch");
      const n3 = a2.match(/boundary=(?:"([^"]+)"|([^;]+))/i);
      if (!n3)
        throw new TypeError("no or bad content-type header, no multipart boundary");
      const r = new k(n3[1] || n3[2]);
      let d2, l2, c, p, e, i;
      const A2 = [], H2 = new br, O2 = E((s2) => {
        c += f3.decode(s2, { stream: true });
      }, "onPartData"), y = E((s2) => {
        A2.push(s2);
      }, "appendToFile"), o3 = E(() => {
        const s2 = new On(A2, i, { type: e });
        H2.append(p, s2);
      }, "appendFileToFormData"), L = E(() => {
        H2.append(p, c);
      }, "appendEntryToFormData"), f3 = new TextDecoder("utf-8");
      f3.decode(), r.onPartBegin = function() {
        r.onPartData = O2, r.onPartEnd = L, d2 = "", l2 = "", c = "", p = "", e = "", i = null, A2.length = 0;
      }, r.onHeaderField = function(s2) {
        d2 += f3.decode(s2, { stream: true });
      }, r.onHeaderValue = function(s2) {
        l2 += f3.decode(s2, { stream: true });
      }, r.onHeaderEnd = function() {
        if (l2 += f3.decode(), d2 = d2.toLowerCase(), d2 === "content-disposition") {
          const s2 = l2.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);
          s2 && (p = s2[2] || s2[3] || ""), i = v(l2), i && (r.onPartData = y, r.onPartEnd = o3);
        } else
          d2 === "content-type" && (e = l2);
        l2 = "", d2 = "";
      };
      try {
        for (var iter = __forAwait(u2), more, temp, error;more = !(temp = yield iter.next()).done; more = false) {
          const s2 = temp.value;
          r.write(s2);
        }
      } catch (temp2) {
        error = [temp2];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      return r.end(), H2;
    });
  }
  var import_node_fs3;
  var import_node_path3;
  var import_node_http;
  var import_node_https;
  var import_node_zlib;
  var import_node_stream2;
  var import_node_buffer;
  var import_node_util;
  var import_node_url2;
  var import_node_net;
  var B;
  var E;
  var D;
  var t2;
  var w;
  var R;
  var g;
  var N;
  var x;
  var P;
  var C;
  var I;
  var M;
  var $;
  var m;
  var F;
  var k;
  var init_multipart_parser = __esm({
    "node_modules/node-fetch-native/dist/chunks/multipart-parser.mjs"() {
      import_node_fs3 = __require("fs");
      import_node_path3 = __require("path");
      init_node();
      import_node_http = __require("http");
      import_node_https = __require("https");
      import_node_zlib = __require("zlib");
      import_node_stream2 = __require("stream");
      import_node_buffer = __require("buffer");
      import_node_util = __require("util");
      init_node_fetch_native_1a4a356d();
      import_node_url2 = __require("url");
      import_node_net = __require("net");
      B = Object.defineProperty;
      E = (u2, a2) => B(u2, "name", { value: a2, configurable: true });
      D = 0;
      t2 = { START_BOUNDARY: D++, HEADER_FIELD_START: D++, HEADER_FIELD: D++, HEADER_VALUE_START: D++, HEADER_VALUE: D++, HEADER_VALUE_ALMOST_DONE: D++, HEADERS_ALMOST_DONE: D++, PART_DATA_START: D++, PART_DATA: D++, END: D++ };
      w = 1;
      R = { PART_BOUNDARY: w, LAST_BOUNDARY: w *= 2 };
      g = 10;
      N = 13;
      x = 32;
      P = 45;
      C = 58;
      I = 97;
      M = 122;
      $ = E((u2) => u2 | 32, "lower");
      m = E(() => {}, "noop");
      F = class F2 {
        constructor(a2) {
          this.index = 0, this.flags = 0, this.onHeaderEnd = m, this.onHeaderField = m, this.onHeadersEnd = m, this.onHeaderValue = m, this.onPartBegin = m, this.onPartData = m, this.onPartEnd = m, this.boundaryChars = {}, a2 = `\r
--` + a2;
          const n3 = new Uint8Array(a2.length);
          for (let r = 0;r < a2.length; r++)
            n3[r] = a2.charCodeAt(r), this.boundaryChars[n3[r]] = true;
          this.boundary = n3, this.lookbehind = new Uint8Array(this.boundary.length + 8), this.state = t2.START_BOUNDARY;
        }
        write(a2) {
          let n3 = 0;
          const r = a2.length;
          let d2 = this.index, { lookbehind: l2, boundary: c, boundaryChars: p, index: e, state: i, flags: A2 } = this;
          const H2 = this.boundary.length, O2 = H2 - 1, y = a2.length;
          let o3, L;
          const f3 = E((h) => {
            this[h + "Mark"] = n3;
          }, "mark"), s2 = E((h) => {
            delete this[h + "Mark"];
          }, "clear"), T2 = E((h, S, _, U) => {
            (S === undefined || S !== _) && this[h](U && U.subarray(S, _));
          }, "callback"), b = E((h, S) => {
            const _ = h + "Mark";
            _ in this && (S ? (T2(h, this[_], n3, a2), delete this[_]) : (T2(h, this[_], a2.length, a2), this[_] = 0));
          }, "dataCallback");
          for (n3 = 0;n3 < r; n3++)
            switch (o3 = a2[n3], i) {
              case t2.START_BOUNDARY:
                if (e === c.length - 2) {
                  if (o3 === P)
                    A2 |= R.LAST_BOUNDARY;
                  else if (o3 !== N)
                    return;
                  e++;
                  break;
                } else if (e - 1 === c.length - 2) {
                  if (A2 & R.LAST_BOUNDARY && o3 === P)
                    i = t2.END, A2 = 0;
                  else if (!(A2 & R.LAST_BOUNDARY) && o3 === g)
                    e = 0, T2("onPartBegin"), i = t2.HEADER_FIELD_START;
                  else
                    return;
                  break;
                }
                o3 !== c[e + 2] && (e = -2), o3 === c[e + 2] && e++;
                break;
              case t2.HEADER_FIELD_START:
                i = t2.HEADER_FIELD, f3("onHeaderField"), e = 0;
              case t2.HEADER_FIELD:
                if (o3 === N) {
                  s2("onHeaderField"), i = t2.HEADERS_ALMOST_DONE;
                  break;
                }
                if (e++, o3 === P)
                  break;
                if (o3 === C) {
                  if (e === 1)
                    return;
                  b("onHeaderField", true), i = t2.HEADER_VALUE_START;
                  break;
                }
                if (L = $(o3), L < I || L > M)
                  return;
                break;
              case t2.HEADER_VALUE_START:
                if (o3 === x)
                  break;
                f3("onHeaderValue"), i = t2.HEADER_VALUE;
              case t2.HEADER_VALUE:
                o3 === N && (b("onHeaderValue", true), T2("onHeaderEnd"), i = t2.HEADER_VALUE_ALMOST_DONE);
                break;
              case t2.HEADER_VALUE_ALMOST_DONE:
                if (o3 !== g)
                  return;
                i = t2.HEADER_FIELD_START;
                break;
              case t2.HEADERS_ALMOST_DONE:
                if (o3 !== g)
                  return;
                T2("onHeadersEnd"), i = t2.PART_DATA_START;
                break;
              case t2.PART_DATA_START:
                i = t2.PART_DATA, f3("onPartData");
              case t2.PART_DATA:
                if (d2 = e, e === 0) {
                  for (n3 += O2;n3 < y && !(a2[n3] in p); )
                    n3 += H2;
                  n3 -= O2, o3 = a2[n3];
                }
                if (e < c.length)
                  c[e] === o3 ? (e === 0 && b("onPartData", true), e++) : e = 0;
                else if (e === c.length)
                  e++, o3 === N ? A2 |= R.PART_BOUNDARY : o3 === P ? A2 |= R.LAST_BOUNDARY : e = 0;
                else if (e - 1 === c.length)
                  if (A2 & R.PART_BOUNDARY) {
                    if (e = 0, o3 === g) {
                      A2 &= ~R.PART_BOUNDARY, T2("onPartEnd"), T2("onPartBegin"), i = t2.HEADER_FIELD_START;
                      break;
                    }
                  } else
                    A2 & R.LAST_BOUNDARY && o3 === P ? (T2("onPartEnd"), i = t2.END, A2 = 0) : e = 0;
                if (e > 0)
                  l2[e - 1] = o3;
                else if (d2 > 0) {
                  const h = new Uint8Array(l2.buffer, l2.byteOffset, l2.byteLength);
                  T2("onPartData", 0, d2, h), d2 = 0, f3("onPartData"), n3--;
                }
                break;
              case t2.END:
                break;
              default:
                throw new Error(`Unexpected state entered: ${i}`);
            }
          b("onHeaderField"), b("onHeaderValue"), b("onPartData"), this.index = e, this.state = i, this.flags = A2;
        }
        end() {
          if (this.state === t2.HEADER_FIELD_START && this.index === 0 || this.state === t2.PART_DATA && this.index === this.boundary.length)
            this.onPartEnd();
          else if (this.state !== t2.END)
            throw new Error("MultipartParser.end(): stream ended unexpectedly");
        }
      };
      E(F, "MultipartParser");
      k = F;
      E(v, "_fileName");
      E(Z, "toFormData");
    }
  });
  function js(i) {
    if (!/^data:/i.test(i))
      throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
    i = i.replace(/\r?\n/g, "");
    const o3 = i.indexOf(",");
    if (o3 === -1 || o3 <= 4)
      throw new TypeError("malformed data: URI");
    const a2 = i.substring(5, o3).split(";");
    let u2 = "", l2 = false;
    const p = a2[0] || "text/plain";
    let h = p;
    for (let E2 = 1;E2 < a2.length; E2++)
      a2[E2] === "base64" ? l2 = true : a2[E2] && (h += `;${a2[E2]}`, a2[E2].indexOf("charset=") === 0 && (u2 = a2[E2].substring(8)));
    !a2[0] && !u2.length && (h += ";charset=US-ASCII", u2 = "US-ASCII");
    const g3 = l2 ? "base64" : "ascii", A2 = unescape(i.substring(o3 + 1)), w2 = Buffer.from(A2, g3);
    return w2.type = p, w2.typeFull = h, w2.charset = u2, w2;
  }
  function Ls() {
    return di || (di = 1, function(i, o3) {
      (function(a2, u2) {
        u2(o3);
      })(n, function(a2) {
        function u2() {}
        n2(u2, "noop");
        function l2(e) {
          return typeof e == "object" && e !== null || typeof e == "function";
        }
        n2(l2, "typeIsObject");
        const p = u2;
        function h(e, t4) {
          try {
            Object.defineProperty(e, "name", { value: t4, configurable: true });
          } catch (e2) {}
        }
        n2(h, "setFunctionName");
        const g3 = Promise, A2 = Promise.prototype.then, w2 = Promise.reject.bind(g3);
        function E2(e) {
          return new g3(e);
        }
        n2(E2, "newPromise");
        function T2(e) {
          return E2((t4) => t4(e));
        }
        n2(T2, "promiseResolvedWith");
        function b(e) {
          return w2(e);
        }
        n2(b, "promiseRejectedWith");
        function q(e, t4, r) {
          return A2.call(e, t4, r);
        }
        n2(q, "PerformPromiseThen");
        function _(e, t4, r) {
          q(q(e, t4, r), undefined, p);
        }
        n2(_, "uponPromise");
        function V(e, t4) {
          _(e, t4);
        }
        n2(V, "uponFulfillment");
        function I2(e, t4) {
          _(e, undefined, t4);
        }
        n2(I2, "uponRejection");
        function F3(e, t4, r) {
          return q(e, t4, r);
        }
        n2(F3, "transformPromiseWith");
        function Q(e) {
          q(e, undefined, p);
        }
        n2(Q, "setPromiseIsHandledToTrue");
        let ge = n2((e) => {
          if (typeof queueMicrotask == "function")
            ge = queueMicrotask;
          else {
            const t4 = T2(undefined);
            ge = n2((r) => q(t4, r), "_queueMicrotask");
          }
          return ge(e);
        }, "_queueMicrotask");
        function z(e, t4, r) {
          if (typeof e != "function")
            throw new TypeError("Argument is not a function");
          return Function.prototype.apply.call(e, t4, r);
        }
        n2(z, "reflectCall");
        function j(e, t4, r) {
          try {
            return T2(z(e, t4, r));
          } catch (s2) {
            return b(s2);
          }
        }
        n2(j, "promiseCall");
        const U = 16384, bn = class bn2 {
          constructor() {
            this._cursor = 0, this._size = 0, this._front = { _elements: [], _next: undefined }, this._back = this._front, this._cursor = 0, this._size = 0;
          }
          get length() {
            return this._size;
          }
          push(t4) {
            const r = this._back;
            let s2 = r;
            r._elements.length === U - 1 && (s2 = { _elements: [], _next: undefined }), r._elements.push(t4), s2 !== r && (this._back = s2, r._next = s2), ++this._size;
          }
          shift() {
            const t4 = this._front;
            let r = t4;
            const s2 = this._cursor;
            let f3 = s2 + 1;
            const c = t4._elements, d2 = c[s2];
            return f3 === U && (r = t4._next, f3 = 0), --this._size, this._cursor = f3, t4 !== r && (this._front = r), c[s2] = undefined, d2;
          }
          forEach(t4) {
            let r = this._cursor, s2 = this._front, f3 = s2._elements;
            for (;(r !== f3.length || s2._next !== undefined) && !(r === f3.length && (s2 = s2._next, f3 = s2._elements, r = 0, f3.length === 0)); )
              t4(f3[r]), ++r;
          }
          peek() {
            const t4 = this._front, r = this._cursor;
            return t4._elements[r];
          }
        };
        n2(bn, "SimpleQueue");
        let D2 = bn;
        const Ft = Symbol("[[AbortSteps]]"), Qn = Symbol("[[ErrorSteps]]"), Ar = Symbol("[[CancelSteps]]"), Br = Symbol("[[PullSteps]]"), kr = Symbol("[[ReleaseSteps]]");
        function Yn(e, t4) {
          e._ownerReadableStream = t4, t4._reader = e, t4._state === "readable" ? qr(e) : t4._state === "closed" ? Li(e) : Gn(e, t4._storedError);
        }
        n2(Yn, "ReadableStreamReaderGenericInitialize");
        function Wr(e, t4) {
          const r = e._ownerReadableStream;
          return ie(r, t4);
        }
        n2(Wr, "ReadableStreamReaderGenericCancel");
        function _e(e) {
          const t4 = e._ownerReadableStream;
          t4._state === "readable" ? Or(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : $i(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), t4._readableStreamController[kr](), t4._reader = undefined, e._ownerReadableStream = undefined;
        }
        n2(_e, "ReadableStreamReaderGenericRelease");
        function jt(e) {
          return new TypeError("Cannot " + e + " a stream using a released reader");
        }
        n2(jt, "readerLockException");
        function qr(e) {
          e._closedPromise = E2((t4, r) => {
            e._closedPromise_resolve = t4, e._closedPromise_reject = r;
          });
        }
        n2(qr, "defaultReaderClosedPromiseInitialize");
        function Gn(e, t4) {
          qr(e), Or(e, t4);
        }
        n2(Gn, "defaultReaderClosedPromiseInitializeAsRejected");
        function Li(e) {
          qr(e), Zn(e);
        }
        n2(Li, "defaultReaderClosedPromiseInitializeAsResolved");
        function Or(e, t4) {
          e._closedPromise_reject !== undefined && (Q(e._closedPromise), e._closedPromise_reject(t4), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined);
        }
        n2(Or, "defaultReaderClosedPromiseReject");
        function $i(e, t4) {
          Gn(e, t4);
        }
        n2($i, "defaultReaderClosedPromiseResetToRejected");
        function Zn(e) {
          e._closedPromise_resolve !== undefined && (e._closedPromise_resolve(undefined), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined);
        }
        n2(Zn, "defaultReaderClosedPromiseResolve");
        const Kn = Number.isFinite || function(e) {
          return typeof e == "number" && isFinite(e);
        }, Di = Math.trunc || function(e) {
          return e < 0 ? Math.ceil(e) : Math.floor(e);
        };
        function Mi(e) {
          return typeof e == "object" || typeof e == "function";
        }
        n2(Mi, "isDictionary");
        function ue(e, t4) {
          if (e !== undefined && !Mi(e))
            throw new TypeError(`${t4} is not an object.`);
        }
        n2(ue, "assertDictionary");
        function Z2(e, t4) {
          if (typeof e != "function")
            throw new TypeError(`${t4} is not a function.`);
        }
        n2(Z2, "assertFunction");
        function Ui(e) {
          return typeof e == "object" && e !== null || typeof e == "function";
        }
        n2(Ui, "isObject");
        function Jn(e, t4) {
          if (!Ui(e))
            throw new TypeError(`${t4} is not an object.`);
        }
        n2(Jn, "assertObject");
        function Se(e, t4, r) {
          if (e === undefined)
            throw new TypeError(`Parameter ${t4} is required in '${r}'.`);
        }
        n2(Se, "assertRequiredArgument");
        function zr(e, t4, r) {
          if (e === undefined)
            throw new TypeError(`${t4} is required in '${r}'.`);
        }
        n2(zr, "assertRequiredField");
        function Ir(e) {
          return Number(e);
        }
        n2(Ir, "convertUnrestrictedDouble");
        function Xn(e) {
          return e === 0 ? 0 : e;
        }
        n2(Xn, "censorNegativeZero");
        function xi(e) {
          return Xn(Di(e));
        }
        n2(xi, "integerPart");
        function Fr(e, t4) {
          const s2 = Number.MAX_SAFE_INTEGER;
          let f3 = Number(e);
          if (f3 = Xn(f3), !Kn(f3))
            throw new TypeError(`${t4} is not a finite number`);
          if (f3 = xi(f3), f3 < 0 || f3 > s2)
            throw new TypeError(`${t4} is outside the accepted range of 0 to ${s2}, inclusive`);
          return !Kn(f3) || f3 === 0 ? 0 : f3;
        }
        n2(Fr, "convertUnsignedLongLongWithEnforceRange");
        function jr(e, t4) {
          if (!We(e))
            throw new TypeError(`${t4} is not a ReadableStream.`);
        }
        n2(jr, "assertReadableStream");
        function Qe(e) {
          return new fe(e);
        }
        n2(Qe, "AcquireReadableStreamDefaultReader");
        function eo(e, t4) {
          e._reader._readRequests.push(t4);
        }
        n2(eo, "ReadableStreamAddReadRequest");
        function Lr(e, t4, r) {
          const f3 = e._reader._readRequests.shift();
          r ? f3._closeSteps() : f3._chunkSteps(t4);
        }
        n2(Lr, "ReadableStreamFulfillReadRequest");
        function Lt(e) {
          return e._reader._readRequests.length;
        }
        n2(Lt, "ReadableStreamGetNumReadRequests");
        function to(e) {
          const t4 = e._reader;
          return !(t4 === undefined || !Ee(t4));
        }
        n2(to, "ReadableStreamHasDefaultReader");
        const mn = class mn2 {
          constructor(t4) {
            if (Se(t4, 1, "ReadableStreamDefaultReader"), jr(t4, "First parameter"), qe(t4))
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            Yn(this, t4), this._readRequests = new D2;
          }
          get closed() {
            return Ee(this) ? this._closedPromise : b($t("closed"));
          }
          cancel(t4 = undefined) {
            return Ee(this) ? this._ownerReadableStream === undefined ? b(jt("cancel")) : Wr(this, t4) : b($t("cancel"));
          }
          read() {
            if (!Ee(this))
              return b($t("read"));
            if (this._ownerReadableStream === undefined)
              return b(jt("read from"));
            let t4, r;
            const s2 = E2((c, d2) => {
              t4 = c, r = d2;
            });
            return mt(this, { _chunkSteps: (c) => t4({ value: c, done: false }), _closeSteps: () => t4({ value: undefined, done: true }), _errorSteps: (c) => r(c) }), s2;
          }
          releaseLock() {
            if (!Ee(this))
              throw $t("releaseLock");
            this._ownerReadableStream !== undefined && Ni(this);
          }
        };
        n2(mn, "ReadableStreamDefaultReader");
        let fe = mn;
        Object.defineProperties(fe.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h(fe.prototype.cancel, "cancel"), h(fe.prototype.read, "read"), h(fe.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(fe.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultReader", configurable: true });
        function Ee(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_readRequests") ? false : e instanceof fe;
        }
        n2(Ee, "IsReadableStreamDefaultReader");
        function mt(e, t4) {
          const r = e._ownerReadableStream;
          r._disturbed = true, r._state === "closed" ? t4._closeSteps() : r._state === "errored" ? t4._errorSteps(r._storedError) : r._readableStreamController[Br](t4);
        }
        n2(mt, "ReadableStreamDefaultReaderRead");
        function Ni(e) {
          _e(e);
          const t4 = new TypeError("Reader was released");
          ro(e, t4);
        }
        n2(Ni, "ReadableStreamDefaultReaderRelease");
        function ro(e, t4) {
          const r = e._readRequests;
          e._readRequests = new D2, r.forEach((s2) => {
            s2._errorSteps(t4);
          });
        }
        n2(ro, "ReadableStreamDefaultReaderErrorReadRequests");
        function $t(e) {
          return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`);
        }
        n2($t, "defaultReaderBrandCheckException");
        const Hi = Object.getPrototypeOf(Object.getPrototypeOf(function() {
          return __asyncGenerator(this, null, function* () {});
        }).prototype || {}), yn = class yn2 {
          constructor(t4, r) {
            this._ongoingPromise = undefined, this._isFinished = false, this._reader = t4, this._preventCancel = r;
          }
          next() {
            const t4 = n2(() => this._nextSteps(), "nextSteps");
            return this._ongoingPromise = this._ongoingPromise ? F3(this._ongoingPromise, t4, t4) : t4(), this._ongoingPromise;
          }
          return(t4) {
            const r = n2(() => this._returnSteps(t4), "returnSteps");
            return this._ongoingPromise ? F3(this._ongoingPromise, r, r) : r();
          }
          _nextSteps() {
            if (this._isFinished)
              return Promise.resolve({ value: undefined, done: true });
            const t4 = this._reader;
            let r, s2;
            const f3 = E2((d2, m2) => {
              r = d2, s2 = m2;
            });
            return mt(t4, { _chunkSteps: (d2) => {
              this._ongoingPromise = undefined, ge(() => r({ value: d2, done: false }));
            }, _closeSteps: () => {
              this._ongoingPromise = undefined, this._isFinished = true, _e(t4), r({ value: undefined, done: true });
            }, _errorSteps: (d2) => {
              this._ongoingPromise = undefined, this._isFinished = true, _e(t4), s2(d2);
            } }), f3;
          }
          _returnSteps(t4) {
            if (this._isFinished)
              return Promise.resolve({ value: t4, done: true });
            this._isFinished = true;
            const r = this._reader;
            if (!this._preventCancel) {
              const s2 = Wr(r, t4);
              return _e(r), F3(s2, () => ({ value: t4, done: true }));
            }
            return _e(r), T2({ value: t4, done: true });
          }
        };
        n2(yn, "ReadableStreamAsyncIteratorImpl");
        let Dt = yn;
        const no = { next() {
          return oo(this) ? this._asyncIteratorImpl.next() : b(io("next"));
        }, return(e) {
          return oo(this) ? this._asyncIteratorImpl.return(e) : b(io("return"));
        } };
        Object.setPrototypeOf(no, Hi);
        function Vi(e, t4) {
          const r = Qe(e), s2 = new Dt(r, t4), f3 = Object.create(no);
          return f3._asyncIteratorImpl = s2, f3;
        }
        n2(Vi, "AcquireReadableStreamAsyncIterator");
        function oo(e) {
          if (!l2(e) || !Object.prototype.hasOwnProperty.call(e, "_asyncIteratorImpl"))
            return false;
          try {
            return e._asyncIteratorImpl instanceof Dt;
          } catch (e2) {
            return false;
          }
        }
        n2(oo, "IsReadableStreamAsyncIterator");
        function io(e) {
          return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`);
        }
        n2(io, "streamAsyncIteratorBrandCheckException");
        const ao = Number.isNaN || function(e) {
          return e !== e;
        };
        var $r, Dr, Mr;
        function yt(e) {
          return e.slice();
        }
        n2(yt, "CreateArrayFromList");
        function so(e, t4, r, s2, f3) {
          new Uint8Array(e).set(new Uint8Array(r, s2, f3), t4);
        }
        n2(so, "CopyDataBlockBytes");
        let we = n2((e) => (typeof e.transfer == "function" ? we = n2((t4) => t4.transfer(), "TransferArrayBuffer") : typeof structuredClone == "function" ? we = n2((t4) => structuredClone(t4, { transfer: [t4] }), "TransferArrayBuffer") : we = n2((t4) => t4, "TransferArrayBuffer"), we(e)), "TransferArrayBuffer"), Ae = n2((e) => (typeof e.detached == "boolean" ? Ae = n2((t4) => t4.detached, "IsDetachedBuffer") : Ae = n2((t4) => t4.byteLength === 0, "IsDetachedBuffer"), Ae(e)), "IsDetachedBuffer");
        function lo(e, t4, r) {
          if (e.slice)
            return e.slice(t4, r);
          const s2 = r - t4, f3 = new ArrayBuffer(s2);
          return so(f3, 0, e, t4, s2), f3;
        }
        n2(lo, "ArrayBufferSlice");
        function Mt(e, t4) {
          const r = e[t4];
          if (r != null) {
            if (typeof r != "function")
              throw new TypeError(`${String(t4)} is not a function`);
            return r;
          }
        }
        n2(Mt, "GetMethod");
        function Qi(e) {
          const t4 = { [Symbol.iterator]: () => e.iterator }, r = function() {
            return __asyncGenerator(this, null, function* () {
              return yield* __yieldStar(t4);
            });
          }(), s2 = r.next;
          return { iterator: r, nextMethod: s2, done: false };
        }
        n2(Qi, "CreateAsyncFromSyncIterator");
        const Ur = (Mr = ($r = Symbol.asyncIterator) !== null && $r !== undefined ? $r : (Dr = Symbol.for) === null || Dr === undefined ? undefined : Dr.call(Symbol, "Symbol.asyncIterator")) !== null && Mr !== undefined ? Mr : "@@asyncIterator";
        function uo(e, t4 = "sync", r) {
          if (r === undefined)
            if (t4 === "async") {
              if (r = Mt(e, Ur), r === undefined) {
                const c = Mt(e, Symbol.iterator), d2 = uo(e, "sync", c);
                return Qi(d2);
              }
            } else
              r = Mt(e, Symbol.iterator);
          if (r === undefined)
            throw new TypeError("The object is not iterable");
          const s2 = z(r, e, []);
          if (!l2(s2))
            throw new TypeError("The iterator method must return an object");
          const f3 = s2.next;
          return { iterator: s2, nextMethod: f3, done: false };
        }
        n2(uo, "GetIterator");
        function Yi(e) {
          const t4 = z(e.nextMethod, e.iterator, []);
          if (!l2(t4))
            throw new TypeError("The iterator.next() method must return an object");
          return t4;
        }
        n2(Yi, "IteratorNext");
        function Gi(e) {
          return !!e.done;
        }
        n2(Gi, "IteratorComplete");
        function Zi(e) {
          return e.value;
        }
        n2(Zi, "IteratorValue");
        function Ki(e) {
          return !(typeof e != "number" || ao(e) || e < 0);
        }
        n2(Ki, "IsNonNegativeNumber");
        function fo(e) {
          const t4 = lo(e.buffer, e.byteOffset, e.byteOffset + e.byteLength);
          return new Uint8Array(t4);
        }
        n2(fo, "CloneAsUint8Array");
        function xr(e) {
          const t4 = e._queue.shift();
          return e._queueTotalSize -= t4.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t4.value;
        }
        n2(xr, "DequeueValue");
        function Nr(e, t4, r) {
          if (!Ki(r) || r === 1 / 0)
            throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
          e._queue.push({ value: t4, size: r }), e._queueTotalSize += r;
        }
        n2(Nr, "EnqueueValueWithSize");
        function Ji(e) {
          return e._queue.peek().value;
        }
        n2(Ji, "PeekQueueValue");
        function Be(e) {
          e._queue = new D2, e._queueTotalSize = 0;
        }
        n2(Be, "ResetQueue");
        function co(e) {
          return e === DataView;
        }
        n2(co, "isDataViewConstructor");
        function Xi(e) {
          return co(e.constructor);
        }
        n2(Xi, "isDataView");
        function ea(e) {
          return co(e) ? 1 : e.BYTES_PER_ELEMENT;
        }
        n2(ea, "arrayBufferViewElementSize");
        const gn = class gn2 {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get view() {
            if (!Hr(this))
              throw Zr("view");
            return this._view;
          }
          respond(t4) {
            if (!Hr(this))
              throw Zr("respond");
            if (Se(t4, 1, "respond"), t4 = Fr(t4, "First parameter"), this._associatedReadableByteStreamController === undefined)
              throw new TypeError("This BYOB request has been invalidated");
            if (Ae(this._view.buffer))
              throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");
            Ht(this._associatedReadableByteStreamController, t4);
          }
          respondWithNewView(t4) {
            if (!Hr(this))
              throw Zr("respondWithNewView");
            if (Se(t4, 1, "respondWithNewView"), !ArrayBuffer.isView(t4))
              throw new TypeError("You can only respond with array buffer views");
            if (this._associatedReadableByteStreamController === undefined)
              throw new TypeError("This BYOB request has been invalidated");
            if (Ae(t4.buffer))
              throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");
            Vt(this._associatedReadableByteStreamController, t4);
          }
        };
        n2(gn, "ReadableStreamBYOBRequest");
        let Re = gn;
        Object.defineProperties(Re.prototype, { respond: { enumerable: true }, respondWithNewView: { enumerable: true }, view: { enumerable: true } }), h(Re.prototype.respond, "respond"), h(Re.prototype.respondWithNewView, "respondWithNewView"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Re.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBRequest", configurable: true });
        const _n = class _n2 {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get byobRequest() {
            if (!ze(this))
              throw _t("byobRequest");
            return Gr(this);
          }
          get desiredSize() {
            if (!ze(this))
              throw _t("desiredSize");
            return Ro(this);
          }
          close() {
            if (!ze(this))
              throw _t("close");
            if (this._closeRequested)
              throw new TypeError("The stream has already been closed; do not close it again!");
            const t4 = this._controlledReadableByteStream._state;
            if (t4 !== "readable")
              throw new TypeError(`The stream (in ${t4} state) is not in the readable state and cannot be closed`);
            gt(this);
          }
          enqueue(t4) {
            if (!ze(this))
              throw _t("enqueue");
            if (Se(t4, 1, "enqueue"), !ArrayBuffer.isView(t4))
              throw new TypeError("chunk must be an array buffer view");
            if (t4.byteLength === 0)
              throw new TypeError("chunk must have non-zero byteLength");
            if (t4.buffer.byteLength === 0)
              throw new TypeError("chunk's buffer must have non-zero byteLength");
            if (this._closeRequested)
              throw new TypeError("stream is closed or draining");
            const r = this._controlledReadableByteStream._state;
            if (r !== "readable")
              throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);
            Nt(this, t4);
          }
          error(t4 = undefined) {
            if (!ze(this))
              throw _t("error");
            K(this, t4);
          }
          [Ar](t4) {
            ho(this), Be(this);
            const r = this._cancelAlgorithm(t4);
            return xt(this), r;
          }
          [Br](t4) {
            const r = this._controlledReadableByteStream;
            if (this._queueTotalSize > 0) {
              wo(this, t4);
              return;
            }
            const s2 = this._autoAllocateChunkSize;
            if (s2 !== undefined) {
              let f3;
              try {
                f3 = new ArrayBuffer(s2);
              } catch (d2) {
                t4._errorSteps(d2);
                return;
              }
              const c = { buffer: f3, bufferByteLength: s2, byteOffset: 0, byteLength: s2, bytesFilled: 0, minimumFill: 1, elementSize: 1, viewConstructor: Uint8Array, readerType: "default" };
              this._pendingPullIntos.push(c);
            }
            eo(r, t4), Ie(this);
          }
          [kr]() {
            if (this._pendingPullIntos.length > 0) {
              const t4 = this._pendingPullIntos.peek();
              t4.readerType = "none", this._pendingPullIntos = new D2, this._pendingPullIntos.push(t4);
            }
          }
        };
        n2(_n, "ReadableByteStreamController");
        let te = _n;
        Object.defineProperties(te.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, byobRequest: { enumerable: true }, desiredSize: { enumerable: true } }), h(te.prototype.close, "close"), h(te.prototype.enqueue, "enqueue"), h(te.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(te.prototype, Symbol.toStringTag, { value: "ReadableByteStreamController", configurable: true });
        function ze(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableByteStream") ? false : e instanceof te;
        }
        n2(ze, "IsReadableByteStreamController");
        function Hr(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? false : e instanceof Re;
        }
        n2(Hr, "IsReadableStreamBYOBRequest");
        function Ie(e) {
          if (!ia(e))
            return;
          if (e._pulling) {
            e._pullAgain = true;
            return;
          }
          e._pulling = true;
          const r = e._pullAlgorithm();
          _(r, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Ie(e)), null), (s2) => (K(e, s2), null));
        }
        n2(Ie, "ReadableByteStreamControllerCallPullIfNeeded");
        function ho(e) {
          Qr(e), e._pendingPullIntos = new D2;
        }
        n2(ho, "ReadableByteStreamControllerClearPendingPullIntos");
        function Vr(e, t4) {
          let r = false;
          e._state === "closed" && (r = true);
          const s2 = po(t4);
          t4.readerType === "default" ? Lr(e, s2, r) : ca(e, s2, r);
        }
        n2(Vr, "ReadableByteStreamControllerCommitPullIntoDescriptor");
        function po(e) {
          const { bytesFilled: t4, elementSize: r } = e;
          return new e.viewConstructor(e.buffer, e.byteOffset, t4 / r);
        }
        n2(po, "ReadableByteStreamControllerConvertPullIntoDescriptor");
        function Ut(e, t4, r, s2) {
          e._queue.push({ buffer: t4, byteOffset: r, byteLength: s2 }), e._queueTotalSize += s2;
        }
        n2(Ut, "ReadableByteStreamControllerEnqueueChunkToQueue");
        function bo(e, t4, r, s2) {
          let f3;
          try {
            f3 = lo(t4, r, r + s2);
          } catch (c) {
            throw K(e, c), c;
          }
          Ut(e, f3, 0, s2);
        }
        n2(bo, "ReadableByteStreamControllerEnqueueClonedChunkToQueue");
        function mo(e, t4) {
          t4.bytesFilled > 0 && bo(e, t4.buffer, t4.byteOffset, t4.bytesFilled), Ye(e);
        }
        n2(mo, "ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");
        function yo(e, t4) {
          const r = Math.min(e._queueTotalSize, t4.byteLength - t4.bytesFilled), s2 = t4.bytesFilled + r;
          let f3 = r, c = false;
          const d2 = s2 % t4.elementSize, m2 = s2 - d2;
          m2 >= t4.minimumFill && (f3 = m2 - t4.bytesFilled, c = true);
          const R3 = e._queue;
          for (;f3 > 0; ) {
            const y = R3.peek(), C3 = Math.min(f3, y.byteLength), P2 = t4.byteOffset + t4.bytesFilled;
            so(t4.buffer, P2, y.buffer, y.byteOffset, C3), y.byteLength === C3 ? R3.shift() : (y.byteOffset += C3, y.byteLength -= C3), e._queueTotalSize -= C3, go(e, C3, t4), f3 -= C3;
          }
          return c;
        }
        n2(yo, "ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");
        function go(e, t4, r) {
          r.bytesFilled += t4;
        }
        n2(go, "ReadableByteStreamControllerFillHeadPullIntoDescriptor");
        function _o(e) {
          e._queueTotalSize === 0 && e._closeRequested ? (xt(e), Pt(e._controlledReadableByteStream)) : Ie(e);
        }
        n2(_o, "ReadableByteStreamControllerHandleQueueDrain");
        function Qr(e) {
          e._byobRequest !== null && (e._byobRequest._associatedReadableByteStreamController = undefined, e._byobRequest._view = null, e._byobRequest = null);
        }
        n2(Qr, "ReadableByteStreamControllerInvalidateBYOBRequest");
        function Yr(e) {
          for (;e._pendingPullIntos.length > 0; ) {
            if (e._queueTotalSize === 0)
              return;
            const t4 = e._pendingPullIntos.peek();
            yo(e, t4) && (Ye(e), Vr(e._controlledReadableByteStream, t4));
          }
        }
        n2(Yr, "ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");
        function ta(e) {
          const t4 = e._controlledReadableByteStream._reader;
          for (;t4._readRequests.length > 0; ) {
            if (e._queueTotalSize === 0)
              return;
            const r = t4._readRequests.shift();
            wo(e, r);
          }
        }
        n2(ta, "ReadableByteStreamControllerProcessReadRequestsUsingQueue");
        function ra(e, t4, r, s2) {
          const f3 = e._controlledReadableByteStream, c = t4.constructor, d2 = ea(c), { byteOffset: m2, byteLength: R3 } = t4, y = r * d2;
          let C3;
          try {
            C3 = we(t4.buffer);
          } catch (B2) {
            s2._errorSteps(B2);
            return;
          }
          const P2 = { buffer: C3, bufferByteLength: C3.byteLength, byteOffset: m2, byteLength: R3, bytesFilled: 0, minimumFill: y, elementSize: d2, viewConstructor: c, readerType: "byob" };
          if (e._pendingPullIntos.length > 0) {
            e._pendingPullIntos.push(P2), Po(f3, s2);
            return;
          }
          if (f3._state === "closed") {
            const B2 = new c(P2.buffer, P2.byteOffset, 0);
            s2._closeSteps(B2);
            return;
          }
          if (e._queueTotalSize > 0) {
            if (yo(e, P2)) {
              const B2 = po(P2);
              _o(e), s2._chunkSteps(B2);
              return;
            }
            if (e._closeRequested) {
              const B2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
              K(e, B2), s2._errorSteps(B2);
              return;
            }
          }
          e._pendingPullIntos.push(P2), Po(f3, s2), Ie(e);
        }
        n2(ra, "ReadableByteStreamControllerPullInto");
        function na(e, t4) {
          t4.readerType === "none" && Ye(e);
          const r = e._controlledReadableByteStream;
          if (Kr(r))
            for (;vo(r) > 0; ) {
              const s2 = Ye(e);
              Vr(r, s2);
            }
        }
        n2(na, "ReadableByteStreamControllerRespondInClosedState");
        function oa(e, t4, r) {
          if (go(e, t4, r), r.readerType === "none") {
            mo(e, r), Yr(e);
            return;
          }
          if (r.bytesFilled < r.minimumFill)
            return;
          Ye(e);
          const s2 = r.bytesFilled % r.elementSize;
          if (s2 > 0) {
            const f3 = r.byteOffset + r.bytesFilled;
            bo(e, r.buffer, f3 - s2, s2);
          }
          r.bytesFilled -= s2, Vr(e._controlledReadableByteStream, r), Yr(e);
        }
        n2(oa, "ReadableByteStreamControllerRespondInReadableState");
        function So(e, t4) {
          const r = e._pendingPullIntos.peek();
          Qr(e), e._controlledReadableByteStream._state === "closed" ? na(e, r) : oa(e, t4, r), Ie(e);
        }
        n2(So, "ReadableByteStreamControllerRespondInternal");
        function Ye(e) {
          return e._pendingPullIntos.shift();
        }
        n2(Ye, "ReadableByteStreamControllerShiftPendingPullInto");
        function ia(e) {
          const t4 = e._controlledReadableByteStream;
          return t4._state !== "readable" || e._closeRequested || !e._started ? false : !!(to(t4) && Lt(t4) > 0 || Kr(t4) && vo(t4) > 0 || Ro(e) > 0);
        }
        n2(ia, "ReadableByteStreamControllerShouldCallPull");
        function xt(e) {
          e._pullAlgorithm = undefined, e._cancelAlgorithm = undefined;
        }
        n2(xt, "ReadableByteStreamControllerClearAlgorithms");
        function gt(e) {
          const t4 = e._controlledReadableByteStream;
          if (!(e._closeRequested || t4._state !== "readable")) {
            if (e._queueTotalSize > 0) {
              e._closeRequested = true;
              return;
            }
            if (e._pendingPullIntos.length > 0) {
              const r = e._pendingPullIntos.peek();
              if (r.bytesFilled % r.elementSize !== 0) {
                const s2 = new TypeError("Insufficient bytes to fill elements in the given buffer");
                throw K(e, s2), s2;
              }
            }
            xt(e), Pt(t4);
          }
        }
        n2(gt, "ReadableByteStreamControllerClose");
        function Nt(e, t4) {
          const r = e._controlledReadableByteStream;
          if (e._closeRequested || r._state !== "readable")
            return;
          const { buffer: s2, byteOffset: f3, byteLength: c } = t4;
          if (Ae(s2))
            throw new TypeError("chunk's buffer is detached and so cannot be enqueued");
          const d2 = we(s2);
          if (e._pendingPullIntos.length > 0) {
            const m2 = e._pendingPullIntos.peek();
            if (Ae(m2.buffer))
              throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");
            Qr(e), m2.buffer = we(m2.buffer), m2.readerType === "none" && mo(e, m2);
          }
          if (to(r))
            if (ta(e), Lt(r) === 0)
              Ut(e, d2, f3, c);
            else {
              e._pendingPullIntos.length > 0 && Ye(e);
              const m2 = new Uint8Array(d2, f3, c);
              Lr(r, m2, false);
            }
          else
            Kr(r) ? (Ut(e, d2, f3, c), Yr(e)) : Ut(e, d2, f3, c);
          Ie(e);
        }
        n2(Nt, "ReadableByteStreamControllerEnqueue");
        function K(e, t4) {
          const r = e._controlledReadableByteStream;
          r._state === "readable" && (ho(e), Be(e), xt(e), Zo(r, t4));
        }
        n2(K, "ReadableByteStreamControllerError");
        function wo(e, t4) {
          const r = e._queue.shift();
          e._queueTotalSize -= r.byteLength, _o(e);
          const s2 = new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
          t4._chunkSteps(s2);
        }
        n2(wo, "ReadableByteStreamControllerFillReadRequestFromQueue");
        function Gr(e) {
          if (e._byobRequest === null && e._pendingPullIntos.length > 0) {
            const t4 = e._pendingPullIntos.peek(), r = new Uint8Array(t4.buffer, t4.byteOffset + t4.bytesFilled, t4.byteLength - t4.bytesFilled), s2 = Object.create(Re.prototype);
            sa(s2, e, r), e._byobRequest = s2;
          }
          return e._byobRequest;
        }
        n2(Gr, "ReadableByteStreamControllerGetBYOBRequest");
        function Ro(e) {
          const t4 = e._controlledReadableByteStream._state;
          return t4 === "errored" ? null : t4 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
        }
        n2(Ro, "ReadableByteStreamControllerGetDesiredSize");
        function Ht(e, t4) {
          const r = e._pendingPullIntos.peek();
          if (e._controlledReadableByteStream._state === "closed") {
            if (t4 !== 0)
              throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
          } else {
            if (t4 === 0)
              throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");
            if (r.bytesFilled + t4 > r.byteLength)
              throw new RangeError("bytesWritten out of range");
          }
          r.buffer = we(r.buffer), So(e, t4);
        }
        n2(Ht, "ReadableByteStreamControllerRespond");
        function Vt(e, t4) {
          const r = e._pendingPullIntos.peek();
          if (e._controlledReadableByteStream._state === "closed") {
            if (t4.byteLength !== 0)
              throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream");
          } else if (t4.byteLength === 0)
            throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");
          if (r.byteOffset + r.bytesFilled !== t4.byteOffset)
            throw new RangeError("The region specified by view does not match byobRequest");
          if (r.bufferByteLength !== t4.buffer.byteLength)
            throw new RangeError("The buffer of view has different capacity than byobRequest");
          if (r.bytesFilled + t4.byteLength > r.byteLength)
            throw new RangeError("The region specified by view is larger than byobRequest");
          const f3 = t4.byteLength;
          r.buffer = we(t4.buffer), So(e, f3);
        }
        n2(Vt, "ReadableByteStreamControllerRespondWithNewView");
        function To(e, t4, r, s2, f3, c, d2) {
          t4._controlledReadableByteStream = e, t4._pullAgain = false, t4._pulling = false, t4._byobRequest = null, t4._queue = t4._queueTotalSize = undefined, Be(t4), t4._closeRequested = false, t4._started = false, t4._strategyHWM = c, t4._pullAlgorithm = s2, t4._cancelAlgorithm = f3, t4._autoAllocateChunkSize = d2, t4._pendingPullIntos = new D2, e._readableStreamController = t4;
          const m2 = r();
          _(T2(m2), () => (t4._started = true, Ie(t4), null), (R3) => (K(t4, R3), null));
        }
        n2(To, "SetUpReadableByteStreamController");
        function aa(e, t4, r) {
          const s2 = Object.create(te.prototype);
          let f3, c, d2;
          t4.start !== undefined ? f3 = n2(() => t4.start(s2), "startAlgorithm") : f3 = n2(() => {}, "startAlgorithm"), t4.pull !== undefined ? c = n2(() => t4.pull(s2), "pullAlgorithm") : c = n2(() => T2(undefined), "pullAlgorithm"), t4.cancel !== undefined ? d2 = n2((R3) => t4.cancel(R3), "cancelAlgorithm") : d2 = n2(() => T2(undefined), "cancelAlgorithm");
          const m2 = t4.autoAllocateChunkSize;
          if (m2 === 0)
            throw new TypeError("autoAllocateChunkSize must be greater than 0");
          To(e, s2, f3, c, d2, r, m2);
        }
        n2(aa, "SetUpReadableByteStreamControllerFromUnderlyingSource");
        function sa(e, t4, r) {
          e._associatedReadableByteStreamController = t4, e._view = r;
        }
        n2(sa, "SetUpReadableStreamBYOBRequest");
        function Zr(e) {
          return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`);
        }
        n2(Zr, "byobRequestBrandCheckException");
        function _t(e) {
          return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`);
        }
        n2(_t, "byteStreamControllerBrandCheckException");
        function la(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.mode;
          return { mode: r === undefined ? undefined : ua(r, `${t4} has member 'mode' that`) };
        }
        n2(la, "convertReaderOptions");
        function ua(e, t4) {
          if (e = `${e}`, e !== "byob")
            throw new TypeError(`${t4} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);
          return e;
        }
        n2(ua, "convertReadableStreamReaderMode");
        function fa(e, t4) {
          var r;
          ue(e, t4);
          const s2 = (r = e == null ? undefined : e.min) !== null && r !== undefined ? r : 1;
          return { min: Fr(s2, `${t4} has member 'min' that`) };
        }
        n2(fa, "convertByobReadOptions");
        function Co(e) {
          return new ce(e);
        }
        n2(Co, "AcquireReadableStreamBYOBReader");
        function Po(e, t4) {
          e._reader._readIntoRequests.push(t4);
        }
        n2(Po, "ReadableStreamAddReadIntoRequest");
        function ca(e, t4, r) {
          const f3 = e._reader._readIntoRequests.shift();
          r ? f3._closeSteps(t4) : f3._chunkSteps(t4);
        }
        n2(ca, "ReadableStreamFulfillReadIntoRequest");
        function vo(e) {
          return e._reader._readIntoRequests.length;
        }
        n2(vo, "ReadableStreamGetNumReadIntoRequests");
        function Kr(e) {
          const t4 = e._reader;
          return !(t4 === undefined || !Fe(t4));
        }
        n2(Kr, "ReadableStreamHasBYOBReader");
        const Sn = class Sn2 {
          constructor(t4) {
            if (Se(t4, 1, "ReadableStreamBYOBReader"), jr(t4, "First parameter"), qe(t4))
              throw new TypeError("This stream has already been locked for exclusive reading by another reader");
            if (!ze(t4._readableStreamController))
              throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
            Yn(this, t4), this._readIntoRequests = new D2;
          }
          get closed() {
            return Fe(this) ? this._closedPromise : b(Qt("closed"));
          }
          cancel(t4 = undefined) {
            return Fe(this) ? this._ownerReadableStream === undefined ? b(jt("cancel")) : Wr(this, t4) : b(Qt("cancel"));
          }
          read(t4, r = {}) {
            if (!Fe(this))
              return b(Qt("read"));
            if (!ArrayBuffer.isView(t4))
              return b(new TypeError("view must be an array buffer view"));
            if (t4.byteLength === 0)
              return b(new TypeError("view must have non-zero byteLength"));
            if (t4.buffer.byteLength === 0)
              return b(new TypeError("view's buffer must have non-zero byteLength"));
            if (Ae(t4.buffer))
              return b(new TypeError("view's buffer has been detached"));
            let s2;
            try {
              s2 = fa(r, "options");
            } catch (y) {
              return b(y);
            }
            const f3 = s2.min;
            if (f3 === 0)
              return b(new TypeError("options.min must be greater than 0"));
            if (Xi(t4)) {
              if (f3 > t4.byteLength)
                return b(new RangeError("options.min must be less than or equal to view's byteLength"));
            } else if (f3 > t4.length)
              return b(new RangeError("options.min must be less than or equal to view's length"));
            if (this._ownerReadableStream === undefined)
              return b(jt("read from"));
            let c, d2;
            const m2 = E2((y, C3) => {
              c = y, d2 = C3;
            });
            return Eo(this, t4, f3, { _chunkSteps: (y) => c({ value: y, done: false }), _closeSteps: (y) => c({ value: y, done: true }), _errorSteps: (y) => d2(y) }), m2;
          }
          releaseLock() {
            if (!Fe(this))
              throw Qt("releaseLock");
            this._ownerReadableStream !== undefined && da(this);
          }
        };
        n2(Sn, "ReadableStreamBYOBReader");
        let ce = Sn;
        Object.defineProperties(ce.prototype, { cancel: { enumerable: true }, read: { enumerable: true }, releaseLock: { enumerable: true }, closed: { enumerable: true } }), h(ce.prototype.cancel, "cancel"), h(ce.prototype.read, "read"), h(ce.prototype.releaseLock, "releaseLock"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ce.prototype, Symbol.toStringTag, { value: "ReadableStreamBYOBReader", configurable: true });
        function Fe(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? false : e instanceof ce;
        }
        n2(Fe, "IsReadableStreamBYOBReader");
        function Eo(e, t4, r, s2) {
          const f3 = e._ownerReadableStream;
          f3._disturbed = true, f3._state === "errored" ? s2._errorSteps(f3._storedError) : ra(f3._readableStreamController, t4, r, s2);
        }
        n2(Eo, "ReadableStreamBYOBReaderRead");
        function da(e) {
          _e(e);
          const t4 = new TypeError("Reader was released");
          Ao(e, t4);
        }
        n2(da, "ReadableStreamBYOBReaderRelease");
        function Ao(e, t4) {
          const r = e._readIntoRequests;
          e._readIntoRequests = new D2, r.forEach((s2) => {
            s2._errorSteps(t4);
          });
        }
        n2(Ao, "ReadableStreamBYOBReaderErrorReadIntoRequests");
        function Qt(e) {
          return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`);
        }
        n2(Qt, "byobReaderBrandCheckException");
        function St(e, t4) {
          const { highWaterMark: r } = e;
          if (r === undefined)
            return t4;
          if (ao(r) || r < 0)
            throw new RangeError("Invalid highWaterMark");
          return r;
        }
        n2(St, "ExtractHighWaterMark");
        function Yt(e) {
          const { size: t4 } = e;
          return t4 || (() => 1);
        }
        n2(Yt, "ExtractSizeAlgorithm");
        function Gt(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.highWaterMark, s2 = e == null ? undefined : e.size;
          return { highWaterMark: r === undefined ? undefined : Ir(r), size: s2 === undefined ? undefined : ha(s2, `${t4} has member 'size' that`) };
        }
        n2(Gt, "convertQueuingStrategy");
        function ha(e, t4) {
          return Z2(e, t4), (r) => Ir(e(r));
        }
        n2(ha, "convertQueuingStrategySize");
        function pa(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.abort, s2 = e == null ? undefined : e.close, f3 = e == null ? undefined : e.start, c = e == null ? undefined : e.type, d2 = e == null ? undefined : e.write;
          return { abort: r === undefined ? undefined : ba(r, e, `${t4} has member 'abort' that`), close: s2 === undefined ? undefined : ma(s2, e, `${t4} has member 'close' that`), start: f3 === undefined ? undefined : ya(f3, e, `${t4} has member 'start' that`), write: d2 === undefined ? undefined : ga(d2, e, `${t4} has member 'write' that`), type: c };
        }
        n2(pa, "convertUnderlyingSink");
        function ba(e, t4, r) {
          return Z2(e, r), (s2) => j(e, t4, [s2]);
        }
        n2(ba, "convertUnderlyingSinkAbortCallback");
        function ma(e, t4, r) {
          return Z2(e, r), () => j(e, t4, []);
        }
        n2(ma, "convertUnderlyingSinkCloseCallback");
        function ya(e, t4, r) {
          return Z2(e, r), (s2) => z(e, t4, [s2]);
        }
        n2(ya, "convertUnderlyingSinkStartCallback");
        function ga(e, t4, r) {
          return Z2(e, r), (s2, f3) => j(e, t4, [s2, f3]);
        }
        n2(ga, "convertUnderlyingSinkWriteCallback");
        function Bo(e, t4) {
          if (!Ge(e))
            throw new TypeError(`${t4} is not a WritableStream.`);
        }
        n2(Bo, "assertWritableStream");
        function _a2(e) {
          if (typeof e != "object" || e === null)
            return false;
          try {
            return typeof e.aborted == "boolean";
          } catch (e2) {
            return false;
          }
        }
        n2(_a2, "isAbortSignal");
        const Sa = typeof AbortController == "function";
        function wa() {
          if (Sa)
            return new AbortController;
        }
        n2(wa, "createAbortController");
        const wn = class wn2 {
          constructor(t4 = {}, r = {}) {
            t4 === undefined ? t4 = null : Jn(t4, "First parameter");
            const s2 = Gt(r, "Second parameter"), f3 = pa(t4, "First parameter");
            if (Wo(this), f3.type !== undefined)
              throw new RangeError("Invalid type is specified");
            const d2 = Yt(s2), m2 = St(s2, 1);
            Ia(this, f3, m2, d2);
          }
          get locked() {
            if (!Ge(this))
              throw er("locked");
            return Ze(this);
          }
          abort(t4 = undefined) {
            return Ge(this) ? Ze(this) ? b(new TypeError("Cannot abort a stream that already has a writer")) : Zt(this, t4) : b(er("abort"));
          }
          close() {
            return Ge(this) ? Ze(this) ? b(new TypeError("Cannot close a stream that already has a writer")) : he(this) ? b(new TypeError("Cannot close an already-closing stream")) : qo(this) : b(er("close"));
          }
          getWriter() {
            if (!Ge(this))
              throw er("getWriter");
            return ko(this);
          }
        };
        n2(wn, "WritableStream");
        let de = wn;
        Object.defineProperties(de.prototype, { abort: { enumerable: true }, close: { enumerable: true }, getWriter: { enumerable: true }, locked: { enumerable: true } }), h(de.prototype.abort, "abort"), h(de.prototype.close, "close"), h(de.prototype.getWriter, "getWriter"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(de.prototype, Symbol.toStringTag, { value: "WritableStream", configurable: true });
        function ko(e) {
          return new re(e);
        }
        n2(ko, "AcquireWritableStreamDefaultWriter");
        function Ra(e, t4, r, s2, f3 = 1, c = () => 1) {
          const d2 = Object.create(de.prototype);
          Wo(d2);
          const m2 = Object.create(ke.prototype);
          return Lo(d2, m2, e, t4, r, s2, f3, c), d2;
        }
        n2(Ra, "CreateWritableStream");
        function Wo(e) {
          e._state = "writable", e._storedError = undefined, e._writer = undefined, e._writableStreamController = undefined, e._writeRequests = new D2, e._inFlightWriteRequest = undefined, e._closeRequest = undefined, e._inFlightCloseRequest = undefined, e._pendingAbortRequest = undefined, e._backpressure = false;
        }
        n2(Wo, "InitializeWritableStream");
        function Ge(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? false : e instanceof de;
        }
        n2(Ge, "IsWritableStream");
        function Ze(e) {
          return e._writer !== undefined;
        }
        n2(Ze, "IsWritableStreamLocked");
        function Zt(e, t4) {
          var r;
          if (e._state === "closed" || e._state === "errored")
            return T2(undefined);
          e._writableStreamController._abortReason = t4, (r = e._writableStreamController._abortController) === null || r === undefined || r.abort(t4);
          const s2 = e._state;
          if (s2 === "closed" || s2 === "errored")
            return T2(undefined);
          if (e._pendingAbortRequest !== undefined)
            return e._pendingAbortRequest._promise;
          let f3 = false;
          s2 === "erroring" && (f3 = true, t4 = undefined);
          const c = E2((d2, m2) => {
            e._pendingAbortRequest = { _promise: undefined, _resolve: d2, _reject: m2, _reason: t4, _wasAlreadyErroring: f3 };
          });
          return e._pendingAbortRequest._promise = c, f3 || Xr(e, t4), c;
        }
        n2(Zt, "WritableStreamAbort");
        function qo(e) {
          const t4 = e._state;
          if (t4 === "closed" || t4 === "errored")
            return b(new TypeError(`The stream (in ${t4} state) is not in the writable state and cannot be closed`));
          const r = E2((f3, c) => {
            const d2 = { _resolve: f3, _reject: c };
            e._closeRequest = d2;
          }), s2 = e._writer;
          return s2 !== undefined && e._backpressure && t4 === "writable" && ln(s2), Fa(e._writableStreamController), r;
        }
        n2(qo, "WritableStreamClose");
        function Ta(e) {
          return E2((r, s2) => {
            const f3 = { _resolve: r, _reject: s2 };
            e._writeRequests.push(f3);
          });
        }
        n2(Ta, "WritableStreamAddWriteRequest");
        function Jr(e, t4) {
          if (e._state === "writable") {
            Xr(e, t4);
            return;
          }
          en(e);
        }
        n2(Jr, "WritableStreamDealWithRejection");
        function Xr(e, t4) {
          const r = e._writableStreamController;
          e._state = "erroring", e._storedError = t4;
          const s2 = e._writer;
          s2 !== undefined && zo(s2, t4), !Aa(e) && r._started && en(e);
        }
        n2(Xr, "WritableStreamStartErroring");
        function en(e) {
          e._state = "errored", e._writableStreamController[Qn]();
          const t4 = e._storedError;
          if (e._writeRequests.forEach((f3) => {
            f3._reject(t4);
          }), e._writeRequests = new D2, e._pendingAbortRequest === undefined) {
            Kt(e);
            return;
          }
          const r = e._pendingAbortRequest;
          if (e._pendingAbortRequest = undefined, r._wasAlreadyErroring) {
            r._reject(t4), Kt(e);
            return;
          }
          const s2 = e._writableStreamController[Ft](r._reason);
          _(s2, () => (r._resolve(), Kt(e), null), (f3) => (r._reject(f3), Kt(e), null));
        }
        n2(en, "WritableStreamFinishErroring");
        function Ca(e) {
          e._inFlightWriteRequest._resolve(undefined), e._inFlightWriteRequest = undefined;
        }
        n2(Ca, "WritableStreamFinishInFlightWrite");
        function Pa(e, t4) {
          e._inFlightWriteRequest._reject(t4), e._inFlightWriteRequest = undefined, Jr(e, t4);
        }
        n2(Pa, "WritableStreamFinishInFlightWriteWithError");
        function va(e) {
          e._inFlightCloseRequest._resolve(undefined), e._inFlightCloseRequest = undefined, e._state === "erroring" && (e._storedError = undefined, e._pendingAbortRequest !== undefined && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = undefined)), e._state = "closed";
          const r = e._writer;
          r !== undefined && Uo(r);
        }
        n2(va, "WritableStreamFinishInFlightClose");
        function Ea(e, t4) {
          e._inFlightCloseRequest._reject(t4), e._inFlightCloseRequest = undefined, e._pendingAbortRequest !== undefined && (e._pendingAbortRequest._reject(t4), e._pendingAbortRequest = undefined), Jr(e, t4);
        }
        n2(Ea, "WritableStreamFinishInFlightCloseWithError");
        function he(e) {
          return !(e._closeRequest === undefined && e._inFlightCloseRequest === undefined);
        }
        n2(he, "WritableStreamCloseQueuedOrInFlight");
        function Aa(e) {
          return !(e._inFlightWriteRequest === undefined && e._inFlightCloseRequest === undefined);
        }
        n2(Aa, "WritableStreamHasOperationMarkedInFlight");
        function Ba(e) {
          e._inFlightCloseRequest = e._closeRequest, e._closeRequest = undefined;
        }
        n2(Ba, "WritableStreamMarkCloseRequestInFlight");
        function ka(e) {
          e._inFlightWriteRequest = e._writeRequests.shift();
        }
        n2(ka, "WritableStreamMarkFirstWriteRequestInFlight");
        function Kt(e) {
          e._closeRequest !== undefined && (e._closeRequest._reject(e._storedError), e._closeRequest = undefined);
          const t4 = e._writer;
          t4 !== undefined && an(t4, e._storedError);
        }
        n2(Kt, "WritableStreamRejectCloseAndClosedPromiseIfNeeded");
        function tn(e, t4) {
          const r = e._writer;
          r !== undefined && t4 !== e._backpressure && (t4 ? xa(r) : ln(r)), e._backpressure = t4;
        }
        n2(tn, "WritableStreamUpdateBackpressure");
        const Rn = class Rn2 {
          constructor(t4) {
            if (Se(t4, 1, "WritableStreamDefaultWriter"), Bo(t4, "First parameter"), Ze(t4))
              throw new TypeError("This stream has already been locked for exclusive writing by another writer");
            this._ownerWritableStream = t4, t4._writer = this;
            const r = t4._state;
            if (r === "writable")
              !he(t4) && t4._backpressure ? rr(this) : xo(this), tr(this);
            else if (r === "erroring")
              sn(this, t4._storedError), tr(this);
            else if (r === "closed")
              xo(this), Ma(this);
            else {
              const s2 = t4._storedError;
              sn(this, s2), Mo(this, s2);
            }
          }
          get closed() {
            return je(this) ? this._closedPromise : b(Le("closed"));
          }
          get desiredSize() {
            if (!je(this))
              throw Le("desiredSize");
            if (this._ownerWritableStream === undefined)
              throw Rt("desiredSize");
            return za(this);
          }
          get ready() {
            return je(this) ? this._readyPromise : b(Le("ready"));
          }
          abort(t4 = undefined) {
            return je(this) ? this._ownerWritableStream === undefined ? b(Rt("abort")) : Wa(this, t4) : b(Le("abort"));
          }
          close() {
            if (!je(this))
              return b(Le("close"));
            const t4 = this._ownerWritableStream;
            return t4 === undefined ? b(Rt("close")) : he(t4) ? b(new TypeError("Cannot close an already-closing stream")) : Oo(this);
          }
          releaseLock() {
            if (!je(this))
              throw Le("releaseLock");
            this._ownerWritableStream !== undefined && Io(this);
          }
          write(t4 = undefined) {
            return je(this) ? this._ownerWritableStream === undefined ? b(Rt("write to")) : Fo(this, t4) : b(Le("write"));
          }
        };
        n2(Rn, "WritableStreamDefaultWriter");
        let re = Rn;
        Object.defineProperties(re.prototype, { abort: { enumerable: true }, close: { enumerable: true }, releaseLock: { enumerable: true }, write: { enumerable: true }, closed: { enumerable: true }, desiredSize: { enumerable: true }, ready: { enumerable: true } }), h(re.prototype.abort, "abort"), h(re.prototype.close, "close"), h(re.prototype.releaseLock, "releaseLock"), h(re.prototype.write, "write"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(re.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultWriter", configurable: true });
        function je(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? false : e instanceof re;
        }
        n2(je, "IsWritableStreamDefaultWriter");
        function Wa(e, t4) {
          const r = e._ownerWritableStream;
          return Zt(r, t4);
        }
        n2(Wa, "WritableStreamDefaultWriterAbort");
        function Oo(e) {
          const t4 = e._ownerWritableStream;
          return qo(t4);
        }
        n2(Oo, "WritableStreamDefaultWriterClose");
        function qa(e) {
          const t4 = e._ownerWritableStream, r = t4._state;
          return he(t4) || r === "closed" ? T2(undefined) : r === "errored" ? b(t4._storedError) : Oo(e);
        }
        n2(qa, "WritableStreamDefaultWriterCloseWithErrorPropagation");
        function Oa(e, t4) {
          e._closedPromiseState === "pending" ? an(e, t4) : Ua(e, t4);
        }
        n2(Oa, "WritableStreamDefaultWriterEnsureClosedPromiseRejected");
        function zo(e, t4) {
          e._readyPromiseState === "pending" ? No(e, t4) : Na(e, t4);
        }
        n2(zo, "WritableStreamDefaultWriterEnsureReadyPromiseRejected");
        function za(e) {
          const t4 = e._ownerWritableStream, r = t4._state;
          return r === "errored" || r === "erroring" ? null : r === "closed" ? 0 : $o(t4._writableStreamController);
        }
        n2(za, "WritableStreamDefaultWriterGetDesiredSize");
        function Io(e) {
          const t4 = e._ownerWritableStream, r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
          zo(e, r), Oa(e, r), t4._writer = undefined, e._ownerWritableStream = undefined;
        }
        n2(Io, "WritableStreamDefaultWriterRelease");
        function Fo(e, t4) {
          const r = e._ownerWritableStream, s2 = r._writableStreamController, f3 = ja(s2, t4);
          if (r !== e._ownerWritableStream)
            return b(Rt("write to"));
          const c = r._state;
          if (c === "errored")
            return b(r._storedError);
          if (he(r) || c === "closed")
            return b(new TypeError("The stream is closing or closed and cannot be written to"));
          if (c === "erroring")
            return b(r._storedError);
          const d2 = Ta(r);
          return La(s2, t4, f3), d2;
        }
        n2(Fo, "WritableStreamDefaultWriterWrite");
        const jo = {}, Tn = class Tn2 {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get abortReason() {
            if (!rn(this))
              throw on2("abortReason");
            return this._abortReason;
          }
          get signal() {
            if (!rn(this))
              throw on2("signal");
            if (this._abortController === undefined)
              throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");
            return this._abortController.signal;
          }
          error(t4 = undefined) {
            if (!rn(this))
              throw on2("error");
            this._controlledWritableStream._state === "writable" && Do(this, t4);
          }
          [Ft](t4) {
            const r = this._abortAlgorithm(t4);
            return Jt(this), r;
          }
          [Qn]() {
            Be(this);
          }
        };
        n2(Tn, "WritableStreamDefaultController");
        let ke = Tn;
        Object.defineProperties(ke.prototype, { abortReason: { enumerable: true }, signal: { enumerable: true }, error: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ke.prototype, Symbol.toStringTag, { value: "WritableStreamDefaultController", configurable: true });
        function rn(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream") ? false : e instanceof ke;
        }
        n2(rn, "IsWritableStreamDefaultController");
        function Lo(e, t4, r, s2, f3, c, d2, m2) {
          t4._controlledWritableStream = e, e._writableStreamController = t4, t4._queue = undefined, t4._queueTotalSize = undefined, Be(t4), t4._abortReason = undefined, t4._abortController = wa(), t4._started = false, t4._strategySizeAlgorithm = m2, t4._strategyHWM = d2, t4._writeAlgorithm = s2, t4._closeAlgorithm = f3, t4._abortAlgorithm = c;
          const R3 = nn(t4);
          tn(e, R3);
          const y = r(), C3 = T2(y);
          _(C3, () => (t4._started = true, Xt(t4), null), (P2) => (t4._started = true, Jr(e, P2), null));
        }
        n2(Lo, "SetUpWritableStreamDefaultController");
        function Ia(e, t4, r, s2) {
          const f3 = Object.create(ke.prototype);
          let c, d2, m2, R3;
          t4.start !== undefined ? c = n2(() => t4.start(f3), "startAlgorithm") : c = n2(() => {}, "startAlgorithm"), t4.write !== undefined ? d2 = n2((y) => t4.write(y, f3), "writeAlgorithm") : d2 = n2(() => T2(undefined), "writeAlgorithm"), t4.close !== undefined ? m2 = n2(() => t4.close(), "closeAlgorithm") : m2 = n2(() => T2(undefined), "closeAlgorithm"), t4.abort !== undefined ? R3 = n2((y) => t4.abort(y), "abortAlgorithm") : R3 = n2(() => T2(undefined), "abortAlgorithm"), Lo(e, f3, c, d2, m2, R3, r, s2);
        }
        n2(Ia, "SetUpWritableStreamDefaultControllerFromUnderlyingSink");
        function Jt(e) {
          e._writeAlgorithm = undefined, e._closeAlgorithm = undefined, e._abortAlgorithm = undefined, e._strategySizeAlgorithm = undefined;
        }
        n2(Jt, "WritableStreamDefaultControllerClearAlgorithms");
        function Fa(e) {
          Nr(e, jo, 0), Xt(e);
        }
        n2(Fa, "WritableStreamDefaultControllerClose");
        function ja(e, t4) {
          try {
            return e._strategySizeAlgorithm(t4);
          } catch (r) {
            return wt(e, r), 1;
          }
        }
        n2(ja, "WritableStreamDefaultControllerGetChunkSize");
        function $o(e) {
          return e._strategyHWM - e._queueTotalSize;
        }
        n2($o, "WritableStreamDefaultControllerGetDesiredSize");
        function La(e, t4, r) {
          try {
            Nr(e, t4, r);
          } catch (f3) {
            wt(e, f3);
            return;
          }
          const s2 = e._controlledWritableStream;
          if (!he(s2) && s2._state === "writable") {
            const f3 = nn(e);
            tn(s2, f3);
          }
          Xt(e);
        }
        n2(La, "WritableStreamDefaultControllerWrite");
        function Xt(e) {
          const t4 = e._controlledWritableStream;
          if (!e._started || t4._inFlightWriteRequest !== undefined)
            return;
          if (t4._state === "erroring") {
            en(t4);
            return;
          }
          if (e._queue.length === 0)
            return;
          const s2 = Ji(e);
          s2 === jo ? $a(e) : Da(e, s2);
        }
        n2(Xt, "WritableStreamDefaultControllerAdvanceQueueIfNeeded");
        function wt(e, t4) {
          e._controlledWritableStream._state === "writable" && Do(e, t4);
        }
        n2(wt, "WritableStreamDefaultControllerErrorIfNeeded");
        function $a(e) {
          const t4 = e._controlledWritableStream;
          Ba(t4), xr(e);
          const r = e._closeAlgorithm();
          Jt(e), _(r, () => (va(t4), null), (s2) => (Ea(t4, s2), null));
        }
        n2($a, "WritableStreamDefaultControllerProcessClose");
        function Da(e, t4) {
          const r = e._controlledWritableStream;
          ka(r);
          const s2 = e._writeAlgorithm(t4);
          _(s2, () => {
            Ca(r);
            const f3 = r._state;
            if (xr(e), !he(r) && f3 === "writable") {
              const c = nn(e);
              tn(r, c);
            }
            return Xt(e), null;
          }, (f3) => (r._state === "writable" && Jt(e), Pa(r, f3), null));
        }
        n2(Da, "WritableStreamDefaultControllerProcessWrite");
        function nn(e) {
          return $o(e) <= 0;
        }
        n2(nn, "WritableStreamDefaultControllerGetBackpressure");
        function Do(e, t4) {
          const r = e._controlledWritableStream;
          Jt(e), Xr(r, t4);
        }
        n2(Do, "WritableStreamDefaultControllerError");
        function er(e) {
          return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`);
        }
        n2(er, "streamBrandCheckException$2");
        function on2(e) {
          return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`);
        }
        n2(on2, "defaultControllerBrandCheckException$2");
        function Le(e) {
          return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`);
        }
        n2(Le, "defaultWriterBrandCheckException");
        function Rt(e) {
          return new TypeError("Cannot " + e + " a stream using a released writer");
        }
        n2(Rt, "defaultWriterLockException");
        function tr(e) {
          e._closedPromise = E2((t4, r) => {
            e._closedPromise_resolve = t4, e._closedPromise_reject = r, e._closedPromiseState = "pending";
          });
        }
        n2(tr, "defaultWriterClosedPromiseInitialize");
        function Mo(e, t4) {
          tr(e), an(e, t4);
        }
        n2(Mo, "defaultWriterClosedPromiseInitializeAsRejected");
        function Ma(e) {
          tr(e), Uo(e);
        }
        n2(Ma, "defaultWriterClosedPromiseInitializeAsResolved");
        function an(e, t4) {
          e._closedPromise_reject !== undefined && (Q(e._closedPromise), e._closedPromise_reject(t4), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined, e._closedPromiseState = "rejected");
        }
        n2(an, "defaultWriterClosedPromiseReject");
        function Ua(e, t4) {
          Mo(e, t4);
        }
        n2(Ua, "defaultWriterClosedPromiseResetToRejected");
        function Uo(e) {
          e._closedPromise_resolve !== undefined && (e._closedPromise_resolve(undefined), e._closedPromise_resolve = undefined, e._closedPromise_reject = undefined, e._closedPromiseState = "resolved");
        }
        n2(Uo, "defaultWriterClosedPromiseResolve");
        function rr(e) {
          e._readyPromise = E2((t4, r) => {
            e._readyPromise_resolve = t4, e._readyPromise_reject = r;
          }), e._readyPromiseState = "pending";
        }
        n2(rr, "defaultWriterReadyPromiseInitialize");
        function sn(e, t4) {
          rr(e), No(e, t4);
        }
        n2(sn, "defaultWriterReadyPromiseInitializeAsRejected");
        function xo(e) {
          rr(e), ln(e);
        }
        n2(xo, "defaultWriterReadyPromiseInitializeAsResolved");
        function No(e, t4) {
          e._readyPromise_reject !== undefined && (Q(e._readyPromise), e._readyPromise_reject(t4), e._readyPromise_resolve = undefined, e._readyPromise_reject = undefined, e._readyPromiseState = "rejected");
        }
        n2(No, "defaultWriterReadyPromiseReject");
        function xa(e) {
          rr(e);
        }
        n2(xa, "defaultWriterReadyPromiseReset");
        function Na(e, t4) {
          sn(e, t4);
        }
        n2(Na, "defaultWriterReadyPromiseResetToRejected");
        function ln(e) {
          e._readyPromise_resolve !== undefined && (e._readyPromise_resolve(undefined), e._readyPromise_resolve = undefined, e._readyPromise_reject = undefined, e._readyPromiseState = "fulfilled");
        }
        n2(ln, "defaultWriterReadyPromiseResolve");
        function Ha() {
          if (typeof globalThis < "u")
            return globalThis;
          if (typeof self < "u")
            return self;
          if (typeof n < "u")
            return n;
        }
        n2(Ha, "getGlobals");
        const un = Ha();
        function Va(e) {
          if (!(typeof e == "function" || typeof e == "object") || e.name !== "DOMException")
            return false;
          try {
            return new e, true;
          } catch (e2) {
            return false;
          }
        }
        n2(Va, "isDOMExceptionConstructor");
        function Qa() {
          const e = un == null ? undefined : un.DOMException;
          return Va(e) ? e : undefined;
        }
        n2(Qa, "getFromGlobal");
        function Ya() {
          const e = n2(function(r, s2) {
            this.message = r || "", this.name = s2 || "Error", Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
          }, "DOMException");
          return h(e, "DOMException"), e.prototype = Object.create(Error.prototype), Object.defineProperty(e.prototype, "constructor", { value: e, writable: true, configurable: true }), e;
        }
        n2(Ya, "createPolyfill");
        const Ga = Qa() || Ya();
        function Ho(e, t4, r, s2, f3, c) {
          const d2 = Qe(e), m2 = ko(t4);
          e._disturbed = true;
          let R3 = false, y = T2(undefined);
          return E2((C3, P2) => {
            let B2;
            if (c !== undefined) {
              if (B2 = n2(() => {
                const S = c.reason !== undefined ? c.reason : new Ga("Aborted", "AbortError"), v2 = [];
                s2 || v2.push(() => t4._state === "writable" ? Zt(t4, S) : T2(undefined)), f3 || v2.push(() => e._state === "readable" ? ie(e, S) : T2(undefined)), N2(() => Promise.all(v2.map((k2) => k2())), true, S);
              }, "abortAlgorithm"), c.aborted) {
                B2();
                return;
              }
              c.addEventListener("abort", B2);
            }
            function ae() {
              return E2((S, v2) => {
                function k2(Y) {
                  Y ? S() : q(nt(), k2, v2);
                }
                n2(k2, "next"), k2(false);
              });
            }
            n2(ae, "pipeLoop");
            function nt() {
              return R3 ? T2(true) : q(m2._readyPromise, () => E2((S, v2) => {
                mt(d2, { _chunkSteps: (k2) => {
                  y = q(Fo(m2, k2), undefined, u2), S(false);
                }, _closeSteps: () => S(true), _errorSteps: v2 });
              }));
            }
            if (n2(nt, "pipeStep"), Te(e, d2._closedPromise, (S) => (s2 ? J(true, S) : N2(() => Zt(t4, S), true, S), null)), Te(t4, m2._closedPromise, (S) => (f3 ? J(true, S) : N2(() => ie(e, S), true, S), null)), x2(e, d2._closedPromise, () => (r ? J() : N2(() => qa(m2)), null)), he(t4) || t4._state === "closed") {
              const S = new TypeError("the destination writable stream closed before all data could be piped to it");
              f3 ? J(true, S) : N2(() => ie(e, S), true, S);
            }
            Q(ae());
            function Oe() {
              const S = y;
              return q(y, () => S !== y ? Oe() : undefined);
            }
            n2(Oe, "waitForWritesToFinish");
            function Te(S, v2, k2) {
              S._state === "errored" ? k2(S._storedError) : I2(v2, k2);
            }
            n2(Te, "isOrBecomesErrored");
            function x2(S, v2, k2) {
              S._state === "closed" ? k2() : V(v2, k2);
            }
            n2(x2, "isOrBecomesClosed");
            function N2(S, v2, k2) {
              if (R3)
                return;
              R3 = true, t4._state === "writable" && !he(t4) ? V(Oe(), Y) : Y();
              function Y() {
                return _(S(), () => Ce(v2, k2), (ot) => Ce(true, ot)), null;
              }
              n2(Y, "doTheRest");
            }
            n2(N2, "shutdownWithAction");
            function J(S, v2) {
              R3 || (R3 = true, t4._state === "writable" && !he(t4) ? V(Oe(), () => Ce(S, v2)) : Ce(S, v2));
            }
            n2(J, "shutdown");
            function Ce(S, v2) {
              return Io(m2), _e(d2), c !== undefined && c.removeEventListener("abort", B2), S ? P2(v2) : C3(undefined), null;
            }
            n2(Ce, "finalize");
          });
        }
        n2(Ho, "ReadableStreamPipeTo");
        const Cn = class Cn2 {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!nr(this))
              throw ir("desiredSize");
            return fn(this);
          }
          close() {
            if (!nr(this))
              throw ir("close");
            if (!Je(this))
              throw new TypeError("The stream is not in a state that permits close");
            $e(this);
          }
          enqueue(t4 = undefined) {
            if (!nr(this))
              throw ir("enqueue");
            if (!Je(this))
              throw new TypeError("The stream is not in a state that permits enqueue");
            return Ke(this, t4);
          }
          error(t4 = undefined) {
            if (!nr(this))
              throw ir("error");
            oe(this, t4);
          }
          [Ar](t4) {
            Be(this);
            const r = this._cancelAlgorithm(t4);
            return or(this), r;
          }
          [Br](t4) {
            const r = this._controlledReadableStream;
            if (this._queue.length > 0) {
              const s2 = xr(this);
              this._closeRequested && this._queue.length === 0 ? (or(this), Pt(r)) : Tt(this), t4._chunkSteps(s2);
            } else
              eo(r, t4), Tt(this);
          }
          [kr]() {}
        };
        n2(Cn, "ReadableStreamDefaultController");
        let ne = Cn;
        Object.defineProperties(ne.prototype, { close: { enumerable: true }, enqueue: { enumerable: true }, error: { enumerable: true }, desiredSize: { enumerable: true } }), h(ne.prototype.close, "close"), h(ne.prototype.enqueue, "enqueue"), h(ne.prototype.error, "error"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(ne.prototype, Symbol.toStringTag, { value: "ReadableStreamDefaultController", configurable: true });
        function nr(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream") ? false : e instanceof ne;
        }
        n2(nr, "IsReadableStreamDefaultController");
        function Tt(e) {
          if (!Vo(e))
            return;
          if (e._pulling) {
            e._pullAgain = true;
            return;
          }
          e._pulling = true;
          const r = e._pullAlgorithm();
          _(r, () => (e._pulling = false, e._pullAgain && (e._pullAgain = false, Tt(e)), null), (s2) => (oe(e, s2), null));
        }
        n2(Tt, "ReadableStreamDefaultControllerCallPullIfNeeded");
        function Vo(e) {
          const t4 = e._controlledReadableStream;
          return !Je(e) || !e._started ? false : !!(qe(t4) && Lt(t4) > 0 || fn(e) > 0);
        }
        n2(Vo, "ReadableStreamDefaultControllerShouldCallPull");
        function or(e) {
          e._pullAlgorithm = undefined, e._cancelAlgorithm = undefined, e._strategySizeAlgorithm = undefined;
        }
        n2(or, "ReadableStreamDefaultControllerClearAlgorithms");
        function $e(e) {
          if (!Je(e))
            return;
          const t4 = e._controlledReadableStream;
          e._closeRequested = true, e._queue.length === 0 && (or(e), Pt(t4));
        }
        n2($e, "ReadableStreamDefaultControllerClose");
        function Ke(e, t4) {
          if (!Je(e))
            return;
          const r = e._controlledReadableStream;
          if (qe(r) && Lt(r) > 0)
            Lr(r, t4, false);
          else {
            let s2;
            try {
              s2 = e._strategySizeAlgorithm(t4);
            } catch (f3) {
              throw oe(e, f3), f3;
            }
            try {
              Nr(e, t4, s2);
            } catch (f3) {
              throw oe(e, f3), f3;
            }
          }
          Tt(e);
        }
        n2(Ke, "ReadableStreamDefaultControllerEnqueue");
        function oe(e, t4) {
          const r = e._controlledReadableStream;
          r._state === "readable" && (Be(e), or(e), Zo(r, t4));
        }
        n2(oe, "ReadableStreamDefaultControllerError");
        function fn(e) {
          const t4 = e._controlledReadableStream._state;
          return t4 === "errored" ? null : t4 === "closed" ? 0 : e._strategyHWM - e._queueTotalSize;
        }
        n2(fn, "ReadableStreamDefaultControllerGetDesiredSize");
        function Za(e) {
          return !Vo(e);
        }
        n2(Za, "ReadableStreamDefaultControllerHasBackpressure");
        function Je(e) {
          const t4 = e._controlledReadableStream._state;
          return !e._closeRequested && t4 === "readable";
        }
        n2(Je, "ReadableStreamDefaultControllerCanCloseOrEnqueue");
        function Qo(e, t4, r, s2, f3, c, d2) {
          t4._controlledReadableStream = e, t4._queue = undefined, t4._queueTotalSize = undefined, Be(t4), t4._started = false, t4._closeRequested = false, t4._pullAgain = false, t4._pulling = false, t4._strategySizeAlgorithm = d2, t4._strategyHWM = c, t4._pullAlgorithm = s2, t4._cancelAlgorithm = f3, e._readableStreamController = t4;
          const m2 = r();
          _(T2(m2), () => (t4._started = true, Tt(t4), null), (R3) => (oe(t4, R3), null));
        }
        n2(Qo, "SetUpReadableStreamDefaultController");
        function Ka(e, t4, r, s2) {
          const f3 = Object.create(ne.prototype);
          let c, d2, m2;
          t4.start !== undefined ? c = n2(() => t4.start(f3), "startAlgorithm") : c = n2(() => {}, "startAlgorithm"), t4.pull !== undefined ? d2 = n2(() => t4.pull(f3), "pullAlgorithm") : d2 = n2(() => T2(undefined), "pullAlgorithm"), t4.cancel !== undefined ? m2 = n2((R3) => t4.cancel(R3), "cancelAlgorithm") : m2 = n2(() => T2(undefined), "cancelAlgorithm"), Qo(e, f3, c, d2, m2, r, s2);
        }
        n2(Ka, "SetUpReadableStreamDefaultControllerFromUnderlyingSource");
        function ir(e) {
          return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`);
        }
        n2(ir, "defaultControllerBrandCheckException$1");
        function Ja(e, t4) {
          return ze(e._readableStreamController) ? es(e) : Xa(e);
        }
        n2(Ja, "ReadableStreamTee");
        function Xa(e, t4) {
          const r = Qe(e);
          let s2 = false, f3 = false, c = false, d2 = false, m2, R3, y, C3, P2;
          const B2 = E2((x2) => {
            P2 = x2;
          });
          function ae() {
            return s2 ? (f3 = true, T2(undefined)) : (s2 = true, mt(r, { _chunkSteps: (N2) => {
              ge(() => {
                f3 = false;
                const J = N2, Ce = N2;
                c || Ke(y._readableStreamController, J), d2 || Ke(C3._readableStreamController, Ce), s2 = false, f3 && ae();
              });
            }, _closeSteps: () => {
              s2 = false, c || $e(y._readableStreamController), d2 || $e(C3._readableStreamController), (!c || !d2) && P2(undefined);
            }, _errorSteps: () => {
              s2 = false;
            } }), T2(undefined));
          }
          n2(ae, "pullAlgorithm");
          function nt(x2) {
            if (c = true, m2 = x2, d2) {
              const N2 = yt([m2, R3]), J = ie(e, N2);
              P2(J);
            }
            return B2;
          }
          n2(nt, "cancel1Algorithm");
          function Oe(x2) {
            if (d2 = true, R3 = x2, c) {
              const N2 = yt([m2, R3]), J = ie(e, N2);
              P2(J);
            }
            return B2;
          }
          n2(Oe, "cancel2Algorithm");
          function Te() {}
          return n2(Te, "startAlgorithm"), y = Ct(Te, ae, nt), C3 = Ct(Te, ae, Oe), I2(r._closedPromise, (x2) => (oe(y._readableStreamController, x2), oe(C3._readableStreamController, x2), (!c || !d2) && P2(undefined), null)), [y, C3];
        }
        n2(Xa, "ReadableStreamDefaultTee");
        function es(e) {
          let t4 = Qe(e), r = false, s2 = false, f3 = false, c = false, d2 = false, m2, R3, y, C3, P2;
          const B2 = E2((S) => {
            P2 = S;
          });
          function ae(S) {
            I2(S._closedPromise, (v2) => (S !== t4 || (K(y._readableStreamController, v2), K(C3._readableStreamController, v2), (!c || !d2) && P2(undefined)), null));
          }
          n2(ae, "forwardReaderError");
          function nt() {
            Fe(t4) && (_e(t4), t4 = Qe(e), ae(t4)), mt(t4, { _chunkSteps: (v2) => {
              ge(() => {
                s2 = false, f3 = false;
                const k2 = v2;
                let Y = v2;
                if (!c && !d2)
                  try {
                    Y = fo(v2);
                  } catch (ot) {
                    K(y._readableStreamController, ot), K(C3._readableStreamController, ot), P2(ie(e, ot));
                    return;
                  }
                c || Nt(y._readableStreamController, k2), d2 || Nt(C3._readableStreamController, Y), r = false, s2 ? Te() : f3 && x2();
              });
            }, _closeSteps: () => {
              r = false, c || gt(y._readableStreamController), d2 || gt(C3._readableStreamController), y._readableStreamController._pendingPullIntos.length > 0 && Ht(y._readableStreamController, 0), C3._readableStreamController._pendingPullIntos.length > 0 && Ht(C3._readableStreamController, 0), (!c || !d2) && P2(undefined);
            }, _errorSteps: () => {
              r = false;
            } });
          }
          n2(nt, "pullWithDefaultReader");
          function Oe(S, v2) {
            Ee(t4) && (_e(t4), t4 = Co(e), ae(t4));
            const k2 = v2 ? C3 : y, Y = v2 ? y : C3;
            Eo(t4, S, 1, { _chunkSteps: (it) => {
              ge(() => {
                s2 = false, f3 = false;
                const at = v2 ? d2 : c;
                if (v2 ? c : d2)
                  at || Vt(k2._readableStreamController, it);
                else {
                  let ui;
                  try {
                    ui = fo(it);
                  } catch (kn) {
                    K(k2._readableStreamController, kn), K(Y._readableStreamController, kn), P2(ie(e, kn));
                    return;
                  }
                  at || Vt(k2._readableStreamController, it), Nt(Y._readableStreamController, ui);
                }
                r = false, s2 ? Te() : f3 && x2();
              });
            }, _closeSteps: (it) => {
              r = false;
              const at = v2 ? d2 : c, fr = v2 ? c : d2;
              at || gt(k2._readableStreamController), fr || gt(Y._readableStreamController), it !== undefined && (at || Vt(k2._readableStreamController, it), !fr && Y._readableStreamController._pendingPullIntos.length > 0 && Ht(Y._readableStreamController, 0)), (!at || !fr) && P2(undefined);
            }, _errorSteps: () => {
              r = false;
            } });
          }
          n2(Oe, "pullWithBYOBReader");
          function Te() {
            if (r)
              return s2 = true, T2(undefined);
            r = true;
            const S = Gr(y._readableStreamController);
            return S === null ? nt() : Oe(S._view, false), T2(undefined);
          }
          n2(Te, "pull1Algorithm");
          function x2() {
            if (r)
              return f3 = true, T2(undefined);
            r = true;
            const S = Gr(C3._readableStreamController);
            return S === null ? nt() : Oe(S._view, true), T2(undefined);
          }
          n2(x2, "pull2Algorithm");
          function N2(S) {
            if (c = true, m2 = S, d2) {
              const v2 = yt([m2, R3]), k2 = ie(e, v2);
              P2(k2);
            }
            return B2;
          }
          n2(N2, "cancel1Algorithm");
          function J(S) {
            if (d2 = true, R3 = S, c) {
              const v2 = yt([m2, R3]), k2 = ie(e, v2);
              P2(k2);
            }
            return B2;
          }
          n2(J, "cancel2Algorithm");
          function Ce() {}
          return n2(Ce, "startAlgorithm"), y = Go(Ce, Te, N2), C3 = Go(Ce, x2, J), ae(t4), [y, C3];
        }
        n2(es, "ReadableByteStreamTee");
        function ts(e) {
          return l2(e) && typeof e.getReader < "u";
        }
        n2(ts, "isReadableStreamLike");
        function rs(e) {
          return ts(e) ? os(e.getReader()) : ns(e);
        }
        n2(rs, "ReadableStreamFrom");
        function ns(e) {
          let t4;
          const r = uo(e, "async"), s2 = u2;
          function f3() {
            let d2;
            try {
              d2 = Yi(r);
            } catch (R3) {
              return b(R3);
            }
            const m2 = T2(d2);
            return F3(m2, (R3) => {
              if (!l2(R3))
                throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");
              if (Gi(R3))
                $e(t4._readableStreamController);
              else {
                const C3 = Zi(R3);
                Ke(t4._readableStreamController, C3);
              }
            });
          }
          n2(f3, "pullAlgorithm");
          function c(d2) {
            const m2 = r.iterator;
            let R3;
            try {
              R3 = Mt(m2, "return");
            } catch (P2) {
              return b(P2);
            }
            if (R3 === undefined)
              return T2(undefined);
            let y;
            try {
              y = z(R3, m2, [d2]);
            } catch (P2) {
              return b(P2);
            }
            const C3 = T2(y);
            return F3(C3, (P2) => {
              if (!l2(P2))
                throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object");
            });
          }
          return n2(c, "cancelAlgorithm"), t4 = Ct(s2, f3, c, 0), t4;
        }
        n2(ns, "ReadableStreamFromIterable");
        function os(e) {
          let t4;
          const r = u2;
          function s2() {
            let c;
            try {
              c = e.read();
            } catch (d2) {
              return b(d2);
            }
            return F3(c, (d2) => {
              if (!l2(d2))
                throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");
              if (d2.done)
                $e(t4._readableStreamController);
              else {
                const m2 = d2.value;
                Ke(t4._readableStreamController, m2);
              }
            });
          }
          n2(s2, "pullAlgorithm");
          function f3(c) {
            try {
              return T2(e.cancel(c));
            } catch (d2) {
              return b(d2);
            }
          }
          return n2(f3, "cancelAlgorithm"), t4 = Ct(r, s2, f3, 0), t4;
        }
        n2(os, "ReadableStreamFromDefaultReader");
        function is(e, t4) {
          ue(e, t4);
          const r = e, s2 = r == null ? undefined : r.autoAllocateChunkSize, f3 = r == null ? undefined : r.cancel, c = r == null ? undefined : r.pull, d2 = r == null ? undefined : r.start, m2 = r == null ? undefined : r.type;
          return { autoAllocateChunkSize: s2 === undefined ? undefined : Fr(s2, `${t4} has member 'autoAllocateChunkSize' that`), cancel: f3 === undefined ? undefined : as(f3, r, `${t4} has member 'cancel' that`), pull: c === undefined ? undefined : ss(c, r, `${t4} has member 'pull' that`), start: d2 === undefined ? undefined : ls(d2, r, `${t4} has member 'start' that`), type: m2 === undefined ? undefined : us(m2, `${t4} has member 'type' that`) };
        }
        n2(is, "convertUnderlyingDefaultOrByteSource");
        function as(e, t4, r) {
          return Z2(e, r), (s2) => j(e, t4, [s2]);
        }
        n2(as, "convertUnderlyingSourceCancelCallback");
        function ss(e, t4, r) {
          return Z2(e, r), (s2) => j(e, t4, [s2]);
        }
        n2(ss, "convertUnderlyingSourcePullCallback");
        function ls(e, t4, r) {
          return Z2(e, r), (s2) => z(e, t4, [s2]);
        }
        n2(ls, "convertUnderlyingSourceStartCallback");
        function us(e, t4) {
          if (e = `${e}`, e !== "bytes")
            throw new TypeError(`${t4} '${e}' is not a valid enumeration value for ReadableStreamType`);
          return e;
        }
        n2(us, "convertReadableStreamType");
        function fs6(e, t4) {
          return ue(e, t4), { preventCancel: !!(e == null ? undefined : e.preventCancel) };
        }
        n2(fs6, "convertIteratorOptions");
        function Yo(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.preventAbort, s2 = e == null ? undefined : e.preventCancel, f3 = e == null ? undefined : e.preventClose, c = e == null ? undefined : e.signal;
          return c !== undefined && cs(c, `${t4} has member 'signal' that`), { preventAbort: !!r, preventCancel: !!s2, preventClose: !!f3, signal: c };
        }
        n2(Yo, "convertPipeOptions");
        function cs(e, t4) {
          if (!_a2(e))
            throw new TypeError(`${t4} is not an AbortSignal.`);
        }
        n2(cs, "assertAbortSignal");
        function ds(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.readable;
          zr(r, "readable", "ReadableWritablePair"), jr(r, `${t4} has member 'readable' that`);
          const s2 = e == null ? undefined : e.writable;
          return zr(s2, "writable", "ReadableWritablePair"), Bo(s2, `${t4} has member 'writable' that`), { readable: r, writable: s2 };
        }
        n2(ds, "convertReadableWritablePair");
        const Pn = class Pn2 {
          constructor(t4 = {}, r = {}) {
            t4 === undefined ? t4 = null : Jn(t4, "First parameter");
            const s2 = Gt(r, "Second parameter"), f3 = is(t4, "First parameter");
            if (cn(this), f3.type === "bytes") {
              if (s2.size !== undefined)
                throw new RangeError("The strategy for a byte stream cannot have a size function");
              const c = St(s2, 0);
              aa(this, f3, c);
            } else {
              const c = Yt(s2), d2 = St(s2, 1);
              Ka(this, f3, d2, c);
            }
          }
          get locked() {
            if (!We(this))
              throw De("locked");
            return qe(this);
          }
          cancel(t4 = undefined) {
            return We(this) ? qe(this) ? b(new TypeError("Cannot cancel a stream that already has a reader")) : ie(this, t4) : b(De("cancel"));
          }
          getReader(t4 = undefined) {
            if (!We(this))
              throw De("getReader");
            return la(t4, "First parameter").mode === undefined ? Qe(this) : Co(this);
          }
          pipeThrough(t4, r = {}) {
            if (!We(this))
              throw De("pipeThrough");
            Se(t4, 1, "pipeThrough");
            const s2 = ds(t4, "First parameter"), f3 = Yo(r, "Second parameter");
            if (qe(this))
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");
            if (Ze(s2.writable))
              throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");
            const c = Ho(this, s2.writable, f3.preventClose, f3.preventAbort, f3.preventCancel, f3.signal);
            return Q(c), s2.readable;
          }
          pipeTo(t4, r = {}) {
            if (!We(this))
              return b(De("pipeTo"));
            if (t4 === undefined)
              return b("Parameter 1 is required in 'pipeTo'.");
            if (!Ge(t4))
              return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
            let s2;
            try {
              s2 = Yo(r, "Second parameter");
            } catch (f3) {
              return b(f3);
            }
            return qe(this) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")) : Ze(t4) ? b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")) : Ho(this, t4, s2.preventClose, s2.preventAbort, s2.preventCancel, s2.signal);
          }
          tee() {
            if (!We(this))
              throw De("tee");
            const t4 = Ja(this);
            return yt(t4);
          }
          values(t4 = undefined) {
            if (!We(this))
              throw De("values");
            const r = fs6(t4, "First parameter");
            return Vi(this, r.preventCancel);
          }
          [Ur](t4) {
            return this.values(t4);
          }
          static from(t4) {
            return rs(t4);
          }
        };
        n2(Pn, "ReadableStream");
        let L = Pn;
        Object.defineProperties(L, { from: { enumerable: true } }), Object.defineProperties(L.prototype, { cancel: { enumerable: true }, getReader: { enumerable: true }, pipeThrough: { enumerable: true }, pipeTo: { enumerable: true }, tee: { enumerable: true }, values: { enumerable: true }, locked: { enumerable: true } }), h(L.from, "from"), h(L.prototype.cancel, "cancel"), h(L.prototype.getReader, "getReader"), h(L.prototype.pipeThrough, "pipeThrough"), h(L.prototype.pipeTo, "pipeTo"), h(L.prototype.tee, "tee"), h(L.prototype.values, "values"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(L.prototype, Symbol.toStringTag, { value: "ReadableStream", configurable: true }), Object.defineProperty(L.prototype, Ur, { value: L.prototype.values, writable: true, configurable: true });
        function Ct(e, t4, r, s2 = 1, f3 = () => 1) {
          const c = Object.create(L.prototype);
          cn(c);
          const d2 = Object.create(ne.prototype);
          return Qo(c, d2, e, t4, r, s2, f3), c;
        }
        n2(Ct, "CreateReadableStream");
        function Go(e, t4, r) {
          const s2 = Object.create(L.prototype);
          cn(s2);
          const f3 = Object.create(te.prototype);
          return To(s2, f3, e, t4, r, 0, undefined), s2;
        }
        n2(Go, "CreateReadableByteStream");
        function cn(e) {
          e._state = "readable", e._reader = undefined, e._storedError = undefined, e._disturbed = false;
        }
        n2(cn, "InitializeReadableStream");
        function We(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? false : e instanceof L;
        }
        n2(We, "IsReadableStream");
        function qe(e) {
          return e._reader !== undefined;
        }
        n2(qe, "IsReadableStreamLocked");
        function ie(e, t4) {
          if (e._disturbed = true, e._state === "closed")
            return T2(undefined);
          if (e._state === "errored")
            return b(e._storedError);
          Pt(e);
          const r = e._reader;
          if (r !== undefined && Fe(r)) {
            const f3 = r._readIntoRequests;
            r._readIntoRequests = new D2, f3.forEach((c) => {
              c._closeSteps(undefined);
            });
          }
          const s2 = e._readableStreamController[Ar](t4);
          return F3(s2, u2);
        }
        n2(ie, "ReadableStreamCancel");
        function Pt(e) {
          e._state = "closed";
          const t4 = e._reader;
          if (t4 !== undefined && (Zn(t4), Ee(t4))) {
            const r = t4._readRequests;
            t4._readRequests = new D2, r.forEach((s2) => {
              s2._closeSteps();
            });
          }
        }
        n2(Pt, "ReadableStreamClose");
        function Zo(e, t4) {
          e._state = "errored", e._storedError = t4;
          const r = e._reader;
          r !== undefined && (Or(r, t4), Ee(r) ? ro(r, t4) : Ao(r, t4));
        }
        n2(Zo, "ReadableStreamError");
        function De(e) {
          return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`);
        }
        n2(De, "streamBrandCheckException$1");
        function Ko(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.highWaterMark;
          return zr(r, "highWaterMark", "QueuingStrategyInit"), { highWaterMark: Ir(r) };
        }
        n2(Ko, "convertQueuingStrategyInit");
        const Jo = n2((e) => e.byteLength, "byteLengthSizeFunction");
        h(Jo, "size");
        const vn = class vn2 {
          constructor(t4) {
            Se(t4, 1, "ByteLengthQueuingStrategy"), t4 = Ko(t4, "First parameter"), this._byteLengthQueuingStrategyHighWaterMark = t4.highWaterMark;
          }
          get highWaterMark() {
            if (!ei(this))
              throw Xo("highWaterMark");
            return this._byteLengthQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!ei(this))
              throw Xo("size");
            return Jo;
          }
        };
        n2(vn, "ByteLengthQueuingStrategy");
        let Xe = vn;
        Object.defineProperties(Xe.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Xe.prototype, Symbol.toStringTag, { value: "ByteLengthQueuingStrategy", configurable: true });
        function Xo(e) {
          return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`);
        }
        n2(Xo, "byteLengthBrandCheckException");
        function ei(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_byteLengthQueuingStrategyHighWaterMark") ? false : e instanceof Xe;
        }
        n2(ei, "IsByteLengthQueuingStrategy");
        const ti = n2(() => 1, "countSizeFunction");
        h(ti, "size");
        const En = class En2 {
          constructor(t4) {
            Se(t4, 1, "CountQueuingStrategy"), t4 = Ko(t4, "First parameter"), this._countQueuingStrategyHighWaterMark = t4.highWaterMark;
          }
          get highWaterMark() {
            if (!ni(this))
              throw ri("highWaterMark");
            return this._countQueuingStrategyHighWaterMark;
          }
          get size() {
            if (!ni(this))
              throw ri("size");
            return ti;
          }
        };
        n2(En, "CountQueuingStrategy");
        let et = En;
        Object.defineProperties(et.prototype, { highWaterMark: { enumerable: true }, size: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(et.prototype, Symbol.toStringTag, { value: "CountQueuingStrategy", configurable: true });
        function ri(e) {
          return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`);
        }
        n2(ri, "countBrandCheckException");
        function ni(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_countQueuingStrategyHighWaterMark") ? false : e instanceof et;
        }
        n2(ni, "IsCountQueuingStrategy");
        function hs(e, t4) {
          ue(e, t4);
          const r = e == null ? undefined : e.cancel, s2 = e == null ? undefined : e.flush, f3 = e == null ? undefined : e.readableType, c = e == null ? undefined : e.start, d2 = e == null ? undefined : e.transform, m2 = e == null ? undefined : e.writableType;
          return { cancel: r === undefined ? undefined : ys(r, e, `${t4} has member 'cancel' that`), flush: s2 === undefined ? undefined : ps2(s2, e, `${t4} has member 'flush' that`), readableType: f3, start: c === undefined ? undefined : bs(c, e, `${t4} has member 'start' that`), transform: d2 === undefined ? undefined : ms(d2, e, `${t4} has member 'transform' that`), writableType: m2 };
        }
        n2(hs, "convertTransformer");
        function ps2(e, t4, r) {
          return Z2(e, r), (s2) => j(e, t4, [s2]);
        }
        n2(ps2, "convertTransformerFlushCallback");
        function bs(e, t4, r) {
          return Z2(e, r), (s2) => z(e, t4, [s2]);
        }
        n2(bs, "convertTransformerStartCallback");
        function ms(e, t4, r) {
          return Z2(e, r), (s2, f3) => j(e, t4, [s2, f3]);
        }
        n2(ms, "convertTransformerTransformCallback");
        function ys(e, t4, r) {
          return Z2(e, r), (s2) => j(e, t4, [s2]);
        }
        n2(ys, "convertTransformerCancelCallback");
        const An = class An2 {
          constructor(t4 = {}, r = {}, s2 = {}) {
            t4 === undefined && (t4 = null);
            const f3 = Gt(r, "Second parameter"), c = Gt(s2, "Third parameter"), d2 = hs(t4, "First parameter");
            if (d2.readableType !== undefined)
              throw new RangeError("Invalid readableType specified");
            if (d2.writableType !== undefined)
              throw new RangeError("Invalid writableType specified");
            const m2 = St(c, 0), R3 = Yt(c), y = St(f3, 1), C3 = Yt(f3);
            let P2;
            const B2 = E2((ae) => {
              P2 = ae;
            });
            gs(this, B2, y, C3, m2, R3), Ss(this, d2), d2.start !== undefined ? P2(d2.start(this._transformStreamController)) : P2(undefined);
          }
          get readable() {
            if (!oi(this))
              throw li("readable");
            return this._readable;
          }
          get writable() {
            if (!oi(this))
              throw li("writable");
            return this._writable;
          }
        };
        n2(An, "TransformStream");
        let tt = An;
        Object.defineProperties(tt.prototype, { readable: { enumerable: true }, writable: { enumerable: true } }), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(tt.prototype, Symbol.toStringTag, { value: "TransformStream", configurable: true });
        function gs(e, t4, r, s2, f3, c) {
          function d2() {
            return t4;
          }
          n2(d2, "startAlgorithm");
          function m2(B2) {
            return Ts(e, B2);
          }
          n2(m2, "writeAlgorithm");
          function R3(B2) {
            return Cs(e, B2);
          }
          n2(R3, "abortAlgorithm");
          function y() {
            return Ps(e);
          }
          n2(y, "closeAlgorithm"), e._writable = Ra(d2, m2, y, R3, r, s2);
          function C3() {
            return vs(e);
          }
          n2(C3, "pullAlgorithm");
          function P2(B2) {
            return Es(e, B2);
          }
          n2(P2, "cancelAlgorithm"), e._readable = Ct(d2, C3, P2, f3, c), e._backpressure = undefined, e._backpressureChangePromise = undefined, e._backpressureChangePromise_resolve = undefined, ar(e, true), e._transformStreamController = undefined;
        }
        n2(gs, "InitializeTransformStream");
        function oi(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? false : e instanceof tt;
        }
        n2(oi, "IsTransformStream");
        function ii(e, t4) {
          oe(e._readable._readableStreamController, t4), dn(e, t4);
        }
        n2(ii, "TransformStreamError");
        function dn(e, t4) {
          lr(e._transformStreamController), wt(e._writable._writableStreamController, t4), hn(e);
        }
        n2(dn, "TransformStreamErrorWritableAndUnblockWrite");
        function hn(e) {
          e._backpressure && ar(e, false);
        }
        n2(hn, "TransformStreamUnblockWrite");
        function ar(e, t4) {
          e._backpressureChangePromise !== undefined && e._backpressureChangePromise_resolve(), e._backpressureChangePromise = E2((r) => {
            e._backpressureChangePromise_resolve = r;
          }), e._backpressure = t4;
        }
        n2(ar, "TransformStreamSetBackpressure");
        const Bn = class Bn2 {
          constructor() {
            throw new TypeError("Illegal constructor");
          }
          get desiredSize() {
            if (!sr(this))
              throw ur("desiredSize");
            const t4 = this._controlledTransformStream._readable._readableStreamController;
            return fn(t4);
          }
          enqueue(t4 = undefined) {
            if (!sr(this))
              throw ur("enqueue");
            ai(this, t4);
          }
          error(t4 = undefined) {
            if (!sr(this))
              throw ur("error");
            ws(this, t4);
          }
          terminate() {
            if (!sr(this))
              throw ur("terminate");
            Rs(this);
          }
        };
        n2(Bn, "TransformStreamDefaultController");
        let pe = Bn;
        Object.defineProperties(pe.prototype, { enqueue: { enumerable: true }, error: { enumerable: true }, terminate: { enumerable: true }, desiredSize: { enumerable: true } }), h(pe.prototype.enqueue, "enqueue"), h(pe.prototype.error, "error"), h(pe.prototype.terminate, "terminate"), typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pe.prototype, Symbol.toStringTag, { value: "TransformStreamDefaultController", configurable: true });
        function sr(e) {
          return !l2(e) || !Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? false : e instanceof pe;
        }
        n2(sr, "IsTransformStreamDefaultController");
        function _s(e, t4, r, s2, f3) {
          t4._controlledTransformStream = e, e._transformStreamController = t4, t4._transformAlgorithm = r, t4._flushAlgorithm = s2, t4._cancelAlgorithm = f3, t4._finishPromise = undefined, t4._finishPromise_resolve = undefined, t4._finishPromise_reject = undefined;
        }
        n2(_s, "SetUpTransformStreamDefaultController");
        function Ss(e, t4) {
          const r = Object.create(pe.prototype);
          let s2, f3, c;
          t4.transform !== undefined ? s2 = n2((d2) => t4.transform(d2, r), "transformAlgorithm") : s2 = n2((d2) => {
            try {
              return ai(r, d2), T2(undefined);
            } catch (m2) {
              return b(m2);
            }
          }, "transformAlgorithm"), t4.flush !== undefined ? f3 = n2(() => t4.flush(r), "flushAlgorithm") : f3 = n2(() => T2(undefined), "flushAlgorithm"), t4.cancel !== undefined ? c = n2((d2) => t4.cancel(d2), "cancelAlgorithm") : c = n2(() => T2(undefined), "cancelAlgorithm"), _s(e, r, s2, f3, c);
        }
        n2(Ss, "SetUpTransformStreamDefaultControllerFromTransformer");
        function lr(e) {
          e._transformAlgorithm = undefined, e._flushAlgorithm = undefined, e._cancelAlgorithm = undefined;
        }
        n2(lr, "TransformStreamDefaultControllerClearAlgorithms");
        function ai(e, t4) {
          const r = e._controlledTransformStream, s2 = r._readable._readableStreamController;
          if (!Je(s2))
            throw new TypeError("Readable side is not in a state that permits enqueue");
          try {
            Ke(s2, t4);
          } catch (c) {
            throw dn(r, c), r._readable._storedError;
          }
          Za(s2) !== r._backpressure && ar(r, true);
        }
        n2(ai, "TransformStreamDefaultControllerEnqueue");
        function ws(e, t4) {
          ii(e._controlledTransformStream, t4);
        }
        n2(ws, "TransformStreamDefaultControllerError");
        function si(e, t4) {
          const r = e._transformAlgorithm(t4);
          return F3(r, undefined, (s2) => {
            throw ii(e._controlledTransformStream, s2), s2;
          });
        }
        n2(si, "TransformStreamDefaultControllerPerformTransform");
        function Rs(e) {
          const t4 = e._controlledTransformStream, r = t4._readable._readableStreamController;
          $e(r);
          const s2 = new TypeError("TransformStream terminated");
          dn(t4, s2);
        }
        n2(Rs, "TransformStreamDefaultControllerTerminate");
        function Ts(e, t4) {
          const r = e._transformStreamController;
          if (e._backpressure) {
            const s2 = e._backpressureChangePromise;
            return F3(s2, () => {
              const f3 = e._writable;
              if (f3._state === "erroring")
                throw f3._storedError;
              return si(r, t4);
            });
          }
          return si(r, t4);
        }
        n2(Ts, "TransformStreamDefaultSinkWriteAlgorithm");
        function Cs(e, t4) {
          const r = e._transformStreamController;
          if (r._finishPromise !== undefined)
            return r._finishPromise;
          const s2 = e._readable;
          r._finishPromise = E2((c, d2) => {
            r._finishPromise_resolve = c, r._finishPromise_reject = d2;
          });
          const f3 = r._cancelAlgorithm(t4);
          return lr(r), _(f3, () => (s2._state === "errored" ? rt(r, s2._storedError) : (oe(s2._readableStreamController, t4), pn(r)), null), (c) => (oe(s2._readableStreamController, c), rt(r, c), null)), r._finishPromise;
        }
        n2(Cs, "TransformStreamDefaultSinkAbortAlgorithm");
        function Ps(e) {
          const t4 = e._transformStreamController;
          if (t4._finishPromise !== undefined)
            return t4._finishPromise;
          const r = e._readable;
          t4._finishPromise = E2((f3, c) => {
            t4._finishPromise_resolve = f3, t4._finishPromise_reject = c;
          });
          const s2 = t4._flushAlgorithm();
          return lr(t4), _(s2, () => (r._state === "errored" ? rt(t4, r._storedError) : ($e(r._readableStreamController), pn(t4)), null), (f3) => (oe(r._readableStreamController, f3), rt(t4, f3), null)), t4._finishPromise;
        }
        n2(Ps, "TransformStreamDefaultSinkCloseAlgorithm");
        function vs(e) {
          return ar(e, false), e._backpressureChangePromise;
        }
        n2(vs, "TransformStreamDefaultSourcePullAlgorithm");
        function Es(e, t4) {
          const r = e._transformStreamController;
          if (r._finishPromise !== undefined)
            return r._finishPromise;
          const s2 = e._writable;
          r._finishPromise = E2((c, d2) => {
            r._finishPromise_resolve = c, r._finishPromise_reject = d2;
          });
          const f3 = r._cancelAlgorithm(t4);
          return lr(r), _(f3, () => (s2._state === "errored" ? rt(r, s2._storedError) : (wt(s2._writableStreamController, t4), hn(e), pn(r)), null), (c) => (wt(s2._writableStreamController, c), hn(e), rt(r, c), null)), r._finishPromise;
        }
        n2(Es, "TransformStreamDefaultSourceCancelAlgorithm");
        function ur(e) {
          return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`);
        }
        n2(ur, "defaultControllerBrandCheckException");
        function pn(e) {
          e._finishPromise_resolve !== undefined && (e._finishPromise_resolve(), e._finishPromise_resolve = undefined, e._finishPromise_reject = undefined);
        }
        n2(pn, "defaultControllerFinishPromiseResolve");
        function rt(e, t4) {
          e._finishPromise_reject !== undefined && (Q(e._finishPromise), e._finishPromise_reject(t4), e._finishPromise_resolve = undefined, e._finishPromise_reject = undefined);
        }
        n2(rt, "defaultControllerFinishPromiseReject");
        function li(e) {
          return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`);
        }
        n2(li, "streamBrandCheckException"), a2.ByteLengthQueuingStrategy = Xe, a2.CountQueuingStrategy = et, a2.ReadableByteStreamController = te, a2.ReadableStream = L, a2.ReadableStreamBYOBReader = ce, a2.ReadableStreamBYOBRequest = Re, a2.ReadableStreamDefaultController = ne, a2.ReadableStreamDefaultReader = fe, a2.TransformStream = tt, a2.TransformStreamDefaultController = pe, a2.WritableStream = de, a2.WritableStreamDefaultController = ke, a2.WritableStreamDefaultWriter = re;
      });
    }(pr, pr.exports)), pr.exports;
  }
  function qn(i, o3 = true) {
    return __asyncGenerator(this, null, function* () {
      for (const a2 of i)
        if ("stream" in a2)
          yield* __yieldStar(a2.stream());
        else if (ArrayBuffer.isView(a2))
          if (o3) {
            let u2 = a2.byteOffset;
            const l2 = a2.byteOffset + a2.byteLength;
            for (;u2 !== l2; ) {
              const p = Math.min(l2 - u2, hi), h = a2.buffer.slice(u2, u2 + p);
              u2 += h.byteLength, yield new Uint8Array(h);
            }
          } else
            yield a2;
        else {
          let u2 = 0, l2 = a2;
          for (;u2 !== l2.size; ) {
            const h = yield new __await(l2.slice(u2, Math.min(l2.size, u2 + hi)).arrayBuffer());
            u2 += h.byteLength, yield new Uint8Array(h);
          }
        }
    });
  }
  function Vs(i, o3 = ut) {
    var a2 = `${bi()}${bi()}`.replace(/\./g, "").slice(-28).padStart(32, "-"), u2 = [], l2 = `--${a2}\r
Content-Disposition: form-data; name="`;
    return i.forEach((p, h) => typeof p == "string" ? u2.push(l2 + zn(h) + `"\r
\r
${p.replace(new RegExp("\\r(?!\\n)|(?<!\\r)\\n", "g"), `\r
`)}\r
`) : u2.push(l2 + zn(h) + `"; filename="${zn(p.name, 1)}"\r
Content-Type: ${p.type || "application/octet-stream"}\r
\r
`, p, `\r
`)), u2.push(`--${a2}--`), new o3(u2, { type: "multipart/form-data; boundary=" + a2 });
  }
  function In(i) {
    return __async(this, null, function* () {
      if (i[H].disturbed)
        throw new TypeError(`body used already for: ${i.url}`);
      if (i[H].disturbed = true, i[H].error)
        throw i[H].error;
      const { body: o3 } = i;
      if (o3 === null)
        return import_node_buffer2.Buffer.alloc(0);
      if (!(o3 instanceof import_node_stream3.default))
        return import_node_buffer2.Buffer.alloc(0);
      const a2 = [];
      let u2 = 0;
      try {
        try {
          for (var iter = __forAwait(o3), more, temp, error;more = !(temp = yield iter.next()).done; more = false) {
            const l2 = temp.value;
            if (i.size > 0 && u2 + l2.length > i.size) {
              const p = new G(`content size at ${i.url} over limit: ${i.size}`, "max-size");
              throw o3.destroy(p), p;
            }
            u2 += l2.length, a2.push(l2);
          }
        } catch (temp2) {
          error = [temp2];
        } finally {
          try {
            more && (temp = iter.return) && (yield temp.call(iter));
          } finally {
            if (error)
              throw error[0];
          }
        }
      } catch (l2) {
        throw l2 instanceof ft ? l2 : new G(`Invalid response body while trying to fetch ${i.url}: ${l2.message}`, "system", l2);
      }
      if (o3.readableEnded === true || o3._readableState.ended === true)
        try {
          return a2.every((l2) => typeof l2 == "string") ? import_node_buffer2.Buffer.from(a2.join("")) : import_node_buffer2.Buffer.concat(a2, u2);
        } catch (l2) {
          throw new G(`Could not create Buffer from response body for ${i.url}: ${l2.message}`, "system", l2);
        }
      else
        throw new G(`Premature close of server response while trying to fetch ${i.url}`);
    });
  }
  function el(i = []) {
    return new ye(i.reduce((o3, a2, u2, l2) => (u2 % 2 === 0 && o3.push(l2.slice(u2, u2 + 2)), o3), []).filter(([o3, a2]) => {
      try {
        return gr(o3), jn(o3, String(a2)), true;
      } catch (e) {
        return false;
      }
    }));
  }
  function _i(i, o3 = false) {
    return i == null || (i = new URL(i), /^(about|blob|data):$/.test(i.protocol)) ? "no-referrer" : (i.username = "", i.password = "", i.hash = "", o3 && (i.pathname = "", i.search = ""), i);
  }
  function ol(i) {
    if (!Si.has(i))
      throw new TypeError(`Invalid referrerPolicy: ${i}`);
    return i;
  }
  function il(i) {
    if (/^(http|ws)s:$/.test(i.protocol))
      return true;
    const o3 = i.host.replace(/(^\[)|(]$)/g, ""), a2 = (0, import_node_net2.isIP)(o3);
    return a2 === 4 && /^127\./.test(o3) || a2 === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o3) ? true : i.host === "localhost" || i.host.endsWith(".localhost") ? false : i.protocol === "file:";
  }
  function ct(i) {
    return /^about:(blank|srcdoc)$/.test(i) || i.protocol === "data:" || /^(blob|filesystem):$/.test(i.protocol) ? true : il(i);
  }
  function al(i, { referrerURLCallback: o3, referrerOriginCallback: a2 } = {}) {
    if (i.referrer === "no-referrer" || i.referrerPolicy === "")
      return null;
    const u2 = i.referrerPolicy;
    if (i.referrer === "about:client")
      return "no-referrer";
    const l2 = i.referrer;
    let p = _i(l2), h = _i(l2, true);
    p.toString().length > 4096 && (p = h), o3 && (p = o3(p)), a2 && (h = a2(h));
    const g3 = new URL(i.url);
    switch (u2) {
      case "no-referrer":
        return "no-referrer";
      case "origin":
        return h;
      case "unsafe-url":
        return p;
      case "strict-origin":
        return ct(p) && !ct(g3) ? "no-referrer" : h.toString();
      case "strict-origin-when-cross-origin":
        return p.origin === g3.origin ? p : ct(p) && !ct(g3) ? "no-referrer" : h;
      case "same-origin":
        return p.origin === g3.origin ? p : "no-referrer";
      case "origin-when-cross-origin":
        return p.origin === g3.origin ? p : h;
      case "no-referrer-when-downgrade":
        return ct(p) && !ct(g3) ? "no-referrer" : p;
      default:
        throw new TypeError(`Invalid referrerPolicy: ${u2}`);
    }
  }
  function sl(i) {
    const o3 = (i.get("referrer-policy") || "").split(/[,\s]+/);
    let a2 = "";
    for (const u2 of o3)
      u2 && Si.has(u2) && (a2 = u2);
    return a2;
  }
  function Ti(i, o3) {
    return __async(this, null, function* () {
      return new Promise((a2, u2) => {
        const l2 = new dt(i, o3), { parsedURL: p, options: h } = ul(l2);
        if (!ml.has(p.protocol))
          throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${p.protocol.replace(/:$/, "")}" is not supported.`);
        if (p.protocol === "data:") {
          const _ = js(l2.url), V = new le(_, { headers: { "Content-Type": _.typeFull } });
          a2(V);
          return;
        }
        const g3 = (p.protocol === "https:" ? import_node_https2.default : import_node_http2.default).request, { signal: A2 } = l2;
        let w2 = null;
        const E2 = n2(() => {
          const _ = new _r("The operation was aborted.");
          u2(_), l2.body && l2.body instanceof import_node_stream3.default.Readable && l2.body.destroy(_), !(!w2 || !w2.body) && w2.body.emit("error", _);
        }, "abort");
        if (A2 && A2.aborted) {
          E2();
          return;
        }
        const T2 = n2(() => {
          E2(), q();
        }, "abortAndFinalize"), b = g3(p.toString(), h);
        A2 && A2.addEventListener("abort", T2);
        const q = n2(() => {
          b.abort(), A2 && A2.removeEventListener("abort", T2);
        }, "finalize");
        b.on("error", (_) => {
          u2(new G(`request to ${l2.url} failed, reason: ${_.message}`, "system", _)), q();
        }), yl(b, (_) => {
          w2 && w2.body && w2.body.destroy(_);
        }), process.version < "v14" && b.on("socket", (_) => {
          let V;
          _.prependListener("end", () => {
            V = _._eventsCount;
          }), _.prependListener("close", (I2) => {
            if (w2 && V < _._eventsCount && !I2) {
              const F3 = new Error("Premature close");
              F3.code = "ERR_STREAM_PREMATURE_CLOSE", w2.body.emit("error", F3);
            }
          });
        }), b.on("response", (_) => {
          b.setTimeout(0);
          const V = el(_.rawHeaders);
          if (Ln(_.statusCode)) {
            const z = V.get("Location");
            let j = null;
            try {
              j = z === null ? null : new URL(z, l2.url);
            } catch (e) {
              if (l2.redirect !== "manual") {
                u2(new G(`uri requested responds with an invalid redirect URL: ${z}`, "invalid-redirect")), q();
                return;
              }
            }
            switch (l2.redirect) {
              case "error":
                u2(new G(`uri requested responds with a redirect, redirect mode is set to error: ${l2.url}`, "no-redirect")), q();
                return;
              case "manual":
                break;
              case "follow": {
                if (j === null)
                  break;
                if (l2.counter >= l2.follow) {
                  u2(new G(`maximum redirect reached at: ${l2.url}`, "max-redirect")), q();
                  return;
                }
                const U = { headers: new ye(l2.headers), follow: l2.follow, counter: l2.counter + 1, agent: l2.agent, compress: l2.compress, method: l2.method, body: Fn(l2), signal: l2.signal, size: l2.size, referrer: l2.referrer, referrerPolicy: l2.referrerPolicy };
                if (!Ys(l2.url, j) || !Gs(l2.url, j))
                  for (const Ft of ["authorization", "www-authenticate", "cookie", "cookie2"])
                    U.headers.delete(Ft);
                if (_.statusCode !== 303 && l2.body && o3.body instanceof import_node_stream3.default.Readable) {
                  u2(new G("Cannot follow redirect with body being a readable stream", "unsupported-redirect")), q();
                  return;
                }
                (_.statusCode === 303 || (_.statusCode === 301 || _.statusCode === 302) && l2.method === "POST") && (U.method = "GET", U.body = undefined, U.headers.delete("content-length"));
                const D2 = sl(V);
                D2 && (U.referrerPolicy = D2), a2(Ti(new dt(j, U))), q();
                return;
              }
              default:
                return u2(new TypeError(`Redirect option '${l2.redirect}' is not a valid value of RequestRedirect`));
            }
          }
          A2 && _.once("end", () => {
            A2.removeEventListener("abort", T2);
          });
          let I2 = (0, import_node_stream3.pipeline)(_, new import_node_stream3.PassThrough, (z) => {
            z && u2(z);
          });
          process.version < "v12.10" && _.on("aborted", T2);
          const F3 = { url: l2.url, status: _.statusCode, statusText: _.statusMessage, headers: V, size: l2.size, counter: l2.counter, highWaterMark: l2.highWaterMark }, Q = V.get("Content-Encoding");
          if (!l2.compress || l2.method === "HEAD" || Q === null || _.statusCode === 204 || _.statusCode === 304) {
            w2 = new le(I2, F3), a2(w2);
            return;
          }
          const ge = { flush: import_node_zlib2.default.Z_SYNC_FLUSH, finishFlush: import_node_zlib2.default.Z_SYNC_FLUSH };
          if (Q === "gzip" || Q === "x-gzip") {
            I2 = (0, import_node_stream3.pipeline)(I2, import_node_zlib2.default.createGunzip(ge), (z) => {
              z && u2(z);
            }), w2 = new le(I2, F3), a2(w2);
            return;
          }
          if (Q === "deflate" || Q === "x-deflate") {
            const z = (0, import_node_stream3.pipeline)(_, new import_node_stream3.PassThrough, (j) => {
              j && u2(j);
            });
            z.once("data", (j) => {
              (j[0] & 15) === 8 ? I2 = (0, import_node_stream3.pipeline)(I2, import_node_zlib2.default.createInflate(), (U) => {
                U && u2(U);
              }) : I2 = (0, import_node_stream3.pipeline)(I2, import_node_zlib2.default.createInflateRaw(), (U) => {
                U && u2(U);
              }), w2 = new le(I2, F3), a2(w2);
            }), z.once("end", () => {
              w2 || (w2 = new le(I2, F3), a2(w2));
            });
            return;
          }
          if (Q === "br") {
            I2 = (0, import_node_stream3.pipeline)(I2, import_node_zlib2.default.createBrotliDecompress(), (z) => {
              z && u2(z);
            }), w2 = new le(I2, F3), a2(w2);
            return;
          }
          w2 = new le(I2, F3), a2(w2);
        }), Xs(b, l2).catch(u2);
      });
    });
  }
  function yl(i, o3) {
    const a2 = import_node_buffer2.Buffer.from(`0\r
\r
`);
    let u2 = false, l2 = false, p;
    i.on("response", (h) => {
      const { headers: g3 } = h;
      u2 = g3["transfer-encoding"] === "chunked" && !g3["content-length"];
    }), i.on("socket", (h) => {
      const g3 = n2(() => {
        if (u2 && !l2) {
          const w2 = new Error("Premature close");
          w2.code = "ERR_STREAM_PREMATURE_CLOSE", o3(w2);
        }
      }, "onSocketClose"), A2 = n2((w2) => {
        l2 = import_node_buffer2.Buffer.compare(w2.slice(-5), a2) === 0, !l2 && p && (l2 = import_node_buffer2.Buffer.compare(p.slice(-3), a2.slice(0, 3)) === 0 && import_node_buffer2.Buffer.compare(w2.slice(-2), a2.slice(3)) === 0), p = w2;
      }, "onData");
      h.prependListener("close", g3), h.on("data", A2), i.on("close", () => {
        h.removeListener("close", g3), h.removeListener("data", A2);
      });
    });
  }
  function W(i) {
    const o3 = Ci.get(i);
    return console.assert(o3 != null, "'this' is expected an Event object, but got", i), o3;
  }
  function Pi(i) {
    if (i.passiveListener != null) {
      typeof console < "u" && typeof console.error == "function" && console.error("Unable to preventDefault inside passive event listener invocation.", i.passiveListener);
      return;
    }
    i.event.cancelable && (i.canceled = true, typeof i.event.preventDefault == "function" && i.event.preventDefault());
  }
  function ht(i, o3) {
    Ci.set(this, { eventTarget: i, event: o3, eventPhase: 2, currentTarget: i, canceled: false, stopped: false, immediateStopped: false, passiveListener: null, timeStamp: o3.timeStamp || Date.now() }), Object.defineProperty(this, "isTrusted", { value: false, enumerable: true });
    const a2 = Object.keys(o3);
    for (let u2 = 0;u2 < a2.length; ++u2) {
      const l2 = a2[u2];
      l2 in this || Object.defineProperty(this, l2, vi(l2));
    }
  }
  function vi(i) {
    return { get() {
      return W(this).event[i];
    }, set(o3) {
      W(this).event[i] = o3;
    }, configurable: true, enumerable: true };
  }
  function gl(i) {
    return { value() {
      const o3 = W(this).event;
      return o3[i].apply(o3, arguments);
    }, configurable: true, enumerable: true };
  }
  function _l(i, o3) {
    const a2 = Object.keys(o3);
    if (a2.length === 0)
      return i;
    function u2(l2, p) {
      i.call(this, l2, p);
    }
    n2(u2, "CustomEvent"), u2.prototype = Object.create(i.prototype, { constructor: { value: u2, configurable: true, writable: true } });
    for (let l2 = 0;l2 < a2.length; ++l2) {
      const p = a2[l2];
      if (!(p in i.prototype)) {
        const g3 = typeof Object.getOwnPropertyDescriptor(o3, p).value == "function";
        Object.defineProperty(u2.prototype, p, g3 ? gl(p) : vi(p));
      }
    }
    return u2;
  }
  function Ei(i) {
    if (i == null || i === Object.prototype)
      return ht;
    let o3 = Dn.get(i);
    return o3 == null && (o3 = _l(Ei(Object.getPrototypeOf(i)), i), Dn.set(i, o3)), o3;
  }
  function Sl(i, o3) {
    const a2 = Ei(Object.getPrototypeOf(o3));
    return new a2(i, o3);
  }
  function wl(i) {
    return W(i).immediateStopped;
  }
  function Rl(i, o3) {
    W(i).eventPhase = o3;
  }
  function Tl(i, o3) {
    W(i).currentTarget = o3;
  }
  function Ai(i, o3) {
    W(i).passiveListener = o3;
  }
  function Rr(i) {
    return i !== null && typeof i == "object";
  }
  function Bt(i) {
    const o3 = Bi.get(i);
    if (o3 == null)
      throw new TypeError("'this' is expected an EventTarget object, but got another value.");
    return o3;
  }
  function Cl(i) {
    return { get() {
      let a2 = Bt(this).get(i);
      for (;a2 != null; ) {
        if (a2.listenerType === wr)
          return a2.listener;
        a2 = a2.next;
      }
      return null;
    }, set(o3) {
      typeof o3 != "function" && !Rr(o3) && (o3 = null);
      const a2 = Bt(this);
      let u2 = null, l2 = a2.get(i);
      for (;l2 != null; )
        l2.listenerType === wr ? u2 !== null ? u2.next = l2.next : l2.next !== null ? a2.set(i, l2.next) : a2.delete(i) : u2 = l2, l2 = l2.next;
      if (o3 !== null) {
        const p = { listener: o3, listenerType: wr, passive: false, once: false, next: null };
        u2 === null ? a2.set(i, p) : u2.next = p;
      }
    }, configurable: true, enumerable: true };
  }
  function qi(i, o3) {
    Object.defineProperty(i, `on${o3}`, Cl(o3));
  }
  function Oi(i) {
    function o3() {
      Pe.call(this);
    }
    n2(o3, "CustomEventTarget"), o3.prototype = Object.create(Pe.prototype, { constructor: { value: o3, configurable: true, writable: true } });
    for (let a2 = 0;a2 < i.length; ++a2)
      qi(o3.prototype, i[a2]);
    return o3;
  }
  function Pe() {
    if (this instanceof Pe) {
      Bi.set(this, /* @__PURE__ */ new Map);
      return;
    }
    if (arguments.length === 1 && Array.isArray(arguments[0]))
      return Oi(arguments[0]);
    if (arguments.length > 0) {
      const i = new Array(arguments.length);
      for (let o3 = 0;o3 < arguments.length; ++o3)
        i[o3] = arguments[o3];
      return Oi(i);
    }
    throw new TypeError("Cannot call a class as a function");
  }
  function Pl() {
    const i = Object.create(pt.prototype);
    return Pe.call(i), Tr.set(i, false), i;
  }
  function vl(i) {
    Tr.get(i) === false && (Tr.set(i, true), i.dispatchEvent({ type: "abort" }));
  }
  function Ii(i) {
    const o3 = zi.get(i);
    if (o3 == null)
      throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i === null ? "null" : typeof i}`);
    return o3;
  }
  function ji() {
    var _a2, _b2, _c;
    !((_b2 = (_a2 = globalThis.process) == null ? undefined : _a2.versions) == null ? undefined : _b2.node) && !((_c = globalThis.process) == null ? undefined : _c.env.DISABLE_NODE_FETCH_NATIVE_WARN || true) && console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");
  }
  var import_node_http2;
  var import_node_https2;
  var import_node_zlib2;
  var import_node_stream3;
  var import_node_buffer2;
  var import_node_util2;
  var import_node_url3;
  var import_node_net2;
  var import_node_fs4;
  var import_node_path4;
  var As;
  var n2;
  var fi;
  var O;
  var be;
  var X;
  var ve;
  var kt;
  var bt;
  var Cr;
  var Ve;
  var Wt;
  var qt;
  var Ot;
  var ee;
  var zt;
  var Ne;
  var He;
  var It;
  var pr;
  var di;
  var $s;
  var hi;
  var pi;
  var Ds;
  var ut;
  var Ms;
  var Us;
  var On;
  var Et;
  var xs;
  var Ns;
  var bi;
  var Hs;
  var mi;
  var zn;
  var Me;
  var br;
  var Un;
  var ft;
  var xn;
  var G;
  var mr;
  var yi;
  var yr;
  var Qs;
  var Ys;
  var Gs;
  var Zs;
  var H;
  var Nn;
  var Ue;
  var Fn;
  var Ks;
  var gi;
  var Js;
  var Xs;
  var gr;
  var jn;
  var Pr;
  var ye;
  var tl;
  var Ln;
  var se;
  var xe;
  var le;
  var rl;
  var Si;
  var nl;
  var $2;
  var At;
  var ll;
  var vr;
  var dt;
  var ul;
  var Hn;
  var _r;
  var fl;
  var cl;
  var $n;
  var dl;
  var hl;
  var pl;
  var bl;
  var wi;
  var Ri;
  var Er;
  var Sr;
  var ml;
  var Ci;
  var Dn;
  var Bi;
  var ki;
  var Wi;
  var wr;
  var Vn;
  var pt;
  var Tr;
  var Mn;
  var zi;
  var El;
  var Al;
  var Fi;
  var init_node = __esm({
    "node_modules/node-fetch-native/dist/node.mjs"() {
      import_node_http2 = __toESM2(__require("http"), 1);
      import_node_https2 = __toESM2(__require("https"), 1);
      import_node_zlib2 = __toESM2(__require("zlib"), 1);
      import_node_stream3 = __toESM2(__require("stream"), 1);
      import_node_buffer2 = __require("buffer");
      import_node_util2 = __require("util");
      init_node_fetch_native_1a4a356d();
      import_node_url3 = __require("url");
      import_node_net2 = __require("net");
      import_node_fs4 = __require("fs");
      import_node_path4 = __require("path");
      As = Object.defineProperty;
      n2 = (i, o3) => As(i, "name", { value: o3, configurable: true });
      fi = (i, o3, a2) => {
        if (!o3.has(i))
          throw TypeError("Cannot " + a2);
      };
      O = (i, o3, a2) => (fi(i, o3, "read from private field"), a2 ? a2.call(i) : o3.get(i));
      be = (i, o3, a2) => {
        if (o3.has(i))
          throw TypeError("Cannot add the same private member more than once");
        o3 instanceof WeakSet ? o3.add(i) : o3.set(i, a2);
      };
      X = (i, o3, a2, u2) => (fi(i, o3, "write to private field"), u2 ? u2.call(i, a2) : o3.set(i, a2), a2);
      n2(js, "dataUriToBuffer");
      pr = { exports: {} };
      n2(Ls, "requirePonyfill_es2018");
      $s = 65536;
      if (!globalThis.ReadableStream)
        try {
          const i = __require("process"), { emitWarning: o3 } = i;
          try {
            i.emitWarning = () => {}, Object.assign(globalThis, __require("stream/web")), i.emitWarning = o3;
          } catch (a2) {
            throw i.emitWarning = o3, a2;
          }
        } catch (e) {
          Object.assign(globalThis, Ls());
        }
      try {
        const { Blob: i } = __require("buffer");
        i && !i.prototype.stream && (i.prototype.stream = n2(function(a2) {
          let u2 = 0;
          const l2 = this;
          return new ReadableStream({ type: "bytes", pull(p) {
            return __async(this, null, function* () {
              const g3 = yield l2.slice(u2, Math.min(l2.size, u2 + $s)).arrayBuffer();
              u2 += g3.byteLength, p.enqueue(new Uint8Array(g3)), u2 === l2.size && p.close();
            });
          } });
        }, "name"));
      } catch (e) {}
      hi = 65536;
      n2(qn, "toIterator");
      pi = (Ve = class {
        constructor(o3 = [], a2 = {}) {
          be(this, ve, []);
          be(this, kt, "");
          be(this, bt, 0);
          be(this, Cr, "transparent");
          if (typeof o3 != "object" || o3 === null)
            throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");
          if (typeof o3[Symbol.iterator] != "function")
            throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");
          if (typeof a2 != "object" && typeof a2 != "function")
            throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");
          a2 === null && (a2 = {});
          const u2 = new TextEncoder;
          for (const p of o3) {
            let h;
            ArrayBuffer.isView(p) ? h = new Uint8Array(p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength)) : p instanceof ArrayBuffer ? h = new Uint8Array(p.slice(0)) : p instanceof Ve ? h = p : h = u2.encode(`${p}`), X(this, bt, O(this, bt) + (ArrayBuffer.isView(h) ? h.byteLength : h.size)), O(this, ve).push(h);
          }
          X(this, Cr, `${a2.endings === undefined ? "transparent" : a2.endings}`);
          const l2 = a2.type === undefined ? "" : String(a2.type);
          X(this, kt, /^[\x20-\x7E]*$/.test(l2) ? l2 : "");
        }
        get size() {
          return O(this, bt);
        }
        get type() {
          return O(this, kt);
        }
        text() {
          return __async(this, null, function* () {
            const o3 = new TextDecoder;
            let a2 = "";
            try {
              for (var iter = __forAwait(qn(O(this, ve), false)), more, temp, error;more = !(temp = yield iter.next()).done; more = false) {
                const u2 = temp.value;
                a2 += o3.decode(u2, { stream: true });
              }
            } catch (temp2) {
              error = [temp2];
            } finally {
              try {
                more && (temp = iter.return) && (yield temp.call(iter));
              } finally {
                if (error)
                  throw error[0];
              }
            }
            return a2 += o3.decode(), a2;
          });
        }
        arrayBuffer() {
          return __async(this, null, function* () {
            const o3 = new Uint8Array(this.size);
            let a2 = 0;
            try {
              for (var iter = __forAwait(qn(O(this, ve), false)), more, temp, error;more = !(temp = yield iter.next()).done; more = false) {
                const u2 = temp.value;
                o3.set(u2, a2), a2 += u2.length;
              }
            } catch (temp2) {
              error = [temp2];
            } finally {
              try {
                more && (temp = iter.return) && (yield temp.call(iter));
              } finally {
                if (error)
                  throw error[0];
              }
            }
            return o3.buffer;
          });
        }
        stream() {
          const o3 = qn(O(this, ve), true);
          return new globalThis.ReadableStream({ type: "bytes", pull(a2) {
            return __async(this, null, function* () {
              const u2 = yield o3.next();
              u2.done ? a2.close() : a2.enqueue(u2.value);
            });
          }, cancel() {
            return __async(this, null, function* () {
              yield o3.return();
            });
          } });
        }
        slice(o3 = 0, a2 = this.size, u2 = "") {
          const { size: l2 } = this;
          let p = o3 < 0 ? Math.max(l2 + o3, 0) : Math.min(o3, l2), h = a2 < 0 ? Math.max(l2 + a2, 0) : Math.min(a2, l2);
          const g3 = Math.max(h - p, 0), A2 = O(this, ve), w2 = [];
          let E2 = 0;
          for (const b of A2) {
            if (E2 >= g3)
              break;
            const q = ArrayBuffer.isView(b) ? b.byteLength : b.size;
            if (p && q <= p)
              p -= q, h -= q;
            else {
              let _;
              ArrayBuffer.isView(b) ? (_ = b.subarray(p, Math.min(q, h)), E2 += _.byteLength) : (_ = b.slice(p, Math.min(q, h)), E2 += _.size), h -= q, w2.push(_), p = 0;
            }
          }
          const T2 = new Ve([], { type: String(u2).toLowerCase() });
          return X(T2, bt, g3), X(T2, ve, w2), T2;
        }
        get [Symbol.toStringTag]() {
          return "Blob";
        }
        static [Symbol.hasInstance](o3) {
          return o3 && typeof o3 == "object" && typeof o3.constructor == "function" && (typeof o3.stream == "function" || typeof o3.arrayBuffer == "function") && /^(Blob|File)$/.test(o3[Symbol.toStringTag]);
        }
      }, ve = /* @__PURE__ */ new WeakMap, kt = /* @__PURE__ */ new WeakMap, bt = /* @__PURE__ */ new WeakMap, Cr = /* @__PURE__ */ new WeakMap, n2(Ve, "Blob"), Ve);
      Object.defineProperties(pi.prototype, { size: { enumerable: true }, type: { enumerable: true }, slice: { enumerable: true } });
      Ds = pi;
      ut = Ds;
      Ms = (Ot = class extends ut {
        constructor(a2, u2, l2 = {}) {
          if (arguments.length < 2)
            throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);
          super(a2, l2);
          be(this, Wt, 0);
          be(this, qt, "");
          l2 === null && (l2 = {});
          const p = l2.lastModified === undefined ? Date.now() : Number(l2.lastModified);
          Number.isNaN(p) || X(this, Wt, p), X(this, qt, String(u2));
        }
        get name() {
          return O(this, qt);
        }
        get lastModified() {
          return O(this, Wt);
        }
        get [Symbol.toStringTag]() {
          return "File";
        }
        static [Symbol.hasInstance](a2) {
          return !!a2 && a2 instanceof ut && /^(File)$/.test(a2[Symbol.toStringTag]);
        }
      }, Wt = /* @__PURE__ */ new WeakMap, qt = /* @__PURE__ */ new WeakMap, n2(Ot, "File"), Ot);
      Us = Ms;
      On = Us;
      ({ toStringTag: Et, iterator: xs, hasInstance: Ns } = Symbol);
      bi = Math.random;
      Hs = "append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(",");
      mi = n2((i, o3, a2) => (i += "", /^(Blob|File)$/.test(o3 && o3[Et]) ? [(a2 = a2 !== undefined ? a2 + "" : o3[Et] == "File" ? o3.name : "blob", i), o3.name !== a2 || o3[Et] == "blob" ? new On([o3], a2, o3) : o3] : [i, o3 + ""]), "f");
      zn = n2((i, o3) => (o3 ? i : i.replace(/\r?\n|\r/g, `\r
`)).replace(/\n/g, "%0A").replace(/\r/g, "%0D").replace(/"/g, "%22"), "e$1");
      Me = n2((i, o3, a2) => {
        if (o3.length < a2)
          throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a2} arguments required, but only ${o3.length} present.`);
      }, "x");
      br = (zt = class {
        constructor(...o3) {
          be(this, ee, []);
          if (o3.length)
            throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.");
        }
        get [Et]() {
          return "FormData";
        }
        [xs]() {
          return this.entries();
        }
        static [Ns](o3) {
          return o3 && typeof o3 == "object" && o3[Et] === "FormData" && !Hs.some((a2) => typeof o3[a2] != "function");
        }
        append(...o3) {
          Me("append", arguments, 2), O(this, ee).push(mi(...o3));
        }
        delete(o3) {
          Me("delete", arguments, 1), o3 += "", X(this, ee, O(this, ee).filter(([a2]) => a2 !== o3));
        }
        get(o3) {
          Me("get", arguments, 1), o3 += "";
          for (var a2 = O(this, ee), u2 = a2.length, l2 = 0;l2 < u2; l2++)
            if (a2[l2][0] === o3)
              return a2[l2][1];
          return null;
        }
        getAll(o3, a2) {
          return Me("getAll", arguments, 1), a2 = [], o3 += "", O(this, ee).forEach((u2) => u2[0] === o3 && a2.push(u2[1])), a2;
        }
        has(o3) {
          return Me("has", arguments, 1), o3 += "", O(this, ee).some((a2) => a2[0] === o3);
        }
        forEach(o3, a2) {
          Me("forEach", arguments, 1);
          for (var [u2, l2] of this)
            o3.call(a2, l2, u2, this);
        }
        set(...o3) {
          Me("set", arguments, 2);
          var a2 = [], u2 = true;
          o3 = mi(...o3), O(this, ee).forEach((l2) => {
            l2[0] === o3[0] ? u2 && (u2 = !a2.push(o3)) : a2.push(l2);
          }), u2 && a2.push(o3), X(this, ee, a2);
        }
        *entries() {
          yield* __yieldStar(O(this, ee));
        }
        *keys() {
          for (var [o3] of this)
            yield o3;
        }
        *values() {
          for (var [, o3] of this)
            yield o3;
        }
      }, ee = /* @__PURE__ */ new WeakMap, n2(zt, "FormData"), zt);
      n2(Vs, "formDataToBlob");
      Un = class Un2 extends Error {
        constructor(o3, a2) {
          super(o3), Error.captureStackTrace(this, this.constructor), this.type = a2;
        }
        get name() {
          return this.constructor.name;
        }
        get [Symbol.toStringTag]() {
          return this.constructor.name;
        }
      };
      n2(Un, "FetchBaseError");
      ft = Un;
      xn = class xn2 extends ft {
        constructor(o3, a2, u2) {
          super(o3, a2), u2 && (this.code = this.errno = u2.code, this.erroredSysCall = u2.syscall);
        }
      };
      n2(xn, "FetchError");
      G = xn;
      mr = Symbol.toStringTag;
      yi = n2((i) => typeof i == "object" && typeof i.append == "function" && typeof i.delete == "function" && typeof i.get == "function" && typeof i.getAll == "function" && typeof i.has == "function" && typeof i.set == "function" && typeof i.sort == "function" && i[mr] === "URLSearchParams", "isURLSearchParameters");
      yr = n2((i) => i && typeof i == "object" && typeof i.arrayBuffer == "function" && typeof i.type == "string" && typeof i.stream == "function" && typeof i.constructor == "function" && /^(Blob|File)$/.test(i[mr]), "isBlob");
      Qs = n2((i) => typeof i == "object" && (i[mr] === "AbortSignal" || i[mr] === "EventTarget"), "isAbortSignal");
      Ys = n2((i, o3) => {
        const a2 = new URL(o3).hostname, u2 = new URL(i).hostname;
        return a2 === u2 || a2.endsWith(`.${u2}`);
      }, "isDomainOrSubdomain");
      Gs = n2((i, o3) => {
        const a2 = new URL(o3).protocol, u2 = new URL(i).protocol;
        return a2 === u2;
      }, "isSameProtocol");
      Zs = (0, import_node_util2.promisify)(import_node_stream3.default.pipeline);
      H = Symbol("Body internals");
      Nn = class Nn2 {
        constructor(o3, { size: a2 = 0 } = {}) {
          let u2 = null;
          o3 === null ? o3 = null : yi(o3) ? o3 = import_node_buffer2.Buffer.from(o3.toString()) : yr(o3) || import_node_buffer2.Buffer.isBuffer(o3) || (import_node_util2.types.isAnyArrayBuffer(o3) ? o3 = import_node_buffer2.Buffer.from(o3) : ArrayBuffer.isView(o3) ? o3 = import_node_buffer2.Buffer.from(o3.buffer, o3.byteOffset, o3.byteLength) : o3 instanceof import_node_stream3.default || (o3 instanceof br ? (o3 = Vs(o3), u2 = o3.type.split("=")[1]) : o3 = import_node_buffer2.Buffer.from(String(o3))));
          let l2 = o3;
          import_node_buffer2.Buffer.isBuffer(o3) ? l2 = import_node_stream3.default.Readable.from(o3) : yr(o3) && (l2 = import_node_stream3.default.Readable.from(o3.stream())), this[H] = { body: o3, stream: l2, boundary: u2, disturbed: false, error: null }, this.size = a2, o3 instanceof import_node_stream3.default && o3.on("error", (p) => {
            const h = p instanceof ft ? p : new G(`Invalid response body while trying to fetch ${this.url}: ${p.message}`, "system", p);
            this[H].error = h;
          });
        }
        get body() {
          return this[H].stream;
        }
        get bodyUsed() {
          return this[H].disturbed;
        }
        arrayBuffer() {
          return __async(this, null, function* () {
            const { buffer: o3, byteOffset: a2, byteLength: u2 } = yield In(this);
            return o3.slice(a2, a2 + u2);
          });
        }
        formData() {
          return __async(this, null, function* () {
            const o3 = this.headers.get("content-type");
            if (o3.startsWith("application/x-www-form-urlencoded")) {
              const u2 = new br, l2 = new URLSearchParams(yield this.text());
              for (const [p, h] of l2)
                u2.append(p, h);
              return u2;
            }
            const { toFormData: a2 } = yield Promise.resolve().then(() => (init_multipart_parser(), multipart_parser_exports));
            return a2(this.body, o3);
          });
        }
        blob() {
          return __async(this, null, function* () {
            const o3 = this.headers && this.headers.get("content-type") || this[H].body && this[H].body.type || "", a2 = yield this.arrayBuffer();
            return new ut([a2], { type: o3 });
          });
        }
        json() {
          return __async(this, null, function* () {
            const o3 = yield this.text();
            return JSON.parse(o3);
          });
        }
        text() {
          return __async(this, null, function* () {
            const o3 = yield In(this);
            return new TextDecoder().decode(o3);
          });
        }
        buffer() {
          return In(this);
        }
      };
      n2(Nn, "Body");
      Ue = Nn;
      Ue.prototype.buffer = (0, import_node_util2.deprecate)(Ue.prototype.buffer, "Please use 'response.arrayBuffer()' instead of 'response.buffer()'", "node-fetch#buffer"), Object.defineProperties(Ue.prototype, { body: { enumerable: true }, bodyUsed: { enumerable: true }, arrayBuffer: { enumerable: true }, blob: { enumerable: true }, json: { enumerable: true }, text: { enumerable: true }, data: { get: (0, import_node_util2.deprecate)(() => {}, "data doesn't exist, use json(), text(), arrayBuffer(), or body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (response)") } });
      n2(In, "consumeBody");
      Fn = n2((i, o3) => {
        let a2, u2, { body: l2 } = i[H];
        if (i.bodyUsed)
          throw new Error("cannot clone body after it is used");
        return l2 instanceof import_node_stream3.default && typeof l2.getBoundary != "function" && (a2 = new import_node_stream3.PassThrough({ highWaterMark: o3 }), u2 = new import_node_stream3.PassThrough({ highWaterMark: o3 }), l2.pipe(a2), l2.pipe(u2), i[H].stream = a2, l2 = u2), l2;
      }, "clone");
      Ks = (0, import_node_util2.deprecate)((i) => i.getBoundary(), "form-data doesn't follow the spec and requires special treatment. Use alternative package", "https://github.com/node-fetch/node-fetch/issues/1167");
      gi = n2((i, o3) => i === null ? null : typeof i == "string" ? "text/plain;charset=UTF-8" : yi(i) ? "application/x-www-form-urlencoded;charset=UTF-8" : yr(i) ? i.type || null : import_node_buffer2.Buffer.isBuffer(i) || import_node_util2.types.isAnyArrayBuffer(i) || ArrayBuffer.isView(i) ? null : i instanceof br ? `multipart/form-data; boundary=${o3[H].boundary}` : i && typeof i.getBoundary == "function" ? `multipart/form-data;boundary=${Ks(i)}` : i instanceof import_node_stream3.default ? null : "text/plain;charset=UTF-8", "extractContentType");
      Js = n2((i) => {
        const { body: o3 } = i[H];
        return o3 === null ? 0 : yr(o3) ? o3.size : import_node_buffer2.Buffer.isBuffer(o3) ? o3.length : o3 && typeof o3.getLengthSync == "function" && o3.hasKnownLength && o3.hasKnownLength() ? o3.getLengthSync() : null;
      }, "getTotalBytes");
      Xs = n2((_0, _1) => __async(undefined, [_0, _1], function* (i, { body: o3 }) {
        o3 === null ? i.end() : yield Zs(o3, i);
      }), "writeToStream");
      gr = typeof import_node_http2.default.validateHeaderName == "function" ? import_node_http2.default.validateHeaderName : (i) => {
        if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)) {
          const o3 = new TypeError(`Header name must be a valid HTTP token [${i}]`);
          throw Object.defineProperty(o3, "code", { value: "ERR_INVALID_HTTP_TOKEN" }), o3;
        }
      };
      jn = typeof import_node_http2.default.validateHeaderValue == "function" ? import_node_http2.default.validateHeaderValue : (i, o3) => {
        if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o3)) {
          const a2 = new TypeError(`Invalid character in header content ["${i}"]`);
          throw Object.defineProperty(a2, "code", { value: "ERR_INVALID_CHAR" }), a2;
        }
      };
      Pr = class Pr2 extends URLSearchParams {
        constructor(o3) {
          let a2 = [];
          if (o3 instanceof Pr2) {
            const u2 = o3.raw();
            for (const [l2, p] of Object.entries(u2))
              a2.push(...p.map((h) => [l2, h]));
          } else if (o3 != null)
            if (typeof o3 == "object" && !import_node_util2.types.isBoxedPrimitive(o3)) {
              const u2 = o3[Symbol.iterator];
              if (u2 == null)
                a2.push(...Object.entries(o3));
              else {
                if (typeof u2 != "function")
                  throw new TypeError("Header pairs must be iterable");
                a2 = [...o3].map((l2) => {
                  if (typeof l2 != "object" || import_node_util2.types.isBoxedPrimitive(l2))
                    throw new TypeError("Each header pair must be an iterable object");
                  return [...l2];
                }).map((l2) => {
                  if (l2.length !== 2)
                    throw new TypeError("Each header pair must be a name/value tuple");
                  return [...l2];
                });
              }
            } else
              throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
          return a2 = a2.length > 0 ? a2.map(([u2, l2]) => (gr(u2), jn(u2, String(l2)), [String(u2).toLowerCase(), String(l2)])) : undefined, super(a2), new Proxy(this, { get(u2, l2, p) {
            switch (l2) {
              case "append":
              case "set":
                return (h, g3) => (gr(h), jn(h, String(g3)), URLSearchParams.prototype[l2].call(u2, String(h).toLowerCase(), String(g3)));
              case "delete":
              case "has":
              case "getAll":
                return (h) => (gr(h), URLSearchParams.prototype[l2].call(u2, String(h).toLowerCase()));
              case "keys":
                return () => (u2.sort(), new Set(URLSearchParams.prototype.keys.call(u2)).keys());
              default:
                return Reflect.get(u2, l2, p);
            }
          } });
        }
        get [Symbol.toStringTag]() {
          return this.constructor.name;
        }
        toString() {
          return Object.prototype.toString.call(this);
        }
        get(o3) {
          const a2 = this.getAll(o3);
          if (a2.length === 0)
            return null;
          let u2 = a2.join(", ");
          return /^content-encoding$/i.test(o3) && (u2 = u2.toLowerCase()), u2;
        }
        forEach(o3, a2 = undefined) {
          for (const u2 of this.keys())
            Reflect.apply(o3, a2, [this.get(u2), u2, this]);
        }
        *values() {
          for (const o3 of this.keys())
            yield this.get(o3);
        }
        *entries() {
          for (const o3 of this.keys())
            yield [o3, this.get(o3)];
        }
        [Symbol.iterator]() {
          return this.entries();
        }
        raw() {
          return [...this.keys()].reduce((o3, a2) => (o3[a2] = this.getAll(a2), o3), {});
        }
        [Symbol.for("nodejs.util.inspect.custom")]() {
          return [...this.keys()].reduce((o3, a2) => {
            const u2 = this.getAll(a2);
            return a2 === "host" ? o3[a2] = u2[0] : o3[a2] = u2.length > 1 ? u2 : u2[0], o3;
          }, {});
        }
      };
      n2(Pr, "Headers");
      ye = Pr;
      Object.defineProperties(ye.prototype, ["get", "entries", "forEach", "values"].reduce((i, o3) => (i[o3] = { enumerable: true }, i), {}));
      n2(el, "fromRawHeaders");
      tl = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      Ln = n2((i) => tl.has(i), "isRedirect");
      se = Symbol("Response internals");
      xe = class xe2 extends Ue {
        constructor(o3 = null, a2 = {}) {
          super(o3, a2);
          const u2 = a2.status != null ? a2.status : 200, l2 = new ye(a2.headers);
          if (o3 !== null && !l2.has("Content-Type")) {
            const p = gi(o3, this);
            p && l2.append("Content-Type", p);
          }
          this[se] = { type: "default", url: a2.url, status: u2, statusText: a2.statusText || "", headers: l2, counter: a2.counter, highWaterMark: a2.highWaterMark };
        }
        get type() {
          return this[se].type;
        }
        get url() {
          return this[se].url || "";
        }
        get status() {
          return this[se].status;
        }
        get ok() {
          return this[se].status >= 200 && this[se].status < 300;
        }
        get redirected() {
          return this[se].counter > 0;
        }
        get statusText() {
          return this[se].statusText;
        }
        get headers() {
          return this[se].headers;
        }
        get highWaterMark() {
          return this[se].highWaterMark;
        }
        clone() {
          return new xe2(Fn(this, this.highWaterMark), { type: this.type, url: this.url, status: this.status, statusText: this.statusText, headers: this.headers, ok: this.ok, redirected: this.redirected, size: this.size, highWaterMark: this.highWaterMark });
        }
        static redirect(o3, a2 = 302) {
          if (!Ln(a2))
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
          return new xe2(null, { headers: { location: new URL(o3).toString() }, status: a2 });
        }
        static error() {
          const o3 = new xe2(null, { status: 0, statusText: "" });
          return o3[se].type = "error", o3;
        }
        static json(o3 = undefined, a2 = {}) {
          const u2 = JSON.stringify(o3);
          if (u2 === undefined)
            throw new TypeError("data is not JSON serializable");
          const l2 = new ye(a2 && a2.headers);
          return l2.has("content-type") || l2.set("content-type", "application/json"), new xe2(u2, __spreadProps(__spreadValues({}, a2), { headers: l2 }));
        }
        get [Symbol.toStringTag]() {
          return "Response";
        }
      };
      n2(xe, "Response");
      le = xe;
      Object.defineProperties(le.prototype, { type: { enumerable: true }, url: { enumerable: true }, status: { enumerable: true }, ok: { enumerable: true }, redirected: { enumerable: true }, statusText: { enumerable: true }, headers: { enumerable: true }, clone: { enumerable: true } });
      rl = n2((i) => {
        if (i.search)
          return i.search;
        const o3 = i.href.length - 1, a2 = i.hash || (i.href[o3] === "#" ? "#" : "");
        return i.href[o3 - a2.length] === "?" ? "?" : "";
      }, "getSearch");
      n2(_i, "stripURLForUseAsAReferrer");
      Si = /* @__PURE__ */ new Set(["", "no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url"]);
      nl = "strict-origin-when-cross-origin";
      n2(ol, "validateReferrerPolicy");
      n2(il, "isOriginPotentiallyTrustworthy");
      n2(ct, "isUrlPotentiallyTrustworthy");
      n2(al, "determineRequestsReferrer");
      n2(sl, "parseReferrerPolicyFromHeader");
      $2 = Symbol("Request internals");
      At = n2((i) => typeof i == "object" && typeof i[$2] == "object", "isRequest");
      ll = (0, import_node_util2.deprecate)(() => {}, ".data is not a valid RequestInit property, use .body instead", "https://github.com/node-fetch/node-fetch/issues/1000 (request)");
      vr = class vr2 extends Ue {
        constructor(o3, a2 = {}) {
          let u2;
          if (At(o3) ? u2 = new URL(o3.url) : (u2 = new URL(o3), o3 = {}), u2.username !== "" || u2.password !== "")
            throw new TypeError(`${u2} is an url with embedded credentials.`);
          let l2 = a2.method || o3.method || "GET";
          if (/^(delete|get|head|options|post|put)$/i.test(l2) && (l2 = l2.toUpperCase()), !At(a2) && "data" in a2 && ll(), (a2.body != null || At(o3) && o3.body !== null) && (l2 === "GET" || l2 === "HEAD"))
            throw new TypeError("Request with GET/HEAD method cannot have body");
          const p = a2.body ? a2.body : At(o3) && o3.body !== null ? Fn(o3) : null;
          super(p, { size: a2.size || o3.size || 0 });
          const h = new ye(a2.headers || o3.headers || {});
          if (p !== null && !h.has("Content-Type")) {
            const w2 = gi(p, this);
            w2 && h.set("Content-Type", w2);
          }
          let g3 = At(o3) ? o3.signal : null;
          if ("signal" in a2 && (g3 = a2.signal), g3 != null && !Qs(g3))
            throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");
          let A2 = a2.referrer == null ? o3.referrer : a2.referrer;
          if (A2 === "")
            A2 = "no-referrer";
          else if (A2) {
            const w2 = new URL(A2);
            A2 = /^about:(\/\/)?client$/.test(w2) ? "client" : w2;
          } else
            A2 = undefined;
          this[$2] = { method: l2, redirect: a2.redirect || o3.redirect || "follow", headers: h, parsedURL: u2, signal: g3, referrer: A2 }, this.follow = a2.follow === undefined ? o3.follow === undefined ? 20 : o3.follow : a2.follow, this.compress = a2.compress === undefined ? o3.compress === undefined ? true : o3.compress : a2.compress, this.counter = a2.counter || o3.counter || 0, this.agent = a2.agent || o3.agent, this.highWaterMark = a2.highWaterMark || o3.highWaterMark || 16384, this.insecureHTTPParser = a2.insecureHTTPParser || o3.insecureHTTPParser || false, this.referrerPolicy = a2.referrerPolicy || o3.referrerPolicy || "";
        }
        get method() {
          return this[$2].method;
        }
        get url() {
          return (0, import_node_url3.format)(this[$2].parsedURL);
        }
        get headers() {
          return this[$2].headers;
        }
        get redirect() {
          return this[$2].redirect;
        }
        get signal() {
          return this[$2].signal;
        }
        get referrer() {
          if (this[$2].referrer === "no-referrer")
            return "";
          if (this[$2].referrer === "client")
            return "about:client";
          if (this[$2].referrer)
            return this[$2].referrer.toString();
        }
        get referrerPolicy() {
          return this[$2].referrerPolicy;
        }
        set referrerPolicy(o3) {
          this[$2].referrerPolicy = ol(o3);
        }
        clone() {
          return new vr2(this);
        }
        get [Symbol.toStringTag]() {
          return "Request";
        }
      };
      n2(vr, "Request");
      dt = vr;
      Object.defineProperties(dt.prototype, { method: { enumerable: true }, url: { enumerable: true }, headers: { enumerable: true }, redirect: { enumerable: true }, clone: { enumerable: true }, signal: { enumerable: true }, referrer: { enumerable: true }, referrerPolicy: { enumerable: true } });
      ul = n2((i) => {
        const { parsedURL: o3 } = i[$2], a2 = new ye(i[$2].headers);
        a2.has("Accept") || a2.set("Accept", "*/*");
        let u2 = null;
        if (i.body === null && /^(post|put)$/i.test(i.method) && (u2 = "0"), i.body !== null) {
          const g3 = Js(i);
          typeof g3 == "number" && !Number.isNaN(g3) && (u2 = String(g3));
        }
        u2 && a2.set("Content-Length", u2), i.referrerPolicy === "" && (i.referrerPolicy = nl), i.referrer && i.referrer !== "no-referrer" ? i[$2].referrer = al(i) : i[$2].referrer = "no-referrer", i[$2].referrer instanceof URL && a2.set("Referer", i.referrer), a2.has("User-Agent") || a2.set("User-Agent", "node-fetch"), i.compress && !a2.has("Accept-Encoding") && a2.set("Accept-Encoding", "gzip, deflate, br");
        let { agent: l2 } = i;
        typeof l2 == "function" && (l2 = l2(o3));
        const p = rl(o3), h = { path: o3.pathname + p, method: i.method, headers: a2[Symbol.for("nodejs.util.inspect.custom")](), insecureHTTPParser: i.insecureHTTPParser, agent: l2 };
        return { parsedURL: o3, options: h };
      }, "getNodeRequestOptions");
      Hn = class Hn2 extends ft {
        constructor(o3, a2 = "aborted") {
          super(o3, a2);
        }
      };
      n2(Hn, "AbortError");
      _r = Hn;
      if (!globalThis.DOMException)
        try {
          const { MessageChannel: i } = __require("worker_threads"), o3 = new i().port1, a2 = new ArrayBuffer;
          o3.postMessage(a2, [a2, a2]);
        } catch (i) {
          i.constructor.name === "DOMException" && (globalThis.DOMException = i.constructor);
        }
      fl = globalThis.DOMException;
      cl = f(fl);
      ({ stat: $n } = import_node_fs4.promises);
      dl = n2((i, o3) => wi((0, import_node_fs4.statSync)(i), i, o3), "blobFromSync");
      hl = n2((i, o3) => $n(i).then((a2) => wi(a2, i, o3)), "blobFrom");
      pl = n2((i, o3) => $n(i).then((a2) => Ri(a2, i, o3)), "fileFrom");
      bl = n2((i, o3) => Ri((0, import_node_fs4.statSync)(i), i, o3), "fileFromSync");
      wi = n2((i, o3, a2 = "") => new ut([new Sr({ path: o3, size: i.size, lastModified: i.mtimeMs, start: 0 })], { type: a2 }), "fromBlob");
      Ri = n2((i, o3, a2 = "") => new On([new Sr({ path: o3, size: i.size, lastModified: i.mtimeMs, start: 0 })], (0, import_node_path4.basename)(o3), { type: a2, lastModified: i.mtimeMs }), "fromFile");
      Er = class Er2 {
        constructor(o3) {
          be(this, Ne, undefined);
          be(this, He, undefined);
          X(this, Ne, o3.path), X(this, He, o3.start), this.size = o3.size, this.lastModified = o3.lastModified;
        }
        slice(o3, a2) {
          return new Er2({ path: O(this, Ne), lastModified: this.lastModified, size: a2 - o3, start: O(this, He) + o3 });
        }
        stream() {
          return __asyncGenerator(this, null, function* () {
            const { mtimeMs: o3 } = yield new __await($n(O(this, Ne)));
            if (o3 > this.lastModified)
              throw new cl("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.", "NotReadableError");
            yield* __yieldStar((0, import_node_fs4.createReadStream)(O(this, Ne), { start: O(this, He), end: O(this, He) + this.size - 1 }));
          });
        }
        get [Symbol.toStringTag]() {
          return "Blob";
        }
      };
      Ne = /* @__PURE__ */ new WeakMap, He = /* @__PURE__ */ new WeakMap, n2(Er, "BlobDataItem");
      Sr = Er;
      ml = /* @__PURE__ */ new Set(["data:", "http:", "https:"]);
      n2(Ti, "fetch$1");
      n2(yl, "fixResponseChunkedTransferBadEnding");
      Ci = /* @__PURE__ */ new WeakMap;
      Dn = /* @__PURE__ */ new WeakMap;
      n2(W, "pd");
      n2(Pi, "setCancelFlag");
      n2(ht, "Event"), ht.prototype = { get type() {
        return W(this).event.type;
      }, get target() {
        return W(this).eventTarget;
      }, get currentTarget() {
        return W(this).currentTarget;
      }, composedPath() {
        const i = W(this).currentTarget;
        return i == null ? [] : [i];
      }, get NONE() {
        return 0;
      }, get CAPTURING_PHASE() {
        return 1;
      }, get AT_TARGET() {
        return 2;
      }, get BUBBLING_PHASE() {
        return 3;
      }, get eventPhase() {
        return W(this).eventPhase;
      }, stopPropagation() {
        const i = W(this);
        i.stopped = true, typeof i.event.stopPropagation == "function" && i.event.stopPropagation();
      }, stopImmediatePropagation() {
        const i = W(this);
        i.stopped = true, i.immediateStopped = true, typeof i.event.stopImmediatePropagation == "function" && i.event.stopImmediatePropagation();
      }, get bubbles() {
        return !!W(this).event.bubbles;
      }, get cancelable() {
        return !!W(this).event.cancelable;
      }, preventDefault() {
        Pi(W(this));
      }, get defaultPrevented() {
        return W(this).canceled;
      }, get composed() {
        return !!W(this).event.composed;
      }, get timeStamp() {
        return W(this).timeStamp;
      }, get srcElement() {
        return W(this).eventTarget;
      }, get cancelBubble() {
        return W(this).stopped;
      }, set cancelBubble(i) {
        if (!i)
          return;
        const o3 = W(this);
        o3.stopped = true, typeof o3.event.cancelBubble == "boolean" && (o3.event.cancelBubble = true);
      }, get returnValue() {
        return !W(this).canceled;
      }, set returnValue(i) {
        i || Pi(W(this));
      }, initEvent() {} }, Object.defineProperty(ht.prototype, "constructor", { value: ht, configurable: true, writable: true }), typeof window < "u" && typeof window.Event < "u" && (Object.setPrototypeOf(ht.prototype, window.Event.prototype), Dn.set(window.Event.prototype, ht));
      n2(vi, "defineRedirectDescriptor");
      n2(gl, "defineCallDescriptor");
      n2(_l, "defineWrapper");
      n2(Ei, "getWrapper");
      n2(Sl, "wrapEvent");
      n2(wl, "isStopped");
      n2(Rl, "setEventPhase");
      n2(Tl, "setCurrentTarget");
      n2(Ai, "setPassiveListener");
      Bi = /* @__PURE__ */ new WeakMap;
      ki = 1;
      Wi = 2;
      wr = 3;
      n2(Rr, "isObject");
      n2(Bt, "getListeners");
      n2(Cl, "defineEventAttributeDescriptor");
      n2(qi, "defineEventAttribute");
      n2(Oi, "defineCustomEventTarget");
      n2(Pe, "EventTarget"), Pe.prototype = { addEventListener(i, o3, a2) {
        if (o3 == null)
          return;
        if (typeof o3 != "function" && !Rr(o3))
          throw new TypeError("'listener' should be a function or an object.");
        const u2 = Bt(this), l2 = Rr(a2), h = (l2 ? !!a2.capture : !!a2) ? ki : Wi, g3 = { listener: o3, listenerType: h, passive: l2 && !!a2.passive, once: l2 && !!a2.once, next: null };
        let A2 = u2.get(i);
        if (A2 === undefined) {
          u2.set(i, g3);
          return;
        }
        let w2 = null;
        for (;A2 != null; ) {
          if (A2.listener === o3 && A2.listenerType === h)
            return;
          w2 = A2, A2 = A2.next;
        }
        w2.next = g3;
      }, removeEventListener(i, o3, a2) {
        if (o3 == null)
          return;
        const u2 = Bt(this), p = (Rr(a2) ? !!a2.capture : !!a2) ? ki : Wi;
        let h = null, g3 = u2.get(i);
        for (;g3 != null; ) {
          if (g3.listener === o3 && g3.listenerType === p) {
            h !== null ? h.next = g3.next : g3.next !== null ? u2.set(i, g3.next) : u2.delete(i);
            return;
          }
          h = g3, g3 = g3.next;
        }
      }, dispatchEvent(i) {
        if (i == null || typeof i.type != "string")
          throw new TypeError('"event.type" should be a string.');
        const o3 = Bt(this), a2 = i.type;
        let u2 = o3.get(a2);
        if (u2 == null)
          return true;
        const l2 = Sl(this, i);
        let p = null;
        for (;u2 != null; ) {
          if (u2.once ? p !== null ? p.next = u2.next : u2.next !== null ? o3.set(a2, u2.next) : o3.delete(a2) : p = u2, Ai(l2, u2.passive ? u2.listener : null), typeof u2.listener == "function")
            try {
              u2.listener.call(this, l2);
            } catch (h) {
              typeof console < "u" && typeof console.error == "function" && console.error(h);
            }
          else
            u2.listenerType !== wr && typeof u2.listener.handleEvent == "function" && u2.listener.handleEvent(l2);
          if (wl(l2))
            break;
          u2 = u2.next;
        }
        return Ai(l2, null), Rl(l2, 0), Tl(l2, null), !l2.defaultPrevented;
      } }, Object.defineProperty(Pe.prototype, "constructor", { value: Pe, configurable: true, writable: true }), typeof window < "u" && typeof window.EventTarget < "u" && Object.setPrototypeOf(Pe.prototype, window.EventTarget.prototype);
      Vn = class Vn2 extends Pe {
        constructor() {
          throw super(), new TypeError("AbortSignal cannot be constructed directly");
        }
        get aborted() {
          const o3 = Tr.get(this);
          if (typeof o3 != "boolean")
            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? "null" : typeof this}`);
          return o3;
        }
      };
      n2(Vn, "AbortSignal");
      pt = Vn;
      qi(pt.prototype, "abort");
      n2(Pl, "createAbortSignal");
      n2(vl, "abortSignal");
      Tr = /* @__PURE__ */ new WeakMap;
      Object.defineProperties(pt.prototype, { aborted: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(pt.prototype, Symbol.toStringTag, { configurable: true, value: "AbortSignal" });
      Mn = (It = class {
        constructor() {
          zi.set(this, Pl());
        }
        get signal() {
          return Ii(this);
        }
        abort() {
          vl(Ii(this));
        }
      }, n2(It, "AbortController"), It);
      zi = /* @__PURE__ */ new WeakMap;
      n2(Ii, "getSignal"), Object.defineProperties(Mn.prototype, { signal: { enumerable: true }, abort: { enumerable: true } }), typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol" && Object.defineProperty(Mn.prototype, Symbol.toStringTag, { configurable: true, value: "AbortController" });
      El = Object.defineProperty;
      Al = n2((i, o3) => El(i, "name", { value: o3, configurable: true }), "e");
      Fi = Ti;
      ji();
      n2(ji, "s"), Al(ji, "checkNodeEnvironment");
    }
  });
  var require_minimist = __commonJS2({
    "node_modules/minimist/index.js"(exports2, module2) {
      function hasKey(obj, keys) {
        var o3 = obj;
        keys.slice(0, -1).forEach(function(key2) {
          o3 = o3[key2] || {};
        });
        var key = keys[keys.length - 1];
        return key in o3;
      }
      function isNumber(x2) {
        if (typeof x2 === "number") {
          return true;
        }
        if (/^0x[0-9a-f]+$/i.test(x2)) {
          return true;
        }
        return /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(x2);
      }
      function isConstructorOrProto(obj, key) {
        return key === "constructor" && typeof obj[key] === "function" || key === "__proto__";
      }
      module2.exports = function(args, opts) {
        if (!opts) {
          opts = {};
        }
        var flags = {
          bools: {},
          strings: {},
          unknownFn: null
        };
        if (typeof opts.unknown === "function") {
          flags.unknownFn = opts.unknown;
        }
        if (typeof opts.boolean === "boolean" && opts.boolean) {
          flags.allBools = true;
        } else {
          [].concat(opts.boolean).filter(Boolean).forEach(function(key2) {
            flags.bools[key2] = true;
          });
        }
        var aliases = {};
        function aliasIsBoolean(key2) {
          return aliases[key2].some(function(x2) {
            return flags.bools[x2];
          });
        }
        Object.keys(opts.alias || {}).forEach(function(key2) {
          aliases[key2] = [].concat(opts.alias[key2]);
          aliases[key2].forEach(function(x2) {
            aliases[x2] = [key2].concat(aliases[key2].filter(function(y) {
              return x2 !== y;
            }));
          });
        });
        [].concat(opts.string).filter(Boolean).forEach(function(key2) {
          flags.strings[key2] = true;
          if (aliases[key2]) {
            [].concat(aliases[key2]).forEach(function(k2) {
              flags.strings[k2] = true;
            });
          }
        });
        var defaults = opts.default || {};
        var argv = { _: [] };
        function argDefined(key2, arg2) {
          return flags.allBools && /^--[^=]+$/.test(arg2) || flags.strings[key2] || flags.bools[key2] || aliases[key2];
        }
        function setKey(obj, keys, value2) {
          var o3 = obj;
          for (var i2 = 0;i2 < keys.length - 1; i2++) {
            var key2 = keys[i2];
            if (isConstructorOrProto(o3, key2)) {
              return;
            }
            if (o3[key2] === undefined) {
              o3[key2] = {};
            }
            if (o3[key2] === Object.prototype || o3[key2] === Number.prototype || o3[key2] === String.prototype) {
              o3[key2] = {};
            }
            if (o3[key2] === Array.prototype) {
              o3[key2] = [];
            }
            o3 = o3[key2];
          }
          var lastKey = keys[keys.length - 1];
          if (isConstructorOrProto(o3, lastKey)) {
            return;
          }
          if (o3 === Object.prototype || o3 === Number.prototype || o3 === String.prototype) {
            o3 = {};
          }
          if (o3 === Array.prototype) {
            o3 = [];
          }
          if (o3[lastKey] === undefined || flags.bools[lastKey] || typeof o3[lastKey] === "boolean") {
            o3[lastKey] = value2;
          } else if (Array.isArray(o3[lastKey])) {
            o3[lastKey].push(value2);
          } else {
            o3[lastKey] = [o3[lastKey], value2];
          }
        }
        function setArg(key2, val, arg2) {
          if (arg2 && flags.unknownFn && !argDefined(key2, arg2)) {
            if (flags.unknownFn(arg2) === false) {
              return;
            }
          }
          var value2 = !flags.strings[key2] && isNumber(val) ? Number(val) : val;
          setKey(argv, key2.split("."), value2);
          (aliases[key2] || []).forEach(function(x2) {
            setKey(argv, x2.split("."), value2);
          });
        }
        Object.keys(flags.bools).forEach(function(key2) {
          setArg(key2, defaults[key2] === undefined ? false : defaults[key2]);
        });
        var notFlags = [];
        if (args.indexOf("--") !== -1) {
          notFlags = args.slice(args.indexOf("--") + 1);
          args = args.slice(0, args.indexOf("--"));
        }
        for (var i = 0;i < args.length; i++) {
          var arg = args[i];
          var key;
          var next;
          if (/^--.+=/.test(arg)) {
            var m2 = arg.match(/^--([^=]+)=([\s\S]*)$/);
            key = m2[1];
            var value = m2[2];
            if (flags.bools[key]) {
              value = value !== "false";
            }
            setArg(key, value, arg);
          } else if (/^--no-.+/.test(arg)) {
            key = arg.match(/^--no-(.+)/)[1];
            setArg(key, false, arg);
          } else if (/^--.+/.test(arg)) {
            key = arg.match(/^--(.+)/)[1];
            next = args[i + 1];
            if (next !== undefined && !/^(-|--)[^-]/.test(next) && !flags.bools[key] && !flags.allBools && (aliases[key] ? !aliasIsBoolean(key) : true)) {
              setArg(key, next, arg);
              i += 1;
            } else if (/^(true|false)$/.test(next)) {
              setArg(key, next === "true", arg);
              i += 1;
            } else {
              setArg(key, flags.strings[key] ? "" : true, arg);
            }
          } else if (/^-[^-]+/.test(arg)) {
            var letters = arg.slice(1, -1).split("");
            var broken = false;
            for (var j = 0;j < letters.length; j++) {
              next = arg.slice(j + 2);
              if (next === "-") {
                setArg(letters[j], next, arg);
                continue;
              }
              if (/[A-Za-z]/.test(letters[j]) && next[0] === "=") {
                setArg(letters[j], next.slice(1), arg);
                broken = true;
                break;
              }
              if (/[A-Za-z]/.test(letters[j]) && /-?\d+(\.\d*)?(e-?\d+)?$/.test(next)) {
                setArg(letters[j], next, arg);
                broken = true;
                break;
              }
              if (letters[j + 1] && letters[j + 1].match(/\W/)) {
                setArg(letters[j], arg.slice(j + 2), arg);
                broken = true;
                break;
              } else {
                setArg(letters[j], flags.strings[letters[j]] ? "" : true, arg);
              }
            }
            key = arg.slice(-1)[0];
            if (!broken && key !== "-") {
              if (args[i + 1] && !/^(-|--)[^-]/.test(args[i + 1]) && !flags.bools[key] && (aliases[key] ? !aliasIsBoolean(key) : true)) {
                setArg(key, args[i + 1], arg);
                i += 1;
              } else if (args[i + 1] && /^(true|false)$/.test(args[i + 1])) {
                setArg(key, args[i + 1] === "true", arg);
                i += 1;
              } else {
                setArg(key, flags.strings[key] ? "" : true, arg);
              }
            }
          } else {
            if (!flags.unknownFn || flags.unknownFn(arg) !== false) {
              argv._.push(flags.strings._ || !isNumber(arg) ? arg : Number(arg));
            }
            if (opts.stopEarly) {
              argv._.push.apply(argv._, args.slice(i + 1));
              break;
            }
          }
        }
        Object.keys(defaults).forEach(function(k2) {
          if (!hasKey(argv, k2.split("."))) {
            setKey(argv, k2.split("."), defaults[k2]);
            (aliases[k2] || []).forEach(function(x2) {
              setKey(argv, x2.split("."), defaults[k2]);
            });
          }
        });
        if (opts["--"]) {
          argv["--"] = notFlags.slice();
        } else {
          notFlags.forEach(function(k2) {
            argv._.push(k2);
          });
        }
        return argv;
      };
    }
  });
  var vendor_extra_exports = {};
  __export(vendor_extra_exports, {
    YAML: () => YAML2,
    createRequire: () => createRequire4,
    depseek: () => depseekSync,
    dotenv: () => index_default,
    fs: () => fs5,
    glob: () => glob2,
    globbyModule: () => globbyModule,
    minimist: () => import_minimist.default,
    nodeFetch: () => s
  });
  module.exports = __toCommonJS(vendor_extra_exports);
  var import_node_process2 = __toESM2(__require("process"), 1);
  var import_node_fs2 = __toESM2(__require("fs"), 1);
  var import_node_path2 = __toESM2(__require("path"), 1);
  var import_node_events = __require("events");
  var import_node_stream = __require("stream");
  var import_promises = __require("stream").promises;
  function mergeStreams(streams) {
    if (!Array.isArray(streams)) {
      throw new TypeError(`Expected an array, got \`${typeof streams}\`.`);
    }
    for (const stream of streams) {
      validateStream(stream);
    }
    const objectMode = streams.some(({ readableObjectMode }) => readableObjectMode);
    const highWaterMark = getHighWaterMark(streams, objectMode);
    const passThroughStream = new MergedStream({
      objectMode,
      writableHighWaterMark: highWaterMark,
      readableHighWaterMark: highWaterMark
    });
    for (const stream of streams) {
      passThroughStream.add(stream);
    }
    if (streams.length === 0) {
      endStream(passThroughStream);
    }
    return passThroughStream;
  }
  var getHighWaterMark = (streams, objectMode) => {
    if (streams.length === 0) {
      return 16384;
    }
    const highWaterMarks = streams.filter(({ readableObjectMode }) => readableObjectMode === objectMode).map(({ readableHighWaterMark }) => readableHighWaterMark);
    return Math.max(...highWaterMarks);
  };
  var _streams;
  var _ended;
  var _aborted;
  var _onFinished;
  var MergedStream = class extends import_node_stream.PassThrough {
    constructor() {
      super(...arguments);
      __privateAdd(this, _streams, /* @__PURE__ */ new Set([]));
      __privateAdd(this, _ended, /* @__PURE__ */ new Set([]));
      __privateAdd(this, _aborted, /* @__PURE__ */ new Set([]));
      __privateAdd(this, _onFinished);
    }
    add(stream) {
      var _a2;
      validateStream(stream);
      if (__privateGet(this, _streams).has(stream)) {
        return;
      }
      __privateGet(this, _streams).add(stream);
      (_a2 = __privateGet(this, _onFinished)) != null || __privateSet(this, _onFinished, onMergedStreamFinished(this, __privateGet(this, _streams)));
      endWhenStreamsDone({
        passThroughStream: this,
        stream,
        streams: __privateGet(this, _streams),
        ended: __privateGet(this, _ended),
        aborted: __privateGet(this, _aborted),
        onFinished: __privateGet(this, _onFinished)
      });
      stream.pipe(this, { end: false });
    }
    remove(stream) {
      validateStream(stream);
      if (!__privateGet(this, _streams).has(stream)) {
        return false;
      }
      stream.unpipe(this);
      return true;
    }
  };
  _streams = new WeakMap;
  _ended = new WeakMap;
  _aborted = new WeakMap;
  _onFinished = new WeakMap;
  var onMergedStreamFinished = (passThroughStream, streams) => __async(undefined, null, function* () {
    updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_COUNT);
    const controller = new AbortController;
    try {
      yield Promise.race([
        onMergedStreamEnd(passThroughStream, controller),
        onInputStreamsUnpipe(passThroughStream, streams, controller)
      ]);
    } finally {
      controller.abort();
      updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_COUNT);
    }
  });
  var onMergedStreamEnd = (_0, _1) => __async(undefined, [_0, _1], function* (passThroughStream, { signal }) {
    yield (0, import_promises.finished)(passThroughStream, { signal, cleanup: true });
  });
  var onInputStreamsUnpipe = (_0, _1, _2) => __async(undefined, [_0, _1, _2], function* (passThroughStream, streams, { signal }) {
    try {
      for (var iter = __forAwait((0, import_node_events.on)(passThroughStream, "unpipe", { signal })), more, temp, error;more = !(temp = yield iter.next()).done; more = false) {
        const [unpipedStream] = temp.value;
        if (streams.has(unpipedStream)) {
          unpipedStream.emit(unpipeEvent);
        }
      }
    } catch (temp2) {
      error = [temp2];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
  var validateStream = (stream) => {
    if (typeof (stream == null ? undefined : stream.pipe) !== "function") {
      throw new TypeError(`Expected a readable stream, got: \`${typeof stream}\`.`);
    }
  };
  var endWhenStreamsDone = (_0) => __async(undefined, [_0], function* ({ passThroughStream, stream, streams, ended, aborted, onFinished }) {
    updateMaxListeners(passThroughStream, PASSTHROUGH_LISTENERS_PER_STREAM);
    const controller = new AbortController;
    try {
      yield Promise.race([
        afterMergedStreamFinished(onFinished, stream),
        onInputStreamEnd({ passThroughStream, stream, streams, ended, aborted, controller }),
        onInputStreamUnpipe({ stream, streams, ended, aborted, controller })
      ]);
    } finally {
      controller.abort();
      updateMaxListeners(passThroughStream, -PASSTHROUGH_LISTENERS_PER_STREAM);
    }
    if (streams.size === ended.size + aborted.size) {
      if (ended.size === 0 && aborted.size > 0) {
        abortStream(passThroughStream);
      } else {
        endStream(passThroughStream);
      }
    }
  });
  var isAbortError = (error) => (error == null ? undefined : error.code) === "ERR_STREAM_PREMATURE_CLOSE";
  var afterMergedStreamFinished = (onFinished, stream) => __async(undefined, null, function* () {
    try {
      yield onFinished;
      abortStream(stream);
    } catch (error) {
      if (isAbortError(error)) {
        abortStream(stream);
      } else {
        errorStream(stream, error);
      }
    }
  });
  var onInputStreamEnd = (_0) => __async(undefined, [_0], function* ({ passThroughStream, stream, streams, ended, aborted, controller: { signal } }) {
    try {
      yield (0, import_promises.finished)(stream, { signal, cleanup: true, readable: true, writable: false });
      if (streams.has(stream)) {
        ended.add(stream);
      }
    } catch (error) {
      if (signal.aborted || !streams.has(stream)) {
        return;
      }
      if (isAbortError(error)) {
        aborted.add(stream);
      } else {
        errorStream(passThroughStream, error);
      }
    }
  });
  var onInputStreamUnpipe = (_0) => __async(undefined, [_0], function* ({ stream, streams, ended, aborted, controller: { signal } }) {
    yield (0, import_node_events.once)(stream, unpipeEvent, { signal });
    streams.delete(stream);
    ended.delete(stream);
    aborted.delete(stream);
  });
  var unpipeEvent = Symbol("unpipe");
  var endStream = (stream) => {
    if (stream.writable) {
      stream.end();
    }
  };
  var abortStream = (stream) => {
    if (stream.readable || stream.writable) {
      stream.destroy();
    }
  };
  var errorStream = (stream, error) => {
    if (!stream.destroyed) {
      stream.once("error", noop);
      stream.destroy(error);
    }
  };
  var noop = () => {};
  var updateMaxListeners = (passThroughStream, increment) => {
    const maxListeners = passThroughStream.getMaxListeners();
    if (maxListeners !== 0 && maxListeners !== Number.POSITIVE_INFINITY) {
      passThroughStream.setMaxListeners(maxListeners + increment);
    }
  };
  var PASSTHROUGH_LISTENERS_COUNT = 2;
  var PASSTHROUGH_LISTENERS_PER_STREAM = 1;
  var import_fast_glob2 = __toESM2(require_out4(), 1);
  var import_fs = __toESM2(__require("fs"), 1);
  function isType(fsStatType, statsMethodName, filePath) {
    return __async(this, null, function* () {
      if (typeof filePath !== "string") {
        throw new TypeError(`Expected a string, got ${typeof filePath}`);
      }
      try {
        const stats = yield import_fs.promises[fsStatType](filePath);
        return stats[statsMethodName]();
      } catch (error) {
        if (error.code === "ENOENT") {
          return false;
        }
        throw error;
      }
    });
  }
  function isTypeSync(fsStatType, statsMethodName, filePath) {
    if (typeof filePath !== "string") {
      throw new TypeError(`Expected a string, got ${typeof filePath}`);
    }
    try {
      return import_fs.default[fsStatType](filePath)[statsMethodName]();
    } catch (error) {
      if (error.code === "ENOENT") {
        return false;
      }
      throw error;
    }
  }
  var isFile = isType.bind(null, "stat", "isFile");
  var isDirectory = isType.bind(null, "stat", "isDirectory");
  var isSymlink = isType.bind(null, "lstat", "isSymbolicLink");
  var isFileSync = isTypeSync.bind(null, "statSync", "isFile");
  var isDirectorySync = isTypeSync.bind(null, "statSync", "isDirectory");
  var isSymlinkSync = isTypeSync.bind(null, "lstatSync", "isSymbolicLink");
  var import_node_url = __require("url");
  function toPath(urlOrPath) {
    return urlOrPath instanceof URL ? (0, import_node_url.fileURLToPath)(urlOrPath) : urlOrPath;
  }
  var import_node_process = __toESM2(__require("process"), 1);
  var import_node_fs = __toESM2(__require("fs"), 1);
  var import_promises2 = __toESM2(__require("fs").promises, 1);
  var import_node_path = __toESM2(__require("path"), 1);
  var import_fast_glob = __toESM2(require_out4(), 1);
  var import_ignore = __toESM2(require_ignore(), 1);
  function slash(path3) {
    const isExtendedLengthPath = path3.startsWith("\\\\?\\");
    if (isExtendedLengthPath) {
      return path3;
    }
    return path3.replace(/\\/g, "/");
  }
  var isNegativePattern = (pattern) => pattern[0] === "!";
  var defaultIgnoredDirectories = [
    "**/node_modules",
    "**/flow-typed",
    "**/coverage",
    "**/.git"
  ];
  var ignoreFilesGlobOptions = {
    absolute: true,
    dot: true
  };
  var GITIGNORE_FILES_PATTERN = "**/.gitignore";
  var applyBaseToPattern = (pattern, base) => isNegativePattern(pattern) ? "!" + import_node_path.default.posix.join(base, pattern.slice(1)) : import_node_path.default.posix.join(base, pattern);
  var parseIgnoreFile = (file, cwd) => {
    const base = slash(import_node_path.default.relative(cwd, import_node_path.default.dirname(file.filePath)));
    return file.content.split(/\r?\n/).filter((line) => line && !line.startsWith("#")).map((pattern) => applyBaseToPattern(pattern, base));
  };
  var toRelativePath = (fileOrDirectory, cwd) => {
    cwd = slash(cwd);
    if (import_node_path.default.isAbsolute(fileOrDirectory)) {
      if (slash(fileOrDirectory).startsWith(cwd)) {
        return import_node_path.default.relative(cwd, fileOrDirectory);
      }
      throw new Error(`Path ${fileOrDirectory} is not in cwd ${cwd}`);
    }
    return fileOrDirectory;
  };
  var getIsIgnoredPredicate = (files, cwd) => {
    const patterns = files.flatMap((file) => parseIgnoreFile(file, cwd));
    const ignores = (0, import_ignore.default)().add(patterns);
    return (fileOrDirectory) => {
      fileOrDirectory = toPath(fileOrDirectory);
      fileOrDirectory = toRelativePath(fileOrDirectory, cwd);
      return fileOrDirectory ? ignores.ignores(slash(fileOrDirectory)) : false;
    };
  };
  var normalizeOptions = (options = {}) => {
    var _a2, _b2;
    return {
      cwd: (_a2 = toPath(options.cwd)) != null ? _a2 : import_node_process.default.cwd(),
      suppressErrors: Boolean(options.suppressErrors),
      deep: typeof options.deep === "number" ? options.deep : Number.POSITIVE_INFINITY,
      ignore: [...(_b2 = options.ignore) != null ? _b2 : [], ...defaultIgnoredDirectories]
    };
  };
  var isIgnoredByIgnoreFiles = (patterns, options) => __async(undefined, null, function* () {
    const { cwd, suppressErrors, deep, ignore } = normalizeOptions(options);
    const paths = yield (0, import_fast_glob.default)(patterns, __spreadValues({
      cwd,
      suppressErrors,
      deep,
      ignore
    }, ignoreFilesGlobOptions));
    const files = yield Promise.all(paths.map((filePath) => __async(undefined, null, function* () {
      return {
        filePath,
        content: yield import_promises2.default.readFile(filePath, "utf8")
      };
    })));
    return getIsIgnoredPredicate(files, cwd);
  });
  var isIgnoredByIgnoreFilesSync = (patterns, options) => {
    const { cwd, suppressErrors, deep, ignore } = normalizeOptions(options);
    const paths = import_fast_glob.default.sync(patterns, __spreadValues({
      cwd,
      suppressErrors,
      deep,
      ignore
    }, ignoreFilesGlobOptions));
    const files = paths.map((filePath) => ({
      filePath,
      content: import_node_fs.default.readFileSync(filePath, "utf8")
    }));
    return getIsIgnoredPredicate(files, cwd);
  };
  var isGitIgnored = (options) => isIgnoredByIgnoreFiles(GITIGNORE_FILES_PATTERN, options);
  var isGitIgnoredSync = (options) => isIgnoredByIgnoreFilesSync(GITIGNORE_FILES_PATTERN, options);
  var assertPatternsInput = (patterns) => {
    if (patterns.some((pattern) => typeof pattern !== "string")) {
      throw new TypeError("Patterns must be a string or an array of strings");
    }
  };
  var normalizePathForDirectoryGlob = (filePath, cwd) => {
    const path3 = isNegativePattern(filePath) ? filePath.slice(1) : filePath;
    return import_node_path2.default.isAbsolute(path3) ? path3 : import_node_path2.default.join(cwd, path3);
  };
  var getDirectoryGlob = ({ directoryPath, files, extensions }) => {
    const extensionGlob = (extensions == null ? undefined : extensions.length) > 0 ? `.${extensions.length > 1 ? `{${extensions.join(",")}}` : extensions[0]}` : "";
    return files ? files.map((file) => import_node_path2.default.posix.join(directoryPath, `**/${import_node_path2.default.extname(file) ? file : `${file}${extensionGlob}`}`)) : [import_node_path2.default.posix.join(directoryPath, `**${extensionGlob ? `/*${extensionGlob}` : ""}`)];
  };
  var directoryToGlob = (_0, ..._1) => __async(undefined, [_0, ..._1], function* (directoryPaths, {
    cwd = import_node_process2.default.cwd(),
    files,
    extensions
  } = {}) {
    const globs = yield Promise.all(directoryPaths.map((directoryPath) => __async(undefined, null, function* () {
      return (yield isDirectory(normalizePathForDirectoryGlob(directoryPath, cwd))) ? getDirectoryGlob({ directoryPath, files, extensions }) : directoryPath;
    })));
    return globs.flat();
  });
  var directoryToGlobSync = (directoryPaths, {
    cwd = import_node_process2.default.cwd(),
    files,
    extensions
  } = {}) => directoryPaths.flatMap((directoryPath) => isDirectorySync(normalizePathForDirectoryGlob(directoryPath, cwd)) ? getDirectoryGlob({ directoryPath, files, extensions }) : directoryPath);
  var toPatternsArray = (patterns) => {
    patterns = [...new Set([patterns].flat())];
    assertPatternsInput(patterns);
    return patterns;
  };
  var checkCwdOption = (cwd) => {
    if (!cwd) {
      return;
    }
    let stat;
    try {
      stat = import_node_fs2.default.statSync(cwd);
    } catch (e) {
      return;
    }
    if (!stat.isDirectory()) {
      throw new Error("The `cwd` option must be a path to a directory");
    }
  };
  var normalizeOptions2 = (options = {}) => {
    var _a2, _b2;
    options = __spreadProps(__spreadValues({}, options), {
      ignore: (_a2 = options.ignore) != null ? _a2 : [],
      expandDirectories: (_b2 = options.expandDirectories) != null ? _b2 : true,
      cwd: toPath(options.cwd)
    });
    checkCwdOption(options.cwd);
    return options;
  };
  var normalizeArguments = (function_) => (patterns, options) => __async(undefined, null, function* () {
    return function_(toPatternsArray(patterns), normalizeOptions2(options));
  });
  var normalizeArgumentsSync = (function_) => (patterns, options) => function_(toPatternsArray(patterns), normalizeOptions2(options));
  var getIgnoreFilesPatterns = (options) => {
    const { ignoreFiles, gitignore } = options;
    const patterns = ignoreFiles ? toPatternsArray(ignoreFiles) : [];
    if (gitignore) {
      patterns.push(GITIGNORE_FILES_PATTERN);
    }
    return patterns;
  };
  var getFilter = (options) => __async(undefined, null, function* () {
    const ignoreFilesPatterns = getIgnoreFilesPatterns(options);
    return createFilterFunction(ignoreFilesPatterns.length > 0 && (yield isIgnoredByIgnoreFiles(ignoreFilesPatterns, options)));
  });
  var getFilterSync = (options) => {
    const ignoreFilesPatterns = getIgnoreFilesPatterns(options);
    return createFilterFunction(ignoreFilesPatterns.length > 0 && isIgnoredByIgnoreFilesSync(ignoreFilesPatterns, options));
  };
  var createFilterFunction = (isIgnored) => {
    const seen = /* @__PURE__ */ new Set;
    return (fastGlobResult) => {
      var _a2;
      const pathKey = import_node_path2.default.normalize((_a2 = fastGlobResult.path) != null ? _a2 : fastGlobResult);
      if (seen.has(pathKey) || isIgnored && isIgnored(pathKey)) {
        return false;
      }
      seen.add(pathKey);
      return true;
    };
  };
  var unionFastGlobResults = (results, filter) => results.flat().filter((fastGlobResult) => filter(fastGlobResult));
  var convertNegativePatterns = (patterns, options) => {
    const tasks = [];
    while (patterns.length > 0) {
      const index = patterns.findIndex((pattern) => isNegativePattern(pattern));
      if (index === -1) {
        tasks.push({ patterns, options });
        break;
      }
      const ignorePattern = patterns[index].slice(1);
      for (const task of tasks) {
        task.options.ignore.push(ignorePattern);
      }
      if (index !== 0) {
        tasks.push({
          patterns: patterns.slice(0, index),
          options: __spreadProps(__spreadValues({}, options), {
            ignore: [
              ...options.ignore,
              ignorePattern
            ]
          })
        });
      }
      patterns = patterns.slice(index + 1);
    }
    return tasks;
  };
  var normalizeExpandDirectoriesOption = (options, cwd) => __spreadValues(__spreadValues({}, cwd ? { cwd } : {}), Array.isArray(options) ? { files: options } : options);
  var generateTasks = (patterns, options) => __async(undefined, null, function* () {
    const globTasks = convertNegativePatterns(patterns, options);
    const { cwd, expandDirectories } = options;
    if (!expandDirectories) {
      return globTasks;
    }
    const directoryToGlobOptions = normalizeExpandDirectoriesOption(expandDirectories, cwd);
    return Promise.all(globTasks.map((task) => __async(undefined, null, function* () {
      let { patterns: patterns2, options: options2 } = task;
      [
        patterns2,
        options2.ignore
      ] = yield Promise.all([
        directoryToGlob(patterns2, directoryToGlobOptions),
        directoryToGlob(options2.ignore, { cwd })
      ]);
      return { patterns: patterns2, options: options2 };
    })));
  });
  var generateTasksSync = (patterns, options) => {
    const globTasks = convertNegativePatterns(patterns, options);
    const { cwd, expandDirectories } = options;
    if (!expandDirectories) {
      return globTasks;
    }
    const directoryToGlobSyncOptions = normalizeExpandDirectoriesOption(expandDirectories, cwd);
    return globTasks.map((task) => {
      let { patterns: patterns2, options: options2 } = task;
      patterns2 = directoryToGlobSync(patterns2, directoryToGlobSyncOptions);
      options2.ignore = directoryToGlobSync(options2.ignore, { cwd });
      return { patterns: patterns2, options: options2 };
    });
  };
  var globby2 = normalizeArguments((patterns, options) => __async(undefined, null, function* () {
    const [
      tasks,
      filter
    ] = yield Promise.all([
      generateTasks(patterns, options),
      getFilter(options)
    ]);
    const results = yield Promise.all(tasks.map((task) => (0, import_fast_glob2.default)(task.patterns, task.options)));
    return unionFastGlobResults(results, filter);
  }));
  var globbySync = normalizeArgumentsSync((patterns, options) => {
    const tasks = generateTasksSync(patterns, options);
    const filter = getFilterSync(options);
    const results = tasks.map((task) => import_fast_glob2.default.sync(task.patterns, task.options));
    return unionFastGlobResults(results, filter);
  });
  var globbyStream = normalizeArgumentsSync((patterns, options) => {
    const tasks = generateTasksSync(patterns, options);
    const filter = getFilterSync(options);
    const streams = tasks.map((task) => import_fast_glob2.default.stream(task.patterns, task.options));
    const stream = mergeStreams(streams).filter((fastGlobResult) => filter(fastGlobResult));
    return stream;
  });
  var isDynamicPattern = normalizeArgumentsSync((patterns, options) => patterns.some((pattern) => import_fast_glob2.default.isDynamicPattern(pattern, options)));
  var generateGlobTasks = normalizeArguments(generateTasks);
  var generateGlobTasksSync = normalizeArgumentsSync(generateTasksSync);
  var { convertPathToPattern } = import_fast_glob2.default;
  var browser_exports = {};
  __export(browser_exports, {
    Alias: () => Alias,
    CST: () => cst_exports,
    Composer: () => Composer,
    Document: () => Document,
    Lexer: () => Lexer,
    LineCounter: () => LineCounter,
    Pair: () => Pair,
    Parser: () => Parser,
    Scalar: () => Scalar,
    Schema: () => Schema,
    YAMLError: () => YAMLError,
    YAMLMap: () => YAMLMap,
    YAMLParseError: () => YAMLParseError,
    YAMLSeq: () => YAMLSeq,
    YAMLWarning: () => YAMLWarning,
    default: () => browser_default,
    isAlias: () => isAlias,
    isCollection: () => isCollection,
    isDocument: () => isDocument,
    isMap: () => isMap,
    isNode: () => isNode,
    isPair: () => isPair,
    isScalar: () => isScalar,
    isSeq: () => isSeq,
    parse: () => parse,
    parseAllDocuments: () => parseAllDocuments,
    parseDocument: () => parseDocument,
    stringify: () => stringify3,
    visit: () => visit,
    visitAsync: () => visitAsync
  });
  var dist_exports = {};
  __export(dist_exports, {
    Alias: () => Alias,
    CST: () => cst_exports,
    Composer: () => Composer,
    Document: () => Document,
    Lexer: () => Lexer,
    LineCounter: () => LineCounter,
    Pair: () => Pair,
    Parser: () => Parser,
    Scalar: () => Scalar,
    Schema: () => Schema,
    YAMLError: () => YAMLError,
    YAMLMap: () => YAMLMap,
    YAMLParseError: () => YAMLParseError,
    YAMLSeq: () => YAMLSeq,
    YAMLWarning: () => YAMLWarning,
    isAlias: () => isAlias,
    isCollection: () => isCollection,
    isDocument: () => isDocument,
    isMap: () => isMap,
    isNode: () => isNode,
    isPair: () => isPair,
    isScalar: () => isScalar,
    isSeq: () => isSeq,
    parse: () => parse,
    parseAllDocuments: () => parseAllDocuments,
    parseDocument: () => parseDocument,
    stringify: () => stringify3,
    visit: () => visit,
    visitAsync: () => visitAsync
  });
  var ALIAS = Symbol.for("yaml.alias");
  var DOC = Symbol.for("yaml.document");
  var MAP = Symbol.for("yaml.map");
  var PAIR = Symbol.for("yaml.pair");
  var SCALAR = Symbol.for("yaml.scalar");
  var SEQ = Symbol.for("yaml.seq");
  var NODE_TYPE = Symbol.for("yaml.node.type");
  var isAlias = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
  var isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
  var isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
  var isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
  var isScalar = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR;
  var isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
  function isCollection(node) {
    if (node && typeof node === "object")
      switch (node[NODE_TYPE]) {
        case MAP:
        case SEQ:
          return true;
      }
    return false;
  }
  function isNode(node) {
    if (node && typeof node === "object")
      switch (node[NODE_TYPE]) {
        case ALIAS:
        case MAP:
        case SCALAR:
        case SEQ:
          return true;
      }
    return false;
  }
  var hasAnchor = (node) => (isScalar(node) || isCollection(node)) && !!node.anchor;
  var BREAK = Symbol("break visit");
  var SKIP = Symbol("skip children");
  var REMOVE = Symbol("remove node");
  function visit(node, visitor) {
    const visitor_ = initVisitor(visitor);
    if (isDocument(node)) {
      const cd = visit_(null, node.contents, visitor_, Object.freeze([node]));
      if (cd === REMOVE)
        node.contents = null;
    } else
      visit_(null, node, visitor_, Object.freeze([]));
  }
  visit.BREAK = BREAK;
  visit.SKIP = SKIP;
  visit.REMOVE = REMOVE;
  function visit_(key, node, visitor, path3) {
    const ctrl = callVisitor(key, node, visitor, path3);
    if (isNode(ctrl) || isPair(ctrl)) {
      replaceNode(key, path3, ctrl);
      return visit_(key, ctrl, visitor, path3);
    }
    if (typeof ctrl !== "symbol") {
      if (isCollection(node)) {
        path3 = Object.freeze(path3.concat(node));
        for (let i = 0;i < node.items.length; ++i) {
          const ci2 = visit_(i, node.items[i], visitor, path3);
          if (typeof ci2 === "number")
            i = ci2 - 1;
          else if (ci2 === BREAK)
            return BREAK;
          else if (ci2 === REMOVE) {
            node.items.splice(i, 1);
            i -= 1;
          }
        }
      } else if (isPair(node)) {
        path3 = Object.freeze(path3.concat(node));
        const ck = visit_("key", node.key, visitor, path3);
        if (ck === BREAK)
          return BREAK;
        else if (ck === REMOVE)
          node.key = null;
        const cv = visit_("value", node.value, visitor, path3);
        if (cv === BREAK)
          return BREAK;
        else if (cv === REMOVE)
          node.value = null;
      }
    }
    return ctrl;
  }
  function visitAsync(node, visitor) {
    return __async(this, null, function* () {
      const visitor_ = initVisitor(visitor);
      if (isDocument(node)) {
        const cd = yield visitAsync_(null, node.contents, visitor_, Object.freeze([node]));
        if (cd === REMOVE)
          node.contents = null;
      } else
        yield visitAsync_(null, node, visitor_, Object.freeze([]));
    });
  }
  visitAsync.BREAK = BREAK;
  visitAsync.SKIP = SKIP;
  visitAsync.REMOVE = REMOVE;
  function visitAsync_(key, node, visitor, path3) {
    return __async(this, null, function* () {
      const ctrl = yield callVisitor(key, node, visitor, path3);
      if (isNode(ctrl) || isPair(ctrl)) {
        replaceNode(key, path3, ctrl);
        return visitAsync_(key, ctrl, visitor, path3);
      }
      if (typeof ctrl !== "symbol") {
        if (isCollection(node)) {
          path3 = Object.freeze(path3.concat(node));
          for (let i = 0;i < node.items.length; ++i) {
            const ci2 = yield visitAsync_(i, node.items[i], visitor, path3);
            if (typeof ci2 === "number")
              i = ci2 - 1;
            else if (ci2 === BREAK)
              return BREAK;
            else if (ci2 === REMOVE) {
              node.items.splice(i, 1);
              i -= 1;
            }
          }
        } else if (isPair(node)) {
          path3 = Object.freeze(path3.concat(node));
          const ck = yield visitAsync_("key", node.key, visitor, path3);
          if (ck === BREAK)
            return BREAK;
          else if (ck === REMOVE)
            node.key = null;
          const cv = yield visitAsync_("value", node.value, visitor, path3);
          if (cv === BREAK)
            return BREAK;
          else if (cv === REMOVE)
            node.value = null;
        }
      }
      return ctrl;
    });
  }
  function initVisitor(visitor) {
    if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) {
      return Object.assign({
        Alias: visitor.Node,
        Map: visitor.Node,
        Scalar: visitor.Node,
        Seq: visitor.Node
      }, visitor.Value && {
        Map: visitor.Value,
        Scalar: visitor.Value,
        Seq: visitor.Value
      }, visitor.Collection && {
        Map: visitor.Collection,
        Seq: visitor.Collection
      }, visitor);
    }
    return visitor;
  }
  function callVisitor(key, node, visitor, path3) {
    var _a2, _b2, _c, _d, _e;
    if (typeof visitor === "function")
      return visitor(key, node, path3);
    if (isMap(node))
      return (_a2 = visitor.Map) == null ? undefined : _a2.call(visitor, key, node, path3);
    if (isSeq(node))
      return (_b2 = visitor.Seq) == null ? undefined : _b2.call(visitor, key, node, path3);
    if (isPair(node))
      return (_c = visitor.Pair) == null ? undefined : _c.call(visitor, key, node, path3);
    if (isScalar(node))
      return (_d = visitor.Scalar) == null ? undefined : _d.call(visitor, key, node, path3);
    if (isAlias(node))
      return (_e = visitor.Alias) == null ? undefined : _e.call(visitor, key, node, path3);
    return;
  }
  function replaceNode(key, path3, node) {
    const parent = path3[path3.length - 1];
    if (isCollection(parent)) {
      parent.items[key] = node;
    } else if (isPair(parent)) {
      if (key === "key")
        parent.key = node;
      else
        parent.value = node;
    } else if (isDocument(parent)) {
      parent.contents = node;
    } else {
      const pt2 = isAlias(parent) ? "alias" : "scalar";
      throw new Error(`Cannot replace node with ${pt2} parent`);
    }
  }
  var escapeChars = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
  };
  var escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
  var Directives = class _Directives {
    constructor(yaml, tags) {
      this.docStart = null;
      this.docEnd = false;
      this.yaml = Object.assign({}, _Directives.defaultYaml, yaml);
      this.tags = Object.assign({}, _Directives.defaultTags, tags);
    }
    clone() {
      const copy = new _Directives(this.yaml, this.tags);
      copy.docStart = this.docStart;
      return copy;
    }
    atDocument() {
      const res = new _Directives(this.yaml, this.tags);
      switch (this.yaml.version) {
        case "1.1":
          this.atNextDocument = true;
          break;
        case "1.2":
          this.atNextDocument = false;
          this.yaml = {
            explicit: _Directives.defaultYaml.explicit,
            version: "1.2"
          };
          this.tags = Object.assign({}, _Directives.defaultTags);
          break;
      }
      return res;
    }
    add(line, onError) {
      if (this.atNextDocument) {
        this.yaml = { explicit: _Directives.defaultYaml.explicit, version: "1.1" };
        this.tags = Object.assign({}, _Directives.defaultTags);
        this.atNextDocument = false;
      }
      const parts = line.trim().split(/[ \t]+/);
      const name = parts.shift();
      switch (name) {
        case "%TAG": {
          if (parts.length !== 2) {
            onError(0, "%TAG directive should contain exactly two parts");
            if (parts.length < 2)
              return false;
          }
          const [handle, prefix] = parts;
          this.tags[handle] = prefix;
          return true;
        }
        case "%YAML": {
          this.yaml.explicit = true;
          if (parts.length !== 1) {
            onError(0, "%YAML directive should contain exactly one part");
            return false;
          }
          const [version] = parts;
          if (version === "1.1" || version === "1.2") {
            this.yaml.version = version;
            return true;
          } else {
            const isValid = /^\d+\.\d+$/.test(version);
            onError(6, `Unsupported YAML version ${version}`, isValid);
            return false;
          }
        }
        default:
          onError(0, `Unknown directive ${name}`, true);
          return false;
      }
    }
    tagName(source, onError) {
      if (source === "!")
        return "!";
      if (source[0] !== "!") {
        onError(`Not a valid tag: ${source}`);
        return null;
      }
      if (source[1] === "<") {
        const verbatim = source.slice(2, -1);
        if (verbatim === "!" || verbatim === "!!") {
          onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
          return null;
        }
        if (source[source.length - 1] !== ">")
          onError("Verbatim tags must end with a >");
        return verbatim;
      }
      const [, handle, suffix] = source.match(new RegExp("^(.*!)([^!]*)$", "s"));
      if (!suffix)
        onError(`The ${source} tag has no suffix`);
      const prefix = this.tags[handle];
      if (prefix) {
        try {
          return prefix + decodeURIComponent(suffix);
        } catch (error) {
          onError(String(error));
          return null;
        }
      }
      if (handle === "!")
        return source;
      onError(`Could not resolve tag: ${source}`);
      return null;
    }
    tagString(tag) {
      for (const [handle, prefix] of Object.entries(this.tags)) {
        if (tag.startsWith(prefix))
          return handle + escapeTagName(tag.substring(prefix.length));
      }
      return tag[0] === "!" ? tag : `!<${tag}>`;
    }
    toString(doc) {
      const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
      const tagEntries = Object.entries(this.tags);
      let tagNames;
      if (doc && tagEntries.length > 0 && isNode(doc.contents)) {
        const tags = {};
        visit(doc.contents, (_key, node) => {
          if (isNode(node) && node.tag)
            tags[node.tag] = true;
        });
        tagNames = Object.keys(tags);
      } else
        tagNames = [];
      for (const [handle, prefix] of tagEntries) {
        if (handle === "!!" && prefix === "tag:yaml.org,2002:")
          continue;
        if (!doc || tagNames.some((tn) => tn.startsWith(prefix)))
          lines.push(`%TAG ${handle} ${prefix}`);
      }
      return lines.join(`
`);
    }
  };
  Directives.defaultYaml = { explicit: false, version: "1.2" };
  Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
  function anchorIsValid(anchor) {
    if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
      const sa = JSON.stringify(anchor);
      const msg = `Anchor must not contain whitespace or control characters: ${sa}`;
      throw new Error(msg);
    }
    return true;
  }
  function anchorNames(root) {
    const anchors = /* @__PURE__ */ new Set;
    visit(root, {
      Value(_key, node) {
        if (node.anchor)
          anchors.add(node.anchor);
      }
    });
    return anchors;
  }
  function findNewAnchor(prefix, exclude) {
    for (let i = 1;; ++i) {
      const name = `${prefix}${i}`;
      if (!exclude.has(name))
        return name;
    }
  }
  function createNodeAnchors(doc, prefix) {
    const aliasObjects = [];
    const sourceObjects = /* @__PURE__ */ new Map;
    let prevAnchors = null;
    return {
      onAnchor: (source) => {
        aliasObjects.push(source);
        if (!prevAnchors)
          prevAnchors = anchorNames(doc);
        const anchor = findNewAnchor(prefix, prevAnchors);
        prevAnchors.add(anchor);
        return anchor;
      },
      setAnchors: () => {
        for (const source of aliasObjects) {
          const ref = sourceObjects.get(source);
          if (typeof ref === "object" && ref.anchor && (isScalar(ref.node) || isCollection(ref.node))) {
            ref.node.anchor = ref.anchor;
          } else {
            const error = new Error("Failed to resolve repeated object (this should not happen)");
            error.source = source;
            throw error;
          }
        }
      },
      sourceObjects
    };
  }
  function applyReviver(reviver, obj, key, val) {
    if (val && typeof val === "object") {
      if (Array.isArray(val)) {
        for (let i = 0, len = val.length;i < len; ++i) {
          const v0 = val[i];
          const v1 = applyReviver(reviver, val, String(i), v0);
          if (v1 === undefined)
            delete val[i];
          else if (v1 !== v0)
            val[i] = v1;
        }
      } else if (val instanceof Map) {
        for (const k2 of Array.from(val.keys())) {
          const v0 = val.get(k2);
          const v1 = applyReviver(reviver, val, k2, v0);
          if (v1 === undefined)
            val.delete(k2);
          else if (v1 !== v0)
            val.set(k2, v1);
        }
      } else if (val instanceof Set) {
        for (const v0 of Array.from(val)) {
          const v1 = applyReviver(reviver, val, v0, v0);
          if (v1 === undefined)
            val.delete(v0);
          else if (v1 !== v0) {
            val.delete(v0);
            val.add(v1);
          }
        }
      } else {
        for (const [k2, v0] of Object.entries(val)) {
          const v1 = applyReviver(reviver, val, k2, v0);
          if (v1 === undefined)
            delete val[k2];
          else if (v1 !== v0)
            val[k2] = v1;
        }
      }
    }
    return reviver.call(obj, key, val);
  }
  function toJS(value, arg, ctx) {
    if (Array.isArray(value))
      return value.map((v2, i) => toJS(v2, String(i), ctx));
    if (value && typeof value.toJSON === "function") {
      if (!ctx || !hasAnchor(value))
        return value.toJSON(arg, ctx);
      const data = { aliasCount: 0, count: 1, res: undefined };
      ctx.anchors.set(value, data);
      ctx.onCreate = (res2) => {
        data.res = res2;
        delete ctx.onCreate;
      };
      const res = value.toJSON(arg, ctx);
      if (ctx.onCreate)
        ctx.onCreate(res);
      return res;
    }
    if (typeof value === "bigint" && !(ctx == null ? undefined : ctx.keep))
      return Number(value);
    return value;
  }
  var NodeBase = class {
    constructor(type) {
      Object.defineProperty(this, NODE_TYPE, { value: type });
    }
    clone() {
      const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (this.range)
        copy.range = this.range.slice();
      return copy;
    }
    toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
      if (!isDocument(doc))
        throw new TypeError("A document argument is required");
      const ctx = {
        anchors: /* @__PURE__ */ new Map,
        doc,
        keep: true,
        mapAsMap: mapAsMap === true,
        mapKeyWarned: false,
        maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
      };
      const res = toJS(this, "", ctx);
      if (typeof onAnchor === "function")
        for (const { count, res: res2 } of ctx.anchors.values())
          onAnchor(res2, count);
      return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
    }
  };
  var Alias = class extends NodeBase {
    constructor(source) {
      super(ALIAS);
      this.source = source;
      Object.defineProperty(this, "tag", {
        set() {
          throw new Error("Alias nodes cannot have tags");
        }
      });
    }
    resolve(doc) {
      let found = undefined;
      visit(doc, {
        Node: (_key, node) => {
          if (node === this)
            return visit.BREAK;
          if (node.anchor === this.source)
            found = node;
        }
      });
      return found;
    }
    toJSON(_arg, ctx) {
      if (!ctx)
        return { source: this.source };
      const { anchors, doc, maxAliasCount } = ctx;
      const source = this.resolve(doc);
      if (!source) {
        const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new ReferenceError(msg);
      }
      let data = anchors.get(source);
      if (!data) {
        toJS(source, null, ctx);
        data = anchors.get(source);
      }
      if (!data || data.res === undefined) {
        const msg = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(msg);
      }
      if (maxAliasCount >= 0) {
        data.count += 1;
        if (data.aliasCount === 0)
          data.aliasCount = getAliasCount(doc, source, anchors);
        if (data.count * data.aliasCount > maxAliasCount) {
          const msg = "Excessive alias count indicates a resource exhaustion attack";
          throw new ReferenceError(msg);
        }
      }
      return data.res;
    }
    toString(ctx, _onComment, _onChompKeep) {
      const src = `*${this.source}`;
      if (ctx) {
        anchorIsValid(this.source);
        if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
          const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new Error(msg);
        }
        if (ctx.implicitKey)
          return `${src} `;
      }
      return src;
    }
  };
  function getAliasCount(doc, node, anchors) {
    if (isAlias(node)) {
      const source = node.resolve(doc);
      const anchor = anchors && source && anchors.get(source);
      return anchor ? anchor.count * anchor.aliasCount : 0;
    } else if (isCollection(node)) {
      let count = 0;
      for (const item of node.items) {
        const c = getAliasCount(doc, item, anchors);
        if (c > count)
          count = c;
      }
      return count;
    } else if (isPair(node)) {
      const kc = getAliasCount(doc, node.key, anchors);
      const vc = getAliasCount(doc, node.value, anchors);
      return Math.max(kc, vc);
    }
    return 1;
  }
  var isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
  var Scalar = class extends NodeBase {
    constructor(value) {
      super(SCALAR);
      this.value = value;
    }
    toJSON(arg, ctx) {
      return (ctx == null ? undefined : ctx.keep) ? this.value : toJS(this.value, arg, ctx);
    }
    toString() {
      return String(this.value);
    }
  };
  Scalar.BLOCK_FOLDED = "BLOCK_FOLDED";
  Scalar.BLOCK_LITERAL = "BLOCK_LITERAL";
  Scalar.PLAIN = "PLAIN";
  Scalar.QUOTE_DOUBLE = "QUOTE_DOUBLE";
  Scalar.QUOTE_SINGLE = "QUOTE_SINGLE";
  var defaultTagPrefix = "tag:yaml.org,2002:";
  function findTagObject(value, tagName, tags) {
    var _a2;
    if (tagName) {
      const match = tags.filter((t4) => t4.tag === tagName);
      const tagObj = (_a2 = match.find((t4) => !t4.format)) != null ? _a2 : match[0];
      if (!tagObj)
        throw new Error(`Tag ${tagName} not found`);
      return tagObj;
    }
    return tags.find((t4) => {
      var _a3;
      return ((_a3 = t4.identify) == null ? undefined : _a3.call(t4, value)) && !t4.format;
    });
  }
  function createNode(value, tagName, ctx) {
    var _a2, _b2, _c;
    if (isDocument(value))
      value = value.contents;
    if (isNode(value))
      return value;
    if (isPair(value)) {
      const map2 = (_b2 = (_a2 = ctx.schema[MAP]).createNode) == null ? undefined : _b2.call(_a2, ctx.schema, null, ctx);
      map2.items.push(value);
      return map2;
    }
    if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) {
      value = value.valueOf();
    }
    const { aliasDuplicateObjects, onAnchor, onTagObj, schema: schema4, sourceObjects } = ctx;
    let ref = undefined;
    if (aliasDuplicateObjects && value && typeof value === "object") {
      ref = sourceObjects.get(value);
      if (ref) {
        if (!ref.anchor)
          ref.anchor = onAnchor(value);
        return new Alias(ref.anchor);
      } else {
        ref = { anchor: null, node: null };
        sourceObjects.set(value, ref);
      }
    }
    if (tagName == null ? undefined : tagName.startsWith("!!"))
      tagName = defaultTagPrefix + tagName.slice(2);
    let tagObj = findTagObject(value, tagName, schema4.tags);
    if (!tagObj) {
      if (value && typeof value.toJSON === "function") {
        value = value.toJSON();
      }
      if (!value || typeof value !== "object") {
        const node2 = new Scalar(value);
        if (ref)
          ref.node = node2;
        return node2;
      }
      tagObj = value instanceof Map ? schema4[MAP] : (Symbol.iterator in Object(value)) ? schema4[SEQ] : schema4[MAP];
    }
    if (onTagObj) {
      onTagObj(tagObj);
      delete ctx.onTagObj;
    }
    const node = (tagObj == null ? undefined : tagObj.createNode) ? tagObj.createNode(ctx.schema, value, ctx) : typeof ((_c = tagObj == null ? undefined : tagObj.nodeClass) == null ? undefined : _c.from) === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar(value);
    if (tagName)
      node.tag = tagName;
    else if (!tagObj.default)
      node.tag = tagObj.tag;
    if (ref)
      ref.node = node;
    return node;
  }
  function collectionFromPath(schema4, path3, value) {
    let v2 = value;
    for (let i = path3.length - 1;i >= 0; --i) {
      const k2 = path3[i];
      if (typeof k2 === "number" && Number.isInteger(k2) && k2 >= 0) {
        const a2 = [];
        a2[k2] = v2;
        v2 = a2;
      } else {
        v2 = /* @__PURE__ */ new Map([[k2, v2]]);
      }
    }
    return createNode(v2, undefined, {
      aliasDuplicateObjects: false,
      keepUndefined: false,
      onAnchor: () => {
        throw new Error("This should not happen, please report a bug.");
      },
      schema: schema4,
      sourceObjects: /* @__PURE__ */ new Map
    });
  }
  var isEmptyPath = (path3) => path3 == null || typeof path3 === "object" && !!path3[Symbol.iterator]().next().done;
  var Collection = class extends NodeBase {
    constructor(type, schema4) {
      super(type);
      Object.defineProperty(this, "schema", {
        value: schema4,
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
    clone(schema4) {
      const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      if (schema4)
        copy.schema = schema4;
      copy.items = copy.items.map((it) => isNode(it) || isPair(it) ? it.clone(schema4) : it);
      if (this.range)
        copy.range = this.range.slice();
      return copy;
    }
    addIn(path3, value) {
      if (isEmptyPath(path3))
        this.add(value);
      else {
        const [key, ...rest] = path3;
        const node = this.get(key, true);
        if (isCollection(node))
          node.addIn(rest, value);
        else if (node === undefined && this.schema)
          this.set(key, collectionFromPath(this.schema, rest, value));
        else
          throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
    }
    deleteIn(path3) {
      const [key, ...rest] = path3;
      if (rest.length === 0)
        return this.delete(key);
      const node = this.get(key, true);
      if (isCollection(node))
        return node.deleteIn(rest);
      else
        throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
    getIn(path3, keepScalar) {
      const [key, ...rest] = path3;
      const node = this.get(key, true);
      if (rest.length === 0)
        return !keepScalar && isScalar(node) ? node.value : node;
      else
        return isCollection(node) ? node.getIn(rest, keepScalar) : undefined;
    }
    hasAllNullValues(allowScalar) {
      return this.items.every((node) => {
        if (!isPair(node))
          return false;
        const n3 = node.value;
        return n3 == null || allowScalar && isScalar(n3) && n3.value == null && !n3.commentBefore && !n3.comment && !n3.tag;
      });
    }
    hasIn(path3) {
      const [key, ...rest] = path3;
      if (rest.length === 0)
        return this.has(key);
      const node = this.get(key, true);
      return isCollection(node) ? node.hasIn(rest) : false;
    }
    setIn(path3, value) {
      const [key, ...rest] = path3;
      if (rest.length === 0) {
        this.set(key, value);
      } else {
        const node = this.get(key, true);
        if (isCollection(node))
          node.setIn(rest, value);
        else if (node === undefined && this.schema)
          this.set(key, collectionFromPath(this.schema, rest, value));
        else
          throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
      }
    }
  };
  var stringifyComment = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
  function indentComment(comment, indent) {
    if (/^\n+$/.test(comment))
      return comment.substring(1);
    return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
  }
  var lineComment = (str, indent, comment) => str.endsWith(`
`) ? indentComment(comment, indent) : comment.includes(`
`) ? `
` + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
  var FOLD_FLOW = "flow";
  var FOLD_BLOCK = "block";
  var FOLD_QUOTED = "quoted";
  function foldFlowLines(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
    if (!lineWidth || lineWidth < 0)
      return text;
    if (lineWidth < minContentWidth)
      minContentWidth = 0;
    const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
    if (text.length <= endStep)
      return text;
    const folds = [];
    const escapedFolds = {};
    let end = lineWidth - indent.length;
    if (typeof indentAtStart === "number") {
      if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
        folds.push(0);
      else
        end = lineWidth - indentAtStart;
    }
    let split = undefined;
    let prev = undefined;
    let overflow = false;
    let i = -1;
    let escStart = -1;
    let escEnd = -1;
    if (mode === FOLD_BLOCK) {
      i = consumeMoreIndentedLines(text, i, indent.length);
      if (i !== -1)
        end = i + endStep;
    }
    for (let ch;ch = text[i += 1]; ) {
      if (mode === FOLD_QUOTED && ch === "\\") {
        escStart = i;
        switch (text[i + 1]) {
          case "x":
            i += 3;
            break;
          case "u":
            i += 5;
            break;
          case "U":
            i += 9;
            break;
          default:
            i += 1;
        }
        escEnd = i;
      }
      if (ch === `
`) {
        if (mode === FOLD_BLOCK)
          i = consumeMoreIndentedLines(text, i, indent.length);
        end = i + indent.length + endStep;
        split = undefined;
      } else {
        if (ch === " " && prev && prev !== " " && prev !== `
` && prev !== "\t") {
          const next = text[i + 1];
          if (next && next !== " " && next !== `
` && next !== "\t")
            split = i;
        }
        if (i >= end) {
          if (split) {
            folds.push(split);
            end = split + endStep;
            split = undefined;
          } else if (mode === FOLD_QUOTED) {
            while (prev === " " || prev === "\t") {
              prev = ch;
              ch = text[i += 1];
              overflow = true;
            }
            const j = i > escEnd + 1 ? i - 2 : escStart - 1;
            if (escapedFolds[j])
              return text;
            folds.push(j);
            escapedFolds[j] = true;
            end = j + endStep;
            split = undefined;
          } else {
            overflow = true;
          }
        }
      }
      prev = ch;
    }
    if (overflow && onOverflow)
      onOverflow();
    if (folds.length === 0)
      return text;
    if (onFold)
      onFold();
    let res = text.slice(0, folds[0]);
    for (let i2 = 0;i2 < folds.length; ++i2) {
      const fold = folds[i2];
      const end2 = folds[i2 + 1] || text.length;
      if (fold === 0)
        res = `
${indent}${text.slice(0, end2)}`;
      else {
        if (mode === FOLD_QUOTED && escapedFolds[fold])
          res += `${text[fold]}\\`;
        res += `
${indent}${text.slice(fold + 1, end2)}`;
      }
    }
    return res;
  }
  function consumeMoreIndentedLines(text, i, indent) {
    let end = i;
    let start = i + 1;
    let ch = text[start];
    while (ch === " " || ch === "\t") {
      if (i < start + indent) {
        ch = text[++i];
      } else {
        do {
          ch = text[++i];
        } while (ch && ch !== `
`);
        end = i;
        start = i + 1;
        ch = text[start];
      }
    }
    return end;
  }
  var getFoldOptions = (ctx, isBlock2) => ({
    indentAtStart: isBlock2 ? ctx.indent.length : ctx.indentAtStart,
    lineWidth: ctx.options.lineWidth,
    minContentWidth: ctx.options.minContentWidth
  });
  var containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
  function lineLengthOverLimit(str, lineWidth, indentLength) {
    if (!lineWidth || lineWidth < 0)
      return false;
    const limit = lineWidth - indentLength;
    const strLen = str.length;
    if (strLen <= limit)
      return false;
    for (let i = 0, start = 0;i < strLen; ++i) {
      if (str[i] === `
`) {
        if (i - start > limit)
          return true;
        start = i + 1;
        if (strLen - start <= limit)
          return false;
      }
    }
    return true;
  }
  function doubleQuotedString(value, ctx) {
    const json = JSON.stringify(value);
    if (ctx.options.doubleQuotedAsJSON)
      return json;
    const { implicitKey } = ctx;
    const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
    const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
    let str = "";
    let start = 0;
    for (let i = 0, ch = json[i];ch; ch = json[++i]) {
      if (ch === " " && json[i + 1] === "\\" && json[i + 2] === "n") {
        str += json.slice(start, i) + "\\ ";
        i += 1;
        start = i;
        ch = "\\";
      }
      if (ch === "\\")
        switch (json[i + 1]) {
          case "u":
            {
              str += json.slice(start, i);
              const code = json.substr(i + 2, 4);
              switch (code) {
                case "0000":
                  str += "\\0";
                  break;
                case "0007":
                  str += "\\a";
                  break;
                case "000b":
                  str += "\\v";
                  break;
                case "001b":
                  str += "\\e";
                  break;
                case "0085":
                  str += "\\N";
                  break;
                case "00a0":
                  str += "\\_";
                  break;
                case "2028":
                  str += "\\L";
                  break;
                case "2029":
                  str += "\\P";
                  break;
                default:
                  if (code.substr(0, 2) === "00")
                    str += "\\x" + code.substr(2);
                  else
                    str += json.substr(i, 6);
              }
              i += 5;
              start = i + 1;
            }
            break;
          case "n":
            if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
              i += 1;
            } else {
              str += json.slice(start, i) + `

`;
              while (json[i + 2] === "\\" && json[i + 3] === "n" && json[i + 4] !== '"') {
                str += `
`;
                i += 2;
              }
              str += indent;
              if (json[i + 2] === " ")
                str += "\\";
              i += 1;
              start = i + 1;
            }
            break;
          default:
            i += 1;
        }
    }
    str = start ? str + json.slice(start) : json;
    return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx, false));
  }
  function singleQuotedString(value, ctx) {
    if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes(`
`) || /[ \t]\n|\n[ \t]/.test(value))
      return doubleQuotedString(value, ctx);
    const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
    const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
    return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx, false));
  }
  function quotedString(value, ctx) {
    const { singleQuote } = ctx.options;
    let qs2;
    if (singleQuote === false)
      qs2 = doubleQuotedString;
    else {
      const hasDouble = value.includes('"');
      const hasSingle = value.includes("'");
      if (hasDouble && !hasSingle)
        qs2 = singleQuotedString;
      else if (hasSingle && !hasDouble)
        qs2 = doubleQuotedString;
      else
        qs2 = singleQuote ? singleQuotedString : doubleQuotedString;
    }
    return qs2(value, ctx);
  }
  var blockEndNewlines;
  try {
    blockEndNewlines = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
  } catch (e) {
    blockEndNewlines = /\n+(?!\n|$)/g;
  }
  function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
    const { blockQuote, commentString, lineWidth } = ctx.options;
    if (!blockQuote || /\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
      return quotedString(value, ctx);
    }
    const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
    const literal = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar.BLOCK_FOLDED ? false : type === Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
    if (!value)
      return literal ? `|
` : `>
`;
    let chomp;
    let endStart;
    for (endStart = value.length;endStart > 0; --endStart) {
      const ch = value[endStart - 1];
      if (ch !== `
` && ch !== "\t" && ch !== " ")
        break;
    }
    let end = value.substring(endStart);
    const endNlPos = end.indexOf(`
`);
    if (endNlPos === -1) {
      chomp = "-";
    } else if (value === end || endNlPos !== end.length - 1) {
      chomp = "+";
      if (onChompKeep)
        onChompKeep();
    } else {
      chomp = "";
    }
    if (end) {
      value = value.slice(0, -end.length);
      if (end[end.length - 1] === `
`)
        end = end.slice(0, -1);
      end = end.replace(blockEndNewlines, `$&${indent}`);
    }
    let startWithSpace = false;
    let startEnd;
    let startNlPos = -1;
    for (startEnd = 0;startEnd < value.length; ++startEnd) {
      const ch = value[startEnd];
      if (ch === " ")
        startWithSpace = true;
      else if (ch === `
`)
        startNlPos = startEnd;
      else
        break;
    }
    let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
    if (start) {
      value = value.substring(start.length);
      start = start.replace(/\n+/g, `$&${indent}`);
    }
    const indentSize = indent ? "2" : "1";
    let header = (startWithSpace ? indentSize : "") + chomp;
    if (comment) {
      header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
      if (onComment)
        onComment();
    }
    if (!literal) {
      const foldedValue = value.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
      let literalFallback = false;
      const foldOptions = getFoldOptions(ctx, true);
      if (blockQuote !== "folded" && type !== Scalar.BLOCK_FOLDED) {
        foldOptions.onOverflow = () => {
          literalFallback = true;
        };
      }
      const body = foldFlowLines(`${start}${foldedValue}${end}`, indent, FOLD_BLOCK, foldOptions);
      if (!literalFallback)
        return `>${header}
${indent}${body}`;
    }
    value = value.replace(/\n+/g, `$&${indent}`);
    return `|${header}
${indent}${start}${value}${end}`;
  }
  function plainString(item, ctx, onComment, onChompKeep) {
    const { type, value } = item;
    const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
    if (implicitKey && value.includes(`
`) || inFlow && /[[\]{},]/.test(value)) {
      return quotedString(value, ctx);
    }
    if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
      return implicitKey || inFlow || !value.includes(`
`) ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
    }
    if (!implicitKey && !inFlow && type !== Scalar.PLAIN && value.includes(`
`)) {
      return blockString(item, ctx, onComment, onChompKeep);
    }
    if (containsDocumentMarker(value)) {
      if (indent === "") {
        ctx.forceBlockIndent = true;
        return blockString(item, ctx, onComment, onChompKeep);
      } else if (implicitKey && indent === indentStep) {
        return quotedString(value, ctx);
      }
    }
    const str = value.replace(/\n+/g, `$&
${indent}`);
    if (actualString) {
      const test = (tag) => {
        var _a2;
        return tag.default && tag.tag !== "tag:yaml.org,2002:str" && ((_a2 = tag.test) == null ? undefined : _a2.test(str));
      };
      const { compat, tags } = ctx.doc.schema;
      if (tags.some(test) || (compat == null ? undefined : compat.some(test)))
        return quotedString(value, ctx);
    }
    return implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx, false));
  }
  function stringifyString(item, ctx, onComment, onChompKeep) {
    const { implicitKey, inFlow } = ctx;
    const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
    let { type } = item;
    if (type !== Scalar.QUOTE_DOUBLE) {
      if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value))
        type = Scalar.QUOTE_DOUBLE;
    }
    const _stringify = (_type) => {
      switch (_type) {
        case Scalar.BLOCK_FOLDED:
        case Scalar.BLOCK_LITERAL:
          return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
        case Scalar.QUOTE_DOUBLE:
          return doubleQuotedString(ss.value, ctx);
        case Scalar.QUOTE_SINGLE:
          return singleQuotedString(ss.value, ctx);
        case Scalar.PLAIN:
          return plainString(ss, ctx, onComment, onChompKeep);
        default:
          return null;
      }
    };
    let res = _stringify(type);
    if (res === null) {
      const { defaultKeyType, defaultStringType } = ctx.options;
      const t4 = implicitKey && defaultKeyType || defaultStringType;
      res = _stringify(t4);
      if (res === null)
        throw new Error(`Unsupported default string type ${t4}`);
    }
    return res;
  }
  function createStringifyContext(doc, options) {
    const opt = Object.assign({
      blockQuote: true,
      commentString: stringifyComment,
      defaultKeyType: null,
      defaultStringType: "PLAIN",
      directives: null,
      doubleQuotedAsJSON: false,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: "false",
      flowCollectionPadding: true,
      indentSeq: true,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: "null",
      simpleKeys: false,
      singleQuote: null,
      trueStr: "true",
      verifyAliasOrder: true
    }, doc.schema.toStringOptions, options);
    let inFlow;
    switch (opt.collectionStyle) {
      case "block":
        inFlow = false;
        break;
      case "flow":
        inFlow = true;
        break;
      default:
        inFlow = null;
    }
    return {
      anchors: /* @__PURE__ */ new Set,
      doc,
      flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
      indent: "",
      indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
      inFlow,
      options: opt
    };
  }
  function getTagObject(tags, item) {
    var _a2, _b2, _c, _d;
    if (item.tag) {
      const match = tags.filter((t4) => t4.tag === item.tag);
      if (match.length > 0)
        return (_a2 = match.find((t4) => t4.format === item.format)) != null ? _a2 : match[0];
    }
    let tagObj = undefined;
    let obj;
    if (isScalar(item)) {
      obj = item.value;
      let match = tags.filter((t4) => {
        var _a3;
        return (_a3 = t4.identify) == null ? undefined : _a3.call(t4, obj);
      });
      if (match.length > 1) {
        const testMatch = match.filter((t4) => t4.test);
        if (testMatch.length > 0)
          match = testMatch;
      }
      tagObj = (_b2 = match.find((t4) => t4.format === item.format)) != null ? _b2 : match.find((t4) => !t4.format);
    } else {
      obj = item;
      tagObj = tags.find((t4) => t4.nodeClass && obj instanceof t4.nodeClass);
    }
    if (!tagObj) {
      const name = (_d = (_c = obj == null ? undefined : obj.constructor) == null ? undefined : _c.name) != null ? _d : typeof obj;
      throw new Error(`Tag not resolved for ${name} value`);
    }
    return tagObj;
  }
  function stringifyProps(node, tagObj, { anchors, doc }) {
    if (!doc.directives)
      return "";
    const props = [];
    const anchor = (isScalar(node) || isCollection(node)) && node.anchor;
    if (anchor && anchorIsValid(anchor)) {
      anchors.add(anchor);
      props.push(`&${anchor}`);
    }
    const tag = node.tag ? node.tag : tagObj.default ? null : tagObj.tag;
    if (tag)
      props.push(doc.directives.tagString(tag));
    return props.join(" ");
  }
  function stringify(item, ctx, onComment, onChompKeep) {
    var _a2, _b2;
    if (isPair(item))
      return item.toString(ctx, onComment, onChompKeep);
    if (isAlias(item)) {
      if (ctx.doc.directives)
        return item.toString(ctx);
      if ((_a2 = ctx.resolvedAliases) == null ? undefined : _a2.has(item)) {
        throw new TypeError(`Cannot stringify circular structure without alias nodes`);
      } else {
        if (ctx.resolvedAliases)
          ctx.resolvedAliases.add(item);
        else
          ctx.resolvedAliases = /* @__PURE__ */ new Set([item]);
        item = item.resolve(ctx.doc);
      }
    }
    let tagObj = undefined;
    const node = isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o3) => tagObj = o3 });
    if (!tagObj)
      tagObj = getTagObject(ctx.doc.schema.tags, node);
    const props = stringifyProps(node, tagObj, ctx);
    if (props.length > 0)
      ctx.indentAtStart = ((_b2 = ctx.indentAtStart) != null ? _b2 : 0) + props.length + 1;
    const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : isScalar(node) ? stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
    if (!props)
      return str;
    return isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
  }
  function stringifyPair({ key, value }, ctx, onComment, onChompKeep) {
    var _a2, _b2;
    const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
    let keyComment = isNode(key) && key.comment || null;
    if (simpleKeys) {
      if (keyComment) {
        throw new Error("With simple keys, key nodes cannot have comments");
      }
      if (isCollection(key) || !isNode(key) && typeof key === "object") {
        const msg = "With simple keys, collection cannot be used as a key value";
        throw new Error(msg);
      }
    }
    let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || isCollection(key) || (isScalar(key) ? key.type === Scalar.BLOCK_FOLDED || key.type === Scalar.BLOCK_LITERAL : typeof key === "object"));
    ctx = Object.assign({}, ctx, {
      allNullValues: false,
      implicitKey: !explicitKey && (simpleKeys || !allNullValues),
      indent: indent + indentStep
    });
    let keyCommentDone = false;
    let chompKeep = false;
    let str = stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
    if (!explicitKey && !ctx.inFlow && str.length > 1024) {
      if (simpleKeys)
        throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
      explicitKey = true;
    }
    if (ctx.inFlow) {
      if (allNullValues || value == null) {
        if (keyCommentDone && onComment)
          onComment();
        return str === "" ? "?" : explicitKey ? `? ${str}` : str;
      }
    } else if (allNullValues && !simpleKeys || value == null && explicitKey) {
      str = `? ${str}`;
      if (keyComment && !keyCommentDone) {
        str += lineComment(str, ctx.indent, commentString(keyComment));
      } else if (chompKeep && onChompKeep)
        onChompKeep();
      return str;
    }
    if (keyCommentDone)
      keyComment = null;
    if (explicitKey) {
      if (keyComment)
        str += lineComment(str, ctx.indent, commentString(keyComment));
      str = `? ${str}
${indent}:`;
    } else {
      str = `${str}:`;
      if (keyComment)
        str += lineComment(str, ctx.indent, commentString(keyComment));
    }
    let vsb, vcb, valueComment;
    if (isNode(value)) {
      vsb = !!value.spaceBefore;
      vcb = value.commentBefore;
      valueComment = value.comment;
    } else {
      vsb = false;
      vcb = null;
      valueComment = null;
      if (value && typeof value === "object")
        value = doc.createNode(value);
    }
    ctx.implicitKey = false;
    if (!explicitKey && !keyComment && isScalar(value))
      ctx.indentAtStart = str.length + 1;
    chompKeep = false;
    if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && isSeq(value) && !value.flow && !value.tag && !value.anchor) {
      ctx.indent = ctx.indent.substring(2);
    }
    let valueCommentDone = false;
    const valueStr = stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
    let ws = " ";
    if (keyComment || vsb || vcb) {
      ws = vsb ? `
` : "";
      if (vcb) {
        const cs = commentString(vcb);
        ws += `
${indentComment(cs, ctx.indent)}`;
      }
      if (valueStr === "" && !ctx.inFlow) {
        if (ws === `
`)
          ws = `

`;
      } else {
        ws += `
${ctx.indent}`;
      }
    } else if (!explicitKey && isCollection(value)) {
      const vs0 = valueStr[0];
      const nl0 = valueStr.indexOf(`
`);
      const hasNewline = nl0 !== -1;
      const flow = (_b2 = (_a2 = ctx.inFlow) != null ? _a2 : value.flow) != null ? _b2 : value.items.length === 0;
      if (hasNewline || !flow) {
        let hasPropsLine = false;
        if (hasNewline && (vs0 === "&" || vs0 === "!")) {
          let sp0 = valueStr.indexOf(" ");
          if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") {
            sp0 = valueStr.indexOf(" ", sp0 + 1);
          }
          if (sp0 === -1 || nl0 < sp0)
            hasPropsLine = true;
        }
        if (!hasPropsLine)
          ws = `
${ctx.indent}`;
      }
    } else if (valueStr === "" || valueStr[0] === `
`) {
      ws = "";
    }
    str += ws + valueStr;
    if (ctx.inFlow) {
      if (valueCommentDone && onComment)
        onComment();
    } else if (valueComment && !valueCommentDone) {
      str += lineComment(str, ctx.indent, commentString(valueComment));
    } else if (chompKeep && onChompKeep) {
      onChompKeep();
    }
    return str;
  }
  function warn(logLevel, warning) {
    if (logLevel === "debug" || logLevel === "warn") {
      console.warn(warning);
    }
  }
  var MERGE_KEY = "<<";
  var merge = {
    identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: () => Object.assign(new Scalar(Symbol(MERGE_KEY)), {
      addToJSMap: addMergeToJSMap
    }),
    stringify: () => MERGE_KEY
  };
  var isMergeKey = (ctx, key) => (merge.identify(key) || isScalar(key) && (!key.type || key.type === Scalar.PLAIN) && merge.identify(key.value)) && (ctx == null ? undefined : ctx.doc.schema.tags.some((tag) => tag.tag === merge.tag && tag.default));
  function addMergeToJSMap(ctx, map2, value) {
    value = ctx && isAlias(value) ? value.resolve(ctx.doc) : value;
    if (isSeq(value))
      for (const it of value.items)
        mergeValue(ctx, map2, it);
    else if (Array.isArray(value))
      for (const it of value)
        mergeValue(ctx, map2, it);
    else
      mergeValue(ctx, map2, value);
  }
  function mergeValue(ctx, map2, value) {
    const source = ctx && isAlias(value) ? value.resolve(ctx.doc) : value;
    if (!isMap(source))
      throw new Error("Merge sources must be maps or map aliases");
    const srcMap = source.toJSON(null, ctx, Map);
    for (const [key, value2] of srcMap) {
      if (map2 instanceof Map) {
        if (!map2.has(key))
          map2.set(key, value2);
      } else if (map2 instanceof Set) {
        map2.add(key);
      } else if (!Object.prototype.hasOwnProperty.call(map2, key)) {
        Object.defineProperty(map2, key, {
          value: value2,
          writable: true,
          enumerable: true,
          configurable: true
        });
      }
    }
    return map2;
  }
  function addPairToJSMap(ctx, map2, { key, value }) {
    if (isNode(key) && key.addToJSMap)
      key.addToJSMap(ctx, map2, value);
    else if (isMergeKey(ctx, key))
      addMergeToJSMap(ctx, map2, value);
    else {
      const jsKey = toJS(key, "", ctx);
      if (map2 instanceof Map) {
        map2.set(jsKey, toJS(value, jsKey, ctx));
      } else if (map2 instanceof Set) {
        map2.add(jsKey);
      } else {
        const stringKey = stringifyKey(key, jsKey, ctx);
        const jsValue = toJS(value, stringKey, ctx);
        if (stringKey in map2)
          Object.defineProperty(map2, stringKey, {
            value: jsValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        else
          map2[stringKey] = jsValue;
      }
    }
    return map2;
  }
  function stringifyKey(key, jsKey, ctx) {
    if (jsKey === null)
      return "";
    if (typeof jsKey !== "object")
      return String(jsKey);
    if (isNode(key) && (ctx == null ? undefined : ctx.doc)) {
      const strCtx = createStringifyContext(ctx.doc, {});
      strCtx.anchors = /* @__PURE__ */ new Set;
      for (const node of ctx.anchors.keys())
        strCtx.anchors.add(node.anchor);
      strCtx.inFlow = true;
      strCtx.inStringifyKey = true;
      const strKey = key.toString(strCtx);
      if (!ctx.mapKeyWarned) {
        let jsonStr = JSON.stringify(strKey);
        if (jsonStr.length > 40)
          jsonStr = jsonStr.substring(0, 36) + '..."';
        warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
        ctx.mapKeyWarned = true;
      }
      return strKey;
    }
    return JSON.stringify(jsKey);
  }
  function createPair(key, value, ctx) {
    const k2 = createNode(key, undefined, ctx);
    const v2 = createNode(value, undefined, ctx);
    return new Pair(k2, v2);
  }
  var Pair = class _Pair {
    constructor(key, value = null) {
      Object.defineProperty(this, NODE_TYPE, { value: PAIR });
      this.key = key;
      this.value = value;
    }
    clone(schema4) {
      let { key, value } = this;
      if (isNode(key))
        key = key.clone(schema4);
      if (isNode(value))
        value = value.clone(schema4);
      return new _Pair(key, value);
    }
    toJSON(_, ctx) {
      const pair = (ctx == null ? undefined : ctx.mapAsMap) ? /* @__PURE__ */ new Map : {};
      return addPairToJSMap(ctx, pair, this);
    }
    toString(ctx, onComment, onChompKeep) {
      return (ctx == null ? undefined : ctx.doc) ? stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
    }
  };
  function stringifyCollection(collection, ctx, options) {
    var _a2;
    const flow = (_a2 = ctx.inFlow) != null ? _a2 : collection.flow;
    const stringify5 = flow ? stringifyFlowCollection : stringifyBlockCollection;
    return stringify5(collection, ctx, options);
  }
  function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
    const { indent, options: { commentString } } = ctx;
    const itemCtx = Object.assign({}, ctx, { indent: itemIndent, type: null });
    let chompKeep = false;
    const lines = [];
    for (let i = 0;i < items.length; ++i) {
      const item = items[i];
      let comment2 = null;
      if (isNode(item)) {
        if (!chompKeep && item.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
        if (item.comment)
          comment2 = item.comment;
      } else if (isPair(item)) {
        const ik = isNode(item.key) ? item.key : null;
        if (ik) {
          if (!chompKeep && ik.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
        }
      }
      chompKeep = false;
      let str2 = stringify(item, itemCtx, () => comment2 = null, () => chompKeep = true);
      if (comment2)
        str2 += lineComment(str2, itemIndent, commentString(comment2));
      if (chompKeep && comment2)
        chompKeep = false;
      lines.push(blockItemPrefix + str2);
    }
    let str;
    if (lines.length === 0) {
      str = flowChars.start + flowChars.end;
    } else {
      str = lines[0];
      for (let i = 1;i < lines.length; ++i) {
        const line = lines[i];
        str += line ? `
${indent}${line}` : `
`;
      }
    }
    if (comment) {
      str += `
` + indentComment(commentString(comment), indent);
      if (onComment)
        onComment();
    } else if (chompKeep && onChompKeep)
      onChompKeep();
    return str;
  }
  function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
    const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
    itemIndent += indentStep;
    const itemCtx = Object.assign({}, ctx, {
      indent: itemIndent,
      inFlow: true,
      type: null
    });
    let reqNewline = false;
    let linesAtValue = 0;
    const lines = [];
    for (let i = 0;i < items.length; ++i) {
      const item = items[i];
      let comment = null;
      if (isNode(item)) {
        if (item.spaceBefore)
          lines.push("");
        addCommentBefore(ctx, lines, item.commentBefore, false);
        if (item.comment)
          comment = item.comment;
      } else if (isPair(item)) {
        const ik = isNode(item.key) ? item.key : null;
        if (ik) {
          if (ik.spaceBefore)
            lines.push("");
          addCommentBefore(ctx, lines, ik.commentBefore, false);
          if (ik.comment)
            reqNewline = true;
        }
        const iv = isNode(item.value) ? item.value : null;
        if (iv) {
          if (iv.comment)
            comment = iv.comment;
          if (iv.commentBefore)
            reqNewline = true;
        } else if (item.value == null && (ik == null ? undefined : ik.comment)) {
          comment = ik.comment;
        }
      }
      if (comment)
        reqNewline = true;
      let str = stringify(item, itemCtx, () => comment = null);
      if (i < items.length - 1)
        str += ",";
      if (comment)
        str += lineComment(str, itemIndent, commentString(comment));
      if (!reqNewline && (lines.length > linesAtValue || str.includes(`
`)))
        reqNewline = true;
      lines.push(str);
      linesAtValue = lines.length;
    }
    const { start, end } = flowChars;
    if (lines.length === 0) {
      return start + end;
    } else {
      if (!reqNewline) {
        const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
        reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
      }
      if (reqNewline) {
        let str = start;
        for (const line of lines)
          str += line ? `
${indentStep}${indent}${line}` : `
`;
        return `${str}
${indent}${end}`;
      } else {
        return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
      }
    }
  }
  function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
    if (comment && chompKeep)
      comment = comment.replace(/^\n+/, "");
    if (comment) {
      const ic = indentComment(commentString(comment), indent);
      lines.push(ic.trimStart());
    }
  }
  function findPair(items, key) {
    const k2 = isScalar(key) ? key.value : key;
    for (const it of items) {
      if (isPair(it)) {
        if (it.key === key || it.key === k2)
          return it;
        if (isScalar(it.key) && it.key.value === k2)
          return it;
      }
    }
    return;
  }
  var YAMLMap = class extends Collection {
    static get tagName() {
      return "tag:yaml.org,2002:map";
    }
    constructor(schema4) {
      super(MAP, schema4);
      this.items = [];
    }
    static from(schema4, obj, ctx) {
      const { keepUndefined, replacer } = ctx;
      const map2 = new this(schema4);
      const add = (key, value) => {
        if (typeof replacer === "function")
          value = replacer.call(obj, key, value);
        else if (Array.isArray(replacer) && !replacer.includes(key))
          return;
        if (value !== undefined || keepUndefined)
          map2.items.push(createPair(key, value, ctx));
      };
      if (obj instanceof Map) {
        for (const [key, value] of obj)
          add(key, value);
      } else if (obj && typeof obj === "object") {
        for (const key of Object.keys(obj))
          add(key, obj[key]);
      }
      if (typeof schema4.sortMapEntries === "function") {
        map2.items.sort(schema4.sortMapEntries);
      }
      return map2;
    }
    add(pair, overwrite) {
      var _a2;
      let _pair;
      if (isPair(pair))
        _pair = pair;
      else if (!pair || typeof pair !== "object" || !("key" in pair)) {
        _pair = new Pair(pair, pair == null ? undefined : pair.value);
      } else
        _pair = new Pair(pair.key, pair.value);
      const prev = findPair(this.items, _pair.key);
      const sortEntries = (_a2 = this.schema) == null ? undefined : _a2.sortMapEntries;
      if (prev) {
        if (!overwrite)
          throw new Error(`Key ${_pair.key} already set`);
        if (isScalar(prev.value) && isScalarValue(_pair.value))
          prev.value.value = _pair.value;
        else
          prev.value = _pair.value;
      } else if (sortEntries) {
        const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
        if (i === -1)
          this.items.push(_pair);
        else
          this.items.splice(i, 0, _pair);
      } else {
        this.items.push(_pair);
      }
    }
    delete(key) {
      const it = findPair(this.items, key);
      if (!it)
        return false;
      const del = this.items.splice(this.items.indexOf(it), 1);
      return del.length > 0;
    }
    get(key, keepScalar) {
      var _a2;
      const it = findPair(this.items, key);
      const node = it == null ? undefined : it.value;
      return (_a2 = !keepScalar && isScalar(node) ? node.value : node) != null ? _a2 : undefined;
    }
    has(key) {
      return !!findPair(this.items, key);
    }
    set(key, value) {
      this.add(new Pair(key, value), true);
    }
    toJSON(_, ctx, Type) {
      const map2 = Type ? new Type : (ctx == null ? undefined : ctx.mapAsMap) ? /* @__PURE__ */ new Map : {};
      if (ctx == null ? undefined : ctx.onCreate)
        ctx.onCreate(map2);
      for (const item of this.items)
        addPairToJSMap(ctx, map2, item);
      return map2;
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx)
        return JSON.stringify(this);
      for (const item of this.items) {
        if (!isPair(item))
          throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
      }
      if (!ctx.allNullValues && this.hasAllNullValues(false))
        ctx = Object.assign({}, ctx, { allNullValues: true });
      return stringifyCollection(this, ctx, {
        blockItemPrefix: "",
        flowChars: { start: "{", end: "}" },
        itemIndent: ctx.indent || "",
        onChompKeep,
        onComment
      });
    }
  };
  var map = {
    collection: "map",
    default: true,
    nodeClass: YAMLMap,
    tag: "tag:yaml.org,2002:map",
    resolve(map2, onError) {
      if (!isMap(map2))
        onError("Expected a mapping for this tag");
      return map2;
    },
    createNode: (schema4, obj, ctx) => YAMLMap.from(schema4, obj, ctx)
  };
  var YAMLSeq = class extends Collection {
    static get tagName() {
      return "tag:yaml.org,2002:seq";
    }
    constructor(schema4) {
      super(SEQ, schema4);
      this.items = [];
    }
    add(value) {
      this.items.push(value);
    }
    delete(key) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number")
        return false;
      const del = this.items.splice(idx, 1);
      return del.length > 0;
    }
    get(key, keepScalar) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number")
        return;
      const it = this.items[idx];
      return !keepScalar && isScalar(it) ? it.value : it;
    }
    has(key) {
      const idx = asItemIndex(key);
      return typeof idx === "number" && idx < this.items.length;
    }
    set(key, value) {
      const idx = asItemIndex(key);
      if (typeof idx !== "number")
        throw new Error(`Expected a valid index, not ${key}.`);
      const prev = this.items[idx];
      if (isScalar(prev) && isScalarValue(value))
        prev.value = value;
      else
        this.items[idx] = value;
    }
    toJSON(_, ctx) {
      const seq2 = [];
      if (ctx == null ? undefined : ctx.onCreate)
        ctx.onCreate(seq2);
      let i = 0;
      for (const item of this.items)
        seq2.push(toJS(item, String(i++), ctx));
      return seq2;
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx)
        return JSON.stringify(this);
      return stringifyCollection(this, ctx, {
        blockItemPrefix: "- ",
        flowChars: { start: "[", end: "]" },
        itemIndent: (ctx.indent || "") + "  ",
        onChompKeep,
        onComment
      });
    }
    static from(schema4, obj, ctx) {
      const { replacer } = ctx;
      const seq2 = new this(schema4);
      if (obj && Symbol.iterator in Object(obj)) {
        let i = 0;
        for (let it of obj) {
          if (typeof replacer === "function") {
            const key = obj instanceof Set ? it : String(i++);
            it = replacer.call(obj, key, it);
          }
          seq2.items.push(createNode(it, undefined, ctx));
        }
      }
      return seq2;
    }
  };
  function asItemIndex(key) {
    let idx = isScalar(key) ? key.value : key;
    if (idx && typeof idx === "string")
      idx = Number(idx);
    return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
  }
  var seq = {
    collection: "seq",
    default: true,
    nodeClass: YAMLSeq,
    tag: "tag:yaml.org,2002:seq",
    resolve(seq2, onError) {
      if (!isSeq(seq2))
        onError("Expected a sequence for this tag");
      return seq2;
    },
    createNode: (schema4, obj, ctx) => YAMLSeq.from(schema4, obj, ctx)
  };
  var string = {
    identify: (value) => typeof value === "string",
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: (str) => str,
    stringify(item, ctx, onComment, onChompKeep) {
      ctx = Object.assign({ actualString: true }, ctx);
      return stringifyString(item, ctx, onComment, onChompKeep);
    }
  };
  var nullTag = {
    identify: (value) => value == null,
    createNode: () => new Scalar(null),
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new Scalar(null),
    stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
  };
  var boolTag = {
    identify: (value) => typeof value === "boolean",
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (str) => new Scalar(str[0] === "t" || str[0] === "T"),
    stringify({ source, value }, ctx) {
      if (source && boolTag.test.test(source)) {
        const sv = source[0] === "t" || source[0] === "T";
        if (value === sv)
          return source;
      }
      return value ? ctx.options.trueStr : ctx.options.falseStr;
    }
  };
  function stringifyNumber({ format, minFractionDigits, tag, value }) {
    if (typeof value === "bigint")
      return String(value);
    const num = typeof value === "number" ? value : Number(value);
    if (!isFinite(num))
      return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
    let n3 = JSON.stringify(value);
    if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^\d/.test(n3)) {
      let i = n3.indexOf(".");
      if (i < 0) {
        i = n3.length;
        n3 += ".";
      }
      let d2 = minFractionDigits - (n3.length - i - 1);
      while (d2-- > 0)
        n3 += "0";
    }
    return n3;
  }
  var floatNaN = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber
  };
  var floatExp = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str),
    stringify(node) {
      const num = Number(node.value);
      return isFinite(num) ? num.toExponential() : stringifyNumber(node);
    }
  };
  var float = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(str) {
      const node = new Scalar(parseFloat(str));
      const dot = str.indexOf(".");
      if (dot !== -1 && str[str.length - 1] === "0")
        node.minFractionDigits = str.length - dot - 1;
      return node;
    },
    stringify: stringifyNumber
  };
  var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
  var intResolve = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
  function intStringify(node, radix, prefix) {
    const { value } = node;
    if (intIdentify(value) && value >= 0)
      return prefix + value.toString(radix);
    return stringifyNumber(node);
  }
  var intOct = {
    identify: (value) => intIdentify(value) && value >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 8, opt),
    stringify: (node) => intStringify(node, 8, "0o")
  };
  var int = {
    identify: intIdentify,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
    stringify: stringifyNumber
  };
  var intHex = {
    identify: (value) => intIdentify(value) && value >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
    stringify: (node) => intStringify(node, 16, "0x")
  };
  var schema = [
    map,
    seq,
    string,
    nullTag,
    boolTag,
    intOct,
    int,
    intHex,
    floatNaN,
    floatExp,
    float
  ];
  function intIdentify2(value) {
    return typeof value === "bigint" || Number.isInteger(value);
  }
  var stringifyJSON = ({ value }) => JSON.stringify(value);
  var jsonScalars = [
    {
      identify: (value) => typeof value === "string",
      default: true,
      tag: "tag:yaml.org,2002:str",
      resolve: (str) => str,
      stringify: stringifyJSON
    },
    {
      identify: (value) => value == null,
      createNode: () => new Scalar(null),
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: stringifyJSON
    },
    {
      identify: (value) => typeof value === "boolean",
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^true$|^false$/,
      resolve: (str) => str === "true",
      stringify: stringifyJSON
    },
    {
      identify: intIdentify2,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
      stringify: ({ value }) => intIdentify2(value) ? value.toString() : JSON.stringify(value)
    },
    {
      identify: (value) => typeof value === "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (str) => parseFloat(str),
      stringify: stringifyJSON
    }
  ];
  var jsonError = {
    default: true,
    tag: "",
    test: /^/,
    resolve(str, onError) {
      onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
      return str;
    }
  };
  var schema2 = [map, seq].concat(jsonScalars, jsonError);
  var binary = {
    identify: (value) => value instanceof Uint8Array,
    default: false,
    tag: "tag:yaml.org,2002:binary",
    resolve(src, onError) {
      if (typeof atob === "function") {
        const str = atob(src.replace(/[\n\r]/g, ""));
        const buffer = new Uint8Array(str.length);
        for (let i = 0;i < str.length; ++i)
          buffer[i] = str.charCodeAt(i);
        return buffer;
      } else {
        onError("This environment does not support reading binary tags; either Buffer or atob is required");
        return src;
      }
    },
    stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
      const buf = value;
      let str;
      if (typeof btoa === "function") {
        let s2 = "";
        for (let i = 0;i < buf.length; ++i)
          s2 += String.fromCharCode(buf[i]);
        str = btoa(s2);
      } else {
        throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
      }
      if (!type)
        type = Scalar.BLOCK_LITERAL;
      if (type !== Scalar.QUOTE_DOUBLE) {
        const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
        const n3 = Math.ceil(str.length / lineWidth);
        const lines = new Array(n3);
        for (let i = 0, o3 = 0;i < n3; ++i, o3 += lineWidth) {
          lines[i] = str.substr(o3, lineWidth);
        }
        str = lines.join(type === Scalar.BLOCK_LITERAL ? `
` : " ");
      }
      return stringifyString({ comment, type, value: str }, ctx, onComment, onChompKeep);
    }
  };
  function resolvePairs(seq2, onError) {
    var _a2;
    if (isSeq(seq2)) {
      for (let i = 0;i < seq2.items.length; ++i) {
        let item = seq2.items[i];
        if (isPair(item))
          continue;
        else if (isMap(item)) {
          if (item.items.length > 1)
            onError("Each pair must have its own sequence indicator");
          const pair = item.items[0] || new Pair(new Scalar(null));
          if (item.commentBefore)
            pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}
${pair.key.commentBefore}` : item.commentBefore;
          if (item.comment) {
            const cn = (_a2 = pair.value) != null ? _a2 : pair.key;
            cn.comment = cn.comment ? `${item.comment}
${cn.comment}` : item.comment;
          }
          item = pair;
        }
        seq2.items[i] = isPair(item) ? item : new Pair(item);
      }
    } else
      onError("Expected a sequence for this tag");
    return seq2;
  }
  function createPairs(schema4, iterable, ctx) {
    const { replacer } = ctx;
    const pairs2 = new YAMLSeq(schema4);
    pairs2.tag = "tag:yaml.org,2002:pairs";
    let i = 0;
    if (iterable && Symbol.iterator in Object(iterable))
      for (let it of iterable) {
        if (typeof replacer === "function")
          it = replacer.call(iterable, String(i++), it);
        let key, value;
        if (Array.isArray(it)) {
          if (it.length === 2) {
            key = it[0];
            value = it[1];
          } else
            throw new TypeError(`Expected [key, value] tuple: ${it}`);
        } else if (it && it instanceof Object) {
          const keys = Object.keys(it);
          if (keys.length === 1) {
            key = keys[0];
            value = it[key];
          } else {
            throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
          }
        } else {
          key = it;
        }
        pairs2.items.push(createPair(key, value, ctx));
      }
    return pairs2;
  }
  var pairs = {
    collection: "seq",
    default: false,
    tag: "tag:yaml.org,2002:pairs",
    resolve: resolvePairs,
    createNode: createPairs
  };
  var YAMLOMap = class _YAMLOMap extends YAMLSeq {
    constructor() {
      super();
      this.add = YAMLMap.prototype.add.bind(this);
      this.delete = YAMLMap.prototype.delete.bind(this);
      this.get = YAMLMap.prototype.get.bind(this);
      this.has = YAMLMap.prototype.has.bind(this);
      this.set = YAMLMap.prototype.set.bind(this);
      this.tag = _YAMLOMap.tag;
    }
    toJSON(_, ctx) {
      if (!ctx)
        return super.toJSON(_);
      const map2 = /* @__PURE__ */ new Map;
      if (ctx == null ? undefined : ctx.onCreate)
        ctx.onCreate(map2);
      for (const pair of this.items) {
        let key, value;
        if (isPair(pair)) {
          key = toJS(pair.key, "", ctx);
          value = toJS(pair.value, key, ctx);
        } else {
          key = toJS(pair, "", ctx);
        }
        if (map2.has(key))
          throw new Error("Ordered maps must not include duplicate keys");
        map2.set(key, value);
      }
      return map2;
    }
    static from(schema4, iterable, ctx) {
      const pairs2 = createPairs(schema4, iterable, ctx);
      const omap2 = new this;
      omap2.items = pairs2.items;
      return omap2;
    }
  };
  YAMLOMap.tag = "tag:yaml.org,2002:omap";
  var omap = {
    collection: "seq",
    identify: (value) => value instanceof Map,
    nodeClass: YAMLOMap,
    default: false,
    tag: "tag:yaml.org,2002:omap",
    resolve(seq2, onError) {
      const pairs2 = resolvePairs(seq2, onError);
      const seenKeys = [];
      for (const { key } of pairs2.items) {
        if (isScalar(key)) {
          if (seenKeys.includes(key.value)) {
            onError(`Ordered maps must not include duplicate keys: ${key.value}`);
          } else {
            seenKeys.push(key.value);
          }
        }
      }
      return Object.assign(new YAMLOMap, pairs2);
    },
    createNode: (schema4, iterable, ctx) => YAMLOMap.from(schema4, iterable, ctx)
  };
  function boolStringify({ value, source }, ctx) {
    const boolObj = value ? trueTag : falseTag;
    if (source && boolObj.test.test(source))
      return source;
    return value ? ctx.options.trueStr : ctx.options.falseStr;
  }
  var trueTag = {
    identify: (value) => value === true,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new Scalar(true),
    stringify: boolStringify
  };
  var falseTag = {
    identify: (value) => value === false,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new Scalar(false),
    stringify: boolStringify
  };
  var floatNaN2 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: stringifyNumber
  };
  var floatExp2 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (str) => parseFloat(str.replace(/_/g, "")),
    stringify(node) {
      const num = Number(node.value);
      return isFinite(num) ? num.toExponential() : stringifyNumber(node);
    }
  };
  var float2 = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(str) {
      const node = new Scalar(parseFloat(str.replace(/_/g, "")));
      const dot = str.indexOf(".");
      if (dot !== -1) {
        const f3 = str.substring(dot + 1).replace(/_/g, "");
        if (f3[f3.length - 1] === "0")
          node.minFractionDigits = f3.length;
      }
      return node;
    },
    stringify: stringifyNumber
  };
  var intIdentify3 = (value) => typeof value === "bigint" || Number.isInteger(value);
  function intResolve2(str, offset, radix, { intAsBigInt }) {
    const sign = str[0];
    if (sign === "-" || sign === "+")
      offset += 1;
    str = str.substring(offset).replace(/_/g, "");
    if (intAsBigInt) {
      switch (radix) {
        case 2:
          str = `0b${str}`;
          break;
        case 8:
          str = `0o${str}`;
          break;
        case 16:
          str = `0x${str}`;
          break;
      }
      const n4 = BigInt(str);
      return sign === "-" ? BigInt(-1) * n4 : n4;
    }
    const n3 = parseInt(str, radix);
    return sign === "-" ? -1 * n3 : n3;
  }
  function intStringify2(node, radix, prefix) {
    const { value } = node;
    if (intIdentify3(value)) {
      const str = value.toString(radix);
      return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
    }
    return stringifyNumber(node);
  }
  var intBin = {
    identify: intIdentify3,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (str, _onError, opt) => intResolve2(str, 2, 2, opt),
    stringify: (node) => intStringify2(node, 2, "0b")
  };
  var intOct2 = {
    identify: intIdentify3,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (str, _onError, opt) => intResolve2(str, 1, 8, opt),
    stringify: (node) => intStringify2(node, 8, "0")
  };
  var int2 = {
    identify: intIdentify3,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (str, _onError, opt) => intResolve2(str, 0, 10, opt),
    stringify: stringifyNumber
  };
  var intHex2 = {
    identify: intIdentify3,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (str, _onError, opt) => intResolve2(str, 2, 16, opt),
    stringify: (node) => intStringify2(node, 16, "0x")
  };
  var YAMLSet = class _YAMLSet extends YAMLMap {
    constructor(schema4) {
      super(schema4);
      this.tag = _YAMLSet.tag;
    }
    add(key) {
      let pair;
      if (isPair(key))
        pair = key;
      else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null)
        pair = new Pair(key.key, null);
      else
        pair = new Pair(key, null);
      const prev = findPair(this.items, pair.key);
      if (!prev)
        this.items.push(pair);
    }
    get(key, keepPair) {
      const pair = findPair(this.items, key);
      return !keepPair && isPair(pair) ? isScalar(pair.key) ? pair.key.value : pair.key : pair;
    }
    set(key, value) {
      if (typeof value !== "boolean")
        throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
      const prev = findPair(this.items, key);
      if (prev && !value) {
        this.items.splice(this.items.indexOf(prev), 1);
      } else if (!prev && value) {
        this.items.push(new Pair(key));
      }
    }
    toJSON(_, ctx) {
      return super.toJSON(_, ctx, Set);
    }
    toString(ctx, onComment, onChompKeep) {
      if (!ctx)
        return JSON.stringify(this);
      if (this.hasAllNullValues(true))
        return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
      else
        throw new Error("Set items must all have null values");
    }
    static from(schema4, iterable, ctx) {
      const { replacer } = ctx;
      const set2 = new this(schema4);
      if (iterable && Symbol.iterator in Object(iterable))
        for (let value of iterable) {
          if (typeof replacer === "function")
            value = replacer.call(iterable, value, value);
          set2.items.push(createPair(value, null, ctx));
        }
      return set2;
    }
  };
  YAMLSet.tag = "tag:yaml.org,2002:set";
  var set = {
    collection: "map",
    identify: (value) => value instanceof Set,
    nodeClass: YAMLSet,
    default: false,
    tag: "tag:yaml.org,2002:set",
    createNode: (schema4, iterable, ctx) => YAMLSet.from(schema4, iterable, ctx),
    resolve(map2, onError) {
      if (isMap(map2)) {
        if (map2.hasAllNullValues(true))
          return Object.assign(new YAMLSet, map2);
        else
          onError("Set items must all have null values");
      } else
        onError("Expected a mapping for this tag");
      return map2;
    }
  };
  function parseSexagesimal(str, asBigInt) {
    const sign = str[0];
    const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
    const num = (n3) => asBigInt ? BigInt(n3) : Number(n3);
    const res = parts.replace(/_/g, "").split(":").reduce((res2, p) => res2 * num(60) + num(p), num(0));
    return sign === "-" ? num(-1) * res : res;
  }
  function stringifySexagesimal(node) {
    let { value } = node;
    let num = (n3) => n3;
    if (typeof value === "bigint")
      num = (n3) => BigInt(n3);
    else if (isNaN(value) || !isFinite(value))
      return stringifyNumber(node);
    let sign = "";
    if (value < 0) {
      sign = "-";
      value *= num(-1);
    }
    const _60 = num(60);
    const parts = [value % _60];
    if (value < 60) {
      parts.unshift(0);
    } else {
      value = (value - parts[0]) / _60;
      parts.unshift(value % _60);
      if (value >= 60) {
        value = (value - parts[0]) / _60;
        parts.unshift(value);
      }
    }
    return sign + parts.map((n3) => String(n3).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
  }
  var intTime = {
    identify: (value) => typeof value === "bigint" || Number.isInteger(value),
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
    stringify: stringifySexagesimal
  };
  var floatTime = {
    identify: (value) => typeof value === "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (str) => parseSexagesimal(str, false),
    stringify: stringifySexagesimal
  };
  var timestamp = {
    identify: (value) => value instanceof Date,
    default: true,
    tag: "tag:yaml.org,2002:timestamp",
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve(str) {
      const match = str.match(timestamp.test);
      if (!match)
        throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
      const [, year, month, day, hour, minute, second] = match.map(Number);
      const millisec = match[7] ? Number((match[7] + "00").substr(1, 3)) : 0;
      let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
      const tz = match[8];
      if (tz && tz !== "Z") {
        let d2 = parseSexagesimal(tz, false);
        if (Math.abs(d2) < 30)
          d2 *= 60;
        date -= 60000 * d2;
      }
      return new Date(date);
    },
    stringify: ({ value }) => value.toISOString().replace(/(T00:00:00)?\.000Z$/, "")
  };
  var schema3 = [
    map,
    seq,
    string,
    nullTag,
    trueTag,
    falseTag,
    intBin,
    intOct2,
    int2,
    intHex2,
    floatNaN2,
    floatExp2,
    float2,
    binary,
    merge,
    omap,
    pairs,
    set,
    intTime,
    floatTime,
    timestamp
  ];
  var schemas = /* @__PURE__ */ new Map([
    ["core", schema],
    ["failsafe", [map, seq, string]],
    ["json", schema2],
    ["yaml11", schema3],
    ["yaml-1.1", schema3]
  ]);
  var tagsByName = {
    binary,
    bool: boolTag,
    float,
    floatExp,
    floatNaN,
    floatTime,
    int,
    intHex,
    intOct,
    intTime,
    map,
    merge,
    null: nullTag,
    omap,
    pairs,
    seq,
    set,
    timestamp
  };
  var coreKnownTags = {
    "tag:yaml.org,2002:binary": binary,
    "tag:yaml.org,2002:merge": merge,
    "tag:yaml.org,2002:omap": omap,
    "tag:yaml.org,2002:pairs": pairs,
    "tag:yaml.org,2002:set": set,
    "tag:yaml.org,2002:timestamp": timestamp
  };
  function getTags(customTags, schemaName, addMergeTag) {
    const schemaTags = schemas.get(schemaName);
    if (schemaTags && !customTags) {
      return addMergeTag && !schemaTags.includes(merge) ? schemaTags.concat(merge) : schemaTags.slice();
    }
    let tags = schemaTags;
    if (!tags) {
      if (Array.isArray(customTags))
        tags = [];
      else {
        const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
        throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
      }
    }
    if (Array.isArray(customTags)) {
      for (const tag of customTags)
        tags = tags.concat(tag);
    } else if (typeof customTags === "function") {
      tags = customTags(tags.slice());
    }
    if (addMergeTag)
      tags = tags.concat(merge);
    return tags.reduce((tags2, tag) => {
      const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
      if (!tagObj) {
        const tagName = JSON.stringify(tag);
        const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
        throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
      }
      if (!tags2.includes(tagObj))
        tags2.push(tagObj);
      return tags2;
    }, []);
  }
  var sortMapEntriesByKey = (a2, b) => a2.key < b.key ? -1 : a2.key > b.key ? 1 : 0;
  var Schema = class _Schema {
    constructor({ compat, customTags, merge: merge2, resolveKnownTags, schema: schema4, sortMapEntries, toStringDefaults }) {
      this.compat = Array.isArray(compat) ? getTags(compat, "compat") : compat ? getTags(null, compat) : null;
      this.name = typeof schema4 === "string" && schema4 || "core";
      this.knownTags = resolveKnownTags ? coreKnownTags : {};
      this.tags = getTags(customTags, this.name, merge2);
      this.toStringOptions = toStringDefaults != null ? toStringDefaults : null;
      Object.defineProperty(this, MAP, { value: map });
      Object.defineProperty(this, SCALAR, { value: string });
      Object.defineProperty(this, SEQ, { value: seq });
      this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
    }
    clone() {
      const copy = Object.create(_Schema.prototype, Object.getOwnPropertyDescriptors(this));
      copy.tags = this.tags.slice();
      return copy;
    }
  };
  function stringifyDocument(doc, options) {
    var _a2;
    const lines = [];
    let hasDirectives = options.directives === true;
    if (options.directives !== false && doc.directives) {
      const dir = doc.directives.toString(doc);
      if (dir) {
        lines.push(dir);
        hasDirectives = true;
      } else if (doc.directives.docStart)
        hasDirectives = true;
    }
    if (hasDirectives)
      lines.push("---");
    const ctx = createStringifyContext(doc, options);
    const { commentString } = ctx.options;
    if (doc.commentBefore) {
      if (lines.length !== 1)
        lines.unshift("");
      const cs = commentString(doc.commentBefore);
      lines.unshift(indentComment(cs, ""));
    }
    let chompKeep = false;
    let contentComment = null;
    if (doc.contents) {
      if (isNode(doc.contents)) {
        if (doc.contents.spaceBefore && hasDirectives)
          lines.push("");
        if (doc.contents.commentBefore) {
          const cs = commentString(doc.contents.commentBefore);
          lines.push(indentComment(cs, ""));
        }
        ctx.forceBlockIndent = !!doc.comment;
        contentComment = doc.contents.comment;
      }
      const onChompKeep = contentComment ? undefined : () => chompKeep = true;
      let body = stringify(doc.contents, ctx, () => contentComment = null, onChompKeep);
      if (contentComment)
        body += lineComment(body, "", commentString(contentComment));
      if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") {
        lines[lines.length - 1] = `--- ${body}`;
      } else
        lines.push(body);
    } else {
      lines.push(stringify(doc.contents, ctx));
    }
    if ((_a2 = doc.directives) == null ? undefined : _a2.docEnd) {
      if (doc.comment) {
        const cs = commentString(doc.comment);
        if (cs.includes(`
`)) {
          lines.push("...");
          lines.push(indentComment(cs, ""));
        } else {
          lines.push(`... ${cs}`);
        }
      } else {
        lines.push("...");
      }
    } else {
      let dc = doc.comment;
      if (dc && chompKeep)
        dc = dc.replace(/^\n+/, "");
      if (dc) {
        if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "")
          lines.push("");
        lines.push(indentComment(commentString(dc), ""));
      }
    }
    return lines.join(`
`) + `
`;
  }
  var Document = class _Document {
    constructor(value, replacer, options) {
      this.commentBefore = null;
      this.comment = null;
      this.errors = [];
      this.warnings = [];
      Object.defineProperty(this, NODE_TYPE, { value: DOC });
      let _replacer = null;
      if (typeof replacer === "function" || Array.isArray(replacer)) {
        _replacer = replacer;
      } else if (options === undefined && replacer) {
        options = replacer;
        replacer = undefined;
      }
      const opt = Object.assign({
        intAsBigInt: false,
        keepSourceTokens: false,
        logLevel: "warn",
        prettyErrors: true,
        strict: true,
        stringKeys: false,
        uniqueKeys: true,
        version: "1.2"
      }, options);
      this.options = opt;
      let { version } = opt;
      if (options == null ? undefined : options._directives) {
        this.directives = options._directives.atDocument();
        if (this.directives.yaml.explicit)
          version = this.directives.yaml.version;
      } else
        this.directives = new Directives({ version });
      this.setSchema(version, options);
      this.contents = value === undefined ? null : this.createNode(value, _replacer, options);
    }
    clone() {
      const copy = Object.create(_Document.prototype, {
        [NODE_TYPE]: { value: DOC }
      });
      copy.commentBefore = this.commentBefore;
      copy.comment = this.comment;
      copy.errors = this.errors.slice();
      copy.warnings = this.warnings.slice();
      copy.options = Object.assign({}, this.options);
      if (this.directives)
        copy.directives = this.directives.clone();
      copy.schema = this.schema.clone();
      copy.contents = isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
      if (this.range)
        copy.range = this.range.slice();
      return copy;
    }
    add(value) {
      if (assertCollection(this.contents))
        this.contents.add(value);
    }
    addIn(path3, value) {
      if (assertCollection(this.contents))
        this.contents.addIn(path3, value);
    }
    createAlias(node, name) {
      if (!node.anchor) {
        const prev = anchorNames(this);
        node.anchor = !name || prev.has(name) ? findNewAnchor(name || "a", prev) : name;
      }
      return new Alias(node.anchor);
    }
    createNode(value, replacer, options) {
      let _replacer = undefined;
      if (typeof replacer === "function") {
        value = replacer.call({ "": value }, "", value);
        _replacer = replacer;
      } else if (Array.isArray(replacer)) {
        const keyToStr = (v2) => typeof v2 === "number" || v2 instanceof String || v2 instanceof Number;
        const asStr = replacer.filter(keyToStr).map(String);
        if (asStr.length > 0)
          replacer = replacer.concat(asStr);
        _replacer = replacer;
      } else if (options === undefined && replacer) {
        options = replacer;
        replacer = undefined;
      }
      const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options != null ? options : {};
      const { onAnchor, setAnchors, sourceObjects } = createNodeAnchors(this, anchorPrefix || "a");
      const ctx = {
        aliasDuplicateObjects: aliasDuplicateObjects != null ? aliasDuplicateObjects : true,
        keepUndefined: keepUndefined != null ? keepUndefined : false,
        onAnchor,
        onTagObj,
        replacer: _replacer,
        schema: this.schema,
        sourceObjects
      };
      const node = createNode(value, tag, ctx);
      if (flow && isCollection(node))
        node.flow = true;
      setAnchors();
      return node;
    }
    createPair(key, value, options = {}) {
      const k2 = this.createNode(key, null, options);
      const v2 = this.createNode(value, null, options);
      return new Pair(k2, v2);
    }
    delete(key) {
      return assertCollection(this.contents) ? this.contents.delete(key) : false;
    }
    deleteIn(path3) {
      if (isEmptyPath(path3)) {
        if (this.contents == null)
          return false;
        this.contents = null;
        return true;
      }
      return assertCollection(this.contents) ? this.contents.deleteIn(path3) : false;
    }
    get(key, keepScalar) {
      return isCollection(this.contents) ? this.contents.get(key, keepScalar) : undefined;
    }
    getIn(path3, keepScalar) {
      if (isEmptyPath(path3))
        return !keepScalar && isScalar(this.contents) ? this.contents.value : this.contents;
      return isCollection(this.contents) ? this.contents.getIn(path3, keepScalar) : undefined;
    }
    has(key) {
      return isCollection(this.contents) ? this.contents.has(key) : false;
    }
    hasIn(path3) {
      if (isEmptyPath(path3))
        return this.contents !== undefined;
      return isCollection(this.contents) ? this.contents.hasIn(path3) : false;
    }
    set(key, value) {
      if (this.contents == null) {
        this.contents = collectionFromPath(this.schema, [key], value);
      } else if (assertCollection(this.contents)) {
        this.contents.set(key, value);
      }
    }
    setIn(path3, value) {
      if (isEmptyPath(path3)) {
        this.contents = value;
      } else if (this.contents == null) {
        this.contents = collectionFromPath(this.schema, Array.from(path3), value);
      } else if (assertCollection(this.contents)) {
        this.contents.setIn(path3, value);
      }
    }
    setSchema(version, options = {}) {
      if (typeof version === "number")
        version = String(version);
      let opt;
      switch (version) {
        case "1.1":
          if (this.directives)
            this.directives.yaml.version = "1.1";
          else
            this.directives = new Directives({ version: "1.1" });
          opt = { resolveKnownTags: false, schema: "yaml-1.1" };
          break;
        case "1.2":
        case "next":
          if (this.directives)
            this.directives.yaml.version = version;
          else
            this.directives = new Directives({ version });
          opt = { resolveKnownTags: true, schema: "core" };
          break;
        case null:
          if (this.directives)
            delete this.directives;
          opt = null;
          break;
        default: {
          const sv = JSON.stringify(version);
          throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
        }
      }
      if (options.schema instanceof Object)
        this.schema = options.schema;
      else if (opt)
        this.schema = new Schema(Object.assign(opt, options));
      else
        throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
    }
    toJS({ json, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
      const ctx = {
        anchors: /* @__PURE__ */ new Map,
        doc: this,
        keep: !json,
        mapAsMap: mapAsMap === true,
        mapKeyWarned: false,
        maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
      };
      const res = toJS(this.contents, jsonArg != null ? jsonArg : "", ctx);
      if (typeof onAnchor === "function")
        for (const { count, res: res2 } of ctx.anchors.values())
          onAnchor(res2, count);
      return typeof reviver === "function" ? applyReviver(reviver, { "": res }, "", res) : res;
    }
    toJSON(jsonArg, onAnchor) {
      return this.toJS({ json: true, jsonArg, mapAsMap: false, onAnchor });
    }
    toString(options = {}) {
      if (this.errors.length > 0)
        throw new Error("Document with errors cannot be stringified");
      if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
        const s2 = JSON.stringify(options.indent);
        throw new Error(`"indent" option must be a positive integer, not ${s2}`);
      }
      return stringifyDocument(this, options);
    }
  };
  function assertCollection(contents) {
    if (isCollection(contents))
      return true;
    throw new Error("Expected a YAML collection as document contents");
  }
  var YAMLError = class extends Error {
    constructor(name, pos, code, message) {
      super();
      this.name = name;
      this.code = code;
      this.message = message;
      this.pos = pos;
    }
  };
  var YAMLParseError = class extends YAMLError {
    constructor(pos, code, message) {
      super("YAMLParseError", pos, code, message);
    }
  };
  var YAMLWarning = class extends YAMLError {
    constructor(pos, code, message) {
      super("YAMLWarning", pos, code, message);
    }
  };
  var prettifyError = (src, lc) => (error) => {
    if (error.pos[0] === -1)
      return;
    error.linePos = error.pos.map((pos) => lc.linePos(pos));
    const { line, col } = error.linePos[0];
    error.message += ` at line ${line}, column ${col}`;
    let ci2 = col - 1;
    let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
    if (ci2 >= 60 && lineStr.length > 80) {
      const trimStart = Math.min(ci2 - 39, lineStr.length - 79);
      lineStr = "…" + lineStr.substring(trimStart);
      ci2 -= trimStart - 1;
    }
    if (lineStr.length > 80)
      lineStr = lineStr.substring(0, 79) + "…";
    if (line > 1 && /^ *$/.test(lineStr.substring(0, ci2))) {
      let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
      if (prev.length > 80)
        prev = prev.substring(0, 79) + `…
`;
      lineStr = prev + lineStr;
    }
    if (/[^ ]/.test(lineStr)) {
      let count = 1;
      const end = error.linePos[1];
      if (end && end.line === line && end.col > col) {
        count = Math.max(1, Math.min(end.col - col, 80 - ci2));
      }
      const pointer = " ".repeat(ci2) + "^".repeat(count);
      error.message += `:

${lineStr}
${pointer}
`;
    }
  };
  function resolveProps(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
    let spaceBefore = false;
    let atNewline = startOnNewline;
    let hasSpace = startOnNewline;
    let comment = "";
    let commentSep = "";
    let hasNewline = false;
    let reqSpace = false;
    let tab = null;
    let anchor = null;
    let tag = null;
    let newlineAfterProp = null;
    let comma = null;
    let found = null;
    let start = null;
    for (const token of tokens) {
      if (reqSpace) {
        if (token.type !== "space" && token.type !== "newline" && token.type !== "comma")
          onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
        reqSpace = false;
      }
      if (tab) {
        if (atNewline && token.type !== "comment" && token.type !== "newline") {
          onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
        }
        tab = null;
      }
      switch (token.type) {
        case "space":
          if (!flow && (indicator !== "doc-start" || (next == null ? undefined : next.type) !== "flow-collection") && token.source.includes("\t")) {
            tab = token;
          }
          hasSpace = true;
          break;
        case "comment": {
          if (!hasSpace)
            onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          const cb = token.source.substring(1) || " ";
          if (!comment)
            comment = cb;
          else
            comment += commentSep + cb;
          commentSep = "";
          atNewline = false;
          break;
        }
        case "newline":
          if (atNewline) {
            if (comment)
              comment += token.source;
            else if (!found || indicator !== "seq-item-ind")
              spaceBefore = true;
          } else
            commentSep += token.source;
          atNewline = true;
          hasNewline = true;
          if (anchor || tag)
            newlineAfterProp = token;
          hasSpace = true;
          break;
        case "anchor":
          if (anchor)
            onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
          if (token.source.endsWith(":"))
            onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
          anchor = token;
          if (start === null)
            start = token.offset;
          atNewline = false;
          hasSpace = false;
          reqSpace = true;
          break;
        case "tag": {
          if (tag)
            onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
          tag = token;
          if (start === null)
            start = token.offset;
          atNewline = false;
          hasSpace = false;
          reqSpace = true;
          break;
        }
        case indicator:
          if (anchor || tag)
            onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
          if (found)
            onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow != null ? flow : "collection"}`);
          found = token;
          atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
          hasSpace = false;
          break;
        case "comma":
          if (flow) {
            if (comma)
              onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
            comma = token;
            atNewline = false;
            hasSpace = false;
            break;
          }
        default:
          onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
          atNewline = false;
          hasSpace = false;
      }
    }
    const last = tokens[tokens.length - 1];
    const end = last ? last.offset + last.source.length : offset;
    if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) {
      onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
    }
    if (tab && (atNewline && tab.indent <= parentIndent || (next == null ? undefined : next.type) === "block-map" || (next == null ? undefined : next.type) === "block-seq"))
      onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
    return {
      comma,
      found,
      spaceBefore,
      comment,
      hasNewline,
      anchor,
      tag,
      newlineAfterProp,
      end,
      start: start != null ? start : end
    };
  }
  function containsNewline(key) {
    if (!key)
      return null;
    switch (key.type) {
      case "alias":
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        if (key.source.includes(`
`))
          return true;
        if (key.end) {
          for (const st2 of key.end)
            if (st2.type === "newline")
              return true;
        }
        return false;
      case "flow-collection":
        for (const it of key.items) {
          for (const st2 of it.start)
            if (st2.type === "newline")
              return true;
          if (it.sep) {
            for (const st2 of it.sep)
              if (st2.type === "newline")
                return true;
          }
          if (containsNewline(it.key) || containsNewline(it.value))
            return true;
        }
        return false;
      default:
        return true;
    }
  }
  function flowIndentCheck(indent, fc, onError) {
    if ((fc == null ? undefined : fc.type) === "flow-collection") {
      const end = fc.end[0];
      if (end.indent === indent && (end.source === "]" || end.source === "}") && containsNewline(fc)) {
        const msg = "Flow end indicator should be more indented than parent";
        onError(end, "BAD_INDENT", msg, true);
      }
    }
  }
  function mapIncludes(ctx, items, search) {
    const { uniqueKeys } = ctx.options;
    if (uniqueKeys === false)
      return false;
    const isEqual = typeof uniqueKeys === "function" ? uniqueKeys : (a2, b) => a2 === b || isScalar(a2) && isScalar(b) && a2.value === b.value;
    return items.some((pair) => isEqual(pair.key, search));
  }
  var startColMsg = "All mapping items must start at the same column";
  function resolveBlockMap({ composeNode: composeNode2, composeEmptyNode: composeEmptyNode2 }, ctx, bm, onError, tag) {
    var _a2, _b2;
    const NodeClass = (_a2 = tag == null ? undefined : tag.nodeClass) != null ? _a2 : YAMLMap;
    const map2 = new NodeClass(ctx.schema);
    if (ctx.atRoot)
      ctx.atRoot = false;
    let offset = bm.offset;
    let commentEnd = null;
    for (const collItem of bm.items) {
      const { start, key, sep, value } = collItem;
      const keyProps = resolveProps(start, {
        indicator: "explicit-key-ind",
        next: key != null ? key : sep == null ? undefined : sep[0],
        offset,
        onError,
        parentIndent: bm.indent,
        startOnNewline: true
      });
      const implicitKey = !keyProps.found;
      if (implicitKey) {
        if (key) {
          if (key.type === "block-seq")
            onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
          else if ("indent" in key && key.indent !== bm.indent)
            onError(offset, "BAD_INDENT", startColMsg);
        }
        if (!keyProps.anchor && !keyProps.tag && !sep) {
          commentEnd = keyProps.end;
          if (keyProps.comment) {
            if (map2.comment)
              map2.comment += `
` + keyProps.comment;
            else
              map2.comment = keyProps.comment;
          }
          continue;
        }
        if (keyProps.newlineAfterProp || containsNewline(key)) {
          onError(key != null ? key : start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
        }
      } else if (((_b2 = keyProps.found) == null ? undefined : _b2.indent) !== bm.indent) {
        onError(offset, "BAD_INDENT", startColMsg);
      }
      ctx.atKey = true;
      const keyStart = keyProps.end;
      const keyNode = key ? composeNode2(ctx, key, keyProps, onError) : composeEmptyNode2(ctx, keyStart, start, null, keyProps, onError);
      if (ctx.schema.compat)
        flowIndentCheck(bm.indent, key, onError);
      ctx.atKey = false;
      if (mapIncludes(ctx, map2.items, keyNode))
        onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
      const valueProps = resolveProps(sep != null ? sep : [], {
        indicator: "map-value-ind",
        next: value,
        offset: keyNode.range[2],
        onError,
        parentIndent: bm.indent,
        startOnNewline: !key || key.type === "block-scalar"
      });
      offset = valueProps.end;
      if (valueProps.found) {
        if (implicitKey) {
          if ((value == null ? undefined : value.type) === "block-map" && !valueProps.hasNewline)
            onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
          if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024)
            onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
        }
        const valueNode = value ? composeNode2(ctx, value, valueProps, onError) : composeEmptyNode2(ctx, offset, sep, null, valueProps, onError);
        if (ctx.schema.compat)
          flowIndentCheck(bm.indent, value, onError);
        offset = valueNode.range[2];
        const pair = new Pair(keyNode, valueNode);
        if (ctx.options.keepSourceTokens)
          pair.srcToken = collItem;
        map2.items.push(pair);
      } else {
        if (implicitKey)
          onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
        if (valueProps.comment) {
          if (keyNode.comment)
            keyNode.comment += `
` + valueProps.comment;
          else
            keyNode.comment = valueProps.comment;
        }
        const pair = new Pair(keyNode);
        if (ctx.options.keepSourceTokens)
          pair.srcToken = collItem;
        map2.items.push(pair);
      }
    }
    if (commentEnd && commentEnd < offset)
      onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
    map2.range = [bm.offset, offset, commentEnd != null ? commentEnd : offset];
    return map2;
  }
  function resolveBlockSeq({ composeNode: composeNode2, composeEmptyNode: composeEmptyNode2 }, ctx, bs, onError, tag) {
    var _a2;
    const NodeClass = (_a2 = tag == null ? undefined : tag.nodeClass) != null ? _a2 : YAMLSeq;
    const seq2 = new NodeClass(ctx.schema);
    if (ctx.atRoot)
      ctx.atRoot = false;
    if (ctx.atKey)
      ctx.atKey = false;
    let offset = bs.offset;
    let commentEnd = null;
    for (const { start, value } of bs.items) {
      const props = resolveProps(start, {
        indicator: "seq-item-ind",
        next: value,
        offset,
        onError,
        parentIndent: bs.indent,
        startOnNewline: true
      });
      if (!props.found) {
        if (props.anchor || props.tag || value) {
          if (value && value.type === "block-seq")
            onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
          else
            onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
        } else {
          commentEnd = props.end;
          if (props.comment)
            seq2.comment = props.comment;
          continue;
        }
      }
      const node = value ? composeNode2(ctx, value, props, onError) : composeEmptyNode2(ctx, props.end, start, null, props, onError);
      if (ctx.schema.compat)
        flowIndentCheck(bs.indent, value, onError);
      offset = node.range[2];
      seq2.items.push(node);
    }
    seq2.range = [bs.offset, offset, commentEnd != null ? commentEnd : offset];
    return seq2;
  }
  function resolveEnd(end, offset, reqSpace, onError) {
    let comment = "";
    if (end) {
      let hasSpace = false;
      let sep = "";
      for (const token of end) {
        const { source, type } = token;
        switch (type) {
          case "space":
            hasSpace = true;
            break;
          case "comment": {
            if (reqSpace && !hasSpace)
              onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
            const cb = source.substring(1) || " ";
            if (!comment)
              comment = cb;
            else
              comment += sep + cb;
            sep = "";
            break;
          }
          case "newline":
            if (comment)
              sep += source;
            hasSpace = true;
            break;
          default:
            onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
        }
        offset += source.length;
      }
    }
    return { comment, offset };
  }
  var blockMsg = "Block collections are not allowed within flow collections";
  var isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
  function resolveFlowCollection({ composeNode: composeNode2, composeEmptyNode: composeEmptyNode2 }, ctx, fc, onError, tag) {
    var _a2, _b2;
    const isMap2 = fc.start.source === "{";
    const fcName = isMap2 ? "flow map" : "flow sequence";
    const NodeClass = (_a2 = tag == null ? undefined : tag.nodeClass) != null ? _a2 : isMap2 ? YAMLMap : YAMLSeq;
    const coll = new NodeClass(ctx.schema);
    coll.flow = true;
    const atRoot = ctx.atRoot;
    if (atRoot)
      ctx.atRoot = false;
    if (ctx.atKey)
      ctx.atKey = false;
    let offset = fc.offset + fc.start.source.length;
    for (let i = 0;i < fc.items.length; ++i) {
      const collItem = fc.items[i];
      const { start, key, sep, value } = collItem;
      const props = resolveProps(start, {
        flow: fcName,
        indicator: "explicit-key-ind",
        next: key != null ? key : sep == null ? undefined : sep[0],
        offset,
        onError,
        parentIndent: fc.indent,
        startOnNewline: false
      });
      if (!props.found) {
        if (!props.anchor && !props.tag && !sep && !value) {
          if (i === 0 && props.comma)
            onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
          else if (i < fc.items.length - 1)
            onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
          if (props.comment) {
            if (coll.comment)
              coll.comment += `
` + props.comment;
            else
              coll.comment = props.comment;
          }
          offset = props.end;
          continue;
        }
        if (!isMap2 && ctx.options.strict && containsNewline(key))
          onError(key, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
      }
      if (i === 0) {
        if (props.comma)
          onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
      } else {
        if (!props.comma)
          onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
        if (props.comment) {
          let prevItemComment = "";
          loop:
            for (const st2 of start) {
              switch (st2.type) {
                case "comma":
                case "space":
                  break;
                case "comment":
                  prevItemComment = st2.source.substring(1);
                  break loop;
                default:
                  break loop;
              }
            }
          if (prevItemComment) {
            let prev = coll.items[coll.items.length - 1];
            if (isPair(prev))
              prev = (_b2 = prev.value) != null ? _b2 : prev.key;
            if (prev.comment)
              prev.comment += `
` + prevItemComment;
            else
              prev.comment = prevItemComment;
            props.comment = props.comment.substring(prevItemComment.length + 1);
          }
        }
      }
      if (!isMap2 && !sep && !props.found) {
        const valueNode = value ? composeNode2(ctx, value, props, onError) : composeEmptyNode2(ctx, props.end, sep, null, props, onError);
        coll.items.push(valueNode);
        offset = valueNode.range[2];
        if (isBlock(value))
          onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
      } else {
        ctx.atKey = true;
        const keyStart = props.end;
        const keyNode = key ? composeNode2(ctx, key, props, onError) : composeEmptyNode2(ctx, keyStart, start, null, props, onError);
        if (isBlock(key))
          onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
        ctx.atKey = false;
        const valueProps = resolveProps(sep != null ? sep : [], {
          flow: fcName,
          indicator: "map-value-ind",
          next: value,
          offset: keyNode.range[2],
          onError,
          parentIndent: fc.indent,
          startOnNewline: false
        });
        if (valueProps.found) {
          if (!isMap2 && !props.found && ctx.options.strict) {
            if (sep)
              for (const st2 of sep) {
                if (st2 === valueProps.found)
                  break;
                if (st2.type === "newline") {
                  onError(st2, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                  break;
                }
              }
            if (props.start < valueProps.found.offset - 1024)
              onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
          }
        } else if (value) {
          if ("source" in value && value.source && value.source[0] === ":")
            onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
          else
            onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
        }
        const valueNode = value ? composeNode2(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode2(ctx, valueProps.end, sep, null, valueProps, onError) : null;
        if (valueNode) {
          if (isBlock(value))
            onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
        } else if (valueProps.comment) {
          if (keyNode.comment)
            keyNode.comment += `
` + valueProps.comment;
          else
            keyNode.comment = valueProps.comment;
        }
        const pair = new Pair(keyNode, valueNode);
        if (ctx.options.keepSourceTokens)
          pair.srcToken = collItem;
        if (isMap2) {
          const map2 = coll;
          if (mapIncludes(ctx, map2.items, keyNode))
            onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
          map2.items.push(pair);
        } else {
          const map2 = new YAMLMap(ctx.schema);
          map2.flow = true;
          map2.items.push(pair);
          const endRange = (valueNode != null ? valueNode : keyNode).range;
          map2.range = [keyNode.range[0], endRange[1], endRange[2]];
          coll.items.push(map2);
        }
        offset = valueNode ? valueNode.range[2] : valueProps.end;
      }
    }
    const expectedEnd = isMap2 ? "}" : "]";
    const [ce, ...ee2] = fc.end;
    let cePos = offset;
    if (ce && ce.source === expectedEnd)
      cePos = ce.offset + ce.source.length;
    else {
      const name = fcName[0].toUpperCase() + fcName.substring(1);
      const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
      onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
      if (ce && ce.source.length !== 1)
        ee2.unshift(ce);
    }
    if (ee2.length > 0) {
      const end = resolveEnd(ee2, cePos, ctx.options.strict, onError);
      if (end.comment) {
        if (coll.comment)
          coll.comment += `
` + end.comment;
        else
          coll.comment = end.comment;
      }
      coll.range = [fc.offset, cePos, end.offset];
    } else {
      coll.range = [fc.offset, cePos, cePos];
    }
    return coll;
  }
  function resolveCollection(CN2, ctx, token, onError, tagName, tag) {
    const coll = token.type === "block-map" ? resolveBlockMap(CN2, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq(CN2, ctx, token, onError, tag) : resolveFlowCollection(CN2, ctx, token, onError, tag);
    const Coll = coll.constructor;
    if (tagName === "!" || tagName === Coll.tagName) {
      coll.tag = Coll.tagName;
      return coll;
    }
    if (tagName)
      coll.tag = tagName;
    return coll;
  }
  function composeCollection(CN2, ctx, token, props, onError) {
    var _a2, _b2;
    const tagToken = props.tag;
    const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
    if (token.type === "block-seq") {
      const { anchor, newlineAfterProp: nl2 } = props;
      const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor != null ? anchor : tagToken;
      if (lastProp && (!nl2 || nl2.offset < lastProp.offset)) {
        const message = "Missing newline after block sequence props";
        onError(lastProp, "MISSING_CHAR", message);
      }
    }
    const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
    if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap.tagName && expType === "map" || tagName === YAMLSeq.tagName && expType === "seq") {
      return resolveCollection(CN2, ctx, token, onError, tagName);
    }
    let tag = ctx.schema.tags.find((t4) => t4.tag === tagName && t4.collection === expType);
    if (!tag) {
      const kt2 = ctx.schema.knownTags[tagName];
      if (kt2 && kt2.collection === expType) {
        ctx.schema.tags.push(Object.assign({}, kt2, { default: false }));
        tag = kt2;
      } else {
        if (kt2 == null ? undefined : kt2.collection) {
          onError(tagToken, "BAD_COLLECTION_TYPE", `${kt2.tag} used for ${expType} collection, but expects ${kt2.collection}`, true);
        } else {
          onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
        }
        return resolveCollection(CN2, ctx, token, onError, tagName);
      }
    }
    const coll = resolveCollection(CN2, ctx, token, onError, tagName, tag);
    const res = (_b2 = (_a2 = tag.resolve) == null ? undefined : _a2.call(tag, coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options)) != null ? _b2 : coll;
    const node = isNode(res) ? res : new Scalar(res);
    node.range = coll.range;
    node.tag = tagName;
    if (tag == null ? undefined : tag.format)
      node.format = tag.format;
    return node;
  }
  function resolveBlockScalar(ctx, scalar, onError) {
    const start = scalar.offset;
    const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
    if (!header)
      return { value: "", type: null, comment: "", range: [start, start, start] };
    const type = header.mode === ">" ? Scalar.BLOCK_FOLDED : Scalar.BLOCK_LITERAL;
    const lines = scalar.source ? splitLines(scalar.source) : [];
    let chompStart = lines.length;
    for (let i = lines.length - 1;i >= 0; --i) {
      const content = lines[i][1];
      if (content === "" || content === "\r")
        chompStart = i;
      else
        break;
    }
    if (chompStart === 0) {
      const value2 = header.chomp === "+" && lines.length > 0 ? `
`.repeat(Math.max(1, lines.length - 1)) : "";
      let end2 = start + header.length;
      if (scalar.source)
        end2 += scalar.source.length;
      return { value: value2, type, comment: header.comment, range: [start, end2, end2] };
    }
    let trimIndent = scalar.indent + header.indent;
    let offset = scalar.offset + header.length;
    let contentStart = 0;
    for (let i = 0;i < chompStart; ++i) {
      const [indent, content] = lines[i];
      if (content === "" || content === "\r") {
        if (header.indent === 0 && indent.length > trimIndent)
          trimIndent = indent.length;
      } else {
        if (indent.length < trimIndent) {
          const message = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
          onError(offset + indent.length, "MISSING_CHAR", message);
        }
        if (header.indent === 0)
          trimIndent = indent.length;
        contentStart = i;
        if (trimIndent === 0 && !ctx.atRoot) {
          const message = "Block scalar values in collections must be indented";
          onError(offset, "BAD_INDENT", message);
        }
        break;
      }
      offset += indent.length + content.length + 1;
    }
    for (let i = lines.length - 1;i >= chompStart; --i) {
      if (lines[i][0].length > trimIndent)
        chompStart = i + 1;
    }
    let value = "";
    let sep = "";
    let prevMoreIndented = false;
    for (let i = 0;i < contentStart; ++i)
      value += lines[i][0].slice(trimIndent) + `
`;
    for (let i = contentStart;i < chompStart; ++i) {
      let [indent, content] = lines[i];
      offset += indent.length + content.length + 1;
      const crlf = content[content.length - 1] === "\r";
      if (crlf)
        content = content.slice(0, -1);
      if (content && indent.length < trimIndent) {
        const src = header.indent ? "explicit indentation indicator" : "first line";
        const message = `Block scalar lines must not be less indented than their ${src}`;
        onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
        indent = "";
      }
      if (type === Scalar.BLOCK_LITERAL) {
        value += sep + indent.slice(trimIndent) + content;
        sep = `
`;
      } else if (indent.length > trimIndent || content[0] === "\t") {
        if (sep === " ")
          sep = `
`;
        else if (!prevMoreIndented && sep === `
`)
          sep = `

`;
        value += sep + indent.slice(trimIndent) + content;
        sep = `
`;
        prevMoreIndented = true;
      } else if (content === "") {
        if (sep === `
`)
          value += `
`;
        else
          sep = `
`;
      } else {
        value += sep + content;
        sep = " ";
        prevMoreIndented = false;
      }
    }
    switch (header.chomp) {
      case "-":
        break;
      case "+":
        for (let i = chompStart;i < lines.length; ++i)
          value += `
` + lines[i][0].slice(trimIndent);
        if (value[value.length - 1] !== `
`)
          value += `
`;
        break;
      default:
        value += `
`;
    }
    const end = start + header.length + scalar.source.length;
    return { value, type, comment: header.comment, range: [start, end, end] };
  }
  function parseBlockScalarHeader({ offset, props }, strict, onError) {
    if (props[0].type !== "block-scalar-header") {
      onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
      return null;
    }
    const { source } = props[0];
    const mode = source[0];
    let indent = 0;
    let chomp = "";
    let error = -1;
    for (let i = 1;i < source.length; ++i) {
      const ch = source[i];
      if (!chomp && (ch === "-" || ch === "+"))
        chomp = ch;
      else {
        const n3 = Number(ch);
        if (!indent && n3)
          indent = n3;
        else if (error === -1)
          error = offset + i;
      }
    }
    if (error !== -1)
      onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
    let hasSpace = false;
    let comment = "";
    let length = source.length;
    for (let i = 1;i < props.length; ++i) {
      const token = props[i];
      switch (token.type) {
        case "space":
          hasSpace = true;
        case "newline":
          length += token.source.length;
          break;
        case "comment":
          if (strict && !hasSpace) {
            const message = "Comments must be separated from other tokens by white space characters";
            onError(token, "MISSING_CHAR", message);
          }
          length += token.source.length;
          comment = token.source.substring(1);
          break;
        case "error":
          onError(token, "UNEXPECTED_TOKEN", token.message);
          length += token.source.length;
          break;
        default: {
          const message = `Unexpected token in block scalar header: ${token.type}`;
          onError(token, "UNEXPECTED_TOKEN", message);
          const ts = token.source;
          if (ts && typeof ts === "string")
            length += ts.length;
        }
      }
    }
    return { mode, indent, chomp, comment, length };
  }
  function splitLines(source) {
    const split = source.split(/\n( *)/);
    const first = split[0];
    const m2 = first.match(/^( *)/);
    const line0 = (m2 == null ? undefined : m2[1]) ? [m2[1], first.slice(m2[1].length)] : ["", first];
    const lines = [line0];
    for (let i = 1;i < split.length; i += 2)
      lines.push([split[i], split[i + 1]]);
    return lines;
  }
  function resolveFlowScalar(scalar, strict, onError) {
    const { offset, type, source, end } = scalar;
    let _type;
    let value;
    const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
    switch (type) {
      case "scalar":
        _type = Scalar.PLAIN;
        value = plainValue(source, _onError);
        break;
      case "single-quoted-scalar":
        _type = Scalar.QUOTE_SINGLE;
        value = singleQuotedValue(source, _onError);
        break;
      case "double-quoted-scalar":
        _type = Scalar.QUOTE_DOUBLE;
        value = doubleQuotedValue(source, _onError);
        break;
      default:
        onError(scalar, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
        return {
          value: "",
          type: null,
          comment: "",
          range: [offset, offset + source.length, offset + source.length]
        };
    }
    const valueEnd = offset + source.length;
    const re = resolveEnd(end, valueEnd, strict, onError);
    return {
      value,
      type: _type,
      comment: re.comment,
      range: [offset, valueEnd, re.offset]
    };
  }
  function plainValue(source, onError) {
    let badChar = "";
    switch (source[0]) {
      case "\t":
        badChar = "a tab character";
        break;
      case ",":
        badChar = "flow indicator character ,";
        break;
      case "%":
        badChar = "directive indicator character %";
        break;
      case "|":
      case ">": {
        badChar = `block scalar indicator ${source[0]}`;
        break;
      }
      case "@":
      case "`": {
        badChar = `reserved character ${source[0]}`;
        break;
      }
    }
    if (badChar)
      onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
    return foldLines(source);
  }
  function singleQuotedValue(source, onError) {
    if (source[source.length - 1] !== "'" || source.length === 1)
      onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
    return foldLines(source.slice(1, -1)).replace(/''/g, "'");
  }
  function foldLines(source) {
    var _a2;
    let first, line;
    try {
      first = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy");
      line = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
    } catch (e) {
      first = new RegExp("(.*?)[ \\t]*\\r?\\n", "sy");
      line = new RegExp("[ \\t]*(.*?)[ \\t]*\\r?\\n", "sy");
    }
    let match = first.exec(source);
    if (!match)
      return source;
    let res = match[1];
    let sep = " ";
    let pos = first.lastIndex;
    line.lastIndex = pos;
    while (match = line.exec(source)) {
      if (match[1] === "") {
        if (sep === `
`)
          res += sep;
        else
          sep = `
`;
      } else {
        res += sep + match[1];
        sep = " ";
      }
      pos = line.lastIndex;
    }
    const last = new RegExp("[ \\t]*(.*)", "sy");
    last.lastIndex = pos;
    match = last.exec(source);
    return res + sep + ((_a2 = match == null ? undefined : match[1]) != null ? _a2 : "");
  }
  function doubleQuotedValue(source, onError) {
    let res = "";
    for (let i = 1;i < source.length - 1; ++i) {
      const ch = source[i];
      if (ch === "\r" && source[i + 1] === `
`)
        continue;
      if (ch === `
`) {
        const { fold, offset } = foldNewline(source, i);
        res += fold;
        i = offset;
      } else if (ch === "\\") {
        let next = source[++i];
        const cc = escapeCodes[next];
        if (cc)
          res += cc;
        else if (next === `
`) {
          next = source[i + 1];
          while (next === " " || next === "\t")
            next = source[++i + 1];
        } else if (next === "\r" && source[i + 1] === `
`) {
          next = source[++i + 1];
          while (next === " " || next === "\t")
            next = source[++i + 1];
        } else if (next === "x" || next === "u" || next === "U") {
          const length = { x: 2, u: 4, U: 8 }[next];
          res += parseCharCode(source, i + 1, length, onError);
          i += length;
        } else {
          const raw = source.substr(i - 1, 2);
          onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
          res += raw;
        }
      } else if (ch === " " || ch === "\t") {
        const wsStart = i;
        let next = source[i + 1];
        while (next === " " || next === "\t")
          next = source[++i + 1];
        if (next !== `
` && !(next === "\r" && source[i + 2] === `
`))
          res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
      } else {
        res += ch;
      }
    }
    if (source[source.length - 1] !== '"' || source.length === 1)
      onError(source.length, "MISSING_CHAR", 'Missing closing "quote');
    return res;
  }
  function foldNewline(source, offset) {
    let fold = "";
    let ch = source[offset + 1];
    while (ch === " " || ch === "\t" || ch === `
` || ch === "\r") {
      if (ch === "\r" && source[offset + 2] !== `
`)
        break;
      if (ch === `
`)
        fold += `
`;
      offset += 1;
      ch = source[offset + 1];
    }
    if (!fold)
      fold = " ";
    return { fold, offset };
  }
  var escapeCodes = {
    "0": "\x00",
    a: "\x07",
    b: "\b",
    e: "\x1B",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "\t",
    v: "\v",
    N: "",
    _: " ",
    L: "\u2028",
    P: "\u2029",
    " ": " ",
    '"': '"',
    "/": "/",
    "\\": "\\",
    "\t": "\t"
  };
  function parseCharCode(source, offset, length, onError) {
    const cc = source.substr(offset, length);
    const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
    const code = ok ? parseInt(cc, 16) : NaN;
    if (isNaN(code)) {
      const raw = source.substr(offset - 2, length + 2);
      onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw}`);
      return raw;
    }
    return String.fromCodePoint(code);
  }
  function composeScalar(ctx, token, tagToken, onError) {
    const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar(ctx, token, onError) : resolveFlowScalar(token, ctx.options.strict, onError);
    const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
    let tag;
    if (ctx.options.stringKeys && ctx.atKey) {
      tag = ctx.schema[SCALAR];
    } else if (tagName)
      tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
    else if (token.type === "scalar")
      tag = findScalarTagByTest(ctx, value, token, onError);
    else
      tag = ctx.schema[SCALAR];
    let scalar;
    try {
      const res = tag.resolve(value, (msg) => onError(tagToken != null ? tagToken : token, "TAG_RESOLVE_FAILED", msg), ctx.options);
      scalar = isScalar(res) ? res : new Scalar(res);
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error);
      onError(tagToken != null ? tagToken : token, "TAG_RESOLVE_FAILED", msg);
      scalar = new Scalar(value);
    }
    scalar.range = range;
    scalar.source = value;
    if (type)
      scalar.type = type;
    if (tagName)
      scalar.tag = tagName;
    if (tag.format)
      scalar.format = tag.format;
    if (comment)
      scalar.comment = comment;
    return scalar;
  }
  function findScalarTagByName(schema4, value, tagName, tagToken, onError) {
    var _a2;
    if (tagName === "!")
      return schema4[SCALAR];
    const matchWithTest = [];
    for (const tag of schema4.tags) {
      if (!tag.collection && tag.tag === tagName) {
        if (tag.default && tag.test)
          matchWithTest.push(tag);
        else
          return tag;
      }
    }
    for (const tag of matchWithTest)
      if ((_a2 = tag.test) == null ? undefined : _a2.test(value))
        return tag;
    const kt2 = schema4.knownTags[tagName];
    if (kt2 && !kt2.collection) {
      schema4.tags.push(Object.assign({}, kt2, { default: false, test: undefined }));
      return kt2;
    }
    onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
    return schema4[SCALAR];
  }
  function findScalarTagByTest({ atKey, directives, schema: schema4 }, value, token, onError) {
    var _a2;
    const tag = schema4.tags.find((tag2) => {
      var _a3;
      return (tag2.default === true || atKey && tag2.default === "key") && ((_a3 = tag2.test) == null ? undefined : _a3.test(value));
    }) || schema4[SCALAR];
    if (schema4.compat) {
      const compat = (_a2 = schema4.compat.find((tag2) => {
        var _a3;
        return tag2.default && ((_a3 = tag2.test) == null ? undefined : _a3.test(value));
      })) != null ? _a2 : schema4[SCALAR];
      if (tag.tag !== compat.tag) {
        const ts = directives.tagString(tag.tag);
        const cs = directives.tagString(compat.tag);
        const msg = `Value may be parsed as either ${ts} or ${cs}`;
        onError(token, "TAG_RESOLVE_FAILED", msg, true);
      }
    }
    return tag;
  }
  function emptyScalarPosition(offset, before, pos) {
    if (before) {
      if (pos === null)
        pos = before.length;
      for (let i = pos - 1;i >= 0; --i) {
        let st2 = before[i];
        switch (st2.type) {
          case "space":
          case "comment":
          case "newline":
            offset -= st2.source.length;
            continue;
        }
        st2 = before[++i];
        while ((st2 == null ? undefined : st2.type) === "space") {
          offset += st2.source.length;
          st2 = before[++i];
        }
        break;
      }
    }
    return offset;
  }
  var CN = { composeNode, composeEmptyNode };
  function composeNode(ctx, token, props, onError) {
    const atKey = ctx.atKey;
    const { spaceBefore, comment, anchor, tag } = props;
    let node;
    let isSrcToken = true;
    switch (token.type) {
      case "alias":
        node = composeAlias(ctx, token, onError);
        if (anchor || tag)
          onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
        break;
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "block-scalar":
        node = composeScalar(ctx, token, tag, onError);
        if (anchor)
          node.anchor = anchor.source.substring(1);
        break;
      case "block-map":
      case "block-seq":
      case "flow-collection":
        node = composeCollection(CN, ctx, token, props, onError);
        if (anchor)
          node.anchor = anchor.source.substring(1);
        break;
      default: {
        const message = token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`;
        onError(token, "UNEXPECTED_TOKEN", message);
        node = composeEmptyNode(ctx, token.offset, undefined, null, props, onError);
        isSrcToken = false;
      }
    }
    if (anchor && node.anchor === "")
      onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
    if (atKey && ctx.options.stringKeys && (!isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) {
      const msg = "With stringKeys, all keys must be strings";
      onError(tag != null ? tag : token, "NON_STRING_KEY", msg);
    }
    if (spaceBefore)
      node.spaceBefore = true;
    if (comment) {
      if (token.type === "scalar" && token.source === "")
        node.comment = comment;
      else
        node.commentBefore = comment;
    }
    if (ctx.options.keepSourceTokens && isSrcToken)
      node.srcToken = token;
    return node;
  }
  function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
    const token = {
      type: "scalar",
      offset: emptyScalarPosition(offset, before, pos),
      indent: -1,
      source: ""
    };
    const node = composeScalar(ctx, token, tag, onError);
    if (anchor) {
      node.anchor = anchor.source.substring(1);
      if (node.anchor === "")
        onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
    }
    if (spaceBefore)
      node.spaceBefore = true;
    if (comment) {
      node.comment = comment;
      node.range[2] = end;
    }
    return node;
  }
  function composeAlias({ options }, { offset, source, end }, onError) {
    const alias = new Alias(source.substring(1));
    if (alias.source === "")
      onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
    if (alias.source.endsWith(":"))
      onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
    const valueEnd = offset + source.length;
    const re = resolveEnd(end, valueEnd, options.strict, onError);
    alias.range = [offset, valueEnd, re.offset];
    if (re.comment)
      alias.comment = re.comment;
    return alias;
  }
  function composeDoc(options, directives, { offset, start, value, end }, onError) {
    const opts = Object.assign({ _directives: directives }, options);
    const doc = new Document(undefined, opts);
    const ctx = {
      atKey: false,
      atRoot: true,
      directives: doc.directives,
      options: doc.options,
      schema: doc.schema
    };
    const props = resolveProps(start, {
      indicator: "doc-start",
      next: value != null ? value : end == null ? undefined : end[0],
      offset,
      onError,
      parentIndent: 0,
      startOnNewline: true
    });
    if (props.found) {
      doc.directives.docStart = true;
      if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline)
        onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
    }
    doc.contents = value ? composeNode(ctx, value, props, onError) : composeEmptyNode(ctx, props.end, start, null, props, onError);
    const contentEnd = doc.contents.range[2];
    const re = resolveEnd(end, contentEnd, false, onError);
    if (re.comment)
      doc.comment = re.comment;
    doc.range = [offset, contentEnd, re.offset];
    return doc;
  }
  function getErrorPos(src) {
    if (typeof src === "number")
      return [src, src + 1];
    if (Array.isArray(src))
      return src.length === 2 ? src : [src[0], src[1]];
    const { offset, source } = src;
    return [offset, offset + (typeof source === "string" ? source.length : 1)];
  }
  function parsePrelude(prelude) {
    var _a2;
    let comment = "";
    let atComment = false;
    let afterEmptyLine = false;
    for (let i = 0;i < prelude.length; ++i) {
      const source = prelude[i];
      switch (source[0]) {
        case "#":
          comment += (comment === "" ? "" : afterEmptyLine ? `

` : `
`) + (source.substring(1) || " ");
          atComment = true;
          afterEmptyLine = false;
          break;
        case "%":
          if (((_a2 = prelude[i + 1]) == null ? undefined : _a2[0]) !== "#")
            i += 1;
          atComment = false;
          break;
        default:
          if (!atComment)
            afterEmptyLine = true;
          atComment = false;
      }
    }
    return { comment, afterEmptyLine };
  }
  var Composer = class {
    constructor(options = {}) {
      this.doc = null;
      this.atDirectives = false;
      this.prelude = [];
      this.errors = [];
      this.warnings = [];
      this.onError = (source, code, message, warning) => {
        const pos = getErrorPos(source);
        if (warning)
          this.warnings.push(new YAMLWarning(pos, code, message));
        else
          this.errors.push(new YAMLParseError(pos, code, message));
      };
      this.directives = new Directives({ version: options.version || "1.2" });
      this.options = options;
    }
    decorate(doc, afterDoc) {
      const { comment, afterEmptyLine } = parsePrelude(this.prelude);
      if (comment) {
        const dc = doc.contents;
        if (afterDoc) {
          doc.comment = doc.comment ? `${doc.comment}
${comment}` : comment;
        } else if (afterEmptyLine || doc.directives.docStart || !dc) {
          doc.commentBefore = comment;
        } else if (isCollection(dc) && !dc.flow && dc.items.length > 0) {
          let it = dc.items[0];
          if (isPair(it))
            it = it.key;
          const cb = it.commentBefore;
          it.commentBefore = cb ? `${comment}
${cb}` : comment;
        } else {
          const cb = dc.commentBefore;
          dc.commentBefore = cb ? `${comment}
${cb}` : comment;
        }
      }
      if (afterDoc) {
        Array.prototype.push.apply(doc.errors, this.errors);
        Array.prototype.push.apply(doc.warnings, this.warnings);
      } else {
        doc.errors = this.errors;
        doc.warnings = this.warnings;
      }
      this.prelude = [];
      this.errors = [];
      this.warnings = [];
    }
    streamInfo() {
      return {
        comment: parsePrelude(this.prelude).comment,
        directives: this.directives,
        errors: this.errors,
        warnings: this.warnings
      };
    }
    *compose(tokens, forceDoc = false, endOffset = -1) {
      for (const token of tokens)
        yield* __yieldStar(this.next(token));
      yield* __yieldStar(this.end(forceDoc, endOffset));
    }
    *next(token) {
      switch (token.type) {
        case "directive":
          this.directives.add(token.source, (offset, message, warning) => {
            const pos = getErrorPos(token);
            pos[0] += offset;
            this.onError(pos, "BAD_DIRECTIVE", message, warning);
          });
          this.prelude.push(token.source);
          this.atDirectives = true;
          break;
        case "document": {
          const doc = composeDoc(this.options, this.directives, token, this.onError);
          if (this.atDirectives && !doc.directives.docStart)
            this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
          this.decorate(doc, false);
          if (this.doc)
            yield this.doc;
          this.doc = doc;
          this.atDirectives = false;
          break;
        }
        case "byte-order-mark":
        case "space":
          break;
        case "comment":
        case "newline":
          this.prelude.push(token.source);
          break;
        case "error": {
          const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
          const error = new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
          if (this.atDirectives || !this.doc)
            this.errors.push(error);
          else
            this.doc.errors.push(error);
          break;
        }
        case "doc-end": {
          if (!this.doc) {
            const msg = "Unexpected doc-end without preceding document";
            this.errors.push(new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg));
            break;
          }
          this.doc.directives.docEnd = true;
          const end = resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
          this.decorate(this.doc, true);
          if (end.comment) {
            const dc = this.doc.comment;
            this.doc.comment = dc ? `${dc}
${end.comment}` : end.comment;
          }
          this.doc.range[2] = end.offset;
          break;
        }
        default:
          this.errors.push(new YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
      }
    }
    *end(forceDoc = false, endOffset = -1) {
      if (this.doc) {
        this.decorate(this.doc, true);
        yield this.doc;
        this.doc = null;
      } else if (forceDoc) {
        const opts = Object.assign({ _directives: this.directives }, this.options);
        const doc = new Document(undefined, opts);
        if (this.atDirectives)
          this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
        doc.range = [0, endOffset, endOffset];
        this.decorate(doc, false);
        yield doc;
      }
    }
  };
  var cst_exports = {};
  __export(cst_exports, {
    BOM: () => BOM,
    DOCUMENT: () => DOCUMENT,
    FLOW_END: () => FLOW_END,
    SCALAR: () => SCALAR2,
    createScalarToken: () => createScalarToken,
    isCollection: () => isCollection2,
    isScalar: () => isScalar2,
    prettyToken: () => prettyToken,
    resolveAsScalar: () => resolveAsScalar,
    setScalarValue: () => setScalarValue,
    stringify: () => stringify2,
    tokenType: () => tokenType,
    visit: () => visit2
  });
  function resolveAsScalar(token, strict = true, onError) {
    if (token) {
      const _onError = (pos, code, message) => {
        const offset = typeof pos === "number" ? pos : Array.isArray(pos) ? pos[0] : pos.offset;
        if (onError)
          onError(offset, code, message);
        else
          throw new YAMLParseError([offset, offset + 1], code, message);
      };
      switch (token.type) {
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return resolveFlowScalar(token, strict, _onError);
        case "block-scalar":
          return resolveBlockScalar({ options: { strict } }, token, _onError);
      }
    }
    return null;
  }
  function createScalarToken(value, context) {
    var _a2;
    const { implicitKey = false, indent, inFlow = false, offset = -1, type = "PLAIN" } = context;
    const source = stringifyString({ type, value }, {
      implicitKey,
      indent: indent > 0 ? " ".repeat(indent) : "",
      inFlow,
      options: { blockQuote: true, lineWidth: -1 }
    });
    const end = (_a2 = context.end) != null ? _a2 : [
      { type: "newline", offset: -1, indent, source: `
` }
    ];
    switch (source[0]) {
      case "|":
      case ">": {
        const he = source.indexOf(`
`);
        const head = source.substring(0, he);
        const body = source.substring(he + 1) + `
`;
        const props = [
          { type: "block-scalar-header", offset, indent, source: head }
        ];
        if (!addEndtoBlockProps(props, end))
          props.push({ type: "newline", offset: -1, indent, source: `
` });
        return { type: "block-scalar", offset, indent, props, source: body };
      }
      case '"':
        return { type: "double-quoted-scalar", offset, indent, source, end };
      case "'":
        return { type: "single-quoted-scalar", offset, indent, source, end };
      default:
        return { type: "scalar", offset, indent, source, end };
    }
  }
  function setScalarValue(token, value, context = {}) {
    let { afterKey = false, implicitKey = false, inFlow = false, type } = context;
    let indent = "indent" in token ? token.indent : null;
    if (afterKey && typeof indent === "number")
      indent += 2;
    if (!type)
      switch (token.type) {
        case "single-quoted-scalar":
          type = "QUOTE_SINGLE";
          break;
        case "double-quoted-scalar":
          type = "QUOTE_DOUBLE";
          break;
        case "block-scalar": {
          const header = token.props[0];
          if (header.type !== "block-scalar-header")
            throw new Error("Invalid block scalar header");
          type = header.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
          break;
        }
        default:
          type = "PLAIN";
      }
    const source = stringifyString({ type, value }, {
      implicitKey: implicitKey || indent === null,
      indent: indent !== null && indent > 0 ? " ".repeat(indent) : "",
      inFlow,
      options: { blockQuote: true, lineWidth: -1 }
    });
    switch (source[0]) {
      case "|":
      case ">":
        setBlockScalarValue(token, source);
        break;
      case '"':
        setFlowScalarValue(token, source, "double-quoted-scalar");
        break;
      case "'":
        setFlowScalarValue(token, source, "single-quoted-scalar");
        break;
      default:
        setFlowScalarValue(token, source, "scalar");
    }
  }
  function setBlockScalarValue(token, source) {
    const he = source.indexOf(`
`);
    const head = source.substring(0, he);
    const body = source.substring(he + 1) + `
`;
    if (token.type === "block-scalar") {
      const header = token.props[0];
      if (header.type !== "block-scalar-header")
        throw new Error("Invalid block scalar header");
      header.source = head;
      token.source = body;
    } else {
      const { offset } = token;
      const indent = "indent" in token ? token.indent : -1;
      const props = [
        { type: "block-scalar-header", offset, indent, source: head }
      ];
      if (!addEndtoBlockProps(props, "end" in token ? token.end : undefined))
        props.push({ type: "newline", offset: -1, indent, source: `
` });
      for (const key of Object.keys(token))
        if (key !== "type" && key !== "offset")
          delete token[key];
      Object.assign(token, { type: "block-scalar", indent, props, source: body });
    }
  }
  function addEndtoBlockProps(props, end) {
    if (end)
      for (const st2 of end)
        switch (st2.type) {
          case "space":
          case "comment":
            props.push(st2);
            break;
          case "newline":
            props.push(st2);
            return true;
        }
    return false;
  }
  function setFlowScalarValue(token, source, type) {
    switch (token.type) {
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        token.type = type;
        token.source = source;
        break;
      case "block-scalar": {
        const end = token.props.slice(1);
        let oa = source.length;
        if (token.props[0].type === "block-scalar-header")
          oa -= token.props[0].source.length;
        for (const tok of end)
          tok.offset += oa;
        delete token.props;
        Object.assign(token, { type, source, end });
        break;
      }
      case "block-map":
      case "block-seq": {
        const offset = token.offset + source.length;
        const nl2 = { type: "newline", offset, indent: token.indent, source: `
` };
        delete token.items;
        Object.assign(token, { type, source, end: [nl2] });
        break;
      }
      default: {
        const indent = "indent" in token ? token.indent : -1;
        const end = "end" in token && Array.isArray(token.end) ? token.end.filter((st2) => st2.type === "space" || st2.type === "comment" || st2.type === "newline") : [];
        for (const key of Object.keys(token))
          if (key !== "type" && key !== "offset")
            delete token[key];
        Object.assign(token, { type, indent, source, end });
      }
    }
  }
  var stringify2 = (cst) => ("type" in cst) ? stringifyToken(cst) : stringifyItem(cst);
  function stringifyToken(token) {
    switch (token.type) {
      case "block-scalar": {
        let res = "";
        for (const tok of token.props)
          res += stringifyToken(tok);
        return res + token.source;
      }
      case "block-map":
      case "block-seq": {
        let res = "";
        for (const item of token.items)
          res += stringifyItem(item);
        return res;
      }
      case "flow-collection": {
        let res = token.start.source;
        for (const item of token.items)
          res += stringifyItem(item);
        for (const st2 of token.end)
          res += st2.source;
        return res;
      }
      case "document": {
        let res = stringifyItem(token);
        if (token.end)
          for (const st2 of token.end)
            res += st2.source;
        return res;
      }
      default: {
        let res = token.source;
        if ("end" in token && token.end)
          for (const st2 of token.end)
            res += st2.source;
        return res;
      }
    }
  }
  function stringifyItem({ start, key, sep, value }) {
    let res = "";
    for (const st2 of start)
      res += st2.source;
    if (key)
      res += stringifyToken(key);
    if (sep)
      for (const st2 of sep)
        res += st2.source;
    if (value)
      res += stringifyToken(value);
    return res;
  }
  var BREAK2 = Symbol("break visit");
  var SKIP2 = Symbol("skip children");
  var REMOVE2 = Symbol("remove item");
  function visit2(cst, visitor) {
    if ("type" in cst && cst.type === "document")
      cst = { start: cst.start, value: cst.value };
    _visit(Object.freeze([]), cst, visitor);
  }
  visit2.BREAK = BREAK2;
  visit2.SKIP = SKIP2;
  visit2.REMOVE = REMOVE2;
  visit2.itemAtPath = (cst, path3) => {
    let item = cst;
    for (const [field, index] of path3) {
      const tok = item == null ? undefined : item[field];
      if (tok && "items" in tok) {
        item = tok.items[index];
      } else
        return;
    }
    return item;
  };
  visit2.parentCollection = (cst, path3) => {
    const parent = visit2.itemAtPath(cst, path3.slice(0, -1));
    const field = path3[path3.length - 1][0];
    const coll = parent == null ? undefined : parent[field];
    if (coll && "items" in coll)
      return coll;
    throw new Error("Parent collection not found");
  };
  function _visit(path3, item, visitor) {
    let ctrl = visitor(item, path3);
    if (typeof ctrl === "symbol")
      return ctrl;
    for (const field of ["key", "value"]) {
      const token = item[field];
      if (token && "items" in token) {
        for (let i = 0;i < token.items.length; ++i) {
          const ci2 = _visit(Object.freeze(path3.concat([[field, i]])), token.items[i], visitor);
          if (typeof ci2 === "number")
            i = ci2 - 1;
          else if (ci2 === BREAK2)
            return BREAK2;
          else if (ci2 === REMOVE2) {
            token.items.splice(i, 1);
            i -= 1;
          }
        }
        if (typeof ctrl === "function" && field === "key")
          ctrl = ctrl(item, path3);
      }
    }
    return typeof ctrl === "function" ? ctrl(item, path3) : ctrl;
  }
  var BOM = "\uFEFF";
  var DOCUMENT = "\x02";
  var FLOW_END = "\x18";
  var SCALAR2 = "\x1F";
  var isCollection2 = (token) => !!token && ("items" in token);
  var isScalar2 = (token) => !!token && (token.type === "scalar" || token.type === "single-quoted-scalar" || token.type === "double-quoted-scalar" || token.type === "block-scalar");
  function prettyToken(token) {
    switch (token) {
      case BOM:
        return "<BOM>";
      case DOCUMENT:
        return "<DOC>";
      case FLOW_END:
        return "<FLOW_END>";
      case SCALAR2:
        return "<SCALAR>";
      default:
        return JSON.stringify(token);
    }
  }
  function tokenType(source) {
    switch (source) {
      case BOM:
        return "byte-order-mark";
      case DOCUMENT:
        return "doc-mode";
      case FLOW_END:
        return "flow-error-end";
      case SCALAR2:
        return "scalar";
      case "---":
        return "doc-start";
      case "...":
        return "doc-end";
      case "":
      case `
`:
      case `\r
`:
        return "newline";
      case "-":
        return "seq-item-ind";
      case "?":
        return "explicit-key-ind";
      case ":":
        return "map-value-ind";
      case "{":
        return "flow-map-start";
      case "}":
        return "flow-map-end";
      case "[":
        return "flow-seq-start";
      case "]":
        return "flow-seq-end";
      case ",":
        return "comma";
    }
    switch (source[0]) {
      case " ":
      case "\t":
        return "space";
      case "#":
        return "comment";
      case "%":
        return "directive-line";
      case "*":
        return "alias";
      case "&":
        return "anchor";
      case "!":
        return "tag";
      case "'":
        return "single-quoted-scalar";
      case '"':
        return "double-quoted-scalar";
      case "|":
      case ">":
        return "block-scalar-header";
    }
    return null;
  }
  function isEmpty(ch) {
    switch (ch) {
      case undefined:
      case " ":
      case `
`:
      case "\r":
      case "\t":
        return true;
      default:
        return false;
    }
  }
  var hexDigits = new Set("0123456789ABCDEFabcdef");
  var tagChars = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
  var flowIndicatorChars = new Set(",[]{}");
  var invalidAnchorChars = new Set(` ,[]{}
\r	`);
  var isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
  var Lexer = class {
    constructor() {
      this.atEnd = false;
      this.blockScalarIndent = -1;
      this.blockScalarKeep = false;
      this.buffer = "";
      this.flowKey = false;
      this.flowLevel = 0;
      this.indentNext = 0;
      this.indentValue = 0;
      this.lineEndPos = null;
      this.next = null;
      this.pos = 0;
    }
    *lex(source, incomplete = false) {
      var _a2;
      if (source) {
        if (typeof source !== "string")
          throw TypeError("source is not a string");
        this.buffer = this.buffer ? this.buffer + source : source;
        this.lineEndPos = null;
      }
      this.atEnd = !incomplete;
      let next = (_a2 = this.next) != null ? _a2 : "stream";
      while (next && (incomplete || this.hasChars(1)))
        next = yield* __yieldStar(this.parseNext(next));
    }
    atLineEnd() {
      let i = this.pos;
      let ch = this.buffer[i];
      while (ch === " " || ch === "\t")
        ch = this.buffer[++i];
      if (!ch || ch === "#" || ch === `
`)
        return true;
      if (ch === "\r")
        return this.buffer[i + 1] === `
`;
      return false;
    }
    charAt(n3) {
      return this.buffer[this.pos + n3];
    }
    continueScalar(offset) {
      let ch = this.buffer[offset];
      if (this.indentNext > 0) {
        let indent = 0;
        while (ch === " ")
          ch = this.buffer[++indent + offset];
        if (ch === "\r") {
          const next = this.buffer[indent + offset + 1];
          if (next === `
` || !next && !this.atEnd)
            return offset + indent + 1;
        }
        return ch === `
` || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
      }
      if (ch === "-" || ch === ".") {
        const dt2 = this.buffer.substr(offset, 3);
        if ((dt2 === "---" || dt2 === "...") && isEmpty(this.buffer[offset + 3]))
          return -1;
      }
      return offset;
    }
    getLine() {
      let end = this.lineEndPos;
      if (typeof end !== "number" || end !== -1 && end < this.pos) {
        end = this.buffer.indexOf(`
`, this.pos);
        this.lineEndPos = end;
      }
      if (end === -1)
        return this.atEnd ? this.buffer.substring(this.pos) : null;
      if (this.buffer[end - 1] === "\r")
        end -= 1;
      return this.buffer.substring(this.pos, end);
    }
    hasChars(n3) {
      return this.pos + n3 <= this.buffer.length;
    }
    setNext(state) {
      this.buffer = this.buffer.substring(this.pos);
      this.pos = 0;
      this.lineEndPos = null;
      this.next = state;
      return null;
    }
    peek(n3) {
      return this.buffer.substr(this.pos, n3);
    }
    *parseNext(next) {
      switch (next) {
        case "stream":
          return yield* __yieldStar(this.parseStream());
        case "line-start":
          return yield* __yieldStar(this.parseLineStart());
        case "block-start":
          return yield* __yieldStar(this.parseBlockStart());
        case "doc":
          return yield* __yieldStar(this.parseDocument());
        case "flow":
          return yield* __yieldStar(this.parseFlowCollection());
        case "quoted-scalar":
          return yield* __yieldStar(this.parseQuotedScalar());
        case "block-scalar":
          return yield* __yieldStar(this.parseBlockScalar());
        case "plain-scalar":
          return yield* __yieldStar(this.parsePlainScalar());
      }
    }
    *parseStream() {
      let line = this.getLine();
      if (line === null)
        return this.setNext("stream");
      if (line[0] === BOM) {
        yield* __yieldStar(this.pushCount(1));
        line = line.substring(1);
      }
      if (line[0] === "%") {
        let dirEnd = line.length;
        let cs = line.indexOf("#");
        while (cs !== -1) {
          const ch = line[cs - 1];
          if (ch === " " || ch === "\t") {
            dirEnd = cs - 1;
            break;
          } else {
            cs = line.indexOf("#", cs + 1);
          }
        }
        while (true) {
          const ch = line[dirEnd - 1];
          if (ch === " " || ch === "\t")
            dirEnd -= 1;
          else
            break;
        }
        const n3 = (yield* __yieldStar(this.pushCount(dirEnd))) + (yield* __yieldStar(this.pushSpaces(true)));
        yield* __yieldStar(this.pushCount(line.length - n3));
        this.pushNewline();
        return "stream";
      }
      if (this.atLineEnd()) {
        const sp = yield* __yieldStar(this.pushSpaces(true));
        yield* __yieldStar(this.pushCount(line.length - sp));
        yield* __yieldStar(this.pushNewline());
        return "stream";
      }
      yield DOCUMENT;
      return yield* __yieldStar(this.parseLineStart());
    }
    *parseLineStart() {
      const ch = this.charAt(0);
      if (!ch && !this.atEnd)
        return this.setNext("line-start");
      if (ch === "-" || ch === ".") {
        if (!this.atEnd && !this.hasChars(4))
          return this.setNext("line-start");
        const s2 = this.peek(3);
        if ((s2 === "---" || s2 === "...") && isEmpty(this.charAt(3))) {
          yield* __yieldStar(this.pushCount(3));
          this.indentValue = 0;
          this.indentNext = 0;
          return s2 === "---" ? "doc" : "stream";
        }
      }
      this.indentValue = yield* __yieldStar(this.pushSpaces(false));
      if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1)))
        this.indentNext = this.indentValue;
      return yield* __yieldStar(this.parseBlockStart());
    }
    *parseBlockStart() {
      const [ch0, ch1] = this.peek(2);
      if (!ch1 && !this.atEnd)
        return this.setNext("block-start");
      if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
        const n3 = (yield* __yieldStar(this.pushCount(1))) + (yield* __yieldStar(this.pushSpaces(true)));
        this.indentNext = this.indentValue + 1;
        this.indentValue += n3;
        return yield* __yieldStar(this.parseBlockStart());
      }
      return "doc";
    }
    *parseDocument() {
      yield* __yieldStar(this.pushSpaces(true));
      const line = this.getLine();
      if (line === null)
        return this.setNext("doc");
      let n3 = yield* __yieldStar(this.pushIndicators());
      switch (line[n3]) {
        case "#":
          yield* __yieldStar(this.pushCount(line.length - n3));
        case undefined:
          yield* __yieldStar(this.pushNewline());
          return yield* __yieldStar(this.parseLineStart());
        case "{":
        case "[":
          yield* __yieldStar(this.pushCount(1));
          this.flowKey = false;
          this.flowLevel = 1;
          return "flow";
        case "}":
        case "]":
          yield* __yieldStar(this.pushCount(1));
          return "doc";
        case "*":
          yield* __yieldStar(this.pushUntil(isNotAnchorChar));
          return "doc";
        case '"':
        case "'":
          return yield* __yieldStar(this.parseQuotedScalar());
        case "|":
        case ">":
          n3 += yield* __yieldStar(this.parseBlockScalarHeader());
          n3 += yield* __yieldStar(this.pushSpaces(true));
          yield* __yieldStar(this.pushCount(line.length - n3));
          yield* __yieldStar(this.pushNewline());
          return yield* __yieldStar(this.parseBlockScalar());
        default:
          return yield* __yieldStar(this.parsePlainScalar());
      }
    }
    *parseFlowCollection() {
      let nl2, sp;
      let indent = -1;
      do {
        nl2 = yield* __yieldStar(this.pushNewline());
        if (nl2 > 0) {
          sp = yield* __yieldStar(this.pushSpaces(false));
          this.indentValue = indent = sp;
        } else {
          sp = 0;
        }
        sp += yield* __yieldStar(this.pushSpaces(true));
      } while (nl2 + sp > 0);
      const line = this.getLine();
      if (line === null)
        return this.setNext("flow");
      if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
        const atFlowEndMarker = indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}");
        if (!atFlowEndMarker) {
          this.flowLevel = 0;
          yield FLOW_END;
          return yield* __yieldStar(this.parseLineStart());
        }
      }
      let n3 = 0;
      while (line[n3] === ",") {
        n3 += yield* __yieldStar(this.pushCount(1));
        n3 += yield* __yieldStar(this.pushSpaces(true));
        this.flowKey = false;
      }
      n3 += yield* __yieldStar(this.pushIndicators());
      switch (line[n3]) {
        case undefined:
          return "flow";
        case "#":
          yield* __yieldStar(this.pushCount(line.length - n3));
          return "flow";
        case "{":
        case "[":
          yield* __yieldStar(this.pushCount(1));
          this.flowKey = false;
          this.flowLevel += 1;
          return "flow";
        case "}":
        case "]":
          yield* __yieldStar(this.pushCount(1));
          this.flowKey = true;
          this.flowLevel -= 1;
          return this.flowLevel ? "flow" : "doc";
        case "*":
          yield* __yieldStar(this.pushUntil(isNotAnchorChar));
          return "flow";
        case '"':
        case "'":
          this.flowKey = true;
          return yield* __yieldStar(this.parseQuotedScalar());
        case ":": {
          const next = this.charAt(1);
          if (this.flowKey || isEmpty(next) || next === ",") {
            this.flowKey = false;
            yield* __yieldStar(this.pushCount(1));
            yield* __yieldStar(this.pushSpaces(true));
            return "flow";
          }
        }
        default:
          this.flowKey = false;
          return yield* __yieldStar(this.parsePlainScalar());
      }
    }
    *parseQuotedScalar() {
      const quote2 = this.charAt(0);
      let end = this.buffer.indexOf(quote2, this.pos + 1);
      if (quote2 === "'") {
        while (end !== -1 && this.buffer[end + 1] === "'")
          end = this.buffer.indexOf("'", end + 2);
      } else {
        while (end !== -1) {
          let n3 = 0;
          while (this.buffer[end - 1 - n3] === "\\")
            n3 += 1;
          if (n3 % 2 === 0)
            break;
          end = this.buffer.indexOf('"', end + 1);
        }
      }
      const qb = this.buffer.substring(0, end);
      let nl2 = qb.indexOf(`
`, this.pos);
      if (nl2 !== -1) {
        while (nl2 !== -1) {
          const cs = this.continueScalar(nl2 + 1);
          if (cs === -1)
            break;
          nl2 = qb.indexOf(`
`, cs);
        }
        if (nl2 !== -1) {
          end = nl2 - (qb[nl2 - 1] === "\r" ? 2 : 1);
        }
      }
      if (end === -1) {
        if (!this.atEnd)
          return this.setNext("quoted-scalar");
        end = this.buffer.length;
      }
      yield* __yieldStar(this.pushToIndex(end + 1, false));
      return this.flowLevel ? "flow" : "doc";
    }
    *parseBlockScalarHeader() {
      this.blockScalarIndent = -1;
      this.blockScalarKeep = false;
      let i = this.pos;
      while (true) {
        const ch = this.buffer[++i];
        if (ch === "+")
          this.blockScalarKeep = true;
        else if (ch > "0" && ch <= "9")
          this.blockScalarIndent = Number(ch) - 1;
        else if (ch !== "-")
          break;
      }
      return yield* __yieldStar(this.pushUntil((ch) => isEmpty(ch) || ch === "#"));
    }
    *parseBlockScalar() {
      let nl2 = this.pos - 1;
      let indent = 0;
      let ch;
      loop:
        for (let i2 = this.pos;ch = this.buffer[i2]; ++i2) {
          switch (ch) {
            case " ":
              indent += 1;
              break;
            case `
`:
              nl2 = i2;
              indent = 0;
              break;
            case "\r": {
              const next = this.buffer[i2 + 1];
              if (!next && !this.atEnd)
                return this.setNext("block-scalar");
              if (next === `
`)
                break;
            }
            default:
              break loop;
          }
        }
      if (!ch && !this.atEnd)
        return this.setNext("block-scalar");
      if (indent >= this.indentNext) {
        if (this.blockScalarIndent === -1)
          this.indentNext = indent;
        else {
          this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
        }
        do {
          const cs = this.continueScalar(nl2 + 1);
          if (cs === -1)
            break;
          nl2 = this.buffer.indexOf(`
`, cs);
        } while (nl2 !== -1);
        if (nl2 === -1) {
          if (!this.atEnd)
            return this.setNext("block-scalar");
          nl2 = this.buffer.length;
        }
      }
      let i = nl2 + 1;
      ch = this.buffer[i];
      while (ch === " ")
        ch = this.buffer[++i];
      if (ch === "\t") {
        while (ch === "\t" || ch === " " || ch === "\r" || ch === `
`)
          ch = this.buffer[++i];
        nl2 = i - 1;
      } else if (!this.blockScalarKeep) {
        do {
          let i2 = nl2 - 1;
          let ch2 = this.buffer[i2];
          if (ch2 === "\r")
            ch2 = this.buffer[--i2];
          const lastChar = i2;
          while (ch2 === " ")
            ch2 = this.buffer[--i2];
          if (ch2 === `
` && i2 >= this.pos && i2 + 1 + indent > lastChar)
            nl2 = i2;
          else
            break;
        } while (true);
      }
      yield SCALAR2;
      yield* __yieldStar(this.pushToIndex(nl2 + 1, true));
      return yield* __yieldStar(this.parseLineStart());
    }
    *parsePlainScalar() {
      const inFlow = this.flowLevel > 0;
      let end = this.pos - 1;
      let i = this.pos - 1;
      let ch;
      while (ch = this.buffer[++i]) {
        if (ch === ":") {
          const next = this.buffer[i + 1];
          if (isEmpty(next) || inFlow && flowIndicatorChars.has(next))
            break;
          end = i;
        } else if (isEmpty(ch)) {
          let next = this.buffer[i + 1];
          if (ch === "\r") {
            if (next === `
`) {
              i += 1;
              ch = `
`;
              next = this.buffer[i + 1];
            } else
              end = i;
          }
          if (next === "#" || inFlow && flowIndicatorChars.has(next))
            break;
          if (ch === `
`) {
            const cs = this.continueScalar(i + 1);
            if (cs === -1)
              break;
            i = Math.max(i, cs - 2);
          }
        } else {
          if (inFlow && flowIndicatorChars.has(ch))
            break;
          end = i;
        }
      }
      if (!ch && !this.atEnd)
        return this.setNext("plain-scalar");
      yield SCALAR2;
      yield* __yieldStar(this.pushToIndex(end + 1, true));
      return inFlow ? "flow" : "doc";
    }
    *pushCount(n3) {
      if (n3 > 0) {
        yield this.buffer.substr(this.pos, n3);
        this.pos += n3;
        return n3;
      }
      return 0;
    }
    *pushToIndex(i, allowEmpty) {
      const s2 = this.buffer.slice(this.pos, i);
      if (s2) {
        yield s2;
        this.pos += s2.length;
        return s2.length;
      } else if (allowEmpty)
        yield "";
      return 0;
    }
    *pushIndicators() {
      switch (this.charAt(0)) {
        case "!":
          return (yield* __yieldStar(this.pushTag())) + (yield* __yieldStar(this.pushSpaces(true))) + (yield* __yieldStar(this.pushIndicators()));
        case "&":
          return (yield* __yieldStar(this.pushUntil(isNotAnchorChar))) + (yield* __yieldStar(this.pushSpaces(true))) + (yield* __yieldStar(this.pushIndicators()));
        case "-":
        case "?":
        case ":": {
          const inFlow = this.flowLevel > 0;
          const ch1 = this.charAt(1);
          if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
            if (!inFlow)
              this.indentNext = this.indentValue + 1;
            else if (this.flowKey)
              this.flowKey = false;
            return (yield* __yieldStar(this.pushCount(1))) + (yield* __yieldStar(this.pushSpaces(true))) + (yield* __yieldStar(this.pushIndicators()));
          }
        }
      }
      return 0;
    }
    *pushTag() {
      if (this.charAt(1) === "<") {
        let i = this.pos + 2;
        let ch = this.buffer[i];
        while (!isEmpty(ch) && ch !== ">")
          ch = this.buffer[++i];
        return yield* __yieldStar(this.pushToIndex(ch === ">" ? i + 1 : i, false));
      } else {
        let i = this.pos + 1;
        let ch = this.buffer[i];
        while (ch) {
          if (tagChars.has(ch))
            ch = this.buffer[++i];
          else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) {
            ch = this.buffer[i += 3];
          } else
            break;
        }
        return yield* __yieldStar(this.pushToIndex(i, false));
      }
    }
    *pushNewline() {
      const ch = this.buffer[this.pos];
      if (ch === `
`)
        return yield* __yieldStar(this.pushCount(1));
      else if (ch === "\r" && this.charAt(1) === `
`)
        return yield* __yieldStar(this.pushCount(2));
      else
        return 0;
    }
    *pushSpaces(allowTabs) {
      let i = this.pos - 1;
      let ch;
      do {
        ch = this.buffer[++i];
      } while (ch === " " || allowTabs && ch === "\t");
      const n3 = i - this.pos;
      if (n3 > 0) {
        yield this.buffer.substr(this.pos, n3);
        this.pos = i;
      }
      return n3;
    }
    *pushUntil(test) {
      let i = this.pos;
      let ch = this.buffer[i];
      while (!test(ch))
        ch = this.buffer[++i];
      return yield* __yieldStar(this.pushToIndex(i, false));
    }
  };
  var LineCounter = class {
    constructor() {
      this.lineStarts = [];
      this.addNewLine = (offset) => this.lineStarts.push(offset);
      this.linePos = (offset) => {
        let low = 0;
        let high = this.lineStarts.length;
        while (low < high) {
          const mid = low + high >> 1;
          if (this.lineStarts[mid] < offset)
            low = mid + 1;
          else
            high = mid;
        }
        if (this.lineStarts[low] === offset)
          return { line: low + 1, col: 1 };
        if (low === 0)
          return { line: 0, col: offset };
        const start = this.lineStarts[low - 1];
        return { line: low, col: offset - start + 1 };
      };
    }
  };
  function includesToken(list, type) {
    for (let i = 0;i < list.length; ++i)
      if (list[i].type === type)
        return true;
    return false;
  }
  function findNonEmptyIndex(list) {
    for (let i = 0;i < list.length; ++i) {
      switch (list[i].type) {
        case "space":
        case "comment":
        case "newline":
          break;
        default:
          return i;
      }
    }
    return -1;
  }
  function isFlowToken(token) {
    switch (token == null ? undefined : token.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "flow-collection":
        return true;
      default:
        return false;
    }
  }
  function getPrevProps(parent) {
    var _a2;
    switch (parent.type) {
      case "document":
        return parent.start;
      case "block-map": {
        const it = parent.items[parent.items.length - 1];
        return (_a2 = it.sep) != null ? _a2 : it.start;
      }
      case "block-seq":
        return parent.items[parent.items.length - 1].start;
      default:
        return [];
    }
  }
  function getFirstKeyStartProps(prev) {
    var _a2;
    if (prev.length === 0)
      return [];
    let i = prev.length;
    loop:
      while (--i >= 0) {
        switch (prev[i].type) {
          case "doc-start":
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
          case "newline":
            break loop;
        }
      }
    while (((_a2 = prev[++i]) == null ? undefined : _a2.type) === "space") {}
    return prev.splice(i, prev.length);
  }
  function fixFlowSeqItems(fc) {
    if (fc.start.type === "flow-seq-start") {
      for (const it of fc.items) {
        if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
          if (it.key)
            it.value = it.key;
          delete it.key;
          if (isFlowToken(it.value)) {
            if (it.value.end)
              Array.prototype.push.apply(it.value.end, it.sep);
            else
              it.value.end = it.sep;
          } else
            Array.prototype.push.apply(it.start, it.sep);
          delete it.sep;
        }
      }
    }
  }
  var Parser = class {
    constructor(onNewLine) {
      this.atNewLine = true;
      this.atScalar = false;
      this.indent = 0;
      this.offset = 0;
      this.onKeyLine = false;
      this.stack = [];
      this.source = "";
      this.type = "";
      this.lexer = new Lexer;
      this.onNewLine = onNewLine;
    }
    *parse(source, incomplete = false) {
      if (this.onNewLine && this.offset === 0)
        this.onNewLine(0);
      for (const lexeme of this.lexer.lex(source, incomplete))
        yield* __yieldStar(this.next(lexeme));
      if (!incomplete)
        yield* __yieldStar(this.end());
    }
    *next(source) {
      this.source = source;
      if (this.atScalar) {
        this.atScalar = false;
        yield* __yieldStar(this.step());
        this.offset += source.length;
        return;
      }
      const type = tokenType(source);
      if (!type) {
        const message = `Not a YAML token: ${source}`;
        yield* __yieldStar(this.pop({ type: "error", offset: this.offset, message, source }));
        this.offset += source.length;
      } else if (type === "scalar") {
        this.atNewLine = false;
        this.atScalar = true;
        this.type = "scalar";
      } else {
        this.type = type;
        yield* __yieldStar(this.step());
        switch (type) {
          case "newline":
            this.atNewLine = true;
            this.indent = 0;
            if (this.onNewLine)
              this.onNewLine(this.offset + source.length);
            break;
          case "space":
            if (this.atNewLine && source[0] === " ")
              this.indent += source.length;
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            if (this.atNewLine)
              this.indent += source.length;
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = false;
        }
        this.offset += source.length;
      }
    }
    *end() {
      while (this.stack.length > 0)
        yield* __yieldStar(this.pop());
    }
    get sourceToken() {
      const st2 = {
        type: this.type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
      return st2;
    }
    *step() {
      const top = this.peek(1);
      if (this.type === "doc-end" && (!top || top.type !== "doc-end")) {
        while (this.stack.length > 0)
          yield* __yieldStar(this.pop());
        this.stack.push({
          type: "doc-end",
          offset: this.offset,
          source: this.source
        });
        return;
      }
      if (!top)
        return yield* __yieldStar(this.stream());
      switch (top.type) {
        case "document":
          return yield* __yieldStar(this.document(top));
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return yield* __yieldStar(this.scalar(top));
        case "block-scalar":
          return yield* __yieldStar(this.blockScalar(top));
        case "block-map":
          return yield* __yieldStar(this.blockMap(top));
        case "block-seq":
          return yield* __yieldStar(this.blockSequence(top));
        case "flow-collection":
          return yield* __yieldStar(this.flowCollection(top));
        case "doc-end":
          return yield* __yieldStar(this.documentEnd(top));
      }
      yield* __yieldStar(this.pop());
    }
    peek(n3) {
      return this.stack[this.stack.length - n3];
    }
    *pop(error) {
      const token = error != null ? error : this.stack.pop();
      if (!token) {
        const message = "Tried to pop an empty stack";
        yield { type: "error", offset: this.offset, source: "", message };
      } else if (this.stack.length === 0) {
        yield token;
      } else {
        const top = this.peek(1);
        if (token.type === "block-scalar") {
          token.indent = "indent" in top ? top.indent : 0;
        } else if (token.type === "flow-collection" && top.type === "document") {
          token.indent = 0;
        }
        if (token.type === "flow-collection")
          fixFlowSeqItems(token);
        switch (top.type) {
          case "document":
            top.value = token;
            break;
          case "block-scalar":
            top.props.push(token);
            break;
          case "block-map": {
            const it = top.items[top.items.length - 1];
            if (it.value) {
              top.items.push({ start: [], key: token, sep: [] });
              this.onKeyLine = true;
              return;
            } else if (it.sep) {
              it.value = token;
            } else {
              Object.assign(it, { key: token, sep: [] });
              this.onKeyLine = !it.explicitKey;
              return;
            }
            break;
          }
          case "block-seq": {
            const it = top.items[top.items.length - 1];
            if (it.value)
              top.items.push({ start: [], value: token });
            else
              it.value = token;
            break;
          }
          case "flow-collection": {
            const it = top.items[top.items.length - 1];
            if (!it || it.value)
              top.items.push({ start: [], key: token, sep: [] });
            else if (it.sep)
              it.value = token;
            else
              Object.assign(it, { key: token, sep: [] });
            return;
          }
          default:
            yield* __yieldStar(this.pop());
            yield* __yieldStar(this.pop(token));
        }
        if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
          const last = token.items[token.items.length - 1];
          if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st2) => st2.type !== "comment" || st2.indent < token.indent))) {
            if (top.type === "document")
              top.end = last.start;
            else
              top.items.push({ start: last.start });
            token.items.splice(-1, 1);
          }
        }
      }
    }
    *stream() {
      switch (this.type) {
        case "directive-line":
          yield { type: "directive", offset: this.offset, source: this.source };
          return;
        case "byte-order-mark":
        case "space":
        case "comment":
        case "newline":
          yield this.sourceToken;
          return;
        case "doc-mode":
        case "doc-start": {
          const doc = {
            type: "document",
            offset: this.offset,
            start: []
          };
          if (this.type === "doc-start")
            doc.start.push(this.sourceToken);
          this.stack.push(doc);
          return;
        }
      }
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML stream`,
        source: this.source
      };
    }
    *document(doc) {
      if (doc.value)
        return yield* __yieldStar(this.lineEnd(doc));
      switch (this.type) {
        case "doc-start": {
          if (findNonEmptyIndex(doc.start) !== -1) {
            yield* __yieldStar(this.pop());
            yield* __yieldStar(this.step());
          } else
            doc.start.push(this.sourceToken);
          return;
        }
        case "anchor":
        case "tag":
        case "space":
        case "comment":
        case "newline":
          doc.start.push(this.sourceToken);
          return;
      }
      const bv = this.startBlockValue(doc);
      if (bv)
        this.stack.push(bv);
      else {
        yield {
          type: "error",
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML document`,
          source: this.source
        };
      }
    }
    *scalar(scalar) {
      if (this.type === "map-value-ind") {
        const prev = getPrevProps(this.peek(2));
        const start = getFirstKeyStartProps(prev);
        let sep;
        if (scalar.end) {
          sep = scalar.end;
          sep.push(this.sourceToken);
          delete scalar.end;
        } else
          sep = [this.sourceToken];
        const map2 = {
          type: "block-map",
          offset: scalar.offset,
          indent: scalar.indent,
          items: [{ start, key: scalar, sep }]
        };
        this.onKeyLine = true;
        this.stack[this.stack.length - 1] = map2;
      } else
        yield* __yieldStar(this.lineEnd(scalar));
    }
    *blockScalar(scalar) {
      switch (this.type) {
        case "space":
        case "comment":
        case "newline":
          scalar.props.push(this.sourceToken);
          return;
        case "scalar":
          scalar.source = this.source;
          this.atNewLine = true;
          this.indent = 0;
          if (this.onNewLine) {
            let nl2 = this.source.indexOf(`
`) + 1;
            while (nl2 !== 0) {
              this.onNewLine(this.offset + nl2);
              nl2 = this.source.indexOf(`
`, nl2) + 1;
            }
          }
          yield* __yieldStar(this.pop());
          break;
        default:
          yield* __yieldStar(this.pop());
          yield* __yieldStar(this.step());
      }
    }
    *blockMap(map2) {
      var _a2;
      const it = map2.items[map2.items.length - 1];
      switch (this.type) {
        case "newline":
          this.onKeyLine = false;
          if (it.value) {
            const end = "end" in it.value ? it.value.end : undefined;
            const last = Array.isArray(end) ? end[end.length - 1] : undefined;
            if ((last == null ? undefined : last.type) === "comment")
              end == null || end.push(this.sourceToken);
            else
              map2.items.push({ start: [this.sourceToken] });
          } else if (it.sep) {
            it.sep.push(this.sourceToken);
          } else {
            it.start.push(this.sourceToken);
          }
          return;
        case "space":
        case "comment":
          if (it.value) {
            map2.items.push({ start: [this.sourceToken] });
          } else if (it.sep) {
            it.sep.push(this.sourceToken);
          } else {
            if (this.atIndentedComment(it.start, map2.indent)) {
              const prev = map2.items[map2.items.length - 2];
              const end = (_a2 = prev == null ? undefined : prev.value) == null ? undefined : _a2.end;
              if (Array.isArray(end)) {
                Array.prototype.push.apply(end, it.start);
                end.push(this.sourceToken);
                map2.items.pop();
                return;
              }
            }
            it.start.push(this.sourceToken);
          }
          return;
      }
      if (this.indent >= map2.indent) {
        const atMapIndent = !this.onKeyLine && this.indent === map2.indent;
        const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
        let start = [];
        if (atNextItem && it.sep && !it.value) {
          const nl2 = [];
          for (let i = 0;i < it.sep.length; ++i) {
            const st2 = it.sep[i];
            switch (st2.type) {
              case "newline":
                nl2.push(i);
                break;
              case "space":
                break;
              case "comment":
                if (st2.indent > map2.indent)
                  nl2.length = 0;
                break;
              default:
                nl2.length = 0;
            }
          }
          if (nl2.length >= 2)
            start = it.sep.splice(nl2[1]);
        }
        switch (this.type) {
          case "anchor":
          case "tag":
            if (atNextItem || it.value) {
              start.push(this.sourceToken);
              map2.items.push({ start });
              this.onKeyLine = true;
            } else if (it.sep) {
              it.sep.push(this.sourceToken);
            } else {
              it.start.push(this.sourceToken);
            }
            return;
          case "explicit-key-ind":
            if (!it.sep && !it.explicitKey) {
              it.start.push(this.sourceToken);
              it.explicitKey = true;
            } else if (atNextItem || it.value) {
              start.push(this.sourceToken);
              map2.items.push({ start, explicitKey: true });
            } else {
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [this.sourceToken], explicitKey: true }]
              });
            }
            this.onKeyLine = true;
            return;
          case "map-value-ind":
            if (it.explicitKey) {
              if (!it.sep) {
                if (includesToken(it.start, "newline")) {
                  Object.assign(it, { key: null, sep: [this.sourceToken] });
                } else {
                  const start2 = getFirstKeyStartProps(it.start);
                  this.stack.push({
                    type: "block-map",
                    offset: this.offset,
                    indent: this.indent,
                    items: [{ start: start2, key: null, sep: [this.sourceToken] }]
                  });
                }
              } else if (it.value) {
                map2.items.push({ start: [], key: null, sep: [this.sourceToken] });
              } else if (includesToken(it.sep, "map-value-ind")) {
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start, key: null, sep: [this.sourceToken] }]
                });
              } else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
                const start2 = getFirstKeyStartProps(it.start);
                const key = it.key;
                const sep = it.sep;
                sep.push(this.sourceToken);
                delete it.key;
                delete it.sep;
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: start2, key, sep }]
                });
              } else if (start.length > 0) {
                it.sep = it.sep.concat(start, this.sourceToken);
              } else {
                it.sep.push(this.sourceToken);
              }
            } else {
              if (!it.sep) {
                Object.assign(it, { key: null, sep: [this.sourceToken] });
              } else if (it.value || atNextItem) {
                map2.items.push({ start, key: null, sep: [this.sourceToken] });
              } else if (includesToken(it.sep, "map-value-ind")) {
                this.stack.push({
                  type: "block-map",
                  offset: this.offset,
                  indent: this.indent,
                  items: [{ start: [], key: null, sep: [this.sourceToken] }]
                });
              } else {
                it.sep.push(this.sourceToken);
              }
            }
            this.onKeyLine = true;
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const fs6 = this.flowScalar(this.type);
            if (atNextItem || it.value) {
              map2.items.push({ start, key: fs6, sep: [] });
              this.onKeyLine = true;
            } else if (it.sep) {
              this.stack.push(fs6);
            } else {
              Object.assign(it, { key: fs6, sep: [] });
              this.onKeyLine = true;
            }
            return;
          }
          default: {
            const bv = this.startBlockValue(map2);
            if (bv) {
              if (atMapIndent && bv.type !== "block-seq") {
                map2.items.push({ start });
              }
              this.stack.push(bv);
              return;
            }
          }
        }
      }
      yield* __yieldStar(this.pop());
      yield* __yieldStar(this.step());
    }
    *blockSequence(seq2) {
      var _a2;
      const it = seq2.items[seq2.items.length - 1];
      switch (this.type) {
        case "newline":
          if (it.value) {
            const end = "end" in it.value ? it.value.end : undefined;
            const last = Array.isArray(end) ? end[end.length - 1] : undefined;
            if ((last == null ? undefined : last.type) === "comment")
              end == null || end.push(this.sourceToken);
            else
              seq2.items.push({ start: [this.sourceToken] });
          } else
            it.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (it.value)
            seq2.items.push({ start: [this.sourceToken] });
          else {
            if (this.atIndentedComment(it.start, seq2.indent)) {
              const prev = seq2.items[seq2.items.length - 2];
              const end = (_a2 = prev == null ? undefined : prev.value) == null ? undefined : _a2.end;
              if (Array.isArray(end)) {
                Array.prototype.push.apply(end, it.start);
                end.push(this.sourceToken);
                seq2.items.pop();
                return;
              }
            }
            it.start.push(this.sourceToken);
          }
          return;
        case "anchor":
        case "tag":
          if (it.value || this.indent <= seq2.indent)
            break;
          it.start.push(this.sourceToken);
          return;
        case "seq-item-ind":
          if (this.indent !== seq2.indent)
            break;
          if (it.value || includesToken(it.start, "seq-item-ind"))
            seq2.items.push({ start: [this.sourceToken] });
          else
            it.start.push(this.sourceToken);
          return;
      }
      if (this.indent > seq2.indent) {
        const bv = this.startBlockValue(seq2);
        if (bv) {
          this.stack.push(bv);
          return;
        }
      }
      yield* __yieldStar(this.pop());
      yield* __yieldStar(this.step());
    }
    *flowCollection(fc) {
      const it = fc.items[fc.items.length - 1];
      if (this.type === "flow-error-end") {
        let top;
        do {
          yield* __yieldStar(this.pop());
          top = this.peek(1);
        } while (top && top.type === "flow-collection");
      } else if (fc.end.length === 0) {
        switch (this.type) {
          case "comma":
          case "explicit-key-ind":
            if (!it || it.sep)
              fc.items.push({ start: [this.sourceToken] });
            else
              it.start.push(this.sourceToken);
            return;
          case "map-value-ind":
            if (!it || it.value)
              fc.items.push({ start: [], key: null, sep: [this.sourceToken] });
            else if (it.sep)
              it.sep.push(this.sourceToken);
            else
              Object.assign(it, { key: null, sep: [this.sourceToken] });
            return;
          case "space":
          case "comment":
          case "newline":
          case "anchor":
          case "tag":
            if (!it || it.value)
              fc.items.push({ start: [this.sourceToken] });
            else if (it.sep)
              it.sep.push(this.sourceToken);
            else
              it.start.push(this.sourceToken);
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const fs6 = this.flowScalar(this.type);
            if (!it || it.value)
              fc.items.push({ start: [], key: fs6, sep: [] });
            else if (it.sep)
              this.stack.push(fs6);
            else
              Object.assign(it, { key: fs6, sep: [] });
            return;
          }
          case "flow-map-end":
          case "flow-seq-end":
            fc.end.push(this.sourceToken);
            return;
        }
        const bv = this.startBlockValue(fc);
        if (bv)
          this.stack.push(bv);
        else {
          yield* __yieldStar(this.pop());
          yield* __yieldStar(this.step());
        }
      } else {
        const parent = this.peek(2);
        if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
          yield* __yieldStar(this.pop());
          yield* __yieldStar(this.step());
        } else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
          const prev = getPrevProps(parent);
          const start = getFirstKeyStartProps(prev);
          fixFlowSeqItems(fc);
          const sep = fc.end.splice(1, fc.end.length);
          sep.push(this.sourceToken);
          const map2 = {
            type: "block-map",
            offset: fc.offset,
            indent: fc.indent,
            items: [{ start, key: fc, sep }]
          };
          this.onKeyLine = true;
          this.stack[this.stack.length - 1] = map2;
        } else {
          yield* __yieldStar(this.lineEnd(fc));
        }
      }
    }
    flowScalar(type) {
      if (this.onNewLine) {
        let nl2 = this.source.indexOf(`
`) + 1;
        while (nl2 !== 0) {
          this.onNewLine(this.offset + nl2);
          nl2 = this.source.indexOf(`
`, nl2) + 1;
        }
      }
      return {
        type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
    }
    startBlockValue(parent) {
      switch (this.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return this.flowScalar(this.type);
        case "block-scalar-header":
          return {
            type: "block-scalar",
            offset: this.offset,
            indent: this.indent,
            props: [this.sourceToken],
            source: ""
          };
        case "flow-map-start":
        case "flow-seq-start":
          return {
            type: "flow-collection",
            offset: this.offset,
            indent: this.indent,
            start: this.sourceToken,
            items: [],
            end: []
          };
        case "seq-item-ind":
          return {
            type: "block-seq",
            offset: this.offset,
            indent: this.indent,
            items: [{ start: [this.sourceToken] }]
          };
        case "explicit-key-ind": {
          this.onKeyLine = true;
          const prev = getPrevProps(parent);
          const start = getFirstKeyStartProps(prev);
          start.push(this.sourceToken);
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start, explicitKey: true }]
          };
        }
        case "map-value-ind": {
          this.onKeyLine = true;
          const prev = getPrevProps(parent);
          const start = getFirstKeyStartProps(prev);
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{ start, key: null, sep: [this.sourceToken] }]
          };
        }
      }
      return null;
    }
    atIndentedComment(start, indent) {
      if (this.type !== "comment")
        return false;
      if (this.indent <= indent)
        return false;
      return start.every((st2) => st2.type === "newline" || st2.type === "space");
    }
    *documentEnd(docEnd) {
      if (this.type !== "doc-mode") {
        if (docEnd.end)
          docEnd.end.push(this.sourceToken);
        else
          docEnd.end = [this.sourceToken];
        if (this.type === "newline")
          yield* __yieldStar(this.pop());
      }
    }
    *lineEnd(token) {
      switch (this.type) {
        case "comma":
        case "doc-start":
        case "doc-end":
        case "flow-seq-end":
        case "flow-map-end":
        case "map-value-ind":
          yield* __yieldStar(this.pop());
          yield* __yieldStar(this.step());
          break;
        case "newline":
          this.onKeyLine = false;
        case "space":
        case "comment":
        default:
          if (token.end)
            token.end.push(this.sourceToken);
          else
            token.end = [this.sourceToken];
          if (this.type === "newline")
            yield* __yieldStar(this.pop());
      }
    }
  };
  function parseOptions(options) {
    const prettyErrors = options.prettyErrors !== false;
    const lineCounter = options.lineCounter || prettyErrors && new LineCounter || null;
    return { lineCounter, prettyErrors };
  }
  function parseAllDocuments(source, options = {}) {
    const { lineCounter, prettyErrors } = parseOptions(options);
    const parser = new Parser(lineCounter == null ? undefined : lineCounter.addNewLine);
    const composer = new Composer(options);
    const docs = Array.from(composer.compose(parser.parse(source)));
    if (prettyErrors && lineCounter)
      for (const doc of docs) {
        doc.errors.forEach(prettifyError(source, lineCounter));
        doc.warnings.forEach(prettifyError(source, lineCounter));
      }
    if (docs.length > 0)
      return docs;
    return Object.assign([], { empty: true }, composer.streamInfo());
  }
  function parseDocument(source, options = {}) {
    const { lineCounter, prettyErrors } = parseOptions(options);
    const parser = new Parser(lineCounter == null ? undefined : lineCounter.addNewLine);
    const composer = new Composer(options);
    let doc = null;
    for (const _doc of composer.compose(parser.parse(source), true, source.length)) {
      if (!doc)
        doc = _doc;
      else if (doc.options.logLevel !== "silent") {
        doc.errors.push(new YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
        break;
      }
    }
    if (prettyErrors && lineCounter) {
      doc.errors.forEach(prettifyError(source, lineCounter));
      doc.warnings.forEach(prettifyError(source, lineCounter));
    }
    return doc;
  }
  function parse(src, reviver, options) {
    let _reviver = undefined;
    if (typeof reviver === "function") {
      _reviver = reviver;
    } else if (options === undefined && reviver && typeof reviver === "object") {
      options = reviver;
    }
    const doc = parseDocument(src, options);
    if (!doc)
      return null;
    doc.warnings.forEach((warning) => warn(doc.options.logLevel, warning));
    if (doc.errors.length > 0) {
      if (doc.options.logLevel !== "silent")
        throw doc.errors[0];
      else
        doc.errors = [];
    }
    return doc.toJS(Object.assign({ reviver: _reviver }, options));
  }
  function stringify3(value, replacer, options) {
    var _a2;
    let _replacer = null;
    if (typeof replacer === "function" || Array.isArray(replacer)) {
      _replacer = replacer;
    } else if (options === undefined && replacer) {
      options = replacer;
    }
    if (typeof options === "string")
      options = options.length;
    if (typeof options === "number") {
      const indent = Math.round(options);
      options = indent < 1 ? undefined : indent > 8 ? { indent: 8 } : { indent };
    }
    if (value === undefined) {
      const { keepUndefined } = (_a2 = options != null ? options : replacer) != null ? _a2 : {};
      if (!keepUndefined)
        return;
    }
    if (isDocument(value) && !_replacer)
      return value.toString(options);
    return new Document(value, _replacer, options).toString(options);
  }
  var browser_default = dist_exports;
  var _fs = __toESM2(require_lib(), 1);
  var import_create_require = __toESM2(require_create_require(), 1);
  init_node();
  init_node();
  var import_node_http3 = __require("http");
  var import_node_https3 = __require("https");
  var import_node_zlib3 = __require("zlib");
  var import_node_stream4 = __require("stream");
  var import_node_buffer3 = __require("buffer");
  var import_node_util3 = __require("util");
  init_node_fetch_native_1a4a356d();
  var import_node_url4 = __require("url");
  var import_node_net3 = __require("net");
  var import_node_fs5 = __require("fs");
  var import_node_path5 = __require("path");
  var a = Object.defineProperty;
  var t3 = (e, r) => a(e, "name", { value: r, configurable: true });
  var f2 = Object.defineProperty;
  var g2 = t3((e, r) => f2(e, "name", { value: r, configurable: true }), "e");
  var _a;
  var _b;
  var o2 = !!((_b = (_a = globalThis.process) == null ? undefined : _a.env) == null ? undefined : _b.FORCE_NODE_FETCH);
  function l() {
    return !o2 && globalThis.fetch ? globalThis.fetch : Fi;
  }
  t3(l, "p"), g2(l, "_getFetch");
  var s = l();
  var T = !o2 && globalThis.Blob || ut;
  var R2 = !o2 && globalThis.File || On;
  var u = !o2 && globalThis.FormData || br;
  var d = !o2 && globalThis.Headers || ye;
  var $3 = !o2 && globalThis.Request || dt;
  var C2 = !o2 && globalThis.Response || le;
  var A = !o2 && globalThis.AbortController || Mn;
  var importRequireRe = /((\.{3}|\s|[!%&(*+,/:;<=>?[^{|}~-]|^)(require\s?\(\s?|import\s?\(?\s?)|\sfrom)\s?$/;
  var isDep = (proposal, re) => !!proposal && re.test(proposal);
  var isSpace = (value) => value === " " || value === `
` || value === "\t";
  var normalizeOpts = (opts) => __spreadValues({
    bufferSize: 1000,
    comments: false,
    re: importRequireRe,
    offset: 19
  }, opts);
  var depseekSync = (input, opts) => extract(readify(input.toString()), opts);
  var readify = (input) => {
    const chunks = [null, input];
    return { read: () => chunks.pop() };
  };
  var extract = (readable, _opts) => {
    const { re, comments, bufferSize, offset } = normalizeOpts(_opts);
    const refs = [];
    const pushRef = (type, value, index) => refs.push({ type, value, index });
    let i = 0;
    let prev = "";
    let chunk;
    let c = null;
    let q = null;
    let token = "";
    let strLiteral = "";
    let commentBlock = "";
    let commentValue = "";
    while ((chunk = readable.read(bufferSize)) !== null) {
      const len = chunk.length;
      let j = 0;
      while (j < len) {
        const char = chunk[j];
        if (c === q) {
          if (isSpace(char)) {
            if (!isSpace(prev))
              token += char;
          } else if (char === '"' || char === "'" || char === "`")
            q = char;
          else if (prev === "/" && (char === "/" || char === "*"))
            c = char;
          else
            token += char;
        } else if (c === null) {
          if (q === char && prev !== "\\") {
            if (strLiteral && isDep(token.slice(-offset), re))
              pushRef("dep", strLiteral, i - strLiteral.length);
            strLiteral = "";
            token = "";
            q = null;
          } else
            strLiteral += char;
        } else if (q === null) {
          if (c === "/" && char === `
` || c === "*" && prev === "*" && char === "/") {
            commentValue = c === "*" ? commentBlock.slice(0, -1) : commentBlock;
            if (commentValue && comments)
              pushRef("comment", commentValue, i - commentValue.length);
            commentBlock = "";
            token = token.slice(0, -1);
            c = null;
          } else if (comments)
            commentBlock += char;
        }
        prev = char;
        i++;
        j++;
      }
    }
    return refs;
  };
  var import_minimist = __toESM2(require_minimist(), 1);
  var import_node_fs6 = __toESM2(__require("fs"), 1);
  var import_node_path6 = __toESM2(__require("path"), 1);
  var import_node_util4 = __require("util");
  var DOTENV = ".env";
  var Q1 = '"';
  var Q2 = "'";
  var Q3 = "`";
  var KR = /^[a-zA-Z_]\w*$/;
  var SR = /\s/;
  var decoder = new import_node_util4.TextDecoder;
  var parse2 = (content) => {
    const e = {};
    let k2 = "";
    let b = "";
    let q = "";
    let i = 0;
    const cap = () => {
      k2 = k2.trim();
      if (k2) {
        if (!KR.test(k2))
          throw new Error(`Invalid identifier: ${k2}`);
        e[k2] = b.trim();
        b = k2 = "";
      }
    };
    for (const c of typeof content === "string" ? content : decoder.decode(content)) {
      if (i) {
        if (c === `
`)
          i = 0;
        continue;
      }
      if (!q) {
        if (c === "#") {
          i = 1;
          continue;
        }
        if (c === `
`) {
          cap();
          continue;
        }
        if (SR.test(c)) {
          if (!k2 && b === "export")
            b = "";
          if (!b)
            continue;
        }
        if (c === "=") {
          if (!k2) {
            k2 = b;
            b = "";
            continue;
          }
        }
      }
      if (c === Q1 || c === Q2 || c === Q3) {
        if (!q && !b) {
          q = c;
          continue;
        }
        if (q === c) {
          q = "";
          b && cap();
          continue;
        }
      }
      b += c;
    }
    cap();
    return e;
  };
  var formatValue = (v2) => {
    const q1 = v2.includes(Q1);
    const q2 = v2.includes(Q2);
    const q3 = v2.includes(Q3);
    const s2 = SR.test(v2);
    if (!q1 && !q2 && !q3 && !s2)
      return v2;
    if (!q1)
      return `${Q1}${v2}${Q1}`;
    if (!q2)
      return `${Q2}${v2}${Q2}`;
    if (parse2(`V=${Q3}${v2}${Q3}`).V !== v2)
      throw new Error(`Invalid value: ${v2}`);
    return `${Q3}${v2}${Q3}`;
  };
  var stringify4 = (env) => Object.entries(env).map(([k2, v2]) => `${k2}=${formatValue(v2 || "")}`).join(`
`);
  var _load = (read, ...files) => files.reverse().reduce((m2, f3) => Object.assign(m2, parse2(read(import_node_path6.default.resolve(f3)))), {});
  var load = (...files) => _load((file) => import_node_fs6.default.readFileSync(file, "utf8"), ...files);
  var loadSafe = (...files) => _load((file) => import_node_fs6.default.existsSync(file) ? import_node_fs6.default.readFileSync(file, "utf8") : "", ...files);
  var populate = (env, extra) => Object.assign(env, extra);
  var config = (def = DOTENV, ...files) => populate(process.env, loadSafe(def, ...files));
  var index_default = { parse: parse2, stringify: stringify4, load, loadSafe, config };
  global.AbortController = global.AbortController || A;
  var createRequire4 = import_create_require.default;
  var globbyModule = {
    convertPathToPattern,
    globby: globby2,
    globbySync,
    globbyStream,
    generateGlobTasksSync,
    generateGlobTasks,
    isGitIgnoredSync,
    isGitIgnored,
    isDynamicPattern
  };
  var glob2 = Object.assign(function globby2(patterns, options) {
    return globbyModule.globby(patterns, options);
  }, globbyModule);
  var YAML2 = browser_exports;
  var fs5 = _fs;
  /*! Bundled license information:
  
  is-extglob/index.js:
    (*!
     * is-extglob <https://github.com/jonschlinkert/is-extglob>
     *
     * Copyright (c) 2014-2016, Jon Schlinkert.
     * Licensed under the MIT License.
     *)
  
  is-glob/index.js:
    (*!
     * is-glob <https://github.com/jonschlinkert/is-glob>
     *
     * Copyright (c) 2014-2017, Jon Schlinkert.
     * Released under the MIT License.
     *)
  
  is-number/index.js:
    (*!
     * is-number <https://github.com/jonschlinkert/is-number>
     *
     * Copyright (c) 2014-present, Jon Schlinkert.
     * Released under the MIT License.
     *)
  
  to-regex-range/index.js:
    (*!
     * to-regex-range <https://github.com/micromatch/to-regex-range>
     *
     * Copyright (c) 2015-present, Jon Schlinkert.
     * Released under the MIT License.
     *)
  
  fill-range/index.js:
    (*!
     * fill-range <https://github.com/jonschlinkert/fill-range>
     *
     * Copyright (c) 2014-present, Jon Schlinkert.
     * Licensed under the MIT License.
     *)
  
  queue-microtask/index.js:
    (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  run-parallel/index.js:
    (*! run-parallel. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
  
  node-fetch-native/dist/node.mjs:
    (**
    * @license
    * web-streams-polyfill v3.3.3
    * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
    * This code is released under the MIT license.
    * SPDX-License-Identifier: MIT
    *)
    (*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
    (*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
    (*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> *)
  */
});

// node_modules/zx/build/vendor.cjs
var require_vendor = __commonJS((exports, module) => {
  var {
    __export,
    __reExport,
    __toCommonJS
  } = require_esblib();
  var vendor_exports = {};
  __export(vendor_exports, {
    YAML: () => YAML2,
    createRequire: () => import_vendor_extra2.createRequire,
    depseek: () => depseek2,
    dotenv: () => dotenv2,
    fs: () => fs2,
    glob: () => glob2,
    minimist: () => minimist2,
    nodeFetch: () => nodeFetch2
  });
  module.exports = __toCommonJS(vendor_exports);
  var import_vendor_core = require_vendor_core();
  var import_vendor_extra = require_vendor_extra();
  __reExport(vendor_exports, require_vendor_core(), module.exports);
  var import_vendor_extra2 = require_vendor_extra();
  var { wrap } = import_vendor_core.bus;
  var depseek2 = wrap("depseek", import_vendor_extra.depseek);
  var dotenv2 = wrap("dotenv", import_vendor_extra.dotenv);
  var fs2 = wrap("fs", import_vendor_extra.fs);
  var YAML2 = wrap("YAML", import_vendor_extra.YAML);
  var glob2 = wrap("glob", import_vendor_extra.glob);
  var nodeFetch2 = wrap("nodeFetch", import_vendor_extra.nodeFetch);
  var minimist2 = wrap("minimist", import_vendor_extra.minimist);
});

// node_modules/zx/build/util.cjs
var require_util = __commonJS((exports, module) => {
  var {
    __spreadValues,
    __spreadProps,
    __export,
    __toESM: __toESM2,
    __toCommonJS
  } = require_esblib();
  var util_exports = {};
  __export(util_exports, {
    bufArrJoin: () => bufArrJoin,
    bufToString: () => bufToString,
    getLast: () => getLast,
    getLines: () => getLines,
    identity: () => identity,
    isString: () => isString,
    isStringLiteral: () => import_vendor_core.isStringLiteral,
    noop: () => noop,
    once: () => once,
    parseBool: () => parseBool,
    parseDuration: () => parseDuration,
    preferLocalBin: () => preferLocalBin,
    proxyOverride: () => proxyOverride,
    quote: () => quote2,
    quotePowerShell: () => quotePowerShell2,
    randomId: () => randomId,
    tempdir: () => tempdir2,
    tempfile: () => tempfile2,
    toCamelCase: () => toCamelCase
  });
  module.exports = __toCommonJS(util_exports);
  var import_node_os = __toESM2(__require("os"), 1);
  var import_node_path = __toESM2(__require("path"), 1);
  var import_node_fs = __toESM2(__require("fs"), 1);
  var import_vendor_core = require_vendor_core();
  function tempdir2(prefix = `zx-${randomId()}`, mode) {
    const dirpath = import_node_path.default.join(import_node_os.default.tmpdir(), prefix);
    import_node_fs.default.mkdirSync(dirpath, { recursive: true, mode });
    return dirpath;
  }
  function tempfile2(name, data, mode) {
    const filepath = name ? import_node_path.default.join(tempdir2(), name) : import_node_path.default.join(import_node_os.default.tmpdir(), `zx-${randomId()}`);
    if (data === undefined)
      import_node_fs.default.closeSync(import_node_fs.default.openSync(filepath, "w", mode));
    else
      import_node_fs.default.writeFileSync(filepath, data, { mode });
    return filepath;
  }
  function noop() {}
  function identity(v) {
    return v;
  }
  function randomId() {
    return Math.random().toString(36).slice(2);
  }
  function isString(obj) {
    return typeof obj === "string";
  }
  var utf8Decoder = new TextDecoder("utf-8");
  var bufToString = (buf) => isString(buf) ? buf : utf8Decoder.decode(buf);
  var bufArrJoin = (arr) => arr.reduce((acc, buf) => acc + bufToString(buf), "");
  var getLast = (arr) => arr[arr.length - 1];
  function preferLocalBin(env, ...dirs) {
    const pathKey = process.platform === "win32" ? Object.keys(env).reverse().find((key) => key.toUpperCase() === "PATH") || "Path" : "PATH";
    const pathValue = dirs.map((c) => c && [
      import_node_path.default.resolve(c, "node_modules", ".bin"),
      import_node_path.default.resolve(c)
    ]).flat().concat(env[pathKey]).filter(Boolean).join(import_node_path.default.delimiter);
    return __spreadProps(__spreadValues({}, env), {
      [pathKey]: pathValue
    });
  }
  function quote2(arg) {
    if (arg === "")
      return `$''`;
    if (/^[\w/.\-@:=]+$/.test(arg))
      return arg;
    return `$'` + arg.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0") + `'`;
  }
  function quotePowerShell2(arg) {
    if (arg === "")
      return `''`;
    if (/^[\w/.\-]+$/.test(arg))
      return arg;
    return `'` + arg.replace(/'/g, "''") + `'`;
  }
  function parseDuration(d) {
    if (typeof d === "number") {
      if (isNaN(d) || d < 0)
        throw new Error(`Invalid duration: "${d}".`);
      return d;
    }
    if (/^\d+s$/.test(d))
      return +d.slice(0, -1) * 1000;
    if (/^\d+ms$/.test(d))
      return +d.slice(0, -2);
    if (/^\d+m$/.test(d))
      return +d.slice(0, -1) * 1000 * 60;
    throw new Error(`Unknown duration: "${d}".`);
  }
  var once = (fn) => {
    let called = false;
    let result;
    return (...args) => {
      if (called)
        return result;
      called = true;
      return result = fn(...args);
    };
  };
  var proxyOverride = (origin, ...fallbacks) => new Proxy(origin, {
    get(target, key) {
      var _a, _b;
      return (_b = (_a = fallbacks.find((f) => (key in f))) == null ? undefined : _a[key]) != null ? _b : Reflect.get(target, key);
    }
  });
  var toCamelCase = (str) => str.toLowerCase().replace(/([a-z])[_-]+([a-z])/g, (_, p1, p2) => {
    return p1 + p2.toUpperCase();
  });
  var parseBool = (v) => {
    var _a;
    return (_a = { true: true, false: false }[v]) != null ? _a : v;
  };
  var getLines = (chunk, next) => {
    const lines = ((next.pop() || "") + bufToString(chunk)).split(/\r?\n/);
    next.push(lines.pop());
    return lines;
  };
});

// node_modules/zx/build/core.cjs
var require_core = __commonJS((exports, module) => {
  var {
    __spreadValues,
    __export,
    __toESM: __toESM2,
    __toCommonJS,
    __async,
    __await,
    __asyncGenerator,
    __yieldStar,
    __forAwait
  } = require_esblib();
  var core_exports = {};
  __export(core_exports, {
    $: () => $,
    ProcessOutput: () => ProcessOutput,
    ProcessPromise: () => ProcessPromise,
    cd: () => cd,
    defaults: () => defaults,
    kill: () => kill,
    log: () => log,
    resolveDefaults: () => resolveDefaults,
    syncProcessCwd: () => syncProcessCwd,
    useBash: () => useBash,
    usePowerShell: () => usePowerShell,
    usePwsh: () => usePwsh,
    within: () => within
  });
  module.exports = __toCommonJS(core_exports);
  var import_node_child_process = __require("child_process");
  var import_node_async_hooks = __require("async_hooks");
  var import_node_fs = __toESM2(__require("fs"), 1);
  var import_node_util2 = __require("util");
  var import_node_os = __require("os");
  var import_node_events = __require("events");
  var EXIT_CODES = {
    2: "Misuse of shell builtins",
    126: "Invoked command cannot execute",
    127: "Command not found",
    128: "Invalid exit argument",
    129: "Hangup",
    130: "Interrupt",
    131: "Quit and dump core",
    132: "Illegal instruction",
    133: "Trace/breakpoint trap",
    134: "Process aborted",
    135: 'Bus error: "access to undefined portion of memory object"',
    136: 'Floating point exception: "erroneous arithmetic operation"',
    137: "Kill (terminate immediately)",
    138: "User-defined 1",
    139: "Segmentation violation",
    140: "User-defined 2",
    141: "Write to pipe with no one reading",
    142: "Signal raised by alarm",
    143: "Termination (request to terminate)",
    145: "Child process terminated, stopped (or continued*)",
    146: "Continue if stopped",
    147: "Stop executing temporarily",
    148: "Terminal stop signal",
    149: 'Background process attempting to read from tty ("in")',
    150: 'Background process attempting to write to tty ("out")',
    151: "Urgent data available on socket",
    152: "CPU time limit exceeded",
    153: "File size limit exceeded",
    154: 'Signal raised by timer counting virtual time: "virtual timer expired"',
    155: "Profiling timer expired",
    157: "Pollable event",
    159: "Bad syscall"
  };
  var ERRNO_CODES = {
    0: "Success",
    1: "Not super-user",
    2: "No such file or directory",
    3: "No such process",
    4: "Interrupted system call",
    5: "I/O error",
    6: "No such device or address",
    7: "Arg list too long",
    8: "Exec format error",
    9: "Bad file number",
    10: "No children",
    11: "No more processes",
    12: "Not enough core",
    13: "Permission denied",
    14: "Bad address",
    15: "Block device required",
    16: "Mount device busy",
    17: "File exists",
    18: "Cross-device link",
    19: "No such device",
    20: "Not a directory",
    21: "Is a directory",
    22: "Invalid argument",
    23: "Too many open files in system",
    24: "Too many open files",
    25: "Not a typewriter",
    26: "Text file busy",
    27: "File too large",
    28: "No space left on device",
    29: "Illegal seek",
    30: "Read only file system",
    31: "Too many links",
    32: "Broken pipe",
    33: "Math arg out of domain of func",
    34: "Math result not representable",
    35: "File locking deadlock error",
    36: "File or path name too long",
    37: "No record locks available",
    38: "Function not implemented",
    39: "Directory not empty",
    40: "Too many symbolic links",
    42: "No message of desired type",
    43: "Identifier removed",
    44: "Channel number out of range",
    45: "Level 2 not synchronized",
    46: "Level 3 halted",
    47: "Level 3 reset",
    48: "Link number out of range",
    49: "Protocol driver not attached",
    50: "No CSI structure available",
    51: "Level 2 halted",
    52: "Invalid exchange",
    53: "Invalid request descriptor",
    54: "Exchange full",
    55: "No anode",
    56: "Invalid request code",
    57: "Invalid slot",
    59: "Bad font file fmt",
    60: "Device not a stream",
    61: "No data (for no delay io)",
    62: "Timer expired",
    63: "Out of streams resources",
    64: "Machine is not on the network",
    65: "Package not installed",
    66: "The object is remote",
    67: "The link has been severed",
    68: "Advertise error",
    69: "Srmount error",
    70: "Communication error on send",
    71: "Protocol error",
    72: "Multihop attempted",
    73: "Cross mount point (not really error)",
    74: "Trying to read unreadable message",
    75: "Value too large for defined data type",
    76: "Given log. name not unique",
    77: "f.d. invalid for this operation",
    78: "Remote address changed",
    79: "Can   access a needed shared lib",
    80: "Accessing a corrupted shared lib",
    81: ".lib section in a.out corrupted",
    82: "Attempting to link in too many libs",
    83: "Attempting to exec a shared library",
    84: "Illegal byte sequence",
    86: "Streams pipe error",
    87: "Too many users",
    88: "Socket operation on non-socket",
    89: "Destination address required",
    90: "Message too long",
    91: "Protocol wrong type for socket",
    92: "Protocol not available",
    93: "Unknown protocol",
    94: "Socket type not supported",
    95: "Not supported",
    96: "Protocol family not supported",
    97: "Address family not supported by protocol family",
    98: "Address already in use",
    99: "Address not available",
    100: "Network interface is not configured",
    101: "Network is unreachable",
    102: "Connection reset by network",
    103: "Connection aborted",
    104: "Connection reset by peer",
    105: "No buffer space available",
    106: "Socket is already connected",
    107: "Socket is not connected",
    108: "Can't send after socket shutdown",
    109: "Too many references",
    110: "Connection timed out",
    111: "Connection refused",
    112: "Host is down",
    113: "Host is unreachable",
    114: "Socket already connected",
    115: "Connection already in progress",
    116: "Stale file handle",
    122: "Quota exceeded",
    123: "No medium (in tape drive)",
    125: "Operation canceled",
    130: "Previous owner died",
    131: "State not recoverable"
  };
  function getErrnoMessage(errno) {
    return ERRNO_CODES[-errno] || "Unknown error";
  }
  function getExitCodeInfo(exitCode) {
    return EXIT_CODES[exitCode];
  }
  var formatExitMessage = (code, signal, stderr, from) => {
    let message = `exit code: ${code}`;
    if (code != 0 || signal != null) {
      message = `${stderr || `
`}    at ${from}`;
      message += `
    exit code: ${code}${getExitCodeInfo(code) ? " (" + getExitCodeInfo(code) + ")" : ""}`;
      if (signal != null) {
        message += `
    signal: ${signal}`;
      }
    }
    return message;
  };
  var formatErrorMessage = (err, from) => {
    return `${err.message}
    errno: ${err.errno} (${getErrnoMessage(err.errno)})
    code: ${err.code}
    at ${from}`;
  };
  function getCallerLocation(err = new Error("zx error")) {
    return getCallerLocationFromString(err.stack);
  }
  function getCallerLocationFromString(stackString = "unknown") {
    var _a;
    return ((_a = stackString.split(/^\s*(at\s)?/m).filter((s) => s == null ? undefined : s.includes(":"))[2]) == null ? undefined : _a.trim()) || stackString;
  }
  var import_vendor_core2 = require_vendor_core();
  var import_util = require_util();
  var import_vendor_core = require_vendor_core();
  var import_node_util = __require("util");
  var formatters = {
    cmd({ cmd }) {
      return formatCmd(cmd);
    },
    stdout({ data }) {
      return data;
    },
    stderr({ data }) {
      return data;
    },
    custom({ data }) {
      return data;
    },
    fetch(entry) {
      const init = entry.init ? " " + (0, import_node_util.inspect)(entry.init) : "";
      return `$ ${import_vendor_core.chalk.greenBright("fetch")} ${entry.url}${init}
`;
    },
    cd(entry) {
      return `$ ${import_vendor_core.chalk.greenBright("cd")} ${entry.dir}
`;
    },
    retry(entry) {
      const attempt = `Attempt: ${entry.attempt}${entry.total == Infinity ? "" : `/${entry.total}`}`;
      const delay = entry.delay > 0 ? `; next in ${entry.delay}ms` : "";
      return `${import_vendor_core.chalk.bgRed.white(" FAIL ")} ${attempt}${delay}
`;
    },
    end() {
      return "";
    }
  };
  var log = function(entry) {
    var _a;
    if (!entry.verbose)
      return;
    const stream = log.output || process.stderr;
    const format = ((_a = log.formatters) == null ? undefined : _a[entry.kind]) || formatters[entry.kind];
    if (!format)
      return;
    const data = format(entry);
    stream.write(data);
  };
  var SYNTAX = "()[]{}<>;:+|&=";
  var CMD_BREAK = /* @__PURE__ */ new Set(["|", "&", ";", ">", "<"]);
  var SPACE_RE = /\s/;
  var RESERVED_WORDS = /* @__PURE__ */ new Set([
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "case",
    "esac",
    "for",
    "select",
    "while",
    "until",
    "do",
    "done",
    "in",
    "EOF"
  ]);
  function formatCmd(cmd) {
    if (cmd == undefined)
      return import_vendor_core.chalk.grey("undefined");
    let q = "";
    let out = "$ ";
    let buf = "";
    let mode = "";
    let pos = 0;
    const cap = () => {
      const word = buf.trim();
      if (word) {
        pos++;
        if (mode === "syntax") {
          if (CMD_BREAK.has(word)) {
            pos = 0;
          }
          out += import_vendor_core.chalk.red(buf);
        } else if (mode === "quote" || mode === "dollar") {
          out += import_vendor_core.chalk.yellowBright(buf);
        } else if (RESERVED_WORDS.has(word)) {
          out += import_vendor_core.chalk.cyanBright(buf);
        } else if (pos === 1) {
          out += import_vendor_core.chalk.greenBright(buf);
          pos = Infinity;
        } else {
          out += buf;
        }
      } else {
        out += buf;
      }
      mode = "";
      buf = "";
    };
    for (const c of [...cmd]) {
      if (!q) {
        if (c === "$") {
          cap();
          mode = "dollar";
          buf += c;
          cap();
        } else if (c === "'" || c === '"') {
          cap();
          mode = "quote";
          q = c;
          buf += c;
        } else if (SPACE_RE.test(c)) {
          cap();
          buf += c;
        } else if (SYNTAX.includes(c)) {
          const isEnv = c === "=" && pos === 0;
          isEnv && (pos = 1);
          cap();
          mode = "syntax";
          buf += c;
          cap();
          isEnv && (pos = -1);
        } else {
          buf += c;
        }
      } else {
        buf += c;
        if (c === q) {
          cap();
          q = "";
        }
      }
    }
    cap();
    return out.replaceAll(`
`, import_vendor_core.chalk.reset(`
> `)) + `
`;
  }
  var CWD = Symbol("processCwd");
  var SYNC = Symbol("syncExec");
  var EOL = Buffer.from(import_node_os.EOL);
  var BR_CC = 10;
  var SIGTERM = "SIGTERM";
  var ENV_PREFIX = "ZX_";
  var storage = new import_node_async_hooks.AsyncLocalStorage;
  function getStore() {
    return storage.getStore() || defaults;
  }
  function within(callback) {
    return storage.run(__spreadValues({}, getStore()), callback);
  }
  var defaults = resolveDefaults({
    [CWD]: process.cwd(),
    [SYNC]: false,
    verbose: false,
    env: process.env,
    sync: false,
    shell: true,
    stdio: "pipe",
    nothrow: false,
    quiet: false,
    prefix: "",
    postfix: "",
    detached: false,
    preferLocal: false,
    spawn: import_node_child_process.spawn,
    spawnSync: import_node_child_process.spawnSync,
    log,
    kill,
    killSignal: SIGTERM,
    timeoutSignal: SIGTERM
  });
  var bound = [];
  var $ = new Proxy(function(pieces, ...args) {
    const snapshot = getStore();
    if (!Array.isArray(pieces)) {
      return function(...args2) {
        const self2 = this;
        return within(() => Object.assign($, snapshot, pieces).apply(self2, args2));
      };
    }
    const from = getCallerLocation();
    if (pieces.some((p) => p == undefined))
      throw new Error(`Malformed command at ${from}`);
    checkShell();
    checkQuote();
    const cmd = (0, import_vendor_core2.buildCmd)($.quote, pieces, args);
    const sync = snapshot[SYNC];
    bound.push([cmd, from, snapshot]);
    const process22 = new ProcessPromise(import_util.noop);
    if (!process22.isHalted() || sync)
      process22.run();
    return sync ? process22.output : process22;
  }, {
    set(_, key, value) {
      const target = key in Function.prototype ? _ : getStore();
      Reflect.set(target, key === "sync" ? SYNC : key, value);
      return true;
    },
    get(_, key) {
      if (key === "sync")
        return $({ sync: true });
      const target = key in Function.prototype ? _ : getStore();
      return Reflect.get(target, key);
    }
  });
  var _ProcessPromise = class _ProcessPromise2 extends Promise {
    constructor(executor) {
      let resolve;
      let reject;
      super((...args) => {
        [resolve, reject] = args;
        executor(...args);
      });
      this._stage = "initial";
      this._id = (0, import_util.randomId)();
      this._command = "";
      this._from = "";
      this._snapshot = getStore();
      this._piped = false;
      this._ee = new import_node_events.EventEmitter;
      this._stdin = new import_vendor_core2.VoidStream;
      this._zurk = null;
      this._output = null;
      this._reject = import_util.noop;
      this._resolve = import_util.noop;
      this.writable = true;
      if (bound.length) {
        const [cmd, from, snapshot] = bound.pop();
        this._command = cmd;
        this._from = from;
        this._resolve = resolve;
        this._reject = (v) => {
          reject(v);
          if (snapshot[SYNC])
            throw v;
        };
        this._snapshot = __spreadValues({ ac: new AbortController }, snapshot);
        if (this._snapshot.halt)
          this._stage = "halted";
      } else
        _ProcessPromise2.disarm(this);
    }
    run() {
      var _a, _b, _c, _d, _e, _f, _g;
      if (this.isRunning() || this.isSettled())
        return this;
      this._stage = "running";
      (_a = this._pipedFrom) == null || _a.run();
      const self2 = this;
      const $2 = self2._snapshot;
      const id = self2.id;
      const sync = $2[SYNC];
      const timeout = (_b = self2._timeout) != null ? _b : $2.timeout;
      const timeoutSignal = (_c = self2._timeoutSignal) != null ? _c : $2.timeoutSignal;
      if ($2.preferLocal) {
        const dirs = $2.preferLocal === true ? [$2.cwd, $2[CWD]] : [$2.preferLocal].flat();
        $2.env = (0, import_util.preferLocalBin)($2.env, ...dirs);
      }
      $2.log({
        kind: "cmd",
        cmd: self2.cmd,
        verbose: self2.isVerbose(),
        id
      });
      this._zurk = (0, import_vendor_core2.exec)({
        sync,
        id,
        cmd: self2.fullCmd,
        cwd: (_d = $2.cwd) != null ? _d : $2[CWD],
        input: (_f = (_e = $2.input) == null ? undefined : _e.stdout) != null ? _f : $2.input,
        ac: $2.ac,
        signal: $2.signal,
        shell: (0, import_util.isString)($2.shell) ? $2.shell : true,
        env: $2.env,
        spawn: $2.spawn,
        spawnSync: $2.spawnSync,
        store: $2.store,
        stdin: self2._stdin,
        stdio: (_g = self2._stdio) != null ? _g : $2.stdio,
        detached: $2.detached,
        ee: self2._ee,
        run: (cb) => cb(),
        on: {
          start: () => {
            !sync && timeout && self2.timeout(timeout, timeoutSignal);
          },
          stdout: (data) => {
            if (self2._piped)
              return;
            $2.log({ kind: "stdout", data, verbose: self2.isVerbose(), id });
          },
          stderr: (data) => {
            $2.log({ kind: "stderr", data, verbose: !self2.isQuiet(), id });
          },
          end: (data, c) => {
            const { error, status, signal, duration, ctx: { store } } = data;
            const { stdout, stderr } = store;
            const output = self2._output = new ProcessOutput({
              code: status,
              signal,
              error,
              duration,
              store,
              from: self2._from
            });
            $2.log({ kind: "end", signal, exitCode: status, duration, error, verbose: self2.isVerbose(), id });
            if (stdout.length && (0, import_util.getLast)((0, import_util.getLast)(stdout)) !== BR_CC)
              c.on.stdout(EOL, c);
            if (stderr.length && (0, import_util.getLast)((0, import_util.getLast)(stderr)) !== BR_CC)
              c.on.stderr(EOL, c);
            if (!output.ok && !self2.isNothrow()) {
              self2._stage = "rejected";
              self2._reject(output);
            } else {
              self2._stage = "fulfilled";
              self2._resolve(output);
            }
          }
        }
      });
      return this;
    }
    _pipe(source, dest, ...args) {
      if ((0, import_util.isStringLiteral)(dest, ...args))
        return this.pipe[source]($({
          halt: true,
          ac: this._snapshot.ac,
          signal: this._snapshot.signal
        })(dest, ...args));
      this._piped = true;
      const ee = this._ee;
      const from = new import_vendor_core2.VoidStream;
      const fill = () => {
        for (const chunk of this._zurk.store[source])
          from.write(chunk);
        return true;
      };
      const fillEnd = () => this.isSettled() && fill() && from.end();
      if (!this.isSettled()) {
        const onData = (chunk) => from.write(chunk);
        ee.once(source, () => {
          fill();
          ee.on(source, onData);
        }).once("end", () => {
          ee.removeListener(source, onData);
          from.end();
        });
      }
      if ((0, import_util.isString)(dest))
        dest = import_node_fs.default.createWriteStream(dest);
      if (dest instanceof _ProcessPromise2) {
        dest._pipedFrom = this;
        if (dest.isHalted() && this.isHalted()) {
          ee.once("start", () => from.pipe(dest.run()._stdin));
        } else {
          this.catch((e) => dest.isNothrow() ? import_util.noop : dest._reject(e));
          from.pipe(dest.run()._stdin);
        }
        fillEnd();
        return dest;
      }
      from.once("end", () => dest.emit("end-piped-from")).pipe(dest);
      fillEnd();
      return promisifyStream(dest, this);
    }
    abort(reason) {
      var _a, _b;
      if (this.signal !== ((_a = this._snapshot.ac) == null ? undefined : _a.signal))
        throw new Error("The signal is controlled by another process.");
      if (!this.child)
        throw new Error("Trying to abort a process without creating one.");
      (_b = this._zurk) == null || _b.ac.abort(reason);
    }
    kill(signal = $.killSignal) {
      if (!this.child)
        throw new Error("Trying to kill a process without creating one.");
      if (!this.child.pid)
        throw new Error("The process pid is undefined.");
      return $.kill(this.child.pid, signal);
    }
    halt() {
      return this;
    }
    get id() {
      return this._id;
    }
    get pid() {
      var _a;
      return (_a = this.child) == null ? undefined : _a.pid;
    }
    get cmd() {
      return this._command;
    }
    get fullCmd() {
      return this._snapshot.prefix + this.cmd + this._snapshot.postfix;
    }
    get child() {
      var _a;
      return (_a = this._zurk) == null ? undefined : _a.child;
    }
    get stdin() {
      var _a;
      return (_a = this.child) == null ? undefined : _a.stdin;
    }
    get stdout() {
      var _a;
      return (_a = this.child) == null ? undefined : _a.stdout;
    }
    get stderr() {
      var _a;
      return (_a = this.child) == null ? undefined : _a.stderr;
    }
    get exitCode() {
      return this.then((p) => p.exitCode, (p) => p.exitCode);
    }
    get signal() {
      var _a;
      return this._snapshot.signal || ((_a = this._snapshot.ac) == null ? undefined : _a.signal);
    }
    get output() {
      return this._output;
    }
    get stage() {
      return this._stage;
    }
    get [Symbol.toStringTag]() {
      return "ProcessPromise";
    }
    [Symbol.toPrimitive]() {
      return this.toString();
    }
    stdio(stdin, stdout = "pipe", stderr = "pipe") {
      this._stdio = [stdin, stdout, stderr];
      return this;
    }
    nothrow(v = true) {
      this._nothrow = v;
      return this;
    }
    quiet(v = true) {
      this._quiet = v;
      return this;
    }
    verbose(v = true) {
      this._verbose = v;
      return this;
    }
    timeout(d, signal = this._timeoutSignal || $.timeoutSignal) {
      if (this.isSettled())
        return this;
      this._timeout = (0, import_util.parseDuration)(d);
      this._timeoutSignal = signal;
      if (this._timeoutId)
        clearTimeout(this._timeoutId);
      if (this._timeout && this.isRunning()) {
        this._timeoutId = setTimeout(() => this.kill(this._timeoutSignal), this._timeout);
        this.finally(() => clearTimeout(this._timeoutId)).catch(import_util.noop);
      }
      return this;
    }
    json() {
      return this.then((p) => p.json());
    }
    text(encoding) {
      return this.then((p) => p.text(encoding));
    }
    lines() {
      return this.then((p) => p.lines());
    }
    buffer() {
      return this.then((p) => p.buffer());
    }
    blob(type) {
      return this.then((p) => p.blob(type));
    }
    isQuiet() {
      var _a;
      return (_a = this._quiet) != null ? _a : this._snapshot.quiet;
    }
    isVerbose() {
      var _a;
      return ((_a = this._verbose) != null ? _a : this._snapshot.verbose) && !this.isQuiet();
    }
    isNothrow() {
      var _a;
      return (_a = this._nothrow) != null ? _a : this._snapshot.nothrow;
    }
    isHalted() {
      return this.stage === "halted";
    }
    isSettled() {
      return !!this.output;
    }
    isRunning() {
      return this.stage === "running";
    }
    then(onfulfilled, onrejected) {
      return super.then(onfulfilled, onrejected);
    }
    catch(onrejected) {
      return super.catch(onrejected);
    }
    [Symbol.asyncIterator]() {
      return __asyncGenerator(this, null, function* () {
        const memo = [];
        for (const chunk of this._zurk.store.stdout) {
          yield* __yieldStar((0, import_util.getLines)(chunk, memo));
        }
        try {
          for (var iter = __forAwait(this.stdout[Symbol.asyncIterator] ? this.stdout : import_vendor_core2.VoidStream.from(this.stdout)), more, temp, error;more = !(temp = yield new __await(iter.next())).done; more = false) {
            const chunk = temp.value;
            yield* __yieldStar((0, import_util.getLines)(chunk, memo));
          }
        } catch (temp2) {
          error = [temp2];
        } finally {
          try {
            more && (temp = iter.return) && (yield new __await(temp.call(iter)));
          } finally {
            if (error)
              throw error[0];
          }
        }
        if (memo[0])
          yield memo[0];
        if ((yield new __await(this.exitCode)) !== 0)
          throw this._output;
      });
    }
    emit(event, ...args) {
      return this;
    }
    on(event, cb) {
      this._stdin.on(event, cb);
      return this;
    }
    once(event, cb) {
      this._stdin.once(event, cb);
      return this;
    }
    write(data, encoding, cb) {
      this._stdin.write(data, encoding, cb);
      return this;
    }
    end(chunk, cb) {
      this._stdin.end(chunk, cb);
      return this;
    }
    removeListener(event, cb) {
      this._stdin.removeListener(event, cb);
      return this;
    }
    static disarm(p, toggle = true) {
      Object.getOwnPropertyNames(_ProcessPromise2.prototype).forEach((k) => {
        if (k in Promise.prototype)
          return;
        if (!toggle) {
          Reflect.deleteProperty(p, k);
          return;
        }
        Object.defineProperty(p, k, { configurable: true, get() {
          throw new Error("Inappropriate usage. Apply $ instead of direct instantiation.");
        } });
      });
    }
  };
  Object.defineProperty(_ProcessPromise.prototype, "pipe", { get() {
    const self2 = this;
    const getPipeMethod = (kind) => function(dest, ...args) {
      return self2._pipe.call(self2, kind, dest, ...args);
    };
    const stdout = getPipeMethod("stdout");
    const stderr = getPipeMethod("stderr");
    const stdall = getPipeMethod("stdall");
    return Object.assign(stdout, { stderr, stdout, stdall });
  } });
  var ProcessPromise = _ProcessPromise;
  var _ProcessOutput = class _ProcessOutput2 extends Error {
    constructor(code, signal = null, stdout = "", stderr = "", stdall = "", message = "", duration = 0, error = null, from = "", store = { stdout: [stdout], stderr: [stderr], stdall: [stdall] }) {
      super(message);
      const dto = this._dto = code !== null && typeof code === "object" ? code : { code, signal, duration, error, from, store };
      Object.defineProperties(this, {
        cause: { value: dto.error, enumerable: false, writable: true, configurable: true },
        stdout: { get: (0, import_util.once)(() => (0, import_util.bufArrJoin)(dto.store.stdout)) },
        stderr: { get: (0, import_util.once)(() => (0, import_util.bufArrJoin)(dto.store.stderr)) },
        stdall: { get: (0, import_util.once)(() => (0, import_util.bufArrJoin)(dto.store.stdall)) },
        message: {
          get: (0, import_util.once)(() => message || dto.error ? _ProcessOutput2.getErrorMessage(dto.error, dto.from) : _ProcessOutput2.getExitMessage(dto.code, dto.signal, this.stderr, dto.from))
        }
      });
    }
    get exitCode() {
      return this._dto.code;
    }
    get signal() {
      return this._dto.signal;
    }
    get duration() {
      return this._dto.duration;
    }
    get [Symbol.toStringTag]() {
      return "ProcessOutput";
    }
    get ok() {
      return !this._dto.error && this.exitCode === 0;
    }
    [Symbol.toPrimitive]() {
      return this.valueOf();
    }
    toString() {
      return this.stdall;
    }
    json() {
      return JSON.parse(this.stdall);
    }
    buffer() {
      return Buffer.from(this.stdall);
    }
    blob(type = "text/plain") {
      if (!globalThis.Blob)
        throw new Error("Blob is not supported in this environment. Provide a polyfill");
      return new Blob([this.buffer()], { type });
    }
    text(encoding = "utf8") {
      return encoding === "utf8" ? this.toString() : this.buffer().toString(encoding);
    }
    lines() {
      return [...this];
    }
    valueOf() {
      return this.stdall.trim();
    }
    *[Symbol.iterator]() {
      const memo = [];
      for (const chunk of this._dto.store.stdall) {
        yield* __yieldStar((0, import_util.getLines)(chunk, memo));
      }
      if (memo[0])
        yield memo[0];
    }
    [import_node_util2.inspect.custom]() {
      const stringify = (s, c) => s.length === 0 ? "''" : c((0, import_node_util2.inspect)(s));
      return `ProcessOutput {
  stdout: ${stringify(this.stdout, import_vendor_core2.chalk.green)},
  stderr: ${stringify(this.stderr, import_vendor_core2.chalk.red)},
  signal: ${(0, import_node_util2.inspect)(this.signal)},
  exitCode: ${(this.exitCode === 0 ? import_vendor_core2.chalk.green : import_vendor_core2.chalk.red)(this.exitCode)}${getExitCodeInfo(this.exitCode) ? import_vendor_core2.chalk.grey(" (" + getExitCodeInfo(this.exitCode) + ")") : ""},
  duration: ${this.duration}
}`;
    }
  };
  _ProcessOutput.getExitMessage = formatExitMessage;
  _ProcessOutput.getErrorMessage = formatErrorMessage;
  var ProcessOutput = _ProcessOutput;
  function usePowerShell() {
    $.shell = import_vendor_core2.which.sync("powershell.exe");
    $.prefix = "";
    $.postfix = "; exit $LastExitCode";
    $.quote = import_util.quotePowerShell;
  }
  function usePwsh() {
    $.shell = import_vendor_core2.which.sync("pwsh");
    $.prefix = "";
    $.postfix = "; exit $LastExitCode";
    $.quote = import_util.quotePowerShell;
  }
  function useBash() {
    $.shell = import_vendor_core2.which.sync("bash");
    $.prefix = "set -euo pipefail;";
    $.postfix = "";
    $.quote = import_util.quote;
  }
  try {
    useBash();
  } catch (err) {}
  function checkShell() {
    if (!$.shell)
      throw new Error(`No shell is available: https://google.github.io/zx/shell`);
  }
  function checkQuote() {
    if (!$.quote)
      throw new Error("No quote function is defined: https://google.github.io/zx/quotes");
  }
  var cwdSyncHook;
  function syncProcessCwd(flag = true) {
    cwdSyncHook = cwdSyncHook || (0, import_node_async_hooks.createHook)({
      init: syncCwd,
      before: syncCwd,
      promiseResolve: syncCwd,
      after: syncCwd,
      destroy: syncCwd
    });
    if (flag)
      cwdSyncHook.enable();
    else
      cwdSyncHook.disable();
  }
  function syncCwd() {
    if ($[CWD] != process.cwd())
      process.chdir($[CWD]);
  }
  function cd(dir) {
    if (dir instanceof ProcessOutput) {
      dir = dir.toString().trim();
    }
    $.log({ kind: "cd", dir, verbose: !$.quiet && $.verbose });
    process.chdir(dir);
    $[CWD] = process.cwd();
  }
  function kill(_0) {
    return __async(this, arguments, function* (pid, signal = $.killSignal) {
      const children = yield import_vendor_core2.ps.tree({ pid, recursive: true });
      for (const p of children) {
        try {
          process.kill(+p.pid, signal);
        } catch (e) {}
      }
      try {
        process.kill(-pid, signal);
      } catch (e) {
        try {
          process.kill(+pid, signal);
        } catch (e2) {}
      }
    });
  }
  var promisifyStream = (stream, from) => (0, import_util.proxyOverride)(stream, {
    then(res = import_util.noop, rej = import_util.noop) {
      return new Promise((_res, _rej) => stream.once("error", (e) => _rej(rej(e))).once("finish", () => _res(res((0, import_util.proxyOverride)(stream, from._output)))).once("end-piped-from", () => _res(res((0, import_util.proxyOverride)(stream, from._output)))));
    },
    run() {
      return from.run();
    },
    _pipedFrom: from,
    pipe(...args) {
      const piped = stream.pipe.apply(stream, args);
      return piped instanceof ProcessPromise ? piped : promisifyStream(piped, from);
    }
  });
  function resolveDefaults(defs = defaults, prefix = ENV_PREFIX, env = process.env) {
    const allowed = /* @__PURE__ */ new Set([
      "cwd",
      "preferLocal",
      "detached",
      "verbose",
      "quiet",
      "timeout",
      "timeoutSignal",
      "killSignal",
      "prefix",
      "postfix",
      "shell"
    ]);
    return Object.entries(env).reduce((m, [k, v]) => {
      if (v && k.startsWith(prefix)) {
        const _k = (0, import_util.toCamelCase)(k.slice(prefix.length));
        const _v = (0, import_util.parseBool)(v);
        if (allowed.has(_k))
          m[_k] = _v;
      }
      return m;
    }, defs);
  }
});

// node_modules/zx/build/goods.cjs
var require_goods = __commonJS((exports, module) => {
  var {
    __pow,
    __export,
    __toESM: __toESM2,
    __toCommonJS,
    __async,
    __forAwait
  } = require_esblib();
  var goods_exports = {};
  __export(goods_exports, {
    argv: () => argv,
    echo: () => echo,
    expBackoff: () => expBackoff,
    fetch: () => fetch,
    os: () => os,
    parseArgv: () => parseArgv,
    path: () => import_node_path.default,
    question: () => question,
    retry: () => retry,
    sleep: () => sleep,
    spinner: () => spinner,
    stdin: () => stdin,
    updateArgv: () => updateArgv
  });
  module.exports = __toCommonJS(goods_exports);
  var import_node_assert = __toESM2(__require("assert"), 1);
  var import_node_readline = __require("readline");
  var import_core = require_core();
  var import_util = require_util();
  var import_vendor = require_vendor();
  var import_node_path = __toESM2(__require("path"), 1);
  var os = __toESM2(__require("os"), 1);
  var parseArgv = (args = process.argv.slice(2), opts = {}) => Object.entries((0, import_vendor.minimist)(args, opts)).reduce((m, [k, v]) => {
    const kTrans = opts.camelCase ? import_util.toCamelCase : import_util.identity;
    const vTrans = opts.parseBoolean ? import_util.parseBool : import_util.identity;
    const [_k, _v] = k === "--" || k === "_" ? [k, v] : [kTrans(k), vTrans(v)];
    m[_k] = _v;
    return m;
  }, {});
  function updateArgv(args, opts) {
    for (const k in argv)
      delete argv[k];
    Object.assign(argv, parseArgv(args, opts));
  }
  var argv = parseArgv();
  function sleep(duration) {
    return new Promise((resolve) => {
      setTimeout(resolve, (0, import_util.parseDuration)(duration));
    });
  }
  function fetch(url, init) {
    return __async(this, null, function* () {
      import_core.$.log({ kind: "fetch", url, init, verbose: !import_core.$.quiet && import_core.$.verbose });
      return (0, import_vendor.nodeFetch)(url, init);
    });
  }
  function echo(pieces, ...args) {
    const lastIdx = pieces.length - 1;
    const msg = (0, import_util.isStringLiteral)(pieces, ...args) ? args.map((a, i) => pieces[i] + stringify(a)).join("") + pieces[lastIdx] : [pieces, ...args].map(stringify).join(" ");
    console.log(msg);
  }
  function stringify(arg) {
    return arg instanceof import_core.ProcessOutput ? arg.toString().trimEnd() : `${arg}`;
  }
  function question(query, options) {
    return __async(this, null, function* () {
      let completer = undefined;
      if (options && Array.isArray(options.choices)) {
        completer = function completer2(line) {
          const completions = options.choices;
          const hits = completions.filter((c) => c.startsWith(line));
          return [hits.length ? hits : completions, line];
        };
      }
      const rl = (0, import_node_readline.createInterface)({
        input: process.stdin,
        output: process.stdout,
        terminal: true,
        completer
      });
      return new Promise((resolve) => rl.question(query != null ? query : "", (answer) => {
        rl.close();
        resolve(answer);
      }));
    });
  }
  function stdin() {
    return __async(this, null, function* () {
      let buf = "";
      process.stdin.setEncoding("utf8");
      try {
        for (var iter = __forAwait(process.stdin), more, temp, error;more = !(temp = yield iter.next()).done; more = false) {
          const chunk = temp.value;
          buf += chunk;
        }
      } catch (temp2) {
        error = [temp2];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      return buf;
    });
  }
  function retry(count, a, b) {
    return __async(this, null, function* () {
      const total = count;
      let callback;
      let delayStatic = 0;
      let delayGen;
      if (typeof a === "function") {
        callback = a;
      } else {
        if (typeof a === "object") {
          delayGen = a;
        } else {
          delayStatic = (0, import_util.parseDuration)(a);
        }
        (0, import_node_assert.default)(b);
        callback = b;
      }
      let lastErr;
      let attempt = 0;
      while (count-- > 0) {
        attempt++;
        try {
          return yield callback();
        } catch (err) {
          let delay = 0;
          if (delayStatic > 0)
            delay = delayStatic;
          if (delayGen)
            delay = delayGen.next().value;
          import_core.$.log({
            kind: "retry",
            total,
            attempt,
            delay,
            exception: err,
            verbose: !import_core.$.quiet && import_core.$.verbose,
            error: `FAIL Attempt: ${attempt}/${total}, next: ${delay}`
          });
          lastErr = err;
          if (count == 0)
            break;
          if (delay)
            yield sleep(delay);
        }
      }
      throw lastErr;
    });
  }
  function* expBackoff(max = "60s", rand = "100ms") {
    const maxMs = (0, import_util.parseDuration)(max);
    const randMs = (0, import_util.parseDuration)(rand);
    let n = 1;
    while (true) {
      const ms = Math.floor(Math.random() * randMs);
      yield Math.min(__pow(2, n++), maxMs) + ms;
    }
  }
  function spinner(title, callback) {
    return __async(this, null, function* () {
      if (typeof title === "function") {
        callback = title;
        title = "";
      }
      if (import_core.$.quiet || process.env.CI)
        return callback();
      let i = 0;
      const spin = () => process.stderr.write(`  ${"⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏"[i++ % 10]} ${title}\r`);
      return (0, import_core.within)(() => __async(this, null, function* () {
        import_core.$.verbose = false;
        const id = setInterval(spin, 100);
        try {
          return yield callback();
        } finally {
          clearInterval(id);
          process.stderr.write(" ".repeat((process.stdout.columns || 1) - 1) + "\r");
        }
      }));
    });
  }
});

// node_modules/zx/build/index.cjs
var require_build = __commonJS((exports, module) => {
  var __filename = "/Users/hugodutka/dev/start-workspace-action/node_modules/zx/build/index.cjs";
  var {
    __export,
    __reExport,
    __toCommonJS
  } = require_esblib();
  var import_meta_url = typeof document === "undefined" ? new (__require("url")).URL("file:" + __filename).href : document.currentScript && document.currentScript.src || new URL("main.js", document.baseURI).href;
  var index_exports = {};
  __export(index_exports, {
    VERSION: () => VERSION,
    YAML: () => import_vendor2.YAML,
    chalk: () => import_vendor2.chalk,
    dotenv: () => import_vendor2.dotenv,
    fs: () => import_vendor2.fs,
    glob: () => import_vendor2.glob,
    globby: () => import_vendor2.glob,
    minimist: () => import_vendor2.minimist,
    nothrow: () => nothrow,
    ps: () => import_vendor2.ps,
    quiet: () => quiet,
    quote: () => import_util.quote,
    quotePowerShell: () => import_util.quotePowerShell,
    tempdir: () => import_util.tempdir,
    tempfile: () => import_util.tempfile,
    tmpdir: () => import_util.tempdir,
    tmpfile: () => import_util.tempfile,
    version: () => version,
    which: () => import_vendor2.which
  });
  module.exports = __toCommonJS(index_exports);
  var import_vendor = require_vendor();
  __reExport(index_exports, require_core(), module.exports);
  __reExport(index_exports, require_goods(), module.exports);
  var import_vendor2 = require_vendor();
  var import_util = require_util();
  var VERSION = import_vendor.fs.readJsonSync(new URL("../package.json", import_meta_url)).version;
  var version = VERSION;
  function nothrow(promise) {
    return promise.nothrow();
  }
  function quiet(promise) {
    return promise.quiet();
  }
});

// src/index.ts
import assert from "assert";

// node_modules/zx/build/deno.js
import { createRequire as createRequire3 } from "node:module";
import * as process2 from "node:process";
if (globalThis.Deno) {
  globalThis.require = createRequire3(import.meta.url);
  globalThis.__filename = new URL(import.meta.url).pathname;
  globalThis.__dirname = new URL(".", import.meta.url).pathname;
  globalThis.module = new Proxy({}, { set() {
    return true;
  } });
  const p = globalThis.process = globalThis.process || process2;
  p.version || (p.version = "v18.0.0");
  p.version || (p.version = { node: "18.0.0" });
  p.env || (p.env = globalThis.Deno.env.toObject());
  p.argv || (p.argv = [globalThis.Deno.execPath(), globalThis.Deno.mainModule.replace("file://", ""), ...globalThis.Deno.args]);
}

// node_modules/zx/build/index.js
var __module__ = __toESM(require_build(), 1);
var {
  VERSION,
  YAML: YAML2,
  chalk: chalk2,
  dotenv: dotenv2,
  fs: fs2,
  glob: glob2,
  globby: globby2,
  minimist: minimist2,
  nothrow,
  ps: ps2,
  quiet,
  quote: quote2,
  quotePowerShell: quotePowerShell2,
  tempdir: tempdir2,
  tempfile: tempfile2,
  tmpdir: tmpdir2,
  tmpfile: tmpfile2,
  version,
  which: which2,
  $,
  ProcessOutput,
  ProcessPromise,
  cd,
  defaults,
  kill,
  log,
  resolveDefaults,
  syncProcessCwd,
  useBash,
  usePowerShell,
  usePwsh,
  within,
  argv,
  echo,
  expBackoff,
  fetch,
  os,
  parseArgv,
  path: path2,
  question,
  retry,
  sleep,
  spinner,
  stdin,
  updateArgv
} = globalThis.Deno ? globalThis.require("./index.cjs") : __module__;

// src/index.ts
import fs3 from "fs/promises";

// node_modules/universal-user-agent/index.js
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof process === "object" && process.version !== undefined) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  }
  return "<environment undetectable>";
}

// node_modules/before-after-hook/lib/register.js
function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }
  if (!options) {
    options = {};
  }
  if (Array.isArray(name)) {
    return name.reverse().reduce((callback, name2) => {
      return register.bind(null, state, name2, callback, options);
    }, method)();
  }
  return Promise.resolve().then(() => {
    if (!state.registry[name]) {
      return method(options);
    }
    return state.registry[name].reduce((method2, registered) => {
      return registered.hook.bind(null, method2, options);
    }, method)();
  });
}

// node_modules/before-after-hook/lib/add.js
function addHook(state, kind, name, hook) {
  const orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }
  if (kind === "before") {
    hook = (method, options) => {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }
  if (kind === "after") {
    hook = (method, options) => {
      let result;
      return Promise.resolve().then(method.bind(null, options)).then((result_) => {
        result = result_;
        return orig(result, options);
      }).then(() => {
        return result;
      });
    };
  }
  if (kind === "error") {
    hook = (method, options) => {
      return Promise.resolve().then(method.bind(null, options)).catch((error) => {
        return orig(error, options);
      });
    };
  }
  state.registry[name].push({
    hook,
    orig
  });
}

// node_modules/before-after-hook/lib/remove.js
function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }
  const index = state.registry[name].map((registered) => {
    return registered.orig;
  }).indexOf(method);
  if (index === -1) {
    return;
  }
  state.registry[name].splice(index, 1);
}

// node_modules/before-after-hook/index.js
var bind = Function.bind;
var bindable = bind.bind(bind);
function bindApi(hook, state, name) {
  const removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state]);
  hook.api = { remove: removeHookRef };
  hook.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach((kind) => {
    const args = name ? [state, kind, name] : [state, kind];
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
  });
}
function Singular() {
  const singularHookName = Symbol("Singular");
  const singularHookState = {
    registry: {}
  };
  const singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}
function Collection() {
  const state = {
    registry: {}
  };
  const hook = register.bind(null, state);
  bindApi(hook, state);
  return hook;
}
var before_after_hook_default = { Singular, Collection };

// node_modules/@octokit/endpoint/dist-bundle/index.js
var VERSION2 = "0.0.0-development";
var userAgent = `octokit-endpoint.js/${VERSION2} ${getUserAgent()}`;
var DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: ""
  }
};
function lowercaseKeys(object) {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}
function isPlainObject(value) {
  if (typeof value !== "object" || value === null)
    return false;
  if (Object.prototype.toString.call(value) !== "[object Object]")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}
function mergeDeep(defaults2, options) {
  const result = Object.assign({}, defaults2);
  Object.keys(options).forEach((key) => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults2))
        Object.assign(result, { [key]: options[key] });
      else
        result[key] = mergeDeep(defaults2[key], options[key]);
    } else {
      Object.assign(result, { [key]: options[key] });
    }
  });
  return result;
}
function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}
function merge(defaults2, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? { method, url } : { url: method }, options);
  } else {
    options = Object.assign({}, route);
  }
  options.headers = lowercaseKeys(options.headers);
  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults2 || {}, options);
  if (options.url === "/graphql") {
    if (defaults2 && defaults2.mediaType.previews?.length) {
      mergedOptions.mediaType.previews = defaults2.mediaType.previews.filter((preview) => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
    }
    mergedOptions.mediaType.previews = (mergedOptions.mediaType.previews || []).map((preview) => preview.replace(/-preview/, ""));
  }
  return mergedOptions;
}
function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);
  if (names.length === 0) {
    return url;
  }
  return url + separator + names.map((name) => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }
    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}
var urlVariableRegex = /\{[^{}}]+\}/g;
function removeNonChars(variableName) {
  return variableName.replace(/(?:^\W+)|(?:(?<!\W)\W+$)/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);
  if (!matches) {
    return [];
  }
  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}
function omit(object, keysToOmit) {
  const result = { __proto__: null };
  for (const key of Object.keys(object)) {
    if (keysToOmit.indexOf(key) === -1) {
      result[key] = object[key];
    }
  }
  return result;
}
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(encodeValue(operator, value2, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}
function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  template = template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];
      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }
      expression.split(/,/g).forEach(function(variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });
      if (operator && operator !== "+") {
        var separator = ",";
        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }
        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
  if (template === "/") {
    return template;
  } else {
    return template.replace(/\/$/, "");
  }
}
function parse(options) {
  let method = options.method.toUpperCase();
  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);
  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }
  const omittedParameters = Object.keys(options).filter((option) => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      headers.accept = headers.accept.split(/,/).map((format) => format.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }
    if (url.endsWith("/graphql")) {
      if (options.mediaType.previews?.length) {
        const previewsFromAcceptHeader = headers.accept.match(/(?<![\w-])[\w-]+(?=-preview)/g) || [];
        headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview) => {
          const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
          return `application/vnd.github.${preview}-preview${format}`;
        }).join(",");
      }
    }
  }
  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      }
    }
  }
  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  }
  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  }
  return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}
function endpointWithDefaults(defaults2, route, options) {
  return parse(merge(defaults2, route, options));
}
function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS2 = merge(oldDefaults, newDefaults);
  const endpoint2 = endpointWithDefaults.bind(null, DEFAULTS2);
  return Object.assign(endpoint2, {
    DEFAULTS: DEFAULTS2,
    defaults: withDefaults.bind(null, DEFAULTS2),
    merge: merge.bind(null, DEFAULTS2),
    parse
  });
}
var endpoint = withDefaults(null, DEFAULTS);

// node_modules/fast-content-type-parse/index.js
var NullObject = function NullObject2() {};
NullObject.prototype = Object.create(null);
var paramRE = /; *([!#$%&'*+.^\w`|~-]+)=("(?:[\v\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\v\u0020-\u00ff])*"|[!#$%&'*+.^\w`|~-]+) */gu;
var quotedPairRE = /\\([\v\u0020-\u00ff])/gu;
var mediaTypeRE = /^[!#$%&'*+.^\w|~-]+\/[!#$%&'*+.^\w|~-]+$/u;
var defaultContentType = { type: "", parameters: new NullObject };
Object.freeze(defaultContentType.parameters);
Object.freeze(defaultContentType);
function safeParse(header) {
  if (typeof header !== "string") {
    return defaultContentType;
  }
  let index = header.indexOf(";");
  const type = index !== -1 ? header.slice(0, index).trim() : header.trim();
  if (mediaTypeRE.test(type) === false) {
    return defaultContentType;
  }
  const result = {
    type: type.toLowerCase(),
    parameters: new NullObject
  };
  if (index === -1) {
    return result;
  }
  let key;
  let match;
  let value;
  paramRE.lastIndex = index;
  while (match = paramRE.exec(header)) {
    if (match.index !== index) {
      return defaultContentType;
    }
    index += match[0].length;
    key = match[1].toLowerCase();
    value = match[2];
    if (value[0] === '"') {
      value = value.slice(1, value.length - 1);
      quotedPairRE.test(value) && (value = value.replace(quotedPairRE, "$1"));
    }
    result.parameters[key] = value;
  }
  if (index !== header.length) {
    return defaultContentType;
  }
  return result;
}
var $safeParse = safeParse;

// node_modules/@octokit/request-error/dist-src/index.js
class RequestError extends Error {
  name;
  status;
  request;
  response;
  constructor(message, statusCode, options) {
    super(message);
    this.name = "HttpError";
    this.status = Number.parseInt(statusCode);
    if (Number.isNaN(this.status)) {
      this.status = 0;
    }
    if ("response" in options) {
      this.response = options.response;
    }
    const requestCopy = Object.assign({}, options.request);
    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/(?<! ) .*$/, " [REDACTED]")
      });
    }
    requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }
}

// node_modules/@octokit/request/dist-bundle/index.js
var VERSION3 = "0.0.0-development";
var defaults_default = {
  headers: {
    "user-agent": `octokit-request.js/${VERSION3} ${getUserAgent()}`
  }
};
function isPlainObject2(value) {
  if (typeof value !== "object" || value === null)
    return false;
  if (Object.prototype.toString.call(value) !== "[object Object]")
    return false;
  const proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  const Ctor = Object.prototype.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && Ctor instanceof Ctor && Function.prototype.call(Ctor) === Function.prototype.call(value);
}
async function fetchWrapper(requestOptions) {
  const fetch2 = requestOptions.request?.fetch || globalThis.fetch;
  if (!fetch2) {
    throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");
  }
  const log2 = requestOptions.request?.log || console;
  const parseSuccessResponseBody = requestOptions.request?.parseSuccessResponseBody !== false;
  const body = isPlainObject2(requestOptions.body) || Array.isArray(requestOptions.body) ? JSON.stringify(requestOptions.body) : requestOptions.body;
  const requestHeaders = Object.fromEntries(Object.entries(requestOptions.headers).map(([name, value]) => [
    name,
    String(value)
  ]));
  let fetchResponse;
  try {
    fetchResponse = await fetch2(requestOptions.url, {
      method: requestOptions.method,
      body,
      redirect: requestOptions.request?.redirect,
      headers: requestHeaders,
      signal: requestOptions.request?.signal,
      ...requestOptions.body && { duplex: "half" }
    });
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        error.status = 500;
        throw error;
      }
      message = error.message;
      if (error.name === "TypeError" && "cause" in error) {
        if (error.cause instanceof Error) {
          message = error.cause.message;
        } else if (typeof error.cause === "string") {
          message = error.cause;
        }
      }
    }
    const requestError = new RequestError(message, 500, {
      request: requestOptions
    });
    requestError.cause = error;
    throw requestError;
  }
  const status = fetchResponse.status;
  const url = fetchResponse.url;
  const responseHeaders = {};
  for (const [key, value] of fetchResponse.headers) {
    responseHeaders[key] = value;
  }
  const octokitResponse = {
    url,
    status,
    headers: responseHeaders,
    data: ""
  };
  if ("deprecation" in responseHeaders) {
    const matches = responseHeaders.link && responseHeaders.link.match(/<([^<>]+)>; rel="deprecation"/);
    const deprecationLink = matches && matches.pop();
    log2.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${responseHeaders.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
  }
  if (status === 204 || status === 205) {
    return octokitResponse;
  }
  if (requestOptions.method === "HEAD") {
    if (status < 400) {
      return octokitResponse;
    }
    throw new RequestError(fetchResponse.statusText, status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  if (status === 304) {
    octokitResponse.data = await getResponseData(fetchResponse);
    throw new RequestError("Not modified", status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  if (status >= 400) {
    octokitResponse.data = await getResponseData(fetchResponse);
    throw new RequestError(toErrorMessage(octokitResponse.data), status, {
      response: octokitResponse,
      request: requestOptions
    });
  }
  octokitResponse.data = parseSuccessResponseBody ? await getResponseData(fetchResponse) : fetchResponse.body;
  return octokitResponse;
}
async function getResponseData(response) {
  const contentType = response.headers.get("content-type");
  if (!contentType) {
    return response.text().catch(() => "");
  }
  const mimetype = $safeParse(contentType);
  if (isJSONResponse(mimetype)) {
    let text = "";
    try {
      text = await response.text();
      return JSON.parse(text);
    } catch (err) {
      return text;
    }
  } else if (mimetype.type.startsWith("text/") || mimetype.parameters.charset?.toLowerCase() === "utf-8") {
    return response.text().catch(() => "");
  } else {
    return response.arrayBuffer().catch(() => new ArrayBuffer(0));
  }
}
function isJSONResponse(mimetype) {
  return mimetype.type === "application/json" || mimetype.type === "application/scim+json";
}
function toErrorMessage(data) {
  if (typeof data === "string") {
    return data;
  }
  if (data instanceof ArrayBuffer) {
    return "Unknown error";
  }
  if ("message" in data) {
    const suffix = "documentation_url" in data ? ` - ${data.documentation_url}` : "";
    return Array.isArray(data.errors) ? `${data.message}: ${data.errors.map((v) => JSON.stringify(v)).join(", ")}${suffix}` : `${data.message}${suffix}`;
  }
  return `Unknown error: ${JSON.stringify(data)}`;
}
function withDefaults2(oldEndpoint, newDefaults) {
  const endpoint2 = oldEndpoint.defaults(newDefaults);
  const newApi = function(route, parameters) {
    const endpointOptions = endpoint2.merge(route, parameters);
    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint2.parse(endpointOptions));
    }
    const request2 = (route2, parameters2) => {
      return fetchWrapper(endpoint2.parse(endpoint2.merge(route2, parameters2)));
    };
    Object.assign(request2, {
      endpoint: endpoint2,
      defaults: withDefaults2.bind(null, endpoint2)
    });
    return endpointOptions.request.hook(request2, endpointOptions);
  };
  return Object.assign(newApi, {
    endpoint: endpoint2,
    defaults: withDefaults2.bind(null, endpoint2)
  });
}
var request = withDefaults2(endpoint, defaults_default);

// node_modules/@octokit/graphql/dist-bundle/index.js
var VERSION4 = "0.0.0-development";
function _buildMessageForResponseErrors(data) {
  return `Request failed due to following response errors:
` + data.errors.map((e) => ` - ${e.message}`).join(`
`);
}
var GraphqlResponseError = class extends Error {
  constructor(request2, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request2;
    this.headers = headers;
    this.response = response;
    this.errors = response.errors;
    this.data = response.data;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
  name = "GraphqlResponseError";
  errors;
  data;
};
var NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType",
  "operationName"
];
var FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
var GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request2, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }
    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
        continue;
      return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
    }
  }
  const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
  const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }
    if (!result.variables) {
      result.variables = {};
    }
    result.variables[key] = parsedOptions[key];
    return result;
  }, {});
  const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }
  return request2(requestOptions).then((response) => {
    if (response.data.errors) {
      const headers = {};
      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }
      throw new GraphqlResponseError(requestOptions, headers, response.data);
    }
    return response.data.data;
  });
}
function withDefaults3(request2, newDefaults) {
  const newRequest = request2.defaults(newDefaults);
  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };
  return Object.assign(newApi, {
    defaults: withDefaults3.bind(null, newRequest),
    endpoint: newRequest.endpoint
  });
}
var graphql2 = withDefaults3(request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION4} ${getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults3(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

// node_modules/@octokit/auth-token/dist-bundle/index.js
var b64url = "(?:[a-zA-Z0-9_-]+)";
var sep = "\\.";
var jwtRE = new RegExp(`^${b64url}${sep}${b64url}${sep}${b64url}$`);
var isJWT = jwtRE.test.bind(jwtRE);
async function auth(token) {
  const isApp = isJWT(token);
  const isInstallation = token.startsWith("v1.") || token.startsWith("ghs_");
  const isUserToServer = token.startsWith("ghu_");
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}
async function hook(token, request2, route, parameters) {
  const endpoint2 = request2.endpoint.merge(route, parameters);
  endpoint2.headers.authorization = withAuthorizationPrefix(token);
  return request2(endpoint2);
}
var createTokenAuth = function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }
  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};

// node_modules/@octokit/core/dist-src/version.js
var VERSION5 = "6.1.4";

// node_modules/@octokit/core/dist-src/index.js
var noop = () => {};
var consoleWarn = console.warn.bind(console);
var consoleError = console.error.bind(console);
var userAgentTrail = `octokit-core.js/${VERSION5} ${getUserAgent()}`;

class Octokit {
  static VERSION = VERSION5;
  static defaults(defaults2) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};
        if (typeof defaults2 === "function") {
          super(defaults2(options));
          return;
        }
        super(Object.assign({}, defaults2, options, options.userAgent && defaults2.userAgent ? {
          userAgent: `${options.userAgent} ${defaults2.userAgent}`
        } : null));
      }
    };
    return OctokitWithDefaults;
  }
  static plugins = [];
  static plugin(...newPlugins) {
    const currentPlugins = this.plugins;
    const NewOctokit = class extends this {
      static plugins = currentPlugins.concat(newPlugins.filter((plugin) => !currentPlugins.includes(plugin)));
    };
    return NewOctokit;
  }
  constructor(options = {}) {
    const hook2 = new before_after_hook_default.Collection;
    const requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        hook: hook2.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    requestDefaults.headers["user-agent"] = options.userAgent ? `${options.userAgent} ${userAgentTrail}` : userAgentTrail;
    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }
    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }
    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }
    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: noop,
      info: noop,
      warn: consoleWarn,
      error: consoleError
    }, options.log);
    this.hook = hook2;
    if (!options.authStrategy) {
      if (!options.auth) {
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        const auth2 = createTokenAuth(options.auth);
        hook2.wrap("request", auth2.hook);
        this.auth = auth2;
      }
    } else {
      const { authStrategy, ...otherOptions } = options;
      const auth2 = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth));
      hook2.wrap("request", auth2.hook);
      this.auth = auth2;
    }
    const classConstructor = this.constructor;
    for (let i = 0;i < classConstructor.plugins.length; ++i) {
      Object.assign(this, classConstructor.plugins[i](this, options));
    }
  }
  request;
  graphql;
  log;
  hook;
  auth;
}

// node_modules/@octokit/plugin-request-log/dist-src/version.js
var VERSION6 = "5.3.1";

// node_modules/@octokit/plugin-request-log/dist-src/index.js
function requestLog(octokit) {
  octokit.hook.wrap("request", (request2, options) => {
    octokit.log.debug("request", options);
    const start = Date.now();
    const requestOptions = octokit.request.endpoint.parse(options);
    const path3 = requestOptions.url.replace(options.baseUrl, "");
    return request2(options).then((response) => {
      const requestId = response.headers["x-github-request-id"];
      octokit.log.info(`${requestOptions.method} ${path3} - ${response.status} with id ${requestId} in ${Date.now() - start}ms`);
      return response;
    }).catch((error) => {
      const requestId = error.response?.headers["x-github-request-id"] || "UNKNOWN";
      octokit.log.error(`${requestOptions.method} ${path3} - ${error.status} with id ${requestId} in ${Date.now() - start}ms`);
      throw error;
    });
  });
}
requestLog.VERSION = VERSION6;

// node_modules/@octokit/plugin-paginate-rest/dist-bundle/index.js
var VERSION7 = "0.0.0-development";
function normalizePaginatedListResponse(response) {
  if (!response.data) {
    return {
      ...response,
      data: []
    };
  }
  const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
  if (!responseNeedsNormalization)
    return response;
  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;
  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }
  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }
  response.data.total_count = totalCount;
  return response;
}
function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!url)
          return { done: true };
        try {
          const response = await requestMethod({ method, url, headers });
          const normalizedResponse = normalizePaginatedListResponse(response);
          url = ((normalizedResponse.headers.link || "").match(/<([^<>]+)>;\s*rel="next"/) || [])[1];
          return { value: normalizedResponse };
        } catch (error) {
          if (error.status !== 409)
            throw error;
          url = "";
          return {
            value: {
              status: 200,
              headers: {},
              data: []
            }
          };
        }
      }
    })
  };
}
function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = undefined;
  }
  return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}
function gather(octokit, results, iterator2, mapFn) {
  return iterator2.next().then((result) => {
    if (result.done) {
      return results;
    }
    let earlyExit = false;
    function done() {
      earlyExit = true;
    }
    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);
    if (earlyExit) {
      return results;
    }
    return gather(octokit, results, iterator2, mapFn);
  });
}
var composePaginateRest = Object.assign(paginate, {
  iterator
});
function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION7;

// node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/version.js
var VERSION8 = "13.5.0";

// node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/generated/endpoints.js
var Endpoints = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: [
      "POST /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    addCustomLabelsToSelfHostedRunnerForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    addRepoAccessToSelfHostedRunnerGroupInOrg: [
      "PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    approveWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve"
    ],
    cancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"
    ],
    createEnvironmentVariable: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/variables"
    ],
    createHostedRunnerForOrg: ["POST /orgs/{org}/actions/hosted-runners"],
    createOrUpdateEnvironmentSecret: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    createOrgVariable: ["POST /orgs/{org}/actions/variables"],
    createRegistrationTokenForOrg: [
      "POST /orgs/{org}/actions/runners/registration-token"
    ],
    createRegistrationTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/registration-token"
    ],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/remove-token"
    ],
    createRepoVariable: ["POST /repos/{owner}/{repo}/actions/variables"],
    createWorkflowDispatch: [
      "POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"
    ],
    deleteActionsCacheById: [
      "DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}"
    ],
    deleteActionsCacheByKey: [
      "DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}"
    ],
    deleteArtifact: [
      "DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"
    ],
    deleteEnvironmentSecret: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    deleteEnvironmentVariable: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    deleteHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteOrgVariable: ["DELETE /orgs/{org}/actions/variables/{name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"
    ],
    deleteRepoVariable: [
      "DELETE /repos/{owner}/{repo}/actions/variables/{name}"
    ],
    deleteSelfHostedRunnerFromOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}"
    ],
    deleteSelfHostedRunnerFromRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: [
      "DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    disableSelectedRepositoryGithubActionsOrganization: [
      "DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    disableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"
    ],
    downloadArtifact: [
      "GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"
    ],
    downloadJobLogsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"
    ],
    downloadWorkflowRunAttemptLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs"
    ],
    downloadWorkflowRunLogs: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"
    ],
    enableSelectedRepositoryGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"
    ],
    enableWorkflow: [
      "PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"
    ],
    forceCancelWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel"
    ],
    generateRunnerJitconfigForOrg: [
      "POST /orgs/{org}/actions/runners/generate-jitconfig"
    ],
    generateRunnerJitconfigForRepo: [
      "POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig"
    ],
    getActionsCacheList: ["GET /repos/{owner}/{repo}/actions/caches"],
    getActionsCacheUsage: ["GET /repos/{owner}/{repo}/actions/cache/usage"],
    getActionsCacheUsageByRepoForOrg: [
      "GET /orgs/{org}/actions/cache/usage-by-repository"
    ],
    getActionsCacheUsageForOrg: ["GET /orgs/{org}/actions/cache/usage"],
    getAllowedActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/selected-actions"
    ],
    getAllowedActionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getCustomOidcSubClaimForRepo: [
      "GET /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    getEnvironmentPublicKey: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key"
    ],
    getEnvironmentSecret: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}"
    ],
    getEnvironmentVariable: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    getGithubActionsDefaultWorkflowPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions/workflow"
    ],
    getGithubActionsDefaultWorkflowPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    getGithubActionsPermissionsOrganization: [
      "GET /orgs/{org}/actions/permissions"
    ],
    getGithubActionsPermissionsRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions"
    ],
    getHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    getHostedRunnersGithubOwnedImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/github-owned"
    ],
    getHostedRunnersLimitsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/limits"
    ],
    getHostedRunnersMachineSpecsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/machine-sizes"
    ],
    getHostedRunnersPartnerImagesForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/images/partner"
    ],
    getHostedRunnersPlatformsForOrg: [
      "GET /orgs/{org}/actions/hosted-runners/platforms"
    ],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getOrgVariable: ["GET /orgs/{org}/actions/variables/{name}"],
    getPendingDeploymentsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    getRepoPermissions: [
      "GET /repos/{owner}/{repo}/actions/permissions",
      {},
      { renamed: ["actions", "getGithubActionsPermissionsRepository"] }
    ],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getRepoVariable: ["GET /repos/{owner}/{repo}/actions/variables/{name}"],
    getReviewsForRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"
    ],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}"
    ],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowAccessToRepository: [
      "GET /repos/{owner}/{repo}/actions/permissions/access"
    ],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}"
    ],
    getWorkflowRunUsage: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"
    ],
    getWorkflowUsage: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"
    ],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/secrets"
    ],
    listEnvironmentVariables: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/variables"
    ],
    listGithubHostedRunnersInGroupForOrg: [
      "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/hosted-runners"
    ],
    listHostedRunnersForOrg: ["GET /orgs/{org}/actions/hosted-runners"],
    listJobsForWorkflowRun: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"
    ],
    listJobsForWorkflowRunAttempt: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs"
    ],
    listLabelsForSelfHostedRunnerForOrg: [
      "GET /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    listLabelsForSelfHostedRunnerForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listOrgVariables: ["GET /orgs/{org}/actions/variables"],
    listRepoOrganizationSecrets: [
      "GET /repos/{owner}/{repo}/actions/organization-secrets"
    ],
    listRepoOrganizationVariables: [
      "GET /repos/{owner}/{repo}/actions/organization-variables"
    ],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoVariables: ["GET /repos/{owner}/{repo}/actions/variables"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: [
      "GET /repos/{owner}/{repo}/actions/runners/downloads"
    ],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    listSelectedReposForOrgVariable: [
      "GET /orgs/{org}/actions/variables/{name}/repositories"
    ],
    listSelectedRepositoriesEnabledGithubActionsOrganization: [
      "GET /orgs/{org}/actions/permissions/repositories"
    ],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: [
      "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"
    ],
    listWorkflowRuns: [
      "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"
    ],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunJobForWorkflowRun: [
      "POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun"
    ],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    reRunWorkflowFailedJobs: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    removeCustomLabelFromSelfHostedRunnerForOrg: [
      "DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeCustomLabelFromSelfHostedRunnerForRepo: [
      "DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgVariable: [
      "DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}"
    ],
    reviewCustomGatesForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule"
    ],
    reviewPendingDeploymentsForRun: [
      "POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"
    ],
    setAllowedActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/selected-actions"
    ],
    setAllowedActionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"
    ],
    setCustomLabelsForSelfHostedRunnerForOrg: [
      "PUT /orgs/{org}/actions/runners/{runner_id}/labels"
    ],
    setCustomLabelsForSelfHostedRunnerForRepo: [
      "PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels"
    ],
    setCustomOidcSubClaimForRepo: [
      "PUT /repos/{owner}/{repo}/actions/oidc/customization/sub"
    ],
    setGithubActionsDefaultWorkflowPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/workflow"
    ],
    setGithubActionsDefaultWorkflowPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/workflow"
    ],
    setGithubActionsPermissionsOrganization: [
      "PUT /orgs/{org}/actions/permissions"
    ],
    setGithubActionsPermissionsRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgVariable: [
      "PUT /orgs/{org}/actions/variables/{name}/repositories"
    ],
    setSelectedRepositoriesEnabledGithubActionsOrganization: [
      "PUT /orgs/{org}/actions/permissions/repositories"
    ],
    setWorkflowAccessToRepository: [
      "PUT /repos/{owner}/{repo}/actions/permissions/access"
    ],
    updateEnvironmentVariable: [
      "PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}"
    ],
    updateHostedRunnerForOrg: [
      "PATCH /orgs/{org}/actions/hosted-runners/{hosted_runner_id}"
    ],
    updateOrgVariable: ["PATCH /orgs/{org}/actions/variables/{name}"],
    updateRepoVariable: [
      "PATCH /repos/{owner}/{repo}/actions/variables/{name}"
    ]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: [
      "DELETE /notifications/threads/{thread_id}/subscription"
    ],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: [
      "GET /notifications/threads/{thread_id}/subscription"
    ],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: [
      "GET /users/{username}/events/orgs/{org}"
    ],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: [
      "GET /users/{username}/received_events/public"
    ],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/notifications"
    ],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsDone: ["DELETE /notifications/threads/{thread_id}"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: [
      "PUT /notifications/threads/{thread_id}/subscription"
    ],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "addRepoToInstallationForAuthenticatedUser"] }
    ],
    addRepoToInstallationForAuthenticatedUser: [
      "PUT /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    checkToken: ["POST /applications/{client_id}/token"],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: [
      "POST /app/installations/{installation_id}/access_tokens"
    ],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: [
      "GET /marketplace_listing/accounts/{account_id}"
    ],
    getSubscriptionPlanForAccountStubbed: [
      "GET /marketplace_listing/stubbed/accounts/{account_id}"
    ],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    getWebhookDelivery: ["GET /app/hook/deliveries/{delivery_id}"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: [
      "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"
    ],
    listInstallationReposForAuthenticatedUser: [
      "GET /user/installations/{installation_id}/repositories"
    ],
    listInstallationRequestsForAuthenticatedApp: [
      "GET /app/installation-requests"
    ],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: [
      "GET /user/marketplace_purchases/stubbed"
    ],
    listWebhookDeliveries: ["GET /app/hook/deliveries"],
    redeliverWebhookDelivery: [
      "POST /app/hook/deliveries/{delivery_id}/attempts"
    ],
    removeRepoFromInstallation: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}",
      {},
      { renamed: ["apps", "removeRepoFromInstallationForAuthenticatedUser"] }
    ],
    removeRepoFromInstallationForAuthenticatedUser: [
      "DELETE /user/installations/{installation_id}/repositories/{repository_id}"
    ],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: [
      "DELETE /app/installations/{installation_id}/suspended"
    ],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: [
      "GET /users/{username}/settings/billing/actions"
    ],
    getGithubBillingUsageReportOrg: [
      "GET /organizations/{org}/settings/billing/usage"
    ],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: [
      "GET /users/{username}/settings/billing/packages"
    ],
    getSharedStorageBillingOrg: [
      "GET /orgs/{org}/settings/billing/shared-storage"
    ],
    getSharedStorageBillingUser: [
      "GET /users/{username}/settings/billing/shared-storage"
    ]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: [
      "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"
    ],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: [
      "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"
    ],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestRun: [
      "POST /repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest"
    ],
    rerequestSuite: [
      "POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"
    ],
    setSuitesPreferences: [
      "PATCH /repos/{owner}/{repo}/check-suites/preferences"
    ],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    commitAutofix: [
      "POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix/commits"
    ],
    createAutofix: [
      "POST /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"
    ],
    createVariantAnalysis: [
      "POST /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses"
    ],
    deleteAnalysis: [
      "DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"
    ],
    deleteCodeqlDatabase: [
      "DELETE /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      {},
      { renamedParameters: { alert_id: "alert_number" } }
    ],
    getAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"
    ],
    getAutofix: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/autofix"
    ],
    getCodeqlDatabase: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}"
    ],
    getDefaultSetup: ["GET /repos/{owner}/{repo}/code-scanning/default-setup"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    getVariantAnalysis: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}"
    ],
    getVariantAnalysisRepoTask: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/variant-analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}"
    ],
    listAlertInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/code-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: [
      "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      {},
      { renamed: ["codeScanning", "listAlertInstances"] }
    ],
    listCodeqlDatabases: [
      "GET /repos/{owner}/{repo}/code-scanning/codeql/databases"
    ],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"
    ],
    updateDefaultSetup: [
      "PATCH /repos/{owner}/{repo}/code-scanning/default-setup"
    ],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codeSecurity: {
    attachConfiguration: [
      "POST /orgs/{org}/code-security/configurations/{configuration_id}/attach"
    ],
    attachEnterpriseConfiguration: [
      "POST /enterprises/{enterprise}/code-security/configurations/{configuration_id}/attach"
    ],
    createConfiguration: ["POST /orgs/{org}/code-security/configurations"],
    createConfigurationForEnterprise: [
      "POST /enterprises/{enterprise}/code-security/configurations"
    ],
    deleteConfiguration: [
      "DELETE /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    deleteConfigurationForEnterprise: [
      "DELETE /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ],
    detachConfiguration: [
      "DELETE /orgs/{org}/code-security/configurations/detach"
    ],
    getConfiguration: [
      "GET /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    getConfigurationForRepository: [
      "GET /repos/{owner}/{repo}/code-security-configuration"
    ],
    getConfigurationsForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations"
    ],
    getConfigurationsForOrg: ["GET /orgs/{org}/code-security/configurations"],
    getDefaultConfigurations: [
      "GET /orgs/{org}/code-security/configurations/defaults"
    ],
    getDefaultConfigurationsForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations/defaults"
    ],
    getRepositoriesForConfiguration: [
      "GET /orgs/{org}/code-security/configurations/{configuration_id}/repositories"
    ],
    getRepositoriesForEnterpriseConfiguration: [
      "GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}/repositories"
    ],
    getSingleConfigurationForEnterprise: [
      "GET /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ],
    setConfigurationAsDefault: [
      "PUT /orgs/{org}/code-security/configurations/{configuration_id}/defaults"
    ],
    setConfigurationAsDefaultForEnterprise: [
      "PUT /enterprises/{enterprise}/code-security/configurations/{configuration_id}/defaults"
    ],
    updateConfiguration: [
      "PATCH /orgs/{org}/code-security/configurations/{configuration_id}"
    ],
    updateEnterpriseConfiguration: [
      "PATCH /enterprises/{enterprise}/code-security/configurations/{configuration_id}"
    ]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct"],
    getConductCode: ["GET /codes_of_conduct/{key}"]
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    checkPermissionsForDevcontainer: [
      "GET /repos/{owner}/{repo}/codespaces/permissions_check"
    ],
    codespaceMachinesForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/machines"
    ],
    createForAuthenticatedUser: ["POST /user/codespaces"],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    createOrUpdateSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}"
    ],
    createWithPrForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/codespaces"
    ],
    createWithRepoForAuthenticatedUser: [
      "POST /repos/{owner}/{repo}/codespaces"
    ],
    deleteForAuthenticatedUser: ["DELETE /user/codespaces/{codespace_name}"],
    deleteFromOrganization: [
      "DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/codespaces/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    deleteSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}"
    ],
    exportForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/exports"
    ],
    getCodespacesForUserInOrg: [
      "GET /orgs/{org}/members/{username}/codespaces"
    ],
    getExportDetailsForAuthenticatedUser: [
      "GET /user/codespaces/{codespace_name}/exports/{export_id}"
    ],
    getForAuthenticatedUser: ["GET /user/codespaces/{codespace_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/codespaces/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/codespaces/secrets/{secret_name}"],
    getPublicKeyForAuthenticatedUser: [
      "GET /user/codespaces/secrets/public-key"
    ],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}"
    ],
    getSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}"
    ],
    listDevcontainersInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/devcontainers"
    ],
    listForAuthenticatedUser: ["GET /user/codespaces"],
    listInOrganization: [
      "GET /orgs/{org}/codespaces",
      {},
      { renamedParameters: { org_id: "org" } }
    ],
    listInRepositoryForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces"
    ],
    listOrgSecrets: ["GET /orgs/{org}/codespaces/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/codespaces/secrets"],
    listRepositoriesForSecretForAuthenticatedUser: [
      "GET /user/codespaces/secrets/{secret_name}/repositories"
    ],
    listSecretsForAuthenticatedUser: ["GET /user/codespaces/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    preFlightWithRepoForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/new"
    ],
    publishForAuthenticatedUser: [
      "POST /user/codespaces/{codespace_name}/publish"
    ],
    removeRepositoryForSecretForAuthenticatedUser: [
      "DELETE /user/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}"
    ],
    repoMachinesForAuthenticatedUser: [
      "GET /repos/{owner}/{repo}/codespaces/machines"
    ],
    setRepositoriesForSecretForAuthenticatedUser: [
      "PUT /user/codespaces/secrets/{secret_name}/repositories"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories"
    ],
    startForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/start"],
    stopForAuthenticatedUser: ["POST /user/codespaces/{codespace_name}/stop"],
    stopInOrganization: [
      "POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop"
    ],
    updateForAuthenticatedUser: ["PATCH /user/codespaces/{codespace_name}"]
  },
  copilot: {
    addCopilotSeatsForTeams: [
      "POST /orgs/{org}/copilot/billing/selected_teams"
    ],
    addCopilotSeatsForUsers: [
      "POST /orgs/{org}/copilot/billing/selected_users"
    ],
    cancelCopilotSeatAssignmentForTeams: [
      "DELETE /orgs/{org}/copilot/billing/selected_teams"
    ],
    cancelCopilotSeatAssignmentForUsers: [
      "DELETE /orgs/{org}/copilot/billing/selected_users"
    ],
    copilotMetricsForOrganization: ["GET /orgs/{org}/copilot/metrics"],
    copilotMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/metrics"],
    getCopilotOrganizationDetails: ["GET /orgs/{org}/copilot/billing"],
    getCopilotSeatDetailsForUser: [
      "GET /orgs/{org}/members/{username}/copilot"
    ],
    listCopilotSeats: ["GET /orgs/{org}/copilot/billing/seats"],
    usageMetricsForOrg: ["GET /orgs/{org}/copilot/usage"],
    usageMetricsForTeam: ["GET /orgs/{org}/team/{team_slug}/copilot/usage"]
  },
  dependabot: {
    addSelectedRepoToOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    createOrUpdateOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}"
    ],
    createOrUpdateRepoSecret: [
      "PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    deleteOrgSecret: ["DELETE /orgs/{org}/dependabot/secrets/{secret_name}"],
    deleteRepoSecret: [
      "DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    getAlert: ["GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"],
    getOrgPublicKey: ["GET /orgs/{org}/dependabot/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/dependabot/secrets/{secret_name}"],
    getRepoPublicKey: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/public-key"
    ],
    getRepoSecret: [
      "GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}"
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/dependabot/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/dependabot/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/dependabot/alerts"],
    listOrgSecrets: ["GET /orgs/{org}/dependabot/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/dependabot/secrets"],
    listSelectedReposForOrgSecret: [
      "GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    removeSelectedRepoFromOrgSecret: [
      "DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}"
    ],
    setSelectedReposForOrgSecret: [
      "PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}"
    ]
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/{owner}/{repo}/dependency-graph/snapshots"
    ],
    diffRange: [
      "GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}"
    ],
    exportSbom: ["GET /repos/{owner}/{repo}/dependency-graph/sbom"]
  },
  emojis: { get: ["GET /emojis"] },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  hostedCompute: {
    createNetworkConfigurationForOrg: [
      "POST /orgs/{org}/settings/network-configurations"
    ],
    deleteNetworkConfigurationFromOrg: [
      "DELETE /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ],
    getNetworkConfigurationForOrg: [
      "GET /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ],
    getNetworkSettingsForOrg: [
      "GET /orgs/{org}/settings/network-settings/{network_settings_id}"
    ],
    listNetworkConfigurationsForOrg: [
      "GET /orgs/{org}/settings/network-configurations"
    ],
    updateNetworkConfigurationForOrg: [
      "PATCH /orgs/{org}/settings/network-configurations/{network_configuration_id}"
    ]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: [
      "GET /user/interaction-limits",
      {},
      { renamed: ["interactions", "getRestrictionsForAuthenticatedUser"] }
    ],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: [
      "DELETE /repos/{owner}/{repo}/interaction-limits"
    ],
    removeRestrictionsForYourPublicRepos: [
      "DELETE /user/interaction-limits",
      {},
      { renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"] }
    ],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: [
      "PUT /user/interaction-limits",
      {},
      { renamed: ["interactions", "setRestrictionsForAuthenticatedUser"] }
    ]
  },
  issues: {
    addAssignees: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    addSubIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"
    ],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    checkUserCanBeAssignedToIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}"
    ],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/comments"
    ],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"
    ],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: [
      "DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"
    ],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline"
    ],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: [
      "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"
    ],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    listSubIssues: [
      "GET /repos/{owner}/{repo}/issues/{issue_number}/sub_issues"
    ],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"
    ],
    removeAssignees: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"
    ],
    removeLabel: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"
    ],
    removeSubIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/sub_issue"
    ],
    reprioritizeSubIssue: [
      "PATCH /repos/{owner}/{repo}/issues/{issue_number}/sub_issues/priority"
    ],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: [
      "PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"
    ]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: [
      "POST /markdown/raw",
      { headers: { "content-type": "text/plain; charset=utf-8" } }
    ]
  },
  meta: {
    get: ["GET /meta"],
    getAllVersions: ["GET /versions"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    deleteArchiveForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/archive"
    ],
    deleteArchiveForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/archive"
    ],
    downloadArchiveForOrg: [
      "GET /orgs/{org}/migrations/{migration_id}/archive"
    ],
    getArchiveForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/archive"
    ],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}"],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}"],
    listForAuthenticatedUser: ["GET /user/migrations"],
    listForOrg: ["GET /orgs/{org}/migrations"],
    listReposForAuthenticatedUser: [
      "GET /user/migrations/{migration_id}/repositories"
    ],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories"],
    listReposForUser: [
      "GET /user/migrations/{migration_id}/repositories",
      {},
      { renamed: ["migrations", "listReposForAuthenticatedUser"] }
    ],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    unlockRepoForAuthenticatedUser: [
      "DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock"
    ],
    unlockRepoForOrg: [
      "DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock"
    ]
  },
  oidc: {
    getOidcCustomSubTemplateForOrg: [
      "GET /orgs/{org}/actions/oidc/customization/sub"
    ],
    updateOidcCustomSubTemplateForOrg: [
      "PUT /orgs/{org}/actions/oidc/customization/sub"
    ]
  },
  orgs: {
    addSecurityManagerTeam: [
      "PUT /orgs/{org}/security-managers/teams/{team_slug}",
      {},
      {
        deprecated: "octokit.rest.orgs.addSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#add-a-security-manager-team"
      }
    ],
    assignTeamToOrgRole: [
      "PUT /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    assignUserToOrgRole: [
      "PUT /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: [
      "PUT /orgs/{org}/outside_collaborators/{username}"
    ],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createIssueType: ["POST /orgs/{org}/issue-types"],
    createOrUpdateCustomProperties: ["PATCH /orgs/{org}/properties/schema"],
    createOrUpdateCustomPropertiesValuesForRepos: [
      "PATCH /orgs/{org}/properties/values"
    ],
    createOrUpdateCustomProperty: [
      "PUT /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    createWebhook: ["POST /orgs/{org}/hooks"],
    delete: ["DELETE /orgs/{org}"],
    deleteIssueType: ["DELETE /orgs/{org}/issue-types/{issue_type_id}"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    enableOrDisableSecurityProductOnAllOrgRepos: [
      "POST /orgs/{org}/{security_product}/{enablement}",
      {},
      {
        deprecated: "octokit.rest.orgs.enableOrDisableSecurityProductOnAllOrgRepos() is deprecated, see https://docs.github.com/rest/orgs/orgs#enable-or-disable-a-security-feature-for-an-organization"
      }
    ],
    get: ["GET /orgs/{org}"],
    getAllCustomProperties: ["GET /orgs/{org}/properties/schema"],
    getCustomProperty: [
      "GET /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getOrgRole: ["GET /orgs/{org}/organization-roles/{role_id}"],
    getOrgRulesetHistory: ["GET /orgs/{org}/rulesets/{ruleset_id}/history"],
    getOrgRulesetVersion: [
      "GET /orgs/{org}/rulesets/{ruleset_id}/history/{version_id}"
    ],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    getWebhookDelivery: [
      "GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listAttestations: ["GET /orgs/{org}/attestations/{subject_digest}"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listCustomPropertiesValuesForRepos: ["GET /orgs/{org}/properties/values"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listIssueTypes: ["GET /orgs/{org}/issue-types"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOrgRoleTeams: ["GET /orgs/{org}/organization-roles/{role_id}/teams"],
    listOrgRoleUsers: ["GET /orgs/{org}/organization-roles/{role_id}/users"],
    listOrgRoles: ["GET /orgs/{org}/organization-roles"],
    listOrganizationFineGrainedPermissions: [
      "GET /orgs/{org}/organization-fine-grained-permissions"
    ],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPatGrantRepositories: [
      "GET /orgs/{org}/personal-access-tokens/{pat_id}/repositories"
    ],
    listPatGrantRequestRepositories: [
      "GET /orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories"
    ],
    listPatGrantRequests: ["GET /orgs/{org}/personal-access-token-requests"],
    listPatGrants: ["GET /orgs/{org}/personal-access-tokens"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listSecurityManagerTeams: [
      "GET /orgs/{org}/security-managers",
      {},
      {
        deprecated: "octokit.rest.orgs.listSecurityManagerTeams() is deprecated, see https://docs.github.com/rest/orgs/security-managers#list-security-manager-teams"
      }
    ],
    listWebhookDeliveries: ["GET /orgs/{org}/hooks/{hook_id}/deliveries"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeCustomProperty: [
      "DELETE /orgs/{org}/properties/schema/{custom_property_name}"
    ],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: [
      "DELETE /orgs/{org}/outside_collaborators/{username}"
    ],
    removePublicMembershipForAuthenticatedUser: [
      "DELETE /orgs/{org}/public_members/{username}"
    ],
    removeSecurityManagerTeam: [
      "DELETE /orgs/{org}/security-managers/teams/{team_slug}",
      {},
      {
        deprecated: "octokit.rest.orgs.removeSecurityManagerTeam() is deprecated, see https://docs.github.com/rest/orgs/security-managers#remove-a-security-manager-team"
      }
    ],
    reviewPatGrantRequest: [
      "POST /orgs/{org}/personal-access-token-requests/{pat_request_id}"
    ],
    reviewPatGrantRequestsInBulk: [
      "POST /orgs/{org}/personal-access-token-requests"
    ],
    revokeAllOrgRolesTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}"
    ],
    revokeAllOrgRolesUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}"
    ],
    revokeOrgRoleTeam: [
      "DELETE /orgs/{org}/organization-roles/teams/{team_slug}/{role_id}"
    ],
    revokeOrgRoleUser: [
      "DELETE /orgs/{org}/organization-roles/users/{username}/{role_id}"
    ],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: [
      "PUT /orgs/{org}/public_members/{username}"
    ],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateIssueType: ["PUT /orgs/{org}/issue-types/{issue_type_id}"],
    updateMembershipForAuthenticatedUser: [
      "PATCH /user/memberships/orgs/{org}"
    ],
    updatePatAccess: ["POST /orgs/{org}/personal-access-tokens/{pat_id}"],
    updatePatAccesses: ["POST /orgs/{org}/personal-access-tokens"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}"
    ],
    deletePackageForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    deletePackageForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}"
    ],
    deletePackageVersionForAuthenticatedUser: [
      "DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForOrg: [
      "DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    deletePackageVersionForUser: [
      "DELETE /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getAllPackageVersionsForAPackageOwnedByAnOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions",
      {},
      { renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"] }
    ],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions",
      {},
      {
        renamed: [
          "packages",
          "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"
        ]
      }
    ],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByOrg: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions"
    ],
    getAllPackageVersionsForPackageOwnedByUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions"
    ],
    getPackageForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}"
    ],
    getPackageForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}"
    ],
    getPackageForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}"
    ],
    getPackageVersionForAuthenticatedUser: [
      "GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForOrganization: [
      "GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    getPackageVersionForUser: [
      "GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"
    ],
    listDockerMigrationConflictingPackagesForAuthenticatedUser: [
      "GET /user/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForOrganization: [
      "GET /orgs/{org}/docker/conflicts"
    ],
    listDockerMigrationConflictingPackagesForUser: [
      "GET /users/{username}/docker/conflicts"
    ],
    listPackagesForAuthenticatedUser: ["GET /user/packages"],
    listPackagesForOrganization: ["GET /orgs/{org}/packages"],
    listPackagesForUser: ["GET /users/{username}/packages"],
    restorePackageForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/restore{?token}"
    ],
    restorePackageVersionForAuthenticatedUser: [
      "POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForOrg: [
      "POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ],
    restorePackageVersionForUser: [
      "POST /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"
    ]
  },
  privateRegistries: {
    createOrgPrivateRegistry: ["POST /orgs/{org}/private-registries"],
    deleteOrgPrivateRegistry: [
      "DELETE /orgs/{org}/private-registries/{secret_name}"
    ],
    getOrgPrivateRegistry: ["GET /orgs/{org}/private-registries/{secret_name}"],
    getOrgPublicKey: ["GET /orgs/{org}/private-registries/public-key"],
    listOrgPrivateRegistries: ["GET /orgs/{org}/private-registries"],
    updateOrgPrivateRegistry: [
      "PATCH /orgs/{org}/private-registries/{secret_name}"
    ]
  },
  projects: {
    addCollaborator: [
      "PUT /projects/{project_id}/collaborators/{username}",
      {},
      {
        deprecated: "octokit.rest.projects.addCollaborator() is deprecated, see https://docs.github.com/rest/projects/collaborators#add-project-collaborator"
      }
    ],
    createCard: [
      "POST /projects/columns/{column_id}/cards",
      {},
      {
        deprecated: "octokit.rest.projects.createCard() is deprecated, see https://docs.github.com/rest/projects/cards#create-a-project-card"
      }
    ],
    createColumn: [
      "POST /projects/{project_id}/columns",
      {},
      {
        deprecated: "octokit.rest.projects.createColumn() is deprecated, see https://docs.github.com/rest/projects/columns#create-a-project-column"
      }
    ],
    createForAuthenticatedUser: [
      "POST /user/projects",
      {},
      {
        deprecated: "octokit.rest.projects.createForAuthenticatedUser() is deprecated, see https://docs.github.com/rest/projects/projects#create-a-user-project"
      }
    ],
    createForOrg: [
      "POST /orgs/{org}/projects",
      {},
      {
        deprecated: "octokit.rest.projects.createForOrg() is deprecated, see https://docs.github.com/rest/projects/projects#create-an-organization-project"
      }
    ],
    createForRepo: [
      "POST /repos/{owner}/{repo}/projects",
      {},
      {
        deprecated: "octokit.rest.projects.createForRepo() is deprecated, see https://docs.github.com/rest/projects/projects#create-a-repository-project"
      }
    ],
    delete: [
      "DELETE /projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.projects.delete() is deprecated, see https://docs.github.com/rest/projects/projects#delete-a-project"
      }
    ],
    deleteCard: [
      "DELETE /projects/columns/cards/{card_id}",
      {},
      {
        deprecated: "octokit.rest.projects.deleteCard() is deprecated, see https://docs.github.com/rest/projects/cards#delete-a-project-card"
      }
    ],
    deleteColumn: [
      "DELETE /projects/columns/{column_id}",
      {},
      {
        deprecated: "octokit.rest.projects.deleteColumn() is deprecated, see https://docs.github.com/rest/projects/columns#delete-a-project-column"
      }
    ],
    get: [
      "GET /projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.projects.get() is deprecated, see https://docs.github.com/rest/projects/projects#get-a-project"
      }
    ],
    getCard: [
      "GET /projects/columns/cards/{card_id}",
      {},
      {
        deprecated: "octokit.rest.projects.getCard() is deprecated, see https://docs.github.com/rest/projects/cards#get-a-project-card"
      }
    ],
    getColumn: [
      "GET /projects/columns/{column_id}",
      {},
      {
        deprecated: "octokit.rest.projects.getColumn() is deprecated, see https://docs.github.com/rest/projects/columns#get-a-project-column"
      }
    ],
    getPermissionForUser: [
      "GET /projects/{project_id}/collaborators/{username}/permission",
      {},
      {
        deprecated: "octokit.rest.projects.getPermissionForUser() is deprecated, see https://docs.github.com/rest/projects/collaborators#get-project-permission-for-a-user"
      }
    ],
    listCards: [
      "GET /projects/columns/{column_id}/cards",
      {},
      {
        deprecated: "octokit.rest.projects.listCards() is deprecated, see https://docs.github.com/rest/projects/cards#list-project-cards"
      }
    ],
    listCollaborators: [
      "GET /projects/{project_id}/collaborators",
      {},
      {
        deprecated: "octokit.rest.projects.listCollaborators() is deprecated, see https://docs.github.com/rest/projects/collaborators#list-project-collaborators"
      }
    ],
    listColumns: [
      "GET /projects/{project_id}/columns",
      {},
      {
        deprecated: "octokit.rest.projects.listColumns() is deprecated, see https://docs.github.com/rest/projects/columns#list-project-columns"
      }
    ],
    listForOrg: [
      "GET /orgs/{org}/projects",
      {},
      {
        deprecated: "octokit.rest.projects.listForOrg() is deprecated, see https://docs.github.com/rest/projects/projects#list-organization-projects"
      }
    ],
    listForRepo: [
      "GET /repos/{owner}/{repo}/projects",
      {},
      {
        deprecated: "octokit.rest.projects.listForRepo() is deprecated, see https://docs.github.com/rest/projects/projects#list-repository-projects"
      }
    ],
    listForUser: [
      "GET /users/{username}/projects",
      {},
      {
        deprecated: "octokit.rest.projects.listForUser() is deprecated, see https://docs.github.com/rest/projects/projects#list-user-projects"
      }
    ],
    moveCard: [
      "POST /projects/columns/cards/{card_id}/moves",
      {},
      {
        deprecated: "octokit.rest.projects.moveCard() is deprecated, see https://docs.github.com/rest/projects/cards#move-a-project-card"
      }
    ],
    moveColumn: [
      "POST /projects/columns/{column_id}/moves",
      {},
      {
        deprecated: "octokit.rest.projects.moveColumn() is deprecated, see https://docs.github.com/rest/projects/columns#move-a-project-column"
      }
    ],
    removeCollaborator: [
      "DELETE /projects/{project_id}/collaborators/{username}",
      {},
      {
        deprecated: "octokit.rest.projects.removeCollaborator() is deprecated, see https://docs.github.com/rest/projects/collaborators#remove-user-as-a-collaborator"
      }
    ],
    update: [
      "PATCH /projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.projects.update() is deprecated, see https://docs.github.com/rest/projects/projects#update-a-project"
      }
    ],
    updateCard: [
      "PATCH /projects/columns/cards/{card_id}",
      {},
      {
        deprecated: "octokit.rest.projects.updateCard() is deprecated, see https://docs.github.com/rest/projects/cards#update-an-existing-project-card"
      }
    ],
    updateColumn: [
      "PATCH /projects/columns/{column_id}",
      {},
      {
        deprecated: "octokit.rest.projects.updateColumn() is deprecated, see https://docs.github.com/rest/projects/columns#update-an-existing-project-column"
      }
    ]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"
    ],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    deletePendingReview: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    deleteReviewComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ],
    dismissReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"
    ],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    listReviewComments: [
      "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"
    ],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: [
      "DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    requestReviewers: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"
    ],
    submitReview: [
      "POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"
    ],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch"
    ],
    updateReview: [
      "PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"
    ],
    updateReviewComment: [
      "PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"
    ]
  },
  rateLimit: { get: ["GET /rate_limit"] },
  reactions: {
    createForCommitComment: [
      "POST /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    createForIssue: [
      "POST /repos/{owner}/{repo}/issues/{issue_number}/reactions"
    ],
    createForIssueComment: [
      "POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    createForPullRequestReviewComment: [
      "POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    createForRelease: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    createForTeamDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    createForTeamDiscussionInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ],
    deleteForCommitComment: [
      "DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForIssue: [
      "DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}"
    ],
    deleteForIssueComment: [
      "DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForPullRequestComment: [
      "DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}"
    ],
    deleteForRelease: [
      "DELETE /repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussion: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}"
    ],
    deleteForTeamDiscussionComment: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}"
    ],
    listForCommitComment: [
      "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions"
    ],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions"],
    listForIssueComment: [
      "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions"
    ],
    listForPullRequestReviewComment: [
      "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions"
    ],
    listForRelease: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/reactions"
    ],
    listForTeamDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions"
    ],
    listForTeamDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions"
    ]
  },
  repos: {
    acceptInvitation: [
      "PATCH /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "acceptInvitationForAuthenticatedUser"] }
    ],
    acceptInvitationForAuthenticatedUser: [
      "PATCH /user/repository_invitations/{invitation_id}"
    ],
    addAppAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    addTeamAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    addUserAccessRestrictions: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    cancelPagesDeployment: [
      "POST /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}/cancel"
    ],
    checkAutomatedSecurityFixes: [
      "GET /repos/{owner}/{repo}/automated-security-fixes"
    ],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkPrivateVulnerabilityReporting: [
      "GET /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    checkVulnerabilityAlerts: [
      "GET /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    codeownersErrors: ["GET /repos/{owner}/{repo}/codeowners/errors"],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    compareCommitsWithBasehead: [
      "GET /repos/{owner}/{repo}/compare/{basehead}"
    ],
    createAttestation: ["POST /repos/{owner}/{repo}/attestations"],
    createAutolink: ["POST /repos/{owner}/{repo}/autolinks"],
    createCommitComment: [
      "POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    createCommitSignatureProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentBranchPolicy: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    createDeploymentProtectionRule: [
      "POST /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    createDeploymentStatus: [
      "POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateCustomPropertiesValues: [
      "PATCH /repos/{owner}/{repo}/properties/values"
    ],
    createOrUpdateEnvironment: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createOrgRuleset: ["POST /orgs/{org}/rulesets"],
    createPagesDeployment: ["POST /repos/{owner}/{repo}/pages/deployments"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages"],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createRepoRuleset: ["POST /repos/{owner}/{repo}/rulesets"],
    createUsingTemplate: [
      "POST /repos/{template_owner}/{template_repo}/generate"
    ],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: [
      "DELETE /user/repository_invitations/{invitation_id}",
      {},
      { renamed: ["repos", "declineInvitationForAuthenticatedUser"] }
    ],
    declineInvitationForAuthenticatedUser: [
      "DELETE /user/repository_invitations/{invitation_id}"
    ],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    deleteAdminBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    deleteAnEnvironment: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    deleteAutolink: ["DELETE /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    deleteBranchProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: [
      "DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"
    ],
    deleteDeploymentBranchPolicy: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: [
      "DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    deleteOrgRuleset: ["DELETE /orgs/{org}/rulesets/{ruleset_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages"],
    deletePullRequestReviewProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: [
      "DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    deleteRepoRuleset: ["DELETE /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: [
      "DELETE /repos/{owner}/{repo}/automated-security-fixes"
    ],
    disableDeploymentProtectionRule: [
      "DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    disablePrivateVulnerabilityReporting: [
      "DELETE /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    disableVulnerabilityAlerts: [
      "DELETE /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    downloadArchive: [
      "GET /repos/{owner}/{repo}/zipball/{ref}",
      {},
      { renamed: ["repos", "downloadZipballArchive"] }
    ],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: [
      "PUT /repos/{owner}/{repo}/automated-security-fixes"
    ],
    enablePrivateVulnerabilityReporting: [
      "PUT /repos/{owner}/{repo}/private-vulnerability-reporting"
    ],
    enableVulnerabilityAlerts: [
      "PUT /repos/{owner}/{repo}/vulnerability-alerts"
    ],
    generateReleaseNotes: [
      "POST /repos/{owner}/{repo}/releases/generate-notes"
    ],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"
    ],
    getAdminBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    getAllDeploymentProtectionRules: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules"
    ],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"
    ],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics"],
    getAppsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"
    ],
    getAutolink: ["GET /repos/{owner}/{repo}/autolinks/{autolink_id}"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    getBranchRules: ["GET /repos/{owner}/{repo}/rules/branches/{branch}"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: [
      "GET /repos/{owner}/{repo}/collaborators/{username}/permission"
    ],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures"
    ],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getCustomDeploymentProtectionRule: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}"
    ],
    getCustomPropertiesValues: ["GET /repos/{owner}/{repo}/properties/values"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentBranchPolicy: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    getDeploymentStatus: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"
    ],
    getEnvironment: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}"
    ],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getOrgRuleSuite: ["GET /orgs/{org}/rulesets/rule-suites/{rule_suite_id}"],
    getOrgRuleSuites: ["GET /orgs/{org}/rulesets/rule-suites"],
    getOrgRuleset: ["GET /orgs/{org}/rulesets/{ruleset_id}"],
    getOrgRulesets: ["GET /orgs/{org}/rulesets"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getPagesDeployment: [
      "GET /repos/{owner}/{repo}/pages/deployments/{pages_deployment_id}"
    ],
    getPagesHealthCheck: ["GET /repos/{owner}/{repo}/pages/health"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getRepoRuleSuite: [
      "GET /repos/{owner}/{repo}/rulesets/rule-suites/{rule_suite_id}"
    ],
    getRepoRuleSuites: ["GET /repos/{owner}/{repo}/rulesets/rule-suites"],
    getRepoRuleset: ["GET /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    getRepoRulesetHistory: [
      "GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history"
    ],
    getRepoRulesetVersion: [
      "GET /repos/{owner}/{repo}/rulesets/{ruleset_id}/history/{version_id}"
    ],
    getRepoRulesets: ["GET /repos/{owner}/{repo}/rulesets"],
    getStatusChecksProtection: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    getTeamsWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"
    ],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: [
      "GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"
    ],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    getWebhookDelivery: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}"
    ],
    listActivities: ["GET /repos/{owner}/{repo}/activity"],
    listAttestations: [
      "GET /repos/{owner}/{repo}/attestations/{subject_digest}"
    ],
    listAutolinks: ["GET /repos/{owner}/{repo}/autolinks"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head"
    ],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"
    ],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: [
      "GET /repos/{owner}/{repo}/commits/{ref}/statuses"
    ],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listCustomDeploymentRuleIntegrations: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps"
    ],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentBranchPolicies: [
      "GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies"
    ],
    listDeploymentStatuses: [
      "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"
    ],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: [
      "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls"
    ],
    listReleaseAssets: [
      "GET /repos/{owner}/{repo}/releases/{release_id}/assets"
    ],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhookDeliveries: [
      "GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries"
    ],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    mergeUpstream: ["POST /repos/{owner}/{repo}/merge-upstream"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    redeliverWebhookDelivery: [
      "POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts"
    ],
    removeAppAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    removeCollaborator: [
      "DELETE /repos/{owner}/{repo}/collaborators/{username}"
    ],
    removeStatusCheckContexts: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    removeStatusCheckProtection: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    removeTeamAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    removeUserAccessRestrictions: [
      "DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics"],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: [
      "POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"
    ],
    setAppAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      {},
      { mapToData: "apps" }
    ],
    setStatusCheckContexts: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      {},
      { mapToData: "contexts" }
    ],
    setTeamAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      {},
      { mapToData: "teams" }
    ],
    setUserAccessRestrictions: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      {},
      { mapToData: "users" }
    ],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: [
      "PUT /repos/{owner}/{repo}/branches/{branch}/protection"
    ],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateDeploymentBranchPolicy: [
      "PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}"
    ],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: [
      "PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"
    ],
    updateOrgRuleset: ["PUT /orgs/{org}/rulesets/{ruleset_id}"],
    updatePullRequestReviewProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"
    ],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: [
      "PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"
    ],
    updateRepoRuleset: ["PUT /repos/{owner}/{repo}/rulesets/{ruleset_id}"],
    updateStatusCheckPotection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      {},
      { renamed: ["repos", "updateStatusCheckProtection"] }
    ],
    updateStatusCheckProtection: [
      "PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"
    ],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: [
      "PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"
    ],
    uploadReleaseAsset: [
      "POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}",
      { baseUrl: "https://uploads.github.com" }
    ]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits"],
    issuesAndPullRequests: [
      "GET /search/issues",
      {},
      {
        deprecated: "octokit.rest.search.issuesAndPullRequests() is deprecated, see https://docs.github.com/rest/search/search#search-issues-and-pull-requests"
      }
    ],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics"],
    users: ["GET /search/users"]
  },
  secretScanning: {
    createPushProtectionBypass: [
      "POST /repos/{owner}/{repo}/secret-scanning/push-protection-bypasses"
    ],
    getAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ],
    getScanHistory: ["GET /repos/{owner}/{repo}/secret-scanning/scan-history"],
    listAlertsForEnterprise: [
      "GET /enterprises/{enterprise}/secret-scanning/alerts"
    ],
    listAlertsForOrg: ["GET /orgs/{org}/secret-scanning/alerts"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    listLocationsForAlert: [
      "GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations"
    ],
    updateAlert: [
      "PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"
    ]
  },
  securityAdvisories: {
    createFork: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/forks"
    ],
    createPrivateVulnerabilityReport: [
      "POST /repos/{owner}/{repo}/security-advisories/reports"
    ],
    createRepositoryAdvisory: [
      "POST /repos/{owner}/{repo}/security-advisories"
    ],
    createRepositoryAdvisoryCveRequest: [
      "POST /repos/{owner}/{repo}/security-advisories/{ghsa_id}/cve"
    ],
    getGlobalAdvisory: ["GET /advisories/{ghsa_id}"],
    getRepositoryAdvisory: [
      "GET /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ],
    listGlobalAdvisories: ["GET /advisories"],
    listOrgRepositoryAdvisories: ["GET /orgs/{org}/security-advisories"],
    listRepositoryAdvisories: ["GET /repos/{owner}/{repo}/security-advisories"],
    updateRepositoryAdvisory: [
      "PATCH /repos/{owner}/{repo}/security-advisories/{ghsa_id}"
    ]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    addOrUpdateProjectPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.teams.addOrUpdateProjectPermissionsInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions"
      }
    ],
    addOrUpdateProjectPermissionsLegacy: [
      "PUT /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.teams.addOrUpdateProjectPermissionsLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#add-or-update-team-project-permissions-legacy"
      }
    ],
    addOrUpdateRepoPermissionsInOrg: [
      "PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    checkPermissionsForProjectInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.teams.checkPermissionsForProjectInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project"
      }
    ],
    checkPermissionsForProjectLegacy: [
      "GET /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.teams.checkPermissionsForProjectLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#check-team-permissions-for-a-project-legacy"
      }
    ],
    checkPermissionsForRepoInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: [
      "POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    deleteDiscussionInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    getDiscussionInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    getMembershipForUserInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"
    ],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/invitations"
    ],
    listProjectsInOrg: [
      "GET /orgs/{org}/teams/{team_slug}/projects",
      {},
      {
        deprecated: "octokit.rest.teams.listProjectsInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#list-team-projects"
      }
    ],
    listProjectsLegacy: [
      "GET /teams/{team_id}/projects",
      {},
      {
        deprecated: "octokit.rest.teams.listProjectsLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#list-team-projects-legacy"
      }
    ],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"
    ],
    removeProjectInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.teams.removeProjectInOrg() is deprecated, see https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team"
      }
    ],
    removeProjectLegacy: [
      "DELETE /teams/{team_id}/projects/{project_id}",
      {},
      {
        deprecated: "octokit.rest.teams.removeProjectLegacy() is deprecated, see https://docs.github.com/rest/teams/teams#remove-a-project-from-a-team-legacy"
      }
    ],
    removeRepoInOrg: [
      "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"
    ],
    updateDiscussionCommentInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"
    ],
    updateDiscussionInOrg: [
      "PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"
    ],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: [
      "POST /user/emails",
      {},
      { renamed: ["users", "addEmailForAuthenticatedUser"] }
    ],
    addEmailForAuthenticatedUser: ["POST /user/emails"],
    addSocialAccountForAuthenticatedUser: ["POST /user/social_accounts"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: [
      "POST /user/gpg_keys",
      {},
      { renamed: ["users", "createGpgKeyForAuthenticatedUser"] }
    ],
    createGpgKeyForAuthenticatedUser: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: [
      "POST /user/keys",
      {},
      { renamed: ["users", "createPublicSshKeyForAuthenticatedUser"] }
    ],
    createPublicSshKeyForAuthenticatedUser: ["POST /user/keys"],
    createSshSigningKeyForAuthenticatedUser: ["POST /user/ssh_signing_keys"],
    deleteEmailForAuthenticated: [
      "DELETE /user/emails",
      {},
      { renamed: ["users", "deleteEmailForAuthenticatedUser"] }
    ],
    deleteEmailForAuthenticatedUser: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: [
      "DELETE /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "deleteGpgKeyForAuthenticatedUser"] }
    ],
    deleteGpgKeyForAuthenticatedUser: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: [
      "DELETE /user/keys/{key_id}",
      {},
      { renamed: ["users", "deletePublicSshKeyForAuthenticatedUser"] }
    ],
    deletePublicSshKeyForAuthenticatedUser: ["DELETE /user/keys/{key_id}"],
    deleteSocialAccountForAuthenticatedUser: ["DELETE /user/social_accounts"],
    deleteSshSigningKeyForAuthenticatedUser: [
      "DELETE /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getById: ["GET /user/{account_id}"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: [
      "GET /user/gpg_keys/{gpg_key_id}",
      {},
      { renamed: ["users", "getGpgKeyForAuthenticatedUser"] }
    ],
    getGpgKeyForAuthenticatedUser: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: [
      "GET /user/keys/{key_id}",
      {},
      { renamed: ["users", "getPublicSshKeyForAuthenticatedUser"] }
    ],
    getPublicSshKeyForAuthenticatedUser: ["GET /user/keys/{key_id}"],
    getSshSigningKeyForAuthenticatedUser: [
      "GET /user/ssh_signing_keys/{ssh_signing_key_id}"
    ],
    list: ["GET /users"],
    listAttestations: ["GET /users/{username}/attestations/{subject_digest}"],
    listBlockedByAuthenticated: [
      "GET /user/blocks",
      {},
      { renamed: ["users", "listBlockedByAuthenticatedUser"] }
    ],
    listBlockedByAuthenticatedUser: ["GET /user/blocks"],
    listEmailsForAuthenticated: [
      "GET /user/emails",
      {},
      { renamed: ["users", "listEmailsForAuthenticatedUser"] }
    ],
    listEmailsForAuthenticatedUser: ["GET /user/emails"],
    listFollowedByAuthenticated: [
      "GET /user/following",
      {},
      { renamed: ["users", "listFollowedByAuthenticatedUser"] }
    ],
    listFollowedByAuthenticatedUser: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: [
      "GET /user/gpg_keys",
      {},
      { renamed: ["users", "listGpgKeysForAuthenticatedUser"] }
    ],
    listGpgKeysForAuthenticatedUser: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: [
      "GET /user/public_emails",
      {},
      { renamed: ["users", "listPublicEmailsForAuthenticatedUser"] }
    ],
    listPublicEmailsForAuthenticatedUser: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: [
      "GET /user/keys",
      {},
      { renamed: ["users", "listPublicSshKeysForAuthenticatedUser"] }
    ],
    listPublicSshKeysForAuthenticatedUser: ["GET /user/keys"],
    listSocialAccountsForAuthenticatedUser: ["GET /user/social_accounts"],
    listSocialAccountsForUser: ["GET /users/{username}/social_accounts"],
    listSshSigningKeysForAuthenticatedUser: ["GET /user/ssh_signing_keys"],
    listSshSigningKeysForUser: ["GET /users/{username}/ssh_signing_keys"],
    setPrimaryEmailVisibilityForAuthenticated: [
      "PATCH /user/email/visibility",
      {},
      { renamed: ["users", "setPrimaryEmailVisibilityForAuthenticatedUser"] }
    ],
    setPrimaryEmailVisibilityForAuthenticatedUser: [
      "PATCH /user/email/visibility"
    ],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};
var endpoints_default = Endpoints;

// node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/endpoints-to-methods.js
var endpointMethodsMap = /* @__PURE__ */ new Map;
for (const [scope, endpoints] of Object.entries(endpoints_default)) {
  for (const [methodName, endpoint2] of Object.entries(endpoints)) {
    const [route, defaults2, decorations] = endpoint2;
    const [method, url] = route.split(/ /);
    const endpointDefaults = Object.assign({
      method,
      url
    }, defaults2);
    if (!endpointMethodsMap.has(scope)) {
      endpointMethodsMap.set(scope, /* @__PURE__ */ new Map);
    }
    endpointMethodsMap.get(scope).set(methodName, {
      scope,
      methodName,
      endpointDefaults,
      decorations
    });
  }
}
var handler = {
  has({ scope }, methodName) {
    return endpointMethodsMap.get(scope).has(methodName);
  },
  getOwnPropertyDescriptor(target, methodName) {
    return {
      value: this.get(target, methodName),
      configurable: true,
      writable: true,
      enumerable: true
    };
  },
  defineProperty(target, methodName, descriptor) {
    Object.defineProperty(target.cache, methodName, descriptor);
    return true;
  },
  deleteProperty(target, methodName) {
    delete target.cache[methodName];
    return true;
  },
  ownKeys({ scope }) {
    return [...endpointMethodsMap.get(scope).keys()];
  },
  set(target, methodName, value) {
    return target.cache[methodName] = value;
  },
  get({ octokit, scope, cache }, methodName) {
    if (cache[methodName]) {
      return cache[methodName];
    }
    const method = endpointMethodsMap.get(scope).get(methodName);
    if (!method) {
      return;
    }
    const { endpointDefaults, decorations } = method;
    if (decorations) {
      cache[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
    } else {
      cache[methodName] = octokit.request.defaults(endpointDefaults);
    }
    return cache[methodName];
  }
};
function endpointsToMethods(octokit) {
  const newMethods = {};
  for (const scope of endpointMethodsMap.keys()) {
    newMethods[scope] = new Proxy({ octokit, scope, cache: {} }, handler);
  }
  return newMethods;
}
function decorate(octokit, scope, methodName, defaults2, decorations) {
  const requestWithDefaults = octokit.request.defaults(defaults2);
  function withDecorations(...args) {
    let options = requestWithDefaults.endpoint.merge(...args);
    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: undefined
      });
      return requestWithDefaults(options);
    }
    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
    }
    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }
    if (decorations.renamedParameters) {
      const options2 = requestWithDefaults.endpoint.merge(...args);
      for (const [name, alias] of Object.entries(decorations.renamedParameters)) {
        if (name in options2) {
          octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);
          if (!(alias in options2)) {
            options2[alias] = options2[name];
          }
          delete options2[name];
        }
      }
      return requestWithDefaults(options2);
    }
    return requestWithDefaults(...args);
  }
  return Object.assign(withDecorations, requestWithDefaults);
}

// node_modules/@octokit/plugin-rest-endpoint-methods/dist-src/index.js
function restEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit);
  return {
    rest: api
  };
}
restEndpointMethods.VERSION = VERSION8;
function legacyRestEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit);
  return {
    ...api,
    rest: api
  };
}
legacyRestEndpointMethods.VERSION = VERSION8;

// node_modules/@octokit/rest/dist-src/version.js
var VERSION9 = "21.1.1";

// node_modules/@octokit/rest/dist-src/index.js
var Octokit2 = Octokit.plugin(requestLog, legacyRestEndpointMethods, paginateRest).defaults({
  userAgent: `octokit-rest.js/${VERSION9}`
});

// src/index.ts
var $2 = $({ nothrow: true });

class UserFacingError extends Error {
}

class StartWorkspaceAction {
  logger;
  quietExec;
  input;
  octokit;
  constructor(logger, quietExec, input) {
    this.logger = logger;
    this.quietExec = quietExec;
    this.input = input;
    this.octokit = new Octokit2({ auth: input.githubToken });
  }
  async exec(strings, ...args) {
    try {
      const output = await $2({
        env: {
          ...process.env,
          CODER_URL: this.input.coderUrl,
          CODER_TOKEN: this.input.coderToken
        }
      })(strings, ...args).quiet(this.quietExec);
      if (output.exitCode !== 0) {
        throw new Error(`Failed to execute command: ${strings.join("REDACTED")}`);
      }
      return output;
    } catch (error) {
      throw new Error(`Failed to execute command: ${strings.join("REDACTED")}`);
    }
  }
  parseCoderUsersListOutput(output) {
    const lines = output.trim().split(`
`);
    if (lines.length < 2) {
      assert(this.input.githubUsername, "GitHub username is required");
      throw new UserFacingError(`No Coder username mapping found for GitHub user @${this.input.githubUsername}`);
    }
    if (lines.length > 2) {
      const usernames = lines.slice(1).map((line) => line.trim());
      this.logger.warn(`Multiple Coder usernames found for GitHub user ${this.input.githubUsername}: ${usernames.join(", ")}. Using the first one.`);
    }
    const username = lines[1]?.trim();
    assert(username, "Coder username not found in output");
    return username;
  }
  async coderUsersList(githubUserId) {
    return (await this.exec`coder users list --github-user-id ${githubUserId} --column username`).text();
  }
  async createParametersFile(parameters) {
    const tmpFilePath = `/tmp/coder-parameters-${Math.round(Math.random() * 1e6)}.yml`;
    await fs3.writeFile(tmpFilePath, parameters);
    return tmpFilePath;
  }
  createWorkspaceUrl(coderUsername, workspaceName) {
    return `${this.input.coderUrl}/${coderUsername}/${workspaceName}`;
  }
  async coderStartWorkspace({
    coderUsername,
    templateName,
    workspaceName,
    parametersFilePath
  }) {
    const fullWorkspaceName = `${coderUsername}/${workspaceName}`;
    return (await this.exec`bash -c "yes '' || true" | coder create --yes --template ${templateName} ${fullWorkspaceName} --rich-parameter-file ${parametersFilePath}`).text();
  }
  async githubGetUserIdFromUsername(username) {
    const response = await this.octokit.rest.users.getByUsername({
      username
    });
    return response.data.id;
  }
  async githubUpdateIssueComment(args) {
    await this.octokit.rest.issues.updateComment({
      owner: args.owner,
      repo: args.repo,
      comment_id: args.commentId,
      body: args.comment
    });
  }
  async githubGetIssueCommentBody(args) {
    const response = await this.octokit.rest.issues.getComment({
      owner: args.owner,
      repo: args.repo,
      comment_id: args.commentId
    });
    const body = response.data.body;
    assert(body, "Issue comment body is required");
    return body;
  }
  async execute() {
    if (!this.input.githubUsername && !this.input.coderUsername) {
      throw new Error("GitHub username or Coder username is required");
    }
    if (this.input.githubUsername && this.input.coderUsername) {
      throw new Error("Only one of GitHub username or Coder username may be set");
    }
    let coderUsername = this.input.coderUsername ?? "";
    if (coderUsername === "") {
      assert(this.input.githubUsername, "GitHub username is required");
      this.logger.log(`Getting Coder username for GitHub user ${this.input.githubUsername}`);
      const userId = await this.githubGetUserIdFromUsername(this.input.githubUsername);
      try {
        coderUsername = this.parseCoderUsersListOutput(await this.coderUsersList(userId));
      } catch (error) {
        const externalAuthPage = `${this.input.coderUrl}/settings/external-auth`;
        throw new UserFacingError(`No matching Coder user found for GitHub user @${this.input.githubUsername}. Please connect your GitHub account with Coder: ${externalAuthPage}`);
      }
      this.logger.log(`Coder username for GitHub user ${this.input.githubUsername} is ${coderUsername}`);
    } else {
      this.logger.log(`Using Coder username ${this.input.coderUsername}`);
    }
    const workspaceUrl = this.createWorkspaceUrl(coderUsername, this.input.workspaceName);
    this.logger.log(`Workspace URL: ${workspaceUrl}`);
    let commentBody = await this.githubGetIssueCommentBody({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId
    });
    commentBody = commentBody + `
Workspace will be available here: ${workspaceUrl}`;
    await this.githubUpdateIssueComment({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId,
      comment: commentBody
    });
    const parametersFilePath = await this.createParametersFile(this.input.workspaceParameters);
    this.logger.log("Starting workspace");
    await this.coderStartWorkspace({
      coderUsername,
      templateName: this.input.templateName,
      workspaceName: this.input.workspaceName,
      parametersFilePath
    });
    this.logger.log("Workspace started");
    await fs3.unlink(parametersFilePath);
    await this.githubUpdateIssueComment({
      owner: this.input.githubRepoOwner,
      repo: this.input.githubRepoName,
      commentId: this.input.githubStatusCommentId,
      comment: `✅ Workspace started: ${workspaceUrl}
View [Github Actions logs](${this.input.githubWorkflowRunUrl}).`
    });
  }
}
export {
  UserFacingError,
  StartWorkspaceAction
};
