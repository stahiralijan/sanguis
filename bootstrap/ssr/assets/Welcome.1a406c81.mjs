import {unref, withCtx, createTextVNode, useSSRContext} from "vue";
import {ssrRenderComponent} from "vue/server-renderer";
import {Head, Link} from "@inertiajs/inertia-vue3";
import {A as ApplicationLogo} from "./ApplicationLogo.dfdeb5b4.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";

const _sfc_main = {
    __name: "Welcome",
    __ssrInlineRender: true,
    props: {
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String
    },
    setup(__props) {
        return (_ctx, _push, _parent, _attrs) => {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(unref(Head), {title: "Welcome"}, null, _parent));
            _push(`<div class="relative flex items-top justify-content-between min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">`);
            if (__props.canLogin) {
                _push(`<div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">`);
                if (_ctx.$page.props.auth.user) {
                    _push(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("home"),
                        class: "text-sm text-gray-700 dark:text-gray-500 underline"
                    }, {
                        default: withCtx((_, _push2, _parent2, _scopeId) => {
                            if (_push2) {
                                _push2(`Dashboard`);
                            } else {
                                return [
                                    createTextVNode("Dashboard")
                                ];
                            }
                        }),
                        _: 1
                    }, _parent));
                } else {
                    _push(`<!--[-->`);
                    _push(ssrRenderComponent(unref(Link), {
                        href: _ctx.route("login"),
                        class: "text-sm text-gray-700 dark:text-gray-500 underline"
                    }, {
                        default: withCtx((_, _push2, _parent2, _scopeId) => {
                            if (_push2) {
                                _push2(`Log in`);
                            } else {
                                return [
                                    createTextVNode("Log in")
                                ];
                            }
                        }),
                        _: 1
                    }, _parent));
                    if (__props.canRegister) {
                        _push(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("register"),
                            class: "ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                        }, {
                            default: withCtx((_, _push2, _parent2, _scopeId) => {
                                if (_push2) {
                                    _push2(`Register`);
                                } else {
                                    return [
                                        createTextVNode("Register")
                                    ];
                                }
                            }),
                            _: 1
                        }, _parent));
                    } else {
                        _push(`<!---->`);
                    }
                    _push(`<!--]-->`);
                }
                _push(`</div>`);
            } else {
                _push(`<!---->`);
            }
            _push(`<div class="max-w-full mx-auto sm:px-6 lg:px-8"><div class="flex justify-center items-center pt-8 sm:justify-start sm:pt-0">`);
            _push(ssrRenderComponent(ApplicationLogo, {class: "w-32"}, null, _parent));
            _push(`<h1 class="text-5xl">Sanguis</h1></div><div class="mt-5 pt-5 border-t"><a href="https://www.svgrepo.com/" title="Icons by svgrepo.com" target="_blank">Icons by svgrepo.com</a></div></div></div><!--]-->`);
        };
    }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
    _sfc_main as default
};
