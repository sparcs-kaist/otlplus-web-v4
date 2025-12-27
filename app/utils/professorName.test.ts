import { describe, expect, it, vi } from 'vitest'

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => {
      const translations: Record<string, string> = {
        'common.professors.over': ' 외 ',
        'common.professors.people': '명',
      }
      return translations[key] || key
    },
  },
}))

import professorName from '@/utils/professorName'
import type { Professor } from '@/common/schemas/professor'

describe('professorName', () => {
  it('returns empty string for null professors', () => {
    const result = professorName(null as unknown as Professor[])
    expect(result).toBe('')
  })

  it('returns empty string for empty array', () => {
    const result = professorName([])
    expect(result).toBe('')
  })

  it('returns single professor name without suffix', () => {
    const professors: Professor[] = [{ id: 1, name: '김철수' }]
    const result = professorName(professors)
    expect(result).toBe('김철수')
  })

  it('returns first professor name with count for multiple professors', () => {
    const professors: Professor[] = [
      { id: 1, name: '김철수' },
      { id: 2, name: '이영희' },
    ]
    const result = professorName(professors)
    expect(result).toBe('김철수 외 1명')
  })

  it('handles three professors correctly', () => {
    const professors: Professor[] = [
      { id: 1, name: '김철수' },
      { id: 2, name: '이영희' },
      { id: 3, name: '박민수' },
    ]
    const result = professorName(professors)
    expect(result).toBe('김철수 외 2명')
  })
})
