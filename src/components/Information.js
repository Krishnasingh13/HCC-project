import React from "react";
import { useSelector } from "react-redux";

const Information = () => {

  const { personalInfo,interestedInfo,skillsInfo,profile} = useSelector((state) => state.profile);

  return (
    <div className="candiate-about">
      <div className="actor-details">
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
          lectus ultrices, ultricies diam non, sagittis massa. Nulla pharetra
          nibh nunc. Phasellus mauris urna, laoreet vitae porta ut, tempor ut
          neque. Quisque quis gravida nisl. Duis et molestie sapien, quis
          elementum mi. Aliquam venenatis, nulla quis pellentesque cursus, magna
          justo consequat turpis, at congue sapien nisl ut quam. Donec viverra
          orci id fringilla sollicitudin. Nunc augue diam, sollicitudin quis
          volutpat molestie, molestie eget nisl. Nullam ac rutrum dolor,
          dignissim ullamcorper sem. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Mauris in porttitor
          urna. Curabitur dignissim lorem at lobortis molestie. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="candidate-info">
        {personalInfo?.length > 0 ? (
          personalInfo.map((e, i) => (
            <div key={i} className="row ">
              <div className="candidate-info">
                <h5>Personal Details</h5>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <span>Name</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{profile.user.first_name}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <span>Email</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>hyderabadcastingclub@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <span>Mobile Number</span> <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>7799234563</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Alternative Number</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.alternative_mobile_number}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>State</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>Telangana</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>District</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Live Location</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>Hyderabad</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Date of Birth</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.dob}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Height</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.height}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Weight</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.weight}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Bust</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.bust}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Hips</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.hips}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Skin Tone</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.skin_tone}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Eye Color</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.eye_color}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Shoe Size</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.shoe_size}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Dress Size</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.dresssize}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Gender</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.gender}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Profession</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>Actor</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Passport</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>Yes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Any Allergies to dust or cosmetics</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.any_allergies_to_dust_or_cosmetics}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Comfortable with timings</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.comfortable_with_timings}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>marital status</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>{e.marital_status}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="candidate-personal">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <p>
                        <span>Education</span>
                        <b>:</b>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>B.Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-md-5"></div>
        )}
      </div>
      <div className="candidate-info">
        <h5>Languages :</h5>
        <div className="interest-profile">
          <div className="row">
            <div className="col-md-12">
              <div className="candidate-personal">
                <div className="row justify-content-center">
                  <div className="col-md-3">
                    <p>
                      <span>Telugu</span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      <span>Hindhi</span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      <span>Tamil</span>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      <span>English</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="candidate-info">
        <h5>InterestedIn :</h5>
        <div className="interest-profile">
          {interestedInfo?.length > 0 ? (
            interestedInfo.map((e, i) => (
              <div key={i} className="row">
                <div className="col-md-6">
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Movies</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.movies}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>OTT</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.ott}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Tv serials</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.tv_serials}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Web series</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.web_series}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Music Album</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.music_albums}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Cover Song</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.cover_songs}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Item Song</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.item_song}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Modeling</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.modelling}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Photo shoot</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.photo_shoot}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Short films</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.short_films}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Anchoring</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.anchoring}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Character Artist</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.character_artist}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Junior Artist</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.junior_artist}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Singing</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.singing}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Background-Dancer</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.background_dancer}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Ramp Walks</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.ramp_shows}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Designer shoots</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.designer_shoots}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Calender shoots</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.calender_shoots}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Bikini Shoots</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.bikini_shoots}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Swim Suits</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.swim_suits}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Skirts</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.skirts}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Lingerie Shoot</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.lingerie_shoots}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Birthday Parties</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.birthday_party}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Wedding Event</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.wedding_event}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Promotion Event</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.promotion_event}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Hugs</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.hugs}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Kisses</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.kisses}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Normal Kisses</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.normal_kisses}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Lip lock</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.lip_lock}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Smooch</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.on_screen_smooch}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Semi Nude</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.semi_nude}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Backless</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.back_less}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Top less</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.top_less}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Bold Scenes</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.bold_scenes}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Smoke</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.on_screen_smoke}</p>
                      </div>
                    </div>
                  </div>
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Drink</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.on_screen_drink}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-5"></div>
          )}
        </div>
      </div>
      <div className="candidate-info">
        <h5>Skills</h5>
        <div className="interest-profile">
          {skillsInfo?.length > 0 ? (
            skillsInfo.map((e, i) => (
              <div key={i} className="row">
                <div className="col-md-6">
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Horse Riding</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.horse_riding}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Swimming</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.swimming}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Car driving</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.car_driving}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="candidate-personal">
                    <div className="row justify-content-center">
                      <div className="col-md-6">
                        <p>
                          <span>Bike driving</span>
                          <b>:</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>{e.bike_driving}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-md-5"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Information;
