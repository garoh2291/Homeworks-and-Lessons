// /*--------------------Homework 6 -----------------*/

// // 1. Ստեղծել ֆունկցիա, որը կընդունի 3 թվեր ու կվերադարձնի տրված թվերից բաղկացած զանգված։

// function makeArrayFromDigits(a,b,c){
//     const arr = [];
//     arr.push(a,b,c);
//     return arr
// }

// const newArray = makeArrayFromDigits(4,7,12)
// console.log('New array is:',newArray);

// // 2. Գրել ֆունկցիա, որը կընդունի զանգված և կվերադարձնի վերջինիս զույգ էլեմենտների արտադրյալը։

// const array = [17 , 65 ,2 , 8 , 6 , 9 ,11 ,37 ,]

// function countMultOddNumb(arr){
//     let mult = 1;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 === 0) mult *= element;
//     }
//     return mult
// }

// const oddMultResult = countMultOddNumb(array);
// console.log('Result is ',oddMultResult);

// // 3. Խնդիր 232, էջ 31
// function oddNumbQty(arr){
//     let count = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 === 0) count++;
//     }
//     return count
// }

// const oddNumbQtyCount = oddNumbQty(array);
// console.log('Odd numbers quantity = ', oddNumbQtyCount);

// // 4. Ռեկուրսիայով տպել a-ից b միջակայքն ընկած բոլոր ամբողջ թվերը։
// // 1st solution
// function logNumbersFromRange(a,b){
//     console.log(a);
//     if(a >= b ) return a ;
//     return logNumbersFromRange(a + 1, b)
// }
// logNumbersFromRange(3,10)


// // 5.Տրված է հետևյալ զանգվածը՝...
// // Ցիկլով որոշել, եթե զանգվածի հերթական էլեմենտը զույգ է, տպել այդ թիվը։

// const array2 = [45,45,8,8,6,9,87,4,7,8,89,4,8,6,9,87,4,7,8,89,4]

// function logOddNumbFromArray(arr){
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         if(element % 2 === 0) console.log(element);
//     }
// }

// logOddNumbFromArray(array2)

/*--------------------Homework 7 -----------------*/

// // 1. Հաշվել զանգվածի զույգ տարրերի արտադրյալը (կիրառել forEach)

// const numArray = [7 , 11 , 4, 9 , 5 , 8 , 57 , 6 , 13 , 97 , 31];

// let mult  = 1;
// numArray.forEach(item => {if(item % 2 === 0) return mult *= item});
// console.log(mult);

// // 2. Հաշվել զանգվածի 10-ից փոքր տարրերի գումարը (կիրառել reduce)

// let summary =  numArray.reduce((num, item)=>{
//     if(item < 10) return num += item;
//     return num;
// },0)

// console.log(summary);

// // 3. Տրված է թվեր պարունակող զանգված և k թիվ։ Ստանալ և տպել նոր զանգված, որի էլեմենտները նախկին զանգվածի էլեմենտներից k անգամ փոքր են(map)։
// const numArray2 = [3 , 6 , 12 , 24 , 27 , 30];
// const k = 3;
// const smallDigitsArray = numArray2.map(item => item / k)
// console.log(smallDigitsArray);

// // 4. Տրված է թվեր պարունակող զանգված և k թիվ։ Ստանալ և տպել նոր զանգված, որը չի պարունակի տրված k թիվը(filter)։
// const numArray3 = [4 , 6  , 3 , 11 , 17]

// const filteredArray = numArray3.filter(item => item !== k)
// console.log(filteredArray);



/*--------------------Homework 8 -----------------*/




// // 1. Ստեղծել Person անունով կոնստրուկտոր, որը կստեղծի eat, sleep, work մեթոդներով նոր օբյեկտ: 
// // Ստեղծել User անունով կոնստրուկտոր, որը կընդունի name, surname, profession արգումենտները և կստեղծի նոր օբյեկտ՝ 
// // տրված հատկություններով և eat, sleep, work հատկությունները կժառանգի Person-ի ստեղծած օբյեկտից:
// // Ստեղծել մի քանի տարբեր User օբյեկտներ և տպել դրանք։

