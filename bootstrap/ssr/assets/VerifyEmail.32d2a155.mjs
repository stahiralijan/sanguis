import {
    computed,
    withCtx,
    unref,
    createTextVNode,
    createVNode,
    openBlock,
    createBlock,
    createCommentVNode,
    withModifiers,
    useSSRContext
} from "vue";
import {ssrRenderComponent} from "vue/server-renderer";
import {_ as _sfc_main$1, a as _sfc_main$2} from "./PrimaryButton.d5537f45.mjs";
import {useForm, Head, Link} from "@inertiajs/inertia-vue3";
import "./ApplicationLogo.d9b05fbe.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";

const _sfc_main = {
    __name: "VerifyEmail",
    __ssrInlineRender: true,
    props: {
        status: String
    },
    setup(__props) {
        const props = __props;
        const form = useForm();
        const submit = () => {
            form.post(route("verification.send"));
        };
        const verificationLinkSent = computed(() => props.status === "verification-link-sent");
        return (_ctx, _push, _parent, _attrs) => {
            _push(ssrRenderComponent(_sfc_main$1, _attrs, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                        _push2(ssrRenderComponent(unref(Head), {title: "Email Verification"}, null, _parent2, _scopeId));
                        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
                        if (unref(verificationLinkSent)) {
                            _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
                        } else {
                            _push2(`<!---->`);
                        }
                        _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
                        _push2(ssrRenderComponent(_sfc_main$2, {
                            class: {"opacity-25": unref(form).processing},
                            disabled: unref(form).processing
                        }, {
                            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                                if (_push3) {
                                    _push3(` Resend Verification Email `);
                                } else {
                                    return [
                                        createTextVNode(" Resend Verification Email ")
                                    ];
                                }
                            }),
                            _: 1
                        }, _parent2, _scopeId));
                        _push2(ssrRenderComponent(unref(Link), {
                            href: _ctx.route("logout"),
                            method: "post",
                            as: "button",
                            class: "underline text-sm text-gray-600 hover:text-gray-900"
                        }, {
                            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                                if (_push3) {
                                    _push3(`Log Out`);
                                } else {
                                    return [
                                        createTextVNode("Log Out")
                                    ];
                                }
                            }),
                            _: 1
                        }, _parent2, _scopeId));
                        _push2(`</div></form>`);
                    } else {
                        return [
                            createVNode(unref(Head), {title: "Email Verification"}),
                            createVNode("div", {class: "mb-4 text-sm text-gray-600"}, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
                            unref(verificationLinkSent) ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "mb-4 font-medium text-sm text-green-600"
                            }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
                            createVNode("form", {
                                onSubmit: withModifiers(submit, ["prevent"])
                            }, [
                                createVNode("div", {class: "mt-4 flex items-center justify-between"}, [
                                    createVNode(_sfc_main$2, {
                                        class: {"opacity-25": unref(form).processing},
                                        disabled: unref(form).processing
                                    }, {
                                        default: withCtx(() => [
                                            createTextVNode(" Resend Verification Email ")
                                        ]),
                                        _: 1
                                    }, 8, ["class", "disabled"]),
                                    createVNode(unref(Link), {
                                        href: _ctx.route("logout"),
                                        method: "post",
                                        as: "button",
                                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                                    }, {
                                        default: withCtx(() => [
                                            createTextVNode("Log Out")
                                        ]),
                                        _: 1
                                    }, 8, ["href"])
                                ])
                            ], 40, ["onSubmit"])
                        ];
                    }
                }),
                _: 1
            }, _parent));
        };
    }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
    _sfc_main as default
};
