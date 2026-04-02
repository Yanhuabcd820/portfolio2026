import {
  ref, watch 
} from 'vue'
import {
  useWindowSize
} from '@vueuse/core'
import store from '@/stores'

const isMenuOpen = ref(false)
export const useMenuSwitch = () => {
  const useLockStore = store.useLock()
  const { width:ww } = useWindowSize()
  const switchMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    useLockStore.isLocked = isMenuOpen.value
  }
  const closeMenu = () => {
    isMenuOpen.value = false
    useLockStore.isLocked = false
  }
  watch(() => ww.value, (newWidth) => {
    if (newWidth > 768) closeMenu()
  })
  return {
    isMenuOpen, switchMenu, closeMenu
  }
}