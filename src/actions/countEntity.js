import db from '../database/sqlite.js';

/**
 * counts number of entities which available for given name
 * ex: family-tree count sons of selin
 * @param {string} entity
 * @param {string} name
 * @returns {{'COUNT(*)': number} | {}}
 */
export default function countEntity(entity, name) {
  return (
    db
      .prepare(
        `SELECT COUNT(*) FROM connections WHERE name2='${name}' AND relationship='${entity}';`
      )
      .get() ?? {}
  );
}
