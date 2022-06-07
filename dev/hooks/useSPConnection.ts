import { useMemo } from 'react';
import BaseService from '../../src/services/BaseService';
import { spfi, SPBrowser } from '@pnp/sp';
import { MSAL } from "@pnp/msaljsclient";
import { AuthenticationParameters, Configuration } from "msal";
import envConfig from '../../enviroment';

export function useSPConnection() {
    const configuration: Configuration = {
        auth: {
            authority: envConfig.AUTHORITY,
            clientId: envConfig.CLIENT_ID,
        },
        cache: {
            storeAuthStateInCookie: false,
        }
    }

    const authParams: AuthenticationParameters = {
        scopes: [envConfig.SCOPE]
    }

    const bs = useMemo<BaseService>(() => {
        const sp = spfi().using(
            SPBrowser({
                baseUrl: envConfig.BASE_URL
            }), 
            MSAL(configuration, authParams)
        );
        return new BaseService(sp);
    }, []);

    return bs;
}