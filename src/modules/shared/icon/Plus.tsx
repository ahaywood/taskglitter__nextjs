interface Props {
  height?: number
  width?: number
}

const Plus = ({ height = 32, width = 32 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 18.0706H18.2863V27H13.7137V18.0706H5V13.9294H13.7137V5H18.2863V13.9294H27V18.0706Z" />
    </svg>
  )
}

export { Plus }