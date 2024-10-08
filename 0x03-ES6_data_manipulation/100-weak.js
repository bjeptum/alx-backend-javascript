export const weakMap = new WeakMap();

// Export queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is an object
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint');
  }

  // Check if the endpoint is already in WeakMap
  let count = weakMap.get(endpoint) || 0;

  // Increment count for the endpoint
  count += 1;

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);

  // Check if  count is 5 or greater
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
