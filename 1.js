'use strict';

function getFrequency(s,n) {
        var freq = {}; 
        var sn = s.repeat(n/s.length+1).substring(0, n);
        for (var i=0; i<sn.length;i++) {
            var char = sn.charAt(i);
            if (freq[char]) {
                freq[char]++;
           } else {
                freq[char]= 1 ;
            } 
        }
        if(!!freq["a"])
            return freq["a"];
        else return 0;
}
 
console.log(getFrequency('aba', 10))
