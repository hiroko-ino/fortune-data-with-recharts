import { signData } from '../data/data';

export const fortuneDataInit = (fetchedData: any, now: nowType, sign: string) => {
    let array: any = [];
    const {year, month} = now;
    for (let i = 0; i < Object.keys(fetchedData.horoscope).length; i++) {
        const formattedDay = `${year}/${('0' + month).slice(-2)}/${('0' + (i + 1)).slice(-2)}`;
        const {
            content,
            item,
            total,
            love,
            job,
            money,
        } = fetchedData.horoscope[formattedDay][signData[sign].index];
        array.push({
            date: formattedDay,
            content,
            item,
            total,
            love,
            job,
            money,
        })
    }
    return array;
}