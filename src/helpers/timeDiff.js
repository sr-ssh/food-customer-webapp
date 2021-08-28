export const getTimeDiff = (olderDate, newerDate, unit = 's') => {

    // the following is to handle cases where the times are on the opposite side of
    // midnight e.g. when you want to get the difference between 9:00 PM and 5:00 AM
    if (newerDate < olderDate) {
        newerDate.setDate(newerDate.getDate() + 1);
    }

    let diff = Date.parse(newerDate) - Date.parse(olderDate); //return milliseconds

    switch (unit) {
        case 'h':
            return Math.floor(diff / 1000 / 60 / 60);
        case 'm':
            return Math.floor(diff / 1000 / 60);
        case 's':
            return Math.floor(diff / 1000);
        case 'ms':
            return diff;
    }
}