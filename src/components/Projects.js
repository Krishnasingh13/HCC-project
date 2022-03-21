import React from "react";
import { useSelector } from "react-redux";

const Projects = () => {
  const { projectsInfo} = useSelector((state) => state.profile);

  return (
    <div>
      <div className=" profile-gallery profile-details">
        <div className="candiate-about">
          <div className="candidate-info">
            <div className="submitbutton">
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#projectpopup"
              >
                Add Project
              </button>
            </div>
            <table className="table">
              {projectsInfo?.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Title</th>
                      <th scope="col">Type</th>
                      <th scope="col">Role</th>
                      <th scope="col">Link</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {projectsInfo.map((e, i) => (
                    <div>
                      <tbody key={i}>
                        <tr>
                          <th>{i + 1}</th>
                          <td>{e.project_title}</td>
                          <td>{e.project_type}</td>
                          <td>{e.role}</td>
                          <td>
                            <button
                              type="button"
                              className="btn "
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              {e.url}
                            </button>
                            <div
                              className="modal fade tablevideo"
                              id="staticBackdrop"
                              data-bs-backdrop="static"
                              data-bs-keyboard="false"
                              aria-labelledby="staticBackdropLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <iframe
                                      width="560"
                                      height="315"
                                      src="https://www.youtube.com/embed/nyg5Lpl6AiM"
                                      title="YouTube video player"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="btn-group dropup">
                              <button
                                type="button"
                                className="btn dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="bi bi-three-dots"></i>
                              </button>
                              <ul className="dropdown-menu">
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Edit
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </div>
                  ))}
                </table>
              ) : (
                <div className="col-md-5"></div>
              )}
              <div
                className="modal fade projectheadpopup"
                id="projectpopup"
                aria-labelledby="projectpopupLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog bg-white">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Project Name"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Role"
                          />
                        </div>
                        <div className="mb-3">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn dropdown-toggle "
                              data-bs-toggle="dropdown"
                              data-bs-display="static"
                              aria-expanded="false"
                            >
                              Type
                            </button>
                            <ul className="dropdown-menu dropdown-menu-lg-end">
                              <li>
                                <button className="dropdown-item" type="button">
                                  Serial
                                </button>
                              </li>
                              <li>
                                <button className="dropdown-item" type="button">
                                  OTT
                                </button>
                              </li>
                              <li>
                                <button className="dropdown-item" type="button">
                                  Movies
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Link"
                          />
                        </div>
                        <div className="submitbutton">
                          <button type="submit" className="btn ">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
