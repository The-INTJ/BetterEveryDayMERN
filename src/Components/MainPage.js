import React from 'react';
import '../css/main-page.css';

const MainPage = (props) => {
    return (
        //------------------

        <div>


            <div id="flex-cont">
                <div id="could-be-cont">
                    <h1><em>WHAT COULD YOU BE?</em></h1>
                    <h3>The Premise</h3>
                    <p>Have you ever felt like you wanted to be better, but there was just too much to do? Have you ever looked at a dirty room,
                        a messy house, or failing relationships and had no idea how to fix it all? Well then this is the website for you!
                        Here at Better Every Day, we believe that small, consistent change can bring about the greatest improvements in one's life. Check out the facts below!</p>
                </div>

                <div id="details">

                    <div className="some-padding" id="the-math">
                        <div id="math-svg">
                            <h2>The Math</h2>
                        </div>
                        <p>Imagine that you wake up, you decide to do the smallest task. Maybe you just wash some cups you used, and you wouldn't normally have done that.
                            Let's say that was 1% better than the day before. Not too much, right? Well, guess what happens if you keep doing that? What if you are 1% better every single
                            day? Check it out:
                        </p>
                        <p>1 x 1.01^365 = 37!</p>
                    </div>

                    <span className="neon-divide"></span>

                    <div className="some-padding" id="the-tracker">
                        <div id="diamond-svg">
                            <h2><a href="tracker.php">The Tracker</a></h2>
                        </div>
                        <p>Our Tracker allows you to do this! You can mark habits you want to keep, or small goals you want to do that day, and check them off.
                            Better yet, you then get to see a constant score of how much better you've become!
                        </p>
                    </div>

                    <span className="neon-divide"></span>

                    <div className="some-padding" id="the-fax">
                        <div id="fax-svg">
                            <h2>The Fax</h2>
                        </div>
                        <p>Imagine that you wake up, you decide to do the smallest task. Maybe you just wash some cups you used, and you wouldn't normally have done that.
                            Let's say that was 1% better than the day before. Not too much, right? Well, guess what happens if you keep doing that? What if you are 1% better every single
                            day? Check it out:
                        </p>
                        <p>1 x 1.01^365 = 37!</p>
                    </div>
                </div>
            </div>
        </div>


        //------------------
    )
}

export default MainPage;