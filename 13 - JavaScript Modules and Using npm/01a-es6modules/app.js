import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';
import User, { createURL, gravatar } from './src/user';

// console.log(apiKey, url);
// sayHi('Joey');

const ages = [1,1,4,52,12,4];

// console.log(uniq(ages));

const joey = new User('Joey Reyes', 'jreyes@klru.org', 'joeyreyes.com');

const profile = createURL(joey.name);

const image = gravatar(joey.email);
console.log(image);