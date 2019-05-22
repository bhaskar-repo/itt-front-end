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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n<router-outlet></router-outlet>"

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
        this.title = 'ist-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _issue_issue_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./issue/issue.module */ "./src/app/issue/issue.module.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"],
                _issue_issue_module__WEBPACK_IMPORTED_MODULE_11__["IssueModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    timeOut: 1500,
                    preventDuplicates: true,
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'api/v1/users/login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'api/v1/users/login', pathMatch: 'full' },
                    { path: '*', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], pathMatch: 'full' },
                    { path: '**', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/globalConfig.ts":
/*!*********************************!*\
  !*** ./src/app/globalConfig.ts ***!
  \*********************************/
/*! exports provided: GlobalConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConfig", function() { return GlobalConfig; });
var GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    GlobalConfig.url = "http://api.testissuetracking.com";
    return GlobalConfig;
}());



/***/ }),

/***/ "./src/app/issue/create-issue/create-issue.component.css":
/*!***************************************************************!*\
  !*** ./src/app/issue/create-issue/create-issue.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    background-color: #dee2e6;\n}\n\n.table-width {\n    width: 100%;\n}\n\n.wrapper {\n    margin: auto;\n    top:10vh;\n}\n\n.backgroundGradient {\n    background: #f2f3f7;\n}\n\n.ck-editor__editable_decoupled {\n    min-height: 500px !important;\n}\n\n@media only screen and (max-width: 450px) and (min-width: 200px) {\n    .table-width {\n        width: 50%;\n    }\n}\n\n@media only screen and (max-width: 200px) {\n    .table-width {\n        width: 150px;\n    }\n}\n\n@media only screen and (max-width: 150px) {\n    .table-width {\n        width: 100px;\n    }\n}\n\n@media only screen and (max-width: 100px) {\n    .table-width {\n        width: 70px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvY3JlYXRlLWlzc3VlL2NyZWF0ZS1pc3N1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWjs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlL2NyZWF0ZS1pc3N1ZS9jcmVhdGUtaXNzdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xufVxuXG4udGFibGUtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ud3JhcHBlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDoxMHZoO1xufVxuXG5cbi5iYWNrZ3JvdW5kR3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbi5jay1lZGl0b3JfX2VkaXRhYmxlX2RlY291cGxlZCB7XG4gICAgbWluLWhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkgYW5kIChtaW4td2lkdGg6IDIwMHB4KSB7XG4gICAgLnRhYmxlLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwcHgpIHtcbiAgICAudGFibGUtd2lkdGgge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MHB4KSB7XG4gICAgLnRhYmxlLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDBweCkge1xuICAgIC50YWJsZS13aWR0aCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/issue/create-issue/create-issue.component.html":
/*!****************************************************************!*\
  !*** ./src/app/issue/create-issue/create-issue.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width , initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <app-header [userName]=\"userName\" [breadcrumb]=\"breadcrumb\"></app-header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col backgroundGradient wrapper ml-3 mr-3\">\n        <form #createForm=\"ngForm\" name=\"descForm\" enctype=\"multipart/form-data\">\n          <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n              <mat-form-field style=\"width:50%\">\n                <input name=\"title\" matInput placeholder=\"Title\" [(ngModel)]=\"title\" #titletArr=\"ngModel\" required>\n                <mat-error *ngIf=\"titletArr.invalid\">Title is required</mat-error>\n              </mat-form-field>\n\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <mat-select name=\"assignee\" placeholder=\"Assignee\" name=\"userId\" [(ngModel)]=\"userId\" #assigneeAttr=\"ngModel\"\n                  required>\n                  <mat-option *ngFor=\"let assignee of assignees\" [value]=\"assignee.userId\" (click)=onChange(assignee)>{{assignee.userName}}\n\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"assigneeAttr.invalid\">Assignee is required</mat-error>\n              </mat-form-field>\n\n            </div>\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" name=\"status\" [(ngModel)]=\"issueStatus\" #statusAtttr=\"ngModel\"\n                  required>\n                  <mat-option *ngFor=\"let status of allStatus\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"statusAtttr.invalid\">Status is required</mat-error>\n              </mat-form-field>\n\n            </div>\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <mat-select placeholder=\"Module Name\" name=\"moduleId\" [(ngModel)]=\"moduleName\" #moduleAtttr=\"ngModel\"\n                  required>\n                  <mat-option *ngFor=\"let module of modules\" [value]=\"module\">{{module}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"moduleAtttr.invalid\">Module Name is required</mat-error>\n              </mat-form-field>\n\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-4\">\n              <mat-form-field>\n                <mat-select name=\"priority\" placeholder=\"Priority\" name=\"priority\" [(ngModel)]=\"priority\" #priorityAttr=\"ngModel\"\n                  required>\n                  <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">{{priority}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"priorityAttr.invalid\">Priority is required</mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"form-group col-8\">\n              <mat-form-field style=\"width:50%\">\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" [(ngModel)]=\"comments\" #commnetsAttr=\"ngModel\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"editor\">Description *</label>\n\n              <ckeditor id=\"editor\" [editor]=\"editor\" (ready)=\"onReady($event)\" [(ngModel)]=\"description\" required\n                #desc=\"ngModel\" name=\"description\"></ckeditor>\n\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <input type=\"file\" name=\"fileName\" single ng2FileSelect [uploader]=\"uploader\">\n            </div>\n            <div class=\"form-group col\" *ngIf=\"uploader.queue.length > 0\">\n              <mat-progress-bar mode=\"determinate\" value=\"{{uploader.queue[0].progress}}\"></mat-progress-bar>\n            </div>\n\n\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\" *ngIf=\"uploader.queue.length > 0\">\n              <button mat-raised-button color=\"primary\" [disabled]=\"createForm.form.invalid\" (click)=\"uploader.queue[0].upload()\">upload</button>\n            </div>\n\n            <div class=\"form-group col\" *ngIf=\"uploader.queue.length > 0\">\n              <button class=\"btn btn-danger\" [disabled]=\"createForm.form.invalid\" (click)=\"uploader.queue[0].remove()\">remove</button>\n            </div>\n            <div class=\"form-group col-4\" *ngIf=\"uploader.queue.length == 0\">\n\n            </div>\n            <div class=\"form-group col-8 d-flex justify-content-end\">\n              <button mat-raised-button color=\"primary\" (click)=\"createNewIssue()\" [disabled]=\"createForm.form.invalid || uploader.isUploading\">Submit</button>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n\n  </div>\n\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/issue/create-issue/create-issue.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/issue/create-issue/create-issue.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIssueComponent", function() { return CreateIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issueservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../issueservice.service */ "./src/app/issue/issueservice.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");









var CreateIssueComponent = /** @class */ (function () {
    function CreateIssueComponent(_issueService, _toastr, _route, _detector) {
        var _this = this;
        this._issueService = _issueService;
        this._toastr = _toastr;
        this._route = _route;
        this._detector = _detector;
        this.description = ' ';
        this.allStatus = ['backlog', 'in-progress', 'in-test', 'done'];
        this.priorities = ['Critical', 'Important', 'Incidental', 'Moderate'];
        this.assignees = [];
        this.editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__;
        this.data = new FormData();
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName');
        this.breadcrumb = [
            {
                link: "/api/v1/issues/all",
                value: "home"
            },
            {
                link: "/api/v1/issues/create",
                value: "create"
            }
        ];
        this.attchMentList = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploader"]({ url: src_app_globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].url + "/api/v1/issues/upload?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') });
        this.modules = ['MODULE 1', 'MODULE 2'];
        this.onChange = function (assignee) {
            _this.assigneeName = assignee.userName;
        };
        /**
         * @author Bhaskar Pawar
         * @description loads initial data
         */
        this.loadCreationData = function () {
            _this._issueService.loadData().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.assignees = apiResponse.data;
                }
                else if (apiResponse.status === 201) {
                    _this._toastr.info("" + apiResponse.message, "Info");
                }
                else {
                    _this._toastr.error("" + apiResponse.message, "Error");
                }
            });
        }; // end of loadCreationData
        /**
         * @author Bhaskar Pawar
         * @description This is to create a new issue and save to the database
         */
        this.saveIssuesData = function (fileName, fileLocation) {
            var data = {
                title: _this.title,
                description: _this.description,
                comments: _this.comments,
                reporter: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName'),
                reporterUserId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'),
                assignee: _this.userId,
                assigneeName: _this.assigneeName,
                status: _this.issueStatus,
                priority: _this.priority,
                createdBy: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'),
                createdOn: Date.now(),
                lastUpdateBy: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'),
                lastUpdatedOn: Date.now(),
                fileName: fileName,
                fileLocation: fileLocation,
                moduleName: _this.moduleName
            };
            _this._issueService.createIssue(data).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this._toastr.success("" + apiResponse.message, "Success");
                    setTimeout(function () {
                        _this._route.navigate(['/api/v1/issues/all']);
                    }, 1000);
                }
                else if (apiResponse.status === 201) {
                    _this._toastr.info("" + apiResponse.message, "Info");
                }
                else {
                    _this._toastr.error("" + apiResponse.messsage, "Error");
                }
            });
        }; //end of save issues data
        this.createNewIssue = function () {
            _this.saveIssuesData(_this.fileName, _this.fileLocation);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var fileData = JSON.parse(response);
            _this.fileLocation = fileData.data.fileLocation;
            _this.fileName = fileData.data.fileName;
        };
    }
    CreateIssueComponent.prototype.ngOnInit = function () {
        this.loadCreationData();
    };
    CreateIssueComponent.prototype.ngAfterViewInit = function () {
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
        });
    };
    //ckeditor initialization
    CreateIssueComponent.prototype.onReady = function (editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    };
    CreateIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-issue',
            template: __webpack_require__(/*! ./create-issue.component.html */ "./src/app/issue/create-issue/create-issue.component.html"),
            styles: [__webpack_require__(/*! ./create-issue.component.css */ "./src/app/issue/create-issue/create-issue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issueservice_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CreateIssueComponent);
    return CreateIssueComponent;
}());



