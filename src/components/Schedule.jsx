import React from "react";
import "./Schedule.css"
import GameCard from "./GameCard"

const Schedule = () => {
    return (
        <div className="Schedule">
            <h2 className="schedule-heading">March Schedule</h2>
            <div className="grid">
                <GameCard team='OKC Thunder' date='3/1' time='5:00 PM'/>
                <GameCard team='MIN Timberwolves' date='3/3' time='7:30 PM'/>
                <GameCard team='GS Warriors' date='3/5' time='12:30 PM'/>
                <GameCard team='MEM Grizzlies' date='3/7' time='7:00 PM'/>
                <GameCard team='TOR Raptors' date='3/10' time='7:30 PM'/>
                <GameCard team='NY Knicks' date='3/12' time='6:00 PM'/>
                <GameCard team='NO Pelicans' date='3/14' time='5:00 PM'/>
                <GameCard team='HOU Rockets' date='3/15' time='5:00 PM'/>
                <GameCard team='DAL Mavericks' date='3/17' time='7:30 PM'/>
                <GameCard team='ORL Magic' date='3/19' time='6:30 PM'/>
            </div>
        </div>
    )
}

export default Schedule;