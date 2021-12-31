const WORK_HOURS = 9;

const pomodoroDuration = 90;
const shortBreakDuration = 15;
const longBreakDuration = 60;


let totalMinutes = WORK_HOURS * 60;

let pomodoros, shortBreaks, longBreaks;
pomodoros = shortBreaks = longBreaks = 0;



let counter = 0;

let skipFlag = false;

console.log(`\nStarting Duration: ${totalMinutes}\n`)

while (true) {

    if (totalMinutes <= 0) break;

    if (counter % 2 === 0) {
        pomodoros++;
        totalMinutes -= pomodoroDuration;
        console.log(`${counter}: Pomodoro`)
    }
    else {
        if (shortBreaks % 3 === 0 && shortBreaks !== 0 && !skipFlag) {
            longBreaks++;
            totalMinutes -= longBreakDuration;
            console.log(`${counter}: Long Break`)
            skipFlag = true;

        }
        else {
            shortBreaks++;
            totalMinutes -= shortBreakDuration;
            console.log(`${counter}: Short Break`)
            skipFlag = false;

        }
    }
   
    console.log(`Remaining Minutes: ${totalMinutes}`)


    counter++;
}

console.log('\n')
console.log(`Total Worked Hours: ${(pomodoros * pomodoroDuration) / 60} hours`)
console.log(`Total Break Hours: ${((shortBreaks * shortBreakDuration) + (longBreaks * longBreakDuration)) / 60} hours`)
console.log(`  Short Breaks: ${shortBreaks * shortBreakDuration / 60}`)
console.log(`  Long Breaks: ${longBreaks * longBreakDuration / 60} hours`)