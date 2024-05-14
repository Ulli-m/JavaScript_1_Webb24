
//Övningar funktioner


/*● Skapa en funktion writeName som tar in ett namn som parameter och skriver ut
det till konsolen när funktionen anropas.*/

function writeName(name){

    return name;
}

let myname = writeName("ulli");
console.log(myname);

/*● Skapa en funktion area som tar in width och height som parametrar och
returnerar området (area) av en rektangel (width* height).*/

function area(width,height){

    return width * height;
};

let myarea = area(20,40);
console.log("My rectangel is:" + myarea)

//Annonyma Funktioner:

let newestarea = function(x,y){

    return x * y ;
};

console.log( newestarea(20,40));

// Beräkna Summan av Två Tal

let sum = function( a,b){

    return a + b;
}

let result = sum(5,3);
console.log("Sum is:", result);

// Konvertera Celsius till Fahrenheit

let celciusToFarenheit = function(temperaturInC){

    let temperaturInF =  (temperaturInC * 9/5) + 32;

    console.log(`${temperaturInC} = ${temperaturInF}`);
} 

celciusToFarenheit(20);





// Beräkna Area av en Cirkel

let cirkel = function(radia){

    let cirkelnsarea = radia * 2 * 3.14 ;
    console.log(`${cirkelnsarea}`);
}

cirkel(5);

// Beräkna Kvadraten av Ett Tal



let kvadrat = function(c,d){

    return c*d;

}

let kvad = kvadrat(5,5);
console.log("Kvadraten är:" + kvad);

// Räkna Antalet Tecken i En Sträng:

function itemsInarray(sträng){

    console.log(sträng.length);
}
itemsInarray("boll");


/*● Skapa en funktion hittaMax som tar en array av tal som argument och
returnerar det största talet i arrayen.*/

let hittaMax = (listOfNbrs) =>{
    let temp = listOfNbrs[0];
    for ( let i = 0 ; i < listOfNbrs.length; i++){
            console.log (" temp value = " + temp);
        if ( listOfNbrs[i] > temp){
            temp = listOfNbrs[i];
            console.log(" current value" + listOfNbrs[i] +  ">" + temp);
        }else{
            console.log(" current value" + listOfNbrs[i] +  "<=" + temp);
        }

        }
        return temp;
    }
    
let randomList = [123,546,489,478,123,425,698,1235,458,100];
hittaMax(randomList);


let createRandomList = (listLength,maxValue) =>{
    let outList = [];
    for( let i = 0; i < listLength ; i++){
        let rand = Math.floor(Math.random() * maxValue);
        outList.push(rand);
    }
    return outList;
}

console.log(createRandomList(10,25));

// Kontrollera Om Ett Tal är Jämnt eller Udda

let jämnTal =(array) =>{


    for ( let i = 0; i < array.length; i++){

        if( array[i] % 2 !==0 ){
          
            return false;
        }
    }
     
    return true;
  
  }
  let talen1 =[4,6,8,10];
  let talen2 =[5,6,7,8,9];
  console.log(jämnTal(talen1));
  console.log(jämnTal(talen2));
  

  // Konvertera Text till Stora Bokstäver:
  //Omvandla storleken på en sträng med toUpperCase() och toLowerCase()

  let stringToUpperCase = (meddelande)=>{

     meddelande = meddelande.toUpperCase();
    
     return meddelande;
  }

  console.log(stringToUpperCase("vilken underbar dag"));

/* ● Skapa en funktion summeraArray som tar en array av tal som argument och
returnerar summan av alla tal i arrayen.*/

let summeraArray=(array)=>{

    let summ = 0;
 
    for( let i = 0; i < array.length; i++){
 
     summ = summ + array[i];
    }
 
    return summ ;
 }
 
 let array2 = [10,20,30,40,50,60,70,80,90];
 console.log( " summan av array är " + summeraArray(array2));
 

/*● Skapa en funktion filtreraPositiva som tar en array av tal som argument och
returnerar en ny array med endast de positiva talen.*/

let filtreraPositiva=(arrayTal)=>{

    let positivaTal = [];

    for(let i = 0; i < arrayTal.length; i++){

        if( arrayTal[i] > 0){
            positivaTal.push(arrayTal[i]);
        }
    }
        return positivaTal;
}
let talen = [-9,3,-4,6,-7,8,-11,12,14];
console.log(filtreraPositiva(talen));




function add2(a){
    return a + 2; 
}
function multiply5(a){
    return a * 5; // 12 * 5 = 60
}

let result2 = multiply5(add2(10)); 

console.log(result2);

//

let text = " this is a text".toUpperCase();
let textReplace = text.replace("this ", "that ");
let textReverse = textReplace.concat (" new text added");
console.log(textReverse);

let text2 = " this is another text".toUpperCase().replace().charAt(" THAT,that").concat( "new text added");

console.log(text2);











