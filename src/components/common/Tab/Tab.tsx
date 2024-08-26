import * as React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/className";

const tabsVariants = "inline-flex items-center justify-center rounded-lg text-semibold-16";

const tabsTriggerVariants =
  "text-blue-300 inline-flex items-center justify-center whitespace-nowrap px-4 py-3.5 disabled:pointer-events-none disabled:opacity-50 border-b border-[#efefef] data-[state=active]:border-primary-500 data-[state=active]:border-b-2 data-[state=active]:text-semibold-16 data-[state=active]:text-[#000]";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List ref={ref} className={cn(tabsVariants, className)} {...props} />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants, className)} {...props} />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={className} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
