exports.success = function (res, msg, token) {
	if (typeof token !== 'undefined') {
		var data = {
			status: 200,
			success: true,
			message: msg,
			token: token
		};
	}
	else {
		var data = {
			status: 200,
			success: true,
			message: msg
		};
	}
	return res.status(200).json(data);
};

exports.successFalse = function (res, msg) {
	var data = {
		status: 200,
		success: false,
		message: msg
	};
	return res.status(200).json(data);
};

exports.successWithData = function (res, msg, data) {
	var resData = {
		status: 200,
		success: true,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

exports.validationError = function (res, msg) {
	resData = {
		status: 400,
		success: false,
		message: msg,
	};
	return res.status(400).json(resData);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 400,
		success: false,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

exports.unauthorized = function (res, msg) {
	var data = {
		status: 401,
		success: false,
		message: msg,
	};
	return res.status(401).json(data);
};

exports.notFound = function (res, msg) {
	var data = {
		status: 404,
		success: false,
		message: msg,
	};
	return res.status(404).json(data);
};

exports.error = function (res, msg) {
	var data = {
		status: 500,
		success: false,
		message: msg,
	};
	return res.status(500).json(data);
};
