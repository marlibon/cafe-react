import config from "./config";
const { startWorkHour, startWorkMinute, endWorkHour, endWorkMinute } = config.operatingMode
function checkWorkTime () {
    const now = new Date(); // текущее время на устройстве пользователя
    const startWork = new Date(); // установка начала рабочего дня
    startWork.setHours(Number(startWorkHour));
    startWork.setMinutes(Number(startWorkMinute));

    const endWork = new Date(); // установка конца рабочего дня
    endWork.setHours(Number(endWorkHour));
    endWork.setMinutes(Number(endWorkMinute));
    endWork.setMinutes(endWork.getMinutes() - 30); // убираем 30 минут

    function howMuchTimeIsLeft (now, timeOf) {
        if (now.getHours() > timeOf.getHours()) timeOf.setHours(timeOf.getHours() + 24);
        let diffs = timeOf.getTime() - now.getTime();
        let hours = Math.floor(diffs / (1000 * 60 * 60));
        diffs -= hours * (1000 * 60 * 60);
        hours = hours > 0 ? hours + 'ч:' : '';
        const mins = Math.floor(diffs / (1000 * 60)) + 'мин';
        return `${hours}${mins}`
    }

    // сравнение текущего времени с требуемым временным диапазоном
    if (now.getTime() >= startWork.getTime() && now.getTime() < endWork.getTime()) {
        return false;
    } else {
        return howMuchTimeIsLeft(now, startWork);
    }
}
export default checkWorkTime