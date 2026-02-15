            int sum = carry;

            if (m >= 0) {
                sum += a[m] - '0';
                m--;
            }

            if (n >= 0) {
                sum += b[n] - '0';
                n--;
            }

            result.push_back((sum % 2) + '0');


        while (m >= 0 || n >= 0 || carry) {


        int carry = 0;
        string result = "";   // ✅ added

        int m = a.size() - 1;
        int n = b.size() - 1;
class Solution {
public:
    string addBinary(string a, string b) {
