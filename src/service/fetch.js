import axios from 'axios'
import config from '@/configs'

const JSON_TYPE = 'application/json;charset=UTF-8';
const FORM_TYPE = 'application/x-www-form-urlencoded;charset=UTF-8';

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = JSON_TYPE;

// 配置 baseURL
axios.defaults.baseURL = config.env.envConfig.DEV;    // 要去读config的配置

// 返回状态判断
axios.interceptors.response.use((res) => {
    return res
}, (error) => {
    return Promise.reject(error)
})
function handleFile(response) {
    const blob = response.data;
    const fileName = /^.*filename=(.*)$/g.exec(response.headers['content-disposition'])[1];
    if ('download' in document.createElement('a')) { // 非IE下载
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href) // 释放URL 对象
        document.body.removeChild(elink)
    } else { // IE10+下载
        navigator.msSaveBlob(blob, fileName)
    }
}
export function fetch (obj, params, options) {
    let _type = obj.type || 'get'
    _type = _type.toLowerCase()
    params = params || {}
    options = options || {}
    let url = obj.url
    console.log(`${obj.name}:::${url}:::requestData: ${JSON.stringify(params)} `)
    return new Promise((resolve, reject) => {
        let config = Object.assign({}, options);
        config.method = _type;
        config.url = url;
        config.method === 'get' ? config.params = params : config.data = params;
        console.log(config);
        axios(config).then(response => {
            if (obj.noPrintResult) console.log(`${obj.name}:::${url}:::${_type}:::responseData:`, response.data)
            else console.log(`${obj.name}:::${url}:::${_type}:::responseData:`, JSON.stringify(response.data), response.data)
            if (config.responseType === 'blob') {
                handleFile(response);
            } else if (response.data.code === '0') {
                resolve(response.data)
            } else {
                reject(response.data)
            }
        }, err => {
            reject(err)
        })
        .catch((error) => {
            reject(error)
        });
    })
}
