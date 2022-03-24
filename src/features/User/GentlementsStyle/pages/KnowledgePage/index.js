import React from "react";
import { useHistory } from "react-router";
import Hero from "../../../../../components/headers/Hero";
import "./style.css";

const KnowledgePage = (props) => {
  const history = useHistory();
  return (
    <>
      <Hero title="Gentlement stylez" />
      <div className="about-box-main">
        <div className="container">
          <div className="row sub_nav">
            <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 shop-content-right">
              {/* product-item-filter */}
              <div className="row sub_nav">
                <div className="col-xl-12 col-lg-12 col-sm-12 col-xs-12 shop-content-right">
                  {/* product-item-filter */}
                  <div className="product-item-filter row ">
                    <div className="col-lg-2">
                      <button
                        className="btn hvr-hover"
                        onClick={() => {
                          history.replace("/gentlement");
                        }}
                      >
                        Quay lại Gentlements
                      </button>
                    </div>
                    <div className="col-lg-2">
                      <button
                        className="btn hvr-hover"
                        onClick={() => {
                          history.replace("/gentlement/community");
                        }}
                      >
                        Cộng đồng gentlements
                      </button>
                    </div>
                    <div className="col-lg-2">
                      <button
                        className="btn hvr-hover"
                        onClick={() => {
                          history.replace("/gentlement/style");
                        }}
                      >
                        Tư vấn phong cách
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-block-inner">
            <h3>Kiến thức căn bản</h3>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="noo-sh-title">
                Những quy tắc của phong cách casual cho nam giới
              </h3>
              <p>
                Để có được sự thu hút khi diện một bộ suit là điều không hề khó
                đối với nam giới nhưng với phong cách casual thì không hẳn. Với
                suit bạn chỉ cần tìm được một thợ may giỏi, chịu chi một số tiền
                vừa là bạn có thể yên tâm nghỉ ngơi và giao lại toàn bộ công
                việc cho thợ may từ khâu làm sao cho quần áo vừa người, sửa chi
                tiết thừa thiếu, loại vải nào hợp với bạn,…. Đặc trưng vốn có
                của suit đã tôn dáng lên rất nhiều lần rồi nên bạn không cần suy
                nghĩ quá nhiều. Một ngày nào đó bạn muốn đổi mới sang phong cách
                casual thì những điều trên lại ngược lại hoàn toàn. Phong cách
                casual là nền tảng của các các loại phong cách smart casual,
                business casual và thậm chí một vài cái tên bạn chả bao giờ nghe
                đến như sporty casual, dressy casual, active casual,…. Vậy nên
                làm chủ được phong cách casual là bạn gần như có thể tùy biến
                mọi loại phong cách khác nhau.
              </p>
              <p>
                Quần jeans và áo phông là phong cách căn bản nhất nhưng cũng
                đồng nghĩa với việc nhàm chán nếu sử dụng quá nhiều. Bên cạnh
                jeans và áo phông còn rất nhiều loại khác có thể giúp bạn tự tin
                mà vẫn thoải mái như sơ mi, quần kaki, áo polo, áo khoác da,….
                Với chừng đó món đồ cộng thêm giầy nữa bạn có thể thoải mái sáng
                tạo và biến thể thành một nhận diện thương hiệu riêng của mình
                về phong cách casual.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                {" "}
                <img
                  className="img-thumbnail img-fluid"
                  src="/images/img-magazine-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="col-lg-12 mid-header">
            <div class="title-all text-center">
              <h1>Phong Cách Sống</h1>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-8 col-lg-4">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-magazine-2.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> KingsMan</h3>
                    “Manners maketh man” Tạm dịch: Phong thái làm nên người đàn
                    ông thực thụ 1.1 Suit 2 hàng cúc Double Breasted Suit Đây là
                    kiểu áo được cả hai nhân vật chính đều ưa chuộng và xuất
                    hiện trong nhiều cảnh của phim. Những kiểu áo này ít phổ
                    biến hơn áo ngực đơn, nhưng lại mang đến cảm giác uy quyền
                    hơn cho người đàn ông .
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-8 col-lg-4">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-magazine-3.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> KingsMan</h3>
                    “Manners maketh man” Tạm dịch: Phong thái làm nên người đàn
                    ông thực thụ 1.1 Suit 2 hàng cúc Double Breasted Suit Đây là
                    kiểu áo được cả hai nhân vật chính đều ưa chuộng và xuất
                    hiện trong nhiều cảnh của phim. Những kiểu áo này ít phổ
                    biến hơn áo ngực đơn, nhưng lại mang đến cảm giác uy quyền
                    hơn cho người đàn ông .
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-8 col-lg-4">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-magazine-4.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> KingsMan</h3>
                    “Manners maketh man” Tạm dịch: Phong thái làm nên người đàn
                    ông thực thụ 1.1 Suit 2 hàng cúc Double Breasted Suit Đây là
                    kiểu áo được cả hai nhân vật chính đều ưa chuộng và xuất
                    hiện trong nhiều cảnh của phim. Những kiểu áo này ít phổ
                    biến hơn áo ngực đơn, nhưng lại mang đến cảm giác uy quyền
                    hơn cho người đàn ông .
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
          </div>

          <div class="col-lg-12 mid-header">
            <div class="title-all text-center">
              <h1>Mặc Sao Cho Chuẩn</h1>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-sm-8 col-lg-4">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-magazine-5.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> KingsMan</h3>
                    “Manners maketh man” Tạm dịch: Phong thái làm nên người đàn
                    ông thực thụ 1.1 Suit 2 hàng cúc Double Breasted Suit Đây là
                    kiểu áo được cả hai nhân vật chính đều ưa chuộng và xuất
                    hiện trong nhiều cảnh của phim. Những kiểu áo này ít phổ
                    biến hơn áo ngực đơn, nhưng lại mang đến cảm giác uy quyền
                    hơn cho người đàn ông .
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-8 col-lg-4">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-magazine-6.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> KingsMan</h3>
                    “Manners maketh man” Tạm dịch: Phong thái làm nên người đàn
                    ông thực thụ 1.1 Suit 2 hàng cúc Double Breasted Suit Đây là
                    kiểu áo được cả hai nhân vật chính đều ưa chuộng và xuất
                    hiện trong nhiều cảnh của phim. Những kiểu áo này ít phổ
                    biến hơn áo ngực đơn, nhưng lại mang đến cảm giác uy quyền
                    hơn cho người đàn ông .
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-8 col-lg-4">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-magazine-7.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> KingsMan</h3>
                    “Manners maketh man” Tạm dịch: Phong thái làm nên người đàn
                    ông thực thụ 1.1 Suit 2 hàng cúc Double Breasted Suit Đây là
                    kiểu áo được cả hai nhân vật chính đều ưa chuộng và xuất
                    hiện trong nhiều cảnh của phim. Những kiểu áo này ít phổ
                    biến hơn áo ngực đơn, nhưng lại mang đến cảm giác uy quyền
                    hơn cho người đàn ông .
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

KnowledgePage.propTypes = {};

export default KnowledgePage;
