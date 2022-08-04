/* Menghitung fungsi Last(x) untuk tiap karakter pada DNA */
const buildLast = (p) => {
    const last = [-1, -1, -1, -1]; // A = last[0], C = last[1], G = last[2], T = last[3]
    for (let i = 0; i < p.length; i++) {
        switch (p[i]) {
            case "A":
                last[0] = i;
            case "C":
                last[1] = i;
            case "G":
                last[2] = i;
            case "T":
                last[3] = i;
        }
    }
    return last;
};

/* Realisasi algoritma Boyer Moore */
const bmMatch = (t, p) => {
    const last = buildLast(p);
    const n = t.length;
    const m = p.length;
    let i = m - 1;

    if (i > n - 1) {
        return false; // panjang pattern > panjang text
    }

    let j = m - 1;
    while (i < n) {
        if (p[j] == t[i]) {
            if (j == 0) {
                return true; // match
            } else {
                i--;
                j--;
            }
        } else {
            let lo;
            switch (t[i]) {
                case "A":
                    lo = last[0];
                case "C":
                    lo = last[1];
                case "G":
                    lo = last[2];
                case "T":
                    lo = last[3];
            }
            i = i + m - Math.min(j, 1 + lo);
            j = m - 1;
        }
    }
    return false;
};

module.exports = bmMatch;
