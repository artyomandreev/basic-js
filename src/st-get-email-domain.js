import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let domains = email.split("@").slice(1);

  for (let i = 0; i < domains.length; i++) {
    if (domains[i].substring(0, 1) !== ".") {
      return domains[i];
    }
  }
}
