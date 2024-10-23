import { createProxyMiddleware } from 'http-proxy-middleware';

export default (app) => {
    app.use(
        '/api', // This path can be customized
        createProxyMiddleware({
            target: 'https://alfa-leetcode-api.onrender.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove /api from the request path
            },
        })
    );
};
