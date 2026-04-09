"use client";
import { useSubscription } from "@libs/useSubscription";
import { useSession } from "next-auth/react";

export default function SessionWrapper({ children }) {
    const { data: session } = useSession()

    const { subscription, isLoading } = useSubscription(session.user.email)

    if (isLoading) {
        return (
            <div className="page-wrap loading">
            </div>
        )
    }

    return (
        <div className={`page-wrap ${subscription.isActive ? 'subscribed' : ''}`}>
            {children}
        </div>
    )
}