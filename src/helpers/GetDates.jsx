export const NewDate = ({date }) => {
    const previusDate =new Date(date)
    const actualDate = previusDate.toDateString()
  
  return (
    <div>{actualDate} </div>
  )

}

export const NewHour = ({date }) => {
  const previusDate =new Date(date)
  const actualDate = previusDate.toLocaleTimeString()

return (
  <div>{actualDate} </div>
)

}