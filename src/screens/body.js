import TBC from '../images/TBC.webp'

export const Body = () =>{
    return (
      <div>
        <div className="row my-4">
          {/* image */}
          <div
            className="col-md-11 centerElement"
            style={{
              backgroundImage: `url(https://source.unsplash.com/1600x900/?nature,water,life,technology)`,
              borderRadius: "15px",
              border: "1px solid black",
            }}
          >
            <img
              style={{ borderRadius: "10%", float: "left", padding: "20px" }}
              width={110}
              height={90}
              src={TBC}
            />
            <span style={{ fontSize: "5vw", margin: "3px", color: "#000000" }}>
              Builders Club
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            {/* About */}
            <h3> About </h3>
            <p>
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc
            </p>
          </div>
          <div className="col-md-6"  style={{
                border: "1px solid black",
               
                borderRadius: "15px",
                backgroundColor: "black",
              }} >
            {/* social links  */}
              <div className="row">
                <div className="col-md-6" style={{
                border: "1px solid black",
                
                borderRadius: "15px",
                backgroundColor: "grey",
              }}  >
                 <i class="fa-brands fa-facebook"></i> Facebook
                </div>
                <div className="col-md-6" style={{
                border: "1px solid black",
                
                borderRadius: "15px",
                backgroundColor: "grey",
              }} >
                <i class="fa-brands fa-twitter"></i> Twitter
                </div>
           
                <div className="col-md-6" style={{
                border: "1px solid black",
                
                borderRadius: "15px",
                backgroundColor: "grey",
              }}  >
                 <i class="fa-brands fa-discord"></i>  Discord
                </div>
                  
                <div className="col-md-6" style={{
                border: "1px solid black",
                
                borderRadius: "15px",
                backgroundColor: "grey",
              }}  >
                 <i class="fa-solid fa-globe"></i>  website
                </div>
              </div>
           
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">{/* founders */}
              <h3>Meet the founders </h3>

              <div  className='row'>
                    <div className='col-md-4'>
                    <img src="http://bw-image.s3.amazonaws.com/s3fs-public/old_img/964979.jpg" />
                    </div>
                    <div className='col-md-4'>
                    <img src="https://cdn.comparably.com/00000000/u/73230/ceo_v1.jpg" />
                    </div>
                    <div className='col-md-4'>
                    <img src="https://www.loyaltymagazine.com/wp-content/uploads/people/people_hoplamazian-hyatt-ceo.jpg" />
                    </div>
              </div>

          </div>
          <div className="col-md-6">
              {/* events */}
              <h3>Events </h3>
          </div>
        </div>
      </div>
    );
}