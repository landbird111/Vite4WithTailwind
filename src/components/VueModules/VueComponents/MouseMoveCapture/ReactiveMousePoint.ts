import { onMounted, onUnmounted } from 'vue'
import { $$, $ref } from 'vue/macros'

export const useReactiveMousePoint = () => {
    let x = $ref(0)
    let y = $ref(0)

    const updateMouse = (e: MouseEvent) => {
        x = e.pageX
        y = e.pageY
    }

    onMounted(() => {
        document.addEventListener('mousemove', updateMouse)
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', updateMouse)
    })

    return $$({ x, y })
}
