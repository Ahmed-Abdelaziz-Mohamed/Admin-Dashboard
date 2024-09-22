import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

const data = [
    {
        id: "React.js",
        label: "React.js",
        value: 199,
        color: "hsl(208, 70%, 50%)",
    },
    {
        id: "Next.JS",
        label: "Next.JS",
        value: 422,
        color: "hsl(32, 70%, 50%)",
    },
    {
        id: "MUI",
        label: "MUI",
        value: 146,
        color: "hsl(117, 70%, 50%)",
    },
    {
        id: "TypeScript",
        label: "TypeScript",
        value: 127,
        color: "hsl(99, 70%, 50%)",
    },
    {
        id: "JavaScript",
        label: "JavaScript",
        value: 467,
        color: "hsl(283, 70%, 50%)",
    },
];

export default function PieChart({ isDashboard = false }) {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ height: isDashboard ? "300px" : "75vh" }}>
                <ResponsivePie
                    theme={{
                        text: {
                            fontSize: 11,
                            fill: theme.palette.text.primary,
                            outlineWidth: 0,
                            outlineColor: "transparent",
                        },
                        axis: {
                            domain: {
                                line: {
                                    stroke: theme.palette.divider,
                                    strokeWidth: 1,
                                },
                            },
                            legend: {
                                text: {
                                    fontSize: 12,
                                    fill: theme.palette.text.primary,
                                    outlineWidth: 0,
                                    outlineColor: "transparent",
                                },
                            },
                            ticks: {
                                line: {
                                    stroke: theme.palette.divider,
                                    strokeWidth: 1,
                                },
                                text: {
                                    fontSize: 11,
                                    fill: theme.palette.text.primary,
                                    outlineWidth: 0,
                                    outlineColor: "transparent",
                                },
                            },
                        },
                        grid: {
                            line: {
                                stroke: theme.applyStyles.divider,
                                strokeWidth: 1,
                            },
                        },
                        legends: {
                            title: {
                                text: {
                                    fontSize: 11,
                                    fill: theme.palette.text.primary,
                                    outlineWidth: 0,
                                    outlineColor: "transparent",
                                },
                            },
                            text: {
                                fontSize: 11,
                                fill: theme.palette.text.primary,
                                outlineWidth: 0,
                                outlineColor: "transparent",
                            },
                            ticks: {
                                line: {},
                                text: {
                                    fontSize: 10,
                                    fill: theme.palette.text.primary,
                                    outlineWidth: 0,
                                    outlineColor: "transparent",
                                },
                            },
                        },
                        annotations: {
                            text: {
                                fontSize: 13,
                                fill: theme.palette.text.primary,
                                outlineWidth: 2,
                                outlineColor: "#ffffff",
                                outlineOpacity: 1,
                            },
                            link: {
                                stroke: "#000000",
                                strokeWidth: 1,
                                outlineWidth: 2,
                                outlineColor: "#ffffff",
                                outlineOpacity: 1,
                            },
                            outline: {
                                stroke: "#000000",
                                strokeWidth: 2,
                                outlineWidth: 2,
                                outlineColor: "#ffffff",
                                outlineOpacity: 1,
                            },
                            symbol: {
                                fill: "#000000",
                                outlineWidth: 2,
                                outlineColor: "#ffffff",
                                outlineOpacity: 1,
                            },
                        },
                        tooltip: {
                            wrapper: {},
                            container: {
                                background: theme.palette.background.default,
                                color: theme.palette.text.primary,
                                fontSize: 12,
                            },
                            basic: {},
                            chip: {},
                            table: {},
                            tableCell: {},
                            tableCellValue: {},
                        },
                    }}
                    data={data}
                    margin={
                        isDashboard
                            ? { top: 10, right: 0, bottom: 10, left: 0 }
                            : { top: 40, right: 80, bottom: 80, left: 80 }
                    }
                    innerRadius={isDashboard ? 0.7 : 0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                        from: "color",
                        modifiers: [["darker", 0.2]],
                    }}
                    enableArcLabels={true}
                    enableArcLinkLabels={isDashboard ? null : true}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={theme.palette.text.primary}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: "color" }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: "color",
                        modifiers: [["darker", 2]],
                    }}
                    defs={[
                        {
                            id: "dots",
                            type: "patternDots",
                            background: "inherit",
                            color: theme.palette.text.primary,
                            size: 4,
                            padding: 1,
                            stagger: true,
                        },
                        {
                            id: "lines",
                            type: "patternLines",
                            background: "inherit",
                            color: theme.palette.text.primary,
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10,
                        },
                    ]}
                    fill={[
                        {
                            match: {
                                id: "ruby",
                            },
                            id: "dots",
                        },
                        {
                            match: {
                                id: "c",
                            },
                            id: "dots",
                        },
                        {
                            match: {
                                id: "go",
                            },
                            id: "dots",
                        },
                        {
                            match: {
                                id: "python",
                            },
                            id: "dots",
                        },
                        {
                            match: {
                                id: "scala",
                            },
                            id: "lines",
                        },
                        {
                            match: {
                                id: "lisp",
                            },
                            id: "lines",
                        },
                        {
                            match: {
                                id: "elixir",
                            },
                            id: "lines",
                        },
                        {
                            match: {
                                id: "javascript",
                            },
                            id: "lines",
                        },
                    ]}
                    legends={
                        isDashboard
                            ? []
                            : [
                                  {
                                      anchor: "bottom",
                                      direction: "row",
                                      justify: false,
                                      translateX: 0,
                                      translateY: 56,
                                      itemsSpacing: 0,
                                      itemWidth: 100,
                                      itemHeight: 18,
                                      itemTextColor: theme.palette.text.primary,
                                      itemDirection: "left-to-right",
                                      itemOpacity: 1,
                                      symbolSize: 18,
                                      symbolShape: "circle",
                                      effects: [
                                          {
                                              on: "hover",
                                              style: {
                                                  itemTextColor:
                                                      theme.palette.text
                                                          .primary,
                                              },
                                          },
                                      ],
                                  },
                              ]
                    }
                />
            </Box>
        </>
    );
}
