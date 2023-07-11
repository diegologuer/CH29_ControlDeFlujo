// Open up a text editor of your choice and complete the following Javascript exercises.

// Exercise #1
// We'll build the industry plant calendar from the opening exercise.

// Part 1
// First, build a function called "businessHours". Similar to the day of the week class exercise, this function should accept two parameters: dayNumber and hourNumber.

// By reading the dayNumber and the hourNumber, your program should print whether it is business hours or not. It should return true if it is business hours, and false if not.

// function businessHours(dayNumber, hourNumber)

// Obs: consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).

function busisnessHours (dayNumber, hourNumber){
    if((dayNumber>=1 && dayNumber<=5)&&(hourNumber>=9 && hourNumber<=18)){
        return "Busisness Hour";
    }
    else{
        return "Not busisness hour";
    }
}




// Part 2
// Now, create the function getDayNumber.

// It should accept two parameters: janFirstDayNumber and yearDayNumber.

// The yearDayNumber will be an int ranging from 0 to 365.

// janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

// Your function should then calculate and return the day of the week corresponding to the yearDayNumber passed.

// Hint: use the remainder operator (%), dividing your yearDayNumber by 7.


function getDayNumberB(janFirstDayNumber, yearDayNumber){
    return(janFirstDayNumber + (yearDayNumber - 1) % 7);
}


// Part 3
// Finally, build a function that, from a yearDayNumber (int, 0-365) and an hourNumber (int, 0-23), returns true if it is business hours.

function getDayBusisness(janFirstDayNumber, yearDayNumber, hourNumber){
    let res1 = getDayNumber(janFirstDayNumber, yearDayNumber );
    let res2 = busisnessHours(res1, hourNumber);

    if(((res1 != 0) && (res1 != 6)) && (res2 == "Busisness Hour")){
        return "Busisness Hour";
    }
    else{
        return "Not a busisness hour";
    }  
}



// Challenge
// Replace the yearDayNumber and hourNumber parameters with a Date() variable.


function getDayBusisness2(){
    let fechaActual = new Date();
    let res1 = fechaActual.getDay();
    let hourNumber = fechaActual.getHours();
    let res2 = busisnessHours(res1, hourNumber);

    if(((res1 != 0) && (res1 != 6)) && (res2 == "Busisness Hour")){
        return "Busisness Hour";
    }
    else{
        return "Not a busisness hour";
    }  
}

