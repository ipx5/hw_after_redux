'use strict';

// function getFrequency(s,n) {
//     var freq = {}; 
//     for (var i=0; i<s.length;i++) {
//         var character = s.charAt(i);
//         if (freq[character]) {
//            freq[character]++;
//         } else {
//            freq[character] = 1;
//         }
//     }
//     return freq;
// };

function getFrequency(s,n) {
        var freq = {}; 
        var sn = s.repeat(n).substring(0, n);
        for (var i=0; i<sn.length;i++) {
            var char = sn.charAt(i);
            if (freq[char]) {
                freq[char]++;
           } else {
                freq[char] = 1;
            } 
        }
        return freq;
}

    
console.log(getFrequency('x', 100))
