import { helper } from '@ember/component/helper';
import { isEqual } from '@ember/utils';

export function eq(val) {
  return isEqual(val[0], val[1]);
}

export default helper(eq);
