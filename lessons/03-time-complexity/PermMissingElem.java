//https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
import java.math.*;
class Solution {
    public int solution(int[] A) {
        int n = A.length;
        long sum = 0;
        for (int i : A) {
            sum += i;
        }
        return BigDecimal.valueOf((long) (n + 1) * (n + 2) / 2)
                .subtract(BigDecimal.valueOf(sum))
                .intValue();
    }
}