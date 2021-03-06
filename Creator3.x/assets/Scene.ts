
import { _decorator, Component, Node, ScrollView, Prefab, instantiate, UITransform, Label, Asset } from 'cc';
import { conf } from './Configs';

declare const jsb: {
  reflection: { callStaticMethod: (...args: any) => any; };
  fileUtils: any;
};

const { ccclass, property } = _decorator;
@ccclass('Scene')
export class Scene extends Component {

  @property({ type: ScrollView })
  public scrollView: ScrollView | null = null;
  @property({ type: Prefab })
  public prefabButton: Prefab | null = null;
  @property({ type: Node })
  public nodeToast: Node | null = null;
  @property({ type: Label })
  public lblCallback: Label | null = null;
  @property({ type: Asset })
  public iconAsset: Asset | null = null;
  @property
  public toastCountDown = 0;
  @property
  public topConfig = conf.top;

  start() {
    this.nodeToast!.active = false;
    this.scrollView!.scrollToTop(0.1);
    this.toastCountDown = 0;

    if (sdkhub.getSupportPluginIds().indexOf("User") != -1) {
      this.topConfig.push("Account & Game");
      sdkhub.getUserPlugin().setListener(this.onUserResult, this);
    }
    if (sdkhub.getSupportPluginIds().indexOf("Fee") != -1) {
      this.topConfig.push("IAP");
      sdkhub.getFeePlugin().setListener(this.onFeeResult, this);
    }
    if (sdkhub.getSupportPluginIds().indexOf("Ads") != -1) {
      this.topConfig.push("Ads");
      sdkhub.getAdsPlugin().setListener(this.onAdsResult, this);
    }
    if (sdkhub.getSupportPluginIds().indexOf("Push") != -1) {
      this.topConfig.push("Push");
      sdkhub.getPushPlugin().setListener(this.onPushResult, this);
    }
    if (sdkhub.getSupportPluginIds().indexOf("Custom") != -1) {
      this.topConfig.push("Custom");
      sdkhub.getCustomPlugin().setListener(this.onCustomResult, this);
    }

    this.setButtons(this.topConfig);
  }

  update(deltaTime: number) {
    if (this.toastCountDown > 0) {
      this.toastCountDown -= deltaTime;
    }
    else {
      this.nodeToast!.active = false;
    }
  }

  setButtons(menu: any) {

    if (this.scrollView!.content!.children) {
      this.scrollView!.content!.removeAllChildren();
    }
    let idx = 0;
    for (let index = 2; index < menu.length; ++index) {
      if (!this.validatePluginFunc(menu[0], menu[index])) continue;
      let buttonItem = instantiate(this.prefabButton);
      //@ts-ignore
      this.scrollView!.content!.addChild(buttonItem);
      //@ts-ignore
      buttonItem.setPosition(0, - (buttonItem.getComponent(UITransform).height / 2) + (idx * - buttonItem.getComponent(UITransform).height), 0);
      //@ts-ignore
      buttonItem.getComponent(this.prefabButton.data.name).setContent(menu[0], menu[1], menu[index], this.topConfig);
      idx++;
    }
    //@ts-ignore
    this.scrollView.content.getComponent(UITransform).height = idx * this.prefabButton.data.getComponent(UITransform).height;
  }

  validatePluginFunc(plugin: string, funcName: string): boolean {
    if (funcName === 'return') return true;
    if (funcName.endsWith("Ad")) return true;
    switch (plugin) {
      case 'user':
        return sdkhub.getUserPlugin().isFunctionSupported(funcName);
      case 'fee':
        return sdkhub.getFeePlugin().isFunctionSupported(funcName);
      case 'ads':
        return sdkhub.getAdsPlugin().isFunctionSupported(funcName);
      case 'push':
        return sdkhub.getPushPlugin().isFunctionSupported(funcName);
      case 'custom':
        return sdkhub.getCustomPlugin().isFunctionSupported(funcName);
      default:
        return true;
    }
  }

