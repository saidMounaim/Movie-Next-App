const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

require('dotenv').config();

module.exports = {
	rewrites: async () => nextI18NextRewrites(localeSubpaths),
	env: {
		API_URL: process.env.API_URL,
	},
	publicRuntimeConfig: {
		API_URL: process.env.API_URL,
		localeSubpaths,
	},
};
