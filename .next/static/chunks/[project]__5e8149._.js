(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]__5e8149._.js", {

"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "focusWithoutScrolling": ()=>$7215afc6de606d6b$export$de79e2c695e052f3
});
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}
;
 //# sourceMappingURL=focusWithoutScrolling.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "isAndroid": ()=>$c87311424ea30a05$export$a11b0059900ceec8,
    "isAppleDevice": ()=>$c87311424ea30a05$export$e1865c3bedcd822b,
    "isChrome": ()=>$c87311424ea30a05$export$6446a186d09e379e,
    "isFirefox": ()=>$c87311424ea30a05$export$b7d78993b74f766d,
    "isIOS": ()=>$c87311424ea30a05$export$fedb369cb70207f1,
    "isIPad": ()=>$c87311424ea30a05$export$7bef049ce92e4224,
    "isIPhone": ()=>$c87311424ea30a05$export$186c6964ca17d99,
    "isMac": ()=>$c87311424ea30a05$export$9ac100e40613ea10,
    "isWebKit": ()=>$c87311424ea30a05$export$78551043582a6a98
});
function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}
;
 //# sourceMappingURL=platform.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/openLink.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RouterProvider": ()=>$ea8dcbcb9ea1b556$export$323e4fc2fa4753fb,
    "getSyntheticLinkProps": ()=>$ea8dcbcb9ea1b556$export$51437d503373d223,
    "openLink": ()=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7,
    "shouldClientNavigate": ()=>$ea8dcbcb9ea1b556$export$efa8c9099e530235,
    "useLinkProps": ()=>$ea8dcbcb9ea1b556$export$7e924b3091a3bd18,
    "useRouter": ()=>$ea8dcbcb9ea1b556$export$9a302a45f65d0572
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $ea8dcbcb9ea1b556$var$RouterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isNative: true,
    open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
    useHref: (href)=>href
});
function $ea8dcbcb9ea1b556$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate, useHref: useHref } = props;
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>{
                    if ($ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers)) navigate(href, routerOptions);
                    else $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($ea8dcbcb9ea1b556$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $ea8dcbcb9ea1b556$export$9a302a45f65d0572() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($ea8dcbcb9ea1b556$var$RouterContext);
}
function $ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"])() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIPad"])() && true ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
    $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}
function $ea8dcbcb9ea1b556$export$51437d503373d223(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $ea8dcbcb9ea1b556$export$7e924b3091a3bd18(props) {
    let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
    return {
        href: (props === null || props === void 0 ? void 0 : props.href) ? router.useHref(props === null || props === void 0 ? void 0 : props.href) : undefined,
        target: props === null || props === void 0 ? void 0 : props.target,
        rel: props === null || props === void 0 ? void 0 : props.rel,
        download: props === null || props === void 0 ? void 0 : props.download,
        ping: props === null || props === void 0 ? void 0 : props.ping,
        referrerPolicy: props === null || props === void 0 ? void 0 : props.referrerPolicy
    };
}
;
 //# sourceMappingURL=openLink.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ __turbopack_esm__({
    "chain": ()=>$ff5963eb1fccf552$export$e08e3b67e392101e
});
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}
;
 //# sourceMappingURL=chain.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useLayoutEffect": ()=>$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).useLayoutEffect : ()=>{};
;
 //# sourceMappingURL=useLayoutEffect.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEffectEvent": ()=>$8ae05eaa5c114e9c$export$7f54fc3180508a52
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}
;
 //# sourceMappingURL=useEffectEvent.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useValueEffect": ()=>$1dbecbe27a04f9af$export$14d238f342723f25
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    let effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}
;
 //# sourceMappingURL=useValueEffect.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mergeIds": ()=>$bdb11010cef70236$export$cd8c9cb68f842629,
    "useId": ()=>$bdb11010cef70236$export$f680877a34711e37,
    "useSlotId": ()=>$bdb11010cef70236$export$b4cc09c592e8fdb8
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultId);
    let nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSRSafeId"])(value);
    let updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        nextId.current = val;
    }, []);
    if ($bdb11010cef70236$var$canUseDOM) $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueEffect"])(id);
    let updateId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}
