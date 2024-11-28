import React from "react";
import { CustomField } from "../globals/custom-field";
import CustomInput from "../ui/custom-input";
import { CheckoutAddressFormSchema } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormControl } from "../ui/form";

type Props = {
  form: any;
};

const CheckoutAddressFields = (props: Props) => {
  const { form } = props;
  return (
    <div>
      <div className="flex gap-6">
        <CustomField
          className="flex-1"
          control={form.control}
          name="firstName"
          formLabel="First Name"
          render={({ field }) => <CustomInput {...field} />}
          schema={CheckoutAddressFormSchema}
        />
        <CustomField
          className="flex-1"
          control={form.control}
          name="lastName"
          formLabel="Last Name"
          render={({ field }) => <CustomInput {...field} />}
          schema={CheckoutAddressFormSchema}
        />
      </div>
      <div className="flex gap-6">
        <CustomField
          className="flex-1"
          control={form.control}
          name="phoneNumber"
          formLabel="Phone number"
          render={({ field }) => <CustomInput {...field} />}
          schema={CheckoutAddressFormSchema}
        />
        <CustomField
          className="flex-1"
          control={form.control}
          name="lastName"
          formLabel="Alternative Phone number"
          render={({ field }) => <CustomInput {...field} />}
          schema={CheckoutAddressFormSchema}
        />
      </div>

      {/* select state */}
      <CustomField
        control={form.control}
        name="state"
        formLabel="Province/state"
        render={({ field }) => (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="m@example.com">m@example.com</SelectItem>
              <SelectItem value="m@google.com">m@google.com</SelectItem>
              <SelectItem value="m@support.com">m@support.com</SelectItem>
            </SelectContent>
          </Select>
        )}
        schema={CheckoutAddressFormSchema}
      />

      {/* District and town */}

      <div className="flex gap-6">
        <div className="flex-1">
          <CustomField
            control={form.control}
            name="state"
            formLabel="Province/state"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            )}
            schema={CheckoutAddressFormSchema}
          />
        </div>

        <div className="flex-1">
          <CustomField
            control={form.control}
            name="state"
            formLabel="Province/state"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            )}
            schema={CheckoutAddressFormSchema}
          />
        </div>
      </div>

      {/* Delivery address */}

      <CustomField
        className="flex-1"
        control={form.control}
        name="lastName"
        formLabel="Last Name"
        render={({ field }) => <CustomInput {...field} />}
        schema={CheckoutAddressFormSchema}
      />
      {/*  Additional Information */}

      <CustomField
        className="flex-1"
        control={form.control}
        name="additionalInfo"
        formLabel="Additional Information"
        render={({ field }) => <CustomInput {...field} />}
        schema={CheckoutAddressFormSchema}
      />
    </div>
  );
};

export default CheckoutAddressFields;
