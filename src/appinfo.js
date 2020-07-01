import React from 'react';
const appinfo = ()=>{
    return(
        <div>
            <h3>Here's how the app works :</h3>
            <p>1.You need to enter a number in the below input field and submit</p>
            <p>2.on each submit it will generate a random number from 1-100 for you</p>
            <p>3.later it will find the difference of random number generated and the number you entered</p>
            <p>4.If the diff is zero.It will display Correct in green color</p>
            <p>5.If the diff is 1-4.It will display Hot in red color</p>
            <p>6.If the diff is 5-15.It will display Warm in yellow color</p>
            <p>7.In all other cases it will display Cool in blue color</p>
            <p>8.If you get correct,another set of similar components shows up on the screen and the range increases by 100 and so on</p>


        </div>
    )
}

export default appinfo;