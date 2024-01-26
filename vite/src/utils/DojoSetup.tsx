import React, { useState } from 'react';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { DojoProvider } from '@/dojo/DojoContext';
import { setup } from '@/dojo/setup';

export const DojoSetup = ({ children }) => {
    const [setupResult, setSetupResult] = useState(null)
    
        useEffectOnce(() => {
        let _mounted = true
        const _setup = async () => {
            const result = await setup()
            if (_mounted) {
            setSetupResult(result)
            }
        }
        _setup()
        return () => {
            _mounted = false
        }
        }, [])
    
        // if (!setupResult) {
        // return <h1>setup...</h1>
        // }
    
        return (
            <DojoProvider value={setupResult}>
                {children}
            </DojoProvider>
        );
}