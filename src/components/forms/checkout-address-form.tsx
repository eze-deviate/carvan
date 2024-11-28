"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CheckoutAddressFormSchema } from "@/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { CustomField } from "@/components/globals/custom-field";
import CustomInput from "@/components/ui/custom-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type Props = {};

const CheckoutAddressForm = (props: Props) => {
  const form = useForm<z.infer<typeof CheckoutAddressFormSchema>>({
    resolver: zodResolver(CheckoutAddressFormSchema),
    defaultValues: {
      firstName: "",
    },
  });
  function onSubmit(values: z.infer<typeof CheckoutAddressFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full flex flex-col gap-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">
                        m@example.com
                      </SelectItem>
                      <SelectItem value="m@google.com">m@google.com</SelectItem>
                      <SelectItem value="m@support.com">
                        m@support.com
                      </SelectItem>
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

          <Button
            type="submit"
            className="bg-brand-500 py-4 rounded-md border-none hover:bg-brand-700 text-white hover:text-white "
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CheckoutAddressForm;
