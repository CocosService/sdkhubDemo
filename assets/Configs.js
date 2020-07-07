var obj = {
// ["本层Menu名", "上层Menu名", "按钮1 return", "按钮2".....]
    INIT_METHOD : 3,
    top : ["top", "", "Account & Game", "IAP", "Ads"],

    //二级菜单
    user : ["user", "top", "return", "login", "logout", "showToolBar", "hideToolBar", "cancelAuthorization", "getUserInfo", "showAchievements", "unlockAchievement", "submitScore", "showLeaderBoard", "submitEvent", "getEvent", "submitPlayerEventStart", "getPlayerExtraInfo", "submitPlayerEventEnd", "getGamePlayerStats", "getGameSummary"],
    fee : ["fee", "top", "return", "payForProduct", "isEnvReady", "obtainProductInfo", "consumeOwnedPurchase", "obtainOwnedPurchases", "obtainOwnedPurchaseRecord", "startIapActivity"],
    ads : ["ads", "top", "return", "showBannerAd", "preloadRewardAd", "showRewardAd", "preloadInterstitialAd", "showInterstitialAd"],
    custom : ["custom", "top", "return", "custom1", "custom2", "custom3", "custom4", "custom 5", "custom6", "custom7", "custom8"],

    //三级菜单
    //user
    showAchievements : ["showAchievements", "user", "return", "getShowAchievementListIntent", "getAchievementList"],
    unlockAchievement : ["unlockAchievement", "user", "return", "visualizeWithResult", "growWithResult", "makeStepsWithResult", "reachWithResult"],
    submitScore : ["submitScore", "user", "return", "getRankingSwitchStatus", "setRankingSwitchStatus", "submitRankingScore"],
    showLeaderBoard : ["showLeaderBoard", "user", "return", "getRankingsIntent", "getRankingSummary", "getCurrentPlayerRankingScore", "getPlayerCenteredRankingScores", "getMoreRankingScores", "getRankingTopScores"],
};

module.exports = obj;
