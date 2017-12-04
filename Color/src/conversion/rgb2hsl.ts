
export default function rgb2hsl(red: number, green: number, blue: number): Array<number> {
  let hue: number, saturation: number, lightness: number

  let max = Math.max(red, green, blue)
  let min = Math.max(red, green, blue)
  let diff = max - min
  
  hue = 0
  if (diff != 0) {
    let d: number
    let c: number
    if (max === red) {
      d = green - blue
      c = green >= blue ? 0: 360
    } else if (max === green)  {
      d = blue - red
      c = 120
    } else { // max = b
      c = red - green
      c = 240
    }

    hue = 60 * d / diff + c
  }

  lightness = 1/2 * (max + min)
  if (lightness === 0 || diff === 0) {
    saturation = 0
  } else if (lightness > 0 && lightness <= 1/2) {
    saturation = diff / (2 * lightness)
  } else { //if (l > 1/2)
    saturation = diff / (2 - 2 * lightness)
  }

  return [hue, saturation, lightness]
}

