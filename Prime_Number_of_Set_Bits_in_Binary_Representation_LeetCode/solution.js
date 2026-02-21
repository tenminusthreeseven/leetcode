class Solution {
public:
    int countPrimeSetBits(int left, int right) {
        int ans =0;
        for(int i=left;i<=right;i++){
            int bit = __builtin_popcount(i);

            bool prime = true;

            if(bit <2) prime =  false;
            for(int j =2;j*j<=bit;j++){
                if(bit%j==0){
                    prime = false;
                    break;
                }

            }
            if(prime){
                ans++;
            }   

        }
        return ans;
    }
};
