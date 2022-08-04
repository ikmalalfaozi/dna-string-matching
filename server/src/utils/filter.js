const filter = (s) => {
    const m = { date: { year: "", month: "", date: "" }, diseaseName: "" };
    let date;
    let diseaseName;
    const month = {
        JANUARI: "01",
        JANUARY: "01",
        FEBRUARI: "02",
        FEBRUARY: "02",
        MARET: "03",
        MARCH: "03",
        APRIL: "04",
        MEI: "05",
        MAY: "05",
        JUNI: "06",
        JUNE: "06",
        JULI: "07",
        JULY: "07",
        AGUSTUS: "08",
        AUGUST: "08",
        SEPTEMBER: "09",
        OKTOBER: "10",
        OCTOBER: "10",
        NOVEMBER: "11",
        DESEMBER: "12",
        DECEMBER: "12",
    };

    const monthRegexp = "(JANUARI|JANUARY|FEBRUARI|FEBRUARY|MARET|MARCH|APRIL|MEI|MAY|JUNI|JUNE|JULI|JULY|AGUSTUS|AUGUST|SEPTEMBER|OKTOBER|OCTOBER|NOVEMBER|DESEMBER|DECEMBER)";
    // const dieaseRegexp = /[\w\s]+/;
    const dateFormat1 = new RegExp("(3[01]|[12][0-9]|0?[1-9]) " + monthRegexp + " [0-9]{4}"); // 1 JANUARI 2020
    const dateFormat2 = /(3[01]|[12][0-9]|0?[1-9])[\/\-]((0?[0-9])|((1)[0-2]))[\/\-][0-9]{4}/; // 31/12/2019 or 31-12-2019

    // Fix string format
    const space = /\s+/g;
    s = s.replace(space, " "); // Mengganti spasi yang lebih dari satu dengan satu spasi
    s = s.toUpperCase(); // Membuat string menjadi Upper Case

    // Mengambil string tanggal
    if (dateFormat1.test(s)) {
        date = s.match(dateFormat1)[0];
        s = s.replace(date, "");
        let dateSplit = date.split(" ");
        [m.date.date, m.date.month, m.date.year] = [dateSplit[0], month[dateSplit[1]], dateSplit[2]];
    } else if (dateFormat2.test(s)) {
        date = s.match(dateFormat2)[0];
        s = s.replace(date, "");
        let dateSplit = date.split(/[\/\-]/);
        [m.date.date, m.date.month, m.date.year] = [dateSplit[0], dateSplit[1], dateSplit[2]];
    }

    if (m.date.date.length == 1) {
        m.date.date = "0" + m.date.date;
    }

    if (m.date.month.length == 1) {
        m.date.month = "0" + m.date.month;
    }

    s = s.trim();
    diseaseName = s;
    m.diseaseName = diseaseName;
    return m;
};

module.exports = filter;
