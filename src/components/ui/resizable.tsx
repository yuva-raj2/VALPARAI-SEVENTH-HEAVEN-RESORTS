
import React from "react";
import { GripVertical } from "lucide-react";
/*import {
  PanelGroup,
  Panel,
  PanelResizeHandle,
} from "react-resizable-panels";*/
import * as ResizablePanels from "react-resizable-panels";

import { cn } from "../../lib/utils";
const PanelGroup = ResizablePanels.PanelGroup as any;
const Panel = ResizablePanels.Panel as any;
const PanelResizeHandle = ResizablePanels.PanelResizeHandle as any;
const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup>) => (
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <PanelResizeHandle className={cn("relative flex w-px bg-border", className)} {...props}>
    {withHandle && (
      <GripVertical className="h-4 w-4" />
    )}
  </PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
