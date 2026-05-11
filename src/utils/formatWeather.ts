export function formatTemperature(value: number) {
  return `${Math.round(value)}°C`;
}

export function formatWindSpeed(value: number) {
  return `${value.toFixed(1)} m/s`;
}

export function formatVisibility(value: number) {
  return `${(value / 1000).toFixed(1)} km`;
}

export function titleCase(value: string) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
