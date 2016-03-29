/*!
 * build.js vundefined
 * (c) 2016 Aaron
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.build = factory());
}(this, function () { 'use strict';

    var babelHelpers = {};

    babelHelpers.classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    babelHelpers.createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    babelHelpers;

    var on = {
        test: 'on',

        acceptStatement: true,

        bind: function bind() {},
        update: function update(handler) {
            this.handler = handler;
            this.el.addEventListener(this.arg, this.handler, "fasle");
        }
    };

    var text = {

        test: 'text',

        bind: function bind() {
            this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
        },

        update: function update(value) {
            this.el[this.attr] = value;
        }
    };

    var directives = {
        on: on,
        text: text
    };

    /**
     * Ue构造器
     * @param {[type]} options [description]
     */

    var Ue = function () {
        function Ue(options) {
            babelHelpers.classCallCheck(this, Ue);

            this._init(options);
        }

        babelHelpers.createClass(Ue, [{
            key: "_init",
            value: function _init(options) {
                options = options || {};
                this.$el = null;

                //初始化空数据
                //通过_initScope方法填充
                this._data = {};
                this._initState();

                //所有指令合集
                this._directives = [];
                //所有观察对象
                this._watchers = [];

                //el存在,开始编译
                if (options.el) {
                    this.$mount(options.el);
                }
                console.log("####", this);
            }
        }, {
            key: "_initState",
            value: function _initState() {}
        }, {
            key: "$mount",
            value: function $mount(el) {
                el = document.querySelector(el);
                this._compile(el);
            }

            /**
             * 开始编译
             * @param  {[type]} el [description]
             * @return {[type]}    [description]
             */

        }, {
            key: "_compile",
            value: function _compile(el) {
                var methods = this.$options.methods;
                if (methods) {
                    for (var key in methods) {
                        this[key] = bind(methods[key], this);
                    }
                }
            }
        }, {
            key: "_initMethods",
            value: function _initMethods() {
                var methods = this.$options.methods;
                if (methods) {
                    for (var key in methods) {
                        this[key] = bind(methods[key], this);
                    }
                }
            }
        }]);
        return Ue;
    }();

    /**
     * Ue构造器扩展
     * 编译步骤,调用this.constructor.options”。
     * @type {Object}
     */


    Ue.options = {
        //指令
        directives: directives
    };

    window.Ue = Ue;

    return Ue;

}));