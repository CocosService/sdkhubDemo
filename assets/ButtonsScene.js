
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
    //this.scrollView.node.on('scrolling', this.callbackScrolling, this);
  },

  onLoad() {
    this.scrollView.scrollToTop(0.1);

    this.topConfig = conf.top;
    var pluginArray = SDKHub.AgentManager.getInstance().getSupportPluginIds();
    console.log("pluginArray", pluginArray);
    if (pluginArray.indexOf("Ads") != -1) {
      this.sAds = SDKHub.AgentManager.getInstance().getAdsPlugin();
    }
    else {
      this.topConfig.splice(4, 1);
    }
    if (pluginArray.indexOf("Fee") != -1) {
      this.sFee = SDKHub.AgentManager.getInstance().getFeePlugin();
    }
    else {
      this.topConfig.splice(3, 1);
    }
    if (pluginArray.indexOf("User") != -1) {
      this.sUser = SDKHub.AgentManager.getInstance().getUserPlugin();
    }
    else {
      this.topConfig.splice(2, 1);
    }

    if (this.sUser) this.sUser.setListener(this.onUserResult, this);
    if (this.sFee) this.sFee.setListener(this.onFeeResult, this);
    if (this.sAds) this.sAds.setListener(this.onAdsResult, this);

    this.setButtons(this.topConfig);
  },

  setButtons(menu) {
    this.scrollView.content.removeAllChildren(true);
    for (let index = 2; index < menu.length; ++index) {
      let buttonItem = cc.instantiate(this.prefabButton);
      buttonItem.name = menu[index];
      this.scrollView.content.addChild(buttonItem);
      buttonItem.y = - (buttonItem.height / 2) + ((index - 2) * - buttonItem.height);
      buttonItem.getComponent(this.prefabButton.name).setContent(menu[0], menu[1], menu[index], this.topConfig, this.sUser, this.sFee, this.sAds);
    }

    this.scrollView.content.height = (menu.length - 2) * this.prefabButton.data.height;
  },


  onUserResult: function (code, msg) {
    console.log("on user result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    // switch(code) {
    //     case 50000:
    //         break;
    // }
  },

  onFeeResult: function (code, msg) {
    console.log("on fee result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    // switch(code) {
    //     case 30000:
    //         break;
    // }
  },

  onAdsResult: function (code, msg) {
    console.log("on ads result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    // switch(code) {
    //     case 40000:
    //         break;
    // }
  },



  // update (dt) {},
});
