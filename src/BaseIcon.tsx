import React from 'react'

export type IconVariant = 'solid' | 'outline'

const defaultIconStyle: React.CSSProperties = {
  height: '1.5em',
  width: '1.5em',
  color: 'currentColor'
}

const defaultIconProps: { [k in IconVariant]: React.SVGProps<SVGSVGElement> } = {
  outline: { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
  solid: { xmlns: 'http://www.w3.org/2000/svg', fill: 'currentColor', viewBox: '0 0 20 20' }
}

const accessibleProps: React.SVGProps<SVGSVGElement> = {
  // accessibility
  'aria-hidden': 'true',
  'focusable': 'false' // See: https://allyjs.io/tutorials/focusing-in-svg.html#making-svg-elements-focusable
}

interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode
  variant?: IconVariant
}

export const BaseIcon: React.FC<BaseIconProps> = ({
  variant = 'outline',
  style: customStyle,
  children,
  ...restProps
}) => {
  const style = { ...defaultIconStyle, ...customStyle }
  const variantProps = { ...defaultIconProps[variant] }
  const props = { ...variantProps, style, ...accessibleProps, ...restProps }

  return <svg {...props}>{children}</svg>
}

export type { BaseIconProps }
