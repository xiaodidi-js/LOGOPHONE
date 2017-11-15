  /**
 * Created by SamHong on 2017/11/15.
 */

export default new class Verify {

  constructor() {
  }

  //  验证手机号是否正确： true/false
  isTel(tel) {
    return (/^1[3|4|5|8][0-9]\d{4,8}$/).test(tel);
  }

  isEmail(email) {
    return (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/).test(email);
  }

  //判断是否是object对象
  isObject(value) {
    return !!value && Object.prototype.toString.call(value) === '[object Object]';
  }

  //判断是否是数组
  isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

}
