import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { data } from "./data";
export default function Line({ isDashboard = false }) {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ height: isDashboard ? "350px" : "75vh" }}>
                <ResponsiveLine
                    data={data}
                    curve="catmullRom"
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: "point" }}
                    yScale={{
                        type: "linear",
                        min: "auto",
                        max: "auto",
                        stacked: true,
                        reverse: false,
                    }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: isDashboard ? null : "Transportation",
                        legendOffset: 45,
                        legendPosition: "middle",
                        truncateTickAt: 0,
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: isDashboard ? null : "Count",
                        legendOffset: -45,
                        legendPosition: "middle",
                        truncateTickAt: 0,
                    }}
                    colors={{ scheme: "tableau10" }}
                    pointSize={10}
                    pointColor={{ theme: "background" }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: "serieColor" }}
                    pointLabel="data.yFormatted"
                    pointLabelYOffset={-12}
                    enableTouchCrosshair={true}
                    useMesh={true}
                    legends={[
                        {
                            anchor: "bottom-right",
                            direction: "column",
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: "left-to-right",
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: "circle",
                            symbolBorderColor: "rgba(0, 0, 0, .5)",
                            effects: [
                                {
                                    on: "hover",
                                    style: {
                                        itemBackground: "rgba(0, 0, 0, .03)",
                                        itemOpacity: 1,
                                    },
                                },
                            ],
                        },
                    ]}
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
                                    fill: theme.palette.text.secondary,
                                    outlineWidth: 0,
                                    outlineColor: "transparent",
                                },
                            },
                        },
                        grid: {
                            line: {
                                stroke: theme.palette.divider,
                                strokeWidth: 0,
                            },
                        },
                        crosshair: {
                            line: {
                                stroke: theme.palette.text.primary,
                                strokeWidth: 1,
                                strokeDasharray: "4 4",
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
                />
            </Box>
        </>
    );
}
