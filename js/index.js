
var startTimestamp = getNow();

function goToSteam(){
    registerRedirectToSteamClick();
    if (isMobileDevice()){
        openSteamGameWithUTM("1799020", "mobile")
    }else{
        openSteamGameWithUTM("1799020", "web")
    }
}

function isMobileDevice(){
    const deviceDetails = navigator.userAgent;
	const someMobileKeywords = /android|iphone|kindle|ipad/i;
    const isMobile = someMobileKeywords.test(deviceDetails);
    
    return isMobile;
}

function openSteamGameWithUTM(gameId, utm_medium, utm_campaign="default"){
    const steamLink= "https://store.steampowered.com/app/";
    const utm_source= "boxstudio_website";

    const gameLinkWithUtmParameters = `${ steamLink }${ gameId }?utm_source=${ utm_source }&utm_campaign=${ utm_campaign }&utm_medium=${ utm_medium }`
    
    window.open(gameLinkWithUtmParameters, "_blank");
}

function registerRedirectToSteamClick(){
    var secondsAfterEnterInPage = getSecondsInPage();
    dataLayer.push({
        event_name: "click_to_redirect_to_steam",
        seconds_before_click: secondsAfterEnterInPage
    });
}

function getSecondsInPage(){
    var endTimeStamp = getNow();
    var difference = (endTimeStamp - startTimestamp);
    var seconds = difference / 1000;

    return Math.floor(seconds);
}

function getNow(){
    var nowDate = new Date();
    var time = nowDate.getTime();

    return time;
}
