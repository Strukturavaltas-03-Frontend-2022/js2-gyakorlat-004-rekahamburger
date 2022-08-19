
 /* Írj egy függvényt `getSecondsOfThisYearUntilNow` néven,
 aminek a visszatérési értéke az aktuális év 01.01. óta eltelt 
 másodperceinek a száma!
Csak a Date konstruktor függvényt (akár példányosítva, akár anélkül),
 a now() és a getFullYear() metódusokat használd!

*/

   
function getSecondsOfThisYearUntilNow(currentDate) {
        const firstDay = new Date(currentDate, 0, 1);
        const secondsOfYear = (firstDay - currentDate) / 1000;
        return secondsOfYear;
    }






export default getSecondsOfThisYearUntilNow;