;
 //# sourceMappingURL=useId.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mergeProps": ()=>$3ef42575df84b30b$export$9d1611c77c2fe928
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIds"])(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}
;
 //# sourceMappingURL=mergeProps.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useObjectRef.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useObjectRef": ()=>$df56164dff5785e2$export$4338b53315abf666
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === 'function') forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}
;
 //# sourceMappingURL=useObjectRef.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useSyncRef.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useSyncRef": ()=>$e7801be82b4b2a53$export$4debdb1a3f0fa79e
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}
;
 //# sourceMappingURL=useSyncRef.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getOwnerDocument": ()=>$431fbd86ca7dc216$export$b204af158042fbac,
    "getOwnerWindow": ()=>$431fbd86ca7dc216$export$f21a1ffae260145a
});
const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
;
 //# sourceMappingURL=domHelpers.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/runAfterTransition.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
__turbopack_esm__({
    "runAfterTransition": ()=>$bbed8b41f857bcc0$export$24490316f764c430
});
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}
;
 //# sourceMappingURL=runAfterTransition.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isVirtualClick": ()=>$6a7db85432448f7f$export$60278871457622de,
    "isVirtualPointerEvent": ()=>$6a7db85432448f7f$export$29bf1b5f2c56cf63
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}
;
 //# sourceMappingURL=isVirtualEvent.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useResizeObserver.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useResizeObserver": ()=>$9daab02d461809db$export$683480f191c0e3ea
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref, onResize: onResize } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}
;
 //# sourceMappingURL=useResizeObserver.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "filterDOMProps": ()=>$65484d02dcb7eb3e$export$457c3d6518dd4c6f
});
const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}
;
 //# sourceMappingURL=filterDOMProps.module.js.map

})()),
"[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useGlobalListeners": ()=>$03deb23ff14920c4$export$4eaf04e54aa8eed6
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    let addGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}
;
 //# sourceMappingURL=useGlobalListeners.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/filterDOMProps.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "filterDOMProps": ()=>$65484d02dcb7eb3e$export$457c3d6518dd4c6f
});
const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    'id'
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    'aria-label',
    'aria-labelledby',
    'aria-describedby',
    'aria-details'
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    'href',
    'hrefLang',
    'target',
    'rel',
    'download',
    'ping',
    'referrerPolicy'
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}
;
 //# sourceMappingURL=filterDOMProps.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ __turbopack_esm__({
    "chain": ()=>$ff5963eb1fccf552$export$e08e3b67e392101e
});
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}
;
 //# sourceMappingURL=chain.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useLayoutEffect": ()=>$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).useLayoutEffect : ()=>{};
;
 //# sourceMappingURL=useLayoutEffect.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEffectEvent": ()=>$8ae05eaa5c114e9c$export$7f54fc3180508a52
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}
;
 //# sourceMappingURL=useEffectEvent.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useValueEffect": ()=>$1dbecbe27a04f9af$export$14d238f342723f25
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    let effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}
;
 //# sourceMappingURL=useValueEffect.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mergeIds": ()=>$bdb11010cef70236$export$cd8c9cb68f842629,
    "useId": ()=>$bdb11010cef70236$export$f680877a34711e37,
    "useSlotId": ()=>$bdb11010cef70236$export$b4cc09c592e8fdb8
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultId);
    let nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSRSafeId"])(value);
    let updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        nextId.current = val;
    }, []);
    if ($bdb11010cef70236$var$canUseDOM) $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueEffect"])(id);
    let updateId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}
;
 //# sourceMappingURL=useId.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mergeProps": ()=>$3ef42575df84b30b$export$9d1611c77c2fe928
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIds"])(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}
;
 //# sourceMappingURL=mergeProps.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/domHelpers.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getOwnerDocument": ()=>$431fbd86ca7dc216$export$b204af158042fbac,
    "getOwnerWindow": ()=>$431fbd86ca7dc216$export$f21a1ffae260145a
});
const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
;
 //# sourceMappingURL=domHelpers.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/runAfterTransition.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
