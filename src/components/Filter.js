import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categories_list, gender_list, skills_list } from "../data";
import {
  LOAD_CITIES,
  LOAD_LANGUAGES,
  LOAD_STATES,
} from "../redux/actions/data";

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stateId, setStateId] = useState(0);
  const { languages, states, cities } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(LOAD_LANGUAGES());
    dispatch(LOAD_STATES());
    dispatch(LOAD_CITIES(stateId));
  }, [stateId]);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search`);
  };

  return (
    <div className="first-slide">
      <div className="upcoming">
        <div className="filter-form">
          <h3>Search Filters</h3>
          <form onSubmit={submitHandler}>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select id="roles" name="Categories">
                    <option value="">Categories</option>
                    {categories_list?.length > 0
                      ? categories_list.map((e, i) => (
                          <option value={e} key={i}>
                            {e.value}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select id="roles" name="role">
                    <option value="">Role</option>
                    <option name="dup">dup</option>
                    <option name="Lady getup">Lady getup</option>
                    <option name="gud">gud</option>
                    <option name="Insta fame">Insta fame</option>
                    <option name="Hero">Hero</option>
                    <option name="padding Hero">padding Hero</option>
                    <option name="Heroine">Heroine</option>
                    <option name="Padding Heroine">Padding Heroine</option>
                    <option name="padding artists">padding artists</option>
                    <option name="Foreigners">Foreigners</option>
                    <option name="Decent">Decent</option>
                    <option name="youtuber">youtuber</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select id="roles" name="gender">
                    <option value="">Gender</option>
                    {gender_list?.length > 0
                      ? gender_list.map((e, i) => (
                          <option value={e} key={i}>
                            {e.value}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select id="roles" name="Languages">
                    <option value="">Languages</option>
                    {languages?.length > 0
                      ? languages.map((e, i) => (
                          <option value={e.language_name} key={i}>
                            {e.language_name}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <div className="age">
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="From Age"
                      />
                    </div>
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To Age"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <div className="age">
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="From Height"
                      />
                    </div>
                    <div className="fromfield">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="To Height"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select
                    id="roles"
                    onChange={(e) => setStateId(e.target.value)}
                    name="country-state"
                  >
                    <option value="">Select State</option>
                    {states?.length > 0
                      ? states.map((e, i) => (
                          <option value={e.id} key={i}>
                            {e.state_name}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select id="roles" name="city">
                    <option value="">City</option>
                    {cities?.length > 0
                      ? cities.map((e, i) => (
                          <option value={e.id} key={i}>
                            {e.city_name}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
              </div>
            </div>
            <div className="filters-fields">
              <div className="row">
                <div className="col-md-12">
                  <select id="roles" name="role">
                    <option value="">Skills</option>
                    {skills_list?.length > 0
                      ? skills_list.map((e, i) => (
                          <option value={e} key={i}>
                            {e.value}
                          </option>
                        ))
                      : ""}
                  </select>
                </div>
              </div>
            </div>
            <div className="filter-submit">
              <button type="submit" className="btn ">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
