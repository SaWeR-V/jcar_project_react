export function currentTimeCheck(zone) {
    const now = new Date();

    if (zone === 'Vladivostok') {
        let hours = now.getUTCHours() + 10;
        let minutes = now.getMinutes();

        if (hours >= 24) {
            hours -= 24;
        }

        return {
            vladivostokTime: `${hours}:${minutes < 10 ? '0' : ''}${minutes}`,
            vladivostokHours: hours
        }
    }
    else if (zone === 'Sochi') {
        let hours = now.getUTCHours() + 3;
        let minutes = now.getMinutes();

        if (hours >= 24) {
            hours -= 24;
        }

        return {
            sochiTime: `${hours}:${minutes < 10 ? '0' : ''}${minutes}`,
            sochiHours: hours
        }
    };

}