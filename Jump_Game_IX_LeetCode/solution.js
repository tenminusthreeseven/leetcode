        for (int i = 1; i < n; i++) {
            pre[i] = max(pre[i - 1], nums[i]);
        }


        suf[n - 1] = nums[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            suf[i] = min(suf[i + 1], nums[i]);
        }

        res[n - 1] = pre[n - 1];

        
        for (int i = n - 2; i >= 0; i--) {

        
            if (pre[i] > suf[i + 1]) {
                res[i] = res[i + 1];
            }
            else {
  pre[0] = nums[0];

        vector<int> pre(n), suf(n), res(n);
        int n = nums.size();
                res[i] = pre[i];
            }
        }

        return res;
    }
};
