// const elements of array

const names = ['a', 'b', 'c', 'd', 'a', 'd'];

function removeDuplicate(names) {
    const unique = [];
    const duplicate = [];
    for (const elements of names) {
        // console.log(elements);
        if (unique.indexOf(elements) == -1) {
            unique.push(elements);
        }
        else{
            duplicate.push(elements);
        }
    }
    return [unique,duplicate];
}

// const removed = removeDuplicate(names);
const removed = removeDuplicate(['a', 'b', 'c', 'd', 'a', 'd']);
console.log(removed);

// immutable=unchanged. 
// array is mutable/can be changed but string isn't

// objects
// const phone = [{object_name1:value1,object_name2:value2},{object_name1:value1,object_name2:value2}];
