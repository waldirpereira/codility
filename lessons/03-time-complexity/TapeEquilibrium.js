//https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var n = A.length;
    for (var i = 1; i < n; i++)
        A[i] = A[i-1] + A[i];
        
    var min = Number.MAX_VALUE;
    for (var p = 1; p < n; p++) {
        var firstSum = A[p-1];
        var secondSum = A[n-1] - firstSum;
        var absDif = Math.abs(firstSum - secondSum);
        if (absDif < min)
            min = absDif;
    }
    
    return min;
}