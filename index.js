var createHash = require('sha.js');

function sha512(bytes) {
	return createHash('sha512').update(bytes, 'utf8').digest('hex');
}

function dwords(bytes) {
	var dw;
	var r = [];
	for (var i = 0; i < bytes.length; i += 4) {
		dw = bytes.charCodeAt(i+3) << 0;
		dw += bytes.charCodeAt(i+2) << 8;
		dw += bytes.charCodeAt(i+1) << 16;
		dw += bytes.charCodeAt(i+0) << 24;
		r.push(dw);
	}
	return r;
}

function rgba(value) {
	return 'rgba(' + [
		(value >> 24) & 255,
		(value >> 16) & 255,
		(value >> 8) & 255,
		(value & 255) / 255
	].join() + ')';
}

function gradient(colors) {
	if (colors.length == 1) {
		return colors[0];
	}

	var s = 100 / colors.length;

	return 'linear-gradient(to right, ' + colors.map(rgba).map(function (v, i) {
		return v + ' ' + i*s + '%,' + v + ' ' + (i+1)*s + '%'
	}).join() + ')';
}

function unicornpass(password) {
	var hash = dwords(sha512(password));

	var xor = hash.reduce(function (a, b) {
		return a ^ b;
	}, 0);

	return {
		backgroundColor: rgba(xor),
		backgroundImage: gradient(hash)
	};
}

module.exports = unicornpass;
