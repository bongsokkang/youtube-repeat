import Utility from './Utility';

describe('Utility', () => {
	describe('milliToMins', () => {
		it('should convert 60000 ms to 1:00', () => {
			expect(Utility.milliToMins(60000)).toEqual('1:00');
		});

		it('should convert 600000 ms to 10:00', () => {
			expect(Utility.milliToMins(600000)).toEqual('10:00');
		});

		it('should convert 659000 ms to 10:59', () => {
			expect(Utility.milliToMins(659000)).toEqual('10:59');
		});
	});

	describe('percentOf', () => {
		it('should return 0 when percent is 0', () => {
			expect(Utility.percentOf(100, 0)).toEqual(0);
		});

		it('should return full amount when percent is 100', () => {
			expect(Utility.percentOf(100, 100)).toEqual(100);
		});

		it('should calculate 39 for 39% of 100', () => {
			expect(Utility.percentOf(100, 39)).toEqual(39);
		});
	});
});
