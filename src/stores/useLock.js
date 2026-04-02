import { defineStore } from 'pinia'
import {
  useScrollLock 
} from '@vueuse/core'

export const useLock = defineStore('useLock', () => {
  const el = document.querySelector('body')
  const isLocked = useScrollLock(el)
  return {
    isLocked
  }
})