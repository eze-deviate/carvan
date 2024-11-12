import { TabsTrigger } from "@/components/ui/tabs";
import * as TabsPrimitive from "@radix-ui/react-tabs";

const TabButton = (
  props: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    text: string;
  }
) => {
  const { className, text, ...otherProps } = props;
  return (
    <TabsTrigger className="data-[state=active]:shadow-none" {...otherProps}>
      {text}
    </TabsTrigger>
  );
};
export default TabButton;
