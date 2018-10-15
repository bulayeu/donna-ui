const path = require('path');

module.exports = (storybookBaseConfig, configType) => {

	storybookBaseConfig.module.rules.push({
		test: /\.scss$/,
		loaders: ["style-loader", "css-loader", "sass-loader"],
		include: path.resolve(__dirname, '../')
	});

	storybookBaseConfig.module.rules.push({
		test: /\.css$/,
		loaders: ["style-loader", "css-loader"],
		include: path.resolve(__dirname, '../')
	});


	return storybookBaseConfig;
};