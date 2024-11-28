import { CustomField } from "@/components/globals/custom-field";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/custom-input";
import { Form } from "@/components/ui/form";
import { UpdatePersonalInfoFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

// import { UseFormReturn } from "react-hook-form";
// import { ZodType, infer as zodInfer } from "zod";
// interface UpdatePersonalInfoFormProps<TFormValues extends Record<string, any>> {
//   form: UseFormReturn<TFormValues>;
// }
const UpdatePersonalInfoForm = ({ setIsOpen }: Props) => {
  const form = useForm<z.infer<typeof UpdatePersonalInfoFormSchema>>({
    resolver: zodResolver(UpdatePersonalInfoFormSchema),
    defaultValues: {
      firstName: "",
    },
  });
  const handleSubmit = (data: z.infer<typeof UpdatePersonalInfoFormSchema>) => {
    setIsOpen(false);
  };
  return (
    <div>
      <Form {...form}>
        <form>
          <div className="flex flex-col gap-y-5">
            {/* fields */}
            <div className="flex flex-col gap-y-5">
              <CustomField
                className="flex-1"
                control={form.control}
                name="firstName"
                formLabel="First Name"
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Jane"
                    className="placeholder:text-gray-700"
                  />
                )}
                schema={UpdatePersonalInfoFormSchema}
              />
              <CustomField
                className="flex-1"
                control={form.control}
                name="lastName"
                formLabel="Last Name"
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    placeholder="Doe"
                    className="placeholder:text-gray-700"
                  />
                )}
                schema={UpdatePersonalInfoFormSchema}
              />
              <CustomField
                className="flex-1"
                control={form.control}
                name="phoneNumber"
                formLabel="Phone number"
                render={({ field }) => (
                  <CustomInput
                    placeholder="913-4784-8585"
                    {...field}
                    className="placeholder:text-gray-700"
                  />
                )}
                schema={UpdatePersonalInfoFormSchema}
              />
            </div>
            <div className="flex justify-between">
              <Button onClick={() => setIsOpen(false)} variant="outline">
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdatePersonalInfoForm;
