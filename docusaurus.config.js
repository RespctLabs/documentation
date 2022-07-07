// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Respct",
	tagline:
		"Changing web3 gaming with our player DID, protocol & NFT marketplace",
	url: "https://docs.respct.co",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "RespctLabs", // Usually your GitHub org/user name.
	projectName: "documentation", // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				gtag: {
					trackingID: "G-GC59E85E5X",
				},
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [
				{
					name: "keywords",
					content: "respct, gamers, guilds, games, web3, blockchain",
				},
			],
			navbar: {
				title: "Respct",
				logo: {
					alt: "Respct Logo",
					src: "img/favicon.ico",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Whitepaper",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						to: "https://app.respct.co",
						label: "Early Access",
						position: "right",
					},

					// {
					// 	href: "https://github.com/facebook/docusaurus",
					// 	label: "GitHub",
					// 	position: "right",
					// },
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Whitepaper",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Twitter",
								href: "https://twitter.com/respctClub",
							},
							{
								label: "LinkedIn",
								href: "https://www.linkedin.com/company/respct-labs/",
							},
							{
								label: "Instagram",
								href: "https://www.instagram.com/respct.club/",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/respctLabs",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Respct`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
