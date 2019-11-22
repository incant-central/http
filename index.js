'use strict';

const axios = require('axios');

async function httpTask(input) {

    const options = typeof input === 'string'
        ? { url: input }
        : input;

    try {
        const {
            status,
            statusText,
            headers:responseHeaders,
            data:responseData
        } = await axios(options);

        return responseData;
    } catch (e) {
        // TODO: handle
        //throw e;
    }

}

module.exports = httpTask;

httpTask.study = () => [
    'url',
    'method',
    'headers',
    'params',
    'data',
    'timeout',
    'withCredentials',
    'auth',
    'responseType',
    'responseEncoding',
    'xsrfCookieName',
    'xsrfHeaderName',
    'maxContentLength',
    'maxRedirects',
    'socketPath',
    'proxy'
];
