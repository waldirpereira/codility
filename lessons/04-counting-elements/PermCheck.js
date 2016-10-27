//https://codility.com/programmers/lessons/4-counting_elements/perm_check/
function solution(A) {
    var correctNumbers = 0;
    var B = [];
    var n = A.length;
    for (var i = 0; i < n; i++) {
        var val = A[i];
        if (val > n)
            return 0;
            
        if (B[val-1] > 0)
            return 0;
                
        B[val-1] = 1;
        correctNumbers++;
    }
    return correctNumbers === n ? 1 : 0;
}