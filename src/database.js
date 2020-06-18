import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'buy-and-sell-asdfasf',
    user: 'hapi-server-2',
    password: 'abc123!',
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) => new Promise(
        (resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            });
        }
    ),
    end: () => connection.end(),
}