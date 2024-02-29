import React from 'react'

export type ButtonProps = {
  /**
   * 버튼 스타일 종류
   * @default default
   */
  /**
   * 비활성화 여부
   * @default false
   */
  disabled?: boolean
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

/**
 * 기본적으로 `w-full`, `className`으로 커스텀하여 사용
 */
function Button({ children, className = 'default', disabled, onClick}: ButtonProps) {
  const bgColor = 'bg-gray-09'
  const disabledBgColor = ''
  const textStyle = 'btn-text-lg laptop:title-sm'
  const textColor = 'text-white'
  const disabledTextColor = 'disabled:text-green-05'
  const border = ''
  const rounded = 'rounded-[4px]'
  const width = 'w-[150px]'
  const height = 'h-[48px] laptop:h-[60px]'

  return (
    <button className={`${bgColor} ${disabledBgColor} ${textStyle} ${textColor} ${disabledTextColor} ${border} ${width} ${height} ${rounded} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
