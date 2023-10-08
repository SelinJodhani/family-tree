import db from '../database/sqlite.js';

/**
 * creates connection between two persons with given relationship
 * ex: family-tree connect raj as son of selin
 * @param {string} name1
 * @param {*} _
 * @param {string} relationship
 * @param {*} __
 * @param {string} name2
 */
export default function createConnection(name1, _, relationship, __, name2) {
  try {
    /**
     * checking if given fields present in db or not.
     * if not then throw error
     */
    const { id: name1Id } = db.prepare(`SELECT id FROM person WHERE name='${name1}'`).get() ?? {};

    if (!name1Id) {
      throw new Error(`person "${name1}" doesn't exist. please add it using add command!`);
    }

    const { id: name2Id } = db.prepare(`SELECT id FROM person WHERE name='${name2}'`).get() ?? {};

    if (!name2Id) {
      throw new Error(`person "${name2}" doesn't exist. please add it using add command!`);
    }

    const { id: relationshipId } =
      db.prepare(`SELECT id FROM relationship WHERE name='${relationship}'`).get() ?? {};

    if (!relationshipId) {
      throw new Error(
        `relationship ${relationship} doesn't exist. please add it using add command!`
      );
    }

    db.prepare(
      `
        CREATE TABLE IF NOT EXISTS connections (
          id INTEGER PRIMARY KEY,
          name1 VARCHAR(10),
          relationship VARCHAR(10),
          name2 VARCHAR(10)
        );
      `
    ).run();

    const { id: connectionId } =
      db
        .prepare(
          `SELECT id FROM connections WHERE relationship='${relationship}' AND ((name1='${name1}' AND name2='${name2}') OR (name2='${name1}' AND name1='${name2}'));`
        )
        .get() ?? {};

    /**
     * checking for existing connection with given names, if it exist already throw error
     */
    if (connectionId) {
      throw new Error('connection already present!');
    }

    db.prepare(
      `INSERT INTO connections (name1, relationship, name2) VALUES ('${name1}','${relationship}','${name2}');`
    ).run();
  } catch (error) {
    console.error(error);
  }
}
