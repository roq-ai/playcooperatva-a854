const mapping: Record<string, string> = {
  businesses: 'business',
  categories: 'category',
  directories: 'directory',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
