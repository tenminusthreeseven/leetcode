
            int nomralized_k = k % len;

            rotate(begin(nums), begin(nums) + nomralized_k, end(nums));

            int idx = 0;

            for (int j = left; j <= right; j++) {
                grid[top][j] = nums[idx++];
            }

            for (int i = top + 1; i <= bottom - 1; i++) {
                grid[i][right] = nums[idx++];
            }

            for (int j = right; j >= left; j--) {
                grid[bottom][j] = nums[idx++];
            }

            for (int i = bottom - 1; i >= top + 1; i--) {
                grid[i][left] = nums[idx++];
            }
        }

        return grid;
    }
};

