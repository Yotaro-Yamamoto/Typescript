"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Earth = void 0;
var Earth;
(function (Earth) {
    Earth.RADIUS = 6378.1; //地球の半径(km)
})(Earth || (exports.Earth = Earth = {}));
/*これをEarthという名前でインポートすると、Earth.RADIUSのように名前空間
 Earthのスコープ内で公開されている機能を利用できる。*/
