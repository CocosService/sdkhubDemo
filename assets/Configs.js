var obj = {
    // Configuring In-App Purchases in the HMS console.
    payProuctId : "", 
    // Product ID list for method `obtainProductInfo`, split by ',' .
    obtainProductIdList : "", 
    // Configuring Achievements in HMS console.
    achievementId : "", 
    // Configuring Ranking in the HMS console.
    rankingId : "", 
    // Configuring Events in HMS console.
    eventId : "", 

// ["this level", "upper level", "button1", "button2", ...]
    INIT_METHOD : 3,
    top : ["top", ""],

    //second menu
    user : ["user", "top", "return", "login", "logout", "showToolBar", "hideToolBar", "getUserInfo", "showAchievements", "unlockAchievement", "submitScore", "showLeaderBoard", "cancelAuthorization", "submitEvent", "getEvent", "submitPlayerEventStart", "getPlayerExtraInfo", "submitPlayerEventEnd", "getGamePlayerStats", "getGameSummary"],
    fee : ["fee", "top", "return", "payForProduct", "isEnvReady", "obtainProductInfo", "consumeOwnedPurchase", "obtainOwnedPurchases", "obtainOwnedPurchaseRecord", "startIapActivity"],
    ads : ["ads", "top", "return", "showBannerAd", "preloadRewardAd", "showRewardAd", "preloadInterstitialAd", "showInterstitialAd"],
    push : ["push", "top", "return", "startPush", "closePush", "setAlias", "delAlias", "setTag", "delTag", "turnOnPush", "turnOffPush", "sendMessage"],
    custom : ["custom", "top", "return", "custom1", "custom2", "custom3", "custom4", "custom 5", "custom6", "custom7", "custom8"],

    //third menu
    //user
    showAchievements : ["showAchievements", "user", "return", "getShowAchievementListIntent", "getAchievementList"],
    unlockAchievement : ["unlockAchievement", "user", "return", "visualizeWithResult", "growWithResult", "makeStepsWithResult", "reachWithResult"],
    submitScore : ["submitScore", "user", "return", "getRankingSwitchStatus", "setRankingSwitchStatus", "submitRankingScore"],
    showLeaderBoard : ["showLeaderBoard", "user", "return", "getRankingsIntent", "getRankingSummary", "getCurrentPlayerRankingScore", "getPlayerCenteredRankingScores", "getMoreRankingScores", "getRankingTopScores"],

    //callback from 'obtainOwnedPurchases' and 'feeForProduct'
    paymentReceipt: [],
};

module.exports = obj;
