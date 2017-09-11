import * as promise from 'bluebird';
import { IDatabase, IMain } from 'pg-promise';
import * as pgPromise from 'pg-promise';

class DatabaseContext {
    public database: IDatabase<any>;
    public pgpromise: IMain;

    constructor() {
        // Init & connection options
        const connectionJSON = require('../../dbconfig.json');
        const connectionOptions = connectionJSON;
        const initOptions = {
            promiseLib: promise,
        };

        // Instantiate pg-promise with bluebird
        let pgp = pgPromise(initOptions);

        this.database = pgp(connectionOptions);
    }
}

const databaseContext = new DatabaseContext();
export const database = databaseContext.database;
export const pgpromise = databaseContext.pgpromise;