__turbopack_esm__({
    "runAfterTransition": ()=>$bbed8b41f857bcc0$export$24490316f764c430
});
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === 'undefined') return;
    function isTransitionEvent(event) {
        return 'propertyName' in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener('transitioncancel', onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener('transitioncancel', onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener('transitionrun', onTransitionStart);
    document.body.addEventListener('transitionend', onTransitionEnd);
}
if (typeof document !== 'undefined') {
    if (document.readyState !== 'loading') $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener('DOMContentLoaded', $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}
;
 //# sourceMappingURL=runAfterTransition.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "focusWithoutScrolling": ()=>$7215afc6de606d6b$export$de79e2c695e052f3
});
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement('div');
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}
;
 //# sourceMappingURL=focusWithoutScrolling.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "isAndroid": ()=>$c87311424ea30a05$export$a11b0059900ceec8,
    "isAppleDevice": ()=>$c87311424ea30a05$export$e1865c3bedcd822b,
    "isChrome": ()=>$c87311424ea30a05$export$6446a186d09e379e,
    "isFirefox": ()=>$c87311424ea30a05$export$b7d78993b74f766d,
    "isIOS": ()=>$c87311424ea30a05$export$fedb369cb70207f1,
    "isIPad": ()=>$c87311424ea30a05$export$7bef049ce92e4224,
    "isIPhone": ()=>$c87311424ea30a05$export$186c6964ca17d99,
    "isMac": ()=>$c87311424ea30a05$export$9ac100e40613ea10,
    "isWebKit": ()=>$c87311424ea30a05$export$78551043582a6a98
});
function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}
;
 //# sourceMappingURL=platform.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/isVirtualEvent.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isVirtualClick": ()=>$6a7db85432448f7f$export$60278871457622de,
    "isVirtualPointerEvent": ()=>$6a7db85432448f7f$export$29bf1b5f2c56cf63
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"])() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse';
}
;
 //# sourceMappingURL=isVirtualEvent.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useSyncRef.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useSyncRef": ()=>$e7801be82b4b2a53$export$4debdb1a3f0fa79e
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}
;
 //# sourceMappingURL=useSyncRef.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useObjectRef.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useObjectRef": ()=>$df56164dff5785e2$export$4338b53315abf666
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === 'function') forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}
;
 //# sourceMappingURL=useObjectRef.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useGlobalListeners.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useGlobalListeners": ()=>$03deb23ff14920c4$export$4eaf04e54aa8eed6
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    let addGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}
;
 //# sourceMappingURL=useGlobalListeners.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/openLink.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RouterProvider": ()=>$ea8dcbcb9ea1b556$export$323e4fc2fa4753fb,
    "getSyntheticLinkProps": ()=>$ea8dcbcb9ea1b556$export$51437d503373d223,
    "openLink": ()=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7,
    "shouldClientNavigate": ()=>$ea8dcbcb9ea1b556$export$efa8c9099e530235,
    "useLinkProps": ()=>$ea8dcbcb9ea1b556$export$7e924b3091a3bd18,
    "useRouter": ()=>$ea8dcbcb9ea1b556$export$9a302a45f65d0572
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/platform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $ea8dcbcb9ea1b556$var$RouterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    isNative: true,
    open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
    useHref: (href)=>href
});
function $ea8dcbcb9ea1b556$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate, useHref: useHref } = props;
    let ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isNative: false,
            open: (target, modifiers, href, routerOptions)=>{
                $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>{
                    if ($ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers)) navigate(href, routerOptions);
                    else $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers);
                });
            },
            useHref: useHref || ((href)=>href)
        }), [
        navigate,
        useHref
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).createElement($ea8dcbcb9ea1b556$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $ea8dcbcb9ea1b556$export$9a302a45f65d0572() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])($ea8dcbcb9ea1b556$var$RouterContext);
}
function $ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute('target');
    return (!target || target === '_self') && link.origin === location.origin && !link.hasAttribute('download') && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"])() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith('key')) && target.target === '_blank') {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebKit"])() && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMac"])() && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$platform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIPad"])() && true ? new KeyboardEvent('keydown', {
        keyIdentifier: 'Enter',
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent('click', {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$focusWithoutScrolling$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusWithoutScrolling"])(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute('data-href')) {
        let link = document.createElement('a');
        link.href = target.getAttribute('data-href');
        if (target.hasAttribute('data-target')) link.target = target.getAttribute('data-target');
        if (target.hasAttribute('data-rel')) link.rel = target.getAttribute('data-rel');
        if (target.hasAttribute('data-download')) link.download = target.getAttribute('data-download');
        if (target.hasAttribute('data-ping')) link.ping = target.getAttribute('data-ping');
        if (target.hasAttribute('data-referrer-policy')) link.referrerPolicy = target.getAttribute('data-referrer-policy');
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
    $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}
function $ea8dcbcb9ea1b556$export$51437d503373d223(props) {
    return {
        'data-href': props.href,
        'data-target': props.target,
        'data-rel': props.rel,
        'data-download': props.download,
        'data-ping': props.ping,
        'data-referrer-policy': props.referrerPolicy
    };
}
function $ea8dcbcb9ea1b556$export$7e924b3091a3bd18(props) {
    let router = $ea8dcbcb9ea1b556$export$9a302a45f65d0572();
    return {
        href: (props === null || props === void 0 ? void 0 : props.href) ? router.useHref(props === null || props === void 0 ? void 0 : props.href) : undefined,
        target: props === null || props === void 0 ? void 0 : props.target,
        rel: props === null || props === void 0 ? void 0 : props.rel,
        download: props === null || props === void 0 ? void 0 : props.download,
        ping: props === null || props === void 0 ? void 0 : props.ping,
        referrerPolicy: props === null || props === void 0 ? void 0 : props.referrerPolicy
    };
}
;
 //# sourceMappingURL=openLink.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useDescription.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useDescription": ()=>$ef06256079686ba0$export$f8aeda7b10753fa1
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement('div');
            node.id = id;
            node.style.display = 'none';
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        'aria-describedby': description ? id : undefined
    };
}
;
 //# sourceMappingURL=useDescription.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useResizeObserver.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useResizeObserver": ()=>$9daab02d461809db$export$683480f191c0e3ea
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== 'undefined';
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref, onResize: onResize } = options;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener('resize', onResize, false);
            return ()=>{
                window.removeEventListener('resize', onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}
;
 //# sourceMappingURL=useResizeObserver.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/mergeRefs.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "mergeRefs": ()=>$5dc95899b306f630$export$c9058316764c140e
});
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === 'function') ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}
;
 //# sourceMappingURL=mergeRefs.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useLabels.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useLabels": ()=>$313b98861ee5dd6c$export$d6875122194c7b44
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, 'aria-label': label, 'aria-labelledby': labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(' ');
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(' ');
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        'aria-label': label,
        'aria-labelledby': labelledBy
    };
}
;
 //# sourceMappingURL=useLabels.module.js.map

})()),
"[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ __turbopack_esm__({
    "chain": ()=>$ff5963eb1fccf552$export$e08e3b67e392101e
});
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === 'function') callback(...args);
    };
}
;
 //# sourceMappingURL=chain.module.js.map

})()),
"[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useLayoutEffect": ()=>$f0a04ccd8dbdd83b$export$e5c5a5f917a5871c
});
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).useLayoutEffect : ()=>{};
;
 //# sourceMappingURL=useLayoutEffect.module.js.map

})()),
"[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEffectEvent": ()=>$8ae05eaa5c114e9c$export$7f54fc3180508a52
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}
;
 //# sourceMappingURL=useEffectEvent.module.js.map

})()),
"[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useValueEffect": ()=>$1dbecbe27a04f9af$export$14d238f342723f25
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    let effect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}
;
 //# sourceMappingURL=useValueEffect.module.js.map

})()),
"[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mergeIds": ()=>$bdb11010cef70236$export$cd8c9cb68f842629,
    "useId": ()=>$bdb11010cef70236$export$f680877a34711e37,
    "useSlotId": ()=>$bdb11010cef70236$export$b4cc09c592e8fdb8
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useLayoutEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useValueEffect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultId);
    let nextId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let res = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSRSafeId"])(value);
    let updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((val)=>{
        nextId.current = val;
    }, []);
    if ($bdb11010cef70236$var$canUseDOM) $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useValueEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useValueEffect"])(id);
    let updateId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useLayoutEffect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}
