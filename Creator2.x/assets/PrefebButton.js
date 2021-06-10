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
    parentname: null,
    currentname: null,
  },

  start () {
    this.btnButton.node.on('touchend', this.buttonPressed.bind(this));
    this.btnScene = cc.find("Canvas").getComponent("ButtonsScene");
  },

  buttonPressed () {
    console.log(this.currentname, this.lblButton.string + " button pressed");

    if (this.parentname == "top" && this.lblButton.string == "return") {
      this.btnScene.setButtons(this.topConfig);
      return;
    } else if (this.parentname == "user" && this.lblButton.string == "return") {
      this.btnScene.setButtons(conf.user);
      return;
    } else if (this.currentname == "top") {
      if (this.lblButton.string == "Account & Game") {
        this.btnScene.setButtons(conf.user);
      } else if (this.lblButton.string == "IAP") {
        this.btnScene.setButtons(conf.fee);
      } else if (this.lblButton.string == "Ads") {
        this.btnScene.setButtons(conf.ads);
      } else if (this.lblButton.string == "Push") {
        this.btnScene.setButtons(conf.push);
      } else if (this.lblButton.string == "Custom") {
        this.btnScene.setButtons(conf.custom);
      }
      return;
    }
    //third menus
    else if (this.currentname == "user") {
      if (this.lblButton.string == "showAchievements") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          var params = {
            "achievement_id": conf.google.achievementId,
          };
          sdkhub.getUserPlugin().showAchievements(params);
          return;
        }
        this.btnScene.setButtons(conf.showAchievements);
        return;
      } else if (this.lblButton.string == "unlockAchievement") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          var params = {
            "achievement_id": conf.google.achievementId,
            // 阶段性成就需要
            // Phased achievement needs
            // "numSteps": "1", 
          };
          sdkhub.getUserPlugin().showLeaderBoard(params);
          return;
        }
        this.btnScene.setButtons(conf.unlockAchievement);
        return;
      } else if (this.lblButton.string == "submitScore") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          var params = {
            "leaderboard_id": conf.google.leaderboardId,
            "score": "6000",
          };
          sdkhub.getUserPlugin().submitScore(params);
          return;
        }
        this.btnScene.setButtons(conf.submitScore);
        return;
      } else if (this.lblButton.string == "showLeaderBoard") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          var params = {
            "leaderboard_id": conf.google.leaderboardId,
          };
          sdkhub.getUserPlugin().showLeaderBoard(params);
          return;
        }
        this.btnScene.setButtons(conf.showLeaderBoard);
        return;
      } else if (this.lblButton.string == "archive") {
        this.btnScene.setButtons(conf.archive);
        return;
      }
    }
    // User System
    if (this.currentname == "user") {
      for (var i = conf.INIT_METHOD; i < conf.user.length; i++) {
        if (this.lblButton.string == conf.user[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //init
              sdkhub.getUserPlugin().callFuncWithParam("init");
              break;
            case conf.INIT_METHOD + 1:
              //checkAppUpdate
              var params = {
                "showUpdateDialog": "1",
                "forceUpdate": "1"
              }
              sdkhub.getUserPlugin().callFuncWithParam("checkAppUpdate", params);
              break;
            case conf.INIT_METHOD + 2:
              //login
              sdkhub.getUserPlugin().login();
              break;
            case conf.INIT_METHOD + 3:
              //loginWithAuthorizationCode
              var params = "AuthorizationCode";
              sdkhub.getUserPlugin().callFuncWithParam("accountLogin", params);
              break;
            case conf.INIT_METHOD + 4:
              //loginWithIDToken
              var params = "IDToken";
              sdkhub.getUserPlugin().callFuncWithParam("accountLogin", params);
              break;
            case conf.INIT_METHOD + 5:
              //loginWithIDToken
              var params = "Slient";
              sdkhub.getUserPlugin().callFuncWithParam("accountLogin", params);
              break;
            case conf.INIT_METHOD + 6:
              //getCurrentPlayer
              sdkhub.getUserPlugin().callFuncWithParam("getCurrentPlayer");
              break;
            case conf.INIT_METHOD + 7:
              //logout
              sdkhub.getUserPlugin().logout();
              break;
            case conf.INIT_METHOD + 8:
              //showToolBar
              sdkhub.getUserPlugin().showToolBar(1);
              break;
            case conf.INIT_METHOD + 9:
              //hideToolBar
              sdkhub.getUserPlugin().hideToolBar();
              break;
            case conf.INIT_METHOD + 10:
              //getUserInfo
              var userInfo = sdkhub.getUserPlugin().getUserInfo();
              console.log("userInfo", JSON.stringify(userInfo));
              break;

            // Extension method, call by `callFuncWithParam`.
            case conf.INIT_METHOD + 16:
              //cancelAuthorization
              sdkhub.getUserPlugin().callFuncWithParam("cancelAuthorization");
              break;
            case conf.INIT_METHOD + 17:
              //submitEvent
              var params = {
                "eventId": conf.eventId,
                "growAmount": "20"
              };
              sdkhub.getUserPlugin().callFuncWithParam("submitEvent", params);
              break;
            case conf.INIT_METHOD + 18:
              //getEvent
              var params = {};
              sdkhub.getUserPlugin().callFuncWithParam("getEvent", params);
              break;
            case conf.INIT_METHOD + 19:
              //submitPlayerEventStart
              sdkhub.getUserPlugin().callFuncWithParam("submitPlayerEventStart");
              break;
            case conf.INIT_METHOD + 20:
              //getPlayerExtraInfo
              sdkhub.getUserPlugin().callFuncWithParam("getPlayerExtraInfo");
              break;
            case conf.INIT_METHOD + 21:
              //submitPlayerEventEnd
              sdkhub.getUserPlugin().callFuncWithParam("submitPlayerEventEnd");
              break;
            case conf.INIT_METHOD + 22:
              //getGamePlayerStats
              var params = 0;
              sdkhub.getUserPlugin().callFuncWithParam("getGamePlayerStats", params);
              break;
            case conf.INIT_METHOD + 23:
              //getGameSummary
              var params = 0;
              sdkhub.getUserPlugin().callFuncWithParam("getGameSummary", params);
              break;
            case conf.INIT_METHOD + 24:
              //setPopupsPosition
              var params = 1;
              sdkhub.getUserPlugin().callFuncWithParam("setPopupsPosition", params);
              break;
            case conf.INIT_METHOD + 25:
              //getAppId
              sdkhub.getUserPlugin().callFuncWithParam("getAppId");
              break;
            case conf.INIT_METHOD + 26:
              //cancelGameService
              sdkhub.getUserPlugin().callFuncWithParam("cancelGameService");
              break;
            case conf.INIT_METHOD + 27:
              //smsStartConsent
              sdkhub.getUserPlugin().callFuncWithParam("smsStartConsent");
            case conf.INIT_METHOD + 28:
              //revoke
              sdkhub.getUserPlugin().callFuncWithParam("revoke");
            default:
              console.log("user function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    }
    // IAP System
    else if (this.currentname == "fee") {
      for (var i = conf.INIT_METHOD; i < conf.fee.length; i++) {
        if (this.lblButton.string == conf.fee[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //feeForProduct
              if (sdkhub.getFeePlugin().getPluginId() === "FeeGooglePlay") {
                var params = {
                  "Product_Id": conf.google.productId,
                  "Order_Id": "gold_1px_0001",
                  "Sku_Type": conf.google.skuType, // inapp 或者 subs
                  "Role_Id": "test", // 可选
                };
                sdkhub.getFeePlugin().feeForProduct(params);
                return;
              }
              var params = {
                "Product_Id": conf.payProductId, // Product ID. Each product must have a unique ID
                "EXT": "test", //Information stored on the merchant side, which is passed by the app when the payment API is called
              }
              sdkhub.getFeePlugin().feeForProduct(params);
              break;

            // Extension method, call by `callFuncWithParam`.
            case conf.INIT_METHOD + 1:
              //isEnvReady
              sdkhub.getFeePlugin().callFuncWithParam("isEnvReady");
              break;
            case conf.INIT_METHOD + 2:
              //obtainProductInfo
              var params = {
                "productIdList": conf.obtainProductIdList,
                "priceType": 0
              };
              sdkhub.getFeePlugin().callFuncWithParam("obtainProductInfo", params);
              break;
            case conf.INIT_METHOD + 3:
              //consumeOwnedPurchase
              if (!conf.paymentReceipt.length) {
                console.log("consumeOwnedPurchase, paymentReceipt is null now, call function 'obtainOwnedPurchases' and try again.");
                return;
              }
              console.log("receipt", conf.paymentReceipt);
              //Please check if purchaseState == 0
              // -1: initialized, 0: purchased, 1: canceled, 2: refunded
              console.log("receipt[0].purchaseState = ", conf.paymentReceipt[0]["purchaseState"]);
              params = conf.paymentReceipt[0]["inAppPurchaseData"];
              conf.paymentReceipt.splice(0);
              console.log("consumeOwnedPurchase, param = ", params)
              sdkhub.getFeePlugin().callFuncWithParam("consumeOwnedPurchase", params);
              break;
            case conf.INIT_METHOD + 4:
              //obtainOwnedPurchases
              var params = 0;
              sdkhub.getFeePlugin().callFuncWithParam("obtainOwnedPurchases", params);
              break;
            case conf.INIT_METHOD + 5:
              //obtainOwnedPurchaseRecord
              var params = 0;
              sdkhub.getFeePlugin().callFuncWithParam("obtainOwnedPurchaseRecord", params);
              break;
            case conf.INIT_METHOD + 6:
              //startIapActivity
              var params = {
                "reqType": "TYPE_SUBSCRIBE_MANAGER_ACTIVITY"
              };
              sdkhub.getFeePlugin().callFuncWithParam("startIapActivity", params);
              break;
            case conf.INIT_METHOD + 7:
              //consume
              var params = {
                "purchaseToken": "purchaseToken",
                "skuType": "skuType"
              };
              // sdkhub.getFeePlugin().callFuncWithParam("consume", params);
              break;
            default:
              console.log("fee function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    }
    // Ads System
    else if (this.currentname == "ads") {
      for (var i = conf.INIT_METHOD; i < conf.ads.length; i++) {
        if (this.lblButton.string == conf.ads[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //showBannerAd
              console.log("showBannerAd");
              var params = {
                "adType": "Banner",
                "adId": "testw6vs28auh3",
                "pos": "0",
                "adSize": "BANNER_SIZE_360_144"
              };
              sdkhub.getAdsPlugin().showAds(params);
              break;
            case conf.INIT_METHOD + 1:
              //hideBannerAd
              console.log("hideBannerAd");
              var params = {
                "adType": "Banner"
              };
              sdkhub.getAdsPlugin().hideAds(params);
              break;
            case conf.INIT_METHOD + 2:
              //preloadRewardAd
              var params = {
                "adType": "Reward",
                "adId": "testx9dtjwj8hp"
              };
              sdkhub.getAdsPlugin().preloadAds(params);
              break;
            case conf.INIT_METHOD + 3:
              //showRewardAd
              var params = {
                "adType": "Reward",
                "adId": "testx9dtjwj8hp"
              };
              sdkhub.getAdsPlugin().showAds(params);
              break;
            case conf.INIT_METHOD + 4:
              //preloadInterstitialAd
              var params = {
                "adType": "Interstitial",
                "adId": "testb4znbuh3n2"
              };
              sdkhub.getAdsPlugin().preloadAds(params);
              break;
            case conf.INIT_METHOD + 5:
              //showInterstitialAd
              var params = {
                "adType": "Interstitial",
                "adId": "testb4znbuh3n2"
              };
              sdkhub.getAdsPlugin().showAds(params);
              break;
            case conf.INIT_METHOD + 6:
              //showNativeAd
              console.log("showNativeAd");
              var params = {
                "adType": "Native",
                "adId": "testy63txaom86",
                "nativeLayout": "native_small",
                "requestCustomDislikeThisAd": "1",
                "choicesPosition": "3",
                "videoConfiguration": "1",
                "audioFocusType": "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE",
                "startMuted": "0",
                "customizeOperateRequested": "1"
              };
              sdkhub.getAdsPlugin().showAds(params);
              break;
            case conf.INIT_METHOD + 7:
              //showNativeAd
              console.log("hideNativeAd");
              var params = {
                "adType": "Native"
              };
              sdkhub.getAdsPlugin().hideAds(params);
              break;
            default:
              console.log("ads function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    }
    // Push System
    else if (this.currentname == "push") {
      for (var i = conf.INIT_METHOD; i < conf.push.length; i++) {
        if (this.lblButton.string == conf.push[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //startPush
              sdkhub.getPushPlugin().startPush();
              break;
            case conf.INIT_METHOD + 1:
              //closePush
              sdkhub.getPushPlugin().closePush();
              break;
            case conf.INIT_METHOD + 2:
              //setAlias
              var params = "alias1";
              sdkhub.getPushPlugin().setAlias(params);
              break;
            case conf.INIT_METHOD + 3:
              //delAlias
              var params = "alias1";
              sdkhub.getPushPlugin().delAlias(params);
              break;
            case conf.INIT_METHOD + 4:
              //setTags
              var params = ["tag1", "tag2"];
              sdkhub.getPushPlugin().setTags(params)
              break;
            case conf.INIT_METHOD + 5:
              //delTags
              var params = ["tag1", "tag2"];
              sdkhub.getPushPlugin().delTags(params)
              break;

            // Extension method, call by `callFuncWithParam`.
            case conf.INIT_METHOD + 6:
              //turnOnPush
              sdkhub.getPushPlugin().callFuncWithParam("turnOnPush");
              break;
            case conf.INIT_METHOD + 7:
              //turnOnPush
              sdkhub.getPushPlugin().callFuncWithParam("turnOffPush");
              break;
            case conf.INIT_METHOD + 8:
              //sendMessage
              var params = {
                "messageId": "messageId" + Math.ceil(Math.random() * 100000),
                "messageType": "mType1",
                "collapseKey": "0",
                "sendMode": "1",
                "receiptMode": "1",
                "ttl": "10000",
                "key1": "value1",
                "key2": "value2",
                "key3": "value3"
              }
              sdkhub.getPushPlugin().callFuncWithParam("sendMessage", params);
              break;

            case conf.INIT_METHOD + 9:
              //getOdid
              sdkhub.getPushPlugin().callFuncWithParam("getOdid");
              break;
            case conf.INIT_METHOD + 10:
              //getAAID
              sdkhub.getPushPlugin().callFuncWithParam("getAAID");
              break;
            case conf.INIT_METHOD + 11:
              //deleteAAID
              sdkhub.getPushPlugin().callFuncWithParam("deleteAAID");
              break;
            case conf.INIT_METHOD + 12:
              //isAutoInitEnabled
              console.log("isAutoInitEnable, ret = ", sdkhub.getPushPlugin().callBoolFuncWithParam("isAutoInitEnabled"));
              break;
            case conf.INIT_METHOD + 13:
              //setAutoInitEnabled
              var params = 1 - sdkhub.getPushPlugin().callBoolFuncWithParam("isAutoInitEnabled");
              console.log("param = ", params);
              sdkhub.getPushPlugin().callFuncWithParam("setAutoInitEnabled", params);
              break;
            case conf.INIT_METHOD + 14:
              //getToken
              var subjectID = conf.subjectId; // Please replace to subjectID from AGCconsole
              sdkhub.getPushPlugin().callFuncWithParam("getToken", subjectID);
              break;
            case conf.INIT_METHOD + 15:
              //deleteToken
              var subjectID = conf.subjectId; // Please replace to subjectID from AGC console
              sdkhub.getPushPlugin().callFuncWithParam("deleteToken", subjectID);
              break;
            case conf.INIT_METHOD + 16:
              //isSupportProfile
              console.log("isSupportProfile, ret = ", sdkhub.getPushPlugin().callBoolFuncWithParam("isSupportProfile"));
              break;
            case conf.INIT_METHOD + 17:
              //addProfile
              var params = {
                "type": "CUSTOM_PROFILE",
                "profileId": "PROFILE_ID_001"
              }
              sdkhub.getPushPlugin().callFuncWithParam("addProfile", params);
              break;
            case conf.INIT_METHOD + 18:
              //deleteProfile
              var params = {
                "type": "CUSTOM_PROFILE",
                "profileId": "PROFILE_ID_001"
              }
              sdkhub.getPushPlugin().callFuncWithParam("deleteProfile", params);
              break;
            default:
              console.log("push function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    } else if (this.currentname == "showAchievements") {
      for (var i = conf.INIT_METHOD; i < conf.showAchievements.length; i++) {
        if (this.lblButton.string == conf.showAchievements[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              var params = {
                "type": "getShowAchievementListIntent"
              };
              sdkhub.getUserPlugin().showAchievements(params);
              break;
            case conf.INIT_METHOD + 1:
              //getAchievementList
              var params = {
                "type": "getAchievementList",
                "forceReload": "1"
              };
              sdkhub.getUserPlugin().showAchievements(params);
              break;
            default:
              console.log("showAchievements function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    } else if (this.currentname == "submitScore") {
      for (var i = conf.INIT_METHOD; i < conf.submitScore.length; i++) {
        if (this.lblButton.string == conf.submitScore[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //getRankingSwitchStatus
              var params = {
                "type": "getRankingSwitchStatus",
              };
              sdkhub.getUserPlugin().submitScore(params);
              break;
            case conf.INIT_METHOD + 1:
              //setRankingSwitchStatus
              var params = {
                "type": "setRankingSwitchStatus",
                "stateValue": 1
              };
              sdkhub.getUserPlugin().submitScore(params);
              break;
            case conf.INIT_METHOD + 2:
              //submitRankingScore
              var params = {
                "type": "submitRankingScore",
                "rankingId": conf.rankingId,
                "score": "15000",
                "scoreTips": "分数",
              };
              sdkhub.getUserPlugin().submitScore(params);
              break;
            case conf.INIT_METHOD + 3:
              //submitScoreWithResult
              var params = {
                "type": "submitScoreWithResult",
                "rankingId": conf.rankingId,
                "score": "18000",
                "scoreTips": "分数",
                "timeDimension": "1"
              };
              sdkhub.getUserPlugin().submitScore(params);
              break;
            default:
              console.log("submitScore function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    } else if (this.currentname == "showLeaderBoard") {
      for (var i = conf.INIT_METHOD; i < conf.showLeaderBoard.length; i++) {
        if (this.lblButton.string == conf.showLeaderBoard[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //getRankingsIntent
              var params = {
                "type": "getRankingsIntent",
              };
              sdkhub.getUserPlugin().showLeaderBoard(params);
              break;
            case conf.INIT_METHOD + 1:
              //getRankingSummary
              var params = {
                "type": "getRankingSummary",
                "rankingId": conf.rankingId,
                "isRealTime": "1"
              };
              sdkhub.getUserPlugin().showLeaderBoard(params);
              break;
            case conf.INIT_METHOD + 2:
              //getCurrentPlayerRankingScore
              var params = {
                "type": "getCurrentPlayerRankingScore",
                "rankingId": conf.rankingId,
                "timeDimension": "2"
              };
              sdkhub.getUserPlugin().showLeaderBoard(params);
              break;
            case conf.INIT_METHOD + 3:
              //getPlayerCenteredRankingScores
              var params = {
                "type": "getPlayerCenteredRankingScores",
                "rankingId": conf.rankingId,
                "timeDimension": "2",
                "maxResults": "15",
                "isRealTime": "1"
              };
              sdkhub.getUserPlugin().showLeaderBoard(params);
              break;
            case conf.INIT_METHOD + 4:
              //getMoreRankingScores
              var params = {
                "type": "getMoreRankingScores",
                "rankingId": conf.rankingId,
                "offsetPlayerRank": "1",
                "maxResults": "15",
                "pageDirection": "0",
                "isRealTime": "1"
              };
              sdkhub.getUserPlugin().showLeaderBoard(params);
              break;
            case conf.INIT_METHOD + 5:
              //getRankingTopScores
              var params = {
                "type": "getRankingTopScores",
                "rankingId": conf.rankingId,
                "offsetPlayerRank": "1",
                "maxResults": "15",
                "pageDirection": "0",
                "timeDimension": "2"
              };
              sdkhub.getUserPlugin().showLeaderBoard(params);
              break;
            default:
              console.log("showLeaderBoard function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    } else if (this.currentname == "unlockAchievement") {
      for (var i = conf.INIT_METHOD; i < conf.unlockAchievement.length; i++) {
        if (this.lblButton.string == conf.unlockAchievement[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //visualize
              var params = {
                "type": "visualize",
                "achievementId": "AFA15504BF6E5B21FB1B43F8EE66426B087C5C48FF4D7CF6224A2BA0AA244537"
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 1:
              //visualizeWithResult
              var params = {
                "type": "visualizeWithResult",
                "achievementId": "AFA15504BF6E5B21FB1B43F8EE66426B087C5C48FF4D7CF6224A2BA0AA244537"
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 2:
              //grow
              var params = {
                "type": "grow",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 3:
              //growWithResult
              var params = {
                "type": "growWithResult",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 4:
              //makeSteps
              var params = {
                "type": "makeSteps",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 5:
              //makeStepsWithResult
              var params = {
                "type": "makeStepsWithResult",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 6:
              //reach
              var params = {
                "type": "reach",
                "achievementId": conf.achievementId
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            case conf.INIT_METHOD + 7:
              //reachWithResult
              var params = {
                "type": "reachWithResult",
                "achievementId": conf.achievementId
              };
              sdkhub.getUserPlugin().unlockAchievement(params);
              break;
            default:
              console.log("unlockAchievement function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    } else if (this.currentname == "archive") {
      for (var i = conf.INIT_METHOD; i < conf.archive.length; i++) {
        if (this.lblButton.string == conf.archive[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              //setScopeList
              console.log("Please call the method before login.");
              var params = {
                "type": "setScopeList",
              }
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 1:
              //addArchive
              var params = {
                "type": "addArchive",
                "activeTime": "5000",
                "currentProgress": "50",
                "archiveDetails": "time = 5000, progress = 50",
                "descInfo": "savedata" + Math.ceil(Math.random() * 100),
                "thumbnail": "archiveIcon.png",
                "thumbnailMimeType": "png",
                "isSupportCache": "1",
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 2:
              //removeArchive
              var params = {
                "type": "removeArchive",
                "archiveId": "AA14I0V4G_gChJWeU_H2RRQalZZT5hvwA",
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 3:
              //getLimitThumbnailSize
              var params = {
                "type": "getLimitThumbnailSize",
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 4:
              //getLimitDetailsSize
              var params = {
                "type": "getLimitDetailsSize",
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 5:
              //getShowArchiveListIntent
              var params = {
                "type": "getShowArchiveListIntent",
                "title": "Savedata",
                "allowAddBtn": "1", //optional, default = "0"
                "allowDeleteBtn": "1", //optional, default = "0"
                "maxArchive": "5", //optional, default = "-1"
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 6:
              //getArchiveSummaryList
              var params = {
                "type": "getArchiveSummaryList",
                "isRealTime": "0", //optional, default = "1"
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 7:
              //loadArchiveDetails
              var params = {
                "type": "loadArchiveDetails",
                "diffStrategy": "STRATEGY_TOTAL_PROGRESS",
                "archiveId": "AA14I0V4G_gChJWeU_H2RRQalZZT5hvwA",
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            case conf.INIT_METHOD + 8:
              //updateArchive
              var params = {
                "type": "updateArchive",
                //"selectArchive": "recentArchive",
                "archiveId": "AA14I0V4G_gChJWeU_H2RRQalZZT5hvwA",
                "activeTime": "8000",
                "currentProgress": "60",
                "archiveDetails": "time=8000,progress=60",
                "descInfo": "savedata" + Math.ceil(Math.random() * 100),
                "thumbnail": "archiveIcon.png",
                "thumbnailMimeType": "png",
              };
              sdkhub.getUserPlugin().callFuncWithParam("archive", params);
              break;
            default:
              console.log("archive function: '" + this.lblButton.string + "' not called");
          }
        }
      }
    }
  },

  setContent (current, parent, name, topconfig) {
    this.parentname = parent;
    this.currentname = current;
    this.lblButton.string = name;
    this.topConfig = topconfig;
  }
});