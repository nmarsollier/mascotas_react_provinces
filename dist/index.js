var mascotas_react_common = require('mascotas_react_common');
var mascotas_react_store = require('mascotas_react_store');

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var getProvinces = function getProvinces() {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(mascotas_react_store.securedAxios().get(mascotas_react_common.environment.backendUrl + "/v1/province")).then(function (res) {
        return Promise.resolve(res.data);
      });
    }, function (err) {
      return Promise.reject(err);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

exports.getProvinces = getProvinces;
//# sourceMappingURL=index.js.map
