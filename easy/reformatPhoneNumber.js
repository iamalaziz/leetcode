var reformatNumber = function(number) {
    let formatted = number.replace(/-|\s/g, '')
    let res = '';
    let remaining = formatted.length
    while(remaining > 4) {
        res += formatted.substring(0, 3) + '-'
        formatted = formatted.substring(3)
        remaining -= 3
    }

    if(remaining == 2 || remaining == 3) res += formatted
    if(remaining == 4) res += formatted.slice(0,2)  + '-' + formatted.slice(2)

    return res
};

console.log(reformatNumber('123456789012'))