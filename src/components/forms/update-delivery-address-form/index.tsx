import { CustomField } from "@/components/globals/custom-field";
import CustomSelect from "@/components/globals/custom-select";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/custom-input";
import { Form } from "@/components/ui/form";
import { UpDateDeliveryAddressFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpDateDeliveryAddressForm = ({ setIsOpen }: Props) => {
  const form = useForm<z.infer<typeof UpDateDeliveryAddressFormSchema>>({
    resolver: zodResolver(UpDateDeliveryAddressFormSchema),
    defaultValues: {
      firstName: "",
    },
  });
  const handleSubmit = (
    data: z.infer<typeof UpDateDeliveryAddressFormSchema>
  ) => {
    setIsOpen(false);
  };
  return (
    <div>
      <Form {...form}>
        <form>
          <div className="flex flex-col gap-y-5">
            {/* fields */}
            <div className="flex flex-col gap-y-5">
              <div className="flex gap-x-6">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="firstName"
                  formLabel="First Name"
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      placeholder="Jane"
                      className="placeholder:text-gray-400"
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="lastName"
                  formLabel="Last Name"
                  render={({ field }) => (
                    <CustomInput {...field} placeholder="Doe" className="" />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
              </div>
              {/* phone numbers */}
              <div className="flex  gap-x-6">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="phoneNumber"
                  formLabel="Phone number"
                  render={({ field }) => (
                    <CustomInput
                      placeholder="913-4784-8585"
                      {...field}
                      className=""
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="alternativePhoneNumber"
                  formLabel="Alternative Phone Number"
                  render={({ field }) => (
                    <CustomInput
                      placeholder="913-4784-8585"
                      {...field}
                      className=""
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
              </div>

              <div className="flex  gap-x-6">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="province"
                  formLabel="Province"
                  render={({ field }) => (
                    <CustomSelect
                      onValueChange={field.onChange}
                      value={field.value}
                      selectItems={[{ value: "test", label: "select me" }]}
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
              </div>
              {/* district / city */}
              <div className="flex  gap-x-6">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="district"
                  formLabel="District"
                  render={({ field }) => (
                    <CustomSelect
                      onValueChange={field.onChange}
                      value={field.value}
                      selectItems={[{ value: "test", label: "select me" }]}
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="city"
                  formLabel="City/Town"
                  render={({ field }) => (
                    <CustomSelect
                      onValueChange={field.onChange}
                      value={field.value}
                      selectItems={[{ value: "test", label: "select me" }]}
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
              </div>

              {/* delivery address */}

              <div className="flex gap-x-6">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="deliveryAddress"
                  formLabel="Delivery Address"
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      placeholder="No.6 Calm street, Peace Avenue, Tuff"
                      className="placeholder:text-gray-400"
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
              </div>

              {/* additional information */}
              {/* delivery address */}

              <div className="flex gap-x-6">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="additionalInfo"
                  formLabel="Additional information(optional)"
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      placeholder="Inform me before you start coming"
                      className="placeholder:text-gray-400"
                    />
                  )}
                  schema={UpDateDeliveryAddressFormSchema}
                />
              </div>
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

export default UpDateDeliveryAddressForm;
