export function isValidNumberInput (e) {
    if (isNaN(parseInt(e.key, 10)) === true) return e.preventDefault();
    else {return true;}
}
export function parseInputAsNumber(val) {
    if (val === '') {
        return -1;
    } else {
        return parseInt(val, 10);
    }

}