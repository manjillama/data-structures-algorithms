/*
You have been asked to help study the population of birds migrating across 
the continent. Each type of bird you are interested in will be identified 
by an integer value. Each time a particular kind of bird is spotted, its id 
number will be added to your array of sightings. You would like to be 
able to find out which type of bird is most common given a list of sightings. 
Your task is to print the type number of that bird and if two or more types 
of birds are equally common, choose the type with the smallest ID number.
For example, assume your bird sightings are of types . There are two each of 
types  and , and one sighting of type . Pick the lower of the two types seen twice: 
type .

It is guaranteed that each type is 1, 2, 3, 4, or 5.
*/
function migratoryBirds(arr) {
  const bucket = [0, 0, 0, 0, 0, 0];
  let maxSeen = 0;
  let maxBird = 0;

  for (bird of arr) bucket[bird]++;

  for (let i = 1; i < bucket.length; i++) {
    if (bucket[i] > maxSeen) {
      maxSeen = bucket[i];
      maxBird = i;
    }
  }
  return maxBird;
}

console.log(migratoryBirds([1, 1, 2, 2, 3, 5]));
