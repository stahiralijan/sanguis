import {mergeProps, useSSRContext} from "vue";
import {ssrRenderAttrs} from "vue/server-renderer";
import {_ as _export_sfc} from "./_plugin-vue_export-helper.43be4956.mjs";

const _imports_0 = "/build/assets/logo.dbceca6c.svg";
const _sfc_main = {};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
    _push(`<img${ssrRenderAttrs(mergeProps({
        src: _imports_0,
        alt: "Sanguis"
    }, _attrs))}>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
    ApplicationLogo as A
};
