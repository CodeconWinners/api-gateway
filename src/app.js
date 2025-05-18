import express from "express";
import cors from "cors";
import {createProxyMiddleware, proxyEventsPlugin} from "http-proxy-middleware";

const app = express();

app.use(cors());


app.use('/desabafa-dev', createProxyMiddleware({
    target: "http://desabafa-dev-2.us-east-1.elasticbeanstalk.com",
    changeOrigin: true,
    pathRewrite: {
        '^/desabafa-dev': '', // Remove o prefixo da URL
    },
    on: proxyEventsPlugin,
    logger: console
}));


export default app;