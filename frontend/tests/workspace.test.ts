import { expect, test } from 'vitest';

import { type WorkspaceName, workspaceNames } from '@shared/types';

test('includes the frontend workspace in the shared names', () => {
  const workspace: WorkspaceName = 'frontend';

  expect(workspaceNames).toContain(workspace);
});
