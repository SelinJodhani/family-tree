import db from '../database/sqlite.js';

/**
 * get the father name of given name
 * @param {string} name
 * @returns {{name1: string, name2: string} | {}}
 */
export default function getFatherOf(name) {
  return (
    db
      .prepare(
        `SELECT name1, name2 FROM connections WHERE (name2='${name}' AND relationship='father') OR (name1='${name}' AND (relationship='son' OR relationship='daughter'));`
      )
      .get() ?? {}
  );
}
