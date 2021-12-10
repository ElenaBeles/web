import { useContext } from 'react';
import { MainStore } from '../stores/MainStore';
import { MobXProviderContext } from 'mobx-react';


export function useStores(): MainStore {
    return useContext(MobXProviderContext) as MainStore;
}