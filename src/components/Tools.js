export const getTimeStamp = () => {
    let timeStamp = new Date().getTime();
    return timeStamp
}

export const getTime = () => {
    let date = new Date(getTimeStamp());
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime
}

export const dateFormatter = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    let displayDate = today.toDateString();
    
    return displayDate;
}

export const timeFormatter = (totalSeconds) => {
    let seconds = ((totalSeconds)%60);
    let minutes =  (Math.floor(totalSeconds/60)%60);
    let hours = (Math.floor(totalSeconds/3600));

    if (minutes <= 9) {
        if (seconds <= 9) {
            return (`${hours}:0${minutes}:0${seconds}`)
        } else {
            return (`${hours}:0${minutes}:${seconds}`)
        }
    } else {
        if (seconds <= 9) {
            return (`${hours}:${minutes}:0${seconds}`)
        } else {
            return (`${hours}:${minutes}:${seconds}`)
        }
    }
}