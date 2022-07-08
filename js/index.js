
var startTimestamp = getNow();

function irParaSteam(){
    registerRedirectToSteamClick();

    var deviceDetails = navigator.userAgent;
	var someMobileKeywords = /android|iphone|kindle|ipad/i;
    var isMobile = someMobileKeywords.test(deviceDetails);
    
    if (isMobile) {
        window.open("https://store.steampowered.com/app/1799020?utm_source=boxstudio_website&utm_campaign=default&utm_medium=mobile", "_blank");
    } else {
        window.open("https://store.steampowered.com/app/1799020?utm_source=boxstudio_website&utm_campaign=default&utm_medium=web", "_blank");
    }
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
