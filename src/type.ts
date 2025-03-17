export interface Match{
    homeTeam: {
        name: string;
    };

    awayTeam: {
    name: string;
    };
    score: {
        fullTime: {
            home: number | null;
            away: number | null;
        };
    };
}