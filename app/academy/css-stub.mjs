// Node loader hook for scripts that import app modules: stylesheet imports become empty modules.
import { register } from 'node:module'
register('data:text/javascript,' + encodeURIComponent(`
export async function load(url, context, next) {
  if (url.endsWith('.css')) return { format: 'module', source: '', shortCircuit: true }
  return next(url, context)
}`))
