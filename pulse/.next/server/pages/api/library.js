"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/library";
exports.ids = ["pages/api/library"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/library":
/*!************************!*\
  !*** ./models/library ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst librarySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  // _id: {\n  //   type: Schema.Types.ObjectId,\n  //   required: false,\n  // },\n  name: {\n    type: String,\n    required: false,\n  },\n  company_name: {\n    type: String,\n    required: false,\n  },\n  email: {\n    type: String,\n    required: true,\n  },\n  telephone: {\n    type: String,\n    required: false,\n  },\n  username : {\n    type: String,\n    required: true\n  }\n  \n});\nlibrarySchema.set(\"timestamps\", true);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.library || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"library\", librarySchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvbGlicmFyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7O0FBRWpELDBCQUEwQiw0Q0FBTTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsaUVBQWUsb0RBQWMsSUFBSSwrQ0FBSywwQkFBMEIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbWxlLy4vbW9kZWxzL2xpYnJhcnk/MjI5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWEsIG1vZGVscywgbW9kZWwgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgbGlicmFyeVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAvLyBfaWQ6IHtcbiAgLy8gICB0eXBlOiBTY2hlbWEuVHlwZXMuT2JqZWN0SWQsXG4gIC8vICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAvLyB9LFxuICBuYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgY29tcGFueV9uYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHRlbGVwaG9uZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gIH0sXG4gIHVzZXJuYW1lIDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9XG4gIFxufSk7XG5saWJyYXJ5U2NoZW1hLnNldChcInRpbWVzdGFtcHNcIiwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGVscy5saWJyYXJ5IHx8IG1vZGVsKFwibGlicmFyeVwiLCBsaWJyYXJ5U2NoZW1hKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/library\n");

/***/ }),