;
 //# sourceMappingURL=useId.module.js.map

})()),
"[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/mergeProps.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mergeProps": ()=>$3ef42575df84b30b$export$9d1611c77c2fe928
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/chain.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/@react-aria/utils/dist/useId.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/visually-hidden/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === 'function' && typeof b === 'function' && // This is a lot faster than a regex.
            key[0] === 'o' && key[1] === 'n' && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$chain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chain"])(a, b);
            else if ((key === 'className' || key === 'UNSAFE_className') && typeof a === 'string' && typeof b === 'string') result[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(a, b);
            else if (key === 'id' && a && b) result.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$visually$2d$hidden$2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useId$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeIds"])(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}
;
 //# sourceMappingURL=mergeProps.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/useEvent.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useEvent": ()=>$e9faafb641e167db$export$90fc3a17d93f704c
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/useEffectEvent.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/OneDrive/Bureau/Programing and other/Web_Dev/project started by me/React/Lolaivy's House/Lolaivy's House (Next.js)/lolaivys-house/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$useEffectEvent$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffectEvent"])(handler);
    let isDisabled = handler == null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Bureau$2f$Programing__and__other$2f$Web_Dev$2f$project__started__by__me$2f$React$2f$Lolaivy$27$s__House$2f$Lolaivy$27$s__House__$28$Next$2e$js$292f$lolaivys$2d$house$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}
