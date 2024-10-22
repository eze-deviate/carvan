import React from "react";
import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const DescriptionAndReview = (props: Props) => {
  return (
    <Tabs>
      <TabsList className="grid w-full grid-cols-2 border-b border-gray-200 p-2">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="description"></TabsContent>
      <TabsContent value="reviews"></TabsContent>
    </Tabs>
  );
};

export default DescriptionAndReview;
