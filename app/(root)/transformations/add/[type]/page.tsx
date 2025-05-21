import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = await auth() // Fetch the auth data on server-side

  if (!userId) {
    // console.log("hey")
    redirect('/sign-in') // Redirect if no userId is found
  }

  const user = await getUserById(userId) // Fetch user data
  // @ts-expect-error: 'type' is dynamically fetched from URL params and narrowed via runtime check
  const transformation = transformationTypes[type];



  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />

      <section className="mt-10 ">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage
