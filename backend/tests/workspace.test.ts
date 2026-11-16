import { expect, test } from 'vitest';

import { type WorkspaceName, workspaceNames } from '@shared/types';

test('includes the backend workspace in the shared names', () => {
  const workspace: WorkspaceName = 'backend';

  expect(workspaceNames).toContain(workspace);
});
