import express from "express";
import {createProxyMiddleware, proxyEventsPlugin} from "http-proxy-middleware";

const app = express();


app.use('/desabafa-dev', createProxyMiddleware({
    method: 'GET',
    target: "http://desabafa-dev-2.us-east-1.elasticbeanstalk.com",
    changeOrigin: true,
    pathRewrite: {
        '^/desabafa-dev': '', // Remove o prefixo da URL
    },
    on: proxyEventsPlugin,
    logger: console
}));


export default app;