import { openDB } from 'idb/with-async-ittr.js';

class LocalDb {
    constructor(name, version) {
        this.isReady = false;
    }

    async init(name, version) {
        this.db = await openDB(name, version, {
            upgrade(db) {
                db.createObjectStore('activities', { keyPath: 'id' })
                    .createIndex('start_date', 'start_date');
            },
        });
        this.isReady = true;
    }

    addActivities(oneOrSeveralObjs) {
        let tx = this.db.transaction('activities', 'readwrite');
        let store = tx.objectStore('activities');
        if (Array.isArray(oneOrSeveralObjs)) {
            return Promise.all([
                ...oneOrSeveralObjs.map(obj => tx.store.add(obj)),
                tx.done
            ]);
        }
        return tx.add('activities', oneOrSeveralObjs)
    }

    getAllActivity() {
        let tx = this.db.transaction('activities');
        let store = tx.objectStore('activities');
        return store.getAll();
    }
    clear() {
        let tx = this.db.transaction('activities', 'readwrite');
        let store = tx.objectStore('activities');
        return store.clear();
    }

}

const instance = new LocalDb();
export default instance;
