import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';
import chai from 'chai';
import spies from 'chai-spies';

import '@testing-library/jest-dom';
import { configure } from '@testing-library/react';

chai.use(spies);
expect.extend(matchers);

configure({ testIdAttribute: 'data-test' });
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
