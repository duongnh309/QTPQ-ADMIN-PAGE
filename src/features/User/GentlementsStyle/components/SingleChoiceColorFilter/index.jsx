import React from 'react';

SingleChoiceColorFilter.propTypes = {

};

function SingleChoiceColorFilter({ form }) {


    const { register } = form;
    return (
        <div className="filter-brand-left">
            <div className="title-left">
                <h3>Màu sắc mà bạn ưa thích</h3>
            </div>
            <select {...register("color")}>
                <option value="Black">Đen</option>
                <option value="White">Trắng</option>
                <option value="Yellow">Vàng</option>
                <option value="Blue">Xanh dương</option>

                <option value="Green">Xanh lá</option>

                <option value="Brown">Nâu</option>
                {/* <li>
                            <div className="radio radio-danger">
                                <input {...register("color")} id="Radios5" value="default" type="radio" />
                                <label htmlFor="Radios6">  Default </label>
                            </div>
                            <div className="radio radio-danger">
                                <option value="Black">Đen</option>
                            </div>
                        </li> */}
            </select>
        </div>
    );
}

export default SingleChoiceColorFilter;