  isJSON(str: string) {
    try {
      var obj = JSON.parse(str);
      if (typeof obj == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  showToast(code: number, msg: string) {
    var ret = "code = " + code + ",\n\n";
    if (this.isJSON(msg)) {
      var jsonObj = JSON.parse(msg);
      if (jsonObj["type"]) {
        ret += "type = " + jsonObj["type"] + ",\n\n";
        delete jsonObj["type"];
      }
      if (jsonObj["rtnCode"]) {
        ret += "rtnCode = " + jsonObj["rtnCode"] + ",\n\n";
        delete jsonObj["rtnCode"];
      }
      if (jsonObj["msg"]) {
        ret += "msg = " + jsonObj["msg"] + ",\n\n";
        delete jsonObj["msg"];
      }
      var otherParams = JSON.stringify(jsonObj);
      if (otherParams.length >= 103) {
        otherParams = otherParams.slice(0, 100) + "...";
      }
      ret += "otherParams = " + otherParams;
    }
    else {
      if (msg.length >= 103) {
        msg = msg.slice(0, 100) + "...";
      }
      ret += "msg = " + msg;
    }
    console.log("showtoast msg", ret);
    this.lblCallback!.string = ret;
    this.nodeToast!.active = true;
    this.toastCountDown = 3;
  }

  onUserResult(code: number, msg: string) {
    console.log("on user result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    this.showToast(code, msg);
    switch (code) {
      case sdkhub.UserResultCode.kLoginSucceed:
        console.log("kLoginSucceed", msg);
        break;
    }
  }

  onFeeResult(code: number, msg: string) {
    console.log("on fee result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    this.showToast(code, msg);
    switch (code) {
      // Process the "consumeOwnedPurchase" method logic, temp storage the payment receipt.
      // pay succeed
      case sdkhub.FeeResultCode.kFeeSucceed:
        if (sdkhub.getFeePlugin().getPluginId() === 'FeeGooglePlay') {
          // 支付成功，此时应该向的服务端验证交易以确定是否进行商品消费或者立即消费商品
          // The payment is successful. At this time, the transaction should be verified with the server to determine whether to consume the goods or immediately consume the goods
          let ret = JSON.parse(msg)
          sdkhub.getFeePlugin().callFuncWithParam("consume", {
            purchaseToken: ret.purchaseToken,
            skuType: conf.google.skuType
          });
        } else {
          conf.paymentReceipt = JSON.parse(msg);
          console.log("kFeeSucceed", conf.paymentReceipt);
          break;
        }
      // obtainOwnedPurchases succeed
      case sdkhub.FeeResultCode.kFeeExtension + 106:
        // Recommended to check the Plugin ID when using extended callbacks
        if (sdkhub.getFeePlugin().getPluginId() == "FeeHuawei") {
          conf.paymentReceipt = JSON.parse(msg);
          console.log("obtainOwnedPurchases", JSON.stringify(conf.paymentReceipt));
        }
        break;
      case 9:
        this.showToast(0, "inapp consume success!")
        break;
      case 10:
        this.showToast(0, "subs consume success!")
        break;
    }
  }

  onAdsResult(code: number, msg: string) {
    console.log("on ads result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    this.showToast(code, msg);
    switch (code) {
      case sdkhub.AdsResultCode.kAdsShown:
        console.log("kAdsShown", msg);
        break;
    }
  }

  onPushResult(code: number, msg: string) {
    console.log("on push result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    this.showToast(code, msg);
    switch (code) {
      case sdkhub.PushResultCode.kStartPushSucceed:
        console.log("kStartPushSucceed", msg);
        break;
    }
  }

  onCustomResult(code: number, msg: string) {
    console.log("on custom result action.");
    console.log("code: " + code);
    console.log("msg: " + msg);
    this.showToast(code, msg);
    switch (code) {
      case 10000:
        console.log("onCustomResult, Extension", msg);
        break;
    }
  }
}
