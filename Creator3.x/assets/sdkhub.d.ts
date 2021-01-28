declare namespace sdkhub {
    /**
     * @en
     * Get Custom plugins
     * @zh
     * 获取所有的自定义插件对象类
     * @returns {Array<ProtocolCustom>} custom plugins
     * @example
     * ```
     * var customs = sdkhub.getCustomPlugins();
     * ```
     */
    function getCustomPlugins(): ProtocolCustom[];
    /**
     * @en
     * Get User plugins
     * @zh
     * 获取所有的用户插件对象类
     * @returns {Array<ProtocolUser>} user plugins
     * @example
     * ```
     * var users = sdkhub.getUserPlugins();
     * ```
     */
    function getUserPlugins(): ProtocolUser[];
    /**
     * @en
     * Get Fee plugins
     * @zh
     * 获取所有的支付插件对象类
     * @returns {Array<ProtocolFee>} fee plugins
     * @example
     * ```
     * var fees = sdkhub.getFeePlugins();
     * ```
     */
    function getFeePlugins(): ProtocolFee[];
    /**
     * @en
     * Get Custom Plugin by pluginId
     * @zh
     * 通过插件 ID 获取对应的自定义插件对象类。若只有单个自定义插件，则可不填入 pluginId 参数
     * @param {string=} pluginId plugin id
     * @returns {ProtocolCustom} if Custom plugin exist, return value is Custom plugin, else return value is null pointer.
     * @example
     * ```
     * var custom = sdkhub.getCustomPlugin();
     * var hwcustom = sdkhub.getCustomPlugin("CustomHuawei");
     * ```
     */
    function getCustomPlugin(pluginId?: string): ProtocolCustom;
    /**
     * @en
     * Get User Plugin by pluginId
     * @zh
     * 通过插件 ID 获取对应的用户插件插件对象类。若只有单个用户插件，则可不填入 pluginId 参数
     * @param {string=} pluginId plugin id
     * @returns {ProtocolUser} if User plugin exist, return value is User plugin, else return value is null pointer.
     * @example
     * ```
     * var user = sdkhub.getUserPlugin();
     * var hwuser = sdkhub.getUserPlugin("UserHuawei");
     * ```
     */
    function getUserPlugin(pluginId?: string): ProtocolUser;
    /**
     * @en
     * Get Fee Plugin by pluginId
     * @zh
     * 通过插件 ID 获取对应的支付插件对象类。若只有单个支付插件，则可不填入 pluginId 参数
     * @param {string=} pluginId plugin id
     * @returns {ProtocolFee} if Fee plugin exist, return value is Fee plugin, else return value is null pointer.
     * @example
     * ```
     * var fee = sdkhub.getFeePlugin();
     * var hwfee = sdkhub.getFeePlugin("FeeHuawei");
     * ```
     */
    function getFeePlugin(pluginId?: string): ProtocolFee;
    /**
     * @en
     * Get Ads Plugin
     * @zh
     * 获取广告插件对象类。广告和推送类型只支持单个插件
     * @returns {ProtocolAds} if Ads plugin exist, return value Ads User plugin, else return value is null pointer.
     * @example
     * ```
     * var ads = sdkhub.getAdsPlugin();
     * ```
     */
    function getAdsPlugin(): ProtocolAds;
    /**
     * @en
     * Get Push Plugin
     * @zh
     * 获取推送插件对象类。广告和推送类型只支持单个插件
     * @example
     * ```
     * var push = sdkhub.getPushPlugin();
     * ```
     * @returns {ProtocolPush} if Push plugin exist, return value is Push plugin, else return value is null pointer.
     */
    function getPushPlugin(): ProtocolPush;
    /**
     * @en
     * Get framework version
     * @zh
     * 获取 Cocos SDKHub 框架版本号
     * @returns {string} return value is the version of Cocos SDKHub.
     * @example
     * ```
     * var version = sdkhub.getFrameworkVersion();
     * ```
     */
    function getFrameworkVersion(): string;
    /**
     * @en
     * Get plugin support methods
     * @zh
     * 获取插件支持的方法
     * @param {PluginProtocol} plugin plugin object
     * @returns {string} plugin support methods
     * @example
     * ```
     * var methods = sdkhub.getPluginMethods(sdkhub.getUserPlugin());
     * ```
     */
    function getPluginMethods(plugin: PluginProtocol): string;
    /**
     * @en
     * Get plugin support ids
     * @zh
     * 获取插件列表，可在判断是否含有 `User`、`Fee`、`Ads`、`Push` 或 `Custom` 开头的字段来判断是否存在该类型插件，也可通过其中的插件名，获取指定的插件对象
     * @returns {string} plugin support ids
     * @example
     * ```
     * var pluginids = sdkhub.getSupportPluginIds();
     * ```
     */
    function getSupportPluginIds(): string;
    /**
     * @en
     * Get channel ID
     * @zh
     * 通过插件 ID 获取对应的自定义插件对象类。若只有单个自定义插件，则可不填入 pluginId 参数
     * @returns {string} return value is channel ID.
     * @example
     * ```
     * var channelid = sdkhub.getChannelId();
     * ```
     */
    function getChannelId(): string;
}
declare namespace sdkhub {
    /**
    * @en
    * enums of the position of banner ads by function `showAds`
    * @zh
    * `showAds` 方法使用的条幅广告位置枚举值
    */
    enum AdsPos {
        /**
        * @en
        * enum the pos of banner ads at bottom
        * @zh
        * 条幅广告位置枚举值，正下方
        */
        kPosBottom = 0,
        /**
        * @en
        * enum the pos of banner ads at center
        * @zh
        * 条幅广告位置枚举值，正中
        */
        kPosCenter = 1,
        /**
        * @en
        * enum the pos of banner ads at top
        * @zh
        * 条幅广告位置枚举值，正上方
        */
        kPosTop = 2
    }
}
declare namespace sdkhub {
    /**
    * @en
    * Unified callback of ads plugin result listener
    * @zh
    * 广告类型插件统一回调枚举值
    */
    enum AdsResultCode {
        /**
        * @en
        * enum the callback: the ad is received is at center
        * @zh
        * 广告接受成功回调枚举值
        */
        kAdsReceived = 0,
        /**
        * @en
        * enum the callback: the advertisement dismissed
        * @zh
        * 广告展示成功回调枚举值
        */
        kAdsShown = 1,
        /**
        * @en
        * enum the callback: the advertisement dismissed
        * @zh
        * 广告消失回调枚举值
        */
        kAdsDismissed = 2,
        /**
        * @en
        * enum the callback: the points spend succeed
        * @zh
        * 积分设置成功回调枚举值
        */
        kPointsSpendSucceed = 3,
        /**
        * @en
        * enum the callback: the points spend failed
        * @zh
        * 积分设置失败回调枚举值
        */
        kPointsSpendFailed = 4,
        /**
        * @en
        * enum the callback of Network error at center
        * @zh
        * 网络错误回调枚举值
        */
        kNetworkError = 5,
        /**
        * @en
        * enum the callback of Unknown error.
        * @zh
        * 未知错误回调枚举值
        */
        kUnknownError = 6,
        /**
        * @en
        * enum the callback of Changing the point of offer wall
        * @zh
        * 积分改变回调枚举值
        */
        kOfferWallOnPointsChanged = 7,
        /**
        * @en
        * enum the callback of receiving the reward of rewarded video
        * @zh
        * 激励视频返回奖励回调枚举值
        */
        kRewardedVideoWithReward = 8,
        /**
        * @en
        * enum the callback of finishing purchase ad
        * @zh
        * 应用内购买回调枚举值
        */
        kFeeFinished = 9,
        /**
        * @en
        * enum the callback of the advertisement clicked
        * @zh
        * 广告被点击回调枚举值
        */
        kAdsClicked = 10,
        /**
        * @en
        * enum the callback of the ads info empty
        * @zh
        * 广告失败回调枚举值
        */
        kAdsFailed = 11,
        /**
        * @en
        * enum the callback of the ads preload failed
        * @zh
        * 广告预加载失败回调枚举值
        */
        kAdsPreloadFailed = 12,
        /**
        * @en
        * enum the callback of the ads shown failed
        * @zh
        * 广告展示失败回调枚举值
        */
        kAdsShownFailed = 13,
        /**
        * @en
        * enum the callback of the ads should retry preload function by user
        * @zh
        * 需要重新预加载回调枚举值
        */
        kAdsRetryPreload = 14,
        /**
        * @en
        * enum the callback of the ads on leave
        * @zh
        * 广告离开回调枚举值
        */
        kAdsOnLeave = 15,
        /**
        * @en
        * enum the callback of the ads on impression
        * @zh
        * 广告曝光回调枚举值
        */
        kAdsOnAdImpression = 16,
        /**
        * @en
        * enum value is extension code
        * @zh
        * 广告扩展回调枚举值
        */
        kAdsExtension = 40000
    }
}
declare namespace sdkhub {
    /**
    * @en
    * Unified callback of fee plugin result listener
    * @zh
    * 支付类型插件统一回调枚举值
    */
    enum FeeResultCode {
        /**
        * @en
        * enum value is callback of succeeding in feeding
        * @zh
        * 支付成功回调枚举值
        */
        kFeeSucceed = 0,
        /**
        * @en
        * enum value is callback of failing to fee
        * @zh
        * 支付失败回调枚举值
        */
        kFeeFailed = 1,
        /**
        * @en
        * enum value is callback of canceling to fee
        * @zh
        * 支付取消回调枚举值
        */
        kFeeCancel = 2,
        /**
        * @en
        * enum value is callback of network error
        * @zh
        * 支付网络出错回调枚举值
        */
        kFeeNetworkError = 3,
        /**
        * @en
        * enum value is callback of incomplete info
        * @zh
        * 支付信息填写不完整回调枚举值
        */
        kFeeProductionIncomplete = 4,
        /**
        * @en
        * enum value is callback of succeeding in init sdk
        * @zh
        * 支付初始化成功回调枚举值
        */
        kFeeInitSucceed = 5,
        /**
        * @en
        * enum value is callback of failing to init sdk
        * @zh
        * 支付初始化失败调枚举值
        */
        kFeeInitFailed = 6,
        /**
        * @en
        * enum value is callback of feeding now
        * @zh
        * 广告曝光回调枚举值
        */
        kFeeNowFeeding = 7,
        /**
        * @en
        * enum value is callback of succeeding in recharging
        * @zh
        * 已购商品重新发送成功回调枚举值
        */
        kFeeRechargeSucceed = 8,
        /**
        * @en
        * enum value is extension code
        * @zh
        * 支付扩展回调枚举值
        */
        kFeeExtension = 30000
    }
}
declare namespace sdkhub {
    /**
    * @en
    * Unified callback of push plugin result listener
    * @zh
    * 推送类型插件统一回调枚举值
    */
    enum PushResultCode {
        /**
        * @en
        * enum value is callback of Receiving Message
        * @zh
        * 接受到推送消息回调枚举值
        */
        kPushReceiveMessage = 0,
        /**
        * @en
        * enum value is callback of Start Push Succeed
        * @zh
        * 开始推送成功回调枚举值
        */
        kStartPushSucceed = 1,
        /**
        * @en
        * enum value is callback of Start Push Failed
        * @zh
        * 开始推送失败回调枚举值
        */
        kStartPushFailed = 2,
        /**
        * @en
        * enum value is callback of Close Push Succeed
        * @zh
        * 关闭推送成功回调枚举值
        */
        kClosePushSucceed = 3,
        /**
        * @en
        * enum value is callback of Close Push Failed
        * @zh
        * 关闭推送失败回调枚举值
        */
        kClosePushFailed = 4,
        /**
        * @en
        * enum value is callback of Set Alias Succeed
        * @zh
        * 设置别名成功回调枚举值
        */
        kSetAliasSucceed = 5,
        /**
        * @en
        * enum value is callback of Set Alias Failed
        * @zh
        * 设置别名失败回调枚举值
        */
        kSetAliasFailed = 6,
        /**
        * @en
        * enum value is callback of Del Alias Succeed
        * @zh
        * 删除别名成功回调枚举值
        */
        kDelAliasSucceed = 7,
        /**
        * @en
        * enum value is callback of Del Alias Failed
        * @zh
        * 删除别名失败回调枚举值
        */
        kDelAliasFailed = 8,
        /**
        * @en
        * enum value is callback of Set Tags Succeed
        * @zh
        * 设置标签成功回调枚举值
        */
        kSetTagsSucceed = 9,
        /**
        * @en
        * enum value is callback of Set Tags Failed
        * @zh
        * 设置标签失败回调枚举值
        */
        kSetTagsFailed = 10,
        /**
        * @en
        * enum value is callback of Del Tags Succeed
        * @zh
        * 删除标签成功回调枚举值
        */
        kDelTagSucceed = 11,
        /**
        * @en
        * enum value is callback of Del Tags Failed
        * @zh
        * 删除标签失败回调枚举值
        */
        kDelTagsFailed = 12,
        /**
        * @en
        * enum value is extension code
        * @zh
        * 推送扩展回调枚举值
        */
        kPushExtension = 50000
    }
}
declare namespace sdkhub {
    /**
  * @en
  * enums of the position of toolbar by function `showToolBar`
  * @zh
  * `showToolBar` 方法使用的位置枚举值
  */
    enum ToolBarPlace {
        /**
        * @en
        * enum the toolbar is at topleft
        * @zh
        * 工具栏位置枚举值，左上方
        */
        kToolBarTopLeft = 1,
        /**
        * @en
        * enum the toolbar is at topright
        * @zh
        * 工具栏位置枚举值，右上方
        */
        kToolBarTopRight = 2,
        /**
        * @en
        * enum the toolbar is at midleft
        * @zh
        * 工具栏位置枚举值，正中左侧
        */
        /** enum the toolbar is at midleft. */
        kToolBarMidLeft = 3,
        /**
        * @en
        * enum the toolbar is at midright
        * @zh
        * 工具栏位置枚举值，正中右侧
        */
        /** enum the toolbar is at midright. */
        kToolBarMidRight = 4,
        /**
        * @en
        * enum the toolbar is at bottomleft.
        * @zh
        * 工具栏位置枚举值，左下方
        */
        kToolBarBottomLeft = 5,
        /**
        * @en
        * enum the toolbar is at bottomright
        * @zh
        * 工具栏位置枚举值，右下方
        */
        kToolBarBottomRight = 6
    }
}
declare namespace sdkhub {
    /**
    * @en
    * Unified callback of user plugin result listener
    * @zh
    * 用户类型插件统一回调枚举值
    */
    enum UserResultCode {
        /**
        * @en
        * enum value is callback of succeeding in initing sdk
        * @zh
        * 初始化成功回调枚举值
        */
        kInitSucceed = 0,
        /**
        * @en
        * enum value is callback of failing to init sdk
        * @zh
        * 初始化失败回调枚举值
        */
        kInitFailed = 1,
        /**
        * @en
        * enum value is callback of succeeding in login
        * @zh
        * 登陆成功回调枚举值
        */
        kLoginSucceed = 2,
        /**
        * @en
        * enum value is callback of network error
        * @zh
        * 登陆网络出错回调枚举值
        */
        kLoginNetworkError = 3,
        /**
        * @en
        * enum value is callback of no need login
        * @zh
        * 无需登陆回调枚举值
        */
        kLoginNoNeed = 4,
        /**
        * @en
        * enum value is callback of failing to login
        * @zh
        * 登录失败回调枚举值
        */
        kLoginFailed = 5,
        /**
        * @en
        * enum value is callback of canceling to login
        * @zh
        * 登录取消回调枚举值
        */
        kLoginCancel = 6,
        /**
        * @en
        * enum value is callback of succeeding in logout
        * @zh
        * 登出成功回调枚举值
        */
        kLogoutSucceed = 7,
        /**
        * @en
        * enum value is callback of failing to logout
        * @zh
        * 登出取消回调枚举值
        */
        kLogoutFailed = 8,
        /**
        * @en
        * enum value is callback after enter platform
        * @zh
        *
        */
        kPlatformEnter = 9,
        /**
        * @en
        * enum value is callback after exit antiAddiction
        * @zh
        * 进入平台中心回调枚举值
        */
        kPlatformBack = 10,
        /**
        * @en
        * enum value is callback after exit pause page
        * @zh
        * 退出平台中心回调枚举值
        */
        kPausePage = 11,
        /**
        * @en
        * enum value is callback after exit exit page
        * @zh
        * 退出暂停界面回调枚举值
        */
        kExitPage = 12,
        /**
        * @en
        * enum value is callback after querying antiAddiction
        * @zh
        * 渠道退出界面回调枚举值
        */
        kAntiAddictionQuery = 13,
        /**
        * @en
        * enum value is callback after registering real name
        * @zh
        * 防沉迷查询结果回调枚举值
        */
        kRealNameRegister = 14,
        /**
        * @en
        * enum value is callback of succeeding in switching account
        * @zh
        * 实名注册回调枚举值
        */
        kAccountSwitchSucceed = 15,
        /**
        * @en
        * enum value is callback of failing to switch account
        * @zh
        * 切换账号成功回调枚举值
        */
        kAccountSwitchFailed = 16,
        /**
        * @en
        * enum value is callback of open the shop
        * @zh
        * 打开商店回调枚举值
        */
        kOpenShop = 17,
        /**
        * @en
        * enum value is callback of canceling to switch account
        * @zh
        * 切换账号取消回调枚举值
        */
        kAccountSwitchCancel = 18,
        /**
        * @en
        * enum value is callback of no channel exit page
        * @zh
        * 游戏退出界面回调枚举值
        */
        kGameExitPage = 19,
        /**
        * @en
        * enum value is callback of succeeding in submit
        * @zh
        * 提交分数成功回调枚举值
        */
        kScoreSubmitSucceed = 20,
        /**
        * @en
        * enum value is callback of failing to submit
        * @zh
        * 提交分数失败回调枚举值
        */
        kScoreSubmitFailed = 21,
        /**
        * @en
        * enum value is callback of succeeding in unlocking
        * @zh
        * 成就解锁成功回调枚举值
        */
        kAchUnlockSucceed = 22,
        /**
        * @en
        * enum value is callback of failing to unlock
        * @zh
        * 成就解锁失败回调枚举值
        */
        kAchUnlockFailed = 23,
        /**
        * @en
        * enum value is callback of show loaderBoard succeed
        * @zh
        * 显示排行榜成功回调枚举值
        */
        kShowLeaderBoardSucceed = 24,
        /**
        * @en
        * enum value is callback of show loaderBoard failed
        * @zh
        * 显示排行榜失败回调枚举值
        */
        kShowLeaderBoardFailed = 25,
        /**
        * @en
        * enum value is callback of show achievement succeed
        * @zh
        * 显示成就榜成功回调枚举值
        */
        kShowAchievementSucceed = 26,
        /**
        * @en
        * enum value is callback of show achievement failed
        * @zh
        * 显示成就榜失败回调枚举值
        */
        kShowAchievementFailed = 27,
        /**
        * @en
        * enum value is callback of server verify
        * @zh
        * 返回登录信息，需要做服务端验证回调枚举值
        */
        kServerVerify = 28,
        /**
        * @en
        * enum value is extension code
        * @zh
        * 用户扩展回调枚举值
        */
        kUserExtension = 20000
    }
}
declare namespace sdkhub {
    /**
   * @en
   * Unified callback of all plugins result listener
   * @zh
   * 统一回调监听接口
   */
    interface PluginResultListener {
        (code: number, msg: string): void;
    }
}
declare namespace sdkhub {
    /**
     * @en
     * All plugin protocols extends from this
     * @zh
     * 各功能插件对象均继承于此模块，提供各功能插件的公用方法
     */
    class PluginProtocol {
        /**
         * @en
         * Check function the plugin support or not
         * @zh
         * 判断插件是否支持该方法。调用各类型方法前，可以先调用本方法，检查插件是否支持该方法，再做调用。由于 JS 层调用不存在的方法名，也不会导致崩溃，该方法可选
         * @param {string} funcName function name
         * @returns {boolean} if the function support, return true, else return false
         * @example
         * ```
         * if (sdkhub.getUserPlugin().isFunctionSupported("funcName")) {}
         * ```
         */
        isFunctionSupported(funcName: string): boolean;
        /**
         * @en
         * get the version of plugin
         * @zh
         * 获取插件版本号，例如 "1.0.0_4.0.3"，下划线前为插件的版本号，下划线后为接入平台 SDK 的版本号。同一个插件中，不同类型的 SDK 版本号也可能存在差异，所以不同类型插件获取的后半部分 **SDK 版本号** 的值也可能不同
         * @returns {string} the version of plugin
         * @example
         * ```
         * var pluginVersion = sdkhub.getUserPlugin().getPluginVersion();
         * ```
         */
        getPluginVersion(): string;
        /**
         * @en
         * get the version of sdk
         * @zh
         * 获取插件对应 SDK 版本号，例如 "4.0.3"，平台 SDK 的版本号。同一个插件中，不同类型的 SDK 版本号也可能存在差异
         * @returns {string} the version of sdk
         * @example
         * ```
         * var sdkVersion = sdkhub.getUserPlugin().getSDKVersion();
         * ```
         */
        getSDKVersion(): string;
        /**
        * @en
        * get the id of plugin
        * @zh
        * 获取插件 ID。接入 Cocos SDKHub 的游戏工程，可能接入多个渠道或多个相同功能的 SDK 插件，需要在代码中通过插件 ID 进行判断
        * @returns {string} the id of plugin
        * @example
        * ```
        * var feePluginId = sdkhub.getFeePlugin().getPluginId();
        * ```
        */
        getPluginId(): string;
        /**
         * @en
         * Call plugin function with function name
         * @zh
         * 若接入的 SDK 中的所需方法，不在 Cocos SDKHub 框架的封装定义中，则我们需要通过该方法，通过传入方法名与所需参数进行调用。可参考各 SDK 插件说明文档和 Sample 中的调用方式
         * @param {string} funcName function name
         * @param {any=} params params
         * @example
         * ```
         * var params = {...};
         * sdkhub.getUserPlugin().callFuncWithParam("funcName", params);
         * ```
         */
        callFuncWithParam(funcName: string, params?: any): void;
        /**
         * @en
         * Call plugin function with function name
         * @zh
         * 需要直接返回 String 值的扩展调用方法
         * @param {string} funcName function name
         * @param {any=} params params
         * @returns {string} the plugin function return value
         * @example
         * ```
         * var params = {...};
         * var str = sdkhub.getUserPlugin().callStringFuncWithParam("funcName", params);
         * ```
         */
        callStringFuncWithParam(funcName: string, params?: any): string;
        /**
         * @en
         * Call plugin function with function name
         * @zh
         * 需要直接返回 Number 整数（对应 C++ 侧为 Int 型）值的扩展调用方法
         * @param {string} funcName function name
         * @param {any=} params params
         * @returns {number} the plugin function return value
         * @example
         * ```
         * var params = {...};
         * var intValue = sdkhub.getUserPlugin().callIntFuncWithParam("funcName", params);
         * ```
         */
        callIntFuncWithParam(funcName: string, params?: any): number;
        /**
         * @en
         * Call plugin function with function name
         * @zh
         * 需要直接返回 Boolean 值的扩展调用方法
         * @param {string} funcName function name
         * @param {any=} params params
         * @returns {boolean} the plugin function return value
         * @example
         * ```
         * var params = {...};
         * var boolValue = sdkhub.getUserPlugin().callBoolFuncWithParam("funcName", params);
         * ```
         */
        callBoolFuncWithParam(funcName: string, params?: any): boolean;
        /**
         * @en
         * Call plugin function with function name
         * @zh
         * 需要直接返回 Number 浮点数（对应 C++ 侧为 Float 型）值的扩展方法调用
         * @example
         * ```
         * var params = {...};
         * var floatValue = sdkhub.getUserPlugin().callFloatFuncWithParam("funcName", params);
         * ```
         * @param {string} funcName function name
         * @param {any=} params params
         * @returns {number} the plugin function return value
         */
        callFloatFuncWithParam(funcName: string, params?: any): number;
        /**
         * @internal
         * get plugin name
         * @returns {string} the name of plugin
         */
        getPluginName(): string;
        /**
         * @internal
         * set plugin name
         * @param {string} name plugin name
         */
        setPluginName(name: string): void;
        /**
         * @en
         * set the plugin listener
         * @zh
         * 设置该功能对象的回调监听
         * @param {PluginResultListener} listeners the listener fucntion
         * @param {any} _this this object
         * @example
         * ```
         * sdkhub.getUserPlugin().setListener(this.onUserResult, this);
         * ```
         */
        setListener(listeners: PluginResultListener, _this: any): void;
        /**
         * @en
         * remove the plugin listener
         * @zh
         * 移除该功能插件对象的回调监听
         * @example
         * ```
         * sdkhub.getUserPlugin().removeListener();
         * ```
         */
        removeListener(): void;
    }
}
declare namespace sdkhub {
    /**
     * @en
     * Ads plugin protocol
     * @zh
     * 广告插件对象类
     */
    class ProtocolAds extends PluginProtocol {
        /**
         * @en
         * preload ad view
         * @zh
         * 预加载广告。部分类型广告显示前，需要先调用本方法。回调成功后才能调用显示广告方法 `showAds`
         * 传入参数请参考对应 SDK 文档
         * @param params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = { "adType": "Reward", ... };
         * sdkhub.getAdsPlugin().preloadAds(params);
         * ```
         */
        preloadAds(params: any): void;
        /**
         * @en
         * show ad view
         * @zh
         * 显示广告。部分类型广告显示前，需要调用预加载方法 `preloadAds`。回调成功后才能调用显示广告方法。
         * 若需要显示 Banner 等类型广告，可能使用到 `AdsPos` 方位。
         * 传入参数请参考对应 SDK 文档
         * @param params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {"adType": "Banner", "pos": sdkhub.AdsPos.kPosBottom, ... };
         * sdkhub.getAdsPlugin().showAds(params);
         * ```
         */
        showAds(params: any): void;
        /**
         * @en
         * hide ad view
         * @zh
         * 隐藏广告。调用 SDK 的隐藏广告方法。或者通过插件实现。
         * 传入参数请参考对应 SDK 文档
         * @param params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {"adType": "Banner"};
         * sdkhub.getAdsPlugin().hideAds(params);
         * ```
         */
        hideAds(params: any): void;
    }
}
declare namespace sdkhub {
    /**
     * @en
     * Custom plugin protocol
     * @zh
     * 自定义插件对象类，所有方法均需要通过扩展方法调用。
     */
    class ProtocolCustom extends PluginProtocol {
    }
}
declare namespace sdkhub {
    /**
     * @en
     * Payment plugin protocol
     * @zh
     * 支付插件对象类。考虑过去苹果 AppStore 审核方面等的问题，我们将支付关键字设为 `fee`
     */
    class ProtocolFee extends PluginProtocol {
        /**
         * @en
         * call purchase function. For different plugins, the parameter should have other keys to fee. Look at the manual of plugins.
         * @zh
         * 调用 SDK 的支付方法 不同插件可能需要不同的支付参数，请参考对应插件的文档
         * @param params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {
         *     "Product_Id": "2",
         *     "Product_Name": "10元宝",
         *     "Product_Price": "1",
         *     "Product_Count": "1",
         *     ...
         * }
         * sdkhub.getFeePlugin().feeForProduct(params);
         * ```
         */
        feeForProduct(params: any): void;
    }
}
declare namespace sdkhub {
    /**
     * @en
     * Push plugin protocol
     * @zh
     * 推送插件对象类
     */
    class ProtocolPush extends PluginProtocol {
        /**
         * @en
         * start/register Push services
         * @zh
         * 开始推送，调用 SDK 的开始或注册推送方法，在成功回调中获取推送 Token。
         * @example
         * ```
         * sdkhub.getPushPlugin().startPush();
         * ```
         */
        startPush(): void;
        /**
         * @en
         * close Push services
         * @zh
         * 关闭推送
         * @example
         * ```
         * sdkhub.getPushPlugin().closePush();
         * ```
         */
        closePush(): void;
        /**
         * @en
         * set alias
         * @zh
         * 设置别名
         * @param {string} alias alias
         * @example
         * ```
         * var params = "alias1";
         * sdkhub.getPushPlugin().setAlias(params);
         * ```
         */
        setAlias(alias: string): void;
        /**
         * @en
         * delete alias
         * @zh
         * 删除别名
         * @param {string} alias alias
         * @example
         * ```
         * var params = "alias1";
         * sdkhub.getPushPlugin().delAlias(params);
         * ```
         */
        delAlias(alias: string): void;
        /**
         * @en
         * set tags
         * @zh
         * 设置标签，需要传入字符串数组
         * @param {string} tags tags
         * @example
         * ```
         * var params = ["tag1", "tag2"];
         * sdkhub.getPushPlugin().setTags(params)
         * ```
         */
        setTags(tags: any): void;
        /**
         * @en
         * delete tags
         * @zh
         * 删除标签，需要传入字符串数组
         * @param {string} tags tags
         * @example
         * ```
         * var params = ["tag1", "tag2"];
         * sdkhub.getPushPlugin().delTags(params)
         * ```
         */
        delTags(tags: any): void;
    }
}
declare namespace sdkhub {
    /**
     * @en
     * User plugin protocol
     * @zh
     * 用户插件对象类
     */
    class ProtocolUser extends PluginProtocol {
        /**
         * @en
         * user login
         * @zh
         * 登录，需要游戏对登录后的信息做处理，判断登录状态
         * @example
         * ```
         * sdkhub.getUserPlugin().login();
         * ```
         */
        login(): void;
        /**
         * @en
         * user logout
         * @zh
         * 登出，游戏端需要在回调中判断当前登录状态
         * @example
         * ```
         * sdkhub.getUserPlugin().logout();
         * ```
         */
        logout(): void;
        /**
         * @en
         * set user info
         * @zh
         * 设置用户登录信息，若 SDK 需要服务端验证后才能获得唯一用户 ID。需要将插件所需的登录信息回传给 Cocos SDKHub
         * @param info the user info for the method, please refer to the attached document
         * @example
         * ```
         * var params = {
         *     userID : "890839221",
         *     userName : "test_name"
         * }
         * sdkhub.getUserPlugin().setUserInfo(params);
         * ```
         */
        setUserInfo(info: any): void;
        /**
         * @en
         * get user info
         * @zh
         * 获取用户登录信息。若 SDK 可以在客户端完成登录验证并获取到用户唯一 ID。可通过该方法获取登录信息。可以读取 userID 参数作为用户唯一 ID
         * @returns {any} user info
         * @example
         * ```
         * var userInfo = sdkhub.getUserPlugin().getUserInfo();
         * ```
         */
        getUserInfo(): any;
        /**
         * @en
         * show toolbar with place
         * @zh
         * 显示浮标，大部分情况无需开发者主动调用。部分插件需要传入 `ToolBarPlace` 作为浮动工具栏初始位置
         * @param {ToolBarPlace} toolPlace place
         * @example
         * ```
         * sdkhub.getUserPlugin().showToolBar(sdkhub.ToolBarPlace.kToolBarTopLeft);
         * ```
         */
        showToolBar(toolPlace: ToolBarPlace): void;
        /**
         * @en
         * hide toolbar
         * @zh
         * 隐藏浮标，大部分情况无需开发者主动调用。
         * @example
         * ```
         * sdkhub.getUserPlugin().hideToolBar();
         * ```
         */
        hideToolBar(): void;
        /**
         * @en
         * show the page of achievements
         * @zh
         * 展示成就列表。若需要调用，传入参数需参考对应插件文档
         * @param {any} params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {...};
         * sdkhub.getUserPlugin().showAchievements(params);
         * ```
         */
        showAchievements(params: any): void;
        /**
         * @en
         * unlock achievement feature
         * @zh
         * 解锁成就事件。若需要调用，传入参数需参考对应插件文档
         * @param {any} params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {...}
         * sdkhub.getUserPlugin().unlockAchievement(params);
         * ```
         */
        unlockAchievement(params: any): void;
        /**
         * @en
         * show the id of LeaderBoard page
         * @zh
         * 展示排行榜。若需要调用，传入参数需参考对应插件文档
         * @param {any} params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {...};
         * sdkhub.getUserPlugin().showAchievements(params);
         * ```
         */
        showLeaderBoard(params: any): void;
        /**
         * @en
         * submit the score
         * @zh
         * 提交分数。若需要调用，传入参数需参考对应插件文档
         * @param {any} params the params for the method, please refer to the attached document
         * @example
         * ```
         * var params = {...};
         * sdkhub.getUserPlugin().submitScore(params);
         * ```
         */
        submitScore(params: any): void;
    }
}
