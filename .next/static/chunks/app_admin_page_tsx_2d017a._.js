(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_admin_page_tsx_2d017a._.js", {

"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/app/admin/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-firebase-hooks/auth/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/app/firebase/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$components$2f$StatisticCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/components/StatisticCard.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [user] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$app$2f$firebase$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
    const userSession = sessionStorage.getItem("user");
    // if (!user && !userSession) {
    //   router.push("/connecter");
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-8 flex-wrap justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House$2f$components$2f$StatisticCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/app/admin/page.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/app/admin/page.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/app/admin/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(Home, "hP/7NvzUIXfxIpRVjMlmHSnysKo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$firebase$2d$hooks$2f$auth$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthState"]
    ];
});
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House/app/admin/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=app_admin_page_tsx_2d017a._.js.map