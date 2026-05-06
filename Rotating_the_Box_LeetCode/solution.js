class Solution {
public:
    vector<vector<char>> rotateTheBox(vector<vector<char>>& boxGrid) {

        int m = boxGrid.size();
        int n = boxGrid[0].size();

        vector<vector<char>> result(n, vector<char>(m));

        // transpose
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < m; j++) {
                result[i][j] = boxGrid[j][i];
            }
        }

        // reverse each row -> 90 degree rotation
        for(vector<char>& row : result) {
            reverse(begin(row), end(row));
        }

        // apply gravity
        for(int j = 0; j < m; j++) {

            for(int i = n - 1; i >= 0; i--) {

                if(result[i][j] == '.') {

                    int stonerow = -1;

                    for(int k = i - 1; k >= 0; k--) {
