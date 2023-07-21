export function getFormattedDate(date) {
    // return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`; //การ format เวลาให้ตรง
    return date.toISOString().slice(0,10);
}

export function getDateMinusDays(days, day) {
    return new Date(days.getFullYear(), days.getMonth(), days.getDate() - day)
}