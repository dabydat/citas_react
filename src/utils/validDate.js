const validDate = (value, format) => {
    let DATEFORMAT = format == 'YYYYMMDD' ? /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/ : (format == 'MMDDYYYY' ? /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])[\/]\d{4}$/ : /*DDMMYYYY*//^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/);
    let isValid = value.match(DATEFORMAT);
    if (isValid == null) return true;
    let day;
    let month;
    let year;
    let dateArray = value.split('-');
    switch (format) {
        case 'YYYYMMDD':
            day = parseInt(dateArray[2]);
            month = parseInt(dateArray[1]);
            year = parseInt(dateArray[0]);
            break;
        case 'MMDDYYYY':
            day = parseInt(dateArray[1]);
            month = parseInt(dateArray[0]);
            year = parseInt(dateArray[2]);
            break;
        case 'DDMMYYYY':
            day = parseInt(dateArray[0]);
            month = parseInt(dateArray[1]);
            year = parseInt(dateArray[2]);
            break;
        default:
            break;
    }
    // Se define el numero de días de cada mes
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // Se validan años bisiestos
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) daysInMonth[1] = 29;
    if (month < 1 || month > 12 || day < 1 || day > daysInMonth[month - 1]) return true;
    return false;
}
export default validDate;