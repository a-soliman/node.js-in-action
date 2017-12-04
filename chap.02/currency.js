const canadianDollar = 0.91;

function roundTwo (amount) {
	return Math.round(amount * 100) / 100;
};

exports.candadianToUs = canadian => roundTwo(canadian * canadianDollar);
exports.usToCanadian  = us => roundTwo(us / canadianDollar);