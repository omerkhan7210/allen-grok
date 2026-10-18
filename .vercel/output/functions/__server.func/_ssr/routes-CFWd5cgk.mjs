import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CFWd5cgk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var areas = [
	{
		name: "Tsawwassen",
		line: "Beach Grove, Boundary Bay, and the ferry side of the peninsula.",
		photo: "/photos/coast.jpg",
		note: "Waterfront, downsizers, families who want the ferry and the dike trail."
	},
	{
		name: "Ladner",
		line: "Village streets, harbour light, and character homes.",
		photo: "/photos/house-white.jpg",
		note: "People who want a main street, not a mall, and a house with some age to it."
	},
	{
		name: "North Delta",
		line: "Established streets and more room for the money.",
		photo: "/photos/suburb.jpg",
		note: "First homes, growing families, and moves that have to work on a real budget."
	}
];
var homes = [
	{
		area: "Beach Grove",
		type: "Detached",
		beds: "3 bed · 4 bath",
		size: "2,500+ sq ft",
		photo: "/photos/villa.jpg",
		caption: "Quiet street, mature trees, a short walk to the dike."
	},
	{
		area: "Tsawwassen Central",
		type: "Apartment",
		beds: "2 bed · 2 bath",
		size: "about 1,000 sq ft",
		photo: "/photos/interior.jpg",
		caption: "Lock-and-leave living near shops, without giving up the peninsula."
	},
	{
		area: "Pebble Hill",
		type: "Detached",
		beds: "3 bed · 3 bath",
		size: "about 2,700 sq ft",
		photo: "/photos/bungalow.jpg",
		caption: "Family layout on a real lot, close to schools and the golf course."
	}
];
function Home() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "type-display block text-xl font-medium tracking-tight",
								children: "Allen Schwabe"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted",
								children: "Sutton Seafair · Delta"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm font-medium text-muted md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#place",
									className: "hover:text-ink",
									children: "The place"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#work",
									className: "hover:text-ink",
									children: "How it works"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#homes",
									className: "hover:text-ink",
									children: "Homes"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#talk",
									className: "bg-pine px-4 py-2.5 text-paper hover:bg-pine-deep",
									children: "Talk to Allen"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-11 place-items-center md:hidden",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
						})
					]
				}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-line px-5 py-4 md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 text-base font-medium",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#place",
								onClick: () => setOpen(false),
								children: "The place"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#work",
								onClick: () => setOpen(false),
								children: "How it works"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#homes",
								onClick: () => setOpen(false),
								children: "Homes"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#talk",
								onClick: () => setOpen(false),
								children: "Talk to Allen"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl gap-0 px-5 pt-8 md:grid-cols-12 md:pt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5 md:pr-10 md:pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.18em] text-clay",
									children: "Delta · Tsawwassen · Ladner"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "type-display mt-4 text-[2.6rem] leading-[1.05] font-medium md:text-6xl",
									children: "A realtor who actually lives where you want to buy."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-md text-muted",
									children: "Allen Schwabe has spent his life in South Delta and more than a decade with Sutton Group Seafair Realty. He helps people buy and sell without the hard sell."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#talk",
										className: "inline-flex min-h-11 items-center bg-pine px-5 text-sm font-semibold text-paper hover:bg-pine-deep",
										children: "Get a straight home value"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#homes",
										className: "inline-flex min-h-11 items-center border border-ink px-5 text-sm font-semibold hover:bg-ink hover:text-paper",
										children: "See the kind of homes"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-12 grid grid-cols-3 gap-4 border-t border-line pt-6 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "With Seafair"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "type-display mt-1 text-2xl",
											children: "12 yrs"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "In Delta"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "type-display mt-1 text-2xl",
											children: "Lifelong"
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted",
											children: "Focus"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "type-display mt-1 text-2xl",
											children: "South Delta"
										})] })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-8 md:col-span-7 md:mt-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/hero.jpg",
								alt: "A modern house with a wide front garden, the kind of home common in South Delta",
								className: "aspect-[4/5] w-full object-cover md:aspect-[5/6]"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs tracking-wide text-muted",
								children: "Photography is stock, used to show the finished site. Not a current listing photo."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto mt-16 max-w-6xl px-5 md:mt-24",
						id: "place",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-end gap-8 md:grid-cols-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-display text-4xl leading-tight md:col-span-5 md:text-5xl",
								children: "Three Deltas. They do not behave like one market."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted md:col-span-6 md:col-start-7",
								children: "Tsawwassen prices water and the ferry. Ladner prices the village. North Delta prices schools and commute. Allen works all three, and he will tell you when a street is wrong for what you actually want."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-6 md:grid-cols-3",
							children: areas.map((area) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: area.photo,
									alt: "",
									className: "aspect-[4/3] w-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "type-display mt-4 text-2xl",
									children: area.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium",
									children: area.line
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: area.note
								})
							] }, area.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto mt-20 grid max-w-6xl items-center gap-10 px-5 md:mt-28 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/pnw.jpg",
							alt: "A forest path in coastal British Columbia light",
							className: "aspect-[4/5] w-full object-cover md:col-span-5"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-6 md:col-start-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.18em] text-clay",
									children: "About Allen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "type-display mt-4 text-3xl leading-snug md:text-4xl",
									children: "“I look forward to making my home, your home.”"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-muted",
									children: "That line is from his own site, and it is the useful part. He grew up here. He has been a licensed REALTOR® at Sutton Group Seafair Realty since 2014, working out of the Tsawwassen office on 56th Street."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted",
									children: "Outside real estate he has spent decades as an entrepreneur in the Lower Mainland, including board work with public mining companies. Clients get someone who has negotiated deals for a long time, not a script."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-6 text-sm",
									children: [
										"Office · 1625 56th Street, Delta",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Phone · 604-644-5664",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Email · aschwabe@sutton.com"
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mt-20 bg-pine text-paper md:mt-28",
						id: "work",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-display text-4xl",
								children: "If you are buying"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-6",
								children: [
									["Listen first", "Budget, commute, schools, and what you will not compromise on. Then the search gets smaller."],
									["Walk the right streets", "Private viewings in Tsawwassen, Ladner, and North Delta — not a tour of everything listed this week."],
									["Negotiate the conditions", "Offer, inspection, financing, subject removal. Allen stays in it until keys change hands."]
								].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[2.5rem_1fr] gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "type-display text-2xl text-paper/60",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-paper/80",
										children: body
									})] })]
								}, title))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "type-display text-4xl",
								children: "If you are selling"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
								className: "mt-8 space-y-6",
								children: [
									["Price it like a local", "Comparables from the actual pocket of Delta, not a city-wide average that flatters nobody."],
									["Present it properly", "Photos, copy, and timing. A listing should look like the house, not a template."],
									["Hold the number", "Offers get answered with a plan. The goal is a clean sale at a price you can defend."]
								].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "grid grid-cols-[2.5rem_1fr] gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "type-display text-2xl text-paper/60",
										children: ["0", i + 1]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-paper/80",
										children: body
									})] })]
								}, title))
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto mt-20 max-w-6xl px-5 md:mt-28",
						id: "homes",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-between gap-4 md:flex-row md:items-end",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "type-display max-w-xl text-4xl leading-tight md:text-5xl",
									children: "What a finished listing can look like."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "max-w-sm text-sm text-muted",
									children: "These are example cards for the prototype. Photos are stock. Neighbourhoods match the work Allen already does."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 divide-y divide-line border-y border-line",
								children: homes.map((home) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "grid gap-5 py-8 md:grid-cols-12 md:items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: home.photo,
										alt: "",
										className: "aspect-[16/10] w-full object-cover md:col-span-5"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "md:col-span-6 md:col-start-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-semibold uppercase tracking-[0.16em] text-clay",
												children: home.type
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "type-display mt-2 text-3xl",
												children: home.area
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-muted",
												children: home.caption
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-4 text-sm font-medium",
												children: [
													home.beds,
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "mx-2 text-line",
														children: "/"
													}),
													home.size
												]
											})
										]
									})]
								}, home.area))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/living.jpg",
								alt: "A bright living room with large windows",
								className: "mt-8 aspect-[16/7] w-full object-cover"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "mx-auto mt-20 max-w-6xl px-5 pb-20 md:mt-28",
						id: "talk",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid overflow-hidden bg-paper-deep md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/photos/modern.jpg",
								alt: "A light-filled modern home interior",
								className: "aspect-[4/3] h-full w-full object-cover md:aspect-auto"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 md:p-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "type-display text-4xl",
										children: "Tell him what you are doing."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted",
										children: "Buying, selling, or you just want a number you can trust. He replies from the Sutton office."
									}),
									sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-8 text-lg",
										children: "Message noted. In the live site this would go straight to Allen. For this preview, nothing was sent."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										className: "mt-8 space-y-4",
										onSubmit: (e) => {
											e.preventDefault();
											setSent(true);
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid gap-4 sm:grid-cols-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "block text-sm",
													children: ["Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														required: true,
														name: "name",
														className: "mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "block text-sm",
													children: ["Phone", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														name: "phone",
														className: "mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block text-sm",
												children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													required: true,
													type: "email",
													name: "email",
													className: "mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block text-sm",
												children: ["I am", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													name: "intent",
													className: "mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Thinking about selling" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Looking to buy" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Both" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Just want a home value" })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "block text-sm",
												children: ["A bit of context", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
													name: "note",
													rows: 4,
													className: "mt-1 w-full border border-line bg-paper px-3 py-3 outline-none focus:border-pine"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												className: "min-h-11 w-full bg-clay px-5 text-sm font-semibold text-paper hover:bg-ink sm:w-auto",
												children: "Send to Allen"
											})
										]
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-ink",
						children: "Allen Schwabe, REALTOR®"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sutton Group Seafair Realty · Delta, BC" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md",
						children: "Listing data on a live site would come from MLS® reciprocity (Greater Vancouver REALTORS® / Fraser Valley Real Estate Board). This preview uses stock photography and example copy only."
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