/***/ }),

/***/ "./src/app/issue/edit-issue/edit-issue.component.css":
/*!***********************************************************!*\
  !*** ./src/app/issue/edit-issue/edit-issue.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    background-color: #dee2e6;\n}\n\n.table-width {\n    width: 100%;\n}\n\n.background {\n    background: #f2f3f7;\n}\n\n.wrapper {\n    margin: auto;\n    top:10vh;\n}\n\n@media only screen and (max-width: 450px) and (min-width: 200px) {\n    .table-width {\n        width: 50%;\n    }\n}\n\n@media only screen and (max-width: 200px) {\n    .table-width {\n        width: 150px;\n    }\n}\n\n@media only screen and (max-width: 150px) {\n    .table-width {\n        width: 100px;\n    }\n}\n\n@media only screen and (max-width: 100px) {\n    .table-width {\n        width: 70px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvZWRpdC1pc3N1ZS9lZGl0LWlzc3VlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUvZWRpdC1pc3N1ZS9lZGl0LWlzc3VlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcbn1cblxuLnRhYmxlLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbi53cmFwcGVyIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOjEwdmg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIGFuZCAobWluLXdpZHRoOiAyMDBweCkge1xuICAgIC50YWJsZS13aWR0aCB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDIwMHB4KSB7XG4gICAgLnRhYmxlLXdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTBweCkge1xuICAgIC50YWJsZS13aWR0aCB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwcHgpIHtcbiAgICAudGFibGUtd2lkdGgge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/issue/edit-issue/edit-issue.component.html":
/*!************************************************************!*\
  !*** ./src/app/issue/edit-issue/edit-issue.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width , initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <app-header [userName]=\"userName\" [breadcrumb]=\"breadcrumb\"></app-header>\n  <div class=\"container\">\n    <div class=\"row\" *ngIf=\"currentIssue\">\n      <div class=\"col background wrapper ml-3 mr-3\">\n        <form #editForm=\"ngForm\" name=\"descForm\" enctype=\"multipart/form-data\">\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <input name=\"title\" matInput placeholder=\"Title\" [(ngModel)]=\"currentIssue.title\" #titletArr=\"ngModel\"\n                  required>\n                  <mat-error *ngIf=\"titletArr.invalid\">Title is required</mat-error>\n              </mat-form-field>\n              \n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <mat-select name=\"assignee\" placeholder=\"Assignee\" name=\"userId\" [(ngModel)]=\"currentIssue.assignee\"\n                  #assigneeAttr=\"ngModel\" required>\n                  <mat-option *ngFor=\"let assignee of assignees\" [value]=\"assignee.userId\" (click)=onChangeAssignee(assignee)>{{assignee.userName}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"assigneeAttr.invalid\">Assignee is required</mat-error>\n              </mat-form-field>\n              \n            </div>\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <mat-select placeholder=\"Status\" name=\"status\" [(ngModel)]=\"currentIssue.status\" #statusAtttr=\"ngModel\"\n                  required>\n                  <mat-option *ngFor=\"let status of allStatus\" [value]=\"status\">{{status}}</mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"statusAtttr.invalid\">Status is required</mat-error>\n              </mat-form-field>\n             \n            </div>\n            <div class=\"form-group col\">\n              <mat-form-field>\n                <mat-select placeholder=\"Module Name\" name=\"moduleId\" [(ngModel)]=\"currentIssue.moduleName\"\n                  #moduleAtttr=\"ngModel\" required>\n                  <mat-option *ngFor=\"let module of modules\" [value]=\"module\">{{module}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"moduleAtttr.invalid\">Module Name is required</mat-error>\n              </mat-form-field>\n              \n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-4\">\n              <mat-form-field>\n                <mat-select name=\"priority\" placeholder=\"Priority\" name=\"priority\" [(ngModel)]=\"currentIssue.priority\"\n                  #priorityAttr=\"ngModel\" required>\n                  <mat-option *ngFor=\"let priority of priorities\" [value]=\"priority\">{{priority}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"priorityAttr.invalid\">Priority is required</mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"form-group col-8\">\n              <mat-form-field style=\"width:50%\">\n                <textarea matInput placeholder=\"Comments\" name=\"comments\" [(ngModel)]=\"currentIssue.comments\"\n                  #commnetsAttr=\"ngModel\"></textarea>\n              </mat-form-field>\n            </div>\n          </div>\n         \n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <label for=\"ck\">Description *</label>\n              <ckeditor [editor]=\"editor\" (ready)=\"onReady($event)\" [(ngModel)]=\"currentIssue.description\" required\n                #desc=\"ngModel\" name=\"description\"></ckeditor>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col\">\n              <input type=\"file\" name=\"fileName\" single ng2FileSelect [uploader]=\"uploader\">\n            </div>\n            <div class=\"form-group col\" *ngIf=\"uploader.queue.length > 0\" style=\"width: 30%\">\n                <mat-progress-bar mode=\"determinate\" value=\"{{uploader.queue[0].progress}}\"></mat-progress-bar>\n            </div>\n            \n          </div>\n          <div class=\"form-row\">\n              <div class=\"form-group col\" *ngIf=\"uploader.queue.length > 0\">\n                  <button mat-raised-button color=\"primary\" (click)=\"uploader.queue[0].upload()\">upload</button>\n                </div>\n    \n                <div class=\"form-group col\" *ngIf=\"uploader.queue.length > 0\">\n                  <button class=\"btn btn-danger\" color=\"primary\" (click)=\"uploader.queue[0].remove()\">remove</button>\n                </div>\n                \n                <div class=\"form-group col-8\">\n\n                </div>\n                \n                <div class=\"form-group col d-flex justify-content-end\">\n                  <button mat-raised-button color=\"primary\" (click)=\"editIssue()\"\n                    [disabled]=\"editForm.form.invalid || uploader.isUploading\">Submit</button>\n                </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/issue/edit-issue/edit-issue.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/issue/edit-issue/edit-issue.component.ts ***!
  \**********************************************************/
/*! exports provided: EditIssueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIssueComponent", function() { return EditIssueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-decoupled-document */ "./node_modules/@ckeditor/ckeditor5-build-decoupled-document/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _issueservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../issueservice.service */ "./src/app/issue/issueservice.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../socket.service */ "./src/app/issue/socket.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_globalConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation.service */ "./src/app/issue/validation.service.ts");











