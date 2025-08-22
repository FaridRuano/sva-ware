'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ModalInfo from './modals/ModalInfo';

const CourseAccessGuard = ({ productId, userEmail, children }) => {
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (!productId || !userEmail) {
            setHasAccess(false);
            setLoading(false);
            return;
        }
        axios.get(`/api/client/data?email=${userEmail}&action=purchases`)

            .then(res => {
                const purchasedProducts = res.data?.purchasedProducts || [];
                const bought = purchasedProducts.some(p => p.product === productId);

                const subscriptionActive = res.data?.subscription?.isActive;

                setHasAccess(bought || subscriptionActive);
            })
            .catch(() => setHasAccess(false))
            .finally(() => setLoading(false));
    }, [productId, userEmail]);

    if (loading) {
        return <div></div>;
    }

    if (!hasAccess) {
        // Optionally redirect:
        // router.replace('/client');
        return (
            <ModalInfo mainText={"No tienes acceso a este curso."} active={true} setActive={() => router.push('/client')} />
        )
    }

    return <>{children}</>;
};

export default CourseAccessGuard;