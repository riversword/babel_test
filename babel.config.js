const presets = [
	[
		"@babel/env",
		{
			targets: {
				edge: "11",
				firefox: "40",
				chrome: "40",
				safari: "9",
			},
			useBuiltIns: "usage",
			"corejs": "3.6.4",
		},
	],
];
  
module.exports = { presets };