var EditIssueComponent = /** @class */ (function () {
    function EditIssueComponent(_issueService, _toastr, _route, _param, _socketService, _validationService) {
        var _this = this;
        this._issueService = _issueService;
        this._toastr = _toastr;
        this._route = _route;
        this._param = _param;
        this._socketService = _socketService;
        this._validationService = _validationService;
        this.allStatus = ['backlog', 'in-progress', 'in-test', 'done'];
        this.priorities = ['Critical', 'Important', 'Incidental', 'Moderate'];
        this.assignees = [];
        this.attchMentList = [];
        this.editor = _ckeditor_ckeditor5_build_decoupled_document__WEBPACK_IMPORTED_MODULE_2__;
        this.data = new FormData();
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName');
        this.breadcrumb = [];
        this.userIssues = [];
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({ url: src_app_globalConfig__WEBPACK_IMPORTED_MODULE_9__["GlobalConfig"].url + "/api/v1/issues/upload?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') });
        this.modules = ['MODULE 1', 'MODULE 2'];
        this.onChange = function (event) {
            var file = event.target.files[0];
            _this.data.append('file', file, file.name);
        };
        this.onChangeAssignee = function (assignee) {
            _this.assigneeName = assignee.userName;
        };
        /**
         * @author Bhaskar Pawar
         * @description loads initial data
         */
        this.loadUpdationData = function () {
            _this._issueService.loadData().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.assignees = apiResponse.data;
                }
                else if (apiResponse.status === 201) {
                    _this._toastr.info("" + apiResponse.message, "Info");
                }
                else {
                    _this._toastr.error("" + apiResponse.message, "Error");
                }
            });
        }; // end of loadCreationData
        /**
         * @description This will fetch the selected issue information
         * @author Bhaskar Pawar
         */
        this.getSingleIssue = function () {
            var issueId = _this._param.snapshot.paramMap.get('issueId');
            _this.breadcrumb = [
                {
                    link: "/api/v1/issues/all",
                    value: "home"
                },
                {
                    link: "/api/v1/issues/" + issueId + "/edit",
                    value: "edit"
                }
            ];
            _this._issueService.getSingleIssue(issueId).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.oldValues = {
                        title: apiResponse.data.title,
                        userName: apiResponse.data.userName,
                        status: apiResponse.data.status,
                        moduleName: apiResponse.data.moduleName,
                        priority: apiResponse.data.priority,
                        comments: apiResponse.data.comments,
                        description: apiResponse.data.description,
                        fileLocation: apiResponse.data.fileLocation
                    };
                    _this.oldAssignee = apiResponse.data.assignee;
                    _this.currentIssue = apiResponse.data;
                }
                else {
                    _this._toastr.error("" + apiResponse.message, "Error");
                }
            });
        }; //end of single issue
        /**'
         * @description This is to edit a issue and save to the database
         * @author Bhaskar Pawar
         */
        this.editIssuesData = function (fileName, fileLocation) {
            var issueId = _this._param.snapshot.paramMap.get('issueId');
            var isWatch = true;
            if (_this.assigneeName === undefined) {
                _this.assigneeName = _this.currentIssue.userName;
                isWatch = _this.currentIssue.isWatch;
            }
            else {
                isWatch = false;
                setTimeout(function () {
                    _this._socketService.leaveThisRoom(issueId);
                });
            }
            var data = {
                title: _this.currentIssue.title,
                description: _this.currentIssue.description,
                comments: _this.currentIssue.comments,
                assignee: _this.currentIssue.assignee,
                assigneeName: _this.assigneeName,
                status: _this.currentIssue.status,
                lastUpdateBy: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'),
                fileName: fileName,
                fileLocation: fileLocation,
                moduleName: _this.currentIssue.moduleName,
                priority: _this.currentIssue.priority,
                oldAssignee: _this.oldAssignee,
                isWatch: isWatch
            };
            _this.auditString = _this._validationService.checkForChanges(_this.oldValues, _this.currentIssue, _this.assigneeName, fileLocation);
            if (_this.auditString === '') {
                _this._toastr.info('you have nothing to save !', 'Info');
            }
            else {
                _this._issueService.editIssue(data, issueId).subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this._toastr.success("" + apiResponse.message, "Success");
                        setTimeout(function () {
                            _this._route.navigate(['/api/v1/issues/all']);
                        }, 1000);
                        var issueData_1 = {
                            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'),
                            issueId: issueId,
                            title: data.title,
                            userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userName'),
                            auditString: _this.auditString
                        };
                        setTimeout(function () {
                            _this._socketService.update(issueData_1);
                        }, 1000);
                    }
                    else if (apiResponse.status === 201) {
                        _this._toastr.info("" + apiResponse.message, "Info");
                    }
                    else {
                        _this._toastr.error("" + apiResponse.messsage, "Error");
                    }
                });
            }
        }; //end of save edited issues data
        /**
         * @author Bhaskar Pawar
         * @description to update the issue information
         */
        this.editIssue = function () {
            _this.editIssuesData(_this.fileName, _this.fileLocation);
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var fileData = JSON.parse(response);
            _this.fileLocation = fileData.data.fileLocation;
            _this.fileName = fileData.data.fileName;
        };
    }
    EditIssueComponent.prototype.ngOnInit = function () {
        this.loadUpdationData();
        this.getSingleIssue();
    };
    EditIssueComponent.prototype.ngAfterViewInit = function () {
        this.uploader.onAfterAddingFile = (function (item) {
            item.withCredentials = false;
        });
    };
    //ck editor initialization
    EditIssueComponent.prototype.onReady = function (editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(editor.ui.view.toolbar.element, editor.ui.getEditableElement());
    };
    EditIssueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-issue',
            template: __webpack_require__(/*! ./edit-issue.component.html */ "./src/app/issue/edit-issue/edit-issue.component.html"),
            styles: [__webpack_require__(/*! ./edit-issue.component.css */ "./src/app/issue/edit-issue/edit-issue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issueservice_service__WEBPACK_IMPORTED_MODULE_6__["IssuesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"], _validation_service__WEBPACK_IMPORTED_MODULE_10__["ValidationService"]])
    ], EditIssueComponent);
    return EditIssueComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue-description/issue-description.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/issue/issue-description/issue-description.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n    background: #f2f3f7;\n}\n\n.background-watchers {\n    background: #DCDCDC;\n}\n\n.label-title-color {\n    font-weight: bold;\n    opacity: .5;\n}\n\n.label-value {\n    color:#6A5ACD;\n}\n\n.issue-title {\n    font-weight: bold;\n    opacity: 0.8;\n    color: rgb(8, 53, 66);\n}\n\n.wrapper {\n    top:10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvaXNzdWUtZGVzY3JpcHRpb24vaXNzdWUtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9pc3N1ZS9pc3N1ZS1kZXNjcmlwdGlvbi9pc3N1ZS1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICNmMmYzZjc7XG59XG5cbi5iYWNrZ3JvdW5kLXdhdGNoZXJzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xufVxuXG4ubGFiZWwtdGl0bGUtY29sb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG9wYWNpdHk6IC41O1xufVxuXG4ubGFiZWwtdmFsdWUge1xuICAgIGNvbG9yOiM2QTVBQ0Q7XG59XG5cbi5pc3N1ZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGNvbG9yOiByZ2IoOCwgNTMsIDY2KTtcbn1cblxuLndyYXBwZXIge1xuICAgIHRvcDoxMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/issue/issue-description/issue-description.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/issue/issue-description/issue-description.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <div class=\"container\">\n      <app-header [userName]=\"userName\" [breadcrumb] = \"breadcrumb\"></app-header>\n    <div class=\"row ml-3 mr-3\" *ngIf=\"currentIssue\">\n      <div class=\"col-8 background wrapper\" style=\"width:50%\">\n        <div class=\"row ml-1\">\n          <mat-label class=\"issue-title\">Title: {{currentIssue.title | addSpecialCharPipe: '#'}}</mat-label>\n        </div>\n        <div class=\"row mt-4\">\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Status:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            {{currentIssue.status}}\n          </div>\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Start Date:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            {{currentIssue.createdOn | date: 'dd/M/yy h:mm'}}\n          </div>\n        </div>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Assignee:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            <mat-label>{{currentIssue.userName}}</mat-label>\n          </div>\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Module Name:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            <mat-label>{{currentIssue.moduleName}}</mat-label>\n          </div>\n        </div>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Priority:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            <mat-label>{{currentIssue.priority}}</mat-label>\n          </div>\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Reported By:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            <mat-label>{{currentIssue.reporter}}</mat-label>\n          </div>\n        </div>\n        <mat-divider class=\"mt-4\"></mat-divider>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Description:</mat-label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col label-value\">\n            <mat-label [innerHtml]=\"currentIssue.description\"></mat-label>\n          </div>\n        </div>\n        <div class=\"row\" style=\"margin-top:15vh\">\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Attachment:</mat-label>\n          </div>\n          <div class=\"col label-value\">\n            <mat-label *ngIf=\"isFilePresent\"><mat-icon>cloud_download</mat-icon><a href=\"{{currentIssue.fileLocation}}\">{{currentIssue.fileName}}</a></mat-label>\n            <mat-label *ngIf=\"!isFilePresent\">No file found</mat-label>\n          </div>\n        </div>\n        <mat-divider class=\"mt-4\"></mat-divider>\n        <div class=\"row mt-2\">\n          <div class=\"col\">\n            <mat-label class=\"label-title-color\">Comments:</mat-label>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-label *ngIf=\"isComment\">{{currentIssue.comments}}</mat-label>\n            <mat-label *ngIf=\"!isComment\" class=\"label-value\">No Comments provided</mat-label>\n          </div>\n        </div>\n        <div class=\"row mt-5\">\n          <div class=\"col d-flex justify-content-end\">\n            <button mat-raised-button color=\"primary\" (click)=navigateToEdit(currentIssue.issueId)>Edit</button>\n          </div>\n          <div class=\"col-8\"> \n\n            </div>\n          <div class=\"col d-flex justify-content-end\">\n              <mat-slide-toggle class=\"example-margin\" name=\"isWatch\" color=\"primary\" [(ngModel)]=\"currentIssue.isWatch\" labelPosition=\"before\"\n              (change) = addToWatchersList(currentIssue)>\n            {{ currentIssue.isWatch ? 'Unwatch' : 'Watch' }}\n          </mat-slide-toggle>\n          </div>\n          \n        </div>\n      </div>\n\n      <div class=\"col-4 background-watchers wrapper\">\n        <mat-label>List of Wacthers</mat-label>\n        <mat-list role=\"list\" style=\"height:300px;overflow:auto\">\n          <mat-list-item role=\"listitem\" *ngFor=\"let watcher of currentIssue.watchers\">{{watcher.userName}}</mat-list-item>\n          \n        </mat-list>\n            \n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/issue/issue-description/issue-description.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/issue/issue-description/issue-description.component.ts ***!
  \************************************************************************/
/*! exports provided: IssueDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueDescriptionComponent", function() { return IssueDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _issueservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../issueservice.service */ "./src/app/issue/issueservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation.service */ "./src/app/issue/validation.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../socket.service */ "./src/app/issue/socket.service.ts");








