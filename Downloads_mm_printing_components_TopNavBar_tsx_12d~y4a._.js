(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Downloads/mm_printing/components/TopNavBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TopNavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mm_printing/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mm_printing/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mm_printing/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/mm_printing/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TopNavBar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isHome = pathname === '/' || pathname === '';
    const isContact = pathname === '/contact';
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [indicatorStyle, setIndicatorStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        x: 0
    });
    const linkRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TopNavBar.useEffect": ()=>{
            const path = pathname || '/';
            let nextIndex = 0;
            if (path.startsWith('/about')) nextIndex = 1;
            else if (path.startsWith('/services')) nextIndex = 2;
            else if (path.startsWith('/gallery')) nextIndex = 3;
            else if (path.startsWith('/testimonials')) nextIndex = 4;
            else if (path.startsWith('/contact')) nextIndex = 5;
            else nextIndex = 0;
            setActiveIndex({
                "TopNavBar.useEffect": (prev)=>prev === nextIndex ? prev : nextIndex
            }["TopNavBar.useEffect"]);
        }
    }["TopNavBar.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TopNavBar.useLayoutEffect": ()=>{
            const activeLink = linkRefs.current[activeIndex];
            if (!activeLink) return;
            const updateIndicator = {
                "TopNavBar.useLayoutEffect.updateIndicator": ()=>{
                    setIndicatorStyle({
                        width: activeLink.offsetWidth,
                        x: activeLink.offsetLeft
                    });
                }
            }["TopNavBar.useLayoutEffect.updateIndicator"];
            updateIndicator();
            window.addEventListener('resize', updateIndicator);
            return ({
                "TopNavBar.useLayoutEffect": ()=>{
                    window.removeEventListener('resize', updateIndicator);
                }
            })["TopNavBar.useLayoutEffect"];
        }
    }["TopNavBar.useLayoutEffect"], [
        activeIndex
    ]);
    const navItems = [
        {
            label: 'Home',
            href: '/',
            isRouteLink: true
        },
        {
            label: 'About',
            href: '/about',
            isRouteLink: true
        },
        {
            label: 'Services',
            href: '/services',
            isRouteLink: true
        },
        {
            label: 'Gallery',
            href: '/gallery',
            isRouteLink: true
        },
        {
            label: 'Testimonials',
            href: '/testimonials',
            isRouteLink: true
        },
        {
            label: 'Contact',
            href: '/contact',
            isRouteLink: true
        }
    ];
    const navLinkClass = (active)=>`relative z-10 px-1 pb-2 tracking-tight font-medium transition duration-300 ${active ? 'text-transparent bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] bg-clip-text' : 'text-[#e1bfb2] hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff2d55] hover:via-[#ff7eb9] hover:to-[#f24874] hover:bg-clip-text'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 w-full z-50 bg-[#121416]/80 backdrop-blur-xl border-b-[0.5px] border-[#594138] shadow-[0_0_15px_rgba(242,100,25,0.2)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "flex justify-between items-center h-20 px-16 max-w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center hover:scale-105 transition-transform duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/mm-logo.png",
                            alt: "MM Printing Logo",
                            className: "h-28 w-auto object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-6 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#ff2d55] via-[#ff7eb9] to-[#f24874] shadow-[0_0_15px_rgba(242,100,25,0.35)] transition-[transform,width] duration-500 ease-out",
                            style: {
                                width: indicatorStyle.width,
                                transform: `translateX(${indicatorStyle.x}px)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        navItems.map((item, index)=>{
                            const active = index === activeIndex;
                            const sharedProps = {
                                ref: (node)=>{
                                    linkRefs.current[index] = node;
                                },
                                className: navLinkClass(active),
                                style: {
                                    fontSize: '24px',
                                    fontWeight: index === 0 ? 600 : 500,
                                    lineHeight: '1.4'
                                },
                                onClick: ()=>setActiveIndex(index),
                                'aria-current': active ? 'page' : undefined
                            };
                            if (item.isRouteLink) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    ...sharedProps,
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this);
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                ...sharedProps,
                                children: item.label
                            }, item.label, false, {
                                fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/contact",
                    className: "bg-[#f26419] text-[#4e1900] px-6 py-3 rounded-none hover:shadow-[0_0_20px_rgba(242,100,25,0.4)] active:scale-95 transition-all duration-300",
                    style: {
                        fontSize: '12px',
                        fontWeight: 700,
                        lineHeight: '1',
                        letterSpacing: '0.1em'
                    },
                    children: "Initialize Project"
                }, void 0, false, {
                    fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/mm_printing/components/TopNavBar.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(TopNavBar, "F7a24Eu/1GoR6U9X5GOt0iplLCM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$mm_printing$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TopNavBar;
var _c;
__turbopack_context__.k.register(_c, "TopNavBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Downloads_mm_printing_components_TopNavBar_tsx_12d~y4a._.js.map