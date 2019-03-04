(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-component\">\r\n  <app-menu></app-menu>\r\n  <app-server-canvas></app-server-canvas>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-component {\n  display: flex;\n  min-height: 100vh;\n  color: white;\n}\n@media screen and (max-width: 800px) {\n  .app-component {\n    flex-direction: column;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvcmViZWx3ZS93b3JrL21hbHRhbGV0c2dvLWFuZ3VsYXI3L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUFBO0lBQ0Usc0JBQUE7RUNHRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb21wb25lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgY29sb3I6IHdoaXRlO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iLCIuYXBwLWNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYXBwLWNvbXBvbmVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'wesapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _server_canvas_server_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server-canvas/server-canvas.component */ "./src/app/server-canvas/server-canvas.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _server_canvas_server_server_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-canvas/server/server.component */ "./src/app/server-canvas/server/server.component.ts");
/* harmony import */ var _menu_app_item_app_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/app-item/app-item.component */ "./src/app/menu/app-item/app-item.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _menu_state_menu_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu/state/menu.reducer */ "./src/app/menu/state/menu.reducer.ts");
/* harmony import */ var _server_canvas_state_server_canvas_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./server-canvas/state/server-canvas.reducer */ "./src/app/server-canvas/state/server-canvas.reducer.ts");
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_12__["TimeAgoPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _server_canvas_server_canvas_component__WEBPACK_IMPORTED_MODULE_4__["ServerCanvasComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
                _server_canvas_server_server_component__WEBPACK_IMPORTED_MODULE_6__["ServerComponent"],
                _menu_app_item_app_item_component__WEBPACK_IMPORTED_MODULE_7__["AppItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
                    apps: _menu_state_menu_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"],
                    servers: _server_canvas_state_server_canvas_reducer__WEBPACK_IMPORTED_MODULE_11__["reducer"]
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_9__["StoreDevtoolsModule"].instrument({
                    name: 'appwes Devtools',
                    maxAge: 25,
                    logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu/app-item/app-item.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/app-item/app-item.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-item\">\r\n  <div class=\"app-item__bar-color\"\r\n    [style.background-color]=\"app.appColor\"\r\n  ></div>\r\n  <div class=\"app-item__name\">\r\n    {{app.appName}}\r\n  </div>\r\n  <div class=\"app-item__add-remove-container\">\r\n    <i \r\n      class=\"fa fa-minus-circle\"\r\n      (click)=\"removeApp(app.appName)\"\r\n    ></i>\r\n    <i \r\n      class=\"fa fa-plus-circle\"\r\n      [style.color]=\"app.appColor\"\r\n      (click)=\"addApp(app)\"\r\n    ></i>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/menu/app-item/app-item.component.less":
/*!*******************************************************!*\
  !*** ./src/app/menu/app-item/app-item.component.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-item {\n  display: flex;\n  height: 40px;\n  line-height: 40px;\n  background-color: #141414;\n}\n.app-item .app-item__bar-color:after {\n  content: \" \";\n  white-space: pre;\n}\n.app-item .app-item__name {\n  margin-left: 20px;\n}\n.app-item .app-item__add-remove-container {\n  flex-grow: 2;\n  text-align: right;\n  font-size: 25px;\n  margin-right: -8px;\n  z-index: 0;\n}\n@media screen and (max-width: 800px) {\n  .app-item .app-item__add-remove-container {\n    margin-right: 0px;\n  }\n}\n.app-item .app-item__add-remove-container i {\n  margin-left: 5px;\n  cursor: pointer;\n}\n.app-item .app-item__add-remove-container i:first-of-type {\n  opacity: 0.2;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9hcHAtaXRlbS9DOi9Vc2Vycy9yZWJlbHdlL3dvcmsvbWFsdGFsZXRzZ28tYW5ndWxhcjcvc3JjL2FwcC9tZW51L2FwcC1pdGVtL2FwcC1pdGVtLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tZW51L2FwcC1pdGVtL2FwcC1pdGVtLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7QURDSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEVEE7RUFZSSxpQkFBQTtBQ0FKO0FEWkE7RUFlSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQUo7QURDSTtFQUFBO0lBQ0UsaUJBQUE7RUNFSjtBQUNGO0FEeEJBO0VBeUJJLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9tZW51L2FwcC1pdGVtL2FwcC1pdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE0MTQxNDtcbiAgLmFwcC1pdGVtX19iYXItY29sb3Ige1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIH1cbiAgfVxuICAuYXBwLWl0ZW1fX25hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5hcHAtaXRlbV9fYWRkLXJlbW92ZS1jb250YWluZXIge1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtOHB4O1xuICAgIHotaW5kZXg6IDA7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIH1cbiAgfVxuICAuYXBwLWl0ZW1fX2FkZC1yZW1vdmUtY29udGFpbmVyIGl7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICB9XG4gIH1cbn1cbiIsIi5hcHAtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNDE0MTQ7XG59XG4uYXBwLWl0ZW0gLmFwcC1pdGVtX19iYXItY29sb3I6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbn1cbi5hcHAtaXRlbSAuYXBwLWl0ZW1fX25hbWUge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5hcHAtaXRlbSAuYXBwLWl0ZW1fX2FkZC1yZW1vdmUtY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG4gIHotaW5kZXg6IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYXBwLWl0ZW0gLmFwcC1pdGVtX19hZGQtcmVtb3ZlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbi5hcHAtaXRlbSAuYXBwLWl0ZW1fX2FkZC1yZW1vdmUtY29udGFpbmVyIGkge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWl0ZW0gLmFwcC1pdGVtX19hZGQtcmVtb3ZlLWNvbnRhaW5lciBpOmZpcnN0LW9mLXR5cGUge1xuICBvcGFjaXR5OiAwLjI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/app-item/app-item.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/app-item/app-item.component.ts ***!
  \*****************************************************/
/*! exports provided: AppItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppItemComponent", function() { return AppItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _server_canvas_state_server_canvas_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../server-canvas/state/server-canvas.actions */ "./src/app/server-canvas/state/server-canvas.actions.ts");




var AppItemComponent = /** @class */ (function () {
    function AppItemComponent(store) {
        this.store = store;
    }
    AppItemComponent.prototype.ngOnInit = function () {
    };
    AppItemComponent.prototype.addApp = function (app) {
        this.store.dispatch(new _server_canvas_state_server_canvas_actions__WEBPACK_IMPORTED_MODULE_3__["AddApp"](app));
    };
    AppItemComponent.prototype.removeApp = function (appName) {
        this.store.dispatch(new _server_canvas_state_server_canvas_actions__WEBPACK_IMPORTED_MODULE_3__["RemoveApp"](appName));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AppItemComponent.prototype, "app", void 0);
    AppItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-item',
            template: __webpack_require__(/*! ./app-item.component.html */ "./src/app/menu/app-item/app-item.component.html"),
            styles: [__webpack_require__(/*! ./app-item.component.less */ "./src/app/menu/app-item/app-item.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AppItemComponent);
    return AppItemComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"menu\">\r\n  <div class=\"menu__add-remove-container\">\r\n    <div \r\n      class=\"menu__add-remove-container-inner\"\r\n      (click)=\"addServer()\">\r\n      <i class=\"fa fa-plus-circle\"></i>\r\n      <span>Add Server</span>\r\n    </div>\r\n    <div \r\n      class=\"menu__add-remove-container-inner\"\r\n      (click)=\"removeServer()\">\r\n      <i class=\"fa fa-minus-circle\"></i>\r\n      <span>Destroy</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"menu__apps-container\">\r\n    <p class=\"menu__apps-container__title\">Available Apps</p>\r\n    <div class=\"menu__apps-container__content\">\r\n      <app-app-item \r\n        *ngFor='let app of apps'\r\n        [app]=\"app\"\r\n      >\r\n      </app-app-item>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.less":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 1;\n  background-color: #1e1e1e;\n  flex-basis: 300px;\n}\n.menu {\n  display: flex;\n  justify-content: center;\n  margin-top: 30px;\n  flex-direction: column;\n}\n.menu .menu__add-remove-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.menu .menu__add-remove-container-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 10px;\n}\n.menu .menu__add-remove-container i {\n  font-size: 50px;\n  cursor: pointer;\n  outline: none;\n}\n.menu .menu__add-remove-container-inner span {\n  margin-top: 5px;\n  font-size: 12px;\n}\n.menu__apps-container {\n  margin-top: 50px;\n}\n@media screen and (max-width: 800px) {\n  .menu__apps-container {\n    margin-top: 0px;\n  }\n}\n.menu__apps-container .menu__apps-container__title {\n  margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOi9Vc2Vycy9yZWJlbHdlL3dvcmsvbWFsdGFsZXRzZ28tYW5ndWxhcjcvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRExBO0VBTUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEVkE7RUFXSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNFSjtBRGhCQTtFQWlCSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNFSjtBRHJCQTtFQXNCSSxlQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEQ0E7RUFDRSxnQkFBQTtBQ0NGO0FEQUU7RUFBQTtJQUNFLGVBQUE7RUNHRjtBQUNGO0FEUEE7RUFNSSxpQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWdyb3c6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIGZsZXgtYmFzaXM6IDMwMHB4O1xufVxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLm1lbnVfX2FkZC1yZW1vdmUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5tZW51X19hZGQtcmVtb3ZlLWNvbnRhaW5lci1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cbiAgLm1lbnVfX2FkZC1yZW1vdmUtY29udGFpbmVyIGkge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBvdXRsaW5lOm5vbmU7XG4gIH1cbiAgLm1lbnVfX2FkZC1yZW1vdmUtY29udGFpbmVyLWlubmVyIHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbi5tZW51X19hcHBzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC5tZW51X19hcHBzLWNvbnRhaW5lcl9fdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbiAgZmxleC1iYXNpczogMzAwcHg7XG59XG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1lbnUgLm1lbnVfX2FkZC1yZW1vdmUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tZW51IC5tZW51X19hZGQtcmVtb3ZlLWNvbnRhaW5lci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLm1lbnUgLm1lbnVfX2FkZC1yZW1vdmUtY29udGFpbmVyIGkge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tZW51IC5tZW51X19hZGQtcmVtb3ZlLWNvbnRhaW5lci1pbm5lciBzcGFuIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWVudV9fYXBwcy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1lbnVfX2FwcHMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbn1cbi5tZW51X19hcHBzLWNvbnRhaW5lciAubWVudV9fYXBwcy1jb250YWluZXJfX3RpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state_menu_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/menu.reducer */ "./src/app/menu/state/menu.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _server_canvas_state_server_canvas_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../server-canvas/state/server-canvas.actions */ "./src/app/server-canvas/state/server-canvas.actions.ts");





var MenuComponent = /** @class */ (function () {
    function MenuComponent(store) {
        this.store = store;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_state_menu_reducer__WEBPACK_IMPORTED_MODULE_2__["getApps"])).subscribe(function (apps) { return _this.apps = apps; });
    };
    MenuComponent.prototype.addServer = function (value) {
        this.store.dispatch(new _server_canvas_state_server_canvas_actions__WEBPACK_IMPORTED_MODULE_4__["AddServer"]());
    };
    MenuComponent.prototype.removeServer = function (value) {
        this.store.dispatch(new _server_canvas_state_server_canvas_actions__WEBPACK_IMPORTED_MODULE_4__["RemoveServer"]());
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.less */ "./src/app/menu/menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/state/menu.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/menu/state/menu.reducer.ts ***!
  \********************************************/
/*! exports provided: getApps, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApps", function() { return getApps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var initialState = [{
        appName: 'Hadoop',
        appColor: 'blue'
    }, {
        appName: 'Rails',
        appColor: 'red'
    }, {
        appName: 'Chronos',
        appColor: 'pink'
    }, {
        appName: 'Storm',
        appColor: 'green'
    }, {
        appName: 'Spark',
        appColor: 'yellow'
    }];
var getAppsFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('apps');
var getApps = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAppsFeatureState, function (state) { return state; });
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/server-canvas/server-canvas.component.html":
/*!************************************************************!*\
  !*** ./src/app/server-canvas/server-canvas.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <strong>\r\n    <h2>Server Canvas</h2>\r\n  </strong>\r\n</header>\r\n<br>\r\n<div class=\"server-canvas__wrapper\">  \r\n  <app-server\r\n    *ngFor='let server of servers'\r\n    [server]=\"server\"\r\n  ></app-server>\r\n</div>"

/***/ }),

/***/ "./src/app/server-canvas/server-canvas.component.less":
/*!************************************************************!*\
  !*** ./src/app/server-canvas/server-canvas.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 3;\n  background-color: black;\n  padding-left: 50px;\n  flex-basis: 850px;\n}\n@media screen and (max-width: 800px) {\n  :host {\n    padding-left: 0px;\n  }\n}\n.server-canvas__wrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n@media screen and (max-width: 800px) {\n  .server-canvas__wrapper {\n    justify-content: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyLWNhbnZhcy9DOi9Vc2Vycy9yZWJlbHdlL3dvcmsvbWFsdGFsZXRzZ28tYW5ndWxhcjcvc3JjL2FwcC9zZXJ2ZXItY2FudmFzL3NlcnZlci1jYW52YXMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NlcnZlci1jYW52YXMvc2VydmVyLWNhbnZhcy5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBSUEsaUJBQUE7QUNGRjtBRERFO0VBQUE7SUFDRSxpQkFBQTtFQ0lGO0FBQ0Y7QUREQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDR0Y7QURGRTtFQUFBO0lBQ0UsdUJBQUE7RUNLRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2VydmVyLWNhbnZhcy9zZXJ2ZXItY2FudmFzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWdyb3c6IDM7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgZmxleC1iYXNpczogODUwcHg7XG59XG4uc2VydmVyLWNhbnZhc19fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufSIsIjpob3N0IHtcbiAgZmxleC1ncm93OiAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmbGV4LWJhc2lzOiA4NTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuLnNlcnZlci1jYW52YXNfX3dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2VydmVyLWNhbnZhc19fd3JhcHBlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/server-canvas/server-canvas.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/server-canvas/server-canvas.component.ts ***!
  \**********************************************************/
/*! exports provided: ServerCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerCanvasComponent", function() { return ServerCanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _state_server_canvas_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/server-canvas.reducer */ "./src/app/server-canvas/state/server-canvas.reducer.ts");




var ServerCanvasComponent = /** @class */ (function () {
    function ServerCanvasComponent(store) {
        this.store = store;
    }
    ServerCanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_state_server_canvas_reducer__WEBPACK_IMPORTED_MODULE_3__["getServers"])).subscribe(function (apps) { return _this.servers = apps; });
    };
    ServerCanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-canvas',
            template: __webpack_require__(/*! ./server-canvas.component.html */ "./src/app/server-canvas/server-canvas.component.html"),
            styles: [__webpack_require__(/*! ./server-canvas.component.less */ "./src/app/server-canvas/server-canvas.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ServerCanvasComponent);
    return ServerCanvasComponent;
}());



/***/ }),

/***/ "./src/app/server-canvas/server/server.component.html":
/*!************************************************************!*\
  !*** ./src/app/server-canvas/server/server.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"server\">\r\n  <div \r\n    class=\"server__item\"\r\n    [style.background-color]=\"serverItem.appColor\"\r\n    *ngFor='let serverItem of server.apps'>\r\n    <div class=\"server__item-title\">\r\n      {{serverItem.appName.substr(0,2)}}\r\n    </div>\r\n    <div class=\"server__item-name\">\r\n      {{serverItem.appName}}\r\n    </div>\r\n    <div class=\"server__added\">\r\n      {{serverItem.dateAdded | timeAgo}}\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/server-canvas/server/server.component.less":
/*!************************************************************!*\
  !*** ./src/app/server-canvas/server/server.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-basis: 250px;\n  margin: 0px 10px 10px 0;\n}\n.server {\n  height: 250px;\n  background-color: #1e1e1e;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n}\n.server .server__item {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.server .server__item-title {\n  font-size: 50px;\n}\n.server .server__added {\n  font-size: 10px;\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmVyLWNhbnZhcy9zZXJ2ZXIvQzovVXNlcnMvcmViZWx3ZS93b3JrL21hbHRhbGV0c2dvLWFuZ3VsYXI3L3NyYy9hcHAvc2VydmVyLWNhbnZhcy9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zZXJ2ZXItY2FudmFzL3NlcnZlci9zZXJ2ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QUROQTtFQU9JLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUo7QURiQTtFQWNJLGVBQUE7QUNFSjtBRGhCQTtFQWlCSSxlQUFBO0VBQ0EsWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2VydmVyLWNhbnZhcy9zZXJ2ZXIvc2VydmVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWJhc2lzOiAyNTBweDtcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4IDA7XG59XG4uc2VydmVye1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5zZXJ2ZXJfX2l0ZW0ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc2VydmVyX19pdGVtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cbiAgLnNlcnZlcl9fYWRkZWQge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIGJsdWUgLCBDeWFuKTtcbn0iLCI6aG9zdCB7XG4gIGZsZXgtYmFzaXM6IDI1MHB4O1xuICBtYXJnaW46IDBweCAxMHB4IDEwcHggMDtcbn1cbi5zZXJ2ZXIge1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2VydmVyIC5zZXJ2ZXJfX2l0ZW0ge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlcnZlciAuc2VydmVyX19pdGVtLXRpdGxlIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuLnNlcnZlciAuc2VydmVyX19hZGRlZCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/server-canvas/server/server.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/server-canvas/server/server.component.ts ***!
  \**********************************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
    }
    ServerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServerComponent.prototype, "server", void 0);
    ServerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/server-canvas/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.less */ "./src/app/server-canvas/server/server.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/server-canvas/state/server-canvas.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/server-canvas/state/server-canvas.actions.ts ***!
  \**************************************************************/
/*! exports provided: ServerActionTypes, AddServer, RemoveServer, AddApp, RemoveApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerActionTypes", function() { return ServerActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddServer", function() { return AddServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveServer", function() { return RemoveServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddApp", function() { return AddApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveApp", function() { return RemoveApp; });
var ServerActionTypes;
(function (ServerActionTypes) {
    ServerActionTypes["AddServer"] = "[Servers] Add Server";
    ServerActionTypes["RemoveServer"] = "[Servers] Remove Server";
    ServerActionTypes["AddApp"] = "[Apps] Add App";
    ServerActionTypes["RemoveApp"] = "[Apps] Remove App";
})(ServerActionTypes || (ServerActionTypes = {}));
var AddServer = /** @class */ (function () {
    function AddServer() {
        this.type = ServerActionTypes.AddServer;
    }
    return AddServer;
}());

var RemoveServer = /** @class */ (function () {
    function RemoveServer() {
        this.type = ServerActionTypes.RemoveServer;
    }
    return RemoveServer;
}());

var AddApp = /** @class */ (function () {
    function AddApp(payload) {
        this.payload = payload;
        this.type = ServerActionTypes.AddApp;
        payload.dateAdded = new Date();
    }
    return AddApp;
}());

var RemoveApp = /** @class */ (function () {
    function RemoveApp(appName) {
        this.appName = appName;
        this.type = ServerActionTypes.RemoveApp;
    }
    return RemoveApp;
}());



/***/ }),

