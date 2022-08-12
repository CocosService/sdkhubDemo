
import { _decorator, Component, Node, Button, Label } from 'cc';
import { conf } from './Configs';
const { ccclass, property } = _decorator;
@ccclass('PrefabButton')
export class PrefabButton extends Component {
  @property({ type: Label })
  public lblButton: Label | null = null;
  @property({ type: Button })
  public btnButton: Button | null = null;
  @property
  public parentname = "";
  @property
  public currentname = "";
  @property
  public topConfig = conf.top;
  @property
  public buttonScene: any | null = null;
  @property
  public params: any | null = null;

  start() {
    this.btnButton!.node.on(Button.EventType.CLICK, this.buttonPressed, this);
    this.buttonScene = this.node.scene!.getChildByName("Canvas")!.getComponent("Scene");
  }

  buttonPressed() {
    console.log(this.currentname, this.lblButton!.string + " button pressed");
    if (this.parentname == "top" && this.lblButton!.string == "return") {
      this.buttonScene.setButtons(this.topConfig);
      return;
    }
    else if (this.parentname == "user" && this.lblButton!.string == "return") {
      this.buttonScene.setButtons(conf.user);
      return;
    }
    else if (this.currentname == "top") {
      if (this.lblButton!.string == "Account & Game") {
        this.buttonScene.setButtons(conf.user);
      }
      else if (this.lblButton!.string == "IAP") {
        this.buttonScene.setButtons(conf.fee);
      }
      else if (this.lblButton!.string == "Ads") {
        this.buttonScene.setButtons(conf.ads);
      }
      else if (this.lblButton!.string == "Push") {
        this.buttonScene.setButtons(conf.push);
      }
      else if (this.lblButton!.string == "Custom") {
        this.buttonScene.setButtons(conf.custom);
      }
      return;
    }
    else if (this.currentname == "user") {
      if (this.lblButton!.string == "showAchievements") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          this.params = {
            "achievement_id": conf.google.achievementId,
          };
          sdkhub.getUserPlugin().showAchievements(this.params);
          return;
        }
        this.buttonScene.setButtons(conf.showAchievements);
        return;
      }
      else if (this.lblButton!.string == "unlockAchievement") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          this.params = {
            "achievement_id": conf.google.achievementId,
            // 阶段性成就需要
            // Phased achievement needs
            // "numSteps": "1", 
          };
          sdkhub.getUserPlugin().unlockAchievement(this.params);
          return;
        }
        this.buttonScene.setButtons(conf.unlockAchievement);
        return;
      }
      else if (this.lblButton!.string == "submitScore") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          this.params = {
            "leaderboard_id": conf.google.leaderboardId,
            "score": "6000",
          };
          sdkhub.getUserPlugin().submitScore(this.params);
          return;
        }
        this.buttonScene.setButtons(conf.submitScore);
        return;
      }
      else if (this.lblButton!.string == "showLeaderBoard") {
        if (sdkhub.getUserPlugin().getPluginId() === "UserGooglePlay") {
          this.params = {
            "leaderboard_id": conf.google.leaderboardId,
          };
          sdkhub.getUserPlugin().showLeaderBoard(this.params);
          return;
        }
        this.buttonScene.setButtons(conf.showLeaderBoard);
        return;
      }
    }
    if (this.currentname == "user") {
      for (var i = conf.INIT_METHOD; i < conf.user.length; i++) {
        if (this.lblButton!.string == conf.user[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              sdkhub.getUserPlugin().callFuncWithParam("init");
              break;
            case conf.INIT_METHOD + 1:
              this.params = {
                "showUpdateDialog": "1",
                "forceUpdate": "1"
              }
              sdkhub.getUserPlugin().callFuncWithParam("checkAppUpdate", this.params);
              break;
            case conf.INIT_METHOD + 2:
              sdkhub.getUserPlugin().login();
              break;
            case conf.INIT_METHOD + 3:
              this.params = "AuthorizationCode";
              sdkhub.getUserPlugin().callFuncWithParam("accountLogin", this.params);
              break;
            case conf.INIT_METHOD + 4:
              this.params = "IDToken";
              sdkhub.getUserPlugin().callFuncWithParam("accountLogin", this.params);
              break;
            case conf.INIT_METHOD + 5:
              this.params = "Slient";
              sdkhub.getUserPlugin().callFuncWithParam("accountLogin", this.params);
              break;
            case conf.INIT_METHOD + 6:
              sdkhub.getUserPlugin().callFuncWithParam("getCurrentPlayer");
              break;
            case conf.INIT_METHOD + 7:
              sdkhub.getUserPlugin().logout();
              break;
            case conf.INIT_METHOD + 8:
              sdkhub.getUserPlugin().showToolBar(1);
              break;
            case conf.INIT_METHOD + 9:
              sdkhub.getUserPlugin().hideToolBar();
              break;
            case conf.INIT_METHOD + 10:
              var userInfo = sdkhub.getUserPlugin().getUserInfo();
              console.log("userInfo", JSON.stringify(userInfo));
              break;
            case conf.INIT_METHOD + 15:
              sdkhub.getUserPlugin().callFuncWithParam("cancelAuthorization");
              break;
            case conf.INIT_METHOD + 16:
              this.params = {
                "eventId": conf.eventId,
                "growAmount": "20"
              };
              sdkhub.getUserPlugin().callFuncWithParam("submitEvent", this.params);
              break;
            case conf.INIT_METHOD + 17:
              this.params = {};
              sdkhub.getUserPlugin().callFuncWithParam("getEvent", this.params);
              break;
            case conf.INIT_METHOD + 18:
              sdkhub.getUserPlugin().callFuncWithParam("submitPlayerEventStart");
              break;
            case conf.INIT_METHOD + 19:
              sdkhub.getUserPlugin().callFuncWithParam("getPlayerExtraInfo");
              break;
            case conf.INIT_METHOD + 20:
              sdkhub.getUserPlugin().callFuncWithParam("submitPlayerEventEnd");
              break;
            case conf.INIT_METHOD + 21:
              this.params = 0;
              sdkhub.getUserPlugin().callFuncWithParam("getGamePlayerStats", this.params);
              break;
            case conf.INIT_METHOD + 22:
              this.params = 0;
              sdkhub.getUserPlugin().callFuncWithParam("getGameSummary", this.params);
              break;
            case conf.INIT_METHOD + 23:
              this.params = 1;
              sdkhub.getUserPlugin().callFuncWithParam("setPopupsPosition", this.params);
              break;
            case conf.INIT_METHOD + 24:
              sdkhub.getUserPlugin().callFuncWithParam("getAppId");
              break;
            case conf.INIT_METHOD + 25:
              sdkhub.getUserPlugin().callFuncWithParam("cancelGameService");
              break;
            case conf.INIT_METHOD + 26:
              sdkhub.getUserPlugin().callFuncWithParam("smsStartConsent");
            default:
              console.log("user function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "fee") {
      for (var i = conf.INIT_METHOD; i < conf.fee.length; i++) {
        if (this.lblButton!.string == conf.fee[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              if (sdkhub.getFeePlugin().getPluginId() === "FeeGooglePlay") {
                this.params = {
                  "Product_Id": conf.google.productId,
                  "Order_Id": "gold_1px_0001",
                  "Sku_Type": conf.google.skuType, // inapp 或者 subs
                  "Role_Id": "test", // 可选
                };
                sdkhub.getFeePlugin().feeForProduct(this.params);
                return;
              }
              this.params = {
                "Product_Id": conf.payProductId, // Product ID. Each product must have a unique ID
                "EXT": "test", //Information stored on the merchant side, which is passed by the app when the payment API is called
              }
              sdkhub.getFeePlugin().feeForProduct(this.params);
              break;
            case conf.INIT_METHOD + 1:
              sdkhub.getFeePlugin().callFuncWithParam("isEnvReady");
              break;
            case conf.INIT_METHOD + 2:
              this.params = {
                "productIdList": conf.obtainProductIdList,
                "priceType": "0"
              };
              sdkhub.getFeePlugin().callFuncWithParam("obtainProductInfo", this.params);
              break;
            case conf.INIT_METHOD + 3:
              if (!conf.paymentReceipt.length) {
                console.log("consumeOwnedPurchase, paymentReceipt is null now, call function 'obtainOwnedPurchases' and try again.");
                return;
              }
              console.log("receipt", conf.paymentReceipt);
              console.log("receipt[0].purchaseState = ", conf.paymentReceipt[0]["purchaseState"]);
              this.params = conf.paymentReceipt[0]["inAppPurchaseData"];
              conf.paymentReceipt.splice(0);
              console.log("consumeOwnedPurchase, param = ", this.params)
              sdkhub.getFeePlugin().callFuncWithParam("consumeOwnedPurchase", this.params);
              break;
            case conf.INIT_METHOD + 4:
              this.params = 0;
              sdkhub.getFeePlugin().callFuncWithParam("obtainOwnedPurchases", this.params);
              break;
            case conf.INIT_METHOD + 5:
              this.params = 0;
              sdkhub.getFeePlugin().callFuncWithParam("obtainOwnedPurchaseRecord", this.params);
              break;
            case conf.INIT_METHOD + 6:
              this.params = {
                "reqType": "TYPE_SUBSCRIBE_MANAGER_ACTIVITY"
              };
              sdkhub.getFeePlugin().callFuncWithParam("startIapActivity", this.params);
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
              console.log("fee function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "ads") {
      for (var i = conf.INIT_METHOD; i < conf.ads.length; i++) {
        if (this.lblButton!.string == conf.ads[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              console.log("showBannerAd");
              this.params = { "adType": "Banner", "adId": "testw6vs28auh3", "pos": "0", "adSize": "BANNER_SIZE_360_144" };
              sdkhub.getAdsPlugin().showAds(this.params);
              break;
            case conf.INIT_METHOD + 1:
              console.log("hideBannerAd");
              this.params = { "adType": "Banner" };
              sdkhub.getAdsPlugin().hideAds(this.params);
              break;
            case conf.INIT_METHOD + 2:
              this.params = { "adType": "Reward", "adId": "testx9dtjwj8hp" };
              sdkhub.getAdsPlugin().preloadAds(this.params);
              break;
            case conf.INIT_METHOD + 3:
              this.params = { "adType": "Reward", "adId": "testx9dtjwj8hp" };
              sdkhub.getAdsPlugin().showAds(this.params);
              break;
            case conf.INIT_METHOD + 4:
              this.params = { "adType": "Interstitial", "adId": "testb4znbuh3n2" };
              sdkhub.getAdsPlugin().preloadAds(this.params);
              break;
            case conf.INIT_METHOD + 5:
              this.params = { "adType": "Interstitial", "adId": "testb4znbuh3n2" };
              sdkhub.getAdsPlugin().showAds(this.params);
              break;
            case conf.INIT_METHOD + 6:
              console.log("showNativeAd");
              this.params = { "adType": "Native", "adId": "testy63txaom86", "nativeLayout": "native_small", "requestCustomDislikeThisAd": "1", "choicesPosition": "3", "videoConfiguration": "1", "audioFocusType": "NOT_GAIN_AUDIO_FOCUS_WHEN_MUTE", "startMuted": "0", "customizeOperateRequested": "1" };
              sdkhub.getAdsPlugin().showAds(this.params);
              break;
            case conf.INIT_METHOD + 7:
              console.log("hideNativeAd");
              this.params = { "adType": "Native" };
              sdkhub.getAdsPlugin().hideAds(this.params);
              break;
            default:
              console.log("ads function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "push") {
      for (var i = conf.INIT_METHOD; i < conf.push.length; i++) {
        if (this.lblButton!.string == conf.push[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              sdkhub.getPushPlugin().startPush();
              break;
            case conf.INIT_METHOD + 1:
              sdkhub.getPushPlugin().closePush();
              break;
            case conf.INIT_METHOD + 2:
              this.params = "alias1";
              sdkhub.getPushPlugin().setAlias(this.params);
              break;
            case conf.INIT_METHOD + 3:
              this.params = "alias1";
              sdkhub.getPushPlugin().delAlias(this.params);
              break;
            case conf.INIT_METHOD + 4:
              this.params = ["tag1", "tag2"];
              sdkhub.getPushPlugin().setTags(this.params)
              break;
            case conf.INIT_METHOD + 5:
              this.params = ["tag1", "tag2"];
              sdkhub.getPushPlugin().delTags(this.params)
              break;
            case conf.INIT_METHOD + 6:
              sdkhub.getPushPlugin().callFuncWithParam("turnOnPush");
              break;
            case conf.INIT_METHOD + 7:
              sdkhub.getPushPlugin().callFuncWithParam("turnOffPush");
              break;
            case conf.INIT_METHOD + 8:
              this.params = {
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
              sdkhub.getPushPlugin().callFuncWithParam("sendMessage", this.params);
              break;
            case conf.INIT_METHOD + 9:
              sdkhub.getPushPlugin().callFuncWithParam("getOdid");
              break;
            case conf.INIT_METHOD + 10:
              sdkhub.getPushPlugin().callFuncWithParam("getAAID");
              break;
            case conf.INIT_METHOD + 11:
              sdkhub.getPushPlugin().callFuncWithParam("deleteAAID");
              break;
            case conf.INIT_METHOD + 12:
              console.log("isAutoInitEnable, ret = ", sdkhub.getPushPlugin().callBoolFuncWithParam("isAutoInitEnabled"));
              break;
            case conf.INIT_METHOD + 13:
              this.params = 1 - Number(sdkhub.getPushPlugin().callBoolFuncWithParam("isAutoInitEnabled"));
              console.log("param = ", this.params);
              sdkhub.getPushPlugin().callFuncWithParam("setAutoInitEnabled", this.params);
              break;
            case conf.INIT_METHOD + 14:
              var subjectID = conf.subjectId; // Please replace to subjectID from AGCconsole
              sdkhub.getPushPlugin().callFuncWithParam("getToken", subjectID);
              break;
            case conf.INIT_METHOD + 15:
              var subjectID = conf.subjectId; // Please replace to subjectID from AGC console
              sdkhub.getPushPlugin().callFuncWithParam("deleteToken", subjectID);
              break;
            case conf.INIT_METHOD + 16:
              console.log("isSupportProfile, ret = ", sdkhub.getPushPlugin().callBoolFuncWithParam("isSupportProfile"));
              break;
            case conf.INIT_METHOD + 17:
              this.params = {
                "type": "CUSTOM_PROFILE",
                "profileId": "PROFILE_ID_001"
              }
              sdkhub.getPushPlugin().callFuncWithParam("addProfile", this.params);
              break;
            case conf.INIT_METHOD + 18:
              this.params = {
                "type": "CUSTOM_PROFILE",
                "profileId": "PROFILE_ID_001"
              }
              sdkhub.getPushPlugin().callFuncWithParam("deleteProfile", this.params);
              break;
            default:
              console.log("push function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "showAchievements") {
      for (var i = conf.INIT_METHOD; i < conf.showAchievements.length; i++) {
        if (this.lblButton!.string == conf.showAchievements[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              this.params = {
                "type": "getShowAchievementListIntent"
              };
              sdkhub.getUserPlugin().showAchievements(this.params);
              break;
            case conf.INIT_METHOD + 1:
              this.params = {
                "type": "getAchievementList",
                "forceReload": "1"
              };
              sdkhub.getUserPlugin().showAchievements(this.params);
              break;
            default:
              console.log("showAchievements function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "submitScore") {
      for (var i = conf.INIT_METHOD; i < conf.submitScore.length; i++) {
        if (this.lblButton!.string == conf.submitScore[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              this.params = {
                "type": "getRankingSwitchStatus",
              };
              sdkhub.getUserPlugin().submitScore(this.params);
              break;
            case conf.INIT_METHOD + 1:
              this.params = {
                "type": "setRankingSwitchStatus",
                "stateValue": "1"
              };
              sdkhub.getUserPlugin().submitScore(this.params);
              break;
            case conf.INIT_METHOD + 2:
              this.params = {
                "type": "submitRankingScore",
                "rankingId": conf.rankingId,
                "score": "15000",
                "scoreTips": "分数",
              };
              sdkhub.getUserPlugin().submitScore(this.params);
              break;
            case conf.INIT_METHOD + 3:
              this.params = {
                "type": "submitScoreWithResult",
                "rankingId": conf.rankingId,
                "score": "18000",
                "scoreTips": "分数",
                "timeDimension": "1"
              };
              sdkhub.getUserPlugin().submitScore(this.params);
              break;
            default:
              console.log("submitScore function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "showLeaderBoard") {
      for (var i = conf.INIT_METHOD; i < conf.showLeaderBoard.length; i++) {
        if (this.lblButton!.string == conf.showLeaderBoard[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              this.params = {
                "type": "getRankingsIntent",
              };
              sdkhub.getUserPlugin().showLeaderBoard(this.params);
              break;
            case conf.INIT_METHOD + 1:
              this.params = {
                "type": "getRankingSummary",
                "rankingId": conf.rankingId,
                "isRealTime": "1"
              };
              sdkhub.getUserPlugin().showLeaderBoard(this.params);
              break;
            case conf.INIT_METHOD + 2:
              this.params = {
                "type": "getCurrentPlayerRankingScore",
                "rankingId": conf.rankingId,
                "timeDimension": "2"
              };
              sdkhub.getUserPlugin().showLeaderBoard(this.params);
              break;
            case conf.INIT_METHOD + 3:
              this.params = {
                "type": "getPlayerCenteredRankingScores",
                "rankingId": conf.rankingId,
                "timeDimension": "2",
                "maxResults": "15",
                "isRealTime": "1"
              };
              sdkhub.getUserPlugin().showLeaderBoard(this.params);
              break;
            case conf.INIT_METHOD + 4:
              this.params = {
                "type": "getMoreRankingScores",
                "rankingId": conf.rankingId,
                "offsetPlayerRank": "1",
                "maxResults": "15",
                "pageDirection": "0",
                "isRealTime": "1"
              };
              sdkhub.getUserPlugin().showLeaderBoard(this.params);
              break;
            case conf.INIT_METHOD + 5:
              this.params = {
                "type": "getRankingTopScores",
                "rankingId": conf.rankingId,
                "offsetPlayerRank": "1",
                "maxResults": "15",
                "pageDirection": "0",
                "timeDimension": "2"
              };
              sdkhub.getUserPlugin().showLeaderBoard(this.params);
              break;
            default:
              console.log("showLeaderBoard function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
    else if (this.currentname == "unlockAchievement") {
      for (var i = conf.INIT_METHOD; i < conf.unlockAchievement.length; i++) {
        if (this.lblButton!.string == conf.unlockAchievement[i]) {
          switch (i) {
            case conf.INIT_METHOD:
              this.params = {
                "type": "visualize",
                "achievementId": "AFA15504BF6E5B21FB1B43F8EE66426B087C5C48FF4D7CF6224A2BA0AA244537"
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 1:
              this.params = {
                "type": "visualizeWithResult",
                "achievementId": "AFA15504BF6E5B21FB1B43F8EE66426B087C5C48FF4D7CF6224A2BA0AA244537"
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 2:
              this.params = {
                "type": "grow",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 3:
              this.params = {
                "type": "growWithResult",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 4:
              this.params = {
                "type": "makeSteps",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 5:
              this.params = {
                "type": "makeStepsWithResult",
                "achievementId": conf.achievementId,
                "stepsNum": "3"
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 6:
              this.params = {
                "type": "reach",
                "achievementId": conf.achievementId
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            case conf.INIT_METHOD + 7:
              this.params = {
                "type": "reachWithResult",
                "achievementId": conf.achievementId
              };
              sdkhub.getUserPlugin().unlockAchievement(this.params);
              break;
            default:
              console.log("unlockAchievement function: '" + this.lblButton!.string + "' not called");
          }
        }
      }
    }
  }

  setContent(current: string, parent: string, name: string, topconfig: string[]) {
    this.parentname = parent;
    this.currentname = current;
    this.topConfig = topconfig;
    this.lblButton!.string = name;
  }
}

