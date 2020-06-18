
var conf = require('Configs');

cc.Class({
    extends: cc.Component,

    properties: {
        lblButton: {
            default: null,
            type: cc.Label,
        },
        btnButton: {
            default: null,
            type: cc.Button,
        },
        parentname: null, // 上一个节点名称
        currentname: null, // 当前节点名称

        inAppPurchaseData: null //支付回执，consumeOwnedPurchase 使用
    },

    start() {
        this.btnButton.node.on('touchend', this.buttonPressed.bind(this));
        this.btnScene = cc.find("Canvas").getComponent("ButtonsScene");
    },

    buttonPressed() {
        console.log(this.currentname, this.lblButton.string + " button pressed");

        if (this.parentname == "top" && this.lblButton.string == "return") {
            this.btnScene.setButtons(this.topConfig);
            return;
        }
        else if (this.parentname == "user" && this.lblButton.string == "return") {
            this.btnScene.setButtons(conf.user);
            return;
        }
        else if (this.currentname == "top") {
            if (this.lblButton.string == "Account & Game") {
                this.btnScene.setButtons(conf.user);
            }
            else if (this.lblButton.string == "IAP") {
                this.btnScene.setButtons(conf.fee);
            }
            else if (this.lblButton.string == "Ads") {
                this.btnScene.setButtons(conf.ads);
            }
            else if (this.lblButton.string == "Custom") {
                this.btnScene.setButtons(conf.custom);
            }
            return;
        }
        //处理三级菜单
        else if (this.currentname == "user") {
            if (this.lblButton.string == "showAchievements") {
                this.btnScene.setButtons(conf.showAchievements);
                return;
            }
            else if (this.lblButton.string == "unlockAchievement") {
                this.btnScene.setButtons(conf.unlockAchievement);
                return;
            }
            else if (this.lblButton.string == "submitScore") {
                this.btnScene.setButtons(conf.submitScore);
                return;
            }
            else if (this.lblButton.string == "showLeaderBoard") {
                this.btnScene.setButtons(conf.showLeaderBoard);
                return;
            }
        }
        // User System
        if (this.currentname == "user") {
            for (var i = conf.INIT_METHOD; i < conf.user.length; i++) {
                if (this.lblButton.string == conf.user[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //login
                            this.sUser.login();
                            break;
                        case conf.INIT_METHOD + 1:
                            //logout
                            this.sUser.callFuncWithParam("logout", null);
                            break;
                        case conf.INIT_METHOD + 2:
                            //showToolBar
                            this.sUser.showToolBar(1);
                            break;
                        case conf.INIT_METHOD + 3:
                            //hideToolBar
                            this.sUser.hideToolBar();
                            break;
                        case conf.INIT_METHOD + 4:
                            //cancelAuthorization
                            this.sUser.callFuncWithParam("cancelAuthorization", null);
                            break;
                        case conf.INIT_METHOD + 5:
                            //getUserInfo = getCurrentPlayer()
                            this.sUser.callFuncWithParam("getUserInfo", null);
                            break;
                        case conf.INIT_METHOD + 10:
                            //submitEvent
                            var params = SDKHub.PluginParam.create({
                                "eventId": "A29DB82609936BE9DBB44CF7AFBBAECD5D2B7F14A05FB2B37EF543E7622F7B7F",
                                "growAmount": "20"
                            });
                            this.sUser.callFuncWithParam("submitEvent", params, null);
                            break;
                        case conf.INIT_METHOD + 11:
                            //getEvent
                            //eventIds
                            //forceLoad
                            var params = SDKHub.PluginParam.create({});
                            this.sUser.callFuncWithParam("getEvent", params, null);
                            break;
                        case conf.INIT_METHOD + 12:
                            //submitPlayerEventStart
                            this.sUser.callFuncWithParam("submitPlayerEventStart", null);
                            break;
                        case conf.INIT_METHOD + 13:
                            //getExtraInfo
                            this.sUser.callFuncWithParam("getExtraInfo", null);
                            break;
                        case conf.INIT_METHOD + 14:
                            //submitPlayerEventEnd
                            this.sUser.callFuncWithParam("submitPlayerEventEnd", null);
                            break;
                        case conf.INIT_METHOD + 15:
                            //archiveFunction
                            console.log("archiveFunction not supported");
                            break;
                        case conf.INIT_METHOD + 16:
                            //getGamePlayerStats
                            var params = SDKHub.PluginParam.create(0);
                            this.sUser.callFuncWithParam("getGamePlayerStats", params, null);
                            break;
                        case conf.INIT_METHOD + 17:
                            //getGameSummary
                            var params = SDKHub.PluginParam.create(0);
                            this.sUser.callFuncWithParam("getGameSummary", params, null);
                            break;
                        default:
                            console.log("user function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "fee") {
            for (var i = conf.INIT_METHOD; i < conf.fee.length; i++) {
                if (this.lblButton.string == conf.fee[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //feeForProduct
                            var params = {
                                "Product_Id": "2", // 必传
                                "Product_Name": "10元宝", //
                                "Product_Price": "1", //
                                "Product_Count": "1", //
                                "Product_Desc": "gold",
                                "Coin_Name": "元宝",
                                "Coin_Rate": "10",
                                "Role_Id": "123456",
                                "Role_Name": "test",
                                "Role_Grade": "1",
                                "Role_Balance": "1",
                                "Vip_Level": "1",
                                "Party_Name": "test",
                                "Server_Id": "1",
                                "Server_Name": "test",
                                "EXT": "test", //必传
                                "payType": 0, //0: 按价格支付 1: 按商品配置支付，默认为1
                                "priceType": 0, //0: consumable; 1: non-consumable; 必传
                                "serviceCatalog": "X6", //游戏设置为"X6"，应用设置为"X5"
                                "currency": "CNY", //货币，默认 CNY
                                "country": "CN" //国家或地区，默认 CN
                            }
                            this.sFee.feeForProduct(params);
                            break;
                        case conf.INIT_METHOD + 1:
                            //isEnvReady
                            this.sFee.callFuncWithParam("isEnvReady", null);
                            break;
                        case conf.INIT_METHOD + 2:
                            //obtainProductInfo
                            var params = SDKHub.PluginParam.create({
                                "productIdList": "com.sdkboxv2.sample.huawei.item1,com.sdkboxv2.sample.huawei.item3",
                                "priceType": 0
                            });
                            this.sFee.callFuncWithParam("obtainProductInfo", params, null);
                            break;
                        case conf.INIT_METHOD + 3:
                            //consumeOwnedPurchase
                            console.log("consumeOwnedPurchase called after feeForProduct")
                            params = SDKHub.PluginParam.create("");
                            this.sFee.callFuncWithParam("obtainProductInfo", params, null);
                            break;
                        case conf.INIT_METHOD + 4:
                            //obtainOwnedPurchases
                            var params = SDKHub.PluginParam.create(0);
                            this.sFee.callFuncWithParam("obtainOwnedPurchases", params, null);
                            break;
                        case conf.INIT_METHOD + 5:
                            //obtainOwnedPurchaseRecord
                            var params = SDKHub.PluginParam.create(0);
                            this.sFee.callFuncWithParam("obtainOwnedPurchaseRecord", params, null);
                            break;
                        case conf.INIT_METHOD + 6:
                            //subscribeManager
                            break;
                        case conf.INIT_METHOD + 7:
                            //subscribeEdit
                            break;
                        default:
                            console.log("fee function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "ads") {
            for (var i = conf.INIT_METHOD; i < conf.ads.length; i++) {
                if (this.lblButton.string == conf.ads[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //showBannerAd
                            var params = { "adType": "Banner", "adId": "testw6vs28auh3" }
                            this.sAds.showAds(params);
                            break;
                        case conf.INIT_METHOD + 1:
                            //preloadRewardAd
                            var params = { "adType": "Reward", "adId": "testx9dtjwj8hp" };
                            this.sAds.preloadAds(params);
                            break;
                        case conf.INIT_METHOD + 2:
                            //showRewardAd
                            var params = { "adType": "Reward", "adId": "testx9dtjwj8hp" };
                            this.sAds.showAds(params);
                            break;
                        case conf.INIT_METHOD + 3:
                            //preloadInterstitialAd
                            var params = { "adType": "Interstitial", "adId": "testb4znbuh3n2" };
                            this.sAds.preloadAds(params);
                            break;
                        case conf.INIT_METHOD + 4:
                            //showInterstitialAd
                            var params = { "adType": "Interstitial", "adId": "testb4znbuh3n2" };
                            this.sAds.showAds(params);
                            break;
                        default:
                            console.log("ads function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "custom") {
            for (var i = conf.INIT_METHOD; i < conf.custom.length; i++) {
                if (this.lblButton.string == conf.custom[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //custom1
                            break;
                        case conf.INIT_METHOD + 1:
                            //custom2
                            break;
                        case conf.INIT_METHOD + 2:
                            //custom3
                            break;
                        case conf.INIT_METHOD + 3:
                            //custom4
                            break;
                        case conf.INIT_METHOD + 4:
                            //custom5
                            break;
                        case conf.INIT_METHOD + 5:
                            //custom6
                            break;
                        case conf.INIT_METHOD + 6:
                            //custom7
                            break;
                        case conf.INIT_METHOD + 7:
                            //custom8
                            console.log("custom8 invoked");
                            break;
                        default:
                            console.log("custom function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "showAchievements") {
            for (var i = conf.INIT_METHOD; i < conf.showAchievements.length; i++) {
                if (this.lblButton.string == conf.showAchievements[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //getShowAchievementListIntent
                            //改框架写法

                            var params = SDKHub.PluginParam.create({
                                "type": 1
                            });
                            this.sUser.callFuncWithParam("showAchievements", params, null);

                            break;
                        case conf.INIT_METHOD + 1:
                            //getAchievementList
                            var params = SDKHub.PluginParam.create({
                                "type": 0
                            });
                            this.sUser.callFuncWithParam("showAchievements", params, null);
                            break;
                        default:
                            console.log("showAchievements function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "unlockAchievement") {
            for (var i = conf.INIT_METHOD; i < conf.unlockAchievement.length; i++) {
                if (this.lblButton.string == conf.unlockAchievement[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //visualizeWithResult
                            var params = {
                                "type": "visualizeWithResult",
                                "achievementId": "5D9580837D32CB59CFEC89DAD39470CDF9B672033A2D6F14689BC01335818444"
                            };
                            this.sUser.unlockAchievement(params);
                            break;
                        case conf.INIT_METHOD + 1:
                            //growWithResult
                            var params = {
                                "type": "growWithResult",
                                "achievementId": "5D9580837D32CB59CFEC89DAD39470CDF9B672033A2D6F14689BC01335818444",
                                "stepNum": "3"
                            };
                            this.sUser.unlockAchievement(params);
                            break;
                        case conf.INIT_METHOD + 2:
                            //makeStepsWithResult
                            var params = {
                                "type": "makeStepsWithResult",
                                "achievementId": "5D9580837D32CB59CFEC89DAD39470CDF9B672033A2D6F14689BC01335818444",
                                "stepNum": "3"
                            };
                            this.sUser.unlockAchievement(params);
                            break;
                        case conf.INIT_METHOD + 3:
                            //reachWithResult
                            var params = {
                                "type": "reachWithResult",
                                "achievementId": "5D9580837D32CB59CFEC89DAD39470CDF9B672033A2D6F14689BC01335818444"
                            };
                            this.sUser.unlockAchievement(params);
                            break;
                        default:
                            console.log("unlockAchievement function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "submitScore") {
            for (var i = conf.INIT_METHOD; i < conf.submitScore.length; i++) {
                if (this.lblButton.string == conf.submitScore[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //getRankingSwitchStatus
                            var params = {
                                "type": "getRankingSwitchStatus",
                            };
                            this.sUser.submitScore(params);
                            break;
                        case conf.INIT_METHOD + 1:
                            //setRankingSwitchStatus
                            var params = {
                                "type": "setRankingSwitchStatus",
                                "stateValue": 1
                            };
                            this.sUser.submitScore(params);
                            break;
                        case conf.INIT_METHOD + 2:
                            //submitRankingScore
                            var params = {
                                "type": "submitRankingScore",
                                "rankingId": "2008EE56BB773FA325FFB1349D0D206A8B0EC3E9E2F0D32E786E574ADD10E7A1",
                                "score": "15000",
                                "scoreTips": "分数"
                            };
                            this.sUser.submitScore(params);
                            break;
                        default:
                            console.log("submitScore function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
        else if (this.currentname == "showLeaderBoard") {
            for (var i = conf.INIT_METHOD; i < conf.showLeaderBoard.length; i++) {
                if (this.lblButton.string == conf.showLeaderBoard[i]) {
                    switch (i) {
                        case conf.INIT_METHOD:
                            //getTotalRankingsIntent
                            var params = {
                                "type": "getTotalRankingsIntent",
                            };
                            this.sUser.showLeaderBoard(params);
                            break;
                        case conf.INIT_METHOD + 1:
                            //getRankingSummary
                            var params = {
                                "type": "getRankingSummary",
                                "rankingId": "2008EE56BB773FA325FFB1349D0D206A8B0EC3E9E2F0D32E786E574ADD10E7A1",
                                "isRealTime": "1"
                            };
                            this.sUser.showLeaderBoard(params);
                            break;
                        default:
                            console.log("showLeaderBoard function: '" + this.lblButton.string + "' not called");
                    }
                }
            }
        }
    },

    setContent(current, parent, name, topconfig, user, fee, ads) {
        this.parentname = parent;
        this.currentname = current;
        this.lblButton.string = name;
        this.topConfig = topconfig;
        this.sUser = user;
        this.sFee = fee;
        this.sAds = ads;
    }

    // update (dt) {},
});
