import RCThemeProvider from '../theme/index';
import { CssBaseline } from '@mui/material';
import AppContainer from '../components/AppContainer';
import { Provider } from 'react-redux';
import { store } from '../appState/store';
import Head from 'next/head';
import { NextPage } from 'next';

type CustomProperties = {
    getLayout: (page: JSX.Element) => JSX.Element;
    isProtected?: boolean;
};

export type NextComponent<P = {}> = NextPage<P> & CustomProperties;

type Props = {
    Component: NextComponent;
    pageProps: { [key: string]: any };
};

export default function MyApp({ Component, pageProps }: Props) {
    const getLayout = Component.getLayout || ((page) => page);
    const isProtected = Component.isProtected ?? true;

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>React Course</title>
            </Head>
            <Provider store={store}>
                <RCThemeProvider>
                    <CssBaseline />
                    <AppContainer isProtected={isProtected}>
                        {getLayout(<Component {...pageProps} />)}
                    </AppContainer>
                </RCThemeProvider>
            </Provider>
        </>
    );
}
