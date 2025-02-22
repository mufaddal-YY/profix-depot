(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_cdb826._.js", {

"[project]/sanity/env.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-19';
const dataset = ("TURBOPACK compile-time value", "production");
const projectId = ("TURBOPACK compile-time value", "w6thp893");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/about.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "about",
    title: "About",
    type: "document",
    fields: [
        {
            name: "metatitle",
            title: "Meta Title",
            type: "string"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "string"
        },
        {
            name: "metaKeywords",
            title: "Meta Keywords",
            type: "string"
        },
        {
            name: "headline",
            title: "Headline",
            type: "string"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "sectionImage",
            title: "Section Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "whyUsSectionImage",
            title: "Why Us Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "whyUsSectionDescription",
            title: "Why Us Description",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "differenceImage",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "differenceDescription",
            title: "Difference Description",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/gallery.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "gallery",
    title: "Gallery",
    type: "document",
    fields: [
        {
            name: "metatitle",
            title: "Meta Title",
            type: "string"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "string"
        },
        {
            name: "metaKeywords",
            title: "Meta Keywords",
            type: "string"
        },
        {
            name: "headline",
            title: "Headline",
            type: "string"
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "imageTitle",
                            title: "Image Title",
                            type: "string"
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/home.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "home",
    title: "Home",
    type: "document",
    fields: [
        {
            name: "metatitle",
            title: "Meta Title",
            type: "string"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "string"
        },
        {
            name: "metaKeywords",
            title: "Meta Keywords",
            type: "string"
        },
        {
            name: "headline",
            title: "Headline",
            type: "string"
        },
        {
            name: "subHeadline",
            title: "Sub Headline",
            type: "string"
        },
        {
            name: "heroSlider",
            title: "Hero Slider",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "alt",
                            title: "Alt text",
                            type: "string"
                        },
                        {
                            name: "sliderImage",
                            title: "Slider Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: "flooringservice",
            title: "Flooring",
            type: "string"
        },
        {
            name: "flooringDescription",
            title: "Flooring Description",
            type: "string"
        },
        {
            name: "flooringImage",
            title: "Flooring Image",
            type: "image",
            options: {
                hotspot: false
            }
        },
        {
            name: "vanities",
            title: "Vanities",
            type: "string"
        },
        {
            name: "vanitiesDescription",
            title: "Vanities Description",
            type: "string"
        },
        {
            name: "vanitiesImage",
            title: "Vanities Images",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "alt",
                            title: "Alt text",
                            type: "string"
                        },
                        {
                            name: "sliderImage",
                            title: "Slider Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        },
        {
            name: "bathroom",
            title: "Bathroom",
            type: "string"
        },
        {
            name: "bathroomDescription",
            title: "Bathroom Description",
            type: "string"
        },
        {
            name: "bathroomImage",
            title: "Bathroom Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "kitchen",
            title: "Kitchen",
            type: "string"
        },
        {
            name: "kitchenDescription",
            title: "Kitchen Description",
            type: "string"
        },
        {
            name: "kitchenImage",
            title: "Kitchen Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "whoWeAre",
            title: "Who we are?",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "whyChooseUs",
            title: "Why Choose us",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string"
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        }
                    ]
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/returnPolicy.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "returnpolicy",
    title: "Return Policy",
    type: "document",
    fields: [
        {
            name: "metatitle",
            title: "Meta Title",
            type: "string"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "string"
        },
        {
            name: "metaKeywords",
            title: "Meta Keywords",
            type: "string"
        },
        {
            name: "headline",
            title: "Headline",
            type: "string"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/products.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "products",
    title: "Products",
    type: "document",
    fields: [
        {
            name: "metatitle",
            title: "Meta Title",
            type: "string"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "string"
        },
        {
            name: "metaKeywords",
            title: "Meta Keywords",
            type: "string"
        },
        {
            name: "headline",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "headline",
                maxLength: 96
            }
        },
        {
            name: "subHeadline",
            title: "Description",
            type: "string"
        },
        {
            name: "content",
            title: "Content",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "categoryTitle",
                            title: "Category Title",
                            type: "string"
                        },
                        {
                            name: "categorySlug",
                            title: "Slug",
                            type: "slug",
                            options: {
                                source: (doc, { parent })=>parent?.categoryTitle || "",
                                maxLength: 96
                            }
                        },
                        {
                            name: "categoryDescription",
                            title: "Category Description",
                            type: "string"
                        },
                        {
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: {
                                hotspot: true
                            }
                        },
                        {
                            name: "content",
                            title: "Content",
                            type: "array",
                            of: [
                                {
                                    type: "block"
                                }
                            ]
                        },
                        {
                            name: "images",
                            title: "Images",
                            type: "array",
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        {
                                            name: "imageTitle",
                                            title: "Image Title",
                                            type: "string"
                                        },
                                        {
                                            name: "image",
                                            title: "Image",
                                            type: "image",
                                            options: {
                                                hotspot: true
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/contactDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "contact",
    title: "Contact Details",
    type: "document",
    fields: [
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "contact",
            title: "Contact Number",
            type: "string"
        },
        {
            name: "whatsapp",
            title: "Whatsapp Number",
            type: "string"
        },
        {
            name: "address",
            title: "Address",
            type: "string"
        },
        {
            name: "instagram",
            title: "Instagram",
            type: "string"
        },
        {
            name: "facebook",
            title: "Facebook",
            type: "string"
        },
        {
            name: "youtube",
            title: "Youtube",
            type: "string"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/testimonials.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "customerName",
            title: "Customer Name",
            type: "string"
        },
        {
            name: "review",
            title: "Testimonial",
            type: "array",
            of: [
                {
                    type: "block"
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "schema": (()=>schema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$about$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/about.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$gallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/gallery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/home.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$returnPolicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/returnPolicy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/products.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$contactDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/contactDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/testimonials.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$products$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$gallery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$about$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$contactDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$testimonials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$returnPolicy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/structure.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// https://www.sanity.io/docs/structure-builder-cheat-sheet
__turbopack_esm__({
    "structure": (()=>structure)
});
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity.config.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/env.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/structure.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/admin/[[...tool]]/page.jsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/admin',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/(studio)/admin/[[...tool]]/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_cdb826._.js.map