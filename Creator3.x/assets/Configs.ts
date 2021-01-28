
export const conf = {
    // Configuring In-App Purchases in the HMS console.
    payProductId : "", 
    // Product ID list for method `obtainProductInfo`, split by ',' .
    obtainProductIdList : "", 
    // Configuring Achievements in HMS console.
    achievementId : "", 
    // Configuring Ranking in the HMS console.
    rankingId : "", 
    // Configuring Events in HMS console.
    eventId : "", 
    // SubjectId in HMS console
    subjectId : "",

// ["this level", "upper level", "button1", "button2", ...]
    INIT_METHOD : 3,
    top : ["top", ""],

    //second menu
    user : ["user", "top", "return", "init", "checkAppUpdate", "login",  "loginWithAuthorizationCode", "loginWithIDToken", "slientLogin", "getCurrentPlayer", "logout", "showToolBar", "hideToolBar", "getUserInfo", "showAchievements", "unlockAchievement", "submitScore", "showLeaderBoard", "archive", "cancelAuthorization", "submitEvent", "getEvent", "submitPlayerEventStart", "getPlayerExtraInfo", "submitPlayerEventEnd", "getGamePlayerStats", "getGameSummary", "setPopupsPosition", "getAppId", "cancelGameService", "smsStartConsent"],
    fee : ["fee", "top", "return", "payForProduct", "isEnvReady", "obtainProductInfo", "consumeOwnedPurchase", "obtainOwnedPurchases", "obtainOwnedPurchaseRecord", "startIapActivity"],
    ads : ["ads", "top", "return", "showBannerAd", "hideBannerAd", "preloadRewardAd", "showRewardAd", "preloadInterstitialAd", "showInterstitialAd", "showNativeAd", "hideNativeAd"],
    push : ["push", "top", "return", "startPush", "closePush", "setAlias", "delAlias", "setTag", "delTag", "turnOnPush", "turnOffPush", "sendMessage", "getOdid", "getAAID", "deleteAAID", "isAutoInitEnabled", "setAutoInitEnabled", "getToken", "deleteToken", "isSupportProfile", "addProfile", "deleteProfile"],
    custom : ["custom", "top", "return", "custom1", "custom2", "custom3", "custom4", "custom 5", "custom6", "custom7", "custom8"],

    //third menu
    //user
    showAchievements : ["showAchievements", "user", "return", "getShowAchievementListIntent", "getAchievementList"],
    unlockAchievement : ["unlockAchievement", "user", "return", "visualize", "visualizeWithResult", "grow", "growWithResult", "makeSteps", "makeStepsWithResult", "reach", "reachWithResult"],
    submitScore : ["submitScore", "user", "return", "getRankingSwitchStatus", "setRankingSwitchStatus", "submitRankingScore", "submitScoreWithResult"],
    showLeaderBoard : ["showLeaderBoard", "user", "return", "getRankingsIntent", "getRankingSummary", "getCurrentPlayerRankingScore", "getPlayerCenteredRankingScores", "getMoreRankingScores", "getRankingTopScores"],
    archive : ["archive", "user", "return", "setScopeList", "addArchive", "removeArchive", "getLimitThumbnailSize", "getLimitDetailsSize", "getShowArchiveListIntent", "getArchiveSummaryList", "loadArchiveDetails", "updateArchive"],

    //callback from 'obtainOwnedPurchases' and 'feeForProduct'
    paymentReceipt: [],
};