var IssueDescriptionComponent = /** @class */ (function () {
    function IssueDescriptionComponent(_issueService, _router, _toastr, _route, _validation, _socketService) {
        var _this = this;
        this._issueService = _issueService;
        this._router = _router;
        this._toastr = _toastr;
        this._route = _route;
        this._validation = _validation;
        this._socketService = _socketService;
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName');
        this.watchers = [];
        /**
         * @description This will fetch the issue details based on issueId
         * @author Bhaskar Pawar
         */
        this.getSingleIssue = function () {
            var issueId = _this._router.snapshot.paramMap.get('issueId');
            _this.issueId = issueId;
            _this.breadcrumb = [
                {
                    link: "/api/v1/issues/all",
                    value: "home"
                },
                {
                    link: "/api/v1/issues/" + issueId + "/description",
                    value: "description"
                }
            ];
            _this._issueService.getSingleIssue(issueId).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.currentIssue = apiResponse.data;
                    _this.isFilePresent = _this._validation.checkForNullorEmpty(_this.currentIssue.fileLocation);
                    _this.isComment = _this._validation.checkForNullorEmpty(_this.currentIssue.comments);
                }
                else if (apiResponse.status === 201) {
                    _this._toastr.info("" + apiResponse.message, "Info");
                }
                else {
                    _this._toastr.error(apiResponse.message + ",", "Error");
                }
            });
        }; //end of get single issue
        this.addToWatchersList = function (currentData) {
            var data = {
                issueId: currentData.issueId,
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'),
                userName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName'),
                isWatch: true
            };
            _this.issueId = currentData.issueId;
            if (currentData.isWatch) {
                _this._socketService.addToWatchersList(data);
                setTimeout(function () {
                    _this.onAddWatchersList(_this.issueId);
                }, 500);
            }
            else {
                _this._socketService.removeFromWatchersList(data);
                setTimeout(function () {
                    _this.onRemoveWatchersList(_this.issueId);
                }, 500);
            }
        };
        this.onAddWatchersList = function (issueId) {
            _this._socketService.onAddWatchersList(issueId).subscribe(function (data) {
                _this.currentIssue.watchers = data.watchers;
            });
        };
        this.onRemoveWatchersList = function (issueId) {
            _this._socketService.onRemoveWatchersList(issueId).subscribe(function (data) {
                _this.currentIssue.watchers = data.watchers;
            });
        };
        this.navigateToEdit = function (issueId) {
            _this._route.navigate(['/api/v1/issues', issueId, 'edit']);
        };
    }
    IssueDescriptionComponent.prototype.ngOnInit = function () {
        this.getSingleIssue();
    };
    IssueDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-description',
            template: __webpack_require__(/*! ./issue-description.component.html */ "./src/app/issue/issue-description/issue-description.component.html"),
            styles: [__webpack_require__(/*! ./issue-description.component.css */ "./src/app/issue/issue-description/issue-description.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issueservice_service__WEBPACK_IMPORTED_MODULE_2__["IssuesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _validation_service__WEBPACK_IMPORTED_MODULE_6__["ValidationService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], IssueDescriptionComponent);
    return IssueDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/issue/issue.module.ts":
/*!***************************************!*\
  !*** ./src/app/issue/issue.module.ts ***!
  \***************************************/
/*! exports provided: IssueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueModule", function() { return IssueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _materialComp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../materialComp */ "./src/app/materialComp.ts");
/* harmony import */ var _issues_dashboard_issues_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./issues-dashboard/issues-dashboard.component */ "./src/app/issue/issues-dashboard/issues-dashboard.component.ts");
/* harmony import */ var _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-issue/create-issue.component */ "./src/app/issue/create-issue/create-issue.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/issue/search/search.component.ts");
/* harmony import */ var _issuesrouteguard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./issuesrouteguard.service */ "./src/app/issue/issuesrouteguard.service.ts");
/* harmony import */ var _edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-issue/edit-issue.component */ "./src/app/issue/edit-issue/edit-issue.component.ts");
/* harmony import */ var _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./issue-description/issue-description.component */ "./src/app/issue/issue-description/issue-description.component.ts");
/* harmony import */ var _shared_pipe_add_char_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/pipe/add-char.pipe */ "./src/app/shared/pipe/add-char.pipe.ts");
















var IssueModule = /** @class */ (function () {
    function IssueModule() {
    }
    IssueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_issues_dashboard_issues_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["IssuesDashboardComponent"], _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_10__["CreateIssueComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], _edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_13__["EditIssueComponent"], _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_14__["IssueDescriptionComponent"], _issues_dashboard_issues_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["NotificationDlg"], _shared_pipe_add_char_pipe__WEBPACK_IMPORTED_MODULE_15__["AddCharPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _materialComp__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialCompModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'api/v1/issues/all', component: _issues_dashboard_issues_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["IssuesDashboardComponent"], canActivate: [_issuesrouteguard_service__WEBPACK_IMPORTED_MODULE_12__["IssuesrouteguardService"]] },
                    { path: 'api/v1/issues/create', component: _create_issue_create_issue_component__WEBPACK_IMPORTED_MODULE_10__["CreateIssueComponent"], canActivate: [_issuesrouteguard_service__WEBPACK_IMPORTED_MODULE_12__["IssuesrouteguardService"]] },
                    { path: 'api/v1/issues/:issueId/description', component: _issue_description_issue_description_component__WEBPACK_IMPORTED_MODULE_14__["IssueDescriptionComponent"], canActivate: [_issuesrouteguard_service__WEBPACK_IMPORTED_MODULE_12__["IssuesrouteguardService"]] },
                    { path: 'api/v1/issues/:issueId/edit', component: _edit_issue_edit_issue_component__WEBPACK_IMPORTED_MODULE_13__["EditIssueComponent"], canActivate: [_issuesrouteguard_service__WEBPACK_IMPORTED_MODULE_12__["IssuesrouteguardService"]] },
                    { path: 'api/v1/issues/:searchString/search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], canActivate: [_issuesrouteguard_service__WEBPACK_IMPORTED_MODULE_12__["IssuesrouteguardService"]] },
                ])
            ],
            entryComponents: [_issues_dashboard_issues_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["NotificationDlg"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], IssueModule);
    return IssueModule;
}());



/***/ }),

/***/ "./src/app/issue/issues-dashboard/issues-dashboard.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/issue/issues-dashboard/issues-dashboard.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-div-bg {\n    width: 100%;\n    background-color: #dee2e6;\n}\n\nth {\n    font-weight: bold\n}\n\ntr:hover {\n    cursor: pointer;\n}\n\n.wrapper {\n    margin: auto;\n    top:10vh;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvaXNzdWVzLWRhc2hib2FyZC9pc3N1ZXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvaXNzdWUvaXNzdWVzLWRhc2hib2FyZC9pc3N1ZXMtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtZGl2LWJnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xufVxuXG50aCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxudHI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6MTB2aDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/issue/issues-dashboard/issues-dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/issue/issues-dashboard/issues-dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width , initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n    <app-header [userName]=\"userName\" [breadcrumb] = \"breadcrumb\"></app-header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col wrapper\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <mat-form-field  style=\"margin-top:17 vh\">\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n            </mat-form-field>\n          </div>\n          <div class=\"col d-flex justify-content-end\">\n            <form class=\"form-inline\">\n              <input class=\"form-control mr-sm-2\" name=\"search\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"\n                [(ngModel)]=\"searchString\" #searchAttr=\"ngModel\">\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"\n                (click)=navigateToSearch(searchAttr.value)>Search</button>\n            </form>\n          </div>\n        </div>\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"issues\" w matSort class=\"table-div-bg\">\n\n            <!-- Status Column -->\n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n              <td mat-cell *matCellDef=\"let issue\"> {{issue.status}} </td>\n            </ng-container>\n\n            <!-- Title Column -->\n            <ng-container matColumnDef=\"title\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n              <td style=\"opacity: 0.5;font-weight:bolder\" mat-cell *matCellDef=\"let issue\"><a [routerLink]=\"['/api/v1/issues',issue.issueId,'description']\">{{issue.title | addSpecialCharPipe: '#'}}</a></td>\n            </ng-container>\n\n            <!-- Reporter Column -->\n            <ng-container matColumnDef=\"reporter\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Reporter </th>\n              <td mat-cell *matCellDef=\"let issue\"> {{issue.reporter}} </td>\n            </ng-container>\n\n            <!-- Date Column -->\n            <ng-container matColumnDef=\"date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n              <td mat-cell *matCellDef=\"let issue\"> {{issue.createdOn | date:'d/M/yy, h:mm'}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"navigateToDescView(row.issueId)\"></tr>\n            <tr><button mat-raised-button color=\"primary\">Create</button></tr>\n          </table>\n\n          <div class=\"row\">\n            <div class=\"col m-2\">\n              <button *ngIf=\"roleId == 1\" mat-raised-button color=\"primary\" [routerLink]=\"['/api/v1/issues/create']\" >Create</button>\n            </div>\n            <div class=\"col\">\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/issue/issues-dashboard/issues-dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/issue/issues-dashboard/issues-dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: IssuesDashboardComponent, NotificationDlg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesDashboardComponent", function() { return IssuesDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDlg", function() { return NotificationDlg; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issueservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issueservice.service */ "./src/app/issue/issueservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../socket.service */ "./src/app/issue/socket.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);








var IssuesDashboardComponent = /** @class */ (function () {
    function IssuesDashboardComponent(_issueService, _toastr, _route, _socketService, dialog) {
        var _this = this;
        this._issueService = _issueService;
        this._toastr = _toastr;
        this._route = _route;
        this._socketService = _socketService;
        this.dialog = dialog;
        this.ISSUES = [];
        this.displayedColumns = ['status', 'title', 'reporter', 'date'];
        this.issues = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ISSUES);
        this.userName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('userName');
        this.roleId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('roleId');
        this.breadcrumb = [{
                link: "/api/v1/issues/all",
                value: "home"
            }];
        this.userIssues = [];
        this.applyFilter = function (filterValue) {
            _this.issues.filter = filterValue.trim().toLowerCase();
        };
        /**
         * fetches issues list from database
         * @author Bhaskar Pawar
         */
        this.getAllIssues = function () {
            _this._issueService.getAllIssues().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    var issues = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](apiResponse.data);
                    _this.issues = issues;
                    _this.issues.sort = _this.sort;
                    _this.issues.paginator = _this.paginator;
                }
                else if (apiResponse.status === 201) {
                    _this._toastr.info("" + apiResponse.message, "Info");
                }
                else {
                    _this._toastr.info("" + apiResponse.message, "Error");
                }
            });
        }; //end of get all issues
        this.getAllIssuesByUser = function () {
            _this._issueService.getAllIssuesByUser().subscribe(function (apiResponse) {
                _this.userIssues = apiResponse.data;
                setTimeout(function () {
                    _this._socketService.emitUserIssues(_this.userIssues);
                }, 1000);
            });
        };
        this.navigateToDescView = function (issueId) {
            _this._route.navigate(["/api/v1/issues/", issueId, 'description']);
        };
        this.navigateToSearch = function (value) {
            _this._route.navigate(['/api/v1/issues', value, 'search']);
        };
        this.verifyUserConfirmation = function () {
            _this._socketService.verifyUser()
                .subscribe(function (data) {
                _this._socketService.setUser(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get('authToken'));
                setTimeout(function () {
                    _this.onUpdation();
                }, 1000);
            });
        };
        this.onUpdation = function () {
            _this._socketService.onUpdated().subscribe(function (data) {
                _this.data = data;
                console.log(_this.data);
                _this.openDialog();
            });
        };
    }
    IssuesDashboardComponent.prototype.ngOnInit = function () {
        this.getAllIssues();
        this.verifyUserConfirmation();
        this.getAllIssuesByUser();
    };
    IssuesDashboardComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(NotificationDlg, {
            width: '400px',
            data: { issueId: this.data.issueId, title: this.data.title, userName: this.data.userName, auditString: this.data.auditString }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IssuesDashboardComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], IssuesDashboardComponent.prototype, "sort", void 0);
    IssuesDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issues-dashboard',
            template: __webpack_require__(/*! ./issues-dashboard.component.html */ "./src/app/issue/issues-dashboard/issues-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./issues-dashboard.component.css */ "./src/app/issue/issues-dashboard/issues-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issueservice_service__WEBPACK_IMPORTED_MODULE_3__["IssuesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], IssuesDashboardComponent);
    return IssuesDashboardComponent;
}());

