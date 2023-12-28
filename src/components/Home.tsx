import { useEffect } from "react";

const Home = () => {

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/getUserData").then((response) => {
  //     response.json();
  //   }).then((data) => console.log(data));
  // },[])
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>              
            </div>
          </div>
          {/* /.container-fluid */}
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div
                      id="example1_wrapper"
                      className="dataTables_wrapper dt-bootstrap4"
                    >
                      <div className="row">
                        <div
                          className="col-sm-12 col-md-12"
                          style={{ textAlign: "end" }}
                        >
                          <div
                            id="example1_filter"
                            className="dataTables_filter"
                          >
                            <label>
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder="search"
                                aria-controls="example1"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="example1"
                            className="table table-bordered table-striped dataTable dtr-inline"
                            aria-describedby="example1_info"
                          >
                            <thead>
                              <tr>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Submission Date
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Full Name
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Phone #
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Email Address
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Video
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Panel Thoughts
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Panel Amount
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Tommy's Decision
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Tommy Amount
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex={0}
                                  aria-controls="example1"
                                  rowSpan={1}
                                  colSpan={1}                                  
                                >
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="odd">
                                <td
                                  className="dtr-control sorting_1"
                                  tabIndex={0}
                                >
                                  Gecko
                                </td>
                                <td>Firefox 1.0</td>
                                <td>Win 98+ / OSX.2+</td>
                                <td>1.7</td>
                                <td>A</td>
                                <td>A</td>
                                <td>A</td>
                                <td>A</td>
                                <td>A</td>
                                <td>A</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          className="dataTables_info"
                          id="example1_info"
                          role="status"
                          aria-live="polite"
                        >
                          Showing 1 to 10 of 57 entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="example1_paginate"
                        >
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="example1_previous"
                            >
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={0}
                                tabIndex={0}
                                className="page-link"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={1}
                                tabIndex={0}
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={2}
                                tabIndex={0}
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={3}
                                tabIndex={0}
                                className="page-link"
                              >
                                3
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={4}
                                tabIndex={0}
                                className="page-link"
                              >
                                4
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={5}
                                tabIndex={0}
                                className="page-link"
                              >
                                5
                              </a>
                            </li>
                            <li className="paginate_button page-item ">
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={6}
                                tabIndex={0}
                                className="page-link"
                              >
                                6
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next"
                              id="example1_next"
                            >
                              <a
                                href="#"
                                aria-controls="example1"
                                data-dt-idx={7}
                                tabIndex={0}
                                className="page-link"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
      </div>
      {/* /.content-wrapper */}
    </div>
  );
};

export default Home;
