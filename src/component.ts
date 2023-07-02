/*
 * @Description: 
 * @Version: 2.0
 * @Author: Zhangwenxin
 * @Date: 2023-07-02 19:34:15
 * @LastEditors: Zhangwenxin
 * @LastEditTime: 2023-07-02 20:11:52
 */
import { useDraggable } from './useDraggable'
import {
    type PropType,
    defineComponent,
    h,
    reactive,
    ref,
    computed,
    useAttrs
} from 'vue'

export const VueDraggable = defineComponent({
    name: 'VueDraggable',
    props: {
        modelValue: {
            type: Array as PropType<any[]>,
            required: true
        },
        tag: {
            type: String,
            default: 'div'
        }
    },
    setup(props, { slots, emit }) {
        const attrs = useAttrs()
        const list = computed({
            get: () => props.modelValue,
            set: v => emit('update:modelValue', v)
        })
        const target = ref()
        const data = reactive(useDraggable(target, list, attrs))
        return () => {
            if (slots.default)
                return h(props.tag, { ref: target }, slots.default(data))
        }
    }
})
