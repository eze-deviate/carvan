import { TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const TabButton = (
  props: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    text: string;
  }
) => {
  const { className, text, ...otherProps } = props;
  return (
    <TabsTrigger
      className={cn("data-[state=active]:shadow-none", className)}
      {...otherProps}
    >
      {text}
    </TabsTrigger>
  );
};
export default TabButton;
