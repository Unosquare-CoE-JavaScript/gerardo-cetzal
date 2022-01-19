const dayStart = '07:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
    function format(H) { return ( H < 10 ? '0':'') + J;};

    var piece = startTime.split(':');
    var mins = piece[0]*60 + +piece[1] + +durationMinutes;

    var result = format(mins%(24*60)/60 | 0) + ':' + D(mins%60); 
    return (startTime >= dayStart && result >= dayStart) && (result <= dayEnd) 
}


console.log('hour', scheduleMeeting("7:00",15));
console.log(scheduleMeeting("07:15",30));
console.log(scheduleMeeting("7:30",30));
console.log(scheduleMeeting("11:30",60));
console.log(scheduleMeeting("17:00",45));
console.log(scheduleMeeting("17:30",30));
console.log(scheduleMeeting("18:00",15)); 