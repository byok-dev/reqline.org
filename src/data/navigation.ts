export interface NavItem {
  slug: string;
  title: string;
}

export interface NavGroup {
  group: string;
  items: NavItem[];
}

export const docsNav: NavGroup[] = [
  {
    group: 'Getting Started',
    items: [
      { slug: 'installation', title: 'Installation' },
      { slug: 'first-request', title: 'Your First Request' },
    ],
  },
  {
    group: 'Core Features',
    items: [
      { slug: 'request-configuration', title: 'Request Configuration' },
      { slug: 'body-types', title: 'Request Body' },
      { slug: 'authentication', title: 'Authentication' },
      { slug: 'environment-variables', title: 'Environment Variables' },
      { slug: 'collections', title: 'Collections' },
      { slug: 'response-viewer', title: 'Response Viewer' },
      { slug: 'keyboard-shortcuts', title: 'Keyboard Shortcuts' },
    ],
  },
  {
    group: 'Import & Export',
    items: [
      { slug: 'import-export', title: 'Import & Export' },
      { slug: 'bulk-execution', title: 'Bulk Execution' },
    ],
  },
  {
    group: 'Integrations',
    items: [
      { slug: 'mcp-server', title: 'MCP Server' },
      { slug: 'local-api-server', title: 'Local API Server' },
      { slug: 'headless-mode', title: 'Headless Mode' },
    ],
  },
];
