import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Filter from "../components/Filter";
import ProfileCard from "../components/ProfileCard";
import { LOAD_SEARCH } from "../redux/actions/search";

const SearchPage = () => {
  const Id = useParams();
  console.log(Id)
  const dispatch = useDispatch();
  const { searchInfo, isLoading } = useSelector((state) => state.search);
  useEffect(() => {
    dispatch(LOAD_SEARCH(Id.id));
  }, [Id]);

  return (
    <>
      {isLoading ? (
        <section className="postcard search-candidates">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3">
                <Filter />
              </div>
              <div className="col-md-9">
                <div className="search-profile">
                  <div className="row ">
                    {searchInfo.map((user) => (
                      <ProfileCard key={user.user.id} user={user} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default SearchPage;
