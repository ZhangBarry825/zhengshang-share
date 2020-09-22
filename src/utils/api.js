import request from './request'

export function getTest (data) {
    return request({
        url: '/sys/user/login',
        method: 'get',
        params: data
    })
}

export function postTest (data) {
    return request({
        url: '/sys/user/login',
        method: 'post',
        data
    })
}

export function formPost(data) {
    return request({
        url: '/index/contact/save',
        method: 'post',
        data
    })
}