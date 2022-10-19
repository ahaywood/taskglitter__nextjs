interface Props {
  height?: number
  width?: number
}

const Trash = ({ height = 32, width = 32 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.94876 8H26.0513L25.3363 22.2996C25.1766 25.4929 22.541 28 19.3438 28H12.6563C9.45901 28 6.82341 25.4929 6.66374 22.2996L5.94876 8ZM8.05126 10L8.66125 22.1997C8.76769 24.3286 10.5248 26 12.6563 26H19.3438C21.4753 26 23.2323 24.3286 23.3388 22.1997L23.9488 10H8.05126Z" />
      <path d="M12 9V8C12 6.89543 12.8954 6 14 6H18C19.1046 6 20 6.89543 20 8V9H22V8C22 5.79086 20.2091 4 18 4H14C11.7909 4 10 5.79086 10 8V9H12Z" />
      <path d="M4 9C4 8.44772 4.44772 8 5 8H27C27.5523 8 28 8.44772 28 9C28 9.55228 27.5523 10 27 10H5C4.44772 10 4 9.55228 4 9Z" />
      <path d="M19 14C19.5523 14 20 14.4477 20 15V20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20V15C18 14.4477 18.4477 14 19 14Z" />
      <path d="M13 14C13.5523 14 14 14.4477 14 15V20C14 20.5523 13.5523 21 13 21C12.4477 21 12 20.5523 12 20V15C12 14.4477 12.4477 14 13 14Z" />
    </svg>
  )
}

export { Trash }