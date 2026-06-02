
export const getTutors = async (query = '') => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors${query ? `?${query}` : ''}`)

  const data = res.json()
  return data
}
export const getBookings = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`)

  const data = res.json()
  return data
}
export const addBookings = async (data) => {
  console.log(process.env.SERVER_URL);
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)

  })
  const data1 =await res.json()
  return data1
 
}


export const addTutor = async (data) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const result = await res.json()
  return result
}

export const getUser = async (id) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/users
      /${id}`, {


  })

  const data = res.json()
  return data
}

