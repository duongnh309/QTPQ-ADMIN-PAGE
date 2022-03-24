import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../../../../../components/headers/Hero";

const GentlementPage = (props) => {
  return (
    <>
      <Hero title="Gentlement stylez" />
      <div className="about-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">
                Vì sao lại chọn <span>Gentlement stylez</span>
              </h2>
              <p>
                Có rất nhiều cửa hàng may mặc trên toàn quốc, thậm chí cũng đã
                có những cửa hàng có tiếng như ADAM STORE , thế nhưng GENTLEMAN
                STYLEZ không chỉ là một cửa hàng buôn bán những bộ suit lịch
                lãm, mà còn hơn thế nữa. GENTLEMAN STYLEZ sẽ mang đến cho những
                quý ông một cộng đồng, nơi có thể tìm hiểu về phong cách lịch
                lãm, chia sẽ kiến thức về ăn mặc và cuối cùng là tìm được phong
                cách lịch lãm riêng của bản thân, như một hiệp sĩ các bạn cần 1
                bộ giáp tương xứng và đó là nhiệm vụ của Gentleman Stylez chúng
                tôi.
              </p>
              <p>
                Chúng tôi cũng sẽ cập nhật trang Facebook và Twitter cá nhân với
                nội dung được cập nhật thường xuyên. Thay vào đó, chúng tôi sẽ
                chậm thực hiện các hoạt động quảng bá trên mạng xã hội, tập
                trung vào nội dung hữu ích. Một số trong số đó sẽ bao gồm nội
                dung cộng đồng Gentleman Stylez.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                {" "}
                <img
                  className="img-thumbnail img-fluid"
                  src="images/about-img.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <NavLink to="/gentlement/knowledge">
                  <h3>Kiến thức căn bản</h3>
                </NavLink>
                <p>
                  Là nơi hỗ trợ các newbie có đam mê hoặc mong muốn tìm hiểu
                  thêm về veston thông qua các bài hướng dẫn phối, những kiến
                  thức căn bản nhưng không kém phần thú vị.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <NavLink to="/gentlement/community">
                  <h3>Cộng đồng gentlements</h3>
                </NavLink>
                <p>
                  Đây là nơi tất cả những khách hàng, những người có cùng đam mê
                  về veston có thể chia sẽ kinh nghiệm cũng như tìm hiểu sâu
                  thêm về veston, với những người đứng đầu là các chuyên gia
                  phối veston.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="service-block-inner">
                <NavLink to="/gentlement/style">
                  <h3>Tư vấn gentlements</h3>
                </NavLink>
                <p>
                  Ứng dụng trí tuệ nhân tạo, chúng tôi cung cấp cho khách hàng
                  một chức năng rất độc đáo, giúp cho các gentlement dễ dàng hơn
                  trong việc tìm hiểu và lựa chọn một bộ veston vừa ý.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12">
              <h2 className="noo-sh-title">Khách hàng thân tín</h2>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="images/img-1.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" />{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    Bản thân mình có niềm đam mê rất lớn với loại hình thời
                    trang này, mình luôn sẵn sàng chia sẻ và bàn luận những kiến
                    thức về veston. <br />
                    Cảm ơn Gentlemet stylez đã tạo ra một sân chơi rất thú vị và
                    phù hợp với bản thân cũng như toàn bộ anh em trong nhóm.
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="images/img-2.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Kristiana</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" />{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    Bản thân mình có niềm đam mê rất lớn với loại hình thời
                    trang này, mình luôn sẵn sàng chia sẻ và bàn luận những kiến
                    thức về veston. <br />
                    Cảm ơn Gentlemet stylez đã tạo ra một sân chơi rất thú vị và
                    phù hợp với bản thân cũng như toàn bộ anh em trong nhóm.
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="images/img-3.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" />{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    Bản thân mình có niềm đam mê rất lớn với loại hình thời
                    trang này, mình luôn sẵn sàng chia sẻ và bàn luận những kiến
                    thức về veston. <br />
                    Cảm ơn Gentlemet stylez đã tạo ra một sân chơi rất thú vị và
                    phù hợp với bản thân cũng như toàn bộ anh em trong nhóm.
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="images/img-4.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                  <div className="icon">
                    {" "}
                    <i className="fa fa-plus" aria-hidden="true" />{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    Bản thân mình có niềm đam mê rất lớn với loại hình thời
                    trang này, mình luôn sẵn sàng chia sẻ và bàn luận những kiến
                    thức về veston. <br />
                    Cảm ơn Gentlemet stylez đã tạo ra một sân chơi rất thú vị và
                    phù hợp với bản thân cũng như toàn bộ anh em trong nhóm.
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

GentlementPage.propTypes = {};

export default GentlementPage;
