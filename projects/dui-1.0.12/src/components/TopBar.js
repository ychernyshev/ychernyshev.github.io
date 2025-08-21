export const TopBar = {
    mount(params = {}) {
        const container = document.getElementById("navbarBlur");

        if (!container) {
            console.warn("[TopBar] Container #navbarBlur not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                  <ol
                          class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5"
                  >
                    <li class="breadcrumb-item text-sm">
                      <a class="opacity-5 text-dark" href="javascript:;">Pages</a>
                    </li>
                    <li
                            class="breadcrumb-item text-sm text-dark active"
                            aria-current="page"
                    >
                      Dashboard
                    </li>
                  </ol>
                  <h6 class="font-weight-bolder mb-0">Dashboard</h6>
                </nav>
                <div
                        class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                        id="navbar"
                >
                  <!--                <div class="ms-md-auto pe-md-3 d-flex align-items-center">-->

                  <!--                </div>-->

                  <div class="container-fluid pe-0">
                    <button
                            class="navbar-toggler shadow-none ms-2"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navigation"
                            aria-controls="navigation"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon mt-2">
                          <span class="navbar-toggler-bar bar1"></span>
                          <span class="navbar-toggler-bar bar2"></span>
                          <span class="navbar-toggler-bar bar3"></span>
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navigation">
                      <!-- <ul class="navbar-nav mx-auto ms-xl-auto me-xl-7">
                        <li class="nav-item">
                          <a class="nav-link me-2" href="../pages/profile.html">
                            <i class="fa fa-user opacity-6 text-dark me-1"></i>
                            Receipts
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link me-2" href="../pages/forms/form8.html">
                            <i
                              class="fas fa-user-circle opacity-6 text-dark me-1"
                            ></i>
                            Form 8
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link me-2" href="../pages/forms/form22a.html">
                            <i class="fas fa-key opacity-6 text-dark me-1"></i>
                            Form 22a
                          </a>
                        </li>
                      </ul> -->
                      <li
                              class="nav-item d-flex align-items-center mx-auto ms-xl-auto me-xl-2"
                      >
                        <a
                                class="btn btn-round btn-sm mb-0 btn-outline-primary me-2"
                                href="../../../pages/account/profile.html"
                        >ychernyshev</a
                        >
                      </li>
                      <ul class="navbar-nav d-lg-block d-none">
                        <li class="nav-item">
                          <a
                                  href="#sign_in"
                                  class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                          >
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-box-arrow-right"
                                    viewBox="0 0 16 16"
                            >
                              <path
                                      fill-rule="evenodd"
                                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                              />
                              <path
                                      fill-rule="evenodd"
                                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                              />
                            </svg>
                            Sign Out
                          </a>
                          <!-- <a
                            href="https://www.creative-tim.com/product/soft-ui-dashboard"
                            class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                              />
                            </svg>
                            Sign In
                          </a> -->
                        </li>
                      </ul>
                    </div>
                  </div>

                  <ul class="ms-md-auto navbar-nav justify-content-end">
                    <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                      <a
                              href="javascript:;"
                              class="nav-link text-body p-0"
                              id="iconNavbarSidenav"
                      >
                        <div class="sidenav-toggler-inner">
                          <i class="sidenav-toggler-line"></i>
                          <i class="sidenav-toggler-line"></i>
                          <i class="sidenav-toggler-line"></i>
                        </div>
                      </a>
                    </li>
                    <li class="nav-item px-3 d-flex align-items-center">
                      <a href="javascript:;" class="nav-link text-body p-0">
                        <i
                                class="fa fa-cog fixed-plugin-button-nav cursor-pointer"
                        ></i>
                      </a>
                    </li>
                    <li class="nav-item dropdown pe-2 d-flex align-items-center">
                      <a
                              href="javascript:;"
                              class="nav-link text-body p-0"
                              id="dropdownMenuButton"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                      >
                        <i class="fa fa-bell cursor-pointer"></i>
                      </a>
                      <ul
                              class="dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4"
                              aria-labelledby="dropdownMenuButton"
                      >
                        <li class="mb-2">
                          <a
                                  class="dropdown-item border-radius-md"
                                  href="javascript:;"
                          >
                            <div class="d-flex py-1">
                              <div class="my-auto">
                                <img
                                        src="./assets/img/team-2.jpg"
                                        class="avatar avatar-sm me-3"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="text-sm font-weight-normal mb-1">
                                  <span class="font-weight-bold">New message</span>
                                  from Laur
                                </h6>
                                <p class="text-xs text-secondary mb-0">
                                  <i class="fa fa-clock me-1"></i>
                                  13 minutes ago
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="mb-2">
                          <a
                                  class="dropdown-item border-radius-md"
                                  href="javascript:;"
                          >
                            <div class="d-flex py-1">
                              <div class="my-auto">
                                <img
                                        src="./assets/img/small-logos/logo-spotify.svg"
                                        class="avatar avatar-sm bg-gradient-dark me-3"
                                />
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="text-sm font-weight-normal mb-1">
                                  <span class="font-weight-bold">New album</span> by
                                  Travis Scott
                                </h6>
                                <p class="text-xs text-secondary mb-0">
                                  <i class="fa fa-clock me-1"></i>
                                  1 day
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                                  class="dropdown-item border-radius-md"
                                  href="javascript:;"
                          >
                            <div class="d-flex py-1">
                              <div
                                      class="avatar avatar-sm bg-gradient-secondary me-3 my-auto"
                              >
                                <svg
                                        width="12px"
                                        height="12px"
                                        viewBox="0 0 43 36"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink"
                                >
                                  <title>credit-card</title>
                                  <g
                                          stroke="none"
                                          stroke-width="1"
                                          fill="none"
                                          fill-rule="evenodd"
                                  >
                                    <g
                                            transform="translate(-2169.000000, -745.000000)"
                                            fill="#FFFFFF"
                                            fill-rule="nonzero"
                                    >
                                      <g
                                              transform="translate(1716.000000, 291.000000)"
                                      >
                                        <g
                                                transform="translate(453.000000, 454.000000)"
                                        >
                                          <path
                                                  class="color-background"
                                                  d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                  opacity="0.593633743"
                                          ></path>
                                          <path
                                                  class="color-background"
                                                  d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                          ></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              <div class="d-flex flex-column justify-content-center">
                                <h6 class="text-sm font-weight-normal mb-1">
                                  Payment successfully completed
                                </h6>
                                <p class="text-xs text-secondary mb-0">
                                  <i class="fa fa-clock me-1"></i>
                                  2 days
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            <!-- End Navbar -->
    `;
    }
};
