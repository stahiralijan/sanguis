import {mergeProps, unref, withCtx, createVNode, useSSRContext} from "vue";
import {ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot} from "vue/server-renderer";
import {A as ApplicationLogo} from "./ApplicationLogo.dfdeb5b4.mjs";
import {Link} from "@inertiajs/inertia-vue3";

const _sfc_main$1 = {
    __name: "GuestLayout",
    __ssrInlineRender: true,
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(`<div${ssrRenderAttrs(mergeProps({class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"}, _attrs))}><div>`);
            _push(ssrRenderComponent(unref(Link), {href: "/"}, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                        _push2(ssrRenderComponent(ApplicationLogo, {class: "w-20 h-20 fill-current text-gray-500"}, null, _parent2, _scopeId));
                    } else {
                        return [
                            createVNode(ApplicationLogo, {class: "w-20 h-20 fill-current text-gray-500"})
                        ];
                    }
                }),
                _: 1
            }, _parent));
            _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
            _push(`</div></div>`);
        };
    }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
    return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
    __name: "PrimaryButton",
    __ssrInlineRender: true,
    props: {
        type: {
            type: String,
            default: "submit"
        }
    },
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(`<button${ssrRenderAttrs(mergeProps({
                type: __props.type,
                class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"
            }, _attrs))}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
            _push(`</button>`);
        };
    }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
    _sfc_main$1 as _,
    _sfc_main as a
};
