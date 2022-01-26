// explicit block scope

// The outer/global scope has one identifier, the function getNextMonthStart
function getNextMonthStart(dateStr) {
    var nextMonth, year;
    // curly-brace pair defines an inner block scope that includes one variable: curMonth.
    {
        let curMonth;
        [ , year, curMonth ] = dateStr.match(/(\d{4})-(\d{2})-\d{2}/) || [];
        nextMonth = (Number(curMonth) % 12) + 1;
    }

    if ( nextMonth ) {
        year++;
    }

    return `${ year }-${ String(nextMonth).padStart(2,"0")}-01`;
}

console.log(getNextMonthStart("2019-12-25"));