
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
    this.setButtons(conf.top);
  },

  setButtons (menu) {
    this.scrollView.content.removeAllChildren(true);
    for (let index = 2; index < menu.length; ++index) {
      let buttonItem = cc.instantiate(this.prefabButton);
      buttonItem.name = menu[index];
      this.scrollView.content.addChild(buttonItem);
      buttonItem.y = - (buttonItem.height/2) + ((index -2) * - buttonItem.height);
      buttonItem.getComponent(this.prefabButton.name).setContent(menu[0], menu[1], menu[index]);
    }

    this.scrollView.content.height = (menu.length - 2) * this.prefabButton.data.height;
  }



  // update (dt) {},
});
