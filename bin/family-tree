#! /usr/bin/env node

import { Argument, program } from 'commander';

import createEntity from './actions/createEntity.js';
import createConnection from './actions/createConnection.js';
import getFatherOf from './actions/getFatherOf.js';
import countEntity from './actions/countEntity.js';

program
  .command('add')
  .addArgument(
    new Argument('<entity>', 'entity can be either person or relationship').choices([
      'person',
      'relationship',
    ])
  )
  .argument('<name>', 'name of an entity')
  .description('add entity to a family-tree')
  .action(createEntity);

program
  .command('connect')
  .argument('<name1>')
  .addArgument(new Argument('<as>').choices(['as']))
  .argument('<relationship>')
  .addArgument(new Argument('<of>').choices(['of']))
  .argument('<name2>')
  .description('connect two persons with a relationship')
  .action(createConnection);

program
  .command('count')
  .addArgument(new Argument('<entity>').choices(['son', 'daughter', 'wife']))
  .addArgument(new Argument('<of>').choices(['of']))
  .argument('<name>')
  .description('count entities')
  .action((entity, _, name) => {
    const result = countEntity(entity, name);
    console.log(`${entity} of ${name}: `, result['COUNT(*)'] ?? 0);
  });

program
  .command('father')
  .addArgument(new Argument('<of>').choices(['of']))
  .argument('<name>')
  .description('get the father name of given person name')
  .action((_, name) => {
    const { name1, name2 } = getFatherOf(name);
    console.log(`father of ${name} is`, name1 === name ? name2 : name1);
  });

program.parse();
