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
exports.id = "pages/api/profils/[id]";
exports.ids = ["pages/api/profils/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./models/Profile.js":
/*!***************************!*\
  !*** ./models/Profile.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProfileSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    // _id: {\n    //   type: Schema.Types.ObjectId,\n    //   required: false,\n    // },\n    name: {\n        type: String,\n        required: true\n    },\n    company_name: {\n        type: String,\n        required: false\n    },\n    email: {\n        type: String,\n        required: false\n    },\n    telephone: {\n        type: String,\n        required: false\n    },\n    username: {\n        type: String,\n        required: true\n    }\n});\nProfileSchema.set(\"timestamps\", true);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Profile || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"Profile\", ProfileSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsS0FBSyxDQUFDRyxhQUFhLEdBQUcsR0FBRyxDQUFDSCw0Q0FBTSxDQUFDLENBQUM7SUFDaEMsRUFBUztJQUNULEVBQWlDO0lBQ2pDLEVBQXFCO0lBQ3JCLEVBQUs7SUFDTEksSUFBSSxFQUFFLENBQUM7UUFDTEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7SUFDREMsWUFBWSxFQUFFLENBQUM7UUFDYkgsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO0lBQ2pCLENBQUM7SUFDREUsS0FBSyxFQUFFLENBQUM7UUFDTkosSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO0lBQ2pCLENBQUM7SUFDREcsU0FBUyxFQUFFLENBQUM7UUFDVkwsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxLQUFLO0lBQ2pCLENBQUM7SUFDREksUUFBUSxFQUFHLENBQUM7UUFDVk4sSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRSxJQUFJO0lBQ2hCLENBQUM7QUFFSCxDQUFDO0FBQ0RKLGFBQWEsQ0FBQ1MsR0FBRyxDQUFDLENBQVksYUFBRSxJQUFJO0FBRXBDLGlFQUFlWCxvREFBYyxJQUFJQywrQ0FBSyxDQUFDLENBQVMsVUFBRUMsYUFBYSxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZW1sZS8uL21vZGVscy9Qcm9maWxlLmpzPzQ0NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hLCBtb2RlbHMsIG1vZGVsIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFByb2ZpbGVTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgLy8gX2lkOiB7XG4gIC8vICAgdHlwZTogU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAvLyAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgLy8gfSxcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgfSxcbiAgY29tcGFueV9uYW1lOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgfSxcbiAgZW1haWw6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxuICB0ZWxlcGhvbmU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxuICB1c2VybmFtZSA6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfVxuICBcbn0pO1xuUHJvZmlsZVNjaGVtYS5zZXQoXCJ0aW1lc3RhbXBzXCIsIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBtb2RlbHMuUHJvZmlsZSB8fCBtb2RlbChcIlByb2ZpbGVcIiwgUHJvZmlsZVNjaGVtYSk7XG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWxzIiwibW9kZWwiLCJQcm9maWxlU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbXBhbnlfbmFtZSIsImVtYWlsIiwidGVsZXBob25lIiwidXNlcm5hbWUiLCJzZXQiLCJQcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Profile.js\n");

/***/ }),

/***/ "(api)/./pages/api/profils/[id].js":
/*!***********************************!*\
  !*** ./pages/api/profils/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Profile */ \"(api)/./models/Profile.js\");\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { query: { id  } , method  } = req;\n    switch(method){\n        case 'GET':\n            try {\n                console.log(id);\n                const Profiles = await _models_Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n                if (!Profiles) {\n                    return res.status(404).json({\n                        success: false\n                    });\n                }\n                res.status(200).json({\n                    success: true,\n                    data: Profiles\n                });\n            } catch (error) {\n                res.status(404).json({\n                    success: false\n                });\n            }\n            break;\n        case 'PUT':\n            try {\n                const Profiles = await _models_Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, req.body, {\n                    new: true,\n                    runValidators: true\n                });\n                if (!Profiles) {\n                    return res.status(400).json({\n                        success: false\n                    });\n                }\n                res.status(200).json({\n                    success: true,\n                    data: Profiles\n                });\n            } catch (error1) {\n                console.log(error1);\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        case 'DELETE':\n            try {\n                const deletedProfile = await _models_Profile__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteOne({\n                    _id: id\n                });\n                if (!deletedProfile) {\n                    return res.status(400).json({\n                        success: false\n                    });\n                }\n                res.status(200).json({\n                    success: true,\n                    data: {}\n                });\n            } catch (error2) {\n                res.status(400).json({\n                    success: false\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false\n            });\n            break;\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQztnQkFBQSxDQUFDO1lBQ2xELENBQUMsQ0FBQyxLQUFLLEVBQUVDLE1BQUssRUFBRSxDQUFDO2dCQUNiWixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDQztvQkFBQUEsT0FBTyxFQUFFLEtBQUs7Z0JBQUEsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsS0FBSzs7WUFFTFYsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQUFBLE9BQU8sRUFBRSxLQUFLO1lBQUEsQ0FBQztZQUNyQyxLQUFLOztBQUVqQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVtbGUvLi9wYWdlcy9hcGkvcHJvZmlscy9baWRdLmpzPzIzZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0XCI7XG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vLi4vLi4vbW9kZWxzL1Byb2ZpbGVcIjtcblxuZGJDb25uZWN0KCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgcXVlcnk6IHtpZH0sIG1ldGhvZFxuICAgIH0gPSByZXE7XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcbiAgICAgICAgICAgICAgICBjb25zdCBQcm9maWxlcyA9IGF3YWl0IFByb2ZpbGUuZmluZEJ5SWQoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFQcm9maWxlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGE6IFByb2ZpbGVzfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdWNjZXNzOiBmYWxzZX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BVVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFByb2ZpbGVzID0gYXdhaXQgUHJvZmlsZS5maW5kQnlJZEFuZFVwZGF0ZShpZCwgcmVxLmJvZHksIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB0cnVlLCBydW5WYWxpZGF0b3JzOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIVByb2ZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogUHJvZmlsZXN9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnREVMRVRFJzpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZFByb2ZpbGUgPSBhd2FpdCBQcm9maWxlLmRlbGV0ZU9uZSh7X2lkOiBpZH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFkZWxldGVkUHJvZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YToge319KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSlcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJQcm9maWxlIiwicmVxIiwicmVzIiwicXVlcnkiLCJpZCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJQcm9maWxlcyIsImZpbmRCeUlkIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImJvZHkiLCJuZXciLCJydW5WYWxpZGF0b3JzIiwiZGVsZXRlZFByb2ZpbGUiLCJkZWxldGVPbmUiLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/profils/[id].js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profils/[id].js"));
module.exports = __webpack_exports__;

})();