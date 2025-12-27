import { describe, expect, it, vi } from 'vitest'

import checkEmpty from './checkEmpty'

describe('checkEmpty', () => {
  it('returns true when all params are empty', () => {
    const params = {}
    expect(checkEmpty(params)).toBe(true)
  })

  it('returns false when keyword has value', () => {
    const params = { keyword: 'test' }
    expect(checkEmpty(params)).toBe(false)
  })

  it('returns true when keyword is only whitespace', () => {
    const params = { keyword: '   ' }
    expect(checkEmpty(params)).toBe(true)
  })

  it('returns false when type array has items', () => {
    const params = { type: ['BR'] }
    expect(checkEmpty(params)).toBe(false)
  })

  it('returns true when type array is empty', () => {
    const params = { type: [] }
    expect(checkEmpty(params)).toBe(true)
  })

  it('returns false when department array has items', () => {
    const params = { department: ['CS'] }
    expect(checkEmpty(params)).toBe(false)
  })

  it('returns false when level array has items', () => {
    const params = { level: ['100'] }
    expect(checkEmpty(params)).toBe(false)
  })

  it('returns false when term is defined', () => {
    const params = { term: [2024, 1] }
    expect(checkEmpty(params)).toBe(false)
  })

  it('returns false when time is defined', () => {
    const params = { time: { day: 1, start: 540, end: 660 } }
    expect(checkEmpty(params)).toBe(false)
  })

  it('handles multiple empty arrays correctly', () => {
    const params = {
      keyword: '',
      type: [],
      department: [],
      level: [],
    }
    expect(checkEmpty(params)).toBe(true)
  })
})
