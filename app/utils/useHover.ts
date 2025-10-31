import { type RefObject, useEffect, useRef, useState } from "react"

/**
 * A custom hook that detects whether a referenced element is being hovered.
 * @returns A tuple containing a ref object to attach to the element and a boolean indicating the hover state.
 * @example
 * const [hoverRef, isHovered] = useHover<HTMLDivElement>();
 * return <div ref={hoverRef}>{isHovered ? 'Hovering' : 'Not hovering'}</div>;
 */
export const useHover = <T extends HTMLElement>(): [RefObject<T | null>, boolean] => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const ref = useRef<T>(null)

  const handleMouseOver = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener("mouseover", handleMouseOver)
      node.addEventListener("mouseout", handleMouseOut)
      return () => {
        node.removeEventListener("mouseover", handleMouseOver)
        node.removeEventListener("mouseout", handleMouseOut)
      }
    }
  }, [ref.current]) // ref.current가 변경될 때 effect를 다시 실행합니다.

  return [ref, isHovered]
}
