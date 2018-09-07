// This script generates mock data for local development.

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './userDataSchema.js';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', function(){
  var faker = require('faker');
  faker.locale = "en"; // or any other language
  return faker;
});

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/restApi/userData.mock.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));

  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
