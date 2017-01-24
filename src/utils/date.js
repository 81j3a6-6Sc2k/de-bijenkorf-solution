import warnings from '../resources/misc/warnings';

export const prefixZeroDate = (value) => {
    return ('00' + value).substr(-2);
}

export const formatDate = (dateString) => {
    let date;

    try {
        date = new Date(dateString);
    } catch (exception) {
        date = warnings.unknownValue;
    }
    
    return [
        prefixZeroDate(date.getHours()),
        '.',
        prefixZeroDate(date.getMinutes()),
        ' (',
        prefixZeroDate(date.getDate() + 1),
        '-',
        prefixZeroDate(date.getMonth() + 1),
        '-',
        date.getFullYear(),
        ')'
    ].join('');
};