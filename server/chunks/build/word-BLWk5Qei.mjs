import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/utils/object';
import '@primeuix/utils/dom';

const _sfc_main = {
  __name: "word",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "download-container" }, _attrs))} data-v-c2685ea1><h1 data-v-c2685ea1>Create and Download Your CV</h1><button data-v-c2685ea1>Download CV</button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/word.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const word = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2685ea1"]]);

export { word as default };
//# sourceMappingURL=word-BLWk5Qei.mjs.map