;
 //# sourceMappingURL=useEvent.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/isScrollable.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ __turbopack_esm__({
    "isScrollable": ()=>$cc38e7bd3fc7b213$export$2bb74740c4e19def
});
function $cc38e7bd3fc7b213$export$2bb74740c4e19def(node, checkForOverflow) {
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}
;
 //# sourceMappingURL=isScrollable.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/getScrollParents.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getScrollParents": ()=>$a40c673dc9f6d9c7$export$94ed1c92c7beeb22
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/isScrollable.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $a40c673dc9f6d9c7$export$94ed1c92c7beeb22(node, checkForOverflow) {
    const scrollParents = [];
    while(node && node !== document.documentElement){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$isScrollable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScrollable"])(node, checkForOverflow)) scrollParents.push(node);
        node = node.parentElement;
    }
    return scrollParents;
}
;
 //# sourceMappingURL=getScrollParents.module.js.map

})()),
"[project]/node_modules/@react-aria/utils/dist/scrollIntoView.mjs [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "scrollIntoView": ()=>$2f04cbc44ee30ce0$export$53a0910f038337bd,
    "scrollIntoViewport": ()=>$2f04cbc44ee30ce0$export$c826860796309d1b
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$getScrollParents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@react-aria/utils/dist/getScrollParents.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'left');
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, 'top');
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth } = getComputedStyle(scrollView);
    let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop';
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === 'hidden';
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: 'nearest'
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: 'center',
                    inline: 'center'
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: 'nearest'
                });
            }
        } else {
            let scrollParents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$aria$2f$utils$2f$dist$2f$getScrollParents$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getScrollParents"])(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            for (let scrollParent of scrollParents)$2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
        }
    }
}
;
 //# sourceMappingURL=scrollIntoView.module.js.map

})()),
}]);

//# sourceMappingURL=%5Bproject%5D__5e8149._.js.map