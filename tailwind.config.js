// See https://tailwindcss.com/docs/configuration for details
module.exports = {
	variants: {
		extend: {
			animation: ["hover"],
		},
		theme: {
			colors: {
				"fb-blue": "#4267B2",
			},
		},
	},
	purge: ["./src/**/*.js"],
	// https://github.com/tailwindlabs/tailwindcss-forms
	plugins: [require("@tailwindcss/forms")],
};
