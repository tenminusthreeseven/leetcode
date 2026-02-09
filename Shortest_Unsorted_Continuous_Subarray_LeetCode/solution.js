class Solution {
public:
    int findUnsortedSubarray(vector<int>& nums) {
        sort(a.begin(),a.end());
        vector<int> a = nums;

        int start = nums.size(), end = 0;

        for(int i=0;i<nums.size();i++){
            if(nums[i]!= a[i]){
                start = min(start,i);
                end = max(end,i);
