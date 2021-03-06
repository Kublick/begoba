const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
	siteMetadata: {
		title: `GRATIS -- De Egresado a Profesional `,
		description: `Curso para profesionales de la salud para incrementar tus pacientes`,
		author: `@psicberenicebastidas`,
	},
	pathPrefix: "/registro",
	plugins: [
		`gatsby-plugin-fontawesome-css`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-eslint`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Begoba`,
				short_name: `Begoba`,
				start_url: `/registro`,
				background_color: fullConfig.theme.colors.white,
				theme_color: fullConfig.theme.colors.green["500"],
				display: `minimal-ui`,
				icon: `src/images/logo192.png`,
			},
		},
		{
			resolve: `@hutsoninc/gatsby-plugin-facebook-pixel`,
			options: {
				pixelId: "227610218315785",
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`tailwindcss`)(tailwindConfig),
					require(`autoprefixer`),
					...(process.env.NODE_ENV === `production`
						? [require(`cssnano`)]
						: []),
				],
			},
		},
		// {
		// 	resolve: `gatsby-plugin-s3`,
		// 	options: {
		// 		bucketName: "incrementatuconsulta.com",
		// 	},
		// },
	],
};
