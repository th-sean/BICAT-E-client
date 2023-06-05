import { getSession } from 'next-auth/react'

export async function authCheck(context :any) {
  const session = await getSession(context)
  
  if (!session) {
    return {
      redirect: {
        destination: '/pages/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session }, // will be passed to the page component as props
  }
}