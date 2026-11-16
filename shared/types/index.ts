export const workspaceNames = ['frontend', 'backend', 'shared'] as const;

export type WorkspaceName = (typeof workspaceNames)[number];
