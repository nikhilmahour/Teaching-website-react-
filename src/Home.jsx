import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
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
                                    {/* <li><Link to="about.html">About</Link></li> */}
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
                {/* <!-- ==============================
                HERO SECTION
============================== --> */}
                <section>
                    <div className="hero">
                        <p>Take Your Skills <br />To the next Level.</p>
                        <div className="get-started">
                            <a href="#" className="btn-get-started">
                                <span>Get Started</span>
                                <i className="fas fa-arrow-right "></i>
                            </a>
                        </div>
                    </div>
                </section>
                {/* <!-- ==============================
COURSE SECTION
============================== --> */}
                <section>
                    <div className="course-upper-section">
                        <p>We offer the best courses for you.</p>
                        <button href="#">Choose your best course</button>
                    </div>
                    <div className="columns">

                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>

                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>

                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>

                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>
                        <div className="card">
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="card-content">
                                <p>UX Design Program</p>
                                <p>Design&#46;6th September</p>
                                <a href="view-more.html">View More</a>
                                <span>I+D</span>
                                <span>Accessibility</span>
                                <span>Design</span>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!--=============================
         TEACHERS SECTION
         ==============================--> */}

                <section>
                    <div className="course-upper-section">
                        <p>The best active trainers are here</p>
                    </div>

                    <div className="columns">

                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/.profpng" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png" alt="" />
                            </div>
                            <img src="images/uploaded-images/course.png" alt="" />
                            <div className="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i className="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            {/* <!--============================
   FOOTER SECTION
   ============================ --> */}
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

export default Home