/***/ "(api)/./pages/api/library/index.js":
/*!************************************!*\
  !*** ./pages/api/library/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/library */ \"(api)/./models/library\");\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            try {\n                const librarys = await _models_library__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n                res.status(200).json({\n                    success: true,\n                    data: librarys\n                });\n            } catch (error) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                // console.log(\"hjb\");\n                let donnee = req.body;\n                //console.log(donnee);\n                const librarys = await _models_library__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(donnee);\n                //console.log(librarys);\n                res.status(201).json({\n                    success: true,\n                    data: librarys\n                });\n            } catch (error1) {\n                res.status(200).json({\n                    success: false,\n                    data: [\n                        \"err\",\n                        error1\n                    ]\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGlicmFyeS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFDSDtBQUU3Q0EsNERBQVM7QUFFVCxFQUE4RDtBQUM5RCxpRUFBTSxPQUFnQkUsR0FBRyxFQUFFQyxHQUFHLEdBQUssQ0FBQztJQUNsQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEVBQUMsQ0FBQyxHQUFHRixHQUFHO0lBRXRCLE1BQU0sQ0FBRUUsTUFBTTtRQUNaLElBQUksQ0FBQyxDQUFLO1lBQ1IsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsS0FBSyxDQUFDQyxRQUFRLEdBQUcsS0FBSyxDQUFDSiw0REFBWSxDQUFDLENBQUMsQ0FBQztnQkFDdENFLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVMLFFBQVE7Z0JBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsS0FBSyxFQUFFTSxLQUFLLEVBQUUsQ0FBQztnQkFDZlIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Z0JBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsS0FBSztRQUNQLElBQUksQ0FBQyxDQUFNO1lBQ1QsR0FBRyxDQUFDLENBQUM7Z0JBQ0osRUFBc0I7Z0JBQ3JCLEdBQUcsQ0FBQ0csTUFBTSxHQUFHVixHQUFHLENBQUNXLElBQUk7Z0JBQ3JCLEVBQXNCO2dCQUN0QixLQUFLLENBQUNSLFFBQVEsR0FBRyxLQUFLLENBQUNKLDhEQUFjLENBQUNXLE1BQU07Z0JBQzNDLEVBQXdCO2dCQUN6QlQsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLElBQUk7b0JBQUVDLElBQUksRUFBRUwsUUFBUTtnQkFBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxLQUFLLEVBQUVNLE1BQUssRUFBRSxDQUFDO2dCQUNmUixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUFDQyxPQUFPLEVBQUUsS0FBSztvQkFBRUMsSUFBSSxFQUFFLENBQUM7d0JBQUEsQ0FBSzt3QkFBRUMsTUFBSztvQkFBQSxDQUFDO2dCQUFDLENBQUM7WUFDL0QsQ0FBQztZQUNELEtBQUs7O1lBRUxSLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxLQUFLO1lBQUMsQ0FBQztZQUN2QyxLQUFLOztBQUVYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW1sZS8uL3BhZ2VzL2FwaS9saWJyYXJ5L2luZGV4LmpzP2ViMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0XCI7XG5pbXBvcnQgbGlicmFyeSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL2xpYnJhcnlcIjtcblxuZGJDb25uZWN0KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBtZXRob2QgfSA9IHJlcTtcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgXCJHRVRcIjpcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGxpYnJhcnlzID0gYXdhaXQgbGlicmFyeS5maW5kKHt9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBsaWJyYXJ5cyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UgfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUE9TVFwiOlxuICAgICAgdHJ5IHtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcImhqYlwiKTtcbiAgICAgICAgbGV0IGRvbm5lZSA9IHJlcS5ib2R5O1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRvbm5lZSk7XG4gICAgICAgIGNvbnN0IGxpYnJhcnlzID0gYXdhaXQgbGlicmFyeS5jcmVhdGUoZG9ubmVlKTtcbiAgICAgICAgIC8vY29uc29sZS5sb2cobGlicmFyeXMpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGxpYnJhcnlzIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZGF0YTogW1wiZXJyXCIsIGVycm9yXSB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZGJDb25uZWN0IiwibGlicmFyeSIsInJlcSIsInJlcyIsIm1ldGhvZCIsImxpYnJhcnlzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIiwiZG9ubmVlIiwiYm9keSIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/library/index.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    // const db = await mongoose.connect(process.env.MONGO_URI, {\n    //     useNewUrlParser: true,\n    //     useUnifiedTopology: true,\n    // });\n    const db = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/pulse\", {\n        useNewUrlParser: \"true\",\n        useUnifiedTopology: \"true\"\n    });\n//connection.isConnected = db.connections[0].readyState;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBRS9CLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQUMsQ0FBQztlQUVOQyxTQUFTLEdBQUcsQ0FBQztJQUN4QixFQUFFLEVBQUVELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFDekIsTUFBTTtJQUNWLENBQUM7SUFFRCxFQUE2RDtJQUM3RCxFQUE2QjtJQUM3QixFQUFnQztJQUNoQyxFQUFNO0lBR04sS0FBSyxDQUFDQyxFQUFFLEdBQUdKLHVEQUFnQixDQUFDLENBQWlDLGtDQUFFLENBQUM7UUFDOURNLGVBQWUsRUFBRSxDQUFNO1FBQ3ZCQyxrQkFBa0IsRUFBRSxDQUFNO0lBQzVCLENBQUM7QUFFRCxFQUF3RDtBQUU1RCxDQUFDO0FBRUQsaUVBQWVMLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbWxlLy4vdXRpbHMvZGJDb25uZWN0LmpzP2MzY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xuXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkksIHtcbiAgICAvLyAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIC8vICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXG4gICAgLy8gfSk7XG5cblxuICAgIGNvbnN0IGRiID0gbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvcHVsc2VcIiwge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiBcInRydWVcIixcbiAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogXCJ0cnVlXCIsXG4gICAgfSk7XG5cbiAgICAvL2Nvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdGlvbiIsImRiQ29ubmVjdCIsImlzQ29ubmVjdGVkIiwiZGIiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/library/index.js"));
module.exports = __webpack_exports__;

})();