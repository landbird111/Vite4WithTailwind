import { ref, onMounted, onUnmounted } from 'vue'

export const useNormalMousePoint = () => {
    const x = ref(0)
    const y = ref(0)

    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }

    onMounted(() => {
        document.addEventListener('mousemove', updateMouse)
    })

    onUnmounted(() => {
        document.removeEventListener('mousemove', updateMouse)
    })

    return { x, y }
}