// function Person(){
//     this.eat = function(){
//         console.log(`${this.name} eats Hot-dog`);
//     };
//     this.sleep = function(){
//         console.log(`${this.name} sleeps 8 hours`);
//     };
//     this.work = function(){
//         console.log(`${this.name} works as a ${this.profession}`);
//     }
// };


// function User(name,surname,profession){
//     this.name  = name ;
//     this.surname  = surname ; 
//     this.profession  = profession ; 
// };

// User.prototype = new Person();

// const user1  = new User("Garnik","Hovsepyan","Geologist");
// const user2 = new User("Henrikh","Mkhitaryan","Footballer");

// user1.eat();
// user2.work();

// // 2. Խնդիր 205, էջ 29

// const digitsArray = []
// let num = 242314234824578;
// while (num >= 1) {
//     const digit = num % 10; 
//     digitsArray.push(digit)
//     num = (num - digit) / 10;
// }

// digitsArray.reverse()
// console.log(digitsArray);

// // 3. Խնդիր 284, էջ 33
// const X = [7 , 11 , 4, 9 , 5 , 8 , 57 , 14 , 13 , 97 , 31];
// const a = 10;
// const b = 40;

// const Y  = X.filter(item => {
//     if(item >=a && item <= b) return item
// })

// console.log(Y);

// // 4. Տրված է կոտորակային թվերից բաղկացած զանգված (օրինակ՝ [1.3, 4.895, 96.547]) : 
// // Գտնել այն թիվը, որը ամենամոտն է որևէ բնական թվի։ Օրինակ՝ բերված զանգվածում 4.895 թիվն ավելի մոտիկ է 5-ին։
// //  Խնդիրը լուծելու համար կարելի է զանգվածի հերթական թիվը կլորացնել դեպի վեր, հետո դրանից հանել սկզբնական թիվը, 
// //  ու հետո համեմատել բոլոր տարբերությունները, որը որ լինի ամենափոքրը, ուրեմն նրա թիվը կլինի որոնելին։

// const floatNumbersArray = [1.3 , 4.895 , 96.547, 2.011 , 12.956 ]
// const smallDifferenceNumber = floatNumbersArray.reduce((result,item,index,array)=>{
//     const fakeMinDifference = Math.abs(array[index] - Math.floor(array[index]));
//     if( fakeMinDifference < result.mindifference ) {
//         result.mindifference = fakeMinDifference ;
//         result.nearestNumb = item;
//     }
//     return result
// },{
//     mindifference:  Math.abs(floatNumbersArray[0] - Math.floor(floatNumbersArray[0])),
//     nearestNumb : floatNumbersArray[0]
// })

// console.log(smallDifferenceNumber);


/*--------------------Homework 9 -----------------*/

// 1.Ուենք կրկնվող տարերով զանգված:
// Գտնել,թե որ անդամից քանի հատ ունենք զանգվածում

//1st solution
// const testarray = [3,3,2,5,2,3,5,3,4,4,3,5,4,2,1,2,5,2,2,3,1];

// function getRepeatNumbCount(array) {
//     const sortArr = array.sort((a,b)=> a-b);
//     const filteredArray = sortArr.filter((item, index,array)=> array[index] - array[index-1] !== 0);

//     filteredArray.forEach(value => {
//         let count = array.filter(x=>x === value).length;
//         console.log(`The number ${value} is repeating ${count} times`); 
//     });
// }
// getRepeatNumbCount(testarray)
// //2nd solution

// function countFunc(arr){
//     const obj = {}
//     arr.forEach(item=>{
//         obj[item] = ++ obj[item] || 1
//     })
//     return obj
// }

// console.log(countFunc(testarray));

////////////////////////////////////


