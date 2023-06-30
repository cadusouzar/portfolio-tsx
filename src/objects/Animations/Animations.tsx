import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

type AnimationProps = {
  variant: string
  width: string
  height: string
  transform?: string
  marginLeft?: string
  top?: string
  position?: any
}

export const Animation: React.FC<AnimationProps> = ({variant, width, height, transform, marginLeft, top, position}) => {
  const [animationSrc, setAnimationSrc] = useState()

  useEffect(() => {
    const mount = async () => {
      const result = await import (`./${variant}.json`)
      setAnimationSrc(result.default)
    }

    mount()
  }, [variant])

  return <Lottie animationData={animationSrc} alt={variant} loop={true} autoplay={true} style={{width:width, height:height, transform: transform, marginLeft: marginLeft, top: top, position: position}}/>

} 