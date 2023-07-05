<!--
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-02 13:25:41
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-05 14:52:28
-->

<template>
    <button>start</button>
    <button class="orange">pause</button>
    <VueDraggable :list="list" class="w-auto flex flex-col gap-2 m-auto bg-gray-500/5 rounded p-4">
        <div v-for="(item, index) in list " :key="index" class=" cursor-move w-36 bg-gray-500/5 rounded p-3 ">
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

<style scoped></style>