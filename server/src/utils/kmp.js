/* Realisasi Border Function */
// Menerima input pattern p dan mengembalikan border function untuk setiap indeks j pada p
const computeFail = (p) => {
    const border = [];
    for (let i = 0; i < p.length; i++) {
        border.push(0);
    }

    for (let j = 0; j < p.length; j++) {
        /* size of the largest prefix of P[0..j-1] that is also a suffix of P[1..j-1] */
        if (j <= 1) {
            border[j] = 0;
        } else {
            let k = j - 1;
            let found = false;
            while (!found && k > 0) {
                if (p.slice(0, k) == p(j - k, j)) {
                    found = true;
                } else {
                    k--;
                }
            }
            border[j] = k;
        }
    }
    return border;
};

/* Realisasi algoritma kmp */
// Menerima input teks t dan pattern p.
// Mengembalikan nilai boolean yang menyatakan apakah pattern p ada pada teks t
const kmpMatch = (t, p) => {
    const n = t.length;
    const m = p.lenth;

    const fail = computeFail(p);

    let i = 0;
    let j = 0;

    while (i < n) {
        if (p[j] == t[i]) {
            if (j == m - 1) {
                return true; // match
            }
            i++;
            j++;
        } else if (j > 0) {
            j = fail[j - 1];
        } else {
            i++;
        }
    }

    return false;
};

module.exports = kmpMatch;
