import '@mantine/core/styles.css';

import type { AppProps } from "next/app";
import { AppShell, createTheme, MantineProvider, MantineColorsTuple} from "@mantine/core";
import { HeaderMegaMenu } from "../components/Header/HeaderMegaMenu";


const myColor: MantineColorsTuple = [
  '#ffeaec',
  '#fdd4d6',
  '#f4a7ac',
  '#ec777e',
  '#e64f57',
  '#e3353f',
  '#e22732',
  '#c91a25',
  '#b31220',
  '#9e0419'
];

const theme = createTheme({
  colors: {
    myColor,
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <AppShell>
        <AppShell.Header>
          <HeaderMegaMenu />
        </AppShell.Header>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
