import React from 'react'

function Events() {
  return (
     <>
            <header>
                <nav>
                    <div className="top-nav">
                        <div onclick="openSideMenu()" className="nav-menu">
                            <i className="fa-solid fa-bars"></i>
                        </div>
                        <div className="nav-items">
                            <div className="nav-links">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="events.html">Events</a></li>
                                    <li><a href="members.html">Team</a></li>
                                    <li><a href="about.html">About</a></li>
                                </ul>
                            </div>
                            <div className="phone">
                                <a href="tel:+254768133220">
                                    <i className="fa-solid fa-phone"></i>
                                    <span>+254768133220</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {/* <!--
                =========================
                EVENTS HERO SECTION
         ========================= --> */}

                <section>
                    <div className="events-hero">
                        <div className="event-hero-grid">
                            <div className="events-hero-left">
                                <p>Go even further <br />than you ever <br />dreamed.</p>
                            </div>
                            <div className="wrapper">
                                <i id="left" className="fa-solid fa-angle-left"></i>
                                <ul className="carousel">

                                    <li className="card">
                                        <p>EVENT</p>
                                        <p>Congnitive Development beyond 60</p>
                                        <span>June 15 - 20th</span>
                                        <span>Face-to-face</span>
                                        <a href="#">Enroll Today</a>
                                    </li>

                                </ul>
                                <i id="right" className="fa-solid fa-angle-right"></i>
                            </div>



                        </div>
                    </div>

                 </section> 
            

            {/* <!--========================
                TAB PAGE SECTION
         ==========================--> */}
            <section>
                <div className="events-tab-page">
                    <div className="event-tab-page-tab-buttons">
                        <button className="tab-page-btn" onclick="openTab(event, 'presentation')">Presentations</button>
                        <button className="tab-page-btn" onclick="openTab(event, 'workshops')">Workshops</button>
                        <button className="tab-page-btn" onclick="openTab(event, 'events')">Events</button>
                        <button className="tab-page-btn" onclick="openTab(event, 'activities')">Activities</button>
                    </div>
                    <div className="event-page-filter">
                        <button id="btn2" className="toggle-btn">All</button>
                        <button id="btn1" className="toggle-btn">Today</button>
                        <button id="btn3" className="toggle-btn">Tomorrow</button>
                        <button id="btn4" className="toggle-btn">This week</button>
                        <button id="btn5" className="toggle-btn">This weekend</button>
                        <button id="btn6" className="toggle-btn">Next week</button>
                        <button id="btn7" className="toggle-btn">This month</button>
                        <button id="btn8" className="toggle-btn">Next month</button>
                    </div>
                    <div className="event-page-grid">
                        <div className="events-page-grid-left-side">
                            <div className="events-page-left-filter">
                                <form action="">
                                    <div className="events-filter-columns">

                                        <div className="month-filter">
                                            <label for="month">Month</label>
                                            <select>
                                                <option selected="selected" className="option">Select</option>
                                                <option className="option">January</option>
                                                <option className="option">February</option>
                                                <option className="option">March</option>
                                                <option className="option">April</option>
                                                <option className="option">June</option>
                                                <option className="option">July</option>
                                                <option className="option">August</option>
                                                <option className="option">September</option>
                                            </select>
                                        </div>
                                        <div className="category-filter">
                                            <label for="category">Category</label>
                                            <select>
                                                <option selected="selected" className="option">Select</option>
                                                <option className="option">E-learning</option>
                                                <option className="option">Videogames</option>
                                                <option className="option">I+D</option>
                                                <option className="option">Design</option>
                                                <option className="option">Photography</option>
                                                <option className="option">Typography</option>
                                                <option className="option">UX Design</option>
                                                <option className="option">Accessibility</option>
                                                <option className="option">Social Media</option>
                                                <option className="option">Education</option>
                                                <option className="option">Virtual reality</option>
                                                <option className="option">Augmented reality</option>
                                                <option className="option">Cinema</option>
                                            </select>
                                        </div>
                                        <div className="other-filter">
                                            <div className="no-online">
                                                <input id="radio-btn1" type="radio" name="location" value="pyhsical" ></input>
                                                <label for="pyhsical">Online Free</label>
                                            </div>
                                            <div className="online">
                                                <input id="radio-btn2" type="radio" name="location" value="online" ></input>
                                                <label for="online">Online</label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="events-page-grid-right-side">
                            <div id="presentation" className="tabcontent">
                                {/* <!-- Content for Presentation tab --> */}
                                <div className="card-row">

                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>




                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>




                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div id="workshops" className="tabcontent">
                                {/* <!-- Content for Workshops tab --> */}
                                <div className="card-row">

                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
// " alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>


                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>

                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div id="events" className="tabcontent">
                                {/* <!-- Content for Events tab --> */}
                                <div className="card-row">

                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>


                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png
" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>

                                    <div className="events-card">
                                        <div className="events-card-grid">
                                            <div className="date-section">
                                                <p>6</p>
                                                <span>Jun</span>
                                                <i onclick=" openGoogleCalendar()" className="fas fa-calendar-plus"></i>
                                                <span className="cal-tooltip">Add to Calendar</span>
                                            </div>
                                            <div className="event-name">
                                                <p>Social media in educational environments</p>
                                                <span>Friday 20th - 21st</span>
                                                <span>Online</span>
                                                <a href="view-more.html">View More</a>
                                            </div>
                                            <div className="event-image">
                                                <img src="images/uploaded-images/lessonsimage/event-1.png" alt="" width="150"></img>
                                            </div>
                                        </div>
                                        <div className="event-features">
                                            <span>E-Learning</span>
                                            <span>Accessability</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div id="activities" className="tabcontent">
                                {/* <!-- Content for Activities tab --> */}
                                <div className="card-row">
                                    <div></div>
                                    <div></div>
                                    <div className="empty-tab">
                                        <div className="exclamation-icon">
                                            <i className="fa fa-exclamation" aria-hidden="true"></i>
                                        </div>
                                        <span>No result</span>
                                        <p>
                                            There are no activities scheduled for the next few months.
                                            Sorry for the inconvenience.</p>
                                    </div>

                                    <div></div>
                                    <div></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </main >
            {/* <!--============================ */ }
    {/* FOOTER SECTION */ }
    {/* ============================ --> */ }
    <footer id="footer" className="footer">
        <div className="copyright">
            <p> © Copyright <strong>Deval Academy</strong>. All Rights Reserved</p>
        </div>

        <div className="credits">
            <p> Designed by <a href="https://youtube.com/@devalentineomonya" target="_blank">Valentine Omonya</a></p>
        </div>
    </footer>
        </>
  )
}

export default Events