/*--------------------Homework 10 -----------------*/
// Տնային 1. Ստեղծել Mynumber անունով class, որի կոնստրուկտորը ստանում է number տիպի արգումենտ և որը ստեղծում է նոր օբյեկտ՝ value property-ով։ 
// value-ի արժեքը պետք է լինի կոնստրուկտորին փոխանցված թիվը։ Նոր օբյեկտը պետք է ունենա add մեթոդ, 
// որը կընդունի մեկ number տիպի արգումենտ և նրա value-ին կգումարի փոխանցված թիվը, այնուհետև կվերադարձնի փոփոխված օբյեկտը, 
// այսինքն՝ եթե մեր օբյեկտը ունի հետևյալ տեսքը՝ myNum = {value: 15}; myNum.add(4) արտահայտությունից հետ օբյեկտը կունենա հետևյալ տեսքը՝ myNum = {value: 19}։ 
// Համանման ձևով ստեղծել նաև sub մեթոդ՝ հանման գործողությունը կատարելու համար։ Բացի այդ, օբյեկտը պետք է ունենա toNumber և toString մեթոդներ, 
// որոնք կանչելիս կվերադարձնեն օբյեկտի value-ն՝ համապատասխանաբար number և string տիպերով, օրինակ՝ b = myNum.toNumber()
// // 19 number, c = myNum.toString() // “19” string ։ Mynumber class –ից ստեղծել մի քանի օբյեկտներ, 
// կանչել և տպել դրանց բոլոր property-ները։ Ուշադրություն՝ նոր օբյեկտը պետք է ունենա միայն value սեփական property-ն։


class Mynumber {
    constructor(value){
        this.value = value
    }
    add(num) {
        this.value = this.value + num
        return this
    }
    sub(num){
        this.value = this.value - num
        return this
    }
    toString(){
        return this.value.toString()
    }
    toNumber(){
        return Number(this.value)
    }
}

const myNum = new Mynumber(12);
myNum.add(80);
const c = myNum.toString();
const b = myNum.toNumber();

// 2. Ստեղծել MyString անունով class, որը կունենա գլոբալ String կոնստրուկտորի բոլոր հատկությունները։ 
// MyString-ը պետք է ունենա getPolyndrom ստատիկ մեթոդ, որը որպես արգումենտ ընդունում է string և 
// վերադարձնում տողում գտնված ամենաերկար պոլինդրոմ բառը։
// (օրինակ՝ “javascript racecar class random string” -> “racecar”) :


// const text = "javascript racecar class random string"

// class MyString extends String {
//     static getPolyndrom(string){
//         const textArray = text.split(" ");
//         const polyndrom = textArray.filter(item=> item === item.split("").reverse().join(""));
//         return polyndrom
//     }
//     constructor(){
//         super()
//     }
// };


// console.log(MyString.getPolyndrom(text));


// 3. Ունենք հետևյալ class-ը

// total հատկության համար ավելացնել setter, որի ժամանակ, 
// եթե total -ը փոփոխենք ինչ-որ չափով, որը մեծ կլինի նախկին արժեքից,
// պետք է վերջիններիս տարբերությունը հավասարաչափ բաժանել աշխատողների միջև,
// այսինքն նրանց աշխատավարձերին գումարել ստացված մասը։ Եթե նոր total -ի արժեքը նախկինից փոքր է, 
// ապա յուրաքանչյուր աշխատողի աշխատավարձից հանում ենք ստացված տարբերության իր մասը։

// class Staff{
//     John = 150;
//     Sarah = 200;
//     Nick = 963;
//     Carl = 134;
//     get total() {
//           let sum = 0;
//           Object.values(this).forEach(salary => {
//               sum += salary;
//           });
//           return sum;
//         }
    
//     set setTotal(newTotal){
//         const difference = Math.abs(newTotal - this.total)
//         const differPerPerson = difference / Object.values(this).length
//         if (newTotal > this.total) {
//             for (const key in this) {
//                 this[key] = this[key] + differPerPerson
//             }
//         }else if(newTotal < this.total){
//             for (const key in this) {
//                 this[key] = this[key] - differPerPerson
//             }
//         }else{
//             return
//         }
      
//     }
//   }


// const staff = new Staff
// staff.setTotal= 1721;
// console.log(staff.total);