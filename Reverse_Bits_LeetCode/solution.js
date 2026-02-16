
// return ans;
//             ans |=(n & 1);
//             n >>= 1;
//         }


string bit = "";
for(int i=0;i<32;i++){
    bit.push_back((n%2) + '0');
    n/=2;
}
// reverse(bit.begin(),bit.end());

class Solution {
public:
    int reverseBits(int n) {
//         unsigned int ans = 0;
//         for(int i=0;i<32;i++){
//             ans <<= 1;

return stoi(bit,nullptr,2);
    }
};