// This class is to open the dialog
var NotificationDlg = /** @class */ (function () {
    function NotificationDlg(dialogRef, data, _route) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this._route = _route;
        this.navigateToDescView = function (issueId) {
            _this._route.navigate(["/api/v1/issues/", issueId, 'description']);
        };
    }
    NotificationDlg.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NotificationDlg = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'notification-dialog',
            template: __webpack_require__(/*! ./notificationDlg.html */ "./src/app/issue/issues-dashboard/notificationDlg.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NotificationDlg);
    return NotificationDlg;
}());



/***/ }),

/***/ "./src/app/issue/issues-dashboard/notificationDlg.html":
/*!*************************************************************!*\
  !*** ./src/app/issue/issues-dashboard/notificationDlg.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.title}}</h1>\n<div mat-dialog-content>\n  <p>Parameters (<b>{{data.auditString}}</b>) modified by <b>{{data.userName}}</b> to see the changes click on ok</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial (click)=\"navigateToDescView(data.issueId)\">Ok</button>\n</div>"

/***/ }),

/***/ "./src/app/issue/issueservice.service.ts":
/*!***********************************************!*\
  !*** ./src/app/issue/issueservice.service.ts ***!
  \***********************************************/
/*! exports provided: IssuesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesService", function() { return IssuesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");









var IssuesService = /** @class */ (function () {
    function IssuesService(_http) {
        var _this = this;
        this._http = _http;
        this.baseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_8__["GlobalConfig"].url + "/api/v1/issues";
        /**
         * @description requesting to single issue
         * @author Bhaskar Pawar
         */
        this.getSingleIssue = function (issueId) {
            return _this._http.get(_this.baseUrl + "/" + issueId + "/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId') + "/edit?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'));
        };
        /**
         * @description requesting to all the issues
         * @author Bhaskar Pawar
         */
        this.getAllIssues = function () {
            return _this._http.get(_this.baseUrl + "/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'));
        };
        /**
         * @description to get all the issues user is subscribed or part of
         * @author Bhaskar Pawar
         */
        this.getAllIssuesByUser = function () {
            return _this._http.get(_this.baseUrl + "/" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId') + "/all?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'));
        }; //end of get all issues by user
        /**
         * uploads the file
         */
        this.uploadFile = function (data) {
            return _this._http.post(_this.baseUrl + "/upload?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'), data);
        }; //end of upload file
        /**
         * @description loads the initial data to display
         */
        this.loadData = function () {
            return _this._http.get(_this.baseUrl + "/load?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'));
        }; //end load creation data
        /**
         * @author Bhaskar Pawar
         * @description creates a new issue
         */
        this.createIssue = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('title', data.title)
                .set('description', data.description)
                .set('comments', data.comments)
                .set('reporter', data.reporter)
                .set('reporterUserId', data.reporterUserId)
                .set('assignee', data.assignee)
                .set('assigneeName', data.assigneeName)
                .set('status', data.status)
                .set('watchers', data.watchers)
                .set('createdBy', data.createdBy)
                .set('lastUpdateBy', data.lastUpdateBy)
                .set('fileName', data.fileName)
                .set('moduleName', data.moduleName)
                .set('priority', data.priority)
                .set('fileLocation', data.fileLocation);
            return _this._http.post(_this.baseUrl + "/create?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'), params);
        }; //end create issue
        /**
         * @author Bhaskar Pawar
         * @description
         */
        this.editIssue = function (data, issueId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('title', data.title)
                .set('description', data.description)
                .set('comments', data.comments)
                .set('assignee', data.assignee)
                .set('assigneeName', data.assigneeName)
                .set('isWatch', data.isWatch)
                .set('status', data.status)
                .set('lastUpdateBy', data.lastUpdateBy)
                .set('fileName', data.fileName)
                .set('fileLocation', data.fileLocation)
                .set('moduleName', data.moduleName)
                .set('priority', data.priority)
                .set('oldAssignee', data.oldAssignee);
            return _this._http.put(_this.baseUrl + "/" + issueId + "/edit?authToken=" + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('authToken'), params);
        }; //end of edit issue
    }
    IssuesService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    IssuesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IssuesService);
    return IssuesService;
}());



/***/ }),

/***/ "./src/app/issue/issuesrouteguard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/issue/issuesrouteguard.service.ts ***!
  \***************************************************/
/*! exports provided: IssuesrouteguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesrouteguardService", function() { return IssuesrouteguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);




var IssuesrouteguardService = /** @class */ (function () {
    function IssuesrouteguardService(router) {
        this.router = router;
    }
    IssuesrouteguardService.prototype.canActivate = function (route) {
        if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('authToken') === null) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    IssuesrouteguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IssuesrouteguardService);
    return IssuesrouteguardService;
}());



/***/ }),

