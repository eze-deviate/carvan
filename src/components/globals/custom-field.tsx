import React from "react";
import { useForm, Controller, Control, Path } from "react-hook-form";
import { z, ZodType, TypeOf } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";
import { cn } from "@/lib/utils";

type CustomFieldProps<T extends ZodType<any, any>> = {
  control: Control<TypeOf<T>>;
  render: (props: { field: any }) => React.ReactNode;
  name: Path<TypeOf<T>>;
  formLabel?: string;
  className?: string;
  labelClass?: string;
  schema: T;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  iconClassName?: string;
  iconClick?: (v?: any) => void;
};

export const CustomField = <T extends ZodType<any, any>>({
  control,
  render,
  name,
  formLabel,
  className,
  schema,
  labelClass,
  icon,
  iconPosition = "right",
  iconClassName,
  iconClick = () => {},
}: CustomFieldProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          {formLabel && (
            <FormLabel
              className={cn("text-sm text-gray-800 font-medium", labelClass)}
            >
              {formLabel}
            </FormLabel>
          )}
          {icon ? (
            <div className="relative">
              {render({ field })}
              <span
                onClick={iconClick}
                className={cn(
                  "absolute top-1/2 transform -translate-y-1/2 right-3",
                  {
                    "left-3": iconPosition == "left",
                  },
                  iconClassName
                )}
              >
                {icon}
              </span>
            </div>
          ) : (
            <FormControl>{render({ field })}</FormControl>
          )}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// const schema = z.object({
//   username: z.string().nonempty("Username is required"),
//   email: z.string().email("Invalid email address"),
//   password: z.string().min(6, "Password must be at least 6 characters"),
// });

// const MyForm = () => {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<TypeOf<typeof schema>>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: TypeOf<typeof schema>) => {
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
// <CustomField
//   control={control}
//   name="username"
//   formLabel="Username"
//   render={({ field }) => <input {...field} />}
//   schema={schema}
// />
//       <CustomField
//         control={control}
//         name="email"
//         formLabel="Email"
//         render={({ field }) => <input {...field} />}
//         schema={schema}
//       />
//       <CustomField
//         control={control}
//         name="password"
//         formLabel="Password"
//         render={({ field }) => <input type="password" {...field} />}
//         schema={schema}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
