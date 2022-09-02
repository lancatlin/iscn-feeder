export function getName(query) {
  const name = Object.entries(query).map(([_, value]) => `${value}`).join(' ');
  return `ISCN Feed - ${name || 'World Feed'}`;
}
