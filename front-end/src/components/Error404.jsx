import "./styles/error404.css";

const Error404 = () => {
  return (
    <section className="page_404">
      <div className="container-404">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">404</h1>
              </div>
              <div className="contant_box_404">
                <p>Something went wrong, we are trying to fetch the data...</p>
                <h3 className="h2">Sorry! No data available!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
