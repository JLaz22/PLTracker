import React, { useEffect, useState } from "react";
import { fetchMatches} from "../api";
import { Match } from "../type";

const MatchList: React.FC = () => {

    const[matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchMatches().then((data) => {
            setMatches(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>

    return(
        <div className="p-4">
            <h2 className="text-2x1 font-bold mb-4"></h2>
            <ul>
                {matches.map((match, index) => (
                    <li key={index} className="border-b py-2">
                        {match.homeTeam.name} vs {match.awayTeam.name} -
                        {match.score.fullTime.home ?? "?"} : {match.score.fullTime.away ?? "?"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MatchList;