import { defineRule } from "vee-validate";
import { required, min, max, alpha, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("alpha", alpha);
defineRule("redberry_email", (value) => {
  if (value.substring(value.length - 12) !== "@redberry.ge") {
    return "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)";
  }
  return true;
});
defineRule("requiredradio", (value) => {
  if (value === null) {
    return "*-ით მონიშნული ველების შევსება სავალდებულოა";
  }
  return true;
});
