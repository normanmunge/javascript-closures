// PILLAR 1: CLOSURES
/**
 * CLOSURES - Combination of functions and lexical scope from wheere it was declared
 * Javacript Engine will make sure a function has access to referenced variables by child functions/outside of the function within it's scope through the closure feature
 */

/**
 * Example 1
 * @returns referenced variables in lexical scop
 */
function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father'
        let randomNumber = 9232323 //NB:-> This will get garbage collected since this isn't referenced by any child funtion
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

a() //Returns function
a()() //Returns function
a()()() //Returns grandpa > father > son

/**
 * Example 2
 */
const boo = (string) => (name1) => (name2) => console.log(`${string} ${name1} ${name2}`)

boo('hi')('norman')('munge') //when invoked it logs out hi norman munge

/**
 * Example 3
 */

function callMeMaybe() {
    const callMe = 'Hi! I am now here!';

    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();


//BENEFITS OF CLOSURES
/**
 * 1. Can be memory efficient
 * 2. Allows encapsulation
 */

//1. Memory efficiency
function heavyDuty(index) {
    //creating a big array
    const bigArray = new Array(7000).fill('😊');
    console.log('Created');
    return bigArray[index]
}
// When invoked the array is created and destroyed 3 times which isn't memory efficient.
//The variable 'created' gets called 3 times
heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

//Using closures, remember they return a function which references the variable created in its lexixal scope,
//which doesn't get destroyed since it's being referenced in the scope by another function.
//The variable 'Created again' gets called only once.
function heavyDuty2() {
    //creating a big array
    const bigArray = new Array(7000).fill('😊');
    console.log('Created again');
    return function(index) {
        return bigArray[index]
    }
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(688);
getHeavyDuty(700);
getHeavyDuty(90);



//2. Encapsulation -> hiding of information that is not necessary to be seen by the outside world.
//Principle of least privilege
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
       return '💥'
    }
    setInterval(passTime, 1000);

    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.launch(); //This will call the launch fn.
/**
 * If we do not want the launch function to be accessed, we remove it from the return object in makeNuclearButton function
 */
//const makeNuclearButton = () => { ...
return {
    totalPeaceTime: totalPeaceTime
}

ohno.launch(); //calling this function, will now return a reference error. This is encapsulation
