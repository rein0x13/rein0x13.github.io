export function yearsAndMonthsSince(dateString, since) {
    let result = '';
    const pastDate = new Date(dateString);
    const now = since != null ? new Date(since) : new Date();

    let years = now.getFullYear() - pastDate.getFullYear();
    let months = now.getMonth() + 1 - pastDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (years > 0) {
        result = `${years} year`;
        result = years > 1 ? result.concat('s') : result;
    }

    if (months > 0) {
        result = result.concat(` and ${months} month`);
        result = months > 1 ? result.concat('s') : result;
    }

    return result;
}