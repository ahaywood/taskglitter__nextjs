interface Props {
  height?: number
  width?: number
}

const Drag = ({ height = 32, width = 32 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9C4 8.44772 4.44772 8 5 8H27C27.5523 8 28 8.44772 28 9C28 9.55228 27.5523 10 27 10H5C4.44772 10 4 9.55228 4 9Z" />
      <path d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z" />
      <path d="M4 23C4 22.4477 4.44772 22 5 22H27C27.5523 22 28 22.4477 28 23C28 23.5523 27.5523 24 27 24H5C4.44772 24 4 23.5523 4 23Z" />
    </svg>
  )
}

export { Drag }