import React from 'react'

function Members() {
  return (
   <>
     <header>
        <nav>
            <div class="top-nav">
                <div onclick="openSideMenu()" class="nav-menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <div class="nav-items">
                    <div class="nav-links">
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="events.html">Events</a></li>
                            <li><a href="members.html">Team</a></li>
                            <li><a href="about.html">About</a></li>
                        </ul>
                    </div>
                    <div class="phone">
                        <a href="tel:+254768133220">
                            <i class="fa-solid fa-phone"></i>
                            <span>+254768133220</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <main>
        <div class="members-title">
            <p>Members</p>
        </div>
        <section>
            <div class="members-page-tab">
                <div class="event-tab-page-tab-buttons">
                    <button class="tab-page-btn current" onclick="openTab(event, 'teachers')">Teachers</button>
                    <button class="tab-page-btn" onclick="openTab(event, 'students')">Students</button>
                    <button class="tab-page-btn" onclick="openTab(event, 'collaborators')">Collaborators</button>
                    <button class="tab-page-btn" onclick="openTab(event, 'guests')">Guests</button>
                </div>
                <div class="tabcontent active" id="teachers">

                    <div class="columns">

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tabcontent" id="students">

                    <div class="columns">

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tabcontent" id="collaborators">

                    <div class="columns">

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="tabcontent" id="guests">

                    <div class="columns">

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                        <div class="card">
                            <div class="profile-pic">
                                <img src="images/uploaded-images/profiles/profile.png"
                                    alt=""></img>
                            </div>
                            <img src="images/uploaded-images/course.png" alt=""></img>
                            <div class="profile-content">
                                <p>Valentine Omonya</p>
                                <span>Nairobi, Kenya</span>
                                <span>38k followers</span>
                                <button><i class="fa fa-plus" aria-hidden="true"></i>Follow</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </main>
    {/* <!--============================
   FOOTER SECTION
   ============================ --> */}
    <footer id="footer" class="footer">
        <div class="copyright">
            <p> © Copyright <strong>Deval Academy</strong>. All Rights Reserved</p>
        </div>

        <div class="credits">
            <p> Designed by <a href="https://youtube.com/@devalentineomonya" target="_blank">Valentine Omonya</a></p>
        </div>
    </footer>
   </>
  )
}

export default Members
