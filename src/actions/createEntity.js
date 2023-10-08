import db from '../database/sqlite.js';

/**
 * creates entity which can be either person or relationship
 * @param {'person' | 'relationship'} entity
 * @param {string} name
 */
export default function createEntity(entity, name) {
  try {
    db.prepare(
      `
        CREATE TABLE IF NOT EXISTS ${entity} (
          id INTEGER PRIMARY KEY,
          name VARCHAR(10) UNIQUE
        );
      `
    ).run();
    db.prepare(`INSERT INTO ${entity} (name) VALUES ('${name}');`).run();
  } catch (error) {
    console.error(error);
  }
}
