export default function Footer() {
    return(
        <footer className="bg-white py-5 mt-auto">
        <div className="container px-5">
            <div className="row align-items-center justify-content-around flex-column flex-sm-row">
                <div className="col-auto"><div className="small m-0 fs-6">Made with love by adnan</div></div>
                <div className="col-auto">
                    <a className="small" href="#!">Privacy</a>
                    <span className="mx-1">&middot;</span>
                    <a className="small" href="#!">Terms</a>
                    <span className="mx-1">&middot;</span>
                    <a className="small" href="#!">Contact</a>
                </div>
            </div>
        </div>
    </footer>
    )
}