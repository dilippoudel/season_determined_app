import './season.css';
import React from 'react';
const seasonConfig = {
    summer: {
        text: "Let's hit beach!!",
        iconName: "sun"
    },
    winter: {
        text: "Burr, it is chilly.",
        iconName: "snowflake"
    }
}

const getSeason = (lat, month)=> {
if(month > 2 && month < 9){
   return lat > 0 ? 'summer' : 'winter';
}
else {
    return lat > 0 ? 'winter' : 'summer';
}
}



const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
 const {text, iconName} = seasonConfig[season];

    return (
        <React.Fragment>
        <div className={`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`}/>
            {/* massive is written to make the icon size large and its a part of classname. */}
      <h1>{text}</h1>
      <i className = {`icon-right massive ${iconName} icon`}/>

        </div>
        </React.Fragment>
        )
    }
export default SeasonDisplay;