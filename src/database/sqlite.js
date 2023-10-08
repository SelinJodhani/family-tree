import sqlite3 from 'better-sqlite3';

export default sqlite3('family-tree.db', { verbose: console.log });
