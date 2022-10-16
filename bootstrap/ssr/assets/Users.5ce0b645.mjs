import {resolveComponent, useSSRContext} from "vue";
import {ssrRenderComponent} from "vue/server-renderer";
import {_ as _export_sfc} from "./_plugin-vue_export-helper.43be4956.mjs";

const _sfc_main = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
    const _component_Head = resolveComponent("Head");
    _push(`<!--[-->`);
    _push(ssrRenderComponent(_component_Head, {title: "Users"}, null, _parent));
    _push(`<h1>Users</h1><p>The Users page</p><!--]-->`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Users = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
    Users as default
};
