//? partial func
function log(level,time,message) {
    console.log(level +' '+time+' '+message);
}
function logErrToday(message) {
    log('Error', 'Today', message);
}
logErrToday('ahihi');
//? with bind function
var logErrTodayCopy = log.bind(null,'Error','Today');
logErrTodayCopy('ahihai');
