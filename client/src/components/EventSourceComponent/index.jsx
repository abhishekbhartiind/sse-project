import React from 'react'

const EventSourceComponent = () => {
   const [text, setText] = React.useState("")

   React.useEffect(() => {
      const eventSource = new EventSource('http://localhost:5000/events')
      eventSource.onmessage = (e) => {
         console.log(e, "-------")
         setText(prevText => prevText + ' ' + e.data)
      }

      return () => {
         eventSource.close()
      }
   }, [])


  return (
    <div>
      <h1>EVENT SOURCE</h1>
      <p>{text}</p>
    </div>
  )
}

export default EventSourceComponent