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
import { Button } from "@/components/ui/button";
import { EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";

type Props = {};
const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
});
const SecurityContent = (props: Props) => {
  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  const [passwordVisible, setPasswordVisible] = useState({
    newPassword: false,
  });
  function onSubmit(values: z.infer<typeof changePasswordSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const handlePasswordVisible = (key: keyof typeof passwordVisible) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="flex flex-col gap-y-6">
      <h1 className="text-3xl font-semibold  text-gray-900">Security</h1>
      <Form {...form}>
        <form>
          <div className="flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-8 w-[80%]">
              <div className="flex flex-col gap-y-3">
                <CustomField
                  className="flex-1"
                  control={form.control}
                  name="currentPassword"
                  formLabel="Current Password"
                  render={({ field }) => (
                    <CustomInput
                      {...field}
                      type={passwordVisible ? "text" : "password"}
                    />
                  )}
                  schema={changePasswordSchema}
                  icon={passwordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                  iconClick={() => {
                    handlePasswordVisible("newPassword");
                  }}
                  iconClassName="cursor-pointer"
                />
                <p className="text-brand-500 text-sm cursor-pointer">
                  Forgot your Password?
                </p>
              </div>

              <CustomField
                className="flex-1"
                control={form.control}
                name="newPassword"
                formLabel="New Password"
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    type={passwordVisible ? "text" : "password"}
                  />
                )}
                schema={changePasswordSchema}
                icon={passwordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                iconClick={() => {
                  handlePasswordVisible("newPassword");
                }}
                iconClassName="cursor-pointer"
              />

              <CustomField
                className="flex-1"
                control={form.control}
                name="confirmPassword"
                formLabel="Confirm Password"
                render={({ field }) => (
                  <CustomInput
                    {...field}
                    type={passwordVisible ? "text" : "password"}
                  />
                )}
                schema={changePasswordSchema}
                icon={passwordVisible ? <EyeOpenIcon /> : <EyeNoneIcon />}
                iconClick={() => {
                  handlePasswordVisible("newPassword");
                }}
                iconClassName="cursor-pointer"
              />
            </div>

            <div className="flex justify-center items-center">
              <Button variant="primary" className="w-[33.33%]">
                Save Changes
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SecurityContent;
