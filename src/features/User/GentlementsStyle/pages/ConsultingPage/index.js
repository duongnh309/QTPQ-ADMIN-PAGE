import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import InputField from "../../../../../components/form-control/InputField";
import Hero from "../../../../../components/headers/Hero";
import SingleChoiceAgeFilter from "../../components/SingleChoiceAgeFilter";
import SingleChoiceColorFilter from "../../components/SingleChoiceColorFilter";
import WeightAndHeight from "../../components/WeightAndHeight";

const ConsultingPage = (props) => {
  const defaultProduct = [
    {
      category: "Jacket",
      createDate: null,
      description:
        "Luôn là một item cổ điển không thể thiếu cho các đấng mày râu vào thế kỷ 19",
      id: 59,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/storeimg-c0ebd.appspot.com/o/images%2F5ed09b53-53f4-432c-9797-11a6d54cf30f_1.843cd9a366a718bee18170caf4b05386.jpeg?alt=media&token=523b1f3b-e38a-431f-bf5c-b2e19828f6d0",
      maker: "ngon",
      minQuantity: 100,
      name: "Top Coat",
      price: 500,
      quantity: 100,
    },
    {
      category: 1,
      createDate: null,
      description:
        "Suit vải tuýt (tweed), chất vải dày và màu xám, xanh hay nâu sẽ là lựa chọn hoàn hảo để gia nhập gia tộc Shelby",
      id: 57,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/storeimg-c0ebd.appspot.com/o/images%2Fs-l1600.jpg?alt=media&token=493c1c66-0879-453a-955d-f0f4c9e3614e",
      maker: "ngon",
      minQuantity: 100,
      name: "Tweed Suit",
      price: 300,
      quantity: 100,
    },
    {
      category: "Áo sơ mi",
      createDate: null,
      description:
        "Phù hợp với mọi loại phối, tích hợp với nhiều phong cách mặc",
      id: 58,
      imgURL:
        "https://firebasestorage.googleapis.com/v0/b/storeimg-c0ebd.appspot.com/o/images%2F319Zx40AhUL.jpg?alt=media&token=2713346c-897c-47db-821d-f653f89a6058",
      maker: "Anh quốc",
      minQuantity: 100,
      name: "Milk White Shirttoty",
      price: 100,
      quantity: 100,
    },
  ];
  const form = useForm();

  // const { register, handleSubmit } = form;
  // const handleSearch = (value) => {
  //   const searchData = value.search;
  //   const searchBy = "Name";
  // };

  const handleFilter = (value) => {
    const priceRange = value.price;
  };
  const history = useHistory();

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
                      history.replace("/gentlement/knowledge");
                    }}
                  >
                    Kiến thức căn bản
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
              <div className="product-categori">
                {/* <div className="search-product">
                  <form onSubmit={handleSubmit(handleSearch)}>
                    <input
                      className="form-control"
                      placeholder="Search here..."
                      type="text"
                      {...register("search")}
                    />
                    <button type="submit">
                      {" "}
                      <i className="fa fa-search" />{" "}
                    </button>
                  </form>
                </div> */}
                <form onSubmit={form.handleSubmit(handleFilter)}>
                  <div className="title-left">
                    <h3>Số tiền bạn có</h3>
                  </div>
                  <InputField name="price" placeholder="Vnd" form={form} />
                  <SingleChoiceAgeFilter form={form} />

                  <WeightAndHeight form={form} />
                  <SingleChoiceColorFilter form={form} />

                  <div className="price-box-slider">
                    <p>
                      <button className="btn hvr-hover" type="submit">
                        Xử lý
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-9">
              <div class="col-lg-12 mid-header">
                <div class="title-all text-center">
                  <h1>Set đồ cho bạn</h1>
                  <h4>Peaky Blinder</h4>
                </div>
              </div>
              <p>
                1. ÁO KHOÁC TOP COAT <br />
                luôn là một item cổ điển không thể thiếu cho các đấng mày râu
                vào thế kỷ 19. Nhất là những nơi có độ ẩm cao và thời tiết khắc
                nghiệt như Birmingham, nước Anh. Chúng thường được làm bằng vải
                tuýt (tweed), mang sắc xám hoặc đen và có độ dài chuẩn đủ quanh
                bắp chân.
              </p>
              <p>
                2. BỘ SUIT TRẦM TÍNH TRANG TRỌNG
                <br /> Suit vải tuýt (tweed), chất vải dày và màu xám, xanh hay
                nâu sẽ là lựa chọn hoàn hảo để gia nhập gia tộc Shelby. Lưu ý
                hãy chọn bộ suit có màu sáng hơn áo khoác ngoài để tăng thêm độ
                hài hoà và trang trọng.
              </p>
              <p>
                3. ÁO SƠ MI CỔ BO TRÒN
                <br /> Có thể dễ dàng nhận thấy cổ áo bo tròn là thương hiệu cho
                nhân vật Tommy Shelby. Những chiếc cổ áo bo tròn này có thể tháo
                rời vào thời điểm lúc bấy giờ, cũng như trở thành một lựa chọn
                phổ biến cho mọi người nhờ tính đa dụng giúp tiết kiệm thời
                gian, tiền bạc và công sức cho người sử dụng.
              </p>

              <p>
                4.MŨ BAKER BOY CỔ ĐIỂN
                <br /> Xuyên suốt bộ phim những chiếc mũ baker boy hay newsboy
                đã thực sự trở thành một phần vũ khí của băng đảng Shelby với
                một chiếc dao cạo được dấu trong vành nón. Đây cũng chính là
                nguồn gốc sâu xa cho cái tên “Peaky Blinder” của series phim
                này.
              </p>
              <div className="col-lg-6">
                <div className="banner-frame">
                  {" "}
                  <img
                    className="img-thumbnail img-fluid"
                    src="/images/img-5.jpg"
                    alt=""
                  />
                </div>
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
            <h1>Các set đồ liên quan</h1>
          </div>
          <div className="row my-4">
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-1.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
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
                    <span className="post">Xem chi tiết</span>{" "}
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
            <div className="col-sm-6 col-lg-3">
              <div className="hover-team">
                <div className="our-team">
                  {" "}
                  <img src="/images/img-4.jpg" alt="" />
                  <div className="team-content">
                    <h3 className="title">Williamson</h3>{" "}
                    <span className="post">Xem chi tiết</span>{" "}
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

ConsultingPage.propTypes = {};

export default ConsultingPage;
