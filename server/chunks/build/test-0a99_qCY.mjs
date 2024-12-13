import { ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { ref, useSSRContext } from 'vue';
import * as yup from 'yup';

const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props) {
    ({
      form1: yup.object({
        email: yup.string().email("Invalid email address").required("Email is required"),
        name: yup.string().required("Name is required")
      }),
      form2: yup.object({
        username: yup.string().required("Username is required"),
        password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
      })
    });
    const form1 = ref({ email: "", name: "", errors: {} });
    const form2 = ref({ username: "", password: "", errors: {} });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><form><h2>Form 1</h2><input${ssrRenderAttr("value", form1.value.email)} placeholder="Email">`);
      if (form1.value.errors.email) {
        _push(`<p class="text-red-500">${ssrInterpolate(form1.value.errors.email)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("value", form1.value.name)} placeholder="Name">`);
      if (form1.value.errors.name) {
        _push(`<p class="text-red-500">${ssrInterpolate(form1.value.errors.name)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><hr><form><h2>Form 2</h2><input${ssrRenderAttr("value", form2.value.username)} placeholder="Username">`);
      if (form2.value.errors.username) {
        _push(`<p class="text-red-500">${ssrInterpolate(form2.value.errors.username)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("value", form2.value.password)} placeholder="Password" type="password">`);
      if (form2.value.errors.password) {
        _push(`<p class="text-red-500">${ssrInterpolate(form2.value.errors.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=test-0a99_qCY.mjs.map
