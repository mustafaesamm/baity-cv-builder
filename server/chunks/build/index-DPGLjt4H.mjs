import { e as buildAssetsURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BXxPlIRz.mjs';
import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'node:path';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';

const _imports_0 = "" + buildAssetsURL("welcome.CfFlgJeR.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    let langSelected = ref("en");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-[90px] flex flex-col items-center justify-center" }, _attrs))}><h1 class="text-[2rem]">Welocme to Our Cv Builder</h1><img${ssrRenderAttr("src", _imports_0)} class="h-[393px] w-[393px] mt-1"><p class="mt-[14px]">Choose the language of your cv content:</p><div class="flex mt-[18px]"><p class="${ssrRenderClass([unref(langSelected) == "en" ? "bg-[#1890ff] text-white hover:bg-opacity-70" : "text-black bg-none hover:text-[#1890ff] ", "cursor-pointer transition-color duration-500 pb-2 pt-1 px-[16px] text-[14px] rounded-tl-sm rounded-bl-sm border-l-[1px] border-y-[1px] border-r-1"])}">English</p><p class="${ssrRenderClass([unref(langSelected) == "ar" ? "bg-[#1890ff] text-white hover:bg-opacity-70" : "text-black bg-none hover:text-[#1890ff]", "cursor-pointer transition-color duration-500 pb-2 pt-1 px-[16px] text-[14px] border-l-[1px] border-y-[1px] border-r-1 rounded border-r-[1px]"])}">Arabic </p></div>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/form",
        class: "bg-[#1890ff] transition-color duration-500 text-white rounded-full px-[50px] py-2 mt-12 hover:shadow-ms hover:bg-opacity-70"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Let\`s Start`);
          } else {
            return [
              createTextVNode("Let`s Start")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DPGLjt4H.mjs.map
