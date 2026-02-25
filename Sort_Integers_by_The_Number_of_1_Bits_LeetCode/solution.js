class Solution {
public:
    vector<int> sortByBits(vector<int>& arr) {
            
sort(arr.begin(),arr.end(),[](int a,int b){
int bits1 = __builtin_popcount(a);
int bits2 = __builtin_popcount(b);

if(bits1 == bits2){
    return a < b;
}


return bits1 < bits2;







});

return arr;







    }
};
