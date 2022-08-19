/*Írj egy függvényt `countOfWorkingDays` néven, ami két paramétert kap. 
Mind a két paraméter egy-egy dátum. Az első a  korábbi időpont, a második 
 a későbbi időpont.  A visszatérési értéke a két dátum közötti munkanapok 
 (hétfő-péntek) száma! A különböző ünnepekkel nem kell számolnod!
  Ha az első dátum korábbi, mint a második akkor dobj egy hibát az alábbi 
  üzenettel: `The first parameter is earlier date, than second!`!
Hibát dobni a következő módon tudsz: 

```javascript
  throw new Error(message)
```
A aktuális napot is bele kell számolni a munkanapokba, ha az munkanap!
Sehol ne használj kerekítést!
*/



const countOfWorkingDay= (startDate, endDate) => {
    let numWorkDays = 0;
    let currentDate = new Date(startDate);
    let message=`The first parameter is earlier date, than second!`;
    while (currentDate <= endDate) {
        
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            numWorkDays++;
        }

        else {
            throw new Error(message);  
        }
        currentDate = currentDate.addDays(1);
    }
    return numWorkDays;
}




export default countOfWorkingDays;
