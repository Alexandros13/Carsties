import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

export default function Page({searchParams}: {searchParams: {callbackUrl: string}}) {
    return (
        <EmptyFilter
            title='You need to be login to do that'
            subtitle='Please click below to sing in'
            showLogin
            callbackUrl={searchParams.callbackUrl}
        />
    )
}
