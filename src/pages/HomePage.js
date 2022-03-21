import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feed from "../components/Feed";
import Filter from "../components/Filter";
import { LOAD_POSTS } from "../redux/actions/posts";

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  var page = 0;

  useEffect(() => {
    dispatch(LOAD_POSTS(page));
  }, [dispatch]);
  const first = useRef();
  console.log(first);
  // const observer = useRef(new IntersectionObserver(()=>{},{threshold:1}))
  // const handleScroll = (e) => {
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 5 >=
  //       e.target.documentElement.scrollHeight
  //   ) {
  //     page = page + 10;
  //     dispatch(LOAD_POSTS(page));
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <section className="postcard">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-3">
              <Filter />
            </div>
            <div ref={first} className="col-md-5">
              {posts.map((user) => (
                <Feed user={user} />
              ))}
            </div>
            <div className="col-md-4 second-column">
              <div className="second-slide">
                <div className="upcoming">
                  <h3>Upcoming Auditions</h3>
                  <div id="owl-demo" className="owl-carousel owl-theme">
                    <div className="item">
                      <img src="./assests/images/image-1.jpg" alt="" />
                      <div className="shareaudition">
                        <div className="submitbutton">
                          <h5>Apply Now</h5>
                        </div>
                        <div className="shareimage">
                          <i className="bi bi-share"></i>Share
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <img src="./assests/images/image-2.jpg" alt="" />
                      <div className="shareaudition">
                        <div className="submitbutton">
                          <h5>Apply Now</h5>
                        </div>
                        <div className="shareimage">
                          <i className="bi bi-share"></i>Share
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <img src="./assests/images/image-3.jpg" alt="" />
                      <div className="shareaudition">
                        <div className="submitbutton">
                          <h5>Apply Now</h5>
                        </div>
                        <div className="shareimage">
                          <i className="bi bi-share"></i>Share
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <img src="./assests/images/image-1.jpg" alt="" />
                      <div className="shareaudition">
                        <div className="submitbutton">
                          <h5>Apply Now</h5>
                        </div>
                        <div className="shareimage">
                          <i className="bi bi-share"></i>Share
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <img src="./assests/images/image-2.jpg" alt="" />
                      <div className="shareaudition">
                        <div className="submitbutton">
                          <h5>Apply Now</h5>
                        </div>
                        <div className="shareimage">
                          <i className="bi bi-share"></i>Share
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <img src="./assests/images/image-3.jpg" alt="" />
                      <div className="shareaudition">
                        <div className="submitbutton">
                          <h5>Apply Now</h5>
                        </div>
                        <div className="shareimage">
                          <i className="bi bi-share"></i>Share
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="suggestions">
                  <div className="allsuggest">
                    <h3>Suggestions For You</h3>
                    <p>
                      <a href="search-page.html">Sell All</a>
                    </p>
                  </div>
                  <div className="suggestprofile">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="suggestpeople">
                          <img
                            src="./assests/images/profile/sugg-1.png"
                            alt=""
                          />
                          <div className="suggestname">
                            <h4>Deepika pilli</h4>
                            <p>
                              <img
                                src="./assests/images/profile/popular.png"
                                alt=""
                              />
                              Popular
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="profile-button middle">
                          <h4>+ Follow</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suggestprofile">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="suggestpeople">
                          <img
                            src="./assests/images/profile/sugg-1.png"
                            alt=""
                          />
                          <div className="suggestname">
                            <h4>Deepika pilli</h4>
                            <p>
                              <img
                                src="./assests/images/profile/popular.png"
                                alt=""
                              />
                              Popular
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="profile-button middle">
                          <h4>+ Follow</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suggestprofile">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="suggestpeople">
                          <img
                            src="./assests/images/profile/sugg-1.png"
                            alt=""
                          />
                          <div className="suggestname">
                            <h4>Deepika pilli</h4>
                            <p>
                              <img
                                src="./assests/images/profile/popular.png"
                                alt=""
                              />
                              Popular
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="profile-button middle">
                          <h4>+ Follow</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="suggestprofile">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="suggestpeople">
                          <img
                            src="./assests/images/profile/sugg-1.png"
                            alt=""
                          />
                          <div className="suggestname">
                            <h4>Deepika pilli</h4>
                            <p>
                              <img
                                src="./assests/images/profile/popular.png"
                                alt=""
                              />
                              Popular
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="profile-button middle">
                          <h4>+ Follow</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="policies">
                  <div className="conditions">
                    <p>Terms & Conditions</p>
                  </div>
                  <div className="conditions">
                    <p>Help</p>
                  </div>
                  <div className="conditions">
                    <p>Privacy Policies</p>
                  </div>
                  <div className="conditions">
                    <p>Language</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