/***/ "./src/app/issue/search/search.component.css":
/*!***************************************************!*\
  !*** ./src/app/issue/search/search.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-div-bg {\n    width: 100%;\n    background-color: #dee2e6;\n}\n\nth {\n    font-weight: bold\n}\n\ntr:hover {\n    cursor: pointer;\n}\n\n.wrapper {\n    margin: auto;\n    top:10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXNzdWUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2lzc3VlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1kaXYtYmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XG59XG5cbnRoIHtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuXG50cjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud3JhcHBlciB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRvcDoxMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/issue/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/issue/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width , initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <app-header></app-header>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col wrapper\">\n        <div class=\"mat-elevation-z8\">\n          <table #table mat-table [dataSource]=\"issues\" matSort class=\"table-div-bg\">\n\n            <!-- Status Column -->\n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n              <td mat-cell *matCellDef=\"let issue\"> {{issue.status}} </td>\n            </ng-container>\n\n            <!-- Title Column -->\n            <ng-container matColumnDef=\"title\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n              <td mat-cell *matCellDef=\"let issue\"><a [routerLink]=\"['/api/v1/issues',issue.issueId,'description']\">{{issue.title}} </a></td>\n            </ng-container>\n\n            <!-- Reporter Column -->\n            <ng-container matColumnDef=\"reporter\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Reporter </th>\n              <td mat-cell *matCellDef=\"let issue\"> {{issue.reporter}} </td>\n            </ng-container>\n\n            <!-- Date Column -->\n            <ng-container matColumnDef=\"date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\n              <td mat-cell *matCellDef=\"let issue\"> {{issue.createdOn | date}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"navigateToDescView(row)\"></tr>\n            <mat-label *ngIf=\"issues.length === 0\">no records found</mat-label>\n          </table>\n\n          <div class=\"row\">\n            <div class=\"col\">\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/issue/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/issue/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _issueservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../issueservice.service */ "./src/app/issue/issueservice.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(_issueService, _toastr, _router, _route) {
        var _this = this;
        this._issueService = _issueService;
        this._toastr = _toastr;
        this._router = _router;
        this._route = _route;
        this.ISSUES = [];
        this.displayedColumns = ['status', 'title', 'reporter', 'date'];
        this.issues = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.ISSUES);
        /**
         * fetches issues list from database
         * @author Bhaskar Pawar
         */
        this.getAllIssues = function (searchString) {
            _this._issueService.getAllIssues().subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    var issues = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](apiResponse.data);
                    _this.issues = issues;
                    _this.issues.sort = _this.sort;
                    _this.issues.paginator = _this.paginator;
                    _this.issues.filter = searchString.trim().toLowerCase();
                }
                else if (apiResponse.status === 201) {
                    _this._toastr.info("" + apiResponse.message, "Info");
                }
                else {
                    _this._toastr.info("" + apiResponse.message, "Error");
                }
            });
        }; //end of get all issues
        this.navigateToDescView = function (issue) {
            _this._route.navigate(["/api/v1/issues/", issue.issueId, 'description']);
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var searchString = this._router.snapshot.paramMap.get('searchString');
        this.getAllIssues(searchString);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], SearchComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], SearchComponent.prototype, "sort", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/issue/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/issue/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_issueservice_service__WEBPACK_IMPORTED_MODULE_3__["IssuesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/issue/socket.service.ts":
/*!*****************************************!*\
  !*** ./src/app/issue/socket.service.ts ***!
  \*****************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_7__);








var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.url = "" + _globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].url;
        // events to be listened 
        this.verifyUser = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('verify-user', function (data) {
                    observer.next(data);
                }); // end Socket
            }); // end Observable
        }; // end verifyUser
        this.addToWatchersList = function (data) {
            _this.socket.emit('add-to-watchers', data);
        };
        this.removeFromWatchersList = function (data) {
            _this.socket.emit('remove-from-watchers', data);
        };
        this.emitUserIssues = function (data) {
            _this.socket.emit('users-issues', data);
        };
        this.leaveThisRoom = function (issueId) {
            _this.socket.emit('leave-this-room', issueId);
        };
        // events to be emitted
        this.setUser = function (authToken) {
            _this.socket.emit("set-user", authToken);
        }; // end setUser
        this.update = function (data) {
            _this.socket.emit('update-issue', data);
        };
        //on updation server will emit the event
        this.onUpdated = function () {
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.socket.on('updated', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onAddWatchersList = function (issueId) {
            _this.descSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].url + "/api/v1/issues/" + issueId + "/description");
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.descSocket.on('watchers-list', function (data) {
                    observer.next(data);
                });
            });
        };
        this.onRemoveWatchersList = function (issueId) {
            _this.descSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_globalConfig__WEBPACK_IMPORTED_MODULE_4__["GlobalConfig"].url + "/api/v1/issues/" + issueId + "/description");
            return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                _this.descSocket.on('removed-watcher', function (data) {
                    observer.next(data);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
    }
    SocketService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/issue/validation.service.ts":
/*!*********************************************!*\
  !*** ./src/app/issue/validation.service.ts ***!
  \*********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
        this.checkForNullorEmpty = function (data) {
            if (data === undefined || data === null || data.length === 0 || data === "undefined" || data === '') {
                return false;
            }
            return true;
        };
        this.checkForChanges = function (oldObj, newObj, assigneeName, fileLocation) {
            var auditString = '';
            if (oldObj.title !== newObj.title) {
                auditString = auditString + 'title,';
            }
            if (oldObj.status !== newObj.status) {
                auditString = auditString + 'status,';
            }
            if (assigneeName !== newObj.userName) {
                auditString = auditString + 'assignee,';
            }
            if (oldObj.moduleName !== newObj.moduleName) {
                auditString = auditString + 'moduleName,';
            }
            if (oldObj.priority !== newObj.priority) {
                auditString = auditString + 'Priority,';
            }
            if (oldObj.comments !== newObj.comments) {
                auditString = auditString + 'Comments,';
            }
            if (oldObj.description !== newObj.description) {
                auditString = auditString + 'Description,';
            }
            if ((fileLocation === undefined || oldObj.fileLocation === fileLocation)) {
                auditString = auditString;
            }
            else {
                auditString = auditString + 'fileLocation,';
            }
            return auditString;
        };
    }
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/materialComp.ts":
/*!*********************************!*\
  !*** ./src/app/materialComp.ts ***!
  \*********************************/
/*! exports provided: CustomMaterialCompModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialCompModule", function() { return CustomMaterialCompModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// All the required material components defined by the application


var CustomMaterialCompModule = /** @class */ (function () {
    function CustomMaterialCompModule() {
    }
    CustomMaterialCompModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ]
        })
    ], CustomMaterialCompModule);
    return CustomMaterialCompModule;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-bg {\n    background: #467aa7;\n    background-size: cover;\n}\n\n.nav-bar-padding {\n    padding: 0px;\n    width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYmcge1xuICAgIGJhY2tncm91bmQ6ICM0NjdhYTc7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm5hdi1iYXItcGFkZGluZyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width , initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row nav-bar-padding\">\n      <div class=\"col\">\n          <nav class=\"navbar navbar-expand-lg navbar-dark navbar-bg rounded\">\n              <a class=\"navbar-brand\" href=\"#\">ISSUE TRACKING TOOL</a>\n              <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\"\n                aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n              </button>\n              <div class=\"collapse navbar-collapse d-flex justify-content-end\" id=\"navbarNavAltMarkup\">\n                <div class=\"navbar-nav\" style=\"color:white;\">\n                  \n                  <div class=\"col\">\n                      <mat-icon>person</mat-icon><mat-label>{{userName | uppercase}}</mat-label>\n                  </div>\n                  <div>\n                      <button mat-raised-button (click)=\"logOut()\">Log Out</button>\n                  </div>\n                </div>\n              </div>\n            </nav>\n            <nav aria-label=\"breadcrumb\" style=\"height: 5px\">\n                <ol class=\"breadcrumb\">\n                  <li><a [routerLink] = \"['/api/v1/issues/all']\"><mat-icon>home</mat-icon></a></li>\n                  <li class=\"breadcrumb-item\" *ngFor=\"let item of breadcrumb; let first=first;let last=last\" [ngClass]=\"{'active': last}\"><a href=\"{{item.link}}\">{{item.value}}</a></li>\n                </ol>\n              </nav>\n      </div>\n    </div>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(toastr, _route, user) {
        var _this = this;
        this.toastr = toastr;
        this._route = _route;
        this.user = user;
        /**
         * @author Bhaskar Pawar
         * logs out the user from system and delete the cookies and localstorage
         */
        this.logOut = function () {
            var userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId');
            _this.user.logOut(userId).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success("" + apiResponse.message, 'Success');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('authToken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
                    localStorage.removeItem('userInfo');
                    setTimeout(function () {
                        _this._route.navigate(['/api/v1/users/login']);
                    }, 1000);
                }
                else {
                    _this.toastr.error("" + apiResponse.message, 'Error');
                }
            });
        }; //end of log out
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "breadcrumb", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "userName", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/shared/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipe/add-char.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipe/add-char.pipe.ts ***!
  \**********************************************/