/***/ "./src/app/server-canvas/state/server-canvas.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/server-canvas/state/server-canvas.reducer.ts ***!
  \**************************************************************/
/*! exports provided: getServers, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServers", function() { return getServers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _server_canvas_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-canvas.actions */ "./src/app/server-canvas/state/server-canvas.actions.ts");


var initialState = [{
        apps: [{
                appName: 'Storm',
                appColor: 'red',
                dateAdded: new Date()
            }, {
                appName: 'Rails',
                appColor: 'blue',
                dateAdded: new Date('05/02/2015')
            }]
    },
    {
        apps: [{
                appName: 'Hadoop',
                appColor: 'pink',
                dateAdded: new Date()
            }]
    }, {
        apps: []
    }];
var getServersState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('servers');
var getServers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getServersState, function (state) { return state; });
var addAppOnFirstServerAvailable = function (state, app) {
    for (var x = 0; x <= state.length - 1; x++) {
        if (state[x].apps.length < 2) {
            state[x].apps.push(app);
            return state;
        }
    }
    state.push({
        apps: [app]
    });
    return state;
};
var removeAppFromLastServerPossible = function (state, appName) {
    for (var x = state.length - 1; x >= 0; x--) {
        for (var y = state[x].apps.length - 1; y >= 0; y--) {
            if (state[x].apps[y].appName === appName) {
                state[x].apps.splice(y, 1);
                return state;
            }
        }
    }
    return state;
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _server_canvas_actions__WEBPACK_IMPORTED_MODULE_1__["ServerActionTypes"].AddServer:
            return state.concat([
                { apps: [] }
            ]);
        case _server_canvas_actions__WEBPACK_IMPORTED_MODULE_1__["ServerActionTypes"].RemoveServer:
            return state.slice(0, -1).slice();
        case _server_canvas_actions__WEBPACK_IMPORTED_MODULE_1__["ServerActionTypes"].AddApp:
            return addAppOnFirstServerAvailable(state, action.payload).slice();
        case _server_canvas_actions__WEBPACK_IMPORTED_MODULE_1__["ServerActionTypes"].RemoveApp:
            return removeAppFromLastServerPossible(state, action.appName).slice();
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rebelwe\work\maltaletsgo-angular7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map