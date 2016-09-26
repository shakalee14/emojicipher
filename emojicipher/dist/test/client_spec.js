import mocha from 'mocha';
import chai from 'chai';
import expect from 'expect';

import { getAllLetters } from '../public/javascripts/client.js';

describe('getAllLetters', () => {
  it('does what its supposed to', () => {
    expect(getAllLetters()).toEqual();
  });
});