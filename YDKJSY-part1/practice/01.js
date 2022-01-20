/*
scheduleMeeting(..) should take a start time (in 24-hour format as a string “hh:mm”) 
and a meeting duration (number of minutes). 
It should return true if the meeting falls entirely within 
the work day (according to the times specified in dayStart and dayEnd); 
return false if the meeting violates the work day bounds.    
*/

const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
    // create function to apply a format
    function format(H) { return ( H < 10 ? '0':'') + H;};
    // we divide in array the time by hour and minutes
    // hour is the first element piece[0] and minute is piece[1]
    var piece = startTime.split(':');

    // we apply a trick in our operation + +piece[1], this is necessary for add a correct time
    var mins = piece[0]*60 + +piece[1] + +durationMinutes;

    // so the result applying the format
    var result = format(mins%(24*60)/60 | 0) + ':' + format(mins%60); 
    // and finally we play with the Comparison Operators
    return (startTime >= dayStart && result >= dayStart) && (result <= dayEnd) 
}


console.log('hour', scheduleMeeting("7:00",15));
console.log(scheduleMeeting("07:15",30));
console.log(scheduleMeeting("7:30",30));
console.log(scheduleMeeting("11:30",60));
console.log(scheduleMeeting("17:00",45));
console.log(scheduleMeeting("17:30",30));
console.log(scheduleMeeting("18:00",15)); 