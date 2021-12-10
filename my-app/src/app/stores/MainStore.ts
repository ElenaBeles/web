import {UserStore} from "./UserStore";
import {CollectionStore} from "./CollectionStore";

class MainStore {
    userStore: UserStore;
    collectionStore: CollectionStore;


    constructor() {
        this.userStore = new UserStore(this);
        this.collectionStore = new CollectionStore(this);
    }

}

export const mainStore = new MainStore();

export default mainStore;

export { MainStore };

