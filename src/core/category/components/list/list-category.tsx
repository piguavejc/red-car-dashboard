'use client'

import { useRef, useState } from 'react'

import type { Category } from '@/core/category/domain/entities/category'
import CategoryItem from '@/core/category/components/list/category-item'

export default function ListCategory({
  categories
}: {
  categories: Category[]
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current !== null) {
      setIsDragging(true)
      setStartX(e.pageX - containerRef.current.offsetLeft)
      setScrollLeft(containerRef.current.scrollLeft)
      containerRef.current.classList.add('no-select')
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || containerRef.current === null) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (containerRef.current !== null) {
      containerRef.current.classList.remove('no-select')
    }
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    if (containerRef.current !== null) {
      containerRef.current.classList.remove('no-select')
    }
  }

  return (
    <div
      className="no-scrollbar flex cursor-grab items-center justify-start space-x-2 overflow-x-auto pb-4"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {categories.map((category, index) => (
        <CategoryItem category={category} key={index} />
      ))}
    </div>
  )
}
