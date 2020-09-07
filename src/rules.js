import { extend } from "vee-validate"
import { email, required } from "vee-validate/dist/rules"

extend("email", {
	...email,
	message: "Email is not valid",
})

extend("required", {
	...required,
	message: "This field is required",
})

extend("min", {
	validate(value, args) {
		return value.length >= args.length
	},
	params: ["length"],
	message: "{_field_} must be at least {length} characters",
})
