export default function Footer() {
  return (
    <footer className="bg-white py-5 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-auto">
            <div className="d-flex align-items- small m-0 fs-6">Copyright © MyResume 2024 </div>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center small m-0 fs-6">Designed by  <a href="https://startbootstrap.com/" target="_blank" rel="noopener noreferrer" style={{'fontSize':'20px', 'color':'blue', 'textDecoration':'none'}} className="px-1">startbootstrap</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
