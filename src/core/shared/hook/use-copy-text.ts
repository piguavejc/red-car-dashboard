'use client'

export const useCopyText = (text: unknown) => {
  const handleCopyText = () => {
    if (typeof text !== 'string') return
    navigator.clipboard.writeText(text)
  }

  return {
    handleCopyText
  }
}
