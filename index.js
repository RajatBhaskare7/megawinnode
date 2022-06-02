const express = require('express');
const app =express();
const PORT=8088;
app.use( express.json() )

app.get('/prng/:num',(req,res)=>{
    let num = req.params;
     chilkatExample(num); 
    res.status(200).send(
       chilkatExample(num)
    );
}
);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}
);
var chilkat = require('@chilkat/ck-node14-win64'); 

function chilkatExample(num) {

    // All Chilkat classes can be unlocked at once at the beginning of a program
    // by calling UnlockBundle.  It requires a Bundle unlock code.
    var chilkatGlob = new chilkat.Global();
    var success = chilkatGlob.UnlockBundle("Anything for 30-day trial.");
    if (success !== true) {
        console.log(chilkatGlob.LastErrorText);
        return;
    }
    console.log(num);
    
    // generateRandom(20);
    var array = generateRandom(num.num);
    return array;
}

function rand(n){
    var fortuna = new chilkat.Prng();

    return fortuna.RandomInt(0, n);

}
// Function to return the next random number
function getNum(v)
{
        // Size of the vector
        let n = v.length;
      
        // Make sure the number is within
        // the index range
        let index = Math.floor(rand(n) % n);
          
        // Get random number from the vector
        let num = v[index];
      
        // Remove the number from the vector
        v[index] = v[n - 1];
        v.splice(n - 1,1);
      
        // Return the removed number
        return num;
} 
 
// Function to generate n
// non-repeating random numbers
function generateRandom(n)
{
        let v = [];
        let randomSequence = [];
        // Fill the vector with the values
        // 1, 2, 3, ..., n
        for (let i = 0; i < n; i++)
            v.push(i + 1);
      
        // While vector has elements
        // get a random number from the vector and print it
        while (v.length > 0)
        {
            let number = getNum(v);
            // console.log(number + " ");
            randomSequence.push(number);
        }

        console.log(randomSequence);
        return randomSequence;
        
}

