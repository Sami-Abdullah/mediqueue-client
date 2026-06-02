import { headers } from "next/headers"
import { auth } from "./auth"
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