/*! exports provided: AddCharPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCharPipe", function() { return AddCharPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCharPipe = /** @class */ (function () {
    function AddCharPipe() {
    }
    AddCharPipe.prototype.transform = function (value, character) {
        return character.concat(value);
    };
    AddCharPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'addSpecialCharPipe'
        })
    ], AddCharPipe);
    return AddCharPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materialComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../materialComp */ "./src/app/materialComp.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shared/header/header.component.ts");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _materialComp__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialCompModule"]
            ],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* css for login component*/\n.cardWidth {\n    width: 400px;\n    height: auto;\n    margin-top: 20vh;\n    background-color: #f2f3f7;\n}\n.login-title {\n    font-size: 0.8rem;\n    font-weight: bold;\n}\n.bg-divider {\n    background-color: white;\n}\n@media (min-width: 576px) {\n    .cardWidth {\n        width: 400px;\n    }\n}\n@media (max-width: 575.98px) {\n    .cardWidth {\n        width: 300px;\n    }\n}\n@media (max-width: 300px) {\n    .cardWidth {\n        width: 200px;\n    }\n}\n@media (max-width: 200px) {\n    .cardWidth {\n        width: 100px;\n    }\n}\n@media (max-width: 100px) {\n    .cardWidth {\n        width: 50px;\n    }\n}\n@media (max-width: 50px) {\n    .cardWidth {\n        width: 10px;\n    }\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjtBQUVBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNzcyBmb3IgbG9naW4gY29tcG9uZW50Ki9cbi5jYXJkV2lkdGgge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmM2Y3O1xufVxuXG4ubG9naW4tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmctZGl2aWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5jYXJkV2lkdGgge1xuICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgICAuY2FyZFdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gICAgLmNhcmRXaWR0aCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAyMDBweCkge1xuICAgIC5jYXJkV2lkdGgge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAwcHgpIHtcbiAgICAuY2FyZFdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTBweCkge1xuICAgIC5jYXJkV2lkdGgge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICB9XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width ,initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col d-flex justify-content-center\">\n        <mat-card class=\"cardWidth\">\n          <mat-card-header>\n            <mat-card-title class=\"login-title\">Log in to Continue</mat-card-title>\n          </mat-card-header>\n          <mat-divider></mat-divider>\n          <form #loginForm=\"ngForm\">\n            <mat-form-field appearance=\"outline\" style=\"width:100%;margin-top:2vh;text-decoration-color: white\">\n              <mat-label>Email</mat-label>\n              <input matInput placeholder=\"Email\" name=\"email\"  [(ngModel)]=\"email\" #emailId=\"ngModel\" required>\n              <mat-error *ngIf=\"emailId.invalid\">You must enter a value</mat-error>\n              <mat-icon matPrefix>person</mat-icon>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" style=\"width:100%;margin-top:0.5vh\">\n              <mat-label>Password</mat-label>\n              <input matInput placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\" #userPass=\"ngModel\" required>\n              <mat-error *ngIf=\"userPass.invalid\">You must enter a value</mat-error>\n              <mat-icon matPrefix>lock</mat-icon>\n            </mat-form-field>\n          \n          <div class=\"row\">\n            <div class=\"col\">\n                <mat-checkbox name=\"termsFlag\" [(ngModel)]=\"termsFlag\" #termsFlagAttr=\"ngModel\" class=\"example-margin\" required><button class=\"btn btn-link\" (click) = \"openDialog()\">T&C</button></mat-checkbox>\n                <mat-error *ngIf=\"termsFlagAttr.invalid\">accept t&c</mat-error>\n            </div>\n            <div class=\"col\">\n                <button class=\"btn btn-link\" [routerLink]=\"['/api/v1/users/reset']\">forgot password?</button>\n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col\">\n                  <button mat-raised-button color=\"primary\" [disabled]=\"loginForm.form.invalid\" (click)=\"logIn()\">Login</button>\n              </div>\n              <div class=\"col\">\n                  <mat-label style=\"color:blue\">existing user?</mat-label>\n              </div>\n              <div class=\"col\">\n                  <a href=\"#\" [routerLink]=\"['/api/v1/users/signup']\">Sign Up</a>\n              </div>\n            </div>\n          </form>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent, TermsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsDialog", function() { return TermsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(user, _route, toastr, dialog) {
        var _this = this;
        this.user = user;
        this._route = _route;
        this.toastr = toastr;
        this.dialog = dialog;
        /**
         * @author Bhaskar Pawar
         */
        this.logIn = function () {
            var data = {
                email: _this.email,
                password: _this.password
            };
            _this.user.logInFunction(data).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    //setting cookies and localstorage so that can be accessed whenever required
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('authToken', apiResponse.data.authToken);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('roleId', apiResponse.data.userDetails.roleId);
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].set('userName', apiResponse.data.userDetails.firstName + ' ' + apiResponse.data.userDetails.lastName);
                    _this.user.setToLocalStorage(apiResponse.data.userDetails);
                    _this.toastr.success("" + apiResponse.message, 'Success');
                    setTimeout(function () {
                        _this._route.navigate(['/api/v1/issues/all']);
                    }, 1000);
                }
                else if (apiResponse.status === 201) {
                    _this.toastr.info("" + apiResponse.message, 'Information');
                }
                else {
                    _this.toastr.error("" + apiResponse.message, 'Error');
                }
            });
        };
    }
    LoginComponent.prototype.openDialog = function (event) {
        var dialogRef = this.dialog.open(TermsDialog, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());

var TermsDialog = /** @class */ (function () {
    function TermsDialog() {
    }
    TermsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'terms-dialog',
            template: __webpack_require__(/*! ./terms-dialog.html */ "./src/app/user/login/terms-dialog.html"),
        })
    ], TermsDialog);
    return TermsDialog;
}());



/***/ }),

/***/ "./src/app/user/login/terms-dialog.html":
/*!**********************************************!*\
  !*** ./src/app/user/login/terms-dialog.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Terms and Conditions</h2>\n<mat-dialog-content class=\"mat-typography\">\n  \n  <p>By Clicking on checkbox you confirm that you are agree to the terms and conditions.</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.css":
/*!******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stepper-div {\n    width: 500px;\n}\n\n@media only screen and (max-width: 280px) {\n    .stepper-div {\n        width: 200px;\n    }\n}\n\n@media only screen and (max-width: 200px) {\n    .stepper-div {\n        width: 150px;\n    }\n}\n\n@media only screen and (max-width: 150px) {\n    .stepper-div {\n        width: 100px;\n    }\n}\n\n@media only screen and (max-width: 100px) {\n    .stepper-div {\n        width: 70px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHBlci1kaXYge1xuICAgIHdpZHRoOiA1MDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODBweCkge1xuICAgIC5zdGVwcGVyLWRpdiB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjAwcHgpIHtcbiAgICAuc3RlcHBlci1kaXYge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1MHB4KSB7XG4gICAgLnN0ZXBwZXItZGl2IHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDBweCkge1xuICAgIC5zdGVwcGVyLWRpdiB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width ,initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col d-flex justify-content-center\">\n        <mat-vertical-stepper class=\"stepper-div\" [linear]=\"true\" #stepper>\n          <mat-step [stepControl]=\"firstFormGroup\">\n            <form [formGroup]=\"firstFormGroup\" name=\"resetForm\">\n              <ng-template matStepLabel>Fill out your Email</ng-template>\n              <mat-form-field>\n                <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\" name=\"email\" required>\n              </mat-form-field>\n              <div>\n                <button mat-raised-button color=\"primary\" [disabled] = \"!firstFormGroup.valid\" (click) = \"checkUserExist()\">Next</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step [stepControl]=\"secondFormGroup\" [disable]=\"false\">\n            <form [formGroup]=\"secondFormGroup\">\n              <ng-template matStepLabel>Reset Password</ng-template>\n              <mat-form-field>\n                <input matInput placeholder=\"New Password\" type=\"password\" formControlName=\"password\" required>\n              </mat-form-field>\n              <mat-form-field class=\"ml-2\">\n                  <input matInput placeholder=\"Confirm new Password\" type=\"password\" formControlName=\"confirmPass\" required>\n                </mat-form-field>\n              <div>\n                <button mat-raised-button matStepperPrevious color=\"primary\">Back</button>\n                <button class=\"ml-2\" mat-raised-button color=\"primary\" [disabled] =\"!secondFormGroup.valid\" (click) = \"saveNewPassword()\">Confirm</button>\n              </div>\n            </form>\n          </mat-step>\n          <mat-step>\n            <ng-template matStepLabel>Done</ng-template>\n            Password reset done.\n            <a href=\"#\" [routerLink] = \"['/api/v1/users/login']\">Click here Login</a>\n          </mat-step>\n        </mat-vertical-stepper>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col d-flex justify-content-center\">\n          <button mat-raised-button color= \"primary\" (click) = \"goBack()\">Back</button>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/reset-password/reset-password.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/reset-password/reset-password.component.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var _angular_common___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/ */ "./node_modules/@angular/common/fesm5/common.js");







