<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-02 13:25:41
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 20:43:55
-->

<template>
    <button>start</button>
    <button class="orange">pause</button>
    <VueDraggable :list="list">
        <div v-for="(item, index) in list " :key="index" class="demo-list">
            <span>{{ item.name }}-{{ item.iconImg }}</span>
        </div>
    </VueDraggable>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueDraggable } from 'vue-draggable'

const list = ref([
    {
        name: '鸽鸽',
        iconImg: '🐦'
    },
    {
        name: '篮球',
        iconImg: '🏀'
    },
])
</script>

<style scoped>
.demo-list {
    width: 300px;
    height: 30px;

    border: 1px solid green;
    border-radius: 15px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 10px;
}
</style>