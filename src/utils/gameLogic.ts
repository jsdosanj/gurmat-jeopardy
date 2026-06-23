import type { Team } from '../types'

export function makeTeams(names: string[]): Team[] {
  return names.map((name, i) => ({ id: i, name, score: 0 }))
}

export function getWinners(teams: Team[]): Team[] {
  if (teams.length === 0) return []
  const max = Math.max(...teams.map(t => t.score))
  return teams.filter(t => t.score === max)
}

export function nextIndex(current: number, total: number): number {
  return (current + 1) % total
}
