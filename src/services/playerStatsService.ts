/**
 * Player Statistics Service
 * Provides methods for retrieving and analyzing player performance metrics
 */

import db from '../db';

interface PlayerStats {
  playerId: string;
  name: string;
  runs: number;
  wickets: number;
  average: number;
  strikeRate: number;
  matchesPlayed: number;
}

class PlayerStatsService {
  /**
   * Get player statistics by ID
   */
  async getPlayerStats(playerId: string): Promise<PlayerStats | null> {
    try {
      const query = `
        SELECT p.id, p.name, 
               COALESCE(SUM(b.runs), 0) as runs,
               COALESCE(SUM(b.wickets), 0) as wickets,
               COALESCE(AVG(b.average), 0) as average,
               COALESCE(AVG(b.strike_rate), 0) as strikeRate,
               COUNT(DISTINCT b.match_id) as matchesPlayed
        FROM players p
        LEFT JOIN batting_stats b ON p.id = b.player_id
        WHERE p.id = $1
        GROUP BY p.id, p.name
      `;
      
      const result = await db.query(query, [playerId]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error fetching player stats:', error);
      throw new Error('Failed to fetch player statistics');
    }
  }

  /**
   * Get top players by runs
   */
  async getTopPlayersByRuns(limit: number = 10): Promise<PlayerStats[]> {
    try {
      const query = `
        SELECT p.id, p.name,
               COALESCE(SUM(b.runs), 0) as runs,
               COALESCE(SUM(b.wickets), 0) as wickets,
               COALESCE(AVG(b.average), 0) as average,
               COALESCE(AVG(b.strike_rate), 0) as strikeRate,
               COUNT(DISTINCT b.match_id) as matchesPlayed
        FROM players p
        LEFT JOIN batting_stats b ON p.id = b.player_id
        GROUP BY p.id, p.name
        ORDER BY runs DESC
        LIMIT $1
      `;
      
      const result = await db.query(query, [limit]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching top players:', error);
      throw new Error('Failed to fetch top players');
    }
  }

  /**
   * Get player comparison statistics
   */
  async comparePlayersPerformance(playerIds: string[]): Promise<PlayerStats[]> {
    try {
      const placeholders = playerIds.map((_, i) => `$${i + 1}`).join(',');
      const query = `
        SELECT p.id, p.name,
               COALESCE(SUM(b.runs), 0) as runs,
               COALESCE(SUM(b.wickets), 0) as wickets,
               COALESCE(AVG(b.average), 0) as average,
               COALESCE(AVG(b.strike_rate), 0) as strikeRate,
               COUNT(DISTINCT b.match_id) as matchesPlayed
        FROM players p
        LEFT JOIN batting_stats b ON p.id = b.player_id
        WHERE p.id IN (${placeholders})
        GROUP BY p.id, p.name
      `;
      
      const result = await db.query(query, playerIds);
      return result.rows;
    } catch (error) {
      console.error('Error comparing players:', error);
      throw new Error('Failed to compare player statistics');
    }
  }
}

export default new PlayerStatsService();
