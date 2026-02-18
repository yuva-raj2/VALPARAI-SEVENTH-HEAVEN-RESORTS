import * as React from "react";
import * as RechartsPrimitive from "recharts";
import type { TooltipProps, LegendProps } from "recharts";

import { cn } from "../../lib/utils";

// ================= THEMES =================
const THEMES = { light: "", dark: ".dark" } as const;

// ================= TYPES =================
export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

// ================= CONTAINER =================
const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

// ================= STYLE =================
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, c]) => c.theme || c.color
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

// ================= TOOLTIP =================
const ChartTooltip = RechartsPrimitive.Tooltip;

type SafeTooltipProps = TooltipProps<any, any> & {
  payload?: any[];
  label?: any;
  active?: boolean;
};

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  SafeTooltipProps
>((props, ref) => {
  const { config } = useChart();

  const { active, payload, label } = props;

  if (!active || !payload || payload.length === 0) return null;

  return (
    <div
      ref={ref}
      className="rounded-lg border border-border bg-background p-2 text-xs shadow"
    >
      {label && <div className="font-medium mb-1">{label}</div>}

      {payload.map((item: any, index: number) => {
        const key = item.dataKey || item.name || "value";
        const itemConfig = config[key];

        return (
          <div key={index} className="flex justify-between gap-2">
            <span>{itemConfig?.label || item.name}</span>
            <span>{item.value}</span>
          </div>
        );
      })}
    </div>
  );
});
ChartTooltipContent.displayName = "ChartTooltip";

// ================= LEGEND =================
const ChartLegend = RechartsPrimitive.Legend;

type SafeLegendProps = LegendProps & {
  payload?: any[];
};

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  SafeLegendProps
>(({ payload, className }, ref) => {
  const { config } = useChart();

  if (!payload || payload.length === 0) return null;

  return (
    <div
      ref={ref}
      className={cn("flex gap-4 justify-center", className)}
    >
      {payload.map((item: any, index: number) => {
        const key = item.dataKey || "value";
        const itemConfig = config[key];

        return (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded"
              style={{ backgroundColor: item.color }}
            />
            <span>{itemConfig?.label || item.value}</span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// ================= EXPORT =================
export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
