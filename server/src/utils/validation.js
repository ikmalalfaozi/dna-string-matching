const isDNAValid = (dnaSequence) => {
    let pattern = `[^ACGT]`;
    return !dnaSequence.match(pattern);
};

module.exports = isDNAValid;
