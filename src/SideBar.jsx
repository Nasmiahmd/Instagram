function SideBar() {
  return (
    <>
      <div className="m-3">
        <div className="position-fixed align-items-center d-flex flex-column gap-3">
          <div className="">
            <img
              className="logo-icon me-2"
              src="src\assets\Instagram_logo_icon.png"
              alt="Instagram Logo Icon"
            />
            <img
              className="logo-text"
              src="src\assets\Instagram_logo_text.png"
              alt="Instagram Logo Text"
            />
          </div>
          <div className="d-flex flex-column gap-3 mb-3">
            <div>
              <i className="bi bi-house-door-fill"></i>Home
            </div>
            <div>
              <i className="bi bi-camera-reels-fill"></i>Reels
            </div>
            <div>
              <i className="bi bi-chat-dots-fill"></i>Messages
            </div>
            <div>
              <i className="bi bi-search"></i>Search
            </div>
            <div>
              <i className="bi bi-compass-fill"></i>Explore
            </div>
            <div>
              <i className="bi bi-bell-fill"></i>Notifications
            </div>
            <div>
              <i className="bi bi-bookmark-plus-fill"></i>Create
            </div>
            <div>
              <i className="bi bi-person-circle"></i>Profile
            </div>
          </div>
          <div className="position-fixed bottom-0 d-flex flex-column gap-3">
            <div>
              <i className="bi bi-list"></i>More
            </div>
            <div>
              <i className="bi bi-boxes"></i>Also from Meta
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
