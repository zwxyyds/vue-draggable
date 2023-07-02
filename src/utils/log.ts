/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-02 19:35:10
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 19:35:20
 */
const MESSAGE_PREFIX = '[vue-draggable]: '

/**
 * Logs a warning message.
 * @param {string} msg
 */
export function warn(msg: string) {
    console.warn(MESSAGE_PREFIX + msg)
}

/**
 * Logs an error message.
 * @param {string} msg
 */
export function error(msg: string) {
    console.error(MESSAGE_PREFIX + msg)
}
