//https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/
function solution(X, A) {
    // write your code in JavaScript (Node.js 6.4.0)
	var arrPositions = [];
    for (var x = 1; x <= X; x++)
        arrPositions[x] = -1;
    for (var i = 0; i < A.length; i++) {
        if (i < arrPositions[A[i]] || arrPositions[A[i]] === -1)
            arrPositions[A[i]] = i;
    }
    var max = -1;
    for (var i = 1; i <= X; i++) {
        if (arrPositions[i] === -1)
            return -1;
        if (max < arrPositions[i])
            max = arrPositions[i];
    }    
    return max;
}