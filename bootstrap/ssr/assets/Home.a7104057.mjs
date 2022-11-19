import {defineComponent, unref, useSSRContext} from "vue";
import {ssrRenderComponent} from "vue/server-renderer";
import {Head} from "@inertiajs/inertia-vue3";

const _sfc_main = {
    __name: "Home",
    __ssrInlineRender: true,
    setup(__props) {
        defineComponent({
            Head
        });
        return (_ctx, _push, _parent, _attrs) => {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(unref(Head), {title: "Home"}, null, _parent));
            _push(`<h1>Home</h1><!--]-->`);
        };
    }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
    const ssrContext = useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
    return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
    _sfc_main as default
};
