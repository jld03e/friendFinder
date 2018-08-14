// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.
var user = [
    
    {
    "name":"Frank",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        5,
        1,
        1,
        5,
        3,
        2,
        1,
        4,
        1
      ]
  }
]


var friendsArray = [
    
    {
    "name":"Carl",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ]
  },{
    "name":"Arnold",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        5,
        1,
        1,
        1,
        1,
        4,
        1,
        4,
        5
      ]
  },{
    "name":"Steven",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        3,
        5,
        2,
        5,
        2,
        2,
        1,
        3,
        4,
        5
      ]
  },{
    "name":"Jean Claude",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        3,
        2,
        4,
        4,
        5,
        5,
        1,
        3,
        3,
        3
      ]
  }
]

var userScores = user[0].scores;

// console.log( "User results scores: ", userScores);

var min = 40;
var diff = [];
var index;
function differences() {
for (var j=0; j<friendsArray.length; j++) {
    var compareArray = friendsArray[j].scores;
    diff.push(0);
    //console.log(compareArray);
    for (var k=0; k<compareArray.length; k++) {
        diff[j] += (Math.abs(compareArray[k] - userScores[k]));
        console.log(diff);
    };
};
};
differences();

function match() {
  for (var l=0; l < friendsArray.length; l++) {
      if (diff[l] < min) {
        min = diff[l]; 
        index = l;
      }
  } 
  return index
}

index = match();
console.log(index);