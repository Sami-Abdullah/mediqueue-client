import { auth } from "./auth"
import { headers } from "next/headers"


export const getTutors = async (query = '') => {
  const res = await fetch(`${process.env.SERVER_URL}/tutors${query ? `?${query}` : ''}`)

  const data = res.json()
  return data
}
export const getBookings = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/booking`)

  const data = res.json()
  return data
}

export const getTutorDetails = async (id) => {
    const { token } = await auth.api.getToken({
      headers: await headers()
    })
    const res = await fetch(`http://localhost:5000/tutors/${id}`, {
      method:"GET",
      headers: {
        authorization: `Bearer ${token}`,
        'content-type': 'application/json'
      }

    })

  const data = res.json()
  return data
}
export const addTutor = async (data) => {
  const res = await fetch('http://localhost:5000/tutors', {
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

    const res = await fetch(`http://localhost:5000/users
      /${id}`, {


    })

  const data = res.json()
  return data
}

