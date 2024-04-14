if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.customIncludes(12));
// yeh ham logo ne do check karne k liye kiya hain true and false.. 

console.log(array.customIncludes(9)); 
