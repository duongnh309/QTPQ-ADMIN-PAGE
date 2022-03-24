import React from "react";
import { NavLink } from "react-router-dom";
import Hero from "../../../../../components/headers/Hero";
import "./style.css";
import { useHistory } from "react-router";
const CommunityPage = (props) => {
  const history = useHistory();
  const defaultProduct = [
    {
      category: "Jacket",
      createDate: null,
      description:
        "Phù hợp với mọi loại phối, tích hợp với nhiều phong cách mặc",
      id: 54,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/storeimg-c0ebd.appspot.com/o/images%2F81f8PUeVNaL._SR476%2C476_.jpg?alt=media&token=0fe528df-a9f0-466d-bac9-f5f7189157d",
      maker: "Harris",
      minQuantity: 10,
      name: "Áo khoác Harris từ 1960s",
      price: 500,
      quantity: 30,
    },
    {
      category: "Giầy",
      createDate: null,
      description:
        "Phù hợp với mọi loại phối, sản phẩm đặc biệt đến từ tương hiệu Spectator",
      id: 55,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/storeimg-c0ebd.appspot.com/o/images%2FDSC_1014_2000x.jpeg?alt=media&token=dd9f4575-13df-4cdb-93df-0729bbb3dacb",
      maker: "SPECTATOR",
      minQuantity: 100,
      name: "SPECTATOR - BROWN + WHITE - LOUVRE",
      price: 450,
      quantity: 100,
    },
    {
      category: "Quần",
      createDate: null,
      description:
        "Sản phẩm mang tính thương hiệu của thương hiệu Donegal Tweed từ Anh Quốc",
      id: 56,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/storeimg-c0ebd.appspot.com/o/images%2Ftorre-taupe-donnegal-tweed-trouser.jpg?alt=media&token=2e5002c2-f66b-4f5f-8d66-0c7b5607611e",
      maker: "Donegal Tweed",
      minQuantity: 100,
      name: "Quần Donegal Tweed",
      price: 300,
      quantity: 100,
    },
  ];
  return (
    <>
      <Hero title="Gentlement stylez" />
      <div className="about-box-main">
        <div className="container">
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
                      history.replace("/gentlement/knowledge");
                    }}
                  >
                    Kiến thức căn bản
                  </button>
                </div>
                <div className="col-lg-2">
                  <button
                    className="btn hvr-hover"
                    onClick={() => {
                      history.replace("/gentlement/style");
                    }}
                  >
                    Tư vấn Gentlements
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="service-block-inner">
            <h3>Cộng đồng gentlements</h3>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h2 className="noo-sh-title">Satorial Nghệ </h2>
              <p>
                Trời thu miền núi Bắc Mỹ se se lạnh, trời âm u, mình chọn lên
                vài lớp quần áo màu chìm: - len thô (tweed): áo khoác Harris
                tweed từ 1960s, quần donegal tweed - tạo tương phản = chiếc
                sweater đan cable len shetland. - kèm đôi giày spectators pha da
                nâu trơn và cát lộn. 1 điều rất khó tìm hiện tại là áo len ngắn
                (chiều dài classic) để tạo hiệu ứng chân dài. Phần lớn áo len
                các loại mới hiện tại khá dài và làm rất mất cân đối cơ thể bởi
                vì cạp quần hiện tại cắt khá thấp, áo len về lý thuyết phải che
                cạp quần để khỏi lộ lưng/underwear - nên tự động trông bạn mất
                hẳn 7 - 10cm chiều dài chân.
              </p>
              <p>
                Bên cạnh đó, tìm được áo len vintage điều kiện còn tốt và rẻ,
                hoặc mới và vừa túi tiền lại là 1 hành trình khá gian nan. thế
                nên...in vintage we trust!
              </p>
            </div>
            <div className="col-lg-6">
              <div className="banner-frame">
                {" "}
                <img
                  className="img-thumbnail img-fluid"
                  src="/images/satorialNghe.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="service-block-inner">
            <h1>Các sản phẩm liên quan</h1>
          </div>
          <div className="row my-5">
            <div className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade show active"
                id="grid-view"
              >
                <ul className="row">
                  {defaultProduct.map((product) => (
                    <li
                      className="col-sm-6 col-md-6 col-lg-4 col-xl-4"
                      key={product.id}
                    >
                      <div className="products-single fix">
                        <div className="box-img-hover">
                          <div className="type-lb">
                            <p className="sale">Sale</p>
                          </div>
                          <img
                            src={product.imgURL}
                            className="img-fluid"
                            alt="This a pic"
                          />

                          <div className="mask-icon">
                            <ul>
                              <li>
                                {" "}
                                <NavLink
                                  to={`/products/detail?id=${product.id}`}
                                >
                                  <i className="fas fa-eye" />
                                </NavLink>
                              </li>
                            </ul>
                            <button
                              className="cart"
                              onClick={() => {
                                // HandleAddToCart(product);
                              }}
                            >
                              Thêm vào giỏ hàng
                            </button>
                          </div>
                        </div>
                        <div className="why-text">
                          <h4>{product.name}</h4>
                          <h5> ${product.price} </h5>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="service-block-inner">
            <h1>Các bài viết liên quan</h1>
          </div>
          <div className="row my-4">
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-1.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3>WORSTED WOOL & WOOLEN WOOL</h3>
                    Khi tìm hiểu về may đo, các bạn có thể sẽ đọc được hoặc nghe
                    được những từ ngữ khá chuyên ngành kiểu như Worsted Wool hay
                    Woolen Wool. Trên thực tế đây không phải tên gọi các chất
                    liệu vải (chất liệu thì chúng đều là wool cả), mà đây là
                    những từ dùng để chỉ những loại SỢI wool khác nhau.
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-2.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Kristiana</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3>Peaky Blinder (Bóng ma anh quốc)</h3>. ÁO KHOÁC TOPCOAT
                    VỪA VẶN Áo Topcoat luôn là một item cổ điển không thể thiếu
                    cho các đấng mày râu vào thế kỷ 19. Nhất là những nơi có độ
                    ẩm cao và thời tiết khắc nghiệt như Birmingham, nước Anh.
                    Chúng thường được làm bằng vải tuýt (tweed), mang sắc xám
                    hoặc đen và có độ dài chuẩn đủ quanh bắp chân
                  </p>
                </div>
                <hr className="my-0" />{" "}
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-3.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Steve Thomas</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
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
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-4.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>{" "}
                    <span className="post">Web Developer</span>{" "}
                  </div>
                </div>
                <div className="team-description">
                  <p>
                    <h3> Slimz man</h3>
                    1.2 Slim fit Kiểu dáng ôm người vừa phải, những chiếc áo
                    khoác eo nhỏ vừa đủ để tạo dáng không tạo vệt hằn ở cúc khi
                    mặc. Thiết kế nách cao và vai độn nhẹ cho một phong thái
                    hiện đại, đi cùng những chiếc quần mỏng, nhưng không ôm bó
                    sát như skinny. Chúng thường xuất hiện trong những thước
                    phim của Kingsman
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

CommunityPage.propTypes = {};

export default CommunityPage;
