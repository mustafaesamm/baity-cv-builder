import{c as i,a as e}from"./CPiiQ0IW.js";import"./Cpj98o6Y.js";const u={1:i({email:e().email("Invalid email address 33").required("Email is required"),name:e().required("Name is required"),mobile:e().required("Number is required").matches(/^\d+$/,"Number must contain only digits").length(11,"must be like this 07700000000"),Street:e().required("Street is required"),City:e().required("City is required"),Country:e().required("Country is required")}),2:i({Position:e().required("Position is required"),Organization:e().required("Organization is required"),description:e().required("description is required")}),3:i({Title:e().required("Title is required"),Link:e().required("Link is required"),descriptionProject:e().required("description is required")}),4:i({Collage:e().required("Collage is required"),qualification:e().required("qualification is required"),descriptionEducation:e().required("description is required")})};export{u as stepSchemas};