import * as yup from 'yup';

const stepSchemas = {
  1: yup.object({
    email: yup.string().email("Invalid email address 33").required("Email is required"),
    name: yup.string().required("Name is required"),
    mobile: yup.string().required("Number is required").matches(/^\d+$/, "Number must contain only digits").length(11, "must be like this 07700000000"),
    Street: yup.string().required("Street is required"),
    City: yup.string().required("City is required"),
    Country: yup.string().required("Country is required")
  }),
  2: yup.object({
    Position: yup.string().required("Position is required"),
    Organization: yup.string().required("Organization is required"),
    description: yup.string().required("description is required")
  }),
  3: yup.object({
    Title: yup.string().required("Title is required"),
    Link: yup.string().required("Link is required"),
    descriptionProject: yup.string().required("description is required")
  }),
  4: yup.object({
    Collage: yup.string().required("Collage is required"),
    qualification: yup.string().required("qualification is required"),
    descriptionEducation: yup.string().required("description is required")
  })
};

export { stepSchemas };
//# sourceMappingURL=schemas-2o0C9wgz.mjs.map
