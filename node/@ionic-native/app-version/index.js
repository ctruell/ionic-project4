var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from '@ionic-native/app-version';
 *
 * constructor(private appVersion: AppVersion) { }
 *
 * ...
 *
 *
 * this.appVersion.getAppName();
 * this.appVersion.getPackageName();
 * this.appVersion.getVersionCode();
 * this.appVersion.getVersionNumber();
 *
 * ```
 */
var AppVersion = (function (_super) {
    __extends(AppVersion, _super);
    function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the name of the app, e.g.: "My Awesome App"
     * @returns {Promise<string>}
     */
    /**
       * Returns the name of the app, e.g.: "My Awesome App"
       * @returns {Promise<string>}
       */
    AppVersion.prototype.getAppName = /**
       * Returns the name of the app, e.g.: "My Awesome App"
       * @returns {Promise<string>}
       */
    function () { return; };
    /**
     * Returns the package name of the app, e.g.: "com.example.myawesomeapp"
     * @returns {Promise<string>}
     */
    /**
       * Returns the package name of the app, e.g.: "com.example.myawesomeapp"
       * @returns {Promise<string>}
       */
    AppVersion.prototype.getPackageName = /**
       * Returns the package name of the app, e.g.: "com.example.myawesomeapp"
       * @returns {Promise<string>}
       */
    function () { return; };
    /**
     * Returns the build identifier of the app.
     * In iOS a string with the build version like "1.6095"
     * In Android a number generated from the version string, like 10203 for version "1.2.3"
     * @returns {Promise<string | number>}
     */
    /**
       * Returns the build identifier of the app.
       * In iOS a string with the build version like "1.6095"
       * In Android a number generated from the version string, like 10203 for version "1.2.3"
       * @returns {Promise<string | number>}
       */
    AppVersion.prototype.getVersionCode = /**
       * Returns the build identifier of the app.
       * In iOS a string with the build version like "1.6095"
       * In Android a number generated from the version string, like 10203 for version "1.2.3"
       * @returns {Promise<string | number>}
       */
    function () { return; };
    /**
     * Returns the version of the app, e.g.: "1.2.3"
     * @returns {Promise<string>}
     */
    /**
       * Returns the version of the app, e.g.: "1.2.3"
       * @returns {Promise<string>}
       */
    AppVersion.prototype.getVersionNumber = /**
       * Returns the version of the app, e.g.: "1.2.3"
       * @returns {Promise<string>}
       */
    function () { return; };
    AppVersion.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getAppName", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getPackageName", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getVersionCode", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], AppVersion.prototype, "getVersionNumber", null);
    /**
     * @name App Version
     * @description
     * Reads the version of your app from the target build settings.
     *
     * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
     *
     * @usage
     * ```typescript
     * import { AppVersion } from '@ionic-native/app-version';
     *
     * constructor(private appVersion: AppVersion) { }
     *
     * ...
     *
     *
     * this.appVersion.getAppName();
     * this.appVersion.getPackageName();
     * this.appVersion.getVersionCode();
     * this.appVersion.getVersionNumber();
     *
     * ```
     */
    AppVersion = __decorate([
        Plugin({
            pluginName: 'AppVersion',
            plugin: 'cordova-plugin-app-version',
            pluginRef: 'cordova.getAppVersion',
            repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], AppVersion);
    return AppVersion;
}(IonicNativePlugin));
export { AppVersion };
//# sourceMappingURL=index.js.map