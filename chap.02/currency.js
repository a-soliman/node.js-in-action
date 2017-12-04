class Currency {
	constructor(canadianDollar) {
		this.canadianDollar = canadianDollar || 0.91;
	}

	roundTwoDecimals (amount) {
		return Math.round(amount * 100) / 100;
	};

	canadianToUs(canadian) {
		return this.roundTwoDecimals(canadian * this.canadianDollar);
	}

	usToCanadian(us) {
		return this.roundTwoDecimals(us / this.canadianDollar);
	};
}

module.exports = Currency;




















// const canadianDollar = 0.91;

// function roundTwo (amount) {
// 	return Math.round(amount * 100) / 100;
// };

// exports.candadianToUs = canadian => roundTwo(canadian * canadianDollar);
// exports.usToCanadian  = us => roundTwo(us / canadianDollar);