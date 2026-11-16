import { expect, test } from 'vitest';

import { type WorkspaceName, workspaceNames } from '../types';

test('includes the shared workspace in the shared names', () => {
  const workspace: WorkspaceName = 'shared';

  expect(workspaceNames).toContain(workspace);
});
