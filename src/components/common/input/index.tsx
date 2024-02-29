import React from 'react'

export type InputProps = {
  outerClassName?: string // 인풋 부모 div
  label?: any // 인풋 타이틀
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <div className="w-full">
      <div className={`w-full items-center ${props.outerClassName}`} >
        {props.label && <p className={`body-text-md text-gray-08 mb-[8px] whitespace-nowrap min-w-[100px] ${props.label?.className}`}>{props.label?.text}</p>}
        <div className='w-full relative'>
          <input
            {...props}
            ref={ref}
            className={`w-full h-[48px] border-[1px] border-gray-03 focus:border-gray-07 invalid:border-red-01 rounded-[4px] p-[14px] text-gray-09 disabled:bg-gray-01 ${props.className}`}
          />
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef<HTMLInputElement, InputProps>(Input)
