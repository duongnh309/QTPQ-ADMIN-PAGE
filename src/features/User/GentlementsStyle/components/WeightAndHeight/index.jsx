import React from 'react';
import "./style.css"

WeightAndHeight.propTypes = {

};

function WeightAndHeight({ form }) {


    const { register } = form;
    return (
        <div className="height_weight">
            <div className="title-left">
                <h3>Chiều cao và cân nặng của bạn</h3>
            </div>
            <label labelFor="height">Chiều cao</label>
            <div className="pheight">
                <input type="text" name="height" />
            </div>
            <label labelFor="weight">Cân nặng</label>
            <div className="weight">
                <input type="text" name="weight" />
            </div>
        </div>
    );
}

export default WeightAndHeight;