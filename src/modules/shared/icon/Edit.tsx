interface Props {
  height?: number
  width?: number
}

const Edit = ({ height = 32, width = 32}: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9989 4.79991C20.9989 4.79991 23.4723 3.67343 25.6273 5.82843C27.7822 7.98342 26.6558 10.4568 26.6558 10.4568L12.2565 24.856L5.82827 25.6274L6.59966 19.1992L20.9989 4.79991ZM8.50299 20.1243L8.1173 23.3384L11.3314 22.9527L24.8983 9.38578C24.9251 9.25836 24.9474 9.09999 24.9498 8.92313C24.956 8.47858 24.8453 7.87488 24.213 7.24264C23.5808 6.6104 22.9771 6.49972 22.5325 6.50586C22.3557 6.50829 22.1973 6.53063 22.0699 6.55735L8.50299 20.1243Z" />
      <path d="M22.9474 13.6262L17.56 8.23874L18.9742 6.82452L24.3617 12.212L22.9474 13.6262Z" />
    </svg>
  )
}

export { Edit }