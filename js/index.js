
var startTimestamp = getNow();

function irParaSteam(){
    registerRedirectToSteamClick();
    window.open("https://store.steampowered.com/app/1799020/Six_Faces__Overpower", "_blank");
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
