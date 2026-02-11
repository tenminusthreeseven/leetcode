class Solution {
public:
    int longestBalanced(vector<int>& nums) {
        int n = nums.size();
        int ans = 0;
for(int i=0;i<n;i++){
    if(n-i<=ans) break;


    unordered_map<int,int> evenfreq;
    unordered_map<int,int> oddfreq;

int even =0;
int odd=0;

for(int j=i;j<n;j++){
    int x = nums[i];
    if(x%2==0){
        if(++evenfreq[x]==1) even++;
    } else {
        if(++oddfreq[x]==1) odd++;
    }

    if(even == odd){
        ans =  max(ans,j-i+1);
    }
}



}




return ans;

    }
};
