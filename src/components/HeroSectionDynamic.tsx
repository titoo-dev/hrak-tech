'use client';

import dynamic from 'next/dynamic';

// Dynamically import the HeroSection component with no SSR
export const HeroSectionDynamic = dynamic(() => import('./HeroSection'), {
    ssr: false,
    loading: () => (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1B473F] to-[#2d5a52] pt-24">
            <div className="bg-gradient-animated absolute inset-0 bg-gradient-to-r from-[#40DECF]/20 via-transparent to-[#9DF4F2]/20" style={{backgroundSize: '200% 200%'}}></div>
        </section>
    )
});