var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(_formBuilder, _toastr, _user, _location) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this._toastr = _toastr;
        this._user = _user;
        this._location = _location;
        /**
         * @author Bhaskar Pawar
         */
        this.checkUserExist = function () {
            _this._user.checkUserExist(_this.firstFormGroup.get('email').value).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.stepper.next();
                }
                else {
                    _this._toastr.error("" + apiResponse.message, "Error");
                }
            });
        };
        /**
         * @author Bhaskar Pawar
         */
        this.saveNewPassword = function () {
            if (_this.secondFormGroup.get('password').value != _this.secondFormGroup.get('confirmPass').value) {
                _this._toastr.info("Passwords not matching", 'Info');
            }
            else if (!(/^[A-Za-z0-9]\w{7,}$/.test(_this.secondFormGroup.get('password').value))) {
                _this._toastr.info("Minimum 8 characters which contain only characters,numeric digits, underscore and first character must be a letter", "Info");
            }
            else {
                var data = {
                    email: _this.firstFormGroup.get('email').value,
                    password: _this.secondFormGroup.get('password').value
                };
                _this._user.resetPassword(data).subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this._toastr.success("" + apiResponse.message, "Success");
                        _this.stepper.next();
                    }
                    else if (apiResponse.status === 201) {
                        _this._toastr.info("" + apiResponse.message, "Info");
                    }
                    else {
                        _this._toastr.error("" + apiResponse.message, "Error");
                    }
                });
            }
        }; //end of save password
        this.goBack = function () {
            _this._location.back();
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
        this.secondFormGroup = this._formBuilder.group({
            password: [this.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPass: [this.confirmPassword, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepper"])
    ], ResetPasswordComponent.prototype, "stepper", void 0);
    ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/user/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/user/reset-password/reset-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_common___WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*css for sign up component*/\n.cardWidth {\n    width: 500px;\n    height: auto;\n    margin-top: 5vh;\n    background-color: #f2f3f7;\n}\n.bg-divider {\n    background-color: white;\n}\n.input-full-width {\n    width:90%;\n    margin-top:2vh;\n}\n.table-right-col-margin {\n    margin-left: 5vw;\n}\n@media only screen and (max-width: 250px) {\n    .cardWidth {\n        width: 150px;\n    }\n}\n@media only screen and (max-width: 150px) {\n    .cardWidth {\n        width: 80px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7QUFDbEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypjc3MgZm9yIHNpZ24gdXAgY29tcG9uZW50Ki9cbi5jYXJkV2lkdGgge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjc7XG59XG5cbi5iZy1kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmlucHV0LWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tdG9wOjJ2aDtcbn1cblxuLnRhYmxlLXJpZ2h0LWNvbC1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjUwcHgpIHtcbiAgICAuY2FyZFdpZHRoIHtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTBweCkge1xuICAgIC5jYXJkV2lkdGgge1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n  <meta name=\"viewport\" content=\"width=device-width ,initial-scale=1.0, user-scalable=no\">\n</head>\n\n<body>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col d-flex justify-content-center\">\n        <mat-card class=\"cardWidth\">\n          <mat-card-header>\n            <mat-card-title style=\"font-weight:bold\">Sign Up</mat-card-title>\n          </mat-card-header>\n          <mat-divider></mat-divider>\n          <form #signUpForm=\"ngForm\">\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <mat-form-field class=\"input-full-width\">\n                  <mat-label>First Name</mat-label>\n                  <input matInput placeholder=\"First Name\" name=\"firstName\" [(ngModel)]=\"firstName\" #firstNameAttr=\"ngModel\"\n                    required>\n                  <mat-error *ngIf=\"firstNameAttr.invalid\">You must enter a value</mat-error>\n                </mat-form-field>\n              </div>\n              <div class=\"form-group col\">\n                <mat-form-field class=\"input-full-width\">\n                  <mat-label>Last Name</mat-label>\n                  <input matInput placeholder=\"LastName\" name=\"lastName\" [(ngModel)]=\"lastName\" #lastNameAttr=\"ngModel\"\n                    required>\n                  <mat-error *ngIf=\"lastNameAttr.invalid\">You must enter a value</mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <mat-form-field class=\"input-full-width\">\n                  <mat-label>Email</mat-label>\n                  <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"email\" #emailAttr=\"ngModel\" required>\n                  <mat-error *ngIf=\"emailAttr.invalid\">You must enter a value</mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <mat-form-field hintLabel=\"max 10 digits(optional)\" class=\"input-full-width\">\n                  <mat-label>Mobile Number</mat-label>\n                  <input matInput name=\"mobileNumber\" placeholder=\"Mobile Number\" [(ngModel)]=\"mobileNumber\" type=\"number\"\n                    onkeydown=\"if(this.value.length == 10 && event.keyCode!=8) return false;\" min=\"1000000000\" max=\"9999999999\">\n                </mat-form-field>\n              </div>\n              <div class=\"form-group col\">\n                <mat-form-field class=\"input-full-width\">\n                  <mat-select placeholder=\"Select\" name=\"roleId\" [(ngModel)]=\"roleId\" #roleIdAttr=\"ngModel\" required>\n                    <mat-option *ngFor=\"let role of userRoles\" [value]=\"role.roleId\">{{role.roleName}}</mat-option>\n                  </mat-select>\n                  <mat-error *ngIf=\"roleIdAttr.invalid\">You must enter a value</mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <mat-form-field class=\"input-full-width\">\n                  <mat-label>Password</mat-label>\n                  <input matInput placeholder=\"Password\" name=\"password\" type=\"password\" [(ngModel)]=\"password\"\n                    #passwordAttr=\"ngModel\" required>\n                  <mat-error *ngIf=\"passwordAttr.invalid\">You must enter a value</mat-error>\n                </mat-form-field>\n              </div>\n              <div class=\"form-group col\">\n                <mat-form-field class=\"input-full-width\">\n                  <mat-label>Confirm Password</mat-label>\n                  <input matInput placeholder=\"Confirm Password\" name=\"confirmPass\" type=\"password\"\n                    [(ngModel)]=\"confirmPassword\" #confirmPasswordAttr=\"ngModel\" required>\n                  <mat-error *ngIf=\"confirmPasswordAttr.invalid\">You must enter a value</mat-error>\n                </mat-form-field>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col\">\n                <mat-card-actions>\n                  <button mat-raised-button color=\"primary\" [disabled]=\"signUpForm.form.invalid\" (click)=\"signUp()\">Sign\n                    Up</button>\n                </mat-card-actions>\n              </div>\n              <div class=\"form-group col d-flex justify-content-end\">\n                <mat-card-actions>\n                  <button class=\"btn btn-secondary\" mat-raised-button (click)=\"goBack()\">Back</button>\n                </mat-card-actions>\n              </div>\n            </div>\n          </form>      \n        </mat-card>\n      </div>\n    </div>\n  </div>\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(user, _route, toastr, _location) {
        var _this = this;
        this.user = user;
        this._route = _route;
        this.toastr = toastr;
        this._location = _location;
        this.userRoles = [
            {
                roleId: 1,
                roleName: 'Reporter'
            },
            {
                roleId: 2,
                roleName: 'Assignee'
            }
        ];
        /**
         * @author Bhaskar Pawar
         * @param data
         */
        this.signUp = function () {
            var userInfo = {
                firstName: _this.firstName,
                lastName: _this.lastName,
                email: _this.email,
                mobileNumber: (_this.mobileNumber == null || _this.mobileNumber == undefined) ? 0 : _this.mobileNumber,
                userName: _this.firstName + ' ' + _this.lastName,
                password: _this.password,
                roleId: _this.roleId
            };
            if (userInfo.password != _this.confirmPassword) {
                _this.toastr.error('passwords not matching', 'Error');
            }
            else if (userInfo.mobileNumber != 0 && userInfo.mobileNumber < 1000000000) {
                _this.toastr.info('mobile number should contain 10 digits ', 'Info');
            }
            else {
                _this.user.signUp(userInfo).subscribe(function (apiResponse) {
                    if (apiResponse.status === 200) {
                        _this.toastr.success("" + apiResponse.message, 'Success');
                        setTimeout(function () {
                            _this._route.navigate(['/api/v1/users/login']);
                        }, 1000);
                    }
                    else if (apiResponse.status === 403) {
                        _this.toastr.info("" + apiResponse.message, 'Information');
                    }
                    else {
                        _this.toastr.error("" + apiResponse.message, 'Error');
                    }
                });
            }
        }; //end of sign up
        this.goBack = function () {
            _this._location.back();
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _materialComp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../materialComp */ "./src/app/materialComp.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/user/reset-password/reset-password.component.ts");











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_7__["TermsDialog"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _materialComp__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialCompModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'api/v1/users/signup', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"] },
                    { path: 'api/v1/users/reset', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswordComponent"] }
                ])
            ],
            entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["TermsDialog"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _globalConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../globalConfig */ "./src/app/globalConfig.ts");








var UserService = /** @class */ (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = _globalConfig__WEBPACK_IMPORTED_MODULE_7__["GlobalConfig"].url + "/api/v1/users";
        /**
         * This is to save user information to server DB
         * @author Bhaskar Pawar
         * @param data
         */
        this.signUp = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('firstName', data.firstName)
                .set('lastName', data.lastName)
                .set('email', data.email)
                .set('mobileNumber', data.mobileNumber)
                .set('roleId', data.roleId)
                .set('password', data.password)
                .set('userName', data.userName);
            return _this.http.post(_this.baseUrl + "/signup", params);
        }; //end of sign up function
        /**
         * user log in function
         * @author Bhaskar Pawar
         * @param datas
         */
        this.logInFunction = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', data.email)
                .set('password', data.password);
            return _this.http.post(_this.baseUrl + "/login", params);
        }; //end of login function
        /**
         * @author Bhaskar Pawar
         * Temporary user information storage
         */
        this.setToLocalStorage = function (data) {
            localStorage.setItem('userInfo', JSON.stringify(data));
        }; // end of setLocalStorage 
        /**
         * @author Bhaskar Pawar
         */
        this.getFromLocalStorage = function () {
            return JSON.parse(localStorage.getItem('userInfo'));
        }; //end of getFromLocalStorage
        /**
         * This will delete the temporary data also remove authToken from server
         * @author Bhaskar Pawar
         * @param userId
        */
        this.logOut = function (userId) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('userId', userId);
            return _this.http.post(_this.baseUrl + "/logout", params);
        }; //end of log out
        /**
         * @author Bhaskar Pawar
         * @param email
         */
        this.checkUserExist = function (email) {
            return _this.http.get(_this.baseUrl + "/reset?email=" + email);
        }; // end of check user list
        this.resetPassword = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('email', data.email)
                .set('password', data.password);
            return _this.http.post(_this.baseUrl + "/reset", params);
        };
    }
    UserService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errorMessage);
    }; // END handleError
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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

module.exports = __webpack_require__(/*! /home/bhaskar/Desktop/itt-frontend-master/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map