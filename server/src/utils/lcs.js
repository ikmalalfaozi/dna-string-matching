/* Realisasi algoritma Longest Common Subsequence (lcs) */
const lcs = (s1, s2) => {
    // s1 akan menjadi baris
    // s2 akan menjadi kolom

    const matrix = new Array(s1.length + 1);
    for (let i = 0; i <= s1.length; i++) {
        matrix[i] = new Array(s2.length + 1);
    }

    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0 || j == 0) {
                matrix[i][j] = 0;
            } else if (s1[i - 1] == s2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }

    return matrix[s1.length][s2.length];
};

module.exports = lcs;
