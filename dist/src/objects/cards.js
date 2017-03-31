"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 31.03.2017.
 */
var Cards = function () {
    function Cards() {
        _classCallCheck(this, Cards);

        this.arr = [];
    }

    /**
     *
     * @param {Array} cards массив карточек
     * @return {*} возвращает ошибку, если появилась
     */


    _createClass(Cards, [{
        key: "init",
        value: function init(cards) {
            this.arr = cards;
        }

        /**
         * Сортировка карточек по пунктам отправления и назначения
         */

    }, {
        key: "sort",
        value: function sort() {}
    }]);

    return Cards;
}();

exports.default = Cards;
//# sourceMappingURL=cards.js.map