
var conf = require('Configs');
cc.Class({
  extends: cc.Component,

  properties: {
    scrollView: {
      default: null,
      type: cc.ScrollView
    },
    prefabButton: {
      default: null,
      type: cc.Prefab,
    },

  },

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {},

  start() {
    if (!SDKHub) {
      // 提示用户

    }

  },

  onLoad() {
    this.scrollView.scrollToTop(0.1);

    this.topConfig = conf.top;
    var pluginArray = SDKHub.AgentManager.getInstance().getSupportPluginIds();
    console.log("pluginArray", pluginArray);
    if (pluginArray.indexOf("Ads") != -1) {
      this.ads = SDKHub.AgentManager.getInstance().getAdsPlugin();
    }
    else {
      this.topConfig.splice(4, 1);
    }
    if (pluginArray.indexOf("Fee") != -1) {
      this.fee = SDKHub.AgentManager.getInstance().getFeePlugin();
    }
    else {
      this.topConfig.splice(3, 1);
    }
    if (pluginArray.indexOf("User") != -1) {
      this.user = SDKHub.AgentManager.getInstance().getUserPlugin();
    }
    else {
      this.topConfig.splice(2, 1);
    }

    if (this.user) this.user.setListener(this.onUserResult, this);
    if (this.fee) this.fee.setListener(this.onFeeResult, this);
    if (this.ads) this.ads.setListener(this.onAdsResult, this);

    this.setButtons(this.topConfig);
  },

  setButtons(menu) {
    this.scrollView.content.removeAllChildren(true);
    for (let index = 2; index < menu.length; ++index) {
      let buttonItem = cc.instantiate(this.prefabButton);
      buttonItem.name = menu[index];
      this.scrollView.content.addChild(buttonItem);
      buttonItem.y = - (buttonItem.height / 2) + ((index - 2) * - buttonItem.height);
      buttonItem.getComponent(this.prefabButton.name).setContent(menu[0], menu[1], menu[index], this.topConfig, this.user, this.fee, this.ads);
    }

    this.scrollView.content.height = (menu.length - 2) * this.prefabButton.data.height;
  },


  onUserResult: function (code, msg) {
    console.log("on user result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    switch (code) {
      case SDKHub.UserResultCode.kLoginSucceed:
        console.log("kLoginSucceed", msg);
        break;
    }
  },

  onFeeResult: function (code, msg) {
    console.log("on fee result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    switch (code) {
      case SDKHub.FeeResultCode.kFeeSucceed:
        console.log("kFeeSucceed", msg);
        break;
    }
  },

  onAdsResult: function (code, msg) {
    console.log("on ads result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    switch (code) {
      case SDKHub.AdsResultCode.kAdsShown:
        console.log("kAdsShown", msg);
        break;
    }
  },



  // update (dt) {},
});
