import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/wss/fonts?families=SF+Pro,v3|SF+Pro+Icons,v3|SF+Pro+KR,v2"
                        type="text/css"
                        media="all"
                    />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
