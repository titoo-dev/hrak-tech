import { Suspense } from 'react';
import { HeroSectionDynamic } from './HeroSectionDynamic';

export default function HeroServer() {
    return (
        <Suspense fallback={
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#1B473F] to-[#2d5a52] pt-24">
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-pulse">
                        <div className="flex justify-center mb-4">
                            <div className="h-8 w-48 bg-white/10 rounded-full"></div>
                        </div>
                        <div className="space-y-4 mb-6">
                            <div className="h-12 w-3/4 bg-white/10 rounded mx-auto"></div>
                            <div className="h-12 w-2/3 bg-white/10 rounded mx-auto"></div>
                        </div>
                        <div className="h-6 w-1/2 bg-white/10 rounded mx-auto mb-10"></div>
                        <div className="h-14 w-40 bg-[#40DECF]/20 rounded-2xl mx-auto"></div>
                    </div>
                </div>
            </section>
        }>
            <HeroSectionDynamic />
        </Suspense>
    );
}