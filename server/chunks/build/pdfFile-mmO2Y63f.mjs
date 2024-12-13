import { ssrRenderAttrs } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
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
  __name: "pdfFile",
  __ssrInlineRender: true,
  setup(__props) {
    ref(["frontend", "backend", "full stack"]);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f38342ab><div data-v-f38342ab></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pdfFile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pdfFile = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f38342ab"]]);

export { pdfFile as default };
//# sourceMappingURL=pdfFile-mmO2Y63f.mjs.map
