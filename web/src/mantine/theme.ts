import { MantineThemeOverride } from "@mantine/core";

export const theme = {
  colors: {
    brand: [
      "#F0BBDD",
      "#ED9BCF",
      "#EC7CC3",
      "#ED5DB8",
      "#F13EAF",
      "#F71FA7",
      "#FF00A1",
      "#E00890",
      "#C50E82",
      "#AD1374",
    ],
  },
  primaryColor: "brand",
  headings: {
    fontFamily: "Poppins",
    sizes: { h1: { fontSize: 50 }, h2: { fontSize: 32 } },
  },
} as MantineThemeOverride;
