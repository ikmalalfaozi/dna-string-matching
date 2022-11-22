const formatDate = (date) => {
    const arrayOfMonth = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return `${date.getDate()} ${arrayOfMonth[date.getMonth()]} ${date.getFullYear()}`;
};

export default formatDate;
