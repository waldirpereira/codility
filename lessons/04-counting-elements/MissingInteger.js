//https://codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution(A) {
    var occurrences = [];
    for (var i = 0; i < A.length; i++) {
        if (A[i] <= 0)
            continue;
        var num = occurrences[A[i]] || 0;
        occurrences[A[i]] = num + 1;
    }
    
    var result = 1;
    for (var i = 1; i <= occurrences.length; i++) {
        result = i;
        if (!occurrences[i])
            break;
    }
    
    return result;
}