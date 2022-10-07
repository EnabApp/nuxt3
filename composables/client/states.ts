import { useState } from '#imports'

export const useUser = () => useState('user', () => null)
export const useCounter = () => useState<number>('counter', () => 0)
