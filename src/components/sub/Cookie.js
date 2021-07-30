"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

// Cookie
// create an instance of universal cookie.
const uCookie = new _universalCookie.default();
/**
 * Warp universal cookie api.
 * @author Hadi Mostafapour
 */

class Cookie {
  static create(cookies) {
    return new _universalCookie.default(cookies);
  }
  /**
   * set a cookie.
   */


  static set(key, value, options) {
    uCookie.set(key, value, options);
  }
  /**
   * remove a cookie.
   */


  static remove(key, options) {
    uCookie.remove(key, options);
  }
  /**
   * get a cookie.
   */


  static get(key) {
    return uCookie.get(key);
  }

}

exports.default = Cookie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb29raWUvaW5kZXguanMiXSwibmFtZXMiOlsidUNvb2tpZSIsIlVuaXZlcnNhbENvb2tpZSIsIkNvb2tpZSIsImNyZWF0ZSIsImNvb2tpZXMiLCJzZXQiLCJrZXkiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJyZW1vdmUiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBOztBQURBO0FBR0E7QUFDQSxNQUFNQSxPQUFPLEdBQUcsSUFBSUMsd0JBQUosRUFBaEI7QUFFQTs7Ozs7QUFJZSxNQUFNQyxNQUFOLENBQWE7QUFFeEIsU0FBT0MsTUFBUCxDQUFjQyxPQUFkLEVBQXVCO0FBQ25CLFdBQU8sSUFBSUgsd0JBQUosQ0FBb0JHLE9BQXBCLENBQVA7QUFDSDtBQUVEOzs7OztBQUdBLFNBQU9DLEdBQVAsQ0FBV0MsR0FBWCxFQUF3QkMsS0FBeEIsRUFBdUNDLE9BQXZDLEVBQXNEO0FBQ2xEUixJQUFBQSxPQUFPLENBQUNLLEdBQVIsQ0FBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0JDLE9BQXhCO0FBQ0g7QUFFRDs7Ozs7QUFHQSxTQUFPQyxNQUFQLENBQWNILEdBQWQsRUFBMkJFLE9BQTNCLEVBQTBDO0FBQ3RDUixJQUFBQSxPQUFPLENBQUNTLE1BQVIsQ0FBZUgsR0FBZixFQUFvQkUsT0FBcEI7QUFDSDtBQUVEOzs7OztBQUdBLFNBQU9FLEdBQVAsQ0FBV0osR0FBWCxFQUFpQztBQUM3QixXQUFPTixPQUFPLENBQUNVLEdBQVIsQ0FBWUosR0FBWixDQUFQO0FBQ0g7O0FBekJ1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbi8vIENvb2tpZVxuaW1wb3J0IFVuaXZlcnNhbENvb2tpZSBmcm9tICd1bml2ZXJzYWwtY29va2llJztcblxuLy8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHVuaXZlcnNhbCBjb29raWUuXG5jb25zdCB1Q29va2llID0gbmV3IFVuaXZlcnNhbENvb2tpZTtcblxuLyoqXG4gKiBXYXJwIHVuaXZlcnNhbCBjb29raWUgYXBpLlxuICogQGF1dGhvciBIYWRpIE1vc3RhZmFwb3VyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZSB7XG5cbiAgICBzdGF0aWMgY3JlYXRlKGNvb2tpZXMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVbml2ZXJzYWxDb29raWUoY29va2llcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IGEgY29va2llLlxuICAgICAqL1xuICAgIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIG9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgdUNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmVtb3ZlIGEgY29va2llLlxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUoa2V5OiBzdHJpbmcsIG9wdGlvbnMpOiB2b2lkIHtcbiAgICAgICAgdUNvb2tpZS5yZW1vdmUoa2V5LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgYSBjb29raWUuXG4gICAgICovXG4gICAgc3RhdGljIGdldChrZXk6IHN0cmluZyk6ID9zdHJpbmcge1xuICAgICAgICByZXR1cm4gdUNvb2tpZS5nZXQoa2V5KVxuICAgIH1cbn0iXX0=