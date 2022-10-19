interface Props {
  children: React.ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <div className="bg-bg bg-center bg-no-repeat bg-fixed bg-cover min-h-screen min-w-screen">
      <div className="stars-1 bg-stars1 bg-center bg-repeat h-screen left-0 mix-blend-screen absolute top-0 w-screen" />
      <div className="stars-2 bg-stars2 bg-center bg-repeat h-screen left-0 mix-blend-screen absolute top-0 w-screen" />
      <div className="stars-3 bg-stars1 bg-center bg-repeat h-screen left-0 mix-blend-screen absolute top-0 w-screen" />

      <div className="grid grid-cols-12 pt-24 gap-x-5 h-screen w-screen relative z-50">
        <div className="col-start-4 col-span-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Page }