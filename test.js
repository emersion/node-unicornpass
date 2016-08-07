const assert = require('assert');
const unicornpass = require('./index');

it('Should return the correct colors', () => {
	const result = unicornpass('42');
	const expected = {
		backgroundColor: 'rgba(83,8,6,0.33725490196078434)',
		backgroundImage: 'linear-gradient(to right, rgba(57,50,99,0.4) 0%,rgba(57,50,99,0.4) 10%,rgba(99,101,98,0.2) 10%,rgba(99,101,98,0.2) 20%,rgba(57,100,53,0.21568627450980393) 20%,rgba(57,100,53,0.21568627450980393) 30%,rgba(100,57,49,0.20392156862745098) 30%,rgba(100,57,49,0.20392156862745098) 40%,rgba(101,100,56,0.3843137254901961) 40%,rgba(101,100,56,0.3843137254901961) 50%,rgba(49,52,100,0.18823529411764706) 50%,rgba(49,52,100,0.18823529411764706) 60%,rgba(101,51,55,0.21176470588235294) 60%,rgba(101,51,55,0.21176470588235294) 70%,rgba(52,51,100,0.396078431372549) 70%,rgba(52,51,100,0.396078431372549) 80%,rgba(48,55,57,0.21568627450980393) 80%,rgba(48,55,57,0.21568627450980393) 90%,rgba(97,101,53,0.21176470588235294) 90%,rgba(97,101,53,0.21176470588235294) 100%)',
	};

	assert.equal(expected.backgroundColor, result.backgroundColor);
	assert.equal(expected.backgroundImage, result.backgroundImage);
});
