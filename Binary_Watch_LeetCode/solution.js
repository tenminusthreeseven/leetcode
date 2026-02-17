                if (__builtin_popcount(hh) + __builtin_popcount(mm) == turnedOn) {

                    string hour = to_string(hh);
                    string minute = (mm < 10 ? "0" : "") + to_string(mm);

                    ans.push_back(hour + ":" + minute);
        for (int hh = 0; hh < 12; hh++) {
            for (int mm = 0; mm < 60; mm++) {


        vector<string> ans;

class Solution {
public:
    vector<string> readBinaryWatch(int turnedOn) {
